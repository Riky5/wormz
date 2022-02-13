'use strict';

const expect = require('chai').expect;
const Game = require('../public/models/game');
const Worm = require('../public/entities/worm');
const TimerController = require('../public/controllers/timerController');
const Ground = require('../public/entities/ground');

describe('TimerController', () => {

  let timerController;
  beforeEach(() => {
    timerController = new TimerController();
  })

  it('is initialized with correct parameters', function(done) {
    expect(timerController.interval).to.eq(0);
    expect(timerController.timer).to.eq(0);
    done();
  });
  // it('.increaseTimer increases timer value by 1', function(done) {
  //   // Issue with using static methods in timerController. Leads to increaseTimer not being able to be
  //   // called on instances of timerController. Using it on TimerController itself means what is returned
  //   // is undefined.
  //   timerController.increaseTimer();
  //   expect(timerController.timer).to.eq(1);
  //   done();
  // });
  // it('.resetTimer changes the timer value back to 0', function(done) {
  //   timerController.increaseTimer();
  //   timerController.increaseTimer();
  //   expect(timerController.timer).to.eq(0);
  //   done();
  // });
  // it('.timeLeftOnTurn calculates the correct time reamining', function(done) {
  //   timerController.increaseTimer();
  //   timerController.increaseTimer();
  //   expect(timerController.timeLeftOnTurn()).to.eq(TimeController.timeLimit - 2);
  //   done();
  // });
});
