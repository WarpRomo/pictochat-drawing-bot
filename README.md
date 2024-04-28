https://github.com/WarpRomo/pictochat-drawing-bot/assets/56988049/81f747ed-88e2-4db1-989d-c7ac254aeeef

# What is this?
Drag and drop image, or copy and paste it into the tab.
To adjust image, click and drag on the buttons.
For example, to move the image, click and hold on the "move" button, then move your cursor in the direction you want the image to move.

# How do I use it?
There are two ways
## Method 1:
1. Copy the code found here: [main.js](https://raw.githubusercontent.com/WarpRomo/pictochat-drawing-bot/main/main.js);
2. Go to [https://pict.chat](https://pict.chat)
3. Paste the code you copied into Javascript console, and hit enter
That's it.

## Method 2 (If you don't want to paste the code in everytime):
1. Copy the following code:
```js
javascript: (() => {fetch("https://raw.githubusercontent.com/WarpRomo/pictochat-drawing-bot/main/main.js").then(r => {return r.text();}).then(t => {eval(t);})})()
```
2. Go to your bookmarks bar at the top, right click, and click on "add page."
3. Make the name of the bookmark whatever you want
4. Paste the copied code into the box for the url, and save the bookmark.
5. Go to [https://pict.chat](https://pict.chat)
6. Anytime you want to start using the drawing bot, simply click on the bookmark, and the code will automatically run.
That's it.
