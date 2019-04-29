# Vector Velocity

## Velocity vectors are directions and instructions on how a mover moves to it's next location.

So in our mover class, we describe a mover which will move around the screen. It has a random position vector, a velocity vector which gives it a speed and direction to move in. For each mover, a circle is drawn filled in white with no stroke.

``` js
function Mover () {
  this.position = createVector(Math.floor(random(0, width)), Math.floor(random(0, height)));
  this.velocity = createVector(1, 1);

  this.render = function () {
    ellipse(this.position.x, this.position.y, 10, 10);
    fill(random(250, 255), random(250, 255), random(250, 255));
    noStroke();
  }
```

Then we create an update function so with each frame we call this function and the velocity of the mover is added to the position. This causes the mover to move in the direction the velocity states with each frame. If the mover hits the walls of the canvas the velocity will be multiplied by -1, to turn the mover around in the opposite direction. 


``` js
  this.update = function () {
    this.velocity.limit(10);  
    this.position.add(this.velocity);
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
```
Here, there is an array of movers created and a canvas of 600 x 600 pixels. Ten movers are created. Then, a backgorund is drawn each frame, and each mover is drawn, updated in position which has been added to velocity. The limits of the canvas are also checked. 
``` js
var movers = [];

function setup () {
  createCanvas(600, 600);
  for (i = 0; i < 10; i++){
    movers[i] = new Mover();
  }
}

function draw() {
  background(0);
  for (i = 0; i < 10; i++){
    movers[i].render();
    movers[i].update();
    movers[i].checkLimits();
  }
}
```