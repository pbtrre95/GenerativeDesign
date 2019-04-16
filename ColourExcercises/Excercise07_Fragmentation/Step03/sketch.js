var actRandomSeed = 0; // pseudo random number generator init values
var colorCount = 20; // number of colours before pattern repeats
var hueValues = []; // array for random hues
var saturationValues = []; // array for random saturations
var brightnessValues = []; // array for random brightnesses

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
    for (var ii = 0; ii < parts.length; ii++) {
      sumPartsNow += parts[ii];

      var x = map(sumPartsNow, 0, sumPartsTotal, 0, width);
      var y = rowHeight * i;
      var w = -map(parts[ii], 0, sumPartsTotal, 0, width);
      var h = rowHeight;

      var index = counter % colorCount;
      var col = color(hueValues[index], saturationValues[index], brightnessValues[index]);
      fill(col);
      rect(x, y, w, h);

      counter++;
    }
  }
}

//When the mouse is released it sets another Color using the random set
function mouseReleased() {
  actRandomSeed = random(100000);
  loop();
}

//key pressed function to save the canvas as an image
function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == 'c' || key == 'C') {
    // -- save an ase file (adobe swatch export) --
    var colors = [];
    for (var i = 0; i < hueValues.length; i++) {
      colors.push(color(hueValues[i], saturationValues[i], brightnessValues[i]));
    }
    writeFile([gd.ase.encode(colors)], gd.timestamp(), 'ase');
  }
}