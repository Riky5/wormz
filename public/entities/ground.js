class Ground {
  constructor() {
    this.width = windowWidth;
    this.height = 120;
  }

  display() {
    rect(0,windowHeight - 120, this.width, this.height);
  }
}
