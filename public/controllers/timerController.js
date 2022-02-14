class TimerController {

  constructor() {
    this.interval = 0;
    this.timer = 0;
  }

  static timeLimit = 20;

  static resetTimer = () => {
    this.timer = 0;
    
  }
  static clearTimer = () => {
    clearInterval(this.interval);
  }
  static increaseTimer = () => {
    this.timer ++;
  }
  static startTimer = () => {
    this.interval = setInterval(this.increaseTimer, 1000);
  }
  static timeLeftOnTurn = () => {
    return this.timeLimit - this.timer;
  }
  static timerForTurn = (p, game) => {
    if (this.timeLeftOnTurn() <= 0) {
      game.changePlayerTurn();
      this.resetTimer();
      game.resetMoveCount();
    } 
    else if(this.timeLeftOnTurn() <= 5) {
      // Sets the number shown on the timer to red
      p.fill(220,0,0)
    }
    return this.timeLeftOnTurn();
  }

}

module.exports = TimerController;