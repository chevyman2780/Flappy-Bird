export class Controller {
  constructor() {
    this.keys = new Set();
  }

  getKey(event) {
    if (event.type == 'keydown') this.keys.add(event.key);
    if (event.type == 'keyup') this.keys.delete(event.key);
  }
}