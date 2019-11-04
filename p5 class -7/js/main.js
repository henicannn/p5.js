var x1, y1, x2, y2, x3, y3, col;

function setup() {
    createCanvas(900, 600);
    background(0);
    noStroke();
    blendMode(SCREEN);

}

function draw() {
    if (mouseIsPressed) {
        drawTris();
    }

}

function setTris() {
    x1 = random(mouseX - random(100), mouseX + random(100));
    y1 = random(mouseY - random(100), mouseY + random(100));

    x2 = random(mouseX - random(200), mouseX + random(400));
    y2 = random(mouseY - random(200), mouseY + random(400));

    x3 = random(mouseX - random(600), mouseX + random(800));
    y3 = random(mouseY - random(600), mouseY + random(800));
}

function drawTris() {
    col = random(50);
    setTris();
    fill(col * 5, col * 2, col, 90);
    triangle(x1, y1, x2, y2, x3, y3);
}