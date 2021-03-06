var ParticleSystem = function (location) {
	this.origin = location.copy(0);
	this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
	this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
	for (var i = this.particles.length-1; i >= 0; i--) {
		var p = this.particles[i];
		p.run();
		if (p.isDead()) {
			this.particles.splice(i, 1);
		}
	}
};