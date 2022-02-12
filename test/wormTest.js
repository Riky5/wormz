'use strict';

const Worm = require('../public/entities/worm');
const Matter = require('matter-js')
const expect = require('chai').expect;

describe('Worm', () => {
  const worm = new Worm(0,0,90,90, Matter);

  it('should be an object', function(done) {
    expect(worm).to.be.a('object');
    done();
  });

  it('initialized with correct parameters', function(done) {
    expect(worm.x).to.eq(0);
    expect(worm.y).to.eq(0);
    expect(worm.w).to.eq(90);
    expect(worm.h).to.eq(90);
    done();
  });

  it('has hp', function(done) {
    expect(worm.hp).to.eq(100);
    done();
  });

  it('has keypressed and show methods', function(done) {

    console.log(worm.keyPressed())
    done();
  });

})



