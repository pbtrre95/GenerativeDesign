var movers = [];
var numberOfMovers = 10;

function setup () {
  createCanvas(600, 600);
  for (var i=0; i < numberOfMovers; i++) {
    movers[i] = new Mover(random(10, 100));
  }
}

function draw() {
  background(125);

  for (var i = 0; i < numberOfMovers; i++) {
    this.wind = createVector(0.0, 0);
    this.gravity = createVector(0, 0.1 * movers[i].mass);

    var c = 0.5; //coefficient of friction, the larger this is the stronger surface friction
    //ice would be a low c
    var normal = 1; //normal force applied by the surface it hits, perpendicular force
    var frictionMag = c * normal; //magnitude of friction
    var friction = p5.Vector.mult(movers[i].velocity, -1);
    friction.normalize();
    friction.mult(frictionMag);


    movers[i].applyForce(friction);
    movers[i].checkEdges();
    movers[i].update();
    movers[i].display();
  }
}
