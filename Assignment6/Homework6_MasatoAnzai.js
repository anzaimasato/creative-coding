//Masato Anzai
//Homework 6
//Creative Coding

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  colorMode(RGB);
  start = color(255,0,0);
  finish = color(0,0,255);
  noStroke();
  translate(mouseX,mouseY);
  colorVar = lerpColor(start,finish,(mouseX*0.001));
  fill(colorVar);
  rotate(frameCount);
  rect(0,0,100,100);
}
