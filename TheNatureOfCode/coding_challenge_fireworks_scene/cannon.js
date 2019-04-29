function Cannon() {
	this.angle = 45.55;
	// Only move between these angles
	this.ang = constrain(this.angle, 45.05, 46.05);

	// Move cannon to left
	this.left = function() {
		this.angle = this.angle -= 0.1;
		this.ang = constrain(this.angle, 45.05, 46.05);
	}

	// Move cannon to right
	this.right = function() {
		this.angle = this.angle += 0.1;
		this.ang = constrain(this.angle, 45.05, 46.05);
	}
}
