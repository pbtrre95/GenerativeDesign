var walker; //declare a walker object

function setup() {
	createCanvas(320,640); //setup() occurs at start and only happens once
	background(127); //320x640 canvas with gret background
	walker = new Walker(); //call Walker class to create walker object
}

function draw() {
	walker.render(); 
	//each frame the draw() function is called, calls the walker render() function from within walker object
	walker.step(); 
	//also calls step() function
}

function Walker() {
//Walker class that makes walker objects
	this.x = width/2; 
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x,this.y);
	}

	this.step = function() { 
		var choice = floor(random(4)); //random generator, number chosen between 0 and 4, max 3.999999 and then rounded down, so really 0,1,2,3
		if (choice === 0) { //4 outcomes
			this.x++;
		} else if (choice === 1) {
			this.x--;
		} else if (choice === 2) {
			this.y++;
		} else {
			this.y--;
		}

		this.x = constrain(this.x,0,width); //p5.js function called constrain keeps the point within the boundaries of the canvas
		this.y = constrain(this.y,0,height);
	}
}