class Obstacle {
  constructor({x: x,y: y, w: w,h: h, world: world, matter: matter, imgs: img}) {
    this.body = matter.Bodies.rectangle(x,y,w,h,{label: "ground"});
    matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.body.isStatic = true;
    this.img = img;
  }
  show(p) {
    const pos = this.body.position;
    const angle = this.body.angle;
    p.push();
    p.translate(pos.x,pos.y);

    // p.fill(0, 179, 0);
    // p.rectMode(p.CENTER);
    // p.rect(0,0, this.w, this.h);

    p.imageMode(p.CENTER);
    p.image(this.img, 0, 0, this.w, this.h);

    p.pop();
  }
} 

module.exports = Obstacle;