// LICENSE_CODE ZON
'use strict'; /*jshint browser:true*/
define(['jquery', 'underscore', 'backbone', '/util/escape.js',
    '/util/string.js', '/util/user_agent.js', '/svc/pub/be_locale.js'],
    function($, _, Backbone, zescape, string, user_agent, T){
var E = {};
var to_qs = zescape.qs, mailto_url = zescape.mailto_url;
var chrome = window.chrome, conf = window.conf;
var torch = conf ? conf.browser.torch : is_torch();
var torch_url = 'http://bit.ly/HolaTorch';
function is_torch(){
    var some = Array.prototype.some;
    return some && some.call(navigator.plugins,
	function(p){ return p.name=='TorchHelper'; });
}

E.sharer = {
    facebook: 'https://www.facebook.com/dialog/feed?',
    facebook_no_app: 'https://www.facebook.com/sharer.php?',
    twitter: 'https://twitter.com/intent/tweet?',
    pinterest: 'https://pinterest.com/pin/create/button?',
    googleplus: 'https://plus.google.com/share?'
};

/* XXX sergey: duplicated in svc/ccgi.js */
function product_name(better){
    return 'Hola'+(torch ? ' for Torch' : better ? ' Better Internet' : ''); }

function share_text(root, country, link, type){
    var root_site = root||T('cool sites');
    var site = country ? T('$1 from $2', [root_site, country]) : root_site;
    switch (type)
    {
    case 'email': case 'pinterest':
        var email = type==='email';
        var using = email ? T("Hey,\n\nI'm using") : T('Using');
        var from = root_site+' :-)'+(root ? ' '+T('Cool site!') : '');
        var enjoy = email ? '\n\n'+T('Enjoy!') : '';
        return T('$1 Hola to access $2\n\nClick here to do the same: $3\n\n'
            +'It installs Hola, which lets me surf the Internet faster and '
            +'access $4$5', [using, from, link, site, enjoy]);
    case 'facebook': case 'twitter':
        var fb = type==='facebook';
        return T('Accessing $1 with Hola', [site])+' :-)'
            +(root ? ' '+T('Cool site!') : '')+'\n'
            +(fb ? T('Try it')+' -- ' : '')+link;
    }
}

/* must initialize because of product_name() */
E.init_globals = function(root, country_code, link, text){
    link = link||'https://hola.org/access/popular?utm_source=holaext';
    var country = country_code ? T(country_code.toUpperCase()) : '';
    var root_site = root||T('Access cool sites');
    var site = country ? T('$1 from $2', [root_site, country]) : root_site;
    var subject = root ? T('Access $1 - cool site!', [site]) : site;
    var t = typeof text !== 'undefined' ? function(){ return text; } :
        share_text.bind(E, root, country, link);
    E.share = {
	facebook: {
	    app_id: 568040619933060,
	    link: link,
	    picture: 'https://hola.org/img/hola.png',
	    name: subject,
	    caption: link,
	    description: t('facebook'),
	    redirect_uri: 'https://hola.org/facebook_referral.html'
	},
	twitter: {text: t('twitter')},
	pinterest: {
	    url: link,
	    description: t('pinterest'),
	    media: 'https://hola.org/img/hola.png'
	},
	googleplus: {url: link},
	email: {
	    subject: subject,
	    body: t('email')
	}
    };
    if (torch)
    {
        root = root||T('sites that are censored');
        var product = product_name();
	E.share.facebook = {
	    s: 100,
	    'p[url]': torch_url,
	    'p[images][0]': 'https://hola.org/img/torch-logo.jpg',
	    'p[title]': T('Make your Internet better with $1', [product]),
	    'p[summary]': T("I'm using $1 to view $2 in my country,"
                +' and surf faster!', [product, root])
	};
	_.extend(E.share.twitter, {text: T('Check out Hola for $1!',
            ['@TorchBrowser'])+T('I can now access $1 from any country!',
            [root])+' '+torch_url});
	E.share.googleplus.url = torch_url;
	_.extend(E.share.email, {
	    subject: T('Check out Hola for $1!', ['Torch Browser']),
	    body: T('Hi,\n\nI started using $1 ($2). It lets me surf '
                +'the Internet faster and access $3 in my country.',
                [product, torch_url, root])+'\n\n'+T('Enjoy!')
	});
    }
};

E.SocialSharing = Backbone.View.extend({
    className: 'social-sharing',
    initialize: function(options){
	var root_url = options.root_url||'Hola';
	var links_data = [{
	    title: 'Facebook', 'class': 'fb',
	    href: (torch ? E.sharer.facebook_no_app :
		E.sharer.facebook)+to_qs(E.share.facebook)
	}, {
	    title: 'Twitter', 'class': 'tw',
	    href: E.sharer.twitter+to_qs(E.share.twitter)
	}, {
	    title: 'Pinterest', 'class': 'pinit', no_torch: true,
	    href: E.sharer.pinterest+to_qs(E.share.pinterest)
	}, {
	    title: 'Google+', 'class': 'ggl',
	    href: E.sharer.googleplus+to_qs(E.share.googleplus)
	}, {
	    title: 'Email', 'class': 'mailto', via: true,
	    href: mailto_url(E.share.email)
	}];
	var links = [];
	for (var i=0; i<links_data.length; i++)
	{
	    var link = links_data[i];
	    if (torch&&link.no_torch)
	    	continue;
	    var title = link.via ? 'Share $1 via $2' : 'Share $1 on $2';
	    links.push(this.create_link({
		title: T(title, [root_url, link.title]),
		'class': 'app_btn '+link['class'], href: link.href
	    }));
	}
        this.opt = options;
	this.$el.append(links);
	if (options && options.footer)
	    this.$el.addClass('footer');
	if (user_agent.guess_browser().hola_android)
	{
	    this.$el.children('[data-toggle]').removeAttr('title');
	    this.$el.wrapInner($('<a>',
		{href: 'http://client.hola.org/android_share_hola'}));
	}
	else if (!options || options.tooltip)
	    this.$el.children('[data-toggle]').tooltip();
        $('body').off('click.social_footer')
        .on('click.social_footer', 'a.app_btn', this.click.bind(this));
    },
    create_link: function(params){
	_.extend(params, {'data-toggle': 'tooltip', 'data-placement': 'top'});
	return $(user_agent.guess_browser().android ? '<span>' : '<a>', params);
    },
    click: function(event){
	var link = $(event.target).attr('href');
	var title = $(event.target).attr('title');
        /* XXX amir: add share method in perr */
        if (this.opt && this.opt.perr)
            this.opt.perr('share', title);
	if (!string.startsWith(link, 'mailto:'))
	{
	    window.open(link, '_blank', 'height=500,width=1000');
	    event.preventDefault();
	}
	else if (this.opt && this.opt.mailto_frame)
	{
	    /* XXX bahaa/mark REVIEW: mailto links don't work in chrome popup
             * so as a workaround we use a hidden iframe */
	    this.$el.append($('<iframe>', {id: 'mailto_frame', src: link,
	        style: 'display: none'}));
	    event.preventDefault();
	}
    }
});

E.QuickShare = Backbone.View.extend({
    className: 'quick-share',
    initialize: function(options){
	var $facebook = $('<a href=? class=quick-fb-share></a>')
	.click(function(event){
	    window.open(E.sharer.facebook_no_app
		+to_qs(E.QuickShare.msg_facebook),
		'_blank', 'height=500,width=1000');
	    return false;
	});
	var $twitter = $('<a href=? class=quick-tweet></a>')
	.click(function(event){
	    window.open(E.sharer.twitter+to_qs(E.QuickShare.msg_twitter),
		'_blank', 'height=500,width=1000');
	    return false;
	});
	this.$el.append($facebook, $twitter);
    }
}, {
    msg_twitter: {text: T('I just accessed a censored site using Hola for $1!',
        ['@TorchBrowser'])+T('Try it')+': '+torch_url},
    msg_facebook: {
	s: 100,
	'p[url]': torch_url,
	'p[images][0]': 'https://hola.org/img/torch-logo.jpg',
	'p[title]': T('I just accessed a censored site using Hola for $1!',
            ['Torch Browser!']),
	'p[summary]': T('Get access to censored sites, try it now: $1', [
            torch_url])
    }
});

return E; });
