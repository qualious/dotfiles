'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " via "
    },
    "$$12": {
        "message": "$$12"
    },
    "$1 Buffering?": {
        "message": "$1 Buffering?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5"
    },
    "$1 VPN": {
        "message": "$1 VPN"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN Premium"
    },
    "$1 from $2": {
        "message": "$1 from $2"
    },
    "$1 not found": {
        "message": "$1 not found"
    },
    "$1 via Hola": {
        "message": "$1 via Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(some Hola features are not available on your version)"
    },
    "AC": {
        "message": "Ascension island"
    },
    "AD": {
        "message": "Andorra"
    },
    "AE": {
        "message": "United Arab Emirates"
    },
    "AF": {
        "message": "Afghanistan"
    },
    "AG": {
        "message": "Antigua and Barbuda"
    },
    "AI": {
        "message": "Anguilla"
    },
    "AL": {
        "message": "Albania"
    },
    "AM": {
        "message": "Armenia"
    },
    "AN": {
        "message": "Netherlands Antilles"
    },
    "AO": {
        "message": "Angola"
    },
    "AQ": {
        "message": "Antarctica"
    },
    "AR": {
        "message": "Argentina"
    },
    "AS": {
        "message": "American Samoa"
    },
    "AT": {
        "message": "Austria"
    },
    "AU": {
        "message": "Australia"
    },
    "AW": {
        "message": "Aruba"
    },
    "AX": {
        "message": "Åland Islands"
    },
    "AZ": {
        "message": "Azerbaijan"
    },
    "About": {
        "message": "About"
    },
    "About Hola": {
        "message": "About Hola"
    },
    "Accelerator": {
        "message": "Accelerator"
    },
    "Accelerator is": {
        "message": "Accelerator is"
    },
    "Access $1 - cool site!": {
        "message": "Access $1 - cool site!"
    },
    "Access $1?": {
        "message": "Access $1?"
    },
    "Access any site from any country, free": {
        "message": "Access any site from any country, free"
    },
    "Access cool sites": {
        "message": "Access cool sites"
    },
    "Access more sites": {
        "message": "Access more sites"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Access sites censored in your country and accelerate your Internet with Hola - Free!"
    },
    "Accessing $1 with Hola": {
        "message": "Accessing $1 with Hola"
    },
    "Account": {
        "message": "Account"
    },
    "Account type": {
        "message": "Account type"
    },
    "Activating...": {
        "message": "Activating..."
    },
    "All ($1)": {
        "message": "All ($1)"
    },
    "Apply settings...": {
        "message": "Apply settings..."
    },
    "Author site:": {
        "message": "Author site:"
    },
    "Author:": {
        "message": "Author:"
    },
    "Awesome!": {
        "message": "Awesome!"
    },
    "BA": {
        "message": "Bosnia and Herzegovina"
    },
    "BB": {
        "message": "Barbados"
    },
    "BD": {
        "message": "Bangladesh"
    },
    "BE": {
        "message": "Belgium"
    },
    "BF": {
        "message": "Burkina Faso"
    },
    "BG": {
        "message": "Bulgaria"
    },
    "BH": {
        "message": "Bahrain"
    },
    "BI": {
        "message": "Burundi"
    },
    "BJ": {
        "message": "Benin"
    },
    "BL": {
        "message": "Saint Barthélemy"
    },
    "BM": {
        "message": "Bermuda"
    },
    "BN": {
        "message": "Brunei"
    },
    "BO": {
        "message": "Bolivia"
    },
    "BQ": {
        "message": "British Antarctic Territory"
    },
    "BR": {
        "message": "Brazil"
    },
    "BS": {
        "message": "Bahamas"
    },
    "BT": {
        "message": "Bhutan"
    },
    "BV": {
        "message": "Bouvet Island"
    },
    "BW": {
        "message": "Botswana"
    },
    "BY": {
        "message": "Belarus"
    },
    "BZ": {
        "message": "Belize"
    },
    "Back to $1": {
        "message": "Back to $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Be the first to get Hola for iPhone/iPad - Register now:"
    },
    "Browser": {
        "message": "Browser"
    },
    "Browsing": {
        "message": "Browsing"
    },
    "Buffering problems?": {
        "message": "Buffering problems?"
    },
    "Buffering?": {
        "message": "Buffering?"
    },
    "CA": {
        "message": "Canada"
    },
    "CC": {
        "message": "Cocos [Keeling] Islands"
    },
    "CD": {
        "message": "Congo - Kinshasa"
    },
    "CF": {
        "message": "Central African Republic"
    },
    "CG": {
        "message": "Congo - Brazzaville"
    },
    "CH": {
        "message": "Switzerland"
    },
    "CI": {
        "message": "Côte d’Ivoire"
    },
    "CID": {
        "message": "CID"
    },
    "CK": {
        "message": "Cook Islands"
    },
    "CL": {
        "message": "Chile"
    },
    "CM": {
        "message": "Cameroon"
    },
    "CN": {
        "message": "China"
    },
    "CO": {
        "message": "Colombia"
    },
    "CP": {
        "message": "Clipperton island"
    },
    "CR": {
        "message": "Costa Rica"
    },
    "CS": {
        "message": "Serbia and Montenegro"
    },
    "CT": {
        "message": "Canton and Enderbury Islands"
    },
    "CU": {
        "message": "Cuba"
    },
    "CV": {
        "message": "Cape Verde"
    },
    "CX": {
        "message": "Christmas Island"
    },
    "CY": {
        "message": "Cyprus"
    },
    "CZ": {
        "message": "Czech Republic"
    },
    "Changing country...": {
        "message": "Changing country..."
    },
    "Check out Hola for $1!": {
        "message": "Check out Hola for $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Check out Hola for mobile devices"
    },
    "Check your Internet connection": {
        "message": "Check your Internet connection"
    },
    "Choose<br>Country": {
        "message": "Choose<br>Country"
    },
    "Configuring...": {
        "message": "Configuring..."
    },
    "Connecting...": {
        "message": "Connecting..."
    },
    "Cool site!": {
        "message": "Cool site!"
    },
    "Creative licenses": {
        "message": "Creative licenses"
    },
    "DD": {
        "message": "East Germany"
    },
    "DE": {
        "message": "Germany"
    },
    "DG": {
        "message": "Diego Garcia"
    },
    "DJ": {
        "message": "Djibouti"
    },
    "DK": {
        "message": "Denmark"
    },
    "DM": {
        "message": "Dominica"
    },
    "DO": {
        "message": "Dominican Republic"
    },
    "DZ": {
        "message": "Algeria"
    },
    "Delete": {
        "message": "Delete"
    },
    "Deleted from my list": {
        "message": "Deleted from my list"
    },
    "Did it work?": {
        "message": "Did it work?"
    },
    "Did you experience any buffering?": {
        "message": "Did you experience any buffering?"
    },
    "Disliked it": {
        "message": "Disliked it"
    },
    "Don't show again for $1 for one week": {
        "message": "Don't show again for $1 for one week"
    },
    "Don't show again for any site for one week": {
        "message": "Don't show again for any site for one week"
    },
    "Downloading": {
        "message": "Downloading"
    },
    "EA": {
        "message": "Ceuta and Melilla"
    },
    "EC": {
        "message": "Ecuador"
    },
    "EE": {
        "message": "Estonia"
    },
    "EG": {
        "message": "Egypt"
    },
    "EH": {
        "message": "Western Sahara"
    },
    "ER": {
        "message": "Eritrea"
    },
    "ES": {
        "message": "Spain"
    },
    "ET": {
        "message": "Ethiopia"
    },
    "EU": {
        "message": "European Union"
    },
    "Enable": {
        "message": "Enable"
    },
    "Enable Hola Accelerator": {
        "message": "Enable Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Enjoy!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Enjoying Hola for Chrome?"
    },
    "Enter site to access": {
        "message": "Enter site to access"
    },
    "Enter your email": {
        "message": "Enter your email"
    },
    "FI": {
        "message": "Finland"
    },
    "FJ": {
        "message": "Fiji"
    },
    "FK": {
        "message": "Falkland Islands"
    },
    "FM": {
        "message": "Micronesia"
    },
    "FO": {
        "message": "Faroe Islands"
    },
    "FQ": {
        "message": "French Southern and Antarctic Territories"
    },
    "FR": {
        "message": "France"
    },
    "FX": {
        "message": "Metropolitan France"
    },
    "Fast": {
        "message": "Fast"
    },
    "Finding new peers...": {
        "message": "Finding new peers..."
    },
    "Finding peers...": {
        "message": "Finding peers..."
    },
    "Free": {
        "message": "Free"
    },
    "From": {
        "message": "From"
    },
    "Full list": {
        "message": "Full list"
    },
    "GA": {
        "message": "Gabon"
    },
    "GB": {
        "message": "United Kingdom"
    },
    "GD": {
        "message": "Grenada"
    },
    "GE": {
        "message": "Georgia"
    },
    "GF": {
        "message": "French Guiana"
    },
    "GG": {
        "message": "Guernsey"
    },
    "GH": {
        "message": "Ghana"
    },
    "GI": {
        "message": "Gibraltar"
    },
    "GL": {
        "message": "Greenland"
    },
    "GM": {
        "message": "Gambia"
    },
    "GN": {
        "message": "Guinea"
    },
    "GP": {
        "message": "Guadeloupe"
    },
    "GQ": {
        "message": "Equatorial Guinea"
    },
    "GR": {
        "message": "Greece"
    },
    "GS": {
        "message": "South Georgia and the South Sandwich Islands"
    },
    "GT": {
        "message": "Guatemala"
    },
    "GU": {
        "message": "Guam"
    },
    "GW": {
        "message": "Guinea-Bissau"
    },
    "GY": {
        "message": "Guyana"
    },
    "Get 24/7 Unblocking": {
        "message": "Get 24/7 Unblocking"
    },
    "Get Free Premium": {
        "message": "Get Free Premium"
    },
    "Get Hola Accelerator": {
        "message": "Get Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Get Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Get Hola Plus for un-interrupted, ad-free service."
    },
    "Get Hola Premium": {
        "message": "Get Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Get Hola for Android"
    },
    "Get Premium support": {
        "message": "Get Premium support"
    },
    "Get Unlimited Unblocking": {
        "message": "Get Unlimited Unblocking"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Get access to censored sites, try it now: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Get help from engineer over Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Get the Fastest Servers"
    },
    "Go": {
        "message": "Go"
    },
    "Go Hola Premium": {
        "message": "Go Hola Premium"
    },
    "HK": {
        "message": "Hong Kong SAR China"
    },
    "HM": {
        "message": "Heard Island and McDonald Islands"
    },
    "HN": {
        "message": "Honduras"
    },
    "HR": {
        "message": "Croatia"
    },
    "HT": {
        "message": "Haiti"
    },
    "HU": {
        "message": "Hungary"
    },
    "Hate it": {
        "message": "Hate it"
    },
    "Help": {
        "message": "Help"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nI'm using"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country."
    },
    "Hola": {
        "message": "Hola"
    },
    "Hola Accelerator": {
        "message": "Hola Accelerator"
    },
    "Hola Media Player": {
        "message": "Hola Media Player"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola cannot work because another extension is controlling your proxy settings."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola is not available right now, but we are working on it."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola is off, click it to turn it on"
    },
    "Hola site list": {
        "message": "Hola site list"
    },
    "I can now access $1 from any country!": {
        "message": "I can now access $1 from any country!"
    },
    "I did not experience any buffering": {
        "message": "I did not experience any buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "I just accessed a censored site using Hola for $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "I'm using $1 to view $2 in my country, and surf faster!"
    },
    "IC": {
        "message": "Canary Islands"
    },
    "ID": {
        "message": "Indonesia"
    },
    "IE": {
        "message": "Ireland"
    },
    "IL": {
        "message": "Israel"
    },
    "IM": {
        "message": "Isle of Man"
    },
    "IN": {
        "message": "India"
    },
    "IO": {
        "message": "British Indian Ocean Territory"
    },
    "IQ": {
        "message": "Iraq"
    },
    "IR": {
        "message": "Iran"
    },
    "IS": {
        "message": "Iceland"
    },
    "IT": {
        "message": "Italy"
    },
    "Improve translation": {
        "message": "Improve translation"
    },
    "Initializing...": {
        "message": "Initializing..."
    },
    "Install": {
        "message": "Install"
    },
    "Install Accelerator": {
        "message": "Install Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Install Free Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Install Hola Engine to continue using Hola for free"
    },
    "Instantly watch any torrent Video": {
        "message": "Instantly watch any torrent Video"
    },
    "Invite friends - free Premium.": {
        "message": "Invite friends - free Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Invite friends. Get Premium."
    },
    "It was okay": {
        "message": "It was okay"
    },
    "JE": {
        "message": "Jersey"
    },
    "JM": {
        "message": "Jamaica"
    },
    "JO": {
        "message": "Jordan"
    },
    "JP": {
        "message": "Japan"
    },
    "JT": {
        "message": "Johnston Island"
    },
    "KE": {
        "message": "Kenya"
    },
    "KG": {
        "message": "Kyrgyzstan"
    },
    "KH": {
        "message": "Cambodia"
    },
    "KI": {
        "message": "Kiribati"
    },
    "KM": {
        "message": "Comoros"
    },
    "KN": {
        "message": "Saint Kitts and Nevis"
    },
    "KP": {
        "message": "North Korea"
    },
    "KR": {
        "message": "South Korea"
    },
    "KW": {
        "message": "Kuwait"
    },
    "KY": {
        "message": "Cayman Islands"
    },
    "KZ": {
        "message": "Kazakhstan"
    },
    "LA": {
        "message": "Laos"
    },
    "LB": {
        "message": "Lebanon"
    },
    "LC": {
        "message": "Saint Lucia"
    },
    "LI": {
        "message": "Liechtenstein"
    },
    "LK": {
        "message": "Sri Lanka"
    },
    "LR": {
        "message": "Liberia"
    },
    "LS": {
        "message": "Lesotho"
    },
    "LT": {
        "message": "Lithuania"
    },
    "LU": {
        "message": "Luxembourg"
    },
    "LV": {
        "message": "Latvia"
    },
    "LY": {
        "message": "Libya"
    },
    "Language": {
        "message": "Language"
    },
    "Library": {
        "message": "Library"
    },
    "Like it": {
        "message": "Like it"
    },
    "Loading": {
        "message": "Loading"
    },
    "Loading site...": {
        "message": "Loading site..."
    },
    "Log in": {
        "message": "Log in"
    },
    "Log out": {
        "message": "Log out"
    },
    "Love Hola?": {
        "message": "Love Hola?"
    },
    "Love it": {
        "message": "Love it"
    },
    "MA": {
        "message": "Morocco"
    },
    "MC": {
        "message": "Monaco"
    },
    "MD": {
        "message": "Moldova"
    },
    "ME": {
        "message": "Montenegro"
    },
    "MF": {
        "message": "Saint Martin"
    },
    "MG": {
        "message": "Madagascar"
    },
    "MH": {
        "message": "Marshall Islands"
    },
    "MI": {
        "message": "Midway Islands"
    },
    "MK": {
        "message": "Macedonia"
    },
    "ML": {
        "message": "Mali"
    },
    "MM": {
        "message": "Myanmar [Burma]"
    },
    "MN": {
        "message": "Mongolia"
    },
    "MO": {
        "message": "Macau SAR China"
    },
    "MP": {
        "message": "Northern Mariana Islands"
    },
    "MQ": {
        "message": "Martinique"
    },
    "MR": {
        "message": "Mauritania"
    },
    "MS": {
        "message": "Montserrat"
    },
    "MT": {
        "message": "Malta"
    },
    "MU": {
        "message": "Mauritius"
    },
    "MV": {
        "message": "Maldives"
    },
    "MW": {
        "message": "Malawi"
    },
    "MX": {
        "message": "Mexico"
    },
    "MY": {
        "message": "Malaysia"
    },
    "MZ": {
        "message": "Mozambique"
    },
    "Make your Internet better with $1": {
        "message": "Make your Internet better with $1"
    },
    "Menu": {
        "message": "Menu"
    },
    "Might not work on all sites": {
        "message": "Might not work on all sites"
    },
    "Mode": {
        "message": "Mode"
    },
    "More countries": {
        "message": "More countries"
    },
    "More sites...": {
        "message": "More sites..."
    },
    "More...": {
        "message": "More..."
    },
    "My Account": {
        "message": "My Account"
    },
    "My History": {
        "message": "My History"
    },
    "My Settings": {
        "message": "My Settings"
    },
    "My favorites": {
        "message": "My favorites"
    },
    "NA": {
        "message": "Namibia"
    },
    "NC": {
        "message": "New Caledonia"
    },
    "NE": {
        "message": "Niger"
    },
    "NF": {
        "message": "Norfolk Island"
    },
    "NG": {
        "message": "Nigeria"
    },
    "NI": {
        "message": "Nicaragua"
    },
    "NL": {
        "message": "Netherlands"
    },
    "NO": {
        "message": "Norway"
    },
    "NP": {
        "message": "Nepal"
    },
    "NQ": {
        "message": "Dronning Maud Land"
    },
    "NR": {
        "message": "Nauru"
    },
    "NT": {
        "message": "Neutral Zone"
    },
    "NU": {
        "message": "Niue"
    },
    "NZ": {
        "message": "New Zealand"
    },
    "Need Help?": {
        "message": "Need Help?"
    },
    "Netflix": {
        "message": "Netflix"
    },
    "Never ask me again": {
        "message": "Never ask me again"
    },
    "Never be a peer": {
        "message": "Never be a peer"
    },
    "No": {
        "message": "No"
    },
    "No idle peers found.": {
        "message": "No idle peers found."
    },
    "No recent videos found": {
        "message": "No recent videos found"
    },
    "No saved videos found": {
        "message": "No saved videos found"
    },
    "No title": {
        "message": "No title"
    },
    "No videos found": {
        "message": "No videos found"
    },
    "No videos found on active page": {
        "message": "No videos found on active page"
    },
    "No, I need help": {
        "message": "No, I need help"
    },
    "No, Thanks": {
        "message": "No, Thanks"
    },
    "No, fix it": {
        "message": "No, fix it"
    },
    "Not working?": {
        "message": "Not working?"
    },
    "Number of users that pressed not working": {
        "message": "Number of users that pressed not working"
    },
    "Number of users that use this option": {
        "message": "Number of users that use this option"
    },
    "OM": {
        "message": "Oman"
    },
    "Off": {
        "message": "Off"
    },
    "Oh, yes!": {
        "message": "Oh, yes!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Old version of Firefox. Press <a>here</a> to upgrade."
    },
    "On": {
        "message": "On"
    },
    "Open Media Player": {
        "message": "Open Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Our Brand New Mplayer is Coming Soon!"
    },
    "PA": {
        "message": "Panama"
    },
    "PC": {
        "message": "Pacific Islands Trust Territory"
    },
    "PE": {
        "message": "Peru"
    },
    "PF": {
        "message": "French Polynesia"
    },
    "PG": {
        "message": "Papua New Guinea"
    },
    "PH": {
        "message": "Philippines"
    },
    "PK": {
        "message": "Pakistan"
    },
    "PL": {
        "message": "Poland"
    },
    "PM": {
        "message": "Saint Pierre and Miquelon"
    },
    "PN": {
        "message": "Pitcairn Islands"
    },
    "PR": {
        "message": "Puerto Rico"
    },
    "PS": {
        "message": "Palestinian Territories"
    },
    "PT": {
        "message": "Portugal"
    },
    "PU": {
        "message": "U.S. Miscellaneous Pacific Islands"
    },
    "PW": {
        "message": "Palau"
    },
    "PY": {
        "message": "Paraguay"
    },
    "PZ": {
        "message": "Panama Canal Zone"
    },
    "Platform": {
        "message": "Platform"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc."
    },
    "Please enter a valid email address.": {
        "message": "Please enter a valid email address."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Please enter a web site address, like facebook.com"
    },
    "Please help us get better": {
        "message": "Please help us get better"
    },
    "Popular in $1": {
        "message": "Popular in $1"
    },
    "Popular in the world": {
        "message": "Popular in the world"
    },
    "Popular sites": {
        "message": "Popular sites"
    },
    "Premium": {
        "message": "Premium"
    },
    "Product": {
        "message": "Product"
    },
    "QA": {
        "message": "Qatar"
    },
    "QO": {
        "message": "Outlying Oceania"
    },
    "RE": {
        "message": "Réunion"
    },
    "RO": {
        "message": "Romania"
    },
    "RS": {
        "message": "Serbia"
    },
    "RU": {
        "message": "Russia"
    },
    "RW": {
        "message": "Rwanda"
    },
    "Rate us": {
        "message": "Rate us"
    },
    "Recent Videos": {
        "message": "Recent Videos"
    },
    "Reload": {
        "message": "Reload"
    },
    "Reload Hola": {
        "message": "Reload Hola"
    },
    "Remember server": {
        "message": "Remember server"
    },
    "Report a problem": {
        "message": "Report a problem"
    },
    "Retry safe mode": {
        "message": "Retry safe mode"
    },
    "SA": {
        "message": "Saudi Arabia"
    },
    "SB": {
        "message": "Solomon Islands"
    },
    "SC": {
        "message": "Seychelles"
    },
    "SD": {
        "message": "Sudan"
    },
    "SE": {
        "message": "Sweden"
    },
    "SG": {
        "message": "Singapore"
    },
    "SH": {
        "message": "Saint Helena"
    },
    "SI": {
        "message": "Slovenia"
    },
    "SJ": {
        "message": "Svalbard and Jan Mayen"
    },
    "SK": {
        "message": "Slovakia"
    },
    "SL": {
        "message": "Sierra Leone"
    },
    "SM": {
        "message": "San Marino"
    },
    "SN": {
        "message": "Senegal"
    },
    "SO": {
        "message": "Somalia"
    },
    "SR": {
        "message": "Suriname"
    },
    "ST": {
        "message": "São Tomé and Príncipe"
    },
    "SU": {
        "message": "Union of Soviet Socialist Republics"
    },
    "SV": {
        "message": "El Salvador"
    },
    "SY": {
        "message": "Syria"
    },
    "SZ": {
        "message": "Swaziland"
    },
    "Safe": {
        "message": "Safe"
    },
    "Safe mode": {
        "message": "Safe mode"
    },
    "Save": {
        "message": "Save"
    },
    "Saved Videos": {
        "message": "Saved Videos"
    },
    "Saved for later": {
        "message": "Saved for later"
    },
    "Search video title": {
        "message": "Search video title"
    },
    "Select a Country": {
        "message": "Select a Country"
    },
    "Select site to unblock": {
        "message": "Select site to unblock"
    },
    "Server": {
        "message": "Server"
    },
    "Server saved!": {
        "message": "Server saved!"
    },
    "Service": {
        "message": "Service"
    },
    "Set safe mode for $1 $2": {
        "message": "Set safe mode for $1 $2"
    },
    "Settings": {
        "message": "Settings"
    },
    "Share": {
        "message": "Share"
    },
    "Share $1 on $2": {
        "message": "Share $1 on $2"
    },
    "Share $1 via $2": {
        "message": "Share $1 via $2"
    },
    "Share with friends!": {
        "message": "Share with friends!"
    },
    "Sign up": {
        "message": "Sign up"
    },
    "Solve buffering": {
        "message": "Solve buffering"
    },
    "Solve buffering problems with": {
        "message": "Solve buffering problems with"
    },
    "Solves it": {
        "message": "Solves it"
    },
    "Staff Picks": {
        "message": "Staff Picks"
    },
    "Start Hola": {
        "message": "Start Hola"
    },
    "Starting...": {
        "message": "Starting..."
    },
    "Stop Hola": {
        "message": "Stop Hola"
    },
    "Stopping peer routing...": {
        "message": "Stopping peer routing..."
    },
    "Stream": {
        "message": "Stream"
    },
    "Stream Instantly": {
        "message": "Stream Instantly"
    },
    "Submit": {
        "message": "Submit"
    },
    "Support Hola": {
        "message": "Support Hola"
    },
    "TA": {
        "message": "Tristan da Cunha"
    },
    "TC": {
        "message": "Turks and Caicos Islands"
    },
    "TD": {
        "message": "Chad"
    },
    "TF": {
        "message": "French Southern Territories"
    },
    "TG": {
        "message": "Togo"
    },
    "TH": {
        "message": "Thailand"
    },
    "TJ": {
        "message": "Tajikistan"
    },
    "TK": {
        "message": "Tokelau"
    },
    "TL": {
        "message": "Timor-Leste"
    },
    "TM": {
        "message": "Turkmenistan"
    },
    "TN": {
        "message": "Tunisia"
    },
    "TO": {
        "message": "Tonga"
    },
    "TR": {
        "message": "Turkey"
    },
    "TT": {
        "message": "Trinidad and Tobago"
    },
    "TV": {
        "message": "Tuvalu"
    },
    "TW": {
        "message": "Taiwan"
    },
    "TZ": {
        "message": "Tanzania"
    },
    "Talk to us on $1": {
        "message": "Talk to us on $1"
    },
    "Tell friends about $1": {
        "message": "Tell friends about $1"
    },
    "Testing connection...": {
        "message": "Testing connection..."
    },
    "Thank you!": {
        "message": "Thank you!"
    },
    "There seems to be an error": {
        "message": "There seems to be an error"
    },
    "Top popular sites": {
        "message": "Top popular sites"
    },
    "Translate to your language": {
        "message": "Translate to your language"
    },
    "Try again": {
        "message": "Try again"
    },
    "Try another server": {
        "message": "Try another server"
    },
    "Try it": {
        "message": "Try it"
    },
    "Try safe mode": {
        "message": "Try safe mode"
    },
    "Try to <span>reload</span>": {
        "message": "Try to <span>reload</span>"
    },
    "Trying another peer...": {
        "message": "Trying another peer..."
    },
    "Turn off Accelerator": {
        "message": "Turn off Accelerator"
    },
    "Turn off Hola": {
        "message": "Turn off Hola"
    },
    "Turn on Accelerator": {
        "message": "Turn on Accelerator"
    },
    "Turn on Hola": {
        "message": "Turn on Hola"
    },
    "Turn on to get started": {
        "message": "Turn on to get started"
    },
    "UA": {
        "message": "Ukraine"
    },
    "UG": {
        "message": "Uganda"
    },
    "UM": {
        "message": "U.S. Minor Outlying Islands"
    },
    "US": {
        "message": "United States"
    },
    "UUID": {
        "message": "UUID"
    },
    "UY": {
        "message": "Uruguay"
    },
    "UZ": {
        "message": "Uzbekistan"
    },
    "Unblocker": {
        "message": "Unblocker"
    },
    "Unblocker is disabled": {
        "message": "Unblocker is disabled"
    },
    "Unblocker?": {
        "message": "Unblocker?"
    },
    "Update": {
        "message": "Update"
    },
    "Upgrade": {
        "message": "Upgrade"
    },
    "Using": {
        "message": "Using"
    },
    "Using Hola": {
        "message": "Using Hola"
    },
    "VA": {
        "message": "Vatican City"
    },
    "VC": {
        "message": "Saint Vincent and the Grenadines"
    },
    "VD": {
        "message": "North Vietnam"
    },
    "VE": {
        "message": "Venezuela"
    },
    "VG": {
        "message": "British Virgin Islands"
    },
    "VI": {
        "message": "U.S. Virgin Islands"
    },
    "VN": {
        "message": "Vietnam"
    },
    "VPN": {
        "message": "VPN"
    },
    "VPN Premium": {
        "message": "VPN Premium"
    },
    "VU": {
        "message": "Vanuatu"
    },
    "Version": {
        "message": "Version"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Very old version of Chrome, <a>update</a> Chrome to use Hola"
    },
    "Video": {
        "message": "Video"
    },
    "Video stuck?": {
        "message": "Video stuck?"
    },
    "Videos available for instant streaming": {
        "message": "Videos available for instant streaming"
    },
    "WF": {
        "message": "Wallis and Futuna"
    },
    "WK": {
        "message": "Wake Island"
    },
    "WS": {
        "message": "Samoa"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here"
    },
    "Want to know more?": {
        "message": "Want to know more?"
    },
    "Watch Now": {
        "message": "Watch Now"
    },
    "We found $1 videos": {
        "message": "We found $1 videos"
    },
    "We will be in touch with you soon": {
        "message": "We will be in touch with you soon"
    },
    "Working!": {
        "message": "Working!"
    },
    "Working?": {
        "message": "Working?"
    },
    "Works on all sites but slower": {
        "message": "Works on all sites but slower"
    },
    "YD": {
        "message": "People's Democratic Republic of Yemen"
    },
    "YE": {
        "message": "Yemen"
    },
    "YT": {
        "message": "Mayotte"
    },
    "Yes": {
        "message": "Yes"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade."
    },
    "Youtube": {
        "message": "YouTube"
    },
    "ZA": {
        "message": "South Africa"
    },
    "ZM": {
        "message": "Zambia"
    },
    "ZW": {
        "message": "Zimbabwe"
    },
    "ZZ": {
        "message": "Unknown or Invalid Region"
    },
    "app_desc": {
        "message": "Access websites blocked in your country, company or school with Hola! Hola is free and easy to use!"
    },
    "app_name": {
        "message": "Hola Better Internet"
    },
    "back to": {
        "message": "back to"
    },
    "changing...": {
        "message": "changing..."
    },
    "cool sites": {
        "message": "cool sites"
    },
    "current site": {
        "message": "current site"
    },
    "day": {
        "message": "day"
    },
    "days": {
        "message": "days"
    },
    "even more...": {
        "message": "even more..."
    },
    "locale_af": {
        "message": "Afrikaans"
    },
    "locale_ar": {
        "message": "Arabic"
    },
    "locale_az": {
        "message": "Azerbaijani"
    },
    "locale_be": {
        "message": "Belarusian"
    },
    "locale_bg": {
        "message": "Bulgarian"
    },
    "locale_bn": {
        "message": "Bengali"
    },
    "locale_bs": {
        "message": "Bosnian"
    },
    "locale_ca": {
        "message": "Catalan"
    },
    "locale_cs": {
        "message": "Czech"
    },
    "locale_cy": {
        "message": "Welsh"
    },
    "locale_cz": {
        "message": "Czech"
    },
    "locale_da": {
        "message": "Danish"
    },
    "locale_de": {
        "message": "German"
    },
    "locale_el": {
        "message": "Greek"
    },
    "locale_en": {
        "message": "English"
    },
    "locale_en_af": {
        "message": "AF Afrikaans"
    },
    "locale_en_ar": {
        "message": "AR العربية"
    },
    "locale_en_az": {
        "message": "AZ azərbaycan"
    },
    "locale_en_be": {
        "message": "BE Беларуская мова"
    },
    "locale_en_bg": {
        "message": "BG Български"
    },
    "locale_en_bn": {
        "message": "BN বাংলা"
    },
    "locale_en_bs": {
        "message": "BS Bosanski"
    },
    "locale_en_ca": {
        "message": "CA Català"
    },
    "locale_en_ceb": {
        "message": "CEB Sinugboanon"
    },
    "locale_en_cs": {
        "message": "CS Český"
    },
    "locale_en_cy": {
        "message": "CY Cymraeg"
    },
    "locale_en_da": {
        "message": "DA Dansk"
    },
    "locale_en_de": {
        "message": "DE Deutsch"
    },
    "locale_en_el": {
        "message": "EL Ελληνικά"
    },
    "locale_en_en": {
        "message": "EN English"
    },
    "locale_en_es": {
        "message": "ES Español"
    },
    "locale_en_et": {
        "message": "ET Eesti"
    },
    "locale_en_eu": {
        "message": "EU euskera"
    },
    "locale_en_fa": {
        "message": "FA فارسی"
    },
    "locale_en_fi": {
        "message": "FI suomi"
    },
    "locale_en_fr": {
        "message": "FR Française"
    },
    "locale_en_ga": {
        "message": "GA Gaeilge"
    },
    "locale_en_gl": {
        "message": "GL Galego"
    },
    "locale_en_gu": {
        "message": "GU ગુજરાતી"
    },
    "locale_en_he": {
        "message": "HE עברית"
    },
    "locale_en_hi": {
        "message": "HI हिंदी"
    },
    "locale_en_hr": {
        "message": "HR Hrvatski"
    },
    "locale_en_ht": {
        "message": "HT Kreyòl ayisyen"
    },
    "locale_en_hu": {
        "message": "HU Magyar"
    },
    "locale_en_hy": {
        "message": "HY Հայերեն"
    },
    "locale_en_id": {
        "message": "ID Indonesia"
    },
    "locale_en_is": {
        "message": "IS Íslenska"
    },
    "locale_en_it": {
        "message": "IT Italiana"
    },
    "locale_en_ja": {
        "message": "JA 日本語"
    },
    "locale_en_ka": {
        "message": "KA ქართული"
    },
    "locale_en_km": {
        "message": "KM ភាសាខ្មែរ"
    },
    "locale_en_kn": {
        "message": "KN ಕನ್ನಡ"
    },
    "locale_en_ko": {
        "message": "KO 한국어"
    },
    "locale_en_ku": {
        "message": "KU کورد"
    },
    "locale_en_lt": {
        "message": "LT Lietuviškai"
    },
    "locale_en_lv": {
        "message": "LV Latviešu"
    },
    "locale_en_mk": {
        "message": "MK Македонски"
    },
    "locale_en_mr": {
        "message": "MR मराठी"
    },
    "locale_en_ms": {
        "message": "MS Melayu"
    },
    "locale_en_mt": {
        "message": "MT Malti"
    },
    "locale_en_nl": {
        "message": "NL Nederlandse"
    },
    "locale_en_no": {
        "message": "NO Norsk"
    },
    "locale_en_pl": {
        "message": "PL Polish"
    },
    "locale_en_pt": {
        "message": "PT Português"
    },
    "locale_en_pt_BR": {
        "message": "PT_BR Português (Brasil)"
    },
    "locale_en_ro": {
        "message": "RO Română"
    },
    "locale_en_ru": {
        "message": "RU Русский"
    },
    "locale_en_sk": {
        "message": "SK Slovenčina"
    },
    "locale_en_sl": {
        "message": "SL Slovenščina"
    },
    "locale_en_sq": {
        "message": "SQ shqip"
    },
    "locale_en_sr": {
        "message": "SR Srpski"
    },
    "locale_en_sv": {
        "message": "SV Svenska"
    },
    "locale_en_sw": {
        "message": "SW Kiswahili"
    },
    "locale_en_ta": {
        "message": "TA தமிழ்"
    },
    "locale_en_te": {
        "message": "TE తెలుగు"
    },
    "locale_en_th": {
        "message": "TH ภาษาไทย"
    },
    "locale_en_tl": {
        "message": "TL Filipino"
    },
    "locale_en_tr": {
        "message": "TR Tϋrkçe"
    },
    "locale_en_uk": {
        "message": "UK Українська"
    },
    "locale_en_ur": {
        "message": "UR اردو"
    },
    "locale_en_vi": {
        "message": "VI Tiếng Việt"
    },
    "locale_en_zh": {
        "message": "ZH 中文"
    },
    "locale_en_zh_CN": {
        "message": "ZH_CN 简体中文"
    },
    "locale_en_zh_TW": {
        "message": "ZH_TW 繁體中文"
    },
    "locale_es": {
        "message": "Spanish"
    },
    "locale_et": {
        "message": "Estonian"
    },
    "locale_eu": {
        "message": "Basque"
    },
    "locale_fa": {
        "message": "Persian"
    },
    "locale_fi": {
        "message": "Finnish"
    },
    "locale_fr": {
        "message": "French"
    },
    "locale_ga": {
        "message": "Irish"
    },
    "locale_gl": {
        "message": "Galician"
    },
    "locale_gu": {
        "message": "Gujarati"
    },
    "locale_he": {
        "message": "Hebrew"
    },
    "locale_hi": {
        "message": "Hindi"
    },
    "locale_hr": {
        "message": "Croatian"
    },
    "locale_ht": {
        "message": "Haitian Creole"
    },
    "locale_hu": {
        "message": "Hungarian"
    },
    "locale_id": {
        "message": "Indonesian"
    },
    "locale_is": {
        "message": "Icelandic"
    },
    "locale_it": {
        "message": "Italian"
    },
    "locale_iw": {
        "message": "Hebrew"
    },
    "locale_ja": {
        "message": "Japanese"
    },
    "locale_ka": {
        "message": "Georgian"
    },
    "locale_km": {
        "message": "Khmer"
    },
    "locale_kn": {
        "message": "Kannada"
    },
    "locale_ko": {
        "message": "Korean"
    },
    "locale_ku": {
        "message": "Kurdish"
    },
    "locale_lt": {
        "message": "Lithuanian"
    },
    "locale_lv": {
        "message": "Latvian"
    },
    "locale_mk": {
        "message": "Macedonian"
    },
    "locale_mr": {
        "message": "Marathi"
    },
    "locale_ms": {
        "message": "Malay"
    },
    "locale_mt": {
        "message": "Maltese"
    },
    "locale_nl": {
        "message": "Dutch"
    },
    "locale_no": {
        "message": "Norwegian"
    },
    "locale_pl": {
        "message": "Polish"
    },
    "locale_pt": {
        "message": "Portuguese"
    },
    "locale_pt_BR": {
        "message": "Portuguese"
    },
    "locale_ro": {
        "message": "Romanian"
    },
    "locale_ru": {
        "message": "Russian"
    },
    "locale_sk": {
        "message": "Slovak"
    },
    "locale_sl": {
        "message": "Slovenian"
    },
    "locale_sq": {
        "message": "Albanian"
    },
    "locale_sr": {
        "message": "Serbian"
    },
    "locale_sv": {
        "message": "Swedish"
    },
    "locale_sw": {
        "message": "Swahili"
    },
    "locale_ta": {
        "message": "Tamil"
    },
    "locale_te": {
        "message": "Telugu"
    },
    "locale_th": {
        "message": "Thai"
    },
    "locale_tl": {
        "message": "Filipino"
    },
    "locale_tr": {
        "message": "Turkish"
    },
    "locale_uk": {
        "message": "Ukrainian"
    },
    "locale_ur": {
        "message": "Urdu"
    },
    "locale_vi": {
        "message": "Vietnamese"
    },
    "locale_zh_CN": {
        "message": "Chinese Simplified"
    },
    "locale_zh_TW": {
        "message": "Chinese Traditional"
    },
    "mode": {
        "message": "mode"
    },
    "more options...": {
        "message": "more options..."
    },
    "not working?": {
        "message": "not working?"
    },
    "not working? try another server": {
        "message": "not working? try another server"
    },
    "on this page": {
        "message": "on this page"
    },
    "sites that are censored": {
        "message": "sites that are censored"
    },
    "start": {
        "message": "start"
    },
    "working? remember": {
        "message": "working? remember"
    }
};
return E; });