"use strict";
const LinkedList = require("../LL/LinkedList");
const Queue = require("../stack/Queue");
const Graph = require("./Graph.js");

function bfsTraversal_helper(g, source, visited, obj) {
  //Create Queue(implemented in previous lesson) for Breadth First Traversal and enqueue source in it
  let queue = new Queue(g.vertices);
  queue.enqueue(source);
  visited[source] = true;
  //Traverse while queue is not empty
  while (queue.isEmpty() == false) {
    //Dequeue a vertex/node from queue and add it to result
    let current_node = queue.dequeue();
    obj.result += String(current_node);
    //Get adjacent vertices to the current_node from the list,
    //and if they are not already visited then enqueue them in the Queue
    let temp = g.list[current_node].getHead();
    while (temp != null) {
      if (!visited[temp.data]) {
        queue.enqueue(temp.data);
        visited[temp.data] = true; //Visit the children
      }
      temp = temp.nextElement;
    }
  }
}

function bfsTraversal(g) {
  if (g.vertices < 1) {
    return null;
  }

  var obj = { result: "" };

  //An array to hold the history of visited nodes
  //Make a node visited whenever you push it into stack
  let visited = [];
  for (var x = 0; x < g.vertices; x++) {
    visited.push(false);
  }

  for (var i = 0; i < g.vertices; i++) {
    if (!visited[i]) bfsTraversal_helper(g, i, visited, obj);
  }

  return obj.result;
}

let g1 = new Graph(6);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 4);
g1.addEdge(2, 5);
console.log("res", bfsTraversal(g1, 0));
