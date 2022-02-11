class Worm {
  constructor(x, y, w = 70, h = 70, img = wormImg0) {
    this.body = Matter.Bodies.rectangle(x, y, w, h);
    Matter.World.add(world, this.body);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.worm = img;
    this.hp = 100;
  }

  show() {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 8
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    fill(255);

    // SQUARE - uncomment here
    // rectMode(CENTER); 
    // rect(0, 0, this.w, this.h)


    // WORM IMAGE - uncomment here
    imageMode(CENTER);
    image(this.worm, 0, 0, this.w, this.h);

    pop();

    // rect(this.x, this.y, this.w, this.h);
    // HP above the element 
    fill(50)
    text(this.hp, ((this.x) + (this.x / 2)) , this.y - 20);

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
        this.body.mass = 10
        moveCount += 1;
        break;
      case UP_ARROW:
        Matter.Body.applyForce(worm.body, worm.body.position, { x: 0, y:-0.2 })
        this.body.mass = 10
        moveCount += 1;
        break;
    }
    return false;
  }

  // for second worm - temporary? - might be deleted later - when worms take turns
  keyPressed2() { 
    switch(keyCode) {
  
      case 83: 
        Matter.Body.applyForce(worm2.body, worm2.body.position, { x: -0.1, y:0 })
        break;
      case 68: 
        Matter.Body.applyForce(worm2.body, worm2.body.position, { x: 0.1, y:0 })
        this.body.mass = 10
        break;
      case 69:
        Matter.Body.applyForce(worm2.body, worm2.body.position, { x: 0, y:-0.2 })
        this.body.mass = 10
        break;
    }
    return false;
  }
}