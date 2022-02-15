const Bullet = require('../entities/bullet')
const Explosion = require('../entities/explosion')
const Matter = require('matter-js');

class CollisionController{  


  // Not sure where this should go, maybe in shooting controller?
  static findAndDestroyBullet = (pair, game) => {
    game.bulletExists = false
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
      CollisionController.destroyTerrain(this.explosion,game)
      CollisionController.findAndDestroyBullet(pair, game);
      Matter.World.remove(game.world, this.explosion.body);
      setTimeout(function(){game.explosions.pop();},500)
    } else if (pair.bodyB.label === "bullet") {
      this.explosion = new Explosion({x: pair.bodyB.position.x, y: pair.bodyB.position.y , r: 40, game: game})
      game.explosions.push(this.explosion)
      CollisionController.destroyTerrain(this.explosion,game)
      CollisionController.findAndDestroyBullet(pair, game);
      Matter.World.remove(game.world, this.explosion.body);
      setTimeout(function(){game.explosions.pop();},500)
    }
  }

  static destroyTerrain = (explosion,game) => {
    game.terrain.forEach ((piece, index) => {
      // Checks if the terrain is in a certain radius of the explosion and if so destroys it
      if ((Math.abs(piece.body.position.x - explosion.body.position.x) < 25) && (Math.abs(piece.body.position.y - explosion.body.position.y) < 25)) 
      {Matter.World.remove(game.world, piece.body);
        game.terrain.splice(index, 1)}
    })
  }

  static lavaCollision = (pair,game) => {
    if (CollisionController.isInCollision(pair, "wormTwo")) {
      game.worm2.reduceHP(50);
      if (game.isWormDead()) {game.setGameOver()}
      
    } else if (CollisionController.isInCollision(pair, "wormOne")) {
      game.worm.reduceHP(50);
      if (game.isWormDead()) {game.setGameOver()}
    }
  }
  
  static collision = (event, game) => {
    for (const pair of event.pairs) {
      if(CollisionController.isInCollision(pair, "bullet")) {
         CollisionController.createExplosion(pair,game)
        CollisionController.findAndDamageWorm(pair, game);
      }
      else if (CollisionController.isInCollision(pair, "bullet"), CollisionController.isInCollision(pair, "lava"))
      {CollisionController.lavaCollision(pair,game)}
    }
  }
}
module.exports = CollisionController;
