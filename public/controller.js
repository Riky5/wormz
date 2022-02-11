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
  if(player1Turn === true) {
    p2 = {x: worm.body.position.x, y: worm.body.position.y }
    angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    bullet = new Bullet(worm.body.position.x + 50, worm.body.position.y - 40, 15)
  }
  else {
    p2 = {x: worm2.body.position.x, y: worm2.body.position.y }
    angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
    bullet = new Bullet(worm2.body.position.x - 20, worm2.body.position.y - 40, 15)
  }
  
  bullets.push(bullet);
  Matter.Body.setVelocity(bullet.body,{x:(-cos(angleDeg))*30, y:-(sin(angleDeg))*30})
  
  player1Turn = !player1Turn;
  moveCount = 0;
}

const moveLimit = 5;
let moveCount = 0;

function moveWorm() {
  if(player1Turn === true) {
    worm.keyPressed(worm);
  } 
  else {
    worm2.keyPressed(worm2);
  }
}


