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

    // add all subparts
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }

    // draw rects
    var sumPartsNow = 0;
    // this loops through each row, for each row's parts array
    // somePartsNow will act as part to be drawn
    // in a ratio of sumPartsNow : sumPartsTotal
    // and then mapped between 0 and the width
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];


      // The difference between excercise 8 and 9 is seen here
      // If a number between 0 and 1 randomly generated is less than 0.45
      // the tile will be drawn, if not then the background will take its place
      // meaning there will be 0.45 per cent of the screen covered in tiles statistically


      if (random() < 0.45) {
        var w = map(parts[ii], 0, sumPartsTotal, 0, width);
        // rowHeight * 1.5
        var h = rowHeight * 1.5;
        

        // coordinates for tiles
        var px1 = map(sumPartsNow, 0, sumPartsTotal, 0, width);
        var px2 = px1 + w;
        var py1 = rowHeight * i;
        var py2 = py1 + h;

        var index = counter % colorCount;
        // colour saved in array
        var col1 = color(hueValues[index], saturationValues[index], brightnessValues[index], alphaValue);
        // complementary colour
        var col2 = color(hueValues[index] - 180, saturationValues[index], brightnessValues[index], alphaValue);
        // shape drawn with gradient colour fill, gradient shades from center of tile outwards
        centerGradient(px1, py1, 0, px2, py2, max(w, h), col1, col2);
        // counter for incrementing colours
        counter++;
      }
    }
  }
}

function mouseReleased() {
  // pseudo random number generation when mouse is clicked 
  // this number is used to semi random tile widths
  actRandomSeed = random(100000);
  loop();
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      // color object
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}
```