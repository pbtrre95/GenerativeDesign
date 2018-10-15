# Generative Design

## Step 1

```js
'use strict';

var tileCountX = 50; // 50 tiles across
var tileCountY = 10; // 10 tiles down

var hueValues = []; // Between 0 and 360
var saturationValues = []; // Between 0 and 100
var brightnessValues = []; // Between 0 and 100


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();

  // init with random values 
  // for each number of tiles across the width of the screen
  for (var i = 0; i < tileCountX; i++) {
    // 50 hues, saturations and brightnesses
    hueValues[i] = random(360);
    saturationValues[i] = random(100);
    brightnessValues[i] = random(100);
  }
}

function draw() {
  
}
```