const HP = 100

class Worm {
  constructor(x, y, options, img = wormImg0, matter, w = 70, h = 70) {
    this.body = matter.Bodies.rectangle(x, y, w, h, {label: options});
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.worm = img;
    this.hp = HP;
    this.matter = matter
  }

  show = () => {
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

  move(force, mass) {
    this.matter.Body.applyForce(this.body, this.body.position, force)
    this.body.mass = mass
    return this.body.position
  }

  reduceHP() {
    if (this.hp > 0) {
      this.hp -= 5;
    }
  }
}

module.exports = Worm;