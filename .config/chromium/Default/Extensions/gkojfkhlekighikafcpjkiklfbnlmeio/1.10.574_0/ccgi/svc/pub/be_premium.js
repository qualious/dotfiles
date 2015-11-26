// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
define(['/svc/pub/be_locale.js', 'jquery', '/svc/pub/be_lib.js',
    '/svc/pub/be_backbone.js', '/svc/pub/be_browser.js', '/util/etask.js',
    '/svc/pub/be_tabs.js', '/util/zerr.js', '/util/date.js',
    '/svc/account/membership.js', '/svc/pub/be_ext.js', '/svc/pub/be_mode.js'],
    function(T, $, be_lib, be_backbone, B, etask, be_tabs, zerr, date,
    membership, be_ext, be_mode){
var E = new (be_backbone.task_model.extend({
    _defaults: function(){
	this.on('destroy', function(){
	    B.backbone.server.stop('be_premium');
	    uninit();
	});
	B.backbone.server.start(this, 'be_premium');
    },
}))();
var membership_timeout, _membership;
var premium_link = 'https://hola.org/premium.html?utm_source=holaext'
    +'&ref={{medium}}_';
var promos = [
    {text: 'Get Unlimited Unblocking',
        link: premium_link+'get_unlimited_unblocking'},
    {text: 'Get 24/7 Unblocking', link: premium_link+'get_24_7_unblocking'},
    {text: 'Access more sites', link: premium_link+'access_more_sites'},
    {text: 'Love Hola?', link: premium_link+'love_hola'},
    {text: 'Go Hola Premium', link: premium_link+'go_hola_premium'},
    {text: 'Upgrade', link: premium_link+'upgrade'},
    {text: 'Never be a peer', link: premium_link+'never_be_a_peer'},
    {text: 'Support Hola', link: premium_link+'support_hola'},
    {text: 'Get Premium support', link: premium_link+'get_premium_support'},
    {text: 'Get Hola for Android',
        link: 'https://play.google.com/store/apps/details?'
        +'id=org.hola&referrer=utm_source%3Dbext%26'
        +'utm_medium%3D{{medium}}'},
    {text: 'Invite friends - free Premium.',
        link: 'https://hola.org/referral.html?ref=popup&utm_source=holaext'}
];

E.get_promo = function(medium){
    var promo, template;
    if (membership===undefined || membership.is_active(_membership))
        return {text: ''};
    promo = promos[Math.floor(Math.random()*promos.length)];
    return {text: T(promo.text),
	link: promo.link.replace('{{medium}}', medium)};
};

E.is_active = function(){ return membership.is_active(_membership); };

E.is_paid = function(){ return membership.is_paid(_membership); };

E.refresh_membership = function(opt){
    opt = opt||{};
    return etask({name: 'refresh_membership', cancel: true}, [function(){
        return $.ajax({url: 'https://hola.org/users/payment/get_membership',
            xhrFields: {withCredentials: true}});
    }, function(__membership){
        var old_is_active = E.is_active();
        _membership = __membership;
        if (opt.exp_synced&&
            old_is_active!==E.is_active())
        {
            be_lib.perr(zerr.L.ERR, {id: 'premium_out_of_sync',
                info: {membership: _membership}});
        }
        /* XXX amir: consider sending this information as part of the
         * membmership to save a request */
        return $.ajax({url: 'https://hola.org/users/get_user',
            xhrFields: {withCredentials: true},
            data: {uuid: be_ext.get('uuid'),
            source: 'be_premium',
            cid: be_mode.get('svc.cid')||undefined}});
    }, function(user){
        be_lib.perr(zerr.L.NOTICE, {id: 'membership',
            info: {membership: _membership, user: user.user}});
	if (!user || !user.user || !user.user._id)
	    return;
	be_ext.set('user_id', user.user._id);
    }, function catch$(err){
        be_lib.perr(zerr.L.ERR, {id: 'get_membership_fail', info: err});
        clearTimeout(membership_timeout);
        membership_timeout = setTimeout(function(){
	    E.sp.spawn(E.refresh_membership()); }, Math.random()*date.ms.HOUR);
    }]);
};


E.init = function(){
    E.sp = etask('be_premium', [function(){ return this.wait(); }]);
    E.sp.spawn(E.refresh_membership());
    E.listenTo(be_tabs, 'updated', function(obj){
        if (!obj.info.url)
            return;
        if (obj.info.url.match(/^https:\/\/hola.org\/premium.html/))
        {
            /* When paying using PayPal, the user may complete a purchase
             * without reaching the thank you page, or reach it before the
             * IPN is received and the membership updated */
            _membership = undefined;
            clearTimeout(membership_timeout);
            membership_timeout = setTimeout(function(){
		E.sp.spawn(E.refresh_membership()); }, date.ms.HOUR);
        }
    });
};

function uninit(){
    E.sp.ereturn();
    clearTimeout(membership_timeout);
}

return E; });
