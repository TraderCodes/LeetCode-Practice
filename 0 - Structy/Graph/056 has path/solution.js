solutions
depth first
const hasPath = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};
n = number of nodes
e = number edges
Time: O(e)
Space: O(n)
breadth first
const hasPath = (graph, src, dst) => {
  const queue = [src];

  while (queue.length) {
    const current = queue.shift();
    if (current === dst) return true;

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }

  return false;
};
n = number of nodes
e = number edges
Time: O(e)
Space: O(n)
Note: the JavaScript shift() methods runs in linear time, so the complexity is really O(e^2).