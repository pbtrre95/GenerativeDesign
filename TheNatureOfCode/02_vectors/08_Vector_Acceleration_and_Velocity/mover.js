
function Mover () {
  this.position = createVector(Math.floor(random(0, width)), Math.floor(random(0, height)));
  this.velocity = createVector(0, 0);
  this.acceleration = p5.Vector.random2D();

  this.render = function () {
    ellipse(this.position.x, this.position.y, 10, 10);
    fill(random(250, 255), random(250, 255), random(250, 255));
    noStroke();
  }

  this.update = function () {
    this.velocity.add(this.acceleration); 
    this.velocity.limit(10);  
    this.position.add(this.velocity);
    
    this.mouse = createVector(mouseX, mouseY);
    
    this.acceleration = p5.Vector.sub(this.mouse, this.position);
    this.acceleration.normalize();
  }

  this.checkLimits = function () {
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x = this.velocity.x * -1;
    }
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y = this.velocity.y * -1;
    }
  }
}