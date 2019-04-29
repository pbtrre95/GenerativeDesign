# Probability & Non Uniform Distributions

## Probability Basic Principles

System with a certain number of possible outcomes, the probability of an event is the number of outcomes that qualify as that event divided by the total number of all possible outcomes. 
Ie. A coin toss -> 1/2 = 50% probability.

### The Card Deck Problem

Take a deck of fifty-two cards. The probability of drawing an ace is 4/52 = 0.077% or ~8%

An ace followed by an ace = 4/52 * 3/51 = 0.0045

## Implementing probability with the random() 

Here we use the random() function to generate a number between 1-5, however the results are manipulated to produce a non uniform distribution of numbers. 1 and 2 will return 1(40% chance), 3 will return 2(20% chance) and 4 and 5 will return 3(40% chance).

```js
function Walker() { 
	this.x = width/2;
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x, this.y);
	};

	this.step = function() { 
	//in this instance r(our random number) has 40% of being a 1 or a 3 and 20% chance of 
	//being a 2 and 40% of being a  4 or a 5
		var probArray = [];
		probArray[1] = 1;
		probArray[2] = 1;
		probArray[3] = 2;
		probArray[4] = 3;
		probArray[5] = 3;

		var index = floor(random(probArray.length));
		var r = probArray[index];

		this.x = constrain(this.x, 0, width -1);
		this.y = constrain(this.x, 0, height -1);
	};
}
```
Here is another method of manipulating the results produced by the random() function. A number between 0 and 1 is generated. If that number is:

•Between 0 and 0.4 a step to the right is taken (40% chance of happening)
•Between 0.4 and 0.6 a step to the left is taken (20% chance of happening)
•Between 0.6 and 0.8 a step to the top is taken (20% chance of happening)
•Above 0.8 a step below is taken (20% chance of happening)

```js
function Walker() { //this is one way of generating random probability
	this.x = width/2;
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x, this.y);
	};

	this.step = function() {
		var r = random(1);
		if (r < 0.4) { //40% of happening
			this.x++;
		} else if (r < 0.6) { //20% of happening
			this.x--;
		} else if (r < 0.8) { //20% of happening
			this.y++;
		} else { // 20%
			this.y--;
		}
		this.x = constrain(this.x, 0, width -1);
		this.y = constrain(this.y, 0, height -1);
	};
}
```
[See the Code in action](index.html)
