# Forces - Wind & Gravity Multiple Objects

We draw ten movers and with the same method add both wind and gravity vectors each frame to the acceleration, the forces are passed through the applyForce function in the mover class. 

``` js
function draw() {
  background(0);

  for (var i = 0; i < numberOfMovers; i++) {
    this.wind = createVector(0.1, 0);
    this.gravity = createVector(0, 0.1 * movers[i].mass);
    
    movers[i].applyForce(wind);
    movers[i].applyForce(gravity);
    movers[i].checkEdges();
    movers[i].update();
    movers[i].display();
  }
}
```