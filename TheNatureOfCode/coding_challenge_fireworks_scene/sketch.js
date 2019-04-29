var fireworks = [];
var cannon;
var gravity;
var yoff = 0;
// Colours 
var colours = [0, 175, 75, 35];

function setup() {
  createCanvas(800, 700);
  // colorMode(HSB);
  gravity = createVector(0, 0.2);
  noStroke();
  // strokeWeight(4);
  c = new Cannon();
}

function draw() {
	// colorMode(RGB);
	colorMode(HSB);
	background(204, 35, 153);

	fill(255);
  	noStroke();
  	// Moon 
  	ellipse(50, 50, 30, 30);
	// Each mountain drawn
	for (i = 1; i < 4; i++) {
		var xOff = 0;
		noStroke();
		beginShape();
		vertex(-50, 1280);
		// For the width of the screen draw this shape
		for (var x = 0; x < width; x++) {
			fill(colours[i]);
			// location of each mountain [i], xOff being the increment mapping noise values
			var yOff = map(noise(xOff, i), 0, 1, i * 100, 280);
			vertex(x, yOff);
			xOff += 0.005;	
		}
	  	vertex(1300, height);
	  	endShape();
  	}

	// Every frame there is a 10 per cent chance of firework being made
	if (random(1) < 0.1) {
		fireworks.push(new Firework(c.ang));
	}
	for (var i = fireworks.length -1; i >= 0; i--) {
		fireworks[i].update();
		fireworks[i].show();
		if (fireworks[i].done()) {
			// Remove firework
			fireworks.splice(i, 1);
		}
	}
	
	document.onkeydown = checkKey;
	function checkKey(e) {
	    e = e || window.event;
	    if (e.keyCode == '37') {
	       // left arrow
	       c.left();
	    }
	    else if (e.keyCode == '39') {
	       // right arrow
	       c.right();
	    }
	}

	push();
		fill(0);
		stroke(20);
	    //translate grid to center
	    translate(width/2, height);
	    //rotate grid 
	    rotate(c.ang);
	    //draw shapes from new origin
	    rectMode(CENTER);
	    rect(-30, 0, 60, 30);
	    ellipseMode(CENTER);
	    ellipse(0, 0, 50, 50);
	pop();
}