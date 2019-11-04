var x = 50;
var y = 15;
// var color = 50;

function setup() {
	createCanvas(640, 480);
	background(255);
	// var x = 50;
}

function draw() {
	// var x = 50;
	line(x, 55 + y, x + 20, 15 + y);
	x = x + 1;

	if (x > 640) {
		x = 0;
		y = y + 30;
		//	color++;
		//	stroke(color * 1, color * 2, color * 3);
		stroke(random(255), random(255), random(255));

	}

}