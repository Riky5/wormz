const Matter = require('matter-js');s
class Bullet {
  constructor({x: x, y: y, r: r, game: game}) {
    this.body = Matter.Bodies.circle(x,y,r,{label:"bullet"});
    Matter.World.add(game.world, this.body);
    this.r = r;
  }
  
  show = (p) => {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 5;
    p.push();
    p.translate(pos.x,pos.y);
    p.fill(255, 0, 0);
    p.rectMode(p.CENTER);
    p.circle(0,0, this.r);
    p.pop();
  }

  static destroy = (bullet, game) => {
    Matter.World.remove(game.world, bullet);
    game.bullets.pop();
  }

}

module.exports = Bullet;