// Oppostie of a queue LIFO
class Stack {

  constructor (maxSize = Number.MAX_SAFE_INTEGER) {
    this.data = [];
    this.maxSize = maxSize;
    this.top = 0;
  }

  pop() {
    if(this.top === 0) {
      throw new Error('Underflow: stack empty');
    }
    let item = this.data[this.top - 1];
    this.top -= 1;
    delete this.data[this.top];
    return item;
  }
  push(item) {
    if(this.top === this.maxSize) {
      throw new Error('Overflow: maxSize exceeded');
    }
    this.data[this.top] = item;
    this.top += 1;
  }
  size () {
    return this.top;
  }
}

module.exports = Stack;