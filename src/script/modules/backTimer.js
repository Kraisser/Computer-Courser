export default function BackTimer(date) {
  this.curDate = new Date;
  this.diff = date - this.curDate;
  this.dayLeft = Math.floor(this.diff / 1000 / 60 / 60 / 24),
  this.hourLeft = Math.floor(this.diff / 1000 / 60 / 60 % 24),
  this.minLeft = Math.floor(this.diff / 1000 / 60 % 60);
  
  this.secTimer = () => {    
    this.trueCountTime();

    if (this.secLeft <= 0) {
      this.secLeft = 60;
      this.minTimer();
    }
    
    setTimeout(this.secTimer, 1000);
    this.setTime(`sec`, --this.secLeft);

    this.secText();
  }
  
  this.minTimer = () => {
    if (this.minLeft <= 0) {
      this.minLeft = 60;
      this.hourTimer();
    }
    
    this.setTime(`min`, --this.minLeft);
    
    this.minText();
  }  
  
  this.hourTimer = () => {
    if (this.hourLeft <= 0) {
      this.hourLeft = 24;
      this.dayTimer();
    }

    this.setTime(`hour`, --this.hourLeft);
  }

  this.dayTimer = () => {
    if (this.dayLeft <= 0) {
      return;
    }

    this.setVal(`day`, --this.dayLeft);
  }
  
  this.secText = () => {
    if (this.secLeft <= 4 && this.secLeft >= 2) {
      this.setVal(`secText`, `Секунды`);
    } else if (this.secLeft === 1) {
      this.setVal(`secText`, `Секунда`);
    } else {
      this.setVal(`secText`, `Секунд`);
    }
  }

  this.minText = () => {
    if (this.minLeft <= 4 && this.minLeft >= 2) {
      this.setVal(`minText`, `Минут`);
    } else if (this.minLeft === 1) {
      this.setVal(`minText`, `Минута`);
    } else {
      this.setVal(`minText`, `Минут`);
    }
  }

  this.hourText = () => {
    if (this.hourLeft <= 4 && this.hourLeft >= 2) {
      this.setVal(`hourText`, `Часа`);
    } else if (this.hourLeft === 1) {
      this.setVal(`hourText`, `Час`);
    } else {
      this.setVal(`hourText`, `Часов`);
    }
  }

  this.dayText = () => {
    let lastDayVal = this.dayLeft.toString().split('').pop();    

    if (lastDayVal <= 4 && lastDayVal >= 2) {
      this.setVal(`dayText`, `Дня`);
    } else if (this.dayLeft === 1) {
      this.setVal(`dayText`, `День`);
    } else {
      this.setVal(`dayText`, `Дней`);
    }
  }

  this.setVal = (target, value) => {
    document.querySelector(`#${target}`).innerHTML = value;
  }
  this.setTime = (target, time) => {
    document.querySelector(`#${target}`).innerHTML = time < 10 ? `0${time}` : time;
  }

  this.trueCountTime = () => {
    this.diff = date - new Date;
    this.secLeft = Math.floor(this.diff / 1000 % 60);
  }

  this.startTimer = () => {
    this.secTimer();
    this.secText();
    this.minText();
    this.hourText();
    this.dayText();
    this.setTime(`min`, this.minLeft);
    this.setTime(`hour`, this.hourLeft);
    this.setTime(`day`, this.dayLeft);
  }
}