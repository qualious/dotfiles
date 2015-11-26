// LICENSE_CODE ZON
'use strict'; /*jslint browser:true, es5:true*//*global module*/
var chrome = require('chrome');
var Ci = chrome.Ci;
var Cc = chrome.Cc;
var Cu = chrome.Cu;
var process = Cc['@mozilla.org/process/util;1'];
var sdk_self = require('sdk/self');
var unload = require('sdk/system/unload');
var EventTarget = require('sdk/event/target').EventTarget;
var events = require('sdk/event/core');
var emit = events.emit;
var winutil = require('sdk/window/utils');
var system = require('sdk/system');
var storage = require('sdk/simple-storage').storage;
var util = require('./ff_util');
var version_util = require('./version_util');
var zconf = require('./conf').zon_config;
var E = module.exports = new EventTarget();
var fileutil = Cu.import('resource://gre/modules/FileUtils.jsm', {}).FileUtils;
var env = Cc['@mozilla.org/process/environment;1']
.getService(Ci.nsIEnvironment);
var exe, workdir, proc, inited, info, setup;

E.init = function(cb, api){
    if (inited)
        return void cb(null, info);
    info = {};
    info.os = system.platform;
    info.x64 = /(Win|WOW|Linux x86_)64/
        .test(Cc['@mozilla.org/network/protocol;1?name=http']
        .getService(Ci.nsIHttpProtocolHandler).oscpu);
    try {
        var f = fileutil.getDir('LocalAppData',
            ['Hola', +system.env.HOLA_FF ? zconf.PLUGIN_NAME : 'firefox']);
        workdir = f.clone();
        info.workdir = workdir.path;
        f.append('app');
        info.appdir = f.path;
        // XXX colin: when compiled in linux will NOT work in windows because
        // of .exe
        f.append(zconf.PLUGIN_EXE);
        exe = f;
        info.exe_path = exe.path;
        f = workdir.clone();
        f.append('log');
        info.logdir = f.path;
        f = fileutil.getDir('TmpD', []);
        info.tmp_path = f.path;
        update_info();
        inited = true;
    } catch(e){ return void cb(''+e); }
    api.be.plugin.start = function(cb){ E.start(cb); };
    api.be.plugin.stop = function(cb){ E.stop(cb); };
    api.be.plugin.get_info = function(cb){ cb(null, E.get_info()); };
    api.be.plugin.perr = function(opt, cb){
        E.perr(opt);
        cb();
    };
    // XXX colin: change to just pass the function without the wrapper
    api.be.plugin.exec = function(exe, args, cb){
        E.exec(exe, args, cb); };
    api.be.plugin.enabled_state = (function(){
        var t = Ci.nsIPluginTag;
        var states = {enabled: t.STATE_ENABLED, disabled: t.STATE_DISABLED,
            clicktoplay: t.STATE_CLICKTOPLAY};
        return function(mime, state, cb){
            if (!(state in states))
                return void cb('invalid state: '+state);
            var tag, phost;
            try {
                phost = Cc["@mozilla.org/plugin/host;1"]
                .getService(Ci.nsIPluginHost);
                if (!phost.getPluginTagForType)
                    return void cb('unsupported');
                try { tag = phost.getPluginTagForType(mime); } catch(e){}
                if (!tag)
                    return void cb('no plugin for '+mime);
                tag.enabledState = states[state];
                cb();
            } catch(e){ cb(''+e); }
        };
    })();
    cb(null, info);
};

function update_setup(){
    info.setup_version = storage.setup_version;
    info.setup_exe = storage.setup_exe;
    if (info.setup_exe)
    {
        setup = fileutil.File(info.tmp_path);
        setup.append(info.setup_exe);
        info.setup_exec = setup.path;
    }
    if (setup)
    {
        info.setup_exists = setup.exists();
        info.setup_executable = info.setup_exists && setup.isExecutable();
    }
}

function update_info(){
    info.version = storage.svc_version;
    info.exists = exe.exists();
    info.executable = info.exists && exe.isExecutable();
    update_setup();
    return info;
}

function Observer(cb){ this.cb = cb; }
Observer.prototype.observe = function(p, topic){
    if (this.cb)
        return void this.cb(p, topic);
    emit(E, 'event', {stopped: true, ret: p.exitValue});
    proc = null;
    console.log('plugin exited, retval: '+p.exitValue);
};

E.start = function(cb){
    if (proc)
        return void cb('plugin already started');
    try {
        if (!exe.exists() || !exe.isExecutable())
            return void cb('plugin exe not executable');
        console.log('starting plugin '+exe.path);
        proc = process.createInstance(Ci.nsIProcess);
        proc.init(exe);
        var args = ['--no-root', '--workdir', info.workdir];
        if (version_util.version_cmp(info.version, '1.4.677')>=0)
            args.push('--firefox');
        proc.runAsync(args, args.length, new Observer(), false);
    } catch(e){
        proc = null;
        return void cb('proc run failed: '+e);
    }
    cb();
};

E.stop = function(cb){
    cb = cb||function(){};
    var _proc = proc, err;
    proc = null;
    if (!_proc || !_proc.isRunning)
        return void cb('plugin is not running');
    console.log('stopping plugin');
    try { _proc.kill(); }
    catch(e){ console.error(err = 'proc.kill failed: '+e); }
    cb(err);
};

E.get_info = function(){
    return update_info(); };

E.perr = function(opt){
    opt = opt||{};
    try {
        var log = workdir.clone();
        log.append('log');
        log.append('svc.log');
        if (!log.exists())
            return console.error('svc.log doesnt exist');
        var is =  Cc["@mozilla.org/network/file-input-stream;1"]
        .createInstance(Ci.nsIFileInputStream);
        is.init(log, -1, -1, null);
        is.QueryInterface(Ci.nsISeekableStream);
        var sz = log.fileSize, off = Math.max(0, sz-65*1024), tail_sz = sz-off;
        is.seek(Ci.nsISeekableStream.NS_SEEK_SET, off);
        var bs = Cc["@mozilla.org/binaryinputstream;1"]
        .createInstance(Ci.nsIBinaryInputStream);
        bs.setInputStream(is);
        var buf = bs.readByteArray(tail_sz);
        opt.filehead = String.fromCharCode.apply(null, buf);
        util._perr(opt);
        bs.close();
        is.close();
    } catch(e){ console.error('log_tail err: '+e); }
};

E.exec = function(_exe, args, cb){
    try {
        var _proc = process.createInstance(Ci.nsIProcess);
        _proc.init(fileutil.File(_exe));
        _proc.runAsync(args, args.length, new Observer(function(p, topic){
            console.log('run '+topic+' '+_exe+' '+args);
            cb(null, p.exitValue, topic);
        }), false);
    } catch(e){ cb(''+e); }
};

E._stop = E.stop.bind(E, null);
unload.ensure(E, '_stop');
