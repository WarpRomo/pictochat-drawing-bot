https://github.com/WarpRomo/pictochat-drawing-bot/assets/56988049/81f747ed-88e2-4db1-989d-c7ac254aeeef

# What is this?
This lets you draw realistic images within [https://pict.chat](https://pict.chat), see the video for a demonstration.
# How do I use it?
## Method 1:
1. Copy the code found here: [main.js](https://raw.githubusercontent.com/WarpRomo/pictochat-drawing-bot/main/main.js)
2. Go to [https://pict.chat](https://pict.chat)
3. Paste the code you copied into Javascript console, and hit enter, and you're done.

## Method 2 (If you don't want to paste the code in everytime):
1. Copy the following code:
```js
javascript: (() => {fetch("https://raw.githubusercontent.com/WarpRomo/pictochat-drawing-bot/main/main.js").then(r => {return r.text();}).then(t => {eval(t);})})()
```
2. Go to your bookmarks bar at the top, right click, and click on "add page."
3. Make the name of the bookmark whatever you want
4. Paste the copied code into the box for the url, and save the bookmark.
6. Go to [https://pict.chat](https://pict.chat)
7. Anytime you want to start using the drawing bot, simply click on the bookmark, and the code will automatically run.
# ![image](https://github.com/WarpRomo/pictochat-drawing-bot/assets/56988049/07c98183-21de-4de4-954e-883c810a00f3)

## Usage
1. When you want to draw images, either copy and paste an image into the drawing box, or drag and drop an image file.
2. Use the buttons at the bottom to control the image. For example, to move the image, click and hold on the "move" button, then move your cursor around. Same goes for scale, and gamma (brightness).
