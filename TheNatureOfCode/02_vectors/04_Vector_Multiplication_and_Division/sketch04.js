function setup () {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  
  // Built in functions to recognise mouse coordinates
  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);
  var vectorLine = mouse.sub(center);
  // Taking our result from mouse coordinates minus the center and then halving it
  vectorLine.mult(0.5);

  // Moves line to begin at center of canvas
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(2);
  line(0, 0, vectorLine.x, vectorLine.y);
}