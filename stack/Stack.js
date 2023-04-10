module.exports = class Stack {
  constructor() {
    this.items = [];
    this.top = null;
  }

  getTop() {
    return this.top;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  push(data) {
    this.items.push(data);
    this.top = data;
  }

  pop() {
    if (this.isEmpty()) return null;
    const element = this.items.pop();
    this.top =
      this.items[this.items.length - 1] === undefined
        ? null
        : this.items[this.items.length - 1];
    return element;
  }
};

/*
const myStack = new Stack();
for (let i = 0; i < 5; i++) {
  myStack.push(i);
}
for (let i = 0; i < 5; i++) {
  const data = myStack.pop();
  console.log("data ", data);
  console.log("Is stack empty? " + myStack.isEmpty());
  console.log("top: " + myStack.getTop());
}
*/
