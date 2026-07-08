export const floodFillQuiz = [
  {
    question: 'What is the primary purpose of the Flood Fill algorithm?',
    options: ['Sort an array', 'Replace connected cells of the same color', 'Find the shortest path', 'Search a binary tree'],
    correctAnswer: 'Replace connected cells of the same color',
    explanation: 'Flood Fill replaces all connected cells having the same original color with a new color.'
  },
  {
    question: 'Which traversal technique is commonly used to implement Flood Fill?',
    options: ['Binary Search', 'Depth First Search (DFS)', 'Heap Sort', 'Quick Sort'],
    correctAnswer: 'Depth First Search (DFS)',
    explanation: 'Flood Fill is commonly implemented using DFS, though BFS is also possible.'
  },
  {
    question: 'Which data structure is typically used in a BFS-based Flood Fill?',
    options: ['Stack', 'Queue', 'Heap', 'HashMap'],
    correctAnswer: 'Queue',
    explanation: 'BFS uses a queue to visit neighboring cells level by level.'
  },
  {
    question: 'How many directions are considered in the standard Flood Fill algorithm?',
    options: ['2', '4', '6', '8'],
    correctAnswer: '4',
    explanation: 'The standard Flood Fill explores the four neighboring cells: up, down, left, and right.'
  },
  {
    question: 'Why do we check if the original color is already equal to the new color before starting Flood Fill?',
    options: ['To reduce memory usage', 'To avoid unnecessary recursion or infinite processing', 'To improve sorting', 'To find the shortest path'],
    correctAnswer: 'To avoid unnecessary recursion or infinite processing',
    explanation: 'If both colors are the same, the image is already in the desired state, so no processing is needed.'
  },
  {
    question: 'What is the worst-case time complexity of Flood Fill on an m × n grid?',
    options: ['O(log n)', 'O(m + n)', 'O(m × n)', 'O((m × n)²)'],
    correctAnswer: 'O(m × n)',
    explanation: 'In the worst case, every cell in the grid is visited exactly once.'
  },
  {
    question: 'What is the worst-case space complexity of recursive Flood Fill?',
    options: ['O(1)', 'O(log n)', 'O(m × n)', 'O(n² log n)'],
    correctAnswer: 'O(m × n)',
    explanation: 'The recursion stack can grow to include every cell when the entire grid forms one connected component.'
  },
  {
    question: 'Which condition should stop the Flood Fill recursion?',
    options: ['Cell is outside the grid or has a different color', 'Current row is even', 'Current column is odd', 'Color is greater than 255'],
    correctAnswer: 'Cell is outside the grid or has a different color',
    explanation: 'Flood Fill stops when the cell is out of bounds or no longer matches the original color.'
  },
  {
    question: 'Flood Fill is commonly used in which real-world application?',
    options: ['Paint Bucket Tool', 'Database Indexing', 'CPU Scheduling', 'Data Compression'],
    correctAnswer: 'Paint Bucket Tool',
    explanation: 'The Paint Bucket tool in image editors uses the Flood Fill algorithm to color connected regions.'
  },
  {
    question: 'Which of the following problems is closely related to the Flood Fill algorithm?',
    options: ['Number of Islands', 'Merge Sort', 'Knapsack Problem', 'Dijkstra Algorithm'],
    correctAnswer: 'Number of Islands',
    explanation: 'The Number of Islands problem is solved using the same DFS/BFS traversal principles as Flood Fill.'
  }
];