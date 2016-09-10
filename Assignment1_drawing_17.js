//Masato Anzai
//Assignment 1
//Creative Coding
function setup() {
  createCanvas(800,400);
}

function draw() {
  //Four-part drawing with a different line direction in each part.
  background(255);
  
  //First Section, Vertical Lines
  x1 = 1;
  x2 = 1;
  y1 = 0;
  y2 = 400;
  while (x1 < 180){
    x1 += 2;
    x2 += 2;
    line(x1,y1,x2,y2);
  }
  
  //Second Section, Horizontal Lines
  x1 = 200;
  x2 = 420;
  y1 = 0;
  y2 = 0;
  while (y1 < 400){
    y1 += 2;
    y2 += 2;
    line(x1,y1,x2,y2);
  }
  
  //Third Section, Diagonal 
  x1 = 440;
  x2 = 450;
  y1 = 7;
  y2 = 0;
  line(x1,y1,x2,y2);
  while (x2 < 617){
    x2 += 3;
    y1 += 7;
    line(x1,y1,x2,y2);
  }
  
  x1 = 610;
  x2 = 620;
  y1 = 393;
  y2 = 400;
  while(x1 > 440){
    x1 -= 3;
    y2 -= 7;
    line(x1,y1,x2,y2);
  }
  
  //Fourth Section, Diagonal
  x1 = 790;
  x2 = 800;
  y1 = 0;
  y2 = 7;
  while(x1 > 647){
    x1 -= 3;
    y2 += 7;
    line(x1,y1,x2,y2);
  }
  
  x1 = 650;
  x2 = 660;
  y1 = 393;
  y2 = 400;
  while(x2 < 820){
    x2 += 3;
    y1 -= 7;
    line(x1,y1,x2,y2);
  }
}