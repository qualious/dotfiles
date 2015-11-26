/* Javascript configuration */
'use strict'; /*jslint node:true*//*global define*/
var zon_config = {
"CONFIG_MAKEFLAGS": "DIST=APP RELEASE=y AUTO_SIGN=y CONFIG_BATREQ=y CONFIG_BAT_CYCLE=y",
"ARCH_CPU": "X86",
"BUILDTYPE_DEBUG": false,
"_RELEASE": true,
"_RELEASE_LEVEL": 2,
"ZON_VERSION": "1.10.574",
"ZON_VERSION_1": 1,
"ZON_VERSION_2": 10,
"ZON_VERSION_3": 574,
"ZON_COPYRIGHT_YEAR": "2014",
"SVC_EXE": "hola_svc.exe",
"SVC_EXE_ANDROID": "libhola_svc.so",
"PLUGIN_EXE": "hola_plugin.exe",
"PLUGIN_EXE_X64": "hola_plugin_x64.exe",
"PLUGIN_NAME": "firefox_hola",
"BEXT_CHROME_DLL_ID_REL": "pdehmppfilefbolgganhfihpbmjlgebh",
"BEXT_CHROME_ID_REL": "pnknnijoleibcpmkdcooclmnjmmdhgbg",
"BEXT_CHROME_CWS_ID_REL": "gkojfkhlekighikafcpjkiklfbnlmeio",
"BEXT_CHROME_CWS_PLUGIN_ID": "mhcmfkkjmkcfgelgdpndepmimbmkbpfp",
"BEXT_OPERA_ADDONS_ID_REL": "ekmmelpnmfdegjhnmadddcfjcahpajnm",
"BEXT_FF_ID_REL_SIGNED": "ff_ext@hola.org",
"BEXT_FF_ORIGIN_SIGNED": "resource://ff_ext-at-hola-dot-org",
"BEXT_FF_ID_REL": "jid1-4P0kohSJxU1qGg@jetpack",
"BEXT_FF_ORIGIN": "resource://jid1-4p0kohsjxu1qgg-at-jetpack",
"CONFIG_LOCAL_CCGI_CHROME": true,
"CONFIG_MP_CHROME": false,
"CONFIG_MP_TORCH": false,
"CONFIG_MP_OPERA": true,
"BEXT_PLUGIN": false,
"BEXT": 1
};
if (typeof module=='object'&&module&&module.exports)
    module.exports = zon_config;else if (typeof define=='function') define(zon_config);
