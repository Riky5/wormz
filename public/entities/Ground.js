const Matter = require('matter-js');
const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
class Ground {
  constructor(x,y,w,h) {
    this.body = Matter.Bodies.rectangle(x,y,w,h,{label: "ground"});
    Matter.World.add(world, this.body)
    this.w = w;
    this.h = h;
    this.body.isStatic = true;
  }
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    fill(0, 179, 0)
    rectMode(CENTER)
    rect(0,0, this.w, this.h);
    pop()
  }
}