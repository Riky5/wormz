class Worm {
  constructor(x, y, w = 90, h = 90) {
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  display() {
    const pos = this.body.position;
    const angle = this.body.angle;
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);
    // fixed double image
    // rectMode(CENTER); 
    // imageMode(CENTER);
    image(wormImage0, this.x, this.y, this.w, this.h)
  }

  moveLimit = 5;
  moveCount = 0;

  keyPressed() {

    if (moveCount >= moveLimit) {
      return;
    }
     
    switch(keyCode) {
  
      case LEFT_ARROW: 
        Matter.Body.applyForce(worm.body, worm.body.position, { x: -0.1, y:0 })
        moveCount += 1;
        break;
      case RIGHT_ARROW: 
        Matter.Body.applyForce(worm.body, worm.body.position, { x: 0.1, y:0 })
        moveCount += 1;
        break;
      case UP_ARROW:
        Matter.Body.applyForce(worm.body, worm.body.position, { x: 0, y:-0.2 })
        moveCount += 1;
        break;
    }
    return false;
  }
}