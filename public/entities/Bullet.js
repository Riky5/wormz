class Bullet {
  constructor(x,y,r) {
    this.body = Matter.Bodies.circle(x,y,r,{label:"bullet"})
    Matter.World.add(world, this.body)
    this.r = r
  }
  
  show = () => {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 5
    push()
    translate(pos.x,pos.y)
    // uncomment here for red ball
    // fill(255, 0, 0)
    // rectMode(CENTER)
    // circle(0,0, this.r);

    // uncomment here for grenade image..
    imageMode(CENTER);
    image(grenade, 0, 0, 15, 20);

    pop()
  }

  static destroy = (bullet) => {
    Matter.World.remove(world, bullet);
    bullets.pop();
  }

}