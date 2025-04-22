import { Rect } from "./rect.js";

export class Bird extends Rect {
  constructor(x, y, width, height, color) {
    super(x, y, width, height, color);

    this.jumped = false;
  }

  physics() {
    const gravityPull = 0.1;
    const friction = 0.1;

    this.vel.y += gravityPull;

    if (this.vel.x > 0) {
      this.vel.x -= friction;
    } else if (this.vel.x < 0) {
      this.vel.x += friction;
    }
  }

  border(canvas) {
    if (this.y + this.height > canvas.height) {
      this.y = canvas.height - this.height;
    }
  }

  move(controller) {
    this.x += this.vel.x;
    this.y += this.vel.y;

    if (controller.keys.has('w') && !this.jumped) {
      this.vel.y = -3.5;
      this.jumped = true;
    }

    if (!controller.keys.has('w') && this.jumped) this.jumped = false; 
  }
}