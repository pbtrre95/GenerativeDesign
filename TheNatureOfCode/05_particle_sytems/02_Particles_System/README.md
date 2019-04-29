# Particle Systems

This is a term used in programming to represent fuzzy environments, many particles that together represent a fuzzy object. Over time the particles are generated into a system. Animations, digital art pieces, installations to model various irregular types of natural phenomena, fire smoke waterfalls fog grass bubbles etc.

We start with a single particle and its class. It will have location, velocity, acceleration, display functions and update functions.

``` js
var Particle;
 
function setup() {
  createCanvas(640,360);
  p = new Particle(createVector(width/2, 10));
}
 
function draw() {
  background(100);
  p.run();
  if (p.isDead()) {
    console.log("Particle dead!");
  }
}
```

We first declare the particle like we would with our mover. We create an instance of a Particle named p and pass with it a vector where the particle's initial location will be. 

Then in the draw we call on to methods, run() which will update and display the particles location, we could just call update and display independantly but this calls them both at the same time, and then when it is called we have an if statement which checks if isDead() returns a true value then log to the console that the particle has died.

This will be recorded by a variable named lifespan. The lifespan variable will decrement the longer the lifespan of the particle. 

``` js
var Particle = function (location) {
	this.acceleration = createVector(0, 0.05);
	this.velocity = createVector(random(-1, 1), random(-1, 0));
	this.location = location.copy();
	this.lifespan = 255.0;
```

The velocity is chosen at random initially and the acceleration is in the downward direction to reflect gravity. The location will be copied from the location passed in the setup. The lifespan will act as the gauge of how long the particle has survived and also will be used for the opacity of the particle so the longer it lives the less opaque it becomes.

``` js
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
```

The lifespan will decrement -2 each frame. The run function is the one we call in the draw(). Finally in the isDead() function if the lifespan reduces past 0 it will be declared dead and return true which is used to console.log "Particle dead!". 

``` js
Particle.prototype.isDead = function() {
	    if (this.lifespan < 0.0) {
	      return true;
	    } else {
      		return false;
    	}
  	}
```
 This will be our starting particle to use in our particle system.
