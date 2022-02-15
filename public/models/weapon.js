const Matter = require('matter-js')

class Weapon {

  constructor({name: name, velocity: velocity, image: image, damage: damage, bulletModel: bullet, matter: matter = Matter}) {
    this.name = name;
    this.velocity = velocity;
    this.image = image;
    this.damage = damage;
    this.bulletModel = bullet; 
    this.matter = matter
  }

  createBullet(wormPos, game) {
    const bullet = new this.bulletModel( 
      {
      x: wormPos.x, 
      y: wormPos.y, 
      r: 15, 
      game: game, 
      img: this.image, 
      velocity: this.velocity, 
      damage: this.damage,
      matter: this.matter
    });
    return bullet;
  }

}

module.exports = Weapon;