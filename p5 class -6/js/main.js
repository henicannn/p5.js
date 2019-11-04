var isBlue = false;

function setup() {
    createCanvas(900, 600);

}

function draw() {
    if (isBlue === true) {
        background("blue");
    } else {
        background(255, 0, 0);
    }
    // if (mouseIsPressed == true) {
    //     isBlue = !isBlue;
    // }
}

function mousePressed() {
    isBlue = !isBlue;
}