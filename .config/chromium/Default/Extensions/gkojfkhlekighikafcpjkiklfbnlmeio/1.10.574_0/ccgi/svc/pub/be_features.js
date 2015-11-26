// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['/svc/pub/be_browser.js', '/svc/pub/be_util.js',
    '/util/version_util.js', '/util/storage.js'],
    function(B, be_util, version_util, storage){
var E = {};
var zopts = be_util.zopts;

function control_group(uuid){ return uuid.match(/^(fe|ff)/); }

/* XXX amir: fix dependency issues so we won't have to pass be_ext */
E.have = function(be_ext, feature){
    var uuid = be_ext.get('uuid')||'';
    var browser = be_ext.get('browser');
    var test_enabled = storage.get('be_test');
    if (test_enabled && test_enabled===feature)
        return true;
    if (version_util.version_cmp(be_util.version(), '1.1.834')<0)
        return false;
    return E.uuid_check(uuid, feature);
};

E.uuid_check = function(uuid, feature){
    if (!uuid)
        return false;
    switch(feature)
    {
        case 'rule_rating_control': return /ff\b/.test(uuid);
        case 'tpopup2': return B.have.tpopup;
        case 'completely_blocked': return true;
        case 'completely_blocked_rewrite': return true;
        default: return false;
    }
};

return E; });
