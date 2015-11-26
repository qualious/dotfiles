'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": "ผ่านทาง"
    },
    "$1 Buffering?": {
        "message": "$1 วิดิโอกำลังโหลด?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 Hola ในการเข้าถึง $2\n\nคลิกที่นี่เพื่อทำแบบเดียวกัน: $3\n\nจะติดตั้ง Hola ซึ่งช่วยให้ฉันสามารถท่องอินเทอร์เน็ตได้เร็วขึ้นและเข้าถึง $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN พรีเมี่ยม"
    },
    "$1 from $2": {
        "message": "$1 จาก $2"
    },
    "$1 not found": {
        "message": "$1 ไม่พบ"
    },
    "$1 via Hola": {
        "message": "$1 ปลดบล็อกแล้ว"
    },
    "(some Hola features are not available on your version)": {
        "message": "(คุณสมบัติ Hola บางตัวไม่สามารถใช้ได้กับรุ่นของคุณ)"
    },
    "AC": {
        "message": "เกาะสวรรค์"
    },
    "AD": {
        "message": "อันดอร์รา"
    },
    "AE": {
        "message": "สหรัฐอาหรับเอมิเรตส์"
    },
    "AF": {
        "message": "อัฟกานิสถาน"
    },
    "AG": {
        "message": "แอนติกาและบาร์บูดา"
    },
    "AI": {
        "message": "แองกวิลลา"
    },
    "AL": {
        "message": "แอลเบเนีย"
    },
    "AM": {
        "message": "อาร์เมเนีย"
    },
    "AN": {
        "message": "เนเธอร์แลนด์แอนทิลลิส"
    },
    "AO": {
        "message": "แองโกลา"
    },
    "AQ": {
        "message": "แอนตาร์กติกา"
    },
    "AR": {
        "message": "อาร์เจนตินา"
    },
    "AS": {
        "message": "อเมริกันซามัว"
    },
    "AT": {
        "message": "ออสเตรีย"
    },
    "AU": {
        "message": "ออสเตรเลีย"
    },
    "AW": {
        "message": "อารูบา"
    },
    "AX": {
        "message": "หมู่เกาะโอลันด์"
    },
    "AZ": {
        "message": "อาเซอร์ไบจาน"
    },
    "About": {
        "message": "เกี่ยวกับ"
    },
    "About Hola": {
        "message": "เกี่ยวกับ Hola"
    },
    "Accelerator": {
        "message": "เร่งความเร็วอินเทอร์เน็ต"
    },
    "Accelerator is": {
        "message": "Accelerator เป็น"
    },
    "Access $1 - cool site!": {
        "message": "เข้าถึง $1 - เว็บไซต์เจ๋งๆ!"
    },
    "Access $1?": {
        "message": "เข้าถึง $1?"
    },
    "Access any site from any country, free": {
        "message": "เข้าถึงเว็บไซต์จากประเทศใด ๆ , ฟรี,"
    },
    "Access cool sites": {
        "message": "เว็บไซต์ที่เข้าเย็น"
    },
    "Access more sites": {
        "message": "เข้าถึงเว็บไซต์มากขึ้น"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "การเข้าถึงเว็บไซต์ที่ออกอากาศในประเทศของคุณและเร่งอินเทอร์เน็ตของคุณด้วย Hola - ฟรี!"
    },
    "Accessing $1 with Hola": {
        "message": "การเข้าถึง $1 กับ Hola"
    },
    "Account": {
        "message": "บัญชี"
    },
    "Account type": {
        "message": "ประเภทบัญชี"
    },
    "Activating...": {
        "message": "การเปิดใช้งาน..."
    },
    "All ($1)": {
        "message": "ทั้งหมด ($1)"
    },
    "Apply settings...": {
        "message": "ใช้การตั้งค่า ..."
    },
    "Author site:": {
        "message": "เว็บไซต์ของผู้เขียน:"
    },
    "Author:": {
        "message": "ผู้เขียนหัวข้อ:"
    },
    "Awesome!": {
        "message": "เจ๋ง!"
    },
    "BA": {
        "message": "บอสเนียและเฮอร์เซโกวีนา"
    },
    "BB": {
        "message": "บาร์เบโดส"
    },
    "BD": {
        "message": "บังกลาเทศ"
    },
    "BE": {
        "message": "เบลเยียม"
    },
    "BF": {
        "message": "บูร์กินาฟาโซ"
    },
    "BG": {
        "message": "บัลแกเรีย"
    },
    "BH": {
        "message": "บาห์เรน"
    },
    "BI": {
        "message": "บุรุนดี"
    },
    "BJ": {
        "message": "เบนิน"
    },
    "BL": {
        "message": "เซนต์บาร์เธเลมี"
    },
    "BM": {
        "message": "เบอร์มิวดา"
    },
    "BN": {
        "message": "บรูไน"
    },
    "BO": {
        "message": "โบลิเวีย"
    },
    "BQ": {
        "message": "บริติชแอนตาร์กติกเทร์ริทอรี"
    },
    "BR": {
        "message": "บราซิล"
    },
    "BS": {
        "message": "บาฮามาส"
    },
    "BT": {
        "message": "ภูฏาน"
    },
    "BV": {
        "message": "เกาะบูเวต"
    },
    "BW": {
        "message": "บอตสวานา"
    },
    "BY": {
        "message": "เบลารุส"
    },
    "BZ": {
        "message": "เบลีซ"
    },
    "Back to $1": {
        "message": "กลับไป $1"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "เป็นคนแรกที่จะได้รับ Hola สำหรับ iPhone / iPad - ลงทะเบียนตอนนี้:"
    },
    "Browsing": {
        "message": "เรียกดู"
    },
    "Buffering problems?": {
        "message": "ปัญหาโหลดวิดิโอ?"
    },
    "Buffering?": {
        "message": "วิดิโอกำลังโหลด?"
    },
    "CA": {
        "message": "แคนาดา"
    },
    "CC": {
        "message": "หมู่เกาะโคโคส"
    },
    "CD": {
        "message": "คองโก-กินชาซา"
    },
    "CF": {
        "message": "สาธารณรัฐแอฟริกากลาง"
    },
    "CG": {
        "message": "คองโก-บราซซาวิล"
    },
    "CH": {
        "message": "สวิตเซอร์แลนด์"
    },
    "CI": {
        "message": "ไอวอรี่โคสต์"
    },
    "CK": {
        "message": "หมู่เกาะคุก"
    },
    "CL": {
        "message": "ชิลี"
    },
    "CM": {
        "message": "แคเมอรูน"
    },
    "CN": {
        "message": "จีน"
    },
    "CO": {
        "message": "โคลอมเบีย"
    },
    "CP": {
        "message": "เกาะคลิปเปอร์"
    },
    "CR": {
        "message": "คอสตาริกา"
    },
    "CS": {
        "message": "เซอร์เบียและมอนเตเนโกร"
    },
    "CT": {
        "message": "แคนตันและหมู่เกาะ Enderbury"
    },
    "CU": {
        "message": "คิวบา"
    },
    "CV": {
        "message": "เคปเวิร์ด"
    },
    "CX": {
        "message": "เกาะคริสต์มาส"
    },
    "CY": {
        "message": "ไซปรัส"
    },
    "CZ": {
        "message": "สาธารณรัฐเช็ก"
    },
    "Changing country...": {
        "message": "เปลี่ยนประเทศ..."
    },
    "Check out Hola for $1!": {
        "message": "ตรวจสอบ Hola $1!"
    },
    "Check out Hola for mobile devices": {
        "message": "ตรวจสอบ Hola สำหรับอุปกรณ์มือถือ"
    },
    "Check your Internet connection": {
        "message": "ตรวจสอบสัญญาณ Internet"
    },
    "Choose<br>Country": {
        "message": "เลือก <br> ประเทศ"
    },
    "Configuring...": {
        "message": "การกำหนดค่า..."
    },
    "Connecting...": {
        "message": "เชื่อมต่อ..."
    },
    "Cool site!": {
        "message": "เว็บไซต์เจ๋งๆ!"
    },
    "Creative licenses": {
        "message": "สัญญาอนุญาตของครีเอทีฟ"
    },
    "DD": {
        "message": "เยอรมนีตะวันออก"
    },
    "DE": {
        "message": "เยอรมนี"
    },
    "DG": {
        "message": "ดิเอโกการ์เซีย"
    },
    "DJ": {
        "message": "จิบูตี"
    },
    "DK": {
        "message": "เดนมาร์ก"
    },
    "DM": {
        "message": "โดมินิกา"
    },
    "DO": {
        "message": "สาธารณรัฐโดมินิกัน"
    },
    "DZ": {
        "message": "แอลจีเรีย"
    },
    "Delete": {
        "message": "ลบ"
    },
    "Deleted from my list": {
        "message": "ลบออกจากรายการของฉัน"
    },
    "Did it work?": {
        "message": "มันทำงานหรือไม่?"
    },
    "Did you experience any buffering?": {
        "message": "คุณพบปัญหาวิดิโอกำลังโหลด?"
    },
    "Disliked it": {
        "message": "ไม่ชอบมัน"
    },
    "Don't show again for $1 for one week": {
        "message": "อย่าแสดงอีกครั้งสำหรับ $1 เป็นเวลาหนึ่งสัปดาห์"
    },
    "Don't show again for any site for one week": {
        "message": "อย่าแสดงอีกครั้งสำหรับเว็บไซต์ใด ๆ เป็นเวลาหนึ่งสัปดาห์"
    },
    "Downloading": {
        "message": "ดาวน์โหลด"
    },
    "EA": {
        "message": "เซวตาและเมลียา"
    },
    "EC": {
        "message": "เอกวาดอร์"
    },
    "EE": {
        "message": "เอสโตเนีย"
    },
    "EG": {
        "message": "อียิปต์"
    },
    "EH": {
        "message": "ซาฮาราตะวันตก"
    },
    "ER": {
        "message": "เอริเทรีย"
    },
    "ES": {
        "message": "สเปน"
    },
    "ET": {
        "message": "เอธิโอเปีย"
    },
    "EU": {
        "message": "สหภาพยุโรป"
    },
    "Enable": {
        "message": "เปิดใช้งาน"
    },
    "Enable Hola Accelerator": {
        "message": "เปิดใช้งานตัวเร่งความเร็ว Hola "
    },
    "Enjoy!": {
        "message": "สนุก!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "เพลิดเพลินกับ Hola สำหรับ Chrome?"
    },
    "Enter site to access": {
        "message": "เข้าสู่เว็บไซต์ที่จะเข้าถึง"
    },
    "Enter your email": {
        "message": "ใส่อีเมลของคุณ"
    },
    "FI": {
        "message": "ฟินแลนด์"
    },
    "FJ": {
        "message": "ฟิจิ"
    },
    "FK": {
        "message": "หมู่เกาะฟอล์กแลนด์"
    },
    "FM": {
        "message": "ไมโครนีเซีย"
    },
    "FO": {
        "message": "หมู่เกาะแฟโร"
    },
    "FQ": {
        "message": "ฝรั่งเศสตอนใต้และแอนตาร์กติกดินแดน"
    },
    "FR": {
        "message": "ฝรั่งเศส"
    },
    "FX": {
        "message": "กรุงเทพมหานครและปริมณฑลในฝรั่งเศส"
    },
    "Fast": {
        "message": "รวดเร็ว"
    },
    "Finding new peers...": {
        "message": "หา peer ใหม่..."
    },
    "Finding peers...": {
        "message": "หา peer..."
    },
    "Free": {
        "message": "ฟรี"
    },
    "From": {
        "message": "จาก"
    },
    "Full list": {
        "message": "รายการเต็มรูปแบบ"
    },
    "GA": {
        "message": "กาบอง"
    },
    "GB": {
        "message": "สหราชอาณาจักร"
    },
    "GD": {
        "message": "เกรเนดา"
    },
    "GE": {
        "message": "จอร์เจีย"
    },
    "GF": {
        "message": "เฟรนช์เกียนา"
    },
    "GG": {
        "message": "เกิร์นซีย์"
    },
    "GH": {
        "message": "กานา"
    },
    "GI": {
        "message": "ยิบรอลตาร์"
    },
    "GL": {
        "message": "กรีนแลนด์"
    },
    "GM": {
        "message": "แกมเบีย"
    },
    "GN": {
        "message": "กินี"
    },
    "GP": {
        "message": "กวาเดอลูป"
    },
    "GQ": {
        "message": "อิเควทอเรียลกินี"
    },
    "GR": {
        "message": "กรีซ"
    },
    "GS": {
        "message": "เกาะเซาท์จอร์เจียและหมู่เกาะเซาท์แซนด์วิช"
    },
    "GT": {
        "message": "กัวเตมาลา"
    },
    "GU": {
        "message": "กวม"
    },
    "GW": {
        "message": "กินี-บิสเซา"
    },
    "GY": {
        "message": "กายอานา"
    },
    "Get 24/7 Unblocking": {
        "message": "รับการปลดบล็อกตลอดเวลา"
    },
    "Get Free Premium": {
        "message": "รับฟรีพรีเมี่ยม"
    },
    "Get Hola Accelerator": {
        "message": "รับตัวเร่งความเร็ว Hola"
    },
    "Get Hola Player": {
        "message": "รับผู้เล่น Hola"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "รับ Hola Plus สำหรับการยกเลิกการขัดจังหวะ และไม่มีโฆษณา"
    },
    "Get Hola Premium": {
        "message": "รับพรีเมี่ยม Hola"
    },
    "Get Hola for Android": {
        "message": "รับ Hola สำหรับ Android"
    },
    "Get Premium support": {
        "message": "รับการสนับสนุนแบบพิเศษ"
    },
    "Get Unlimited Unblocking": {
        "message": "รับการปลดบล็อกแบบไม่จำกัด"
    },
    "Get access to censored sites, try it now: $1": {
        "message": "ได้รับการเข้าถึงเว็บไซต์ที่มีเซ็นเซอร์, ลองตอนนี้: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "ขอความช่วยเหลือจากวิศวกรบน Skype:"
    },
    "Get the Fastest Servers": {
        "message": "ไปยัง เซิฟเวอร์ที่เร็วที่สุด"
    },
    "Go": {
        "message": "ไป"
    },
    "Go Hola Premium": {
        "message": "ใช้ Hola พรีเมี่ยม"
    },
    "HK": {
        "message": "ฮ่องกง เขตปกครองพิเศษประเทศจีน"
    },
    "HM": {
        "message": "เกาะเฮิร์ดและหมู่เกาะแมกดอนัลด์"
    },
    "HN": {
        "message": "ฮอนดูรัส"
    },
    "HR": {
        "message": "โครเอเชีย"
    },
    "HT": {
        "message": "เฮติ"
    },
    "HU": {
        "message": "ฮังการี"
    },
    "Hate it": {
        "message": "เกลียดมัน"
    },
    "Help": {
        "message": "ช่วย"
    },
    "Hey,\n\nI'm using": {
        "message": "เฮ้ ฉันใช้"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "สวัสดี,\n\nฉันเริ่มใช้ $1 ($2) มันช่วยให้ฉันท่องอินเทอร์เน็ตได้เร็วขึ้นและเข้าถึง $3 ในประเทศของฉัน"
    },
    "Hola Accelerator": {
        "message": "ตัวเร่งความเร็ว Hola"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "Hola ไม่สามารถทำงาน เพราะมีส่วนขยายตัวอื่นกำลังควบคุมการตั้งค่า proxy ของคุณ"
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola ไม่ทำงานได้ดีในโหมด Windows 8 กรุณาสลับไปยังโหมดเดสก์ท็อป คลิกที่ <a> ที่นี่ </a> สำหรับคำแนะนำ"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola จะไม่สามารถใช้ได้ในขณะนี้ แต่เรากำลังซ่อมอยู่"
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola ปิดอยู่ คลิก เพื่อเปิด"
    },
    "Hola site list": {
        "message": "รายการเว็บไซต์ Hola"
    },
    "I can now access $1 from any country!": {
        "message": "ตอนนี้ฉันสามารถเข้าถึง $1 จากประเทศใด!"
    },
    "I did not experience any buffering": {
        "message": "ฉันไม่พบว่าวิดิโอกำลังโหลดอีกเลย"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "ฉันเข้าถึงเว็บไซต์ตรวจสอบโดยใช้ Hola $1!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "ฉันใช้ $1 $2 ดูในประเทศของฉันและท่องเร็วขึ้น!"
    },
    "IC": {
        "message": "หมู่เกาะคะเนรี"
    },
    "ID": {
        "message": "อินโดนีเซีย"
    },
    "IE": {
        "message": "ไอร์แลนด์"
    },
    "IL": {
        "message": "อิสราเอล"
    },
    "IM": {
        "message": "เกาะแมน"
    },
    "IN": {
        "message": "อินเดีย"
    },
    "IO": {
        "message": "บริติชอินเดียนโอเชียนเทร์ริทอรี"
    },
    "IQ": {
        "message": "อิรัก"
    },
    "IR": {
        "message": "อิหร่าน"
    },
    "IS": {
        "message": "ไอซ์แลนด์"
    },
    "IT": {
        "message": "อิตาลี"
    },
    "Improve translation": {
        "message": "ปรับปรุงการแปล"
    },
    "Initializing...": {
        "message": "กำลังเตรียมใช้งาน..."
    },
    "Install": {
        "message": "ติดตั้ง"
    },
    "Install Accelerator": {
        "message": "ติดตั้งตัวเร่ง"
    },
    "Install Free Hola Accelerator": {
        "message": "ติดตั้งฟรีตัวเร่ง Hola"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "ติดตั้งเครื่องยนต์ Hola เพื่อดำเนินการต่อโดยใช้ Hola ฟรี"
    },
    "Instantly watch any torrent Video": {
        "message": "ดูวิดีโอ torrent  ได้ทันที"
    },
    "Invite friends - free Premium.": {
        "message": "เชิญเพื่อน - รับพรีเมี่ยมฟรี"
    },
    "Invite friends. Get Premium.": {
        "message": "เชิญเพื่อน รับพรีเมี่ยมฟรี"
    },
    "It was okay": {
        "message": "มันก็โอเค"
    },
    "JE": {
        "message": "เจอร์ซีย์"
    },
    "JM": {
        "message": "จาเมกา"
    },
    "JO": {
        "message": "จอร์แดน"
    },
    "JP": {
        "message": "ญี่ปุ่น"
    },
    "JT": {
        "message": "เกาะจอห์นสตัน"
    },
    "KE": {
        "message": "เคนยา"
    },
    "KG": {
        "message": "คีร์กีซสถาน"
    },
    "KH": {
        "message": "กัมพูชา"
    },
    "KI": {
        "message": "คิริบาส"
    },
    "KM": {
        "message": "คอโมโรส"
    },
    "KN": {
        "message": "เซนต์คิตส์และเนวิส"
    },
    "KP": {
        "message": "เกาหลีเหนือ"
    },
    "KR": {
        "message": "เกาหลีใต้"
    },
    "KW": {
        "message": "คูเวต"
    },
    "KY": {
        "message": "หมู่เกาะเคย์แมน"
    },
    "KZ": {
        "message": "คาซัคสถาน"
    },
    "LA": {
        "message": "ลาว"
    },
    "LB": {
        "message": "เลบานอน"
    },
    "LC": {
        "message": "เซนต์ลูเซีย"
    },
    "LI": {
        "message": "ลิกเตนสไตน์"
    },
    "LK": {
        "message": "ศรีลังกา"
    },
    "LR": {
        "message": "ไลบีเรีย"
    },
    "LS": {
        "message": "เลโซโท"
    },
    "LT": {
        "message": "ลิทัวเนีย"
    },
    "LU": {
        "message": "ลักเซมเบิร์ก"
    },
    "LV": {
        "message": "ลัตเวีย"
    },
    "LY": {
        "message": "ลิเบีย"
    },
    "Language": {
        "message": "ภาษา"
    },
    "Library": {
        "message": "ห้องสมุด"
    },
    "Like it": {
        "message": "ชอบมัน"
    },
    "Loading": {
        "message": "กำลังโหลด"
    },
    "Loading site...": {
        "message": "กำลังโหลดไซต์"
    },
    "Log in": {
        "message": "เข้าสู่ระบบ"
    },
    "Log out": {
        "message": "ออกจากระบบ"
    },
    "Love Hola?": {
        "message": "รัก Hola?"
    },
    "Love it": {
        "message": "รักมัน"
    },
    "MA": {
        "message": "โมร็อกโก"
    },
    "MC": {
        "message": "โมนาโก"
    },
    "MD": {
        "message": "มอลโดวา"
    },
    "ME": {
        "message": "มอนเตเนโกร"
    },
    "MF": {
        "message": "เซนต์มาติน"
    },
    "MG": {
        "message": "มาดากัสการ์"
    },
    "MH": {
        "message": "หมู่เกาะมาร์แชลล์"
    },
    "MI": {
        "message": "เกาะมิดเวย์"
    },
    "MK": {
        "message": "มาซิโดเนีย"
    },
    "ML": {
        "message": "มาลี"
    },
    "MM": {
        "message": "พม่า"
    },
    "MN": {
        "message": "มองโกเลีย"
    },
    "MO": {
        "message": "มาเก๊า เขตปกครองพิเศษประเทศจีน"
    },
    "MP": {
        "message": "หมู่เกาะนอร์เทิร์นมาเรียนา"
    },
    "MQ": {
        "message": "มาร์ตินีก"
    },
    "MR": {
        "message": "มอริเตเนีย"
    },
    "MS": {
        "message": "มอนต์เซอร์รัต"
    },
    "MT": {
        "message": "มอลตา"
    },
    "MU": {
        "message": "มอริเชียส"
    },
    "MV": {
        "message": "มัลดีฟส์"
    },
    "MW": {
        "message": "มาลาวี"
    },
    "MX": {
        "message": "เม็กซิโก"
    },
    "MY": {
        "message": "มาเลเซีย"
    },
    "MZ": {
        "message": "โมซัมบิก"
    },
    "Make your Internet better with $1": {
        "message": "ทำให้อินเทอร์เน็ตของคุณดีขึ้นด้วย $1"
    },
    "Menu": {
        "message": "เมนู"
    },
    "Might not work on all sites": {
        "message": "อาจจะไม่ทำงานในเว็บไซต์ทั้งหมด"
    },
    "Mode": {
        "message": "โหมด"
    },
    "More countries": {
        "message": "ประเทศอื่นๆ"
    },
    "More sites...": {
        "message": "เว็บไซต์เพิ่มเติม..."
    },
    "More...": {
        "message": "รายละเอียดเพิ่มเติม..."
    },
    "My Account": {
        "message": "บัญชีของฉัน"
    },
    "My History": {
        "message": "ประวัติความเป็นมาของฉัน"
    },
    "My Settings": {
        "message": "การตั้งค่าของฉัน"
    },
    "My favorites": {
        "message": "รายการโปรดของฉัน"
    },
    "NA": {
        "message": "นามิเบีย"
    },
    "NC": {
        "message": "นิวแคลิโดเนีย"
    },
    "NE": {
        "message": "ไนเจอร์"
    },
    "NF": {
        "message": "เกาะนอร์ฟอล์ก"
    },
    "NG": {
        "message": "ไนจีเรีย"
    },
    "NI": {
        "message": "นิการากัว"
    },
    "NL": {
        "message": "เนเธอร์แลนด์"
    },
    "NO": {
        "message": "นอร์เวย์"
    },
    "NP": {
        "message": "เนปาล"
    },
    "NQ": {
        "message": "Dronning ม็อดที่ดิน"
    },
    "NR": {
        "message": "นาอูรู"
    },
    "NT": {
        "message": "โซนกลาง"
    },
    "NU": {
        "message": "นีอูเอ"
    },
    "NZ": {
        "message": "นิวซีแลนด์"
    },
    "Need Help?": {
        "message": "ต้องการความช่วยเหลือ?"
    },
    "Never ask me again": {
        "message": "อย่าถามฉันอีกครั้ง"
    },
    "Never be a peer": {
        "message": "ไม่มีทางเป็น peer"
    },
    "No": {
        "message": "ไม่"
    },
    "No idle peers found.": {
        "message": "ไม่พบ peer ที่ไม่ได้ใช้งาน"
    },
    "No recent videos found": {
        "message": "ไม่มีวิดีโอล่าสุดพบ"
    },
    "No saved videos found": {
        "message": "วิดีโอที่บันทึกไว้ไม่พบ"
    },
    "No title": {
        "message": "ไม่มีชื่อ"
    },
    "No videos found": {
        "message": "ไม่พบวิดีโอ"
    },
    "No videos found on active page": {
        "message": "ไม่พบวิดีโอบนหน้าเว็บที่ใช้งาน"
    },
    "No, Thanks": {
        "message": "ไม่ ขอบคุณ"
    },
    "No, fix it": {
        "message": "ไม่ ซ่อมสิ"
    },
    "Not working?": {
        "message": "ไม่ทำงาน"
    },
    "Number of users that pressed not working": {
        "message": "จำนวนของผู้ใช้ที่กดแล้วไม่ทำงาน"
    },
    "Number of users that use this option": {
        "message": "จำนวนของผู้ใช้ที่ใช้ตัวเลือกนี้"
    },
    "OM": {
        "message": "โอมาน"
    },
    "Off": {
        "message": "ปิด"
    },
    "Oh, yes!": {
        "message": "โอ้ ใช่!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox ของคุณเป็นรุ่นเก่า กด <a>ที่นี่</a> เพื่ออัพเกรด"
    },
    "On": {
        "message": "เปิด"
    },
    "Open Media Player": {
        "message": "เปิด Media Player"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "พบกับ Mplayer ในเร็ว ๆ นี้!"
    },
    "PA": {
        "message": "ปานามา"
    },
    "PC": {
        "message": "หมู่เกาะแปซิฟิกเชื่อว่าดินแดน"
    },
    "PE": {
        "message": "เปรู"
    },
    "PF": {
        "message": "เฟรนช์โปลินีเซีย"
    },
    "PG": {
        "message": "ปาปัวนิวกินี"
    },
    "PH": {
        "message": "ฟิลิปปินส์"
    },
    "PK": {
        "message": "ปากีสถาน"
    },
    "PL": {
        "message": "โปแลนด์"
    },
    "PM": {
        "message": "แซงปีแยร์และมีเกอลง"
    },
    "PN": {
        "message": "พิตแคร์น"
    },
    "PR": {
        "message": "เปอร์โตริโก"
    },
    "PS": {
        "message": "ปาเลสไตน์"
    },
    "PT": {
        "message": "โปรตุเกส"
    },
    "PU": {
        "message": "สหรัฐเบ็ดเตล็ดหมู่เกาะแปซิฟิก"
    },
    "PW": {
        "message": "ปาเลา"
    },
    "PY": {
        "message": "ปารากวัย"
    },
    "PZ": {
        "message": "เขตคลองปานามา"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "โปรดปิด <a>ส่วนขยาย</a> อื่นๆ ที่คุณคิดว่ามันควบคุมการตั้งค่า proxy เช่น ad-blockers บริการ VPN อื่นๆ"
    },
    "Please enter a valid email address.": {
        "message": "กรุณาใส่ที่อยู่อีเมลที่ถูกต้อง"
    },
    "Please enter a web site address, like facebook.com": {
        "message": "โปรดป้อนที่อยู่เว็บไซต์เช่น facebook.com"
    },
    "Please help us get better": {
        "message": "โปรดช่วยเราให้ดีขึ้น"
    },
    "Popular in $1": {
        "message": "ที่นิยมใน $1"
    },
    "Popular in the world": {
        "message": "เป็นที่นิยมในโลก"
    },
    "Popular sites": {
        "message": "เว็บไซต์ยอดนิยม"
    },
    "Premium": {
        "message": "พรีเมี่ยม"
    },
    "QA": {
        "message": "กาตาร์"
    },
    "QO": {
        "message": "ห่างไกลโอเชียเนีย"
    },
    "RE": {
        "message": "เรอูนียง"
    },
    "RO": {
        "message": "โรมาเนีย"
    },
    "RS": {
        "message": "เซอร์เบีย"
    },
    "RU": {
        "message": "รัสเซีย"
    },
    "RW": {
        "message": "รวันดา"
    },
    "Rate us": {
        "message": "คะแนนเรา"
    },
    "Recent Videos": {
        "message": "วิดีโอล่าสุด"
    },
    "Reload": {
        "message": "โหลดใหม่อีกครั้ง"
    },
    "Reload Hola": {
        "message": "โหลด Hola ใหม่อีกครั้ง"
    },
    "Remember server": {
        "message": "จำเซิร์ฟเวอร์"
    },
    "Report a problem": {
        "message": "รายงานปัญหาที่เกิดขึ้น"
    },
    "Retry safe mode": {
        "message": "ลองเซฟโหมด"
    },
    "SA": {
        "message": "ซาอุดีอาระเบีย"
    },
    "SB": {
        "message": "หมู่เกาะโซโลมอน"
    },
    "SC": {
        "message": "เซเชลส์"
    },
    "SD": {
        "message": "ซูดาน"
    },
    "SE": {
        "message": "สวีเดน"
    },
    "SG": {
        "message": "สิงคโปร์"
    },
    "SH": {
        "message": "เซนต์เฮเลนา"
    },
    "SI": {
        "message": "สโลวีเนีย"
    },
    "SJ": {
        "message": "สฟาลบาร์และยานไมเอน"
    },
    "SK": {
        "message": "สโลวะเกีย"
    },
    "SL": {
        "message": "เซียร์ราลีโอน"
    },
    "SM": {
        "message": "ซานมารีโน"
    },
    "SN": {
        "message": "เซเนกัล"
    },
    "SO": {
        "message": "โซมาเลีย"
    },
    "SR": {
        "message": "ซูรินาเม"
    },
    "ST": {
        "message": "เซาตูเมและปรินซิปี"
    },
    "SU": {
        "message": "สหภาพโซเวียต"
    },
    "SV": {
        "message": "เอลซัลวาดอร์"
    },
    "SY": {
        "message": "ซีเรีย"
    },
    "SZ": {
        "message": "สวาซิแลนด์"
    },
    "Safe": {
        "message": "ปลอดภัย"
    },
    "Safe mode": {
        "message": "เซฟโหมด"
    },
    "Save": {
        "message": "บันทึก"
    },
    "Saved Videos": {
        "message": "บันทึกวิดีโอ"
    },
    "Saved for later": {
        "message": "ที่บันทึกไว้ในภายหลัง"
    },
    "Search video title": {
        "message": "ค้นหาชื่อวิดีโอ"
    },
    "Select a Country": {
        "message": "เลือกประเทศ"
    },
    "Select site to unblock": {
        "message": "เลือกเว็บไซต์ที่จะยกเลิกการปิดกั้น"
    },
    "Server saved!": {
        "message": "เซิร์ฟเวอร์บันทึกแล้ว!"
    },
    "Set safe mode for $1 $2": {
        "message": "ตั้งโหมดที่ปลอดภัยสำหรับ $1 $2"
    },
    "Settings": {
        "message": "การตั้งค่า"
    },
    "Share": {
        "message": "แบ่งปัน"
    },
    "Share $1 on $2": {
        "message": "แบ่งปัน $1 ใน $2"
    },
    "Share $1 via $2": {
        "message": "แบ่งปัน $1 ผ่านทาง $2"
    },
    "Share with friends!": {
        "message": "ร่วมกับเพื่อน!"
    },
    "Sign up": {
        "message": "ลงทะเบียน"
    },
    "Solve buffering": {
        "message": "แก้ปัญหาบัฟเฟอร์"
    },
    "Solve buffering problems with": {
        "message": "แก้ปัญหาบัฟเฟอร์ด้วย"
    },
    "Solves it": {
        "message": "แก้ไข"
    },
    "Staff Picks": {
        "message": "คัดสรรโดยทีมงาน"
    },
    "Start Hola": {
        "message": "เริ่มต้น"
    },
    "Starting...": {
        "message": "กำลังเริ่มต้น..."
    },
    "Stop Hola": {
        "message": "หยุด Hola"
    },
    "Stopping peer routing...": {
        "message": "หยุด peer routing..."
    },
    "Stream": {
        "message": "เล่น"
    },
    "Stream Instantly": {
        "message": "เล่น ทันที"
    },
    "Submit": {
        "message": "เสนอ"
    },
    "Support Hola": {
        "message": "สนับสนุน Hola"
    },
    "TA": {
        "message": "อุโมงค์คันฮาอัยการ"
    },
    "TC": {
        "message": "หมู่เกาะเติกส์และหมู่เกาะเคคอส"
    },
    "TD": {
        "message": "ชาด"
    },
    "TF": {
        "message": "เฟรนช์เซาเทิร์นเทร์ริทอรีส์"
    },
    "TG": {
        "message": "โตโก"
    },
    "TH": {
        "message": "ไทย"
    },
    "TJ": {
        "message": "ทาจิกิสถาน"
    },
    "TK": {
        "message": "โตเกเลา"
    },
    "TL": {
        "message": "ติมอร์ตะวันออก"
    },
    "TM": {
        "message": "เติร์กเมนิสถาน"
    },
    "TN": {
        "message": "ตูนิเซีย"
    },
    "TO": {
        "message": "ตองกา"
    },
    "TR": {
        "message": "ตุรกี"
    },
    "TT": {
        "message": "ตรินิแดดและโตเบโก"
    },
    "TV": {
        "message": "ตูวาลู"
    },
    "TW": {
        "message": "ไต้หวัน"
    },
    "TZ": {
        "message": "แทนซาเนีย"
    },
    "Talk to us on $1": {
        "message": "บอกเกี่ยวกับเราบน $1"
    },
    "Tell friends about $1": {
        "message": "บอกเพื่อนเกี่ยวกับ $1"
    },
    "Testing connection...": {
        "message": "ทดสอบการเชื่อมต่อ..."
    },
    "Thank you!": {
        "message": "ขอบคุณ!"
    },
    "There seems to be an error": {
        "message": "ดูเหมือนจะมีข้อผิดพลาด"
    },
    "Top popular sites": {
        "message": "เว็บไซต์ยอดนิยมบน"
    },
    "Translate to your language": {
        "message": "แปลเป็นภาษาของคุณ"
    },
    "Try again": {
        "message": "ลองอีกครั้ง"
    },
    "Try another server": {
        "message": "ลองเซิร์ฟเวอร์อื่น"
    },
    "Try it": {
        "message": "ลอง"
    },
    "Try safe mode": {
        "message": "ลองเซฟโหมด"
    },
    "Try to <span>reload</span>": {
        "message": "ลอง<span>โหลดใหม่</span>"
    },
    "Trying another peer...": {
        "message": "ลอง peer อื่น..."
    },
    "Turn off Accelerator": {
        "message": "ปิด Accelerator"
    },
    "Turn off Hola": {
        "message": "ปิด Hola"
    },
    "Turn on Accelerator": {
        "message": "เปิด Accelerator"
    },
    "Turn on Hola": {
        "message": "เปิด Hola"
    },
    "Turn on to get started": {
        "message": "เปิดเพื่อเริ่มต้น"
    },
    "UA": {
        "message": "ยูเครน"
    },
    "UG": {
        "message": "ยูกันดา"
    },
    "UM": {
        "message": "หมู่เกาะสหรัฐไมเนอร์เอาต์ไลอิง"
    },
    "US": {
        "message": "สหรัฐอเมริกา"
    },
    "UY": {
        "message": "อุรุกวัย"
    },
    "UZ": {
        "message": "อุซเบกิสถาน"
    },
    "Unblocker is disabled": {
        "message": "Unblocker ถูกปิดใช้งาน"
    },
    "Update": {
        "message": "อัพเดท"
    },
    "Upgrade": {
        "message": "อัพเกรด"
    },
    "Using": {
        "message": "โดยใช้"
    },
    "Using Hola": {
        "message": "ใช้ Hola"
    },
    "VA": {
        "message": "วาติกัน"
    },
    "VC": {
        "message": "เซนต์วินเซนต์และเกรนาดีนส์"
    },
    "VD": {
        "message": "เวียดนามเหนือ"
    },
    "VE": {
        "message": "เวเนซุเอลา"
    },
    "VG": {
        "message": "หมู่เกาะบริติชเวอร์จิน"
    },
    "VI": {
        "message": "หมู่เกาะยูเอสเวอร์จิน"
    },
    "VN": {
        "message": "เวียดนาม"
    },
    "VPN Premium": {
        "message": "VPN พรีเมี่ยม"
    },
    "VU": {
        "message": "วานูอาตู"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "คุณมี Chrome รุ่นเก่ามาก, <a> กรุณาอัพเดท </a> Chrome เพื่อใช้ Hola"
    },
    "Video": {
        "message": "วิดีโอ"
    },
    "Video stuck?": {
        "message": "วิดีโอไม่โหลด?"
    },
    "Videos available for instant streaming": {
        "message": "วิดีโอที่มีอยู่สำหรับการเล่นวิดิโอทันที"
    },
    "WF": {
        "message": "วาลลิสและฟุตูนา"
    },
    "WK": {
        "message": "เกาะตื่น"
    },
    "WS": {
        "message": "ซามัว"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "ต้องการ Hola บนอุปกรณ์อื่น ๆ ? (Xbox, PS, Apple TV, iPhone ... ) คลิกที่นี่"
    },
    "Want to know more?": {
        "message": "ต้องการทราบข้อมูลเพิ่มเติม?"
    },
    "Watch Now": {
        "message": "ชมตอนนี้"
    },
    "We found $1 videos": {
        "message": "เราพบ $1 วิดีโอ"
    },
    "We will be in touch with you soon": {
        "message": "เราจะติดต่อกับคุณเร็ว ๆ นี้"
    },
    "Working!": {
        "message": "ทำงาน!"
    },
    "Working?": {
        "message": "ทำงาน?"
    },
    "Works on all sites but slower": {
        "message": "ทำงานบนเว็บไซต์ทั้งหมด แต่ช้า"
    },
    "YD": {
        "message": "เยเมน"
    },
    "YE": {
        "message": "เยเมน"
    },
    "YT": {
        "message": "มายอต"
    },
    "Yes": {
        "message": "ใช่"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "คุณจำเป็นต้องปรับรุ่นเป็นรุ่นล่าสุดของโอเปร่าเพื่อที่จะใช้ Hola กด <a>ที่นี่</a> เพื่ออัพเกรด"
    },
    "ZA": {
        "message": "แอฟริกาใต้"
    },
    "ZM": {
        "message": "แซมเบีย"
    },
    "ZW": {
        "message": "ซิมบับเว"
    },
    "ZZ": {
        "message": "ไม่ทราบ"
    },
    "app_desc": {
        "message": "เข้าถึงเว็บไซต์ที่ถูกบล็อกในประเทศ บริษัท หรือโรงเรียนด้วย Hola! Hola ฟรีและใช้งานง่าย"
    },
    "app_name": {
        "message": "Hola อินเทอร์เน็ต ที่ดีขึ้น"
    },
    "back to": {
        "message": "กลับไปยัง"
    },
    "changing...": {
        "message": "กำลังเปลี่ยนแปลง..."
    },
    "cool sites": {
        "message": "เว็บไซต์เย็น"
    },
    "current site": {
        "message": "เว็บไซต์ปัจจุบัน"
    },
    "day": {
        "message": "วัน"
    },
    "days": {
        "message": "วัน"
    },
    "even more...": {
        "message": "มากยิ่งขึ้น..."
    },
    "mode": {
        "message": "โหมด"
    },
    "more options...": {
        "message": "ตัวเลือกเพิ่มเติม..."
    },
    "not working?": {
        "message": "ไม่ทำงานหรือ?"
    },
    "not working? try another server": {
        "message": "ไม่ทำงาน ลองเซิร์ฟเวอร์อื่น"
    },
    "on this page": {
        "message": "ในหน้านี้"
    },
    "sites that are censored": {
        "message": "เว็บไซต์ที่ได้รับการตรวจสอบ"
    },
    "start": {
        "message": "เริ่มต้น"
    },
    "working? remember": {
        "message": "ทำงาน? จำเซิร์ฟเวอร์"
    }
};
return E; });