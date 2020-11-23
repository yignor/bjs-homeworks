// //task 1
class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount	= pagesCount;
		this.state = 100;
		this.type = null;
	};
	
	set state(state) {
		state = (state < 0) ? 0 : (state > 100) ? 100 : state;
		this._state = state;
	};
	
	get state() {
		return this._state;
	};
	
	fix() {
		this.state = (this.state > 0 && this.state < 100) ? this.state * 1.5 : this.state;
	};
};

// const sherlock = new PrintEditionItem("Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008);

// console.log(sherlock.releaseDate); //2019
// console.log(sherlock.state); //100
// sherlock.fix();
// console.log(sherlock.state); //100

class Magazine extends PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = 'magazine';
	};
};

class Book extends PrintEditionItem {
	constructor (author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = 'book';
	};
};

class NovelBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'novel';
	};
};

class FantasticBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'fantastic';
	};
};

class DetectiveBook extends Book {
	constructor (author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = 'detective';
	};
};

//task 2
class Library {
	constructor(name) {
		this.name = name.toString();
		this.books = [];
	};
	addBook(book) {
		if (book._state > 30) {
			return this.books.push(book);
		} else {
			return console.log('errore')
		};
	};
	findBookBy(type, value) {
		for (let keys in this.books[type]) {
			console.log(this.keys)
		};
	};
	giveBookByName(bookName) {

	};
};

var menu = {
	width: 300,
	height: 200,
	title: "Menu"
  };
  
  for (var key in menu) {
	// этот код будет вызван для каждого свойства объекта
	// ..и выведет имя свойства и его значение
  
	console.log( "Ключ: " + key + " значение: " + menu[key] );
  }

const library = new Library("Библиотека имени Ленина");

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));

console.log(library.findBookBy("name", "Властелин колец")); //null
console.log(library.findBookBy("releaseDate", 1924).name); //"Мурзилка"

console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
library.giveBookByName("Машина времени");
console.log("Количество книг после выдачи: " + library.books.length); //Количество книг после выдачи: 3

//task 3
class StudentLog {
	constructor(name) {
		this.name = name;
		this.grades = {};
	};
	getName() {
		return this.name;
	};
	addGrade(grade, subject) {
		this.grade = [grade];
		this.subject = subject;
		if (isNaN(this.grade) || (this.grade <= 0) || (this.grade >= 6)) {
			return (` Вы пытались поставить оценку "${this.grade}" по предмету "${this.subject}". Допускаются только числа от 1 до 5.`);
		} else {
			return this.grade.length;
		};
	};
	getAverageBySubject(subject) {
		if (this.subject === subject) {
			return 0;
		} else {
			let marksSum = 0;
			for (let i = 0; i < this.grade.length; i++) {
    		marksSum += this.grade[i];
    	};
    	return marksSum / this.grade.length;
		};
	};
	getTotalAverage() {
		if (Number.isInteger(this.grade)) {
			let marksSumTotal = 0;
			for (let i = 0; i < this.grade.length; i++) {
    		marksSumTotal += this.grade[i];
		}
		return this.grade = marksSumTotal / this.grade.length;
		} else {
			return this.grade = 0;
		};
	};
};

// class Weapon {
// 	constructor({name, attack, durability, range,}) {
// 		this.name = name;
// 		this.attack = attack;
// 		this.durability = durability;
// 		this.range = range;
// 		this.procentDurability = this.durability;
// 	};
// 	takeDamage(damage) {
// 		this.durability -= damage;
// 		if (this.durability < 0) {
// 			return this.durability = 0;
// 		}
// 		return this.durability ;
// 	};
// 	getDamage() {
// 		if (this.durability == 0) {
// 			return this.durability = 0;
// 		} else if (this.durability >= this.procentDurability * 0.3) {
// 			return this.attack;
// 		} else {
// 			return this.attack / 2 ;
// 		};
// 	};
// 	isBroken() {
// 		if (this.durability > 0) {
// 			return false;
// 		} else {
// 			return true;
// 		};
// 	};
// };
// //task 2
// class Arm extends Weapon {
// 	constructor(name = 'Рука', attack = 1, durability = Infinity, range = 1,) {
// 		super({name, attack, durability, range,});
// 	};
// };
// class Bow extends Weapon {
// 	constructor(name = 'Лук', attack = 10, durability = 200, range = 3,) {
// 		super({name, attack, durability, range,});
// 	};
// };
// class Sword extends Weapon {
// 	constructor(name = 'Меч', attack = 25, durability = 500, range = 1,) {
// 		super({name, attack, durability, range,});
// 	};
// };
// class Knife extends Weapon {
// 	constructor(name = 'Нож', attack = 5, durability = 300, range = 1,) {
// 		super({name, attack, durability, range,});
// 	};
// };
// class Staff extends Weapon {
// 	constructor(name = 'Посох', attack = 8, durability = 300, range = 2,) {
// 		super({name, attack, durability, range,});
// 	};
// };
// class LongBow extends Bow {
// 	constructor(name = 'Длинный лук', attack = 15, durability, range = 4,) {
// 		super(name, attack, durability, range,);
// 	};
// };
// class Axe extends Sword {
// 	constructor(name = 'Секира', attack = 27, durability = 800, range,) {
// 		super(name, attack, durability, range,);
// 	};
// };
// class StormStaff extends Staff {
// 	constructor(name = 'Посох Бури', attack = 10, durability, range = 3,) {
// 		super(name, attack, durability, range,);
// 	};
// };
// //task 3


// const log = new StudentLog('Олег Никифоров');

// log.addGrade(2, 'algebra');
// log.addGrade(4, 'algebra');
// log.addGrade(5, 'geometry');
// log.addGrade(4, 'geometry');

// console.log(log.getAverageBySubject('geometry')); // 4.5
// console.log(log.getAverageBySubject('algebra')); // 3
// console.log(log.getAverageBySubject('math')); // 0


// //check block
// // const bow = new Bow();
// // const sword = new Sword();
// // const axe = new Axe();
// // const longbow = new LongBow();

// // console.log(bow.name); // Лук
// // console.log(bow.attack); // 10
// // console.log(bow.durability); // 200
// // console.log(bow.range); // 3
// // const sword = new Weapon({
// //   name: 'Старый меч',
// //   attack: 20,
// //   durability: 10,
// //   range: 1,
// // });
// // sword.takeDamage(5);
// // console.log(sword.durability); // 5
// // sword.takeDamage(50);
// // console.log(sword.durability); // 0
// // const arm = new Weapon({
// //   name: 'Рука',
// //   attack: 1,
// //   durability: Infinity,
// //   range: 1,
// // });
// // arm.takeDamage(20);
// // console.log(arm.durability); // Infinity
// // const bow = new Weapon({
// //   name: 'Лук',
// //   attack: 10,
// //   durability: 200,
// //   range: 3,
// // });
// // bow.takeDamage(20);
// // console.log(bow.durability); // 180
// // bow.takeDamage(200);
// // console.log(bow.durability); // 0
// // console.log(bow.durability); // 0
// // console.log(bow.getDamage()); // 0
// // console.log(arm.durability); // Infinity
// // console.log(arm.getDamage()); // 1
// // console.log(bow.durability); // 0
// // console.log(bow.isBroken()); // true
// // console.log(arm.durability); // Infinity
// // console.log(arm.isBroken()); // false

