const quizData = [
  {
    question: "What is the primary goal of the Search in Rotated Sorted Array algorithm?",
    options: [
      "Sort an array",
      "Search efficiently in a rotated sorted array",
      "Merge two arrays",
      "Reverse an array"
    ],
    answer: "Search efficiently in a rotated sorted array",
    explanation: "The algorithm searches for a target element in a rotated sorted array using Binary Search."
  },
  {
    question: "Which algorithm is modified to solve this problem?",
    options: [
      "Bubble Sort",
      "Selection Sort",
      "Binary Search",
      "Linear Search"
    ],
    answer: "Binary Search",
    explanation: "The algorithm extends Binary Search by determining which half is sorted."
  },
  {
    question: "What is the average time complexity?",
    options: [
      "O(n)",
      "O(log n)",
      "O(n log n)",
      "O(n²)"
    ],
    answer: "O(log n)",
    explanation: "The search space is halved during each iteration."
  },
  {
    question: "What is the worst-case space complexity?",
    options: [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n²)"
    ],
    answer: "O(1)",
    explanation: "Only a few variables are required."
  },
  {
    question: "Which property always holds during every iteration?",
    options: [
      "Both halves are sorted",
      "At least one half is sorted",
      "Neither half is sorted",
      "The pivot is always in the middle"
    ],
    answer: "At least one half is sorted",
    explanation: "This property enables Binary Search to work."
  },
  {
    question: "What should happen if the middle element equals the target?",
    options: [
      "Continue searching",
      "Return the index",
      "Move left pointer",
      "Move right pointer"
    ],
    answer: "Return the index",
    explanation: "The target has been found."
  },
  {
    question: "Which data structure is required?",
    options: [
      "Linked List",
      "Binary Tree",
      "Array",
      "Stack"
    ],
    answer: "Array",
    explanation: "The algorithm operates on arrays."
  },
  {
    question: "Which of the following is a common mistake?",
    options: [
      "Checking the middle element",
      "Updating pointers incorrectly",
      "Using Binary Search",
      "Comparing values"
    ],
    answer: "Updating pointers incorrectly",
    explanation: "Incorrect pointer updates may skip valid search ranges."
  },
  {
    question: "If the target is absent, what should be returned?",
    options: [
      "-1",
      "0",
      "1",
      "Array length"
    ],
    answer: "-1",
    explanation: "Returning -1 indicates that the element does not exist."
  },
  {
    question: "Why is this algorithm preferred over linear search?",
    options: [
      "Uses recursion",
      "Consumes more memory",
      "Has logarithmic search time",
      "Works only for small arrays"
    ],
    answer: "Has logarithmic search time",
    explanation: "O(log n) is significantly faster than O(n) for large arrays."
  }
];

export default quizData;