function Particle(x, y, hu, firework) {
	this.position = createVector(x, y);
	this.firework = firework;
	// Fade out lifespan
	this.lifespan = 255;
	this.hu = hu;
	// If true returned
	if (this.firework) {
	// How high the fireworks will reach determined by this 
	this.velocity = createVector(0, random(-12, -8));
	}
	else {
		// Random direction
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