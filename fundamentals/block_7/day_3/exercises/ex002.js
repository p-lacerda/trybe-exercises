const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

let variables = myRemove([1, 2, 3, 4], 3)

assert.deepStrictEqual(variables, [1, 2, 4], 'Não é o mesmo array')

assert.notDeepStrictEqual(variables, [1, 2, 3, 4], 'É o mesmo array')