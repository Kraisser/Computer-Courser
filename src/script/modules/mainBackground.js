export default class BackgroundImageLoad {
  constructor(className, target, changeSize) {
    this.className = className;
    this.target = document.querySelector(`${target}`);
    this.changeSize = changeSize;
  }
  
  startObservation() {
    this.observation();
    window.addEventListener(`resize`, () => this.debounce(this.observation.bind(this), 200));
  }

  debounce(func, timer) {
    clearTimeout(this.debounceTimer);
    this.debounceTimer = setTimeout(func, timer);
  }

  observation() {
    let width = document.body.clientWidth;

    if (width <= this.changeSize) {
      this.target.classList.add(`${this.className}`);
    } else {
      this.target.classList.remove(`${this.className}`);
    }
    
  }
}