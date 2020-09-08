// Main js file
'use strict';
const score = document.querySelector('.score'),
	start = document.querySelector('.start'),
	gameArea = document.querySelector('.gameArea'),
	car = document.createElement('div');
	car.classList.add('car');
const keys = {
	ArrowUp: false,
	ArrowDown: false,
	ArrowRigth: false,
	ArrowLeft: false,
};
const setting = {
	start: false,
	score: 0,
	speed: 3,

};
const playGame = () => {
	console.log('play');
	if(setting.start === true){
		requestAnimationFrame(playGame);
	}
	
};

const startGame = () => {
	start.classList.add('hide');
	setting.start = true;
	gameArea.appendChild(car);
	requestAnimationFrame(playGame);
};
const startRun = event => {
	event.preventDefault();
	keys[event.key] = true;
	console.log(keys);
};
const stopRun = () => {
	event.preventDefault();
	keys[event.key] = false;
	console.log(keys);
};
start.addEventListener('click', startGame);
document.addEventListener('keydown', startRun);
document.addEventListener('keyup', stopRun);

