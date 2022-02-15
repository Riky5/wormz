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
  // it('.resetTimer changes the timer value back to 0', function(done) {
  //   timerController.increaseTimer();
  //   timerController.increaseTimer();
  //   timerController.resetTimer();
  //   expect(timerController.timer).to.eq(0);
  //   done();
  // });
  // it('.timeLeftOnTurn calculates the correct time reamining', function(done) {
  //   timerController.increaseTimer();
  //   timerController.increaseTimer();
  //   expect(timerController.timeLeftOnTurn()).to.eq(timerController.timeLimit - 2);
  //   done();
  // });
});
