const { expect } = require('chai');
const { MinHeap } = require('../index');

describe('Max Heap', () => {
  describe('constructor', () => {
    it('returns a new MinHeap', () => {
      new MinHeap();

    });
  });
  describe('insert', () => {
    it('inserts and bubbles the correct order', () => {
      const minHeap = new MinHeap();
      minHeap.insert(3);
      minHeap.insert(4);
      minHeap.insert(1);
      expect(minHeap.dataArray).to.eql([1,4,3]);
    });
    // More edge case testing ...
  });
  describe('extractMin', () => {
    it('extracts the minimum element', () => {
      const minHeap = new MinHeap();
      minHeap.insert(3);
      minHeap.insert(4);
      minHeap.insert(1);
      minHeap.insert(200);
      minHeap.insert(2);
      minHeap.insert(490);
      minHeap.insert(711);
      expect(minHeap.extractMin()).to.eql(1);
      expect(minHeap.extractMin()).to.eql(2);
      expect(minHeap.extractMin()).to.eql(3);
      expect(minHeap.extractMin()).to.eql(4);
      expect(minHeap.extractMin()).to.eql(200);
      console.log(minHeap.dataArray);
      expect(minHeap.extractMin()).to.eql(490);

      expect(minHeap.extractMin()).to.eql(711);
    });
  })
});

