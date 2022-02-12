// This is housed in controllers for now, can rethink later
const Matter = require('matter-js');
const Worm = require('../entities/worm');
const Bullet = require('../entities/bullet');
const Ground = require('../entities/ground');

class Game {
  constructor(p, wormImg) {
    this.engine = Matter.Engine.create();
    this.world = this.engine.world;
    this.bullets = [];
    this.ground = new Ground(p.width/2, p.height-20, p.width, 180, this.world)
    this.worm = new Worm({x: (p.windowWidth/10)*2, y: p.windowHeight - 100, options: "wormOne", img: wormImg[0], matter: Matter});
    this.worm2 = new Worm({x: (p.windowWidth/10)*8, y: p.windowHeight - 100, options: "wormTwo", img: wormImg[1], matter: Matter});
    Matter.World.add(this.world, [this.worm.body,this.worm2.body]);
    this.player1Turn = true
    this.mode = "start";
  }
}

module.exports = Game;