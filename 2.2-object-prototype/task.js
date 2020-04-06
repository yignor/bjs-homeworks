function getAnimalSound(animal) {
	return (animal === undefined) ? null : animal.sound;
};

function getAverageMark(marks) {
	let marksSum = 0
	for (i = 0; i < marks.length; i++) {
    	marksSum += Number(marks[i]);
    };
    let roundedAverage = marksSum / marks.length;
    return Math.round(roundedAverage);
};

function checkBirthday(birthday) {
	let now = Date.now();
	birthday = +new Date(birthday);
	let diff = now - birthday;
	age = Math.floor(diff / 31536000000);
    return (age > 18) ? 'Да' : 'Нет';
}