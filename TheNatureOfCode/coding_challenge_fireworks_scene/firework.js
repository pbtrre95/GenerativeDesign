// One particle, will make up many particles or a system
function Firework(angle) {
	// Random hue
	this.angle = angle;
	// Only move angle between these values
	this.ang = constrain(this.angle, 45.05, 46.05);
	this.hu = random(255);
	this.firework = new Particle(width/2, height, this.hu, true, this.angle);
	this.lifespan = 255;
	this.exploded = false;
	this.particles = [];

	this.left = function() {
		this.angle = this.angle -= 0.1;
		this.ang = constrain(this.angle, 45.05, 46.05);
	}

	this.right = function() {
		this.angle = this.angle += 0.1;
		this.ang = constrain(this.angle, 45.05, 46.05);
	}

	this.done = function() {
		// If exploded is true and there are no particles in the particles array
		if (this.exploded && this.particles.length === 0) {
			return true;
		}
		else {
			return false;
		}
	}

	this.update = function() {
		// Reduce firework life
		this.lifespan -= 4;
		if (!this.exploded) {
			this.firework.applyForce(gravity);
			this.firework.update();
			if (this.lifespan <= 0) {
				// Explode firework
				this.exploded = true;
				this.explode();
			}
		}

		// Looping through system of particles, loop backwards, take particles from back of list of particles
		for (var i = this.particles.length - 1; i >= 0; i--) {
			// Ensures each particle experiences gravity and updates
			this.particles[i].applyForce(gravity);
			this.particles[i].update();

			if (this.particles[i].done()) {
				// Deletes this particle from the array
				this.particles.splice(i, 1);
			}
		}
	}

	this.explode = function() {
		// Create this many particles
		for (var i = 0; i < 100; i++) {
			// Start at fireworks center
			var p = new Particle(this.firework.position.x, this.firework.position.y, this.hu, false, this.angle);
			// Add these particles to the particles array
			this.particles.push(p);
		}
	}

	this.show = function() {
		if (!this.exploded) {
			// Keep firework visible
			this.firework.show();
		}
		for (var i = 0; i < this.particles.length; i++) {
			// Create particles
			this.particles[i].show();
		}
	}
}
