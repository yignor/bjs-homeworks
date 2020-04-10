//task 1
function parseCount (count) {
	if (isNaN(count)) {
		const divideError = new Error("Невалидное значение");
		throw divideError;
	} else {
		return Number.parseInt(count);
	};
};
function validateCount (count) {
	try {
		return parseCount(count);
	} catch {
		return "Невалидное значение";
	};
};
//task 2