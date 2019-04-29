# Perlin Noise

Good random number generators have no relationship to one another and show no patterns. Perlin Noise is different in that randomness is not the single guiding principle for generating natural numbers.

Perlin Noise is used to generate various effects with natural qualities in computer generated effects. Noise function produces a more naturally ordered ("smooth") sequence of events rather than a randomly generated distribution of numbers. 

Processing has a built-in implementation of the Perlin noise algorithm: the function noise(). The noise() function takes one, two, or three arguments, as noise is computed in one, two, or three dimensions.

With noise() the output range is fixed - a value is returned between 0 and 1. The noise function is passed a moment in time and returns a corresponding value between 0 and 1.

Eg.
``` js
var x = map(noiseT, 0, 1, 0, width);
```
In this case, the noise has a range between 0 and 1, but we'd like to draw a circle with a range between 0 and the window's width. 

Eg.

Here the background is redrawn every frame with a reduced opacity so the trail of the balls being draw can be seen
``` js
function draw() {
	fill(0, 15); //draws black rectangle with 15% opacity every frame, creating trail effect
	rect(0, 0, width, height);
	walker.step();
	walker.render();
}
```

Random number is chosen between 0 and 1000, representing time. Ellipse starts in middle of canvas.

``` js
function Walker() {
	this.x = width/2; //starts in middle of canvas
	this.xOff = random(1000); //random number between 0 and 1000, represents time
	//calling the noise function returns a value between 0 and 1

	this.render = function() { //no stroke pen with a 50% opacity
		noStroke();
		fill(255, 45, 0, 50);
		ellipse(this.x, 500, 40, 40);
	}
```
The noise() function is used with mapping or map() function. This is to get around the fixed values of a number between 0 and 1. Mapping function takes 5 arguments. 

1. The value we want to map, a time
2. Current Range - minimum
3. Current Range - maxium
4. Desired Range - minimum
5. Desired Range - maximum

Map knows 0-1 is current range, changing range to 0-width. Random number between 0 and 1000 passed to noise function to give smooth results. Small increments give smooth transitions. 

``` js
	this.step = function() {
		//using randomly generated number between 0 and 1000, chooses new location on x axis
		//does this by getting Noise value of a new x location
		//noise ensures the pattern is nice and smooth
		this.x = map(noise(this.xOff), 0, 1, 0, width);
		//maps it to between 0 and the width
		this.xOff += 0.005; //increment time xOff, the smaller the increment, the less noticeable jump in values
	}
}
```
