# Normalising Vectors

Normalizing involes making something "standard" or normal. Assume a vector has the standard length of 1, to normalise a vector therefore, is to take a vector of any length and keeping it pointing in the same direction, change its length to 1, turning it into what is called a unit vector. Keeping the direction but normalising it to eg. one or a unit vector.

It describes the direcction without regards to its length, its useful to have the unit vector readily available. 

To normalise a vector, divide each component (x and y) by its magnitude (mag()).
A vector of length 5, 5 divided by 5 is 1. So our right triangle will then need to scale the hypotenuse down by dividing by 5. The sides shrink divided by 5 also.

In the following code, we have our vectorLine coordinates which are the result of the mouse coordinates minus the center coordinates. This is then normalized with normalize() function to 1 unit and then multiplied using mult() function. This keeps the vectorLine at the same length of 50 at all times. Good way of keeping a constant value.

``` js

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
```