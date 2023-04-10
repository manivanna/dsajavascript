"use strict";
const Stack = require("./Stack.js");
//We can use 2 stacks for this purpose,mainStack to store original values
//and tempStack which will help in enqueue operation.
//Main thing is to put first entered element at the top of mainStack
class newQueue {
  constructor(mySize) {
    this.tempStack = new Stack();
    this.mainStack = new Stack();
  }
  enqueue(value) {
    //Traverse elements from mainStack to tempStack
    //Push given value to mainStack
    //Traverse back the elements from tempStack to mainStack
    while (this.mainStack.isEmpty() == false) {
      this.tempStack.push(this.mainStack.pop());
    }

    this.tempStack.push(value);
    while (this.tempStack.isEmpty() == false) {
      this.mainStack.push(this.tempStack.pop());
    }
  }

  dequeue() {
    //If mainStack is empty then we have no elements.
    //else return top element of mainStack as we always put oldest entered
    //element at the top of mainStack
    if (this.mainStack.isEmpty() == false) {
      return this.mainStack.pop();
    }
  }
}

var queue = new newQueue();
for (var i = 0; i < 5; i++) queue.enqueue(i + 1);

console.log("----------");

for (var i = 0; i < 5; i++) console.log(queue.dequeue());
