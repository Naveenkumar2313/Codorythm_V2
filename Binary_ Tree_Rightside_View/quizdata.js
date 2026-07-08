export const binaryTreeRightSideViewQuiz = [
  {
    question: 'What does the Binary Tree Right Side View problem ask you to return?',
    options: ['All leaf nodes', 'The nodes visible from the right side', 'The leftmost node at every level', 'The height of the tree'],
    correctAnswer: 'The nodes visible from the right side',
    explanation: 'The goal is to return the rightmost visible node from each level of the binary tree.'
  },
  {
    question: 'Which traversal is most commonly used to solve the Binary Tree Right Side View problem?',
    options: ['Inorder Traversal', 'Preorder Traversal', 'Level Order Traversal (BFS)', 'Postorder Traversal'],
    correctAnswer: 'Level Order Traversal (BFS)',
    explanation: 'Level Order Traversal processes the tree level by level, making it easy to identify the last node of each level.'
  },
  {
    question: 'During BFS, which node is added to the result for each level?',
    options: ['The first node visited', 'The middle node', 'The last node visited', 'Every node'],
    correctAnswer: 'The last node visited',
    explanation: 'The last node processed at each level is the node visible from the right side.'
  },
  {
    question: 'What is returned if the binary tree is empty?',
    options: ['-1', 'null', '[]', '[0]'],
    correctAnswer: '[]',
    explanation: 'An empty tree has no visible nodes, so an empty list is returned.'
  },
  {
    question: 'What is the time complexity of the Binary Tree Right Side View algorithm using BFS?',
    options: ['O(log n)', 'O(n)', 'O(n²)', 'O(1)'],
    correctAnswer: 'O(n)',
    explanation: 'Every node in the tree is visited exactly once.'
  },
  {
    question: 'What is the space complexity of the BFS solution in the worst case?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 'O(n)',
    explanation: 'The queue may contain an entire level of the tree, requiring O(n) space in the worst case.'
  },
  {
    question: 'Which data structure is typically used to perform Level Order Traversal?',
    options: ['Stack', 'Queue', 'Heap', 'Hash Map'],
    correctAnswer: 'Queue',
    explanation: 'A queue processes nodes in First-In-First-Out (FIFO) order, which is ideal for BFS.'
  },
  {
    question: 'If a binary tree contains only one node, what will the right side view contain?',
    options: ['[]', 'The root node only', 'The left child', 'The right child'],
    correctAnswer: 'The root node only',
    explanation: 'The root is the only node and is therefore visible from the right side.'
  },
  {
    question: 'Which traversal order is preferred when solving this problem using DFS?',
    options: ['Left subtree before right subtree', 'Right subtree before left subtree', 'Only inorder traversal', 'Only postorder traversal'],
    correctAnswer: 'Right subtree before left subtree',
    explanation: 'Visiting the right subtree first ensures the first node encountered at each depth is visible from the right side.'
  },
  {
    question: 'Why is the last node of each level selected in the BFS approach?',
    options: ['It is always the smallest value', 'It represents the rightmost visible node', 'It is the deepest node', 'It is always a leaf node'],
    correctAnswer: 'It represents the rightmost visible node',
    explanation: 'The last node processed at each level is the one visible when viewing the tree from the right side.'
  }
];