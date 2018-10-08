# Generative Design

## Excercise 3


```js
'use strict';
var segmentCount = 360;

function setup() {
    createCanvas(800, 400);
    colorMode(HSB, 360, 100, 100);
    noStroke();
}

function draw() {
	console.log(mouseY);
	var angleIncrement = 360 / segmentCount;
	var radius = 200;
	
	beginShape(TRIANGLE_FAN);
		vertex(width/2, height/2);
		for(var angle = 0; angle <= 360; angle += angleIncrement) {
			var vx = radius * cos(radians(angle)) + width/2;
			var vy = radius * sin(radians(angle)) + height/2;
			vertex(vx, vy);
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
}```
