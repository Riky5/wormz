const ZoomController = require("../controllers/zoomController");

class WeaponImage {
  show = (p, x, y, direction, img) => {
    let angle;
    if (ZoomController.bottomScreen === true)
    { angle = Math.atan2(y - p.mouseY - 200, x - p.mouseX);}
    else {angle = Math.atan2(y - p.mouseY, x - p.mouseX)}
    p.fill(255);
    p.translate(x, y);
    p.rotate(angle);
    p.push();
    if (direction === 'left') {
      p.image(img, 0 - 28, 0 + 5, 32, 18);
    }
    else {
      p.scale(1, -1);
      p.image(img, 0 - 28, 0 + 5, 32, 18);
    }
    p.pop();
  }
}

module.exports = WeaponImage;