
class ZoomController {
	// check if this constructor is ever use
  constructor() {
    this.second_screen = false;
  }

	constructor() {
		this.secondScreen = false;
		this.bottomScreen = false
	}


	static explosionZoom = (game) => {
		ZoomController.sf = 1
		// removes explosion from screen
		setTimeout(() => game.explosions.pop(), 500)
		setTimeout(() => ZoomController.sf = 2, 1000)

	static sf = 1; // scaleFactor

	static zoom(p, mx, my, scaleFactor,screenwidth) {
		p.translate(mx, my)
		p.scale(scaleFactor)
		if (my > p.windowHeight - 100 || (ZoomController.sf === 1 && my > 200)) 
		{p.translate(-mx, -my - 200);
			this.secondScreen = false; 
			this.bottomScreen = true}
		else 
		{p.translate(-mx, -my);
			this.secondScreen = false; 
			this.bottomScreen = false}
	}
}

module.exports = ZoomController;
