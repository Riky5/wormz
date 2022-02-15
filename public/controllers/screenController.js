const Matter = require("matter-js")
const MusicController = require("../controllers/musicController");
const Sketch = require("../sketch");

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
    game.ground.show(p);
    game.worm.show(p);
    game.worm2.show(p);
  
    game.bullets.forEach(element => element.show(p));
  }

  static gameOverScreen(p) {
    p.background('pink');
    p.textSize(30);
    p.text("Press ENTER to go back to main page", p.windowWidth / 2 - 260, p.windowHeight / 2 + 90);
  }

  static instructionsScreen(p) {
    p.background('#f9ebf9');
    p.textSize(32);
    p.text("How to play:", p.windowWidth / 2 - 90, p.windowHeight / 3 - 140);
    p.text("Use LEFT ◀️ and RIGHT ▶️ to move worm.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 180);
    p.text("Use UP 🔼 to jump.", p.windowWidth / 2 - 310, p.windowHeight / 2 - 110);
    p.text("Aim and CLICK to shoot target 💥.",  p.windowWidth / 2 - 310, p.windowHeight / 2 - 40);
    p.textSize(29);
    p.text("Ready? Press ENTER to go back to main page", p.windowWidth / 2 - 307, p.windowHeight / 2 + 50);
  }

  //drawing
  static musicSoundScreen(p) {
    p.resizeCanvas(0, 0);
    // volumeSlider = p.createSlider(0, 1, 0.5, 0.01);
    // volumeSlider.position(100, 300)
    // sound.loop();
    // p.setVolume(0.5);
    // let startBtn = p.select('#startBtn');
    // startBtn.mouseOver(sound.play());
    // sounds[1].setVolume(sliders[1].value());
    // buttons[2].mouseOver(enableSoundEffects);
    // buttons[3].mouseOver(disableSoundEffects);
  }

  static setScreen(p, game, imgs, volumeSlider, sound) {
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
    else if (game.mode === 'music-sound-settings') {
      MusicController.changeToVisible(p);
      p.noLoop();
      ScreenController.musicSoundScreen(p, volumeSlider, sound);
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
      else if(p.keyCode === p.OPTION) {
        game.mode = 'music-sound-settings';
      }
    } 
    else if(game.mode === 'gameOver' || game.mode === 'instructions' || game.mode === 'music-sound-settings') {
      if(p.keyCode === p.ENTER) {
        p.loop();
        p.resetMain();
      }
    }
  }
}

module.exports = ScreenController;


