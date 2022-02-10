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

  ground = Bodies.rectangle(0, windowHeight - 180, 10000, 80, {isStatic: true})

  Matter.World.add(world, ground)

  worm = new Worm(80, 0);
  Matter.Body.setMass(worm, 25)

  // worm2 = loadImage('worm2.png');
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  fill(0, 179, 0);
  rect(ground.position.x, ground.position.y,  windowWidth, 180)
  // ground.display()

  worm.display();
  // image(wormImage0, 50, windowHeight - 200);
  // image(worm2, windowWidth - 200, windowHeight - 200,90,90)
}

const moveLimit = 5;
let moveCount = 0;

function keyPressed() {
  worm.keyPressed();
};