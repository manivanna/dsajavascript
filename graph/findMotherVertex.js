"use strict";
const Stack = require("../stack/Stack.js");
const Graph = require("./Graph.js");

function findMotherVertex(g) {
  //Traverse the Graph Array and perform DFS operation on each vertex
  //The vertex whose DFS Traversal results is equal to the total number
  //of vertices in graph is a mother vertex
  let num_of_vertices_reached = 0;
  for (var i = 0; i < g.vertices; i++) {
    num_of_vertices_reached = DFS(g, i);
    if (num_of_vertices_reached == g.vertices) {
      return i;
    }
  }
  return -1;
}

//Performs DFS Traversal on graph starting from source
//Returns total number of vertices which can be reached from source
function DFS(g, source) {
  let num_of_vertices = g.vertices;
  let vertices_reached = 0; //To store how many vertices reached starting from source
  //An array to hold the history of visited nodes (by default all false)
  //Make a node visited whenever you push it into stack
  let visited = [];
  for (var i = 0; i < num_of_vertices; i++) {
    visited[i] = false;
  }

  //Create Stack(Implemented in previous lesson) for Depth First Traversal and Push source in it
  let stack = new Stack(num_of_vertices);
  stack.push(source);
  visited[source] = true;
  //Traverse while stack is not empty
  while (stack.isEmpty() == false) {
    //Pop a vertex/node from stack
    let current_node = stack.pop();
    //Get adjacent vertices to the current_node from the list,
    //and if only push unvisited adjacent vertices into stack
    let temp = g.list[current_node].head;
    while (temp != null) {
      if (visited[temp.data] == false) {
        stack.push(temp.data);
        visited[temp.data] = true;
        vertices_reached += 1;
      }
      temp = temp.nextElement;
    }
    //end of while
  }
  return vertices_reached + 1; //+1 is to include the source itself
}

let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(3, 0);
g.addEdge(3, 1);
console.log(findMotherVertex(g));
