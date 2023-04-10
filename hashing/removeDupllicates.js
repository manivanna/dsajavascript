// Remove Duplicates from a Linked List
"use strict";
const LinkedList = require("../LL/LinkedList");
const HashTable = require("./HashTable.js");

//Access HeadNode => list.getHead()
//Acess Length => list.length;
//Check if list is empty => list.isEmpty()
//Insert at head => list.insertAtHead(value)
//Delete at head => list.deleteAtHead()
//Insert at tail => list.insertAtTail(value)
//Search for element => list.search(value)
//Delete by value => list.deleteVal(value)
//Node class { data ; Node nextElement;}
function removeDuplicates(list) {
  let currentNode = list.getHead();
  let prevNode = list.getHead();
  //To store values of nodes which we already visited
  let visitedNodes = new HashTable();
  //If List is not empty and there is more than 1 element in List
  if (!list.isEmpty() && currentNode.nextElement != null) {
    while (currentNode != null) {
      let value = currentNode.data;
      if (visitedNodes.search(value) != null) {
        //currentNode is a duplicate as its value is already in the HashSet
        //so connect prevNode with currentNode's next element to remove it
        prevNode.nextElement = currentNode.nextElement;
        currentNode = currentNode.nextElement;
        continue;
      }
      visitedNodes.insert(currentNode.data, 1); //Visiting currentNode for first time
      prevNode = currentNode;
      currentNode = currentNode.nextElement;
    }
  }
  return list;
}

let list = new LinkedList();
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(7);
list.insertAtHead(22);
list.insertAtHead(14);
list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

list.printList();
removeDuplicates(list);
list.printList();
