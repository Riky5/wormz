const Matter = require('matter-js');
const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
class Bullet {
  constructor(x,y,r) {
    this.body = Matter.Bodies.circle(x,y,r,{label:"bullet"})
    Matter.World.add(world, this.body)
    this.r = r
  }
  
  show = (p) => {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 5
    p.push()
    p.translate(pos.x,pos.y)
    p.fill(255, 0, 0)
    p.rectMode(CENTER)
    p.circle(0,0, this.r);
    p.pop()
  }

  static destroy = (bullet) => {
    Matter.World.remove(world, bullet);
    bullets.pop(); //will need to change
  }

}

module.exports = Bullet;