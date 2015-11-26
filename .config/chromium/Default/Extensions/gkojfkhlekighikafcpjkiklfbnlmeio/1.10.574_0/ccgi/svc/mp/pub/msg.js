// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define([], function code(){
var E = new Msg(), proto = Msg.prototype, chrome = window.chrome;
E.code = code;

function Msg(){}

proto.init_new = function(){ return proto.init.apply(new Msg(), arguments); };

proto.init = function(name, opt){
    opt = opt||{};
    this.name = name;
    this.unique = Math.floor(Math.random()*1000000);
    this.seq = 0;
    this.cbs = {};
    switch (name)
    {
    case 'ext': this.B = opt.B; break;
    case 'web':
        this.tab_id = opt.tab_id;
        /*jshint -W086*/ // fall through
    case 'ifr':
        this.remote = opt.remote;
        this.origin = opt.origin||'*';
        break;
    default: console.error('unknown context '+name);
    }
    return this;
};

proto.unique_id = function(){ return this.unique+'_'+(this.seq++); };

proto.parse = function(msg){
    var id = msg.id ? ''+msg.id : '';
    var m = id.match(/^hola\.(ext|web|ifr)\.(ext|web|ifr)\.(.*)/);
    return m ? {dst: m[1], src: m[2], id: m[3]} : null;
};

proto.dispatch = function(msg){
    var info, ack, cb;
    if (!(ack = msg.ack) || !(info = this.parse(msg)))
        return false;
    if ((cb = this.cbs[ack]))
    {
        delete this.cbs[ack];
        cb.call(null, null, msg, info);
    }
    return true;
};

proto.send = function(dst, msg, opt, cb){
    opt = opt||{};
    this.extend(msg, dst, opt);
    if (cb)
    {
        this.cbs[msg.seq = this.unique_id()] = cb;
        if (opt.timeout)
            setTimeout(this.cancel_send.bind(this, msg), opt.timeout);
    }
    switch (this.name)
    {
    case 'ext': this.B.tabs.send_message(opt.tab_id, msg); break;
    case 'web':
        if (dst=='ext')
            return void send_msg_to_ext(msg);
        /*jshint -W086*/ // fall through
    case 'ifr':
        (opt.remote||this.remote).postMessage(msg,
            opt.origin||this.origin||'*');
        break;
    }
};

proto.cancel_send = function(msg){
    var seq = msg.seq, cb = this.cbs[seq];
    if (!cb)
        return;
    delete this.cbs[seq];
    cb.call(null, 'timeout');
};

proto.extend = function(msg, dst, opt){
    if (!opt.keep_id)
        msg.id = ['hola', dst, this.name, msg.id].join('.');
    if (this.name=='web' && dst=='ext')
    {
        msg._type = 'be_mp';
        msg.tab_id = this.tab_id;
    }
    return msg;
};

var origin = [/^https?:\/\/(.*\.)?(hola\.org|holacdn\.com|h-cdn\.com)$/,
    'app://hola-ui'];
if (window.chrome)
{
    origin.push('chrome-extension://pdehmppfilefbolgganhfihpbmjlgebh');
    origin.push('chrome-extension://plemmnofmhlcckpejimdohkmbbcfcodj');
    origin.push('chrome-extension://pnknnijoleibcpmkdcooclmnjmmdhgbg');
    origin.push('chrome-extension://gkojfkhlekighikafcpjkiklfbnlmeio');
    origin.push('chrome-extension://mhcmfkkjmkcfgelgdpndepmimbmkbpfp');
}
else
{
    // XXX colin: use BEXT_FF_ORIGIN and BEXT_FF_ORIGIN_SIGNED
    origin.push('resource://jid1-4p0kohsjxu1qgg-at-jetpack');
    origin.push('resource://ff_ext-at-hola-dot-org');
}
proto.is_hola_origin = function(msg_origin){
    for (var i = 0; i<origin.length; i++)
    {
        if ((typeof origin[i]=='string' && msg_origin==origin[i]) ||
            (origin[i].test && origin[i].test(msg_origin)))
        {
            return true;
        }
    }
    return false;
};

function send_msg_to_ext(msg){
    try {
        if (chrome)
            return void chrome.extension.sendMessage(msg);
        self.port.emit('req', msg);
    } catch(err){ console.error('send_msg_to_ext failed '+err); }
}

return E; });
