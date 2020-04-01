"use strict";
function getResult(a,b,c){
    // код для задачи №1 писать здесь ax^2+bx+c=0
    let d, x = [];
     
     if (a == 0) {
         console.log('Не верное условие');
     };

    d = (Math.pow(b) - 4*a*c)

    if (d < 0) {
        x = 'Корней нет';
    } else if (d == 0) {
        x = (-b / 2*a);
    } else if (d > 0) {
        x[0] = ((-b+Math.sqrt(d)) / (2*a));
        x[1] = ((-b-Math.sqrt(d)) / (2*a));
        };
    return x;
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}