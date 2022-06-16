const linkedListFind = (head, target) => {
  let current = head;
  while (current !== null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};
// n = number of nodes
// Time: O(n)
// Space: O(1)

// recursive;
const linkedListFind = (head, target) => {
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};
// n = number of nodes
// Time: O(n)
// Space: O(n)