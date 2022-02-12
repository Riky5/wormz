const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
const p5 = require('p5');
const Game = require('./controllers/game');
const ScreenController = require('./controllers/screenController')

class Sketch {

  constructor(gameClass = Game) {
    this.gameClass = gameClass;
  }
  
  sketchWorld() {
    const game = new this.gameClass();
    let backgroundImg;

    const sketch = new p5 (function(p) {

      p.preload = () =>
      {
        backgroundImg = p.loadImage("images/background-image.png");
        // this.wormImg0 = p.loadImage("images/worm0.png");
        // this.wormImg1 = p.loadImage("images/worm1.png");
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight - 50);
        // initializeWorld()
        // Matter.Events.on(engine, "collisionStart", (event) => collision(event))
        p.textSize(40);
      }

      p.draw = () => {
        ScreenController.setScreen(p, game.mode, backgroundImg);
      }

      p.mouseClicked = () => {
        
        if(game.mode === 'game') {
          // Controller.fireBullet(); 
        }
      }

      p.keyPressed = () => {
        if(p.keyCode ===p.ENTER) {
          game.mode = 'game';
          console.log(game.mode);
        } 
      }
    }, "sketch")
  } 
}



// class Sketch {
//   static sketchWorld() {
//     console.log("running....")
//     const sketch = new p5 (function(p) {    
//       console.log("running")
//       p.preload = () =>
//       {
//         console.log("preload")
//       }
//    })
//   }
// }

module.exports = Sketch;



// p.preload = () =>
//       {
//         backgroundImg = p.loadImage("images/background-image.png");
//         wormImg0 = p.loadImage("images/worm0.png");
//         wormImg1 = p.loadImage("images/worm1.png");
//       }

//       p.setup = () => {
//         p.createCanvas(p.windowWidth, p.windowHeight - 50);
//       }



// setup = () => {
//   createCanvas(windowWidth, windowHeight - 50);
  // initializeWorld();
  // Matter.Events.on(engine, "collisionStart", (event) => collision(event))
  // textSize(40);
  // mode = 'start';
// }

// draw = () => {
//   // method is in screenController.js
//   setScreen();
// }

// mouseClicked = () => {
//   // method is in controller.js
//   if(mode === 'game') {
//     Controller.fireBullet(); 
//   }
// }

// keyPressed = () => {
//   if (mode != 'game') {
//     // method is in screenController.js
//     screenControllerKeyPressed()
//   }
//   else {

//     let input = keyCode

//     if(Controller.player1Turn === true) {
//       // method is in controller.js
//       MoveController.moveWorm(worm, input);
//     } 
//     else {
//       // method is in controller.js
//       MoveController.moveWorm(worm2, input);
//     }
//   }
// };

