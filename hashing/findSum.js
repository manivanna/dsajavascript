//Find Two Numbers that Add up to "value"
"use strict";
const HashTable = require("./HashTable.js");

// findSum function return true if
// there are two values in array who
// sum to value and returns false otherwise
function findSum(arr, value) {
  let found_values = new HashTable();
  var results = [];
  for (let i in arr) {
    if (found_values.search(value - arr[i]) != null) {
      results.push(value - arr[i]);
      results.push(arr[i]);
      return results;
    }
    found_values.insert(arr[i], 1);
  }
  return false;
}

console.log(findSum([1, 2, 4], 5));
console.log(findSum([1, 2, 3, 4], 10));
