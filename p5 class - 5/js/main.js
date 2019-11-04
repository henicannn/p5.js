function setup() {
	createCanvas(1200, 800);
	background(255);
	noStroke();
	frameRate(5);
}

function draw() {
	if (mouseIsPressed) {
		fill(random(255), random(255), random(255), 30);
		circle(mouseX, mouseY, 100);
	}
}

// function mousePressed() {
// 	fill(random(255), random(255), random(255), 30);
// 	circle(mouseX, mouseY, 100);

// }