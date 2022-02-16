'use strict';

const Bullet = require('../public/entities/bullet');
const Worm = require('../public/entities/worm');
const Ground = require('../public/entities/lava');
const Game = require('../public/models/game')
const expect = require('chai').expect


describe('Bullet', () => {
	let bullet;
	let p5Mock = {
		width: undefined,
		height: undefined,
		windowHeight: undefined,
		windowWidth: undefined
	}
	let matterMock = {
		World: {
			add: () => { undefined }
		},
		Engine: {
			create: () => { return { world: undefined } },
		},
		Bodies: {
			circle: () => { return {isStatic: undefined } }
		}
	};
	let gameMock = {
		world: undefined
	}
  beforeEach(() => {
    bullet = new Bullet({ x: 10, y: 10, r: 15, game: gameMock, img: 'testImg', matter: matterMock, velocity: 15, damage: 15})
  })

	it('Bullet creates an instance of itself with correct parameters', function (done) {
		expect(bullet.r).to.eq(15);
		expect(bullet.image).to.eq('testImg');
		done();
	});

	describe("show() method", ()=>{
		it("has a show method", ()=>{
			expect(bullet.show).to.exist
		})
		
	})

});
