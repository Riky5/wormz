
class ZoomController {
	// check if this constructor is ever use
	constructor() {
		this.secondScreen = false;
		this.bottomScreen = false
	}

	static sf = 1; // scaleFactor

	static explosionZoom = (game) => {
		ZoomController.sf = 1
		// removes explosion from screen
		setTimeout(() => game.explosions.pop(), 500)
		setTimeout(() => ZoomController.sf = 2, 1000)
  }

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

	static setMousePos(game) {
		if (game.isWormDead()) {
			let deadWorm = game.getDeadWorm().body;
			return {
				mx = deadWorm.position.x
				my = deadWorm.position.y}
		}
			// Zoom in on bullet
		else if (game.bulletExists === true)
		{ 
			mx = ShootingController.bullet.body.position.x;
			my = ShootingController.bullet.body.position.y;}
			// Zoom in on active player
		else if(game.player1Turn === true)
		{ 
			mx = game.worm.body.position.x;
			my = game.worm.body.position.y;
		} else { 
			mx = game.worm2.body.position.x;
			my = game.worm2.body.position.y;
		}
	}
}

module.exports = ZoomController;
