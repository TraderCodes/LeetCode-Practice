depth first (iterative)
const leafList = (root) => {
  if (root === null) return [];
  const leaves = [];
  const stack = [ root ];
  while (stack.length) {
    const current = stack.pop();
    if (current.left === null && current.right === null) leaves.push(current.val);
    
    if (current.right !== null) stack.push(current.right);
    if (current.left !== null) stack.push(current.left);
  }
  return leaves;
};
n = number of nodes
Time: O(n)
Space: O(n)
depth first (recursive)
const leafList = (root) => {
  const leaves = [];
  fillLeaves(root, leaves);
  return leaves;
};

const fillLeaves = (root, leaves) => {
  if (root === null) return;
  if (root.left === null && root.right === null) leaves.push(root.val);
  fillLeaves(root.left, leaves);
  fillLeaves(root.right, leaves);
};
n = number of nodes
Time: O(n)
Space: O(n)