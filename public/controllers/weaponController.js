class WeaponController {
  static validMoves = () => [49, 50, 51];
 
  static activeWormChangeWeapon = (activeWorm, input) => {
    console.log(activeWorm.currentWeapon)
    activeWorm.changeWeapon(input - 48)
    console.log(activeWorm.currentWeapon)
  }

  static isValidInput = (keyCode) => {
    let validArray = WeaponController.validMoves()
    return validArray.includes(keyCode);
  }

}

module.exports = WeaponController;
