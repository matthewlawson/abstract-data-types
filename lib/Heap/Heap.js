class Heap  {
  constructor() {
    this.dataArray = [];
    this.lastItemIndex = 0;
  }
  _swap(indexOne, indexTwo) {
    let temp = this.dataArray[indexOne];
    this.dataArray[indexOne] = this.dataArray[indexTwo];
    this.dataArray[indexTwo] = temp;
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return (2 * index) + 1;
  }

  getRightChildIndex(index) {
    return (2 * index) + 2;
  }
}

module.exports = Heap;