const Matter = require('matter-js');

class Explosion {
  constructor({x: x, y: y, r: r, game: game, img: img}) {
    this.body = Matter.Bodies.circle(x, y, r, {label: 'explosion'});
    Matter.World.add(game.world, this.body);
    this.r = r;
    this.body.isStatic = true;
    this.explosionEffect = img;
  }

  show(p) {
    const pos = this.body.position;
    this.body.mass = 0;

    // rendering explosion
    p.push();
    p.translate(pos.x, pos.y);
    p.imageMode(p.CENTER);
    p.image(this.explosionEffect, 0, 0, this.r);
    p.pop();
  };
};

module.exports = Explosion;
