const Matter = require('matter-js')
const p5 = require('p5');
const Game = require('./controllers/game');
const ScreenController = require('./controllers/screenController')
const MoveController = require('./controllers/MoveController')
const Controller = require('./controllers/controller')
const Worm = require('./entities/worm');
const Ground = require('./entities/ground');

class Sketch {
  

  constructor(gameClass = Game) {
    this.gameClass = gameClass;
  }
  
  sketchWorld() {
    // These variables need to stay here due to strange scope of this function
    let backgroundImg;
    let wormImg0;
    let wormImg1;
    let gameClass = this.gameClass;
    let game;

    const sketch = new p5 (function(p) {

      p.preload = () =>
      {
        backgroundImg = p.loadImage("images/background-image.png");
        wormImg0 = p.loadImage("images/worm0.png");
        wormImg1 = p.loadImage("images/worm1.png");
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight - 50);
        game = new gameClass({p: p, imgs: [wormImg0, wormImg1], matter: Matter, ground: Ground, worm: Worm});
        Matter.Events.on(game.engine, "collisionStart", (event) => Controller.collision(event, game))
        p.textSize(40);
      }

      p.draw = () => {
        ScreenController.setScreen(p, game, backgroundImg);
      }

      p.mouseClicked = () => {
        if(game.mode === 'game') {
          Controller.fireBullet(p, game); 
        }
      }

      p.keyPressed = () => {
        if (game.mode != 'game') {
          ScreenController.screenControllerKeyPressed(p, game)
        }  else {
          let input = p.keyCode
          if(Controller.player1Turn === true) {
            // method is in controller.js
            MoveController.moveWorm(game.worm, input, p);
          } 
          else {
            // method is in controller.js
            MoveController.moveWorm(game.worm2, input, p);
          }
        }
      }
    }, "sketch")
  } 
}

module.exports = Sketch;