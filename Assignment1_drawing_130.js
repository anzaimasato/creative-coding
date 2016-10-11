/*
* Kevin's comments: see inline
*/

//Masato Anzai
//Assignment 1
//Creative Coding
function setup() {
  createCanvas(500,500);
}

function draw() {
  //Grid and arcs from four corners.
  background(255);
  //remember to always declare your variables with the keyword var beforehand.
  //Vertical Lines
  x1 = 0;
  x2 = 0;
  y1 = 0;
  y2 = 500;
  while(x1 < 500){
    //if you add assign values to your variables before calling line
    // then x1 and x2 will never equal 0 inside of your line(). 
    //Instead, consider moving these two lines below the line drawing call
    x1 += 10;
    x2 += 10;
    line(x1,y1,x2,y2);
  }
  
  //Horizontal Lines
  x1 = 0;
  x2 = 500;
  y1 = 0;
  y2 = 0;
  while (y1 < 500){
    //see comment above about add/assigns
    y1 += 10;
    y2 += 10;
    line(x1,y1,x2,y2);
  }
  //technically you could get away with drawing ellipses here since you're really just truncating them off-canvas
  //Arcs
  noFill();
  arc(0,500,500,1000,PI,PI);
  arc(500,500,500,1000,PI,PI);
  arc(250,500,500,1000,PI,PI);
}
