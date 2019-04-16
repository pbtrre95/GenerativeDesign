function setup() {
  canvas = createCanvas(720, 640);
  angleMode(DEGREES);
  background(255);
  //strokeWeight(2);
  stroke(0, 25);
  noFill();
}

function draw() {
  // THIS 
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
    translate(width/2, height/2);
    //rotate(mouseY);
      var radius = mouseX - width / 2;
      var circleRes = int(map(mouseY + 100, 0, height, 2, 10));
      
      var sw = int(map(circleRes, 2, 80, 7, 2));
      var col1 = map(circleRes, 2, 10, 1, 255);
      var col2 = map(circleRes, 2, 10, 255, 1);

      var angle = 360 / circleRes;
      // OR
      var radius = map(radius, 0, width/2, 1, 150);

      //var constrainedRadius = constrain(radius, -150, 150);
      
      beginShape();
        for (var i = 0; i < circleRes; i++) {
          var xPos = cos(angle * i) * abs(radius);
          var yPos = sin(angle * i) * abs(radius);
          vertex(xPos, yPos);
          // line(0, 0, xPos, yPos);
          stroke(0, col1, col2);
          //strokeWeight(sw);
        }
      endShape(CLOSE);
    pop();
  }
};