"use strict";
function calculateTotalMortgage(percent, contribution, amount, date) {
    let totalAmount, creditBoddy, totalMonth, payment;
	percent = parseInt(percent);
	contribution = parseInt(contribution);
	amount = parseInt(amount);
	if (isNaN(percent)) {
		return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`
	} else if (isNaN(contribution)) {
		return `Параметр "Начальный взонс" содержит неправильное значение ${contribution}`
	} else if (isNaN(amount)) {
		return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`
	} else if (new Date < date) {
		return `Параметр даты введен не верно`
	};
	creditBoddy = amount - contribution;
	totalMonth = ((date.getFullYear() - new Date.getFullYear()) * 12) + 1 + (date.getMonth() - new Date.getMonth()); //получаем разницу в месяцах между сегодня и датой выплаты
	payment = creditBoddy * (percent + percent / (Math.pow(1+percent, totalMonth)-1));


	return totalAmount = payment * totalMonth;
}

function getGreeting(name) {
    // код для задачи №2 писать здесь
    // return greeting;
}