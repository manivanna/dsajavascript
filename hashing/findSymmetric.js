"use strict";
const HashTable = require("./HashTable.js");

function findSymmetric(my_list) {
  //Create an empty Hash Map
  //Traverse given array
  //Look for second element of each pair in the hash. i.e for pair (1,2) look for key 2 in map.
  //If found then store it in the result list, otherwise insert the pair in hash
  var ht = new HashTable();
  let result = [];
  //Traverse through the given array
  for (var i = 0; i < my_list.length; i++) {
    let first = my_list[i][0];
    let second = my_list[i][1];
    let value = ht.search(second);
    if (value != null && value == first) {
      //Symmetric Pair found
      result.push([second, first]);
      result.push([first, second]);
    } else {
      ht.insert(first, second);
    }
  }
  return result;
}

let list1 = [
  [1, 2],
  [3, 4],
  [2, 1],
  [4, 3],
  [0, 1],
  [5, 5],
  [5, 5],
];
console.log("Input list:");
for (var x = 0; x < list1.length; x++) {
  console.log("[" + list1[x][0] + ", " + list1[x][1] + "] ");
}
let res = findSymmetric(list1);
console.log("Symmetric pairs:");
for (var y = 0; y < res.length; y++) {
  console.log("[" + res[y][0] + ", " + res[y][1] + "] ");
}
