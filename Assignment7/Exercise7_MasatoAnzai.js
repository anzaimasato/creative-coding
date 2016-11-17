//Masato Anzai
//Exercise 7
//Creative Coding

var y = 0;
var yspeed = 4.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  y = y + yspeed;
  if (y > height || y < 0){
    yspeed *= -1.0;
  }
  ellipse(width/2,y,100,100);
}
