# Windchimes

In this example we have a mover class, a windchimes class and a sketch. Our mover class stays largely the same although when we create an instance of the mover we are passing the values for the location, velocity, acceleration and mass of the mover when we create it in the sketch. We create 1000 of these.

``` js
for (var j = 0; j < 1000; j++) {
    	movers[j] = new Mover(random(0, width), random(0, height), 0, 0, 0, 0, random(0, 10));
    }
```

In the windchimes class, we create the windchimes similarly in the sketch, and pass the required values. These include position, windMag, startAngle and endAngle. We place a windchime in each corner of the canvas. Each arrow is given 90 degrees of angles to work within, for the top left arrow it would be 0-90 degrees, the top right arrow 360-0 degrees, the bottom left arrow 270-360 degrees and the bottom right arrow 180-270 degrees. This ensures each arrow will in towards the canvas. The angle of wind is created using perlin noise and this is incremented +0.05 each frame. We convert this angle into a vector (windVec) and multiply this vector to get our windMag.

``` js
function WindChime(_xpos, _ypos, _windMag, _startAngle, _endAngle) {
	this.xpos = _xpos;
	this.ypos = _ypos;
	this.windMag = _windMag;
	this.startAngle = _startAngle;
	this.endAngle = _endAngle;
	this.windVec = createVector();
	this.time = 1000;

	this.update = function () {
		this.windDir = map(noise(this.time), 0, 1, this.startAngle, this.endAngle);
		this.windVec = p5.Vector.fromAngle(radians(this.windDir));
		this.windVec.mult(this.windMag);
		this.time += 0.05;
	}
```

This will be the magnitude of the wind which will be displayed underneath the windchime along with the wind direction which is our windVec vector. We use push and pop to be able to translate just the windchimes themselves around the canvas instead of everything that is drawn. 

``` js
this.display = function() {
		push();
			translate(this.xpos, this.ypos);
			scale(0.3, 0.3);
			textSize(28);
			textAlign(CENTER);
			smooth();
			fill(0);
			noStroke();
			text("Magnitude:" + this.windMag, 0, 115);
			this.string = str(this.windVec.heading() * 180 / PI);
			text("Wind Direction:" + this.string.substr(0, 6), 0, 150);
			stroke(0);
			strokeWeight(4);
			fill(255);
			rotate(this.windVec.heading());
			ellipse(0, 0, 150, 150);
			line(-65, 0, 65, 0);
			fill(0);
			triangle(40, -15, 65, 0, 40, 15);
		pop();
	}
```