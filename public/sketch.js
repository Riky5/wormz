const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;
let ground;
let worm;
let worm2;

let backgroundImg;
let wormImg0;
let wormImg1;
let bulletsWormOne;
let p1;
let player1Turn;

function preload()
{
  // load background image
  backgroundImg = loadImage("images/background-image.png");
  wormImg0 = loadImage("images/worm0.png");
  wormImg1 = loadImage("images/worm1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  bulletsWormOne = [];
  // ground = Bodies.rectangle(width/2, height-10, width, 180, {isStatic: true})
  ground = new Ground(width/2, height-20, width, 180)

  // ground = Bodies.rectangle(0, windowHeight - 180, 10000, 80, {isStatic: true})
  Matter.World.add(world, ground)
  // console.log(ground)

  worm = new Worm(150, 0);
  worm2 = new Worm(850, 0, 70, 70, wormImg1);
  // console.log(worm)
  // Matter.Body.setMass(worm, 25)
  // worm2 = loadImage('worm2.png');
  player1Turn = true;
}

document.addEventListener("mousemove", function(e) {
  p1 = {
    x: e.pageX,
    y: e.pageY
  };
  angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
})
let p2 = {
  x: 0,
  y: 400
};

function mouseClicked() {

  p2 = {x: worm.body.position.x, y: worm.body.position.y }
   angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);

  bullet = new Bullet(worm.body.position.x, worm.body.position.y, 15)
  bulletsWormOne.push(bullet);
  Matter.Body.setVelocity(bullet.body,{x:(-cos(angleDeg))*30, y:-(sin(angleDeg))*30})
  player1Turn = !player1Turn;
  moveCount = 0;
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  // fill(0, 179, 0);
  ground.show();

  worm.show();
  worm2.show();

  bulletsWormOne.forEach(element => element.show());
}

const moveLimit = 5;
let moveCount = 0;

function keyPressed() {
  if(player1Turn === true) {
    worm.keyPressed(worm);
  } 
  else {
    worm2.keyPressed(worm2);
  }
};

