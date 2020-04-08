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
		this.procentDurability = this.durability * 0.3;
		if (this.durability == 0) {
			return this.durability = 0;
		} else if (this.durability >= this.procentDurability) {
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
	}
};
class Bow extends Weapon {
	constructor(name = 'Лук', attack = 10, durability = 200, range = 3,) {
		super({name, attack, durability, range,});
	}
};
class Sword extends Weapon {
	constructor(name = 'Меч', attack = 25, durability = 500, range = 1,) {
		super({name, attack, durability, range,});
	}
};
class Knife extends Weapon {
	constructor(name = 'Нож', attack = 5, durability = 300, range = 1,) {
		super({name, attack, durability, range,});
	}
};
class Staff extends Weapon {
	constructor(name = 'Посох', attack = 8, durability = 300, range = 2,) {
		super({name, attack, durability, range,});
	}
};
class LongBow extends Bow {
	constructor(name = 'Длинный лук', attack = 15, durability, range = 4,) {
		super({name, attack, durability, range,});
	}
};
class Axe extends Sword {
	constructor(name = 'Секира', attack = 27, durability = 800, range,) {
		super({name, attack, durability, range,});
	}
};
class StormStaff extends Staff {
	constructor(name = 'Посох Бури', attack = 10, durability, range = 3,) {
		super({name, attack, durability, range,});
	}
};

//check block
const longbow = new LongBow();

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3
const sword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 10,
  range: 1,
});
sword.takeDamage(5);
console.log(sword.durability); // 5
sword.takeDamage(50);
console.log(sword.durability); // 0
const arm = new Weapon({
  name: 'Рука',
  attack: 1,
  durability: Infinity,
  range: 1,
});
arm.takeDamage(20);
console.log(arm.durability); // Infinity
// const bow = new Weapon({
//   name: 'Лук',
//   attack: 10,
//   durability: 200,
//   range: 3,
// });
bow.takeDamage(20);
console.log(bow.durability); // 180
bow.takeDamage(200);
console.log(bow.durability); // 0
console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0
console.log(arm.durability); // Infinity
console.log(arm.getDamage()); // 1
console.log(bow.durability); // 0
console.log(bow.isBroken()); // true
console.log(arm.durability); // Infinity
console.log(arm.isBroken()); // false

