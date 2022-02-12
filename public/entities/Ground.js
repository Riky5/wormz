const Matter = require('matter-js');
const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
class Ground {
  constructor(x,y,w,h,world) {
    this.body = Matter.Bodies.rectangle(x,y,w,h,{label: "ground"});
    Matter.World.add(world, this.body)
    this.w = w;
    this.h = h;
    this.body.isStatic = true;
  }
  show(p) {
    const pos = this.body.position;
    const angle = this.body.angle;
    p.push()
    p.translate(pos.x,pos.y)
    p.fill(0, 179, 0)
    p.rectMode(p.CENTER)
    p.rect(0,0, this.w, this.h);
    p.pop()
  }
}

module.exports = Ground;