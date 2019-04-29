// position, initial velocity, initial acceleration, mass
var Mover = function(x, y, vx, vy, ax, ay, m) {
  this.location = createVector(x, y);
  this.velocity = createVector(vx, vy);
  this.acceleration = createVector(ax, ay);
  this.mass = m;
  
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.velocity.limit(10);
    this.acceleration.mult(0);
  }
  
  this.display = function() {
    stroke(150);
    strokeWeight(2);
    fill(255, 0, 0, 50);
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
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
}