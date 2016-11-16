//Masato Anzai
//Creative Coding
//Exercise 6

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  noStroke();

  push();
  translate(windowWidth/4,windowHeight/4);
  fill(0,0,255);
  rect(0,0,width/3,height/3);
  pop();

  push();
  translate(windowWidth/3,windowHeight/3);
  fill(0,0,255);
  rect(0,0,width/3,height/3);
  pop();

  push();
  translate(windowWidth/2,windowHeight/2);
  fill(0,0,255);
  rect(0,0,width/3,height/3);
  pop();
}
