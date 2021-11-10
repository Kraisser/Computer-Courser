import smoothScroll from './modules/smoothScroll.js';
import BackgroundImageLoad from './modules/mainBackground.js';
import burger from './modules/burger.js';
import BackTimer from './modules/backTimer.js';
import ProgressBarDoubleGradient from './modules/progressBarDuobleGradient.js';

import '../css/normalize.css';
import '../css/common.css';
import '../css/header.css';
import '../css/main.css';


let dateTimerBack = new Date(2021, 11, 13),
courseBack = new BackTimer(dateTimerBack);
courseBack.startTimer();

let studentsEarnTarget = document.querySelector(`#earnProgress`);
let studentsEarnProgress = new ProgressBarDoubleGradient(studentsEarnTarget, 95, `#DF5950`, `#451046`);

studentsEarnProgress.setBackground(40);

let allSmoothScrollsLinks = document.querySelectorAll(`.menuLink`);
smoothScroll(allSmoothScrollsLinks);

let backgroundChange = new BackgroundImageLoad(`headerBackground1100`, `.header`, 1100);
backgroundChange.startObservation();

burger();