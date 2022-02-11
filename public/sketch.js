const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;
let ground;
let worm;
let worm2;

let backgroundImg;
let wormImg0;
let wormImg1;
let bullets;
let p1;


function preload()
{
  backgroundImg = loadImage("images/background-image.png");
  wormImg0 = loadImage("images/worm0.png");
  wormImg1 = loadImage("images/worm1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  initializeWorld();
  Matter.Events.on(engine, "collisionStart", (event) => collision(event))
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  ground.show();
  worm.show();
  worm2.show();
  bullets.forEach(element => element.show());
}

function mouseClicked() {
  // method is in controller.js
  fireBullet();
}

function keyPressed() {
  // method is in controller.js
  moveWorm();
};
