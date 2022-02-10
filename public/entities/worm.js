class Worm {
  constructor(x, y, w, h) {
    this.body = Matter.Bodies.rectangle(x, y, 90, 90);
    Matter.World.add(world, this.body);
    this.x = x;
    this.y = y;
    this.w = 90;
    this.h = 90;
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