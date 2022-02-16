class TimerController {

  constructor() {
    this.interval = 0;
    this.timer = 0;
    this.timeLimit = 20;
    this.pausedTimer = false;
  }

  resetTimer = () => {
    this.timer = 0;
  }
  
  clearTimer = () => {
    clearInterval(this.interval);
  }
  increaseTimer = () => {
    this.timer ++;
  }
  startTimer = () => {
    this.interval = setInterval(this.increaseTimer, 1000);
  }
  timeLeftOnTurn = () => {
    return this.timeLimit - this.timer;
  }
  pauseTimer = () => {
    this.pausedTimer != this.pausedTimer
  }
  timerForTurn = (p, game) => {
    if (this.timeLeftOnTurn() <= 0) {
      if(this.pausedTimer === false)
      {game.changePlayerTurn();
      game.resetMoveCount();
      this.resetTimer();}
    } 
    else if(this.timeLeftOnTurn() <= 5) {
      // Sets the number shown on the timer to red
      p.fill(220,0,0)
    }
    return this.timeLeftOnTurn();
  }
}

module.exports = TimerController;