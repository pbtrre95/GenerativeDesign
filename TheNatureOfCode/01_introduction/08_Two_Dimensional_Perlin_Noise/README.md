# Two Dimensional Perlin Noise

This idea of noise values living in a one-dimensional space is important because it leads us right into a discussion of two-dimensional space. Let’s think about this for a moment. With one-dimensional noise, we have a sequence of values in which any given value is similar to its neighbor. Because the value is in one dimension, it only has two neighbors: a value that comes before it (to the left on the graph) and one that comes after it (to the right).

Two-dimensional noise works exactly the same way conceptually. The difference of course is that we aren’t looking at values along a linear path, but values that are sitting on a grid.

Think of a piece of graph paper with numbers written into each cell. A given value will be similar to all of its neighbors: above, below, to the right, to the left, and along any diagonal.

If you were to visualize this graph paper with each value mapped to the brightness of a color, you would get something that looks like clouds. White sits next to light gray, which sits next to gray, which sits next to dark gray, which sits next to black, which sits next to dark gray, etc.

This is why noise was originally invented. You tweak the parameters a bit or play with color to make the resulting image look more like marble or wood or any other organic texture.


## Pixel Array

The first four values of the pixel array count for RGBA values for the first pixel, the next four account for the RGBA values for the next pixel and so on. To find a specific index of one of the values we use the following formula :

``` js
(x + y * width) * 4;
```

By using this formula, we can plot the colors of each pixel on an entire canvas with simple code, in the following canvas, each pixel will be colored red. 

``` js

function setup() {
	createCanvas(400, 400);
	pixelDensity(1); //manages retina display
}

function draw() {
	loadPixels();

	for (var y = 0; y < height; y++) { //loop through each Y value
		for (var x = 0; x < width; x++) { //loop through each x value
			var index = (x + y * width) * 4 //use this formula to find index
			pixels[index + 0] = 255;
			pixels[index + 1] = 0;
			pixels[index + 2] = 0;
			pixels[index + 3] = 255;
		}
	}

	updatePixels();
}

``` 
## Using Noise to Create Cloud Effects

Colouring pixels in a random grayscale color, but using the Noise function to keep a more natural flow of whites to greys to blacks. As the frame redraws, each group of pixels choose grayscale colors with respect to the ones nearby. This keeps groups of pixels similar in color. The small incrementations keep the transition in colors smooth. 

``` js
var yOff = 1000;

function setup() {
	frameRate(5);
	createCanvas(400, 400);
	pixelDensity(1); //manages retina display
	noiseDetail(10);
}
```

The difference here with the two-dimensional Perlin Noise is that the noise() function takes two arguments(xOff, yOff) instead of one. This ensures that the colors are generated in the smooth manner in both the x direction and the y direction.

``` js
function draw() {
	loadPixels();

	for (var y = 0; y < height; y++) { //loop through each Y value
		var xOff = 100;
		for (var x = 0; x < width; x++) { //loop through each x value
			var index = (x + y * width) * 4 //use this formula to find index
			var bright = map(noise(xOff, yOff), 0, 1, 0, 255); //random color white to black
			pixels[index + 0] = bright;
			pixels[index + 1] = bright;
			pixels[index + 2] = bright;
			pixels[index + 3] = 255;

			xOff += 0.01;
		}
		yOff += 0.01;
	}
	updatePixels();
}
```
