export const maximumXorViaTrieQuiz = [
  {
    question: 'What is the main goal of Maximum XOR via Trie?',
    options: [
      'Find the minimum number in an array',
      'Find the maximum XOR value formed by two array elements',
      'Sort numbers by their binary representation',
      'Count the number of set bits in every number'
    ],
    correctAnswer: 'Find the maximum XOR value formed by two array elements',
    explanation: 'The algorithm finds the largest possible XOR value that can be produced by choosing two numbers from the array.'
  },

  {
    question: 'What type of trie is used in Maximum XOR via Trie?',
    options: [
      'Character trie',
      'Binary trie',
      'Suffix trie',
      'Compressed word trie'
    ],
    correctAnswer: 'Binary trie',
    explanation: 'Each edge in the trie represents one bit, either 0 or 1, from the binary form of a number.'
  },

  {
    question: 'Why does the algorithm prefer the opposite bit while searching the trie?',
    options: [
      'Opposite bits make XOR produce 1',
      'Opposite bits always reduce the number',
      'Opposite bits sort the trie automatically',
      'Opposite bits remove duplicates'
    ],
    correctAnswer: 'Opposite bits make XOR produce 1',
    explanation: 'XOR gives 1 when two bits are different, so choosing the opposite bit helps maximize the XOR result.'
  },

  {
    question: 'Why are bits usually processed from most significant to least significant?',
    options: [
      'Higher bits have greater value in the final XOR result',
      'Lower bits are not part of XOR',
      'The trie cannot store lower bits',
      'It avoids storing any nodes'
    ],
    correctAnswer: 'Higher bits have greater value in the final XOR result',
    explanation: 'Maximizing a higher bit has a larger impact on the final value than maximizing a lower bit.'
  },

  {
    question: 'What is the time complexity of Maximum XOR via Trie for n numbers and B bits?',
    options: [
      'O(n)',
      'O(B)',
      'O(n * B)',
      'O(n^2)'
    ],
    correctAnswer: 'O(n * B)',
    explanation: 'Each number is inserted and searched through B bit positions, giving O(n * B) time.'
  },

  {
    question: 'What is the worst-case space complexity of the binary trie?',
    options: [
      'O(1)',
      'O(B)',
      'O(n * B)',
      'O(n^2)'
    ],
    correctAnswer: 'O(n * B)',
    explanation: 'In the worst case, many numbers may create new trie nodes across B bit positions.'
  },

  {
    question: 'What is the maximum XOR value for the array [3, 10, 5, 25, 2, 8]?',
    options: [
      '15',
      '24',
      '28',
      '31'
    ],
    correctAnswer: '28',
    explanation: 'The maximum XOR is 5 XOR 25 = 28.'
  },

  {
    question: 'What should the algorithm return if the array has fewer than two numbers?',
    options: [
      '0',
      '-1',
      'The only number',
      'The number of bits'
    ],
    correctAnswer: '0',
    explanation: 'At least two numbers are needed to form a pair, so returning 0 is a common safe result.'
  },

  {
    question: 'Which is an advantage of using a trie over brute force for this problem?',
    options: [
      'It avoids comparing every possible pair directly',
      'It removes the need for binary representation',
      'It sorts the array in constant time',
      'It works only for strings'
    ],
    correctAnswer: 'It avoids comparing every possible pair directly',
    explanation: 'The trie lets each number find a strong XOR partner in O(B) time instead of checking all pairs.'
  },

  {
    question: 'Which case needs special care in Maximum XOR via Trie implementations?',
    options: [
      'Arrays containing only positive non-negative integers',
      'Negative numbers because of signed binary representation',
      'Arrays with more than one element',
      'Numbers that contain zero bits'
    ],
    correctAnswer: 'Negative numbers because of signed binary representation',
    explanation: 'Negative numbers use signed representations that may require adjusted bit handling.'
  }
];
