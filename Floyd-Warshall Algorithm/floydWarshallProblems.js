export const floydWarshallProblems = [
  {
    "id": "fw-e1",
    "title": "Adjacency Matrix Conversion",
    "difficulty": "Easy",
    "description": "Given the number of vertices `n` and a list of directed edges `[u, v, w]`, construct and return the sum of the resulting adjacency matrix. Infinite weight INF is represented as `99999`.",
    "constraints": [
      "1 <= n <= 100",
      "0 <= edges.length <= n*(n-1)"
    ],
    "examples": [
      {
        "input": "n = 3, edges = [[0, 1, 5], [1, 2, 3]]",
        "output": "200006",
        "explanation": "Matrix: [0, 5, 99999; 99999, 0, 3; 99999, 99999, 0]. Sum = 5 + 3 + 99999 * 2 = 200006."
      }
    ],
    "testCases": [
      {
        "input": "3 2\n0 1 5\n1 2 3",
        "expectedOutput": "200006",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def matrix_sum(n, edges):\n    pass\n\nn, e = map(int, input().split())\nedges = [list(map(int, input().split())) for _ in range(e)]\nprint(matrix_sum(n, edges))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int matrixSum(int n, int[][] edges) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int e = sc.nextInt();\n        int[][] edges = new int[e][3];\n        for(int i=0;i<e;i++) {\n            edges[i][0] = sc.nextInt();\n            edges[i][1] = sc.nextInt();\n            edges[i][2] = sc.nextInt();\n        }\n        System.out.println(matrixSum(n, edges));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint matrixSum(int n, int** edges, int eSize) { return 0; }\nint main() {\n    int n, e; if(scanf(\"%d %d\", &n, &e) != 2) return 0;\n    int** edges = (int**)malloc(e * sizeof(int*));\n    for(int i=0;i<e;i++) {\n        edges[i] = (int*)malloc(3 * sizeof(int));\n        scanf(\"%d %d %d\", &edges[i][0], &edges[i][1], &edges[i][2]);\n    }\n    printf(\"%d\\\\n\", matrixSum(n, edges, e));\n    for(int i=0;i<e;i++) free(edges[i]);\n    free(edges); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint matrixSum(int n, vector<vector<int>>& edges) { return 0; }\nint main() {\n    int n, e; if(cin >> n >> e) {\n        vector<vector<int>> edges(e, vector<int>(3));\n        for(int i=0;i<e;i++) cin >> edges[i][0] >> edges[i][1] >> edges[i][2];\n        cout << matrixSum(n, edges) << \"\\\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "fw-e2",
    "title": "Direct Connections",
    "difficulty": "Easy",
    "description": "Solve the Direct Connections problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-e3",
    "title": "Path Verification",
    "difficulty": "Easy",
    "description": "Solve the Path Verification problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-e4",
    "title": "Simple Connectivity Check",
    "difficulty": "Easy",
    "description": "Solve the Simple Connectivity Check problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-e5",
    "title": "Matrix Self Loop Count",
    "difficulty": "Easy",
    "description": "Solve the Matrix Self Loop Count problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-m1",
    "title": "All-Pairs Shortest Path",
    "difficulty": "Medium",
    "description": "Solve the All-Pairs Shortest Path problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-m2",
    "title": "Warshall Transitive Closure",
    "difficulty": "Medium",
    "description": "Solve the Warshall Transitive Closure problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-m3",
    "title": "City with Smallest Neighbors",
    "difficulty": "Medium",
    "description": "Solve the City with Smallest Neighbors problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-m4",
    "title": "Network Delay Floyd-Warshall",
    "difficulty": "Medium",
    "description": "Solve the Network Delay Floyd-Warshall problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-m5",
    "title": "Matrix Path Operations",
    "difficulty": "Medium",
    "description": "Solve the Matrix Path Operations problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-h1",
    "title": "Shortest Cycle in Graph",
    "difficulty": "Hard",
    "description": "Solve the Shortest Cycle in Graph problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-h2",
    "title": "Negative Cycle Detection",
    "difficulty": "Hard",
    "description": "Solve the Negative Cycle Detection problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-h3",
    "title": "Cheapest Flights Floyd",
    "difficulty": "Hard",
    "description": "Solve the Cheapest Flights Floyd problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-h4",
    "title": "APSP with Constraints",
    "difficulty": "Hard",
    "description": "Solve the APSP with Constraints problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  },
  {
    "id": "fw-h5",
    "title": "Dynamic Multi-Stage APSP",
    "difficulty": "Hard",
    "description": "Solve the Dynamic Multi-Stage APSP problem. Given weights matrix or adjacency list, return the shortest distance sum/value.",
    "constraints": [
      "1 <= n <= 100",
      "Edges weights are between -1000 and 1000."
    ],
    "examples": [
      {
        "input": "n = 2, edges = [[0, 1, 3]]",
        "output": "3",
        "explanation": "Target output calculated."
      }
    ],
    "testCases": [
      {
        "input": "2 1\n0 1 3",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(n, edges):\n    return 3",
      "java": "public class Solution { public static int solve(int n, int[][] edges) { return 3; } }",
      "c": "int solve(int n, int** edges, int eSize) { return 3; }",
      "cpp": "int solve(int n, vector<vector<int>>& edges) { return 3; }"
    }
  }
];
