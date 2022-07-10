const largestComponent = (graph) => {
  // todo
  let largest = 0;
  const visited = new Set();
  //   for everynode we want to check each node that's connect
  //   and if its visited then add it to the set
  for (let node in graph) {
    const size = countNode(graph, node, visited);
    if (size > largest) {
      largest = size;
    }
  }
  return largest;
};

const countNode = (graph, node, visited) => {
  //   base case set to when the node is in the visited
  if (visited.has(node)) return 0;
  //   add node to visited
  visited.add(node);
  let size = 1;
  for (let neighbor of graph[node]) {
    //     everytime when countNode runs it adds size which is 1
    size += countNode(graph, neighbor, visited);
  }

  return size;
};

module.exports = {
  largestComponent,
};

// n = number of nodes
// e = number edges
// Time: O(e)
// Space: O(n)