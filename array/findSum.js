// You have to implement the findSum(arr, value) function, which takes an array arr, a number and value as input and returns an array of two
// numbers that add up to value.
function findSum(arr, value) {
  const arr1 = arr.sort((a, b) => a - b);
  let i1 = 0;
  let i2 = arr1.length - 1;

  while (i1 < i2) {
    let sum = arr1[i1] + arr1[i2];
    console.log("sum ", i1, i2, sum);
    if (sum === value) {
      return [arr1[i1], arr1[i2]];
    } else if (sum > value) {
      i2--;
    } else if (sum < value) {
      i1++;
    }
  }

  return false;
}

// input
const arr = [1, 21, 3, 14, 5, 60, 7, 6];
1, 3, 5, 7, 14, 21, 60;
const value = 
;

console.log("sort ", findSum(arr, value));
