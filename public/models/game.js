
// Moved to a models folder for now not sure where it should be housed
const MAXMOVES = 5;
class Game {

  constructor({p: p, imgs: imgs, matter: matter, lava: lava, worm: worm,terrain: terrain, timer:timerController, weaponModel: weaponModel, bulletModel: bulletModel}) {
    this.engine = matter.Engine.create();
    this.world = this.engine.world;
    this.bullets = [];
    this.explosions = [];
    this.lava = new lava({x: p.width/2, y: p.height-20, w: p.width, h: 180, world: this.world, matter: matter})
    this.worm = new worm({x: (p.windowWidth/10)*1.5, y: p.windowHeight - 300, options: "wormOne", img: imgs[0], matter: matter, direction: "right", weapons: this.createWeapons(weaponModel, bulletModel, imgs)});
    this.worm2 = new worm({x: (p.windowWidth/10)*6, y: p.windowHeight - 300, options: "wormTwo", img: imgs[1], matter: matter, direction: "left", weapons: this.createWeapons(weaponModel, bulletModel, imgs)});
    matter.World.add(this.world, [this.worm.body,this.worm2.body]);
    this.terrain = (new terrain).createTerrain(p,this.world,matter);
    this.mode = "start";
    this.player1Turn = true;
    this.moveLimit = MAXMOVES;
    this.moveCount = 0;
    this.clockTimer = imgs[2];
    this.bulletExists = false;
    this.timer = new timerController();
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

  getWormPos = (worm) => {
    if(worm.direction === "right") {
      return {x: worm.body.position.x + (worm.w / 2) + 10, y: worm.body.position.y - (worm.h)}
    } 
    else {
      return {x: worm.body.position.x - (worm.w / 2) - 10, y: worm.body.position.y - (worm.h)}
    }
  }

  uprightWorm = () => {
    if ((this.worm.body.angle != 0  && this.player1Turn != true )|| ((this.worm.body.angle > 1.5 || this.worm.body.angle < -1.5 ) && this.worm.body.velocity.x < 0.1 && this.worm.body.velocity.y < 0.1)) 
    {this.worm.body.angle = 0}
  if ((this.worm2.body.angle != 0 && this.player1Turn == true )|| ((this.worm2.body.angle > 1.5 || this.worm2.body.angle < -1.5 ) && this.worm.body.velocity.x < 0.1 && this.worm.body.velocity.y < 0.1)) 
    {this.worm2.body.angle = 0}
  }

  isWormDead = () => this.worm.hp <= 0 || this.worm2.hp <= 0;
  
  setGameOver = () => this.mode = 'gameOver';

  createWeapons = (weaponModel, bulletModel, imgs) => {
    const grenade = new weaponModel({name: 'Grenade', velocity: 15, image: imgs[3], damage: 25, bulletModel: bulletModel})
    const clock = new weaponModel({name: 'Clock', velocity: 20, image: imgs[2], damage: 15, bulletModel: bulletModel})
    const worm = new weaponModel({name: 'Worm', velocity: 40, image: imgs[1], damage: 5, bulletModel: bulletModel})
    return [grenade,clock, worm]
  }

  setActiveWormDirection = (p) => {
    if(this.player1Turn === true) {
      if (p.mouseX < this.worm.body.position.x) {
        this.worm.setDirection("left");
      } else {
        this.worm.setDirection("right");
      }
    } else {
      if (p.mouseX < this.worm2.body.position.x) {
        this.worm2.setDirection("left");
      } else {
        this.worm2.setDirection("right");
      }
    }
  }
}

module.exports = Game;

