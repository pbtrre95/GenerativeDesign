# Forces - Gravity

We draw an ellipse at a location (30, 30), with no velocity or acceleration currently happening on the object. In our move class we have an applyForce function, where each frame the a force is applied to the mover's acceleration which is then added to the velocity each frame.

``` js
var Mover = function() {
  this.location = createVector(30, 30);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  this.applyForce = function(force) {
    this.acceleration.add(force);
  }
```

Then in our sketch, we pass the wind vector that we declare to the applyForces function which is called each frame. Each frame the wind will be added to the acceleration of the mover - in this case in the right direction. We also have a gravity vector which is effecting the downward push on the object. These are both added to the velocity via the applyForce function in the mover class.


``` js
var mover;

function setup () {
  createCanvas(600, 600);
  mover = new Mover(random(10, 100));
}

function draw() {
  background(125);

  this.wind = createVector(0.02, 0);
  this.gravity = createVector(0, 0.1);
  
  mover.applyForce(wind);
  mover.applyForce(gravity);
  mover.checkEdges();
  mover.update();
  mover.display();
}
```

