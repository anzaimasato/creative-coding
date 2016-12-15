//Masato Anzai
//Creative Coding
//Homework 9

var textLine;
var rita;
function preload(){
	textLine = loadStrings("poem.txt"); 
}

function setup(){
	createCanvas(windowWidth, windowHeight);
	background(255);
	rita = new RiLexicon();

	textAlign(CENTER, CENTER);
	textSize(10);
	for(var i = 0; i < textLine.length; i++){

		var temp = RiTa.tokenize(textLine[i]);
		for(var j = 0; j < temp.length; j++){
			if(temp[j] === "adjective"){
				temp[j] = rita.randomWord("jj", 1);
				textLine[i] = temp.join(' ');
			} else if (temp[j] === "verb"){
				temp[j] = rita.randomWord("vb", 1);
				textLine[i] = temp.join(' ');
			}else if (temp[j] === "noun"){
				temp[j] = rita.randomWord("nn", 1);
				textLine[i] = temp.join(' ');
			} 
		}
		text(textLine[i], width/2, height/4 + i*20);
	}
}
