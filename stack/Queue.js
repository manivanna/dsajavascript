const DoublyLinkedList = require("./DoublyLinkedList.js");

module.exports = class Queue {
  constructor() {
    this.items = new DoublyLinkedList();
    console.log("itesm ", this.items);
  }
  isEmpty() {
    return this.items.length == 0;
  }

  getFront() {
    if (!this.isEmpty()) {
      return this.items.getHead();
    } else return null;
  }

  getTail() {
    if (!this.isEmpty()) {
      return this.items.tailNode();
    } else return null;
  }

  size() {
    return this.items.length;
  }

  enqueue(element) {
    return this.items.insertTail(element);
  }

  // Remove an item from the queue (Time complexity: O(1))
  dequeue() {
    return this.items.removeHead();
  }
};

/*
var myQueue = new Queue();
console.log("You have successfully created a Queue of size: " + myQueue.size());
console.log("Enqueue Elements 2,4,6,8,10");
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
myQueue.enqueue(8);
myQueue.enqueue(10);

console.log("Dequeue(): " + myQueue.dequeue());
console.log("Dequeue(): " + myQueue.dequeue());

console.log("getFront(): " + myQueue.getFront());
console.log("getTail(): " + myQueue.getTail());

console.log("Enqueue Elements 12,14");
myQueue.enqueue(12);
myQueue.enqueue(14);

while (myQueue.isEmpty() == false) {
  console.log("Dequeue(): " + myQueue.dequeue());
}

console.log("Is queue empty()?: " + myQueue.isEmpty());
console.log("getTop(): " + myQueue.getFront());
*/
