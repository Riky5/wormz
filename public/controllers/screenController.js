const Matter = require("matter-js")
const MusicController = require("./musicController");

class ScreenController{
  static startScreen(p, logo) {
    p.background(logo);
    p.textSize(28);
    p.fill("#000000");
    p.text("Press ENTER to start game", p.windowWidth / 2 - 175, p.windowHeight / 2 + 110);
    p.text("Press I for instructions", p.windowWidth / 2 - 142, p.windowHeight / 2 + 160);
    p.text("Press OPTION for Music/Sound settings", p.windowWidth / 2 - 252, p.windowHeight / 2 + 210);
  }

  static gameScreen(p, game, img) {
    p.background(img);
    Matter.Engine.update(game.engine);
    game.lava.show(p);
    game.worm.show(p);
    game.worm2.show(p);
    (game.terrain).forEach (element => element.show(p));
    game.explosions.forEach(element => element.show(p));
    game.bullets.forEach(element => element.show(p));
    this.displayWhichPlayerTurn(p, game);
    this.displayMovesLeftAndTimer(p, game)
    this.displayWeaponChoice(p, game)
    game.weaponImage.show(p,game.getActiveWorm().body.position.x,game.getActiveWorm().body.position.y,game.getActiveWorm().direction);
  }

  static gameOverScreen(p, gameOver, game) {
    p.background(gameOver);
    p.textSize(30);
    let winner = game.getWinner();
    p.text(`${winner} won!`, p.windowWidth / 2 - 260, p.windowHeight / 2 + 40);
    p.text("Press ENTER to go back to main page", p.windowWidth / 2 - 260, p.windowHeight / 2 + 90);
  }

  static instructionsScreen(p) {
    p.background('#f9ebf9');
    p.textSize(32);
    p.text("How to play:", p.windowWidth / 2 - 90, p.windowHeight / 3 - 140);
    p.text("Use LEFT ◀️ and RIGHT ▶️ to move worm.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 180);
    p.text("Use UP 🔼 to jump.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 110);
    p.text("Aim and CLICK to shoot target 💥.",  p.windowWidth / 2 - 310, p.windowHeight / 2 - 40);
    p.text("Use 1️⃣ 2️⃣ 3️⃣ to change between weapons", p.windowWidth / 2 - 310, p.windowHeight / 2 + 20) 
    p.textSize(29);
    p.text("Ready? Press ENTER to go back to main page", p.windowWidth / 2 - 307, p.windowHeight / 2 + 90);
  }

  static musicSoundScreen(p) {
    p.resizeCanvas(0, 0);
  }

  static setScreen(p, game, imgs) {
    if(game.mode === 'start') {
      ScreenController.startScreen(p, imgs[0]);
    }
    else if(game.mode === 'game') {
      ScreenController.gameScreen(p, game, imgs[1]);
    }
    else if (game.mode === 'gameOver'){
      ScreenController.gameOverScreen(p, imgs[2], game);
    }
    else if (game.mode === 'instructions') {
      ScreenController.instructionsScreen(p);
    }
    else if (game.mode === 'musicSoundSettings') {
      MusicController.changeToVisible(p);
      p.noLoop();
      ScreenController.musicSoundScreen(p);
    }
  }

  static KeyPressed(p, game) {
    if(game.mode === 'start') {
      if(p.keyCode === p.ENTER) {
        game.switchToMode('game');
        game.timer.resetTimer();
        game.timer.clearTimer();
        game.timer.startTimer();
      } 
      else if(p.keyCode === 73) {
       game.switchToMode('instructions');
      }
      else if(p.keyCode === p.OPTION) {
        game.mode = 'musicSoundSettings';
      }
    } 
    else if(game.mode === 'gameOver' || game.mode === 'instructions' || game.mode === 'musicSoundSettings') {
      if(p.keyCode === p.ENTER) {
        p.loop();
        p.resetMain();
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
    p.text(game.timer.timerForTurn(p, game), p.windowWidth /2 + 270, p.windowHeight / 2 - 250);
    p.image(game.clockTimer, p.windowWidth / 2 + 200, p.windowHeight / 2 - 280, 50, 50)
  }
  static displayWeaponChoice(p) {
    p.textSize(20);
    p.fill(20)
    p.text('1', p.windowWidth /2 - 250, p.windowHeight / 2 - 300);
    p.text('2', p.windowWidth /2 - 200, p.windowHeight / 2 - 300);
    p.text('3', p.windowWidth /2 - 150, p.windowHeight / 2 - 300);
  }
}

module.exports = ScreenController;
