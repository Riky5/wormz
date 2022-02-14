'use strict';

const Weapon = require('../public/models/weapon');
const expect = require('chai').expect;
const Bullet = require('../public/entities/bullet')
const Game = require('../public/models/game');
const Ground = require('../public/entities/ground');
const Worm = require('../public/entities/worm');
const Matter = require('matter-js');

describe('Weapon', () => {
  let weapon;
  let game;
  let p5Mock = {
    width: undefined,
    height: undefined,
    windowHeight: undefined,
    windowWidth: undefined
  }
  let wormImgMock = [];
  beforeEach(() => {
    game = new Game({p: p5Mock, imgs: wormImgMock, matter: Matter, ground: Ground, worm: Worm});
    weapon = new Weapon({name: 'Grenade', velocity: 30, image: 'testImage', damage: 5, bulletModel: Bullet, worm: new Worm({x: 0, y: 0, matter: Matter}), game: game});

  })

  it('initialized with correct parameters', function(done) {
    expect(weapon.name).to.eq('Grenade');
    expect(weapon.velocity).to.eq(30);
    expect(weapon.image).to.eq('testImage');
    expect(weapon.damage).to.eq(5);
    expect(weapon.worm).to.be.an.instanceOf(Worm)
    expect(weapon.game).to.eq(game)
    done();
  });
  it('.createBullet creates an instance of bullet', function(done) {
    let bullet = weapon.createBullet();
    expect(bullet).to.be.an.instanceOf(Bullet)
    done();
  })
  it('.createBullet sets the image of bullet', function(done) {
    let bullet = weapon.createBullet();
    // expect(bullet.damage).to.eq(5)
    expect(bullet.grenade).to.eq('testImage')
    done();
  })
});
