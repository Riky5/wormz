class TimerController {

  constructor() {
    this.interval = 0;
    this.timer = 0;
    this.timeLimit = 20;
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
  timerForTurn = (p, game) => {
    if (this.timeLeftOnTurn() <= 0) {
      game.changePlayerTurn();
      game.resetMoveCount();
      this.resetTimer();
    } 
    else if(this.timeLeftOnTurn() <= 5) {
      // Sets the number shown on the timer to red
      p.fill(220,0,0)
    }
    return this.timeLeftOnTurn();
  }
}

module.exports = TimerController;