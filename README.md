# No Images Chrome Extension

When using the Evernote Web Clipper, I was using too much of my upload cap with Evernote every month, mostly because images are too big when cropping the whole article.

This extension is really simple: on click, it goes through all the `img` elements on the page and removes them from the DOM. On another click, the page is refreshed.

The original implementation set the element's display to `none`; on clicking the button again, all display settings for the images were set to their original value. Unfortunately, Evernote adds and modifies inline style on import, so it negated this otherwise more elegant implementation.

I would put it on the Chrome extension site but I don't really want to pay the $5 fee. `¯\_(ツ)_/¯`

This extension has been tested to work on the "Article", "Simplified Article", and "Full Page" options.


## Cheap and Easy No-Install Browser Agnostic Version

In the console of your browser, type the following:

    document.querySelectorAll('img').forEach(image => image.remove());

To reset this, reload your page.


## Future Implementation

* ~~Ensure it works with both simplified formatting and with entire article~~
* Make the image removal reversible without a full page reload
* Include containers that show images but aren't obviously `img` elements
* Include SVGs
* Include anything else that may bloat my snippets


## Installation

1. Download the files and store them.
1. Open Chrome and go to chrome://extensions.
1. Click on "Developer Mode" in the upper right corner.
1. Click "Load Unpacked" and select the folder containing the downloaded files.
1. Find the extension in your "Extensions" menu and pin or unpin it if you want.
