const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

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

preload = () =>
{
  backgroundImg = loadImage("images/background-image.png");
  wormImg0 = loadImage("images/worm0.png");
  wormImg1 = loadImage("images/worm1.png");
}

setup = () => {
  createCanvas(windowWidth, windowHeight - 50);
  initializeWorld();
  Matter.Events.on(engine, "collisionStart", (event) => collision(event))
  textSize(40);
  mode = 0;
}

draw = () => {
  // method is in screenController.js
  setScreen();
}

mouseClicked = () => {
  // method is in controller.js
  if(mode === 1) {
    Controller.fireBullet(); 
  }
}

keyPressed = () => {
  if (mode != 1) {
    // method is in screenController.js
    screenControllerKeyPressed()
  }
  else {

    let input = keyCode

    if(Controller.player1Turn === true) {
      // method is in controller.js
      MoveController.moveWorm(worm, input);
    } 
    else {
      // method is in controller.js
      MoveController.moveWorm(worm2, input);
    }
  }
};

