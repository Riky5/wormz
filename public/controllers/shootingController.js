const Matter = require("matter-js")
const Bullet = require('../entities/bullet');

class ShootingController {
  constructor() {
    this.bullet;
  }

  static fireBullet(p, game, img, sound) {
    let angleDeg;
    game.bulletExists = true;
    if(game.player1Turn === true) {
      console.log("player 1 turn")
      angleDeg = ShootingController.fire(p, game.worm, game, img);
    } else {
      console.log("player 2 turn")
      angleDeg = ShootingController.fire(p, game.worm2, game, img);
    }
    game.bullets.push(this.bullet);

    sound.play(); 
    Matter.Body.setVelocity(this.bullet.body,{x:(-p.cos(angleDeg))*30, y:-(p.sin(angleDeg))*30});


    game.changePlayerTurn();
    game.timer.resetTimer();
  }

  static fire(p, worm, game, img) {
    if(worm.direction === "right") {
      return ShootingController.fireRight(p, worm, game, img);
    } else {
      return ShootingController.fireLeft(p, worm, game, img);
    }
  }

  static fireRight(p, worm, game, img) {
    console.log("fire right")
    let wormPos = {x: worm.body.position.x, y: worm.body.position.y }
    let angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
    this.bullet = new Bullet({x: wormPos.x + 50, y: wormPos.y - 40, r: 15, game: game, img: img, matter: Matter});
    return angleDeg;
  }

  static fireLeft(p, worm, game, img) {
    console.log("fire left")
    let wormPos = {x: worm.body.position.x, y: worm.body.position.y }
    let angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
    this.bullet = new Bullet({x: wormPos.x - 50, y: wormPos.y - 40, r: 15, game: game, img: img, matter: Matter});
    return angleDeg;
  }
}

module.exports = ShootingController;