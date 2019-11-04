function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
}

function draw() {
    background(255);
    line(mouseX, mouseY, pmouseX * 0.5, pmouseY * 0.5);

}