
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
        x = (-b / 2*a);
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
    let marksSum;
    if (marks == false) {
    	averageMark = 0;
    	return averageMark;
    } else if ((marks.length > 0) && (marks.length <= 5) ) {
    	for (i = 0; i < marks.length; i++)
    		marksSum = marks[i] + marks[i + 1];
    		averageMark = marksSum / marks.length;
    		return averageMark;
    } else if (marks.length > 5) {
    	console.log(`Введено более 5 оценок`);
    	for (i = 6; i < marks.length; i++)
    	marks.splice(i, 1);

    }

    return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}