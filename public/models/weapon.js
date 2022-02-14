class Weapon {

  constructor({name: name, velocity: velocity, image: image, damage: damage, bulletModel: bullet, worm: worm, game: game }) {
    this.name = name;
    this.velocity = velocity;
    this.image = image;
    this.damage = damage;
    this.bulletModel = bullet; 
    this.worm = worm;
    this.game = game;
  }

  createBullet() {
    return new this.bulletModel( {
      x: this.worm.body.position.x + 50, 
      y: this.worm.body.position.y + 40, 
      r: 15, 
      game: this.game, 
      img: this.image, 
      velocity: this.velocity, 
      damage: this.damage
    });
  }

}

module.exports = Weapon;