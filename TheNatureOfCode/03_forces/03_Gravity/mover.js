var Mover = function(m) {
  this.location = createVector(random(0, width), random(0, height));
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = m;
  
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);
    // between 0 and 1, the closer to one, the quicker the acceleration
    this.acceleration.mult(0.9);
  }


  this.display = function() {
    ellipse(this.location.x, this.location.y, this.mass, this.mass);
    fill(255, 125, 0);
    strokeWeight();
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
    // var f is equal to force divided by mass to create acceleration
    // FORMULA
    var f = p5.Vector.div(force, this.mass)
    this.acceleration.add(f);
  }
}