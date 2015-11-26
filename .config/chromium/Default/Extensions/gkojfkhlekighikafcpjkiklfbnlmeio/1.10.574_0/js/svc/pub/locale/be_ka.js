'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " მეშვეობით "
    },
    "$1 Buffering?": {
        "message": "$1 ბუფერული?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola წვდომისათვის $2\n\nდააწკაპუნეთ აქ გააკეთოს იგივე: $3\n\nეს მოყვება Hola, რომელიც საშუალებას ჩემთვის ვიჯდები ინტერნეტში სწრაფად და წვდომის $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN პრემიუმი"
    },
    "$1 from $2": {
        "message": "$1 $2"
    },
    "$1 not found": {
        "message": "$1 არ არის ნაპოვნი"
    },
    "$1 via Hola": {
        "message": "$1 მეშვეობით Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(ზოგიერთი Hola ფუნქცია შეიძლება არ ჰქონდეს თქვენს ვერსია)"
    },
    "AC": {
        "message": "ამაღლების კუნძული"
    },
    "AD": {
        "message": "ანდორა"
    },
    "AE": {
        "message": "არაბეთის გაერთიანებული ემირატები"
    },
    "AF": {
        "message": "ავღანეთი"
    },
    "AG": {
        "message": "ანტიგუა და ბარბუდა"
    },
    "AI": {
        "message": "ანგვილა"
    },
    "AL": {
        "message": "ალბანეთი"
    },
    "AM": {
        "message": "სომხეთი"
    },
    "AN": {
        "message": "ნიდერლანდების ანტილები"
    },
    "AO": {
        "message": "ანგოლა"
    },
    "AQ": {
        "message": "ანტარქტიკა"
    },
    "AR": {
        "message": "არგენტინა"
    },
    "AS": {
        "message": "ამერიკული სამოა"
    },
    "AT": {
        "message": "ავსტრია"
    },
    "AU": {
        "message": "ავსტრალია"
    },
    "AW": {
        "message": "არუბა"
    },
    "AX": {
        "message": "ალანდის კუნძულები"
    },
    "AZ": {
        "message": "აზერბაიჯანი"
    },
    "About": {
        "message": "შესახებ"
    },
    "About Hola": {
        "message": "მომხმარებლის Hola"
    },
    "Accelerator is": {
        "message": "Accelerator არის"
    },
    "Access $1 - cool site!": {
        "message": "წვდომა $1 - მაგარი საიტი!"
    },
    "Access $1?": {
        "message": "წვდომის $1?"
    },
    "Access any site from any country, free": {
        "message": "ხელმისაწვდომობა ნებისმიერი საიტი ნებისმიერი ქვეყნის, უფასო"
    },
    "Access cool sites": {
        "message": "წვდომა cool საიტები"
    },
    "Access more sites": {
        "message": "წვდომა უფრო საიტები"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "ძებნა საიტები ცენზურა თქვენს ქვეყანაში და დააჩქაროს თქვენი ინტერნეტის Hola - უფასო!"
    },
    "Accessing $1 with Hola": {
        "message": "წვდომის $1 Hola"
    },
    "Account": {
        "message": "ანგარიში"
    },
    "Account type": {
        "message": "ანგარიშის ტიპი"
    },
    "Activating...": {
        "message": "გააქტიურება..."
    },
    "All ($1)": {
        "message": "ყველა ($1)"
    },
    "Apply settings...": {
        "message": "მიმართვა პარამეტრები..."
    },
    "Author site:": {
        "message": "ავტორი ადგილზე:"
    },
    "Author:": {
        "message": "ავტორი:"
    },
    "Awesome!": {
        "message": "რა!"
    },
    "BA": {
        "message": "ბოსნია და ჰერცეგოვინა"
    },
    "BB": {
        "message": "ბარბადოსი"
    },
    "BD": {
        "message": "ბანგლადეში"
    },
    "BE": {
        "message": "ბელგია"
    },
    "BF": {
        "message": "ბურკინა-ფასო"
    },
    "BG": {
        "message": "ბულგარეთი"
    },
    "BH": {
        "message": "ბაჰრეინი"
    },
    "BI": {
        "message": "ბურუნდი"
    },
    "BJ": {
        "message": "ბენინი"
    },
    "BL": {
        "message": "სენ-ბართელმი"
    },
    "BM": {
        "message": "ბერმუდა"
    },
    "BN": {
        "message": "ბრუნეი"
    },
    "BO": {
        "message": "ბოლივია"
    },
    "BQ": {
        "message": "ბრიტანეთის ანტარქტიდის ტერიტორია"
    },
    "BR": {
        "message": "ბრაზილია"
    },
    "BS": {
        "message": "ბაჰამის კუნძულები"
    },
    "BT": {
        "message": "ბუტანი"
    },
    "BV": {
        "message": "ბუვეს კუნძული"
    },
    "BW": {
        "message": "ბოტსვანა"
    },
    "BY": {
        "message": "ბელორუსია"
    },
    "BZ": {
        "message": "ბელიზი"
    },
    "Back to $1": {
        "message": "უკან $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "იყავით პირველი და მიიღოს Hola for iPhone / iPad - რეგისტრაცია:"
    },
    "Buffering problems?": {
        "message": "ბუფერული პრობლემები?"
    },
    "Buffering?": {
        "message": "ბუფერული?"
    },
    "CA": {
        "message": "კანადა"
    },
    "CD": {
        "message": "კონგო - კინშასა"
    },
    "CF": {
        "message": "ცენტრალური აფრიკის რესპუბლიკა"
    },
    "CG": {
        "message": "კონგო"
    },
    "CH": {
        "message": "შვეიცარია"
    },
    "CI": {
        "message": "სპილოს ძვლის სანაპირო"
    },
    "CK": {
        "message": "კუკის კუნძულები"
    },
    "CL": {
        "message": "ჩილე"
    },
    "CM": {
        "message": "კამერუნი"
    },
    "CN": {
        "message": "ჩინეთი"
    },
    "CO": {
        "message": "კოლუმბია"
    },
    "CP": {
        "message": "Clipperton კუნძული"
    },
    "CR": {
        "message": "კოსტა-რიკა"
    },
    "CS": {
        "message": "სერბია და მონტენეგრო"
    },
    "CT": {
        "message": "Canton და Enderbury კუნძულები"
    },
    "CU": {
        "message": "კუბა"
    },
    "CV": {
        "message": "კაბო-ვერდე"
    },
    "CX": {
        "message": "შობის კუნძული"
    },
    "CY": {
        "message": "კვიპროსი"
    },
    "CZ": {
        "message": "ჩეხეთის რესპუბლიკა"
    },
    "Changing country...": {
        "message": "იცვლება ქვეყანაში..."
    },
    "Check out Hola for $1!": {
        "message": "შეამოწმეთ Hola $1,"
    },
    "Check out Hola for mobile devices": {
        "message": "შეამოწმეთ Hola მობილური მოწყობილობებისთვის"
    },
    "Check your Internet connection": {
        "message": "გადაამოწმონ თქვენ გაქვთ ინტერნეტ"
    },
    "Choose<br>Country": {
        "message": "არჩევა <br> ქვეყანა"
    },
    "Configuring...": {
        "message": "კონფიგურაცია ..."
    },
    "Connecting...": {
        "message": "დაკავშირება ..."
    },
    "Cool site!": {
        "message": "მაგარი საიტი!"
    },
    "Creative licenses": {
        "message": "შემოქმედებითი ლიცენზია"
    },
    "DD": {
        "message": "აღმოსავლეთ გერმანიაში"
    },
    "DE": {
        "message": "გერმანია"
    },
    "DG": {
        "message": "დიეგო გარსია"
    },
    "DJ": {
        "message": "ჯიბუტი"
    },
    "DK": {
        "message": "დანია"
    },
    "DM": {
        "message": "დომინიკა"
    },
    "DO": {
        "message": "დომინიკანის რესპუბლიკა"
    },
    "DZ": {
        "message": "ალჟირი"
    },
    "Delete": {
        "message": "წაშლა"
    },
    "Deleted from my list": {
        "message": "წაიშლება ჩემს სიაში"
    },
    "Did it work?": {
        "message": "მუშაობს იგი?"
    },
    "Did you experience any buffering?": {
        "message": "იცით თუ განიცდიან ნებისმიერ buffering?"
    },
    "Disliked it": {
        "message": "არ მოსწონდა"
    },
    "Don't show again for $1 for one week": {
        "message": "არ აჩვენებს ისევ $1 ერთი კვირის განმავლობაში"
    },
    "Don't show again for any site for one week": {
        "message": "არ აჩვენებს ისევ ნებისმიერი site ერთი კვირის განმავლობაში"
    },
    "Downloading": {
        "message": "გადმოწერა"
    },
    "EA": {
        "message": "სეუტა და მელილია"
    },
    "EC": {
        "message": "ეკვადორი"
    },
    "EE": {
        "message": "ესტონეთი"
    },
    "EG": {
        "message": "ეგვიპტე"
    },
    "EH": {
        "message": "დასავლეთი საჰარა"
    },
    "ER": {
        "message": "ერიტრეა"
    },
    "ES": {
        "message": "ესპანეთი"
    },
    "ET": {
        "message": "ეთიოპია"
    },
    "EU": {
        "message": "ევროკავშირის"
    },
    "Enable": {
        "message": "ჩართვა"
    },
    "Enable Hola Accelerator": {
        "message": "ჩართვა Hola Accelerator"
    },
    "Enjoy!": {
        "message": "ისიამოვნეთ!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "მოსარგებლე Hola for Chrome?"
    },
    "Enter site to access": {
        "message": "შეიყვანეთ საიტი ხელმისაწვდომობის"
    },
    "Enter your email": {
        "message": "შეიყვანეთ თქვენი ელ"
    },
    "FI": {
        "message": "ფინეთი"
    },
    "FJ": {
        "message": "ფიჯი"
    },
    "FK": {
        "message": "ფალკლენდის კუნძულები"
    },
    "FM": {
        "message": "მიკრონეზია"
    },
    "FO": {
        "message": "ფაროს კუნძულები"
    },
    "FQ": {
        "message": "საფრანგეთის სამხრეთული და ანტარქტიდული ტერიტორია"
    },
    "FR": {
        "message": "საფრანგეთი"
    },
    "FX": {
        "message": "მიტროპოლიტი საფრანგეთის"
    },
    "Fast": {
        "message": "სწრაფი"
    },
    "Finding new peers...": {
        "message": "მოძიებაში ახალი თანატოლებს ..."
    },
    "Finding peers...": {
        "message": "მოძიება თანატოლებს ..."
    },
    "Free": {
        "message": "უფასო"
    },
    "From": {
        "message": "საწყისი"
    },
    "Full list": {
        "message": "სრული სია"
    },
    "GA": {
        "message": "გაბონი"
    },
    "GB": {
        "message": "დიდი ბრიტანეთი"
    },
    "GD": {
        "message": "გრენადა"
    },
    "GE": {
        "message": "საქართველო"
    },
    "GF": {
        "message": "საფრანგეთის გვიანა"
    },
    "GH": {
        "message": "განა"
    },
    "GI": {
        "message": "გიბრალტარი"
    },
    "GL": {
        "message": "გრენლანდია"
    },
    "GM": {
        "message": "გამბია"
    },
    "GN": {
        "message": "გვინეა"
    },
    "GP": {
        "message": "გვადელუპე"
    },
    "GQ": {
        "message": "ეკვატორული გვინეა"
    },
    "GR": {
        "message": "საბერძნეთი"
    },
    "GS": {
        "message": "სამხრეთი ჯორჯია და სამხრეთ სენდვიჩის კუნძულები"
    },
    "GT": {
        "message": "გვატემალა"
    },
    "GU": {
        "message": "გუამი"
    },
    "GW": {
        "message": "გვინეა-ბისაუ"
    },
    "GY": {
        "message": "გაიანა"
    },
    "Get 24/7 Unblocking": {
        "message": "მიიღეთ 24/7 გაწმენდის"
    },
    "Get Free Premium": {
        "message": "მიიღეთ უფასო პრემიუმი"
    },
    "Get Hola Accelerator": {
        "message": "მიიღეთ Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "მიიღეთ Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "მიიღეთ Hola პლუსია un-გაწყდება, რეკლამა თავისუფალი მომსახურება."
    },
    "Get Hola Premium": {
        "message": "მიიღეთ Hola Premium"
    },
    "Get Hola for Android": {
        "message": "მიიღეთ Hola for Android"
    },
    "Get Premium support": {
        "message": "მიიღეთ Premium მხარდაჭერა"
    },
    "Get Unlimited Unblocking": {
        "message": "მიიღეთ შეუზღუდავი გაწმენდის"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "მიიღონ დაშვება ცენზურა საიტები, ცდილობენ ახლა: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "მიიღეთ დახმარება ინჟინერი მეტი skype:"
    },
    "Get the Fastest Servers": {
        "message": "მიიღეთ უსწრაფესი სერვერები"
    },
    "Go": {
        "message": "ტურიზმი"
    },
    "Go Hola Premium": {
        "message": "ტურიზმი Hola Premium"
    },
    "HK": {
        "message": "ჰონგ კონგი"
    },
    "HM": {
        "message": "ჰერდის კუნძული და მაკდონალდის კუნძულები"
    },
    "HN": {
        "message": "ჰონდურასი"
    },
    "HR": {
        "message": "ჰორვატია"
    },
    "HT": {
        "message": "ჰაიტი"
    },
    "HU": {
        "message": "უნგრეთი"
    },
    "Hate it": {
        "message": "ვერ ვიტან"
    },
    "Help": {
        "message": "დახმარება"
    },
    "Hey,\n\nI'm using": {
        "message": "Hey,\n\nმე გამოყენებით"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "გაუმარჯოს,\n\nმე გამოყენება დაიწყო $1 ($2). ეს საშუალებას ჩემთვის ვიჯდები ინტერნეტში სწრაფად და წვდომის $3 ჩემს ქვეყანაში."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola ვერ იმუშავებს, რადგან სხვა გაფართოება მაკონტროლებელი თქვენი მარიონეტული პარამეტრები."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola არ მუშაობს კარგად Windows 8 რეჟიმში. გთხოვთ გადავიდეს კომპიუტერში რეჟიმში. Click <a> აქ </a> ინსტრუქციებისა"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola ხელმისაწვდომი არ არის, მაგრამ, ჩვენ ამაზე ვმუშაობთ."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola გამორთულია, დააჭირეთ ჩართოთ"
    },
    "Hola site list": {
        "message": "Hola საიტი სია"
    },
    "I can now access $1 from any country!": {
        "message": "მე ახლა თქვენთვის მისაწვდომია $1 ნებისმიერი ქვეყანა,"
    },
    "I did not experience any buffering": {
        "message": "მე არ განიცდიან ნებისმიერ buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "მე უბრალოდ გამოიყენოთ ცენზურა საიტზე გამოყენებით Hola $1,"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "მე გამოყენებით $1 იხილეთ $2 ჩემს ქვეყანაში, და სერფინგის სწრაფად!"
    },
    "IC": {
        "message": "კანარის კუნძულები"
    },
    "ID": {
        "message": "ინდონეზია"
    },
    "IE": {
        "message": "ირლანდია"
    },
    "IL": {
        "message": "ისრაელი"
    },
    "IM": {
        "message": "მანის კუნძული"
    },
    "IN": {
        "message": "ინდოეთი"
    },
    "IO": {
        "message": "ბრიტანული ტერიტორია ინდოეთის ოკეანეში"
    },
    "IQ": {
        "message": "ერაყი"
    },
    "IR": {
        "message": "ირანი"
    },
    "IS": {
        "message": "ისლანდია"
    },
    "IT": {
        "message": "იტალია"
    },
    "Improve translation": {
        "message": "გაუმჯობესება თარგმანი"
    },
    "Initializing...": {
        "message": "მომზადება ..."
    },
    "Install": {
        "message": "ინსტალაციის"
    },
    "Install Accelerator": {
        "message": "ინსტალაციის Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "დააინსტალირეთ უფასო Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "დააინსტალირეთ Hola ძრავის გააგრძელოს გამოყენებით Hola უფასოდ"
    },
    "Instantly watch any torrent Video": {
        "message": "მყისიერად უყუროთ ნებისმიერი torrent ვიდეო"
    },
    "Invite friends - free Premium.": {
        "message": "მოიწვიე მეგობრები - უფასო Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "მოიწვიე მეგობარი. მიიღეთ Premium."
    },
    "It was okay": {
        "message": "ეს იყო okay"
    },
    "JE": {
        "message": "ჯერსი"
    },
    "JM": {
        "message": "იამაიკა"
    },
    "JO": {
        "message": "იორდანია"
    },
    "JP": {
        "message": "იაპონია"
    },
    "KE": {
        "message": "კენია"
    },
    "KG": {
        "message": "ყირგიზეთი"
    },
    "KH": {
        "message": "კამბოჯა"
    },
    "KI": {
        "message": "კირიბატი"
    },
    "KM": {
        "message": "კომორის კუნძულები"
    },
    "KN": {
        "message": "სენტ-კიტსი და ნევისი"
    },
    "KP": {
        "message": "ჩრდილოეთი კორეა"
    },
    "KR": {
        "message": "სამხრეთი კორეა"
    },
    "KW": {
        "message": "კუვეიტი"
    },
    "KY": {
        "message": "კაიმანის კუნძულები"
    },
    "KZ": {
        "message": "ყაზახეთი"
    },
    "LA": {
        "message": "ლაოსი"
    },
    "LB": {
        "message": "ლიბანი"
    },
    "LC": {
        "message": "სენტ-ლუსია"
    },
    "LI": {
        "message": "ლიხტენშტაინი"
    },
    "LK": {
        "message": "შრი-ლანკა"
    },
    "LR": {
        "message": "ლიბერია"
    },
    "LS": {
        "message": "ლესოთო"
    },
    "LT": {
        "message": "ლიტვა"
    },
    "LU": {
        "message": "ლუქსემბურგი"
    },
    "LV": {
        "message": "ლატვია"
    },
    "LY": {
        "message": "ლიბია"
    },
    "Language": {
        "message": "ენა"
    },
    "Library": {
        "message": "ბიბლიოთეკა"
    },
    "Like it": {
        "message": "ისევე, როგორც ეს"
    },
    "Loading": {
        "message": "დატვირთვა"
    },
    "Loading site...": {
        "message": "დატვირთვა"
    },
    "Log in": {
        "message": "შესვლა"
    },
    "Log out": {
        "message": "სისტემიდან გამოსვლა"
    },
    "Love Hola?": {
        "message": "მიყვარს Hola?"
    },
    "Love it": {
        "message": "მიყვარს ეს"
    },
    "MA": {
        "message": "მაროკო"
    },
    "MC": {
        "message": "მონაკო"
    },
    "MD": {
        "message": "მოლდოვა"
    },
    "ME": {
        "message": "მონტენეგრო"
    },
    "MG": {
        "message": "მადაგასკარი"
    },
    "MH": {
        "message": "მარშალის კუნძულები"
    },
    "MI": {
        "message": "Midway კუნძულები"
    },
    "MK": {
        "message": "მაკედონია"
    },
    "ML": {
        "message": "მალი"
    },
    "MM": {
        "message": "მიანმარი"
    },
    "MN": {
        "message": "მონღოლეთი"
    },
    "MO": {
        "message": "მაკაო"
    },
    "MP": {
        "message": "ჩრდილოეთ მარიანის კუნძულები"
    },
    "MQ": {
        "message": "მარტინიკი"
    },
    "MR": {
        "message": "მავრიტანია"
    },
    "MS": {
        "message": "მონსერატი"
    },
    "MT": {
        "message": "მალტა"
    },
    "MU": {
        "message": "მავრიკია"
    },
    "MV": {
        "message": "მალდივის კუნძულები"
    },
    "MW": {
        "message": "მალავი"
    },
    "MX": {
        "message": "მექსიკა"
    },
    "MY": {
        "message": "მალაიზია"
    },
    "MZ": {
        "message": "მოზამბიკი"
    },
    "Make your Internet better with $1": {
        "message": "თქვენი ინტერნეტ უკეთესი $1"
    },
    "Menu": {
        "message": "მენიუ"
    },
    "Might not work on all sites": {
        "message": "შეიძლება არ იმუშაოს ყველა საიტები"
    },
    "Mode": {
        "message": "რეჟიმი"
    },
    "More countries": {
        "message": "მეტი ქვეყანა"
    },
    "More sites...": {
        "message": "დაწვრილებით ..."
    },
    "More...": {
        "message": "დაწვრილებით ..."
    },
    "My Account": {
        "message": "ჩემი ანგარიში"
    },
    "My History": {
        "message": "ჩემი ისტორია"
    },
    "My Settings": {
        "message": "ჩემი პარამეტრები"
    },
    "My favorites": {
        "message": "ჩემი სანიშნეები"
    },
    "NA": {
        "message": "ნამიბია"
    },
    "NC": {
        "message": "ახალი კალედონია"
    },
    "NE": {
        "message": "ნიგერი"
    },
    "NF": {
        "message": "ნორფოლკის კუნძული"
    },
    "NG": {
        "message": "ნიგერია"
    },
    "NI": {
        "message": "ნიკარაგუა"
    },
    "NL": {
        "message": "ნიდერლანდები"
    },
    "NO": {
        "message": "ნორვეგია"
    },
    "NP": {
        "message": "ნეპალი"
    },
    "NQ": {
        "message": "Dronning მოდ მიწა"
    },
    "NR": {
        "message": "ნაურუ"
    },
    "NT": {
        "message": "ნეიტრალური ზონა"
    },
    "NZ": {
        "message": "ახალი ზელანდია"
    },
    "Need Help?": {
        "message": "დახმარება გჭირდებათ?"
    },
    "Never ask me again": {
        "message": "არასდროს მეკითხებიან ერთხელ"
    },
    "Never be a peer": {
        "message": "არასოდეს არ იქნება თანხმობა"
    },
    "No": {
        "message": "არარის"
    },
    "No idle peers found.": {
        "message": "არარის უსაქმურ თანატოლებთან ი."
    },
    "No recent videos found": {
        "message": "არ ბოლო ვიდეომასალების"
    },
    "No saved videos found": {
        "message": "არ გადაარჩინა ვიდეომასალების"
    },
    "No title": {
        "message": "არარის სათაური"
    },
    "No videos found": {
        "message": "არ ვიდეომასალების"
    },
    "No videos found on active page": {
        "message": "არ ვიდეომასალების აქტიური გვერდი"
    },
    "No, Thanks": {
        "message": "არა, მადლობა"
    },
    "No, fix it": {
        "message": "არა, გაასწორონ ის"
    },
    "Not working?": {
        "message": "არ მუშაობს?"
    },
    "Number of users that pressed not working": {
        "message": "პუნქტების წევრებს, რომ დაპრესილი არ მუშაობს"
    },
    "Number of users that use this option": {
        "message": "პუნქტების წევრებს, რომ გამოიყენოს ეს ვარიანტი"
    },
    "OM": {
        "message": "ომანი"
    },
    "Oh, yes!": {
        "message": "Oh, დიახ!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "ძველი ვერსია Firefox. პრეს <a> აქ </a> განახლება."
    },
    "Open Media Player": {
        "message": "ღია Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "ჩვენი ახალი Mplayer მალე!"
    },
    "PA": {
        "message": "პანამა"
    },
    "PC": {
        "message": "წყნარი ოკეანის კუნძულები Trust ტერიტორია"
    },
    "PE": {
        "message": "პერუ"
    },
    "PF": {
        "message": "ფრანგული პოლინეზია"
    },
    "PG": {
        "message": "პაპუა-ახალი გვინეა"
    },
    "PH": {
        "message": "ფილიპინები"
    },
    "PK": {
        "message": "პაკისტანი"
    },
    "PL": {
        "message": "პოლონეთი"
    },
    "PM": {
        "message": "სენტ-პიერი და მიქელონი"
    },
    "PN": {
        "message": "პიტკერნის კუნძულები"
    },
    "PR": {
        "message": "პუერტო რიკო"
    },
    "PS": {
        "message": "პალესტინის ტერიტორია"
    },
    "PT": {
        "message": "პორტუგალია"
    },
    "PU": {
        "message": "აშშ სხვადასხვა წყნარი ოკეანის კუნძულები"
    },
    "PW": {
        "message": "პალაუ"
    },
    "PY": {
        "message": "პარაგვაი"
    },
    "PZ": {
        "message": "პანამის არხის ზონა"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "გთხოვთ გამორთოთ სხვა <a>გაგრძელება</a>, რომელიც თქვენი აზრით შეიძლება აკონტროლოთ თქვენი პროქსის პარამეტრების როგორიცაა ad-ბლოკატორი, სხვა VPN მომსახურება, და ა.შ."
    },
    "Please enter a valid email address.": {
        "message": "გთხოვთ, შეიყვანოთ სწორი ელფოსტა."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "გთხოვთ შეიყვანოთ საიტზე მისამართი, როგორიცაა facebook.com"
    },
    "Please help us get better": {
        "message": "გთხოვთ დაგვეხმაროთ უკეთ"
    },
    "Popular in $1": {
        "message": "პოპულარული $1"
    },
    "Popular in the world": {
        "message": "პოპულარული მსოფლიოში"
    },
    "Popular sites": {
        "message": "პოპულარული საიტები"
    },
    "Premium": {
        "message": "პრემია"
    },
    "QA": {
        "message": "კატარი"
    },
    "QO": {
        "message": "დაშორებული ოკეანია"
    },
    "RE": {
        "message": "რეიუნიონი"
    },
    "RO": {
        "message": "რუმინეთი"
    },
    "RS": {
        "message": "სერბია"
    },
    "RU": {
        "message": "რუსეთი"
    },
    "RW": {
        "message": "რუანდა"
    },
    "Rate us": {
        "message": "შეფასება us"
    },
    "Recent Videos": {
        "message": "უახლესი ვიდეოები"
    },
    "Reload": {
        "message": "თავიდან"
    },
    "Reload Hola": {
        "message": "თავიდან Hola"
    },
    "Remember server": {
        "message": "დამახსოვრება სერვერზე"
    },
    "Report a problem": {
        "message": "ანგარიში პრობლემა"
    },
    "Retry safe mode": {
        "message": "გაიმეორეთ უსაფრთხო რეჟიმი"
    },
    "SA": {
        "message": "საუდის არაბეთი"
    },
    "SB": {
        "message": "სოლომონის კუნძულები"
    },
    "SC": {
        "message": "სეიშელის კუნძულები"
    },
    "SD": {
        "message": "სუდანი"
    },
    "SE": {
        "message": "შვეცია"
    },
    "SG": {
        "message": "სინგაპური"
    },
    "SH": {
        "message": "წმინდა ელენეს კუნძული"
    },
    "SI": {
        "message": "სლოვენია"
    },
    "SJ": {
        "message": "Svalbard და იან Mayen"
    },
    "SK": {
        "message": "სლოვაკეთი"
    },
    "SL": {
        "message": "სიერა-ლეონე"
    },
    "SM": {
        "message": "სან-მარინო"
    },
    "SN": {
        "message": "სენეგალი"
    },
    "SO": {
        "message": "სომალი"
    },
    "SR": {
        "message": "სურინამი"
    },
    "ST": {
        "message": "საო-ტომე და პრინსიპი"
    },
    "SU": {
        "message": "საბჭოთა სოციალისტური რესპუბლიკების"
    },
    "SV": {
        "message": "სალვადორი"
    },
    "SY": {
        "message": "სირია"
    },
    "SZ": {
        "message": "სვაზილენდი"
    },
    "Safe": {
        "message": "უსაფრთხო"
    },
    "Safe mode": {
        "message": "უსაფრთხო რეჟიმი"
    },
    "Saved Videos": {
        "message": "შენახული ვიდეოები"
    },
    "Saved for later": {
        "message": "შენახული მოგვიანებით"
    },
    "Search video title": {
        "message": "ძებნა ვიდეოკლიპები სათაური"
    },
    "Select a Country": {
        "message": "აირჩიეთ ქვეყანა"
    },
    "Select site to unblock": {
        "message": "აირჩიეთ საიტი ბლოკი"
    },
    "Server saved!": {
        "message": "სერვერი ვერ მოიძებნა!"
    },
    "Set safe mode for $1 $2": {
        "message": "უცნობია უსაფრთხო რეჟიმში $1 $2"
    },
    "Settings": {
        "message": "პარამეტრები"
    },
    "Share": {
        "message": "გაზიარება"
    },
    "Share $1 on $2": {
        "message": "გაუზიაროს $1 $2"
    },
    "Share $1 via $2": {
        "message": "გაუზიაროს $1 მეშვეობით $2"
    },
    "Share with friends!": {
        "message": "მეგობრებთან გაზიარება!"
    },
    "Sign up": {
        "message": "იწერთ"
    },
    "Solve buffering": {
        "message": "გადაწყვიტოს buffering"
    },
    "Solve buffering problems with": {
        "message": "გადაწყვიტოს buffering პრობლემები"
    },
    "Solves it": {
        "message": "წყვეტს ის"
    },
    "Staff Picks": {
        "message": "პერსონალის Picks"
    },
    "Start Hola": {
        "message": "დაიწყოს"
    },
    "Starting...": {
        "message": "სასტარტო ..."
    },
    "Stopping peer routing...": {
        "message": "შეჩერების peer routing ..."
    },
    "Stream Instantly": {
        "message": "ნაკადის სწრაფად"
    },
    "Submit": {
        "message": "წარადგინეთ"
    },
    "Support Hola": {
        "message": "მხარდაჭერა Hola"
    },
    "TA": {
        "message": "ტრისტან და კუნია"
    },
    "TC": {
        "message": "თურქები და კაიკოსის კუნძულები"
    },
    "TD": {
        "message": "ჩადი"
    },
    "TF": {
        "message": "ფრანგული სამხრეთის ტერიტორიები"
    },
    "TG": {
        "message": "ტოგო"
    },
    "TH": {
        "message": "ტაილანდი"
    },
    "TJ": {
        "message": "ტაჯიკეთი"
    },
    "TL": {
        "message": "აღმოსავლეთი ტიმორი"
    },
    "TM": {
        "message": "თურქმენეთი"
    },
    "TN": {
        "message": "ტუნისი"
    },
    "TO": {
        "message": "ტონგა"
    },
    "TR": {
        "message": "თურქეთი"
    },
    "TT": {
        "message": "ტრინიდადი და ტობაგო"
    },
    "TV": {
        "message": "ტუვალუ"
    },
    "TW": {
        "message": "ტაივანი"
    },
    "TZ": {
        "message": "ტანზანია"
    },
    "Talk to us on $1": {
        "message": "განხილვა ჩვენთვის on $1"
    },
    "Tell friends about $1": {
        "message": "შეატყობინეთ მეგობრებს $1"
    },
    "Testing connection...": {
        "message": "ტესტირება კავშირი ..."
    },
    "Thank you!": {
        "message": "დიდი მადლობა!"
    },
    "There seems to be an error": {
        "message": "როგორც ჩანს შეცდომა"
    },
    "Top popular sites": {
        "message": "ყველაზე პოპულარული საიტები"
    },
    "Translate to your language": {
        "message": "თარგმნა თქვენი ენა"
    },
    "Try again": {
        "message": "სცადეთ კვლავ"
    },
    "Try another server": {
        "message": "სცადეთ სხვა სერვერზე"
    },
    "Try it": {
        "message": "ცდილობენ ეს"
    },
    "Try safe mode": {
        "message": "სცადეთ უსაფრთხო რეჟიმი"
    },
    "Try to <span>reload</span>": {
        "message": "შეეცადეთ <span> ჩატვირთვა </span>"
    },
    "Trying another peer...": {
        "message": "ცდილობს კიდევ გასაკეთებელი ..."
    },
    "Turn off Accelerator": {
        "message": "გამორთეთ Accelerator"
    },
    "Turn off Hola": {
        "message": "გამორთეთ Hola"
    },
    "Turn on Accelerator": {
        "message": "ჩართეთ Accelerator"
    },
    "Turn on Hola": {
        "message": "ჩართეთ Hola"
    },
    "Turn on to get started": {
        "message": "ჩართეთ უნდა დაიწყო"
    },
    "UA": {
        "message": "უკრაინა"
    },
    "UG": {
        "message": "უგანდა"
    },
    "UM": {
        "message": "შეერთებული შტატების მცირე დაშორებული კუნძულები"
    },
    "US": {
        "message": "ამერიკის შეერთებული შტატები"
    },
    "UY": {
        "message": "ურუგვაი"
    },
    "UZ": {
        "message": "უზბეკეთი"
    },
    "Unblocker is disabled": {
        "message": "Unblocker გამორთულია"
    },
    "Update": {
        "message": "განახლების"
    },
    "Upgrade": {
        "message": "განახლების"
    },
    "Using": {
        "message": "გამოყენება"
    },
    "Using Hola": {
        "message": "გამოყენება Hola"
    },
    "VA": {
        "message": "ვატიკანი"
    },
    "VC": {
        "message": "სენტ-ვინსენტი და გრენადინები"
    },
    "VD": {
        "message": "ჩრდილოეთ ვიეტნამში"
    },
    "VE": {
        "message": "ვენესუელა"
    },
    "VG": {
        "message": "ბრიტანეთის ვირჯინიის კუნძულები"
    },
    "VI": {
        "message": "აშშ-ის ვირჯინის კუნძულები"
    },
    "VN": {
        "message": "ვიეტნამი"
    },
    "VPN Premium": {
        "message": "VPN პრემიუმი"
    },
    "VU": {
        "message": "ვანუატუ"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "ძალიან ძველი ვერსია Chrome, <a> განახლება </a> Chrome გამოყენება Hola"
    },
    "Video": {
        "message": "ვიდეო"
    },
    "Video stuck?": {
        "message": "ვიდეო მოხდა?"
    },
    "Videos available for instant streaming": {
        "message": "ვიდეო ხელმისაწვდომია მყისიერი ნაკადი"
    },
    "WF": {
        "message": "ვალისი და ფუტუნა"
    },
    "WS": {
        "message": "სამოა"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "გინდა Hola სხვა მოწყობილობები? (Xbox, PS, Apple TV, iPhone ...). დააწკაპუნეთ აქ"
    },
    "Want to know more?": {
        "message": "გვინდა ვიცოდეთ, მეტი?"
    },
    "Watch Now": {
        "message": "Watch ახლა"
    },
    "We found $1 videos": {
        "message": "ჩვენ აღმოვაჩინეთ $1 ვიდეო"
    },
    "We will be in touch with you soon": {
        "message": "ჩვენ ვიქნებით დაუკავშირდა თქვენ მალე"
    },
    "Working!": {
        "message": "სამუშაო!"
    },
    "Working?": {
        "message": "მუშაობს?"
    },
    "Works on all sites but slower": {
        "message": "მუშაობს ყველა საიტები, მაგრამ ნელა"
    },
    "YD": {
        "message": "სახალხო დემოკრატიული რესპუბლიკა იემენის"
    },
    "YE": {
        "message": "იემენი"
    },
    "Yes": {
        "message": "დიახ"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "თქვენ უნდა გადახვიდეთ უახლესი ვერსია Opera გამოიყენოთ Hola. დააჭირეთ <a>აქ</a> განახლება."
    },
    "ZA": {
        "message": "სამხრეთ აფრიკა"
    },
    "ZM": {
        "message": "ზამბია"
    },
    "ZW": {
        "message": "ზიმბაბვე"
    },
    "ZZ": {
        "message": "უცნობი ან არასწორი რეგიონი"
    },
    "app_desc": {
        "message": "წვდომა საიტები დაიბლოკა თქვენი ქვეყანა, კომპანია ან სკოლაში Hola! Hola არის უფასო და მარტივი!"
    },
    "app_name": {
        "message": "Hola უკეთესი ინტერნეტი"
    },
    "back to": {
        "message": "თავში"
    },
    "changing...": {
        "message": "იცვლება ..."
    },
    "cool sites": {
        "message": "cool საიტები"
    },
    "current site": {
        "message": "მიმდინარე საიტი"
    },
    "day": {
        "message": "დღეს"
    },
    "days": {
        "message": "დღის"
    },
    "even more...": {
        "message": "კიდევ უფრო მეტი ..."
    },
    "mode": {
        "message": "რეჟიმი"
    },
    "more options...": {
        "message": "დამატებითი პარამეტრები ..."
    },
    "not working?": {
        "message": "არ მუშაობს?"
    },
    "not working? try another server": {
        "message": "არ მუშაობს? ცდილობენ სხვა სერვერზე"
    },
    "on this page": {
        "message": "ამ გვერდზე"
    },
    "sites that are censored": {
        "message": "საიტები, რომ ცენზურა"
    },
    "start": {
        "message": "დაიწყოს"
    },
    "working? remember": {
        "message": "მუშაობს? მახსოვს"
    }
};
return E; });