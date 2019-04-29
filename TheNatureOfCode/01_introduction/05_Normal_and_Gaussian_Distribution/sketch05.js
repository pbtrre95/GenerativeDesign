function setup() {
	createCanvas(640, 360);
	background(127);
}

// function draw() {
// 	var xloc = randomGaussian(); //get a gaussian random number with mean of 0 and standard deviation of 1.0
// 	console.log(xloc);

// 	var sd = 60; //define a standard deviation
// 	var mean = width/2; //define a mean value (middle of the screen along the x-axis)
// 	xloc = (xloc * sd) + mean; //scale the gaussian random number by standard deviation and mean 

// 	fill(0,10);
// 	noStroke();
// 	ellipse(xloc, height/2, 16, 16); //draw an ellipse at our normal random position

// }
function draw() { //get a gaussian random number w/ mean of 0
//and standard deviation of 1.0
	var xloc = randomGaussian();
	var yloc = randomGaussian();
	console.log(xloc);
	console.log(yloc);

	var xsd = 100; //define a standard deviation -> wider rather than taller
	var ysd = 40;

	var xMean = width/2; //define a mean value(middle of screen along he xaxis)
	var yMean = height/2;

	xloc = (xloc * xsd) + xMean; //scale the gaussian random number by standard deviation and mean
	yloc = (yloc * ysd) + yMean;

	var rColor = 233;

	fill(rColor, 50);
	noStroke();

	ellipse(xloc, yloc, 16, 16); //draw an ellipse at out normal random position
}