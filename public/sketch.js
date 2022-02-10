const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;
let ground;
let worm;

let backgroundImg;
let wormImage0;

function preload()
{
  // load background image
  backgroundImg = loadImage("background-image.png");
  wormImage0 = loadImage('worm0.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();

  worm = new Worm(80, windowHeight - 160);
  // worm2 = loadImage('worm2.png');
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  fill(0, 179, 0);
  ground.display();

  worm.display();
  worm2.display();
  // image(wormImage0, 50, windowHeight - 200);
  // image(worm2, windowWidth - 200, windowHeight - 200,90,90)
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    worm.body.x += 10;
    // worm.setSpeed(1.5, 0);
  }
  else if (keyCode == DOWN_ARROW) {
    worm.body.y += 10;
    // worm.setSpeed(1.5, 90);
  }
  else if (keyCode == LEFT_ARROW) {
    worm.x -= 10;
    // worm.setSpeed(1.5, 180);
  }
  else if (keyCode == UP_ARROW) {
    worm.y -= 30;
    // worm.setSpeed(1.5, 270);
  }
  else if (key == ' ') {
    worm.setSpeed(0, 0);
  }
  return false;
}
class Ground {
  constructor() {
    this.width = windowWidth;
    this.height = 120;
  }

  display() {
    rect(0,windowHeight - 120, this.width, this.height);
  }
}

class Worm {
  constructor(x, y, w, h) {
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
    this.x = x;
    this.y = y;
    this.w = 90;
    this.h = 90;
  }

  display() {
    const pos = this.body.position;
    const angle = this.body.angle;
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    rectMode(CENTER);
    imageMode(CENTER);
    image(wormImage0, this.x, this.y, this.w, this.h)
    // ellipse(mouseX,mouseY,this.width, this.height);
  }
}