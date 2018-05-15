const { expect } = require('chai');
const { SingleLinkedList } = require('../index');

describe('SingleLinkedList', () => {
  describe('appendToTail', () => {
    it('adds item to the head', () => {
      const linkedList = new SingleLinkedList();
      linkedList.appendToTail(3);
      expect(linkedList.head.data).to.eql(3);
    });
  
    it('adds a second item linked to the first', () => {
      const linkedList = new SingleLinkedList();
      linkedList.appendToTail(3);
      linkedList.appendToTail(4);
      expect(linkedList.head.data).to.eql(3);
      expect(linkedList.head.next.data).to.eql(4);
    });
  });
  describe('prependToHead', () => {
    it('replaces a head', () => {
      const linkedList = new SingleLinkedList();
      linkedList.appendToTail(3);
      linkedList.prependToHead(4);
      expect(linkedList.head.data).to.eql(4);
      expect(linkedList.head.next.data).to.eql(3);
    });
  });

  describe('delete', () => {
    it('deletes the head ', () => {
      const linkedList = new SingleLinkedList();
      linkedList.appendToTail(3)
      expect(linkedList.head.data).to.eql(3)
      linkedList.deleteNode(3);
      expect(linkedList.head).to.eql(null);
    });

    it('deletes the second of 2 items', () => {
      const linkedList = new SingleLinkedList();
      linkedList.appendToTail(3);
      linkedList.appendToTail(4);
      
      linkedList.deleteNode(4);
      expect(linkedList.head.data).to.eql(3);
      expect(linkedList.head.next).to.eql(null);
    });

    it('deletes the second of 3 items', () => {
      const linkedList = new SingleLinkedList();
      linkedList.appendToTail(3);
      linkedList.appendToTail(4);
      linkedList.appendToTail(5);
      
      linkedList.deleteNode(4);
      expect(linkedList.head.data).to.eql(3);
      expect(linkedList.head.next.data).to.eql(5);
    });

  });

});