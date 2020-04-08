'use strict';
class Weapon {
	constructor(name, attack, durability, range,) {
		this.name = name;
		this.attack = attack;
		this.durability = durability;
		this.range = range;
	};
	takeDamage(damage) {
		this.durability -= damage;
		if (this.durability < 0) {
			return 0;
		}
		return this.durability;
	};
	getDamage() {
		if (this.durability == 0) {
			return 0;
		} else if (this.durability >= this.durability * 0.3) {
			return this.attack;
		} else {
			return this.attack / 2 ;
		};
	};
	isBroken() {
		if (this.durability > 0) {
			return false;
		} 
	}
};

const sword = new Weapon({
  name: 'Старый меч',
  attack: 20,
  durability: 110,
  range: 1,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0