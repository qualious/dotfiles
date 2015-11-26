//Content Script is loaded -> Tell background script to show page action
chrome.runtime.sendMessage({
	"name": "pageAction",
	"content": "show"
});

//Container selectors where channel names can be found
var video_selectors = [
	{
		"container": ".yt-shelf-grid-item",
		"channel": ".yt-lockup-byline .g-hovercard",
		"title": ".yt-lockup-title > a.spf-link"
	},
	{
		"container": ".lohp-medium-shelf",
		"channel": ".yt-lockup-byline .g-hovercard",
		"title": ".yt-lockup-title > a.spf-link"
	},
	{
		"container": ".lohp-large-shelf-container",
		"channel": ".yt-lockup-byline .g-hovercard",
		"title": ".yt-lockup-title > a.spf-link"
	},
	{
		"container": ".expanded-shelf-content-item-wrapper",
		"channel": ".yt-lockup-byline .g-hovercard",
		"title": ".yt-lockup-title > a.spf-link"
	},
	{
		"container": ".pl-video-table .pl-video",
		"channel": ".pl-video-owner .g-hovercard",
		"title": ".pl-video-title a.spf-link"
	},
	{
		"container": ".video-list .video-list-item",
		"channel": ".attribution .g-hovercard",
		"title": "a.spf-link > .title"
	},
	{
		"container": ".playlist-videos-list > li",
		"channel": ".video-uploader-byline > span",
		"title": "h4.yt-ui-ellipsis"
	},
	{
		"container": ".videowall-still",
		"channel": ".videowall-still-info-author",
		"title": ".videowall-still-info-title"
	},
	{
		"container": ".branded-page-related-channels-list .branded-page-related-channels-item",
		"channel": ".yt-lockup-title > .yt-uix-tile-link"
	},
	{
		"container": "#results .section-list .item-section > li",
		"channel": ".yt-lockup-byline .g-hovercard",
		"title": ".yt-lockup-title > a"
	},
	{
		"container": ".yt-gb-shelf .yt-gb-shelf-hero",
		"channel": ".qualified-channel-title-wrapper > .g-hovercard > a"
	},
];

//Hide videos when ready
$(document).ready(function(){
	
	chrome.storage.local.get(function(items){
		if ( items.updated === true ) $.get( chrome.extension.getURL("UpdateWindow/Update.html"), function(data) {
			$("body").prepend(data);
		});
		if ( items.installed === true ) $.get( chrome.extension.getURL("UpdateWindow/Install.html"), function(data) {
			$("body").prepend(data);
		});
	});
		
	hide_videos();
	
	//Mutation observer stuff
	var mutationTarget = document.getElementById("page");
	var mutationObserver = new MutationObserver(function(mutations) {
		hide_videos();
	});
	var mutationConfig = {
		"childList": true,
		"subtree": true
	};
	mutationObserver.observe(mutationTarget, mutationConfig);
	
});

//On right click get channel name and update context menu
var channelName;

$(document).mousedown(function(event){
	
	if ( event.which === 3 || event.ctrlKey ) {
		
		channelName = null;
		
		for ( i = 0; i < video_selectors.length; i++ ) {
			
			if ( $(event.target).closest(video_selectors[i].container).length === 1 )
				channelName = $(event.target).closest(video_selectors[i].container).find(video_selectors[i].channel).text().trim();
			
			if ( channelName ) break;
			
		}
		
//		if ( channelName )
//			chrome.runtime.sendMessage({
//				"name": "contextMenu",
//				"content": channelName
//			});
//		else
//			chrome.runtime.sendMessage({
//				"name": "noContextMenu"
//			});
		
	}
	
});

//Save channel in storage when context menu is clicked
chrome.runtime.onMessage.addListener(function(message){
	
	if ( message.name === "contextMenuClicked" && channelName ) {
		
		chrome.storage.local.get(function(items){
			
			var allItems = items.channels,
				inStorage = false;
			
			for ( var i = 0; i < allItems.length; i++ ) {
				if ( allItems[i].key === channelName && allItems[i].type === "channel" ) {
					inStorage = true;
					break;
				}
			}
			
			if ( inStorage === false ) {
			
				allItems.unshift({ "key": channelName, "type": "channel" });
				chrome.storage.local.set({ "channels": allItems });
				hide_videos();
			
			}
			
		});
		
	}
	
});

//Hide videos
function hide_videos() {
	
	chrome.storage.local.get(function(items){
		
		var allItems = items.channels,
			channelPage = false;
	
		// Redirect from channel page
		if ( /.*\.youtube\.com\/(user|channel)\/.*/.test(window.location.href) ) {
			
			var channelPageChannel = $(".qualified-channel-title-text a.spf-link").text().trim();
			
			for ( var p = 0; p < allItems.length; p++ ) {
				
				if ( (allItems[p].key === channelPageChannel && allItems[p].type === "channel") || (channelPageChannel.indexOf(allItems[p].key) != -1 && allItems[p].type === "wildcard") ) {
					
					window.history.back();
						
				}
				
			}
			
		}
		
		// Redirect from video page
		if ( /.*\.youtube\.com\/watch\?.*/.test(window.location.href) ) {
			
			var videoPageChannel = $("#watch-header .yt-user-info a.spf-link").text().trim(),
				videoPageTitle = $("#watch-header .watch-title-container .watch-title").text().trim();
			
			for ( var q = 0; q < allItems.length; q++ ) {
				
				if ( (allItems[q].key === videoPageChannel && allItems[q].type === "channel") || (videoPageChannel.indexOf(allItems[q].key) != -1 && allItems[q].type === "wildcard") || (videoPageTitle.toLowerCase().indexOf(allItems[q].key.toLowerCase()) != -1 && allItems[q].type === "keyword") ) {
					
					window.history.back();
					
				}
				
			}
			
		}
		
		for ( var i = 0; i < video_selectors.length; i++ ) {
			
//			$(video_selectors[i].container).css({background: "red"});
//			$(video_selectors[i].container + " " + video_selectors[i].channel).css({background: "green"});
//			$(video_selectors[i].container + " " + video_selectors[i].title).css({background: "yellow"});
			
			$( video_selectors[i].container ).each(function(){
				
				var inside_array = false,
					channel = $( video_selectors[i].channel, this ).text().trim(),
					title = $( video_selectors[i].title, this ).text().trim();
				
				for ( var k = 0; k < allItems.length; k++ ) {

					if ( allItems[k].key === channel && allItems[k].type === "channel" ) {

						inside_array = true;
						break;

					} else if ( channel.indexOf(allItems[k].key) != -1 && allItems[k].type === "wildcard" ) {

						inside_array = true;
						break;

					} else if ( title.toLowerCase().indexOf(allItems[k].key.toLowerCase()) != -1 && allItems[k].type === "keyword" ) {

						inside_array = true;
						break;

					}

				}
				
				//Finally remove the video container if it is from a blocked channel or wildcard
				if ( inside_array ) {

					$(this).remove();

				}
				
			});
				
		}
		
		//Make the other containers visible as well
		for ( var i = 0; i < video_selectors.length; i++ ) {
			$(video_selectors[i].container).css({visibility: "visible"});
		}
		
		fix_thumbnails();
		
	});
	
}

function fix_thumbnails() {
	
	jQuery(".yt-thumb img").each(function(){

		if( jQuery(this).attr("data-thumb") != $(this).attr("src") )
			jQuery(this).attr("src",$(this).attr("data-thumb"));
		
	});
	
}