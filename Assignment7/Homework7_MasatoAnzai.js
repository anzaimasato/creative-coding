//Masato Anzai
//Homework7_MasatoAnzai
//Creative Coding

var waveLengthOne = 125.0;
var waveLengthTwo = 90.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 200;

var offset = 60;
var scalar = 30;
var speed = 1.75;


function setup(){
  createCanvas(400,400);
}

function spinningCircle(offset1,offset2){
  var x = offset1 + cos(angle) * scalar;
  var y = offset2 + sin(angle) * scalar;
  ellipse(x,y,10,10);
}

function draw(){
  if(pointCount > 10000){
    noLoop();
  }
  noFill();
  translate(width/2, height/2);
beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;

  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  noStroke();
  fill(abs(255*sin(angle)),abs(255*cos(angle)),abs(255*cos(angle)));
  spinningCircle(x,y);
  }

endShape();
pointCount++;

}
