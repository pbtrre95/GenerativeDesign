function setup () {
  createCanvas(640, 360);
}

function draw() {
  background(51);
  
  // Built in functions to recognise mouse coordinates
  var mouse = createVector(mouseX, mouseY);
  var center = createVector(width/2, height/2);
  var vectorLine = mouse.sub(center);
  
  var m = vectorLine.mag();
  fill(255);
  stroke(0);
  // Use the length of the magnitude of our vectorLine to create a new rectangle every frame starting at 0,0
  rect(0, 0, m, 10);

  translate(width/2, height/2);
  stroke(255);
  strokeWeight(2);
  line(0, 0, vectorLine.x, vectorLine.y);
}