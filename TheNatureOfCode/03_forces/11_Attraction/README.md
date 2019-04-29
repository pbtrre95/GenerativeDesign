# Attraction

## Gravitational Attraction

Every object with mass has a gravitational force that pulls on every other object. However it is due to Earth's size and mass which makes it's gravitational force overwhelm every other gravitational force. There is a formula for calculating an object's gravitational force.

``` js
F = (G x m1 x m2) / r2 
```

F refers to the force itself we want to find and pass to our applyForce() function.

G is the universal gravitational constant, which is 6.67428 x 10-11.

m1 and m2 are the masses of objects 1 and 2. As force is equal to mass x acceleration. We could ignore mass as shapes drawn on screen don't have mass but if we keep these values we can create different simulations for different sized objects. Bigger objects will create stronger gravitational forces than smaller ones. E.g Earth.

R refers to the unit vector pointing from object 1 to object 2. This can be gotten by subtracting the location of one object from the other.

r2 refers to the distance between the two objects squared. Everything on top of the formula... G, m1, m2 - the bigger its value the stronger the force. Big mass big force, big G big force. And when we divide by something we have the opposite. The strength of the force is inversely proportional to the distance squared. The farther away an object is, the weaker the force. The closer, the stronger.

## Attraction to an object example

First we create our attractor object class. Here we give it a location and a mass. We will set this to be 20 and it will be a larger mass than the mover object so we can recogonise the greater gravitational force exerted by larger masses.

``` js
var Attractor = function() {
  this.location = createVector(width/2, height/2);
  this.mass = 20;
  this.G = 1;

  this.display = function() {
    stroke(150);
    strokeWeight(2);
    fill(255, 0, 0, 0.15);
    ellipse(this.location.x, this.location.y, this.mass*2, this.mass*2);
  }
```

Here we will also include the calculations for the formula for getting the gravitational force. We will pass it the mover object to get the mover's information. This can be named anything as we pass it but here we will call it m. First we get subtract one vector from the other and then normalize this. This gets the direction of the attraction force that object 1 exerts on object 2 is equal to. 

Then we also need the distance between the objects. To get this we get the magnitude of the direction vector we just got. Then using our formula we get t he strength of the force being exerted by object 1 on object 2.

We multiply the strength by the direction to get our force to apply.

``` js 
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
 ```

 Then in our sketch we make the attractor object in the setup. Then in order for our attractor to receive the mover that will be attracted to it, we call the function as such: 

``` js 
  f = attractor.attract(mover);
```

f will be the new force (gravitational force) which we will pass to the mover's applyForce() function. The .attract() function is within the attractor class.


Finally there's one more thing to add to the attract() function. When we divide the top part of the formula by the distance squared, there is a chance we could be dividing by a distance that happened to be really small like 0.00001. That is the equivalent of multiplying that number by 1000000. This could make the mover being very close to the attractor and the force could become so strong the mover could just fly off the screen. So we can constrain the range of what the distance could be. E.g no more than less than 5 px or more than 25px away from the attractor.

This rule will work the same in the opposite direction where you are dividing by a huge number. 

``` js
distance = constrain(distance, 5, 25);
```