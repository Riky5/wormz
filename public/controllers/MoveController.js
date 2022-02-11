
class MoveController {
  static moveWorm = (activeWorm, input) => {
    if (Controller.moveCount >= Controller.moveLimit) {
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
    Controller.moveCount += 1;
  }
}
