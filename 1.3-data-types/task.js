"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount, creditBoddy, totalMonth, payment;
	if (isNaN(parseInt(percent))) {
		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
	}; 
	if (isNaN(parseInt(contribution))) {
		return `Параметр "Начальный взонс" содержит неправильное значение ${contribution}`;
	};
	if (isNaN(parseInt(amount))) {
		return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`;
	};
	if (new Date > date) {
		return `Параметр дата введен не верно`;
	};
	percent = percent / 12 / 100;
	creditBoddy = amount - contribution;
	totalMonth = ((date.getFullYear() - new Date().getFullYear()) * 12) + (date.getMonth() - new Date().getMonth()); //получаем разницу в месяцах между сегодня и датой выплаты
	payment = creditBoddy * (percent + percent / (Math.pow(1+percent, totalMonth)-1));
	return totalAmount = Number((payment * totalMonth).toFixed(2));
}

function getGreeting(name) {
	return `Привет, мир! Меня зовут ${(!name) ? 'Аноним' : name}.`;
}

// function getGreeting(name) {
// 	let	greeting;
//     if ((name == "") || (name == null) || (!name == undefined)) {
// 	   	return `Привет, мир! Меня зовут Аноним`;
//     };
//     return greeting = `Привет, мир! Меня зовут ${name}`;
// }