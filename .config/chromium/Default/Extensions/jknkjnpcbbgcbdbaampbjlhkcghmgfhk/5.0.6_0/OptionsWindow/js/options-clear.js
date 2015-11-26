$("#clear").click(function(){
	
	$(".clear-list").toggle();
	
	$(".clear-list-cancel").click(function(){
		
		$(".clear-list").hide();
		
	});
	
	$(".clear-list-confirm").click(function(){
		
		chrome.storage.local.set({ "channels": [] });
		$(".clear-list").hide();
		loadChannels();
		chrome.tabs.reload();
		
	});

});