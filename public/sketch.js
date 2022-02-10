const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;
let ground;
let worm;
let worm2;

let backgroundImg;
let wormImage0;
let bulletsWormOne;
let bulletsWormTwo;
let p1;

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
  // ground = Bodies.rectangle(width/2, height-10, width, 180, {isStatic: true})
  ground = new Ground(width/2, height-10, width, 20)
  Matter.World.add(world, ground)
  console.log(ground)

  worm = new Worm(100, 0);

  // worm2 = loadImage('worm2.png');
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

  bullet = new Bullet(worm.body.position.x, worm.body.position.y, 20)
  bulletsWormOne.push(bullet);
  Matter.Body.setVelocity(bullet.body,{x:(-cos(angleDeg))*30, y:-(sin(angleDeg))*30})
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  fill(0, 179, 0);
  ground.show();

  worm.show();
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
