const Bullet = require('../entities/bullet')
const Explosion = require('../entities/explosion')
const Matter = require('matter-js');
const ZoomController = require('./zoomController')

class CollisionController{  
  
  static findAndDestroyBullet = (pair, game) => {
    game.bulletExists = false
    if(pair.bodyA.label === "bullet") {
      Bullet.destroy(pair.bodyA, game);
    } else {
      Bullet.destroy(pair.bodyB, game);
    }
  }

  static findAndDamageWorm = (pair, game, sounds, bulletDamageValue) => {
    let randomIndex = Math.floor(Math.random() * 2);
    if (CollisionController.isWormInCollision(pair)) {
      sounds[randomIndex].play();
      let worm = CollisionController.giveWormInCollision(pair, game);
      worm.reduceHP(bulletDamageValue);
      if (game.isWormDead()) {
        setTimeout(function() {game.setGameOver()}, 700);
      }
    }
  }

  static createExplosion = (pair,game, img) => {
    if(pair.bodyB.label === "bullet") {
      this.explosion = new Explosion({x: pair.bodyA.position.x, y: pair.bodyA.position.y , r: 120, game: game, img: img})
      game.explosions.push(this.explosion)
      CollisionController.destroyTerrain(this.explosion,game)
      CollisionController.findAndDestroyBullet(pair, game);
      Matter.World.remove(game.world, this.explosion.body);
      ZoomController.sf = 1
      setTimeout(function(){game.explosions.pop();},500)
      setTimeout(() => {ZoomController.sf = 2;},1000)
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
    if (CollisionController.isWormInCollision(pair)) {
      let worm = CollisionController.giveWormInCollision(pair, game);
      worm.reduceHP(100);
      if (game.isWormDead()) {
        worm.isAlive = false;
        setTimeout(function() {game.setGameOver()}, 700);
      }
    } 
  }
  
  static collision = (event, game, sounds, img) => {
    for (const pair of event.pairs) {
      if (CollisionController.isInCollision(pair, "bullet")) {
        if (CollisionController.isWormInCollision(pair)) {
          let bulletDamageValue = game.bullets[0].damage
          CollisionController.findAndDamageWorm(pair, game, sounds, bulletDamageValue); 
        }
        CollisionController.createExplosion(pair, game, img);
        game.timer.pauseTimer();
      }
      else if (CollisionController.isInCollision(pair, "lava")) 
      {
        CollisionController.lavaCollision(pair,game);
      }
    }
  }

  static isInCollision = (pair, label) => {
    return pair.bodyA.label === label || pair.bodyB.label === label
  }

  static isWormInCollision = (pair) => {
    return CollisionController.isInCollision(pair, "wormOne") || CollisionController.isInCollision(pair, "wormTwo")
  }

  static giveWormInCollision = (pair, game) => {
    if(CollisionController.isInCollision(pair, "wormOne")) {
      return game.worm
    } else if(CollisionController.isInCollision(pair, "wormTwo")) {
      return game.worm2
    }
  }
}

module.exports = CollisionController;
