'use strict';

const expect = require('chai').expect;
const WeaponController = require('../public/controllers/weaponController');

describe('WeaponController', () => {

  let weaponController;
  beforeEach(() => {
    weaponController = new WeaponController();
  })

  it('has the correct valid key codes', function(done) {
    expect(weaponController.validKeyCodes).to.eql([49,50,51]);
    done();
  });
  it('.isValidInput returns true for a valid keyCode', function(done) {
    expect(weaponController.isValidInput(51)).to.eq(true);
    done();
  });
  it('.isValidInput returns false for a invalid keyCode', function(done) {
    expect(weaponController.isValidInput(28)).to.eq(false);
    done();
  });
  it('.activeWormChangeWeapon is a recognised method', function(done) {
   expect(weaponController).to.respondTo('activeWormChangeWeapon');
    done();
  });
});
