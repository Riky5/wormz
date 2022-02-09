let Engine = Matter.Engine,
// Render = Matter.Render,
World = Matter.World,
Bodies = Matter.Bodies;

function setup() {
  createCanvas(800, 400);
  let options = {
    isStatic: true
  }
  engine = Engine.create();
  world = engine.world;
  worm = Bodies.rectangle(400, 200, 80, 80, options);
  Engine.run();
}

function draw() {
  background(51);
}