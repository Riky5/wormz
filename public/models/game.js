// Moved to a models folder for now not sure where it should be housed
const MAXMOVES = 5;
class Game {
  constructor({p: p, imgs: imgs, matter: matter, lava: lava, worm: worm,terrain: terrain}) {
    this.engine = matter.Engine.create();
    this.world = this.engine.world;
    this.bullets = [];
    this.explosions = [];
    this.lava = new lava({x: p.width/2, y: p.height-20, w: p.width, h: 180, world: this.world, matter: matter})
    this.worm = new worm({x: (p.windowWidth/10)*1.5, y: p.windowHeight - 300, options: "wormOne", img: imgs[0], matter: matter});
    this.worm2 = new worm({x: (p.windowWidth/10)*7, y: p.windowHeight - 300, options: "wormTwo", img: imgs[1], matter: matter});
    matter.World.add(this.world, [this.worm.body,this.worm2.body]);
    this.terrain = (new terrain).createTerrain(p,this.world,matter);
    this.mode = "start";
    this.player1Turn = true;
    this.moveLimit = MAXMOVES;
    this.moveCount = 0;
    this.clockTimer = imgs[2];
    this.bulletExists = false;
  }

  changePlayerTurn = () => {
    this.resetMoveCount();
    this.player1Turn = !this.player1Turn;
  }

  resetMoveCount = () => {
    this.moveCount = 0;
  }

  switchToMode(modeChoice) {
    this.mode = modeChoice;
  }

  uprightWorm = () => {
    if ((this.worm.body.angle != 0  && this.player1Turn != true )|| ((this.worm.body.angle > 1.5 || this.worm.body.angle < -1.5 ) && this.worm.body.velocity.x < 0.1 && this.worm.body.velocity.y < 0.1)) 
    {this.worm.body.angle = 0}
  if ((this.worm2.body.angle != 0 && this.player1Turn == true )|| ((this.worm2.body.angle > 1.5 || this.worm2.body.angle < -1.5 ) && this.worm.body.velocity.x < 0.1 && this.worm.body.velocity.y < 0.1)) 
    {this.worm2.body.angle = 0}
  }

  isWormDead = () => this.worm.hp <= 0 || this.worm2.hp <= 0;
  
  setGameOver = () => this.mode = 'gameOver';
}

module.exports = Game;

