# Generative Design

## Excercise 2

```js
var stepX;
var stepY;

function setup() {
    createCanvas(500, 500);
    colorMode(HSB, width, height, 100);
    noStroke();
}

function draw() {
    stepX = mouseX + 2; 
    stepY = mouseY + 2;
    
    if (mouseX >= 0 && mouseY >= 0) { 
        // Ensures when mouse goes outside of canvas with minus coordinates, program doesnt break
        for (var gridX = 0; gridY < height; gridY += stepY) {
            for(var gridY = 0; gridX < width; gridX += stepX) {
                // The lower the x and y coordinates of the mouse, the larger amount of rectangles that are fit into the canvas, the further down the canvas the lower the saturation becomes
                fill(gridX, height - gridY, 100);
                rect(gridX, gridY, stepX, stepY);
            }
        }
    }
}
```