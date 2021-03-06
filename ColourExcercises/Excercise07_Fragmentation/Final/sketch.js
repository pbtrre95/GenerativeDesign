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

  // ------ colors ------
  // create palette
  // for the number of colours in the array
  for (var i = 0; i < colorCount; i++) {
    // important switch trick
    // for every second colour, choose from these hsb values
    if (i % 2 == 0) {
      hueValues[i] = random(130, 220);
      saturationValues[i] = 100;
      brightnessValues[i] = random(15, 100);
    }
    // else choose from these hsb values
    else {
      hueValues[i] = 195;
      saturationValues[i] = random(20, 40);
      brightnessValues[i] = 100;
    }
  }

    // ------ area tiling ------
  // variable to count tiles
  var counter = 0;
  // row count and row height - random number of rows between 5 and 30
  var rowCount = Math.floor(Math.random() * 10) + 5; 
  console.log("rowCount", rowCount);
  var rowHeight = height / rowCount;

  
  // ------ code for fragmenting parts into smaller parts -------
  /* // seperate each line into parts
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
    }*/

  // for each row 
  for (var i = rowCount; i >= 0; i--) {
    var partCount = i + 1;
    var parts = [];

    // for each row populate that row with the same number of parts eg. second row two parts
    // this parts array is renewed for each row here
    for (var ii = 0; ii < partCount; ii++) {
            // push the parts to the array
            parts.push(Math.random() * 10) + 2;
    }
    
    // sum total of all the parts in the array
    var sumPartsTotal = 0;
    for (var ii = 0; ii < partCount; ii++) {
      sumPartsTotal += parts[ii];
    }


    var sumPartsNow = 0;
    // this loops through each row, for each row's parts array
    // somePartsNow will act as part to be drawn
    // in a ratio of sumPartsNow : sumPartsTotal
    // and then mapped between 0 and the width
    for (var j = 0; j < parts.length; j++) {
      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      // rowHeight * i just moves down each row
      var y = rowHeight * i;
      // w will draw each part of the row using the width of the part
      var w = map(parts[j], 0, sumPartsTotal, 0, width);
      var h = rowHeight;
      
      // increments with every new tile drawn, new colour every tile, repeats when colors are finished
      var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      // draw tiles
      rect(x, y, w, h);
      console.log('x', x, 'y', y, 'w', w, 'h', h);

      console.log('sumPartsNow', sumPartsNow);
      sumPartsNow += parts[j];
      console.log('sumPartsNow', sumPartsNow);
      // Adding one to the counter
      counter++;
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