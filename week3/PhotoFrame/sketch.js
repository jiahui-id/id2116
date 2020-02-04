let image_filelist = ['images/orange.jpg','images/apple.jpg','images/banana.jpg'];
let imagelist = [];

//to ensure the images are loaded before starting the program
function preload (){
  for(let filename of image_filelist){
      imagelist.push(loadImage(filename) );
  }

print(imagelist.length+ "images are loaded into the list!");
  
}

function draw() {
  show ();
}

let current_image = 0;

function show(){
  image(imagelist[current_image], 0, 0);
}

function next(){
  current_image = current_image +1;
  
  if(current_image > imagelist.length-1){current_image = 0;}
  
  print("next image is" + current_image);
}

function prev(){
  current_image = current_image - 1;
  
  if(current_image < 0){
    current_image = imagelist.length - 1;
}

  print("prev image is" + current_image);
}
  
let nextButton;
let prevButton;

function setup(){
  createCanvas(600,400);
  
  prevButton = createButton('prev');
  prevButton.mousePressed(prev);
                            
  nextButton = createButton('next');
  nextButton.mousePressed(next);
                            
}