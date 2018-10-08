'use strict';

var stepX=10;;
var stepY=15;;

function setup() {
    createCanvas(800, 400);
    colorMode(HSB, width, height, 100);
    //rectMode(CENTER);
    noStroke();
}

function draw() {
	stepX = mouseX/5 +1;
	stepY = mouseY/5 +1;
    for (var gridY = 0; gridY < height; gridY += stepY) {
        for(var gridX = 0; gridX < width; gridX += stepX) {
            fill(gridX, height - gridY, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}