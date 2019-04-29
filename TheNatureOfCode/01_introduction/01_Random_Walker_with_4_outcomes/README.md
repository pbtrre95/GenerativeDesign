# What is a class

A class is simply a template for creating instances of objects.

# What is an object 
An object is an entity that has data and functionality.
Eg. Class is a cookie cutter, objects are the cookies.


```js
function Car { //class name
    this.color = 233; //data
    this.xpos = 23;
    
    this.display() { //functionality
        fill(color);
        rect(xpos,100,100,100);
    }
    
    this.drive() {
        xpos=xpos+1;
    }
}

var myCar; //declares an object

void setup(){
    myCar = new Car(); //initialise object
}

void draw() { //call functions on object
    background(255);
    myCar.drive();
    myCar.display();
}
```    


# Random Walker with 4 Outcomes



In this file we create a Walker class which creates walker objects. Each time the step function is called on this object it selects a random number and based on that it produces outcomes. We also constrain the x and y value using the built in constrain() function.

The main script contains the two main functions, setup() & draw(). The draw function calls the objects built in function

```js
var walker; //declare a walker object

function setup() {
    createCanvas(320,640); //setup() occurs at start and only happens once
    background(127); //320x640 canvas with gret background
    walker = new Walker(); //call Walker class to create walker object
}

function draw() {
    walker.render();
    //each frame the draw() function is called, calls the walker render() function from within walker object
    walker.step();
    //also calls step() function
}
```

Within the Walker class 2 variables are set up (x&y) and values declared for them. We then have two functions added to each object. The render function draws a dot at the designated x and y coordinate.

```js
function Walker() { //Walker class that makes walker objects
    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
```

The step function creates a random number between 0 and 4 and then floors it. Based on that outcome a choice is made using if then else statement which will change the x or y coordinate. On the next draw the render function will update their position.
    
```js
    this.step = function() {
        var choice = floor(random(4)); 
        //random generator, number chosen between 0 and 4, max 3.999999 and then rounded down, so really 0,1,2,3
        if (choice === 0) { //4 outcomes
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
        //p5.js function called constrain keeps the point within the boundaries of the canvas
        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }
    
}

```
[See the Code in action](index.html)
