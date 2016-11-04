//Masato Anzai
//Exercise Lesson 4
//Mouse movement color change

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  colorMode(HSB,mouseX,mouseY,100,1);

  background(45,50,100);
  noStroke();
  rectMode(CENTER);
  fill(300,50,100);
  rect(width/2,height/2,400,400);
}
