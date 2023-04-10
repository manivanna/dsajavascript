//Implement a function findSecondMaximum(arr), which returns the second largest element in the array.
function findSecondMaximum(arr) {
 let max1 = 0;
 let max2 = 0;
 console.log(arr)
 for(let num of arr) {
    if(num > max1) {
        max2 = max1;
        max1 = num;
    }
    else if((num < max1) && (num > max2)) {
        max2 = num;
    }
 }
 return max2;
}

//input 

const arr = [9,2,3,6,12,7,1,4,13]
console.log("input Arr ", arr);
console.log("Second Max ", findSecondMaximum(arr));