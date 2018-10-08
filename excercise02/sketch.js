function setup() {
    createCanvas(500, 500);
    colorMode(HSB, width, height, 100);
    //rectMode(CENTER);
    noStroke();
}

function draw() {
    fill(360, 100, 100);
    numOfCols = mouseX + 1;
    numOfRows = mouseY + 2;
    var stepX = width/numOfCols;
    var stepY = width/numOfRows;
    
    for (var gridX = 0; gridX < width; gridX += stepX) {
        //rect(gridX, 0, stepX, stepY);
        for(var gridY = 0; gridY < height; gridY += stepY) {
            fill(gridX, height-gridY, 100);
            rect(gridX, gridY, stepX, stepY);
        }
    }
}