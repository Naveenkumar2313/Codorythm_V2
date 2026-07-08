export const jobSequencingQuiz = [
  {
    question: 'Job Sequencing with Deadlines is based on which algorithmic paradigm?',
    options: ['Divide and Conquer', 'Greedy', 'Dynamic Programming', 'Backtracking'],
    correctAnswer: 'Greedy',
    explanation: 'Job Sequencing follows the Greedy strategy by selecting the highest-profit job first.'
  },
  {
    question: 'What is the primary objective of the Job Sequencing algorithm?',
    options: ['Minimize execution time', 'Maximize total profit', 'Sort jobs by deadline', 'Reduce memory usage'],
    correctAnswer: 'Maximize total profit',
    explanation: 'The goal is to schedule jobs to obtain the maximum possible profit.'
  },
  {
    question: 'Each job in the Job Sequencing problem takes how much execution time?',
    options: ['One unit', 'Two units', 'Variable time', 'Depends on profit'],
    correctAnswer: 'One unit',
    explanation: 'The standard Job Sequencing problem assumes every job requires exactly one unit of time.'
  },
  {
    question: 'How are jobs typically sorted before scheduling?',
    options: ['Increasing deadline', 'Decreasing deadline', 'Increasing profit', 'Decreasing profit'],
    correctAnswer: 'Decreasing profit',
    explanation: 'Jobs are sorted in descending order of profit so the most profitable jobs are considered first.'
  },
  {
    question: 'If the preferred deadline slot is already occupied, what does the algorithm do?',
    options: ['Discard the job', 'Move to the next slot', 'Search for the nearest previous free slot', 'Restart scheduling'],
    correctAnswer: 'Search for the nearest previous free slot',
    explanation: 'The algorithm checks earlier available slots before the job’s deadline.'
  },
  {
    question: 'Which data structure is commonly used to mark occupied time slots?',
    options: ['Queue', 'Stack', 'Boolean array', 'Linked List'],
    correctAnswer: 'Boolean array',
    explanation: 'A boolean array is commonly used to track whether each time slot is occupied.'
  },
  {
    question: 'What is the time complexity of the standard greedy Job Sequencing algorithm?',
    options: ['O(log n)', 'O(n)', 'O(n²)', 'O(n log n)'],
    correctAnswer: 'O(n²)',
    explanation: 'Sorting takes O(n log n), but checking slots for every job may lead to O(n²) in the worst case.'
  },
  {
    question: 'Which job is selected first by the greedy algorithm?',
    options: ['Job with earliest deadline', 'Job with lowest profit', 'Job with highest profit', 'Job with shortest ID'],
    correctAnswer: 'Job with highest profit',
    explanation: 'The greedy approach always prioritizes the job with the highest profit.'
  },
  {
    question: 'What happens if no free slot exists before a job’s deadline?',
    options: ['The deadline is extended', 'The job is skipped', 'The schedule is restarted', 'The job replaces another job'],
    correctAnswer: 'The job is skipped',
    explanation: 'If no suitable slot is available, the job cannot be scheduled.'
  },
  {
    question: 'What is the space complexity of the standard Job Sequencing algorithm?',
    options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
    correctAnswer: 'O(n)',
    explanation: 'An additional array is used to store the occupied time slots, requiring O(n) extra space.'
  }
];