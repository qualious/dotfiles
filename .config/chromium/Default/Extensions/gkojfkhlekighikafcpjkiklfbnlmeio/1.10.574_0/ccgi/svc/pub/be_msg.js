// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['underscore', '/svc/pub/be_backbone.js', '/util/zerr.js'],
    function(_, be_backbone, zerr){
var E = be_backbone.model.extend({
    _defaults: function(){
	this.id = 1;
        this.unique = Math.random();
	this.queue = {};
	this.listeners = {};
        this.connections = {};
        this.tab_connections = {};
	this.on('destroy', function(){ this.uninit(); });
    },
    unique_id: function(){ return this.unique+'_'+(this.id++); },
    init: function(transport, opt){
	if (this.inited)
	    return;
	this.inited = true;
        this.opt = opt||{};
        this.is_popup = this.opt.is_popup;
        this.context = this.opt.context;
	this.transport = transport;
	this._on_msg = this.on_msg.bind(this);
	this.transport.add_listener(this._on_msg);
        if (!this.transport.add_connection_listener)
            return;
	this._on_connection = this.on_connection.bind(this);
        this.transport.add_connection_listener(this._on_connection);
    },
    uninit: function(){
        if (!this.inited)
            return;
        this.transport.remove_listener(this._on_msg);
        if (this._on_connection)
            this.transport.remove_connection_listener(this._on_connection);
        _.each(this.connections, function(port){ port.disconnect(); });
        this.inited = false;
    },
    /* XXX arik: normalize api usage (eg, use opt instead of arguments, review
     * api namin conventions) */
    send: function(msg, cb, ms){
	var j = {id: this.unique_id(), msg: msg, cb: cb};
	this.queue[j.id] = j;
	if (ms)
	{
	    j.timer = setTimeout(function(){
		this.cancel_send(j.id); }.bind(this), ms);
	}
	this.transport.send({type: 'be_msg_req', id: j.id, msg: msg,
            context: this.context});
    },
    resp: function(j, ret){
	this.transport.send({type: 'be_msg_resp', id: j.id, ret: ret,
            _tab_id: j._tab_id, _connection_id: j._connection_id,
            context: j.context});
    },
    cancel_send: function(id){
	var j = this.queue[id];
	if (!j)
	    return;
	j.timer = clearTimeout(j.timer);
	if (j.cb)
	    j.cb({error: 'cancel_send'});
	delete this.queue[id];
    },
    /* XXX arik: rm add_listener/del_listener/send_event/send_backbone_event
     * from be_msg */
    add_listener: function(msg, cb){
	/* XXX arik: avoid using listener id */
	if (cb.__listener_id)
	    throw new Error('listener_id '+cb.__listener_id+' already exists');
	cb.__listener_id = this.unique_id();
	var j = {id: cb.__listener_id, msg: msg, cb: cb};
	this.listeners[j.id] = j;
	this.transport.send({type: 'be_msg_add_listener', id: j.id, msg: msg,
            context: this.context});
    },
    del_listener: function(msg, cb){
	var id = cb.__listener_id;
	if (!id)
	    throw new Error('no listener id');
	delete this.listeners[id];
	delete cb.__listener_id;
	this.transport.send({type: 'be_msg_del_listener', id: id, msg: msg,
            context: this.context});
    },
    send_event: function(j, args){
	this.transport.send({type: 'be_msg_event', id: j.id, args: args,
            _tab_id: j._tab_id, _connection_id: j._connection_id,
            context: j.context});
    },
    send_backbone_event: function(j, info){
	this.transport.send({type: 'be_msg_backbone_event', info: info,
            _tab_id: j._tab_id, _connection_id: j._connection_id,
            context: j.context});
    },
    on_connection: function(port){
        var _this = this, connection_id = port.name;
        var tab_id = port.sender.tab && port.sender.tab.id;
        var is_tpopup = /^(\d+):tpopup:(\d+)$/.test(connection_id);
        // do not handle tpopup connections from the regular popup –
        // it should be handled only in bg page
        if (is_tpopup && this.is_popup)
            return;
        this.add_connection(port, connection_id, tab_id);
        if (this.on_connect)
            this.on_connect(connection_id);
        port.onDisconnect.addListener(function(){
            _this.del_connection(connection_id, tab_id);
	    if (_this.on_disconnect)
                _this.on_disconnect(connection_id);
        });
    },
    on_msg: function(msg){
	var j;
	if (!this.transport.is_valid(msg))
	    return;
	var data = this.transport.get_data(msg);
	if (!data)
	    return;
        if (data.context && this.context &&
            data.context.rmt!==this.context.rmt)
        {
            return;
        }
	switch (data.type)
	{
	case 'be_msg_req':
	    if (!this.on_req)
		return;
	    return this.on_req(data);
	case 'be_msg_resp':
	    j = this.queue[data.id];
	    if (!j)
		return;
	    j.timer = clearTimeout(j.timer);
	    if (j.cb)
		j.cb(data.ret);
	    delete this.queue[data.id];
	    return;
	case 'be_msg_add_listener':
	    if (!this.on_add_listener)
		return;
	    return this.on_add_listener(data);
	case 'be_msg_del_listener':
	    if (this.on_del_listener)
		return;
	    return this.on_del_listener(data);
	case 'be_msg_event':
	    j = this.listeners[data.id];
	    if (!j)
		return;
	    j.cb.apply(null, data.args);
	    return;
	case 'be_msg_backbone_event':
	    if (!this.on_backbone_event)
		return;
	    return this.on_backbone_event(data.info);
        // firefox specific messages emulating chrome.runtime.onConnect()
        // and port.onDisconnect()
        case 'be_msg_connect':
            var _this = this;
            var port = {name: data._connection_id,
                sender: {tab: {id: data._tab_id}},
                disconnect: function(){
                    _this.send({msg: 'call_api', obj: 'firefox',
                        sub: 'workers', func: 'disconnect',
                        args: [data._connection_id]});
                },
            };
            this.add_connection(port, data._connection_id, data._tab_id);
            if (this.on_connect)
                this.on_connect(data._connection_id);
            return;
        case 'be_msg_disconnect':
            this.del_connection(data._connection_id, data._tab_id);
	    if (this.on_disconnect)
                this.on_disconnect(data._connection_id);
            return;
	}
    },
    add_connection: function(port, cid, tid){
        zerr.info('accepted connection '+cid+' from tab '+tid);
        if (!cid)
            return zerr('add_connection without connection_id');
        if (this.connections[cid])
            return zerr('connection '+cid+' already exists');
        this.connections[cid] = port;
        if (!tid)
            return zerr.notice('not a tab connection: '+cid);
        this.tab_connections[tid] = this.tab_connections[tid]||[];
        this.tab_connections[tid].push(cid);
    },
    del_connection: function(cid, tid){
        zerr.info('connection '+cid+' from tab '+tid+' disconnected');
        if (!cid)
            return zerr('del_connection without connection_id');
        if (!this.connections[cid])
            return zerr('no connection with id: '+cid);
        delete this.connections[cid];
        if (!tid)
            return zerr.notice('not a tab connection: '+cid);
        var i;
        if (!this.tab_connections[tid] ||
            (i=this.tab_connections[tid].indexOf(cid))<0)
        {
            return zerr('no connection '+cid+' for tab '+tid);
        }
        this.tab_connections[tid].splice(i, 1);
        if (!this.tab_connections[tid].length)
            delete this.tab_connections[tid];
    },
});

return E; });
