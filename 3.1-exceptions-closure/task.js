//task 1
function parseCount (count) {
	if (isNaN(count)) {
		throw new Error("Невалидное значение");
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