
class MoveController {
  static moveLimit = 5;
  static moveCount = 0;

  static moveWorm = (activeWorm, input) => {
    if (this.moveCount >= this.moveLimit) {
      return;
    }

    if (input === LEFT_ARROW) {
      activeWorm.move({ x: -0.1, y:0 }, 10)
      MoveController.increaseCount();

    } else if (input === RIGHT_ARROW) {
      activeWorm.move({ x: 0.1, y:0 }, 10)
      MoveController.increaseCount();

    } else if (input === UP_ARROW) {
      activeWorm.move({ x: 0, y:-0.2 }, 10)
      MoveController.increaseCount();
    }
  }

  static increaseCount = () => {
    this.moveCount += 1;
  }
}
