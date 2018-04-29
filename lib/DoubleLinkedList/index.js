/**
 * Barely Started.
 */

class DoubleLinkedList {
  constructor() {
    this.listHead = 0;
    this.list = [];
  }
  add(item) {
    if(this.listHead)
    this.list[this.listHead] = new Item(this.listHead, -1, -1, item);
    this.listHead ++;
  }
  find() {

  }

}
class Item {
  constructor (index, next, prev, data){
    this.index;
    this.next;
    this.prev;
    this.data;
  }
}