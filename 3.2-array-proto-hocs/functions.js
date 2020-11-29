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
    return weapons.reduce((acc, arr) => {return acc + arr.attack}, 0);
};

//task 2

function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
};

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  };

compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true