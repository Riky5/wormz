class MoveController {
  static moveWorm = (activeWorm, input, p, game, sound) => {
    if (game.moveCount >= game.moveLimit) {
      return;
    }

    if (input === p.LEFT_ARROW) {
      activeWorm.move({ x: -0.1, y:0 }, 10)
      MoveController.increaseCount(game);

    } else if (input === p.RIGHT_ARROW) {
      activeWorm.move({ x: 0.1, y:0 }, 10)
      MoveController.increaseCount(game);

    } else if (input === p.UP_ARROW) {
      activeWorm.move({ x: 0, y:-0.2 }, 10)
      sound.play();
      MoveController.increaseCount(game);
    }
  }

  static increaseCount = (game) => {
    game.moveCount += 1;
  }
}

module.exports = MoveController;
