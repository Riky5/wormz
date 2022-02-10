const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;
let ground;
let worm;
let worm2;

let backgroundImg;
let wormImage0;
let bulletsWormOne;
let bulletsWormTwo;
let bullet;

let turn = 1;

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

  bullet = new Bullet(worm.body.position.x - 25, worm.body.position.y, 50)
  // worm2 = loadImage('worm2.png');
  
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  fill(0, 179, 0);
  ground.display();
  worm.display();
  bullet.show();
  // image(wormImage0, 50, windowHeight - 200);
  // image(worm2, windowWidth - 200, windowHeight - 200,90,90)
}

// function keyPressed() {
//   if (keyCode == RIGHT_ARROW) {
//     Matter.Body.applyForce(worm.body, 600, 1.0)
//     console.log('moving')
//   }
//   else if (keyCode == DOWN_ARROW) {
//     worm.body.y += 10;
//   }
//   else if (keyCode == LEFT_ARROW) {
//     worm.x -= 10;
//   }
//   else if (keyCode == UP_ARROW) {
//     worm.y -= 30;
//   }
//   else if (key == ' ') {
//     worm.setSpeed(0, 0);
//   }
//   return false;
// }
