
class ZoomController {

	static sf = 1; // scaleFactor
	// static x = 0; // pan X
	// static y = 0; // pan Y

	static zoom(p, mx, my, scaleFactor) {
		p.translate(mx, my)
		p.scale(scaleFactor)
		p.translate(-mx, -my);
	}

	// static adjustXYCoords(p) {
	// 		ZoomController.x -= p.pmouseX - p.mouseX;
	// 		ZoomController.y -= p.pmouseY - p.mouseY;
	// }

}

module.exports = ZoomController;