const removeNode = (head, targetVal) => {
  // todo
  if (head.val === targetVal) return head.next;

  let prev = null;
  let current = head;
  while (current !== null) {
    if (current.val === targetVal) {
      prev.next = current.next;
      break;
    }

    prev = current;
    current = current.next;
  }
  return head;
};
// n = number of nodes
// Time: O(n)
// Space: O(1)

recursive
const removeNode = (head, targetVal) => {
  if (head === null) return null;
  if (head.val === targetVal) return head.next;
  head.next = removeNode(head.next, targetVal);
  return head;
};
// n = number of nodes
// Time: O(n)
// Space: O(n)