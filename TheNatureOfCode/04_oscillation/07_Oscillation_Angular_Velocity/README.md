# Oscillation with Angular Velocity

We will rewrite our cosine function. We will generate a random velocity between -0.05 and 0.05 and an amplitude within the height and width of the canvas. 

So each frame we get the Cartesian coordinates of the x and y using these random amplitudes and velocities and plot the oscillators. They will randomly oscillate, the greater the angular velocity the faster the oscillators will oscillate. 

In this examply we create an oscillator class and through a for loop create ten oscillators. 

``` js
var Oscillator = function() {
  this.angle = createVector();
  this.velocity = createVector(random(-0.05, 0.05), random(-0.05, 0.05));
  this.amplitude = createVector(random(20, width / 2), random(20, height / 2));

  this.oscillate = function() {
    this.angle.add(this.velocity);
  }

  this.display = function() {
    var x = sin(this.angle.x) * this.amplitude.x;
    var y = sin(this.angle.y) * this.amplitude.y;

    push();
        translate(width / 2, height / 2);
        stroke(255);
        strokeWeight(2);
        fill(127, 127);
        line(0, 0, x, y);
        ellipse(x, y, 32, 32);
    pop();
  }
}
```