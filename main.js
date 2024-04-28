//made by oeci

let pixelX = null;
let pixelY = null;
let pixelWidth = null;
let pixelHeight = null;
let powerFactor = 1;
let brightness = 1;
let pixels = 3000;

createGUI();
function createGUI(){

  let move = document.createElement("button");
  let scale = document.createElement("button");
  let bright = document.createElement("button");
  let powUp = document.createElement("button");
  let powDown = document.createElement("button");
  let pixelCount = document.createElement("button");

  move.innerHTML = "Move";
  scale.innerHTML = "Scale";
  bright.innerHTML = "Gamma";
  powUp.innerHTML = "power up " + powerFactor;
  powDown.innerHTML = "power down";
  pixelCount.innerHTML = "Pixels " + pixels;

  let parent = document.createElement("div");

  let buttons = [move,scale,bright,powUp,powDown,pixelCount];

  let ref = document.getElementsByTagName("canvas")[0].getBoundingClientRect();

  let fontSize = ref.width / 30;
  let widthRef = ref.width;


  let buttonWidth = widthRef / 7;

  for(var i = 0; i < buttons.length; i++){

    parent.appendChild(buttons[i]);
    buttons[i].style.width = buttonWidth + "px"
    buttons[i].style.height = buttonWidth + "px"
    buttons[i].style.fontSize = fontSize + "px"
    buttons[i].style.verticalAlign = "top";

  }

  parent.style.position = "absolute";
  parent.style.display = "flex";
  parent.style.left = "50%";
  parent.style.transform = "translate(-455%, 0)";
  parent.style.opacity = "0.7";
  parent.style.zIndex = "100";
  parent.style.width = buttonWidth + "px";
  parent.style.flexDirection = "column";
  parent.style.top = "0px";

  powUp.onmousedown = () => {

    if(theimage == null) return;

    powerFactor++;
    powUptext()
    doDrawing();

  }

  powDown.onmousedown = () => {

    if(theimage == null) return;

    powerFactor--;
    if(powerFactor < 1) powerFactor = 1
    powUptext()
    doDrawing();

  }

  function powUptext(){
    powUp.innerHTML = "powUp " + powerFactor;
  }

  move.onmousedown = () => {

    if(theimage == null) return;

    let previousPos = [mouseX, mouseY];

    let interval = setInterval(() => {

      if(mousedown == false){
        clearInterval(interval);
        return;
      }

      let newPos = [mouseX, mouseY];
      let delta = [newPos[0] - previousPos[0], newPos[1] - previousPos[1]];
      previousPos = newPos;

      let bounding = [0.09, 0.540, 0.98, 0.76];
      let boundingPixel = [22,208,252,289];

      let pos = document.getElementsByTagName("canvas")[0].getBoundingClientRect()

      delta[0] /= pos.width;
      delta[1] /= pos.height;

      let xRate = (boundingPixel[2] - boundingPixel[0]) / (bounding[2] - bounding[0])
      let yRate = (boundingPixel[3] - boundingPixel[1]) / (bounding[3] - bounding[1])

      delta[0] *= xRate;
      delta[1] *= yRate;

      pixelX += delta[0];
      pixelY += delta[1];

      doDrawing()

    }, 100);

  }

  scale.onmousedown = () => {

    if(theimage == null) return;

    let previousPos = [mouseX, mouseY];

    let interval = setInterval(() => {

      if(mousedown == false){
        clearInterval(interval);
        return;
      }

      let newPos = [mouseX, mouseY];
      let delta = [newPos[0] - previousPos[0], newPos[1] - previousPos[1]];
      previousPos = newPos;

      let bounding = [0.09, 0.540, 0.98, 0.76];
      let boundingPixel = [22,208,252,289];

      let pos = document.getElementsByTagName("canvas")[0].getBoundingClientRect()

      delta[0] /= pos.width;
      delta[1] /= pos.height;

      let xRate = (boundingPixel[2] - boundingPixel[0]) / (bounding[2] - bounding[0])
      let yRate = (boundingPixel[3] - boundingPixel[1]) / (bounding[3] - bounding[1])

      delta[0] *= xRate;
      delta[1] *= yRate;

      pixelWidth += delta[1];
      pixelHeight = pixelWidth * theimage.width / theimage.height;

      doDrawing()

    }, 100);

  }

  bright.onmousedown = () => {

    if(theimage == null) return;

    let previousPos = [mouseX, mouseY];

    let interval = setInterval(() => {

      if(mousedown == false){
        clearInterval(interval);
        return;
      }

      let newPos = [mouseX, mouseY];
      let delta = [newPos[0] - previousPos[0], newPos[1] - previousPos[1]];
      previousPos = newPos;

      let bounding = [0.09, 0.540, 0.98, 0.76];
      let boundingPixel = [22,208,252,289];

      let pos = document.getElementsByTagName("canvas")[0].getBoundingClientRect()

      delta[0] /= pos.width;
      delta[1] /= pos.height;

      let xRate = (boundingPixel[2] - boundingPixel[0]) / (bounding[2] - bounding[0])
      let yRate = (boundingPixel[3] - boundingPixel[1]) / (bounding[3] - bounding[1])

      delta[0] *= xRate;
      delta[1] *= yRate;

      let scaleFactor = 1 + delta[1] / 20;

      if(scaleFactor < 0.75) scaleFactor = 0.75;
      if(scaleFactor > 1.25) scaleFactor = 1.25;

      brightness *= scaleFactor;
      if(brightness < 0.05) brightness = 0.05;

      doDrawing()

    }, 100);

  }

  pixelCount.onmousedown = () => {

    if(theimage == null) return;

    let previousPos = [mouseX, mouseY];

    let interval = setInterval(() => {

      if(mousedown == false){
        clearInterval(interval);
        return;
      }

      let newPos = [mouseX, mouseY];
      let delta = [newPos[0] - previousPos[0], newPos[1] - previousPos[1]];
      previousPos = newPos;

      let bounding = [0.09, 0.540, 0.98, 0.76];
      let boundingPixel = [22,208,252,289];

      let pos = document.getElementsByTagName("canvas")[0].getBoundingClientRect()

      delta[0] /= pos.width;
      delta[1] /= pos.height;

      let xRate = (boundingPixel[2] - boundingPixel[0]) / (bounding[2] - bounding[0])
      let yRate = (boundingPixel[3] - boundingPixel[1]) / (bounding[3] - bounding[1])

      delta[0] *= xRate;
      delta[1] *= yRate;

      pixels += delta[1] * 50;
      pixels = Math.floor(pixels);
      if(pixels < 100) pixels = 100;
      pixelCount.innerHTML = "Pixels " + pixels;

      doDrawing()

    }, 100);

  }


  let root = document.getElementById("root");
  root.before(parent);





}

function doDrawing(){

  if(theimage == null) return;

  drawImage(pixelX, pixelY, pixelWidth, pixelHeight, theimage, brightness,powerFactor,pixels);
  drawDrawing();

}


let pixelPrecision = 1000;

let drawImage = (posx,posy,poswidth,posheight,img,brightness,powerFactor,maxPixels) => {

  drawHistory = [{x: 0, y:0, type: 3}]

  let canvas = document.createElement("canvas");

  let pixelscale = Math.sqrt(maxPixels / (img.width * img.height))
  let width = Math.floor(img.width * pixelscale);
  let height = Math.floor(img.height * pixelscale);

  canvas.width = width;
  canvas.height = height;

  let ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  let data = imageData.data;

  let scale = poswidth / width;

  for(var y = 0; y < canvas.height; y++){

      for(var x = 0; x < canvas.width; x++){

          let index = (y * canvas.width + x)*4;

          if(data[index+3] == 0) continue;

          let darkness = (data[index] + data[index+1] + data[index+2])/3

          darkness = -darkness + 255;

          let length = darkness/255;

          length = length ** powerFactor;
          length *= brightness;

          if(length > 1) length = 1;

          let PoffsetX = (1 - length) / 2;
          let PoffsetX2 = 1 - (1 - length) / 2

          let PoffsetY = PoffsetX;
          let PoffsetY2 = PoffsetX2;

          if((x + y) % 2 == 1) [PoffsetX, PoffsetX2] = [PoffsetX2, PoffsetX];

          let p1 = {x: (x+PoffsetX)*scale + posx,  y: (y+PoffsetY)*scale + posy, type: 2};
          let p2 = {x: (x+PoffsetX2)*scale + posx, y: (y+PoffsetY2)*scale + posy, type: 0}

          p1.x = Math.floor(p1.x * pixelPrecision) / pixelPrecision;
          p1.y = Math.floor(p1.y * pixelPrecision) / pixelPrecision;
          p2.x = Math.floor(p2.x * pixelPrecision) / pixelPrecision;
          p2.y = Math.floor(p2.y * pixelPrecision) / pixelPrecision;

          drawHistory.push(p1)
          drawHistory.push(p2)

      }

  }


}

let mousedown = false;


let theimage = null;
window.addEventListener("dragover",function(e){
  e = e || event;
  e.preventDefault();
});

let mouseX = 0;
let mouseY = 0;

window.addEventListener("drop",function(e){
  e = e || event;
  e.preventDefault();

  for(var i = 0; i < e.dataTransfer.items.length; i++){

    let item = e.dataTransfer.items[i];
    if(item.kind == "file"){
      var blob = item.getAsFile();
      var reader = new FileReader();
      reader.onload = function (event) {

        theimage = new Image();
        theimage.src = event.target.result;
        theimage.crossOrigin = "Anonymous";
        theimage.style.position = "absolute";
        theimage.style.width = "400px";

        theimage.onload = () => {

          let bounding = [0.09, 0.540, 0.98, 0.76];
          let boundingPixel = [22,208,252,289];

          let pos = document.getElementsByTagName("canvas")[0].getBoundingClientRect()

          let dX = (mouseX - pos.x) / pos.width;
          let dY = (mouseY - pos.y) / pos.height;

          pixelX = 30
          pixelY = 210;

          let width = parseInt(theimage.style.width) / pos.width;

          pixelWidth = 100;
          pixelHeight = Math.floor(theimage.height * pixelWidth / theimage.width);

          doDrawing()

        }

      };
      reader.readAsDataURL(blob);
    }

  }

}, false);

window.addEventListener("paste", function(e){


    var items = (event.clipboardData || event.originalEvent.clipboardData).items;

    for (index in items) {
      var item = items[index];
      if (item.kind === 'file') {
        var blob = item.getAsFile();
        var reader = new FileReader();
        reader.onload = function(event){

          theimage = new Image();
          theimage.src = event.target.result;
          theimage.crossOrigin = "Anonymous";
          theimage.style.position = "absolute";
          theimage.style.width = "400px";

          theimage.onload = () => {

            let bounding = [0.09, 0.540, 0.98, 0.76];
            let boundingPixel = [22,208,252,289];

            let pos = document.getElementsByTagName("canvas")[0].getBoundingClientRect()

            let dX = (mouseX - pos.x) / pos.width;
            let dY = (mouseY - pos.y) / pos.height;

            pixelX = 30
            pixelY = 210;

            let width = parseInt(theimage.style.width) / pos.width;

            pixelWidth = 100;
            pixelHeight = Math.floor(theimage.height * pixelWidth / theimage.width);

            doDrawing()

          }



        }; // data url!
        reader.readAsDataURL(blob);
      }
    }

});



window.addEventListener("mousemove",function(e){

    mouseX = e.clientX;
    mouseY = e.clientY;

}, false);

window.addEventListener("mousedown", () => {

  mousedown = true;

})

window.addEventListener("mouseup", () => {

  mousedown = false;

})

window.addEventListener("keyup",function(e){

  if(theimage != null){

    let char = String.fromCharCode(e.keyCode);

    if(char == "S"){

      let currWidth = parseInt(theimage.style.width.replace("px",""));
      currWidth += 30;
      theimage.style.width = currWidth+"px";
    }
    if(char == "W"){

      let currWidth = parseInt(theimage.style.width.replace("px",""));
      currWidth -= 30;
      theimage.style.width = currWidth+"px";
    }

    e.preventDefault();

  }


})


function drawDrawing() {
    pc_sprites.drawing.clear();
    pc_sprites.drawing.drawMode = 0;
    pc_sprites.drawing.rainbowDeg = 0;
    //drawHistory = cleanupDrawing(drawHistory);
    for (let i = 0; i < drawHistory.length; i++) {
        let action = drawHistory[i];
        switch (action.type) {
            case 0: {
                pc_sprites.drawing.lineTo(action.x, action.y);
                if (pc_sprites.drawing.drawMode === 0xffffff) pc_sprites.drawing.rainbowDeg = (pc_sprites.drawing.rainbowDeg + 12) % 360;
                break;
            }
            case 1: {
                pc_sprites.drawing.moveTo(action.x, action.y);
                break;
            }
            case 2: {
                pc_sprites.drawing.moveTo(action.x, action.y);
                break;
            }
            case 3: {
                pc_sprites.drawing.drawWidth = 2;
                break;
            }
            case 4: {
                pc_sprites.drawing.drawWidth = 1;
                break;
            }
            case 5: {
                pc_sprites.drawing.drawMode = 0;
                break;
            }
            case 6: {
                pc_sprites.drawing.drawMode = 0xfbfbfb;
                break;
            }
            case 7: {
                pc_sprites.drawing.drawMode = 0xffffff;
                break;
            }
        }
        if (pc_sprites.drawing.drawMode === 0xffffff) {
            pc_sprites.drawing.lineStyle(pc_sprites.drawing.drawWidth, hsl2rgb2dec(pc_sprites.drawing.rainbowDeg, 1, 0.5));
        } else {
            pc_sprites.drawing.lineStyle(pc_sprites.drawing.drawWidth + ((pc_sprites.drawing.drawMode > 0) * (pc_sprites.drawing.drawWidth === 2)), pc_sprites.drawing.drawMode);
        }
    }
    redraw = false;
}
