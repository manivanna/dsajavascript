//Find Two Pairs in an Array Such That a+b = c+d
//You only have to find the first two pairs in the array which satisfies the above condition. Assume that the /
//input array does not contain any duplicates.
"use strict";
const HashTable = require("./HashTable.js");

function findPair(my_list) {
  let result = [];
  //Create HashMap with Key being sum and value being a pair i.e key = 3 , value = {1,2}
  //Traverse all possible pairs in my_list and store sums in map
  //If sum already exist then print out the two pairs.
  let hMap = new HashTable();
  for (var i = 0; i < my_list.length; i++) {
    for (var j = i + 1; j < my_list.length; j++) {
      let sum = my_list[i] + my_list[j]; //calculate sum
      if (hMap.search(sum) == null) {
        //If sum is not present in Map then insert it alongwith pair
        hMap.insert(sum, [my_list[i], my_list[j]]);
      } else {
        //Sum already present in Map
        let prev_pair = hMap.search(sum);
        //Since array elements are distinct, we don't
        //need to check if any element is common among pairs
        let secondPair = [my_list[i], my_list[j]];
        result.push(prev_pair);
        result.push(secondPair);
        return result;
      }
    }
  }
  return result;
}

var list = [7, 4, 9, 12, 0, 1];
var res = findPair(list);
console.log(res);
