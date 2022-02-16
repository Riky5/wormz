const ZoomController = require("../controllers/zoomController");
// Moved to a models folder for now not sure where it should be housed
const MAXMOVES = 5;
class Game {

  constructor({p: p, imgs: imgs, matter: matter, lava: lava, worm: worm,terrain: terrain, timer:timerController, weaponModel: weaponModel, bulletModel: bulletModel, screenheight: screenheight, screenwidth:screenwidth}) {
    this.engine = matter.Engine.create();
    this.world = this.engine.world;
    this.bullets = [];
    this.explosions = [];
    this.lava = new lava({x: screenwidth / 2, y: 950, w: screenwidth * 1.5, h: 180, world: this.world, matter: matter, img: imgs})
    this.worm = new worm({x: 300, y: 200, options: "wormOne", img: imgs[0], matter: matter, direction: "right", weapons: this.createWeapons(weaponModel, bulletModel, imgs), graveImg: imgs[8]});
    this.worm2 = new worm({x: 1200, y: 200, options: "wormTwo", img: imgs[1], matter: matter, direction: "left", weapons: this.createWeapons(weaponModel, bulletModel, imgs), graveImg: imgs[8]});
    matter.World.add(this.world, [this.worm.body,this.worm2.body]);
    this.terrain = (new terrain).createTerrain(this.world,matter, imgs, screenwidth,screenheight);
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

  isWormDead = () => this.worm.hp <= 0 || this.worm2.hp <= 0;
  
  setGameOver = () => {this.mode = 'gameOver'; ZoomController.sf = 1}

  createWeapons = (weaponModel, bulletModel, imgs) => {
    const grenade = new weaponModel({name: 'Grenade', velocity: 15, image: imgs[3], damage: 25, bulletModel: bulletModel})
    const tennisBall = new weaponModel({name: 'TennisBall', velocity: 25, image: imgs[6], damage: 15, bulletModel: bulletModel})
    const tomato = new weaponModel({name: 'Tomato', velocity: 35, image: imgs[7], damage: 5, bulletModel: bulletModel})
    return [grenade, tennisBall, tomato]
  }

  setActiveWormDirection = (p) => {
    let mouse_position;
    if(this.player1Turn === true) {
      if (ZoomController.second_screen === true) {mouse_position = p.mouseX + 500 * ZoomController.sf}
      else mouse_position = p.mouseX
      if (mouse_position < this.worm.body.position.x) {
        this.worm.setDirection("left");
      } else {
        this.worm.setDirection("right");
      }
    } else {
      if (ZoomController.second_screen === true) {mouse_position = p.mouseX + 500 * ZoomController.sf}
      else mouse_position = p.mouseX
      if (mouse_position < this.worm2.body.position.x) {
        this.worm2.setDirection("left");
      } else {
        this.worm2.setDirection("right");
      }
    }
  }

  getWinner = () => {
    if (this.worm.hp > this.worm2.hp) {
      return 'Player 1';
    } else {
      return 'Player 2';
    }
  }
}
module.exports = Game;
