import p5 from 'p5';
import Matter from 'matter-js';
import Ground from './entities/ground';

let ground;

const sketch = (sk) => {    
  sk.setup = () =>{
    sk.createCanvas(800, 400);
    engine = Matter.Engine.create();
    world = engine.world;
    ground = new Ground(sk.width/2, sk.height-10, sk.width, 20, world);
    console.log(ground)
  }

  sk.draw = () =>{
    sk.background(51);
    ground.show();
    // sk.ellipse(sk.mouseX, sk.mouseY, 60, 60);
  }
}

const sketchInstance = new p5(sketch);
