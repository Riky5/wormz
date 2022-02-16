const MAXHEALTH = 100;
const MEDIUMHEALTH = 70;
const LOWHEALTH = 30;
const MINHEALTH = 0;


class Worm {
  constructor({x: x, y: y, w: w = 40, h: h= 40, options: options, img: img, matter: matter, direction: direction, weapons: weapons, graveImg: graveImg}) {
    this.body = matter.Bodies.rectangle(x, y, w, h, {label: options});
    matter.Body.setInertia(this.body, Infinity);
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.img = img;
    this.graveImg = graveImg;
    this.hp = MAXHEALTH;
    this.matter = matter;
    this.weapons = weapons;
    this.currentWeapon = this.weapons[0];
    this.direction = direction;
    this.isAlive = true;
  }

  show = (p, img = this.img, graveImg = this.graveImg) => {
    this.graveImg = graveImg;
    const pos = this.body.position;
    const angle = this.body.angle;
    this.body.mass = 8;

    // Render worm
    p.push();
    p.translate(pos.x, pos.y);
    if (this.direction === 'left') { p.scale(-1, 1); }
    p.rotate(angle);
    p.imageMode(p.CENTER);
    p.image(img, 0, 0, this.w, this.h);
    
    // Render grave if worm is dead
    if(this.hp > MINHEALTH) {
      p.image(img, 0, 0, this.w, this.h);
    }
    else {
      p.image(graveImg, 0, 0, this.w, this.h);
    }
    p.pop();  
  
    // HP bar color above the worm
    const hpBarColor = this.getHPColor();
    p.fill(hpBarColor[0], hpBarColor[1], hpBarColor[2]);
    p.rect(pos.x, pos.y - 70, 40, 20);
    p.fill(0);
    p.textSize(15);
    p.text(this.hp, pos.x + 10, pos.y - 55);
  }


  move = (force, mass) => {
    this.matter.Body.applyForce(this.body, this.body.position, force);
    this.body.mass = mass;
    return this.body.position;
  };

  reduceHP = (damageValue) => {
    if (this.hp - damageValue > MINHEALTH) {
      this.hp -= damageValue
    }
    else {
      this.hp = MINHEALTH
    }
  };

  changeWeapon = (weaponInput) => {
    if (weaponInput <= this.weapons.length && weaponInput > 0) {
      return this.currentWeapon = this.weapons[weaponInput - 1];
    }
  };

  setDirection = (direction) => this.direction = direction;

  getHPColor = () => {
    if (this.hp > MEDIUMHEALTH) {
      return [0, 255, 0];
    } else if (this.hp <= LOWHEALTH) {
      return [255, 0, 0];
    } else if (this.hp <= MEDIUMHEALTH) {
      return [255, 191, 0];
    }
  };
}

module.exports = Worm;
