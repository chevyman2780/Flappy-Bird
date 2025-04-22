export class Renderer {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.c = this.canvas.getContext('2d');
    this.fps = 60;

    this.setCanvasSize();
    this.start = false;
  }

  setCanvasSize() {
    const dpr = window.devicePixelRatio || 1;

    this.canvas.width = 800 * dpr;
    this.canvas.height = 600 * dpr;

    this.canvas.style.width = 800;
    this.canvas.style.height = 800;

    this.c.scale(dpr, dpr);
  }

  draw() {
    this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawRect(rect) {
    this.c.fillStyle = rect.color;
    this.c.fillRect(rect.x, rect.y, rect.width, rect.height);
  }

  introduction(controller) {
    if (controller.keys.has('w')) this.start = true;
  }
}