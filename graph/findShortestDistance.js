"use strict";
const Queue = require("../stack/Queue");
const Graph = require("./Graph.js");

function findShortestDistance(g, a, b) {
  if (a == b) {
    return 0;
  }

  let num_of_vertices = g.vertices;
  //A list to hold the history of visited nodes (by default all false)
  //Make a node visited whenever you enqueue it into queue
  let visited = [];
  for (var i = 0; i < num_of_vertices; i++) {
    visited[i] = false;
  }

  //For keeping track of distance of current_node from source
  let distance = [];
  for (var j = 0; j < num_of_vertices; j++) {
    distance[j] = 0;
  }

  //Create Queue for Breadth First Traversal and enqueue source in it
  let queue = new Queue(num_of_vertices);
  queue.enqueue(a);
  visited[a] = true;
  //Traverse while queue is not empty
  while (queue.isEmpty() == false) {
    //Dequeue a vertex/node from queue and add it to result
    let current_node = queue.dequeue();
    //Get adjacent vertices to the current_node from the list,
    //and if they are not already visited then enqueue them in the Queue
    //and also update their distance from `a` by adding 1 in current_nodes's distance
    let temp = g.list[current_node].head;
    while (temp != null) {
      if (visited[temp.data] == false) {
        queue.enqueue(temp.data);
        visited[current_node] = true;
        distance[temp.data] = distance[current_node] + 1;
      }
      if (temp.data == b) {
        console.log("dist- ", distance);
        return distance[b];
      }
      temp = temp.nextElement;
      console.log("dist ", distance);
    }
  }
  //end of while
  return -1;
}

let g = new Graph(7);
g.addEdge(1, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.addEdge(4, 5);
g.addEdge(2, 5);
g.addEdge(5, 6);
g.addEdge(3, 6);
console.log(findShortestDistance(g, 1, 6));
