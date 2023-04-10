//Implement a function, findFirstUnique(arr), which takes an array as input and returns the first unique integer in the array
function findFirstUnique(arr) {
    let index1;
    for(index1=0; index1 < arr.length; index1++) {
        let index2 = 0;
        while(index2 < arr.length) {
            if(index1 != index2 && arr[index1] == arr[index2])
              break;
            index2++;
        }
        if(index2 === arr.length)
        return arr[index1];
    }
    return null;
}

//input
const inputArr = [9,2,3,2,6,6,3]

console.log("input Arr ", inputArr)
console.log("First Unique Integer ", findFirstUnique(inputArr));
