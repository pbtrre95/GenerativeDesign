var oscillators = [];

function setup() {
  createCanvas(640, 360);
  for (var i = 0; i < 10; i++) {
    oscillators[i] = new Oscillator();
  }
}

function draw() {
  background(51);
  for (var i = 0; i < oscillators.length; i++) {
    oscillators[i].oscillate();
    oscillators[i].display();
  }
}