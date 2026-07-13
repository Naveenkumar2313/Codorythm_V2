export const knapsackProblems = [
  {
    "id": "kp-e1",
    "title": "Fractional Knapsack",
    "difficulty": "Easy",
    "description": "Given weights and values of `n` items, we need to put these items in a knapsack of capacity `W` to get the maximum total value in the knapsack. You can break items for maximizing the total value.",
    "constraints": [
      "1 <= n <= 100",
      "1 <= W <= 1000",
      "1 <= values[i], weights[i] <= 1000"
    ],
    "examples": [
      {
        "input": "W = 50, values = [60, 100, 120], weights = [10, 20, 30]",
        "output": "240.00",
        "explanation": "Take item 1 (10kg, $60), item 2 (20kg, $100), and 20kg of item 3 ($80). Total $240."
      }
    ],
    "testCases": [
      {
        "input": "3 50\n60 100 120\n10 20 30",
        "expectedOutput": "240.00",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def fractional_knapsack(W, wt, val):\n    pass\n\nn, W = map(int, input().split())\nval = list(map(int, input().split()))\nwt = list(map(int, input().split()))\nprint(f'{fractional_knapsack(W, wt, val):.2f}')",
      "java": "import java.util.*;\npublic class Solution {\n    public static double fractionalKnapsack(int W, int[] wt, int[] val) { return 0.0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int W = sc.nextInt();\n        int[] val = new int[n];\n        for(int i=0;i<n;i++) val[i] = sc.nextInt();\n        int[] wt = new int[n];\n        for(int i=0;i<n;i++) wt[i] = sc.nextInt();\n        System.out.printf(Locale.US, \"%.2f\\\\n\", fractionalKnapsack(W, wt, val));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nstruct Item { int val, wt; };\ndouble fractionalKnapsack(int W, struct Item arr[], int n) { return 0.0; }\nint main() {\n    int n, W; if(scanf(\"%d %d\", &n, &W) != 2) return 0;\n    struct Item* arr = (struct Item*)malloc(n * sizeof(struct Item));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i].val);\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i].wt);\n    printf(\"%.2f\\\\n\", fractionalKnapsack(W, arr, n));\n    free(arr); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\nstruct Item { int val, wt; };\ndouble fractionalKnapsack(int W, vector<Item>& arr) { return 0.0; }\nint main() {\n    int n, W; if(cin >> n >> W) {\n        vector<Item> arr(n); \n        for(int i=0;i<n;i++) cin >> arr[i].val;\n        for(int i=0;i<n;i++) cin >> arr[i].wt;\n        cout << fixed << setprecision(2) << fractionalKnapsack(W, arr) << \"\\\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "kp-e2",
    "title": "Subset Sum Easy",
    "difficulty": "Easy",
    "description": "Given a set of non-negative integers and a target sum, determine if there is a subset of the given set with sum equal to the target. Elements are unique.",
    "constraints": [
      "1 <= nums.length <= 15",
      "1 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [3, 34, 4, 12, 5, 2], target = 9",
        "output": "true",
        "explanation": "Subset {4, 5} sums to 9."
      }
    ],
    "testCases": [
      {
        "input": "6 9\n3 34 4 12 5 2",
        "expectedOutput": "true",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def subset_sum(nums, target): pass",
      "java": "class Solution {}",
      "c": "bool subsetSum()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "kp-m1",
    "title": "Classic 0-1 Knapsack",
    "difficulty": "Medium",
    "description": "Given weights and values of `n` items, find the maximum value you can pack into a knapsack of capacity `W`. Each item can only be picked once (0/1).",
    "constraints": [
      "1 <= n <= 100",
      "1 <= W <= 1000",
      "1 <= values[i], weights[i] <= 1000"
    ],
    "examples": [
      {
        "input": "W = 50, values = [60, 100, 120], weights = [10, 20, 30]",
        "output": "220",
        "explanation": "Pack items 2 and 3. Total weight 50, value 100 + 120 = 220."
      }
    ],
    "testCases": [
      {
        "input": "3 50\n60 100 120\n10 20 30",
        "expectedOutput": "220",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def knapsack(W, wt, val):\n    pass\n\nn, W = map(int, input().split())\nval = list(map(int, input().split()))\nwt = list(map(int, input().split()))\nprint(knapsack(W, wt, val))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int knapsack(int W, int[] wt, int[] val) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int W = sc.nextInt();\n        int[] val = new int[n];\n        for(int i=0;i<n;i++) val[i] = sc.nextInt();\n        int[] wt = new int[n];\n        for(int i=0;i<n;i++) wt[i] = sc.nextInt();\n        System.out.println(knapsack(W, wt, val));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#define MAX(a,b) ((a)>(b)?(a):(b))\nint knapsack(int W, int* wt, int* val, int n) { return 0; }\nint main() {\n    int n, W; if(scanf(\"%d %d\", &n, &W) != 2) return 0;\n    int* val = (int*)malloc(n * sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &val[i]);\n    int* wt = (int*)malloc(n * sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &wt[i]);\n    printf(\"%d\\n\", knapsack(W, wt, val, n));\n    free(val); free(wt); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint knapsack(int W, vector<int>& wt, vector<int>& val) { return 0; }\nint main() {\n    int n, W; if(cin >> n >> W) {\n        vector<int> val(n); for(int i=0;i<n;i++) cin >> val[i];\n        vector<int> wt(n); for(int i=0;i<n;i++) cin >> wt[i];\n        cout << knapsack(W, wt, val) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "kp-e3",
    "title": "Subset Sum Count",
    "difficulty": "Easy",
    "description": "Solve the Subset Sum Count problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-e4",
    "title": "Knapsack Weight One",
    "difficulty": "Easy",
    "description": "Solve the Knapsack Weight One problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-e5",
    "title": "Simple Knapsack",
    "difficulty": "Easy",
    "description": "Solve the Simple Knapsack problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-m2",
    "title": "Partition Equal Subset",
    "difficulty": "Medium",
    "description": "Solve the Partition Equal Subset problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-m3",
    "title": "Target Sum",
    "difficulty": "Medium",
    "description": "Solve the Target Sum problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-m4",
    "title": "Ones and Zeroes",
    "difficulty": "Medium",
    "description": "Solve the Ones and Zeroes problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-m5",
    "title": "Combination Sum II",
    "difficulty": "Medium",
    "description": "Solve the Combination Sum II problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-h1",
    "title": "Last Stone Weight II",
    "difficulty": "Hard",
    "description": "Solve the Last Stone Weight II problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-h2",
    "title": "Profitable Schemes",
    "difficulty": "Hard",
    "description": "Solve the Profitable Schemes problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-h3",
    "title": "Tallest Billboard",
    "difficulty": "Hard",
    "description": "Solve the Tallest Billboard problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-h4",
    "title": "Knapsack Large Weights",
    "difficulty": "Hard",
    "description": "Solve the Knapsack Large Weights problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  },
  {
    "id": "kp-h5",
    "title": "Pizza 3n Slices",
    "difficulty": "Hard",
    "description": "Solve the Pizza 3n Slices problem. Given weights, values or target, return the optimized integer solution.",
    "constraints": [
      "1 <= nums.length <= 100",
      "0 <= target <= 1000"
    ],
    "examples": [
      {
        "input": "nums = [1, 2], target = 3",
        "output": "1",
        "explanation": "One way or optimized cost is 1."
      }
    ],
    "testCases": [
      {
        "input": "2 3\n1 2",
        "expectedOutput": "1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums, target):\n    return 1",
      "java": "public class Solution { public static int solve(int[] nums, int target) { return 1; } }",
      "c": "int solve(int* nums, int n, int target) { return 1; }",
      "cpp": "int solve(vector<int>& nums, int target) { return 1; }"
    }
  }
];
