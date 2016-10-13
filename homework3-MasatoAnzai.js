/**
* Kevin's comments:  This is great!  Now that we're getting to the functions lesson,
I'd like to see how you would refactor this code into a function to make it more streamlined.  I really like the geometries you're using, and perhaps this would be 
a good starting place for your midterm project!
*/
//Masato Anzai
//Creative Coding
//Variables declared for rotations and multiplier
var theta1 = 0.0;
var theta2 = 0.0;
var theta3 = 0.0;
var theta4 = 0.0;
var multiplier = 3;
var rotationSpeed1 = 0.001;
var rotationSpeed2 = 0.002;
var rotationSpeed3 = 0.003;
var rotationSpeed4 = 0.004;

function setup() {
  createCanvas(800,800);
}

function draw() {
  background(255);
  noFill();

  //stationary triangle
  stroke(0,0,0);
  push();
  translate(width/2, height/2);
  beginShape();
  for(var i=0; i < 30; i++){
    vertex(30+multiplier*i, 150+multiplier*i);
    vertex(80+multiplier*i, 40+multiplier*i);
    vertex(130+multiplier*i, 150+multiplier*i);
  }
  endShape();
  pop();


  //rotating triangle
  stroke(0,0,0);
  push();
  translate(width/2, height/2);
  rotate(theta1);
  beginShape();
  for(var i=0; i < 30; i++){
    vertex(30+multiplier*i, 150+multiplier*i);
    vertex(80+multiplier*i, 40+multiplier*i);
    vertex(130+multiplier*i, 150+multiplier*i);
  }
  endShape();
  pop();
  theta1 += rotationSpeed1;

  stroke(0,0,0)
  push();
  translate(width/2, height/2);
  rotate(theta2);
  beginShape();
  for(var i=0; i < 30; i++){
    vertex(30+multiplier*i, 150+multiplier*i);
    vertex(80+multiplier*i, 40+multiplier*i);
    vertex(130+multiplier*i, 150+multiplier*i);
  }
  endShape();
  pop();
  theta2 += rotationSpeed2;

  stroke(0,0,0)
  push();
  translate(width/2, height/2);
  rotate(theta3);
  beginShape();
  for(var i=0; i < 30; i++){
    vertex(30+multiplier*i, 150+multiplier*i);
    vertex(80+multiplier*i, 40+multiplier*i);
    vertex(130+multiplier*i, 150+multiplier*i);
  }
  endShape();
  pop();
  theta3 += rotationSpeed3;

  stroke(255,0,0);
  push();
  translate(width/2, height/2);
  rotate(theta4);
  beginShape();
  for(var i=0; i < 30; i++){
    vertex(30+multiplier*i, 150+multiplier*i);
    vertex(80+multiplier*i, 40+multiplier*i);
    vertex(130+multiplier*i, 150+multiplier*i);
  }
  endShape();
  pop();
  theta4 += rotationSpeed4;
}
