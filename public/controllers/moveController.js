class MoveController {
  // These relate to LeftArrow, UpArrow, RightArrow on the keyboard
  static validKeyCodes = () => [37, 38, 39];

  static moveWorm = (activeWorm, input, p, game, sounds) => {
    if (game.moveCount >= game.moveLimit) {
      return;
    }

    if (input === p.LEFT_ARROW) {
      activeWorm.move({x: -0.12, y: 0}, 10);
      sounds[1].play();
    } else if (input === p.RIGHT_ARROW) {
      activeWorm.move({x: 0.12, y: 0}, 10);
      sounds[1].play();
    } else if (input === p.UP_ARROW) {
      activeWorm.move({x: 0, y: -0.2}, 10);
      sounds[0].play();
    }
    MoveController.increaseCount(game);
  };

  static increaseCount = (game) => {
    game.moveCount += 1;
  };
  static resetCount = (game) => {
    game.moveCount = 0;
  };

  static isValidInput = (keyCode) => {
    const validArray = MoveController.validKeyCodes();
    return validArray.includes(keyCode);
  };
}

module.exports = MoveController;
