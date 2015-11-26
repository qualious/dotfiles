// LICENSE_CODE ZON
// XXX arik/bahaa BACKWARD: < 1.2.672, don't rm this file. extensions
// do pre_load of js files using require. extensions < 1.2.672 also pre
// requested be_auto_rule.js and failure to get the file will send perr
// (very old extension even used to reload the extension).
// todo
// - don't preload js files using require (but make sure we ask for the files
// using the same query string used by require - otherwise no caching)
// - rm this file once we don't support extensions < 1.2.672
define([], function(){});
