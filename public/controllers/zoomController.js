
class ZoomController {

	constructor() {
		this.second_screen = false;
	}

	static sf = 1; // scaleFactor

	static zoom(p, mx, my, scaleFactor,screenwidth) {
		p.translate(mx, my)
		p.scale(scaleFactor)
		if (mx > 1200 && p.windowWidth < screenwidth && my > p.windowHeight - 100) {p.translate(-mx - 500, -my - 200);this.second_screen = true}
		else if (my > p.windowHeight - 100) {p.translate(-mx, -my - 200);this.second_screen = false}
		else if (mx > 1200 && p.windowWidth < screenwidth) {p.translate(-mx - 500, -my);this.second_screen = true}
		else {p.translate(-mx, -my);this.second_screen = false}
	}

}

module.exports = ZoomController;