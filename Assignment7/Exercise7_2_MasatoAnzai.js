//Masato Anzai
//Exercise 7-2
//Creative Coding

var x = 0;
var xspeed = 4.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  var angle = 0.0;
  var y = 0.0;
  translate(width/2,0);
  while(y < height){
    var amplitude = width/4;
    var x = cos(radians(angle)) * amplitude;
    fill(100);
    ellipse(x,y,10,10);
    y+=10.0;
    angle+=10.0;
  }
}
