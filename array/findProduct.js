// Implement a function, findProduct(arr), which returns an array so that each index has a product of all the numbers present in the array
// except the number stored at that index.
function findProduct(arr) {
  const outputArr = [];
  let left = 1;

  for (let i = 0; i < arr.length; i++) {
    let currentProd = 1;
    for (let j = i + 1; j < arr.length; j++) {
      currentProd = currentProd * arr[j];
    }
    outputArr.push(currentProd * left);
    left = left * arr[i];
  }
  return outputArr;
}

//Input
let arr = [1, 2, 3, 4];

console.log("input ", arr);
console.log("output ", findProduct(arr));

prod = [1,24,12,6]
temp = 24

function findProduct(arr) {
    var temp = 1,
        product = [];
    for (var i = 0; i < arr.length ; i++) {
        product[i]  = temp;
        temp = temp * arr[i];
    }

    temp = 1;
    for (var i = arr.length - 1; i > -1; i--) {
        product[i] *= temp;
        temp *= arr[i];
    }

    return product
}
