const HashTable = require("./HashTable");

function isSubset(list1, list2) {
  //const ht = new HashTable();
  const mp = new Map();
  for (let i = 0; i < list1.length; i++) {
    mp.set(list1[i], i);
  }
  for (let j = 0; j < list2.length; j++) {
    console.log("ke -i ", j, "-", list2[j]);
    if (mp.get(list2[j]) === null) {
      console.log("j ", list2[j]);
      return false;
    }
  }
  return true;
}

const list1 = [9, 4, 7, 1, -2, 6, 5];
const list2 = [7, 1, -2, 5];

console.log("input list ", list1, list2);
console.log("isSubset ", isSubset(list1, list2));
