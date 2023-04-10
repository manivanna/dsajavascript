const LinkedListt = require("./LinkedList");

ll = new LinkedListt();
for (let i = 0; i < 10; i++) {
  ll.insertAtTail(i);
}
ll.printList();
