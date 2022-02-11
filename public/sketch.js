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
let moveLimit;
let moveCount;


preload = () =>
{
  backgroundImg = loadImage("images/background-image.png");
  wormImg0 = loadImage("images/worm0.png");
  wormImg1 = loadImage("images/worm1.png");
}

setup = () => {
  createCanvas(windowWidth, windowHeight - 50);
  initializeWorld();
  Matter.Events.on(engine, "collisionStart", (event) => collision(event))
}

draw = () => {
  background(backgroundImg);
  Matter.Engine.update(engine);
  ground.show();
  worm.show();
  worm2.show();
  bullets.forEach(element => element.show());
}

mouseClicked = () => {
  // method is in controller.js
  Controller.fireBullet();
}

keyPressed = () => {
  // method is in controller.js
  Controller.moveWorm();
};
