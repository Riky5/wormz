class Worm {
  constructor({x: x, y: y, w: w = 40, h: h= 40, options: options, img: img, matter: matter}) {
    this.body = matter.Bodies.rectangle(x, y, w, h, {label: options});
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.worm = img;
    const HP = 100;
    this.hp = HP;
    this.matter = matter;
  }

  show = (p) => {
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 8
    p.push();
    p.translate(pos.x, pos.y);
    p.rotate(angle);
    p.fill(255);

    // SQUARE - uncomment here
    // p.rectMode(CENTER); 
    // p.rect(0, 0, this.w, this.h)

    // WORM IMAGE - uncomment here
    p.imageMode(p.CENTER);
    p.image(this.worm, 0, 0, this.w, this.h);

    p.pop();

    // p.rect(this.x, this.y, this.w, this.h);
    // HP above the element
    if (this.hp > 70) {
      p.fill(0, 255, 0)
    } else if (this.hp <= 30) {
      p.fill(255, 0, 0)
    } else if (this.hp <= 70) {
      p.fill(255, 191, 0)
    }

    p.rect(pos.x, pos.y - 70, 40, 20);
    p.fill(0)
    p.textSize(15)
    p.text(this.hp, pos.x + 10, pos.y - 55);
  }

  move(force, mass) {
    this.matter.Body.applyForce(this.body, this.body.position, force)
    this.body.mass = mass
    return this.body.position
  }

  reduceHP(amount = 5) {
    if (this.hp > 0) {
      this.hp -= amount;
    }
  }
}

module.exports = Worm;