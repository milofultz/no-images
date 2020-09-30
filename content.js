// content.js 

let active = false;
let imageDisplayArray = [];
let images = document.querySelectorAll('img');

// the listener waiting for the event
chrome.runtime.onMessage.addListener(
	// the request is the arbitrary JSON payload
  function(request, sender, sendResponse) {
  	// if the request message is what we specified
    if( request.message === "clicked_browser_action" ) {
    	if(!active){
    		images.forEach(image => {
    			imageDisplayArray.push(image.style.display);
    		});
    		images.forEach(image => image.style.display = "none");
    		active = true;
    	} else {
    		for(let index in images) {
    			images.forEach(image => image.style.display = imageDisplayArray[index]);
    		}
    		active = false;
    	}
    }
  }
);
