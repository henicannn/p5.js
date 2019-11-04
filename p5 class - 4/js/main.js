var xPos = 0;

function setup() {
	createCanvas(windowWidth, 800);
	background(255);
	noStroke();
}

function draw() {
	fill(random(200,255), random(0,100), random(0,100), 50);
	circle(random(1200), random(800), random(30));

}
