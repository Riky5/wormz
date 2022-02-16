class Lava {
  constructor({x: x,y: y, w: w,h: h, world: world, matter: matter, img: img, gif: gif}) {
    this.body = matter.Bodies.rectangle(x,y,w,h,{label: "lava"});
    matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.body.isStatic = true;
    this.body.restitution = 1;
    this.img = img;
    this.gif = gif;
  }
  show(p) {
    const pos = this.body.position;
    const angle = this.body.angle;
    p.push()
    p.translate(pos.x,pos.y)

    // p.fill(255, 0, 0)
    // p.rectMode(p.CENTER)
    // p.rect(0,0, this.w, this.h);

    // p.imageMode(p.CENTER);
    // p.image(this.img, 0, 0, this.w, this.h);
    p.animation(this.gif, 0, 0);

    p.pop()
  }
}

module.exports = Lava;