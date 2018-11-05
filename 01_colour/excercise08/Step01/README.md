# Generative Design

## Step 1

```js
'use strict';

var colorCount = 20; // number of colours before pattern repeats
var hueValues = []; // array for random hues
var saturationValues = []; // array for random saturations
var brightnessValues = []; // array for random brightnesses
var actRandomSeed = 0; // pseudo random number generator init values
var alphaValue = 27; // alpha for opacity values

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  // do not repeat random generation of numbers, runs once
  noLoop();
  // redrawn tiles on black background
  background(0);
  randomSeed(actRandomSeed);

  // ------ colors ------
  // create palette
  // for the number of colours in the array
  for (var i = 0; i < colorCount; i++) {
    // important switch trick
    // for every second colour, choose from these hsb values
    if (i % 2 == 0) {
      hueValues[i] = random(360);
      saturationValues[i] = 100;
      brightnessValues[i] = random(100);
    }
    // else choose from these hsb values
    else {
      hueValues[i] = 195;
      saturationValues[i] = random(100);
      brightnessValues[i] = 100;
    }
  }

    // ------ area tiling ------
  // variable to count tiles
  var counter = 0;
  // row count and row height - random number of rows between 5 and 30
  var rowCount = Math.floor(Math.random() * 30) + 5;
  var rowHeight = height / rowCount;

  
  // ------ code for fragmenting parts into smaller parts -------
   // seperate each line into parts
  for (var i = rowCount; i >= 0; i--) {
    // index for rows number of fragments
    var partCount = i + 1;
    var parts = [];
    // for each part 
    for (var ii = 0; ii < partCount; ii++) {
      // if a random number between 0 and 1 is less then 0.075 ... sub divide part into fragments
      if (random() < 0.075) {
        // take care of big values
        // random number between 2 and 20 is number of fragments the part is divided into 
        var fragments = int(random(2, 20));
        partCount = partCount + fragments;
        for (var iii = 0; iii < fragments; iii++) {
          parts.push(random(2));
        }
      }
      else {
        parts.push(random(2, 20));
      }
    }
  }
}
```