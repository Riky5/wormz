const Matter = require('matter-js')
const p5 = require('p5');
const Game = require('./models/game');
const ScreenController = require('./controllers/screenController')
const MoveController = require('./controllers/moveController')
const CollisionController = require('./controllers/collisionController')
const ShootingController = require('./controllers/shootingController')
const Worm = require('./entities/worm');
const Ground = require('./entities/ground');

class Sketch {

  constructor(gameClass = Game) {
    this.gameClass = gameClass;
  }
  
  sketchWorld() {
    // These variables need to stay here due to strange scope of this function
    let backgroundImg;
    let wormImg1;
    let wormImg2;
    let gameClass = this.gameClass;
    let game;

    const sketch = new p5 (function(p) {
      // In order to use p5 functions in other classes, pass p as a parameter to methods in other classes.
      // p cannot be stored in a variable.

      p.preload = () =>
      {
        backgroundImg = p.loadImage("images/background-image.png");
        wormImg1 = p.loadImage("images/worm0.png");
        wormImg2 = p.loadImage("images/worm1.png");
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight - 50);
        game = new gameClass({p: p, imgs: [wormImg1, wormImg2], matter: Matter, ground: Ground, worm: Worm});
        Matter.Events.on(game.engine, "collisionStart", (event) => CollisionController.collision(event, game))
        p.textSize(40);
      }

      p.draw = () => {
        ScreenController.setScreen(p, game, backgroundImg);
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
