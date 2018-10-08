# Generative Design

## Step 1

```js
'use strict';

var img;

function preload() { // function runs and code runs after the image is loaded
  img = loadImage('data/pic1.jpg');
}

function setup() {
  createCanvas(600, 600);
  noCursor();
  noStroke();

  // Useful function to stop loop function of the draw function
  noLoop();
}

function draw() {
  // Loads the image into the pixel[] array
  img.loadPixels();
  console.log(img.pixels[0]); // Retrieves the information of the first color in the pixel array

  console.log(img.pixels);
}
```