var Attractor = function() {
  this.location = createVector(width/2, height/2);
  this.mass = 20;

  this.display = function() {
    stroke(150);
    strokeWeight(2);
    fill(255, 0, 0, 0.15);
    ellipse(this.location.x, this.location.y, this.mass*2, this.mass*2);
  }

  this.attract = function(m) {
    var direction = p5.Vector.sub(this.location, m.location)
    var distance = direction.mag();

    distance = constrain(distance, 5, 25);

    //get the unit vector 
    direction.normalize();

    var strength = (this.G * this.mass * m.mass) / (distance * distance);

    direction.mult(strength);

    return direction;
  }
}