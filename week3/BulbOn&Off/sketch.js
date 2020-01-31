let bulbon;
let bulboff;

let brightness = 0;

function setup() {
  createCanvas(400, 400);
  bulbon = loadImage("images/bulb_on.png");
  bulboff = loadImage("images/bulb_off.png");
}

function draw() {
  background(220);
  imageMode(CENTER);
  if (brightness==1) {
    // (bulb,x pos,y pos,image width,image height)
  image(bulbon,width/2,height/2,300,300);
  } else {
  image(bulboff,width/2,height/2,300,300);
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
  //switch on the bulb
  on();
  print("mouse pressed!" + brightness)
}

function mouseReleased(){
  //switch off the bulb
  off();
  print("mouse released!" + brightness)
}