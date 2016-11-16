/**
** Kevin's comments:  Very nice!  I love these characters, and had a fun time clicking 
to see all of the different character combinations there were.  I would have loved to see more use of the color theories from 
the color lecture, but that might be an area you can expand upon in your final projects.
See inline comments for code specifics...
**/
//Masato Anzai
//Midterm - Creative Coding
//Creating a random zoo!
//variables,loops,functions,colorMod(HSB)

//instead of storing each as separate vars, why not declare a var _color and define it in a later function as
// color(random(255), random(255), random(255))
// color var init
var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(800,200);
}

function draw() {
  //calls randomSeed
  randomSeed();
}

//Click to refresh the zoo
function mouseClicked(){
  clear();
  zoo();
}
//nice use of a function here.
//I'd love to see you expand on this with parameters to the function representing width and height of the zoo
//Calling the animals
function zoo(){
  for(var i = 35; i < width + 40; i += 40){
    var scalar = random(0.5,1.0);
    var rng = random(1.0,3.0);
    if(round(rng) == 1){
      owl(i,110,scalar);
    }
    if(round(rng) == 2){
      bear(i,110,scalar);
    }
    if(round(rng) == 3){
      fox(i,110,scalar);
    }
  }
}

//Randomizes colors
function randomColor(){
  r = int(random(0,255));u
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

//Creates a fox
function fox(x,y,s) {
  push();
  translate(x,y);
  scale(s);
  noStroke();
  randomColor();
  fill(r,g,b);
  triangle(-30,-60,0,0,30,-60); //face
  randomColor();
  fill(r,g,b);
  ellipse(0,0,10,10); //nose
  ellipse(-13,-35,8,8); //left eye
  ellipse(13,-35,8,8); //right eye
  randomColor();
  fill(r,g,b);
  triangle(-30,-60,-20,-70,-10,-60); //left ear
  triangle(30,-60,20,-70,10,-60); //right ear
  pop();
}

//Modified from book
function owl(x,y,s) {
  push();
  translate(x,y);
  scale(s);
  stroke(g);
  strokeWeight(70);
  line(0,-35,0,-65); //body
  noStroke();
  randomColor();
  fill(r,g,b);
  ellipse(-17.5, -65, 35, 35); // left eye dome
  ellipse(17.5, -65, 35, 35) //right eye dome
  arc(0,-65,70,70,0,PI); //chin
  randomColor();
  fill(r,g,b);
  ellipse(-14,-65,8,8); //left eye
  ellipse(14, -65, 8,8); //right eye
  quad(0,-58,4,-51,0,-44,-4,-51); //beak
  pop();
}
