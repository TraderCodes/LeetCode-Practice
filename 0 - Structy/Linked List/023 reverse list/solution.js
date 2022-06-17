// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// initialize prev to null
const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  // todo
  const next = head.next;
  //   change head.next pointing to the previous
  head.next = prev;
  //   now the head.next is the previous(which used to be Null)
  //   now the prv is ()a
  //   so we pass in it the function to recheck again
  return reverseList(next, head);
  //   the head we pass in makes the (prev = the new head)
};
module.exports = {
  reverseList,
};
//  time o(n)
//  space o(n)

// first set next = current.next so while changing current the next won't lose it's value
// loop while current !== next

//  null  <-  a   <- b    <-c    null
//                 prev    head   next


// Best solution
const reverseList = (head) => {
  let current = head;
  let prev = null;
  while (current !== null) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
// n = number of nodes
// Time: O(n)
// Space: O(1)
// recursive