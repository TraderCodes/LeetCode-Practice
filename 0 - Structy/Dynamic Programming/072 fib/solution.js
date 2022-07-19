brute - force(timeout);
const fib = (n) => {
  if (n === 0 || n === 1) return n;

  return fib(n - 1) + fib(n - 2);
};
Time: O(2 ^ n);
Space: O(n);
memoized(pass);
const fib = (n, memo = {}) => {
  if (n === 0 || n === 1) return n;

  if (n in memo) return memo[n];

  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};
Time: O(n);
Space: O(n);
