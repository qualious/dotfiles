// LICENSE_CODE ZON
'use strict'; /*jshint browser:true, es5:true*/
(function(){
var locale, locales = ['af', 'ar', 'az', 'be', 'bg', 'bn', 'bs', 'ca', 'cs',
    'cy', 'da', 'de', 'el', 'en', 'es', 'et', 'eu', 'fa', 'fi', 'fr', 'ga',
    'gl', 'gu', 'he', 'hi', 'hr', 'ht', 'hu', 'hy', 'id', 'is', 'it', 'ja',
    'ka', 'km', 'kn', 'ko', 'lt', 'lv', 'mk', 'mr', 'ms', 'mt', 'nl', 'no',
    'pl', 'pt_BR', 'pt', 'ro', 'ru', 'sk', 'sl', 'sq', 'sr', 'sv', 'sw', 'ta',
    'te', 'th', 'tl', 'tr', 'uk', 'ur', 'vi', 'zh_CN', 'zh_TW'];
try { locale = localStorage.getItem('locale'); }
catch(err){ console.error('failed to read locale '+(err.stack||err)); }

if (locales.indexOf(locale)==-1)
{
    var navlang = (navigator.language||'').replace('-', '_');
    var choices = [navlang, navlang.substr(0, navlang.indexOf('_')), 'en'];
    for (var i=0; i<choices.length; i++)
    {
	if (locales.indexOf(choices[i])!=-1)
	{
	    locale = choices[i];
	    break;
	}
    }
}
require(['/svc/pub/locale/be_en.js', '/svc/pub/locale/be_'+locale+'.js'],
    function(){}, function(err){
    try { localStorage.setItem('locale', 'en'); }
    catch(cerr){ console.error('failed set localStorage.locale '+cerr.stack); }
    if (window.hola && window.hola.base)
    {
	window.hola.base.perr({id: 'be_lang_err', info: ''+locale+err,
	    bt: err.stack, filehead: 'userAgent: '+navigator.userAgent});
    }
    // XXX arik/bahaa/vladimir hack: if we fail to get lang file we will get
    // into an infinite loop. we have such a case:
    // ec16e0b80ee75fddc03322b6cdbb5285 (14-feb-2014)
    // todo:
    // - no need for special handling of this failure. it is like any other
    // require error
    // - verify that clicking on the popup will reload the extension if this
    // error happened
    // - try to understand what causes this failure (we don't get
    // be_require_err for this file)
    if (0)
	setTimeout(function(){ window.location.reload(); }, 200);
});
define(['/svc/pub/locale/be_en.js', '/svc/pub/locale/be_'+locale+'.js'],
    function(locale_en, locale_curr){
var E = get_message;
E.locale = locale;
E.locales = locales;
E.locale_curr = locale_curr;
E.locale_en = locale_en;

E.is_rtl = function(){ return /^(ar|he|fa|ur)$/.test(E.locale); };

function get_message(id, vals, _locale){
    var s, o = locale_curr[id]||locale_en[id];
    if (_locale)
        o = (locale==_locale&&locale_curr[id])||locale_en[id];
    if (!o)
    {
        if (window.console && console.error)
            console.error('no string for '+id);
        if (window.hola.base.perr_once)
        {
            window.hola.base.perr_once({id: 'be_lang_missing',
                info: ''+locale+'|'+id.substr(0, 512)});
        }
        s = id;
    }
    else
	s = o.message;
    if (!vals)
        return s;
    /* XXX arik: check chrome code for better implementation/regex */
    for (var i=0; i<vals.length; i++)
        s = s.replace('$'+(i+1), vals[i]);
    return s;
}

/* XXX arik: check for a better way to make first char capital */
E.capital = function(id, vals, _locale){
    var s = get_message(id, vals, _locale);
    return s ? s[0].toUpperCase()+s.substr(1) : s;
};

return E; });
})();
