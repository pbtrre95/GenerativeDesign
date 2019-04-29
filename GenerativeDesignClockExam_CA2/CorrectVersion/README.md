# Generative Design CA2

## Clock Exam

Clock exam answered version ammended with correct methods

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
    angleMode(DEGREES);

    // Create color objects for hands and cap type
    minuteStrokeColor = color(30, 30, 30);
    minuteStrokeCap = SQUARE;

    hourStrokeColor = color(30, 30, 30);
    hourStrokeCap = SQUARE;
}

// Draw function
function draw() {
  background(255);
  // For each minute 
  for (i = 0; i < 60; i++) {
    push();
      // Translate around the second of the clock
      translate(width / 2, height /2);
      rotate(map(i, 0, 60, 0, 360));

      // Every five minutes make bigger tick
      if (i === 0 || i % 5 === 0) {
        strokeWeight(hourStrokeWeight);
        fill(hourStrokeColor);
        strokeCap(hourStrokeCap);
        line(0, clockRadius - hourStrokeLength, 0, clockRadius);
      }
      // Else make a smaller tick
      else {
        strokeWeight(minuteStrokeWeight);
        fill(minuteStrokeColor);
        strokeCap(minuteStrokeCap);
        line(0, clockRadius - minuteStrokeLength, 0, clockRadius);
      }
    pop();
  }

  // Get current times
  let hr = hour();
  let min = minute();
  let sec = second();
  // Map it to 0 - 360
  let hrs = map(hr, 0, 12, 0, 360);
  let secs = map(sec, 0, 60, 0, 360);
  let mins = map(min, 0, 60, 0, 360);

  // Hour hand
  push();
    translate(width / 2, height / 2);
    rotate(hrs + 270);
    beginShape();
      fill(hourStrokeColor);
      stroke(hourStrokeColor);
      strokeWeight(hourStrokeWeight);
      vertex(-hourHandOffset, - hourHandStartWidth / 2);
      vertex(-hourHandOffset, hourHandStartWidth / 2 );
      vertex(hourHandLength - 10, (hourHandStartWidth / 2) - hourHandsTaper);
      vertex(hourHandLength - 10, - (hourHandStartWidth / 2) + hourHandsTaper);
    endShape(CLOSE);
  pop();

  // Minute hand
  push();
    translate(width / 2, height / 2);
    rotate(mins + 270);
    beginShape();
      fill(minuteStrokeColor);
      stroke(minuteStrokeColor);
      strokeWeight(minuteStrokeWeight);
      vertex(-minuteHandOffset, - minuteHandStartWidth / 2);
      vertex(-minuteHandOffset, minuteHandStartWidth / 2 );
      vertex(minuteHandLength - 10, (minuteHandStartWidth / 2) - minuteHandsTaper);
      vertex(minuteHandLength - 10, - (minuteHandStartWidth / 2) + minuteHandsTaper);
    endShape(CLOSE);
  pop();


  // Seconds Hand
  push();
    translate(width / 2, height / 2);
    rotate(secs + 270);
    beginShape();
      fill("red");
      stroke("red");
      vertex(-secondHandOffset, - secondHandStartWidth / 2);
      vertex(-secondHandOffset, secondHandStartWidth / 2 );
      vertex(secondHandLength - 10, (secondHandStartWidth / 2) - secondHandsTaper);
      vertex(secondHandLength - 10, - (secondHandStartWidth / 2) + secondHandsTaper);
      ellipse(0, 0, 15, 15);
      ellipse(secondHandLength, 0, 25, 25);
    endShape(CLOSE);
  pop();
}

```