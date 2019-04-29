var movers = [];
var numberOfMovers = 10;

function setup () {
  createCanvas(600, 600);
  for (var i=0; i < numberOfMovers; i++) {
    movers[i] = new Mover(random(10, 80));
  }
}

function draw() {
  background(125);

  for (var i = 0; i < numberOfMovers; i++) {
    this.gravity = createVector(0, 0.1 * movers[i].mass);

    movers[i].applyForce(gravity);
    movers[i].checkEdges();
    movers[i].update();
    movers[i].display();
  }
}
