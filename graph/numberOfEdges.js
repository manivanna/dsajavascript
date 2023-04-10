//. We simply traverse through the complete adjacency list and count the size of each linked list. In an undirected graph, the number of edges is
// always even as the edges are bidirectional. To get the number of unique edges, we half the total sum.

"use strict";
const Graph = require("./Graph.js");

function numEdges(g) {
  //For undirected graph, just sum up the size of
  //All the adjacency lists for each vertex will give us total number of edges in the graph
  let sum = 0;
  for (var i = 0; i < g.vertices; i++) {
    let temp = g.list[i].getHead();
    while (temp != null) {
      sum += 1;
      temp = temp.nextElement;
    }
  }
  return sum / 2;
}

let g = new Graph(9);
g.addEdge(0, 2);
g.addEdge(0, 5);
g.addEdge(2, 3);
g.addEdge(2, 4);
g.addEdge(5, 3);
g.addEdge(5, 6);
g.addEdge(3, 6);
g.addEdge(6, 7);
g.addEdge(6, 8);
g.addEdge(6, 4);
g.addEdge(7, 8);

let g2 = new Graph(7);
g2.addEdge(1, 2);
g2.addEdge(1, 3);
g2.addEdge(3, 4);
g2.addEdge(3, 5);
g2.addEdge(2, 5);
g2.addEdge(2, 4);
g2.addEdge(4, 6);
g2.addEdge(4, 5);
g2.addEdge(6, 5);

console.log(numEdges(g));

console.log(numEdges(g2));
