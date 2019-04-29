var mover;
var attractor

function setup() {
    createCanvas(640, 640);
    mover = new Mover;
    attractor = new Attractor;
}

function draw() {

  background(55);


  f = attractor.attract(mover);

  attractor.display();

  mover.applyForce(f);
  mover.checkEdges();
  mover.update();
  mover.display();
}