export class Rect {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.vel = {x: 0, y: 0};
    this.width = width;
    this.height = height;
    this.color = color;
  }
}