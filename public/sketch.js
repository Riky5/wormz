const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;
let ground;
let worm;
let worm2;
let wormsLogoImg;
let backgroundImg;
let wormImg0;
let wormImg1;
let music;
let musicVolumeSlider;
let startMusicBtn;
let stopMusicBtn;
let backToMain;
let bullets;
let mode;
let mousePos;
let moveLimit;
let moveCount;

preload = () =>
{
  wormsLogoImg = loadImage("images/WormsLogo.jpg");
  backgroundImg = loadImage("images/background-image.png");
  wormImg0 = loadImage("images/worm0.png");
  wormImg1 = loadImage("images/worm1.png");
  music = loadSound("assets/Whimsical-Popsicle.mp3");
}

setup = () => {
  createCanvas(windowWidth, windowHeight - 50);
  initializeSound();
  initializeWorld();
  Matter.Events.on(engine, "collisionStart", (event) => collision(event))
  textSize(40);
  mode = 'start';
}

draw = () => {
  // method is in screenController.js
  setScreen();
}
// automatically resize the window
windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
}

mouseClicked = () => {
  // method is in controller.js
  if(mode === 'game') {
    Controller.fireBullet(); 
  }
}

keyPressed = () => {
  if (mode != 'game') {
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

initializeSound = () => {
  musicDiv = createDiv('');
  createP('Music background:').parent(musicDiv);
  startMusicBtn = createButton('ON').parent(musicDiv);
  stopMusicBtn = createButton('OFF').parent(musicDiv);
  musicVolumeDiv = createDiv('');
  createP('Adjust music volume:').parent(musicVolumeDiv);
  musicVolumeSlider = createSlider(0, 1, 0.5, 0.01);
  musicVolumeSlider.parent(musicVolumeDiv);
  soundDiv = createDiv('');
  createP('Sound Effects:').parent(soundDiv);
  createButton('ON').parent(soundDiv);
  createButton('OFF').parent(soundDiv);
  soundVolumeDiv = createDiv('');
  createP('Adjust sound effects volume:').parent(soundVolumeDiv);
  createSlider(0, 1, 0.5, 0.01).parent(soundVolumeDiv);
  buttonDiv = createDiv('');
  createP('Back to main page:').parent(buttonDiv);
  backToMain = createButton('🔙');
  backToMain.parent(buttonDiv);
}