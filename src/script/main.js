import smoothScroll from './modules/smoothScroll.js';
import BackgroundImageLoad from './modules/mainBackground.js';
import burger from './modules/burger.js';
import ProgressBarDoubleGradient from './modules/progressBarDuobleGradient.js';
import BackTimerFunc from './modules/BackTimerFunc.js';

import '../css/normalize.css';
import '../css/common.css';
import '../css/header.css';
import '../css/main.css';

let dateTimerBack = new Date(2022, 9, 14);
BackTimerFunc(dateTimerBack);

let studentsEarnTarget = document.querySelector(`#earnProgress`);
let studentsEarnProgress = new ProgressBarDoubleGradient(
	studentsEarnTarget,
	95,
	`#DF5950`,
	`#451046`
);

studentsEarnProgress.setBackground(40);

let allSmoothScrollsLinks = document.querySelectorAll(`.menuLink`);
smoothScroll(allSmoothScrollsLinks);

let backgroundChange = new BackgroundImageLoad(`headerBackground1100`, `.header`, 1100);
backgroundChange.startObservation();

burger();
