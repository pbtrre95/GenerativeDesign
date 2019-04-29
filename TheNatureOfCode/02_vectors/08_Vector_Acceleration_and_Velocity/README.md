# Vector Acceleration

In addition to the velocity, we will also add acceleration to our mover object. The definition of acceleration is:
```
The rate of change of velocity.
```
Acceleration affects velocity, which in turn affects location. We create an acceleration vector in our mover class. We have no velocity at the beginning, then choose a random acceleration.

``` js
function Mover () {
  this.position = createVector(Math.floor(random(0, width)), Math.floor(random(0, height)));
  this.velocity = createVector(1, 1);

  this.render = function () {
    ellipse(this.position.x, this.position.y, 10, 10);
    fill(random(250, 255), random(250, 255), random(250, 255));
    noStroke();
  }
```

Then we add the acceleration vector to the velocity vector. We limit this to ten as to not to have too fast a velocity - too fast movers on the screen. We then add velocity to the position. We create a new mouse vector, getting the x and y coordinates of the mouse. We minus the mouse coordinates from the acceleration vector and normalise this. This sets the acceleration towards the mouse coordinates.


``` js
  this.update = function () {
    this.velocity.add(this.acceleration); 
    this.velocity.limit(10);  
    this.position.add(this.velocity);
    
    this.mouse = createVector(mouseX, mouseY);
    
    this.acceleration = p5.Vector.sub(this.mouse, this.position);
    this.acceleration.normalize();
  }

  this.checkLimits = function () {
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}
```