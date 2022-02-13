class ScreenController{

  static startScreen() {
    background(wormsLogoImg);
    textSize(28);
    fill("#000000");
    text("Press ENTER to start game", windowWidth / 2 - 174, windowHeight / 2 + 110);
    text("Press BACKSPACE for instructions", windowWidth / 2 - 220, windowHeight / 2 + 160);
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
    background('#f9ebf9')
    textSize(42)
    text("GAME OVER", windowWidth / 2 - 140, windowHeight / 2 - 60)
    textSize(30)
    text("Press ENTER to go back to main page", windowWidth / 2 - 260, windowHeight / 2 + 10)
  }

  static instructionsScreen() {
    background('#f9ebf9')
    textSize(32)
    text("How to play:", windowWidth / 2 - 90, windowHeight / 3 - 140)
    // textLeading(48)
    text("Use LEFT ◀️ and RIGHT ▶️ to move worm.", windowWidth / 2 - 310, windowHeight / 2 - 180);
    text("Use UP 🔼 to jump.", windowWidth / 2 - 310, windowHeight / 2 - 110)
    text("Aim and CLICK to shoot target 💥.",  windowWidth / 2 - 310, windowHeight / 2 - 40)
    textSize(29)
    text("Ready? Press ENTER to go back to main page", windowWidth / 2 - 307, windowHeight / 2 + 50)
  }
}

function setScreen() {
  if(mode === 'start') {
    ScreenController.startScreen();
  }
  else if(mode === 'game') {
    ScreenController.gameScreen();
  }
  else if (mode === 'gameOver'){
    ScreenController.gameOverScreen();
  }
  else if (mode === 'instructions') {
    ScreenController.instructionsScreen();
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
