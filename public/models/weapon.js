class Weapon {

  constructor({name: name, velocity: velocity, image: image, damage: damage, bulletModel: bullet, game: game }) {
    this.name = name;
    this.velocity = velocity;
    this.image = image;
    this.damage = damage;
    this.bulletModel = bullet; 
    this.game = game;
  }

  createBullet() {
    let worm = this.game.getActiveWorm();
    return new this.bulletModel( 
      {
      x: worm.body.position.x + 50, 
      y: worm.body.position.y + 40, 
      r: 15, 
      game: this.game, 
      img: this.image, 
      velocity: this.velocity, 
      damage: this.damage
    });
  }

}

module.exports = Weapon;