solutions
depth first (recursive)
const treeMinValue = (root) => {
  if (root === null) return Infinity;
  const smallestLeftValue = treeMinValue(root.left);
  const smallestRightValue = treeMinValue(root.right);
  return Math.min(root.val, smallestLeftValue, smallestRightValue);
};
n = number of nodes
// Time: O(n)
// Space: O(n)
// depth first (iterative)
const treeMinValue = (root) => {
  const stack = [root];

  let smallest = Infinity;
  while (stack.length) {
    const current = stack.pop();
    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) stack.push(current.left);
    if (current.right !== null) stack.push(current.right);
  }
  return smallest;
};
// n = number of nodes
// Time: O(n)
// Space: O(n)
breadth first (iterative)
const treeMinValue = (root) => {
  const queue = [root];

  let smallest = Infinity;
  while (queue.length) {
    const current = queue.shift();
    if (current.val < smallest) smallest = current.val;

    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return smallest;
};
// n = number of nodes
// Time: O(n)
// Space: O(n)