const Bullet = require('../entities/bullet')
const Explosion = require('../entities/explosion')
const Matter = require('matter-js');

class CollisionController{  
  constructor() {
    this.explosion;
  }


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

  static createExplosion = (pair,game) => {
    if(pair.bodyA.label === "bullet") {
      this.explosion = new Explosion({x: pair.bodyA.position.x, y: pair.bodyA.position.y , r: 40, game: game})
      game.explosions.push(this.explosion)
      CollisionController.findAndDestroyBullet(pair, game);
      explosion = this.explosion
      setTimeout(function(){CollisionController.destroyExplosion(explosion, game)},500)
    } else if (pair.bodyB.label === "bullet") {
      this.explosion = new Explosion({x: pair.bodyB.position.x, y: pair.bodyB.position.y , r: 40, game: game})
      game.explosions.push(this.explosion)
      CollisionController.findAndDestroyBullet(pair, game);
      Matter.World.remove(game.world, this.explosion.body);
      setTimeout(function(){game.explosions.pop();},500)
    }
  }

  // static destroyTerrain = (pair,game) => {
  //   if (CollisionController.isInCollision(pair,'obstacle') && )

  // }
  
  static collision = (event, game) => {
    for (const pair of event.pairs) {
      if(CollisionController.isInCollision(pair, "bullet")) {
         CollisionController.createExplosion(pair,game)
        // CollisionController.destroyTerrain(pair,game)
        CollisionController.findAndDamageWorm(pair, game);
      }
    }
  }
}
module.exports = CollisionController;
