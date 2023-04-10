//Implement a function rightRotate(arr,n) that will rotate the given array by n
function rightRotate(arr,n) {
   return arr.splice(arr.length-n).concat(arr.splice(0,arr.length))
}

//input
const arr = [1,2,3,4,5]
const n = 3

console.log("input arr ", arr);
console.log("after right Rotate by ",n, rightRotate(arr,n));

arr.slice()