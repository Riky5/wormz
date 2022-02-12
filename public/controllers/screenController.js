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
    MoveController.displayWhichPlayerTurn(); 
    textSize(20);
    text(`Moves Left: ${MoveController.moveLimit - MoveController.moveCount}`, windowWidth /2 + 200, windowHeight / 2 - 300);
    text("Time Left: ", windowWidth /2 + 200, windowHeight / 2 - 280);
    text(timerForTurn(), windowWidth /2 + 200, windowHeight / 2 - 250);
  };

  static gameOverScreen() {
    background('blue');
    text("GAME OVER. PRESS ENTER TO GO BACK TO MAIN PAGE", windowWidth / 2 - 300, windowHeight / 2);
  };

  static instructionsScreen() {
    background('red');
    textSize(30);
    text("Use LEFT and RIGHT to move. UP to jump. CLICK to shoot.", 10, windowHeight / 2 - 300 / 2);
    text("READY? PRESS ENTER TO GO BACK TO MAIN PAGE", 10, windowHeight / 2);
  };
};

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
};

function screenControllerKeyPressed() {
  if(mode === 'start') {
    if(keyCode ===ENTER) {
      switchToMode('game');
    } 
    else if(keyCode === BACKSPACE) {
      switchToMode('instructions');
    }
  }
  else if(mode === 'gameOver' || mode === 'instructions') {
    if(keyCode === ENTER) {
      setup();
    }
  }
};
function switchToMode(modeChoice) {
  mode = modeChoice
};
