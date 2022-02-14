class Weapon {

  constructor({name: name, velocity: velocity, image: image, damage: damage, bulletModel: bullet}) {
    this.name = name;
    this.velocity = velocity;
    this.image = image;
    this.damage = damage;
    this.bulletModel = bullet; 
  }

  createBullet(wormPos) {
    const bullet = new this.bulletModel( 
      {
      x: wormPos.x + 50, 
      y: wormPos.y + 40, 
      r: 15, 
      game: this.game, 
      img: this.image, 
      velocity: this.velocity, 
      damage: this.damage
    });
    return bullet;
  }

}

module.exports = Weapon;