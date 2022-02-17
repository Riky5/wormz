const Matter = require("matter-js")

class ShootingController {
  
  static fireBullet(p, game, sound){
    let worm = game.getActiveWorm();

    if ( worm.canShoot === true ) {
      game.bulletExists = true;
      let wormPos = game.getWormPos(worm);
      let angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
      
      this.bullet = worm.currentWeapon.createBullet(wormPos, game)
      game.bullets.push(this.bullet);

      sound.play(); 
      Matter.Body.setVelocity(this.bullet.body,{x:(-p.cos(angleDeg))*this.bullet.velocity, y:-(p.sin(angleDeg))*this.bullet.velocity});
      game.timer.pauseTimer()
      setTimeout(() => {
        game.timer.resetTimer();
        game.changePlayerTurn();
        game.timer.resetTimer();
      },1000)
    worm.canShoot = false
    }
  }
}

module.exports = ShootingController;