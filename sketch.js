// This is where most of the code is present
var logo, videos, studentsOnline;
var allowChangeScreen;
var form;

function preload() {
    logo = loadImage('./logo.png');
    videos = [];
    studentsOnline = 0;
    allowChangeScreen = false;
    form = new Form();
}

function setup() {
    createCanvas(windowWidth, 1000000);
}

function draw() {
    

    if (allowChangeScreen === true) {
        form.hide;
    }

    drawSprites();
}