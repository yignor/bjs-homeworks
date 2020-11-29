// task 1
console.clear();

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames(arr) {
    return weapons.map(arr => arr.name);
};

function getCountReliableWeapons(value) {
    return weapons.filter(weapons => weapons.durability > value).length;
};

function hasReliableWeapons(value) {
    return weapons.some(weapons => weapons.durability > value)
};

function getReliableWeaponsNames(value) {
    return weapons
        .map(function (weapons) {
            if (weapons.durability > value) {
                return weapons.name;
            }            
            })
            .filter(item => item !== undefined);      
};

function getTotalDamage() {
    return weapons.reduce((acc, arr) => {return acc + arr.attack}, 0)
};
console.log(getTotalDamage())