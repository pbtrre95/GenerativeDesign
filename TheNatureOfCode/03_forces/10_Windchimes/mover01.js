var Mover = function (x, y, vx, vy, ax, ay, m) {

    this.location = createVector(x, y);
    this.velocity = createVector(vx, vy);
    this.acceleration = createVector(ax, ay);
    this.mass = m;

    this.update = function () {
        this.velocity.add(this.acceleration);
        this.velocity.limit(4);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }

    this.display = function () {
        //pick a brush
        noStroke();
        strokeWeight(2);
        fill(255, 0, 0, 50);

        //And draw an ellipse at the new location vector points
        ellipse(this.location.x, this.location.y, 3 * this.mass, 3 * this.mass);

    }

    this.checkEdges = function () {
        if (this.location.x > width) {
            this.location.x = 0;
        }
        if (this.location.x < 0) {
            this.location.x = width;
        }
        if (this.location.y > height) {
            this.location.y = 0;
        }
        if (this.location.y < 0) {
            this.location.y = height;
        }

    }

    this.applyForce = function (force) {
        var f = p5.Vector.div(force, this.mass)
        this.acceleration.add(f);

    }
}