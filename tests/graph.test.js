const { expect } = require('chai');
const sinon = require('sinon');
const { Graph, GraphVertex } = require('../index');

describe.only('Graph', () => {
  describe('constructor', () => {
    it('does not throw', () => {
      const init = () => new Graph();
      expect(init).to.not.throw();
    })
  });

  describe('addVertex', () => {
    let graph;
    beforeEach(() => {
      graph = new Graph();
    });

    it('returns a new vertex', () => {
      expect(graph.addVertex('a')).to.be.an.instanceOf(GraphVertex);
    });

    it('adds multiple unique vertices', () => {
      graph.addVertex('a');
      graph.addVertex('b');
      graph.addVertex('c');
      expect(graph.vertices).to.have.length(3);
    });
  });

  describe('addEdge', () => {
    let graph;
    beforeEach(() => {
      graph = new Graph();
    });

    it('adds Edges between two nodes.', () => {
      const vertex1 = graph.addVertex('a');
      const vertex2 = graph.addVertex('b');
      graph.addEdge(vertex1, vertex2);

      expect(vertex1.neighbours()).to.contain(vertex2);
      // Directional graph so no link between node 1 and 2.
      expect(vertex2.neighbours()).to.not.contain(vertex1);
    });

    it('Edges are references to other Vertices', () => {
      const vertex1 = graph.addVertex('a');
      const vertex2 = graph.addVertex('b');
      graph.addEdge(vertex1, vertex2);
      const vertex1References = vertex1.neighbours();
      // It is a reference rather than value.
      expect(vertex1References[0] === vertex2).to.be.true;
      expect(vertex1References[0]).to.eql(vertex2);
    });
  });

  describe('Traversal', () => {
    let graph;
    let vertex0, vertex1, vertex2, vertex3, vertex4, vertex5;
    let visitStub = sinon.spy();
    beforeEach(() => {
      graph = new Graph();
      vertex0 = graph.addVertex(0);
      vertex1 = graph.addVertex(1);
      vertex2 = graph.addVertex(2);
      vertex3 = graph.addVertex(3);
      vertex4 = graph.addVertex(4);
      vertex5 = graph.addVertex(5);

      graph.addEdge(vertex0, vertex1);
      graph.addEdge(vertex0, vertex4);
      graph.addEdge(vertex0, vertex5);
      graph.addEdge(vertex1, vertex3);
      graph.addEdge(vertex1, vertex4);
      graph.addEdge(vertex2, vertex1);
      graph.addEdge(vertex3, vertex2);
      graph.addEdge(vertex3, vertex4);
    });
    
    describe('Depth First Search', () => {
      it.skip('Visits in order', () => {
        const visitStub = sinon.spy();
        graph.depthFirstVisit(visitStub);
        expect(visitStub.getCall(0).calledWith(vertex0)).to.be.true;
        expect(visitStub.getCall(1).calledWith(vertex1)).to.be.true;
        expect(visitStub.getCall(2).calledWith(vertex3)).to.be.true;
        expect(visitStub.getCall(3).calledWith(vertex2)).to.be.true;
        expect(visitStub.getCall(4).calledWith(vertex4)).to.be.true;
        expect(visitStub.getCall(5).calledWith(vertex5)).to.be.true;
      });
      it('Prints depth first', () => {
        graph.depthFirstVisit();
      });

    });

    describe('Breadth First Visit', () => {
      it.skip('prints BFS in order', () => {
        graph.breadthFirstVisit();
      });
      it('visits in order', () => {
        const visitStub = sinon.spy();
        graph.breadthFirstVisit( visitStub);
        expect(visitStub.getCall(0).calledWith(vertex0)).to.be.true;
        expect(visitStub.getCall(1).calledWith(vertex1)).to.be.true;
        expect(visitStub.getCall(2).calledWith(vertex4)).to.be.true;
        expect(visitStub.getCall(3).calledWith(vertex5)).to.be.true;
        expect(visitStub.getCall(4).calledWith(vertex3)).to.be.true;
        expect(visitStub.getCall(5).calledWith(vertex2)).to.be.true;
      });
    });

  })

});
