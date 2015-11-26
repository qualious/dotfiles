chrome.browserAction.onClicked.addListener(function(tab){
	var chromeExtURL="chrome://downloads/"
	chrome.tabs.getAllInWindow(null,function(tabs){
		for (var i=0;i<tabs.length;i++){
			if (tabs[i].url == chromeExtURL){
				chrome.tabs.update(tabs[i].id, {selected:true})
				return;
			}
		}
		chrome.tabs.create({url:chromeExtURL,selected:true})
	})
})