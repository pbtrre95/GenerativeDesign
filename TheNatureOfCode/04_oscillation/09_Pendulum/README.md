# Pendulum

We pass two parameters for our pendulum, a place for the pendulum to begin at and a radius.

``` js
var p;

function setup() {
  createCanvas(640, 360);

  p = new Pendulum(createVector(width/2, 0), 175);
}

function draw() {
  background(255);
  p.go();
}
```

