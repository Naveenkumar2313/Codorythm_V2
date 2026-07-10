export const longestPalindromicSubstringQuiz = [
  {
    question: 'What is the goal of the Longest Palindromic Substring problem?',
    options: [
      'Find the longest sorted part of a string',
      'Find the longest continuous substring that is a palindrome',
      'Find the longest subsequence that is a palindrome',
      'Find the most repeated character in a string'
    ],
    correctAnswer: 'Find the longest continuous substring that is a palindrome',
    explanation: 'The problem asks for a contiguous substring that reads the same forward and backward.'
  },

  {
    question: 'What is a palindrome?',
    options: [
      'A string that contains only unique characters',
      'A string that reads the same forward and backward',
      'A string sorted in alphabetical order',
      'A string with an even number of characters only'
    ],
    correctAnswer: 'A string that reads the same forward and backward',
    explanation: 'A palindrome has matching characters from both ends toward the center.'
  },

  {
    question: 'What is the key idea of the expand around center approach?',
    options: [
      'Sort the string before searching',
      'Expand outward from possible palindrome centers',
      'Remove duplicate characters first',
      'Compare every string with its reverse using a hash map'
    ],
    correctAnswer: 'Expand outward from possible palindrome centers',
    explanation: 'Every palindrome has a center, so expanding from each possible center can discover the longest palindrome.'
  },

  {
    question: 'Why must the algorithm check both one-character and two-character centers?',
    options: [
      'To support uppercase and lowercase letters',
      'To handle both odd-length and even-length palindromes',
      'To remove spaces from the string',
      'To sort characters correctly'
    ],
    correctAnswer: 'To handle both odd-length and even-length palindromes',
    explanation: 'Odd-length palindromes have one center character, while even-length palindromes have two center characters.'
  },

  {
    question: 'What is the worst-case time complexity of expand around center for a string of length n?',
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n^2)'
    ],
    correctAnswer: 'O(n^2)',
    explanation: 'There are O(n) centers, and each center can expand up to O(n) characters in the worst case.'
  },

  {
    question: 'What is the auxiliary space complexity of the center expansion approach?',
    options: [
      'O(1)',
      'O(n)',
      'O(n^2)',
      'O(log n)'
    ],
    correctAnswer: 'O(1)',
    explanation: 'The algorithm stores only indexes and lengths, excluding the returned substring.'
  },

  {
    question: 'What is a valid longest palindromic substring of "babad"?',
    options: [
      'bad',
      'bab',
      'bd',
      'baba'
    ],
    correctAnswer: 'bab',
    explanation: '"bab" is a palindrome and has length 3. "aba" is also valid, but it is not listed here.'
  },

  {
    question: 'What should the algorithm return for the input "cbbd"?',
    options: [
      'c',
      'bb',
      'bdb',
      'cbbd'
    ],
    correctAnswer: 'bb',
    explanation: 'The longest palindromic substring in "cbbd" is the even-length palindrome "bb".'
  },

  {
    question: 'Which mistake commonly causes incorrect results in this algorithm?',
    options: [
      'Checking even-length palindromes',
      'Checking only odd-length centers',
      'Using indexes in the string',
      'Returning a substring'
    ],
    correctAnswer: 'Checking only odd-length centers',
    explanation: 'If only odd centers are checked, even-length answers like "bb" can be missed.'
  },

  {
    question: 'When is the expand around center approach most appropriate?',
    options: [
      'When a simple O(n^2) solution is acceptable',
      'When the string must be sorted first',
      'When only palindromic subsequences are needed',
      'When approximate matching is required'
    ],
    correctAnswer: 'When a simple O(n^2) solution is acceptable',
    explanation: 'Center expansion is clear, efficient enough for moderate input sizes, and directly solves the substring problem.'
  }
];
