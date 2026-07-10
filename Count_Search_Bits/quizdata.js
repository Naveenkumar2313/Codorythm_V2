export const countSetBitsQuiz = [
  {
    question: 'What is the primary purpose of Brian Kernighan\'s Algorithm?',
    options: [
      'Sort an array',
      'Count the number of set bits in an integer',
      'Find the largest element',
      'Reverse the bits of a number'
    ],
    correctAnswer: 'Count the number of set bits in an integer',
    explanation: 'Brian Kernighan\'s Algorithm efficiently counts the number of 1s in the binary representation of a number.'
  },

  {
    question: 'Which bitwise operation is used in Brian Kernighan\'s Algorithm?',
    options: [
      'n | (n - 1)',
      'n ^ (n - 1)',
      'n & (n - 1)',
      '~n'
    ],
    correctAnswer: 'n & (n - 1)',
    explanation: 'The expression n & (n - 1) removes the rightmost set bit from a number.'
  },

  {
    question: 'What happens after performing n & (n - 1)?',
    options: [
      'The leftmost set bit is removed',
      'The rightmost set bit is removed',
      'All bits become 0',
      'The number doubles'
    ],
    correctAnswer: 'The rightmost set bit is removed',
    explanation: 'Each iteration removes exactly one set bit until the number becomes zero.'
  },

  {
    question: 'How many iterations does Brian Kernighan\'s Algorithm perform?',
    options: [
      'Equal to the total number of bits',
      'Equal to the square of the number',
      'Equal to the number of set bits',
      'Always one iteration'
    ],
    correctAnswer: 'Equal to the number of set bits',
    explanation: 'The loop executes once for every set bit present in the integer.'
  },

  {
    question: 'What is the worst-case time complexity of Brian Kernighan\'s Algorithm?',
    options: [
      'O(1)',
      'O(n)',
      'O(log n)',
      'O(n²)'
    ],
    correctAnswer: 'O(log n)',
    explanation: 'The worst case occurs when every bit is set, resulting in O(log n) iterations.'
  },

  {
    question: 'What is the space complexity of Brian Kernighan\'s Algorithm?',
    options: [
      'O(n)',
      'O(log n)',
      'O(1)',
      'O(n²)'
    ],
    correctAnswer: 'O(1)',
    explanation: 'The algorithm uses only a few variables regardless of the input size.'
  },

  {
    question: 'How many set bits are present in the binary representation of 13?',
    options: [
      '2',
      '3',
      '4',
      '5'
    ],
    correctAnswer: '3',
    explanation: '13 in binary is 1101, which contains three set bits.'
  },

  {
    question: 'Which of the following is a common application of Brian Kernighan\'s Algorithm?',
    options: [
      'Sorting linked lists',
      'Counting enabled flags in bitmasks',
      'Finding shortest paths',
      'Matrix multiplication'
    ],
    correctAnswer: 'Counting enabled flags in bitmasks',
    explanation: 'The algorithm is widely used in bitmask-based problems and system programming.'
  },

  {
    question: 'What will be the output of the algorithm for the input n = 0?',
    options: [
      '1',
      '-1',
      '0',
      'Undefined'
    ],
    correctAnswer: '0',
    explanation: 'Since there are no set bits in 0, the loop never executes and the answer is 0.'
  },

  {
    question: 'Why is Brian Kernighan\'s Algorithm generally faster than checking every bit individually?',
    options: [
      'It skips all zero bits',
      'It uses recursion',
      'It sorts the bits first',
      'It divides the number by 2 every iteration'
    ],
    correctAnswer: 'It skips all zero bits',
    explanation: 'The algorithm processes only the set bits instead of examining every bit position.'
  }
];