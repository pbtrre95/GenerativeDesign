'use strict';
var segmentCount = 360; 
// How the image will be divided up into segments

function setup() {
    createCanvas(800, 400);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
	var angleIncrement = 360 / segmentCount; 
    // Each incremement will be where a new colour starts
	var radius = 200; // Size of the image 
	
	beginShape(TRIANGLE_FAN);
    // Beginning of triangle fan starts in center of canvas
		vertex(width/2, height/2);
        // Each triangle is drawn in this case 360 times (segmentCount)
		for(var angle = 0; angle <= 360; angle += angleIncrement) {
            // Angle is incremented 360 times and found using soh and cah
			var vx = radius * cos(radians(angle)) + width/2;
			var vy = radius * sin(radians(angle)) + height/2;
            // each new vertex is drawn
			vertex(vx, vy);
            // angle out of 360 for hue is used as colour
			fill(angle, 100, 100);
		}
	endShape();
}

function keyPressed() {
	if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
	// Reduced number of segments means less vertices and less colours
	switch (key) {
		case '1':
			segmentCount = 360;
			break;
		case '2':
			segmentCount = 192;
			break;
		case '3':
			segmentCount = 96;
			break;
		case '4':
			segmentCount = 48;
			break;
		case '5':
			segmentCount = 6;
			break;
	}
}