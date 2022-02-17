class MusicController {
  static createSoundScreen(p, sounds) {
    let musicPlaying = false;
    let mainDiv = p.createDiv('');
    mainDiv.id('main-music-div');
    mainDiv.style('display:none');
    let title = p.createP('Music / Audio Settings').parent(mainDiv);
    title.id('title');
    let musicDiv = p.createDiv('').parent(mainDiv);
    musicDiv.id('musicDiv');
    let musicText = p.createP('Background Music:').parent(musicDiv);
    musicText.id('musicText');
    let musicOnBtn = p.createButton('ON').parent(musicDiv);
    musicOnBtn.id('musicOnBtn');
    musicOnBtn.mouseClicked(function() {
      if (!musicPlaying) {
        musicPlaying = true;
        sounds[0].loop();
      }
    });
    let musicOffBtn = p.createButton('OFF').parent(musicDiv);
    musicOffBtn.id('musicOffBtn');
    musicOffBtn.mouseClicked(function() {
      musicPlaying = false;
      sounds[0].stop();
    });
    let soundDiv = p.createDiv('').parent(mainDiv);
    soundDiv.id('soundDiv');
    let soundText = p.createP('Sound Effects:').parent(soundDiv);
    let soundOnBtn = p.createButton('ON').parent(soundDiv);
    soundOnBtn.id('soundOnBtn');
    soundOnBtn.mouseClicked(function() {
      sounds[1].connect(); // explosionSound
      sounds[2].connect(); // jumpSound
      sounds[3].connect(); // whooshSound
      sounds[4].connect(); // hitSound
      sounds[5].connect(); // ohOhSound
      sounds[6].connect(); // gameOverSound
    });
    let soundOffBtn = p.createButton('OFF').parent(soundDiv);
    soundOffBtn.id('soundOffBtn');
    soundOffBtn.mouseClicked(function() {
      sounds[1].disconnect(); // explosionSound
      sounds[2].disconnect(); // jumpSound
      sounds[3].disconnect(); // whooshSound
      sounds[4].disconnect(); // hitSound
      sounds[5].disconnect(); // ohOhSound
      sounds[6].disconnect(); // gameOverSound
    });
    let backToMain = p.createP('Press ENTER to go back to main page').parent(mainDiv);
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
  }
}

module.exports = MusicController;