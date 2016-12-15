//Masato Anzai
//Creative Coding
//Homework11


var table, row

function preload(){
	table = loadTable("test.csv")
}

function setup(){
	createCanvas(windowWidth, windowHeight);
}

function draw(){
	background(255);

}

function makeGraph(){
	translate(30, 50);
	for(var c = 0; c < table.getColumnCount(); c++){
		for(var r = 0; r < table.getRowCount(); r++){
			push();
			if(c === 0){
				translate(0, r*100);
				text(table.getString(c,r), 0, 0);
			}
			else
			{
				translate(c * 150 + 155, r*103 - 10);
				row = table.getString(r,c);
				console.log(row);
				if(r === 0){
					text(table.getString(c,r), -30, 10);
				}
				if(row == 0){
					ellipse(0, 0, 10, 10);
				}
				else
				{
					for(var i = 0; i < row; i++){
						ellipse(0, 0, 10, 10);
						beginShape();
						var degree = TWO_PI / row;
						vertex(0,0);
						rotate(degree);
						vertex(0, 30);
						endShape();
					}
				}
			}
			pop();
		}
	}
}
