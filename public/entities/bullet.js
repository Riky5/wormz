const Matter = require('matter-js');

class Bullet {
  constructor({x: x, y: y, r: r, game: game, img: img, velocity: velocity, damage: damage, matter: matter}) {
    this.body = matter.Bodies.circle(x, y, r, {label: 'bullet'});
    matter.World.add(game.world, this.body);
    this.r = r;
    this.image = img;
    this.velocity = velocity;
    this.damage = damage;
  }

  show = (p) => {
    const pos = this.body.position;
    this.body.mass = 5;

    // Rendering bullet
    p.push();
    p.translate(pos.x, pos.y);
    p.imageMode(p.CENTER);
    p.image(this.image, 0, 0, 15, 20);
    p.pop();
  };

  static destroy = (bullet, game) => {
    Matter.World.remove(game.world, bullet);
    game.bullets.pop();
  };
}

module.exports = Bullet;
