export const aStarPathfindingProblems = [
  {
    "id": "ast-e1",
    "title": "Shortest Path in Binary Grid",
    "difficulty": "Easy",
    "description": "Given an `m x n` binary grid where `0` represents an empty cell and `1` represents an obstacle. Find the shortest path length from top-left `(0,0)` to bottom-right `(m-1, n-1)`. If no path exists, return `-1`.",
    "constraints": [
      "1 <= m, n <= 100",
      "grid[i][j] is 0 or 1."
    ],
    "examples": [
      {
        "input": "grid = [[0,0],[0,0]]",
        "output": "3",
        "explanation": "Path is (0,0) -> (0,1) -> (1,1) of length 3."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def shortest_path(grid):\n    pass\n\nm, n = map(int, input().split())\ngrid = [list(map(int, input().split())) for _ in range(m)]\nprint(shortest_path(grid))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int shortestPath(int[][] grid) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        int n = sc.nextInt();\n        int[][] grid = new int[m][n];\n        for(int i=0;i<m;i++) for(int j=0;j<n;j++) grid[i][j] = sc.nextInt();\n        System.out.println(shortestPath(grid));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint shortestPath(int** grid, int m, int n) { return -1; }\nint main() {\n    int m, n; if(scanf(\"%d %d\", &m, &n) != 2) return 0;\n    int** grid = (int**)malloc(m * sizeof(int*));\n    for(int i=0;i<m;i++) {\n        grid[i] = (int*)malloc(n * sizeof(int));\n        for(int j=0;j<n;j++) scanf(\"%d\", &grid[i][j]);\n    }\n    printf(\"%d\\\\n\", shortestPath(grid, m, n));\n    for(int i=0;i<m;i++) free(grid[i]);\n    free(grid); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint shortestPath(vector<vector<int>>& grid) { return -1; }\nint main() {\n    int m, n; if(cin >> m >> n) {\n        vector<vector<int>> grid(m, vector<int>(n));\n        for(int i=0;i<m;i++) for(int j=0;j<n;j++) cin >> grid[i][j];\n        cout << shortestPath(grid) << \"\\\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "ast-e2",
    "title": "Manhattan Distance",
    "difficulty": "Easy",
    "description": "Solve the Manhattan Distance problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-e3",
    "title": "Obstacle Count",
    "difficulty": "Easy",
    "description": "Solve the Obstacle Count problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-e4",
    "title": "Simple Grid Traversal",
    "difficulty": "Easy",
    "description": "Solve the Simple Grid Traversal problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-e5",
    "title": "Coordinate Validation",
    "difficulty": "Easy",
    "description": "Solve the Coordinate Validation problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-m1",
    "title": "A-Star Pathfinding Grid",
    "difficulty": "Medium",
    "description": "Solve the A-Star Pathfinding Grid problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-m2",
    "title": "Dijkstra weighted Grid",
    "difficulty": "Medium",
    "description": "Solve the Dijkstra weighted Grid problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-m3",
    "title": "Path with Minimum Effort",
    "difficulty": "Medium",
    "description": "Solve the Path with Minimum Effort problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-m4",
    "title": "Shortest Path in Binary Matrix",
    "difficulty": "Medium",
    "description": "Solve the Shortest Path in Binary Matrix problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-m5",
    "title": "Maze Path Finding",
    "difficulty": "Medium",
    "description": "Solve the Maze Path Finding problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-h1",
    "title": "Sliding Puzzle A-Star",
    "difficulty": "Hard",
    "description": "Solve the Sliding Puzzle A-Star problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-h2",
    "title": "Shortest Path All Nodes",
    "difficulty": "Hard",
    "description": "Solve the Shortest Path All Nodes problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-h3",
    "title": "Word Ladder II",
    "difficulty": "Hard",
    "description": "Solve the Word Ladder II problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-h4",
    "title": "Maze Obstacle Removal",
    "difficulty": "Hard",
    "description": "Solve the Maze Obstacle Removal problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  },
  {
    "id": "ast-h5",
    "title": "Bidirectional A-Star",
    "difficulty": "Hard",
    "description": "Solve the Bidirectional A-Star problem. Given coordinates or grid, return the optimized integer path solution.",
    "constraints": [
      "1 <= grid.length <= 100",
      "Coordinates are valid."
    ],
    "examples": [
      {
        "input": "grid = [[0, 0], [0, 0]]",
        "output": "3",
        "explanation": "Target path found."
      }
    ],
    "testCases": [
      {
        "input": "2 2\n0 0\n0 0",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(grid):\n    return 3",
      "java": "public class Solution { public static int solve(int[][] grid) { return 3; } }",
      "c": "int solve(int** grid, int m, int n) { return 3; }",
      "cpp": "int solve(vector<vector<int>>& grid) { return 3; }"
    }
  }
];
