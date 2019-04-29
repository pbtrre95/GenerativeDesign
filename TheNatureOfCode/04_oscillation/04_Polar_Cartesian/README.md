# Polar to Cartesian Coordinates

When we display a shape at x and y coordinates, these pixel locations are known as the Cartesian coordinates. Polar coordinates describes a point given by an angle of rotation from the origin and a radius or distance from that origin.

When we think about this in terms of a vector:

Cartesian coordinate would be the x and y components of a vector.
Polar coordinate would be the magnitude (length) of the vector and the direction (angle) of a vector.

In programming we convert our Polar coordinates into Cartesian coordinates (x, y). Trigonometry allows this. So for example, if we have a radius length 75, and an angle of 45 degrees (theta), we will use SOC CAH TOA to decide which x, and y side of the triangle created by the vector.

E.g

``` js
float r = 75;
float theta = PI / 4;
float x = r * cos(theta);
float y = r * sin(theta);
```

So in our example of how to use cartesian coordinates, we have a spinning pendulum. Var r is our radius and var theta will be our angle. We start our angle off at 0 and increment it each frame by 0.02. The radius will be 0.45 / 1 of the height. This wont change.

``` js
var r;
var theta;

function setup() {
    createCanvas(640, 360);
    r = height * 0.45;
    theta = 0;
}
```

We translate our pendulum to the center of the screen. Draw the ellipse's center at the end of the line. Our x and y coordinates for the line and ellipse will be gotten from x and y sides of the triangle created by the vector. 

``` js
function draw() {
    background(51);

    translate(width / 2, height / 2);

    var x = r * cos(theta);
    var y = r * sin(theta);

    ellipseMode(CENTER);
    fill(125);
    stroke(125);
    strokeWeight(2);
    line(0, 0, x, y);
    ellipse(x, y, 48, 48);

    theta += 0.02;
}
```