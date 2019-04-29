var startAngle = 0;
var angleVel = 0.1;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(125);

  startAngle += 0.02;
  var angle = startAngle;

  for (var x = 0; x <= width; x += 35) {
    var y = map(sin(angle), -1, 1, 0, height);
    stroke(0);
    fill(0);
    strokeWeight(2);
    ellipse(x, y, 48, 48)
    angle += angleVel;
  }
}