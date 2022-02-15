const Obstacle= require('./entities/obstacle');

class Terrain {
  createTerrain(p,world,matter) {
    let terrain_generated = [];
    let ground_piece;
    let left_border = new Obstacle({x: 2000 + 20,y: 1000,w: 100,h: 3000,  world: world, matter: matter})
    let right_border = new Obstacle({x: -20,y: 1000,w: 100,h: 3000,  world: world, matter: matter})
    let top_border = new Obstacle({x: 1000,y: -400,w: 3000,h: 200,  world: world, matter: matter})
    let block_height = 10
    let platforms = [[100,200],[100,500],[100,720],[200,400],[350,250],[300,600],[300,900],[400,500],
    [500,100],[500,800], [600, 200], [600, 450], [600, 800], [700, 100],[700,600],[700,900],[800,200],[800,400],[800,700],
   [900,200],[900,650],[900,950],
   [1000,200],[1000,500],[1000,720],[1200,400],[1350,250],[1300,600],[1300,900],[1400,500],
   [1500,100],[1500,800], [1600, 200], [1600, 450], [1600, 800], [1700, 100],[1700,600],[1700,900],[1800,200],[1800,400],[1800,700],
  [1900,200],[1900,650],[1900,950],
  [100,1200],[100,1500],[100,1720],[200,1400],[350,1250],[300,1600],[300,1900],[400,1500],
  [500,1100],[500,1800], [600, 1200], [600, 1450], [600, 1800], [700, 1100],[700,1100],[700,1900],[800,1200],[800,1400],[800,1700],
 [900,1200],[900,1650],[900,1950],
 [1100,1200],[1100,1500],[1100,1720],[1200,1400],[1350,1250],[1300,1600],[1300,1900],[1400,1500],
  [1500,1100],[1500,1800], [1600, 1200], [1600, 1450], [1600, 1800], [1700, 1100],[1700,1100],[1700,1900],[1800,1200],[1800,1400],[1800,1700],
 [1900,1200],[1900,1650],[1900,1950],]
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