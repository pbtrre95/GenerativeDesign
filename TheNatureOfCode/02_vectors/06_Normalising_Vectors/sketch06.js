function setup () {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  
  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);
  var vectorLine = mouse.sub(center);
  
  // Reduces the line to just it's direction of 1 length
  vectorLine.normalize();
  // Multiplies that length by 50
  vectorLine.mult(50);

  translate(width/2, height/2);
  stroke(255);
  strokeWeight(2);
  line(0, 0, vectorLine.x, vectorLine.y);
}