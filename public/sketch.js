const Matter = require('matter-js')
const p5 = require('p5');
const Game = require('./models/game');
const ScreenController = require('./controllers/screenController')
const MoveController = require('./controllers/moveController')
const CollisionController = require('./controllers/collisionController')
const ShootingController = require('./controllers/shootingController')
const Worm = require('./entities/worm');
const Ground = require('./entities/ground');
const Bullet = require('./entities/bullet');
const Weapon = require('./models/weapon')
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
        grenade = p.loadImage("images/grenade.png");
        gameOver = p.loadImage("images/game-over.jpg");
        clockTimer = p.loadImage("images/clock_timer.png")
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight - 50);
        game = new gameClass({p: p, imgs: [wormImg1, wormImg2, clockTimer, grenade], matter: Matter, ground: Ground, worm: Worm, weaponModel: Weapon, bulletModel: Bullet});
        Matter.Events.on(game.engine, "collisionStart", (event) => CollisionController.collision(event, game))
        p.textSize(40);
      }

      p.draw = () => {
        ScreenController.setScreen(p, game, [wormsLogoImg, backgroundImg, gameOver]);
      }

      p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
      }

      p.mouseClicked = () => {
        if(game.mode === 'game') {
          ShootingController.fireBullet(p, game); 
        }
      }

      p.keyPressed = () => {
        if (game.mode != 'game') {
          ScreenController.KeyPressed(p, game)
        }  else {
          let input = p.keyCode
          let worm = game.getActiveWorm()
          MoveController.moveWorm(worm, input, p, game);
          } 
        }
    }, "sketch")
  } 
}

module.exports = Sketch;
