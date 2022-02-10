import Matter from 'matter-js';

export default class Ground {
  constructor(x,y,w,h,sk) {
    this.body = Matter.Bodies.rectangle(x,y,w,h);
    Matter.World.add(world, this.body);
    this.body.isStatic = true;
    this.body.label = "Ground";
    this.sk = sk
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.sk.push()
    this.sk.translate(pos.x,pos.y)
    this.sk.fill(120)
    this.sk.rect(0,0, this.w, this.h);
    this.sk.pop()
  }
}