const Obstacle= require('./entities/obstacle');

class Terrain {
  createTerrain(p,world,matter) {
    let terrain_generated = [];
    let ground_piece;
    let left_border = new Obstacle({x: p.windowWidth + 20,y: 0,w: 100,h: p.windowHeight * 2,  world: world, matter: matter})
    let right_border = new Obstacle({x: -20,y: 0,w: 100,h: p.windowHeight * 2,  world: world, matter: matter})
    let top_border = new Obstacle({x: p.windowWidth / 2,y: p.windowHeight,w: 100,h: 200,  world: world, matter: matter})
    let block_height = 10
    let platforms = [[100,200],[100,500],[100,720],[200,400],[350,250],[300,600],[300,900],[400,500],
    [500,100],[500,800]]
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