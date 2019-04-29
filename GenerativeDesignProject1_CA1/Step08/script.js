// Colour Shade
var num = 0;
// Random movers will move in certain directions
var xDirection = 0;
var yDirection = 0;

// Range number for color change of second pixel
var range = 5;

// Random hue
var rand = Math.floor(Math.random() * 255) + 200;  // returns a random integer from 200 to 255

// Tetradic Colors Plugin
var scheme = new ColorScheme;
  scheme.from_hue(rand) // Start the scheme using random hue
  .scheme('tetrade') // Tetradic - four equal points on the color wheel
  .variation('hard'); // 
// Convert from scheme into colours usable for styling - tetradic colours
var tetColors = scheme.colors();

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
        
        // Noise values 
        var secondPixelR = Math.min(Math.max(parseInt(firstPixelR + map(noise(firstPixelR), 0, 1, -range, range), 10), 1), 255);
        var secondPixelG = Math.min(Math.max(parseInt(firstPixelG + map(noise(firstPixelG), 0, 1, -range, range), 10), 1), 255);
        var secondPixelB = Math.min(Math.max(parseInt(firstPixelB + map(noise(firstPixelB), 0, 1, -range, range), 10), 1), 255);

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
}

function mouseClicked() {
  reset();
}

// Reset canvas
function reset() {
  clear();
  background(0);

  function coloursArray() {
    var colours = [];
    // First colour
    var a = color(floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255))); 
    var b = color(a.levels[0], a.levels[2], a.levels[0]);
    var c = color(a.levels[2], a.levels[2], a.levels[0]);
    // Array of triadic colours
    colours.push(a, b, c);

    // Draw the letter to the screen
    var font = 'Calibri';
    var fontSize = 275;
    textFont(font)
    textSize(fontSize);
    textAlign(CENTER, CENTER);
    fill(255);
    stroke(colours[0]);
    text("GD", width/2, height/2);

    // Inner circle to outer circle
    var c1 = 1;
    // Circle width
    var c2 = width/2;
    noFill();
    ellipseMode(CENTER);
    // First inner circle
    // stroke(colours[0]);
    // ellipse(width/2, height/2, c1 - c2, c1 - c2);
    // // First outer circle
    // stroke(colours[1]);
    // ellipse(width/2, height/2, c1 + c2, c1 + c2);
    // Second inner circle
    stroke(colours[0]);
    ellipse(width/2, height/2, c1 + c2 + width/4, c1 + c2 + width/4);
    // Second outer circle
    stroke(colours[1]);
    ellipse(width/2, height/2, c2 + width/4 - c1, c2 + width/4 - c1);
    // Top left
    stroke("#" + tetColors[0]);
    ellipse(0, 0, c2, c2);
    stroke("#" + tetColors[3]);
    ellipse(0, 0, c2 - c1, c2 - c1);
    // Top right
    stroke("#" + tetColors[4]);
    ellipse(width, 0, c2, c2);
    stroke("#" + tetColors[7]);
    ellipse(width, 0, c2 - c1, c2 - c1);
    // Bottom right
    stroke("#" + tetColors[8]);
    ellipse(width, height, c2, c2);
    stroke("#" + tetColors[11]);
    ellipse(width, 0, c2 - c1, c2 - c1);
    // Bottom left
    stroke("#" + tetColors[12]);
    ellipse(0, height, c2, c2);
    stroke("#" + tetColors[16]);
    ellipse(0, height, c2 - c1, c2 - c1);
  }
  coloursArray();
}