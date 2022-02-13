class Explosion {
  constructor(x,y,r) {
    this.body = Matter.Bodies.circle(x,y,r,{label:"explosion"})
    Matter.World.add(world, this.body)
    this.r = r
    this.body.isStatic = true;
  }
  
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 0
    push()
    translate(pos.x,pos.y)
    fill(255, 0, 0)
    rectMode(CENTER)
    circle(0,0, this.r);
    pop()
  }

}