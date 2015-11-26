'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " μέσω "
    },
    "$1 Buffering?": {
        "message": "$1 Ρυθμιστικό?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1\n\nHola να έχουν πρόσβαση $2 Κάντε κλικ εδώ για να κάνουν το ίδιο: $3\n\nΕγκαθιστά Hola, που μου επιτρέπει να σερφάρετε στο Internet πιο γρήγορα και να έχουν πρόσβαση σε $4$5"
    },
    "$1 from $2": {
        "message": "$1 από $2"
    },
    "$1 not found": {
        "message": "$1 δεν βρέθηκε"
    },
    "$1 via Hola": {
        "message": "$1 μέσω Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(Ορισμένα χαρακτηριστικά Hola δεν είναι διαθέσιμες με την έκδοση)"
    },
    "AC": {
        "message": "Νησί της Αναλήψεως"
    },
    "AD": {
        "message": "Ανδόρα"
    },
    "AE": {
        "message": "Ηνωμένα Αραβικά Εμιράτα"
    },
    "AF": {
        "message": "Αφγανιστάν"
    },
    "AG": {
        "message": "Αντίγκουα και Μπαρμπούντα"
    },
    "AI": {
        "message": "Ανγκουίλα"
    },
    "AL": {
        "message": "Αλβανία"
    },
    "AM": {
        "message": "Αρμενία"
    },
    "AN": {
        "message": "Ολλανδικές Αντίλλες"
    },
    "AO": {
        "message": "Ανγκόλα"
    },
    "AQ": {
        "message": "Ανταρκτική"
    },
    "AR": {
        "message": "Αργεντινή"
    },
    "AS": {
        "message": "Αμερικανική Σαμόα"
    },
    "AT": {
        "message": "Αυστρία"
    },
    "AU": {
        "message": "Αυστραλία"
    },
    "AW": {
        "message": "Αρούμπα"
    },
    "AX": {
        "message": "Νήσοι Άλαντ"
    },
    "AZ": {
        "message": "Αζερμπαϊτζάν"
    },
    "About": {
        "message": "Περίπου"
    },
    "About Hola": {
        "message": "Σχετικά με Hola"
    },
    "Accelerator": {
        "message": "Επιταχυντής"
    },
    "Accelerator is": {
        "message": "Επιταχυντής είναι"
    },
    "Access $1 - cool site!": {
        "message": "Πρόσβαση $1 - δροσερό ιστοσελίδα!"
    },
    "Access $1?": {
        "message": "Πρόσβαση σε $1?"
    },
    "Access any site from any country, free": {
        "message": "Πρόσβαση σε οποιαδήποτε ιστοσελίδα από οποιαδήποτε χώρα, χωρίς"
    },
    "Access cool sites": {
        "message": "Πρόσβαση δροσερές περιοχές"
    },
    "Access more sites": {
        "message": "Πρόσβαση σε περισσότερες θέσεις"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "Πρόσβαση σε τοποθεσίες λογοκρίνεται στη χώρα σας και να επιταχύνει σας στο Internet με Hola - Δωρεάν!"
    },
    "Accessing $1 with Hola": {
        "message": "Πρόσβαση $1 με Hola"
    },
    "Account": {
        "message": "Λογαριασμός"
    },
    "Account type": {
        "message": "Τύπος λογαριασμού"
    },
    "Activating...": {
        "message": "Ενεργοποίηση..."
    },
    "All ($1)": {
        "message": "Όλα ($1)"
    },
    "Apply settings...": {
        "message": "Εφαρμογή ρυθμίσεων..."
    },
    "Author site:": {
        "message": "Ιστοσελίδα Συγγραφέας:"
    },
    "Author:": {
        "message": "Συντάκτης:"
    },
    "Awesome!": {
        "message": "Φοβερό!"
    },
    "BA": {
        "message": "Βοσνία - Ερζεγοβίνη"
    },
    "BB": {
        "message": "Μπαρμπάντος"
    },
    "BD": {
        "message": "Μπανγκλαντές"
    },
    "BE": {
        "message": "Βέλγιο"
    },
    "BF": {
        "message": "Μπουρκίνα Φάσο"
    },
    "BG": {
        "message": "Βουλγαρία"
    },
    "BH": {
        "message": "Μπαχρέιν"
    },
    "BI": {
        "message": "Μπουρούντι"
    },
    "BJ": {
        "message": "Μπενίν"
    },
    "BL": {
        "message": "Άγιος Βαρθολομαίος"
    },
    "BM": {
        "message": "Βερμούδες"
    },
    "BN": {
        "message": "Μπρουνέι"
    },
    "BO": {
        "message": "Βολιβία"
    },
    "BQ": {
        "message": "Βρετανικό έδαφος της Ανταρκτικής"
    },
    "BR": {
        "message": "Βραζιλία"
    },
    "BS": {
        "message": "Μπαχάμες"
    },
    "BT": {
        "message": "Μπουτάν"
    },
    "BV": {
        "message": "Νήσος Μπουβέ"
    },
    "BW": {
        "message": "Μποτσουάνα"
    },
    "BY": {
        "message": "Λευκορωσία"
    },
    "BZ": {
        "message": "Μπελίσε"
    },
    "Back to $1": {
        "message": "Επιστροφή στο $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "Γίνε ο πρώτος που θα πάρει Hola για το iPhone / iPad - Εγγραφείτε τώρα:"
    },
    "Browsing": {
        "message": "Πλοήγηση"
    },
    "Buffering problems?": {
        "message": "Προβλήματα buffering?"
    },
    "Buffering?": {
        "message": "Προσωρινή μνήμη;"
    },
    "CA": {
        "message": "Καναδάς"
    },
    "CC": {
        "message": "Νήσοι Κόκος"
    },
    "CD": {
        "message": "Κονγκό - Κινσάσα"
    },
    "CF": {
        "message": "Κεντροαφρικανική Δημοκρατία"
    },
    "CG": {
        "message": "Κονγκό - Μπραζαβίλ"
    },
    "CH": {
        "message": "Ελβετία"
    },
    "CI": {
        "message": "Ακτή Ελεφαντοστού"
    },
    "CK": {
        "message": "Νήσοι Κουκ"
    },
    "CL": {
        "message": "Χιλή"
    },
    "CM": {
        "message": "Καμερούν"
    },
    "CN": {
        "message": "Κίνα"
    },
    "CO": {
        "message": "Κολομβία"
    },
    "CP": {
        "message": "Νησί Κλίππερτον"
    },
    "CR": {
        "message": "Κόστα Ρίκα"
    },
    "CS": {
        "message": "Σερβία και Μαυροβούνιο"
    },
    "CT": {
        "message": "Canton και Εντέρμπουρυ Νησιά"
    },
    "CU": {
        "message": "Κούβα"
    },
    "CV": {
        "message": "Πράσινο Ακρωτήριο"
    },
    "CX": {
        "message": "Νήσος Χριστουγέννων"
    },
    "CY": {
        "message": "Κύπρος"
    },
    "CZ": {
        "message": "Τσεχία"
    },
    "Changing country...": {
        "message": "Αλλαγή χώρα..."
    },
    "Check out Hola for $1!": {
        "message": "Αναχώρηση Hola για $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "Αναχώρηση Hola για κινητές συσκευές"
    },
    "Check your Internet connection": {
        "message": "Επιβεβαιώστε έχετε Internet"
    },
    "Choose<br>Country": {
        "message": "Επιλέξτε<br>Χώρα"
    },
    "Configuring...": {
        "message": "Διαμόρφωση..."
    },
    "Connecting...": {
        "message": "Σύνδεση..."
    },
    "Creative licenses": {
        "message": "Άδειες Creative"
    },
    "DD": {
        "message": "Ανατολική Γερμανία"
    },
    "DE": {
        "message": "Γερμανία"
    },
    "DG": {
        "message": "Ντιέγκο Γκαρσία"
    },
    "DJ": {
        "message": "Τζιμπουτί"
    },
    "DK": {
        "message": "Δανία"
    },
    "DM": {
        "message": "Ντομίνικα"
    },
    "DO": {
        "message": "Δομινικανή Δημοκρατία"
    },
    "DZ": {
        "message": "Αλγερία"
    },
    "Delete": {
        "message": "Διαγραφή"
    },
    "Deleted from my list": {
        "message": "Διαγράφηκε από τη λίστα μου"
    },
    "Did it work?": {
        "message": "Μήπως αυτό το έργο;"
    },
    "Did you experience any buffering?": {
        "message": "Μήπως αντιμετωπίζετε οποιοδήποτε buffering;"
    },
    "Disliked it": {
        "message": "Δεν μου άρεσε"
    },
    "Don't show again for $1 for one week": {
        "message": "Να μην εμφανιστεί ξανά για $1 για μία εβδομάδα"
    },
    "Don't show again for any site for one week": {
        "message": "Να μην εμφανιστεί ξανά για κάθε site για μία εβδομάδα"
    },
    "Downloading": {
        "message": "Λήψη"
    },
    "EA": {
        "message": "Θέουτα και Μελίλια"
    },
    "EC": {
        "message": "Ισημερινός"
    },
    "EE": {
        "message": "Εσθονία"
    },
    "EG": {
        "message": "Αίγυπτος"
    },
    "EH": {
        "message": "Δυτική Σαχάρα"
    },
    "ER": {
        "message": "Ερυθραία"
    },
    "ES": {
        "message": "Ισπανία"
    },
    "ET": {
        "message": "Αιθιοπία"
    },
    "EU": {
        "message": "ΕΥΡΩΠΑΙΚΗ ΕΝΩΣΗ"
    },
    "Enable": {
        "message": "Ενεργοποίηση"
    },
    "Enable Hola Accelerator": {
        "message": "Ενεργοποίηση Hola Accelerator"
    },
    "Enjoy!": {
        "message": "Απολαύστε το!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "Απολαμβάνοντας Hola για το Chrome;"
    },
    "Enter site to access": {
        "message": "Εισάγετε site για πρόσβαση"
    },
    "Enter your email": {
        "message": "Εισάγετε το email σας"
    },
    "FI": {
        "message": "Φινλανδία"
    },
    "FJ": {
        "message": "Φίτζι"
    },
    "FK": {
        "message": "Νήσοι Φώκλαντ"
    },
    "FM": {
        "message": "Μικρονησία"
    },
    "FO": {
        "message": "Νήσοι Φερόε"
    },
    "FQ": {
        "message": "Γαλλικές περιοχές του νοτίου ημισφαιρίου και της Ανταρκτικής"
    },
    "FR": {
        "message": "Γαλλία"
    },
    "FX": {
        "message": "Μητροπολιτική Γαλλία"
    },
    "Fast": {
        "message": "Γρήγορα"
    },
    "Finding new peers...": {
        "message": "Η εύρεση νέων συμμαθητές..."
    },
    "Finding peers...": {
        "message": "Βρίσκοντας τους συμμαθητές..."
    },
    "Free": {
        "message": "Δωρεάν"
    },
    "From": {
        "message": "Από"
    },
    "Full list": {
        "message": "Πλήρης κατάλογος"
    },
    "GA": {
        "message": "Γκαμπόν"
    },
    "GB": {
        "message": "Ηνωμένο Βασίλειο"
    },
    "GD": {
        "message": "Γρενάδα"
    },
    "GE": {
        "message": "Γεωργία"
    },
    "GF": {
        "message": "Γαλλική Γουιάνα"
    },
    "GG": {
        "message": "Γκερνσέι"
    },
    "GH": {
        "message": "Γκάνα"
    },
    "GI": {
        "message": "Γιβραλτάρ"
    },
    "GL": {
        "message": "Γροιλανδία"
    },
    "GM": {
        "message": "Γκάμπια"
    },
    "GN": {
        "message": "Γουινέα"
    },
    "GP": {
        "message": "Γουαδελούπη"
    },
    "GQ": {
        "message": "Ισημερινή Γουινέα"
    },
    "GR": {
        "message": "Ελλάδα"
    },
    "GS": {
        "message": "Νότια Γεωργία και Νότιες Νήσοι Σάντουιτς"
    },
    "GT": {
        "message": "Γουατεμάλα"
    },
    "GU": {
        "message": "Γκουάμ"
    },
    "GW": {
        "message": "Γουινέα-Μπισάου"
    },
    "GY": {
        "message": "Γουιάνα"
    },
    "Get 24/7 Unblocking": {
        "message": "Πάρτε 24/7 ξεμπλοκαρίσματος"
    },
    "Get Hola Accelerator": {
        "message": "Πάρτε Hola Accelerator"
    },
    "Get Hola Player": {
        "message": "Πάρτε Hola Player"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "Πάρτε Hola Plus για un-διακοπεί, ad-δωρεάν υπηρεσία."
    },
    "Get Hola Premium": {
        "message": "Πάρτε Hola Premium"
    },
    "Get Hola for Android": {
        "message": "Πάρτε Hola για το Android"
    },
    "Get Premium support": {
        "message": "Πάρτε Υποστήριξη Premium"
    },
    "Get Unlimited Unblocking": {
        "message": "Πάρτε Unlimited Απεμπλοκή"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "Αποκτήστε πρόσβαση σε λογοκρίνονται sites, δοκιμάστε το τώρα: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "Ζητήστε βοήθεια από μηχανικό μέσω Skype:"
    },
    "Get the Fastest Servers": {
        "message": "Πάρτε τα γρηγορότερος Servers"
    },
    "Go": {
        "message": "Πηγαίνω"
    },
    "Go Hola Premium": {
        "message": "Go Premium Hola"
    },
    "HK": {
        "message": "Χονγκ Κονγκ ΕΔΠ Κίνας"
    },
    "HM": {
        "message": "Νήσοι Χερντ και Μακντόναλντ"
    },
    "HN": {
        "message": "Ονδούρα"
    },
    "HR": {
        "message": "Κροατία"
    },
    "HT": {
        "message": "Αϊτή"
    },
    "HU": {
        "message": "Ουγγαρία"
    },
    "Hate it": {
        "message": "Το μισώ"
    },
    "Help": {
        "message": "Βοήθεια"
    },
    "Hey,\n\nI'm using": {
        "message": "Γεια σου,\n\nείμαι με τη χρήση"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "Γεια σου,\n\nάρχισα να χρησιμοποιώ $1 ($2). Αυτό μου επιτρέπει να σερφάρετε στο Internet πιο γρήγορα και να αποκτήσετε πρόσβαση $3 στη χώρα μου."
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola δεν μπορεί να λειτουργήσει επειδή ένα άλλο επέκταση τον έλεγχο των ρυθμίσεων του διακομιστή μεσολάβησης σας."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola δεν λειτουργεί καλά στα Windows 8 mode. Παρακαλούμε μεταβείτε σε desktop mode. Κάντε κλικ <a> εδώ </a> για οδηγίες"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola δεν είναι διαθέσιμη αυτή τη στιγμή, αλλά δουλεύουμε πάνω σε αυτό."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola είναι απενεργοποιημένη, κάντε κλικ στο για να ενεργοποιήσετε"
    },
    "Hola site list": {
        "message": "Hola λίστα ιστοσελίδα"
    },
    "I can now access $1 from any country!": {
        "message": "Μπορώ τώρα να έχουν πρόσβαση σε $1 από κάθε χώρα!"
    },
    "I did not experience any buffering": {
        "message": "Δεν είχα αντιμετωπίσετε οποιοδήποτε buffering"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Απλά πρόσβαση σε λογοκριμένο ιστοχώρο χρησιμοποιώντας Hola για $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "Είμαι χρησιμοποιώντας το $1 για να δείτε $2 στη χώρα μου, και να σερφάρετε πιο γρήγορα!"
    },
    "IC": {
        "message": "Κανάριοι Νήσοι"
    },
    "ID": {
        "message": "Ινδονησία"
    },
    "IE": {
        "message": "Ιρλανδία"
    },
    "IL": {
        "message": "Ισραήλ"
    },
    "IM": {
        "message": "Νήσος Μαν"
    },
    "IN": {
        "message": "Ινδία"
    },
    "IO": {
        "message": "Βρετανικά Εδάφη Ινδικού Ωκεανού"
    },
    "IQ": {
        "message": "Ιράκ"
    },
    "IR": {
        "message": "Ιράν"
    },
    "IS": {
        "message": "Ισλανδία"
    },
    "IT": {
        "message": "Ιταλία"
    },
    "Improve translation": {
        "message": "Βελτίωση της μετάφρασης"
    },
    "Initializing...": {
        "message": "Προετοιμασία..."
    },
    "Install": {
        "message": "Εγκατάσταση"
    },
    "Install Accelerator": {
        "message": "Εγκαταστήστε Accelerator"
    },
    "Install Free Hola Accelerator": {
        "message": "Εγκαταστήστε δωρεάν Hola Accelerator"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "Εγκαταστήστε Hola κινητήρα να συνεχίσουν να χρησιμοποιούν Hola για την ελεύθερη"
    },
    "Instantly watch any torrent Video": {
        "message": "Αμέσως παρακολουθήσετε οποιοδήποτε torrent βίντεο"
    },
    "Invite friends - free Premium.": {
        "message": "Προσκαλέστε τους φίλους - δωρεάν Premium."
    },
    "Invite friends. Get Premium.": {
        "message": "Προσκαλέστε τους φίλους. Αποκτήστε Premium."
    },
    "It was okay": {
        "message": "Ήταν εντάξει"
    },
    "JE": {
        "message": "Υερσέη"
    },
    "JM": {
        "message": "Τζαμάικα"
    },
    "JO": {
        "message": "Ιορδανία"
    },
    "JP": {
        "message": "Ιαπωνία"
    },
    "JT": {
        "message": "Johnston Νησί"
    },
    "KE": {
        "message": "Κένυα"
    },
    "KG": {
        "message": "Κιργιζία"
    },
    "KH": {
        "message": "Καμπότζη"
    },
    "KI": {
        "message": "Κιριμπάτι"
    },
    "KM": {
        "message": "Κομόρος"
    },
    "KN": {
        "message": "Σαιντ Κιτς και Νέβις"
    },
    "KP": {
        "message": "Βόρεια Κορέα"
    },
    "KR": {
        "message": "Νότια Κορέα"
    },
    "KW": {
        "message": "Κουβέιτ"
    },
    "KY": {
        "message": "Νήσοι Κέιμαν"
    },
    "KZ": {
        "message": "Καζακστάν"
    },
    "LA": {
        "message": "Λάος"
    },
    "LB": {
        "message": "Λίβανος"
    },
    "LC": {
        "message": "Αγία Λουκία"
    },
    "LI": {
        "message": "Λιχτενστάιν"
    },
    "LK": {
        "message": "Σρι Λάνκα"
    },
    "LR": {
        "message": "Λιβερία"
    },
    "LS": {
        "message": "Λεσότο"
    },
    "LT": {
        "message": "Λιθουανία"
    },
    "LU": {
        "message": "Λουξεμβούργο"
    },
    "LV": {
        "message": "Λετονία"
    },
    "LY": {
        "message": "Λιβύη"
    },
    "Language": {
        "message": "Γλώσσα"
    },
    "Library": {
        "message": "Βιβλιοθήκη"
    },
    "Like it": {
        "message": "Αρέσει"
    },
    "Loading": {
        "message": "Φόρτωση"
    },
    "Loading site...": {
        "message": "Φόρτωση..."
    },
    "Log in": {
        "message": "Σύνδεση"
    },
    "Log out": {
        "message": "Αποσύνδεση"
    },
    "Love Hola?": {
        "message": "Αγάπη Hola?"
    },
    "Love it": {
        "message": "Το λατρεύω"
    },
    "MA": {
        "message": "Μαρόκο"
    },
    "MC": {
        "message": "Μονακό"
    },
    "MD": {
        "message": "Μολδαβία"
    },
    "ME": {
        "message": "Μαυροβούνιο"
    },
    "MF": {
        "message": "Άγιος Μαρτίνος"
    },
    "MG": {
        "message": "Μαδαγασκάρη"
    },
    "MH": {
        "message": "Νήσοι Μάρσαλ"
    },
    "MI": {
        "message": "Midway Νησιά"
    },
    "MK": {
        "message": "ΠΓΔ Μακεδονίας"
    },
    "ML": {
        "message": "Μάλι"
    },
    "MM": {
        "message": "Μιανμάρ"
    },
    "MN": {
        "message": "Μογγολία"
    },
    "MO": {
        "message": "Μακάο ΕΔΠ Κίνας"
    },
    "MP": {
        "message": "Βόρειες Μαριάνες Νήσοι"
    },
    "MQ": {
        "message": "Μαρτινίκα"
    },
    "MR": {
        "message": "Μαυριτανία"
    },
    "MS": {
        "message": "Μονσεράτ"
    },
    "MT": {
        "message": "Μάλτα"
    },
    "MU": {
        "message": "Μαυρίκιος"
    },
    "MV": {
        "message": "Μαλδίβες"
    },
    "MW": {
        "message": "Μαλάουι"
    },
    "MX": {
        "message": "Μεξικό"
    },
    "MY": {
        "message": "Μαλαισία"
    },
    "MZ": {
        "message": "Μοζαμβίκη"
    },
    "Make your Internet better with $1": {
        "message": "Κάνετε Internet σας καλύτερα από $1"
    },
    "Menu": {
        "message": "Μενού"
    },
    "Might not work on all sites": {
        "message": "Δεν θα μπορούσε να λειτουργήσει σε όλους τους ιστότοπους"
    },
    "Mode": {
        "message": "Τρόπος"
    },
    "More countries": {
        "message": "Περισσότερες χώρες"
    },
    "More sites...": {
        "message": "περισσότερα..."
    },
    "More...": {
        "message": "περισσότερα..."
    },
    "My Account": {
        "message": "Ο λογαριασμός μου"
    },
    "My History": {
        "message": "Ιστορία μου"
    },
    "My Settings": {
        "message": "Οι ρυθμίσεις μου"
    },
    "My favorites": {
        "message": "Τα αγαπημένα μου"
    },
    "NA": {
        "message": "Ναμίμπια"
    },
    "NC": {
        "message": "Νέα Καληδονία"
    },
    "NE": {
        "message": "Νίγηρας"
    },
    "NF": {
        "message": "Νήσος Νόρφολκ"
    },
    "NG": {
        "message": "Νιγηρία"
    },
    "NI": {
        "message": "Νικαράγουα"
    },
    "NL": {
        "message": "Ολλανδία"
    },
    "NO": {
        "message": "Νορβηγία"
    },
    "NP": {
        "message": "Νεπάλ"
    },
    "NR": {
        "message": "Ναούρου"
    },
    "NT": {
        "message": "Ουδέτερη Ζώνη"
    },
    "NU": {
        "message": "Νιούε"
    },
    "NZ": {
        "message": "Νέα Ζηλανδία"
    },
    "Need Help?": {
        "message": "Χρειάζεστε βοήθεια;"
    },
    "Never ask me again": {
        "message": "Ποτέ ξανά η ερώτηση"
    },
    "Never be a peer": {
        "message": "Ποτέ δεν είναι ένα peer"
    },
    "No": {
        "message": "Όχι"
    },
    "No idle peers found.": {
        "message": "Δεν ρελαντί συμμαθητές βρέθηκαν."
    },
    "No recent videos found": {
        "message": "Δεν υπάρχουν πρόσφατες βρέθηκαν βίντεο"
    },
    "No saved videos found": {
        "message": "Δεν βρέθηκαν αποθηκευμένα βίντεο"
    },
    "No title": {
        "message": "Χωρίς τίτλο"
    },
    "No videos found": {
        "message": "Δεν βρέθηκαν βίντεο"
    },
    "No videos found on active page": {
        "message": "Δεν βρέθηκαν σχετικά με την ενεργό σελίδα βίντεο"
    },
    "No, Thanks": {
        "message": "Όχι, ευχαριστώ"
    },
    "No, fix it": {
        "message": "Όχι, να το διορθώσετε"
    },
    "Not working?": {
        "message": "Δεν λειτουργεί?"
    },
    "Number of users that pressed not working": {
        "message": "Ο αριθμός των χρηστών που δεν πιέζεται εργασίας"
    },
    "Number of users that use this option": {
        "message": "Ο αριθμός των χρηστών που χρησιμοποιούν αυτή την επιλογή"
    },
    "OM": {
        "message": "Ομάν"
    },
    "Off": {
        "message": "Μακριά από"
    },
    "Oh, yes!": {
        "message": "Ω, ναι!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Παλιά έκδοση του Firefox. Πατήστε <a>εδώ</a> για την αναβάθμιση."
    },
    "On": {
        "message": "Σε"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "Τα νέα μας MPlayer είναι Σύντομα κοντά σας!"
    },
    "PA": {
        "message": "Παναμάς"
    },
    "PC": {
        "message": "Νησιά του Ειρηνικού Εμπιστοσύνη Επικράτεια"
    },
    "PE": {
        "message": "Περού"
    },
    "PF": {
        "message": "Γαλλική Πολυνησία"
    },
    "PG": {
        "message": "Παπούα Νέα Γουινέα"
    },
    "PH": {
        "message": "Φιλιππίνες"
    },
    "PK": {
        "message": "Πακιστάν"
    },
    "PL": {
        "message": "Πολωνία"
    },
    "PM": {
        "message": "Σαιντ Πιέρ και Μικελόν"
    },
    "PN": {
        "message": "Πίτκερν"
    },
    "PR": {
        "message": "Πουέρτο Ρίκο"
    },
    "PS": {
        "message": "Παλαιστινιακά Εδάφη"
    },
    "PT": {
        "message": "Πορτογαλία"
    },
    "PU": {
        "message": "ΗΠΑ Διάφορα νησιά του Ειρηνικού"
    },
    "PW": {
        "message": "Παλάου"
    },
    "PY": {
        "message": "Παραγουάη"
    },
    "PZ": {
        "message": "Ζώνη καναλιών του Παναμά"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "Παρακαλούμε να απενεργοποιήσετε άλλες <a>επεκτάσεις</a> που νομίζετε ότι θα μπορούσε να ελέγξει τις ρυθμίσεις proxy, όπως ad-αποκλειστές, άλλες υπηρεσίες VPN, κλπ."
    },
    "Please enter a valid email address.": {
        "message": "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση ηλεκτρονικού ταχυδρομείου."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "Παρακαλώ εισάγετε μια διεύθυνση ιστοσελίδας, όπως facebook.com"
    },
    "Please help us get better": {
        "message": "Παρακαλούμε να μας βοηθήσει να έχουμε καλύτερη"
    },
    "Popular in $1": {
        "message": "Δημοφιλή στο $1"
    },
    "Popular in the world": {
        "message": "Δημοφιλής στον κόσμο"
    },
    "Popular sites": {
        "message": "Δημοφιλή sites"
    },
    "Premium": {
        "message": "Ασφάλιστρο"
    },
    "QA": {
        "message": "Κατάρ"
    },
    "QO": {
        "message": "Απομακρυσμένες Ωκεανία"
    },
    "RE": {
        "message": "Ρεϋνιόν"
    },
    "RO": {
        "message": "Ρουμανία"
    },
    "RS": {
        "message": "Σερβία"
    },
    "RU": {
        "message": "Ρωσία"
    },
    "RW": {
        "message": "Ρουάντα"
    },
    "Rate us": {
        "message": "Βαθμολογήστε μας"
    },
    "Recent Videos": {
        "message": "Πρόσφατα Βίντεο"
    },
    "Reload": {
        "message": "Ανανέωση"
    },
    "Reload Hola": {
        "message": "Ανανέωση Hola"
    },
    "Remember server": {
        "message": "Θυμηθείτε διακομιστή"
    },
    "Report a problem": {
        "message": "Αναφορά προβλήματος"
    },
    "Retry safe mode": {
        "message": "Επανάληψη ασφαλή λειτουργία"
    },
    "SA": {
        "message": "Σαουδική Αραβία"
    },
    "SB": {
        "message": "Νήσοι Σολομώντος"
    },
    "SC": {
        "message": "Σεϋχέλλες"
    },
    "SD": {
        "message": "Σουδάν"
    },
    "SE": {
        "message": "Σουηδία"
    },
    "SG": {
        "message": "Σιγκαπούρη"
    },
    "SH": {
        "message": "Αγία Ελένη"
    },
    "SI": {
        "message": "Σλοβενία"
    },
    "SJ": {
        "message": "Σβαλμπάρντ και Γιαν Μαγιέν"
    },
    "SK": {
        "message": "Σλοβακία"
    },
    "SL": {
        "message": "Σιέρα Λεόνε"
    },
    "SM": {
        "message": "Άγιος Μαρίνος"
    },
    "SN": {
        "message": "Σενεγάλη"
    },
    "SO": {
        "message": "Σομαλία"
    },
    "SR": {
        "message": "Σουρινάμ"
    },
    "ST": {
        "message": "Σάο Τομέ και Πρίνσιπε"
    },
    "SU": {
        "message": "Ένωση των Σοβιετικών Σοσιαλιστικών Δημοκρατιών"
    },
    "SV": {
        "message": "Ελ Σαλβαδόρ"
    },
    "SY": {
        "message": "Συρία"
    },
    "SZ": {
        "message": "Ζουαζηλάνδη"
    },
    "Safe": {
        "message": "Ασφαλές"
    },
    "Safe mode": {
        "message": "Λειτουργία ασφαλείας"
    },
    "Save": {
        "message": "Αποθήκευση"
    },
    "Saved Videos": {
        "message": "Αποθηκευμένα Βίντεο"
    },
    "Saved for later": {
        "message": "Αποθηκευθεί για αργότερα"
    },
    "Search video title": {
        "message": "Αναζήτηση τίτλου βίντεο"
    },
    "Select a Country": {
        "message": "Επιλέξτε Χώρα"
    },
    "Select site to unblock": {
        "message": "Επιλέξτε περιοχή για να ξεμπλοκάρει"
    },
    "Server saved!": {
        "message": "Διακομιστή σωθεί!"
    },
    "Set safe mode for $1 $2": {
        "message": "Ρυθμίστε την ασφαλή λειτουργία για $1 $2"
    },
    "Settings": {
        "message": "Ρυθμίσεις"
    },
    "Share": {
        "message": "Μετοχή"
    },
    "Share $1 on $2": {
        "message": "Μοιραστείτε $1 με $2"
    },
    "Share $1 via $2": {
        "message": "Μοιραστείτε $1 μέσω $2"
    },
    "Share with friends!": {
        "message": "Μοιράζομαι με φίλους!"
    },
    "Sign up": {
        "message": "Εγγραφή"
    },
    "Solve buffering": {
        "message": "Λύστε buffering"
    },
    "Solve buffering problems with": {
        "message": "Επίλυση προβλημάτων με buffering"
    },
    "Solves it": {
        "message": "Λύνει το"
    },
    "Staff Picks": {
        "message": "Επιλογές Προσωπικό"
    },
    "Start Hola": {
        "message": "αρχή"
    },
    "Starting...": {
        "message": "Ξεκινώντας..."
    },
    "Stop Hola": {
        "message": "Διακοπή Hola"
    },
    "Stopping peer routing...": {
        "message": "Διακοπή από ομοτίμους δρομολόγησης..."
    },
    "Stream": {
        "message": "Ρεύμα"
    },
    "Stream Instantly": {
        "message": "Αμέσως κάνετε streaming"
    },
    "Submit": {
        "message": "Υποβολή"
    },
    "Support Hola": {
        "message": "Υποστήριξη Hola"
    },
    "TA": {
        "message": "Τριστάν ντα Κούνια"
    },
    "TC": {
        "message": "Νήσοι Τερκς και Κάικος"
    },
    "TD": {
        "message": "Τσαντ"
    },
    "TF": {
        "message": "Γαλλικά Νότια Εδάφη"
    },
    "TG": {
        "message": "Τόγκο"
    },
    "TH": {
        "message": "Ταϊλάνδη"
    },
    "TJ": {
        "message": "Τατζικιστάν"
    },
    "TK": {
        "message": "Τοκελάου"
    },
    "TL": {
        "message": "Ανατολικό Τιμόρ"
    },
    "TM": {
        "message": "Τουρκμενιστάν"
    },
    "TN": {
        "message": "Τυνησία"
    },
    "TO": {
        "message": "Τόνγκα"
    },
    "TR": {
        "message": "Τουρκία"
    },
    "TT": {
        "message": "Τρινιντάντ και Τομπάγκο"
    },
    "TV": {
        "message": "Τουβαλού"
    },
    "TW": {
        "message": "Ταϊβάν"
    },
    "TZ": {
        "message": "Τανζανία"
    },
    "Talk to us on $1": {
        "message": "Μιλήστε μας για $1"
    },
    "Tell friends about $1": {
        "message": "Ενημερώστε τους φίλους σας για $1"
    },
    "Testing connection...": {
        "message": "Δοκιμές σύνδεσης..."
    },
    "Thank you!": {
        "message": "Σας ευχαριστούμε!"
    },
    "There seems to be an error": {
        "message": "Φαίνεται να υπάρχει ένα λάθος"
    },
    "Top popular sites": {
        "message": "Top δημοφιλή sites"
    },
    "Translate to your language": {
        "message": "Μεταφράστε στη γλώσσα σας"
    },
    "Try again": {
        "message": "Δοκιμάστε ξανά"
    },
    "Try another server": {
        "message": "Δοκιμάστε άλλο διακομιστή"
    },
    "Try it": {
        "message": "Δοκιμάστε το"
    },
    "Try safe mode": {
        "message": "Δοκιμάστε ασφαλή λειτουργία"
    },
    "Try to <span>reload</span>": {
        "message": "Προσπαθήστε να <span>reload</span>"
    },
    "Trying another peer...": {
        "message": "Προσπαθώντας άλλο από ομοτίμους..."
    },
    "Turn off Accelerator": {
        "message": "Απενεργοποιήστε Accelerator"
    },
    "Turn off Hola": {
        "message": "Απενεργοποιήστε Hola"
    },
    "Turn on Accelerator": {
        "message": "Ενεργοποιήστε Accelerator"
    },
    "Turn on Hola": {
        "message": "Ενεργοποιήστε Hola"
    },
    "Turn on to get started": {
        "message": "Ενεργοποιήστε για να ξεκινήσετε"
    },
    "UA": {
        "message": "Ουκρανία"
    },
    "UG": {
        "message": "Ουγκάντα"
    },
    "UM": {
        "message": "Απομακρυσμένες Νησίδες Η.Π.Α."
    },
    "US": {
        "message": "Ηνωμένες Πολιτείες της Αμερικής"
    },
    "UY": {
        "message": "Ουρουγουάη"
    },
    "UZ": {
        "message": "Ουζμπεκιστάν"
    },
    "Unblocker is disabled": {
        "message": "Unblocker είναι απενεργοποιημένη"
    },
    "Unblocker?": {
        "message": "Unblocker;"
    },
    "Update": {
        "message": "Ενημέρωση"
    },
    "Upgrade": {
        "message": "Ενημέρωση"
    },
    "Using": {
        "message": "Χρησιμοποιώντας"
    },
    "Using Hola": {
        "message": "Χρησιμοποιώντας Hola"
    },
    "VA": {
        "message": "Βατικανό"
    },
    "VC": {
        "message": "Άγιος Βικέντιος και Γρεναδίνες"
    },
    "VD": {
        "message": "Βόρειο Βιετνάμ"
    },
    "VE": {
        "message": "Βενεζουέλα"
    },
    "VG": {
        "message": "Βρετανικές Παρθένοι Νήσοι"
    },
    "VI": {
        "message": "Αμερικανικές Παρθένοι Νήσοι"
    },
    "VN": {
        "message": "Βιετνάμ"
    },
    "VU": {
        "message": "Βανουάτου"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Πολύ παλιά έκδοση του Chrome, <a>update</a> Chrome να χρησιμοποιήσετε Hola"
    },
    "Video": {
        "message": "βίντεο"
    },
    "Video stuck?": {
        "message": "Βίντεο κολλήσει?"
    },
    "Videos available for instant streaming": {
        "message": "Βίντεο διαθέσιμη για άμεση μετάδοση"
    },
    "WF": {
        "message": "Νήσοι Ουαλλίς και Φουτουνά"
    },
    "WS": {
        "message": "Σαμόα"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "Θέλετε Hola σε άλλες συσκευές? (Xbox, PS, Apple TV, iPhone ...). Κάντε κλικ εδώ"
    },
    "Want to know more?": {
        "message": "Θέλετε να μάθετε περισσότερα;"
    },
    "Watch Now": {
        "message": "Παρακολουθήστε τώρα"
    },
    "We found $1 videos": {
        "message": "Βρήκαμε $1 βίντεο"
    },
    "We will be in touch with you soon": {
        "message": "Θα είμαστε σε επαφή μαζί σας το συντομότερο"
    },
    "Working!": {
        "message": "Εργασία!"
    },
    "Working?": {
        "message": "Εργασία?"
    },
    "Works on all sites but slower": {
        "message": "Λειτουργεί σε όλους τους χώρους, αλλά πιο αργά"
    },
    "YD": {
        "message": "Λαϊκή Δημοκρατία της Υεμένης"
    },
    "YE": {
        "message": "Υεμένη"
    },
    "YT": {
        "message": "Μαγιότ"
    },
    "Yes": {
        "message": "Ναί"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Θα πρέπει να κάνετε αναβάθμιση στην τελευταία έκδοση του Opera για να χρησιμοποιήσετε Hola. Πατήστε <a>εδώ</a> για να αναβαθμίσετε."
    },
    "ZA": {
        "message": "Νότια Αφρική"
    },
    "ZM": {
        "message": "Ζάμπια"
    },
    "ZW": {
        "message": "Ζιμπάμπουε"
    },
    "ZZ": {
        "message": "Άγνωστη ή μη έγκυρη περιοχή"
    },
    "app_desc": {
        "message": "Ιστοσελίδες Πρόσβαση μπλοκαριστεί στη χώρα, την εταιρεία ή το σχολείο με Hola σας! Hola είναι δωρεάν και εύκολο στη χρήση!"
    },
    "app_name": {
        "message": "Hola καλύτερο Διαδίκτυο"
    },
    "back to": {
        "message": "πίσω στο"
    },
    "changing...": {
        "message": "αλλαγή..."
    },
    "cool sites": {
        "message": "δροσερές περιοχές"
    },
    "current site": {
        "message": "τρέχουσα τοποθεσία"
    },
    "day": {
        "message": "ημέρα"
    },
    "days": {
        "message": "ημέρες"
    },
    "even more...": {
        "message": "ακόμη περισσότερο..."
    },
    "mode": {
        "message": "τρόπος"
    },
    "more options...": {
        "message": "περισσότερες επιλογές..."
    },
    "not working?": {
        "message": "δεν λειτουργεί?"
    },
    "not working? try another server": {
        "message": "δεν λειτουργεί; δοκιμάστε άλλο διακομιστή"
    },
    "on this page": {
        "message": "σε αυτή τη σελίδα"
    },
    "sites that are censored": {
        "message": "sites που λογοκρίνονται"
    },
    "start": {
        "message": "αρχή"
    },
    "working? remember": {
        "message": "εργασίας; θυμάμαι"
    }
};
return E; });