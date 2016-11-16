//Masato Anzai
//Creative Coding
//Exercise 6_2

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noStroke();
  translate(mouseX,mouseY);
  push();
  fill("blue");
  if(mouseX > windowWidth/2){
    rotate(mouseX);
  }
  rect(0,0,50,100);
  pop();
}
