function get_crx() {
	chrome.tabs.getSelected(null,function(tab) {
		var tab_url = tab.url;
		
		ext_name = tab_url.split('/detail/');
		ext_name = ext_name[1].split('/');
		ext_name = ext_name[0];
		
		tab_url_split = tab_url.split("/");
		tab_url = tab_url_split[6];
		tab_url = tab_url.split('?');
		tab_url = tab_url[0];
		
		var ccr = 'https://clients2.google.com/service/update2/crx?response=redirect&x=id%3D';
		ccr += tab_url + '%26uc&prodversion=32';
		
		nw = window.open();
		nd = nw.document;
		nd.open();
		
		// HTML
		nd.write('<html> <head> <title>Give Me CRX - Chrome</title> </head>');
		nd.write('<body style="background: #f9f9f9;">');
		nd.write('<div class="main" style="width:60%;font: 18px sans-serif; display: block; margin: 100px auto 0;">');
			nd.write('<h4 style="font-size:16px;font-weight:normal;">Copy-paste Extension\'s Name while saving &#8211; For Easy Access</h4>');
			nd.write('<div class="ext-label" style="background:#fff;display:inline-block;width:auto;margin:0 0 20px;border:1px solid #ddd;padding:5px 9px;border-radius:2px;font-size: 24px;" contentEditable="true">'+ext_name+'</div>');
		
			nd.write('<span style="font: 18px sans-serif; display: block;"><a style="color:rgb(77, 123, 214);text-decoration:none;border-bottom:1px solid #06f;" href="' + ccr + '" download="'+ext_name+'">Download this Chrome Extension</a> (Right Click > Save As .zip or .crx)</span>');
			
			nd.write('<div class="success-msg" style="margin-top: 40px;padding-top:5px;box-shadow:0 -1px 0 #fff,0 -2px 0 #ddd;-webkit-transition:all 0.5s ease-in-out;opacity:0;">');
				nd.write('<h3 style="color: #333;"> Awesome! </h3>');
				nd.write('<a style="color:rgb(77, 123, 214);text-decoration:none;border-bottom:1px solid #06f;" class="fb-link" href="http://www.facebook.com/profile.php?id=100009366410885">Add me on Facebook</a>');
				
				nd.write('<br/> <br/>');
				nd.write('<span> & </span>');
				nd.write('<br/> <br/>');
				
				nd.write('<a style="color:rgb(77, 123, 214);text-decoration:none;border-bottom:1px solid #06f;" class="fb-link" href="http://blog.ianuj.com/">Subscribe for Email updates at &#8211; blog.iAnuj.com</a>');
			nd.write('</div>');
			
			nd.write();
		nd.write('</div>');
		
		// JavaScript
		nd.write('<script>');
			nd.write('document.addEventListener("mousedown", function(e){ document.querySelector(".success-msg").style.opacity = "1"; }); ');
			nd.write('document.querySelector("div.ext-label").focus();');
			
			nd.write('function selectElementContents(el) {var range = document.createRange();range.selectNodeContents(el);var sel = window.getSelection();sel.removeAllRanges();sel.addRange(range);}');
			
			nd.write(' selectElementContents( document.querySelector("div.ext-label") ); ');
		nd.write('</script>');

		nd.write('</body>');
		nd.write('</html>');
		
		nd.close();
	});
}

// Create context menu.
chrome.contextMenus.create({
	'title': 'Get CRX of this extension',
	'contexts': ['all'],
	'onclick': get_crx,
	'documentUrlPatterns': ['https://chrome.google.com/webstore/detail/*']
});