var windchimes = [];
var movers = [];

function setup() {
    createCanvas(640, 640);
    // x and y
    windchimes[0] = new WindChime(50, 50, 0.3, 0, 90);
    windchimes[1] = new WindChime(500, 500, 0.6, 180, 270);
    windchimes[2] = new WindChime(50, 500, 0.5, 270, 360);
    windchimes[3] = new WindChime(500, 50, 0.5, 360, 0);

    for (var j = 0; j < 1000; j++) {
    	movers[j] = new Mover(random(0, width), random(0, height), 0, 0, 0, 0, random(0, 10));
    }
}

function draw() {
	background(255);

	for (var y = 0; y < movers.length; y++) {
		for (var x = 0; x < windchimes.length; x++) {
			movers[y].applyForce(windchimes[x].windVec);
		}
		movers[y].display();
		movers[y].update();
		movers[y].checkEdges();
	}
	
	for (var x = 0; x < windchimes.length; x++) {
		windchimes[x].update();
		windchimes[x].display();
	}
}