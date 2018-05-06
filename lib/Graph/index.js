// OO style Adjancey Graph with traversals

// Queue required for breadth first exploration
const  Queue  = require('../Queue');
// console.log(Queue);
class Graph {
  constructor() {
    this.latestNodeId = 0;
    this.vertices = [];
  }

  addVertex(data) {
    let vertex = new GraphVertex(data, this.latestNodeId);
    this.vertices[this.latestNodeId] = vertex;
    this.latestNodeId ++;
    return vertex;
  }
  
  addEdge(x, y) {
    // Directional
    // Two nodes - link them
    this.vertices[x.vertexId].addEdge(y);
  }

  // Start at root & explor eeach branch completely before exploring the next..
  // Need to keep track of which branch has been visited.
  depthFirstVisit(visit = console.log) {
    return this.depthFirstSearch(null, 0, visit);
  }

  depthFirstSearch(dataToFind, indexToVisit, visit = console.log, visitedNodes = new Map()) {
    if(visitedNodes.get(indexToVisit) === true) {
      return;
    }
    visitedNodes.set(indexToVisit, true);
    let vertex = this.vertices[indexToVisit];
    
    if(vertex.data == dataToFind) {
      // We found the data in this vertex ...
      return vertex;
    }
    if(vertex.neighbours().length !== 0) {
      vertex.neighbours().forEach(edge => {
        
        this.depthFirstSearch(dataToFind, edge.vertexId, visit, visitedNodes);
      });
    }
    else{
      return;
    } 
  }
  
  breadthFirstVisit(visit = console.log) {
    return this.breadthFirstSearch(null, 0, visit)
  }
  breadthFirstSearch( dataToFind, indexToStart = 0, visit = console.log ) {
    const queue = new Queue();
    const queuedNodes = new Map();
    // Queue the first vertex
    queue.enqueue(this.vertices[indexToStart]);
    queuedNodes.set(this.vertices[indexToStart].vertexId, true);
    while(queue.size() > 0) {
      const vertex = queue.dequeue();
      visit(vertex);
      if(vertex.data == dataToFind) {
        // We found the data in this vertex ...
        return vertex;
      }
      if(vertex.neighbours().length !== 0) {
        vertex.neighbours().forEach(edge => {
          if(queuedNodes.get(edge.vertexId) !== true) {
            queue.enqueue(edge);
            queuedNodes.set(edge.vertexId, true);
          }
        });
      }
    }
  }

  // If a connected to b, return an array of Vertices in the on order of the connected 
  biDirectionalSearch(vertexOne, vertexTwo) {
    
  }
}

class GraphVertex {
  constructor (data, vertexId) {
    this.data = data;
    this.vertexId = vertexId;
    // Array of nodes.
    this.edges = [];
  }

  // Bool
  adjacent(y) {
    // IS there a link betweeb this & y
    // this.children.contains(y)
  }

  neighbours () {
    return this.edges;
  }

  /// x is instance of GraphNode.
  addEdge(x) {
    this.edges.push(x);
  }


}

module.exports = {Graph, GraphVertex};