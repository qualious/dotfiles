// LICENSE_CODE ZON
'use strict'; /*jslint browser:true*/
define(['/util/escape.js', '/util/sprintf.js'], function(zescape, sprintf){
var fmt = sprintf.vsprintf;
var E = {}, some = Array.prototype.some;
var is_torch = some && some.call(navigator.plugins,
    function(p){ return p.name=='TorchHelper'; });
function make_link(obj, type, args){
    var provider = type, params, url_fn;
    switch (type)
    {
    case 'facebook':
	if (is_torch)
	{
	    params = {
		s: 100,
		'p[url]': E.params.site,
		'p[images][0]': E.params.picture,
		'p[title]': fmt(args.name, E.params_argv),
		'p[summary]': fmt(args.text, E.params_argv)
	    };
	}
	else
	{
	    provider += '_app';
	    params = {
		app_id: E.params.facebook_app_id,
		link: E.params.site,
		picture: E.params.picture,
		name: fmt(args.name, E.params_argv),
		caption: E.params.site,
		description: fmt(args.text, E.params_argv),
		redirect_uri: E.params.facebook_redir_uri
	    };
	}
	break;
    case 'googleplus':
	params = {url: E.params.site}; break;
    case 'twitter':
	params = {text: fmt(args.text, E.params_argv)}; break;
    case 'pinterest':
	params = {
	    url: E.params.site,
	    description: fmt(args.text, E.params_argv),
	    media: E.params.picture
	};
	break;
    case 'email':
	params = {
	    subject: fmt(args.name, E.params_argv),
	    body: fmt(args.text, E.params_argv)
	};
        url_fn = function(){ return zescape.mailto_url(params); };
	break;
    default:
	throw new Error('make_link: unknown link type: '+type);
    }
    obj[type] = url_fn ||
        function(){ return zescape.uri(E.endpoint[provider], params); };
}
E.endpoint = {
    facebook: 'https://www.facebook.com/sharer.php',
    facebook_app: 'https://www.facebook.com/dialog/feed',
    googleplus: 'https://plus.google.com/share',
    twitter: 'https://twitter.com/intent/tweet',
    pinterest: 'https://pinterest.com/pin/create/button'
};
E.params = {
    facebook_app_id: 568040619933060,
    facebook_redir_uri: 'https://hola.org/facebook_referral.html',
    product: 'Hola'+(is_torch ? ' for Torch' : ''),
    _product: 'Hola'+(is_torch ? ' for Torch Browser' : ''),
    site: 'https://'+(is_torch ? 'bit.ly/HolaTorch' : 'hola.org'),
    picture: 'https://hola.org/img/'+(is_torch ? 'torch-logo.jpg' : 'hola.png')
};
E.params_argv = [E.params];
E.ccgi = {};
make_link(E.ccgi, 'facebook', {
    name: 'Make your Internet better with %(_product)s',
    text: "I'm using %(product)s to view sites that are blocked "
    +'in my country, and browse the web faster!'
});
make_link(E.ccgi, 'googleplus');
make_link(E.ccgi, 'twitter', is_torch ? {
    text: 'Check out Hola for @TorchBrowser, I can now access blocked '
    +'sites from any country! %(site)s'
} : {
    text: 'Check out %(product)s, I can now access blocked '
    +'sites from any country! %(site)s #hola_org via @hola_org'
});
make_link(E.ccgi, 'pinterest', {
    text: 'Make your Internet better with %(_product)s.\n'
    +"I'm using %(_product)s (%(site)s) to view sites that are blocked "
    +'in my country (and it also makes browsing the web faster!)'
});
make_link(E.ccgi, 'email', {
    name: 'Check out %(_product)s!',
    text: 'Hi,\n\nI started using %(_product)s (%(site)s). '
    +'It lets me browse the Internet faster and access sites blocked '
    +'in my country. And it\'s free.\n\nEnjoy!'
});
return E; });
