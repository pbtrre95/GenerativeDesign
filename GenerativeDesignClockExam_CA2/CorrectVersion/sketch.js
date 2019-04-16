let minuteStrokeLength = 10;
let minuteStrokeWeight = 4;
let minuteStrokeColor;
let minuteStrokeCap;

let hourStrokeLength = 30;
let hourStrokeWeight = 10;
let hourStrokeColor;
let hourStrokeCap;

let clockRadius = 200;

let hourHandsTaper = 6;
let hourHandLength = 195;
let hourHandOffset = 80;
let hourHandStartWidth = 20;

let minuteHandsTaper = 6;
let minuteHandLength = 155;
let minuteHandOffset = 80;
let minuteHandStartWidth = 20;

let secondHandsTaper = 2;
let secondHandLength = 155;
let secondHandOffset = 80;
let secondHandStartWidth = 10;

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    minuteStrokeColor = color(30, 30, 30);
    minuteStrokeCap = SQUARE;

    hourStrokeColor = color(30, 30, 30);
    hourStrokeCap = SQUARE;
}

function draw() {
	background(255);
	for (i = 0; i < 60; i++) {
		push();
			translate(width / 2, height /2);
			rotate(map(i, 0, 60, 0, 360));

			if (i === 0 || i % 5 === 0) {
				strokeWeight(hourStrokeWeight);
				fill(hourStrokeColor);
				strokeCap(hourStrokeCap);
				line(0, clockRadius - hourStrokeLength, 0, clockRadius);
			}

			else {
				strokeWeight(minuteStrokeWeight);
				fill(minuteStrokeColor);
				strokeCap(minuteStrokeCap);
				line(0, clockRadius - minuteStrokeLength, 0, clockRadius);
			}
		pop();
	}

	let hr = hour();
	let min = minute();
	let sec = second();

	let hrs = map(hr, 0, 12, 0, 360);
	let secs = map(sec, 0, 60, 0, 360);
	let mins = map(min, 0, 60, 0, 360);

	// hours hand
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

	// minutes hour
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


	// seconds hour
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
