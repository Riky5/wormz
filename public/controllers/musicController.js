class MusicController {
  static createSoundScreen(p, sounds) {
    MusicController.setVolumes(sounds);
    let musicPlaying = false;
    const mainDiv = p.createDiv('');
    mainDiv.id('main-music-div');
    mainDiv.style('display:none');
    const title = p.createP('Music / Audio Settings').parent(mainDiv);
    title.id('title');
    const musicDiv = p.createDiv('').parent(mainDiv);
    musicDiv.id('musicDiv');
    const musicText = p.createP('Background Music:').parent(musicDiv);
    musicText.id('musicText');
    const musicOnBtn = p.createButton('ON').parent(musicDiv);
    musicOnBtn.id('musicOnBtn');
    musicOnBtn.mouseClicked(function() {
      if (!musicPlaying) {
        musicPlaying = true;
        sounds[0].loop();
      }
    });
    const musicOffBtn = p.createButton('OFF').parent(musicDiv);
    musicOffBtn.id('musicOffBtn');
    musicOffBtn.mouseClicked(function() {
      musicPlaying = false;
      sounds[0].stop();
    });
    const soundDiv = p.createDiv('').parent(mainDiv);
    soundDiv.id('soundDiv');
    const soundText = p.createP('Sound Effects:').parent(soundDiv);
    const soundOnBtn = p.createButton('ON').parent(soundDiv);
    soundOnBtn.id('soundOnBtn');
    soundOnBtn.mouseClicked(function() {
      sounds[1].connect(); // explosionSound
      sounds[2].connect(); // jumpSound
      sounds[3].connect(); // whooshSound
      sounds[4].connect(); // hitSound
      sounds[5].connect(); // ohOhSound
      sounds[6].connect(); // gameOverSound
    });
    const soundOffBtn = p.createButton('OFF').parent(soundDiv);
    soundOffBtn.id('soundOffBtn');
    soundOffBtn.mouseClicked(function() {
      sounds[1].disconnect(); // explosionSound
      sounds[2].disconnect(); // jumpSound
      sounds[3].disconnect(); // whooshSound
      sounds[4].disconnect(); // hitSound
      sounds[5].disconnect(); // ohOhSound
      sounds[6].disconnect(); // gameOverSound
    });
    const backToMain = p.createP('Press ENTER to go back to main page').parent(mainDiv);
    backToMain.id('enterMsg');
  }

  static changeToVisible(p) {
    p.select('#main-music-div').style('display:flex');
  }

  static changeToHidden(p) {
    p.select('#main-music-div').style('display:none');
  }

  static startMusic = (music) => {
    music.loop();
  };

  static setVolumes = (sounds) => {
    sounds[0].setVolume(0.30)
    sounds[1].setVolume(0.30)
    sounds[2].setVolume(0.30)
    sounds[3].setVolume(0.30)
    sounds[4].setVolume(0.30)
    sounds[5].setVolume(0.30)
    sounds[6].setVolume(0.02)
  }
}

module.exports = MusicController;
