class Controller{
  static player1Turn = true;
  static timeLimit = 20;
  static timer = 0;
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
    MoveController.resetCount();
    this.resetTimer();
  }

  static changeTurn() {
    Controller.player1Turn = !Controller.player1Turn;
  }

  static timeLeftOnTurn() {
    if (frameCount % 60 === 0) {
      this.timer += (1/3)
    }
    return this.timeLimit - this.timer;
  }

  static resetTimer() {
    this.timer = 0
  }
}

document.addEventListener("mousemove", function(e) {
  mousePos = { x: e.pageX, y: e.pageY };
  angleDeg = Math.atan2(wormPos.y - mousePos.y, wormPos.x - mousePos.x);
})

// setting default for wormPos
let wormPos = { x: 0, y: 0};

initializeWorld = () => {
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
    if (isWormDead()) {
      switchToMode('gameOver')
    };
  } else if (isInCollision(pair, "wormOne")) {
    worm.reduceHP();
    if (isWormDead()) {
      switchToMode('gameOver')
    };
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
  return (worm.hp === 0 || worm2.hp === 0);
}

function timerForTurn() {
  if (Controller.timeLeftOnTurn() <= 0) {
    Controller.changeTurn()
    Controller.resetTimer();
    MoveController.resetCount();
  } 
  else if(Controller.timeLeftOnTurn() <= 5) {
    fill(220,0,0)
  }
  return Controller.timeLeftOnTurn().toFixed();
}