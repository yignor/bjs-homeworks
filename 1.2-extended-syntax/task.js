
function getResult(a,b,c){
    // код для задачи №1 писать здесь ax^2+bx+c=0
    "use strict";
    let d, x = [];
     
     // if (a == 0) {
     //     console.log('Не верное условие');
     // };

    d = (Math.pow(b, 2) - 4*a*c)
    console.log(d);
    if (d < 0) {
        x = [];
        console.log(x);
    } else if (d == 0) {
        x[0] = (-b / 2*a);
        console.log(x);
    } else if (d > 0) {
        x[0] = ((-b+Math.sqrt(d)) / (2*a));
        x[1] = ((-b-Math.sqrt(d)) / (2*a));
        };
        console.log(x);
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    let marksSum, averageMark;
    marksSum = 0;
    
    if (marks.length == 0) {
    		return averageMark = 0;
    }	else if (marks.length > 5) {
    		console.log(`Введено более 5 оценок`);
    		marks = marks.slice(0, 5);
	};

	for (i = 0; i < marks.length; i++) {
    		marksSum += marks[i];
    		averageMark = marksSum / marks.length;
    		}
    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    let result, age, currentDate;
    currentDate = new Date();
    age = currentDate.getFullYear() - dateOfBirthday.getFullYear();
    	if (age >= 18) {
    		result = (`Не желаете ли олд-фэшн, ${name}?`);
    		// return result;
    	} else {
    		result = (`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
    	};

    return result;
}