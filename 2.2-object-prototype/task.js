//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function() {
	let str = this.toLowerCase();
	for (i = 0; i < str.length; i++) {
		return (str[i] === str[str.length - 1 - i]) ? true : false;
	};
};

// Task 2
function getAverageMark(marks) {
	let marksSum = 0
	for (i = 0; i < marks.length; i++) {
    	marksSum += parseInt(marks[i]);
    };
    let roundedAverage = marksSum / marks.length;
    return !isNaN(marks) ? 0 : Math.round(roundedAverage);
};

// Task 3
function checkBirthday(birthday) {
	const now = Date.now();
	birthday = +new Date(birthday);
	const diff = now - birthday;
	age = Math.floor(diff / 31536000000);
    return (age >= 18) ? true : false;
};