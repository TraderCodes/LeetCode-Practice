// solution 1 
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const linkedListValues = (head) => {
   const values = []
  let current = head ;

  while (current !==null){
    values.push(current.val)
    current = current.next
  }
  return values
    
};

module.exports = {
  linkedListValues,
};
// n = number of nodes
// Time: O(n)
// Space: O(n)
// solution recursive 
const linkedListValues = (head) => {
  const values = [];
  _linkedListValues(head, values);
  return values;
};

const _linkedListValues = (head, values) => {
  if (head === null) return;
  values.push(head.val);
  _linkedListValues(head.next, values);
};
module.exports = {
  linkedListValues,
};
