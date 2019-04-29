function setup () {
  createCanvas(200, 200);
  background(255);
  smooth();
  noStroke();
}

function draw() {
  //the framecount divided by ten, if its remainder is equal to zero then a fill occurs
  if (frameCount % 10 == 0) {
    //the fill is decided by the framecount multiplied by 3, 5 and 7 
    //which is then divided by 255 and then that remainder is used to decide colours
    fill(frameCount * 3 % 255, frameCount * 5 % 255,
      frameCount * 7 % 255);
    push();
      //translate to the center
      translate(100, 100);
      //rotate grid 
      rotate(radians(frameCount * 2  % 360));
      //draw rectangle at this new origin
      rect(0, 0, 80, 20);
    pop();
  }
}