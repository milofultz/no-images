// background.js
// runs every time a page is loaded

// call when user clicks on the browser action
chrome.browserAction.onClicked.addListener(function(tab) {
	// query all the tabs to see which one is the active one and the current window
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		// the first tab in the array is the activeTab
		var activeTab = tabs[0];
		// send a message to the tabs (which tab, the arbitrary JSON payload)
		chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
	});
});
