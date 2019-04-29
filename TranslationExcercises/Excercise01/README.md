# Translation Excercises

## Excercise 1


```js
// Canvas setup
function setup() {
  canvas = createCanvas(720, 640);
  angleMode(DEGREES);
  background(255);
  stroke(0, 25);
  noFill();
}

function draw() {
  // When mouse is clicked 
  if (mouseIsPressed && mouseButton == LEFT) {
    push();
      // Translate to center of canvas
      translate(width/2, height/2);
      var radius = mouseX - width / 2;

      // Mouse position will create how many sides we want and where 
      var circleRes = int(map(mouseY + 100, 0, height, 2, 10));
      var sw = int(map(circleRes, 2, 80, 7, 2));
      // Mouse position will also decide the colour
      var col1 = map(circleRes, 2, 10, 1, 255);
      var col2 = map(circleRes, 2, 10, 255, 1);
      // And angle if the shape has more than one side
      var angle = 360 / circleRes;
      var radius = map(radius, 0, width/2, 1, 150);
      
      beginShape();
        for (var i = 0; i < circleRes; i++) {
          var xPos = cos(angle * i) * abs(radius);
          var yPos = sin(angle * i) * abs(radius);
          vertex(xPos, yPos);
          stroke(0, col1, col2);
        }
      endShape(CLOSE);
    pop();
  }
};
```