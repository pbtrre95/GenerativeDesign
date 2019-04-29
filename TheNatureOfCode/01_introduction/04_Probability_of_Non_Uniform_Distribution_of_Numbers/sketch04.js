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

function Walker() { //this is one way of generating random probability
	this.x = width/2;
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x, this.y);
	};

	this.step = function() { 
		// in this instance r(our random number) has 
		// 40% of being a 1 or a 3 and 20% chance of 
		// being a 2
		var choice = floor(random(4));
		var r = random(1);
		if (r < 0.4) {
			this.x++;
		} else if (r < 0.6) {
			this.x--;
		} else if (r < 0.8) {
			this.y++;
		} else {
			this.y--;
		}
		this.x = constrain(this.x, 0, width -1);
		this.y = constrain(this.y, 0, height -1);
	};
}