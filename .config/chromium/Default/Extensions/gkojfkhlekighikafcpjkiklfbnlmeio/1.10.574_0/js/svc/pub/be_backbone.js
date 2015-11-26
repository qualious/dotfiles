// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['underscore', 'backbone'], function(_, Backbone){
var chrome = window.chrome, zconf = window.zon_config;
var listener_prefix = 'l'+(window.is_popup ? 'p' : 'b');
var E = {};

/* XXX arik/mark: review, backbone destroy is doing many things and may
 * fail (and also destroy handlers) */
function _destroy(o){
    try { o.destroy(); }
    catch(err){
	try { console.error('error in destroy %s', err.stack||err); }
        catch(_err){}
	throw err;
    }
}

E.model = Backbone.Model.extend({
    defaults: function(){
        /* set _listenerId explicitly because if not set, when popup does
         * listenTo it will set _listnerId with an id unique to the popup which
         * might collide with an id assigned by bg to another obj */
        this._listenerId = _.uniqueId(listener_prefix);
	if (this._defaults) /* XXX arik/mark REVIEW: use initilize */
	    this._defaults.call(this);
	this.on('destroy', function(){
	    this.off();
	    this.stopListening();
	    this.destroyed = true;
	});
    },
    _destroy: function(){ _destroy(this); },
    sync: function(){},
    assert_inited: function(){
	if (!this.get('inited'))
	    throw new Error('not inited');
    },
    on_init: function(events, cb){
	this.on(events, cb);
	cb.call(this); /* XXX arik/mark REVIEW: need better way */
    },
    listen_to: function(other, events, cb){
	this.listenTo(other, events, cb);
	cb.call(this); /* XXX arik/mark REVIEW: need better way */
    },
    fcall: function(a0, a1){ return this[a0].apply(this, a1); },
    ecall: function(a0, a1){ return this[a0].apply(this, a1); },
    /* set changed attributes then trigger change events. an error in one
     * listener doesn't prevent others from being notified */
    safe_set: function(change){
        var diff = this.changedAttributes(change);
        if (!diff)
            return;
        this.set(diff, {silent: true});
        _.each(diff, function(val, key){
            try { this.trigger('change:'+key); }
            catch(e){
		if (this.perr)
	            this.perr({id: 'be_safe_set_err', err: e});
                console.error('error in change listener %s', e.stack||e);
	    }
        }, this);
        try { this.trigger('change'); }
        catch(e){
	    if (this.perr)
		this.perr({id: 'be_safe_set_err', err: e});
	    console.error('error in change listener %s', e.stack||e);
	}
    },
    set_perr: function(func){ this.perr = func; },
});

if (!zconf._RELEASE)
{
    E.model.prototype.on = function(events, cb){
        leak_warn(this, events);
        return Backbone.Model.prototype.on.apply(this, arguments);
    };
    E.model.prototype.listenTo = function(other, events, cb){
        leak_warn(other, events);
        return Backbone.Model.prototype.listenTo.apply(this, arguments);
    };
}

function leak_warn(obj, events){
    if (!obj._events)
        return;
    var es = events.split(/\s+/);
    for (var i=0, l=es.length; i<l; i++)
    {
        var a = obj._events[es[i]];
        if (a && a.length>7)
            console.error('too many event listeners');
    }
}

/* XXX arik: can be simplified/removed once etask supports external signals */
E.task_model = E.model.extend({
    defaults: function(){
	if (this._defaults) /* XXX arik/mark REVIEW: use initilize */
	    this._defaults.call(this);
	this.queue = [];
	this.on('destroy', function(){
            clearTimeout(this.queue_timer);
	    delete this.queue;
	    this.off();
	    this.stopListening();
	    this.destroyed = true;
	});
    },
    assert_inited: function(){
	if (!this.get('inited'))
	    throw new Error('not inited');
	if (!this.queue) /* in/after destroy */
	    throw new Error('in destroy');
    },
    set_busy: function(opt){
	this.assert_inited();
	if (this.get('status')=='error')
	    throw new Error('set_busy in error');
	if (this.get('status')=='ready' || !this.get('status') ||
	    this.in_clr_busy)
	{
	    this.in_clr_busy = false;
	    this.set('status_opt', opt);
	    this.set('status', 'busy');
	    return true;
	}
	return false;
    },
    update_progress: function(opt){ this.set('status_opt', opt); },
    clr_busy: function(){
	this.assert_inited();
	if (this.get('status')=='error')
	    throw new Error('clr_busy in error');
	if (!this.queue.length)
	{
	    this.unset('status_opt');
	    return this.set('status', 'ready');
	}
	this.queue_timer = setTimeout(function(){
	    this.in_clr_busy = true;
	    this.trigger.apply(this, this.queue.shift());
	}.bind(this), 0);
    },
    clr_task: function(task){
	this.assert_inited();
        this.queue = _.filter(this.queue, function(o){
	    return !_.isEqual(o, task); });
    },
    clr_task_by_id: function(id){
	this.assert_inited();
        this.queue = _.filter(this.queue, function(o){ return o[0]!=id; });
    },
    set_err: function(){
	this.assert_inited();
	if (this.get('status')!='busy')
	    throw new Error('set_err but not busy');
	clearTimeout(this.queue_timer);
	this.queue = [];
	this.in_clr_busy = 0;
	this.unset('status_opt');
	return this.set('status', 'error');
    },
    schedule: function(task){
	this.assert_inited();
	if (this.get('status')!='busy')
	    throw new Error('schedule but not busy');
	this.queue.push(task);
    },
    schedule_clr: function(task){
	this.clr_task(task);
	return this.schedule(task);
    },
    recover: function(){
	this.assert_inited();
	if (this.get('status')!='error')
	    throw new Error('recover but not in error');
	this.unset('status_opt');
	this.set('status', '', {silent: true});
	return this.trigger('recover');
    },
});

return E; });
