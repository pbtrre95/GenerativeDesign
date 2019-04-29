# Rotating Square Around Canvas

Previously working with spheres there is no way of telling if they are rotating as they look the same from every drawn angle. So with the four corners of a square we can see clearly if each corner is rotating corrrectly. 

So in this example we setup our canvas and draw where we will apply two forces, some wind and gravity to our mover object.

``` js
var mover;

function setup () {
  createCanvas(600, 600);
  mover = new Mover(random(10, 100));
}

function draw() {
  background(125);

  this.wind = createVector(0.02, 0);
  this.gravity = createVector(0, 0.2);
  
  mover.applyForce(wind);
  mover.applyForce(gravity);
  mover.checkEdges();
  mover.update();
  mover.display();
}
```

Then in our mover class we have our variables for location and acceleration and velocity but then we also have velocity and acceleration variables for the angle itself. This is how we generate the angle which the square will spin and also how quickly that angle will change.

This works exactly how we add our velocity to acceleration and to location normally of an object. So, we add the angular acceleration to the angular velocity, we constrain it in this case no more than (-0.05, 0.05), so it doesn't spin to fast, and then add this angular velocity to the angle itself.

``` js
var Mover = function() {
  this.location = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = 10;

  this.angle = 0;
  this.aVelocity = 0;
  this.aAcceleration = 0.00;

  
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);
    this.acceleration.mult(0);

    
    this.aAcceleration = this.velocity.x;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.05, 0.05);
    this.angle += this.aVelocity;
  }
```

Then within our display fucntion for the object, within the push and pop methods, we set our rectMode to CENTER. This ensures the square will spin around its middle, rather than spin around one of its corners, as if we were spinning the square around our finger. We translate to the location of the mover, then rotate on the angle and draw with respect to this new origin.