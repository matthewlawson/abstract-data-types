const { expect } = require('chai');
const { Queue } = require('../index');

describe('Queue', () => {
  describe('constructor', () => {
    it('initialises empty with no parameters', () => {
      let queue = new Queue();
      expect(queue.size()).to.eql(0);
    });

    it('accept an array as default', () => {
      const data = ['one', 'two', 'three'];
      let queue = new Queue(data);
      expect(queue.size()).to.eql(data.length);
    });
  });

  describe('enqueue', () => {
    it('adds an element to the end of the queue', () => {
      const data = ['one', 'two', 'three'];
      const itemToAdd = 'four'
      let queue = new Queue(data);
      queue.enqueue(itemToAdd);
      expect(queue.size()).to.eql(4);
    });
    it('adds the correct element to the end of the queue', () => {
      const data = ['one', 'two', 'three'];
      const itemToAdd = 'four'
      let queue = new Queue(data);
      queue.enqueue(itemToAdd);
      expect(queue.data[queue.size() - 1]).to.eql(itemToAdd);
    });

    it('adds the correct element to the end of the queue adfter a dequeue', () => {
      const data = ['one', 'two'];
      const itemToAdd = 'three'
      let queue = new Queue(data);
      queue.dequeue();
      queue.enqueue(itemToAdd);
      expect(queue.dequeue()).to.eql('two');
      expect(queue.dequeue()).to.eql('three');
    });
  });

  describe('dequeue', () => {
    it('removes an element', () => {
      let queue = new Queue(['one', 'two']);
      expect(queue.size()).to.eql(2);
      queue.dequeue();
      expect(queue.size()).to.eql(1);
    })
    it('returns the oldest element', () => {
      let queue = new Queue();
      queue.enqueue('one');
      queue.enqueue('two');
      queue.enqueue('three');
      expect(queue.dequeue()).to.eql('one');
    });
  });
  
});