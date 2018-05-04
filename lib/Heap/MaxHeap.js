/**
 * A Heap is a Tree structure 
 * it is always complete (filled other than elemtns at the right position on the last level)
 * 
 * Max Heap
 * Root node is the biggest value in teh heap
 * Root is larger than both of its children
 * 
 * Usually has 2 operations. insert() and extract_min()
 * 
 * Implemented as single ArrayList.
 */
const Heap = require('./Heap');

class MaxHeap extends Heap {
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
    if (parentValue >= value) {
      // leave where it is we good
      return;
    }
    else if (parentValue < value) {
      // Swap with parent
      this._swap(parentIndex, index);
      this._bubbleUp(parentIndex, value);
    }
  }
  // O(log n)
  extractMax() {
    // Quick access to max at O(1) then O(log n) to bubble down.
    const max = this.dataArray[0];
    // Put the last item in the top position and 
    // Rebalance the Heap and bubble the new iteam at position 0 down.
    this._swap(0, this.lastItemIndex - 1);
    // Reduce the sie of the array and discard the element we just popped off the top of the Heap
    this.dataArray.length -= 1;
    this.lastItemIndex--;
    this._bubbleDown(0, this.dataArray[0]);
    return max;
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

    // If right child is bigger than the left we swap into the right position otherwise left.
    if (rightChildValue > leftChildValue && rightChildValue > value) {
      // Swap this index with right.  
      this._swap(rightChildIndex, index);
      this._bubbleDown(rightChildIndex, value);
    }
    else if (leftChildValue > rightChildValue && leftChildValue > value) {
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
module.exports = MaxHeap;
