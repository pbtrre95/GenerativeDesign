# Liquid Experiment

In this example, we require a mover class and also a liquid class. Liquid is a section of the canvas where drag force will be applied to the mover. The liquid has a location, size and friction coefficient, colours and opacity. These parameters will be passed to the liquis as it is created in setup.

``` js
var mover;
var liquid;

function setup () {
  createCanvas(600, 600);

  // new liquid parameters, x, y, w, h, c, r, g, b, o
  liquid = new Liquid (50, 50, 200, 200, 0.1, 0, 0, 255, 0.6);
  // new mover parameters, x, y, vx, vy, ax, ay, m
  mover = new Mover (0, 0, 3, 3, 1, 1, 20);
}

````

A function named contains will return coordinates. These coordinates will be used by the mover, when the mover is 'contained' within these coordinates the force will be applied. The calculateDrag function will return a friction force - the liquids drag force.

``` js
this.contains = function(m) {
        return m.location.y > this.location.y 
        && m.location.y < this.size.y + this.size.y && m.location.x > this.location.x 
        && m.location.x < this.location.x + this.size.x;
    }

    this.calculateDrag = function(m) {
        var speed = m.velocity.mag();
        var dragMagnitude = this.coefDrag * speed * speed;

        var dragForce = p5.Vector.mult(m.velocity, -1);

        dragForce.normalize();
        dragForce.mult(dragMagnitude);
        return dragForce;
    }
```

Then in our sketch, we call the contains function which returns coordinates, if the mover is within these coordinates then the function operates. This function will then call the calculateDrag function and get the force that is returned. This will be applied to the mover.  