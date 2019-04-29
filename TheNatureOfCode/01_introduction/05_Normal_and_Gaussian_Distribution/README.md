# Normal/Gaussian Distribution

A distribution of values that cluster around an average (referred to as the "mean") is known as a normal distribution. Gaussian functions are used to represent the probability density function of a normal distribution.

## The height of the population

To depict the heights of real world beings, it would not be corrected to have people's heights uniformly distributed, there are a great deal more people of a similar height than there are of extreme heights. To simulate nature, you would need a more normal distribution. Random() would be ineffective. 

A low standard deviation will mean that the majority of values cluster closely around the mean, giving a narrow spike on the graph. A high standard deviation means the values are more evenly spread out from the average.

Given a population, 68% of the members of that population will have values in the range of one standard deviation from the mean. 98% within two standard deviations and 99.7% within three.

### A distribution of values that cluster around an average (referred to as the "mean") is known as a normal distribution. It is also called the Gaussian distribution.


Here is standard deviation in action

```js
function setup() {
	createCanvas(640, 360);
	background(127);
}

function draw() {
	var xloc = randomGaussian(); //get a gaussian random number with mean of 0 and standard deviation of 1.0
	console.log(xloc);

	var sd = 60; //define a standard deviation
	var mean = width/2; //define a mean value (middle of the screen along the x-axis)
	xloc = (xloc * sd) + mean; //scale the gaussian random number by standard deviation and mean 

	fill(0,10);
	noStroke();
	ellipse(xloc, height/2, 16, 16); //draw an ellipse at our normal random position

}
```
Standard deviation in action - two dimensions

```js
function draw() { //get a gaussian random number w/ mean of 0
//and standard deviation of 1.0
	var xloc = randomGaussian();
	var yloc = randomGaussian();

	var xsd = 100; //define a standard deviation
	var ysd = 40;

	var xMean = width/2; //define a mean value(middle of screen along he xaxis)
	var yMean = height/2;

	xloc = (xloc * xsd) + xMean; //scale the gaussian random number by standard deviation and mean
	yloc = (yloc * ysd) + yMean;

	var rColor = 233;

	fill(rColor, 50);
	noStroke();

	ellipse(xloc, ylox, 16, 16); //draw an ellipse at out normal random position
}
```
[See the Code in action](index.html)
