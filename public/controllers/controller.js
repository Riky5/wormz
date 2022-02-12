const Bullet = require('../entities/Bullet')
const Matter = require('matter-js')

class Controller{
  static moveLimit = 5;
  static moveCount = 0;
  static player1Turn = true

  constructor() {
    this.bullet;
  }

  static fireBullet(p, game){
    let angleDeg;
    if(Controller.player1Turn === true) {
      let wormPos = {x: game.worm.body.position.x, y: game.worm.body.position.y }
      angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
      this.bullet = new Bullet(wormPos.x + 50, wormPos.y - 40, 15, game);
    }
    else {
      let wormPos = {x: game.worm2.body.position.x, y: game.worm2.body.position.y }
      angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
      this.bullet = new Bullet(wormPos.x - 50, wormPos.y - 40, 15, game);
    }

    game.bullets.push(this.bullet);
    Matter.Body.setVelocity(this.bullet.body,{x:(-p.cos(angleDeg))*30, y:-(p.sin(angleDeg))*30});

    Controller.player1Turn = !Controller.player1Turn;
    Controller.moveCount = 0;
  }

  static isInCollision = (pair, label) => {
    return pair.bodyA.label === label || pair.bodyB.label === label
  }
  
  static findAndDestroyBullet = (pair, game) => {
    if(pair.bodyA.label === "bullet") {
      Bullet.destroy(pair.bodyA, game);
    } else {
      Bullet.destroy(pair.bodyB, game);
    }
  }
  
  static findAndDamageWorm = (pair, game) => {
    if (Controller.isInCollision(pair, "wormTwo")) {
      game.worm2.reduceHP();
      Controller.isWormDead(game);
    } else if (Controller.isInCollision(pair, "wormOne")) {
      game.worm.reduceHP();
      Controller.isWormDead(game);
    }
  }
  
  static collision = (event, game) => {
    for (const pair of event.pairs) {
      if(Controller.isInCollision(pair, "bullet")) {
        Controller.findAndDestroyBullet(pair, game);
        Controller.findAndDamageWorm(pair, game);
      }
    }
  }
  
  static isWormDead(game) {
    if(game.worm.hp === 0 || game.worm2.hp === 0) {
      game.mode = 'gameOver';
    }
  }

}

// // document.addEventListener("mousemove", function(e) {
// //   mousePos = { x: e.pageX, y: e.pageY };
// //   angleDeg = Math.atan2(wormPos.y - mousePos.y, wormPos.x - mousePos.x);
// // })

// // setting default for wormPos
// let wormPos = { x: 0, y: 0};



module.exports = Controller;




