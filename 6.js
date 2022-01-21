img = "";
objects = [];
model_status = "";

function preload() {
    img = loadImage("Train.jfif")
}

function setup() {
    canvas = createCanvas(620 , 460)
    canvas.center()
}

function draw() {
    image(img,0,0,620,460)
}