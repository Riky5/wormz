const Obstacle= require('./obstacle');

class Terrain {
  createBorders = (world, matter, screenwidth, screenheight) => {
    const leftBorder = new Obstacle({x: screenwidth, y: screenheight / 2, w: 100, h: screenheight * 2.5, world: world, matter: matter, friction: 0});
    const rightBorder = new Obstacle({x: -20, y: screenheight / 2, w: 100, h: screenheight * 2.5, world: world, matter: matter, friction: 0});
    const topBorder = new Obstacle({x: screenwidth / 2, y: -800, w: screenwidth * 1.5, h: 200, world: world, matter: matter, friction: 0});
  };

  setPlatformLocation = () => {
    // This sets the x,y cords of each platform
    const platformArray = [
      [100, 200], [100, 500], [100, 720], [200, 400], [350, 250], [300, 600], [300, 900], [400, 500],
      [500, 100], [500, 800], [600, 200], [600, 450], [600, 800], [700, 100], [700, 600],
      [700, 900], [800, 200], [800, 400], [800, 700], [100, 1200], [500, 1200], [800, 1200]];
    return platformArray;
  };

  createPlatform = ({location: location, xIncrement: xIncrement, yIncrement: yIncrement, world: world, matter: matter, imgs: imgs}) => {
    return new Obstacle({x: location[1] + (xIncrement * 10), y: location[0] + yIncrement, w: 10, h: 10, world: world, matter: matter, imgs: imgs[5]});
  };

  createTerrain(world, matter, imgs, screenwidth, screenheight) {
    this.createBorders(world, matter, screenwidth, screenheight);
    const platformLocationsArray = this.setPlatformLocation();
    const generatedTerrainArray = [];
    // Set platform dimensions
    const platformWidth = 15;
    const platformHeight = 3;


    // Create, fill, and add platforms to world
    for (const platformLocation of platformLocationsArray) {
      for (let i = 0; i < platformWidth; i++) {
        let yIncrement = 0;
        for (let j = 0; j < platformHeight; j++) {
          const platformPiece = this.createPlatform({
            location: platformLocation, xIncrement: i, yIncrement: yIncrement, world: world, matter: matter, imgs: imgs,
          });
          generatedTerrainArray.push(platformPiece);
          yIncrement += 10;
        }
      }
    }
    return generatedTerrainArray;
  }
}
module.exports = Terrain;
