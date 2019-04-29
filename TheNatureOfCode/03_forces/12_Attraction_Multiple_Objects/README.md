# Attraction of Multiple Objects

So here the difference is created in the setup and draw. We have 80 movers with random heights and locations and masses. Each one is passed to the attract()function in the attractor object's class. This is no different to the last example with how one mover object is attracted to the attractor. Also the attractor display() function is called outside of the for loop.

``` js
var movers = [];
var attractor;
var num = 80;

function setup() {
    createCanvas(640, 640);
    for (var i = 0 ; i < num ; i++) {
      movers[i] = new Mover(random(5), random(10), random(1,3));
    }
    attractor = new Attractor;
}

function draw() {
  background(55);

  for (var i = 0 ; i < num ; i++) {
    var f = attractor.attract(movers[i]);

    movers[i].applyForce(f);
    movers[i].checkEdges();
    movers[i].update();
    movers[i].display();
  }
  attractor.display();
}
```