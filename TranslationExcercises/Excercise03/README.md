# Translation Excercises

## Excercise 3

```js
let numOfTiles = 30;
let tileWidth;
let angle = 30;
let actRandomSeed = 1000;
let actStrokeCap;

// SVG image 
function preload() {
  let shapes = [];
  shapes.push(loadImage('image.svg'));
}

// Setup canvas
function setup() {
  canvas = createCanvas(600, 600);
  angleMode(DEGREES);
  tileWidth = width / numOfTiles;
  background(255);
  actStrokeCap = ROUND;
}
// Draw function
function draw() {
  clear();
  strokeCap(actStrokeCap);
  randomSeed(actRandomSeed);

  // For each tile
  for (i = 0; i < numOfTiles; i++) {
    for (ii = 0; ii < numOfTiles; ii++) {
      // Get the angle to the mouse
      angle = atan2(mouseY - (i * tileWidth) / (ii * tileWidth));
      // Where svg is located
      var posX = tileWidth * i + tileWidth / 2;
      var posY = tileWidth * ii + tileWidth / 2;

      fill(0);
      push();
        // Each svg in center of tile will point towards the mouse
        image(shapes[0], 20, 20, 50, 50);
        line(shapes[0], 0, 50, 50);
        translate(i * tileWidth + tileWidth / 2, ii * tileWidth  + tileWidth / 2);
        rotate(angle);
        var toggle = Math.floor(random(2));
        line(-tileWidth / 2, tileWidth/2, tileWidth / 2, -tileWidth / 2);
      pop();
    }
  }
};
// Create new position
function mousePressed() {
  actRandomSeed = random(100000);
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}
```