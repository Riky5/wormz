const Matter = require("matter-js")

class ScreenController{
  static startScreen(p, logo) {
    p.background(logo);
    p.textSize(28);
    p.fill("#000000");
    p.text("PRESS ENTER TO START GAME", p.windowWidth / 2 - 216, p.windowHeight / 2 + 110);
    p.text("PRESS I FOR INSTRUCTIONS", p.windowWidth / 2 - 200, p.windowHeight / 2 + 160);
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
    p.background('#f9ebf9');
    p.textSize(42)
    p.text("GAME OVER", p.windowWidth / 2 - 140, p.windowHeight / 2 - 60)
    p.textSize(30);
    p.text("Press ENTER to go back to main page", p.windowWidth / 2 - 260, p.windowHeight / 2 + 10);
  }

  static instructionsScreen(p) {
    resizeCanvas(0, 0);

    p.background('#f9ebf9');
    p.textSize(32)
    p.text("How to play:", p.windowWidth / 2 - 90, p.windowHeight / 3 - 140)
    p.text("Use LEFT ◀️ and RIGHT ▶️ to move worm.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 180);
    p.text("Use UP 🔼 to jump.", p.windowWidth / 2 - 310,p. windowHeight / 2 - 110)
    p.text("Aim and CLICK to shoot target 💥.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 40)
    p.textSize(29)
    p.text("Ready? Press ENTER to go back to main page", p.windowWidth / 2 - 307, p.windowHeight / 2 + 50)
  }

  static setupInstructionScreen(p) {
    containerDiv = p.createDiv('');
    
  }

  static setScreen(p, game, imgs) {
    if(game.mode === 'start') {
      ScreenController.startScreen(p, imgs[0]);
    }
    else if(game.mode === 'game') {
      ScreenController.gameScreen(p, game, imgs[1]);
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
        p.createCanvas(p.windowWidth, p.windowHeight - 50);
        game = new gameClass({p: p, imgs: [wormImg1, wormImg2], matter: Matter, ground: Ground, worm: Worm});
        Matter.Events.on(game.engine, "collisionStart", (event) => CollisionController.collision(event, game));
        p.textSize(40);
      }
    }
  }
}

module.exports = ScreenController;


