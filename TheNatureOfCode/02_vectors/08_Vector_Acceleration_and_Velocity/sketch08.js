var movers = [];

function setup () {
  createCanvas(600, 600);
  for (i = 0; i < 10; i++){
  	movers[i] = new Mover();
  }
}

function draw() {
  background(0);
  for (i = 0; i < 10; i++){
	  movers[i].render();
	  movers[i].update();
	  movers[i].checkLimits();
	}
}
