class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  // todo
  let dummyHead = new Node(null);
  let tail = dummyHead;
  for (let nums of values){
    tail.next = new Node(nums)
    
    tail = tail.next
  }
  return dummyHead.next
  
  
  
};
// n = length of values
// Time: O(n)
// Space: O(n)


// recursive
const createLinkedList = (values, i = 0) => {
  if (i === values.length) return null;
  const head = new Node(values[i]);
  head.next = createLinkedList(values, i + 1);
  return head;
};


// n = length of values
// Time: O(n)
// Space: O(n)