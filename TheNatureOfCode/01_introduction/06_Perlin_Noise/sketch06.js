var walker;
var noOfWalkers;

function setup() {
	createCanvas(1200, 1000);
	noOfWalkers = 10;
	walkers = [];	
	for (i = 0; i < noOfWalkers; i++) {
		walkers[i] = new Walker();
	}
	background(127);
}

function draw() {
	fill(0, 15); //draws black rectangle with 15% opacity every frame, creating trail effect
	rect(0, 0, width, height);
	for (i = 0; i < noOfWalkers; i++) {
		walkers[i].step();
		walkers[i].render();
	}
}

function Walker() {
	this.position = createVector(width/2, height/2);
	this.noff = createVector(random(1000), random(1000));

	this.render = function() { //no stroke pen with a 50% opacity
		noStroke();
		fill(255, 45, 0, 50);
		ellipse(this.position.x, this.position.y, map(noise(this.noff.x), 0, 1, 20, 200),
			map(noise(this.noff.x), 0, 1, 20, 200));
	}

	this.step = function() {
		this.position.x = map(noise(this.noff.x), 0, 1, 0 - 200, width + 200);
		this.position.y = map(noise(this.noff.y), 0, 1, 0 - 200, height + 200);
		this.noff.add(0.005, 0.005);
		}
}