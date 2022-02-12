'use strict';

const Matter = require('matter-js');
const expect = require('chai').expect;
const Game = require('../public/controllers/game');

describe('Game', () => {
  let game;
  beforeEach(() => {
    game = new Game();
  })

  it('initialized with correct parameters', function(done) {
    expect(game.moveLimit).to.eq(5);
    expect(game.bullets).deep.to.equal([]);
    expect(game.player1Turn).to.eq(true);
    expect(game.mode).to.eq("start");
    done();
  });

});