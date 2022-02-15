const Matter = require('matter-js');
class Bullet {
  constructor({x: x, y: y, r: r, game: game, img: img, velocity: velocity, damage: damage}) {
    this.body = Matter.Bodies.circle(x,y,r,{label:"bullet"});
    Matter.World.add(game.world, this.body);
    this.r = r;
    this.image = img;
    this.velocity = velocity;
    this.damage = damage;
  }
  
  show = (p) => {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 5;
    this.damage ;
    p.push();
    p.translate(pos.x,pos.y);

    //uncomment here for red circle
    // p.fill(255, 0, 0);
    // p.rectMode(p.CENTER);
    // p.circle(0,0, this.r);

    // uncomment here for grenade image..
    p.imageMode(p.CENTER);
    p.image(this.image, 0, 0, 15, 20);

    p.pop();
  }

  static destroy = (bullet, game) => {
    Matter.World.remove(game.world, bullet);
    game.bullets.pop();
  }

}

module.exports = Bullet;