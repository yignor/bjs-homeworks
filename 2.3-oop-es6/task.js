
class Weapon {
	constructor(Weapon) {
		this.name = Weapon.name;
		this.attack = Weapon.attack;
		this.durability = Weapon.durability;
		this.range = Weapon.range;
	};
	takeDamage(damage) {
		let countDurability = this.durability - damage;
		if (this.durability < 0) {
			return this.durability = 0;
		}
		return countDurability ;
	};
	getDamage() {
		if (this.durability == 0) {
			return this.durability = 0;
		} else if (this.durability >= this.durability * 0.3) {
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

const bow = new Weapon({
  name: 'Лук',
  attack: 10,
  durability: 200,
  range: 3,
});

bow.takeDamage(20);
console.log(bow.durability); // 180

bow.takeDamage(200);
console.log(bow.durability); // 0

console.log(bow.durability); // 0
console.log(bow.getDamage()); // 0

console.log(arm.durability); // Infinity
console.log(bow.getDamage()); // 1

console.log(bow.durability); // 0
console.log(bow.isBroken()); // true

console.log(arm.durability); // Infinity
console.log(bow.isBroken()); // false