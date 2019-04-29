var Particle;
 
function setup() {
  createCanvas(640,360);
  p = new Particle(createVector(width/2, 10));
}
 
function draw() {
  background(100);
  p.run();
  if (p.isDead()) {
    console.log("Particle dead!");
  }
}