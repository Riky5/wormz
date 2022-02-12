
class MoveController {
  static moveLimit = 5;
  static moveCount = 0;

  static moveWorm = (activeWorm, input) => {
    if (this.moveCount >= this.moveLimit) {
      return;
    };

    if (input === LEFT_ARROW) {
      activeWorm.move({ x: -0.1, y:0 }, 10)
      MoveController.increaseCount();

    } else if (input === RIGHT_ARROW) {
      activeWorm.move({ x: 0.1, y:0 }, 10)
      MoveController.increaseCount();

    } else if (input === UP_ARROW) {
      activeWorm.move({ x: 0, y:-0.2 }, 10)
      MoveController.increaseCount();
    };
  };

  static displayWhichPlayerTurn() {
    textSize(30)
    if(Controller.player1Turn) {
      text("Player 1", windowWidth /2 + 200, windowHeight / 2 - 320);
    }
    else {
      text("Player 2", windowWidth /2 + 200, windowHeight / 2 - 320);
    };
  };

  static increaseCount = () => {
    this.moveCount += 1;
  };
};
