# Angles to Radians

Processing requires angles to be specified in radians. A radian is a unit of measurement for angles. 180 degrees = PI radians, 360 degrees = 2PI radians, etc.

To convert from degrees to radians is:

``` js
radians = 2 * PI * (degrees / 360)
```

The radians() function will automatically convert an angle into radians.
In our first example, we will draw a baton with two spheres at each end which will spin. 

We first set up our canvas and then in the draw() we will draw the background. Then we will declare ur stroke and fill details. 

``` js
var angle = 0;
var aVelocity = 0; 
var aAcceleration = 0.001;

function setup () {
  createCanvas(640, 480);
}

function draw () {
  background(220);

  stroke(0);
  fill(127);
```

Then importantly we include our rotation code within push() and pop() methods. This will ensure that only the shapes included within this code are rotated. If we had other shapes we did not want to rotate we would leave their code outside of the push and pop methods. 

``` js
push();
  //translate grid to center
    translate(width/2, height/2)
    //rotate grid 
    rotate(angle);
    //draw shapes from new origin
    line(-60, 0, 60, 0);
    ellipse(60, 0, 16, 16);
    ellipse(-60, 0, 16, 16);
  pop();
```

Then within these methods we will translate the entire grid to the center of the canvas - where we want our baton to be drawn. This ensures that we actually notice the shape rotating on the page rather than the whole canvas rotating and us noticing no difference. We rotate the grid to the correct angle and draw our shapes with respect to this new origin.

``` js
//how fast the angle will change, spindle will move
  aVelocity = aVelocity + aAcceleration;

  //0.1 is six degrees, six degrees is the max it can move in one frame 
  aVelocity = constrain(aVelocity, 0, 0.5);
  angle = angle + aVelocity;
}
```

Initially we set our acceleration to be 0.001. This will be added to the velocity each frame and it will rotate faster and faster. The angle will get larger and larger as it jumps each frame. However with the constrain function we will limit the velocity to 0.5 so that it is not unnecessarily fast.