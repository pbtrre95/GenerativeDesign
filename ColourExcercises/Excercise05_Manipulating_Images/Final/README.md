# Generative Design

## Final

```js
'use strict';

var img;
// Create an empty colors array to store your color values
var colors = [];
// A variable for changing modes of viewing colors
var sortMode = null;

function preload() { // function runs and code runs after the image is loaded
  img = loadImage('data/pic1.jpg');
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  noStroke();
}

function draw() {
  // Defines number of tiles
  var tileCount = floor(width / max(mouseX, 5));

  // and the width of each tile
  var rectSize = width / tileCount;

  img.loadPixels();
  // Empty our colors array each loop
  colors = [];

  // If our image is 400px wide and high and our tile count is 20
  // which will mean our tile width is also 20px. We will want to grab
  // the colors at 0, 20, 40, 60 .. and store them

  for (var gridY = 0; gridY < tileCount; gridY++) {
    // For each gridX value we need to work out a color to be stored
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize); // pixel value in x location
      var py = int(gridY * rectSize); // pixel value in y location

      // Convert this to the appropriate index value in the pixel array
      var i = (py * img.width + px) * 4;
      // find the hsba locations meaning the color of the pixel and create color object
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      // push that color to an array 
      colors.push(c);
    }
  }
  // generative design library functions that will sort the colors array by hsb etc.
  gd.sortColors(colors, sortMode);


  // Draw these colors using pixel array
  var i = 0;
  // gridX x gridY of the canvas
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      // loop through pixel array of colors and fill
      fill(colors[i]);
      // Draw each color pixel
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
  console.log(colors);
}

function keyReleased() {
  // Save colors array as color pallete as file named timestamp, filetype .ase
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  // Switch images
  if (key == '1') img = loadImage('data/pic1.jpg');
  if (key == '2') img = loadImage('data/pic2.jpg');
  if (key == '3') img = loadImage('data/pic3.jpg');
  if (key == '4') img = loadImage('data/pic4.jpg');


  // gd functions
  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}
```