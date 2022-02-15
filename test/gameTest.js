'use strict';
const expect = require('chai').expect;
const Game = require('../public/models/game');
const Worm = require('../public/entities/worm');
const weaponModel = require('../public/models/weapon')
const bulletModel = require('../public/entities/bullet')
const Lava = require('../public/entities/ground');
const Terrain = require('../public/terrain');
const TimerController = require('../public/controllers/timerController')

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
    game = new Game({p: p5Mock, imgs: wormImgMock, matter: matterMock, lava: Lava, worm: Worm, terrain: Terrain, timer: TimerController, weaponModel: weaponModel, bulletModel: bulletModel});
  })

  it('initialized with correct parameters', function(done) {
    expect(game.bullets).deep.to.equal([]);
    expect(game.explosions).deep.to.equal([]);
    expect(game.mode).to.eq("start");
    expect(game.worm).to.be.a("object");
    expect(game.worm2).to.be.a("object");
    expect(game.lava).to.be.a("object");
    expect(game.player1Turn).to.eq(true);
    expect(game.moveCount).to.eq(0);
    expect(game.moveLimit).to.eq(5);
    done();
  });

  it ('.changePlayerTurn sets player turn to opposite value', () => {
    expect(game.player1Turn).to.eq(true);
    game.changePlayerTurn();
    expect(game.player1Turn).to.eq(false);
  })

  it ('.resetMoveCount sets moveCount back to 0', () => {
    game.moveCount = 5;
    expect(game.moveCount).to.eq(5);
    game.resetMoveCount();
    expect(game.moveCount).to.eq(0);
  })

  it(".setGameOver sets game mode to 'gameOver'", () => {
    expect(game.mode).to.eq('start');
    game.setGameOver();
    expect(game.mode).to.eq('gameOver');
  })

  it('.isWormDead returns true if a worm has 0 hp', () => {
    expect(game.isWormDead()).to.eq(false);
    game.worm.hp = 0;
    expect(game.isWormDead()).to.eq(true);
  });

  it('.getActiveWorm() returns a worm', () => {
    expect(game.getActiveWorm()).to.be.an.instanceOf(Worm);
  });
});
