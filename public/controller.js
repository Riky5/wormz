let player1Turn;

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

function fireBullet() {
  if (player1Turn === true) {
    p2 = {x: worm.body.position.x, y: worm.body.position.y }
    angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    bullet = new Bullet(worm.body.position.x + 50, worm.body.position.y - 40, 15)
  } else {
    p2 = {x: worm2.body.position.x, y: worm2.body.position.y }
    angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    bullet = new Bullet(worm2.body.position.x - 20, worm2.body.position.y - 40, 15)
  }
  
  bullets.push(bullet);
  Matter.Body.setVelocity(bullet.body,{x:(-cos(angleDeg))*30, y:-(sin(angleDeg))*30})
  
  player1Turn = !player1Turn;
  moveCount = 0;
}



function moveWorm() {
  if(player1Turn === true) {
    worm.keyPressed(worm);
  } 
  else {
    worm2.keyPressed(worm2);
  }
}

function isInCollision(pair, label) {
  return pair.bodyA.label === label || pair.bodyB.label === label
}

function collision(event) {
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

function initializeWorld() {
  const moveLimit = 5;
  let moveCount = 0;
  engine = Engine.create();
  world = engine.world;
  bullets = [];
  ground = new Ground(width/2, height-20, width, 180)
  worm = new Worm(150, windowHeight - 30, "wormOne");
  worm2 = new Worm(850, windowHeight - 30, "wormTwo", wormImg1);
  player1Turn = true;
}


