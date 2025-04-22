import { Bird } from './bird.js';
import { Renderer } from './render.js';
import { Controller } from './controller.js';
import { PipeBuilder } from './pipeBuilder.js';

let renderTool = new Renderer();
let pipeBuilder = new PipeBuilder();
let bird = new Bird(100, 200, 50, 50, 'blue');
let controller = new Controller()

document.addEventListener('keydown', (event) => controller.getKey(event));
document.addEventListener('keyup', (event) => controller.getKey(event));

function main() {
  renderTool.draw();

  if (renderTool.start) {
    bird.move(controller);
    bird.border(renderTool.canvas);
    bird.physics();

    pipeBuilder.pipes.forEach((pipe, i) => {
      renderTool.drawRect(pipe);
      pipe.move();
      pipe.border();

      if (pipe.outOfBounds) {
        pipeBuilder.pipes.splice(i, 1);
        i--;
      }

      console.log(pipe.outOfBounds);
    })
  } else {
    renderTool.introduction(controller);
  }

  if (pipeBuilder.pipes < 1) {
    pipeBuilder.buildPipe();
  }

  renderTool.drawRect(bird);
}

setInterval(() => {
  main();
}, 1000/renderTool.fps);