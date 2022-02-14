let terrain_generated = [];
let ground_piece;
let hit_limit = false;
let circle_obstacle;
let lava;
let left_border;
let right_border;
let top_border;

class Terrain {
  createTerrain() {
    lava = new Lava(width/2, height + 100, width * 2, 480)
    terrain_generated.push(lava)
    left_border = new Obstacle(width + 20, 0, 100, height * 2)
    right_border = new Obstacle(-20, 0, 100, height * 2)
    top_border = new Obstacle(width / 2, -300, width * 2, 100)
    let block_height = 10
    let platforms = [[100,200],[100,500],[100,720],[200,400],[350,250],[300,600],[300,900],[400,500],
    [500,100],[500,800]]
    platforms.forEach (platform_location => 
      {for (var i =0; i < 15; i++) 
        {ground_piece = new Obstacle(platform_location[1] + (i * 10), platform_location[0], 10, block_height );
      terrain_generated.push(ground_piece)
      ground_piece = new Obstacle(platform_location[1] + (i * 10), platform_location[0] + 10, 10, block_height );
      terrain_generated.push(ground_piece)
      ground_piece = new Obstacle(platform_location[1] + (i * 10), platform_location[0] + 20, 10, block_height );
      terrain_generated.push(ground_piece)
    }})}
    
  loadTerrain() {
    return terrain_generated
  }
  }





