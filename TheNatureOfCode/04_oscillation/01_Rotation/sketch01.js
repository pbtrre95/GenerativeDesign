var angle = 0;
var aVelocity = 0; 
var aAcceleration = 0.001;

function setup () {
  createCanvas(640, 480);
}

function draw () {
  background(220);

  stroke(0);
  fill(127);

  push();
  //translate grid to center
    translate(width/2, height/2)
    //rotate grid 
    rotate(angle);
    //draw shapes from new origin
    line(-60, 0, 60, 0);
    ellipse(60, 0, 16, 16);
    ellipse(-60, 0, 16, 16);
  pop();

  
  //how fast the angle will change, spindle will move
  aVelocity = aVelocity + aAcceleration;

  //0.1 is six degrees, six degrees is the max it can move in one frame 
  aVelocity = constrain(aVelocity, 0, 0.5);
  angle = angle + aVelocity;
}