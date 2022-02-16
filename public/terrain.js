const Obstacle= require('./entities/obstacle');

class Terrain {
  createTerrain(p,world,matter,screenwidth,screenheight) {
    let terrain_generated = [];
    let ground_piece;
    let left_border = new Obstacle({x: screenwidth + 300,y: screenheight,w: 100,h: screenheight * 1.5,  world: world, matter: matter})
    let right_border = new Obstacle({x: -20,y: screenheight,w: 100,h: screenheight * 1.5,  world: world, matter: matter})
    let top_border = new Obstacle({x: screenwidth / 2,y: -400,w: screenwidth * 1.5,h: 200,  world: world, matter: matter})
    let block_height = 10
    let platforms = [[100,200],[100,500],[100,720],[200,400],[350,250],[300,600],[300,900],[400,500],
    [500,100],[500,800], [600, 200], [600, 450], [600, 800], [700, 100],[700,600],[700,900],[800,200],[800,400],[800,700],
  [100,1200],[100,1500],[100,1720],[200,1400],[350,1250],[300,1600],[300,1900],[400,1500],
  [500,1100],[500,1800], [600, 1200], [600, 1450], [600, 1800], [700, 1100],[700,1100],[700,1900],[800,1200],[800,1400],[800,1700]]
    platforms.forEach (platform_location => 
      {for (var i =0; i < 15; i++) 
        {ground_piece = new Obstacle({x: platform_location[1] + (i * 10),y: platform_location[0],w: 10,h: block_height,  world: world, matter: matter});
      terrain_generated.push(ground_piece)
      ground_piece = new Obstacle({x: platform_location[1] + (i * 10),y: platform_location[0] + 10,w: 10,h: block_height,  world: world, matter: matter});
      terrain_generated.push(ground_piece)
      ground_piece = new Obstacle({x: platform_location[1] + (i * 10),y: platform_location[0] + 20,w: 10,h: block_height,  world: world, matter: matter});
      terrain_generated.push(ground_piece)
    }})
    return terrain_generated
  }
}
  module.exports = Terrain;