/**
 * Un balanced
 * Left value always < right & all subtree left nodes are < root note.
 */

class BinarySearchNode {
  // TS would be very niec here;
  constructor(data) {
    this.left = null;
    this.right = null;
    // TODO: Throw if data == null
    this.data = data;
  }
  // Should run at O(log n) where n is the number of elements in the tree.
  insert(value) {
    if (this.data > value) {
      // Put new node to the left
      if(this.left == null) {
        this.left = new BinarySearchNode(value);
      }
      else {
        this.left.insert(value);
      }
    }
    else if(this.data < value) {
      // The new node goes right
      if(this.right == null) {
        this.right = new BinarySearchNode(value);;
      } 
      else {
        this.right.insert(value);
      }
    }
  }
  // Same as insrt running time is O(log n)
  find(value) {
    if(this.data == value) {
      return this;
    }
    if(this.data > value) {
      // look left
      if(this.left == null) {
        return false;
      }
      return this.left.find(value);
    }
    else {
      // look right for it
      if(this.right == null) {
        return false;
      }
      return this.right.find(value);
      
    }
    // Its not in the tree ...
    return false;
  }
  // All print functions run at O(n) as it needs ot touch each node in the tree to print
  // Pass logger so it can be stubbed and tested ....
  printInOrder(log = console.log) {
    if(this.left != null) {
      this.left.printInOrder(log);
    }
    log(this.data);
    if(this.right != null) {
      this.right.printInOrder(log);
    }
  }

  printInPreOrder(log = console.log) {
    log(this.data);
    if(this.left != null) {
      this.left.printInPreOrder(log);
    }
    if(this.right != null) {
      this.right.printInPreOrder(log);
    }
  }

  printInPostOrder(log = console.log) {
    if(this.left != null) {
      this.left.printInPostOrder(log);
    }
    if(this.right != null) {
      this.right.printInPostOrder(log);
    }
    log(this.data);
  }
  countNodes () {
    
  }
  isComplete() {
    // How would this tree be traversed to find out if it is or isnt a Complete tree
    // Complete = Every level of the tree is filled, the final level is filled if it is filled left to right.
  }

  isFull() {
    // How can the tree be traversed to find out if every node has either 0 or 2 children. EG - no nodes have only 1 child.

  }

  isPerfect() {
    // The tree is both full and complete.
  }

}

module.exports = BinarySearchNode;