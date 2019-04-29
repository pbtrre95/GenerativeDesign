# Vector Subtraction

Subtraction works in the same way as addition in that if you want to subtract one vector from another you minus the x and y coordinates respectively.
(5, -2) - (5, 5) = (0, -7)

In the following program we can see that the position of the mouse is stored aswell as the center of the canvas - both as vectors. 

The center coordinates are subtracted from the mouse coordinates to give a lines endpoint coordinates. The startpoint is then given to be 0,0 the top left hand corner of the canvas, but this is then translated to the center. On each frame that is drawn, a line is drawn from the center to the mouse coordinates as a result. 

The .sub function is a way of subtracting vector coordinates from one and other. 

``` js

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
```