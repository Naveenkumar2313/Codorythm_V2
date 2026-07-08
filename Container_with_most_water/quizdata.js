export const containerWithMostWaterQuiz = [
  { question: 'Which technique is primarily used to solve the Container With Most Water problem efficiently?', options: ['Binary Search', 'Two Pointers', 'Breadth First Search', 'Dynamic Programming'], correctAnswer: 'Two Pointers', explanation: 'The optimal solution uses the Two Pointer technique to achieve O(n) time complexity.' },

  { question: 'What is the time complexity of the optimal Container With Most Water algorithm?', options: ['O(n²)', 'O(log n)', 'O(n)', 'O(n log n)'], correctAnswer: 'O(n)', explanation: 'The two pointers traverse the array only once, resulting in O(n) time complexity.' },

  { question: 'How is the area of water between two lines calculated?', options: ['height[left] + height[right]', 'max(height[left], height[right]) × width', 'min(height[left], height[right]) × width', 'width²'], correctAnswer: 'min(height[left], height[right]) × width', explanation: 'The shorter line determines the water level, so area = minimum height × width.' },

  { question: 'Why is the shorter pointer moved after calculating the area?', options: ['To reduce memory usage', 'To increase the width', 'To potentially find a taller line and increase the area', 'To sort the array'], correctAnswer: 'To potentially find a taller line and increase the area', explanation: 'Moving the taller line cannot improve the current limiting height, so only the shorter line is moved.' },

  { question: 'What is the initial position of the two pointers?', options: ['Both at the middle', 'Both at the beginning', 'Left at first element and right at last element', 'Random positions'], correctAnswer: 'Left at first element and right at last element', explanation: 'The algorithm starts with the widest possible container by placing pointers at both ends.' },

  { question: 'What is the space complexity of the optimal Container With Most Water algorithm?', options: ['O(n)', 'O(log n)', 'O(n²)', 'O(1)'], correctAnswer: 'O(1)', explanation: 'Only a few variables are used regardless of input size, resulting in constant space complexity.' },

  { question: 'Which value limits the amount of water a container can hold?', options: ['The taller line', 'The shorter line', 'The average of both heights', 'The larger index'], correctAnswer: 'The shorter line', explanation: 'Water cannot rise above the height of the shorter vertical line.' },

  { question: 'What happens to the width of the container during each iteration?', options: ['It increases', 'It decreases', 'It remains constant', 'It doubles'], correctAnswer: 'It decreases', explanation: 'Since one pointer moves inward every iteration, the distance between the pointers becomes smaller.' },

  { question: 'The optimal solution for Container With Most Water belongs to which algorithmic strategy?', options: ['Backtracking', 'Greedy', 'Divide and Conquer', 'Branch and Bound'], correctAnswer: 'Greedy', explanation: 'The algorithm greedily moves the pointer at the shorter line to maximize the chance of finding a larger area.' },

  { question: 'What is the maximum possible number of pointer movements in the optimal algorithm for an array of size n?', options: ['n²', 'n - 1', 'log₂(n)', '2n²'], correctAnswer: 'n - 1', explanation: 'Each pointer moves inward without revisiting positions, so there are at most n - 1 pointer movements.' },
];