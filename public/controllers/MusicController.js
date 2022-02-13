initializeSound = () => {
  musicDiv = createDiv('');
  createP('Music background:').parent(musicDiv);
  startMusicBtn = createButton('ON').parent(musicDiv);
  stopMusicBtn = createButton('OFF').parent(musicDiv);
  musicVolumeDiv = createDiv('');
  createP('Adjust music volume:').parent(musicVolumeDiv);
  musicVolumeSlider = createSlider(0, 1, 0.5, 0.01);
  musicVolumeSlider.parent(musicVolumeDiv);
  soundDiv = createDiv('');
  createP('Sound Effects:').parent(soundDiv);
  startSoundEffects = createButton('ON').parent(soundDiv);
  stopSoundEffects = createButton('OFF').parent(soundDiv);
  soundVolumeDiv = createDiv('');
  createP('Adjust sound effects volume:').parent(soundVolumeDiv);
  createSlider(0, 1, 0.5, 0.01).parent(soundVolumeDiv);
  buttonDiv = createDiv('');
  createP('Press ENTER to go back to main page').parent(buttonDiv);
}

startMusic = () => {
  music.loop();
}

stopMusic = () => {
  music.stop();
}

enableSoundEffects = () => {
  explosionSound.connect();
}

disableSoundEffects = () => {
  explosionSound.disconnect();
}