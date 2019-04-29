var movers = [];

function setup() {
    createCanvas(640, 640);
    for (var i=0; i < 2000; i++) {
      movers[i] = new Mover;
    }
}

function draw() {

  background(55);

  for (var i=0; i < 2000; i++) {
    movers[i].checkEdges();
    movers[i].update();
    movers[i].display();
  }
}