export const powerSetBitmaskQuiz = [
  {
    question: 'What is the main purpose of Power Set Generation via Bitmask?',
    options: [
      'To sort a set of elements',
      'To generate all possible subsets of a set',
      'To find the maximum element in a set',
      'To remove duplicate elements from a set'
    ],
    correctAnswer: 'To generate all possible subsets of a set',
    explanation: 'Power Set Generation via Bitmask uses binary masks to represent and generate every possible subset.'
  },

  {
    question: 'For a set with n elements, how many subsets are present in its power set?',
    options: [
      'n',
      'n * n',
      '2^n',
      'n + 1'
    ],
    correctAnswer: '2^n',
    explanation: 'Each element has two choices, included or excluded, so n elements produce 2^n subsets.'
  },

  {
    question: 'In bitmask subset generation, what does a set bit usually represent?',
    options: [
      'The element is ignored',
      'The element is included in the current subset',
      'The element is deleted from the input',
      'The element is sorted before output'
    ],
    correctAnswer: 'The element is included in the current subset',
    explanation: 'A bit value of 1 means the element at that position is selected for the current subset.'
  },

  {
    question: 'Which range of masks is used to generate all subsets of n elements?',
    options: [
      '1 to n',
      '0 to n - 1',
      '0 to 2^n - 1',
      '1 to 2n'
    ],
    correctAnswer: '0 to 2^n - 1',
    explanation: 'Every integer from 0 to 2^n - 1 represents one unique subset selection pattern.'
  },

  {
    question: 'What is the time complexity of generating the full power set using bitmasking?',
    options: [
      'O(n)',
      'O(log n)',
      'O(2^n)',
      'O(n * 2^n)'
    ],
    correctAnswer: 'O(n * 2^n)',
    explanation: 'There are 2^n masks, and each mask may require checking n bit positions.'
  },

  {
    question: 'What is the space complexity when all generated subsets are stored?',
    options: [
      'O(1)',
      'O(n)',
      'O(log n)',
      'O(n * 2^n)'
    ],
    correctAnswer: 'O(n * 2^n)',
    explanation: 'Storing the complete power set requires memory proportional to the total number of elements across all subsets.'
  },

  {
    question: 'What subset does the mask 0 represent in bitmask-based power set generation?',
    options: [
      'The empty subset',
      'The first single-element subset',
      'The full set',
      'An invalid subset'
    ],
    correctAnswer: 'The empty subset',
    explanation: 'Mask 0 has no set bits, so no elements are selected.'
  },

  {
    question: 'For the input [A, B, C], which subset is represented by the mask 101?',
    options: [
      '[A, B]',
      '[A, C]',
      '[B, C]',
      '[A, B, C]'
    ],
    correctAnswer: '[A, C]',
    explanation: 'In mask 101, the bits for positions 0 and 2 are set, so A and C are included.'
  },

  {
    question: 'Which of the following is a common application of power set generation?',
    options: [
      'Finding the shortest path in a graph',
      'Generating all possible feature combinations',
      'Balancing a binary search tree',
      'Sorting an array in ascending order'
    ],
    correctAnswer: 'Generating all possible feature combinations',
    explanation: 'Power set generation is useful when every possible selection or combination must be explored.'
  },

  {
    question: 'Why is bitmask power set generation not suitable for very large sets?',
    options: [
      'It cannot generate the empty subset',
      'It requires the input to be sorted',
      'The number of subsets grows exponentially',
      'It changes the original input values'
    ],
    correctAnswer: 'The number of subsets grows exponentially',
    explanation: 'A set with n elements has 2^n subsets, so the work becomes impractical as n grows large.'
  }
];
