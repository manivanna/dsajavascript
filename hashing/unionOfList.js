//Union of Linked Lists
"use strict";
const LinkedList = require("../LL/LinkedList");
const HashTable = require("./HashTable.js");

//Access HeadNode => list.getHead()
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Create List => list = LinkedList()
//Node class { data ; Node nextElement;}
// Create Hash Table => let hashtable =  new HashTable()
// insert in hashtable => hashtable.insert(key, value)
// search in hashtable => hashtable.search(key)
// delete in hashtable => hashtable.delete(key)

//Returns a list containing the union of list1 and list2
function union(list1, list2) {
  // Write your code here
  let hashtable = new HashTable();
  let list1Iter = list1.getHead();
  while (list1Iter != null) {
    hashtable.insert(list1Iter.data, 1);
    list1Iter = list1Iter.nextElement;
  }
  let list2Iter = list2.getHead();
  while (list2Iter != null) {
    if (hashtable.search(list2Iter.data) == null) {
      list1.insertAtHead(list2Iter.data);
    }
    list2Iter = list2Iter.nextElement;
  }
  return list1;
}

let list1 = new LinkedList();
let list2 = new LinkedList();
list1.insertAtHead(1);
list1.insertAtHead(2);
list1.insertAtHead(3);
list1.insertAtHead(4);

list2.insertAtHead(3);
list2.insertAtHead(4);
list2.insertAtHead(5);
list2.insertAtHead(6);

let list3 = union(list1, list2);
list3.printList();
