const Controller = require("./Controller")
class MoveController {
  static moveWorm = (activeWorm, input, p) => {
    if (Controller.moveCount >= Controller.moveLimit) {
      return;
    }

    if (input === p.LEFT_ARROW) {
      activeWorm.move({ x: -0.1, y:0 }, 10)
      MoveController.increaseCount();

    } else if (input === p.RIGHT_ARROW) {
      activeWorm.move({ x: 0.1, y:0 }, 10)
      MoveController.increaseCount();

    } else if (input === p.UP_ARROW) {
      activeWorm.move({ x: 0, y:-0.2 }, 10)
      MoveController.increaseCount();
    }
  }

  static increaseCount = () => {
    Controller.moveCount += 1;
  }
}

module.exports = MoveController;
