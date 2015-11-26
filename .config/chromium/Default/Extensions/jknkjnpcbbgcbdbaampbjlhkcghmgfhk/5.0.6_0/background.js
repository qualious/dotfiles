//Listen for content script to send message
chrome.runtime.onMessage.addListener(function(message, sender){
	
	if ( message.name === "pageAction" && message.content === "show" )
		chrome.pageAction.show(sender.tab.id);
	
//	if ( message.name === "contextMenu" )
//		chrome.contextMenus.update("video_blocker_context_menu", {
//			"title": "Block videos from " + message.content,
//			"enabled": true
//		});
//	
//	if ( message.name === "noContextMenu" )
//		chrome.contextMenus.update("video_blocker_context_menu", {
//			"title": "No channel name could be found, please try again",
//			"enabled": false
//		});
	
});

//After update
chrome.runtime.onInstalled.addListener(function(details){
	
	//Open update and installation pages
	if ( details.reason === "update" /*&& details.previousVersion != "5.0.3"*/ ) {
		
		//Do something with an update page
		chrome.storage.local.set({ "updated": true });
		
	} else if ( details.reason === "install" ) {
		
		//Do something with an installation page
		chrome.storage.local.set({ "installed": true });
		
	}
	
	//If storage is empty, save an empty array
	chrome.storage.local.get(function(items){
		
		if ( items.channels ) {
			var allItems = items.channels;
			for ( var i = allItems.length - 1; i >= 0; i-- ) {
				if ( !allItems[i].key || allItems[i].key === "" || allItems[i].key === null || allItems[i].key === undefined ) allItems.splice(i, 1);
			}
			chrome.storage.local.set({ "channels": allItems });
		} else {
			chrome.storage.local.set({ "channels": [] });
		}
		
	});
	
});

//Context menu
//chrome.contextMenus.create({
//	"id": "video_blocker_context_menu",
//	"title": "No channel name could be found",
//	"enabled": false,
//	"contexts": [
//		"all"	
//	],
//	"documentUrlPatterns": [
//		"*://www.youtube.com/*"
//	]
//});
chrome.contextMenus.create({
	"id": "video_blocker_context_menu",
	"title": "Block videos from this channel",
	"enabled": true,
	"contexts": [
		"link"	
	],
	"documentUrlPatterns": [
		"*://www.youtube.com/*"
	],
	"targetUrlPatterns": [
		"*://*.youtube.com/watch*",
		"*://*.youtube.com/user/*",
		"*://*.youtube.com/channel/*"
	]
});

//Context menu clicked
chrome.contextMenus.onClicked.addListener(function(info, tab){
	
	chrome.tabs.sendMessage(tab.id, {
		"name": "contextMenuClicked"
	});
	
});