# Vector Multiplication and Division

With multiplication of vectors we have to think differently, we consider it scaling.

Here, we use the mult() function which is one of our new vector functions, to multiply another vector or scale another vector either eg. by 2 (two times it's size) or eg. by 0.5 (half its size). In turn, this is how we divide also. 

In the following code, we are taking our mouse coordinates on the canvas, minus the canvas center, and then halving that in two (multiplying it by 0.5). This reduces the line we are drawing from the center to the mouse coordinates half in size.  


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
  // Taking our result from mouse coordinates minus the center and then halving it
  vectorLine.mult(0.5);

  // Moves line to begin at center of canvas
  translate(width/2, height/2);
  stroke(255);
  strokeWeight(2);
  line(0, 0, vectorLine.x, vectorLine.y);
}
```