var r;
var theta;

function setup() {
    createCanvas(640, 360);
    r = height * 0.45;
    theta = 0;
}

function draw() {
    background(51);

    translate(width / 2, height / 2);

    var x = r * cos(theta);
    var y = r * sin(theta);

    ellipseMode(CENTER);
    fill(125);
    stroke(125);
    strokeWeight(2);
    line(0, 0, x, y);
    ellipse(x, y, 48, 48);

    theta += 0.02;
}