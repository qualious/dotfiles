'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " ಮೂಲಕ "
    },
    "$1 Buffering?": {
        "message": "$1 ಬಫರ್?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 ಹೊಲಾ ಅದೇ ಮಾಡಲು ಇಲ್ಲಿ $2\n\n ಕ್ಲಿಕ್ ಪ್ರವೇಶಿಸಲು: $3\n\nನನಗೆ ವೇಗವಾಗಿ ಇಂಟರ್ನೆಟ್ ಸರ್ಫ್ ಮತ್ತು ಪ್ರವೇಶಿಸಲು ಅನುಮತಿಸುತ್ತದೆ ಇದು ಹೊಲಾ, ಅನುಸ್ಥಾಪಿಸುತ್ತದೆ $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN ಪ್ರೀಮಿಯಂ"
    },
    "$1 from $2": {
        "message": "$2 ರಿಂದ $1"
    },
    "$1 not found": {
        "message": "$1 ಕಂಡುಬಂದಿಲ್ಲ"
    },
    "$1 via Hola": {
        "message": "ಹೊಲಾ ಮೂಲಕ $1"
    },
    "(some Hola features are not available on your version)": {
        "message": "(ಕೆಲವು ಹೊಲಾ ವೈಶಿಷ್ಟ್ಯಗಳನ್ನು ನಿಮ್ಮ ಆವೃತ್ತಿಗೆ ಲಭ್ಯವಿರುವುದಿಲ್ಲ)"
    },
    "AC": {
        "message": "ಅಸೆನ್ಶನ್ ದ್ವೀಪ"
    },
    "AD": {
        "message": "ಅಂಡೋರಾ"
    },
    "AE": {
        "message": "ಸಂಯುಕ್ತ ಅರಬ್ ಎಮಿರೇಟಸ್"
    },
    "AF": {
        "message": "ಅಫಘಾನಿಸ್ಥಾನ್"
    },
    "AG": {
        "message": "ಆಂಟಿಗುವಾ ಮತ್ತು ಬರ್ಬುಡಾ"
    },
    "AI": {
        "message": "ಆಂಗುಯಿಲ್ಲಾ"
    },
    "AL": {
        "message": "ಅಲ್ಬೇನಿಯಾ"
    },
    "AM": {
        "message": "ಅರ್ಮೇನಿಯಾ"
    },
    "AN": {
        "message": "ನೆದರ್ಲ್ಯಾಂಡ್"
    },
    "AO": {
        "message": "ಅಂಗೋಲಾ"
    },
    "AQ": {
        "message": "ಅಂಟಾರ್ಟಿಕಾ"
    },
    "AR": {
        "message": "ಅರ್ಜೆಂಟೈನಾ"
    },
    "AS": {
        "message": "ಅಮೇರಿಕನ್ ಸಮೋವಾ"
    },
    "AT": {
        "message": "ಆಸ್ಟ್ರಿಯಾ"
    },
    "AU": {
        "message": "ಆಸ್ಟ್ರೇಲಿಯ"
    },
    "AW": {
        "message": "ಅರುಬಾ"
    },
    "AX": {
        "message": "ಆಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳು"
    },
    "AZ": {
        "message": "ಅಜರ್ಬೈಜಾನ್"
    },
    "About": {
        "message": "ಬಗ್ಗೆ"
    },
    "About Hola": {
        "message": "ಹೊಲಾ ಬಗ್ಗೆ"
    },
    "Accelerator": {
        "message": "ವೇಗವರ್ಧಕ"
    },
    "Accelerator is": {
        "message": "ವೇಗವರ್ಧಕ ಹೊಂದಿದೆ"
    },
    "Access $1 - cool site!": {
        "message": "$1 ಪ್ರವೇಶ - ತಂಪಾದ ಸೈಟ್!"
    },
    "Access $1?": {
        "message": "$1 ಪ್ರವೇಶಿಸಿ?"
    },
    "Access any site from any country, free": {
        "message": "ಉಚಿತ, ಯಾವುದೇ ದೇಶದ ಯಾವುದೇ ಸೈಟ್ ಪ್ರವೇಶಿಸಿ"
    },
    "Access cool sites": {
        "message": "ಪ್ರವೇಶ ತಂಪು ತಾಣಗಳು"
    },
    "Access more sites": {
        "message": "ಪ್ರವೇಶ ಇನ್ನಷ್ಟು ಸೈಟ್ಗಳನ್ನು"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "ಪ್ರವೇಶ ಸೈಟ್ಗಳು ನಿಮ್ಮ ದೇಶದಲ್ಲಿ ಸೆನ್ಸಾರ್ ಮತ್ತು ಹೊಲಾ ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ವೇಗ - ಉಚಿತ!"
    },
    "Accessing $1 with Hola": {
        "message": "ಹೊಲಾ ಜೊತೆ $1 ನಿಲುಕಿಸಿಕೊಳ್ಳಲು"
    },
    "Account": {
        "message": "ಖಾತೆ"
    },
    "Account type": {
        "message": "ಖಾತೆ ಪ್ರಕಾರ"
    },
    "Activating...": {
        "message": "ಸಕ್ರಿಯಗೊಳಿಸಲಾಗುತ್ತಿದೆ..."
    },
    "All ($1)": {
        "message": "ಎಲ್ಲಾ ($1)"
    },
    "Apply settings...": {
        "message": "ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ಅನ್ವಯಿಸಿ ..."
    },
    "Author site:": {
        "message": "ಲೇಖಕ ಸೈಟ್:"
    },
    "Author:": {
        "message": "ಲೇಖಕ:"
    },
    "Awesome!": {
        "message": "ಅದ್ಭುತ!"
    },
    "BA": {
        "message": "ಬೋಸ್ನಿಯಾ ಮತ್ತು ಹರ್ಜೆಗೋವಿನಾ"
    },
    "BB": {
        "message": "ಬಾರ್ಬಡೋಸ್"
    },
    "BD": {
        "message": "ಬಾಂಗ್ಲಾದೇಶ್"
    },
    "BE": {
        "message": "ಬೆಲ್ಜಿಯಮ್"
    },
    "BF": {
        "message": "ಬುರ್ಕಿನಾ ಫಾಸೋ"
    },
    "BG": {
        "message": "ಬಲ್ಗೇರಿಯನ್"
    },
    "BH": {
        "message": "ಬಹರೈನ್"
    },
    "BI": {
        "message": "ಬುರುಂಡಿ"
    },
    "BJ": {
        "message": "ಬೆನಿನ್"
    },
    "BL": {
        "message": "ಸೇಂಟ್ ಬಾರ್ಥೆಲೆಮಿ"
    },
    "BM": {
        "message": "ಬರ್ಮುಡಾ"
    },
    "BN": {
        "message": "ಬ್ರೂನಿ"
    },
    "BO": {
        "message": "ಬಲ್ಗೇರಿಯಾ"
    },
    "BQ": {
        "message": "ಬ್ರಿಟಿಷ್ ಅಂಟಾರ್ಟಿಕ್ ಪ್ರದೇಶ"
    },
    "BR": {
        "message": "ಬ್ರೆಜಿಲ್"
    },
    "BS": {
        "message": "ಬಹಾಮಾಸ್"
    },
    "BT": {
        "message": "ಭೂತಾನ್"
    },
    "BV": {
        "message": "ಬೋವೆಟ್ ದ್ವೀಪ"
    },
    "BW": {
        "message": "ಬೋಟ್ಸ್ವಾನಾ"
    },
    "BY": {
        "message": "ಬೊಲಿವಿಯಾ"
    },
    "BZ": {
        "message": "ಬೆಲಿಜ್"
    },
    "Back to $1": {
        "message": "ಬ್ಯಾಕ್ ಗೆ $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "ಐಫೋನ್ / ಐಪಾಡ್ ಹೊಲಾ ಪಡೆಯಲು ಮೊದಲು - ಈಗ ನೋಂದಣಿ:"
    },
    "Browsing": {
        "message": "ಬ್ರೌಸಿಂಗ್"
    },
    "Buffering problems?": {
        "message": "ಬಫರ್ ಸಮಸ್ಯೆಗಳನ್ನು?"
    },
    "Buffering?": {
        "message": "ಬಫರ್?"
    },
    "CA": {
        "message": "ಕೆನಡಾ"
    },
    "CC": {
        "message": "ಕೊಕೊಸ್ ದ್ವೀಪಗಳು"
    },
    "CD": {
        "message": "ಕಾಂಗೋ - ಕಿನ್ಶಾಸಾ"
    },
    "CF": {
        "message": "ಮಧ್ಯ ಆಫ್ರಿಕಾ ಗಣರಾಜ್ಯ"
    },
    "CG": {
        "message": "ಕಾಂಗೋ - ಬ್ರಾಜಾವಿಲ್ಲೇ"
    },
    "CH": {
        "message": "ಸ್ವಿಡ್ಜರ್ಲ್ಯಾಂಡ್"
    },
    "CI": {
        "message": "ಐವರಿ ಕೋಸ್ಟ್"
    },
    "CK": {
        "message": "ಕುಕ್ ದ್ವೀಪಗಳು"
    },
    "CL": {
        "message": "ಚಿಲಿ"
    },
    "CM": {
        "message": "ಕ್ಯಾಮರೋನ್"
    },
    "CN": {
        "message": "ಚೀನ"
    },
    "CO": {
        "message": "ಕೊಲಂಬಿಯಾ"
    },
    "CP": {
        "message": "ಕ್ಲಿಪ್ಪರ್ಟಾನ್ ದ್ವೀಪಗಳು"
    },
    "CR": {
        "message": "ಕೊಸ್ಟಾ ರಿಕಾ"
    },
    "CS": {
        "message": "ಸೆರ್ಬಿಯಾ ಮತ್ತು ಮೊಂಟೊನೆಗ್ರೋ"
    },
    "CT": {
        "message": "ಕ್ಯಾಂಟನ್ ಮತ್ತು ಎಂಡರ್ಬರಿ ದ್ವೀಪಗಳು"
    },
    "CU": {
        "message": "ಕ್ಯೂಬಾ"
    },
    "CV": {
        "message": "ಕೇಪ್ ವರ್ಡೆ"
    },
    "CX": {
        "message": "ಕ್ರಿಸ್ಮಸ್ ದ್ವೀಪ"
    },
    "CY": {
        "message": "ಸೈಪ್ರಸ್"
    },
    "CZ": {
        "message": "ಚೆಕ್ ರಿಪಬ್ಲಿಕ್"
    },
    "Changing country...": {
        "message": "ದೇಶದ ಬದಲಾಯಿಸುವುದು ..."
    },
    "Check out Hola for $1!": {
        "message": "$1 ಹೊಲಾ ಪರಿಶೀಲಿಸಿ!"
    },
    "Check out Hola for mobile devices": {
        "message": "ಮೊಬೈಲ್ ಸಾಧನಗಳಿಗೆ ಹೊಲಾ ಪರಿಶೀಲಿಸಿ"
    },
    "Check your Internet connection": {
        "message": "ನೀವು ಇಂಟರ್ನೆಟ್ ಹೊಂದಿರುತ್ತವೆ ಪರಿಶೀಲಿಸಿ"
    },
    "Choose<br>Country": {
        "message": "ಆಯ್ಕೆ <br> ದೇಶ"
    },
    "Configuring...": {
        "message": "ಸಂರಚಿಸುವಿಕೆ ..."
    },
    "Connecting...": {
        "message": "ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ ..."
    },
    "Cool site!": {
        "message": "ಕೂಲ್ ಸೈಟ್!"
    },
    "Creative licenses": {
        "message": "ಕ್ರಿಯೇಟಿವ್ ಪರವಾನಗಿ"
    },
    "DD": {
        "message": "ಪೂರ್ವ ಜರ್ಮನಿಯ"
    },
    "DE": {
        "message": "ಜರ್ಮನಿ"
    },
    "DG": {
        "message": "ಡಿಯಾಗೋ ಗಾರ್ಸಿಯಾ"
    },
    "DJ": {
        "message": "ಜಿಬೋಟಿ"
    },
    "DK": {
        "message": "ಡೆನ್ಮಾರ್ಕ್"
    },
    "DM": {
        "message": "ಡೊಮಿನಿಕಾ"
    },
    "DO": {
        "message": "ಡೊಮೆನಿಕ್ ರಿಪಬ್ಲಿಕ್"
    },
    "DZ": {
        "message": "ಅಲ್ಗೇರಿಯಾ"
    },
    "Delete": {
        "message": "ಅಳಿಸಿ"
    },
    "Deleted from my list": {
        "message": "ನನ್ನ ಪಟ್ಟಿ ಅಳಿಸಲಾಗಿದೆ"
    },
    "Did it work?": {
        "message": "ಇದು ಕೆಲಸ ಮಾಡಲಿಲ್ಲ?"
    },
    "Did you experience any buffering?": {
        "message": "ನೀವು ಯಾವುದೇ ಧಕ್ಕೆ ನಿವಾರಣೆ ಅನುಭವಿಸುತ್ತಾರೆ ಮಾಡಿದ್ದೀರಾ?"
    },
    "Disliked it": {
        "message": "ಇಶ್ಟವಾಗಿಲ್ಲ"
    },
    "Don't show again for $1 for one week": {
        "message": "ಒಂದು ವಾರ $1 ಮತ್ತೆ ತೋರಿಸಬೇಡ"
    },
    "Don't show again for any site for one week": {
        "message": "ಒಂದು ವಾರ ಯಾವುದೇ ಸೈಟ್ ಮತ್ತೆ ತೋರಿಸಬೇಡ"
    },
    "Downloading": {
        "message": "ಡೌನ್ಲೋಡ್"
    },
    "EA": {
        "message": "ಸೇಯುಟ ಹಾಗು ಮೆಲಿಲ್ಲ"
    },
    "EC": {
        "message": "ಈಕ್ವೆಡಾರ್"
    },
    "EE": {
        "message": "ಎಸ್ತೊನಿಯ"
    },
    "EG": {
        "message": "ಈಜಿಪ್ಟ್"
    },
    "EH": {
        "message": "ಪಶ್ಚಿಮ ಸಹಾರಾ"
    },
    "ER": {
        "message": "ಏರಿಟ್ರಿಯಾ"
    },
    "ES": {
        "message": "ಸ್ಪೈನ್"
    },
    "ET": {
        "message": "ಇಥಿಯೋಪಿಯಾ"
    },
    "EU": {
        "message": "ಯೂರೋಪಿನ ಒಕ್ಕೂಟ"
    },
    "Enable": {
        "message": "ಸಕ್ರಿಯಗೊಳಿಸಿ"
    },
    "Enable Hola Accelerator": {
        "message": "ಹೊಲಾ ವೇಗವರ್ಧಕ ಸಕ್ರಿಯಗೊಳಿಸಿ"
    },
    "Enjoy!": {
        "message": "ಆನಂದಿಸಿ!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "ಕ್ರೋಮ್ ಹೊಲಾ ಆನಂದಿಸುವುದು?"
    },
    "Enter site to access": {
        "message": "ಪ್ರವೇಶಿಸಲು ಸೈಟ್ ನಮೂದಿಸಿ"
    },
    "Enter your email": {
        "message": "ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ"
    },
    "FI": {
        "message": "ಫಿನ್ಲ್ಯಾಂಡ್"
    },
    "FJ": {
        "message": "ಫಿಜಿ"
    },
    "FK": {
        "message": "ಫ್ಹಾಕ್ಲ್ಯಾಂಡ್ ದ್ವೀಪಗಳು"
    },
    "FM": {
        "message": "ಮೈಕ್ರೋನೇಶಿಯಾ"
    },
    "FO": {
        "message": "ಫರೋ ದ್ವೀಪಗಳು"
    },
    "FQ": {
        "message": "ದಕ್ಷಿಣ ಫ್ರೆಂಚ್ ಹಾಗು ಅಂಟಾರ್ಟಿಕ್ ಪ್ರಾಂತ್ಯಗಳು"
    },
    "FR": {
        "message": "ಫ್ರಾನ್ಸ್"
    },
    "FX": {
        "message": "ಮೆಟ್ರೋಪಾಲಿಟನ್ ಫ್ರಾನ್ಸ್"
    },
    "Fast": {
        "message": "ಫಾಸ್ಟ್"
    },
    "Finding new peers...": {
        "message": "ಹೊಸ ಗೆಳೆಯರೊಂದಿಗೆ ಫೈಂಡಿಂಗ್ ..."
    },
    "Finding peers...": {
        "message": "ಗೆಳೆಯರೊಂದಿಗೆ ಫೈಂಡಿಂಗ್ ..."
    },
    "Free": {
        "message": "ಉಚಿತ"
    },
    "From": {
        "message": "ಗೆ"
    },
    "Full list": {
        "message": "ಪೂರ್ಣ ಪಟ್ಟಿ"
    },
    "GA": {
        "message": "ಗೆಬೊನ್"
    },
    "GB": {
        "message": "ಬ್ರಿಟನ್/ಇಂಗ್ಲೆಂಡ್"
    },
    "GD": {
        "message": "ಗ್ರೆನೆಡಾ"
    },
    "GE": {
        "message": "ಜಾರ್ಜಿಯಾ"
    },
    "GF": {
        "message": "ಫ್ರೆಂಚ್ ಗಯಾನಾ"
    },
    "GG": {
        "message": "ಗುರ್ನಜೀ"
    },
    "GH": {
        "message": "ಘಾನಾ"
    },
    "GI": {
        "message": "ಗಿಬ್ರಾಲ್ಟರ್"
    },
    "GL": {
        "message": "ಗ್ರೀನ್ಲ್ಯಾಂಡ್"
    },
    "GM": {
        "message": "ಗ್ಯಾಂಬಿಯಾ"
    },
    "GN": {
        "message": "ಗಿನಿ"
    },
    "GP": {
        "message": "ಗುಡೆಲೋಪ್"
    },
    "GQ": {
        "message": "ಈಕ್ವೆಟೋರಿಯಲ್ ಗಿನಿ"
    },
    "GR": {
        "message": "ಗ್ರೀಸ್"
    },
    "GS": {
        "message": "ದಕ್ಷಿಣ ಜಾರ್ಜಿಯಾ ಮತ್ತು ದಕ್ಷಿಣ ಸ್ಯಾಂಡ್ವಿಚ್ ದ್ವೀಪಗಳು"
    },
    "GT": {
        "message": "ಗ್ವಾಟೆಮಾಲಾ"
    },
    "GU": {
        "message": "ಗುಯಾಮ್"
    },
    "GW": {
        "message": "ಗಿನಿ-ಬಿಸ್ಸಾವ್"
    },
    "GY": {
        "message": "ಗಯಾನಾ"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 ಅನಿರ್ಬಂಧಿಸಲಾಗುತ್ತಿದೆ ಪಡೆಯಿರಿ"
    },
    "Get Free Premium": {
        "message": "ಉಚಿತ ಪ್ರೀಮಿಯಂ ಪಡೆಯಿರಿ"
    },
    "Get Hola Accelerator": {
        "message": "ಹೊಲಾ ವೇಗವರ್ಧಕ ಪಡೆಯಿರಿ"
    },
    "Get Hola Player": {
        "message": "ಪಡೆಯಲು ಹೊಲಾ ಆಟಗಾರನ"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "UN-ಅಡಚಣೆ, ಜಾಹೀರಾತು ರಹಿತ ಸೇವೆಗೆ ಹೊಲಾ ಪ್ಲಸ್ ಪಡೆಯಿರಿ."
    },
    "Get Hola Premium": {
        "message": "ಹೊಲಾ ಪ್ರೀಮಿಯಂ ಪಡೆಯಿರಿ"
    },
    "Get Hola for Android": {
        "message": "ಆಂಡ್ರಾಯ್ಡ್ ಹೊಲಾ ಪಡೆಯಿರಿ"
    },
    "Get Premium support": {
        "message": "ಪ್ರೀಮಿಯಂ ಬೆಂಬಲ ಪಡೆಯಿರಿ"
    },
    "Get Unlimited Unblocking": {
        "message": "ಅನ್ಲಿಮಿಟೆಡ್ ಅನಿರ್ಬಂಧಿಸಲಾಗುತ್ತಿದೆ ಪಡೆಯಿರಿ"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "ಸೆನ್ಸಾರ್ ತಾಣಗಳಿಗೆ ಪ್ರವೇಶವನ್ನು ಪಡೆಯಿರಿ ಈಗ ಪ್ರಯತ್ನಿಸಿ: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "ಸ್ಕೈಪ್ ಪ್ರತಿ ಎಂಜಿನಿಯರ್ ಸಹಾಯ ಪಡೆಯಿರಿ:"
    },
    "Get the Fastest Servers": {
        "message": "ಫಾಸ್ಟೆಸ್ಟ್ ಪರಿಚಾರಕಗಳು ಪಡೆಯಿರಿ"
    },
    "Go": {
        "message": "ಹೋಗಿ"
    },
    "Go Hola Premium": {
        "message": "ಗೋ ಹೊಲಾ ಪ್ರೀಮಿಯಂ"
    },
    "HK": {
        "message": "ಹಾಂಗ್ ಕಾಂಗ್ SAR ಚೀನಾ"
    },
    "HM": {
        "message": "ಹರ್ಡ್ ದ್ವೀಪ ಮತ್ತು ಮಾಕ್ಡೊನಾಲ್ಡ್ ದ್ವೀಪಗಳು"
    },
    "HN": {
        "message": "ಹೊಂಡುರಾಸ್"
    },
    "HR": {
        "message": "ಕ್ರೋಯೇಶಿಯಾ"
    },
    "HT": {
        "message": "ಹೈಟಿ"
    },
    "HU": {
        "message": "ಹಂಗೇರಿ"
    },
    "Hate it": {
        "message": "ದ್ವೇಷಿಸುತ್ತೇನೆ"
    },
    "Help": {
        "message": "ಸಹಾಯ"
    },
    "Hey,\n\nI'm using": {
        "message": "ಹೇ,\n\nನಾನು ಬಳಸಿ ನಾನು"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "ಹಾಯ್,\n\nನಾನು $1 ($2) ಬಳಸಲಾರಂಭಿಸಿದರು. ನನಗೆ ವೇಗವಾಗಿ ಇಂಟರ್ನೆಟ್ ಸರ್ಫ್ ಮತ್ತು ನನ್ನ ದೇಶದ $3 ಪ್ರವೇಶಿಸಲು ಅನುಮತಿಸುತ್ತದೆ."
    },
    "Hola": {
        "message": "ಹೊಲಾ"
    },
    "Hola Accelerator": {
        "message": "ಹೊಲಾ ವೇಗವರ್ಧಕ"
    },
    "Hola Media Player": {
        "message": "ಹೊಲಾ ಮೀಡಿಯಾ ಪ್ಲೇಯರ್"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "ಮತ್ತೊಂದು ವಿಸ್ತರಣೆ ನಿಮ್ಮ ಪ್ರಾಕ್ಸಿ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ನಿಯಂತ್ರಿಸುವ ಏಕೆಂದರೆ ಹೊಲಾ ಕೆಲಸ ಸಾಧ್ಯವಿಲ್ಲ."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "ಹೊಲಾ ವಿಂಡೋಸ್ 8 ಕ್ರಮದಲ್ಲಿ ಚೆನ್ನಾಗಿ ಕೆಲಸ ಮಾಡುವುದಿಲ್ಲ. ಡೆಸ್ಕ್ಟಾಪ್ ಮೋಡ್ಗೆ ಬದಲಿಸಿ ದಯವಿಟ್ಟು. ಸೂಚನೆಗಳಿಗಾಗಿ <a> ಇಲ್ಲಿ </a> ಕ್ಲಿಕ್ ಮಾಡಿ"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "ಹೊಲಾ ಇದೀಗ ಲಭ್ಯವಿಲ್ಲ, ಆದರೆ ನಾವು ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತಿದ್ದೇವೆ."
    },
    "Hola is off, click it to turn it on": {
        "message": "ಹೊಲಾ ಆಫ್ ಆಗಿದೆ, ಆನ್ ಕ್ಲಿಕ್"
    },
    "Hola site list": {
        "message": "Hola ಸೈಟ್ ಪಟ್ಟಿ"
    },
    "I can now access $1 from any country!": {
        "message": "ನಾನು ಈಗ ಯಾವುದೇ ದೇಶದ $1 ಪ್ರವೇಶಿಸಬಹುದು!"
    },
    "I did not experience any buffering": {
        "message": "ನಾನು ಯಾವುದೇ ಧಕ್ಕೆ ನಿವಾರಣೆ ಅನುಭವವನ್ನು ಮಾಡಲಿಲ್ಲ"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "ನಾನು $1 ಹೊಲಾ ಬಳಸಿಕೊಂಡು ಒಂದು ಸೆನ್ಸಾರ್ ಸೈಟ್ ಪ್ರವೇಶಿಸಬಹುದು!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "ನನ್ನ ದೇಶದಲ್ಲಿ $2 ವೀಕ್ಷಿಸಲು $1 ಅನ್ನು, ಮತ್ತು ವೇಗವಾಗಿ ತೆರೆನೊರೆಗೊಳಿಸುವುದಕ್ಕೆ ಬಾಗುತ್ತೇನೆ!"
    },
    "IC": {
        "message": "ಕ್ಯಾನರಿ ದ್ವೀಪಗಳು"
    },
    "ID": {
        "message": "ಇಂಡೋನೇಶಿಯಾ"
    },
    "IE": {
        "message": "ಐರ್ಲೆಂಡ್"
    },
    "IL": {
        "message": "ಇಸ್ರೇಲ್"
    },
    "IM": {
        "message": "ಐಲ್ ಆಫ್ ಮ್ಯಾನ್"
    },
    "IN": {
        "message": "ಭಾರತ"
    },
    "IO": {
        "message": "ಬ್ರಿಟೀಶ್ ಇಂಡಿಯನ್ ಮಹಾಸಾಗರ ಪ್ರದೇಶ"
    },
    "IQ": {
        "message": "ಇರಾಕ್"
    },
    "IR": {
        "message": "ಇರಾನ್"
    },
    "IS": {
        "message": "ಐಸ್ಲ್ಯಾಂಡ್"
    },
    "IT": {
        "message": "ಇಟಲಿ"
    },
    "Improve translation": {
        "message": "ಅನುವಾದ ಸುಧಾರಿಸಿ"
    },
    "Initializing...": {
        "message": "ಆರಂಭಿಸಲಾಗುತ್ತಿದೆ ..."
    },
    "Install": {
        "message": "ಅನುಸ್ಥಾಪಿಸಲು"
    },
    "Install Accelerator": {
        "message": "ವೇಗವರ್ಧಕ ಸ್ಥಾಪಿಸಿ"
    },
    "Install Free Hola Accelerator": {
        "message": "ಉಚಿತ ಹೊಲಾ ವೇಗವರ್ಧಕ ಸ್ಥಾಪಿಸಿ"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "ಉಚಿತವಾಗಿ ಹೊಲಾ ಅನ್ನು ಮುಂದುವರಿಸಲು ಹೊಲಾ ಎಂಜಿನ್ ಅನುಸ್ಥಾಪಿಸಲು"
    },
    "Instantly watch any torrent Video": {
        "message": "ತಕ್ಷಣ ಯಾವುದೇ ಟೊರೆಂಟ್ ವೀಡಿಯೊ ವೀಕ್ಷಿಸಲು"
    },
    "Invite friends - free Premium.": {
        "message": "ಸ್ನೇಹಿತರನ್ನು ಆಹ್ವಾನಿಸಿ - ಉಚಿತ ಪ್ರೀಮಿಯಂ."
    },
    "Invite friends. Get Premium.": {
        "message": "ಸ್ನೇಹಿತರು ಆಮಂತ್ರಿಸಿ. ಪ್ರೀಮಿಯಂ ಪಡೆಯಿರಿ."
    },
    "It was okay": {
        "message": "ಇದು ಪರ್ವಾಗಿಲ್ಲ"
    },
    "JE": {
        "message": "ಜೆರ್ಸಿ"
    },
    "JM": {
        "message": "ಜಮೈಕಾ"
    },
    "JO": {
        "message": "ಜೋರ್ಡಾನ್"
    },
    "JP": {
        "message": "ಜಪಾನ್"
    },
    "JT": {
        "message": "ಜಾನ್ಸ್ಟನ್ ದ್ವೀಪ"
    },
    "KE": {
        "message": "ಕೀನ್ಯಾ"
    },
    "KG": {
        "message": "ಕಿರ್ಗಿಸ್ಥಾನ್"
    },
    "KH": {
        "message": "ಕಾಂಬೋಡಿಯಾ"
    },
    "KI": {
        "message": "ಕಿರಿಬಾತಿ"
    },
    "KM": {
        "message": "ಕೊಮೊರೊಸ್"
    },
    "KN": {
        "message": "ಸೇಂಟ್ ಕಿಟ್ಸ್ ಮತ್ತು ನೆವಿಸ್"
    },
    "KP": {
        "message": "ಉತ್ತರ ಕೋರಿಯಾ"
    },
    "KR": {
        "message": "ದಕ್ಷಿಣ ಕೋರಿಯಾ"
    },
    "KW": {
        "message": "ಕುವೈತ್"
    },
    "KY": {
        "message": "ಕೇಮನ್ ದ್ವೀಪಗಳು"
    },
    "KZ": {
        "message": "ಕಝಾಕಿಸ್ಥಾನ್"
    },
    "LA": {
        "message": "ಲಾವೋಸ್"
    },
    "LB": {
        "message": "ಲೆಬನಾನ್"
    },
    "LC": {
        "message": "ಸೇಂಟ್ ಲೂಸಿಯಾ"
    },
    "LI": {
        "message": "ಲಿಚೆನ್ಸ್ಟೈನ್"
    },
    "LK": {
        "message": "ಶ್ರೀಲಂಕಾ"
    },
    "LR": {
        "message": "ಲಿಬೇರಿಯಾ"
    },
    "LS": {
        "message": "ಲೆಥೋಸೊ"
    },
    "LT": {
        "message": "ಲಿಥುವೇನಿಯಾ"
    },
    "LU": {
        "message": "ಲಕ್ಸಂಬರ್ಗ್"
    },
    "LV": {
        "message": "ಲಾಟ್ವಿಯಾ"
    },
    "LY": {
        "message": "ಲಿಬಿಯಾ"
    },
    "Language": {
        "message": "ಭಾಷೆ"
    },
    "Library": {
        "message": "ಲೈಬ್ರರಿ"
    },
    "Like it": {
        "message": "ಇದು ಲೈಕ್"
    },
    "Loading": {
        "message": "ಹೇರಿಕೆ"
    },
    "Loading site...": {
        "message": "ಹೇರಿಕೆ"
    },
    "Log in": {
        "message": "ಲಾಗ್ ಇನ್"
    },
    "Log out": {
        "message": "ಲಾಗ್ ಔಟ್"
    },
    "Love Hola?": {
        "message": "ಹೊಲಾ ಲವ್?"
    },
    "Love it": {
        "message": "ಇಷ್ಟ ಪಡುತ್ತೇನೆ"
    },
    "MA": {
        "message": "ಮೊರಾಕ್ಕೊ"
    },
    "MC": {
        "message": "ಮೊನಾಕೊ"
    },
    "MD": {
        "message": "ಮೊಲ್ಡೋವಾ"
    },
    "ME": {
        "message": "ಮೊಂಟೆನೆಗ್ರೋ"
    },
    "MF": {
        "message": "ಸೇಂಟ್ ಮಾರ್ಟಿನ್"
    },
    "MG": {
        "message": "ಮಡಗಾಸ್ಕರ್"
    },
    "MH": {
        "message": "ಮಾರ್ಶಲ್ ದ್ವೀಪಗಳು"
    },
    "MI": {
        "message": "ಮಿಡ್ವೇ ದ್ವೀಪಗಳು"
    },
    "MK": {
        "message": "ಮ್ಯಾಸಿಡೋನಿಯಾ"
    },
    "ML": {
        "message": "ಮಾಲಿ"
    },
    "MM": {
        "message": "ಮಯನ್ಮಾರ್"
    },
    "MN": {
        "message": "ಮೊಂಗೋಲಿಯಾ"
    },
    "MO": {
        "message": "ಮಕಾವ್ SAR ಚೀನಾ"
    },
    "MP": {
        "message": "ಉತ್ತರ ಮರಿಯಾನಾ ದ್ವೀಪಗಳು"
    },
    "MQ": {
        "message": "ಮಾರ್ಟಿನಿಕ್"
    },
    "MR": {
        "message": "ಮಾರಿಟಾನಿಯಾ"
    },
    "MS": {
        "message": "ಮೋಂಟ್ಸೆರೆಟ್"
    },
    "MT": {
        "message": "ಮಾಲ್ಟಾ"
    },
    "MU": {
        "message": "ಮಾರಿಶಿಯಸ್"
    },
    "MV": {
        "message": "ಮಾಲ್ಡಿವ್ಸ್"
    },
    "MW": {
        "message": "ಮಲಾವಿ"
    },
    "MX": {
        "message": "ಮೆಕ್ಸಿಕೊ"
    },
    "MY": {
        "message": "ಮಲೇಶಿಯಾ"
    },
    "MZ": {
        "message": "ಮೊಜಾಂಬಿಕ್"
    },
    "Make your Internet better with $1": {
        "message": "ನಿಮ್ಮ ಇಂಟರ್ನೆಟ್ ಉತ್ತಮ ಜೊತೆ $1"
    },
    "Menu": {
        "message": "ಮೆನು"
    },
    "Might not work on all sites": {
        "message": "ಎಲ್ಲಾ ಸೈಟ್ಗಳಲ್ಲಿ ಕೆಲಸ ಇರಬಹುದು"
    },
    "Mode": {
        "message": "ಮೋಡ್"
    },
    "More countries": {
        "message": "ಹೆಚ್ಚು ದೇಶಗಳಲ್ಲಿ"
    },
    "More sites...": {
        "message": "ಹೆಚ್ಚು..."
    },
    "More...": {
        "message": "ಹೆಚ್ಚು..."
    },
    "My Account": {
        "message": "ನನ್ನ ಖಾತೆ"
    },
    "My History": {
        "message": "ನನ್ನ ಇತಿಹಾಸ"
    },
    "My Settings": {
        "message": "ನನ್ನ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು"
    },
    "My favorites": {
        "message": "ನನ್ನ ಮೆಚ್ಚಿನವುಗಳು"
    },
    "NA": {
        "message": "ನಮೀಬಿಯಾ"
    },
    "NC": {
        "message": "ನ್ಯೂ ಕ್ಯಾಲಿಡೋನಿಯಾ"
    },
    "NE": {
        "message": "ನೈಜರ್"
    },
    "NF": {
        "message": "ನಾರ್ಫೋಕ್ ದ್ವೀಪ"
    },
    "NG": {
        "message": "ನೈಜೀರಿಯಾ"
    },
    "NI": {
        "message": "ನಿಕಾರಾಗುವಾ"
    },
    "NL": {
        "message": "ನೆದರ್ಲ್ಯಾಂಡ್ಸ್"
    },
    "NO": {
        "message": "ನಾರ್ವೇ"
    },
    "NP": {
        "message": "ನೇಪಾಳ"
    },
    "NQ": {
        "message": "Dronning ಮೌಡ್ ಜಮೀನು"
    },
    "NR": {
        "message": "ನೌರು"
    },
    "NT": {
        "message": "ತಟಸ್ಥ ವಲಯ"
    },
    "NU": {
        "message": "ನಿಯು"
    },
    "NZ": {
        "message": "ನ್ಯೂಜಿಲೆಂಡ್"
    },
    "Need Help?": {
        "message": "ಸಹಾಯ ಬೇಕೇ?"
    },
    "Netflix": {
        "message": "ನೆಟ್ಫ್ಲಿಕ್ಸ್"
    },
    "Never ask me again": {
        "message": "ನನ್ನನ್ನು ಎಂದಿಗೂ ಮತ್ತೆ ಕೇಳಬೇಡಿ"
    },
    "Never be a peer": {
        "message": "ಒಂದು ಪೀರ್ ಎಂದಿಗೂ"
    },
    "No": {
        "message": "ಇಲ್ಲ"
    },
    "No idle peers found.": {
        "message": "ಯಾವುದೇ ಐಡಲ್ ಗೆಳೆಯರೊಂದಿಗೆ ಕಂಡುಬಂದಿಲ್ಲ."
    },
    "No recent videos found": {
        "message": "ಯಾವುದೇ ಇತ್ತೀಚಿನ ವೀಡಿಯೊಗಳು ಕಂಡುಬಂದಿಲ್ಲ"
    },
    "No saved videos found": {
        "message": "ಯಾವುದೇ ಉಳಿಸಿದ ವೀಡಿಯೊಗಳು ಕಂಡುಬಂದಿಲ್ಲ"
    },
    "No title": {
        "message": "ಯಾವುದೇ ಶೀರ್ಷಿಕೆ"
    },
    "No videos found": {
        "message": "ಯಾವುದೇ ವೀಡಿಯೊಗಳು ಕಂಡುಬಂದಿಲ್ಲ"
    },
    "No videos found on active page": {
        "message": "ಸಕ್ರಿಯ ಪುಟದಲ್ಲಿ ಯಾವುದೇ ವೀಡಿಯೊಗಳು"
    },
    "No, Thanks": {
        "message": "ಇಲ್ಲ, ಧನ್ಯವಾದಗಳು"
    },
    "No, fix it": {
        "message": "ಇಲ್ಲ, ಅದನ್ನು ಸರಿಪಡಿಸಿ"
    },
    "Not working?": {
        "message": "ಕೆಲಸ ಮಾಡಿಲ್ಲ?"
    },
    "Number of users that pressed not working": {
        "message": "ಕಾರ್ಯನಿರ್ವಹಿಸದಿದ್ದರೆ PRESSED ಬಳಕೆದಾರರ ಸಂಖ್ಯೆ"
    },
    "Number of users that use this option": {
        "message": "ಈ ಆಯ್ಕೆಯನ್ನು ಬಳಸುವ ಬಳಕೆದಾರರ ಸಂಖ್ಯೆ"
    },
    "OM": {
        "message": "ಓಮನ್"
    },
    "Off": {
        "message": "ಆಫ್"
    },
    "Oh, yes!": {
        "message": "ಹೌದು, ಹೌದು!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "ಫೈರ್ಫಾಕ್ಸ್ ಹಳೆಯ ಆವೃತ್ತಿ. ಪ್ರೆಸ್ <a> ಇಲ್ಲಿ </a> ಅಪ್ಗ್ರೇಡ್ ಮಾಡಲು."
    },
    "On": {
        "message": "ರಂದು"
    },
    "Open Media Player": {
        "message": "ಓಪನ್ ಮೀಡಿಯಾ ಪ್ಲೇಯರ್"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "ನಮ್ಮ ಹೊಚ್ಚ ಹೊಸ ಎಂಪ್ಲೇಯರ್ ಶೀಘ್ರದಲ್ಲೇ ಬರಲಿದೆ ಇದೆ!"
    },
    "PA": {
        "message": "ಪನಾಮಾ"
    },
    "PC": {
        "message": "ಫೆಸಿಫಿಕ್ ದ್ವೀಪಗಳಲ್ಲಿ ಟ್ರಸ್ಟ್ ಪ್ರದೇಶ"
    },
    "PE": {
        "message": "ಪೆರು"
    },
    "PF": {
        "message": "ಫ್ರೆಂಚ್ ಪೋಲಿನೇಶಿಯಾ"
    },
    "PG": {
        "message": "ಪಪುವಾ ನ್ಯೂಗೀನಿಯಾ"
    },
    "PH": {
        "message": "ಫಿಲಿಫೈನ್ಸ್"
    },
    "PK": {
        "message": "ಪಾಕಿಸ್ತಾನ"
    },
    "PL": {
        "message": "ಪೋಲ್ಯಾಂಡ್"
    },
    "PM": {
        "message": "ಸೇಂಟ್ ಪಿಯರೆ ಮತ್ತು ಮಿಕೆಲನ್"
    },
    "PN": {
        "message": "ಪಿಟ್ಕೈರ್ನ್"
    },
    "PR": {
        "message": "ಪ್ಯೂರ್ಟೋ ರಿಕೊ"
    },
    "PS": {
        "message": "ಪ್ಯಾಲಿಸ್ಟೇನಿಯನ್ ಪ್ರದೇಶ"
    },
    "PT": {
        "message": "ಪೋರ್ಚುಗಲ್"
    },
    "PU": {
        "message": "ಅಮೇರಿಕಾದ ವಿವಿಧ ಫೆಸಿಫಿಕ್ ದ್ವೀಪಗಳಲ್ಲಿ"
    },
    "PW": {
        "message": "ಪಲಾವು"
    },
    "PY": {
        "message": "ಪರಾಗ್ವೇ"
    },
    "PZ": {
        "message": "ಪನಾಮಾ ಕಾಲುವೆ ವಲಯದ"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "ನೀವು ಇತ್ಯಾದಿ ಜಾಹೀರಾತು ಬ್ಲಾಕರ್, ಇತರ VPN ಸೇವೆಗಳು, ನಿಮ್ಮ ಪ್ರಾಕ್ಸಿ ಸೆಟ್ಟಿಂಗ್ಗಳನ್ನು ನಿಯಂತ್ರಿಸಲು ಸಂಶಯವಿಲ್ಲ ಇತರ <a>ವಿಸ್ತರಣೆಗಳನ್ನು</a> ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲು ದಯವಿಟ್ಟು"
    },
    "Please enter a valid email address.": {
        "message": "ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Facebook.com ಹಾಗೆ, ಒಂದು ವೆಬ್ ಸೈಟ್ ವಿಳಾಸ ನಮೂದಿಸಿ"
    },
    "Please help us get better": {
        "message": "ನಮಗೆ ಉತ್ತಮ ಸಹಾಯ ದಯವಿಟ್ಟು"
    },
    "Popular in $1": {
        "message": "ಜನಪ್ರಿಯ $1"
    },
    "Popular in the world": {
        "message": "ವಿಶ್ವದ ಜನಪ್ರಿಯ"
    },
    "Popular sites": {
        "message": "ಜನಪ್ರಿಯ ತಾಣಗಳು"
    },
    "Premium": {
        "message": "ಬೆಲೆಯುಳ್ಳ"
    },
    "QA": {
        "message": "ಕತಾರ್"
    },
    "QO": {
        "message": "ಔಟ್ಲೈಯಿಂಗ್ ಓಶಿಯಾನಿಯಾ"
    },
    "RE": {
        "message": "ರೀಯೂನಿಯನ್"
    },
    "RO": {
        "message": "ರೊಮ್ಯಾನಿಯಾ"
    },
    "RS": {
        "message": "ಸೆರ್ಬಿಯಾ"
    },
    "RU": {
        "message": "ರಶಿಯಾ"
    },
    "RW": {
        "message": "ರುವಾಂಡಾ"
    },
    "Rate us": {
        "message": "ನಮಗೆ ರೇಟ್"
    },
    "Recent Videos": {
        "message": "ಇತ್ತೀಚಿನ ವೀಡಿಯೊಗಳು"
    },
    "Reload": {
        "message": "ಪುನಃ ಭಾರಹೇರು"
    },
    "Reload Hola": {
        "message": "ಹೊಲಾ ರೀಲೋಡ್"
    },
    "Remember server": {
        "message": "ಸರ್ವರ್ ನೆನಪಿಡಿ"
    },
    "Report a problem": {
        "message": "ಒಂದು ಸಮಸ್ಯೆಯನ್ನು ವರದಿಮಾಡಿ"
    },
    "Retry safe mode": {
        "message": "ಸುರಕ್ಷಿತ ಮೋಡ್ ಮರುಪ್ರಯತ್ನಿಸಿ"
    },
    "SA": {
        "message": "ಸೌದಿ ಅರೇಬಿಯಾ"
    },
    "SB": {
        "message": "ಸೊಲೊಮನ್ ದ್ವೀಪಗಳು"
    },
    "SC": {
        "message": "ಸೀಶೆಲ್ಲೆಸ್"
    },
    "SD": {
        "message": "ಸೂಡಾನ್"
    },
    "SE": {
        "message": "ಸ್ವೀಡನ್"
    },
    "SG": {
        "message": "ಸಿಂಗಪುರ"
    },
    "SH": {
        "message": "ಸೇಂಟ್ ಹೆಲೆನಾ"
    },
    "SI": {
        "message": "ಸ್ಲೋವೇನಿಯಾ"
    },
    "SJ": {
        "message": "ಸ್ವಾಲ್ಬಾರ್ಡ್ ಮತ್ತು ಜಾನ್ ಮಾಯೆನ್"
    },
    "SK": {
        "message": "ಸ್ಲೋವಾಕಿಯಾ"
    },
    "SL": {
        "message": "ಸಿಯೆರ್ರಾ ಲಿಯೋನ್"
    },
    "SM": {
        "message": "ಸ್ಯಾನ್ ಮೆರಿನೋ"
    },
    "SN": {
        "message": "ಸೆನೆಗಲ್"
    },
    "SO": {
        "message": "ಸೊಮಾಲಿಯಾ"
    },
    "SR": {
        "message": "ಸುರಿನಾಮ"
    },
    "ST": {
        "message": "ಸಾವೋ ಟೋಮ್ ಮತ್ತು ಪ್ರಿನ್ಸಿಪೆ"
    },
    "SU": {
        "message": "ಸೊವಿಯೆಟ್ ಒಕ್ಕೂಟ ಆಫ್"
    },
    "SV": {
        "message": "ಎಲ್ ಸಾಲ್ವೇಡಾರ್"
    },
    "SY": {
        "message": "ಸಿರಿಯಾ"
    },
    "SZ": {
        "message": "ಸ್ವಾಜಿಲ್ಯಾಂಡ್"
    },
    "Safe": {
        "message": "ಸುರಕ್ಷಿತ"
    },
    "Safe mode": {
        "message": "ಸುರಕ್ಷಿತ ಮೋಡ್"
    },
    "Save": {
        "message": "ಉಳಿಸಿ"
    },
    "Saved Videos": {
        "message": "ಉಳಿಸಿದ ವೀಡಿಯೊಗಳು"
    },
    "Saved for later": {
        "message": "ನಂತರ ಉಳಿಸಿದ"
    },
    "Search video title": {
        "message": "ಹುಡುಕಾಟ ವೀಡಿಯೊ ಶೀರ್ಷಿಕೆ"
    },
    "Select a Country": {
        "message": "ರಾಷ್ಟ್ರ ಆಯ್ಕೆ ಮಾಡಿ"
    },
    "Select site to unblock": {
        "message": "ಅನಿರ್ಬಂಧಿಸಲು ಸೈಟ್ ಆಯ್ಕೆಮಾಡಿ"
    },
    "Server saved!": {
        "message": "ಸರ್ವರ್ ಉಳಿಸಿದ!"
    },
    "Set safe mode for $1 $2": {
        "message": "ಹೊಂದಿಸಿ ಸುರಕ್ಷಿತ ಮೋಡ್ $1 $2"
    },
    "Settings": {
        "message": "ಸೆಟ್ಟಿಂಗ್ಗಳು"
    },
    "Share": {
        "message": "ಹಂಚಿಕೊಳ್ಳಿ"
    },
    "Share $1 on $2": {
        "message": "$2 $1 ಹಂಚಿಕೊಳ್ಳಿ"
    },
    "Share $1 via $2": {
        "message": "$2 ಮೂಲಕ $1 ಹಂಚಿಕೊಳ್ಳಿ"
    },
    "Share with friends!": {
        "message": "ಸ್ನೇಹಿತರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಿ!"
    },
    "Sign up": {
        "message": "ಸೈನ್ ಅಪ್ ಮಾಡಿ"
    },
    "Solve buffering": {
        "message": "ಬಫರ್ ಪರಿಹರಿಸು"
    },
    "Solve buffering problems with": {
        "message": "ಬಫರ್ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸಿ"
    },
    "Solves it": {
        "message": "ಅದನ್ನು ಬಗೆಹರಿಸುವ"
    },
    "Staff Picks": {
        "message": "ಸಿಬ್ಬಂದಿ ಆಯ್ಕೆಗಳು"
    },
    "Start Hola": {
        "message": "ಆರಂಭಿಸಲು"
    },
    "Starting...": {
        "message": "ಪ್ರಾರಂಭಿಸಲಾಗುತ್ತಿದೆ..."
    },
    "Stop Hola": {
        "message": "ನಿಲ್ಲಿಸಿ ಹೊಲಾ"
    },
    "Stopping peer routing...": {
        "message": "ಪೀರ್ ರೂಟಿಂಗ್ ನಿಲ್ಲಿಸಲಾಗುತ್ತಿದೆ..."
    },
    "Stream": {
        "message": "ಸ್ಟ್ರೀಮ್"
    },
    "Stream Instantly": {
        "message": "ತಕ್ಷಣ ಸ್ಟ್ರೀಮ್"
    },
    "Submit": {
        "message": "ಸಲ್ಲಿಸಿ"
    },
    "Support Hola": {
        "message": "ಬೆಂಬಲ ಹೊಲಾ"
    },
    "TA": {
        "message": "ಟ್ರಿಸ್ಟನ್ ಡ ಕುನ್ಹ"
    },
    "TC": {
        "message": "ಟರ್ಕ್ಸ್ ಮತ್ತು ಕೈಕೋಸ್ ದ್ವೀಪಗಳು"
    },
    "TD": {
        "message": "ಚಾಡ್"
    },
    "TF": {
        "message": "ಫ್ರೆಂಚ್ ದಕ್ಷಿಣ ಪ್ರದೇಶಗಳು"
    },
    "TG": {
        "message": "ಟೋಗೋ"
    },
    "TH": {
        "message": "ಥೈಲ್ಯಾಂಡ್"
    },
    "TJ": {
        "message": "ತಜಾಕಿಸ್ಥಾನ್"
    },
    "TK": {
        "message": "ಟೊಕೆಲಾವ್"
    },
    "TL": {
        "message": "ಪೂರ್ವ ತಿಮೋರ್"
    },
    "TM": {
        "message": "ತುರ್ಕಮೆನಿಸ್ಥಾನ್"
    },
    "TN": {
        "message": "ಟುನಿಶಿಯಾ"
    },
    "TO": {
        "message": "ಟೊಂಗ"
    },
    "TR": {
        "message": "ಟರ್ಕಿ"
    },
    "TT": {
        "message": "ಟ್ರಿನಿಡಾಡ್ ಮತ್ತು ಟೊಬ್ಯಾಗೊ"
    },
    "TV": {
        "message": "ಟುವಾಲು"
    },
    "TW": {
        "message": "ಥೈವಾನ್"
    },
    "TZ": {
        "message": "ಟಾಂಜಾನಿಯಾ"
    },
    "Talk to us on $1": {
        "message": "$1 ರಂದು ಮಾತನಾಡಿ"
    },
    "Tell friends about $1": {
        "message": "ಸ್ನೇಹಿತರು ಸುಮಾರು $1 ತಿಳಿಸಿ"
    },
    "Testing connection...": {
        "message": "ಸಂಪರ್ಕ ಪರೀಕ್ಷೆ ..."
    },
    "Thank you!": {
        "message": "ಧನ್ಯವಾದಗಳು!"
    },
    "There seems to be an error": {
        "message": "ದೋಷ ಹಾಗಿದೆ"
    },
    "Top popular sites": {
        "message": "ಟಾಪ್ ಜನಪ್ರಿಯ ತಾಣಗಳು"
    },
    "Translate to your language": {
        "message": "ನಿಮ್ಮ ಭಾಷೆಗೆ ಭಾಷಾಂತರಿಸಿ"
    },
    "Try again": {
        "message": "ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ"
    },
    "Try another server": {
        "message": "ಮತ್ತೊಂು ಸರ್ವರ್ ಪ್ರಯತ್ನಿಸಿ"
    },
    "Try it": {
        "message": "ಪ್ರಯತ್ನಿಸಿ"
    },
    "Try safe mode": {
        "message": "ಸುರಕ್ಷಿತ ಮೋಡ್ ಪ್ರಯತ್ನಿಸಿ"
    },
    "Try to <span>reload</span>": {
        "message": "<span> ಮರುಲೋಡ್ </span> ಪ್ರಯತ್ನಿಸಿ"
    },
    "Trying another peer...": {
        "message": "ಮತ್ತತೊಂ ಪೀರ್ ಪ್ರಯತ್ನಿಸಲಾಗುತ್ತಿದೆ ..."
    },
    "Turn off Accelerator": {
        "message": "ವೇಗವರ್ಧಕ ಆಫ್ ಮಾಡಿ"
    },
    "Turn off Hola": {
        "message": "ಹೊಲಾ ಆಫ್ ಮಾಡಿ"
    },
    "Turn on Accelerator": {
        "message": "ವೇಗವರ್ಧಕ ಆನ್ ಮಾಡಿ"
    },
    "Turn on Hola": {
        "message": "ಹೊಲಾ ಆನ್ ಮಾಡಿ"
    },
    "Turn on to get started": {
        "message": "ಪ್ರಾರಂಭಿಸಲು ಆನ್ ಮಾಡಿ"
    },
    "UA": {
        "message": "ಉಕ್ರೈನ್"
    },
    "UG": {
        "message": "ಉಗಾಂಡಾ"
    },
    "UM": {
        "message": "ಸಂಯುಕ್ತ ಸಂಸ್ಥಾನ ಮೈನರ್ ಔಟ್ಲೈಯಿಂಗ್ ದ್ವೀಪಗಳು"
    },
    "US": {
        "message": "ಅಮೇರಿಕಾ ಸಂಯುಕ್ತ ಸಂಸ್ಥಾನ"
    },
    "UY": {
        "message": "ಉರುಗ್ವೇ"
    },
    "UZ": {
        "message": "ಉಜ್ಬೇಕಿಸ್ಥಾನ್"
    },
    "Unblocker is disabled": {
        "message": "Unblocker ನಿಷ್ಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ"
    },
    "Update": {
        "message": "ನವೀಕರಿಸಿ"
    },
    "Upgrade": {
        "message": "ನವೀಕರಿಸಿ"
    },
    "Using": {
        "message": "ಬಳಸಿ"
    },
    "Using Hola": {
        "message": "ಹೊಲಾ ಬಳಸಿ"
    },
    "VA": {
        "message": "ವ್ಯಾಟಿಕನ್"
    },
    "VC": {
        "message": "ಸೇಂಟ್ ವಿನ್ಸೆಂಟ್ ಮತ್ತು ಗ್ರೆನೆಡೈನ್ಸ್"
    },
    "VD": {
        "message": "ಉತ್ತರ ವಿಯೆಟ್ನಾಂ"
    },
    "VE": {
        "message": "ವೆನೆಜುವೆಲಾ"
    },
    "VG": {
        "message": "ಬ್ರಿಟಿಷ್ ವರ್ಜಿನ್ ದ್ವೀಪಗಳು"
    },
    "VI": {
        "message": "ಯು.ಎಸ್. ವರ್ಜಿನ್ ದ್ವೀಪಗಳು"
    },
    "VN": {
        "message": "ವಿಯೇಟ್ನಾಮ್"
    },
    "VPN Premium": {
        "message": "VPN ಪ್ರೀಮಿಯಂ"
    },
    "VU": {
        "message": "ವನೌಟು"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "ಕ್ರೋಮ್ನ ಅತ್ಯಂತ ಹಳೆಯ ಆವೃತ್ತಿ, <a> ಅಪ್ಡೇಟ್ </a> ಕ್ರೋಮ್ ಹೊಲಾ ಬಳಸಲು"
    },
    "Video": {
        "message": "ವೀಡಿಯೊ"
    },
    "Video stuck?": {
        "message": "ವೀಡಿಯೊ ಅಂಟಿಕೆಕೊಂು?"
    },
    "Videos available for instant streaming": {
        "message": "ತ್ವರಿತ ಸ್ಟ್ರೀಮಿಂಗ್ ಲಭ್ಯವಿದೆ ವೀಡಿಯೊಗಳು"
    },
    "WF": {
        "message": "ವಾಲಿಸ್ ಮತ್ತು ಫುಟುನಾ"
    },
    "WK": {
        "message": "ವೇಕ್ ದ್ವೀಪ"
    },
    "WS": {
        "message": "ಸಮೋವಾ"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "ಇತರ ಸಾಧನಗಳಲ್ಲಿ ಹೊಲಾ ಬಯಸುವಿರಾ? (ಎಕ್ಸ್ ಬಾಕ್ಸ್, ಪಿಎಸ್, ಆಪಲ್ ಟಿವಿ, ಐಫೋನ್ ...). ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ"
    },
    "Want to know more?": {
        "message": "ಹೆಚ್ಚು ತಿಳಿಯಲು ಬಯಸುವಿರಾ?"
    },
    "Watch Now": {
        "message": "ಈಗ ವೀಕ್ಷಿಸಿ"
    },
    "We found $1 videos": {
        "message": "ನಾವು ಕಂಡು $1 ವೀಡಿಯೊಗಳನ್ನು"
    },
    "We will be in touch with you soon": {
        "message": "ನಾವು ತಕ್ಷಣ ನೀವು ಸಂಪರ್ಕದಲ್ಲಿರಿ ಇರುತ್ತದೆ"
    },
    "Working!": {
        "message": "ಕೆಲಸ!"
    },
    "Working?": {
        "message": "ಕೆಲಸ?"
    },
    "Works on all sites but slower": {
        "message": "ಎಲ್ಲಾ ಸೈಟ್ಗಳು ಆದರೆ ನಿಧಾನವಾಗಿ ವರ್ಕ್ಸ್"
    },
    "YD": {
        "message": "ಯೆಮೆನ್ನ ಪೀಪಲ್ಸ್ ಡೆಮೋಕ್ರಟಿಕ್ ರಿಪಬ್ಲಿಕ್"
    },
    "YE": {
        "message": "ಯೆಮನ್"
    },
    "YT": {
        "message": "ಮಯೊಟ್ಟೆ"
    },
    "Yes": {
        "message": "ಹೌದು"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "ನೀವು ಹೊಲಾ ಬಳಸಲು ಒಪೆರಾ ಇತ್ತೀಚಿನ ಆವೃತ್ತಿಗೆ ಅಪ್ಗ್ರೇಡ್ ಅಗತ್ಯವಿದೆ. ಒತ್ತಿ <a>ಇಲ್ಲಿ</a> ಅಪ್ಗ್ರೇಡ್."
    },
    "Youtube": {
        "message": "ಯೂಟ್ಯೂಬ್"
    },
    "ZA": {
        "message": "ದಕ್ಷಿಣ ಆಫ್ರಿಕಾ"
    },
    "ZM": {
        "message": "ಝಾಂಬಿಯಾ"
    },
    "ZW": {
        "message": "ಜಿಂಬಾಬ್ವೆ"
    },
    "ZZ": {
        "message": "ಅಪರಿಚಿತ ಅಥವಾ ಅಮಾನ್ಯ ಪ್ರದೇಶ"
    },
    "app_desc": {
        "message": "ನಿಮ್ಮ ದೇಶದ, ಕಂಪನಿ ಅಥವಾ ಹೊಲಾ ಶಾಲೆಯ ನಿರ್ಬಂಧಿಸಲಾಗಿದೆ ಪ್ರವೇಶ ವೆಬ್ಸೈಟ್! ಹೊಲಾ ಉಚಿತ ಮತ್ತು ಬಳಸಲು ಸುಲಭ!"
    },
    "app_name": {
        "message": "ಹೊಲಾ ಉತ್ತಮ ಇಂಟರ್ನೆಟ್"
    },
    "back to": {
        "message": "ಗೆ ಬ್ಯಾಕ್"
    },
    "changing...": {
        "message": "ಬದಲಾವಣೆ..."
    },
    "cool sites": {
        "message": "ತಂಪಾಗಿದೆ ಸೈಟ್ಗಳು"
    },
    "current site": {
        "message": "ಪ್ರಸ್ತುತ ಸೈಟ್"
    },
    "day": {
        "message": "ದಿನ"
    },
    "days": {
        "message": "ದಿನಗಳ"
    },
    "even more...": {
        "message": "ಇನ್ನೂ..."
    },
    "mode": {
        "message": "ಕ್ರಮದಲ್ಲಿ"
    },
    "more options...": {
        "message": "ಇನ್ನಷ್ಟು ಆಯ್ಕೆಗಳು..."
    },
    "not working?": {
        "message": "ಕೆಲಸ?"
    },
    "not working? try another server": {
        "message": "ಕೆಲಸ? ಮತ್ತೊಂದು ಸರ್ವರ್ ಪ್ರಯತ್ನಿಸಿ"
    },
    "on this page": {
        "message": "ಈ ಪುಟದಲ್ಲಿ"
    },
    "sites that are censored": {
        "message": "ಸೆನ್ಸಾರ್ ಸೈಟ್ಗಳು"
    },
    "start": {
        "message": "ಆರಂಭಿಸಲು"
    },
    "working? remember": {
        "message": "ಕೆಲಸ? ನೆನಪಿಡಿ"
    }
};
return E; });