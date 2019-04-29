function setup() {
	createCanvas(400, 400);
	pixelDensity(1); //manages retina display
}

function draw() {
	loadPixels();

	for (var y = 0; y < height; y++) { //loop through each Y value
		for (var x = 0; x < width; x++) { //loop through each x value
			var index = (x + y * width) * 4 //use this formula to find index
			pixels[index + 0] = x;
			pixels[index + 1] = 255;
			pixels[index + 2] = y;
			pixels[index + 3] = 255;
		}
	}
	updatePixels();
}