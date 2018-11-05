'use strict';

var tileCountX = 50; // 50 tiles across
var tileCountY = 10; // 10 tiles down

var hueValues = []; // Between 0 and 360
var saturationValues = []; // Between 0 and 100
var brightnessValues = []; // Between 0 and 100


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  // init with random values 
  // for each number of tiles across the width of the screen
  for (var i = 0; i < tileCountX; i++) {
    // 50 hues, saturations and brightnesses
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  // limit mouse coordinates to canvas
  var mX = constrain(mouseX, 0, width);
  var mY = constrain(mouseY, 0, height);

  // tile counter
  var counter = 0;
  // map the number of tiles to where the mouse is in respect to the canvas
  // the bigger the x and y coordinates the larger number of tiles there will be
  // tileCountX and tileCountY are set at maximums of 50 and 10
  var currentTileCountX = int(map(mX, 0, width, 1, tileCountX));
  var currentTileCountY = int(map(mY, 0, height, 1, tileCountY));

  // tile heights and widths will be used to set rectangle heights and widths
  var tileWidth = width / currentTileCountX;
  var tileHeight = height / currentTileCountY;

  // for the canvas height and width loop
  for (var gridY = 0; gridY < tileCountY; gridY++) {
    for (var gridX = 0; gridX < tileCountX; gridX++) {

      var posX = tileWidth * gridX;
      var posY = tileHeight * gridY;

      // Get the hsb values for each tile
      var index = counter % currentTileCountX;

      // get component color values
      fill(hueValues[index], saturationValues[index], brightnessValues[index]);
      rect(posX, posY, tileWidth, tileHeight);
      counter++;
    }
  }
}