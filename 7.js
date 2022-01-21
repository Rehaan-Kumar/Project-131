img = "";
objects = [];
model_status = "";

function preload() {
    img = loadImage("dog_cat.jpg")
}

function setup() {
    canvas = createCanvas(620 , 460)
    canvas.center()
}

function draw() {
    image(img,0,0,620,460)
}