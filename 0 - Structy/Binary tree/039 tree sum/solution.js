depth first
const treeSum = (root) => {
  if (root === null) return 0;

  return root.val + treeSum(root.left) + treeSum(root.right);
};
n = number of nodes
Time: O(n)
Space: O(n)
breadth first
const treeSum = (root, target) => {
  if (root === null) return 0;

  const queue = [root];
  let totalSum = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    totalSum += node.val;
    if (node.left !== null) queue.push(node.left);
    if (node.right !== null) queue.push(node.right);
  }

  return totalSum;
};
n = number of nodes
Time: O(n)
Space: O(n)