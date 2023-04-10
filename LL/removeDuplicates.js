const LinkedList = require("./LinkedList");

function removeDuplicates(ll) {
  let set = new Set();
  let nodePtr = ll.getHead();
  let prevNode = ll.getHead();

  while (nodePtr !== null) {
    const data = nodePtr.data;
    if (!set.has(data)) {
      set.add(data);
    } else {
      prevNode.nextElement = nodePtr.nextElement;
    }
    this.printList;
    console.log("data - set ", data, set);
    prevNode = nodePtr;
    nodePtr = nodePtr.nextElement;
  }
}

ll = new LinkedList();
ll.insertAtHead(7);
ll.insertAtHead(14);
ll.insertAtHead(7);
ll.insertAtHead(14);
ll.insertAtHead(22);
ll.insertAtHead(5);

console.log("Original List ", ll.printList());
removeDuplicates(ll);
console.log("Duplicated removed ", ll.printList());
