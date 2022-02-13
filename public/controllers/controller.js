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
      if (game.isWormDead()) {game.setGameOver()}
      
    } else if (Controller.isInCollision(pair, "wormOne")) {
      game.worm.reduceHP();
      if (game.isWormDead()) {game.setGameOver()}
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
}
module.exports = Controller;
