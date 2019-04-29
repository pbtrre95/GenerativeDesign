var Mover = function() {
  this.location = createVector(0, 0);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
  this.mass = 10;

  this.angle = 0;
  this.aVelocity = 0;
  this.aAcceleration = 0.00;

  
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(10);
    this.location.add(this.velocity);
    this.acceleration.mult(0);

    
    this.aAcceleration = this.velocity.x;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.05, 0.05);
    this.angle += this.aVelocity;
  }

  this.display = function() {
    stroke(150);
    strokeWeight(2);
    fill(255, 0, 0, 0);

    push();
      rectMode(CENTER);
      translate(this.location.x, this.location.y);
      rotate(this.angle);
      rect(0, 0, 10 * this.mass, 10 * this.mass);
    pop();
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
    this.acceleration.add(force);
  }
}