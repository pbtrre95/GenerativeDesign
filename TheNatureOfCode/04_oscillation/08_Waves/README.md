# Waves

We start with an angle of 0, an angle velocity of 0.2 and an amplitude of 100. We create a loop for every 24 pixels, and we then calculate the y location according to amplitude and sine of the angle, draw a circle at x,y and increment the angle according to angular velocity. The higher the angular velocity the shorter the period. The shorter the period the more difficult it is to make out the wave. 

We have a variable dedicated to tracking what value of the angle the wave should start with. This angle (startAngle) increments with its own angular velocity.

``` js
var startAngle = 0;
var angleVel = 0.1;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(125);

  startAngle += 0.02;
  var angle = startAngle;

  for (var x = 0; x <= width; x += 35) {
    var y = map(sin(angle), -1, 1, 0, height);
    stroke(0);
    fill(0);
    strokeWeight(2);
    ellipse(x, y, 48, 48)
    angle += angleVel;
  }
}
```