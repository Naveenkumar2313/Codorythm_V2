export const kmpPatternMatchingQuiz = [
  {
    question: 'What is the primary purpose of KMP Pattern Matching?',
    options: [
      'To sort strings alphabetically',
      'To find occurrences of a pattern inside a text',
      'To compress repeated characters',
      'To reverse a string efficiently'
    ],
    correctAnswer: 'To find occurrences of a pattern inside a text',
    explanation: 'KMP Pattern Matching is used to search for one or more exact occurrences of a pattern in a larger text.'
  },

  {
    question: 'What does the LPS array store in the KMP algorithm?',
    options: [
      'The longest palindrome starting at each index',
      'The longest proper prefix that is also a suffix for each pattern prefix',
      'The sorted order of pattern characters',
      'The number of mismatches in the text'
    ],
    correctAnswer: 'The longest proper prefix that is also a suffix for each pattern prefix',
    explanation: 'The LPS array stores prefix-suffix information that helps KMP skip unnecessary comparisons.'
  },

  {
    question: 'What happens in KMP when a mismatch occurs after some pattern characters have matched?',
    options: [
      'The text pointer always moves backward',
      'The pattern pointer is updated using the LPS array',
      'The entire text is searched from the beginning',
      'The pattern is sorted before continuing'
    ],
    correctAnswer: 'The pattern pointer is updated using the LPS array',
    explanation: 'KMP uses the LPS value to continue from the best valid pattern position without rechecking known matches.'
  },

  {
    question: 'What is the time complexity of building the LPS array for a pattern of length m?',
    options: [
      'O(1)',
      'O(log m)',
      'O(m)',
      'O(m^2)'
    ],
    correctAnswer: 'O(m)',
    explanation: 'The LPS array is built using a linear scan of the pattern, so its time complexity is O(m).'
  },

  {
    question: 'What is the total time complexity of KMP for text length n and pattern length m?',
    options: [
      'O(n + m)',
      'O(n * m)',
      'O(log n)',
      'O(m^2 + n^2)'
    ],
    correctAnswer: 'O(n + m)',
    explanation: 'KMP builds the LPS array in O(m) time and searches the text in O(n) time.'
  },

  {
    question: 'What is the space complexity of the KMP algorithm?',
    options: [
      'O(1)',
      'O(m)',
      'O(n)',
      'O(n * m)'
    ],
    correctAnswer: 'O(m)',
    explanation: 'KMP stores an LPS array of size equal to the pattern length m.'
  },

  {
    question: 'For the pattern "abab", what is the LPS value at the last index?',
    options: [
      '0',
      '1',
      '2',
      '4'
    ],
    correctAnswer: '2',
    explanation: 'For "abab", the longest proper prefix that is also a suffix is "ab", whose length is 2.'
  },

  {
    question: 'Which of the following is a common application of KMP Pattern Matching?',
    options: [
      'Finding a word in a document',
      'Sorting a list of numbers',
      'Finding the shortest path in a graph',
      'Balancing a binary search tree'
    ],
    correctAnswer: 'Finding a word in a document',
    explanation: 'KMP is useful for exact substring search, such as finding a word or phrase inside a document.'
  },

  {
    question: 'What should happen if the pattern is longer than the text?',
    options: [
      'The algorithm should still report one match',
      'The algorithm should return no match',
      'The text should be reversed first',
      'The LPS array should be ignored'
    ],
    correctAnswer: 'The algorithm should return no match',
    explanation: 'A longer pattern cannot occur inside a shorter text, so no match should be reported.'
  },

  {
    question: 'Why is KMP generally faster than naive pattern matching for repetitive inputs?',
    options: [
      'It skips useful comparisons randomly',
      'It avoids rechecking characters that are already known to match',
      'It converts every string into numbers',
      'It searches only the first half of the text'
    ],
    correctAnswer: 'It avoids rechecking characters that are already known to match',
    explanation: 'KMP reuses prefix-suffix information from the LPS array to avoid repeated comparisons.'
  }
];
