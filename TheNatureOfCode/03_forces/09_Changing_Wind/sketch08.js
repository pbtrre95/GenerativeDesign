var wind;
var angle;
var time = 1000;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  angle = map(noise(time), 0, 1, 0, 90); // angle of line smoothly changes
  wind = p5.Vector.fromAngle(radians(angle)); // creates vector from angle
  console.log(wind);
  wind.mult(100); // extends line
  line(0, 0, wind.x, wind.y); // coordinates of 
  time += 0.001;
}