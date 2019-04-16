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
    noLoop();
    angleMode(DEGREES);

    minuteStrokeColor = color(30, 30, 30);
    minuteStrokeCap = SQUARE;

    hourStrokeColor = color(30, 30, 30);
    hourStrokeCap = SQUARE;
}

function draw() {
	for (i = 0; i < 60; i++) {
		push();
			translate(width / 2, height /2);
			rotate(map(i, 0, 60, 0, 360));

			// FIRST MISTAKE - should be i % 5 === 0
			if (i === 0 || i === % 5) {
				strokeWeight(hourStrokeWeight);
				fill(hourStrokeColor);
				/// SECOND MISTAKE - should be strokeCap() not actStrokeCap()
				actstrokeCap(hourStrokeCap);
				line(0, clockRadius - hourStrokeLength, 0, clockRadius);
			}

			else {
				strokeWeight(minuteStrokeWeight);
				fill(minuteStrokeColor);
				stroke(minuteStrokeColor);
				strokeCap(minuteStrokeCap);
				line(0, clockRadius - minuteStrokeLength, 0, clockRadius);
			}
		pop();
	}

	let hr = hour();
	let min = minute();
	let sec = second();

	let hrs = map(hr, 0, 12, 0, 360);
	let sec = map(secs, 0, 60, 0, 360);
	let min = map(mins, 0, 60, 0, 360);

	// hours hand
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

	// minutes hand
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


	// seconds hand
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
