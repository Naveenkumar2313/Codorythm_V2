export const binarySearchOnAnswerQuiz = [

{
question: 'What is Binary Search on Answer primarily used for?',
options: [
'Searching elements in an unsorted array',
'Optimization problems with a monotonic answer space',
'Sorting an array',
'Traversing graphs'
],
correctAnswer: 'Optimization problems with a monotonic answer space',
explanation: 'Binary Search on Answer is used to efficiently find the minimum or maximum feasible answer in optimization problems.'
},

{
question: 'What is the first step when applying Binary Search on Answer?',
options: [
'Sort the array',
'Find the target element',
'Identify the search space for possible answers',
'Create a hash table'
],
correctAnswer: 'Identify the search space for possible answers',
explanation: 'The algorithm begins by determining the minimum and maximum possible answers.'
},

{
question: 'What is a feasibility function?',
options: [
'A function that sorts the data',
'A function that validates whether a candidate answer satisfies the problem constraints',
'A function that calculates the average',
'A recursive helper function'
],
correctAnswer: 'A function that validates whether a candidate answer satisfies the problem constraints',
explanation: 'The feasibility function determines whether the current answer is valid.'
},

{
question: 'Binary Search on Answer works correctly only when the answer space is:',
options: [
'Random',
'Sorted alphabetically',
'Monotonic',
'Circular'
],
correctAnswer: 'Monotonic',
explanation: 'The validity of answers must change in a monotonic manner for binary search to work.'
},

{
question: 'If the current answer is feasible while searching for the minimum possible answer, what should be done next?',
options: [
'Search the higher half',
'Return immediately',
'Search the lower half',
'Restart the search'
],
correctAnswer: 'Search the lower half',
explanation: 'A feasible answer may not be the minimum, so continue searching the lower half.'
},

{
question: 'What is the typical time complexity of Binary Search on Answer?',
options: [
'O(n²)',
'O(log Answer Range × Feasibility Function)',
'O(n log n)',
'O(1)'
],
correctAnswer: 'O(log Answer Range × Feasibility Function)',
explanation: 'Each binary search iteration performs one feasibility check.'
},

{
question: 'Which of the following is a classic Binary Search on Answer problem?',
options: [
'Bubble Sort',
'Depth First Search',
'Koko Eating Bananas',
'Selection Sort'
],
correctAnswer: 'Koko Eating Bananas',
explanation: 'Koko Eating Bananas is one of the most popular Binary Search on Answer interview problems.'
},

{
question: 'Why do we store the current feasible answer during binary search?',
options: [
'To reduce memory usage',
'To avoid sorting',
'Because a better feasible answer may still exist',
'To improve recursion'
],
correctAnswer: 'Because a better feasible answer may still exist',
explanation: 'The current feasible answer is stored while continuing the search for a more optimal one.'
},

{
question: 'Which condition is most important for applying Binary Search on Answer?',
options: [
'The input array must be sorted',
'The answer space must be monotonic',
'The array must contain distinct elements',
'The problem must use recursion'
],
correctAnswer: 'The answer space must be monotonic',
explanation: 'Binary Search on Answer depends on monotonic feasibility, not on a sorted input array.'
},

{
question: 'Which mistake commonly leads to an infinite loop in Binary Search on Answer?',
options: [
'Using arrays',
'Updating low and high incorrectly',
'Using recursion',
'Using integers'
],
correctAnswer: 'Updating low and high incorrectly',
explanation: 'Incorrect updates to the search boundaries can prevent the loop from terminating.'
}

];