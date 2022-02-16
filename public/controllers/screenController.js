const Matter = require("matter-js")
const MusicController = require("./musicController");

class ScreenController{
  static startScreen(p, logo) {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.select('#navbarContainer').style('display:flex');
    p.background(logo);
    p.textSize(28);
    p.fill("#000000");
    p.text("Press ENTER to start game", p.windowWidth / 2 - 175, p.windowHeight / 2 + 110);
    p.text("Press I for instructions", p.windowWidth / 2 - 142, p.windowHeight / 2 + 160);
    p.text("Press OPTION for Music/Sound settings", p.windowWidth / 2 - 252, p.windowHeight / 2 + 210);
  }

  static gameScreen(p, game, img) {
    p.background(img);
    p.select('#navbarContainer').style('display:flex');
    Matter.Engine.update(game.engine);
    game.lava.show(p);
    game.worm.show(p);
    game.worm2.show(p);
    (game.terrain).forEach (element => element.show(p));
    game.explosions.forEach(element => element.show(p));
    game.bullets.forEach(element => element.show(p));
    if(!game.isWormDead()) {
      game.weaponImage.show(p,game.getActiveWorm().body.position.x,game.getActiveWorm().body.position.y,game.getActiveWorm().direction);
    }
  }

  static gameOverScreen(p, gameOver, game) {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.select('#navbarContainer').style('display:none');
    p.background(gameOver);
    p.fill("#000000");
    p.textSize(30);
    let winner = game.getWinner();
    p.text(`${winner} won!`, p.windowWidth / 2 - 100, p.windowHeight / 2 + 110);
    p.text("Press ENTER to go back to main page", p.windowWidth / 2 - 260, p.windowHeight / 2 + 180);
  }

  static instructionsScreen(p, imgs, game) {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    p.background('#f9ebf9');
    p.select('#navbarContainer').style('display:none');
    p.textSize(32);
    p.text("How to play:", p.windowWidth / 2 - 90, p.windowHeight / 3 - 140);
    p.text("Use LEFT ◀️ and RIGHT ▶️ to move worm.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 180);
    p.text("Use UP 🔼 to jump.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 110);
    p.text("Aim and CLICK to shoot target 💥.",  p.windowWidth / 2 - 310, p.windowHeight / 2 - 40);
    p.text("Use 1️⃣ 2️⃣ 3️⃣ to change between weapons:", p.windowWidth / 2 - 310, p.windowHeight / 2 + 30);
    p.text('1️⃣ = ', p.windowWidth / 2 - 310, p.windowHeight / 2 + 100);
    p.image(imgs[3], p.windowWidth / 2 - 240, p.windowHeight / 2 + 67, 40, 40);
    p.text(`Damage: ${game.worm.weapons[0].damage} / Speed: Low`, p.windowWidth / 2 - 170, p.windowHeight / 2 + 100);
    p.text('2️⃣ = ', p.windowWidth / 2 - 310, p.windowHeight / 2 + 140);
    p.image(imgs[4], p.windowWidth / 2 - 240, p.windowHeight / 2 + 110, 40, 40);
    p.text(`Damage: ${game.worm.weapons[1].damage} / Speed: Medium`, p.windowWidth / 2 - 170, p.windowHeight / 2 + 140);
    p.text('3️⃣ = ', p.windowWidth / 2 - 310, p.windowHeight / 2 + 180);
    p.image(imgs[5], p.windowWidth / 2 - 240, p.windowHeight / 2 + 150, 40, 40);
    p.text(`Damage: ${game.worm.weapons[2].damage} / Speed: Medium`, p.windowWidth / 2 - 170, p.windowHeight / 2 + 180);
    p.text("Ready? Press ENTER to go back to main page", p.windowWidth / 2 - 307, p.windowHeight / 2 + 250);
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
      ScreenController.instructionsScreen(p, imgs, game);
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
}

module.exports = ScreenController;
