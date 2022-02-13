const Matter = require("matter-js")

class ScreenController{

  static startScreen(p) {
    p.background('red')
    p.text("PRESS ENTER TO START GAME", p.windowWidth / 2 - 300, p.windowHeight / 2 - 200)
    p.text("PRESS I FOR INSTRUCTIONS", p.windowWidth / 2 - 300, p.windowHeight / 2 )
  }

  static gameScreen(p, game, img) {
    p.background(img);
    Matter.Engine.update(game.engine);
    game.ground.show(p);
    game.worm.show(p);
    game.worm2.show(p);
  
    game.bullets.forEach(element => element.show(p));
  }

  static gameOverScreen(p) {
    p.background('blue')
    p.text("GAME OVER. PRESS ENTER TO GO BACK TO MAIN PAGE", p.windowWidth / 2 - 300, p.windowHeight / 2)
  }

  static instructionsScreen(p) {
    p.background('red')
    p.textSize(30)
    p.text("Use LEFT and RIGHT to move. UP to jump. CLICK to shoot.", 10, p.windowHeight / 2 - 300 / 2)
    p.text("READY? PRESS ENTER TO GO BACK TO MAIN PAGE", 10, p.windowHeight / 2)
  }

  static setScreen(p, game, img) {
    if(game.mode === 'start') {
      ScreenController.startScreen(p);
    }
    else if(game.mode === 'game') {
      ScreenController.gameScreen(p, game, img);
    }
    else if (game.mode === 'gameOver'){
      ScreenController.gameOverScreen(p);
    }
    else if (game.mode === 'instructions') {
      ScreenController.instructionsScreen(p);
    }
  }
  
  static KeyPressed(p, game) {
    if(game.mode === 'start') {
      if(p.keyCode === p.ENTER) {
        game.mode = 'game';
      } 
      else if(p.keyCode === 73) {
        game.mode = 'instructions';
      }
    }
    else if(game.mode === 'gameOver' || game.mode === 'instructions') {
      if(p.keyCode === p.ENTER) {
        p.setup();
      }
    }
  }
}

module.exports = ScreenController;


