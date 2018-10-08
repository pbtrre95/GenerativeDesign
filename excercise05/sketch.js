'use strict';

var colorsLeft = [];
var colorsRight = [];
var randomColor; //creates a global variable
var numOfRows = 2;
var numOfCols = 2;

function setup() {
    createCanvas(800, 800);
    colorMode(HSB);
    noStroke();
}

function draw() {
	numOfRows = mouseX / 5 + 1;
	numOfCols = mouseY / 5 + 1;
	var tileWidth = width / numOfCols;
	var tileHeight = height / numOfRows;

	for (var gridY = 0; gridY < numOfCols; gridY++) {
		var col1 = colorsLeft[gridY];
		var col2 = colorsRight[gridY];

		for (var gridX = 0; gridX < numOfRows; gridX++) {
			var amount = map(gridX, 0, 15, 0, 1);

			var startColor = colorsLeft[gridY];
			var endColor = colorsRight[gridY];

			fill(lerpColor(startColor, endColor, amount));

			var posX = tileWidth * gridX;
			var posY = tileHeight * gridY;

			rect(posX, posY, tileWidth, tileHeight);
		}
	}
	colorShake();
}

function colorShake() {
	colorsLeft = [];
	colorsRight = [];
	for (var i = 0; i < numOfRows; i++) {
		randomColor = color(random(0, 360), random(0, 100), random(0, 100));
		//color() is a p5 function that needs to be used within setup() or draw()
		colorsLeft.push(randomColor);
	}
	for (var i = 0; i < numOfCols; i++) {
		randomColor = color(random(0, 360), random(0, 100), random(0, 100));
		//color() is a p5 function that needs to be used within setup() or draw()
		colorsRight.push(randomColor);
	}
	console.log(colorsLeft, colorsRight);
}