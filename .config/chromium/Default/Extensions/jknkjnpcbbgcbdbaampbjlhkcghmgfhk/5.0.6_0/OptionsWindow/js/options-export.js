$("#export").click(function(){
	
	//Get the current list of channels
	chrome.storage.local.get(function( items ){

		var currentList = items.channels,
			csvContent = "key;type\n";

		//For each blocked channel or wildcard
		currentList.forEach(function(infoArray, index){

			var dataString = infoArray.key.replace(";","") + ";" + infoArray.type;

			csvContent += (index < currentList.length-1) ? dataString+ "\n" : dataString;

		}); 

		var blob = new Blob([csvContent], { type: 'text/csv' });

		//Get current date
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		today = mm+'/'+dd+'/'+yyyy;

		//Download magic
		var encodedUri = URL.createObjectURL(blob);
		var link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "Video Blocker (" + currentList.length + " keys " + today + ").csv");
		link.click();

	});
	
});