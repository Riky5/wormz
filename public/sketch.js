let backgroundImg;
let floor;
let worm;
let wormImage0;
let worm2;

function preload()
{
  // load background image
  backgroundImg = loadImage("background-image.png");
  wormImage0 = loadImage('worm.png')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
   floor = new Floor();
   worm = new Worm();
   worm2 = loadImage('worm2.png');
}

function draw() {
  background(179, 236, 255);
  image(backgroundImg, 0, 0, windowWidth, windowHeight);

  fill(0, 179, 0);
  floor.display();
  worm.display();
  // image(wormImage0, 50, windowHeight - 200);
  image(worm2, windowWidth - 200, windowHeight - 200,90,90)
  // if (mouseIsPressed === true) {
  //   console.log(worm)
  //   worm.x += 5;
  // }
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    worm.x += 10;
    worm.setSpeed(1.5, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    worm.y += 10;
    // worm.setSpeed(1.5, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    worm.x -= 10;
    // worm.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    worm.y -= 30;
    worm.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    worm.setSpeed(0, 0);
  }
  return false;
}
class Floor {
  constructor() {
    this.width = windowWidth;
    this.height = 120;
  }

  display() {
    rect(0,windowHeight - 120, this.width, this.height);
  }
}

class Worm {
  constructor() {
    this.x = 50
    this.y = windowHeight - 200;
    this.width = 90;
    this.height = 90;
  }

  display() {
    image(wormImage0, this.x, this.y, this.width, this.height);
    // ellipse(mouseX,mouseY,this.width, this.height);
  }
}