function setup () {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  
  // Built in functions to recognise mouse coordinates
  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);
  var vectorLine = mouse.sub(center); // = ((480-320), (90-180) = (160, -90))

  // Moves line to begin at center of canvas
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(2);
  line(0, 0, vectorLine.x, vectorLine.y);
}