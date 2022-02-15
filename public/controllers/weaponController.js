class WeaponController {
  static validKeyCodes = () => [49, 50, 51];
 
  static activeWormChangeWeapon = (activeWorm, input) => {
    activeWorm.changeWeapon(input - 48)
  }

  static isValidInput = (keyCode) => {
    return WeaponController.validKeyCodes().includes(keyCode);
  }
}

module.exports = WeaponController;
