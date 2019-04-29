var Particle = function (location) {
	this.acceleration = createVector(0, 0.05);
	this.velocity = createVector(random(-1, 1), random(-1, 0));
	this.location = location.copy();
	this.lifespan = 255.0;

	Particle.prototype.update = function() {
		this.velocity.add(this.acceleration);
		this.location.add(this.velocity);
		this.lifespan -= 2.0;
	}

	Particle.prototype.run = function() {
		this.update();
		this.display();
	}

	Particle.prototype.display = function() {
		stroke(255, this.lifespan);
		strokeWeight(2);
		fill(175, this.lifespan);
		ellipse(this.location.x, this.location.y, 12, 12);
	}

	Particle.prototype.isDead = function() {
	    if (this.lifespan < 0.0) {
	      return true;
	    } else {
      		return false;
    	}
  	}
}