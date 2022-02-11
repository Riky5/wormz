class ScreenController{

  static startScreen() {
    background('red')
    text("PRESS ENTER TO START GAME", windowWidth / 2 - 300, windowHeight / 2 - 200)
    text("PRESS BACKSPACE FOR INSTRUCTIONS", windowWidth / 2 - 300, windowHeight / 2 )
  }

  static gameScreen() {
    background(backgroundImg);
    Matter.Engine.update(engine);
    ground.show();
  
    worm.show();
    worm2.show();
  
    bullets.forEach(element => element.show());
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
}

function setScreen() {
  if(mode === 0) {
    ScreenController.startScreen();
  }
  else if(mode === 1) {
    ScreenController.gameScreen();
  }
  else if (mode === 2){
    ScreenController.gameOverScreen();
  }
  else if (mode === 3) {
    ScreenController.instructionsScreen();
  }
}

function screenControllerKeyPressed() {
  if(mode === 0) {
    if(keyCode ===ENTER) {
      mode = 1;
    } 
    else if(keyCode === BACKSPACE) {
      mode = 3;
    }
  }
  else if(mode === 2 || mode === 3) {
    if(keyCode === ENTER) {
      setup();
    }
  }
}
