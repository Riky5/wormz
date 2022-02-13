'use strict';

const Matter = require('matter-js');
const expect = require('chai').expect;
const Game = require('../public/models/game');
const Worm = require('../public/entities/worm')
const Ground = require('../public/entities/Ground')

describe('Game', () => {
  let game;
  let p5Mock = {
    width: undefined,
    height: undefined,
    windowHeight: undefined,
    windowWidth: undefined
  }
  let wormImgMock = [];
  let matterMock = {
    World: {
      add: () => { undefined }
    },
    Engine: {
      create: () => {return {world: undefined}},
    },
    Bodies: {
      rectangle: () => { return {isStatic: undefined}}
    }
  }

  beforeEach(() => {
    // struggled to find a way to mock constructor for ground and worm
    game = new Game({p: p5Mock, imgs: wormImgMock, matter: matterMock, ground: Ground, worm: Worm});
  })

  it('initialized with correct parameters', function(done) {
    expect(game.bullets).deep.to.equal([]);
    expect(game.mode).to.eq("start");
    expect(game.worm).to.be.a("object")
    expect(game.worm2).to.be.a("object")
    expect(game.ground).to.be.a("object")
    done();
  });

});