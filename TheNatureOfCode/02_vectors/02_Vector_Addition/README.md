# Vector Addition

Each vector has an x and y value eg. xposition y position,  xwind y wind etc.
To add two vectors together we simply add the x and y values of the two vectors respectively.
(5, -2) + (5, 5) = (10, 3)

In the following program we can see that the position and velocity are stored as vectors and in the setup the vectors are instantiated.
These are the values of the vectors before the draw() function is called.

``` js

var position;
var velocity;

function setup () {
  createCanvas(640, 360);
  position = createVector(100, 100);
  velocity = createVector(2, 2);
}
```

Then in the draw() function we can see that the background and ball are drawn correctly, useing the x and y values of the vectors to get the x and y values of the ball's position and the ball's velocity. Also to note is the positon.add(velocity) line which is how we increase the balls velocity - or what direction it travels and at what speed. This is one of the functions vectors have to offer.

Each frame the balls position is determined by it's current position plus the velocity. The velocity may then change depending on whether or not it will hit the wills or not.

``` js

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
```

It is important to note that when we go to draw the ellipse, even though the position vector has two values, x and y, we must still refer to them individually like so: 

``` js
ellipse(position.x, position.y, 48, 48);
```

 Rather than:
``` js
ellipse(position, 48, 48);
```