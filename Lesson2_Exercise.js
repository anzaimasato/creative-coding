//Masato Anzai
//Creative Coding
//Exercise Lesson 2

//Variables
var xPos = 100;
var yPos = 100;

function setup() {
    createCanvas(500,500);
}

function draw() {

    if(mouseX < xPos && mouseY < yPos){
        rect(mouseX,mouseY,50,50);
    }
}
