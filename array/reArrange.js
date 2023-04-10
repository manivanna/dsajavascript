// Implement a function, reArrange(arr), which sorts the elements so that all the negative elements appear on the left,
// and all positive elements appear at the right.
function reArrange(arr) {
 const negArr = [];
 const posArr = [];
 for(let num of arr) {
    if(num >= 0) {
        posArr.push(num);
    }
    else {
        negArr.push(num);
    }
 }
 return negArr.concat(posArr)
}

function reArrange2(arr) {
    let tmp;
    let leftPos=0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            if( i !== leftPos) {
                tmp = arr[i];
                arr[i] = arr[leftPos];
                arr[leftPos] = tmp;
            }
            leftPos++;
        }
    }
    return arr;
}
//input
const inputArr = [10,-1,20,4,5,-9,-6,0]

console.log("input arr ", inputArr);
console.log("output arr ", reArrange2(inputArr));