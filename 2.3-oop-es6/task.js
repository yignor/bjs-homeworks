//task 1
class Weapon {
	constructor({name, attack, durability, range,}) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
		this.procentDurability = this.durability;
	};
	takeDamage(damage) {
		this.durability -= damage;
		if (this.durability < 0) {
			return this.durability = 0;
		}
		return this.durability ;
	};
	getDamage() {
		if (this.durability == 0) {
			return this.durability = 0;
		} else if (this.durability >= this.procentDurability * 0.3) {
			return this.attack;
		} else {
			return this.attack / 2 ;
		};
	};
	isBroken() {
		if (this.durability > 0) {
			return false;
		} else {
			return true;
		};
	};
};
//task 2
class Hand extends Weapon {
	constructor(name = 'Рука', attack = 1, durability = Infinity, range = 1,) {
		super({name, attack, durability, range,});
	};
};
class Bow extends Weapon {
	constructor(name = 'Лук', attack = 10, durability = 200, range = 3,) {
		super({name, attack, durability, range,});
	};
};
class Sword extends Weapon {
	constructor(name = 'Меч', attack = 25, durability = 500, range = 1,) {
		super({name, attack, durability, range,});
	};
};
class Knife extends Weapon {
	constructor(name = 'Нож', attack = 5, durability = 300, range = 1,) {
		super({name, attack, durability, range,});
	};
};
class Staff extends Weapon {
	constructor(name = 'Посох', attack = 8, durability = 300, range = 2,) {
		super({name, attack, durability, range,});
	};
};
class LongBow extends Bow {
	constructor(name = 'Длинный лук', attack = 15, durability, range = 4,) {
		super({name, attack, durability, range,});
	};
};
class Axe extends Sword {
	constructor(name = 'Секира', attack = 27, durability = 800, range,) {
		super({name, attack, durability, range,});
	};
};
class StormStaff extends Staff {
	constructor(name = 'Посох Бури', attack = 10, durability, range = 3,) {
		super({name, attack, durability, range,});
	};
};
//task 3
class StudentLog {
	constructor(name) {
		this.name = name;
	};
	getName() {
		return this.name;
	};
	addGrade(grade, subject) {
		this.grade = [grade];
		this.subject = subject;
		if (isNaN(this.grade)) {
			return (` Вы пытались поставить оценку "${this.grade}" по предмету "${this.subject}". Допускаются только числа от 1 до 5.`);
		} else if ((this.grade <= 0) || (this.grade >= 6)) {
			return (`Вы пытались поставить оценку "${this.grade}" по предмету "${this.subject}". Допускаются только числа от 1 до 5.`);
		} else {
			return this.grade.length;
		};
	};
	getAverageBySubject(subject) {
		if (this.subject === subject) {
			return 0;
		} else {
			let marksSum = 0;
			for (i = 0; i < this.subject.length; i++) {
    		this.subject += this.subject[i];
    	};
    	return marksSum / this.subject.length;
	};
};

const log = new StudentLog('Олег Никифоров');

log.addGrade(2, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry')); // 4.5
console.log(log.getAverageBySubject('algebra')); // 3
console.log(log.getAverageBySubject('math')); // 0


//check block
// const longbow = new LongBow();

// console.log(bow.name); // Лук
// console.log(bow.attack); // 10
// console.log(bow.durability); // 200
// console.log(bow.range); // 3
// const sword = new Weapon({
//   name: 'Старый меч',
//   attack: 20,
//   durability: 10,
//   range: 1,
// });
// sword.takeDamage(5);
// console.log(sword.durability); // 5
// sword.takeDamage(50);
// console.log(sword.durability); // 0
// const arm = new Weapon({
//   name: 'Рука',
//   attack: 1,
//   durability: Infinity,
//   range: 1,
// });
// arm.takeDamage(20);
// console.log(arm.durability); // Infinity
// const bow = new Weapon({
//   name: 'Лук',
//   attack: 10,
//   durability: 200,
//   range: 3,
// });
// bow.takeDamage(20);
// console.log(bow.durability); // 180
// bow.takeDamage(200);
// console.log(bow.durability); // 0
// console.log(bow.durability); // 0
// console.log(bow.getDamage()); // 0
// console.log(arm.durability); // Infinity
// console.log(arm.getDamage()); // 1
// console.log(bow.durability); // 0
// console.log(bow.isBroken()); // true
// console.log(arm.durability); // Infinity
// console.log(arm.isBroken()); // false

