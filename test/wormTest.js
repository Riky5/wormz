'use strict';

const Worm = require('../public/entities/worm');
const Matter = require('matter-js');
const expect = require('chai').expect;

describe('Worm', () => {
  let worm;
  beforeEach(() => {
    worm = new Worm({x: 0, y: 0, w: 90, h: 90, options: "wormOne", img: 'testIMG', matter: Matter});
  })

  it('initialized with correct parameters', function(done) {
    expect(worm.x).to.eq(0);
    expect(worm.y).to.eq(0);
    expect(worm.w).to.eq(90);
    expect(worm.h).to.eq(90);
    expect(worm.hp).to.eq(100);
    expect(worm.worm).to.eq('testIMG');
    expect(worm.matter).to.eq(Matter);
    done();
  });

  it('.reduceHp reduces worm hp by 5', function(done) {
    expect(worm.hp).to.eq(100);
    worm.reduceHP();
    expect(worm.hp).to.eq(95);
    worm.reduceHP();
    expect(worm.hp).to.eq(90);
    done();
  });

  describe('.move', () => {
    it('applies x force to worm', function(done) {
      expect(worm.body.force.x).to.eq(0)
      worm.move({ x: -0.1, y: 0 }, 10)
      expect(worm.body.force.x).to.eq(-0.1)
      done();
    });

    it('applies y force to worm', function(done) {
      expect(worm.body.force.y).to.eq(0)
      worm.move({ x: 0, y: 0.1 }, 10)
      expect(worm.body.force.y).to.eq(0.1)
      done();
    });

    it('applies mass to worm', function(done) {
      worm.move({ x: 0, y: 0.1 }, 10)
      expect(worm.body.mass).to.eq(10)
      done();
    });
  });
});
