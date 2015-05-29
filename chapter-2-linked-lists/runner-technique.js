
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
  size: function() {
    var length = 0;
    var currentNode = this.head;
    while(currentNode) {
      length += 1;
      currentNode = currentNode.next;
    }
    return length;
  }
}

function Node(value) {
  this.next = null;
  this.data = value;
}

var linkedList = new List();
linkedList.add('1');
linkedList.add('2');
linkedList.add('3');
linkedList.add('A');
linkedList.add('B');
linkedList.add('C');

// fast pointer
var p1 = linkedList.head;
// normal pointer
var p2 = linkedList.head;

// get half way point
while(p1) {
  p2 = p2.next;
  p1 = p1.next.next;
}

p1 = linkedList.head;

// interweave
while(p2) {
  // keep a reference
  var p1next = p1.next;
  var p2next = p2.next;

  p2.next = p1.next;

  // avoid infinite loops
  if (!p2next) {
    p2.next = null;
  }

  p1.next = p2;
  p1 = p1next;
  p2 = p2next;
}

var currentNode = linkedList.head;
while(currentNode) {
  console.log(currentNode.data); // 1 A 2 B 3 C
  currentNode = currentNode.next;
}
