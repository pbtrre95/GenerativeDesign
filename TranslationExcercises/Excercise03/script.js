let numOfTiles = 30;
let tileWidth;
let angle = 30;
let actRandomSeed = 1000;
let actStrokeCap;

function preload() {
  let shapes = [];
  shapes.push(loadImage('image.svg'));
}

function setup() {
  canvas = createCanvas(600, 600);
  angleMode(DEGREES);
  tileWidth = width / numOfTiles;
  background(255);
  actStrokeCap = ROUND;
}

function draw() {
  clear();
  strokeCap(actStrokeCap);
  randomSeed(actRandomSeed);

  for (i = 0; i < numOfTiles; i++) {
    for (ii = 0; ii < numOfTiles; ii++) {
      angle = atan2(mouseY - (i * tileWidth) / (ii * tileWidth));
      
      var posX = tileWidth * i + tileWidth / 2;
      var posY = tileWidth * ii + tileWidth / 2;

      fill(0);
      push();
        image(shapes[0], 20, 20, 50, 50);
        line(shapes[0], 0, 50, 50);
        translate(i * tileWidth + tileWidth / 2, ii * tileWidth  + tileWidth / 2);
        rotate(angle);
        var toggle = Math.floor(random(2));
        //if (toggle == 0) {
          //strokeWeight(mouseX / 20);
          line(-tileWidth / 2, tileWidth/2, tileWidth / 2, -tileWidth / 2);
        //}
        //else {
          //strokeWeight(mouseY / 20);
          //line(-tileWidth / 2, -tileWidth / 2, tileWidth / 2, tileWidth / 2);
       // }
      pop();
    }
  }
};

function mousePressed() {
  actRandomSeed = random(100000);
}

function keyReleased() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');

  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}