const Bullet = require('../entities/Bullet')

class Controller{  

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
module.exports = Controller;
