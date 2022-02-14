const Matter = require("matter-js");
const TimerController = require("./timerController");

class ScreenController{
  static startScreen(p, logo) {
    p.background(logo);
    p.textSize(28);
    p.fill("#000000");
    p.text("Press ENTER to start game", p.windowWidth / 2 - 175, p.windowHeight / 2 + 110);
    p.text("Press I for instructions", p.windowWidth / 2 - 142, p.windowHeight / 2 + 160);
  }

  static gameScreen(p, game, img) {
    p.background(img);
    Matter.Engine.update(game.engine);
    game.ground.show(p);
    game.worm.show(p);
    game.worm2.show(p);
  
    game.bullets.forEach(element => element.show(p));
    this.displayWhichPlayerTurn(p, game);
    this.displayMovesLeftAndTimer(p, game)
  }

  static gameOverScreen(p, gameOver) {
    p.background(gameOver);
    p.textSize(30);
    p.text("Press ENTER to go back to main page", p.windowWidth / 2 - 260, p.windowHeight / 2 + 90);
  }

  static instructionsScreen(p) {
    p.background('#f9ebf9');
    p.textSize(32)
    p.text("How to play:", p.windowWidth / 2 - 90, p.windowHeight / 3 - 140)
    p.text("Use LEFT ◀️ and RIGHT ▶️ to move worm.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 180);
    p.text("Use UP 🔼 to jump.", p.windowWidth / 2 - 310,p. windowHeight / 2 - 110)
    p.text("Aim and CLICK to shoot target 💥.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 40)
    p.textSize(29)
    p.text("Ready? Press ENTER to go back to main page", p.windowWidth / 2 - 307, p.windowHeight / 2 + 50)
  }

  static setScreen(p, game, imgs) {
    if(game.mode === 'start') {
      ScreenController.startScreen(p, imgs[0]);
    }
    else if(game.mode === 'game') {
      ScreenController.gameScreen(p, game, imgs[1]);
    }
    else if (game.mode === 'gameOver'){
      ScreenController.gameOverScreen(p, imgs[2]);
    }
    else if (game.mode === 'instructions') {
      ScreenController.instructionsScreen(p);
    }
  }
  
  static KeyPressed(p, game) {
    if(game.mode === 'start') {
      if(p.keyCode === p.ENTER) {
        game.switchToMode('game');
        TimerController.resetTimer();
        TimerController.clearTimer();
        TimerController.startTimer();
      } 
      else if(p.keyCode === 73) {
       game.switchToMode('instructions');
      }
    }
    else if(game.mode === 'gameOver' || game.mode === 'instructions') {
      if(p.keyCode === p.ENTER) {
        p.setup();
      }
    }
  }
  static displayWhichPlayerTurn(p, game) {
    p.textSize(30)
    if(game.player1Turn === true) {
      p.text("Player 1", p.windowWidth /2 + 200, p.windowHeight / 2 - 320);
    }
    else {
      p.text("Player 2", p.windowWidth /2 + 200, p.windowHeight / 2 - 320);
    };
  }

  static displayMovesLeftAndTimer(p, game) {
    p.textSize(20);
    p.text(`Moves Left: ${game.moveLimit - game.moveCount}`, p.windowWidth /2 + 200, p.windowHeight / 2 - 300);
    p.text(TimerController.timerForTurn(p, game), p.windowWidth /2 + 270, p.windowHeight / 2 - 250);
    p.image(game.clockTimer, p.windowWidth / 2 + 200, p.windowHeight / 2 - 280, 50, 50)
  }
}

module.exports = ScreenController;


