// //task 1
// function sleep(milliseconds) 
// {
//   let e = new Date().getTime() + milliseconds;
//   while (new Date().getTime() <= e) {}
// };
// function sum(...args) {
//   // Замедление на половину секунды.
//   sleep(500); // Можно использовать другое значение замедления.
//   return args.reduce((sum, arg) => {
//     return sum += +arg;
//   }, 0);
// };


// function compareArrays( arr1, arr2 ) {
//  if ((arr1.length == arr2.length) && (arr1.every())) {
//  };
// };

// // function compareArrays (arr1, arr2) {
// // 	if ((arr1.length == arr2.length) && (arr1.every((element, index, array ) => element === arr2[index])))  {
// // 		console.log(true)
// //     return true;
// // 	}
// //   console.log(false)
// // 	return false;
// // };

// // // compareArrays([8, 9], [6]); // false, разные значения
// // // compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
// // // compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
// // // compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
// // // compareArrays([8, 1, 2], [8, 1, 2]); // true
// // function memorize(fn, limit) {
// //   const results = [];

// //   return (...args) => {
// //     let checkMemory = results.find(item => compareArrays(item.args, Array.from(args)));

// //     if (checkMemory) {
// //       return results.result;
// //     } else {
// //       let result = fn(...args);
// //       results.push({args: Array.from(args), result: result});

// //       if (results.length > limit) {
// //         results.shift();
// //       }

// //       return result;
// //     }
// //   }
// // }


// // function testCase (testFunction, timer) {
// //   const testArray = [ [1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4] ];
// //   console.time(timer);
// //   for (let i = 0; i < 10; i++){
// //     testArray.forEach((testArray) => testFunction(...testArray));
// //   }
// //   console.timeEnd(timer);
// // }



// // const mSum = memorize(sum, 5); // 5 результатов может хранится в памяти

// // // Вызов этих функций даёт один и тот же результат
// // sum(3, 4); // 7
// // /* 
// //   разница только в том, что mSum запоминает результат (7)
// //   и повторно не делает вычисления
// //  */
// // mSum(3, 4); // 7
// // console.log(mSum)
// // testCase(sum,'Проверка функции sum');

// // testCase(mSum,'Проверка оптимизированной версии');