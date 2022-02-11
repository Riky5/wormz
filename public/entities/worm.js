class Worm {
  constructor(x, y, options, img = wormImg0, w = 70, h = 70) {
    this.body = Matter.Bodies.rectangle(x, y, w, h, {label: options});
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
    if (this.hp > 70) {
      fill(0, 255, 0)
    } else if (this.hp <= 30) {
      fill(255, 0, 0)
    } else if (this.hp <= 70) {
      fill(255, 191, 0)
    }

    rect(pos.x, pos.y - 70, 40, 20);
    fill(0)
    textSize(15)
    text(this.hp, pos.x + 10, pos.y - 55);
  }

  moveLimit = 5;
  moveCount = 0;

  keyPressed(wormChoice) {
    if (moveCount >= moveLimit) {
      return;
    }
     
    switch(keyCode) {
  
      case LEFT_ARROW: 
        Matter.Body.applyForce(wormChoice.body, wormChoice.body.position, { x: -0.1, y:0 })
        moveCount += 1;
        break;
      case RIGHT_ARROW: 
        Matter.Body.applyForce(wormChoice.body, wormChoice.body.position, { x: 0.1, y:0 })
        this.body.mass = 10
        moveCount += 1;
        break;
      case UP_ARROW:
        Matter.Body.applyForce(wormChoice.body, wormChoice.body.position, { x: 0, y:-0.2 })
        this.body.mass = 10
        moveCount += 1;
        break;
    }
    return false;
  }


  reduceHP() {
    if (this.hp > 0) {
      this.hp -= 5;
    }
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