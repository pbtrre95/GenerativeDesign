# Clock Practice Excercise

## Setup is slightly different to exam version

```js
'use strict'
let actStrokeCap;
// canvas setup
function setup(){
  createCanvas(600,600);
}
// hand types
function draw(){
  background("grey");
  strokeCap(actStrokeCap);
  const radius = 250,
        hourThick = 40,
        secondThick = 20,
        thickGap = 10;

  // clock bg
  push();
    noStroke()
    translate(width/2,height/2);
    ellipse(0,0,radius * 2,radius * 2);
    fill(0);
  pop();

  // clock ticks
  for(let i = 0; i < 60; i++){
    push();
    // work with degrees not radians
    angleMode(DEGREES); 
    translate(width/2,height/2);
    rotate(map(i,0,60,0,360));
    // check if its an hour
    if(i === 0 || i % 5 === 0) {
      strokeWeight(10);
      line(0,radius-hourThick,0,radius-thickGap);
    }
    else {
      strokeWeight(4);
      line(0,radius-secondThick,0,radius-thickGap);
    }
    pop();
  }

  // variables for the times
  let hr = hour(),
      mn = minute(),
      sc = second();

  let secondAngle = map(sc, 0, 60, 0, 360),
      minuteAngle = map(mn, 0, 60, 0, 360),
      hourAngle = map(hr, 0, 12, 0, 360);
  
  // draw time indicators
  // hours
  push();
    translate(width / 2,height / 2);
    rotate(-90);
    rotate(hourAngle);
    fill(0);
    strokeWeight(13);
    line(-50, 0, radius - 70, 0);
  pop();

  // minutes hand
  push();
    translate(width/2,height/2);
    rotate(minuteAngle + 270);
    fill(0);
    strokeWeight(10);
    line(-50, 0, radius - thickGap - 5, 0);
  pop();

  // seconds hand
  push();
    translate(width / 2,height / 2);
    rotate(secondAngle + 270);
    strokeWeight(5);
    stroke("red");
    line(-50, 0, radius - 70, 0);
    fill("red");
    ellipse(0,0,10,10);
    ellipse(radius - 70,0,30,30);
  pop();

  // creating each hour label 1-12 around the clock
  let counter = 1;
  for(let i = 0; i < 360; i += 6 * 5) {
    push();
      strokeWeight(5);
      translate(width/2,height/2);
      textSize(32);
      textAlign(CENTER,CENTER);
      text(counter, (radius + 32/2) * cos(i + 270 + 6 * 5), (radius + 32 / 2) * sin(i + 270 + 6 * 5));
      counter++;
    pop();
  }

}
// hand cap types
function keyReleased(){
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
  if (key == '1') actStrokeCap = ROUND;
  if (key == '2') actStrokeCap = SQUARE;
  if (key == '3') actStrokeCap = PROJECT;
}
```