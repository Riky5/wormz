
class ZoomController {
  // check if this constructor is ever use
  constructor() {
    this.secondScreen = false;
    this.bottomScreen = false;
  }

  static sf = 1; // scaleFactor

  static explosionZoom = (game) => {
    setTimeout(() => game.explosions.pop(), 500);
    setTimeout(() => ZoomController.ZoomIn(), game.intervalBetweenShots);
    ZoomController.ZoomOut();
  };

  static zoom(p, mx, my, scaleFactor, screenwidth) {
    p.translate(mx, my);
    p.scale(scaleFactor);
    if (my > p.windowHeight - 100 || (ZoomController.sf === 1 && my > 200)) {
      p.translate(-mx, -my - 200);
      this.secondScreen = false;
      this.bottomScreen = true;
    } else {
      p.translate(-mx, -my);
      this.secondScreen = false;
      this.bottomScreen = false;
    }
  }

  static zoomIn = () => ZoomController.sf = 2;

  static ZoomOut = () => ZoomController.sf = 1;
}

module.exports = ZoomController;
