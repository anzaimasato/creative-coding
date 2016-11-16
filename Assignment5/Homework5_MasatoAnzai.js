//Masato Anzai
//Creative Coding
//Homework 5

// color var init
var r = 0;
var g = 0;
var b = 0;
var scalar = random(windowWidth,windowHeight);

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //calls randomSeed
  clear();
  bear(mouseX,mouseY,scalar)
}

//Randomizes colors
function randomColor(){
  r = int(random(0,255));
  g = int(random(0,255));
  b = int(random(0,255));
}

//Creates a bear
function bear(x,y,s) {
  push();
  translate(x,y);
  scale(s);
  stroke(g);
  strokeWeight(70);
  line(0,-35,0,-35); //face
  noStroke();
  randomColor();
  fill(r,g,b);
  ellipse(-14,-35,8,8); //left eye
  ellipse(14,-35,8,8); //right eye
  randomColor();
  fill(r,g,b);
  triangle(4,-21,0,-15,-4,-21); //nose
  ellipse(-25,-60,30,30); //left ear
  ellipse(25,-60,30,30); //right ear
  pop();
}
