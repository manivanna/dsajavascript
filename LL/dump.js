



LinkedList.prototype.isEmpty = function () {
    return this.head == null;
  };
  
  LinkedList.prototype.insertAtHead = function (data) {
    let newNode = new Node(data);
    newNode.nextElement = this.head;
    this.head = newNode;
    return this;
  };
  
  LinkedList.prototype.insertAtTail = function (data) {
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
  };
  LinkedList.prototype.printList = function () {
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
      return true;
    }
  };
  LinkedList.prototype.search = function (data) {
    let nodePtr = this.head;
    while (nodePtr != null) {
      if (nodePtr.data === data) {
        return true;
      }
      nodePtr = nodePtr.nextElement;
    }
    return false;
  };
  LinkedList.prototype.deleteAtHead = function () {
    if (this.isEmpty()) {
      return;
    }
    this.head = this.head.nextElement;
  };
  LinkedList.prototype.deleteByValue = function (val) {
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
  };
  
  const ll = new LinkedList();
  for (let i = 0; i < 10; i++) {
    ll.insertAtTail(i);
  }
  ll.printList();
  console.log("search 5 ", ll.search(5));
  console.log("search 20 ", ll.search(10));
  ll.deleteByValue(5);
  ll.printList();
  ll.deleteByValue(7);
  ll.printList();
  */
  