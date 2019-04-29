# Random Walker with 9 Outcomes


This time the walker will have 9 unique potential outcomes. 

The only thing that changes is that for each step the walker takes we add a factor where the walker can go north, northeast,east,southeast,south,southwest,west,northwest or staying put -giving 9 potential outcomes. Each outcome will have the equal chance of happening or equal probability. 9 outcomes each with an 11.1111% chance of happening.

The walker can go in the X direction and Y direction at the same time, rather than one at a time (4 outcomes) like in the previous sketch. This function also occurs without the use of several if statements.

Also to note is that the random function is not truly random. They are "pseudo-random" meaning that over time a pattern occurs where numbers not picked would be picked and results would even out.

```js
function Walker() {
//Walker class that makes walker objects
	this.x = width/2; 
	this.y = height/2;

	this.render = function() {
		stroke(0);
		point(this.x,this.y);
	}

	this.step = function() { 
		var stepx = floor(random(-1, 2)); //break steps into x and y directions
		var stepy = floor(random(-1, 2));

		this.x = this.x + stepx; //a step in the x direction and a step in the y direction create 9 outcomes
		this.y = this.y + stepy;
		
		this.x = constrain(this.x,0,width); //p5.js function called constrain keeps the point within the boundaries of the canvas
		this.y = constrain(this.y,0,height);
	}
}
```

[See the Code in action](index.html)
