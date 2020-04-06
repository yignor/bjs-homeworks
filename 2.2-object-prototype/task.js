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
	let date = +new Date(birthday);
	birthday = Date.now(birthday);
	let diff = now - birthday;
	console.log(diff)
	console.log(birthday)
	console.log(now)
	// diff = date.setFullYear(diff)
    // return verdict
}