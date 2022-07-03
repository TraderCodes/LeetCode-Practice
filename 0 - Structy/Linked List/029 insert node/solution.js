
// iterative
const insertNode = (head, value, index) => {
  // todo
  if (index === 0) {
    const tempNum = new Node(value);
    tempNum.next = head;
    return tempNum;
  }
  let count = 0;
  let current = head;
  while (current !== null) {
    if (count === index - 1) {
      const tempValue = current.next;
      current.next = new Node(value);
      current.next.next = tempValue;
    }

    count++;
    current = current.next;
  }
  return head;
};
// n = number of nodes
// Time: O(n)
// Space: O(1)


// recursive
const insertNode = (head, value, index, count = 0) => {
  if (index === 0) {
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  if (count === index - 1) {
    const next = head.next;
    head.next = new Node(value);
    head.next.next = next;
    return head;
  }
  
  insertNode(head.next, value, index, count + 1);
  return head;
};
// n = number of nodes
// Time: O(n)
// Space: O(n)