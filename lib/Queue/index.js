// FIFO..
/**
 * TODO - Refactor to not use any JS array operators.
 */
class Queue {
  constructor (data = []) {
    this.data = data;
    this.top = data.length;
  }

  enqueue (item) {
    this.data[this.top] = item;
    this.top++;
  }
  
  dequeue () {
    this.top --;
    // TODO - remove any native array operators
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  size() {
    return this.top;
  }

}

module.exports = Queue;