const ShootingController = require("./shootingController")
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

	static setHoning(game) {
		if (game.isWormDead()) {
			return ZoomController.honeInOnDeadWorm(game);
		}
		else if (game.bulletExists === true)
		{ 
			return ZoomController.honeInOnBullet();
		}
		else
		{ 
			return ZoomController.honeInOnActiveWorm(game);
		}
	}

	static honeInOnDeadWorm(game) {
		let deadWorm = game.getDeadWorm().body;
			return {
				mx: deadWorm.position.x,
				my: deadWorm.position.y
			}
	}

	static honeInOnBullet() {
		return {
			mx: ShootingController.bullet.body.position.x,
			my: ShootingController.bullet.body.position.y
			}
	}

	static honeInOnActiveWorm(game) {
		let activeWorm = game.getActiveWorm()
			return {
				mx: activeWorm.body.position.x,
				my: activeWorm.body.position.y
			}
	}

	
}

module.exports = ZoomController;
