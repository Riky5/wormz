class WeaponImage {
  show = (p,x,y,direction) => {
    let angle = Math.atan2(y - p.mouseY, x - p.mouseX);
    console.log(angle)
    p.fill(255);
    p.translate(x, y);
    p.rotate(angle);
    console.log(x)
    console.log(y)
    console.log(angle)
    p.push();
    if (direction === 'left') {p.rect(0 - 28, 0 + 5, 40, 7);}
    else {p.rect(0 - 20, 0 + 7, 40, 7);}
    p.pop();
  }
}

module.exports = WeaponImage;