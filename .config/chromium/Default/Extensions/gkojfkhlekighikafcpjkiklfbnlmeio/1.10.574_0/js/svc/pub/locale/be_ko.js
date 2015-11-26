'use strict'; /*jshint -W100, browser:true, es5:true*/
define(function(){
var E = {
    " via ": {
        "message": " - "
    },
    "$1 Buffering?": {
        "message": "$1 버퍼링?"
    },
    "$1 Hola to access $2\n\nClick here to do the same: $3\n\nIt installs Hola, which lets me surf the Internet faster and access $4$5": {
        "message": "$1 안녕은 동일한 작업을 수행하려면 여기를 $2\n\n클릭에 액세스 : $3\n\n그것은 나를 더 빠른 인터넷 서핑에 액세스 할 수 있습니다 안녕을 설치 $4$5"
    },
    "$1 VPN Premium": {
        "message": "$1 VPN 프리미엄"
    },
    "$1 from $2": {
        "message": "$2 에서 $1"
    },
    "$1 not found": {
        "message": "$1이 없습니다"
    },
    "$1 via Hola": {
        "message": "$1 - Hola"
    },
    "(some Hola features are not available on your version)": {
        "message": "(일부 Hola 기능은 버전에 따라 사용할 수 없음)"
    },
    "AC": {
        "message": "애센스 제도"
    },
    "AD": {
        "message": "안도라"
    },
    "AE": {
        "message": "아랍에미리트 연합"
    },
    "AF": {
        "message": "아프가니스탄"
    },
    "AG": {
        "message": "앤티가 바부다"
    },
    "AI": {
        "message": "안길라"
    },
    "AL": {
        "message": "알바니아"
    },
    "AM": {
        "message": "아르메니아"
    },
    "AN": {
        "message": "네덜란드령 안틸레스"
    },
    "AO": {
        "message": "앙골라"
    },
    "AQ": {
        "message": "남극 대륙"
    },
    "AR": {
        "message": "아르헨티나"
    },
    "AS": {
        "message": "아메리칸 사모아"
    },
    "AT": {
        "message": "오스트리아"
    },
    "AU": {
        "message": "오스트레일리아"
    },
    "AW": {
        "message": "아루바"
    },
    "AX": {
        "message": "올란드 제도"
    },
    "AZ": {
        "message": "아제르바이잔"
    },
    "About": {
        "message": "약"
    },
    "About Hola": {
        "message": "Hola 정보"
    },
    "Accelerator": {
        "message": "가속기능"
    },
    "Accelerator is": {
        "message": "가속기는"
    },
    "Access $1 - cool site!": {
        "message": "$1 액세스 - 멋진 사이트!"
    },
    "Access $1?": {
        "message": "$1에 접속하시겠습니까?"
    },
    "Access any site from any country, free": {
        "message": "어느 나라에서도 무료로 모든 사이트에 접속하기"
    },
    "Access cool sites": {
        "message": "추천 사이트 접속하기"
    },
    "Access more sites": {
        "message": "더 많은 사이트 접속하기"
    },
    "Access sites censored in your country and accelerate your Internet with Hola - Free!": {
        "message": "액세스 사이트는 해당 국가의 검열과 안녕과 인터넷을 가속화 - 무료!"
    },
    "Accessing $1 with Hola": {
        "message": "Hola로 $1 접속 중"
    },
    "Account": {
        "message": "계정"
    },
    "Account type": {
        "message": "계정 유형"
    },
    "Activating...": {
        "message": "활성화..."
    },
    "All ($1)": {
        "message": "모든 ($1)"
    },
    "Apply settings...": {
        "message": "설정 적용..."
    },
    "Author site:": {
        "message": "개발자 웹사이트:"
    },
    "Author:": {
        "message": "개발자:"
    },
    "Awesome!": {
        "message": "신난다!"
    },
    "BA": {
        "message": "보스니아 헤르체고비나"
    },
    "BB": {
        "message": "바베이도스"
    },
    "BD": {
        "message": "방글라데시"
    },
    "BE": {
        "message": "벨기에"
    },
    "BF": {
        "message": "부르키나파소"
    },
    "BG": {
        "message": "불가리아"
    },
    "BH": {
        "message": "바레인"
    },
    "BI": {
        "message": "부룬디"
    },
    "BJ": {
        "message": "베냉"
    },
    "BL": {
        "message": "생 바르텔르미"
    },
    "BM": {
        "message": "버뮤다"
    },
    "BN": {
        "message": "브루나이"
    },
    "BO": {
        "message": "볼리비아"
    },
    "BQ": {
        "message": "영국령 남극제도"
    },
    "BR": {
        "message": "브라질"
    },
    "BS": {
        "message": "바하마"
    },
    "BT": {
        "message": "부탄"
    },
    "BV": {
        "message": "부베"
    },
    "BW": {
        "message": "보츠와나"
    },
    "BY": {
        "message": "벨라루스"
    },
    "BZ": {
        "message": "벨리즈"
    },
    "Back to $1": {
        "message": "$1로 가기"
    },
    "Be the first to get Hola for iPhone/iPad - Register now:": {
        "message": "아이폰/아이패드에서 Hola 다운로드 - 지금 등록"
    },
    "Browsing": {
        "message": "찾아보기"
    },
    "Buffering problems?": {
        "message": "버퍼링 문제가 있나요?"
    },
    "Buffering?": {
        "message": "버퍼링?"
    },
    "CA": {
        "message": "캐나다"
    },
    "CC": {
        "message": "코코스제도"
    },
    "CD": {
        "message": "콩고 민주공화국"
    },
    "CF": {
        "message": "중앙 아프리카 공화국"
    },
    "CG": {
        "message": "콩고"
    },
    "CH": {
        "message": "스위스"
    },
    "CI": {
        "message": "코트디부아르"
    },
    "CK": {
        "message": "쿡제도"
    },
    "CL": {
        "message": "칠레"
    },
    "CM": {
        "message": "카메룬"
    },
    "CN": {
        "message": "중국"
    },
    "CO": {
        "message": "콜롬비아"
    },
    "CP": {
        "message": "클리퍼톤 제도"
    },
    "CR": {
        "message": "코스타리카"
    },
    "CS": {
        "message": "세르비아 및 몬테네그로"
    },
    "CT": {
        "message": "칸톤 엘더버리 제도"
    },
    "CU": {
        "message": "쿠바"
    },
    "CV": {
        "message": "까뽀베르데"
    },
    "CX": {
        "message": "크리스마스섬"
    },
    "CY": {
        "message": "사이프러스"
    },
    "CZ": {
        "message": "체코"
    },
    "Changing country...": {
        "message": "국가 변경..."
    },
    "Check out Hola for $1!": {
        "message": "$1를 위한 Hola 확인하기!"
    },
    "Check out Hola for mobile devices": {
        "message": "모바일 장치에 대한 안녕을 확인"
    },
    "Check your Internet connection": {
        "message": "인터넷 연결 확인"
    },
    "Choose<br>Country": {
        "message": "국가<br>선택"
    },
    "Configuring...": {
        "message": "설정 중..."
    },
    "Connecting...": {
        "message": "연결 중..."
    },
    "Cool site!": {
        "message": "인기 사이트!"
    },
    "Creative licenses": {
        "message": "크리 에이 티브 라이센스"
    },
    "DD": {
        "message": "동독"
    },
    "DE": {
        "message": "독일"
    },
    "DG": {
        "message": "디에고 가르시아"
    },
    "DJ": {
        "message": "지부티"
    },
    "DK": {
        "message": "덴마크"
    },
    "DM": {
        "message": "도미니카"
    },
    "DO": {
        "message": "도미니카 공화국"
    },
    "DZ": {
        "message": "알제리"
    },
    "Delete": {
        "message": "삭제"
    },
    "Deleted from my list": {
        "message": "내 목록에서 삭제"
    },
    "Did it work?": {
        "message": "작동 여부 확인"
    },
    "Did you experience any buffering?": {
        "message": "버퍼링을 경험하셨습니까?"
    },
    "Disliked it": {
        "message": "그것을 싫어"
    },
    "Don't show again for $1 for one week": {
        "message": "일 주일간 $1 보지 않기"
    },
    "Don't show again for any site for one week": {
        "message": "일 주일간 어떤 사이트에서도 표시하지 않음"
    },
    "Downloading": {
        "message": "다운로드 중"
    },
    "EA": {
        "message": "세이타 멜리아"
    },
    "EC": {
        "message": "에콰도르"
    },
    "EE": {
        "message": "에스토니아"
    },
    "EG": {
        "message": "이집트"
    },
    "EH": {
        "message": "서사하라"
    },
    "ER": {
        "message": "에리트리아"
    },
    "ES": {
        "message": "스페인"
    },
    "ET": {
        "message": "이디오피아"
    },
    "EU": {
        "message": "유럽연합"
    },
    "Enable": {
        "message": "사용"
    },
    "Enable Hola Accelerator": {
        "message": "Hola 가속 기능 사용"
    },
    "Enjoy!": {
        "message": "즐기십시오!"
    },
    "Enjoying Hola for Chrome?": {
        "message": "크롬에 대한 안녕을 즐기는?"
    },
    "Enter site to access": {
        "message": "사이트 입력"
    },
    "Enter your email": {
        "message": "이메일 입력"
    },
    "FI": {
        "message": "핀란드"
    },
    "FJ": {
        "message": "피지"
    },
    "FK": {
        "message": "포클랜드 군도"
    },
    "FM": {
        "message": "미크로네시아"
    },
    "FO": {
        "message": "페로제도"
    },
    "FQ": {
        "message": "프랑스령 남극"
    },
    "FR": {
        "message": "프랑스"
    },
    "FX": {
        "message": "프랑스 특별구"
    },
    "Fast": {
        "message": "빠른"
    },
    "Finding new peers...": {
        "message": "새 피어 찾는 중..."
    },
    "Finding peers...": {
        "message": "피어 찾는 중..."
    },
    "Free": {
        "message": "무료"
    },
    "From": {
        "message": "-"
    },
    "Full list": {
        "message": "전체 목록"
    },
    "GA": {
        "message": "가봉"
    },
    "GB": {
        "message": "영국"
    },
    "GD": {
        "message": "그레나다"
    },
    "GE": {
        "message": "그루지야"
    },
    "GF": {
        "message": "프랑스령 기아나"
    },
    "GG": {
        "message": "건지"
    },
    "GH": {
        "message": "가나"
    },
    "GI": {
        "message": "지브롤터"
    },
    "GL": {
        "message": "그린란드"
    },
    "GM": {
        "message": "감비아"
    },
    "GN": {
        "message": "기니"
    },
    "GP": {
        "message": "과달로프"
    },
    "GQ": {
        "message": "적도 기니"
    },
    "GR": {
        "message": "그리스"
    },
    "GS": {
        "message": "사우스조지아-사우스샌드위치제도"
    },
    "GT": {
        "message": "과테말라"
    },
    "GU": {
        "message": "괌"
    },
    "GW": {
        "message": "기네비쏘"
    },
    "GY": {
        "message": "가이아나"
    },
    "Get 24/7 Unblocking": {
        "message": "24/7 차단 해제"
    },
    "Get Free Premium": {
        "message": "무료 프리미엄 이용"
    },
    "Get Hola Accelerator": {
        "message": "Hola 가속 기능 받기"
    },
    "Get Hola Player": {
        "message": "가져 오기 안녕 플레이어"
    },
    "Get Hola Plus for un-interrupted, ad-free service.": {
        "message": "광고 없는 Hola 플러스앱을 받을 수 있습니다."
    },
    "Get Hola Premium": {
        "message": "Hola 프리미엄 이용"
    },
    "Get Hola for Android": {
        "message": "Hola 안드로이드 이용"
    },
    "Get Premium support": {
        "message": "프리미엄 고객 지원 이용"
    },
    "Get Unlimited Unblocking": {
        "message": "무제한 차단 해제 기능 이용"
    },
    "Get access to censored sites, try it now: $1": {
        "message": ", 검열 사이트에 액세스 할 수 있습니다. 지금 시도하기: $1"
    },
    "Get help from engineer over Skype:": {
        "message": "스카이프를 통한 기술 지원 받기:"
    },
    "Get the Fastest Servers": {
        "message": "더 빠른 서버 이용"
    },
    "Go": {
        "message": "이동"
    },
    "Go Hola Premium": {
        "message": "Hola 프리미엄 사용"
    },
    "HK": {
        "message": "홍콩, 중국 특별행정구"
    },
    "HM": {
        "message": "허드섬-맥도널드제도"
    },
    "HN": {
        "message": "온두라스"
    },
    "HR": {
        "message": "크로아티아"
    },
    "HT": {
        "message": "아이티"
    },
    "HU": {
        "message": "헝가리"
    },
    "Hate it": {
        "message": "싫다"
    },
    "Help": {
        "message": "도와주세요"
    },
    "Hey,\n\nI'm using": {
        "message": "안녕하세요!\n\n확인해 보세요-"
    },
    "Hi,\n\nI started using $1 ($2). It lets me surf the Internet faster and access $3 in my country.": {
        "message": "안녕하세요,\n\n저는 $1($2)를 사용하기 시작했습니다. 국가별 제한 없이 $3를 접근할 수 있습니다."
    },
    "Hola": {
        "message": "안녕"
    },
    "Hola Accelerator": {
        "message": "Hola 가속 기능"
    },
    "Hola Media Player": {
        "message": "Hola 미디어 플레이어"
    },
    "Hola cannot work because another extension is controlling your proxy settings.": {
        "message": "다른 확장 기능이 프록시 설정을 제어하고 있어서 Hola가 동작하지 않습니다."
    },
    "Hola does not work well in Windows 8 mode. Please switch to desktop mode. Click <a>here</a> for instructions": {
        "message": "Hola는 윈도우 8 모드에서 제대로 작동하지 않습니다. 데스크톱 모드로 전환하십시오. 더 자세한 사항은 <a>여기</a>를 누르세요"
    },
    "Hola is not available right now, but we are working on it.": {
        "message": "Hola를 사용할 수 없습니다만, 저희가 노력하고 있습니다."
    },
    "Hola is off, click it to turn it on": {
        "message": "Hola를 켜려면 클릭하세요"
    },
    "Hola site list": {
        "message": "Hola 사이트 목록"
    },
    "I can now access $1 from any country!": {
        "message": "모든 국가에서 $1를 접근할 수 있습니다!"
    },
    "I did not experience any buffering": {
        "message": "버퍼링 경험 없음"
    },
    "I just accessed a censored site using Hola for $1!": {
        "message": "Hola를 통해 $1 접속이 가능합니다!"
    },
    "I'm using $1 to view $2 in my country, and surf faster!": {
        "message": "우리나라에서 $1를 사용하여 $2를 더 빠르게 볼 수 있습니다!"
    },
    "IC": {
        "message": "카나리 제도"
    },
    "ID": {
        "message": "인도네시아"
    },
    "IE": {
        "message": "아일랜드"
    },
    "IL": {
        "message": "이스라엘"
    },
    "IM": {
        "message": "맨 섬"
    },
    "IN": {
        "message": "인도"
    },
    "IO": {
        "message": "영국령인도양식민지"
    },
    "IQ": {
        "message": "이라크"
    },
    "IR": {
        "message": "이란"
    },
    "IS": {
        "message": "아이슬란드"
    },
    "IT": {
        "message": "이탈리아"
    },
    "Improve translation": {
        "message": "번역 개선 방법"
    },
    "Initializing...": {
        "message": "초기화 중..."
    },
    "Install": {
        "message": "설치"
    },
    "Install Accelerator": {
        "message": "가속기 설치"
    },
    "Install Free Hola Accelerator": {
        "message": "Hola 무료 가속기 설치"
    },
    "Install Hola Engine to continue using Hola for free": {
        "message": "무료 안녕을 계속 사용 안녕 엔진 설치"
    },
    "Instantly watch any torrent Video": {
        "message": "지금 바로 토런트 동영상 시청"
    },
    "Invite friends - free Premium.": {
        "message": "친구 초대- 무료 프리미엄"
    },
    "Invite friends. Get Premium.": {
        "message": "친구를 초대하시고, 무료 프리미엄 기회를 얻으세요."
    },
    "It was okay": {
        "message": "그것은 괜찮다고"
    },
    "JE": {
        "message": "저지"
    },
    "JM": {
        "message": "자메이카"
    },
    "JO": {
        "message": "요르단"
    },
    "JP": {
        "message": "일본"
    },
    "JT": {
        "message": "존스턴 제도"
    },
    "KE": {
        "message": "케냐"
    },
    "KG": {
        "message": "키르기스스탄"
    },
    "KH": {
        "message": "캄보디아"
    },
    "KI": {
        "message": "키리바시"
    },
    "KM": {
        "message": "코모로스"
    },
    "KN": {
        "message": "세인트크리스토퍼 네비스"
    },
    "KP": {
        "message": "조선 민주주의 인민 공화국"
    },
    "KR": {
        "message": "대한민국"
    },
    "KW": {
        "message": "쿠웨이트"
    },
    "KY": {
        "message": "케이맨제도"
    },
    "KZ": {
        "message": "카자흐스탄"
    },
    "LA": {
        "message": "라오스"
    },
    "LB": {
        "message": "레바논"
    },
    "LC": {
        "message": "세인트루시아"
    },
    "LI": {
        "message": "리히텐슈타인"
    },
    "LK": {
        "message": "스리랑카"
    },
    "LR": {
        "message": "라이베리아"
    },
    "LS": {
        "message": "레소토"
    },
    "LT": {
        "message": "리투아니아"
    },
    "LU": {
        "message": "룩셈부르크"
    },
    "LV": {
        "message": "라트비아"
    },
    "LY": {
        "message": "리비아"
    },
    "Language": {
        "message": "언어별"
    },
    "Library": {
        "message": "도서관"
    },
    "Like it": {
        "message": "좋아하다"
    },
    "Loading": {
        "message": "로딩 중"
    },
    "Loading site...": {
        "message": "웹 사이트 로딩 중..."
    },
    "Log in": {
        "message": "로그인"
    },
    "Log out": {
        "message": "로그아웃"
    },
    "Love Hola?": {
        "message": "Hola를 좋아하세요?"
    },
    "Love it": {
        "message": "그것을 사랑"
    },
    "MA": {
        "message": "모로코"
    },
    "MC": {
        "message": "모나코"
    },
    "MD": {
        "message": "몰도바"
    },
    "ME": {
        "message": "몬테네그로"
    },
    "MF": {
        "message": "생 마르탱"
    },
    "MG": {
        "message": "마다가스카르"
    },
    "MH": {
        "message": "마샬 군도"
    },
    "MI": {
        "message": "미드웨이 제도"
    },
    "MK": {
        "message": "마케도니아"
    },
    "ML": {
        "message": "말리"
    },
    "MM": {
        "message": "미얀마"
    },
    "MN": {
        "message": "몽골"
    },
    "MO": {
        "message": "마카오, 중국 특별행정구"
    },
    "MP": {
        "message": "북마리아나제도"
    },
    "MQ": {
        "message": "말티니크"
    },
    "MR": {
        "message": "모리타니"
    },
    "MS": {
        "message": "몬트세라트"
    },
    "MT": {
        "message": "몰타"
    },
    "MU": {
        "message": "모리셔스"
    },
    "MV": {
        "message": "몰디브"
    },
    "MW": {
        "message": "말라위"
    },
    "MX": {
        "message": "멕시코"
    },
    "MY": {
        "message": "말레이시아"
    },
    "MZ": {
        "message": "모잠비크"
    },
    "Make your Internet better with $1": {
        "message": "확인 인터넷 나은과 $1"
    },
    "Menu": {
        "message": "메뉴"
    },
    "Might not work on all sites": {
        "message": "모든 사이트에 작동하지 않을 수 있습니다"
    },
    "Mode": {
        "message": "모드"
    },
    "More countries": {
        "message": "다른 국가"
    },
    "More sites...": {
        "message": "다른 웹사이트..."
    },
    "More...": {
        "message": "자세히..."
    },
    "My Account": {
        "message": "계정"
    },
    "My History": {
        "message": "내 역사"
    },
    "My Settings": {
        "message": "설정"
    },
    "My favorites": {
        "message": "즐겨찾기"
    },
    "NA": {
        "message": "나미비아"
    },
    "NC": {
        "message": "뉴 칼레도니아"
    },
    "NE": {
        "message": "니제르"
    },
    "NF": {
        "message": "노퍽섬"
    },
    "NG": {
        "message": "나이지리아"
    },
    "NI": {
        "message": "니카라과"
    },
    "NL": {
        "message": "네덜란드"
    },
    "NO": {
        "message": "노르웨이"
    },
    "NP": {
        "message": "네팔"
    },
    "NQ": {
        "message": "드로닝 마우디"
    },
    "NR": {
        "message": "나우루"
    },
    "NT": {
        "message": "뉴트론존"
    },
    "NU": {
        "message": "니우에"
    },
    "NZ": {
        "message": "뉴질랜드"
    },
    "Need Help?": {
        "message": "도움이 필요하십니까?"
    },
    "Netflix": {
        "message": "넷플릭스"
    },
    "Never ask me again": {
        "message": "다시 묻지 않음"
    },
    "Never be a peer": {
        "message": "피어가 되지 않음"
    },
    "No": {
        "message": "아니오"
    },
    "No idle peers found.": {
        "message": "사용가능한 피어 없음"
    },
    "No recent videos found": {
        "message": "기능 최근 동영상이 없습니다"
    },
    "No saved videos found": {
        "message": "어떤 저장된 동영상을 찾을 수 없습니다"
    },
    "No title": {
        "message": "제목 없음"
    },
    "No videos found": {
        "message": "어떤 동영상이 없습니다"
    },
    "No videos found on active page": {
        "message": "활성 페이지에있는 동영상 없음"
    },
    "No, Thanks": {
        "message": "아니오"
    },
    "No, fix it": {
        "message": "아니오, 고쳐주세요"
    },
    "Not working?": {
        "message": "동작하지 않습니까?"
    },
    "Number of users that pressed not working": {
        "message": "사용 안함을 누른 전체 사용자 수"
    },
    "Number of users that use this option": {
        "message": "현재 옵션를 사용하는 전체 사용자 수"
    },
    "OM": {
        "message": "오만"
    },
    "Off": {
        "message": "끄기"
    },
    "Oh, yes!": {
        "message": "아, 그래!"
    },
    "Old version of Firefox. Press <a>here</a> to upgrade.": {
        "message": "Firefox 예전 버전입니다. 업그레이드하려면 <a>여기</a>를 누르십시오."
    },
    "On": {
        "message": "켜기"
    },
    "Open Media Player": {
        "message": "오픈 미디어 플레이어"
    },
    "Our Brand New Mplayer is Coming Soon!": {
        "message": "새 Mplayer 기능이 준비중입니다!"
    },
    "PA": {
        "message": "파나마"
    },
    "PC": {
        "message": "퍼스픽 트러스트 제도"
    },
    "PE": {
        "message": "페루"
    },
    "PF": {
        "message": "프랑스령 폴리네시아"
    },
    "PG": {
        "message": "파푸아뉴기니"
    },
    "PH": {
        "message": "필리핀"
    },
    "PK": {
        "message": "파키스탄"
    },
    "PL": {
        "message": "폴란드"
    },
    "PM": {
        "message": "세인트피에르-미케롱"
    },
    "PN": {
        "message": "핏케언섬"
    },
    "PR": {
        "message": "푸에르토리코"
    },
    "PS": {
        "message": "팔레스타인 지구"
    },
    "PT": {
        "message": "포르투갈"
    },
    "PU": {
        "message": "미국령 태평양 제도"
    },
    "PW": {
        "message": "팔라우"
    },
    "PY": {
        "message": "파라과이"
    },
    "PZ": {
        "message": "파나마 운하"
    },
    "Please disable other <a>extensions</a> that you think might control your proxy settings such as ad-blockers, other VPN services, etc.": {
        "message": "광고 차단앱이나 다른 프록시 앱 등 프록시 설정을 변경하는 <a>다른 확장 기능을</a> 끄시기 바랍니다."
    },
    "Please enter a valid email address.": {
        "message": "유효한 이메일 주소를 입력하십시오."
    },
    "Please enter a web site address, like facebook.com": {
        "message": "웹 사이트 주소를 입력하세요.(예: facebook.com)"
    },
    "Please help us get better": {
        "message": "더 좋은 앱을 위해 도움주십시오"
    },
    "Popular in $1": {
        "message": "인기 사이트 - $1"
    },
    "Popular in the world": {
        "message": "글로벌 인기 사이트"
    },
    "Popular sites": {
        "message": "인기 사이트"
    },
    "Premium": {
        "message": "프리미엄"
    },
    "QA": {
        "message": "카타르"
    },
    "QO": {
        "message": "오세아니아 외부제도"
    },
    "RE": {
        "message": "리유니온"
    },
    "RO": {
        "message": "루마니아"
    },
    "RS": {
        "message": "세르비아"
    },
    "RU": {
        "message": "러시아"
    },
    "RW": {
        "message": "르완다"
    },
    "Rate us": {
        "message": "우리를 평가"
    },
    "Recent Videos": {
        "message": "최근 동영상"
    },
    "Reload": {
        "message": "새로 고침"
    },
    "Reload Hola": {
        "message": "Hola 새로 고침"
    },
    "Remember server": {
        "message": "서버 저장"
    },
    "Report a problem": {
        "message": "문제 보고"
    },
    "Retry safe mode": {
        "message": "안전 모드를 다시 시도"
    },
    "SA": {
        "message": "사우디아라비아"
    },
    "SB": {
        "message": "솔로몬 제도"
    },
    "SC": {
        "message": "쉐이쉘"
    },
    "SD": {
        "message": "수단"
    },
    "SE": {
        "message": "스웨덴"
    },
    "SG": {
        "message": "싱가포르"
    },
    "SH": {
        "message": "세인트헬레나"
    },
    "SI": {
        "message": "슬로베니아"
    },
    "SJ": {
        "message": "스발바르제도-얀마웬섬"
    },
    "SK": {
        "message": "슬로바키아"
    },
    "SL": {
        "message": "시에라리온"
    },
    "SM": {
        "message": "산마리노"
    },
    "SN": {
        "message": "세네갈"
    },
    "SO": {
        "message": "소말리아"
    },
    "SR": {
        "message": "수리남"
    },
    "ST": {
        "message": "상투메 프린시페"
    },
    "SU": {
        "message": "소비에트 연방 공화국"
    },
    "SV": {
        "message": "엘살바도르"
    },
    "SY": {
        "message": "시리아"
    },
    "SZ": {
        "message": "스와질랜드"
    },
    "Safe": {
        "message": "안전한"
    },
    "Safe mode": {
        "message": "안전 모드"
    },
    "Save": {
        "message": "저장"
    },
    "Saved Videos": {
        "message": "저장된 동영상"
    },
    "Saved for later": {
        "message": "나중에 저장"
    },
    "Search video title": {
        "message": "검색 비디오 타이틀"
    },
    "Select a Country": {
        "message": "국가 선택"
    },
    "Select site to unblock": {
        "message": "차단 해제 사이트 선택"
    },
    "Server saved!": {
        "message": "서버 저장 완료!"
    },
    "Set safe mode for $1 $2": {
        "message": "설정 안전 모드 $1 $2"
    },
    "Settings": {
        "message": "설정"
    },
    "Share": {
        "message": "공유하기"
    },
    "Share $1 on $2": {
        "message": "$2 $1 공유"
    },
    "Share $1 via $2": {
        "message": "$2 통해 $1 공유"
    },
    "Share with friends!": {
        "message": "친구와 공유!"
    },
    "Sign up": {
        "message": "가입하기"
    },
    "Solve buffering": {
        "message": "버퍼링 해결"
    },
    "Solve buffering problems with": {
        "message": "버퍼링 문제 해결-"
    },
    "Solves it": {
        "message": "해결 하기"
    },
    "Staff Picks": {
        "message": "직원 추천"
    },
    "Start Hola": {
        "message": "Hola 시작하기"
    },
    "Starting...": {
        "message": "시작 중..."
    },
    "Stop Hola": {
        "message": "Hola 중지하기"
    },
    "Stopping peer routing...": {
        "message": "피어 라우팅 중지 중..."
    },
    "Stream": {
        "message": "흐름"
    },
    "Stream Instantly": {
        "message": "즉시 스트리밍"
    },
    "Submit": {
        "message": "제출"
    },
    "Support Hola": {
        "message": "Hola 지원"
    },
    "TA": {
        "message": "트리스탄 쿠하"
    },
    "TC": {
        "message": "터크스케이커스제도"
    },
    "TD": {
        "message": "차드"
    },
    "TF": {
        "message": "프랑스 남부 지방"
    },
    "TG": {
        "message": "토고"
    },
    "TH": {
        "message": "태국"
    },
    "TJ": {
        "message": "타지키스탄"
    },
    "TK": {
        "message": "토켈라우"
    },
    "TL": {
        "message": "동티모르"
    },
    "TM": {
        "message": "투르크메니스탄"
    },
    "TN": {
        "message": "튀니지"
    },
    "TO": {
        "message": "통가"
    },
    "TR": {
        "message": "터키"
    },
    "TT": {
        "message": "트리니다드 토바고"
    },
    "TV": {
        "message": "투발루"
    },
    "TW": {
        "message": "대만"
    },
    "TZ": {
        "message": "탄자니아"
    },
    "Talk to us on $1": {
        "message": "$1에 대해 의견 제출"
    },
    "Tell friends about $1": {
        "message": "$1를 친구에게 소개하기"
    },
    "Testing connection...": {
        "message": "연결 테스트 중..."
    },
    "Thank you!": {
        "message": "감사합니다!"
    },
    "There seems to be an error": {
        "message": "오류가 있음"
    },
    "Top popular sites": {
        "message": "최고 인기 사이트"
    },
    "Translate to your language": {
        "message": "언어 번역"
    },
    "Try again": {
        "message": "다시 시도"
    },
    "Try another server": {
        "message": "다른 서버로 시도"
    },
    "Try it": {
        "message": "시도하기"
    },
    "Try safe mode": {
        "message": "안전 모드를 사용해보십시오"
    },
    "Try to <span>reload</span>": {
        "message": "<span>새로 고침</span> 시도"
    },
    "Trying another peer...": {
        "message": "다른 피어로 시도 중..."
    },
    "Turn off Accelerator": {
        "message": "가속기능 끄기"
    },
    "Turn off Hola": {
        "message": "Hola 끄기"
    },
    "Turn on Accelerator": {
        "message": "가속기능 켜기"
    },
    "Turn on Hola": {
        "message": "Hola 켜기"
    },
    "Turn on to get started": {
        "message": "시작하기 화면"
    },
    "UA": {
        "message": "우크라이나"
    },
    "UG": {
        "message": "우간다"
    },
    "UM": {
        "message": "미국령 해외 제도"
    },
    "US": {
        "message": "미국"
    },
    "UY": {
        "message": "우루과이"
    },
    "UZ": {
        "message": "우즈베키스탄"
    },
    "Unblocker": {
        "message": "차단 해제"
    },
    "Unblocker is disabled": {
        "message": "차단 해제를 사용 안함"
    },
    "Unblocker?": {
        "message": "차단 해제?"
    },
    "Update": {
        "message": "업데이트"
    },
    "Upgrade": {
        "message": "업그레이드"
    },
    "Using": {
        "message": "사용중"
    },
    "Using Hola": {
        "message": "Hola 사용하기"
    },
    "VA": {
        "message": "바티칸"
    },
    "VC": {
        "message": "세인트빈센트그레나딘"
    },
    "VD": {
        "message": "북베트남"
    },
    "VE": {
        "message": "베네수엘라"
    },
    "VG": {
        "message": "영국령 버진 아일랜드"
    },
    "VI": {
        "message": "미국령 버진 아일랜드"
    },
    "VN": {
        "message": "베트남"
    },
    "VPN Premium": {
        "message": "VPN 프리미엄"
    },
    "VU": {
        "message": "바누아투"
    },
    "Very old version of Chrome, <a>update</a> Chrome to use Hola": {
        "message": "Chrome의 예전 버전입니다. 업데이트 하시려면 <a>여기</a>를 누르세요."
    },
    "Video": {
        "message": "동영상"
    },
    "Video stuck?": {
        "message": "동영상 문제있음?"
    },
    "Videos available for instant streaming": {
        "message": "즉시 스트리밍 할 수 비디오"
    },
    "WF": {
        "message": "왈리스-푸투나 제도"
    },
    "WK": {
        "message": "웨이크 제도"
    },
    "WS": {
        "message": "사모아"
    },
    "Want Hola on other devices? (Xbox, PS, Apple TV, iPhone...). Click here": {
        "message": "다른 장치에 Hola 사용을 원하십니까? (X박스, PS, 애플TV, 아이폰...). 여기를 클릭하십시오"
    },
    "Want to know more?": {
        "message": "자세히 보기"
    },
    "Watch Now": {
        "message": "지금보기"
    },
    "We found $1 videos": {
        "message": "우리가 발견 $1 동영상"
    },
    "We will be in touch with you soon": {
        "message": "곧 연락드리겠습니다"
    },
    "Working!": {
        "message": "동작 중!"
    },
    "Working?": {
        "message": "동작 중?"
    },
    "Works on all sites but slower": {
        "message": "모든 사이트하지만 느린에서 작동"
    },
    "YD": {
        "message": "예멘 인민민주주의 공화국"
    },
    "YE": {
        "message": "예멘"
    },
    "YT": {
        "message": "마요티"
    },
    "Yes": {
        "message": "예"
    },
    "You need to upgrade to the latest version of Opera to use Hola. Press <a>here</a> to upgrade.": {
        "message": "Opera 예전 버전을 사용하고 있습니다. 최신 버전으로 업그레이드하려면 <a>여기</a>를 누르세요."
    },
    "Youtube": {
        "message": "유튜브"
    },
    "ZA": {
        "message": "남아프리카"
    },
    "ZM": {
        "message": "잠비아"
    },
    "ZW": {
        "message": "짐바브웨"
    },
    "ZZ": {
        "message": "알수없거나 유효하지 않은 지역"
    },
    "app_desc": {
        "message": "Hola로 여러분의 국가, 회사 및 학교에서 차단된 웹 사이트를 접속할 수 있습니다. 무료로 쉽게 사용 가능합니다!"
    },
    "app_name": {
        "message": "Hola 더 나은 인터넷을 위해"
    },
    "back to": {
        "message": "이동-"
    },
    "changing...": {
        "message": "변경 중..."
    },
    "cool sites": {
        "message": "추천 사이트"
    },
    "current site": {
        "message": "현재 사이트"
    },
    "day": {
        "message": "일"
    },
    "days": {
        "message": "일"
    },
    "even more...": {
        "message": "더 보기..."
    },
    "mode": {
        "message": "모드"
    },
    "more options...": {
        "message": "고급 설정..."
    },
    "not working?": {
        "message": "작동하지 않습니까?"
    },
    "not working? try another server": {
        "message": "작동하지 않습니까? 다른 서버 시도하기"
    },
    "on this page": {
        "message": "이 페이지에서"
    },
    "sites that are censored": {
        "message": "검열 중 사이트"
    },
    "start": {
        "message": "시작"
    },
    "working? remember": {
        "message": "작동합니까? 저장하기"
    }
};
return E; });