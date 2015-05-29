/**
 * Implementing a Queue
 *
 * p80
 */

function Queue() {
  this.first = null;
  this.last = null;
}

Queue.prototype = {
  enqueue: function(item) {
    if (!this.first) {
      this.last = new Node(item);
      this.first = this.last;
    } else {
      this.last.next = new Node(item);
      this.last = this.last.next;
    }
  },
  dequeue: function() {
    if (this.first) {
      var item = this.first.data;
      this.first = this.first.next;
      if (!this.first) {
        this.last = null;
      }
      return item;
    }
    return null;
  }
};

function Node(value) {
  this.next = null;
  this.data = value;
}

var queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

console.log(queue.first.data); // A
console.log(queue.last.data); // C
queue.dequeue();
console.log(queue.first.data); // B
