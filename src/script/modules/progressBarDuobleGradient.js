export default class ProgressBarDoubleGradient {
  constructor(targetElement, rotatePercent, color1, color2) {
    this.target = targetElement;
    this.rotatePercent = rotatePercent;
    this.color1 = color1;
    this.color2 = color2
  }

  setBackground(percent) {
    this.target.style.width = `${percent}%`;
    this.target.style.background = `linear-gradient(${this.rotatePercent}deg, ${this.color1}, ${this.color2})`;
  }
}