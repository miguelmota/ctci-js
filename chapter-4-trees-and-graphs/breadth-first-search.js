/**
 * Breadth First Search
 *
 * p85
 */

// pseudocode
function search(root) {
  var queue = new Queue();
  root.visited = true;
  visit(root);
  queue.enqueue(root);

  while(!queue.isEmpty()) {
    var r = queue.dequeue();
    r.adjacent.forEach(function(n) {
      if (!n.visited) {
        visit(n);
        n.visited = true;
        queue.enqueue(n);
      }
    });
  }
}
