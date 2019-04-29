// One particle, will make up many particles or a system
function Firework() {
	// Random hue
	this.hu = random(255);
	this.firework = new Particle(random(width), height, this.hu, true);
	this.exploded = false;
	this.particles = [];

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
		if (!this.exploded) {
			this.firework.applyForce(gravity);
			this.firework.update();
			// If this firework is going downwards then explode
			if (this.firework.velocity.y >= 0) {
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
			var p = new Particle(this.firework.position.x, this.firework.position.y, this.hu, false);
			// Add these particles to the particles array
			this.particles.push(p);
		}
	}

	this.show = function() {
		colorMode(HSB);
		if (!this.exploded) {
			this.firework.show();
		}
		for (var i = 0; i < this.particles.length; i++) {
			this.particles[i].show();
		}
	}
}
