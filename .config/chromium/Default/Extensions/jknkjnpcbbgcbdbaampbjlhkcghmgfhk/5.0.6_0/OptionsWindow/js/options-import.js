$("#import").click(function(){
	
	//Show document browser
	$(".file_upload").trigger("click");

	//If a file is selected
	$(".file_upload").change(function(){

		var file = document.getElementById("file_upload").files[0];

		if ( file && file.name.substring(file.name.lastIndexOf('.')) === ".csv" ) {

			var reader = new FileReader();
			reader.onload = function(){

				var csv = reader.result;
				
				if ( csv && /key;type(\r|\n)/.test(csv.substring(0, 9)) ) {

					//Get the channels from the storage api
					chrome.storage.local.get(function( items ){

						var currentList = items.channels,
							importedFile = csv.split(/[\r\n]+/g),
							newChannels = [];

						//Remove column headings
						importedFile.shift();

						//For every item in the array
						for ( var i = 0; i < importedFile.length; i++ ) {

							//Put them into a new array
							var item = importedFile[i].split(";"),
								exists = false;

							//Check if the new item does not already exist in the list
							for ( var j = 0; j < currentList.length; j++ ) {

								if ( ( currentList[j].key === item[0] && currentList[j].type === item[1] ) || item[0] === "" ) {

									exists = true;
									break;

								}

							}

							//If not already existing
							if ( exists === false ) {

								//Add it to a new clean list
								newChannels.push({ "key": item[0], "type": item[1] });

							}

						}

						//Add new channels to the old list
						var newList = currentList.concat(newChannels);

						//And save it in the storage api
						chrome.storage.local.set({ 
							"channels": newList
						});

						//Execute function on page
						chrome.tabs.executeScript({ "code": "hide_videos();" });

						loadChannels();

					});			

				}

			};
			reader.readAsText(file);

		}

	});
	
});