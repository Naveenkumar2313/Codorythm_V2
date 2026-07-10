export const mergeSortQuiz = [
  { question: 'What is the main idea of merge sort?', options: ['Swap adjacent elements', 'Divide and conquer', 'Use a heap', 'Search from both ends'], correctAnswer: 'Divide and conquer', explanation: 'Merge sort repeatedly splits the array into halves and then merges the sorted halves.' },
  { question: 'What is the time complexity of merge sort?', options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'], correctAnswer: 'O(n log n)', explanation: 'Each level of recursion processes all elements once, and there are log n levels.' },
  { question: 'What is the extra space complexity of merge sort?', options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'], correctAnswer: 'O(n)', explanation: 'Temporary space is needed while merging subarrays.' },
  { question: 'Is merge sort stable?', options: ['No', 'Yes', 'Only for small arrays', 'Only for descending order'], correctAnswer: 'Yes', explanation: 'Merge sort preserves the relative order of equal elements.' },
  { question: 'When do we stop dividing in merge sort?', options: ['When the array length is zero', 'When the subarray has one element', 'When the array is sorted', 'When the middle is found'], correctAnswer: 'When the subarray has one element', explanation: 'A single-element subarray is already sorted.' },
  { question: 'Which operation combines two sorted halves?', options: ['Partition', 'Merge', 'Swap', 'Rotate'], correctAnswer: 'Merge', explanation: 'The merge step combines two sorted halves into one sorted array.' },
  { question: 'Which of these is a common use of merge sort?', options: ['Finding a target in a sorted array', 'Sorting linked lists', 'Hashing strings', 'Balancing trees'], correctAnswer: 'Sorting linked lists', explanation: 'Merge sort works well for linked lists because it does not rely on random access.' },
  { question: 'How many halves does merge sort split an array into at each recursive step?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'Two', explanation: 'Merge sort splits the array into left and right halves.' }
];


