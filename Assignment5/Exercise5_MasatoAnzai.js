//Lesson 5 Exercise
//Masato Anzai
//Creative Coding

function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  background(255);
  mouseRectangle(mouseX,mouseY);
}

function mouseRectangle(x,y){
  fill("blue")
  rect(0,0,x,y);
}
