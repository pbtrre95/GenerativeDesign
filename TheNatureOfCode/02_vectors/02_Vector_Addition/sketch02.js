var position;
var velocity;

function setup () {
  createCanvas(640, 360);
  position = createVector(100, 100);
  velocity = createVector(2, 2);
}

function draw() {
  background(51);
  
  // This is the only line of code that has differed from the previous code
  // This is one of the built in functions that can be used with vectors
  position.add(velocity);
 
  // If the ball hits the walls, it turns around
  if ((position.x > width) || (position.x < 0)) {
    velocity.x = velocity.x * -1;
  }
  if ((position.y > height) || (position.y < 0)) {
    velocity.y = velocity.y * -1;
  }
 
  // Display the circle at x  and y position
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(position.x, position.y, 48, 48);
}