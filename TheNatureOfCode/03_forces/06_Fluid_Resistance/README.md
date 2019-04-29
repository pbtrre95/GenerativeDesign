# Liquid Resistance

As our movers hit a liquid, they will experience drag. The formula for drag force is coefficient * speed * speed. Our coeffiecient in this example is 0.5.

``` js
function draw() {
  background(0);

  for (var i = 0; i < numberOfMovers; i++) {
    this.wind = createVector(0, 0);
    this.gravity = createVector(0, 0.1 * movers[i].mass);

    var c = 0.5;
    var speed = p5.Vector.mag(movers[i].velocity);
    var dragMagnitude = c * speed * speed;
    var drag = p5.Vector.mult(movers[i].velocity, -1);
    drag.normalize();
    drag.mult(dragMagnitude);

    if (movers[i].location.y > height/2) {
        movers[i].applyForce(drag);
    }

    movers[i].checkEdges();
    movers[i].update();
    movers[i].display();
  }
}

````

So as our movers hit a certain point in the screen, e.g. where our water is suppose to begin, they will experience the drag force.