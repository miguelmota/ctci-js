/**
 * Depth First Search
 *
 * p85
 */

// pseudocode
function search(root) {
  if (!root) return;
  visit(root);
  root.visited = true;
  root.ajacent.forEach(function(node) {
    if (!n.visited) {
      search(n);
    }
  });
}
