class MusicController {
  static initializeSound(p, buttons, sliders) {
    let musicDiv = p.createDiv('');
    p.createP('Music background:').parent(musicDiv);
    buttons[0] = p.createButton('ON').parent(musicDiv);
    buttons[0].id('startBtn');
    buttons[1] = p.createButton('OFF').parent(musicDiv);
    let musicVolumeDiv = p.createDiv('');
    p.createP('Adjust music volume:').parent(musicVolumeDiv);
    sliders[0] = p.createSlider(0, 1, 0.5, 0.01).parent(musicVolumeDiv);
    let soundDiv = p.createDiv('');
    p.createP('Sound Effects:').parent(soundDiv);
    buttons[2] = p.createButton('ON').parent(soundDiv);
    buttons[3] = p.createButton('OFF').parent(soundDiv);
    let soundVolumeDiv = p.createDiv('');
    p.createP('Adjust sound effects volume:').parent(soundVolumeDiv);
    sliders[1] = p.createSlider(0, 1, 0.5, 0.01).parent(soundVolumeDiv);
    let buttonDiv = p.createDiv('');
    p.createP('Press ENTER to go back to main page').parent(buttonDiv);
  }

  // static startMusic = (music) => {
  //   music.loop();
  // }

  // static stopMusic = (music) => {
  //   music.stop();
  // }

  // static enableSoundEffects = () => {
  //   this.sounds[1].connect();
  // }

  // static disableSoundEffects = () => {
  //   this.sounds[1].disconnect();
  // }
}

module.exports = MusicController;