function Pendulum(origin, r) {

    this.origin = origin.copy();
    this.position = createVector();
    this.r = r;
    this.angle = PI / 4;

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.995;
    this.ballr = 48.0;

    this.go = function() {
        this.update();
        this.display();
    };

    this.update = function() {
        var gravity = 0.4;
        this.aAcceleration = (-1 * gravity / this.r) * sin(this.angle);
        this.aVelocity += this.aAcceleration;
        this.aVelocity *= this.damping;
        this.angle += this.aVelocity;
    }

    this.display = function() {
        this.position.set(this.r * sin(this.angle), this.r * cos(this.angle), 0);
        this.position.add(this.origin);

        stroke(0);
        strokeWeight(3);

        line(this.origin.x, this.origin.y, this.position.x, this.position.y);
        ellipseMode(CENTER);
        fill(255);

        ellipse(this.position.x, this.position.y, this.ballr, this.ballr);
    }
}