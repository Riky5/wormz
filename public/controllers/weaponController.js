class WeaponController {
  static validMoves = () => [49, 50, 51];
 
  static activeWormChangeWeapon = (activeWorm, input) => {
    activeWorm.changeWeapon(input - 48)
  }

  static isValidInput = (keyCode) => {
    return WeaponController.validMoves().includes(keyCode);
  }
}

module.exports = WeaponController;
