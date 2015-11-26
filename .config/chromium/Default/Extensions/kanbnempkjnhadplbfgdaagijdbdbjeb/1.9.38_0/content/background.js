/*var AD_BLOCK_ID = 'gighmmpiobklfepjocnamgkkbiglidom',
	isAdBlockEnabled = false;

try {
	chrome.management.get(AD_BLOCK_ID, function (result) {
		//console.log("result", result);
		isAdBlockEnabled = result.enabled;
	});
} catch(e) {
	isAdBlockEnabled = false;
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (request.query == "AdBlock")
			sendResponse({
				isEnabled: isAdBlockEnabled
			});
	});*/