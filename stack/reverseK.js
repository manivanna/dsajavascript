"use strict";
const Stack = require("./Stack.js");
const Queue = require("./Queue.js");

function reverseK(queue, k) {
  if (queue.isEmpty() == false) {
    let myStack = new Stack();
    var count = 0;
    while (count < k) {
      myStack.push(queue.dequeue());
      count++;
    }

    while (myStack.isEmpty() == false) {
      queue.enqueue(myStack.pop());
    }

    for (var i = 0; i < queue.size() - k; i++) {
      queue.enqueue(queue.dequeue());
    }
  }

  return queue;
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);

reverseK(queue, 5);
let queueSize = queue.size();
for (var i = 0; i < queueSize; i++) console.log(queue.dequeue());
