// content.js 

let active = false;
let images = document.querySelectorAll('img');

// the listener waiting for the event
chrome.runtime.onMessage.addListener(
	// the request is the arbitrary JSON payload
  function(request, sender, sendResponse) {
  	// if the request message is what we specified
    if( request.message === "clicked_browser_action" ) {
    	if(!active){
    		images.forEach(image => {
    			image.remove()
    		});
    		active = true;
    	} else {
    		location.reload();
    	}
    }
  }
);
