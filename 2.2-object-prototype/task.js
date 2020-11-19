//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function() {
	// let str = this.toLowerCase().replace(/[\W_]/g, '');
	// let reverseStr = str.split('').reverse().join(''); 
	// return (reverseStr === str) ? true : false;
	// let str = this.toLowerCase().replace(/[\W_]/g, '');
	// for (let i = 0; i < str.length/2; i++) {
	// 	if (str[i] !== str[str.length - 1 - i]) {
	// 		console.log(str)
	// 		return false;
	// 	};
	// };
	// return (str[i] === str[str.length - 1 - i]) ? true : false;
	let str = this.toLowerCase().replace(/\s+/g,'');
	let revStr = str.split("").reverse().join("");
	return (str === revStr) ? true : false;
};
console.log("А роза упала на лапу Азора")

	

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