const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;
const p5 = require('p5');
const ScreenController = require('./controllers/screenController')

class Sketch {
  static sketchWorld() {
    let world, engine;
    let ground;
    let worm;
    let worm2;
    let backgroundImg;
    let wormImg0;
    let wormImg1;
    let bullets;
    let mode;
    let mousePos;
    let moveLimit;
    let moveCount;

    const sketch = new p5 (function(p) {
      p.preload = () =>
      {
        backgroundImg = p.loadImage("images/background-image.png");
        wormImg0 = p.loadImage("images/worm0.png");
        wormImg1 = p.loadImage("images/worm1.png");
      }

      p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight - 50);
        // initializeWorld(); requiresp
        // Matter.Events.on(engine, "collisionStart", (event) => collision(event))
        p.textSize(40);
        mode = 'start';
      }

      p.draw = () => {
        p.background('red')
        ScreenController.setScreen(p, mode);
      }

      p.mouseClicked = () => {
      // method is in controller.js
        if(mode === 'game') {
          // Controller.fireBullet(); 
        }
      }

      p.keyPressed = () => {
        console.log("key pressed")
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

// let world, engine;
// let ground;
// let worm;
// let worm2;
// let backgroundImg;
// let wormImg0;
// let wormImg1;
// let bullets;
// let mode;
// let mousePos;
// let moveLimit;
// let moveCount;

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

