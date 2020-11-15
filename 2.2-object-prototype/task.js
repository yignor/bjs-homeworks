//String.prototype.isPalindrome - для задачи №1

// String.prototype.isPalindrome (data) {
// 	this.data
// };

// Task 2
function getAverageMark(marks) {
	let marksSum = 0
	for (i = 0; i < marks.length; i++) {
    	marksSum += parseInt(marks[i]);
    };
    let roundedAverage = marksSum / marks.length;
    return !isNaN ? 0 : Math.round(roundedAverage);
};

function checkBirthday(birthday) {
	const now = Date.now();
	birthday = +new Date(birthday);
	const diff = now - birthday;
	age = Math.floor(diff / 31536000000);
    return (age >= 18) ? true : false;
};