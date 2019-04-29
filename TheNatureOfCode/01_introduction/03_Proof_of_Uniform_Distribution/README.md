# Uniform Distribution of Numbers


This will prove that the random() produces just that. Over time as more and more random numbers are chosen, the history of the numbers picked will mean that the lesser picked numbers will be picked more often. This will create a more even distribution across each number.

A an array of 20 zeros at the beginning. A loop runs and a random index in the array is incremented by 1. For each frame and each incrementation, the background is drawn with the values of each index indicated by a rectangle of a height of the given values. 

```js
var randomCounts = []; //empty array called randomCounts with 20 items 
var total = 20;

function setup() {
	createCanvas(640,320); //populates array with zeros x 20 times
	for (var i=0; i<total; i++) {
		randomCounts[i] = 0;
	}
}

function draw() { //every frame background redrawn
	background(127); 
	//random number between 0-19 is added to the value in the array
	var index = floor(random(total));
	randomCounts[index]++;
	//Example 6.76 is randomly chosen, then the 6th zero is incremented by 1
	//[0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]

	stroke(0);
	strokeWeight(2);//black stroke
	fill(255);

	var w = width/randomCounts.length; //calculates the width of each bar

	for (var x=0; x<randomCounts.length; x++) {
		//loops 20 times for each bar and creates a rectangle
		//with a height based on the array value at the time
		//drawn each frame
		rect(x*w,height-randomCounts[x], w-1,
			randomCounts[x]);
	}
}
```

[See the Code in action](index.html)
