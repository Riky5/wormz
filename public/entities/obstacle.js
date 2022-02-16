class Obstacle {
  constructor({x: x, y: y, w: w, h: h, world: world, matter: matter, imgs: img, friction: friction = 1}) {
    this.body = matter.Bodies.rectangle(x, y, w, h, {label: 'ground'});
    matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.body.isStatic = true;
    this.body.friction = friction;
    this.img = img;
  }
  show(p) {
    const pos = this.body.position;

    // render obstacle
    p.push();
    p.translate(pos.x, pos.y);
    p.imageMode(p.CENTER);
    p.image(this.img, 0, 0, this.w, this.h);
    p.pop();
  }
}

module.exports = Obstacle;
