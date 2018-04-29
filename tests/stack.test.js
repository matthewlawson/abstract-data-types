const { expect } = require('chai');
const { Stack } = require('../index');

describe('Stack', () => {
  describe('constructor', () => {
    it('Initialises empty stack', () => {
      const stack = new Stack();
      expect(stack.size()).of.eql(0);
    });
  });
  describe('push', () => {
    it('Adds a item to the end of the stack', () => {
      const stack = new Stack();
      stack.push('one');
      stack.push('two');
      expect(stack.data[stack.top - 1]).to.eql('two');
      expect(stack.size()).to.eql(2);
    });

    it('throws and error if max size exceeded', () => {
      const stack = new Stack(2);
      stack.push('one');
      stack.push('two');
      expect(() => stack.push('three')).to.throw();
    });
  });
  
  describe('pop', () => {
    it('returns the last added item', () => {
      const stack = new Stack();
      stack.push('one');
      stack.push('two');
      expect(stack.pop()).to.eql('two');
    });

    it('reduces the size by 1', () => {
      const stack = new Stack();
      stack.push('one');
      stack.push('two');
      expect(stack.size()).to.eql(2);
      stack.pop();
      expect(stack.size()).to.eql(1);
    });

    it('throws an error if stack is empty', () => {
      const stack = new Stack();
      expect(stack.pop).to.throw();
    });

  });
  
});