depth first (recursive)
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  const match = root.val === target ? 1 : 0;
  return match + treeValueCount(root.left, target) + treeValueCount(root.right, target);
};
n = number of nodes
Time: O(n)
Space: O(n)
depth first (iterative)
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  
  let count = 0;
  const stack = [ root ];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === target) count += 1;
    
    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }
  
  return count;
};
n = number of nodes
Time: O(n)
Space: O(n)
breadth first
const treeValueCount = (root, target) => {
  if (root === null) return 0;
  
  let count = 0;
  const queue = [ root ];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.val === target) count += 1;
    
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  
  return count;
};
n = number of nodes
// Time: O(n)
// Space: O(n)
// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). JavaScript does not have a native queue data structure that is maximally efficient.