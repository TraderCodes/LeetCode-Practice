const sumList = (head) => {
  let sum = 0;
  let current = head;
  while (current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

// n = number of nodes
// Time: O(n)
// Space: O(1)

// recursive;
const sumList = (head) => {
  if (head === null) return 0;
  return head.val + sumList(head.next);
};

// n = number of nodes
// Time: O(n)
// Space: O(n)