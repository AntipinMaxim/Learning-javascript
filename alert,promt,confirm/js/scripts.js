"use strict";
let userName;

function isUserName() {
	while (true) {
		userName = prompt('Ваше имя', '');
		if (userName == null || Number(userName) || userName == '') {
			alert('Вы не ввели имя!');
		} else {
			break;
		}
	}
}

isUserName();
let isBoss = confirm(`${userName} вы босс?`);

if (isBoss) {
	alert('Здравствуйте босс!')
} else {
	alert(`Здарова ${userName}!`);
}

