class Bullet {
  constructor(x,y,r) {
    this.body = Matter.Bodies.circle(x,y,r,{label:"bullet"})
    Matter.World.add(world, this.body)
    this.r = r
  }
  
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 5
    push()
    translate(pos.x,pos.y)
    fill(255, 0, 0)
    rectMode(CENTER)
    circle(0,0, this.r);
    pop()
  }

}