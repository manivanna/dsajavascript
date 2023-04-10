"use strict";
const LinkedList = require("../LL/LinkedList");

module.exports = class Graph {
  constructor(vertices) {
    //Total number of vertices in the graph
    this.vertices = vertices;
    //Array that holds linked lists equal to the number of vertices in the graph
    this.list = [];
    //Creating a new linked list for each vertice of the graph
    for (let i = 0; i < vertices; i++) {
      let temp = new LinkedList();
      this.list.push(temp);
    }
  }

  addEdge(source, destination) {
    if (source < this.vertices && destination <= this.vertices)
      //Since we are implementing a directed list, (0,1) is not the same as (1,0)
      this.list[source].insertAtHead(destination);
    //If we were to implement an undirected graph where (0,1)==(1,0),
    //we would create an additional edge from destination to source too:
    //this.list[destination].insertAtHead(source);
  }

  printGraph() {
    console.log(">>Adjacency List of Directed Graph<<");
    var i;
    for (i = 0; i < this.list.length; i++) {
      process.stdout.write("|" + String(i) + "| => ");
      let temp = this.list[i].getHead();
      while (temp != null) {
        process.stdout.write("[" + String(temp.data) + "] -> ");
        temp = temp.nextElement;
      }
      console.log("null ");
    }
  }
  strGraph() {
    let str = "";
    var i;
    for (i = 0; i < this.list.length; i++) {
      str = str + "|" + String(i) + "| => ";
      let temp = this.list[i].getHead();
      while (temp != null) {
        str += "[" + String(temp.data) + "] -> ";
        temp = temp.nextElement;
      }
      str += "null ";
    }
    return str;
  }
};

/*
let g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 3);
g.printGraph();
*/
