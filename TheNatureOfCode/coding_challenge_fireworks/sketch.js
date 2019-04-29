var fireworks = [];
var gravity;

function setup() {
  createCanvas(800, 300);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
	colorMode(RGB);
	background(255, 25);
	// Every frame there is a 10 per cent chance of firework being made
	if (random(1) < 0.1) {
		fireworks.push(new Firework());
	}
	for (var i = fireworks.length -1; i >= 0; i--) {
		// fireworks[i].cannon();
		fireworks[i].update();
		fireworks[i].show();
		if (fireworks[i].done()) {
			// Remove firework
			fireworks.splice(i, 1);
		}
	}
}