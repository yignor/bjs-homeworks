//task 1
function getSolutions( a, b, c ) {
	let roots, D = (Math.pow(b, 2) - 4 * a * c);
	if (D < 0) {
		return {D: D, roots: []};
	} else if (D == 0) {
		let x1 = (- b / (2 * a));
		return {D: D, roots: [x1]};
	} else if (D > 0) {
		let x1 = ((- b + Math.sqrt(D)) / (2 * a));
		let	x2 = ((- b - Math.sqrt(D)) / (2 * a));
		return {D: D, roots: [x1, x2]};
	};
};
function showSolutionsMessage( a, b, c ) {
	let result = getSolutions( a, b , c);
	console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}\n`);
	console.log(`Значение дискриминанта: ${result.D}`);
	if (result.roots.length == 0) {
		console.log(`Уравнение не имеет вещественных корней`);
	} else if (result.roots.length == 1) {
		console.log(`Уравнение имеет один корень X₁ = ${result.roots}`);
	} else if (result.roots.length == 2) {
		console.log(`Уравнение имеет один корень X₁ =${result.roots[0]}, X₂ = ${result.roots[1]}`);
	};
};
//task 2
//запустили цикл, чтобы отделить свойства со значениями и запустили внутри функцию средней, и вернули в массив
function getAverageScore(data) {
	let dataMarks = {};
	for ( let prop in data) {
		let dataMarks = getAverageMark(data[prop]);
	};
	dataMarks.average = getAverageMark(arrayAverage(dataMarks));
	return dataMarks;
};
//посчитали среднюю
function getAverageMark(marks) {
	let marksSum = 0;
	for (i = 0; i < marks.length; i++) {
    	marksSum += marks[i];
    };
    return marksSum / marks.length;
};

function arrayAverage(arr) {
	let values = [];
	for (let elements in arr) {
		values.push(arr[elements]);
	}
	return values;
};
