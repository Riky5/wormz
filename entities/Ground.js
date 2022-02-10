import Matter from 'matter-js';
import p5 from 'p5';

export default class Ground {
  constructor(x,y,w,h) {
    this.body = Matter.Bodies.rectangle(x,y,w,h);
    Matter.World.add(world, this.body);
    this.body.isStatic = true;
    this.body.label = "Ground";
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push()
    translate(pos.x,pos.y)
    fill(255)
    rect(0,0, this.w, this.h);
    pop()
  }
}

const sketchInstance = new p5();
console.log(sketchInstance);