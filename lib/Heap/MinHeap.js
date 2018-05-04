/**
 * Minimum value is always the root node
 * Root value is less than both children
 */

const Heap = require('./Heap');

class MinHeap extends Heap {
  constructor() {
    super();
  }

  // O(log n)
  insert(value) {
    // Add item to the final position.
    this.dataArray[this.lastItemIndex] = value;
    // Bubble the value up the tree to the correct place.
    this._bubbleUp(this.lastItemIndex, value); // Bubble takes O(log n) where n = number of nodes.
    // End
    this.lastItemIndex++;
  }

  _bubbleUp(index, value) {
    // Ensure Order by bubbling this value up the tree
    let parentIndex = this.getParentIndex(index)
    let parentValue = this.dataArray[parentIndex];
    if (index === 0) {
      // We are at the root we can stop
      return;
    }
    if (parentValue <= value) {
      // leave where it is we good
      return;
    }
    else if (parentValue > value) {
      // Swap with parent
      this._swap(parentIndex, index);
      this._bubbleUp(parentIndex, value);
    }
  }
  // O(log n)
  extractMin() {
    // Quick access to max at O(1) then O(log n) to bubble down.
    const min = this.dataArray[0];
    this._swap(0, this.lastItemIndex - 1);
    this.dataArray.length -= 1;
    this.lastItemIndex--;
    this._bubbleDown(0, this.dataArray[0]);
    return min;
  }
  // O(log n)
  _bubbleDown(index, value) {
    if (index === this.lastItemIndex) {
      // At the end.
      return;
    }
    let leftChildIndex = this.getLeftChildIndex(index);
    let rightChildIndex = this.getRightChildIndex(index);

    let leftChildValue = this.dataArray[leftChildIndex] ? this.dataArray[leftChildIndex] : null;;
    let rightChildValue = this.dataArray[rightChildIndex] ? this.dataArray[rightChildIndex] : null;

    // If right child is bigger than the left and right is smaller than the value
    // we swap into the right position otherwise left.
    if (rightChildValue && rightChildValue < leftChildValue && rightChildValue < value) {
      // Swap this index with right.  
      this._swap(rightChildIndex, index);
      this._bubbleDown(rightChildIndex, value);
    }
    else if (leftChildValue && leftChildValue < rightChildValue && leftChildValue < value) {
      // Swap this index with left.
      this._swap(leftChildIndex, index);
      this._bubbleDown(leftChildIndex, value);
    }
    else {
      // We are at the correct position 
      return;
    }

  }
}
module.exports = MinHeap;
