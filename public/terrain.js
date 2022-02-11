let terrain_generated = [];

class Terrain {
  createTerrain() {
    ground = new Ground(width/2, height-20, width, 180)
    terrain_generated.push(ground)
  }

  

  // let current_height = height * Math.random()
  // for(var i = 0; i < ((windowWidth * 3) / 50); i++) 
  // {current_height = current_height + (100 * (Math.random() - 0.5));
  //   if (current_height < 200) {current_height = height * Math.random()}
  //   else
  //   {ground_piece = new Obstacle(i * 50, current_height, 50, 200 + (100 * Math.random()));
  // generated_terrain.push(ground_piece);}}
  // }

  loadTerrain() {
    return terrain_generated
  }
  }





