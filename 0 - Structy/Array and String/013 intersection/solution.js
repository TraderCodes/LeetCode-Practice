// brute force (timeout)
const intersection = (a, b) => {
  const result = [];
  for (let item of b) {
    if (a.includes(item)) {
      result.push(item);
    }
  }
  return result;
};
// n = length of array a, m = length of array b
// Time: O(n*m)
// Space: O(min(n,m))
// using set (pass)

// using set (pass)
const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item);
    }
  }
  return result;
};
// n = length of array a, m = length of array b
// Time: O(n+m)
// Space: O(n)