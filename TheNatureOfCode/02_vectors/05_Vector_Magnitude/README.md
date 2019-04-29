# Vector Magnitude

To figure out the length of a vector also (known as magnitude) we use the mag() function. We know the components (x and y). The right triangle created by the coordinates eg. 3 units in the x direction and 4 units in the y direction, with a third side, a hypotenuse of an unknown length. 

Pythagoras' Theroem can be used to get the third side or magnitude of the vector. Or instead of doing that maths we can use mag() to figure it.


``` js

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
```