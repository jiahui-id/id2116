let sparkson;
let sparksoff;

let brightness = 0;

function setup() {
  createCanvas(400, 400);
  sparkson = loadImage("images/sparks.gif");
  sparksoff = loadImage("images/emptybg.jpg");
}

function draw() {
  background(220);
  imageMode(CENTER);
  if (brightness==1) {
    // (bulb,x pos,y pos,image width,image height)
  image(sparkson,width/2,height/2,300,300);
  } else {
  image(sparksoff,width/2,height/2,300,300);
  }
}

function on(){
  // set brightness 1 : on
  brightness = 1;
}

function off(){
  // set brightness 0 : off
  brightness = 0;
}

function mousePressed(){
  //switch on the gif
  on();
}

function mouseReleased(){
  //switch off the gif
  off();
}