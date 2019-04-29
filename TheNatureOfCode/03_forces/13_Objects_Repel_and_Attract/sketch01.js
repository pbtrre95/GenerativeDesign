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