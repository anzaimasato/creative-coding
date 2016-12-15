var rSlider, gSlider, bSlider;
var circleRadii = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(15)
  noStroke();

  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);
  for(i = 0; i < 10; i++){
      circleRadii[i] = i * 30;
  }
}

function draw() {
  var r = rSlider.value();
  var g = gSlider.value();
  var b = bSlider.value();
  fill(255);
  text("red", 165, 35);
  text("green", 165, 65);
  text("blue", 165, 95);

  noStroke();
  fill(r,g,b);
  rect(0, windowHeight/2, windowWidth, windowHeight);
  fill(r-30,g-30,b-30);
  rect(0, windowHeight - 100, windowWidth, 100);
  fill(r-50,g-50,b-50);
  rect(0, 0, windowWidth, windowHeight/2);
  fill(r-10,g-10,b-10);
  rect(0, 100, windowWidth, windowHeight/2 - 100);
  fill(r+10,b+10,g+10);
  rect(windowWidth/2 - 50, 50, 100, 100);
  fill(r-20,b-20,g-20);
  rect(windowWidth/2 - 50, windowHeight - 150, 100, 100);
}
