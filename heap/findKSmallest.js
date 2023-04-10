"use strict";
const minHeap = require("./minHeap.js");

function findKSmallest(arr, k) {
  var myheap = new minHeap();
  myheap.buildHeap(arr);
  var kSmallest = [];
  if (k > arr.length) {
    k = arr.length;
  }
  for (var i = 0; i < k; i++) kSmallest.push(myheap.removeMin());

  return kSmallest;
}

var arr = [9, 4, 7, 1, -2, 6, 5];
var k = 6;
console.log(findKSmallest(arr, k));
