const Matter = require('matter-js')
const p5 = require('p5');
const Game = require('./models/game');
const ScreenController = require('./controllers/screenController')
const MoveController = require('./controllers/moveController')
const CollisionController = require('./controllers/collisionController')
const ShootingController = require('./controllers/shootingController')
const Worm = require('./entities/worm');
const Lava = require('./entities/ground');
const Terrain = require('./terrain')
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
        game = new gameClass({p: p, imgs: [wormImg1, wormImg2, clockTimer], matter: Matter, lava: Lava, worm: Worm, terrain: Terrain});
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
          ShootingController.fireBullet(p, game, grenade); 
        }
      }

      p.keyPressed = () => {
        if (game.mode != 'game') {
          ScreenController.KeyPressed(p, game)
        }  else {
          let input = p.keyCode
          if(game.player1Turn === true) {
            MoveController.moveWorm(game.worm, input, p, game);
          } 
          else {
            MoveController.moveWorm(game.worm2, input, p, game);
          }
        }
      }
    }, "sketch")
  } 
}

module.exports = Sketch;
