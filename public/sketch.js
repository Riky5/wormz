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
let terrain;


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
  terrain = new Terrain
  terrain.createTerrain()

  worm = new Worm(150, 0, "wormOne");
  worm2 = new Worm(850, 0, "wormTwo", wormImg1);

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
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  (terrain.loadTerrain()).forEach (element => element.show())

  worm.show();
  if ((worm.body.angle != 0  && player1Turn != true )|| ((worm.body.angle > 1.5 || worm.body.angle < -1.5 ) && worm.body.velocity.x < 0.1 && worm.body.velocity.y < 0.1)) {worm.body.angle = 0}
  if (worm.body.angularVelocity > 1) {Matter.Body.setAngularVelocity(worm.body,0); Matter.Body.setVelocity(worm.body,{x:0, y:0})}
  worm2.show();
  if ((worm2.body.angle != 0 && player1Turn == true )|| ((worm2.body.angle > 1.5 || worm2.body.angle < -1.5 ) && worm.body.velocity.x < 0.1 && worm.body.velocity.y < 0.1)) {worm2.body.angle = 0}
  if (worm2.body.angularVelocity > 1) {Matter.Body.setAngularVelocity(worm2.body,0); Matter.Body.setVelocity(worm2.body,{x:0, y:0})}
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
