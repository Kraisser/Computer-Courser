export default function BackTimerFunc(endDate) {
	const time = {
		sec: 0,
		min: 0,
		hour: 0,
		day: 0,
	};

	const timerWrapper = document.querySelector('.timerWrapper');

	const secBlock = timerWrapper.querySelector('#sec');
	const minBlock = timerWrapper.querySelector('#min');
	const hourBlock = timerWrapper.querySelector('#hour');
	const dayBlock = timerWrapper.querySelector('#day');

	const secText = timerWrapper.querySelector('#secText');
	const minText = timerWrapper.querySelector('#minText');
	const hourText = timerWrapper.querySelector('#hourText');
	const dayText = timerWrapper.querySelector('#dayText');

	const correctText = (num, words) =>
		words[num % 100 > 4 && num % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][num % 10 < 5 ? num % 10 : 0]];

	const checkDate = () => {
		const diff = endDate - new Date();

		time.sec = Math.floor((diff / 1000) % 60);
		time.min = Math.floor((diff / 1000 / 60) % 60);
		time.hour = Math.floor((diff / 1000 / 60 / 60) % 24);
		time.day = Math.floor(diff / 1000 / 60 / 60 / 24);

		setTime();
		setText();
		setTimeout(() => checkDate(), 1000);
	};

	const setTime = () => {
		secBlock.innerHTML = `0${time.sec}`.slice(-2);
		minBlock.innerHTML = `0${time.min}`.slice(-2);
		hourBlock.innerHTML = `0${time.hour}`.slice(-2);
		dayBlock.innerHTML = `0${time.day}`.slice(-2);
	};

	const setText = () => {
		secText.innerHTML = correctText(time.sec, ['Секунда', 'Секунды', 'Секунд']);
		minText.innerHTML = correctText(time.min, ['Минута', 'Минуты', 'Минут']);
		hourText.innerHTML = correctText(time.hour, ['Час', 'Часа', 'Часов']);
		dayText.innerHTML = correctText(time.day, ['День', 'Дня', 'Дней']);
	};

	checkDate();
}
