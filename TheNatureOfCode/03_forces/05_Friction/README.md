# Friction

## Friction is a dissipative force. This is a force that decreases the total energy of an object when it is in motion.

For example, when driving a car, and you place your foot on the brake pedal, the car's brakes use friction to slow down the motion of the tires. Kinetic energy (motion) is converted into thermal energy (heat). When two surfaces come into contact with one and other, they create friction. A complete model of friction would include static friction (a body at rest against a surface) and kinetic friction (a body in motion against a surface). 

``` js
Friction = -1 * μ * N * v;
````

This formula can be seperated into two components, magnitude and direction. Friction points in the opposite direction to velocity. This is the part of the formula that says -1 multiplied by v or -1 times the velocity unit vector. In programming this would involve taking the velocity vector, normalizing it and multiplying it by -1.

``` js
friction.normalize();
friction.mult(-1);
```

So this gives us the direction of the friction force. This would occur in the sketch.js file. The magnitude is μ * N. The Greek letter μ here is called the coefficient of friction. This establishes the strength of a friction force for a particular surface. The higher the coefficient of friction the stronger the surfaces friction force. A block of ice's friction force will be much smaller than a carpet. For example lets say our coefficient of friction is 0.5;

``` js
float c = 0.5;
```

Part N refers to the normal force, the force perpendicular to the objects motion along the surface. This is when a ball pushes down to on the ground due to gravity, the force reflected by the ground, is the normal force. The greater the gravitational force the greater the normal force. For now our normal force will be 1 which can be explained why later.

``` js
float normal = 1;
```

Now we can put it all together:

``` js
float c = 0.5; //coefficient of friction
float normal = 1; //normal force, reflected force
float frictionMag = c * normal; //magnitude of friction

friction.mult(-1);
friction.normalize();

friction.mult(frictionMag);
```

In this sketch, the balls will travel the screen until the friction force will slow them down into static positions.