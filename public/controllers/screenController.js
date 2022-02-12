class ScreenController{

  static startScreen(p) {
    p.background('red')
    p.text("PRESS ENTER TO START GAME", p.windowWidth / 2 - 300, p.windowHeight / 2 - 200)
    p.text("PRESS BACKSPACE FOR INSTRUCTIONS", p.windowWidth / 2 - 300, p.windowHeight / 2 )
  }

  static gameScreen(p) {
    p.background(p.backgroundImg);
    // Matter.Engine.update(engine);
    // ground.show(p);
    // worm.show(p);
    // worm2.show(p);
  
    // bullets.forEach(element => element.show());
  }

  static gameOverScreen() {
    background('blue')
    text("GAME OVER. PRESS ENTER TO GO BACK TO MAIN PAGE", windowWidth / 2 - 300, windowHeight / 2)
  }

  static instructionsScreen() {
    background('red')
    textSize(30)
    text("Use LEFT and RIGHT to move. UP to jump. CLICK to shoot.", 10, windowHeight / 2 - 300 / 2)
    text("READY? PRESS ENTER TO GO BACK TO MAIN PAGE", 10, windowHeight / 2)
  }

  static setScreen(p, mode) {
    if(mode === 'start') {
      ScreenController.startScreen(p);
    }
    else if(mode === 'game') {
      ScreenController.gameScreen(p);
    }
    else if (mode === 'gameOver'){
      ScreenController.gameOverScreen(p);
    }
    else if (mode === 'instructions') {
      ScreenController.instructionsScreen(p);
    }
  }
}

module.exports = ScreenController;

function setScreen(p) {
  if(mode === 'start') {
    ScreenController.startScreen(p);
  }
  else if(mode === 'game') {
    ScreenController.gameScreen(p);
  }
  else if (mode === 'gameOver'){
    ScreenController.gameOverScreen(p);
  }
  else if (mode === 'instructions') {
    ScreenController.instructionsScreen(p);
  }
}

function screenControllerKeyPressed() {
  if(mode === 'start') {
    if(keyCode ===ENTER) {
      mode = 'game';
    } 
    else if(keyCode === BACKSPACE) {
      mode = 'instructions';
    }
  }
  else if(mode === 'gameOver' || mode === 'instructions') {
    if(keyCode === ENTER) {
      setup();
    }
  }
}
