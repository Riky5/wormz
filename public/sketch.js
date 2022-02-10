const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;
let ground;
let worm;
let worm2;

let backgroundImg;
let wormImage0;
let bulletsWormOne;
let bulletsWormTwo;

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
  bulletsWormOne = [];
  ground = Bodies.rectangle(width/2, height-10, width, 180, {isStatic: true})

  Matter.World.add(world, ground)
  console.log(ground)

  worm = new Worm(100, 0);

  // worm2 = loadImage('worm2.png');
}

function mouseClicked() {
  console.log("worm x" + worm.body.position.x);
  console.log("worm y" + worm.body.position.y);
  let bullet = new Bullet(worm.body.position.x, worm.body.position.y - 100, 50);
  console.log("bullet position")
  console.log(bullet.body.position)
  bulletsWormOne.push(bullet);
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  fill(0, 179, 0);
  rect(ground.position.x, ground.position.y,  windowWidth, 180)

  worm.display();
  bulletsWormOne.forEach(element => element.show())
  // image(wormImage0, 50, windowHeight - 200);
  // image(worm2, windowWidth - 200, windowHeight - 200,90,90)
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    Matter.Body.applyForce(worm.body, worm.body.position, { x: 0.5, y:0 })
    console.log("worm position")
    console.log(worm.body.position)
  }
  else if (keyCode == DOWN_ARROW) {
    worm.body.y += 10;
  }
  else if (keyCode == LEFT_ARROW) {
    worm.x -= 10;
  }
  else if (keyCode == UP_ARROW) {
    worm.y -= 30;
  }
  else if (key == ' ') {
    worm.setSpeed(0, 0);
  }
  return false;
}
