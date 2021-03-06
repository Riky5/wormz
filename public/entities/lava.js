class Lava {
  constructor({x: x, y: y, w: w, h: h, world: world, matter: matter, img: imgs}) {
    this.body = matter.Bodies.rectangle(x, y, w, h, {label: 'lava'});
    matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.body.isStatic = true;
    this.body.restitution = 1;
    this.img = imgs[4];
  }

  show(p) {
    const pos = this.body.position;

    // render lava
    p.push();
    p.translate(pos.x, pos.y);
    p.imageMode(p.CENTER);
    p.image(this.img, 0, 0, this.w, this.h);
    p.pop();
  }
}
module.exports = Lava;

