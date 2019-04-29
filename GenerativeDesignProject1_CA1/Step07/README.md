# Generative Design CA1

## Step 7

Adding the generative design logo on screen

```js
// Triangle
var num = 3;
// Random movers will move in certain directions
var xDirection = 0;
var yDirection = 0;

// Range number for color change of second pixel
var range = 15;

var RGBvalue = 1;

function setup() {
  canvas = createCanvas(1240, 1748);
  pixelDensity(1);
  reset();
}

function draw() {
  loadPixels();
  // Choose 100000 random points on screen
  for (var randomPoints = 0; randomPoints < 100000; randomPoints++) {
    // Get their coordinates
    var firstPixelX = Math.floor(random(0, width));
    var firstPixelY = Math.floor(random(0, height));

    // Locate that coordinates pixel location in the pixel array
    // Using pixel formula and get the RED value for each pixel by multplying by 4
    var firstPixel = (firstPixelX + firstPixelY * width) * 4;

    // If the pixel is not black, i.e there are some value in the R value
    if (pixels[firstPixel] != 0) {
      // Four possible directions to the next pixel -up, down, left, right
      // Choose one at random
      var direction = Math.floor(random(0, 4));
      //console.log(direction);
      // down
      if (direction === 0) {
        xDirection = 1;
        yDirection = 0;
      }
      // down
      if (direction === 1) {
        xDirection = 0;
        yDirection = 1;
      }
      // left
      if (direction === 2) {
        xDirection = -1;
        yDirection = 0;
      }
      // up
      if (direction === 3) {
        xDirection = 0;
        yDirection = -1;
      }

      // Second pixel from first pixel coordinates and the random direction
      var secondPixelX = firstPixelX + xDirection;
      var secondPixelY = firstPixelY + yDirection;
      // Second pixel 
      var secondPixel = (secondPixelX + secondPixelY * width) * 4;
      // If second pixel is within the canvas and black
      if ((secondPixelX > 0) && (secondPixelY > 0) && (secondPixelX < height-1) && (secondPixelY < height-1) && pixels[secondPixel] == 0) {
        // Get first pixel RGB values using pixel array locations
        var firstPixelR = pixels[firstPixel];
        var firstPixelG = pixels[firstPixel + 1];
        var firstPixelB = pixels[firstPixel + 2];

        // Mapping noise RGB values to range
        var noiseR = map(noise(firstPixelR), 0, 1, -range, range);
        var noiseG = map(noise(firstPixelG), 0, 1, -range, range);
        var noiseB = map(noise(firstPixelB), 0, 1, -range, range);
        
        var secondPixelR = Math.min(Math.max(parseInt(firstPixelR + random( -range, range),10), 1), 255);
        var secondPixelG = Math.min(Math.max(parseInt(firstPixelG + random( -range, range),10), 1), 255);
        var secondPixelB = Math.min(Math.max(parseInt(firstPixelB + random( -range, range),10), 1), 255);

        //var secondPixelR = parseInt(firstPixelR + noiseR);
        //var secondPixelG = parseInt(firstPixelG + noiseG);
        //var secondPixelB = parseInt(firstPixelB + noiseB);
        
        // Random colours within the given range
        // Set second black pixel RGB coordinates to similar color to first pixel
        //var secondPixelR = parseInt(firstPixelR + random(-range, range));
        //var secondPixelG = parseInt(firstPixelG + random(-range, range));
        //var secondPixelB = parseInt(firstPixelB + random(-range, range));

        // Change the second pixel RGBA values
        pixels[secondPixel] = secondPixelR;
        pixels[secondPixel + 1] = secondPixelG;
        pixels[secondPixel + 2] = secondPixelB;
        pixels[secondPixel + 3] = 255;
      }
    }
  }
  updatePixels();
}

function keyReleased() {
  // save as PNG
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  // // Triangle
  // if (key == '3') {
  //   num = 3;
  //   reset();
  // }

  // // Square
  // if (key == '4') {
  //   num = 4;
  //   reset();
  // }
  // // Pentagon
  // if (key == '5') {
  //   num = 5;
  //   reset();
  // }
  // // Hexagon
  // if (key == '6') {
  //   num = 6;
  //   reset();
  // }

  // RGB Values 
  if (key == 'r' || key == 'R') {
    RGBvalue = 1;
  }

  if (key == 'g' || key == 'G') {
    RGBvalue = 2;
  }

  if (key == 'b' || key == 'B') {
    RGBvalue = 3;
  }

  if (key == '5') sortMode = null;
  if (key == '6') sortMode = gd.HUE;
  if (key == '7') sortMode = gd.SATURATION;
  if (key == '8') sortMode = gd.BRIGHTNESS;
  if (key == '9') sortMode = gd.GRAYSCALE;
}

// Reset canvas
function reset() {
  clear();
  background(0);
  // Draw the letter to the screen
  var font = 'Calibri';
  var fontSize = 275;
  textFont(font)
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  fill(255);
  // stroke(255, 200, 0);
  text("GD", width/2, height/2);

  var c1 = 1;// distance from inner to outer circle
  var c2 = width/2;
  noFill();
  ellipseMode(CENTER);
  stroke('#8800FF');
  ellipse(width/2, height/2, c1-c2, c1 - c2);
  stroke('#FF8800');
  ellipse(width/2, height/2, c1 + c2, c1 + c2);
}
```