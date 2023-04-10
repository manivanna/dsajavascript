//Given an array, find the contiguous subarray with the largest sum

let findMaxSumSubArray = function(arr) {
    if (arr.length < 1) {
      return 0;
    }
  
    let currMax = arr[0];
    let globalMax = arr[0];
    let lengtharray = arr.length;
    for (let i = 1; i < lengtharray; i++) {
      if (currMax < 0) {
        currMax = arr[i];
      } else {
        currMax += arr[i];
      }
  
      if (globalMax < currMax) {
        globalMax = currMax;
      }
    }
    return globalMax;
  };
  
      [0, 1, 2, 3, 4, 5, 6, 7, 8];
  v = [-4, 2, -5, 1, 2, 3, 6, -5, 1];
  //v1 = [1,10,-1,11,5,-30,-7,20,25,-35]

  console.log("Sum of largest subarray: " + findMaxSumSubArray(v));
 i=7
 currMax =  7
 globalMax = 12