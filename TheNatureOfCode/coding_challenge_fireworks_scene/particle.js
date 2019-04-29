function Particle(x, y, hu, firework, angle) {
	// Function for mapping one set of numbers to another set of numbers
	Number.prototype.map = function (in_min, in_max, out_min, out_max) {
	  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
	}
	this.angle = angle;

	// Map cannon angles to x velocity of fireworks shoooting out
	var ang = this.angle.map(45.05, 46.05, -7, 7);
	this.position = createVector(x, y);
	this.firework = firework;
	// Fade out lifespan
	this.lifespan = 255;
	this.hu = hu;
	// If this is a firework
	if (this.firework) {
		// How high the fireworks will reach determined by this 
		this.velocity = createVector(ang, random(-18, -14));
	}
	// If this is a particle
	else {
		// Random direction of blasted particles
		this.velocity = p5.Vector.random2D();
		// Causes explosion to burst out
		this.velocity.mult(random(2, 10));
	}
	this.acceleration = createVector(0, 0);

	// Force accumulation
	this.applyForce = function(force) {
		this.acceleration.add(force);
	}

	this.update = function() {
		var ang = this.angle.map(44.05, 46.05, -7, 7);
		if (!this.firework) {
			// Speed of firework
			this.velocity.mult(0.9);
			// Reduces each frame
			this.lifespan -= 4;
		}
		this.velocity.add(this.acceleration);
		this.position.add(this.velocity)
		// Starts acceleration at zero
		this.acceleration.mult(0);
	}

	this.done = function() {
		if (this.lifespan < 0) {
			return true;
		}
		else {
			return false;
		}
	}

	this.show = function() {
		// If this is a particle
		if (!this.firework) {
			strokeWeight(2);
			// Stroke is lifespan, will reduce each frame
			stroke(hu, 255, 255, this.lifespan);
		}
		else {
			strokeWeight(4)
			stroke(hu, 255, 255);
		}
		point(this.position.x, this.position.y);
	}
}