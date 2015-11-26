'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " միջոցով "
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola մուտք գործել $2\n\nՍեղմեք այստեղ անել նույնը: $3\n\nԱյն տեղադրվում է Hola, որը թույլ է տալիս ինձ փրփրաբաշ ալիք ինտերնետից արագ եւ մուտք գործել $4$5"
    },
    "$1 from $2": {
        "message": "$1 - ից $2"
    },
    "$1 not found": {
        "message": "$1 չի գտնվել"
    },
    "$1 via Hola": {
        "message": "$1 միջոցով Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Որոշ Hola հնարավորություններ մատչելի են ոչ ձեր տարբերակը)"
    },
    "AC": {
        "message": "Համբարձման կղզի"
    },
    "AD": {
        "message": "Անդորա"
    },
    "AE": {
        "message": "Միացյալ Արաբական Էմիրաթներ"
    },
    "AF": {
        "message": "Աֆղանստան"
    },
    "AG": {
        "message": "Անտիգուա-Բարբուդա"
    },
    "AL": {
        "message": "Ալբանիա"
    },
    "AM": {
        "message": "Հայաստանի Հանրապետութիւն"
    },
    "AN": {
        "message": "Նիդերլանդների Անտիլյան կղզիներ"
    },
    "AO": {
        "message": "Անգոլա"
    },
    "AR": {
        "message": "Արգենտինա"
    },
    "AS": {
        "message": "Ամերիկյան Սամոա"
    },
    "AT": {
        "message": "Ավստրիա"
    },
    "AU": {
        "message": "Ավստրալիա"
    },
    "AX": {
        "message": "Ալանդյան կղզիներ"
    },
    "AZ": {
        "message": "Ադրբեջան"
    },
    "About": {
        "message": "Մոտ"
    },
    "About Hola": {
        "message": "Օգտվողի Hola"
    },
    "Accelerator": {
        "message": "Արագացնող"
    },
    "Accelerator is": {
        "message": "Արագացուցչային"
    },
    "Access $1 - cool site!": {
        "message": "Մուտք $1 - cool site!"
    },
    "Access $1?": {
        "message": "Մուտք $1."
    },
    "Access any site from any country, free": {
        "message": "Մուտք գործել ցանկացած կայքը ցանկացած երկրում, ազատ"
    },
    "Access cool sites": {
        "message": "Մուտքի զով կայքեր"
    },
    "Access more sites": {
        "message": "Մուտքի ավելի կայքեր"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Մուտքի կայքեր ասիական ձեր երկրում եւ արագացնել ձեր ինտերնետից Hola - Free!"
    },
    "Accessing $1 with Hola": {
        "message": "Մուտք $1 Hola"
    },
    "Account": {
        "message": "Հաշիվ"
    },
    "Account type": {
        "message": "Հաշվի տեսակը"
    },
    "Activating...": {
        "message": "Ակտիվացնելով..."
    },
    "All ($1)": {
        "message": "Բոլորը ($1)"
    },
    "Apply settings...": {
        "message": "Դիմել կայանքները ..."
    },
    "Author site:": {
        "message": "Հեղինակ site:"
    },
    "Author:": {
        "message": "Հեղինակ:"
    },
    "BA": {
        "message": "Բոսնիա-Հերցեգովինա"
    },
    "BB": {
        "message": "Բարբադոս"
    },
    "BD": {
        "message": "Բանգլադեշ"
    },
    "BE": {
        "message": "Բելգիա"
    },
    "BF": {
        "message": "Բուրկինա Ֆասո"
    },
    "BG": {
        "message": "Բուլղարիա"
    },
    "BH": {
        "message": "Բահրեյն"
    },
    "BI": {
        "message": "Բուրունդի"
    },
    "BJ": {
        "message": "Բենին"
    },
    "BL": {
        "message": "Սուրբ Բարդուղիմեոսի կղզի"
    },
    "BN": {
        "message": "Բրունեյ"
    },
    "BO": {
        "message": "Բոլիվիա"
    },
    "BQ": {
        "message": "Բրիտանական Antarctic Territory"
    },
    "BR": {
        "message": "Բրազիլիա"
    },
    "BS": {
        "message": "Բահամներ"
    },
    "BT": {
        "message": "Բուտան"
    },
    "BW": {
        "message": "Բոտսվանա"
    },
    "BY": {
        "message": "Բելոռուս"
    },
    "BZ": {
        "message": "Բելիզ"
    },
    "Back to $1": {
        "message": "Վերադառնալ $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Եղեք, որ առաջին անգամ է ստանալ Hola for iPhone / iPad - Գրանցվեք հիմա:"
    },
    "Browsing": {
        "message": "Թերթելիս"
    },
    "Buffering problems?": {
        "message": "Բուֆերային խնդիրները."
    },
    "Buffering?": {
        "message": "Buffering."
    },
    "CA": {
        "message": "Կանադա"
    },
    "CD": {
        "message": "Congo -"
    },
    "CF": {
        "message": "Կենտրոնական Աֆրիկյան Հանրապետություն"
    },
    "CG": {
        "message": "Կոնգո"
    },
    "CH": {
        "message": "Շվեյցարիա"
    },
    "CI": {
        "message": "Փղոսկրի Ափ"
    },
    "CL": {
        "message": "Չիլի"
    },
    "CM": {
        "message": "Կամերուն"
    },
    "CN": {
        "message": "Չինաստան"
    },
    "CO": {
        "message": "Կոլումբիա"
    },
    "CP": {
        "message": "Clipperton կղզի"
    },
    "CR": {
        "message": "Կոստա-Ռիկա"
    },
    "CS": {
        "message": "Սերբիա և Մոնտենեգրո"
    },
    "CT": {
        "message": "Canton եւ Enderbury կղզիներ"
    },
    "CU": {
        "message": "Կուբա"
    },
    "CV": {
        "message": "Կաբո-Վերդե"
    },
    "CY": {
        "message": "Կիպրոս"
    },
    "CZ": {
        "message": "Չեխիայի Հանրապետություն"
    },
    "Changing country...": {
        "message": "Changing երկիր ..."
    },
    "Check out Hola for $1!": {
        "message": "Ստուգել Hola համար $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Ստուգել Hola բջջային սարքերի համար"
    },
    "Check your Internet connection": {
        "message": "Ստուգել ունեք ինտերնետ"
    },
    "Choose<br>Country": {
        "message": "Ընտրել <br> Երկիր"
    },
    "Configuring...": {
        "message": "Configuring ..."
    },
    "Connecting...": {
        "message": "Connecting ..."
    },
    "Cool site!": {
        "message": "Cool կայքը!"
    },
    "Creative licenses": {
        "message": "Creative լիցենզիաներ"
    },
    "DD": {
        "message": "East Գերմանիան"
    },
    "DE": {
        "message": "Գերմանիա"
    },
    "DJ": {
        "message": "Ջիբուտի"
    },
    "DK": {
        "message": "Դանիա"
    },
    "DM": {
        "message": "Դոմինիկա"
    },
    "DO": {
        "message": "Դոմինիկյան Հանրապետություն"
    },
    "DZ": {
        "message": "Ալժիր"
    },
    "Delete": {
        "message": "Ջնջել"
    },
    "Deleted from my list": {
        "message": "Ջնջված իմ ցուցակից"
    },
    "Did it work?": {
        "message": "Արդյոք դա աշխատում?"
    },
    "Did you experience any buffering?": {
        "message": "Արդյոք դուք զգում որեւէ buffering."
    },
    "Disliked it": {
        "message": "Սիրում այն"
    },
    "Don't show again for $1 for one week": {
        "message": "Մի ցույց է $1 մեկ շաբաթ"
    },
    "Don't show again for any site for one week": {
        "message": "Մի ցույց կրկին ցանկացած վայրում Մեկ շաբաթում"
    },
    "Downloading": {
        "message": "Ներբեռնում"
    },
    "EA": {
        "message": "Ceuta եւ Melilla"
    },
    "EC": {
        "message": "Էկվադոր"
    },
    "EE": {
        "message": "Էստոնիա"
    },
    "EG": {
        "message": "Եգիպտոս"
    },
    "EH": {
        "message": "Արեվմտյան Սահարա"
    },
    "ER": {
        "message": "Էրիտրեա"
    },
    "ES": {
        "message": "Իսպանիա"
    },
    "ET": {
        "message": "Եթովպիա"
    },
    "Enable": {
        "message": "Միացնել"
    },
    "Enable Hola Accelerator": {
        "message": "Միացնել Hola արագացուցչային"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Վայելում Hola Chrome- ի համար."
    },
    "Enter site to access": {
        "message": "Մուտքագրեք կայքում մուտք"
    },
    "Enter your email": {
        "message": "Մուտքագրեք Ձեր էլ."
    },
    "FI": {
        "message": "Ֆինլանդիա"
    },
    "FJ": {
        "message": "Ֆիջի"
    },
    "FK": {
        "message": "Ֆոլկլենդյան կղզիներ"
    },
    "FM": {
        "message": "Միկրոնեզիա"
    },
    "FO": {
        "message": "Ֆարերյան կղզիներ"
    },
    "FQ": {
        "message": "Ֆրանսիական հարավային եւ անտարկտիկ տարածքներ"
    },
    "FR": {
        "message": "Ֆրանսիա"
    },
    "Fast": {
        "message": "Արագ"
    },
    "Finding new peers...": {
        "message": "Գտնելով նոր հասակակիցների ..."
    },
    "Finding peers...": {
        "message": "Գտնելով հասակակիցների ..."
    },
    "Free": {
        "message": "Ազատ"
    },
    "Full list": {
        "message": "Լրիվ ցանկը"
    },
    "GA": {
        "message": "Գաբոն"
    },
    "GB": {
        "message": "Մեծ Բրիտանիա"
    },
    "GD": {
        "message": "Գրենադա"
    },
    "GE": {
        "message": "Վրաստան"
    },
    "GF": {
        "message": "Ֆրանսիական Գվիանա"
    },
    "GH": {
        "message": "Գանա"
    },
    "GM": {
        "message": "Գամբիա"
    },
    "GN": {
        "message": "Գվինեա"
    },
    "GP": {
        "message": "Գվադելուպա"
    },
    "GQ": {
        "message": "Հասարակածային Գվինեա"
    },
    "GR": {
        "message": "Հունաստան"
    },
    "GS": {
        "message": "Հարավային Ջորջիա եւ Հարավային Սենդվիչյան կղզիներ"
    },
    "GT": {
        "message": "Գվատեմալա"
    },
    "GW": {
        "message": "Գվինեա-Բիսաու"
    },
    "GY": {
        "message": "Գայանա"
    },
    "Get 24/7 Unblocking": {
        "message": "Ստանալ 24/7 Արգելափակման բացում"
    },
    "Get Free Premium": {
        "message": "Ստանալ անվճար պրեմիում"
    },
    "Get Hola Accelerator": {
        "message": "Ստանալ Hola արագացուցչային"
    },
    "Get Hola Player": {
        "message": "Ստացեք Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Ստացեք Hola Plus է ՄԱԿ - ի ընդհատվեց, ad-անվճար ծառայություն."
    },
    "Get Hola Premium": {
        "message": "Ստանալ Hola պրեմիում"
    },
    "Get Hola for Android": {
        "message": "Ստանալ Hola Android-ի համար"
    },
    "Get Premium support": {
        "message": "Ստանալ Պրեմիում աջակցություն"
    },
    "Get Unlimited Unblocking": {
        "message": "Ստանալ անսահմանափակ Արգելափակման բացում"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Ստացեք մուտք censored կայքեր, փորձեք այն հիմա: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Ստացեք օգնություն ինժեներ է Skype-ի միջոցով:"
    },
    "Get the Fastest Servers": {
        "message": "Ստանալ ամենաարագ Սերվերներ"
    },
    "Go": {
        "message": "Գնալ"
    },
    "Go Hola Premium": {
        "message": "Գնալ Hola Պրեմիում"
    },
    "HM": {
        "message": "Հերդ Կղզի եւ Մակդոնալդ կղզիներ"
    },
    "HN": {
        "message": "Հոնդուրաս"
    },
    "HR": {
        "message": "Հորվաթիա"
    },
    "HT": {
        "message": "Հաիթի"
    },
    "HU": {
        "message": "Հունգարիա"
    },
    "Hate it": {
        "message": "Ատել այն"
    },
    "Help": {
        "message": "Օգնություն"
    },
    "Hey,\n\nI'm using": {
        "message": "Ալլո,\n\nես օգտագործում"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Ալլո, ես սկսեցի օգտագործելով $1 ($2). Այն թույլ է տալիս ինձ փրփրաբաշ ալիք ինտերնետից արագ եւ մուտք է $3, իմ երկրում."
    },
    "Hola Accelerator": {
        "message": "Hola արագացուցչային"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola չի կարող աշխատել, քանի որ եւս մեկ ընդլայնումը վերահսկել ձեր proxy պարամետրերը."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola լավ չի աշխատում, Windows 8 - ռեժիմում. Խնդրում ենք անցնել սեղանադիր ռեժիմում. Սեղմեք <a> այստեղ </a> հրահանգների"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola չէ հենց հիմա, բայց մենք աշխատում ենք դրա վրա."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola դուրս, սեղմեք միացնել"
    },
    "Hola site list": {
        "message": "Hola site ցուցակ"
    },
    "I can now access $1 from any country!": {
        "message": "Ես կարող եմ այժմ մուտք գործել $1 - ից ցանկացած երկրում."
    },
    "I did not experience any buffering": {
        "message": "Ես չէի զգում որեւէ buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Ես պարզապես օգտվել է գրաքննության կայքը, օգտագործելով Hola համար $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Ես օգտագործում $1 դիտելու $2 իմ երկրում, եւ փրփրաբաշ ալիք արագ!"
    },
    "IC": {
        "message": "Կանարյան կղզիներ"
    },
    "ID": {
        "message": "Ինդոնեզիա"
    },
    "IE": {
        "message": "Իռլանդիա"
    },
    "IL": {
        "message": "Իսրայել"
    },
    "IN": {
        "message": "Հնդկաստան"
    },
    "IQ": {
        "message": "Իրաք"
    },
    "IR": {
        "message": "Իրան"
    },
    "IS": {
        "message": "Իսլանդիա"
    },
    "IT": {
        "message": "Իտալիա"
    },
    "Improve translation": {
        "message": "Բարելավել թարգմանությունը"
    },
    "Initializing...": {
        "message": "Նախապատրաստվում է ..."
    },
    "Install": {
        "message": "Տեղադրեք"
    },
    "Install Accelerator": {
        "message": "Տեղադրեք արագացուցչային"
    },
    "Install Free Hola Accelerator": {
        "message": "Տեղադրեք Free Hola արագացուցչի"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Տեղադրեք Hola Շարժիչի շարունակել օգտագործել Hola անվճար"
    },
    "Instantly watch any torrent Video": {
        "message": "Անմիջապես հետեւել որեւէ հեղեղ Video"
    },
    "Invite friends - free Premium.": {
        "message": "Հրավիրեք ընկերներին - Free Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Հրավիրեք ընկերներին. Ստանալ Premium."
    },
    "It was okay": {
        "message": "Դա Okay"
    },
    "JE": {
        "message": "Ջերսի"
    },
    "JM": {
        "message": "Ջամայկա"
    },
    "JO": {
        "message": "Հորդանան"
    },
    "JP": {
        "message": "Ճապոնիա"
    },
    "KE": {
        "message": "Քենիա"
    },
    "KG": {
        "message": "Կիրգիզստան"
    },
    "KH": {
        "message": "Կամբոջա"
    },
    "KI": {
        "message": "Կիրիբատի"
    },
    "KM": {
        "message": "Կոմորոս"
    },
    "KN": {
        "message": "Սենտ Կիտս-Նեվիս"
    },
    "KP": {
        "message": "Հյուսիսային Կորեա"
    },
    "KR": {
        "message": "Հարավային Կորեա"
    },
    "KW": {
        "message": "Քուվեյթ"
    },
    "KZ": {
        "message": "Ղազախստան"
    },
    "LA": {
        "message": "Լաոս"
    },
    "LB": {
        "message": "Լիբանան"
    },
    "LC": {
        "message": "Սանտա Լուչիա"
    },
    "LI": {
        "message": "Լիխտենշտեյն"
    },
    "LK": {
        "message": "Շրի Լանկա"
    },
    "LR": {
        "message": "Լիբերիա"
    },
    "LS": {
        "message": "Լեսոտո"
    },
    "LT": {
        "message": "Լիտվա"
    },
    "LU": {
        "message": "Լյուքսեմբուրգ"
    },
    "LV": {
        "message": "Լատվիա"
    },
    "LY": {
        "message": "Լիբիա"
    },
    "Language": {
        "message": "Լեզուն,"
    },
    "Library": {
        "message": "Գրադարան"
    },
    "Like it": {
        "message": "Դուր է գալիս,"
    },
    "Loading": {
        "message": "Բեռնում"
    },
    "Loading site...": {
        "message": "Բեռնում"
    },
    "Log in": {
        "message": "Մուտք"
    },
    "Log out": {
        "message": "Ելք"
    },
    "Love Hola?": {
        "message": "Սեր Hola."
    },
    "Love it": {
        "message": "Սիրում այն"
    },
    "MA": {
        "message": "Մարոկո"
    },
    "MC": {
        "message": "Մոնակո"
    },
    "MD": {
        "message": "Մոլդովա"
    },
    "ME": {
        "message": "Մոնտենեգրո"
    },
    "MG": {
        "message": "Մադագասկար"
    },
    "MH": {
        "message": "Մարշալյան կղզիներ"
    },
    "MI": {
        "message": "Կես կղզիներ"
    },
    "MK": {
        "message": "Մակեդոնիա"
    },
    "ML": {
        "message": "Մալի"
    },
    "MM": {
        "message": "Մյանմա"
    },
    "MN": {
        "message": "Մոնղոլիա"
    },
    "MO": {
        "message": "Մակաո SAR China"
    },
    "MP": {
        "message": "Հյուսիսային Մարիանյան կղզիներ"
    },
    "MR": {
        "message": "Մավրիտանիա"
    },
    "MT": {
        "message": "Մալթա"
    },
    "MU": {
        "message": "Մավրիտոս"
    },
    "MV": {
        "message": "Մալդիվներ"
    },
    "MW": {
        "message": "Մալավի"
    },
    "MX": {
        "message": "Մեքսիկա"
    },
    "MY": {
        "message": "Մալայզիա"
    },
    "MZ": {
        "message": "Մոզամբիկ"
    },
    "Make your Internet better with $1": {
        "message": "Ձեր Ինտերնետ, ավելի լավ է $1"
    },
    "Menu": {
        "message": "Մենյու"
    },
    "Might not work on all sites": {
        "message": "Կարող է աշխատում է բոլոր կայքերը"
    },
    "Mode": {
        "message": "Ռեժիմ"
    },
    "More countries": {
        "message": "Ավելի շատ երկրներ"
    },
    "More sites...": {
        "message": "ավելին ..."
    },
    "More...": {
        "message": "ավելին ..."
    },
    "My Account": {
        "message": "Իմ հաշիվը"
    },
    "My History": {
        "message": "Իմ Պատմություն"
    },
    "My Settings": {
        "message": "Իմ Կառավարում"
    },
    "My favorites": {
        "message": "Իմ էջանշանները"
    },
    "NA": {
        "message": "Նամիբիա"
    },
    "NC": {
        "message": "Նոր Կալեդոնիա"
    },
    "NE": {
        "message": "Նիգեր"
    },
    "NG": {
        "message": "Նիգերիա"
    },
    "NI": {
        "message": "Նիկարագուա"
    },
    "NL": {
        "message": "Նիդերլանդեր"
    },
    "NO": {
        "message": "Նորվեգիա"
    },
    "NP": {
        "message": "Նեպալ"
    },
    "NR": {
        "message": "Նաուրու"
    },
    "NT": {
        "message": "Չեզոք գոտի"
    },
    "NZ": {
        "message": "Նոր Զելանդիա"
    },
    "Need Help?": {
        "message": "Օգնություն է պետք:"
    },
    "Never ask me again": {
        "message": "Երբեք ինձ հարցնում է"
    },
    "Never be a peer": {
        "message": "Երբեք չի կարող լինել հասակակիցների"
    },
    "No": {
        "message": "Ոչ"
    },
    "No idle peers found.": {
        "message": "Ոչ պարապ հասակակիցների գտնվել."
    },
    "No recent videos found": {
        "message": "Ոչ վերջին տեսանյութեր գտնվել"
    },
    "No saved videos found": {
        "message": "Ոչ պահպանված տեսանյութեր գտնվել"
    },
    "No title": {
        "message": "Ոչ կոչումը"
    },
    "No videos found": {
        "message": "Ոչ տեսանյութեր գտնվել"
    },
    "No videos found on active page": {
        "message": "Ոչ տեսանյութեր հայտնաբերվել ակտիվ էջում"
    },
    "No, Thanks": {
        "message": "Ոչ, շնորհակալություն"
    },
    "No, fix it": {
        "message": "Ոչ, այն վերանորոգել"
    },
    "Not working?": {
        "message": "Չի աշխատում."
    },
    "Number of users that pressed not working": {
        "message": "Միավորների քան - օգտագործողները, որոնք սեղմված չի աշխատում"
    },
    "Number of users that use this option": {
        "message": "Միավորների քան - օգտագործողները, որոնք օգտագործում են այս տարբերակը"
    },
    "OM": {
        "message": "Օման"
    },
    "Oh, yes!": {
        "message": "Oh, այո!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Հին տարբերակը Firefox. Press <a> այստեղ </a> բարելավել."
    },
    "On": {
        "message": "Վրա"
    },
    "Open Media Player": {
        "message": "Բաց Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Մեր Brand New Mplayer է Շուտով!"
    },
    "PA": {
        "message": "Պանամա"
    },
    "PE": {
        "message": "Պերու"
    },
    "PF": {
        "message": "Ֆրանսիական Պոլինեզիա"
    },
    "PG": {
        "message": "Պապուա Նոր Գվինեա"
    },
    "PH": {
        "message": "Ֆիլիպիններ"
    },
    "PK": {
        "message": "Պակիստան"
    },
    "PL": {
        "message": "Լեհաստան"
    },
    "PM": {
        "message": "Սեն Պյեր եւ Միկելոն"
    },
    "PR": {
        "message": "Պուերտո Ռիկո"
    },
    "PS": {
        "message": "Պաղեստինյան տարածքներ"
    },
    "PT": {
        "message": "Պորտուգալիա"
    },
    "PU": {
        "message": "ԱՄՆ Տարբեր Խաղաղօվկիանոսյան կղզիներ"
    },
    "PW": {
        "message": "Պալաու"
    },
    "PY": {
        "message": "Պարագվայ"
    },
    "PZ": {
        "message": "Պանամա Canal Zone"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Խնդրում ենք անջատել այլ <a>ընդարձակման</a>, որ կարծում եք, կարող եք վերահսկել ձեր վստահված անձ պարամետրեր, ինչպիսիք են գովազդային - blockers, այլ VPN ծառայություններ եւ այլն:"
    },
    "Please enter a valid email address.": {
        "message": "Խնդրում ենք մուտքագրել վավեր էլ հասցե."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Խնդրում ենք մուտքագրել վեբ կայքի հասցեն, ինչպես facebook.com"
    },
    "Please help us get better": {
        "message": "Խնդրում ենք օգնել մեզ ավելի լավ"
    },
    "Popular in $1": {
        "message": "Հայտնի է, $1"
    },
    "Popular in the world": {
        "message": "Տարածված է աշխարհում"
    },
    "Popular sites": {
        "message": "Հանրաճանաչ կայքեր"
    },
    "Premium": {
        "message": "Հավելավճար"
    },
    "QA": {
        "message": "Կատար"
    },
    "QO": {
        "message": "Ֆոլկլենդյան Օվկիանիա"
    },
    "RO": {
        "message": "Ռումինիա"
    },
    "RU": {
        "message": "Ռուսաստան"
    },
    "RW": {
        "message": "Ռուանդա"
    },
    "Rate us": {
        "message": "Գնահատեք մեզ"
    },
    "Recent Videos": {
        "message": "Վերջին Videos"
    },
    "Reload": {
        "message": "Վերաբեռնել"
    },
    "Reload Hola": {
        "message": "Վերբեռնել Hola"
    },
    "Remember server": {
        "message": "Հիշել սերվեր"
    },
    "Report a problem": {
        "message": "Հաղորդել խնդիր"
    },
    "Retry safe mode": {
        "message": "Կրկնափորձել անվտանգ ռեժիմ"
    },
    "SA": {
        "message": "Սաուդիան Արաբիա"
    },
    "SB": {
        "message": "Սոլոմոնյան կղզիներ"
    },
    "SC": {
        "message": "Սեյշելներ"
    },
    "SD": {
        "message": "Սուդան"
    },
    "SE": {
        "message": "Շվեդիա"
    },
    "SG": {
        "message": "Սինգապուր"
    },
    "SI": {
        "message": "Սլովենիա"
    },
    "SJ": {
        "message": "Սվալբարդ եւ Յան Մայեն"
    },
    "SK": {
        "message": "Սլովակիա"
    },
    "SL": {
        "message": "Սյերա-Լեոնե"
    },
    "SM": {
        "message": "Սան Մարինո"
    },
    "SN": {
        "message": "Սենեգալ"
    },
    "SO": {
        "message": "Սոմալի"
    },
    "SR": {
        "message": "Սուրինամ"
    },
    "ST": {
        "message": "Սան-Թոմե-Փրինսիպի"
    },
    "SU": {
        "message": "Սովետական ​​Սոցիալիստական ​​Հանրապետությունների"
    },
    "SV": {
        "message": "Սալվադոր"
    },
    "SY": {
        "message": "Սիրիա"
    },
    "SZ": {
        "message": "Սվազիլենդ"
    },
    "Safe": {
        "message": "Ապահով"
    },
    "Safe mode": {
        "message": "Անվտանգ ռեժիմ"
    },
    "Save": {
        "message": "Պահպանել"
    },
    "Saved Videos": {
        "message": "Պահված Videos"
    },
    "Saved for later": {
        "message": "Պահված ավելի ուշ"
    },
    "Search video title": {
        "message": "Փնտրել վիդեո կոչումը"
    },
    "Select a Country": {
        "message": "Ընտրել երկիրը"
    },
    "Select site to unblock": {
        "message": "Ընտրել կայքը վերագործարկելու"
    },
    "Server saved!": {
        "message": "Server գտնվել!"
    },
    "Set safe mode for $1 $2": {
        "message": "Սահմանել անվտանգ ռեժիմում $1 $2"
    },
    "Settings": {
        "message": "Կառավարում"
    },
    "Share": {
        "message": "Բաժնետոմս"
    },
    "Share $1 on $2": {
        "message": "Share $1 - ին $2"
    },
    "Share $1 via $2": {
        "message": "Share $1 միջոցով $2"
    },
    "Share with friends!": {
        "message": "Share ընկերների հետ!"
    },
    "Sign up": {
        "message": "Գրանցվել"
    },
    "Solve buffering": {
        "message": "Լուծել buffering"
    },
    "Solve buffering problems with": {
        "message": "Լուծել buffering խնդիրները"
    },
    "Solves it": {
        "message": "Լուծում է"
    },
    "Staff Picks": {
        "message": "Աշխատակազմ տեսաշար"
    },
    "Start Hola": {
        "message": "սկիզբ"
    },
    "Starting...": {
        "message": "Սկսած ..."
    },
    "Stopping peer routing...": {
        "message": "Կանգնեցնելով հասակակիցների երթուղայնացման ..."
    },
    "Stream": {
        "message": "Հոսանք"
    },
    "Stream Instantly": {
        "message": "Stream ակնթարթորեն"
    },
    "Submit": {
        "message": "Ներկայացնել"
    },
    "Support Hola": {
        "message": "Աջակցություն Hola"
    },
    "TC": {
        "message": "Թուրքերը եւ Կայկոս կղզիներ"
    },
    "TD": {
        "message": "Չադ"
    },
    "TF": {
        "message": "Ֆրանսիական Հարավային Տարածքներ"
    },
    "TG": {
        "message": "Տոգո"
    },
    "TH": {
        "message": "Թաիլանդ"
    },
    "TJ": {
        "message": "Տաճիկստան"
    },
    "TM": {
        "message": "Թուրքմենստան"
    },
    "TN": {
        "message": "Թունիս"
    },
    "TO": {
        "message": "Տոնգա"
    },
    "TR": {
        "message": "Թուրքիա"
    },
    "TT": {
        "message": "Տրինիդադ-Տոբագո"
    },
    "TV": {
        "message": "Տուվալու"
    },
    "TW": {
        "message": "Թայվան"
    },
    "TZ": {
        "message": "Տանզանիա"
    },
    "Talk to us on $1": {
        "message": "Խոսեք մեզ $1"
    },
    "Tell friends about $1": {
        "message": "Արտահայտեք ընկերներին $1"
    },
    "Testing connection...": {
        "message": "Testing կապ ..."
    },
    "Thank you!": {
        "message": "Շնորհակալություն!"
    },
    "There seems to be an error": {
        "message": "Կարծես թե սխալ"
    },
    "Top popular sites": {
        "message": "Top Հանրաճանաչ կայքեր"
    },
    "Translate to your language": {
        "message": "Թարգմանել ձեր լեզուն"
    },
    "Try again": {
        "message": "Փորձեք կրկին"
    },
    "Try another server": {
        "message": "Փորձեք այլ սերվեր"
    },
    "Try it": {
        "message": "Փորձեք այն"
    },
    "Try safe mode": {
        "message": "Փորձեք անվտանգ ռեժիմ"
    },
    "Try to <span>reload</span>": {
        "message": "Փորձեք <span> վերաբեռնել </span>"
    },
    "Trying another peer...": {
        "message": "Փորձելով մեկ Գործընկերների ..."
    },
    "Turn off Accelerator": {
        "message": "Անջատել արագացուցչային"
    },
    "Turn off Hola": {
        "message": "Անջատել Hola"
    },
    "Turn on Accelerator": {
        "message": "Միացնել արագացուցչային"
    },
    "Turn on Hola": {
        "message": "Միացնել Hola"
    },
    "Turn on to get started": {
        "message": "Միացնել սկսել"
    },
    "UA": {
        "message": "Ուկրաինա"
    },
    "UG": {
        "message": "Ուգանդա"
    },
    "UM": {
        "message": "Ֆարերյան կղզիներ"
    },
    "US": {
        "message": "Ամէրիկայի Միացյալ Նահանգնէր"
    },
    "UY": {
        "message": "Ուրուգվայ"
    },
    "UZ": {
        "message": "Ուզբեկստան"
    },
    "Unblocker is disabled": {
        "message": "Unblocker անջատված"
    },
    "Unblocker?": {
        "message": "Unblocker."
    },
    "Update": {
        "message": "Թարմացնել"
    },
    "Upgrade": {
        "message": "Թարմացնել"
    },
    "Using": {
        "message": "Օգտագործելով"
    },
    "Using Hola": {
        "message": "Օգտագործելով Hola"
    },
    "VA": {
        "message": "Վատիկան"
    },
    "VC": {
        "message": "Սենտ Վիսենտ-Գրենադիններ"
    },
    "VD": {
        "message": "North Վիետնամ"
    },
    "VE": {
        "message": "Վենեսուելա"
    },
    "VG": {
        "message": "Բրիտանական Վիրջինյան կղզիներ"
    },
    "VI": {
        "message": "Ամերիկյան Վիրջինյան կղզիներ"
    },
    "VN": {
        "message": "Վիետնամ"
    },
    "VPN Premium": {
        "message": "VPN Պրեմիում"
    },
    "VU": {
        "message": "Վանուատու"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Շատ հին տարբերակ քրոմ, <a> թարմացման </a> Chrome օգտագործել Hola"
    },
    "Video stuck?": {
        "message": "Video խրված."
    },
    "Videos available for instant streaming": {
        "message": "Videos մատչելի ակնթարթային հոսքային"
    },
    "WF": {
        "message": "Վոլիս եւ Ֆուտունա"
    },
    "WS": {
        "message": "Սամոա"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Ուզում Hola է այլ սարքերի. (Xbox, PS, Apple TV, iPhone ...). Սեղմեք այստեղ"
    },
    "Want to know more?": {
        "message": "Ցանկանում եք իմանալ ավելին?"
    },
    "Watch Now": {
        "message": "Դիտեք Now"
    },
    "We found $1 videos": {
        "message": "Մենք գտանք $1 տեսանյութեր"
    },
    "We will be in touch with you soon": {
        "message": "Մենք պետք է կապի մեջ ենք շուտով"
    },
    "Working!": {
        "message": "Աշխատանքային!"
    },
    "Working?": {
        "message": "Աշխատում."
    },
    "Works on all sites but slower": {
        "message": "Աշխատում է բոլոր կայքերի բայց ավելի դանդաղ"
    },
    "YD": {
        "message": "Ժողովրդական Ժողովրդավարական Հանրապետություն Եմենի"
    },
    "YE": {
        "message": "Եմեն"
    },
    "Yes": {
        "message": "Այո"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Դուք պետք է բարելավել վերջին տարբերակը օպերայի օգտագործել Hola. Սեղմեք <a>այստեղ</a> է բարձրացնել."
    },
    "ZA": {
        "message": "Հարավային Աֆրիկա"
    },
    "ZM": {
        "message": "Զամբիա"
    },
    "ZW": {
        "message": "Զիմբաբվե"
    },
    "ZZ": {
        "message": "Անհայտ կամ անվավեր Region"
    },
    "app_desc": {
        "message": "Մուտք գործել կայքեր արգելափակվել է ձեր երկրի, ընկերության կամ դպրոցի հետ Hola! Hola անվճար է եւ հեշտ օգտագործման."
    },
    "app_name": {
        "message": "Hola Better ինտերնետ"
    },
    "back to": {
        "message": "Վերադառնալ"
    },
    "changing...": {
        "message": "փոխվում է..."
    },
    "cool sites": {
        "message": "զով կայքեր"
    },
    "current site": {
        "message": "ընթացիկ կայքը"
    },
    "day": {
        "message": "օր"
    },
    "days": {
        "message": "օր"
    },
    "even more...": {
        "message": "ավելի..."
    },
    "mode": {
        "message": "ռեժիմ"
    },
    "more options...": {
        "message": "Լրացուցիչ ընտրանքներ..."
    },
    "not working?": {
        "message": "չի աշխատում."
    },
    "not working? try another server": {
        "message": "չի աշխատում. փորձեք մեկ այլ սերվեր"
    },
    "on this page": {
        "message": "Այս էջում"
    },
    "sites that are censored": {
        "message": "կայքեր, որոնք censored"
    },
    "start": {
        "message": "սկիզբ"
    },
    "working? remember": {
        "message": "աշխատում. հիշում"
    }
};
return E; });