# Forces - Wind

We draw a twenty ellipses on screen at random locations, they have a random radius size between 10 and 80. We will use their radius size as their masses. This is passed to the mover class as it creates an instance of the mover. To begin with, the mover object has no velocity or acceleration acting on it. Then in our sketch, a gravity vector is added to the acceleration each frame. We calculate gravity's effect on each mover by multiplying it's mass by 0.1. Therefore the larger movers will be quicker to fall downward.

``` js
var movers = [];
var numberOfMovers = 10;

function setup () {
  createCanvas(600, 600);
  for (var i=0; i < numberOfMovers; i++) {
    movers[i] = new Mover(random(10, 80));
  }
}

function draw() {
  background(125);

  for (var i = 0; i < numberOfMovers; i++) {
    this.gravity = createVector(0, 0.1 * movers[i].mass);

    movers[i].applyForce(gravity);
```

How we add our forces to acceleration is differently done in this sketch. The force gravity is passed to the applyForce function. Our formula for acceleration is:

``` js
force / mass = acceleration
  }
```

So, we use one of our p5 functions to divide the force passed(gravity) by the object's mass(passed in sketch), and then add our result to acceleration.
 
``` js
this.applyForce = function(force) {
    // var f is equal to force divided by mass to create acceleration
    // FORMULA
    var f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f);
  }
```

