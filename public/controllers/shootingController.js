const Matter = require("matter-js")
const Bullet = require('../entities/bullet');

class ShootingController {
  constructor() {
    this.bullet;
  }

  static fireBullet(p, game, img) {
    let angleDeg;
    if (game.player1Turn === true) {
      let wormPos = { x: game.worm.body.position.x, y: game.worm.body.position.y }
      angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
      this.bullet = new Bullet({ x: wormPos.x + 50, y: wormPos.y - 40, r: 15, game: game, img: img, matter: Matter });
    }
    else {
      let wormPos = { x: game.worm2.body.position.x, y: game.worm2.body.position.y }
      angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
      this.bullet = new Bullet({ x: wormPos.x - 50, y: wormPos.y - 40, r: 15, game: game, img: img, matter: Matter });
    }

    game.bullets.push(this.bullet);
    Matter.Body.setVelocity(this.bullet.body, { x: (-p.cos(angleDeg)) * 30, y: -(p.sin(angleDeg)) * 30 });

    game.changePlayerTurn();
    game.timer.resetTimer();
  }
}

module.exports = ShootingController;