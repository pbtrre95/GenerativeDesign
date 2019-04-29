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
		var stepx = floor(random(-1, 2)); //break steps into x and y directions
		var stepy = floor(random(-1, 2));

		this.x = this.x + stepx; //a step in the x direction and a step in the y direction create 9 outcomes
		this.y = this.y + stepy;
		
		this.x = constrain(this.x,0,width); //p5.js function called constrain keeps the point within the boundaries of the canvas
		this.y = constrain(this.y,0,height);
	}
}