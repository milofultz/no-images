# No Images Chrome Extension
---

I was using too much of my upload cap with Evernote every month, mostly because images are too big when cropping the whole article.

This extension is really simple: on click, it goes through all the `img` elements on the page and sets their display to `none`; on clicking the button again, all display settings for the images are set to their original value.

I would put it on the Chrome extension site but I don't really want to pay the $5 fee. `¯\_(ツ)_/¯`


## Cheap and Easy No-Install Browser Agnostic Version
---

In the console of your browser, type the following:

    document.querySelectorAll('img').forEach(image => image.remove());

To reset this, reload your page.


## Future Implementation
---

* Include containers that show images but aren't obviously `img` elements
* Include SVGs
* Include anything else that may bloat my snippets


## Installation
---

1. Download the files and store them.
1. Open Chrome and go to [chrome://extensions](chrome://extensions).
1. Click on "Developer Mode" in the upper right corner.
1. Click "Load Unpacked" and select the folder containing the downloaded files.
1. Find the extension in your "Extensions" menu and pin or unpin it if you want.
