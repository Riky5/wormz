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
let explosion;
let explosions = [];


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
  worm2 = new Worm(950, 0, "wormTwo", wormImg1);

  function isInCollision(pair, label) {
    return pair.bodyA.label === label || pair.bodyB.label === label
  }

  // Maybe be moved to the bullet class
  Matter.Events.on(engine, "collisionStart", (event) => {
    for (const pair of event.pairs) {
      // added for water
      if(isInCollision(pair, "water")){
        if (isInCollision(pair, "wormTwo")) {
          Matter.Body.translate(worm2.body, {x: 0,y:-10})
          worm2.reduceHP();
        } else if (isInCollision(pair, "wormOne")) {
          Matter.Body.translate(worm.body, {x: 0,y:-10})
          worm.reduceHP();
        }
      }
      if(isInCollision(pair, "bullet")) {
        if(pair.bodyA.label === "bullet") {
          explosion = new Explosion(pair.bodyA.position.x,pair.bodyA.position.y,40)
          explosions.push(explosion);
          terrain_generated.forEach ((element,index) => 
            {if((Math.abs(element.body.position.x - explosion.body.position.x) < 25) && (Math.abs(element.body.position.y - explosion.body.position.y) < 25))
              {Matter.World.remove(world, element.body); 
                terrain_generated.splice(index, 1)};})
          Matter.World.remove(world, explosion.body)
          setTimeout(explosions.pop(),500)
          Matter.World.remove(world, pair.bodyA)
          bullets.pop();
        } else {
          explosion = new Explosion(pair.bodyB.position.x,pair.bodyB.position.y,50)
          explosions.push(explosion);
          terrain_generated.forEach ((element,index) => 
            {if((Math.abs(element.body.position.x - explosion.body.position.x) < 25) && (Math.abs(element.body.position.y - explosion.body.position.y) < 25))
              {Matter.World.remove(world, element.body); 
                terrain_generated.splice(index, 1)};})
          Matter.World.remove(world, explosion.body)
          setTimeout(explosions.pop(),500)
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

function remove_explosion(explosion)
  {Matter.World.remove(world, explosion)
    explosions.pop();}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  (terrain.loadTerrain()).forEach (element => element.show())
  explosions.forEach (element => element.show())

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
