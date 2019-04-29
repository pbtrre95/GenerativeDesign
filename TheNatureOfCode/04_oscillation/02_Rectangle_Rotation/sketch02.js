var mover;

function setup () {
  createCanvas(600, 600);
  mover = new Mover(random(10, 100));
}

function draw() {
  background(125);

  this.wind = createVector(0.02, 0);
  this.gravity = createVector(0, 0.2);
  
  mover.applyForce(wind);
  mover.applyForce(gravity);
  mover.checkEdges();
  mover.update();
  mover.display();
}
