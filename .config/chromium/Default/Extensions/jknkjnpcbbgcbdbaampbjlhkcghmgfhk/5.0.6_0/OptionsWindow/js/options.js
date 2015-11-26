/*
New Storage Structure

storage.channels = array(
	object(
		"key" => "[channel name]",
		"type" => "[channel/wildcard/keyword]"
	),
	...
)
*/

$(document).ready(function(){
	
	loadChannels();
	
});

//Load channels in list
function loadChannels() {
	
	//Get them from the storage api
	chrome.storage.local.get(function(items){
		
		var allItems = items.channels;
		
		//If there are any channels, show them, else, show warning
		if ( allItems.length > 0 ) {
			
			//Empty it first
			$(".list").html("");
			
			//Then append each item
			for ( var i = 0; i < allItems.length; i++ ) {
				
				$(".list").append("<li data-type='" + allItems[i].type.substr(0,1) + "'><span class='key'>" + allItems[i].key + "</span></li>");
				
			}
			
			//Init clicks
			listClicks();
			
		} else {
			
			//Show warning
			$(".list").html("<li class='no-items' data-type='!'>No items found</li>");
			
		}
		
	});
	
	//Update counter
	updateCounter();
	
}

//Update counter
function updateCounter(method) {
	
	if ( method === "search" ) {
		
		$(".counter").text( $(".list > li:visible").length  + " match(es)");
		
	} else {
	
		//Get them from the storage api
		chrome.storage.local.get(function(items){

			var allItems = items.channels;
			$(".counter").text(allItems.length + " items in total");

		});
		
	}
	
}

//Init clicks in list
function listClicks() {
	
	$(".list > li").click(function(e){
		
		//Only do something when the item is not already expanded
		if ( !$(this).hasClass("expanded") ) {
			
			//Handling the opening and closing animation
			$(this).addClass("expanded").append("<span class='overlay'><span class='delete'>Unblock</span></span>");
			$(".overlay", this).animate({top:0}, 300).click(function(){
				$(this).animate({top:"100%"}, 300, function(){
					$(this).parent().removeClass("expanded");
					$(this).remove();
				});
			});
			
			//Handling the actual deletion
			$(".delete", this).click(function(e){
				
				$(this).parent().parent().animate({marginLeft: 400}, 300, function(){
					
					//Put key and type in variables
					var key = $(".key", this).text().trim(),
						typeS = $(this).attr("data-type"),
						type;
					
					if ( typeS === "w" )
						type = "wildcard";
					else if ( typeS === "k" )
						type = "keyword";
					else
						type = "channel";
					
					//Get all items from storage					
					chrome.storage.local.get(function(items){
						
						//console.log(key,type);
						
						//If they are the same, index of array is the same as the for int
						var allItems = items.channels,
							index = -1;
						
						for ( var i = 0; i < allItems.length; i++ ) {
							
							if ( allItems[i].type === type && allItems[i].key === key ) {
								index = i;
								break;
							}
							
						}
						
						//Splice array if index is set
						if ( index > -1 ) allItems.splice(index, 1);
						
						//Set new storage
						chrome.storage.local.set({
							"channels": allItems
						});
						
						//Reload channel list
						loadChannels();
						chrome.tabs.reload();
						
					});
									
				});
				
				return false;
			});
			
		}
		
	});
	
}