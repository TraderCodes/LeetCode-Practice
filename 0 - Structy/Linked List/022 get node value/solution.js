// iterative;
const getNodeValue = (head, index) => {
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index) return current.val;
    current = current.next;
    count += 1;
  }
  return null;
};
// n = number of nodes
// Time: O(n)
// Space: O(1)

// recursive;
const getNodeValue = (head, index) => {
  if (head === null) return null;
  if (index === 0) return head.val;
  return getNodeValue(head.next, index - 1);
};
// n = number of nodes
// Time: O(n)
// Space: O(n)