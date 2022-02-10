import p5 from 'p5';

const sketch = (sk) => {
  let sf = 1; // scaleFactor

  sk.setup = () => {
    sk.createCanvas(1200, 600);
  }

  sk.draw = () => {
    mx = sk.mouseX;
    my = sk.mouseY;
    sk.translate(mx, my);
    sk.scale(sf);
    sk.translate(-mx, -my);


    sk.background("#fae");
    sk.ellipse(sk.mouseX, sk.mouseY, 60, 60);
    sk.rect(600, 300, 55, 55); // creating a test rectangle

  }

  sk.keyPressed = () => {
    if (sk.keyCode === sk.LEFT_ARROW) {
      sf *= 1.10;
    } else if (sk.keyCode === sk.RIGHT_ARROW) {
      sf *= 0.90
    }
  }


}

const sketchInstance = new p5(sketch);