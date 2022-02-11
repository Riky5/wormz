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


  worm = new Worm(150, windowHeight - 30, "wormOne");
  worm2 = new Worm(850, windowHeight - 30, "wormTwo", wormImg1);

  function isInCollision(pair, label) {
    return pair.bodyA.label === label || pair.bodyB.label === label
  }

  // Maybe be moved to the bullet class
  Matter.Events.on(engine, "collisionStart", (event) => {
    for (const pair of event.pairs) {
      console.log(pair.bodyA.label)
      console.log(pair.bodyB.label)
      if(isInCollision(pair, "bullet")) {
        if(pair.bodyA.label === "bullet") {
          Matter.World.remove(world, pair.bodyA)
          bulletsWormOne.pop();
        } else {
          Matter.World.remove(world, pair.bodyB)
          bulletsWormOne.pop();
        }
        if (isInCollision(pair, "wormTwo")) {
          worm2.reduceHP();
        } else if (isInCollision(pair, "wormOne")) {
          worm.reduceHP();
        }
      }
    }
  })

  // ground = Bodies.rectangle(0, windowHeight - 180, 10000, 80, {isStatic: true})
  Matter.World.add(world, ground)
  // console.log(ground)

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

  if(player1Turn === true) {
    p2 = {x: worm.body.position.x, y: worm.body.position.y }
    angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    bullet = new Bullet(worm.body.position.x + 50, worm.body.position.y - 40, 15)
  }
  else {
    p2 = {x: worm2.body.position.x, y: worm2.body.position.y }
    angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    bullet = new Bullet(worm2.body.position.x + 50, worm2.body.position.y - 40, 15)
  }

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

