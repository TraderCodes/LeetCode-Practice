dynamic programming with memoization
const countPaths = (grid, r = 0, c = 0, memo = {}) => {
  const pos = r + ',' + c;
  if (pos in memo) return memo[pos];
  
  if (r === grid.length || c === grid[0].length || grid[r][c] === 'X') return 0;
  
  if (r === grid.length - 1 && c === grid[0].length - 1) return 1;
  
  memo[pos] = countPaths(grid, r + 1, c, memo) + countPaths(grid, r, c + 1, memo);
  return memo[pos];
};
r = # rows
c = # columns
Time: O(r*c)
Space: O(r*c)