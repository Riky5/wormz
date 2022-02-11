let terrain_generated = [];
let ground_piece;
let hit_limit = false;
let circle_obstacle;
let water;

class Terrain {
  createTerrain() {
    water = new Water(width/2, height-20, width, 180)
    terrain_generated.push(water)
    let block_height = height - 400
    let heights = 400
    
    for(var i = 0; i < 1450; i++) {
    ground_piece = new Obstacle(i * 1, heights, 1, block_height );
    terrain_generated.push(ground_piece)
    if (i < 30 ) {heights = heights + 1}
    else if (i < 45 ) {heights = heights + 0.75}
    else if (i < 60 ) {heights = heights + 0.5}
    else if (i < 75 ) {heights = heights + 0.375}
    else if (i < 90 ) {heights = heights + 0.25}
    else if (i < 110 ) {heights = heights}
    else if (i < 130 ) {heights = heights - 0.25}
    else if (i < 150 ) {heights = heights - 0.375}
    else if (i < 180 ) {heights = heights - 0.5}
    else if (i < 200 ) {heights = heights - 0.75}
    else if (i < 230 ) {heights = heights - 1}
    else if (i < 270 ) {heights = heights - 1.5}
    else if (i < 300 ) {heights = heights - 1}
    else if (i < 330 ) {heights = heights - 0.75}
    else if (i < 340 ) {heights = heights - 0.5}
    else if (i < 350 ) {heights = heights - 0.375}
    else if (i < 360 ) {heights = heights - 0.25}
    else if (i < 370 ) {heights = heights + 0.25}
    else if (i < 380 ) {heights = heights + 0.375}
    else if (i < 390 ) {heights = heights + 0.5}
    else if (i < 400 ) {heights = heights + 0.75}
    else if (i < 402 ) {heights = heights + 150}

    else if (i < 415 ) {heights = heights + 0.75}
    else if (i < 420 ) {heights = heights + 0.5}
    else if (i < 425 ) {heights = heights + 0.375}
    else if (i < 430 ) {heights = heights + 0.25}
    else if (i < 440 ) {heights = heights}
    else if (i < 455 ) {heights = heights - 0.25}
    else if (i < 470 ) {heights = heights - 0.375}
    else if (i < 490 ) {heights = heights - 0.5}
    else if (i < 510 ) {heights = heights - 0.75}
    else if (i < 530 ) {heights = heights - 1}
    else if (i < 540 ) {heights = heights - 1.5}
    else if (i < 550 ) {heights = heights - 1}
    else if (i < 560 ) {heights = heights - 0.75}
    else if (i < 580 ) {heights = heights - 0.5}
    else if (i < 590 ) {heights = heights - 0.375}
    else if (i < 600 ) {heights = heights - 0.25}
    else if (i < 640 ) {heights = heights}
    else if (i < 650 ) {heights = heights + 0.25}
    else if (i < 660 ) {heights = heights + 0.375}
    else if (i < 675 ) {heights = heights + 0.5}
    else if (i < 680 ) {heights = heights + 0.75}
    else if (i < 690 ) {heights = heights + 1}
    else if (i < 700 ) {heights = heights + 2}
    else if (i < 710 ) {heights = heights + 3}
    else if (i < 720 ) {heights = heights + 4}
    else if (i < 722 ) {heights = heights + 500}
    else if (i < 900 ) {heights = heights}

    else if (i < 902 ) {heights = heights - 450}
    else if (i < 1000 ) {heights = heights}
    else if (i < 1015 ) {heights = heights - 0.25}
    else if (i < 1025 ) {heights = heights - 0.375}
    else if (i < 1035 ) {heights = heights - 0.5}
    else if (i < 1045 ) {heights = heights - 0.75}
    else if (i < 1060 ) {heights = heights - 1}
    else if (i < 1080 ) {heights = heights - 1.5}
    else if (i < 1110 ) {heights = heights - 2.5}
    else if (i < 1125 ) {heights = heights - 1.5}
    else if (i < 1140 ) {heights = heights - 1}
    else if (i < 1155 ) {heights = heights - 0.75}
    else if (i < 1170 ) {heights = heights - 0.5}
    else if (i < 1185 ) {heights = heights - 0.375}
    else if (i < 1200 ) {heights = heights - 0.25}
    else if (i < 1300 ) {heights = heights}
    else if (i < 1350 ) {heights = heights + 0.25}
    else if (i < 1360 ) {heights = heights + 0.375}
    else if (i < 1375 ) {heights = heights + 0.5}
    else if (i < 1380 ) {heights = heights + 0.75}
    else if (i < 1390 ) {heights = heights + 1}
    else if (i < 1400 ) {heights = heights + 2}
    else if (i < 1410 ) {heights = heights + 3}
    else if (i < 1420 ) {heights = heights + 4}
    else if (i < 1422 ) {heights = heights + 500}

    
    }

    block_height = height - 600
    heights = 197
    
    for(var i = 0; i < 403; i++) {
    ground_piece = new Obstacle((i + 300) * 1, heights, 1, block_height );
    terrain_generated.push(ground_piece)
    if (i < 30 ) {heights = heights + 1}
    else if (i < 45 ) {heights = heights - 0.75}
    else if (i < 60 ) {heights = heights - 0.5}
    else if (i < 75 ) {heights = heights - 0.375}
    else if (i < 90 ) {heights = heights - 0.25}
    else if (i < 110 ) {heights = heights}
    else if (i < 130 ) {heights = heights - 0.25}
    else if (i < 150 ) {heights = heights - 0.375}
    else if (i < 180 ) {heights = heights - 0.5}
    else if (i < 200 ) {heights = heights - 0.75}
    else if (i < 230 ) {heights = heights - 1}
    else if (i < 270 ) {heights = heights - 1.5}
    else if (i < 300 ) {heights = heights - 1}
    else if (i < 330 ) {heights = heights - 0.75}
    else if (i < 340 ) {heights = heights - 0.5}
    else if (i < 350 ) {heights = heights - 0.375}
    else if (i < 360 ) {heights = heights - 0.25}
    else if (i < 370 ) {heights = heights + 0.25}
    else if (i < 380 ) {heights = heights + 0.375}
    else if (i < 390 ) {heights = heights + 0.5}
    else if (i < 400 ) {heights = heights + 0.75}
    else if (i < 402 ) {heights = heights + 150; block_height = 0}

    }

    for(var i = 900; i < 1450; i++) {
      ground_piece = new Obstacle((i + 300) * 1, heights, 1, block_height );
      terrain_generated.push(ground_piece) 
    if (i < 900 ) {heights = heights}
    else if (i < 902 ) {heights = heights - 450}
    else if (i < 1000 ) {heights = heights}
    else if (i < 1015 ) {heights = heights - 0.25}
    else if (i < 1025 ) {heights = heights - 0.375}
    else if (i < 1035 ) {heights = heights - 0.5}
    else if (i < 1045 ) {heights = heights - 0.75}
    else if (i < 1060 ) {heights = heights - 1}
    else if (i < 1080 ) {heights = heights - 1.5}
    else if (i < 1110 ) {heights = heights - 2.5}
    else if (i < 1125 ) {heights = heights - 1.5}
    else if (i < 1140 ) {heights = heights - 1}
    else if (i < 1155 ) {heights = heights - 0.75}
    else if (i < 1170 ) {heights = heights - 0.5}
    else if (i < 1185 ) {heights = heights - 0.375}
    else if (i < 1200 ) {heights = heights - 0.25}
    else if (i < 1300 ) {heights = heights}
    else if (i < 1350 ) {heights = heights + 0.25}
    else if (i < 1360 ) {heights = heights + 0.375}
    else if (i < 1375 ) {heights = heights + 0.5}
    else if (i < 1380 ) {heights = heights + 0.75}
    else if (i < 1390 ) {heights = heights + 1}
    else if (i < 1400 ) {heights = heights + 2}
    else if (i < 1410 ) {heights = heights + 3}
    else if (i < 1420 ) {heights = heights + 4}
    else if (i < 1422 ) {heights = heights + 500}
  }
      
    // circle_obstacle = new CircleObstacle(100,400,200)
    // terrain_generated.push(circle_obstacle)
    // ground_piece = new Obstacle(200,300,200,200)
    // terrain_generated.push(ground_piece)

    // for(var i = 0; i < 1000; i++) {
    //   ground_piece = new Obstacle(i * 0.5, start_height, 0.5, block_height )
    //   terrain_generated.push(ground_piece)
    //   if (hit_limit != true) { block_height = block_height + 0.2; console.log(block_height) }
    //   if (block_height >= 100) {hit_limit = true}
    //   if (hit_limit == true) { block_height = block_height - 0.2}
    // }
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





