# Attracted to Mouse

In our mover class is where all the work will occur for finding the angle to send the movers to the mouse coordinates. Firstly we get our mouse coordinates and store those as a vector. We then subtract this vector from the location vector of the mover. By normalising this vector we then get just the direction of which the mover points to the mouse in a unit vector. 

``` js
var Mover = function () {
    this.position = createVector(random(width), random(height));
    this.velocity = createVector(0, 0);
    this.acceleration = 0;
    this.topspeed = 4;

    this.update = function () {
        var mouse = createVector(mouseX, mouseY);
        //subtract from mouse the position of the object
        var dir = p5.Vector.sub(mouse, this.position);
        //to get unit vector
        dir.normalize(); 
        dir.mult(0.001);
```

We then multiply this by 0.01. Why we do this is because when we add this direction to the acceleration, by lessening its value it will make the mover move slower towards our mouse. The lower this value the slower the mover will be to move towards the mouse.

``` js
dir.mult(0.001); 
        //to extend slightly, these last two lines of code effectively slow down the object
        this.acceleration = dir;
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.topspeed);
        this.position.add(this.velocity);
    };
```

Then we make this value our acceleration and add this acceleration to the velocity of the mover. We limit the velocity of the mover to our topspeed which is set at 4. Finally we add the velocity to the mover's location. 

In the display function we worry about the actual rotation of the movers. We will point them towards the direction of the mouse. 


    this.display = function () {
      var angle = this.acceleration.heading();
        stroke(0);
        strokeWeight(2);
        fill(127);
        push();
          translate(this.position.x, this.position.y);
          rotate(angle);
          rect(0, 0, 9, 3.5);
        pop();
    };


As our acceleration vector stores the direction that we have generated from subtracting the mouse location vector from the movers location vector. We use heading() which is a p5 function that will just return the 2D direction angle in radians of any vector. Within our push and pop methods we translate the grid to the locations of the mover, we rotate the grid and draw the mover at the new origin.

