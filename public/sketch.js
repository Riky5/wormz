const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

let world, engine;
let ground;
let worm;
let worm2;

let backgroundImg;
let wormImg0;
let wormImg1;
let bulletsWormOne;
let p1;

function preload()
{
  // load background image
  backgroundImg = loadImage("images/background-image.png");
  wormImg0 = loadImage("images/worm0.png");
  wormImg1 = loadImage("images/worm1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  bulletsWormOne = [];
  // ground = Bodies.rectangle(width/2, height-10, width, 180, {isStatic: true})
  ground = new Ground(width/2, height-20, width, 180)

  console.log(ground)

  worm = new Worm(150, windowHeight - 30, "wormOne");
  worm2 = new Worm(850, windowHeight - 30, "wormTwo", wormImg1);
  console.log(worm)

  function isInCollision(pair, label) {
    return pair.bodyA.label === label || pair.bodyB.label === label
  }

  // Maybe be moved to the bullet class
  Matter.Events.on(engine, "collisionStart", (event) => {
    for (const pair of event.pairs) {

      if (isInCollision(pair, "wormTwo") && isInCollision(pair, "bullet")) {
        if(pair.bodyA.label === "bullet") {
          Matter.World.remove(world, pair.bodyA)
        } else {
          Matter.World.remove(world, pair.bodyB)
        }
        bulletsWormOne.pop();
        worm2.reduceHP();
        console.log(worm2.hp);
      }
    }
  })

}

document.addEventListener("mousemove", function(e) {
  p1 = {
    x: e.pageX,
    y: e.pageY
  };
  angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);
})
let p2 = {
  x: 0,
  y: 400
};

function mouseClicked() {

  p2 = {x: worm.body.position.x, y: worm.body.position.y }
   angleDeg = Math.atan2(p2.y - p1.y, p2.x - p1.x);

  bullet = new Bullet(worm.body.position.x + 35, worm.body.position.y, 20)
  bulletsWormOne.push(bullet);
  Matter.Body.setVelocity(bullet.body,{x:(-cos(angleDeg))*30, y:-(sin(angleDeg))*30})
}

function draw() {
  background(backgroundImg);
  Matter.Engine.update(engine);
  // fill(0, 179, 0);
  ground.show();

  worm.show();
  worm2.show();

  bulletsWormOne.forEach(element => element.show());
}

const moveLimit = 5;
let moveCount = 0;

function keyPressed() {
//   if (keyCode == RIGHT_ARROW) {
//     Matter.Body.applyForce(worm.body, worm.body.position, { x: 0.5, y:0 })
//     console.log("worm position")
//     console.log(worm.body.position)
//   }
//   else if (keyCode == DOWN_ARROW) {
//     worm.body.y += 10;
//   }
//   else if (keyCode == LEFT_ARROW) {
//     worm.x -= 10;
//   }
//   else if (keyCode == UP_ARROW) {
//     worm.y -= 30;
//   }
//   else if (key == ' ') {
//     worm.setSpeed(0, 0);
//   }
//   return false;
// }
  worm.keyPressed();
  worm2.keyPressed2();
};

