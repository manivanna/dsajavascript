//A Subarray with a Sum of 0
//We basically have to check for 3 conditions:
// If 0 exists in the array
// If the sum becomes zero in the iteration
// If the sum reverts back to a value which was already a key in the hash table
"use strict";
const HashTable = require("./HashTable.js");

function findSubZero(my_list) {
  let hMap = new HashTable();
  let sum = 0;
  //Traverse through the given array
  for (var i = 0; i < my_list.length; i++) {
    sum += my_list[i];
    if (my_list[i] == 0 || sum == 0 || hMap.search(sum) != null) {
      return true;
    }
    console.log("sum ", sum, "-", i);
    hMap.insert(sum, i);
  }
  return false;
}

var list = [6, 4, -7, 3, 12, 9];

console.log(findSubZero(list));
