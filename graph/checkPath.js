"use strict";
const Stack = require("../stack/Stack");
const Graph = require("./Graph.js");
//Perfrom DFS Traversal starting from source and if you reach destination
//then it means that there exist a path between source and destination
//In that case, return true and if you traverse the graph but can't reach
//the destination, then simply return false
function checkPath(g, source, destination) {
  //Base case
  if (source == destination) {
    return true;
  }
  //A list to hold the history of visited nodes (by default all false)
  //Make a node visited whenever you push it into stack
  let visited = [];
  for (var x = 0; x < g.vertices; x++) {
    visited.push(false);
  }
  //Create Stack
  let stack = new Stack(g.vertices);
  stack.push(source);
  visited[source] = true;
  //Traverse while stack is not empty
  while (stack.isEmpty() == false) {
    //Pop a vertex/node from stack
    let current_node = stack.pop();
    //Get adjacent vertices to the current_node from the list,
    //and if only push unvisited adjacent vertices into stack
    //Before pushing into stack, check if it's the destination
    let temp = g.list[current_node].head;
    while (temp != null) {
      if (visited[temp.data] == false) {
        if (temp.data == destination) {
          return true;
        }
        stack.push(temp.data);
        visited[temp.data] = true;
      }
      temp = temp.nextElement;
    }
  }

  ////
  return false;
}

let g = new Graph(3);
g.addEdge(0, 1);
g.addEdge(1, 2);
console.log(checkPath(g, 0, 2));
