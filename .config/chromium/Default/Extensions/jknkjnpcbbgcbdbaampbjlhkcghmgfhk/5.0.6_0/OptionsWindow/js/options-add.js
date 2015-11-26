$("#add").click(function(){
	
	//Show the form
	$(".add-item").toggle();
	$(".add-item-input").focus();
	
	//After clicking the confirmation button
	$(".add-item-confirm").click(function(){
		
		var key = $(".add-item-input").val().trim(),
			type = $(".add-item-select").val();
		
		//If both key and type are filled in
		if ( key && type ) {
			
			chrome.storage.local.get(function(items){
				
				var allItems = items.channels,
					inStorage = false;
				
				//Check if already in storage
				for ( var i = 0; i < allItems.length; i++ ) {

					if ( allItems[i].key === key && allItems[i].type === type ) {
						inStorage = true;
						break;
					}
					
				}
				
				//If not in storage, add to storage
				if ( inStorage === false ) {
					
					allItems.unshift({ "key": key, "type": type });
					chrome.storage.local.set({ "channels": allItems });
					
					//Execute function on page
					chrome.tabs.executeScript({ "code": "hide_videos();" });
					
				}
				
				$(".add-item").hide();
				loadChannels();
				
			});
		
		//Else just hide the form
		} else {
			
			$(".add-item").hide();
			
		}
		
		//Empty input
		$(".add-item-input").val("");
		
	});
	
});