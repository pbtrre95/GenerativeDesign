# Oscillation

y = sine(x)

This is the sine function where on a graph between -1 and 1 y values, a smooth curve occurs. This is known as oscillation. A periodic movement between two points. For example, this could be described like plucking a guitar swing, swinging pendulum, bouncing on a pogo stick. These are oscillating motion.

So we can demonstrate these exaples by assinging the output of the sine function to an object's location.

## Simple Harmonic Motion

This is where a pendulum oscillates from the left side to the right side of the canvas. 

### Amplitude 

The distance from the center of motion to either extreme

### Period

The amount of time it takes for one complete cycle of motion

In our example amplitude will be 1 and the period is TWO_PI, the output of sine never rises above 1 or below -1 and every TWO_PI radians (or 360 degrees)  the wave pattern repeats.

Amplitude can be measured easily in pixels. We can oscillate the pendulum from the center 100 pixels to the right and 100 pixels to the left. 

Period is the time for one cycle. This will be measured in frames for us. E.g every 30, 50 or 1000 frames etc.

We need a formula to calculate x as a function of time.

``` js
float x = amplitude * cos(TWO_PI * frameCount / period);
```

We multiply the cosine function by amplitude. Cosine will oscillate between -1 and 1. We get that value and multiply it by the amplitude and then we get the desired result. 

Inside the cosine function, cosine repeats after every 2PI radians, 120 frames will be our repeating time or period. So for every 120 frames we want 2PI radians.

``` js
function draw() {
  background(51);

  var period = 120;
  var amplitude = 300;

  var x = amplitude * cos(TWO_PI * frameCount / period);

  stroke(255);
  strokeWeight(2);
  fill(127);
  translate(width / 2, height / 2);
  line(0, 0, x, 0);
  ellipse(x, 0, 48, 48);
}
```

### Frequency

The number of cycles per time unit. Frequency is equal to 1 divided by period. If the period is 120 frames, then only 1/120th of a cycle is completed in one frame, and so frequency = 1/120. 