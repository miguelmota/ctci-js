/**
 * Create a Linked List
 *
 * p75
 */

function List() {
  this.head = null;
  this.tail = null;
}

List.prototype = {
  add: function(value) {
    var node = new Node(value);
    if (!this.head) {
      this.head = node;
    }
    if (this.tail) {
      this.tail.next = node;
    }
    this.tail = node;
  },
  remove: function() {
    var currentNode = this.head;
    this.head = currentNode.next;
    currentNode = null;
  },
  contains: function(value) {
    var currentNode = this.head;
    while(currentNode) {
      if (currentNode.data == value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

function Node(value) {
  this.next = null;
  this.data = value;
}

var linkedList = new List();
linkedList.add('foo');
linkedList.add('bar');

console.log(linkedList.head.data); // foo
console.log(linkedList.head.next.data); // bar
console.log(linkedList.contains('foo')); // true
