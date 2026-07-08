export const maximumPathSumQuiz = [
  {
    question: 'What is the objective of the Binary Tree Maximum Path Sum problem?',
    options: [
      'Find the longest path in the tree',
      'Find the maximum sum of any path between any two nodes',
      'Find the maximum root-to-leaf sum',
      'Find the minimum path sum'
    ],
    correctAnswer: 'Find the maximum sum of any path between any two nodes',
    explanation: 'The goal is to find the path with the maximum sum, where the path may start and end at any node.'
  },
  {
    question: 'Can the maximum path start and end at any node in the tree?',
    options: [
      'No, it must start at the root',
      'No, it must end at a leaf',
      'Yes, it can start and end at any node',
      'Only if the tree is balanced'
    ],
    correctAnswer: 'Yes, it can start and end at any node',
    explanation: 'The path is not restricted to the root or leaf nodes.'
  },
  {
    question: 'Which traversal technique is commonly used to solve the Maximum Path Sum problem?',
    options: [
      'Level Order Traversal',
      'Preorder Traversal',
      'Postorder Depth-First Search (DFS)',
      'Breadth-First Search (BFS)'
    ],
    correctAnswer: 'Postorder Depth-First Search (DFS)',
    explanation: 'Postorder DFS computes the maximum contribution of the left and right subtrees before processing the current node.'
  },
  {
    question: 'Why are negative path sums ignored while computing the maximum path sum?',
    options: [
      'They make the algorithm slower',
      'They decrease the overall path sum',
      'Negative values are not allowed',
      'To reduce memory usage'
    ],
    correctAnswer: 'They decrease the overall path sum',
    explanation: 'Negative contributions are replaced with 0 because they reduce the total path sum.'
  },
  {
    question: 'At each node, what value is returned to its parent during recursion?',
    options: [
      'The sum of both left and right paths',
      'The larger contribution from either the left or right subtree plus the current node',
      'The total sum of the tree',
      'The minimum subtree sum'
    ],
    correctAnswer: 'The larger contribution from either the left or right subtree plus the current node',
    explanation: 'Only one branch can continue upward, so the maximum gain from either subtree is returned.'
  },
  {
    question: 'Which variable is typically maintained globally during the DFS?',
    options: [
      'Minimum path sum',
      'Maximum path sum found so far',
      'Tree height',
      'Leaf node count'
    ],
    correctAnswer: 'Maximum path sum found so far',
    explanation: 'A global variable keeps track of the best path sum encountered during traversal.'
  },
  {
    question: 'What is the time complexity of the Maximum Path Sum algorithm?',
    options: [
      'O(log n)',
      'O(n²)',
      'O(n)',
      'O(1)'
    ],
    correctAnswer: 'O(n)',
    explanation: 'Each node is visited exactly once during the DFS traversal.'
  },
  {
    question: 'What is the auxiliary space complexity of the recursive solution?',
    options: [
      'O(1)',
      'O(log n)',
      'O(h)',
      'O(n²)'
    ],
    correctAnswer: 'O(h)',
    explanation: 'The recursion stack stores at most h calls, where h is the height of the tree.'
  },
  {
    question: 'Why is Postorder DFS preferred for this problem?',
    options: [
      'It visits the root first',
      'It processes child subtrees before the parent',
      'It avoids recursion',
      'It sorts the tree'
    ],
    correctAnswer: 'It processes child subtrees before the parent',
    explanation: 'The left and right subtree gains must be computed before evaluating the current node.'
  },
  {
    question: 'What is the maximum path through a node calculated as?',
    options: [
      'Node value only',
      'Left gain + Right gain',
      'Node value + Left gain + Right gain',
      'Maximum of left and right gain'
    ],
    correctAnswer: 'Node value + Left gain + Right gain',
    explanation: 'The best path through a node includes the node itself along with the maximum non-negative gains from both subtrees.'
  }
];