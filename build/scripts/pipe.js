import { Rect } from "./rect.js";

export class Pipe extends Rect {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);

    this.outOfBounds = false;
  }

  move() {
    const moveVelocity = -2.5;

    this.x += moveVelocity;
  }

  border() {
    if (this.x + this.width < 0) {
      this.outOfBounds = true;
    }
  }
}