class Node {
  constructor(data) {
    this.data = data;
    this.nextElement = null;
  }
}

module.exports = class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(data) {
    let newNode = new Node(data);
    newNode.nextElement = this.head;
    this.head = newNode;
    return this;
  }

  insertAtTail(data) {
    let newNode = new Node(data);
    if (this.isEmpty()) {
      this.head = newNode;
      return;
    }
    let nodePtr = this.head;
    while (nodePtr.nextElement != null) {
      nodePtr = nodePtr.nextElement;
    }
    nodePtr.nextElement = newNode;
  }

  isEmpty() {
    return this.head == null;
  }

  getHead() {
    return this.head;
  }

  printList() {
    if (this.isEmpty()) {
      console.log("Empty List");
      return false;
    } else {
      let temp = this.head;
      while (temp != null) {
        process.stdout.write(String(temp.data));
        process.stdout.write(" -> ");
        temp = temp.nextElement;
      }
      console.log("null");
    }
  }

  search(data) {
    let nodePtr = this.head;
    while (nodePtr != null) {
      if (nodePtr.data === data) {
        return true;
      }
      nodePtr = nodePtr.nextElement;
    }
    return false;
  }

  deleteAtHead() {
    if (this.isEmpty()) {
      return;
    }
    this.head = this.head.nextElement;
  }

  deleteByValue(val) {
    if (this.isEmpty()) {
      return;
    }
    let nodePtr = this.head;
    let prevNode = nodePtr;
    while (nodePtr !== null) {
      if (nodePtr.data === val) {
        prevNode.nextElement = nodePtr.nextElement;
        return;
      }
      prevNode = nodePtr;
      nodePtr = nodePtr.nextElement;
    }
    return;
  }
};
