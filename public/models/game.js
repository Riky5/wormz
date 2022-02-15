
// Moved to a models folder for now not sure where it should be housed
const MAXMOVES = 5;
class Game {
  constructor({p: p, imgs: imgs, matter: matter, ground: ground, worm: worm, weaponModel: weaponModel, bulletModel: bulletModel}) {
    this.engine = matter.Engine.create();
    this.world = this.engine.world;
    this.bullets = [];
    this.ground = new ground({x: p.width/2, y: p.height-20, w: p.width, h: 180, world: this.world, matter: matter})
    this.worm = new worm({x: (p.windowWidth/10)*2, y: p.windowHeight - 100, options: "wormOne", img: imgs[0], matter: matter, weapons: this.createWeapons(weaponModel, bulletModel, imgs)});
    this.worm2 = new worm({x: (p.windowWidth/10)*8, y: p.windowHeight - 100, options: "wormTwo", img: imgs[1], matter: matter, weapons: this.createWeapons(weaponModel, bulletModel, imgs)});
    matter.World.add(this.world, [this.worm.body,this.worm2.body]);
    this.mode = "start";
    this.player1Turn = true;
    this.moveLimit = MAXMOVES;
    this.moveCount = 0;
    this.clockTimer = imgs[2];
  }

  changePlayerTurn = () => {
    this.resetMoveCount();
    this.player1Turn = !this.player1Turn;
  }

  resetMoveCount = () => {
    this.moveCount = 0;
  }

  switchToMode = (modeChoice) => {
    return this.mode = modeChoice;
  }

  getActiveWorm = () => {
    if(this.player1Turn) {
      return this.worm;
    } 
    else {
      return this.worm2;
    }
  }

  getActiveWormPos = () => {
    if(this.player1Turn) {
      return {x: this.worm.body.position.x + (this.worm.w / 2) , y: this.worm.body.position.y - (this.worm.h / 2)}
    } 
    else {
      return {x: this.worm2.body.position.x - (this.worm.w / 2), y: this.worm2.body.position.y - (this.worm.h / 2)}
    }
  }

  isWormDead = () => this.worm.hp === 0 || this.worm2.hp === 0;
  
  setGameOver = () => this.mode = 'gameOver';

  createWeapons = (weaponModel, bulletModel, imgs) => {
    const grenade = new weaponModel({name: 'Grenade', velocity: 30, image: imgs[3], damage: 10, bulletModel: bulletModel})
    const clock = new weaponModel({name: 'Clock', velocity: 10, image: imgs[2], damage: 15, bulletModel: bulletModel})
    return [grenade,clock]
  }
}

module.exports = Game;

