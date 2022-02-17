const ZoomController = require("../controllers/zoomController");
const WeaponImage = require("../entities/weapon")
// Moved to a models folder for now not sure where it should be housed
const MAXMOVES = 5;
const DEATHTIMEOUT = 1500;
const INTERVALBETWEENSHOTS = 1500;
const SCREENHEIGHT = 900;
const SCREENWIDTH = 1500;

class Game {

  constructor({imgs: imgs, matter: matter, lava: lava, worm: worm,terrain: terrain, timer:timerController, weaponModel: weaponModel, bulletModel: bulletModel}) {
    this.engine = matter.Engine.create();
    this.world = this.engine.world;
    this.bullets = [];
    this.explosions = [];
    this.lava = new lava({x: SCREENWIDTH / 2, y: 1350, w: SCREENWIDTH * 2.5, h: 1000, world: this.world, matter: matter, img: imgs})
    this.worm = new worm({x: 300, y: 200, options: "wormOne", img: imgs[0], matter: matter, direction: "right", weapons: this.createWeapons(weaponModel, bulletModel, imgs), graveImg: imgs[8]});
    this.worm2 = new worm({x: 1250, y: 200, options: "wormTwo", img: imgs[1], matter: matter, direction: "left", weapons: this.createWeapons(weaponModel, bulletModel, imgs), graveImg: imgs[8]});
    matter.World.add(this.world, [this.worm.body,this.worm2.body]);
    this.terrain = (new terrain).createTerrain({world: this.world,matter: matter, imgs: imgs, screenWidth: SCREENWIDTH, screenHeight: SCREENHEIGHT});
    this.weaponImage = new WeaponImage();
    this.mode = "start";
    this.player1Turn = true;
    this.moveLimit = MAXMOVES;
    this.moveCount = 0;
    this.clockTimer = imgs[2];
    this.bulletExists = false;
    this.timer = new timerController();
    this.intervalBetweenShots = INTERVALBETWEENSHOTS;
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

  changePlayerTurn = () => {
    this.getActiveWorm().canShoot = true;
    this.resetMoveCount();
    this.player1Turn = !this.player1Turn;
  }

  resetMoveCount = () => {
    this.moveCount = 0;
  }

  showDeadWormGrave = () => setTimeout( () => this.setGameOver(), DEATHTIMEOUT);

  isWormDead = () => !this.worm.isAlive() || !this.worm2.isAlive();

  getDeadWorm = () => {
    if (!this.worm.isAlive()) {
      return this.worm;
    } else if (!this.worm2.isAlive()) {
      return this.worm2;
    }
  }
  
  setGameOver = () => {this.mode = 'gameOver'; ZoomController.sf = 1}

  createWeapons = (weaponModel, bulletModel, imgs) => {
    const grenade = new weaponModel({name: 'Grenade', velocity: 15, image: imgs[3], damage: 25, bulletModel: bulletModel})
    const tennisBall = new weaponModel({name: 'TennisBall', velocity: 25, image: imgs[6], damage: 15, bulletModel: bulletModel})
    const tomato = new weaponModel({name: 'Tomato', velocity: 35, image: imgs[7], damage: 5, bulletModel: bulletModel})
    return [grenade, tennisBall, tomato]
  }

  setActiveWormDirection = (p) => {
    let mouse_position;
    let worm = this.getActiveWorm()

    if (ZoomController.secondScreen === true) {
      mouse_position = p.mouseX + 500 * ZoomController.sf
    } else {
      mouse_position = p.mouseX
    }
   
    if (mouse_position < worm.body.position.x) {
      worm.setDirection("left");
    } else {
      worm.setDirection("right");
    }    
  }

  getWinner = () => {
    if (this.worm.hp > this.worm2.hp) {
      return 'Player 1';
    } else {
      return 'Player 2';
    }
  }

  switchToMode = (modeChoice) => {
    return this.mode = modeChoice;
  }
}
module.exports = Game;
