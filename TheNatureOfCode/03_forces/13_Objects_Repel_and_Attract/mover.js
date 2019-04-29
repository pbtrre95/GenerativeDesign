var Mover = function(m) {
  this.location = createVector(random(0, width), random(0, height));
  this.velocity = createVector(random(0, 1), random(0, 1));
  this.acceleration = createVector(0, 0);
  this.mass = 10;
  var G = 1;
  
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

  this.display = function() {
    stroke(150);
    strokeWeight(2);
    fill(255, 0, 0, 0.15);
    ellipse(this.location.x, this.location.y, this.mass, this.mass);
  }

  this.checkEdges = function() {
    if (this.location.x > width || this.location.x < 0 ) {
      this.velocity.x = this.velocity.x * -1
    }
    if (this.location.y > height || this.location.y < 0 ) {
      this.velocity.y = this.velocity.y * -1
    }
  }

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f);
  }

  this.attract = function(m) {
    var direction = p5.Vector.sub(this.location, m.location)
    var distance = direction.mag();

    distance = constrain(distance, 5.0, 25.0);

    //get the unit vector 
    direction.normalize();

    var strength = (this.G * this.mass * m.mass) / (distance * distance);

    direction.mult(strength);

    return direction;
  }
}