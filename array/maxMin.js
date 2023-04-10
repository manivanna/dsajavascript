//Arrange elements in such a way that the maximum element appears at first, then minimum at second, 
//then second maximum at third position and second minimum at fourth, and so on
function maxMin(arr) {
    const newArr = [];
    let i1 = 0;
    let i2 = arr.length-1;
    console.log("h ", Math.floor(arr.length/2))
    while(i1 < Math.floor(arr.length / 2)) {
        newArr.push(arr[i2--]);
        newArr.push(arr[i1++]);
    }
    if (arr.length % 2)
      newArr.push(arr[Math.floor(arr.length / 2)])
  return newArr;
}
//input
const arr = [1,2,3,4,5,6]
console.log("input Arr ", arr);
console.log("maxMin ", maxMin(arr));