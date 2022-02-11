class Controller{
  static moveLimit = 5;
  static moveCount = 0;
  static player1Turn = true
  constructor(){
    this.bullet;
  }

  static fireBullet(){
    if(Controller.player1Turn === true) {
      wormPos = {x: worm.body.position.x, y: worm.body.position.y }
      angleDeg = Math.atan2(mousePos.y - mousePos.y, wormPos.x - mousePos.x);
      this.bullet = new Bullet(worm.body.position.x + 50, worm.body.position.y - 40, 15)
    }
    else {
      wormPos = {x: worm2.body.position.x, y: worm2.body.position.y }
      angleDeg = Math.atan2(wormPos.y - mousePos.y, wormPos.x - mousePos.x);
      this.bullet = new Bullet(worm2.body.position.x - 50, worm2.body.position.y - 40, 15)
    }
    
    bullets.push(this.bullet);
    Matter.Body.setVelocity(this.bullet.body,{x:(-cos(angleDeg))*30, y:-(sin(angleDeg))*30})
    
    Controller.player1Turn = !Controller.player1Turn;
    Controller.moveCount = 0;
  }
}

document.addEventListener("mousemove", function(e) {
  mousePos = { x: e.pageX, y: e.pageY };
  angleDeg = Math.atan2(wormPos.y - mousePos.y, wormPos.x - mousePos.x);
})

// setting default for wormPos
let wormPos = { x: 0, y: 0};

initializeWorld = () => {
  moveLimit = 5;
  moveCount = 0;
  engine = Engine.create();
  world = engine.world;
  bullets = [];
  ground = new Ground(width/2, height-20, width, 180)
  worm = new Worm((windowWidth/10)*2, windowHeight - 100, "wormOne");
  worm2 = new Worm((windowWidth/10)*8, windowHeight - 100, "wormTwo", wormImg1);
  player1Turn = true
}

isInCollision = (pair, label) => {
  return pair.bodyA.label === label || pair.bodyB.label === label
}

findAndDestroyBullet = (pair) => {
  if(pair.bodyA.label === "bullet") {
    Bullet.destroy(pair.bodyA);
  } else {
    Bullet.destroy(pair.bodyB);
  }
}

findAndDamageWorm = (pair) => {
  if (isInCollision(pair, "wormTwo")) {
    worm2.reduceHP();
    isWormDead();
  } else if (isInCollision(pair, "wormOne")) {
    worm.reduceHP();
    isWormDead();
  }
}

collision = (event) => {
  for (const pair of event.pairs) {
    if(isInCollision(pair, "bullet")) {
      findAndDestroyBullet(pair);
      findAndDamageWorm(pair);
    }
  }
}

function isWormDead() {
  if(worm.hp === 0 || worm2.hp === 0) {
    mode = 2;
  }
}




