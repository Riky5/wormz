class Explosion {
  constructor({x: x, y: y, r: r, game: game}) {
    this.body = Matter.Bodies.circle(x,y,r,{label:"explosion"})
    Matter.World.add(game.world, this.body)
    this.r = r
    this.body.isStatic = true;
  }

  show(p) {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 0
    p.push()
    p.translate(pos.x,pos.y)
    p.fill(255, 0, 0)
    p.rectMode(CENTER)
    p.circle(0,0, this.r);
    p.pop()
  }

  static destroy = (explosion, game) => {
    Matter.World.remove(game.world, explosion);
    game.explosions.pop();
  }

} 

module.exports = Explosion;