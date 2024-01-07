"use strict";


X: 1
const firstArray = [3, 4, 5, 6];
Output: 0

X: 15
const secondArray = [0, 15, 32, 2000, 15000]
Output: 1

X: 42
const thirdArray = [1, 1, 10, 32, 41]
Output: 2

function getPairsOfNumbers(arrayValues, sum) {
    var map = [];
    var index = [];

    for (var x = 0; x < arrayValues.length; x++) {
        if (map[arrayValues[x]] != null) {
          var index = map[arrayValues[x]];
          index[0] = index;
          index[1] = x;
          break;
        } else {
          map[sum - arrayValues[x]] = x;
        }
      }

      console.log('Array Index at ' + index[0] + ' and ' + index[1] + ' sums equals to ' + sum)
}

console.log(getPairsOfNumbers(firstArray, 1)); //X: 1
console.log(getPairsOfNumbers(firstArray, 15)); //X: 15
console.log(getPairsOfNumbers(firstArray, 42)); //X: 42