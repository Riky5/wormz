// This is housed in controllers for now, can rethink later
const Matter = require('matter-js');
const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

class Game {
  constructor() {
    this.moveLimit = 5;
    this.moveCount = 0;
    this.engine = Engine.create();
    this.world = engine.world;
    this.bullets = [];
    this.ground = new Ground(width/2, height-20, width, 180)
    this.worm = new Worm({x: (windowWidth/10)*2, y: windowHeight - 100, options: "wormOne", img: wormImg0, matter: Matter});
    this.worm2 = new Worm({x: (windowWidth/10)*8, y: windowHeight - 100, options: "wormTwo", img: wormImg1, matter: Matter});
    Matter.World.add(world, [worm.body,worm2.body]);
    this.player1Turn = true
  }
}

module.exports = Game;