const quizData = [
    {
        question:"What does the classic 3Sum Problem usually ask us to find?",
        options:[
            "All pairs whose difference is zero",
            "All unique triplets whose sum is zero",
            "The maximum product of three numbers",
            "The median of every three consecutive elements"
        ],
        answer:"All unique triplets whose sum is zero",
        explanation:"The classic 3Sum Problem asks for unique groups of three values that add up to zero."
    },
    {
        question:"Why is sorting useful in the optimized 3Sum algorithm?",
        options:[
            "It makes the array stable",
            "It allows binary tree traversal",
            "It allows a fixed element and two pointers to search efficiently",
            "It removes all negative numbers"
        ],
        answer:"It allows a fixed element and two pointers to search efficiently",
        explanation:"After sorting, one value can be fixed and the remaining two values can be found using the two-pointer technique."
    },
    {
        question:"What is the time complexity of the standard optimized 3Sum solution using sorting and two pointers?",
        options:[
            "O(log n)",
            "O(n)",
            "O(n log n)",
            "O(n^2)"
        ],
        answer:"O(n^2)",
        explanation:"The algorithm sorts the array and then uses a nested fixed-index plus two-pointer scan, giving O(n^2) total time."
    },
    {
        question:"What is the auxiliary space complexity of 3Sum if the array is sorted in place and output space is ignored?",
        options:[
            "O(1)",
            "O(log n)",
            "O(n)",
            "O(n^2)"
        ],
        answer:"O(1)",
        explanation:"Only a few variables and pointers are required if the input array can be sorted in place and the result list is not counted."
    },
    {
        question:"Which step helps prevent duplicate triplets in the 3Sum output?",
        options:[
            "Always moving only the left pointer",
            "Skipping equal values after a triplet is found",
            "Sorting in descending order only",
            "Stopping after the first valid triplet"
        ],
        answer:"Skipping equal values after a triplet is found",
        explanation:"Duplicate fixed values and duplicate pointer values must be skipped to return each value triplet only once."
    },
    {
        question:"For nums = [-1, 0, 1, 2, -1, -4], which set of unique zero-sum triplets is correct?",
        options:[
            "[-1, -1, 2] and [-1, 0, 1]",
            "[-4, 2, 2] and [0, 0, 0]",
            "[-1, 1, 2] only",
            "[-4, 0, 4] only"
        ],
        answer:"[-1, -1, 2] and [-1, 0, 1]",
        explanation:"After sorting, the two unique triplets that sum to zero are [-1, -1, 2] and [-1, 0, 1]."
    },
    {
        question:"What should the classic 3Sum algorithm return for an array with fewer than three elements?",
        options:[
            "An empty list",
            "The original array",
            "A list containing zero",
            "A runtime error"
        ],
        answer:"An empty list",
        explanation:"No triplet can exist if the array has fewer than three elements."
    },
    {
        question:"If the current sum is smaller than the target in a sorted two-pointer 3Sum scan, what should happen?",
        options:[
            "Move the left pointer to the right",
            "Move the right pointer to the left",
            "Restart the entire algorithm",
            "Return immediately"
        ],
        answer:"Move the left pointer to the right",
        explanation:"Moving the left pointer right increases the sum because the array is sorted."
    },
    {
        question:"Which is a disadvantage of the optimized 3Sum approach?",
        options:[
            "It cannot handle negative numbers",
            "It requires the data to be sorted or copied before searching",
            "It always uses O(n^3) memory",
            "It works only for arrays of length exactly three"
        ],
        answer:"It requires the data to be sorted or copied before searching",
        explanation:"The two-pointer method depends on sorted order, which may modify the input unless a copy is used."
    },
    {
        question:"Which problem is a natural application or extension of the 3Sum technique?",
        options:[
            "3Sum Closest",
            "Depth First Search",
            "Dijkstra's Algorithm",
            "Topological Sorting"
        ],
        answer:"3Sum Closest",
        explanation:"3Sum Closest fixes one number and uses two pointers to find a triplet sum nearest to a target."
    }
];

export default quizData;
