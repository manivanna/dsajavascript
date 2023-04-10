//Implement a function that merges two sorted arrays into another sorted array. Name it mergeArrays(arr1, arr2).
function mergeArrays(arr1, arr2) {
  let outputArr = [];
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      outputArr.push(arr1[i]);
      i++;
    } else {
      outputArr.push(arr2[j]);
      j++;
    }
  }
  if (i < arr1.length) {
    outputArr = outputArr.concat(arr1.slice(i));
  } else if (j < arr2.length) {
    outputArr = outputArr.concat(arr2.slice(j));
  }
  return outputArr;
}
//Input
const arr1 = [1, 3, 4, 5];
const arr2 = [2, 6, 7, 8];

const output = mergeArrays(arr1, arr2);
console.log("arr1 ", arr1);
console.log("arr2 ", arr2);
console.log("output", output);
