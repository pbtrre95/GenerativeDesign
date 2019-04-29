var mover;
var liquid;

function setup () {
  createCanvas(600, 600);

  // new liquid parameters, x, y, w, h, c, r, g, b, o
  liquid = new Liquid (50, 50, 200, 200, 0.1, 0, 0, 255, 0.6);
  // new mover parameters, x, y, vx, vy, ax, ay, m
  mover = new Mover (0, 0, 3, 3, 1, 1, 20);
}

function draw() {
  background(255);

  liquid.display();

  if (liquid.contains(mover)) {
    var dragForce = liquid.calculateDrag(mover);
    mover.applyForce(dragForce);
  }

  mover.display();
  mover.update();
  mover.checkEdges();
}
