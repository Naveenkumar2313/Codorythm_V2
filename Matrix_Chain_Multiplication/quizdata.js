export const matrixChainMultiplicationQuiz = [
  {
    question: 'What is the primary objective of the Matrix Chain Multiplication algorithm?',
    options: ['Multiply matrices', 'Find the minimum number of scalar multiplications', 'Sort matrices', 'Find the determinant of matrices'],
    correctAnswer: 'Find the minimum number of scalar multiplications',
    explanation: 'Matrix Chain Multiplication minimizes the total number of scalar multiplications required to multiply a sequence of matrices.'
  },
  {
    question: 'Which programming paradigm is Matrix Chain Multiplication based on?',
    options: ['Greedy', 'Backtracking', 'Dynamic Programming', 'Divide and Conquer'],
    correctAnswer: 'Dynamic Programming',
    explanation: 'Matrix Chain Multiplication solves overlapping subproblems using Dynamic Programming.'
  },
  {
    question: 'What is the input to the Matrix Chain Multiplication problem?',
    options: ['A list of matrices', 'An array representing matrix dimensions', 'A 2D matrix', 'A graph'],
    correctAnswer: 'An array representing matrix dimensions',
    explanation: 'The input is an array of dimensions where the i-th matrix has dimensions arr[i-1] × arr[i].'
  },
  {
    question: 'Why does the order of multiplication matter in Matrix Chain Multiplication?',
    options: ['Because matrix multiplication is not associative', 'Because different parenthesizations require different numbers of scalar multiplications', 'Because matrices cannot be multiplied in every order', 'Because the dimensions change randomly'],
    correctAnswer: 'Because different parenthesizations require different numbers of scalar multiplications',
    explanation: 'Although matrix multiplication is associative, different parenthesizations lead to different computation costs.'
  },
  {
    question: 'What is the time complexity of the Dynamic Programming solution for Matrix Chain Multiplication?',
    options: ['O(n)', 'O(n²)', 'O(n³)', 'O(log n)'],
    correctAnswer: 'O(n³)',
    explanation: 'The DP solution considers all possible split points for every subproblem, resulting in O(n³) time complexity.'
  },
  {
    question: 'What is the space complexity of the standard Dynamic Programming solution?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 'O(n²)',
    explanation: 'A two-dimensional DP table of size n × n is maintained.'
  },
  {
    question: 'What does the DP table entry dp[i][j] represent?',
    options: ['The maximum multiplication cost', 'The minimum multiplication cost for matrices Ai to Aj', 'The dimensions of the resulting matrix', 'The number of matrices'],
    correctAnswer: 'The minimum multiplication cost for matrices Ai to Aj',
    explanation: 'Each DP cell stores the minimum scalar multiplication cost for multiplying matrices from Ai to Aj.'
  },
  {
    question: 'What is the base case in Matrix Chain Multiplication?',
    options: ['i > j', 'i == j', 'i == 0', 'j == n'],
    correctAnswer: 'i == j',
    explanation: 'A single matrix requires no multiplication, so its cost is 0.'
  },
  {
    question: 'Which algorithmic technique is used to reconstruct the optimal parenthesization?',
    options: ['Breadth First Search', 'Split table (partition table)', 'Binary Search', 'Heap'],
    correctAnswer: 'Split table (partition table)',
    explanation: 'A separate split table stores the optimal split position for reconstructing the parenthesization.'
  },
  {
    question: 'Which of the following applications commonly uses Matrix Chain Multiplication?',
    options: ['Expression optimization in compilers', 'Sorting arrays', 'Graph traversal', 'Hash table implementation'],
    correctAnswer: 'Expression optimization in compilers',
    explanation: 'Matrix Chain Multiplication is widely used in compiler optimization and query optimization to minimize computation cost.'
  }
];