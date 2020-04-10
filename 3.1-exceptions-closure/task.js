//task 1
function parseCount (count) {
	if (isNaN(Number.parseInt(count))) {
		throw new Error("Невалидное значение");
	} 
	return count;
};
function validateCount (count) {
	try {
		return parseCount(count);
	} catch (e) {
		return e;
	};
return result;
};
//task 2