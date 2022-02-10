import p5 from 'p5';

const sketch = (sk) => {    
  sk.setup = () =>{
    sk.createCanvas(800, 400);
  }

  sk.draw = () =>{
    sk.background(51);
    sk.ellipse(sk.mouseX, sk.mouseY, 60, 60);
  }
}

const sketchInstance = new p5(sketch);
