/**
 * Implementing a Stack
 *
 * p79
 */

function Stack() {
  this.top = null;
}

Stack.prototype = {
  pop: function() {
    if (this.top) {
      var item = this.top.data;
      this.top = this.top.next;
      return item;
    }
  },
  push: function(item) {
    var t = new Node(item);
    t.next = this.top;
    this.top = t;
  },
  peek: function() {
    return this.top.data;
  }
};

function Node(value) {
  this.next = null;
  this.data = value;
}

var stack = new Stack();

stack.push('A');
stack.push('B');
stack.push('C');

console.log(stack.peek()); // C
stack.pop();
console.log(stack.peek()); // B
