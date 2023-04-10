// Find First Unique Integer in an Array
"use strict";
const HashTable = require("./HashTable.js");

function findFirstUnique(arr) {
  var hashtable = new HashTable();
  for (var i = 0; i < arr.length; i++) {
    if (hashtable.search(arr[i]) != null) {
      hashtable.insert(arr[i], 0);
    } else {
      hashtable.insert(arr[i], 1);
    }
  }

  for (var i = 0; i < arr.length; i++) {
    if (hashtable.search(arr[i]) == 1) return arr[i];
  }

  return null;
}

console.log(findFirstUnique([9, 2, 3, 2, 6, 6, 9, 12, 3]));
