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
let mode;


function preload()
{
  backgroundImg = loadImage("images/background-image.png");
  wormImg0 = loadImage("images/worm0.png");
  wormImg1 = loadImage("images/worm1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  bullets = [];
  ground = new Ground(width/2, height-20, width, 180)

  worm = new Worm(150, windowHeight - 30, "wormOne");
  worm2 = new Worm(850, windowHeight - 30, "wormTwo", wormImg1);

  function isInCollision(pair, label) {
    return pair.bodyA.label === label || pair.bodyB.label === label
  }

  // Maybe be moved to the bullet class
  Matter.Events.on(engine, "collisionStart", (event) => {
    for (const pair of event.pairs) {
      if(isInCollision(pair, "bullet")) {
        if(pair.bodyA.label === "bullet") {
          Matter.World.remove(world, pair.bodyA)
          bullets.pop();
        } else {
          Matter.World.remove(world, pair.bodyB)
          bullets.pop();
        }
        if (isInCollision(pair, "wormTwo")) {
          worm2.reduceHP();
        } else if (isInCollision(pair, "wormOne")) {
          worm.reduceHP();
        }
      }
    }
  })
  player1Turn = true;
  textSize(40);
  mode = 0;
}

function draw() {
  if(mode === 0) {
   text("PRESS ENTER TO START GAME", windowWidth / 2 - 300, windowHeight / 2)
  }
  else {
    background(backgroundImg);
    Matter.Engine.update(engine);
    ground.show();
  
    worm.show();
    worm2.show();
  
    bullets.forEach(element => element.show());
  }
}

function mouseClicked() {
  // method is in controller.js
  if(mode === 1) {
    fireBullet(); 
  }
}

function keyPressed() {
  // method is in controller.js
  if(mode === 0) {
    if(keyCode ===ENTER) {
      mode = 1;
    }
  }
  else {
    moveWorm();
  }
 
};
