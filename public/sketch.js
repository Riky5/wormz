const Matter = require('matter-js')
const p5 = require('p5');
require('p5/lib/addons/p5.sound');
require('p5/lib/addons/p5.dom');
const Game = require('./models/game');
const ScreenController = require('./controllers/screenController')
const MoveController = require('./controllers/moveController')
const CollisionController = require('./controllers/collisionController')
const ShootingController = require('./controllers/shootingController')
const TimerController = require('./controllers/timerController');
const MusicController = require('./controllers/musicController');
const Worm = require('./entities/worm');
const Ground = require('./entities/ground');
class Sketch {
  constructor(gameClass = Game) {
    this.gameClass = gameClass;
  }
  
  sketchWorld() {
    // These variables need to stay here due to strange scope of this function
    let wormsLogoImg;
    let backgroundImg;
    let wormImg1;
    let wormImg2;
    let music;
    let explosionSound;
    let jumpSound;
    let whooshSound;
    let hitSound;
    let grenade;
    let gameOver;
    let clockTimer;
    let gameClass = this.gameClass;
    let game;

    const sketch = new p5 (function(p) {
      // In order to use p5 functions in other classes, pass p as a parameter to methods in other classes.
      // p cannot be stored in a variable.

      p.preload = () =>
      {
        wormsLogoImg = p.loadImage("images/WormsLogo.jpg");
        backgroundImg = p.loadImage("images/background-image.png");
        wormImg1 = p.loadImage("images/worm0.png");
        wormImg2 = p.loadImage("images/worm1.png");
        music = p.loadSound("assets/Whimsical-Popsicle.mp3");
        explosionSound = p.loadSound("assets/Explosion.mp3");
        jumpSound = p.loadSound('assets/jump.mp3');
        whooshSound = p.loadSound('assets/whoosh.mp3');
        hitSound = p.loadSound('assets/hit.mp3')
        grenade = p.loadImage("images/grenade.png");
        gameOver = p.loadImage("images/game-over.jpg");
        clockTimer = p.loadImage("images/clock_timer.png")
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight - 50);
        game = new gameClass({p: p, imgs: [wormImg1, wormImg2, clockTimer], matter: Matter, ground: Ground, worm: Worm, timer: TimerController});
        Matter.Events.on(game.engine, "collisionStart", (event) => CollisionController.collision(event, game, hitSound));
        p.textSize(40);
        MusicController.createSoundScreen(p, [music, explosionSound, jumpSound, whooshSound, hitSound]);
      }

      p.resetMain = () => {
        MusicController.changeToHidden(p);
        p.loop();
        p.createCanvas(p.windowWidth, p.windowHeight - 50);
        game = new gameClass({p: p, imgs: [wormImg1, wormImg2, clockTimer], matter: Matter, ground: Ground, worm: Worm, timer: TimerController});
        Matter.Events.on(game.engine, "collisionStart", (event) => CollisionController.collision(event, game, hitSound));
        p.textSize(40);
      }

      p.draw = () => {

        ScreenController.setScreen(p, game, [wormsLogoImg, backgroundImg, gameOver, music]);
        game.setActiveWormDirection(p);

      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      }

      p.mouseClicked = () => {
        if(game.mode === 'game') {
          ShootingController.fireBullet(p, game, grenade, explosionSound); 
          ShootingController.fireBullet(p, game, grenade); 
        }
      }

      p.keyPressed = () => {
        if (game.mode != 'game') {
          ScreenController.KeyPressed(p, game)
        }  else {
          let input = p.keyCode
          if(game.player1Turn === true) {
            MoveController.moveWorm(game.worm, input, p, game, [jumpSound, whooshSound]);
          } 
          else {
            MoveController.moveWorm(game.worm2, input, p, game, [jumpSound, whooshSound]);
          }
        }
      }
    }, "sketch")
  } 
}

module.exports = Sketch;
