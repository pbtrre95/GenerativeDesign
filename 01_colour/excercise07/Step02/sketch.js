'use strict';

var colorCount = 20; // number of colours before pattern repeats
var hueValues = []; // array for random hues
var saturationValues = []; // array for random saturations
var brightnessValues = []; // array for random brightnesses
var actRandomSeed = 0; // pseudo random number generator init values

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  // do not repeat random generation of numbers, runs once
  noLoop();
  randomSeed(actRandomSeed);

  // for the number of colours in the array
  for (var i = 0; i < colorCount; i++) {
    // important switch trick
    // for every second colour, choose from these hsb values
    if (i % 2 == 0) {
      hueValues[i] = floor(random(250, 360));
      saturationValues[i] = floor(random(50, 100));
      brightnessValues[i] = 100;
    }
    // else choose from these hsb values
    else {
      hueValues[i] = floor(random(0, 150));
      saturationValues[i] = floor(random(0, 40));
      brightnessValues[i] = 100;
    }
  }
}