const { expect } = require('chai');
const { BinarySearchNode } = require('../index');
const sinon = require('sinon');


describe('BinarySearchNode', () => {
  describe('#constructor', () => {
    it('makes a new tree', () => {
      // Write some tests ...
      new BinarySearchNode(10);
    });
  });

  describe('#insert', () => {
    describe('when value lower than the root', () => {
      it('inserts a node to the left', () => {
        const rootNode = new BinarySearchNode(10);
        rootNode.insert(5);
        expect(rootNode.left).to.be.instanceOf(BinarySearchNode);
      });
    });

    describe('when value higher than the root', () => {
      it('inserts a node to the right', () => {
        const rootNode = new BinarySearchNode(10);
        rootNode.insert(11);
        expect(rootNode.right).to.be.instanceOf(BinarySearchNode);
      });
    });

    describe('when inserting multiple values', () => {
      it('inserts a node left and right', () => {
        const rootNode = new BinarySearchNode(10);
        rootNode.insert(5);
        expect(rootNode.left).to.be.instanceOf(BinarySearchNode);
        expect(rootNode.right).to.eql(null);
        rootNode.insert(11);
        expect(rootNode.right).to.be.instanceOf(BinarySearchNode);
        // Left remains in place.
        expect(rootNode.left).to.be.instanceOf(BinarySearchNode);
      });

      it('inserts two left nodes', () => {
        const rootNode = new BinarySearchNode(10);
        rootNode.insert(5);
        expect(rootNode.left.data).to.eql(5);
        expect(rootNode.right).to.eql(null);
        rootNode.insert(4);
        expect(rootNode.left.left.data).to.eql(4);
        expect(rootNode.right).to.eql(null);
      });

      it('inserts two right nodes', () => {
        const rootNode = new BinarySearchNode(10);
        rootNode.insert(11);
        expect(rootNode.right.data).to.eql(11);
        expect(rootNode.left).to.eql(null);
        rootNode.insert(12);
        expect(rootNode.right.right.data).to.eql(12);
        expect(rootNode.left).to.eql(null);
      });

      it('inserts two left nodes then one right nodes', () => {
        const rootNode = new BinarySearchNode(10);
        rootNode.insert(5);
        expect(rootNode.left.data).to.eql(5);
        expect(rootNode.right).to.eql(null);
        rootNode.insert(4);
        expect(rootNode.left.left.data).to.eql(4);
        expect(rootNode.right).to.eql(null);
        rootNode.insert(11);
        expect(rootNode.right.data).to.eql(11);
      });


    });

  });
  describe('#find', () => {
    let rootNode;
    before(() => {
      // Simple balanced tree for printing
      rootNode = new BinarySearchNode(6);
      rootNode.insert(3);
      rootNode.insert(2);
      rootNode.insert(4);
      rootNode.insert(10);
      rootNode.insert(9);
      rootNode.insert(11);
    });
    it('returns the correct node', () => {
      const node = rootNode.find(10);
      expect(node.data).to.eql(10);
    });
    it('returns false for non-existant node in right most branch', () => {
      const node = rootNode.find(1000);
      expect(node).to.be.false;
    });
    it('returns false for non-existant node in left most branch', () => {
      const node = rootNode.find(1);
      expect(node).to.be.false;
    })
  });
  describe('printing', () => {
    let rootNode;
    before(() => {
      // Simple balanced tree for printing
      rootNode = new BinarySearchNode(6);
      rootNode.insert(3);
      rootNode.insert(2);
      rootNode.insert(4);
      rootNode.insert(10);
      rootNode.insert(9);
      rootNode.insert(11);
    });
    describe('#printInOrder', () => {
      it('callls log in order on each element in the tree', () => {
        const logStub = sinon.spy();
        rootNode.printInOrder(logStub);
        expect(logStub.getCall(0).calledWith(2)).to.be.true;
        expect(logStub.getCall(1).calledWith(3)).to.be.true;
        expect(logStub.getCall(2).calledWith(4)).to.be.true;
        expect(logStub.getCall(3).calledWith(6)).to.be.true;
        expect(logStub.getCall(4).calledWith(9)).to.be.true;
        expect(logStub.getCall(5).calledWith(10)).to.be.true;
        expect(logStub.getCall(6).calledWith(11)).to.be.true;
      });
    });
    describe('#printPreOrder', () => {
      it('prints in the correct order', () => {
        const logStub = sinon.spy();
        rootNode.printInPreOrder(logStub);
        expect(logStub.getCall(0).calledWith(6)).to.be.true;
        expect(logStub.getCall(1).calledWith(3)).to.be.true;
        expect(logStub.getCall(2).calledWith(2)).to.be.true;
        expect(logStub.getCall(3).calledWith(4)).to.be.true;
        expect(logStub.getCall(4).calledWith(10)).to.be.true;
        expect(logStub.getCall(5).calledWith(9)).to.be.true;
        expect(logStub.getCall(6).calledWith(11)).to.be.true;
      })
    });
    describe('#printPostOrder', () => {
      it('prints in the correct order', () => {
        const logStub = sinon.spy();
        rootNode.printInPostOrder(logStub);
        expect(logStub.getCall(0).calledWith(2)).to.be.true;
        expect(logStub.getCall(1).calledWith(4)).to.be.true;
        expect(logStub.getCall(2).calledWith(3)).to.be.true;
        expect(logStub.getCall(3).calledWith(9)).to.be.true;
        expect(logStub.getCall(4).calledWith(11)).to.be.true;
        expect(logStub.getCall(5).calledWith(10)).to.be.true;
        expect(logStub.getCall(6).calledWith(6)).to.be.true;
      })
    })
  });

});