const Matter = require("matter-js")
const TimerController = require("./timerController");
const Bullet = require('../entities/bullet');

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
    setTimeout(function(){game.changePlayerTurn();},1000)
    game.timer.resetTimer();
  }

  // static fire(p, worm, game, img) {
  //   if(worm.direction === "right") {
  //     return ShootingController.fireRight(p, worm, game, img);
  //   } else {
  //     return ShootingController.fireLeft(p, worm, game, img);
  //   }
  // }

  // static fireRight(p, worm, game, img) {
  //   console.log("fire right")
  //   let wormPos = {x: worm.body.position.x, y: worm.body.position.y }
  //   let angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
  //   this.bullet = new Bullet({x: wormPos.x + 50, y: wormPos.y - 40, r: 15, game: game, img: img, matter: Matter});
  //   return angleDeg;
  // }

  // static fireLeft(p, worm, game, img) {
  //   console.log("fire left")
  //   let wormPos = {x: worm.body.position.x, y: worm.body.position.y }
  //   let angleDeg = Math.atan2(wormPos.y - p.mouseY, wormPos.x - p.mouseX);
  //   this.bullet = new Bullet({x: wormPos.x - 50, y: wormPos.y - 40, r: 15, game: game, img: img, matter: Matter});
  //   return angleDeg;
  // }
}

module.exports = ShootingController;