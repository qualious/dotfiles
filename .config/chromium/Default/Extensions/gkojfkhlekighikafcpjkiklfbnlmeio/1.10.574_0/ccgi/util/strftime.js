// LICENSE_CODE ZON
'use strict'; /*jslint node:true, browser:true*/
// see https://github.com/samsonjs/strftime
// very low performance, since not pre-compiled
(function(){
var define;
var is_node = typeof module=='object' && module.exports;
if (!is_node)
    define = self.define;
else
    define = require('./require_node.js').define(module, '../');
define([], function(){
var E = strftime;

function words(s){ return (s || '').split(' '); }

var DefaultLocale = {
    days: words('Sunday Monday Tuesday Wednesday Thursday Friday Saturday'),
    shortDays: words('Sun Mon Tue Wed Thu Fri Sat'),
    months: words('January February March April May June July August '
	+'September October November December'),
    shortMonths: words('Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec'),
    AM: 'AM',
    PM: 'PM',
    am: 'am',
    pm: 'pm'
};

var utc_local = {
    local: {
	getSeconds: function(d){ return d.getSeconds(); },
	getMinutes: function(d){ return d.getMinutes(); },
	getHours: function(d){ return d.getHours(); },
	getDay: function(d){ return d.getDay(); },
	getDate: function(d){ return d.getDate(); },
	getMonth: function(d){ return d.getMonth(); },
	getFullYear: function(d){ return d.getFullYear(); },
	getYearBegin: function(d){ return new Date(d.getFullYear(), 0, 1); }
    },
    utc: {
	getSeconds: function(d){ return d.getUTCSeconds(); },
	getMinutes: function(d){ return d.getUTCMinutes(); },
	getHours: function(d){ return d.getUTCHours(); },
	getDay: function(d){ return d.getUTCDay(); },
	getDate: function(d){ return d.getUTCDate(); },
	getMonth: function(d){ return d.getUTCMonth(); },
	getFullYear: function(d){ return d.getUTCFullYear(); },
	getYearBegin: function(d){ return new Date(Date.UTC(
            d.getUTCFullYear(), 0, 1)); }
    }
};
function strftime(fmt, d, opt){
    opt = opt || {};
    d = d||new Date();
    var locale = opt.locale||DefaultLocale;
    var formats = locale.formats||{};
    var timestamp = d.getTime();
    var tz = opt.timezone;
    var utc = opt.utc!==undefined ? opt.utc :
	opt.local!==undefined ? !opt.local :
	true;
    if (tz!=null)
    {
	utc = true;
	// ISO 8601 format timezone string, [-+]HHMM
	// Convert to the number of minutes and it'll be applied to the date
	// below.
	if (typeof tz=='string')
	{
	    var sign = tz[0] == '-' ? -1 : 1;
	    var hours = parseInt(tz.slice(1, 3), 10);
	    var mins = parseInt(tz.slice(3, 5), 10);
	    tz = sign*(60*hours)+mins;
	}
	else if (typeof tz=='number')
	    d = new Date(d.getTime()+tz*60000);
    }
    var l = utc ? utc_local.utc : utc_local.local;
    // Most of the specifiers supported by C's strftime, and some from Ruby.
    // Some other syntax extensions from Ruby are supported: %-, %_, and %0
    // to pad with nothing, space, or zero (respectively).
    function replace(fmt){ return fmt.replace(/%([-_0]?.)/g, function(_, c){
	var mod, padding, day, y;
	if (c.length == 2)
	{
	    mod = c[0];
	    if (mod == '-') // omit padding
		padding = '';
	    else if (mod == '_') // pad with space
		padding = ' ';
	    else if (mod == '0') // pad with zero
		padding = '0';
	    else // unrecognized, return the format
		return _;
	    c = c[1];
	}
	switch (c)
	{
	// Examples for new Date(0) in GMT
	case 'A': return locale.days[l.getDay(d)]; // 'Thursday'
	case 'a': return locale.shortDays[l.getDay(d)]; // 'Thu'
	case 'B': return locale.months[l.getMonth(d)]; // 'January'
	case 'b': return locale.shortMonths[l.getMonth(d)]; // 'Jan'
	case 'C': // '19'
	    return pad(Math.floor(l.getFullYear(d)/100), padding);
	case 'D': return replace(formats.D || '%m/%d/%y'); // '01/01/70'
	case 'd': return pad(l.getDate(d), padding); // '01'
	case 'e': return l.getDate(d); // '01'
	case 'F': return replace(formats.F || '%Y-%m-%d'); // '1970-01-01'
	case 'H': return pad(l.getHours(d), padding); // '00'
	case 'h': return locale.shortMonths[l.getMonth(d)]; // 'Jan'
	case 'I': return pad(hours12(l.getHours(d)), padding); // '12'
	case 'j': // '000'
	    day = Math.ceil((d.getTime()-l.getYearBegin(d))/(1000*60*60*24));
	    return pad(day, 3);
	case 'k': // ' 0'
	    return pad(l.getHours(d), padding===undefined ? ' ' : padding);
	case 'L': return pad(Math.floor(d.getMilliseconds()), 3); // '000'
	case 'l': // '12'
	    return pad(hours12(l.getHours(d)),
		padding===undefined ? ' ' : padding);
	case 'M': return pad(l.getMinutes(d), padding); // '00'
	case 'm': return pad(l.getMonth(d) + 1, padding); // '01'
	case 'n': return '\n'; // '\n'
	case 'o': return ''+l.getDate(d)+ordinal(l.getDate(d)); // '1st'
	case 'P': return l.getHours(d) < 12 ? locale.am : locale.pm; // 'am'
	case 'p': return l.getHours(d) < 12 ? locale.AM : locale.PM; // 'AM'
	case 'R': return replace(formats.R || '%H:%M'); // '00:00'
	case 'r': return replace(formats.r || '%I:%M:%S %p'); // '12:00:00 AM'
	case 'S': return pad(l.getSeconds(d), padding); // '00'
	case 's': return Math.floor(d.getTime()/1000); // '0'
	case 'T': return replace(formats.T || '%H:%M:%S'); // '00:00:00'
	case 't': return '\t'; // '\t'
	case 'U': return pad(weekNumber(l, d, 'sunday'), padding); // '00'
	case 'u': // '4'
	    day = l.getDay(d);
	    // 1 - 7, Monday is first day of the week
	    return day===0 ? 7 : day;
	case 'v': return replace(formats.v || '%e-%b-%Y'); // '1-Jan-1970'
	case 'W': return pad(weekNumber(l, d, 'monday'), padding); // '00'
	case 'w': return l.getDay(d); // '4'. 0 Sunday - 6 Saturday
	case 'Y': return l.getFullYear(d); // '1970'
	case 'y': // '70'
	    y = ''+l.getFullYear(d);
	    return y.slice(y.length - 2);
	case 'Z': // 'GMT'
	    if (utc)
	        return "GMT";
	    var tzString = d.toString().match(/\((\w+)\)/);
	    return tzString && tzString[1] || '';
	case 'z': // '+0000'
	    if (utc)
	        return "+0000";
	    var off = typeof tz=='number' ? tz : -d.getTimezoneOffset();
	    return (off<0 ? '-' : '+')+pad(Math.abs(off/60))+pad(off%60);
	default: return c;
	}
    }); }
    return replace(fmt);
}

// Default padding is '0' and default length is 2, both are optional.
function pad(n, padding, length){
    // pad(n, <length>)
    if (typeof padding==='number')
    {
	length = padding;
	padding = '0';
    }
    // Defaults handle pad(n) and pad(n, <padding>)
    if (padding===undefined)
	padding = '0';
    length = length || 2;
    var s = String(n);
    // padding may be an empty string, don't loop forever if it is
    if (padding)
	for (; s.length < length; s = padding + s);
    return s;
}

function hours12(hours){
    if (hours===0)
	return 12;
    if (hours>12)
	return hours-12;
    return hours;
}

// Get the ordinal suffix for a number: st, nd, rd, or th
function ordinal(n){
    var i = n % 10, ii = n % 100;
    if ((ii >= 11 && ii <= 13) || i === 0 || i >= 4)
	return 'th';
    switch (i)
    {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    }
}

// firstWeekday: 'sunday' or 'monday', default is 'sunday'
// Pilfered & ported from Ruby's strftime implementation.
function weekNumber(l, d, firstWeekday){
    firstWeekday = firstWeekday || 'sunday';
    // This works by shifting the weekday back by one day if we
    // are treating Monday as the first day of the week.
    var wday = l.getDay(d);
    if (firstWeekday=='monday')
    {
	if (wday===0) // Sunday
	    wday = 6;
	else
	    wday--;
    }
    var yday = (d - l.getYearBegin(d)) / 86400000;
    var weekNum = (yday + 7 - wday) / 7;
    return Math.floor(weekNum);
}

return E; }); }());
