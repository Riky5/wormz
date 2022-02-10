class Worm {
  constructor(x, y, w = 90, h = 90) {
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    const pos = this.body.position;
    const angle = this.body.angle;
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    // fixed double image
    // rectMode(CENTER); 
    // imageMode(CENTER);
    image(wormImage0, this.x, this.y, this.w, this.h)
  }
}