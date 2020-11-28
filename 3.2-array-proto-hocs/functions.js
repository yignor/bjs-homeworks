// task 1
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(arr) {
    return weapons.map(arr => arr.name);
};

function getCountReliableWeapons(value) {
    return weapons.filter(weapons.length(weapons.filter => weapons.durability > value))
};

function hasReliableWeapons() {

};

function getReliableWeaponsNames() {
    
};

function getTotalDamage() {

};