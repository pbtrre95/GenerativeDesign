'use strict';

var img;
var colors = [];
var sortMode = null;

function preload() { // function runs and code runs after the image is loaded
  img = loadImage('data/pic1.jpg');
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  noStroke();

  // Useful function to stop loop function of the draw function
  // noLoop();
}

function draw() {
  // mouse position determines the tilecount
  var tileCount = floor(width / max(mouseX, 5));
  var rectSize = width / tileCount;

  img.loadPixels();
  colors = [];

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      var px = int(gridX * rectSize); // pixel value in x location
      var py = int(gridY * rectSize); // pixel value in y location
      var i = (py * img.width + px) * 4; // finds pixel location within in image
      // find the hsba locations meaning the color of the pixel
      var c = color(img.pixels[i], img.pixels[i + 1], img.pixels[i + 2], img.pixels[i + 3]);
      // push that color to an array 
      colors.push(c);
    }
  }
  // generative design library functions that will sort the colors array by hsb etc.
  gd.sortColors(colors, sortMode);

  var i = 0;
  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {
      fill(colors[i]);
      rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
      i++;
    }
  }
}

function keyReleased() {
  if (key == 'c' || key == 'C') writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') img = loadImage('data/pic1.jpg');
  if (key == '2') img = loadImage('data/pic2.jpg');
  if (key == '3') img = loadImage('data/pic3.jpg');
  if (key == '4') img = loadImage('data/pic4.jpg');

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}