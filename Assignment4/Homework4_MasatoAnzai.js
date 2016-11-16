//Masato Anzai
//Assignment 4

function setup(){
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 360, 100, 100);
	background(45, 50, 100);
}

function draw(){
	noStroke();
	fill('#fff724');
	rect(0, windowHeight/2, windowWidth, windowHeight);
	fill('#ff8601');
	rect(0, windowHeight - 100, windowWidth, 100);
	fill('#2B2C67');
	rect(0, 0, windowWidth, windowHeight/2);
	fill('#418BB5');
	rect(0, 100, windowWidth, windowHeight/2 - 100);
	fill('#ac5b0e');
	rect(windowWidth/2 - 50, 50, 100, 100);
	fill('#ac5b0e');
	rect(windowWidth/2 - 50, windowHeight - 150, 100, 100);
}
