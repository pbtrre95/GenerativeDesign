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