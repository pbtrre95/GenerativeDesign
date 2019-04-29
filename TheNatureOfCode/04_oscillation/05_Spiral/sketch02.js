var r = 0;
var theta = 0;
 
function setup () {
  createCanvas(640,360);
  background(255);
}
 
function draw () {
  var x = r * cos(theta);
  var y = r * sin(theta);
 
  noStroke();
  fill(0);
  ellipse(width/2+x, height/2+y, 16, 16);
 
  theta += 0.01;
  r += 0.05;
}