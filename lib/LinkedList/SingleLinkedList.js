class LinkedList {
  constructor() {
    this.head = null;
  }

  // O(n)
  appendToTail(data) { 
    if(this.head == null) {
      this.head = new SingleLinkedListNode(data);
      return;
    } 
    else {
      let potentialLastNode = this.head;
      while(potentialLastNode.next != null) {
        potentialLastNode = potentialLastNode.next;
      }
      potentialLastNode.next = new SingleLinkedListNode(data);;
    }
  }

  //O(1)
  prependToHead(data) {
    let newHead = new SingleLinkedListNode(data);
    newHead.next = this.head;
    this.head = newHead;
  }

  deleteNode(data) {
    if(this.head == null) {
      return;
    }
    if(this.head.data == data) {
      // The head needs deleting ...
      this.head = this.head.next ? this.head.next : null;
      return;
    }
    let node = this.head;
    while (node.next != null) {
      if(node.next.data == data) {
        // delete this 
        node.next = node.next.next ? node.next.next : null;;
        return;
      }
      node = node.next;
    }
  }

}
class SingleLinkedListNode {
  constructor(data) {
    this.data = data;
    this.next;
  }

  // O(n)
  getLast() {
    let potentialCurrentLastNode = this;
    while(potentialCurrentLastNode.next != null) {
      potentialCurrentLastNode = potentialCurrentLastNode.next;
    }
    return potentialCurrentLastNode;
  }
  
}

module.exports = LinkedList;