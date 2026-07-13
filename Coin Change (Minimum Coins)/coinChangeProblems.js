export const coinChangeProblems = [
  {
    "id": "cc-e1",
    "title": "Coins One and Two",
    "difficulty": "Easy",
    "description": "Given an amount `n`, find the minimum number of coins needed to form `n` using only coins of value 1 and 2.",
    "constraints": [
      "0 <= n <= 10^9"
    ],
    "examples": [
      {
        "input": "n = 5",
        "output": "3",
        "explanation": "2 + 2 + 1 = 5 (3 coins)."
      }
    ],
    "testCases": [
      {
        "input": "5",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def min_coins_one_two(n):\n    pass\n\nn = int(input())\nprint(min_coins_one_two(n))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int minCoinsOneTwo(int n) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) System.out.println(minCoinsOneTwo(sc.nextInt()));\n    }\n}",
      "c": "#include <stdio.h>\nint minCoinsOneTwo(int n) { return 0; }\nint main() {\n    int n; if(scanf(\"%d\", &n) == 1) printf(\"%d\\\\n\", minCoinsOneTwo(n));\n    return 0;\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint minCoinsOneTwo(int n) { return 0; }\nint main() {\n    int n; if(cin >> n) cout << minCoinsOneTwo(n) << \"\\\\n\";\n    return 0;\n}"
    }
  },
  {
    "id": "cc-m1",
    "title": "Classic Coin Change",
    "difficulty": "Medium",
    "description": "Given an integer array `coins` representing coin denominations and an integer `amount`, return the fewest number of coins that you need to make up that amount. If that amount cannot be made up, return `-1`.",
    "constraints": [
      "1 <= coins.length <= 12",
      "1 <= coins[i] <= 2^31 - 1",
      "0 <= amount <= 10^4"
    ],
    "examples": [
      {
        "input": "coins = [1,2,5], amount = 11",
        "output": "3",
        "explanation": "11 = 5 + 5 + 1."
      }
    ],
    "testCases": [
      {
        "input": "3\n1 2 5\n11",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def coin_change(coins, amount):\n    pass\n\nn = int(input())\ncoins = list(map(int, input().split()))\namount = int(input())\nprint(coin_change(coins, amount))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int coinChange(int[] coins, int amount) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] coins = new int[n];\n        for(int i=0;i<n;i++) coins[i] = sc.nextInt();\n        int amount = sc.nextInt();\n        System.out.println(coinChange(coins, amount));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint coinChange(int* coins, int coinsSize, int amount) { return 0; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* coins = (int*)malloc(n * sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &coins[i]);\n    int amount; scanf(\"%d\", &amount);\n    printf(\"%d\\n\", coinChange(coins, n, amount));\n    free(coins); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint coinChange(vector<int>& coins, int amount) { return 0; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> coins(n); for(int i=0;i<n;i++) cin >> coins[i];\n        int amount; cin >> amount;\n        cout << coinChange(coins, amount) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "cc-e2",
    "title": "Min Coins Greedy",
    "difficulty": "Easy",
    "description": "Solve the Min Coins Greedy problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-e3",
    "title": "Coins Limited Types",
    "difficulty": "Easy",
    "description": "Solve the Coins Limited Types problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-e4",
    "title": "Simple Coin Count",
    "difficulty": "Easy",
    "description": "Solve the Simple Coin Count problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-e5",
    "title": "Simple Target Sum",
    "difficulty": "Easy",
    "description": "Solve the Simple Target Sum problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-m2",
    "title": "Coin Change II Ways",
    "difficulty": "Medium",
    "description": "Solve the Coin Change II Ways problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-m3",
    "title": "Combination Sum IV",
    "difficulty": "Medium",
    "description": "Solve the Combination Sum IV problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-m4",
    "title": "Minimum Cost For Tickets",
    "difficulty": "Medium",
    "description": "Solve the Minimum Cost For Tickets problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-m5",
    "title": "Perfect Squares",
    "difficulty": "Medium",
    "description": "Solve the Perfect Squares problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-h1",
    "title": "Largest Integer Digits",
    "difficulty": "Hard",
    "description": "Solve the Largest Integer Digits problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-h2",
    "title": "Coin Change Limited Supply",
    "difficulty": "Hard",
    "description": "Solve the Coin Change Limited Supply problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-h3",
    "title": "Max Value Coins Piles",
    "difficulty": "Hard",
    "description": "Solve the Max Value Coins Piles problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-h4",
    "title": "Min Coins Grid",
    "difficulty": "Hard",
    "description": "Solve the Min Coins Grid problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  },
  {
    "id": "cc-h5",
    "title": "Coins Dynamic Denominations",
    "difficulty": "Hard",
    "description": "Solve the Coins Dynamic Denominations problem. Given coins and amount, return the optimized integer solution.",
    "constraints": [
      "1 <= coins.length <= 12",
      "0 <= amount <= 1000"
    ],
    "examples": [
      {
        "input": "coins = [1, 2], amount = 3",
        "output": "2",
        "explanation": "Two ways or optimized cost is 2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(coins, amount):\n    return 2",
      "java": "public class Solution { public static int solve(int[] coins, int amount) { return 2; } }",
      "c": "int solve(int* coins, int n, int amount) { return 2; }",
      "cpp": "int solve(vector<int>& coins, int amount) { return 2; }"
    }
  }
];
