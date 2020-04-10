//task 1
function parseCount (a) {
	if (isNaN(a)) {
		throw 'Невалидное значение';
		return a;
	} else {
		return Number.parseInt(a);
	};
};
function validateCount (a) {
	try {
		parseCount(a);
	} catch {
		return 'Ошибка, введите цифру'
	}
};
//task 2