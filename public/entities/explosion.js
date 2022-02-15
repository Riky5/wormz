
const Matter = require('matter-js');
class Explosion {
  constructor({x: x, y: y, r: r, game: game, img: img}) {
    this.body = Matter.Bodies.circle(x,y,r,{label:"explosion"})
    Matter.World.add(game.world, this.body)
    this.r = r
    this.body.isStatic = true;
    this.explosionEffect = img;
  }

  show(p) {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 0
    p.push()
    p.translate(pos.x,pos.y)

    // Uncomment below for a red circle explosion:
    // p.fill(255, 0, 0)
    // p.rectMode(p.CENTER)
    // p.circle(0,0, this.r);

    // Uncomment below for the explosion image:
    p.imageMode(p.CENTER);
    p.image(this.explosionEffect, 0, 0, this.r);

    p.pop()
  }

} 

module.exports = Explosion;