const Matter = require('matter-js')
const p5 = require('p5');
require('p5/lib/addons/p5.sound');
require('p5/lib/addons/p5.dom');
const Game = require('./models/game');
const ScreenController = require('./controllers/screenController')
const MoveController = require('./controllers/moveController')
const CollisionController = require('./controllers/collisionController')
const ShootingController = require('./controllers/shootingController')
const WeaponController = require('./controllers/weaponController')
const Bullet = require('./entities/bullet');
const Weapon = require('./models/weapon')
const ZoomController = require('./controllers/zoomController')
const Worm = require('./entities/worm');
const Lava = require('./entities/lava');
const Terrain = require('./entities/terrain')
const TimerController = require('./controllers/timerController');
const MusicController = require('./controllers/musicController');
const Navbar = require('./views/navbar');

class Sketch {
  
  constructor(gameClass = Game) {
    this.gameClass = gameClass;
  }

  sketchWorld() {
    // These variables need to stay here due to strange scope of this function
    let wormsLogoImg;
    let vulcanoBackgroundImg;
    let wormImg1;
    let wormImg2;
    let graveImg;
    let lavaImg;
    let rockImg;
    let tennisBallImg;
    let tomatoImg;
    let bazookaImg;
    let music;
    let explosionSound;
    let jumpSound;
    let whooshSound;
    let hitSound;
    let grenadeImg;
    let gameOver;
    let clockTimer;
    let gameClass = this.gameClass;
    let game;
    let mx; // mouse coords
    let my; // mouse coords
    let explosionEffect;
    let weaponController = new WeaponController()
  

    const sketch = new p5(function (p) {
      // In order to use p5 functions in other classes, pass p as a parameter to methods in other classes.
      // p cannot be stored in a variable.

      p.preload = () => {
        wormsLogoImg = p.loadImage("images/WormsLogo.jpg");
        vulcanoBackgroundImg = p.loadImage("images/volcanoBackground.png");
        wormImg1 = p.loadImage("images/worm0.png");
        wormImg2 = p.loadImage("images/worm1.png");
        graveImg = p.loadImage("images/grave.png");
        music = p.loadSound("assets/Whimsical-Popsicle.mp3");
        explosionSound = p.loadSound("assets/Explosion.mp3");
        jumpSound = p.loadSound('assets/jump.mp3');
        whooshSound = p.loadSound('assets/whoosh.mp3');
        hitSound = p.loadSound('assets/hit.mp3')
        grenadeImg = p.loadImage("images/grenade.png");
        gameOver = p.loadImage("images/game-over.jpg");
        clockTimer = p.loadImage("images/clock_timer.png");
        lavaImg = p.loadImage('images/lava.png');
        rockImg = p.loadImage('images/rock.png');
        tennisBallImg = p.loadImage('images/tennis_ball.png');
        tomatoImg = p.loadImage('images/tomato.png');
        bazookaImg = p.loadImage('images/bazooka.png');
        explosionEffect = p.loadImage("images/explosion.png");
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
        const CANVASWINDOWSIZE = 2000;
        const CANVASWINDOWHEIGHT =  1000;
        game = new gameClass({ p: p, imgs: [wormImg1, wormImg2, clockTimer, grenadeImg, lavaImg, rockImg, tennisBallImg, tomatoImg, graveImg, bazookaImg], matter: Matter, lava: Lava, worm: Worm, terrain: Terrain, timer: TimerController, weaponModel: Weapon, bulletModel: Bullet, screenheight: CANVASWINDOWHEIGHT, screenwidth: CANVASWINDOWSIZE});
        Matter.Events.on(game.engine, "collisionStart", (event) => CollisionController.collision(event, game, hitSound, explosionEffect));
        p.textSize(40);
        MusicController.createSoundScreen(p, [music, explosionSound, jumpSound, whooshSound, hitSound]);
        ZoomController.sf = 1;
        setTimeout(()=> {ZoomController.sf = 2},2000)
      }

      p.resetMain = () => {
        MusicController.changeToHidden(p);
        p.loop();
        const CANVASWINDOWSIZE = 1500;
        const CANVASWINDOWHEIGHT =  1000;
        // p.createCanvas(CANVASWINDOWSIZE, CANVASWINDOWSIZE);
        // p.resizeCanvas(p.windowWidth,p.windowHeight)
        game = new gameClass({ p: p, imgs: [wormImg1, wormImg2, clockTimer, grenadeImg, lavaImg, rockImg, tennisBallImg, tomatoImg, graveImg], matter: Matter, lava: Lava, worm: Worm, terrain: Terrain, timer: TimerController, weaponModel: Weapon, bulletModel: Bullet, screenheight: CANVASWINDOWHEIGHT, screenwidth: CANVASWINDOWSIZE});
        Matter.Events.on(game.engine, "collisionStart", (event) => CollisionController.collision(event, game, hitSound, explosionEffect));
        p.textSize(40);
      }

      p.draw = () => {
        Navbar.show(game);
        const CANVASWINDOWSIZE = 1500;
        if (game.worm.isAlive === false) 
        { mx = game.worm.body.position.x;
          my = game.worm.body.position.y;}
        else if (game.worm2.isAlive === false) 
          {mx = game.worm2.body.position.x;
          my = game.worm2.body.position.y;}
        else if (game.bulletExists === true)
        { 
          mx = ShootingController.bullet.body.position.x;
          my = ShootingController.bullet.body.position.y;}
        else if(game.player1Turn === true)
        { 
          mx = game.worm.body.position.x;
          my = game.worm.body.position.y;
        } else { 
          mx = game.worm2.body.position.x;
          my = game.worm2.body.position.y;
        }
        ZoomController.zoom(p, mx, my, ZoomController.sf, CANVASWINDOWSIZE)
        ScreenController.setScreen(p, game, [wormsLogoImg, vulcanoBackgroundImg, gameOver, grenadeImg, tennisBallImg, tomatoImg, bazookaImg, music]);
        game.setActiveWormDirection(p);
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      }

      p.mouseClicked = () => {
        if(game.mode === 'game') {
          ShootingController.fireBullet(p, game, explosionSound ); 
        }
      }

      p.keyPressed = () => {
        if (game.mode != 'game') {
          ScreenController.KeyPressed(p, game)
        } else {
          let input = p.keyCode
          let worm = game.getActiveWorm()
          if (MoveController.isValidInput(input)) {
            MoveController.moveWorm(worm, input, p, game, [jumpSound, whooshSound]);
          } else if (weaponController.isValidInput(input)) {
            weaponController.activeWormChangeWeapon(worm, input)
          } else if (input === p.DOWN_ARROW) {
            if (ZoomController.sf === 1)
            {ZoomController.sf = 2;}
            else {ZoomController.sf = 1;}
          }
        }
      }
    }, "sketch")
  }
}

module.exports = Sketch;
