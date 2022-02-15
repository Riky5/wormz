const Bullet = require('../entities/bullet')

class CollisionController{  
  // Not sure where this should go, maybe in shooting controller?
  static findAndDestroyBullet = (pair, game) => {
    if(pair.bodyA.label === "bullet") {
      Bullet.destroy(pair.bodyA, game);
    } else {
      Bullet.destroy(pair.bodyB, game);
    }
  }

  static isInCollision = (pair, label) => {
    return pair.bodyA.label === label || pair.bodyB.label === label
  }
  
  static findAndDamageWorm = (pair, game) => {
    if (CollisionController.isInCollision(pair, "wormTwo")) {
      game.worm2.reduceHP();
      if (game.isWormDead()) {game.setGameOver()}
      
    } else if (CollisionController.isInCollision(pair, "wormOne")) {
      game.worm.reduceHP();
      if (game.isWormDead()) {game.setGameOver()}
    }
  }
  
  static collision = (event, game) => {
    for (const pair of event.pairs) {
      if(CollisionController.isInCollision(pair, "bullet")) {
        CollisionController.findAndDestroyBullet(pair, game);
        CollisionController.findAndDamageWorm(pair, game);
      }
    }
  }
}
module.exports = CollisionController;
