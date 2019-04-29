var movers = [];
var numberOfMovers = 20;
var liquid;

function setup () {
  createCanvas(600, 600);

  // new liquid parameters, x, y, w, h, c, r, g, b, o
  liquid = new Liquid (50, 50, 200, 200, 0.1, 0, 0, 255, 0.6);
  // new mover parameters, x, y, vx, vy, ax, ay, m
  for (var i = 0; i < numberOfMovers; i ++) {
    movers[i] = new Mover (random(0, width), random(0, height), random(0, 50), random(0, 50), 1, 1, 20);
  }
}

function draw() {
  background(255);

  liquid.display();

  for (var i = 0; i <numberOfMovers; i++){
    if (liquid.contains(movers[i])) {
      console.log("The mover is inside the liquid john");
      var dragForce = liquid.calculateDrag(movers[i]);
      movers[i].applyForce(dragForce);
    }

    movers[i].display();
    movers[i].update();
    movers[i].checkEdges();
  }
}
