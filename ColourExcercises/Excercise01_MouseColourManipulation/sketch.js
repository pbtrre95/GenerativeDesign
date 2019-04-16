function setup() {
    createCanvas(720, 720);
    colorMode(HSB, 360, 100, 100);
    rectMode(CENTER);
}

function draw() {
    background(mouseY/2, 100, 100); // MouseY coordinates /2 as hue, 100 saturation and 100 brightness as background
    fill(360-mouseY/2, 100, 100); // The inverted colour of mouseY/2 will be the fill for the rect
    rect(width/2, height/2, mouseX, mouseX); 
    // The rect will be drawn with from the center of the canvas and the size will depend on 
    // how close the mouseX is to the sides of the canvas
    noStroke(); 
}

function keyPressed() {
    // If s is pressed the image of the canvas will save with the timestamp and x/y mouse coordinates as a title
    if (key == 's' || key=='S') saveCanvas(gd.timestamp() + '_MouseX_' + mouseX +'_MouseY_' + mouseY +'_png');
}