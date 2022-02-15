const Matter = require("matter-js")
const TimerController = require("./timerController");

class ShootingController {
  constructor() {
    this.bullet;
  }

  static fireBullet(p, game){
    let worm = game.getActiveWorm();
    let wormPos = game.getActiveWormPos();
    let angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
    
    this.bullet = worm.currentWeapon.createBullet(wormPos, game)

    game.bullets.push(this.bullet);
    Matter.Body.setVelocity(this.bullet.body,{x:(-p.cos(angleDeg))*this.bullet.velocity, y:-(p.sin(angleDeg))*this.bullet.velocity});

    game.changePlayerTurn();
    TimerController.resetTimer();
  }
}

module.exports = ShootingController;