const Matter = require("matter-js")

class ShootingController {
  constructor() {
    this.bullet;
  }

  static fireBullet(p, game, sound){
    game.bulletExists = true;
    let worm = game.getActiveWorm();
    let wormPos = game.getWormPos(worm);
    let angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
    
    this.bullet = worm.currentWeapon.createBullet(wormPos, game)
    game.bullets.push(this.bullet);

    sound.play(); 
    Matter.Body.setVelocity(this.bullet.body,{x:(-p.cos(angleDeg))*this.bullet.velocity, y:-(p.sin(angleDeg))*this.bullet.velocity});
    setTimeout(() => {
      game.timer.resetTimer();
    },1000)
    game.changePlayerTurn();
  }
}

module.exports = ShootingController;