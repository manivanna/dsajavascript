"use strict";
const maxHeap = require("./maxHeap.js");

function findKLargest(lst, k) {
  var heap = new maxHeap();
  heap.buildHeap(lst);
  var kLargest = [];
  if (k > lst.length) {
    k = lst.length;
  }
  for (var i = 0; i < k; i++) kLargest.push(heap.removeMax());

  return kLargest;
}

var lst = [9, 4, 7, 1, -2, 6, 5];
var k = 3;
console.log(findKLargest(lst, k));
