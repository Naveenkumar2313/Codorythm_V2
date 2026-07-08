export const subarraySumQuiz = [
  {
    question: 'What is the primary goal of the Subarray Sum Equals K algorithm?',
    options: [
      'Find the largest element in the array',
      'Count the number of contiguous subarrays whose sum equals K',
      'Sort the array',
      'Find the maximum subarray sum'
    ],
    correctAnswer: 'Count the number of contiguous subarrays whose sum equals K',
    explanation: 'The algorithm counts all contiguous subarrays whose sum is exactly equal to the target value K.'
  },

  {
    question: 'Which technique is commonly used to solve Subarray Sum Equals K efficiently?',
    options: [
      'Binary Search',
      'Prefix Sum and Hash Map',
      'Heap',
      'Depth First Search'
    ],
    correctAnswer: 'Prefix Sum and Hash Map',
    explanation: 'The optimal O(n) solution uses Prefix Sum along with a Hash Map to store prefix sum frequencies.'
  },

  {
    question: 'What is the time complexity of the optimal Subarray Sum Equals K algorithm?',
    options: [
      'O(n²)',
      'O(log n)',
      'O(n)',
      'O(n log n)'
    ],
    correctAnswer: 'O(n)',
    explanation: 'Each element is processed only once while performing constant-time hash map operations.'
  },

  {
    question: 'What is the space complexity of the optimal solution?',
    options: [
      'O(1)',
      'O(log n)',
      'O(n)',
      'O(n²)'
    ],
    correctAnswer: 'O(n)',
    explanation: 'The hash map stores prefix sums, which may grow up to O(n) in the worst case.'
  },

  {
    question: 'Why is a Hash Map used in the algorithm?',
    options: [
      'To sort the array',
      'To store prefix sum frequencies',
      'To reverse the array',
      'To remove duplicate elements'
    ],
    correctAnswer: 'To store prefix sum frequencies',
    explanation: 'The hash map stores the frequency of each prefix sum, allowing constant-time lookups.'
  },

  {
    question: 'Why is the Hash Map initially initialized with {0 : 1}?',
    options: [
      'To store the first array element',
      'To count subarrays starting from index 0',
      'To improve sorting speed',
      'To reduce memory usage'
    ],
    correctAnswer: 'To count subarrays starting from index 0',
    explanation: 'If the prefix sum itself equals K, the initial entry {0 : 1} correctly counts that subarray.'
  },

  {
    question: 'Which expression is checked during each iteration to determine whether a valid subarray exists?',
    options: [
      'prefixSum + K',
      'prefixSum × K',
      'prefixSum - K',
      'K - prefixSum'
    ],
    correctAnswer: 'prefixSum - K',
    explanation: 'If (prefixSum - K) already exists in the hash map, a valid subarray ending at the current index is found.'
  },

  {
    question: 'Can the optimal Prefix Sum approach handle negative numbers?',
    options: [
      'No',
      'Only if the array is sorted',
      'Yes',
      'Only for positive integers'
    ],
    correctAnswer: 'Yes',
    explanation: 'Unlike the sliding window technique, the Prefix Sum + Hash Map approach works correctly even with negative numbers.'
  },

  {
    question: 'Why is the traditional Sliding Window technique not suitable for arrays containing negative numbers?',
    options: [
      'It requires extra memory',
      'The window size cannot change',
      'Negative values break the monotonic increase/decrease of the window sum',
      'It only works on sorted arrays'
    ],
    correctAnswer: 'Negative values break the monotonic increase/decrease of the window sum',
    explanation: 'With negative numbers, expanding or shrinking the window does not always move the sum in a predictable direction.'
  },

  {
    question: 'Which type of subarray is considered in the Subarray Sum Equals K problem?',
    options: [
      'Any subset of elements',
      'Contiguous subarray',
      'Only sorted subarrays',
      'Non-contiguous elements'
    ],
    correctAnswer: 'Contiguous subarray',
    explanation: 'A subarray always consists of consecutive elements in the original array.'
  }
];