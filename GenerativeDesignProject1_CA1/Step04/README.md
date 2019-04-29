# Generative Design CA1

## Step 4

Creating random direction where pixels will colour the screen

```js
// Triangle
var num = 3;
// Random movers will move in certain directions
var xDirection = 0;
var yDirection = 0;

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

    // If the pixel is black 
    if (pixels[firstPixel] != 0) {
      // Four possible directions to the next pixel -up, down, left, right
      // Choose one at random
      var direction = Math.floor(random(0,4));
      // down
      if (direction = 0) {
        xDirection = 1;
        yDirection = 0;
      }
      // down
      else if (direction = 1) {
        xDirection = 0;
        yDirection = 1;
      }
      // left
      else if (direction = 2) {
        xDirection = -1;
        yDirection = 0;
      }
      // up
      else if (direction = 3) {
        xDirection = 0;
        yDirection = -1;
      }
    }
  }
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
}

// Reset canvas
function reset() {
  clear();

  // Triangle Shape
  if (num === 3) {
    background(0);
    stroke(255, 0, 0);
    beginShape(LINES);
      vertex(width/2, 437);
      vertex(310, 1311);
    endShape();
    stroke(0, 255, 0);
    beginShape(LINES);
      vertex(310, 1311);
      vertex(930, 1311);
    endShape();
    stroke(0, 0, 255);
    beginShape(LINES);
      vertex(930, 1311);
      vertex(width/2, 437);
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
    stroke(0, 255, 0);
    beginShape();
      vertex(930, 437);
      vertex(930, 1311);
    endShape();
    stroke(0, 0, 255);
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
    stroke(0, 255, 0);
    beginShape();
      vertex(1140, 645);
      vertex(930, 1311);
    endShape();
    stroke(0, 0, 255);
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
    stroke(0, 255, 0);
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
    stroke(0, 0, 25554);
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