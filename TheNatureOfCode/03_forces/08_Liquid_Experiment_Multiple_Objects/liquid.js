var Liquid = function(x, y, w, h, c, r, g, b, o) {
	this.location = createVector(x, y);
	this.size = createVector(w, h);
	this.coefDrag = c;

	this.display = function() {
		fill(this.r, this.g, this.b, this.o);
		rect(this.location.x, this.location.y, this.size.x, this.size.y)
	}

	this.contains = function(m) {
		return m.location.y > this.location.y 
		&& m.location.y < this.size.y + this.size.y && m.location.x > this.location.x 
		&& m.location.x < this.location.x + this.size.x;
	}

	this.calculateDrag = function(m) {
		var speed = m.velocity.mag();
		var dragMagnitude = this.coefDrag * speed * speed;

		var dragForce = p5.Vector.mult(m.velocity, -1);

		dragForce.normalize();
		dragForce.mult(dragMagnitude);
		return dragForce;
	}
}