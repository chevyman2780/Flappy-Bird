import { Pipe } from "./pipe.js";
import { Renderer } from "./render.js";

export class PipeBuilder extends Renderer {
  constructor() {
    super();

    this.pipes = [];
  }

  buildPipe() {
    const gap = 150;
    let pipeTop = {
      x: this.canvas.width + 20,
      y: 0,
      width: 20,
      height: Math.floor(Math.random() * (this.canvas.height / 2)),
      color: 'green',
    }

    let pipeBottom = {
      x: this.canvas.width + 20,
      y: pipeTop.height + gap,
      width: 20,
      height: this.canvas.height,
      color: 'black',
    }

    this.pipes.push(new Pipe(pipeTop.x, pipeTop.y, pipeTop.width, pipeTop.height, pipeTop.color));
    this.pipes.push(new Pipe(pipeBottom.x, pipeBottom.y, pipeBottom.width, pipeBottom.height, pipeBottom.color));
  }
}