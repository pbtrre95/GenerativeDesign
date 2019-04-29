var yOff = 10000;

function setup() {
	frameRate(5);
	createCanvas(400, 400);
	pixelDensity(1); //manages retina display
	noiseDetail(10);
}

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