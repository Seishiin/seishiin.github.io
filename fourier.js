let frequency = 0;
let pathX = [];
let PathY = [];

function setup() {
    createCanvas(displayWidth, displayHeight);
}

function draw() {
    background(0);
    translate(displayWidth / 2, displayHeight / 2);

    let x = 0;
    let y = 0;

    for (let i = 0; i < 5; i++) {
        let prevx = x;
        let prevy = y;

        let n = i * 2 + 1;
        //let n = random(1, 5);
        let radius = 150 * (4 / (n * PI));
        x += radius * cos(n * frequency);
        y += radius * sin(n * frequency);

        stroke(255, 100);
        noFill();

        fill(255);
        stroke('red');
        line(prevx, prevy, x, y);
    }
    pathX.push(x);
    PathY.push(y);

    line(x, y, x, y);
    beginShape();
    noFill();
    for (let i = 0; i < pathX.length; i++) {
        stroke(255);
        vertex(pathX[i], PathY[i]);
    }
    endShape();

    frequency += 0.01;
}
