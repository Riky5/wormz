class Controller{
  static moveLimit = 5;
  static moveCount = 0;
  static player1Turn = true
  constructor(){
    this.bullet;
  }

  static fireBullet(){
    if(Controller.player1Turn === true) {
      p2 = {x: worm.body.position.x, y: worm.body.position.y }
      angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      this.bullet = new Bullet(worm.body.position.x + 50, worm.body.position.y - 40, 15)
    }
    else {
      p2 = {x: worm2.body.position.x, y: worm2.body.position.y }
      angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
      this.bullet = new Bullet(worm2.body.position.x - 50, worm2.body.position.y - 40, 15)
    }
    
    bullets.push(this.bullet);
    Matter.Body.setVelocity(this.bullet.body,{x:(-cos(angleDeg))*30, y:-(sin(angleDeg))*30})
    
    Controller.player1Turn = !Controller.player1Turn;
    Controller.moveCount = 0;
  }
}

document.addEventListener("mousemove", function(e) {
  p1 = { x: e.pageX, y: e.pageY };
  angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
})

// setting default for p2
let p2 = { x: 0, y: 0};

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

collision = (event) => {
  for (const pair of event.pairs) {
    if(isInCollision(pair, "bullet")) {
      if(pair.bodyA.label === "bullet") {
        Bullet.destroy(pair.bodyA);
      } else {
        Bullet.destroy(pair.bodyB);
      }
      if (isInCollision(pair, "wormTwo")) {
        worm2.reduceHP();
      } else if (isInCollision(pair, "wormOne")) {
        worm.reduceHP();
      }
    }
  }
}




