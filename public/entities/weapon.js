class WeaponImage {
  show = (p,x,y,direction) => {
    let angle = Math.atan2(y - p.mouseY, x - p.mouseX);
    p.fill(255);
    p.translate(x, y);
    p.rotate(angle);
    p.push();
    if (direction === 'left') {p.rect(0 - 28, 0 + 5, 40, 7);}
    else {p.rect(0 - 25, 0 - 12, 40, 7);}
    p.pop();
  }
}

module.exports = WeaponImage;