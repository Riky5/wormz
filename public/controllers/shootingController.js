const Matter = require('matter-js');
const ZoomController = require('./zoomController');

class ShootingController {
  static fireBullet(p, game, sound) {
    const worm = game.getActiveWorm();
    if ( worm.canShoot === true ) {
      game.bulletExists = true;
      const wormPos = game.getWormPos(worm);
      const angleDeg = ShootingController.setBulletAngle(p, wormPos);
      this.bullet = ShootingController.createBulletAndAddToGame(worm, game, wormPos);
      sound.play();
      Matter.Body.setVelocity(this.bullet.body, {x: (-p.cos(angleDeg))*this.bullet.velocity, y: -(p.sin(angleDeg))*this.bullet.velocity});
      worm.canShoot = false;
      ShootingController.pauseAfterShoot(game);
    }
  }

  static createBulletAndAddToGame(worm, game, wormPos) {
    this.bullet = worm.currentWeapon.createBullet(wormPos, game);
    game.bullets.push(this.bullet);
    return this.bullet;
  }

  static setBulletAngle = (p, wormPos) => {
    if (ZoomController.bottomScreen === true) {
      return Math.atan2(wormPos.y - p.mouseY - 200, wormPos.x - p.mouseX);
    } else {
      return Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
    }
  };

  static pauseAfterShoot = (game) => {
    game.timer.pauseTimer();
    setTimeout(() => {
      game.timer.resetTimer();
      game.changePlayerTurn();
      game.timer.resetTimer();
    }, game.intervalBetweenShots);
  };
}

module.exports = ShootingController;
