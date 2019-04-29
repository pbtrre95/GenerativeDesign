var system;
 
function setup() {
  createCanvas(640,360);
  system = new ParticleSystem(createVector(width/2, 10));
}
 
function draw() {
  background(100);
  system.addParticle();
  system.run();
}