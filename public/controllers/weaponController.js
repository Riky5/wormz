class WeaponController {
  constructor() {
    // These relate to 1, 2, 3 on the keyboard
    this.validKeyCodes = [49,50,51];
  }
 
  activeWormChangeWeapon = (activeWorm, input) => {
    activeWorm.changeWeapon(input - 48);
  }

  isValidInput = (keyCode) => {
    return this.validKeyCodes.includes(keyCode);
  }
}

module.exports = WeaponController;
