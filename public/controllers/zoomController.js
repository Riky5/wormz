
class ZoomController {

	constructor() {
		this.second_screen = false;
		this.bottom_screen = false
	}

	static sf = 1; // scaleFactor

	static zoom(p, mx, my, scaleFactor,screenwidth) {
		p.translate(mx, my)
		p.scale(scaleFactor)
		if (my > p.windowHeight - 100 || (ZoomController.sf === 1 && my > 200)) {p.translate(-mx, -my - 200);this.second_screen = false; this.bottom_screen = true}
		else {p.translate(-mx, -my);this.second_screen = false; this.bottom_screen = false}
	}

}

module.exports = ZoomController;