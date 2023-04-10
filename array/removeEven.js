//Implement a function removeEven(arr), which takes an array arr in its input and removes all the even elements from a given array.
function removeEven(arr) {
  return arr.filter((item) => item % 2 != 0);
}

let inputArr = [1, 2, 3, 4, 5, 6];
let outputArr = removeEven(inputArr);

console.log("Original Array ", inputArr);
console.log("Output Array ", outputArr);
