// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = require('../../util/require_node.js').define(module, '../');
define([], function(){
var E = {};

E.is_active = function(membership){
    return !!membership &&
        !(membership.trial_end && Date.now()>new Date(membership.trial_end)) &&
        !(membership.end && Date.now()>new Date(membership.end));
};

E.is_in_trial = function(membership){
    return E.is_trial(membership) && Date.now()<new Date(membership.trial_end);
};

E.is_trial = function(membership){
    return !!membership && !!membership.trial_end; };

// XXX amir/alexey: had_trial() should remember if the user *ever* had trial,
// not just look at the last membership
E.had_trial = E.is_trial;

E.is_paid = function(membership){
    return !!membership && !!membership.gateway; };

E.is_expired = function(membership){
    var end;
    if (!membership)
        return false;
    end = membership.end||membership.trial_end;
    return !!end && Date.now()>new Date(end);
};

return E; }); }());
