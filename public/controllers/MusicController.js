class MusicController {
  static initializeSound(p, sounds) {
    console.log(sounds)
    let mainDiv = p.createDiv('');
    mainDiv.id('main-music-div');
    mainDiv.style('display:none');
    let title = p.createP('Music / Audio Settings').parent(mainDiv);
    title.id('title');
    let musicDiv = p.createDiv('').parent(mainDiv);
    musicDiv.id('musicDiv');
    let musicText = p.createP('Background Music:').parent(musicDiv);
    musicText.id('musicText');
    // let volumeSlider = p.createSlider(0, 1, 0.8, 0.02);
    // volumeSlider.position(100, 300)
    // volumeSlider.parent(musicDiv);
    let musicOnBtn = p.createButton('ON').parent(musicDiv);
    musicOnBtn.id('musicOnBtn');
    musicOnBtn.mouseClicked(function() {
      sounds[0].loop();
    });
    let musicOffBtn = p.createButton('OFF').parent(musicDiv);
    musicOffBtn.id('musicOffBtn');
    musicOffBtn.mouseClicked(function() {
      sounds[0].stop();
    });
    // music.setVolume(volumeSlider.value());

    // buttons[1] = p.createButton('OFF').parent(musicDiv);
    // let musicVolumeDiv = p.createDiv('');
    // p.createP('Adjust music volume:').parent(musicVolumeDiv);
    // sliders[0] = p.createSlider(0, 1, 0.5, 0.01).parent(musicVolumeDiv);
    let soundDiv = p.createDiv('').parent(mainDiv);
    soundDiv.id('soundDiv');
    let soundText = p.createP('Sound Effects:').parent(soundDiv);
    let soundOnBtn = p.createButton('ON').parent(soundDiv);
    soundOnBtn.id('soundOnBtn');
    soundOnBtn.mouseClicked(function() {
      sounds[1].connect();
    });
    let soundOffBtn = p.createButton('OFF').parent(soundDiv);
    soundOffBtn.id('soundOffBtn');
    soundOffBtn.mouseClicked(function() {
      sounds[1].disconnect();
    });
    // let soundVolumeDiv = p.createDiv('');
    // p.createP('Adjust sound effects volume:').parent(soundVolumeDiv);
    // sliders[1] = p.createSlider(0, 1, 0.5, 0.01).parent(soundVolumeDiv);
    // let buttonDiv = p.createDiv('');
    p.createP('Press ENTER to go back to main page').parent(mainDiv);
  }

  static changeToVisible(p) {
    p.select('#main-music-div').style('display:flex');
  }

  static changeToHidden(p) {
    p.select('#main-music-div').style('display:none');
  }

  static startMusic = (music) => {
    music.loop();
  }

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

changePosition = (title) => {
    title.position(300, 200)
  }

module.exports = MusicController;