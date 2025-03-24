const bfs = {
  title: "Breadth-First Search",
  description: "Implement BFS on a graph represented as an adjacency list. Your function should return an array of nodes in the order they were visited. Start from node 0.",
  template: `function bfs(graph) {
// Your implementation here
// graph is an adjacency list, e.g., [
//   [1, 2],  // Node 0 is connected to nodes 1 and 2
//   [0, 3],  // Node 1 is connected to nodes 0 and 3
//   [0],     // Node 2 is connected to node 0
//   [1]      // Node 3 is connected to node 1
// ]
}`,
  functionName: "bfs",
  testCases: [
      { 
          name: "Simple graph traversal",
          test: (bfs) => bfs([[1, 2], [0, 3], [0], [1]]),
          expected: [0, 1, 2, 3]
      },
      { 
          name: "Star-shaped graph",
          test: (bfs) => bfs([[1, 2, 3], [0], [0], [0]]),
          expected: [0, 1, 2, 3]
      },
      { 
          name: "Linear graph",
          test: (bfs) => bfs([[1], [2], [3], [4], [5], []]),
          expected: [0, 1, 2, 3, 4, 5]
      }
  ],
  hints: [
      "Hint 1: BFS uses a queue to keep track of nodes to visit next.",
      "Hint 2: You'll need to mark nodes as visited to avoid cycles.",
      "Hint 3: Add a node to the visited list as soon as you first discover it, not when you process it."
  ]
};

export default bfs;