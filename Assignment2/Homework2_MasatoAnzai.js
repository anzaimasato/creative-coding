//Masato Anzai
//Creative Coding
//Homework 2
//Title: Concreto
//Artist: Geraldo de Barros
//Date: 1958

//Picture re-sizes with window width and height.

//Included Variables for the color scheme
var whiteR = 249;
var whiteG = 242;
var whiteB = 241;

var darkRed = 153;
var darkGreen = 102;

function setup() {
    //Canvas grows with built-in variables
    createCanvas(windowWidth,windowHeight);
}

function draw() {
    //background is black
    background(0);

    //Used noStroke and fill to replicate image
    noStroke();
    fill(whiteR,whiteG,whiteB);
    quad(0, windowHeight/2, windowWidth/3.3, 0, windowWidth/1.6,
         windowHeight/2, windowWidth/3.3, windowHeight);

    noStroke();
    fill(darkRed,0,0);
    quad(windowWidth/2.3, windowHeight/2, windowWidth/1.88, windowHeight/2.81,
        windowWidth/1.6, windowHeight/2, windowWidth/1.88, windowHeight/1.55);

    noStroke();
    fill(whiteR,whiteG,whiteB);
    quad(windowWidth/1.5, windowHeight/4, windowWidth/1.2, 0, windowWidth,
        windowHeight/4, windowWidth/1.2,windowHeight/2);

    noStroke();
    fill(0,darkGreen,0);
    quad(windowWidth/1.31, windowHeight/2.5, windowWidth/1.2, windowHeight/3.3,
        windowWidth/1.11, windowHeight/2.5, windowWidth/1.2,windowHeight/2);
}
