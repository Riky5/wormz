class CircleObstacle {
  constructor(x,y,r) {
    this.body = Matter.Bodies.circle(x,y,r,{label:"circle-obstacle"});
    Matter.World.add(world, this.body)
    this.r = r
    this.body.isStatic = true;
  }
  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push()
    fill(0, 255, 0)
    circle(pos.x,pos.y - 100, this.r);
    pop()
  }
}