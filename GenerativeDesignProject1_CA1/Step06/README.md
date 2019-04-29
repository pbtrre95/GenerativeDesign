# Generative Design CA1

## Step 6

Changing the colour scheme of the first triangle

```js
// Triangle
var num = 3;
// Random movers will move in certain directions
var xDirection = 0;
var yDirection = 0;

// Range number for color change of second pixel
var range = 30;

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

        var noiseR = map(noise(firstPixelR), 0, 1, -range, range);
        var noiseG = map(noise(firstPixelG), 0, 1, -range, range);
        var noiseB = map(noise(firstPixelB), 0, 1, -range, range);

        var secondPixelR = firstPixelR + noiseR;
        var secondPixelG = firstPixelG + noiseG;
        //var secondPixelB = firstPixelB + noiseB;
        
        // Random colours within the given range
        // Set second black pixel RGB coordinates to similar color to first pixel
        //var secondPixelR = parseInt(firstPixelR + random(-range, range));
        //var secondPixelG = parseInt(firstPixelG + random(-range, range));
        var secondPixelB = parseInt(firstPixelB + random(-range, range));

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

  // Triangle
  if (key == '3') {
    num = 3;
    reset();
  }

  // Square
  if (key == '4') {
    num = 4;
    reset();
  }
  // Pentagon
  if (key == '5') {
    num = 5;
    reset();
  }
  // Hexagon
  if (key == '6') {
    num = 6;
    reset();
  }

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
}

// Reset canvas
function reset() {
  clear();

  // Triangle Shape
  if (num === 3) {
    background(0);
    stroke('pink');
    beginShape(LINES);
      vertex(width/2, 437);
      vertex(310, 1311);
    endShape();
    stroke('orange');
    beginShape(LINES);
      vertex(310, 1311);
      vertex(930, 1311);
    endShape();
    stroke('red');
    beginShape(LINES);
      vertex(930, 1311);
      vertex(width/2, 437);
    endShape(CLOSE);
    stroke(125, 50, 200);
    beginShape(LINES);
      vertex(width/2, 470);
      vertex(330, 1290);
    endShape();
    stroke(100, 255, 255);
    beginShape(LINES);
      vertex(330, 1290);
      vertex(900, 1290);
    endShape();
    stroke(50, 0, 220);
    beginShape(LINES);
      vertex(900, 1290);
      vertex(width/2, 470);
    endShape();
  }

  // Square Shape
  if (num === 4) {
    background(0);
    stroke(255, 0, 0);
    beginShape();
      vertex(310, 437);
      vertex(930, 437);
    endShape();
    stroke(125, 255, 0);
    beginShape();
      vertex(930, 437);
      vertex(930, 1311);
    endShape();
    stroke(80, 0, 255);
    beginShape();
      vertex(930, 1311);
      vertex(310, 1311);
    endShape();
    stroke(255, 255, 0);
    beginShape();
      vertex(310, 1311);
      vertex(310, 437);
    endShape(CLOSE);
  }

  // Pentagon Shape
  if (num === 5) {
    background(0);
    stroke(255, 0, 0);
    beginShape();
      vertex(width/2, 347);
      vertex(1140, 645);
    endShape();
    stroke(100, 255, 0);
    beginShape();
      vertex(1140, 645);
      vertex(930, 1311);
    endShape();
    stroke(15, 0, 255);
    beginShape();
      vertex(930, 1311);
      vertex(310, 1311);
    endShape();
    stroke(255, 255, 0);
    beginShape();
      vertex(310, 1311);
      vertex(100, 645);
    endShape();
    stroke(255, 255, 0);
    beginShape();
      vertex(100, 645);
      vertex(width/2, 347);
    endShape(CLOSE);
  }

  // Hexagon Shape
  if (num === 6) {
    background(0);
    stroke(255, 0, 0);
    beginShape();
      vertex(width/2, 347);
      vertex(1140, 523);
    endShape();
    stroke(100, 255, 0);
    beginShape();
      vertex(1140, 523);
      vertex(1140, 1225);
    endShape();
    stroke(255);
    beginShape();
      vertex(1140, 1225);
      vertex(width/2, 1401);
    endShape();
    stroke(255, 255, 0);
    beginShape();
      vertex(width/2, 1401);
      vertex(100, 1225);
    endShape();
    stroke(50, 0, 255);
    beginShape();
      vertex(100, 1225);
      vertex(100, 523);
    endShape();
     stroke(150, 125, 0);
    beginShape();
      vertex(100, 523);
      vertex(width/2, 347);
    endShape(CLOSE);
  }
}
```