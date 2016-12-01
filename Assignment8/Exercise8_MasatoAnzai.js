//Masato Anzai
//Exercise 8
//Creative Coding

var circleRadii = [];

function setup() {
  createCanvas(400,400);
  for(i = 0; i < 10; i++){
    circleRadii[i] = i * 30;
  }
}

function draw() {
  background(255);
  noFill();
  for(i = 0; i < 10; i++){
    ellipse(width/2,height/2, circleRadii[i], circleRadii[i]);
  }
}
