# Multiple Objects Repel & Attract Each Other
In this example, we have multiple movers that attract each other. Here we will keep our attract function but place it in the mover object. So we create a loop, for every mover i, update and display yourself. Then for every mover i be attracted to every other mover j and update and display yourself. We do this in a nested second loop.

``` js
var movers = [];
var attractor;
var num = 80;
var g = 0.4;

function setup() {
    createCanvas(640, 640);
    for (var i = 0 ; i < num ; i++) {
      movers[i] = new Mover(random(0.1, 2), random(width), random(height));
    }
}

function draw() {
  background(55);

  for (var i = 0 ; i < num; i++) {
    for (var j = 0 ; j < num ; j++) {
      if (i != j) {
        var f = movers[j].attract(movers[i]);
        movers[i].applyForce(f);
      }
    }
    movers[i].checkEdges();
    movers[i].update();
    movers[i].display();
  }
}
```

We include a condition so that the mover is never attracted to itself.