let vid = {
  accelerationY: 0,
  state: "no movement",
  Start: function() {
    this.state = "no movement";
  },

  Squeeze: function() {
    this.state = "Squeeze";
    squeezeCount = squeezeCount + 1;
    print("squeeze count: " + squeezeCount);
    if (squeezeCount > 3){
      squeezeCount = 1
    }
  },
  
  Jump: function() {
    this.state = "Jump";
    jumpCount = jumpCount + 1;
    print("jump count: " + jumpCount);
     if (jumpCount > 3){
      jumpCount = 1
    }
  },
  End: function() {
    this.state = "End";
    endCount = endCount + 1;
    print("end count: " + endCount);
     if (endCount > 3){
      endCount = 1
    }
  },
}

let videoSqueeze1;
let videoSqueeze2;
let videoSqueeze3;

let videoJump1;
let videoJump2;
let videoJump3;

// let imageHeart;
// let imageHeartFile = "images/heart.jpg";
// let imageRectangle;
// let imageRectangleFile = "images/rectangle.jpg";
// let imageCircle;
// let imageCircleFile = "images/circle.jpg";

let squeezeCount = 0;
let jumpCount = 0;
let endCount = 0;

let connectBtn;
let disconnectBtn;

function preload() {
  videoSqueeze1 = createVideo("images/ss1.mp4");
  videoSqueeze2 = createVideo("images/ss2.mp4");
  videoSqueeze3 = createVideo("images/ss3.mp4");
  videoJump1 = createVideo("images/jj1.mp4");
  videoJump2 = createVideo("images/jj2.mp4");
  videoJump3 = createVideo("images/jj3.mp4");

  // imageHeart = loadImage(imageHeartFile);
  // imageRectangle = loadImage(imageRectangleFile);
  // imageCircle = loadImage(imageCircleFile);
}

function setup() {
  createCanvas(1280,720);

  //add connect button
  connectBtn = createButton("connect");
  connectBtn.mousePressed(connect);
  //add disconnect button
  disconnectBtn = createButton("disconnect");
  disconnectBtn.mousePressed(disconnect);

  vid.accelerationY = -500;

  videoSqueeze1.hide();
  videoSqueeze2.hide();
  videoSqueeze3.hide();
  videoJump1.hide();
  videoJump2.hide();
  videoJump3.hide();

  // imageHeart.hide();
  // imageRectangle.hide();
  // imageCircle.hide();
}

function draw() {
  print(vid.state);

  if (vid.state === "Squeeze") {
      if (squeezeCount === 1) {
        image(videoSqueeze1, 0, 0, 1280,720);
      } else if (squeezeCount === 2) {
        image(videoSqueeze2, 0, 0, 1280,720);
      } else if (squeezeCount === 3) {
        image(videoSqueeze3, 0, 0, 1280,720);
      }
  }
 
  if (vid.state === "Jump") {
      if (jumpCount === 1) {
        image(videoJump1, 0, 0, 1280,720);
      } else if (jumpCount === 2) {
        image(videoJump2, 0, 0, 1280,720);
      } else if (jumpCount === 3) {
        image(videoJump3, 0, 0, 1280,720);
      }
  }

  // if (vid.state === "End") {
  //   if (endCount === 1) {
  //     image(imageHeart, 0, 0, 1280,720);
  //   } else if (endCount === 2) {
  //     image(imageRectangle, 0, 0, 1280,720);
  //   } else if (endCount === 3) {
  //     image(imageCircle, 0, 0, 1280,720);
  //   }
// }
}

//connect to micro:bit
function connect() {
  uBitConnectDevice(uBitEventHandler);
}

//disconnect to micro:bit
function disconnect() {
  uBitDisconnect(connectedDevice);

}

// function mousePressed(){
//  videoSqueeze.play();
// }

// function mouseReleased(){
//   videoJump.play();
// }

function handleData(data) {
  // print(data);
  let val = int(data.data);
  //accelration y = val;

  if (vid.state === "no movement") {
    if (val > -500) {
      vid.Squeeze();
      if (squeezeCount === 1) {
        videoSqueeze1.play();
      } else if (squeezeCount === 2) {
        videoSqueeze2.play();
      } else if (squeezeCount === 3) {
        videoSqueeze3.play();
      }
    }
  }
  if (vid.state === "Squeeze") {
    if (val < -500) {
      vid.Jump();
      if (jumpCount === 1) {
        videoJump1.play();
      } else if (jumpCount === 2) {
        videoJump2.play();
      } else if (jumpCount === 3) {
        videoJump3.play();
      }
    }
  }
  if (vid.state === "Jump") {
    if (val > -500) {
      vid.End();
      if (jumpCount === 1) {
        videoJump1.pause();
      } else if (jumpCount === 2) {
        videoJump2.puse();
      } else if (jumpCount === 3) {
        videoJump3.pause();
      }
    }
  }
  if (vid.state === "End") {
      if (val > -500) {
      vid.Start();
      }
   }
}     

function keyPressed() {
  if (keyCode === 32) { //press SPACE BAR to turn on fullscreen.
    toggleFullScreen();
    connectBtn.hide();
    disconnectBtn.hide();
  }
}

function toggleFullScreen() {
  let fs = fullscreen();
  fullscreen(!fs);
}
