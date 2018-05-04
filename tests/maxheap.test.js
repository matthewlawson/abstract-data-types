const { expect } = require('chai');
const { MaxHeap } = require('../index');

describe('Max Heap', () => {
  describe('constructor', () => {
    it('makes a new MaxHeap', () => {
      const maxHeap = new MaxHeap();
      // Expect an instace of it
    });
  });

  describe('insert', () => {
    it('inserts in order', () => {
      const maxHeap = new MaxHeap();
      maxHeap.insert(15);
      maxHeap.insert(10);
      maxHeap.insert(9);
      expect(maxHeap.dataArray).to.eql([15, 10, 9]);
    });

    it('correctly bubbles up items', () => {
      const maxHeap = new MaxHeap();
      maxHeap.insert(15);
      maxHeap.insert(10);
      maxHeap.insert(9);
      maxHeap.insert(19);
      expect(maxHeap.dataArray).to.eql([19, 15, 9, 10]);
    });
  });
  describe('extractMax', () => {
    it('correctly bubbles down items', () => {
      const maxHeap = new MaxHeap();
      maxHeap.insert(15);
      maxHeap.insert(10);
      maxHeap.insert(9);
      maxHeap.insert(19);
      const max = maxHeap.extractMax();
      expect(max).to.eql(19);
      // Check heap reordered ...
      expect(maxHeap.dataArray).to.eql([15, 10, 9]);
    });

    it('correctly give sfast access to the max', () => {
      const maxHeap = new MaxHeap();
      maxHeap.insert(3);
      maxHeap.insert(4);
      maxHeap.insert(99);
      maxHeap.insert(5);
      expect(maxHeap.extractMax()).to.eql(99);
      expect(maxHeap.extractMax()).to.eql(5);
      expect(maxHeap.extractMax()).to.eql(4);
      expect(maxHeap.extractMax()).to.eql(3);
    });

    it('insert in random order, max is extracted correctly', () => {
      const maxHeap = new MaxHeap();
      maxHeap.insert(81);
      maxHeap.insert(8);
      maxHeap.insert(5);
      expect(maxHeap.dataArray).to.eql([81, 8, 5]);
      maxHeap.insert(810);
      expect(maxHeap.extractMax()).to.eql(810);
      expect(maxHeap.extractMax()).to.eql(81);
      expect(maxHeap.dataArray).to.eql([8, 5]);
      expect(maxHeap.extractMax()).to.eql(8);
      expect(maxHeap.extractMax()).to.eql(5);
    });


    it('insert a lot of elements, max is extracted correctly', () => {
      const maxHeap = new MaxHeap();
      maxHeap.insert(81);
      maxHeap.insert(8);
      maxHeap.insert(9);
      maxHeap.insert(10);
      maxHeap.insert(11);
      maxHeap.insert(15);
      maxHeap.insert(58);
      maxHeap.insert(70);
      maxHeap.insert(80);
      maxHeap.insert(810);
      expect(maxHeap.extractMax()).to.eql(810)
      expect(maxHeap.extractMax()).to.eql(81)
      expect(maxHeap.extractMax()).to.eql(80)
      expect(maxHeap.extractMax()).to.eql(70)
      expect(maxHeap.extractMax()).to.eql(58)
      expect(maxHeap.extractMax()).to.eql(15);
      expect(maxHeap.extractMax()).to.eql(11);
      expect(maxHeap.extractMax()).to.eql(10);
      expect(maxHeap.extractMax()).to.eql(9);
      expect(maxHeap.extractMax()).to.eql(8);
    });
    it('insert a lot of elements low to high, max is extracted correctly', () => {
      const maxHeap = new MaxHeap();
      maxHeap.insert(1);
      maxHeap.insert(2);
      maxHeap.insert(3);
      maxHeap.insert(4);
      maxHeap.insert(5);
      maxHeap.insert(6);
      maxHeap.insert(7);
      maxHeap.insert(8);
      maxHeap.insert(9);
      maxHeap.insert(10);
      expect(maxHeap.extractMax()).to.eql(10);
      expect(maxHeap.extractMax()).to.eql(9);
      expect(maxHeap.extractMax()).to.eql(8);
      expect(maxHeap.extractMax()).to.eql(7);
      expect(maxHeap.extractMax()).to.eql(6);
      expect(maxHeap.extractMax()).to.eql(5);
      expect(maxHeap.extractMax()).to.eql(4);
      expect(maxHeap.extractMax()).to.eql(3);
      expect(maxHeap.extractMax()).to.eql(2);
      expect(maxHeap.extractMax()).to.eql(1);
    });

    it('insert a lot of elements high to low, max is extracted correctly', () => {
      const maxHeap = new MaxHeap();
      maxHeap.insert(10);
      maxHeap.insert(9);
      maxHeap.insert(8);
      maxHeap.insert(7);
      maxHeap.insert(6);
      maxHeap.insert(5);
      maxHeap.insert(4);
      maxHeap.insert(3);
      maxHeap.insert(2);
      maxHeap.insert(1);
      expect(maxHeap.dataArray).to.eql([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
      expect(maxHeap.extractMax()).to.eql(10)
      expect(maxHeap.extractMax()).to.eql(9)
      expect(maxHeap.extractMax()).to.eql(8)
      expect(maxHeap.extractMax()).to.eql(7)
      expect(maxHeap.extractMax()).to.eql(6)
      expect(maxHeap.extractMax()).to.eql(5);
      expect(maxHeap.extractMax()).to.eql(4);
      expect(maxHeap.extractMax()).to.eql(3);
      expect(maxHeap.extractMax()).to.eql(2);
      expect(maxHeap.extractMax()).to.eql(1);
    });

  });


});