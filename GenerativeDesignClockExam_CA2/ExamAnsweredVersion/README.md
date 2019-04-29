# Generative Design CA2

## Clock Exam as answered in the exam with mistakes noted below

```js
// Minute hand details
let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

// Hour hand details
let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

// Clock size
let clockRadius = 200;

// Hour hand end taper
let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

// Minute hand end taper
let minuteHandsTaper = 6;
let minuteHandLength = 155;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

// Second hand end taper
let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

// Create canvas
function setup() {
    createCanvas(500, 500);
    noLoop();
    angleMode(DEGREES);

    // Create color objects for hands and cap type
    minuteStrokeColor = color(30, 30, 30);
    minuteStrokeCap = SQUARE;

    hourStrokeColor = color(30, 30, 30);
    hourStrokeCap = SQUARE;
}

// Draw function
function draw() {
  // For each minute
  for (i = 0; i < 60; i++) {
    push();
      // Translate around the second of the clock
      translate(width / 2, height /2);
      rotate(map(i, 0, 60, 0, 360));

      // Every five minutes make bigger tick
      // FIRST MISTAKE - should be i % 5 === 0
      if (i === 0 || i === % 5) {
        strokeWeight(hourStrokeWeight);
        fill(hourStrokeColor);
        /// SECOND MISTAKE - should be strokeCap() not actStrokeCap()
        actstrokeCap(hourStrokeCap);
        line(0, clockRadius - hourStrokeLength, 0, clockRadius);
      }
      // Else make a smaller tick
      else {
        strokeWeight(minuteStrokeWeight);
        fill(minuteStrokeColor);
        stroke(minuteStrokeColor);
        strokeCap(minuteStrokeCap);
        line(0, clockRadius - minuteStrokeLength, 0, clockRadius);
      }
    pop();
  }

  // Get current time
  let hr = hour();
  let min = minute();
  let sec = second();
  // Map to 0 - 360
  let hrs = map(hr, 0, 12, 0, 360);
  let sec = map(secs, 0, 60, 0, 360);
  let min = map(mins, 0, 60, 0, 360);

  // Hour hand
  push();
    translate(width / 2, height / 2);
    rotate(hrs + 270);
    beginShape();
      fill(hourStrokeColor);
      stroke(hourStrokeColor);
      // THIRD MISTAKE - hour minute and second hands need slight adjustments as follows
      // vertex(-hourHandOffset, - hourHandStartWidth / 2);
      // vertex(-hourHandOffset, hourHandStartWidth / 2 );
      // vertex(hourHandLength - 10, (hourHandStartWidth / 2) - hourHandsTaper);
      // vertex(hourHandLength - 10, - (hourHandStartWidth / 2) + hourHandsTaper);
      vertex(-hourHandLength + hourHandOffset, -hourHandStartWidth / 2);
      vertex(hourHandLength, hourHandStartWidth + hourHandsTaper);
      vertex(hourHandLength, hourHandStartWidth - hourHandsTaper);
      vertex(-hourHandLength + hourHandOffset, hourHandStartWidth + hourHandsTaper);
    endShape(CLOSE);
  pop();

  // Minute hand
  push();
    translate(width / 2, height / 2);
    rotate(mins + 270);
    beginShape();
      fill(minuteStrokeColor);
      stroke(minuteStrokeColor);
      vertex(- minuteHandLength + minuteHandOffset, - minuteHandStartWidth / 2);
      vertex(minuteHandLength, minuteHandStartWidth + minuteHandsTaper);
      vertex(minuteHandLength, minuteHandStartWidth - minuteHandsTaper);
      vertex(- minuteHandLength + minuteHandOffset, minuteHandStartWidth + minuteHandsTaper/ 2);
    endShape(CLOSE);
  pop();


  // Second hand
  push();
    translate(width / 2, height / 2);
    rotate(secs + 270);
    beginShape();
      fill("red");
      stroke("red");
      vertex(- secondsHandLength + secondHandOffset, - secondsHandStartWidth / 2);
      vertex(secondsHandLength, secondsHandStartWidth + secondsHandsTaper);
      vertex(secondsHandLength, secondsHandStartWidth - secondsHandsTaper);
      vertex(- secondsHandLength + secondsHandOffset, secondsHandStartWidth + secondsHandsTaper / 2);
    endShape(CLOSE);
    // FOURTH MISTAKE - following lines should be inside the beginShape() and endShape() function
    // also second ellipse should be ellipse(secondHandLength, 0, 25, 25);
    ellipse(0, 0, 15, 15);
    ellipse(0, secondsHandLength, 25, 25);
  pop();
}
```