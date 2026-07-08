export const floodFillProblems = [
{
  id: 'ff-e1',
  title: 'Basic Flood Fill',
  difficulty: 'Easy',
  description: 'Given a 2D image represented by an `m x n` grid of integers, a starting pixel `(sr, sc)`, and a new color, perform the flood fill algorithm. Replace the color of the starting pixel and all 4-directionally connected pixels having the same original color with the new color. Return the modified image.',
  constraints: [
    '1 <= m, n <= 50',
    '0 <= image[i][j], color <= 65535',
    '0 <= sr < m',
    '0 <= sc < n'
  ],
  examples: [
    {
      input: 'image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2',
      output: '[[2,2,2],[2,2,0],[2,0,1]]',
      explanation: 'All connected cells having the original color 1 are recolored to 2.'
    },
    {
      input: 'image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0',
      output: '[[0,0,0],[0,0,0]]',
      explanation: 'Since the new color is the same as the original color, the image remains unchanged.'
    }
  ],
  testCases: [
    {
      input: '3 3\n1 1 1\n1 1 0\n1 0 1\n1 1\n2',
      expectedOutput: '2 2 2\n2 2 0\n2 0 1',
      hidden: false
    },
    {
      input: '2 3\n0 0 0\n0 0 0\n0 0\n0',
      expectedOutput: '0 0 0\n0 0 0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def flood_fill(image, sr, sc, color):\n    pass\n\nm, n = map(int, input().split())\nimage = [list(map(int, input().split())) for _ in range(m)]\nsr, sc = map(int, input().split())\ncolor = int(input())\nresult = flood_fill(image, sr, sc, color)\nfor row in result:\n    print(*row)',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int[][] floodFill(int[][] image, int sr, int sc, int color) {\n        return image;\n    }\n\n    public static void main(String[] args) {\n        Scanner scn = new Scanner(System.in);\n        if (scn.hasNextInt()) {\n            int m = scn.nextInt();\n            int n = scn.nextInt();\n            int[][] image = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    image[i][j] = scn.nextInt();\n                }\n            }\n            int sr = scn.nextInt();\n            int sc = scn.nextInt();\n            int color = scn.nextInt();\n            int[][] result = floodFill(image, sr, sc, color);\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    System.out.print(result[i][j] + " ");\n                }\n                System.out.println();\n            }\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint** floodFill(int** image, int m, int n, int sr, int sc, int color) {\n    return image;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** image = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        image[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &image[i][j]);\n    }\n    int sr, sc, color;\n    scanf("%d %d", &sr, &sc);\n    scanf("%d", &color);\n    image = floodFill(image, m, n, sr, sc, color);\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) printf("%d ", image[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {\n    return image;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> image(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> image[i][j];\n            }\n        }\n        int sr, sc, color;\n        cin >> sr >> sc;\n        cin >> color;\n        vector<vector<int>> result = floodFill(image, sr, sc, color);\n        for (auto &row : result) {\n            for (int x : row) cout << x << " ";\n            cout << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-e2',
  title: 'Number of Cells Filled',
  difficulty: 'Easy',
  description: 'Given a 2D image represented by an `m x n` grid of integers, a starting pixel `(sr, sc)`, and a new color, perform the flood fill algorithm. Return the total number of cells whose color changes after the flood fill operation.',

  constraints: [
    '1 <= m, n <= 50',
    '0 <= image[i][j], color <= 65535',
    '0 <= sr < m',
    '0 <= sc < n'
  ],

  examples: [
    {
      input: '3 3\n1 1 1\n1 1 0\n1 0 1\n1 1\n2',
      output: '6',
      explanation: 'Six connected cells having the original color are recolored.'
    },
    {
      input: '2 2\n0 0\n0 0\n0 0\n0',
      output: '0',
      explanation: 'The new color is the same as the original color, so no cells are changed.'
    }
  ],

  testCases: [
    {
      input: '3 3\n1 1 1\n1 1 0\n1 0 1\n1 1\n2',
      expectedOutput: '6',
      hidden: false
    },
    {
      input: '2 2\n0 0\n0 0\n0 0\n0',
      expectedOutput: '0',
      hidden: false
    }
  ],

  starterCode: {
    python: 'def count_filled_cells(image, sr, sc, color):\n    pass\n\nm, n = map(int, input().split())\nimage = [list(map(int, input().split())) for _ in range(m)]\nsr, sc = map(int, input().split())\ncolor = int(input())\nprint(count_filled_cells(image, sr, sc, color))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int countFilledCells(int[][] image, int sr, int sc, int color) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner scn = new Scanner(System.in);\n        if (scn.hasNextInt()) {\n            int m = scn.nextInt();\n            int n = scn.nextInt();\n            int[][] image = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    image[i][j] = scn.nextInt();\n                }\n            }\n            int sr = scn.nextInt();\n            int sc = scn.nextInt();\n            int color = scn.nextInt();\n            System.out.println(countFilledCells(image, sr, sc, color));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countFilledCells(int** image, int m, int n, int sr, int sc, int color) {\n    return 0;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** image = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        image[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &image[i][j]);\n    }\n    int sr, sc, color;\n    scanf("%d %d", &sr, &sc);\n    scanf("%d", &color);\n    printf("%d\\n", countFilledCells(image, m, n, sr, sc, color));\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint countFilledCells(vector<vector<int>>& image, int sr, int sc, int color) {\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> image(m, vector<int>(n));\n\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> image[i][j];\n            }\n        }\n\n        int sr, sc, color;\n        cin >> sr >> sc;\n        cin >> color;\n\n        cout << countFilledCells(image, sr, sc, color) << "\\n";\n    }\n\n    return 0;\n}'
  }
},{
  id: 'ff-e3',
  title: 'Boundary Flood Fill',
  difficulty: 'Easy',
  description: 'Given a 2D image represented by an `m x n` grid of integers, a starting pixel `(sr, sc)`, and a new color, perform the flood fill algorithm. Return `true` if at least one filled cell lies on the boundary of the image, otherwise return `false`.',
  constraints: [
    '1 <= m, n <= 50',
    '0 <= image[i][j], color <= 65535',
    '0 <= sr < m',
    '0 <= sc < n'
  ],
  examples: [
    {
      input: 'image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2',
      output: 'true',
      explanation: 'The filled region reaches the top and left boundaries of the image.'
    },
    {
      input: 'image = [[0,0,0],[0,1,0],[0,0,0]], sr = 1, sc = 1, color = 2',
      output: 'false',
      explanation: 'Only the center cell is filled and it does not touch any boundary.'
    }
  ],
  testCases: [
    {
      input: '3 3\n1 1 1\n1 1 0\n1 0 1\n1 1\n2',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '3 3\n0 0 0\n0 1 0\n0 0 0\n1 1\n2',
      expectedOutput: 'false',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def boundary_flood_fill(image, sr, sc, color):\n    pass\n\nm, n = map(int, input().split())\nimage = [list(map(int, input().split())) for _ in range(m)]\nsr, sc = map(int, input().split())\ncolor = int(input())\nprint(str(boundary_flood_fill(image, sr, sc, color)).lower())',

    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean boundaryFloodFill(int[][] image, int sr, int sc, int color) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner scn = new Scanner(System.in);\n        if (scn.hasNextInt()) {\n            int m = scn.nextInt();\n            int n = scn.nextInt();\n            int[][] image = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    image[i][j] = scn.nextInt();\n                }\n            }\n            int sr = scn.nextInt();\n            int sc = scn.nextInt();\n            int color = scn.nextInt();\n            System.out.println(boundaryFloodFill(image, sr, sc, color));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nbool boundaryFloodFill(int** image, int m, int n, int sr, int sc, int color) {\n    return false;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** image = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        image[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &image[i][j]);\n    }\n    int sr, sc, color;\n    scanf("%d %d", &sr, &sc);\n    scanf("%d", &color);\n    printf("%s\\n", boundaryFloodFill(image, m, n, sr, sc, color) ? "true" : "false");\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nbool boundaryFloodFill(vector<vector<int>>& image, int sr, int sc, int color) {\n    return false;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> image(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> image[i][j];\n            }\n        }\n        int sr, sc, color;\n        cin >> sr >> sc;\n        cin >> color;\n        cout << (boundaryFloodFill(image, sr, sc, color) ? "true" : "false") << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-e4',
  title: 'Flood Fill with Obstacles',
  difficulty: 'Easy',
  description: 'Given an `m x n` grid representing an image, a starting pixel `(sr, sc)`, a new color, and an obstacle value `-1`, perform the flood fill algorithm. The fill can only spread through cells having the same original color as the starting pixel and must never cross obstacle cells. Return the modified image.',
  constraints: [
    '1 <= m, n <= 50',
    '-1 <= image[i][j], color <= 65535',
    '0 <= sr < m',
    '0 <= sc < n'
  ],
  examples: [
    {
      input: 'image = [[1,1,-1],[1,1,0],[-1,0,1]], sr = 0, sc = 0, color = 2',
      output: '[[2,2,-1],[2,2,0],[-1,0,1]]',
      explanation: 'The flood fill stops whenever it encounters an obstacle (-1).'
    },
    {
      input: 'image = [[1,-1,1],[-1,-1,1],[1,1,1]], sr = 2, sc = 0, color = 3',
      output: '[[1,-1,1],[-1,-1,1],[3,3,3]]',
      explanation: 'Only the connected region that is not blocked by obstacles is recolored.'
    }
  ],
  testCases: [
    {
      input: '3 3\n1 1 -1\n1 1 0\n-1 0 1\n0 0\n2',
      expectedOutput: '2 2 -1\n2 2 0\n-1 0 1',
      hidden: false
    },
    {
      input: '3 3\n1 -1 1\n-1 -1 1\n1 1 1\n2 0\n3',
      expectedOutput: '1 -1 1\n-1 -1 1\n3 3 3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def flood_fill_with_obstacles(image, sr, sc, color):\n    pass\n\nm, n = map(int, input().split())\nimage = [list(map(int, input().split())) for _ in range(m)]\nsr, sc = map(int, input().split())\ncolor = int(input())\nresult = flood_fill_with_obstacles(image, sr, sc, color)\nfor row in result:\n    print(*row)',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int[][] floodFillWithObstacles(int[][] image, int sr, int sc, int color) {\n        return image;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] image = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    image[i][j] = sc.nextInt();\n                }\n            }\n            int sr = sc.nextInt();\n            int scol = sc.nextInt();\n            int color = sc.nextInt();\n            int[][] result = floodFillWithObstacles(image, sr, scol, color);\n            for (int[] row : result) {\n                for (int cell : row) System.out.print(cell + " ");\n                System.out.println();\n            }\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint** floodFillWithObstacles(int** image, int m, int n, int sr, int sc, int color) {\n    return image;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** image = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        image[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) scanf("%d", &image[i][j]);\n    }\n    int sr, sc, color;\n    scanf("%d %d", &sr, &sc);\n    scanf("%d", &color);\n    image = floodFillWithObstacles(image, m, n, sr, sc, color);\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) printf("%d ", image[i][j]);\n        printf("\\n");\n    }\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<vector<int>> floodFillWithObstacles(vector<vector<int>>& image, int sr, int sc, int color) {\n    return image;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> image(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> image[i][j];\n            }\n        }\n        int sr, sc, color;\n        cin >> sr >> sc;\n        cin >> color;\n        vector<vector<int>> result = floodFillWithObstacles(image, sr, sc, color);\n        for (auto& row : result) {\n            for (int cell : row) cout << cell << " ";\n            cout << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-e5',
  title: 'Flood Fill using 8 Directions',
  difficulty: 'Easy',
  description: 'Given a 2D image represented by an `m x n` grid of integers, a starting pixel `(sr, sc)`, and a new color, perform the flood fill algorithm considering all **8 directions** (horizontal, vertical, and diagonal). Replace all connected pixels having the same original color and return the modified image.',
  constraints: [
    '1 <= m, n <= 50',
    '0 <= image[i][j], color <= 65535',
    '0 <= sr < m',
    '0 <= sc < n'
  ],
  examples: [
    {
      input: 'image = [[1,0,1],[0,1,0],[1,0,1]], sr = 1, sc = 1, color = 2',
      output: '[[2,0,2],[0,2,0],[2,0,2]]',
      explanation: 'Using 8-directional connectivity, all diagonal cells containing 1 are also connected and are recolored.'
    },
    {
      input: 'image = [[1,1,0],[0,1,0],[0,0,1]], sr = 0, sc = 0, color = 3',
      output: '[[3,3,0],[0,3,0],[0,0,3]]',
      explanation: 'Diagonal neighbours are also considered while performing the flood fill.'
    }
  ],
  testCases: [
    {
      input: '3 3\n1 0 1\n0 1 0\n1 0 1\n1 1\n2',
      expectedOutput: '2 0 2\n0 2 0\n2 0 2',
      hidden: false
    },
    {
      input: '3 3\n1 1 0\n0 1 0\n0 0 1\n0 0\n3',
      expectedOutput: '3 3 0\n0 3 0\n0 0 3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def flood_fill_8_direction(image, sr, sc, color):\n    pass\n\nm, n = map(int, input().split())\nimage = [list(map(int, input().split())) for _ in range(m)]\nsr, sc = map(int, input().split())\ncolor = int(input())\nresult = flood_fill_8_direction(image, sr, sc, color)\nfor row in result:\n    print(*row)',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int[][] floodFill8Direction(int[][] image, int sr, int sc, int color) {\n        return image;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] image = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    image[i][j] = sc.nextInt();\n                }\n            }\n            int sr = sc.nextInt();\n            int scol = sc.nextInt();\n            int color = sc.nextInt();\n            int[][] result = floodFill8Direction(image, sr, scol, color);\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    System.out.print(result[i][j] + " ");\n                }\n                System.out.println();\n            }\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint** floodFill8Direction(int** image, int m, int n, int sr, int sc, int color) {\n    return image;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** image = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        image[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &image[i][j]);\n        }\n    }\n    int sr, sc, color;\n    scanf("%d %d", &sr, &sc);\n    scanf("%d", &color);\n    image = floodFill8Direction(image, m, n, sr, sc, color);\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            printf("%d ", image[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<vector<int>> floodFill8Direction(vector<vector<int>>& image, int sr, int sc, int color) {\n    return image;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> image(m, vector<int>(n));\n\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> image[i][j];\n            }\n        }\n\n        int sr, sc, color;\n        cin >> sr >> sc;\n        cin >> color;\n\n        vector<vector<int>> result = floodFill8Direction(image, sr, sc, color);\n\n        for (auto &row : result) {\n            for (int cell : row) {\n                cout << cell << " ";\n            }\n            cout << "\\n";\n        }\n    }\n\n    return 0;\n}'
  }
},{
  id: 'ff-m1',
  title: 'Number of Islands',
  difficulty: 'Medium',
  description: 'Given an `m x n` grid consisting of `1`s (land) and `0`s (water), return the number of islands. An island is formed by connecting adjacent lands horizontally or vertically.',
  constraints: [
    '1 <= m, n <= 300',
    'grid[i][j] is either 0 or 1'
  ],
  examples: [
    {
      input: 'grid = [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]]',
      output: '1',
      explanation: 'There is only one connected island.'
    },
    {
      input: 'grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]',
      output: '3',
      explanation: 'There are three separate islands.'
    }
  ],
  testCases: [
    {
      input: '4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0',
      expectedOutput: '1',
      hidden: false
    },
    {
      input: '4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1',
      expectedOutput: '3',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def num_islands(grid):\n    pass\n\nm, n = map(int, input().split())\ngrid = [list(map(int, input().split())) for _ in range(m)]\nprint(num_islands(grid))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int numIslands(int[][] grid) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] grid = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    grid[i][j] = sc.nextInt();\n                }\n            }\n            System.out.println(numIslands(grid));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint numIslands(int** grid, int m, int n) {\n    return 0;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** grid = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        grid[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &grid[i][j]);\n        }\n    }\n    printf("%d\\n", numIslands(grid, m, n));\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint numIslands(vector<vector<int>>& grid) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> grid(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> grid[i][j];\n            }\n        }\n        cout << numIslands(grid) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-m2',
  title: 'Max Area of Island',
  difficulty: 'Medium',
  description: 'Given an `m x n` binary grid where `1` represents land and `0` represents water, return the maximum area of an island. An island is a group of connected lands (4-directionally). If there is no island, return `0`.',
  constraints: [
    '1 <= m, n <= 50',
    'grid[i][j] is either 0 or 1'
  ],
  examples: [
    {
      input: 'grid = [[0,0,1,0,0],[1,1,1,0,1],[0,1,0,0,1],[0,0,0,1,1]]',
      output: '5',
      explanation: 'The largest island contains 5 connected land cells.'
    },
    {
      input: 'grid = [[0,0,0],[0,0,0],[0,0,0]]',
      output: '0',
      explanation: 'There is no land in the grid.'
    }
  ],
  testCases: [
    {
      input: '4 5\n0 0 1 0 0\n1 1 1 0 1\n0 1 0 0 1\n0 0 0 1 1',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '3 3\n0 0 0\n0 0 0\n0 0 0',
      expectedOutput: '0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def max_area_of_island(grid):\n    pass\n\nm, n = map(int, input().split())\ngrid = [list(map(int, input().split())) for _ in range(m)]\nprint(max_area_of_island(grid))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int maxAreaOfIsland(int[][] grid) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] grid = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    grid[i][j] = sc.nextInt();\n                }\n            }\n            System.out.println(maxAreaOfIsland(grid));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxAreaOfIsland(int** grid, int m, int n) {\n    return 0;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** grid = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        grid[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &grid[i][j]);\n        }\n    }\n    printf("%d\\n", maxAreaOfIsland(grid, m, n));\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint maxAreaOfIsland(vector<vector<int>>& grid) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> grid(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> grid[i][j];\n            }\n        }\n        cout << maxAreaOfIsland(grid) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-m3',
  title: 'Coloring a Border',
  difficulty: 'Medium',
  description: 'Given an `m x n` grid of integers, a starting cell `(row, col)`, and a new color, color the border of the connected component containing the starting cell. A border cell is one that is on the boundary of the grid or has at least one neighboring cell with a different color. Return the modified grid.',
  constraints: [
    '1 <= m, n <= 50',
    '1 <= grid[i][j], color <= 1000',
    '0 <= row < m',
    '0 <= col < n'
  ],
  examples: [
    {
      input: 'grid = [[1,1],[1,2]], row = 0, col = 0, color = 3',
      output: '[[3,3],[3,2]]',
      explanation: 'All border cells of the connected component containing (0,0) are recolored to 3.'
    },
    {
      input: 'grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 4',
      output: '[[1,4,4],[2,3,4]]',
      explanation: 'Only the border cells of the connected component are recolored.'
    }
  ],
  testCases: [
    {
      input: '2 2\n1 1\n1 2\n0 0\n3',
      expectedOutput: '3 3\n3 2',
      hidden: false
    },
    {
      input: '2 3\n1 2 2\n2 3 2\n0 1\n4',
      expectedOutput: '1 4 4\n2 3 4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def color_border(grid, row, col, color):\n    pass\n\nm, n = map(int, input().split())\ngrid = [list(map(int, input().split())) for _ in range(m)]\nrow, col = map(int, input().split())\ncolor = int(input())\nresult = color_border(grid, row, col, color)\nfor r in result:\n    print(*r)',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int[][] colorBorder(int[][] grid, int row, int col, int color) {\n        return grid;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] grid = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    grid[i][j] = sc.nextInt();\n                }\n            }\n            int row = sc.nextInt();\n            int col = sc.nextInt();\n            int color = sc.nextInt();\n            int[][] result = colorBorder(grid, row, col, color);\n            for (int[] r : result) {\n                for (int cell : r) {\n                    System.out.print(cell + " ");\n                }\n                System.out.println();\n            }\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint** colorBorder(int** grid, int m, int n, int row, int col, int color) {\n    return grid;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** grid = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        grid[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &grid[i][j]);\n        }\n    }\n    int row, col, color;\n    scanf("%d %d", &row, &col);\n    scanf("%d", &color);\n    grid = colorBorder(grid, m, n, row, col, color);\n    for (int i = 0; i < m; i++) {\n        for (int j = 0; j < n; j++) {\n            printf("%d ", grid[i][j]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<vector<int>> colorBorder(vector<vector<int>>& grid, int row, int col, int color) {\n    return grid;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> grid(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> grid[i][j];\n            }\n        }\n        int row, col, color;\n        cin >> row >> col;\n        cin >> color;\n        vector<vector<int>> result = colorBorder(grid, row, col, color);\n        for (auto &r : result) {\n            for (int cell : r) {\n                cout << cell << " ";\n            }\n            cout << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-m4',
  title: 'Closed Islands',
  difficulty: 'Medium',
  description: 'Given an `m x n` binary grid where `0` represents land and `1` represents water, return the number of closed islands. A closed island is completely surrounded by water on all four sides and is not connected to the boundary of the grid.',
  constraints: [
    '1 <= m, n <= 100',
    'grid[i][j] is either 0 or 1'
  ],
  examples: [
    {
      input: 'grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]',
      output: '2',
      explanation: 'There are two islands that are completely surrounded by water and do not touch the boundary.'
    },
    {
      input: 'grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]',
      output: '1',
      explanation: 'Only one island is completely enclosed by water.'
    }
  ],
  testCases: [
    {
      input: '5 8\n1 1 1 1 1 1 1 0\n1 0 0 0 0 1 1 0\n1 0 1 0 1 1 1 0\n1 0 0 0 0 1 0 1\n1 1 1 1 1 1 1 0',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '3 5\n0 0 1 0 0\n0 1 0 1 0\n0 1 1 1 0',
      expectedOutput: '1',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def closed_island(grid):\n    pass\n\nm, n = map(int, input().split())\ngrid = [list(map(int, input().split())) for _ in range(m)]\nprint(closed_island(grid))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int closedIsland(int[][] grid) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] grid = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    grid[i][j] = sc.nextInt();\n                }\n            }\n            System.out.println(closedIsland(grid));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint closedIsland(int** grid, int m, int n) {\n    return 0;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** grid = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        grid[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &grid[i][j]);\n        }\n    }\n    printf("%d\\n", closedIsland(grid, m, n));\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint closedIsland(vector<vector<int>>& grid) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> grid(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> grid[i][j];\n            }\n        }\n        cout << closedIsland(grid) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-h1',
  title: 'Making a Large Island',
  difficulty: 'Hard',
  description: 'You are given an `n x n` binary grid where `1` represents land and `0` represents water. You may change at most one `0` into `1`. Return the size of the largest island that can be formed after performing at most one such operation.',
  constraints: [
    '1 <= n <= 500',
    'grid[i][j] is either 0 or 1'
  ],
  examples: [
    {
      input: 'grid = [[1,0],[0,1]]',
      output: '3',
      explanation: 'Changing either water cell connects two land cells, forming an island of size 3.'
    },
    {
      input: 'grid = [[1,1],[1,0]]',
      output: '4',
      explanation: 'Changing the only water cell to land forms a single island of size 4.'
    }
  ],
  testCases: [
    {
      input: '2\n1 0\n0 1',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '2\n1 1\n1 0',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def largest_island(grid):\n    pass\n\nn = int(input())\ngrid = [list(map(int, input().split())) for _ in range(n)]\nprint(largest_island(grid))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int largestIsland(int[][] grid) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[][] grid = new int[n][n];\n            for (int i = 0; i < n; i++) {\n                for (int j = 0; j < n; j++) {\n                    grid[i][j] = sc.nextInt();\n                }\n            }\n            System.out.println(largestIsland(grid));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint largestIsland(int** grid, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int** grid = (int**)malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        grid[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &grid[i][j]);\n        }\n    }\n    printf("%d\\n", largestIsland(grid, n));\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint largestIsland(vector<vector<int>>& grid) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<int>> grid(n, vector<int>(n));\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> grid[i][j];\n            }\n        }\n        cout << largestIsland(grid) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-h2',
  title: 'Shortest Bridge',
  difficulty: 'Hard',
  description: 'You are given an `n x n` binary grid where `1` represents land and `0` represents water. The grid contains exactly two islands. You may change water cells into land. Return the minimum number of water cells that must be converted to connect the two islands.',
  constraints: [
    '2 <= n <= 100',
    'grid[i][j] is either 0 or 1',
    'The grid contains exactly two islands'
  ],
  examples: [
    {
      input: 'grid = [[0,1],[1,0]]',
      output: '1',
      explanation: 'Changing one water cell connects the two islands.'
    },
    {
      input: 'grid = [[0,1,0],[0,0,0],[0,0,1]]',
      output: '2',
      explanation: 'At least two water cells must be converted to form the shortest bridge.'
    }
  ],
  testCases: [
    {
      input: '2\n0 1\n1 0',
      expectedOutput: '1',
      hidden: false
    },
    {
      input: '3\n0 1 0\n0 0 0\n0 0 1',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def shortest_bridge(grid):\n    pass\n\nn = int(input())\ngrid = [list(map(int, input().split())) for _ in range(n)]\nprint(shortest_bridge(grid))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int shortestBridge(int[][] grid) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[][] grid = new int[n][n];\n            for (int i = 0; i < n; i++) {\n                for (int j = 0; j < n; j++) {\n                    grid[i][j] = sc.nextInt();\n                }\n            }\n            System.out.println(shortestBridge(grid));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint shortestBridge(int** grid, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int** grid = (int**)malloc(n * sizeof(int*));\n    for (int i = 0; i < n; i++) {\n        grid[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &grid[i][j]);\n        }\n    }\n    printf("%d\\n", shortestBridge(grid, n));\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint shortestBridge(vector<vector<int>>& grid) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<vector<int>> grid(n, vector<int>(n));\n        for (int i = 0; i < n; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> grid[i][j];\n            }\n        }\n        cout << shortestBridge(grid) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-h3',
  title: 'Number of Distinct Islands',
  difficulty: 'Hard',
  description: 'Given an `m x n` binary grid where `1` represents land and `0` represents water, return the number of distinct islands. Two islands are considered the same if one can be translated (but not rotated or reflected) to equal the other.',
  constraints: [
    '1 <= m, n <= 50',
    'grid[i][j] is either 0 or 1'
  ],
  examples: [
    {
      input: 'grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]',
      output: '3',
      explanation: 'There are three distinct island shapes in the grid.'
    },
    {
      input: 'grid = [[1,1,0],[1,0,0],[0,0,1]]',
      output: '2',
      explanation: 'The two islands have different shapes.'
    }
  ],
  testCases: [
    {
      input: '4 5\n1 1 0 1 1\n1 0 0 0 0\n0 0 0 0 1\n1 1 0 1 1',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '3 3\n1 1 0\n1 0 0\n0 0 1',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def num_distinct_islands(grid):\n    pass\n\nm, n = map(int, input().split())\ngrid = [list(map(int, input().split())) for _ in range(m)]\nprint(num_distinct_islands(grid))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int numDistinctIslands(int[][] grid) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] grid = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    grid[i][j] = sc.nextInt();\n                }\n            }\n            System.out.println(numDistinctIslands(grid));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint numDistinctIslands(int** grid, int m, int n) {\n    return 0;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** grid = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        grid[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &grid[i][j]);\n        }\n    }\n    printf("%d\\n", numDistinctIslands(grid, m, n));\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint numDistinctIslands(vector<vector<int>>& grid) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> grid(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> grid[i][j];\n            }\n        }\n        cout << numDistinctIslands(grid) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-h4',
  title: 'Pacific Atlantic Water Flow',
  difficulty: 'Hard',
  description: 'Given an `m x n` matrix of non-negative integers representing the height of each cell in an island, determine all coordinates from which water can flow to both the Pacific and Atlantic oceans. Water can flow from a cell to another cell with an equal or lower height in the four cardinal directions. The Pacific Ocean touches the left and top edges of the matrix, while the Atlantic Ocean touches the right and bottom edges.',
  constraints: [
    '1 <= m, n <= 200',
    '0 <= heights[i][j] <= 10^5'
  ],
  examples: [
    {
      input: 'heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]',
      output: '[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',
      explanation: 'These cells can reach both the Pacific and Atlantic oceans.'
    },
    {
      input: 'heights = [[1]]',
      output: '[[0,0]]',
      explanation: 'The single cell touches both oceans.'
    }
  ],
  testCases: [
    {
      input: '5 5\n1 2 2 3 5\n3 2 3 4 4\n2 4 5 3 1\n6 7 1 4 5\n5 1 1 2 4',
      expectedOutput: '0 4\n1 3\n1 4\n2 2\n3 0\n3 1\n4 0',
      hidden: false
    },
    {
      input: '1 1\n1',
      expectedOutput: '0 0',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def pacific_atlantic(heights):\n    pass\n\nm, n = map(int, input().split())\nheights = [list(map(int, input().split())) for _ in range(m)]\nresult = pacific_atlantic(heights)\nfor cell in result:\n    print(*cell)',

    java: 'import java.util.*;\n\npublic class Main {\n    public static List<List<Integer>> pacificAtlantic(int[][] heights) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] heights = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    heights[i][j] = sc.nextInt();\n                }\n            }\n            List<List<Integer>> result = pacificAtlantic(heights);\n            for (List<Integer> cell : result) {\n                System.out.println(cell.get(0) + " " + cell.get(1));\n            }\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint** pacificAtlantic(int** heights, int m, int n, int* returnSize) {\n    *returnSize = 0;\n    return NULL;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** heights = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        heights[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &heights[i][j]);\n        }\n    }\n    int returnSize;\n    int** result = pacificAtlantic(heights, m, n, &returnSize);\n    for (int i = 0; i < returnSize; i++) {\n        printf("%d %d\\n", result[i][0], result[i][1]);\n    }\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> heights(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> heights[i][j];\n            }\n        }\n        vector<vector<int>> result = pacificAtlantic(heights);\n        for (auto &cell : result) {\n            cout << cell[0] << " " << cell[1] << "\\n";\n        }\n    }\n    return 0;\n}'
  }
},{
  id: 'ff-h5',
  title: 'Trapping Rain Water II',
  difficulty: 'Hard',
  description: 'Given an `m x n` matrix representing the height of each unit cell in a 2D elevation map, compute the total volume of water trapped after raining. Water can only be trapped within the boundary formed by higher elevation cells. Return the total amount of trapped water.',
  constraints: [
    '1 <= m, n <= 200',
    '0 <= heightMap[i][j] <= 2 * 10^4'
  ],
  examples: [
    {
      input: 'heightMap = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]',
      output: '4',
      explanation: 'A total of 4 units of water can be trapped.'
    },
    {
      input: 'heightMap = [[3,3,3,3],[3,1,1,3],[3,3,3,3]]',
      output: '4',
      explanation: 'The two inner cells each trap 2 units of water.'
    }
  ],
  testCases: [
    {
      input: '3 6\n1 4 3 1 3 2\n3 2 1 3 2 4\n2 3 3 2 3 1',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '3 4\n3 3 3 3\n3 1 1 3\n3 3 3 3',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def trap_rain_water(heightMap):\n    pass\n\nm, n = map(int, input().split())\nheightMap = [list(map(int, input().split())) for _ in range(m)]\nprint(trap_rain_water(heightMap))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int trapRainWater(int[][] heightMap) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int m = sc.nextInt();\n            int n = sc.nextInt();\n            int[][] heightMap = new int[m][n];\n            for (int i = 0; i < m; i++) {\n                for (int j = 0; j < n; j++) {\n                    heightMap[i][j] = sc.nextInt();\n                }\n            }\n            System.out.println(trapRainWater(heightMap));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint trapRainWater(int** heightMap, int m, int n) {\n    return 0;\n}\n\nint main() {\n    int m, n;\n    if (scanf("%d %d", &m, &n) != 2) return 0;\n    int** heightMap = (int**)malloc(m * sizeof(int*));\n    for (int i = 0; i < m; i++) {\n        heightMap[i] = (int*)malloc(n * sizeof(int));\n        for (int j = 0; j < n; j++) {\n            scanf("%d", &heightMap[i][j]);\n        }\n    }\n    printf("%d\\n", trapRainWater(heightMap, m, n));\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint trapRainWater(vector<vector<int>>& heightMap) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int m, n;\n    if (cin >> m >> n) {\n        vector<vector<int>> heightMap(m, vector<int>(n));\n        for (int i = 0; i < m; i++) {\n            for (int j = 0; j < n; j++) {\n                cin >> heightMap[i][j];\n            }\n        }\n        cout << trapRainWater(heightMap) << "\\n";\n    }\n    return 0;\n}'
  }
},
];