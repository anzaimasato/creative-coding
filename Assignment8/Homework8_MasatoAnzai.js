//Masato Anzai
//Homework 8
//Creative Coding
function Particle(pos) {
  this.speed   = 2;
  this.name    =  "astroid";
  this.color   = ["blue", "yellow", "red"];
  this.pos     = pos;
}

Particle.prototype = {
  constructor : Particle,
  bounce : function(){
    if (this.pos.y > height || this.pos.y < 0){
      this.speed *= -1;
    }
    this.pos.add(new p5.Vector(0,this.speed));
  },
  changeName : function(){
    this.name = "circle";
  }

};

var particle = [];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 100; i++){
    particle[i] = new Particle(createVector(random(windowWidth), random(windowHeight)));
  }
}

function draw() {
  background(255);
  var one, two;
  one = random(100);
  two = random(100);
  for (var i = 0; i < 100; i++){
    noStroke();
    fill(particle[i].color[floor(random(3))]);
    particle[i].bounce();
    ellipse(particle[i].pos.x,particle[i].pos.y, one, two);
    pop();
  }

}
