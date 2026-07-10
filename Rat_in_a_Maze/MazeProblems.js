export const ratInAMazeProblems = [
  // --- EASY ---
  {
    id: 'rm-e1', title: 'Rat in a Maze - Count Paths', difficulty: 'Easy',
    description: 'Given an `n x n` binary matrix `maze`, where `1` means the cell is open and `0` means blocked, a rat starts at `(0,0)` and needs to reach `(n-1, n-1)`. The rat can move only right or down. Return the total number of distinct paths from source to destination.',
    constraints: ['1 <= n <= 10', 'maze[i][j] is 0 or 1.', 'maze[0][0] == 1 and maze[n-1][n-1] == 1'],
    examples: [
      { input: 'maze = [[1,0,0,0],[1,1,0,1],[0,1,0,0],[1,1,1,1]]', output: '3', explanation: 'There are 3 valid paths from (0,0) to (3,3).' }
    ],
    testCases: [
      { input: '4\n1 0 0 0\n1 1 0 1\n0 1 0 0\n1 1 1 1', expectedOutput: '3', hidden: false },
      { input: '2\n1 1\n1 1', expectedOutput: '2', hidden: false },
      { input: '2\n1 0\n0 1', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `def count_paths(maze):
    pass

n = int(input())
maze = [list(map(int, input().split())) for _ in range(n)]
print(count_paths(maze))`,
      java: `import java.util.*;

public class Solution {
    public static int countPaths(int[][] maze) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] maze = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) maze[i][j] = sc.nextInt();
            System.out.println(countPaths(maze));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int countPaths(int** maze, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** maze = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        maze[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &maze[i][j]);
    }
    printf("%d\\n", countPaths(maze, n));
    for (int i = 0; i < n; i++) free(maze[i]);
    free(maze);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int countPaths(vector<vector<int>>& maze) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> maze(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> maze[i][j];
        cout << countPaths(maze) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-e2', title: 'Unique Paths (No Obstacles)', difficulty: 'Easy',
    description: 'A robot is located at the top-left corner of an `m x n` grid. The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid. How many possible unique paths are there? (No obstacles version — foundational path counting.)',
    constraints: ['1 <= m, n <= 100'],
    examples: [
      { input: 'm = 3, n = 7', output: '28', explanation: 'There are 28 unique paths on a 3x7 grid.' },
      { input: 'm = 3, n = 2', output: '3', explanation: '3 unique paths on a 3x2 grid.' }
    ],
    testCases: [
      { input: '3 7', expectedOutput: '28', hidden: false },
      { input: '3 2', expectedOutput: '3', hidden: false },
      { input: '1 1', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `def unique_paths(m, n):
    pass

m, n = map(int, input().split())
print(unique_paths(m, n))`,
      java: `import java.util.*;

public class Solution {
    public static int uniquePaths(int m, int n) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            System.out.println(uniquePaths(m, n));
        }
    }
}`,
      c: `#include <stdio.h>

int uniquePaths(int m, int n) {
    return 0;
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) == 2) {
        printf("%d\\n", uniquePaths(m, n));
    }
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int uniquePaths(int m, int n) {
    return 0;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        cout << uniquePaths(m, n) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-e3', title: 'Unique Paths II (With Obstacles)', difficulty: 'Easy',
    description: 'A robot starts at the top-left of an `m x n` grid. Some cells are blocked (marked `1`), empty cells are `0`. The robot can only move right or down. Return the number of unique paths from top-left to bottom-right avoiding obstacles.',
    constraints: ['1 <= m, n <= 100', 'obstacleGrid[i][j] is 0 or 1.'],
    examples: [
      { input: 'obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]', output: '2', explanation: 'Middle cell is blocked; 2 paths remain.' }
    ],
    testCases: [
      { input: '3 3\n0 0 0\n0 1 0\n0 0 0', expectedOutput: '2', hidden: false },
      { input: '2 2\n0 1\n0 0', expectedOutput: '1', hidden: false },
      { input: '1 2\n0 1', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `def unique_paths_with_obstacles(grid):
    pass

m, n = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(m)]
print(unique_paths_with_obstacles(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int uniquePathsWithObstacles(int[][] grid) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            int[][] grid = new int[m][n];
            for (int i = 0; i < m; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(uniquePathsWithObstacles(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int uniquePathsWithObstacles(int** grid, int m, int n) {
    return 0;
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    int** grid = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &grid[i][j]);
    }
    printf("%d\\n", uniquePathsWithObstacles(grid, m, n));
    for (int i = 0; i < m; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int uniquePathsWithObstacles(vector<vector<int>>& grid) {
    return 0;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> grid(m, vector<int>(n));
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << uniquePathsWithObstacles(grid) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-e4', title: 'Minimum Path Sum in Grid', difficulty: 'Easy',
    description: 'Given an `m x n` grid filled with non-negative numbers, find a path from top-left to bottom-right, which minimizes the sum of all numbers along its path. You can only move right or down at each step.',
    constraints: ['1 <= m, n <= 200', '0 <= grid[i][j] <= 200'],
    examples: [
      { input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]', output: '7', explanation: 'Path 1→3→1→1→1 has sum 7.' }
    ],
    testCases: [
      { input: '3 3\n1 3 1\n1 5 1\n4 2 1', expectedOutput: '7', hidden: false },
      { input: '2 3\n1 2 3\n4 5 6', expectedOutput: '12', hidden: false }
    ],
    starterCode: {
      python: `def min_path_sum(grid):
    pass

m, n = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(m)]
print(min_path_sum(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int minPathSum(int[][] grid) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            int[][] grid = new int[m][n];
            for (int i = 0; i < m; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(minPathSum(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int minPathSum(int** grid, int m, int n) {
    return 0;
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    int** grid = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &grid[i][j]);
    }
    printf("%d\\n", minPathSum(grid, m, n));
    for (int i = 0; i < m; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int minPathSum(vector<vector<int>>& grid) {
    return 0;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> grid(m, vector<int>(n));
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << minPathSum(grid) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-e5', title: 'Maze - Has Path (Any Direction)', difficulty: 'Easy',
    description: 'Given an `n x n` binary maze where `1` is open and `0` is blocked, a rat starts at `(0,0)` and must reach `(n-1, n-1)`. The rat can move in all 4 directions (Up, Down, Left, Right). Return `true` if a path exists, `false` otherwise.',
    constraints: ['1 <= n <= 10', 'maze[i][j] is 0 or 1.'],
    examples: [
      { input: 'maze = [[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,1,1,1]]', output: 'true', explanation: 'A path exists from (0,0) to (3,3).' },
      { input: 'maze = [[1,0],[0,1]]', output: 'false', explanation: 'No path exists.' }
    ],
    testCases: [
      { input: '4\n1 0 0 0\n1 1 0 0\n0 1 0 0\n0 1 1 1', expectedOutput: 'true', hidden: false },
      { input: '2\n1 0\n0 1', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def has_path(maze):
    pass

n = int(input())
maze = [list(map(int, input().split())) for _ in range(n)]
print(str(has_path(maze)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean hasPath(int[][] maze) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] maze = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) maze[i][j] = sc.nextInt();
            System.out.println(hasPath(maze));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool hasPath(int** maze, int n) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** maze = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        maze[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &maze[i][j]);
    }
    printf("%s\\n", hasPath(maze, n) ? "true" : "false");
    for (int i = 0; i < n; i++) free(maze[i]);
    free(maze);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool hasPath(vector<vector<int>>& maze) {
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> maze(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> maze[i][j];
        cout << (hasPath(maze) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },

  // --- MEDIUM ---
  {
    id: 'rm-m1', title: 'Rat in a Maze - Print All Paths', difficulty: 'Medium',
    description: 'Given an `n x n` binary matrix `maze` where `1` is open and `0` is blocked, a rat starts at `(0,0)` and must reach `(n-1,n-1)`. Moving in all 4 directions (D=Down, L=Left, R=Right, U=Up), print all possible paths as direction strings. Output sorted lexicographically, one path per line.',
    constraints: ['1 <= n <= 5', 'maze[i][j] is 0 or 1.', 'maze[0][0] == 1'],
    examples: [
      { input: 'maze = [[1,0,0,0],[1,1,0,1],[1,1,0,0],[0,1,1,1]]', output: 'DDRDRR\nDDRDRR', explanation: 'Two paths printed lexicographically.' }
    ],
    testCases: [
      { input: '4\n1 0 0 0\n1 1 0 1\n1 1 0 0\n0 1 1 1', expectedOutput: 'DDRDRR\nDDRRDR', hidden: false },
      { input: '2\n1 1\n1 1', expectedOutput: 'DR\nRD', hidden: false },
      { input: '2\n1 0\n0 1', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `def find_paths(maze):
    pass

n = int(input())
maze = [list(map(int, input().split())) for _ in range(n)]
paths = find_paths(maze)
for p in sorted(paths):
    print(p)`,
      java: `import java.util.*;

public class Solution {
    public static List<String> findPaths(int[][] maze) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] maze = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) maze[i][j] = sc.nextInt();
            List<String> paths = findPaths(maze);
            Collections.sort(paths);
            for (String p : paths) System.out.println(p);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char paths[1000][50];
int path_count = 0;

void findPaths(int** maze, int n, int r, int c, char* current, int len, int** visited) {
    // implement backtracking
}

int cmpStr(const void* a, const void* b) { return strcmp((char*)a, (char*)b); }

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** maze = (int**)malloc(n * sizeof(int*));
    int** visited = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        maze[i] = (int*)malloc(n * sizeof(int));
        visited[i] = (int*)calloc(n, sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &maze[i][j]);
    }
    char current[50] = "";
    path_count = 0;
    if (maze[0][0] == 1) findPaths(maze, n, 0, 0, current, 0, visited);
    qsort(paths, path_count, sizeof(paths[0]), cmpStr);
    for (int i = 0; i < path_count; i++) printf("%s\\n", paths[i]);
    for (int i = 0; i < n; i++) { free(maze[i]); free(visited[i]); }
    free(maze); free(visited);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

vector<string> findPaths(vector<vector<int>>& maze) {
    return {};
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> maze(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> maze[i][j];
        vector<string> paths = findPaths(maze);
        sort(paths.begin(), paths.end());
        for (auto& p : paths) cout << p << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-m2', title: 'Shortest Path in Binary Matrix', difficulty: 'Medium',
    description: 'Given an `n x n` binary matrix `grid`, return the length of the shortest clear path from top-left `(0,0)` to bottom-right `(n-1,n-1)`. A clear path passes only through cells with value `0` and connects 8-directionally. Return `-1` if no such path exists. The length is the number of cells visited.',
    constraints: ['1 <= n <= 100', 'grid[i][j] is 0 or 1.'],
    examples: [
      { input: 'grid = [[0,1],[1,0]]', output: '2', explanation: 'The path is (0,0) -> (1,1), length 2.' },
      { input: 'grid = [[0,0,0],[1,1,0],[1,1,0]]', output: '4', explanation: 'Shortest path has length 4.' }
    ],
    testCases: [
      { input: '2\n0 1\n1 0', expectedOutput: '2', hidden: false },
      { input: '3\n0 0 0\n1 1 0\n1 1 0', expectedOutput: '4', hidden: false },
      { input: '2\n1 0\n0 0', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `def shortest_path_binary_matrix(grid):
    pass

n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
print(shortest_path_binary_matrix(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int shortestPathBinaryMatrix(int[][] grid) {
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(shortestPathBinaryMatrix(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int shortestPathBinaryMatrix(int** grid, int n) {
    return -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &grid[i][j]);
    }
    printf("%d\\n", shortestPathBinaryMatrix(grid, n));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
    return -1;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << shortestPathBinaryMatrix(grid) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-m3', title: 'Maze - Count Paths with Exactly K Steps', difficulty: 'Medium',
    description: 'Given an `n x n` binary maze (`1` = open, `0` = blocked), a rat starts at `(0,0)` and must reach `(n-1,n-1)` in exactly `k` steps. Moving in all 4 directions, count the number of distinct paths of exactly `k` steps. The same cell cannot be visited twice in a single path.',
    constraints: ['1 <= n <= 5', '1 <= k <= 20', 'maze[i][j] is 0 or 1.'],
    examples: [
      { input: 'maze = [[1,1,1],[1,1,1],[1,1,1]], k = 4', output: '4', explanation: '4 distinct paths reach (2,2) in exactly 4 steps.' }
    ],
    testCases: [
      { input: '3\n1 1 1\n1 1 1\n1 1 1\n4', expectedOutput: '4', hidden: false },
      { input: '4\n1 0 0 0\n1 1 0 0\n0 1 0 0\n0 1 1 1\n6', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `def count_paths_k_steps(maze, k):
    pass

n = int(input())
maze = [list(map(int, input().split())) for _ in range(n)]
k = int(input())
print(count_paths_k_steps(maze, k))`,
      java: `import java.util.*;

public class Solution {
    public static int countPathsKSteps(int[][] maze, int k) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] maze = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) maze[i][j] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(countPathsKSteps(maze, k));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int countPathsKSteps(int** maze, int n, int k) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** maze = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        maze[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &maze[i][j]);
    }
    int k; scanf("%d", &k);
    printf("%d\\n", countPathsKSteps(maze, n, k));
    for (int i = 0; i < n; i++) free(maze[i]);
    free(maze);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int countPathsKSteps(vector<vector<int>>& maze, int k) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> maze(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> maze[i][j];
        int k; cin >> k;
        cout << countPathsKSteps(maze, k) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-m4', title: 'Minimum Steps to Reach Target (Knight on Chessboard)', difficulty: 'Medium',
    description: 'Given an `n x n` chessboard and a Knight at position `(kr, kc)`, find the minimum number of moves required for the knight to reach target position `(tr, tc)`. A knight moves in an L-shape. Use BFS for shortest path. Return `-1` if unreachable.',
    constraints: ['1 <= n <= 100', '0 <= kr, kc, tr, tc < n'],
    examples: [
      { input: 'n = 6, kr = 1, kc = 1, tr = 4, tc = 5', output: '3', explanation: 'Knight reaches target in 3 moves.' }
    ],
    testCases: [
      { input: '6\n1 1\n4 5', expectedOutput: '3', hidden: false },
      { input: '8\n0 0\n7 7', expectedOutput: '6', hidden: false }
    ],
    starterCode: {
      python: `def min_knight_moves(n, kr, kc, tr, tc):
    pass

n = int(input())
kr, kc = map(int, input().split())
tr, tc = map(int, input().split())
print(min_knight_moves(n, kr, kc, tr, tc))`,
      java: `import java.util.*;

public class Solution {
    public static int minKnightMoves(int n, int kr, int kc, int tr, int tc) {
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int kr = sc.nextInt(), kc = sc.nextInt();
            int tr = sc.nextInt(), tc = sc.nextInt();
            System.out.println(minKnightMoves(n, kr, kc, tr, tc));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int minKnightMoves(int n, int kr, int kc, int tr, int tc) {
    return -1;
}

int main() {
    int n, kr, kc, tr, tc;
    if (scanf("%d", &n) != 1) return 0;
    scanf("%d %d", &kr, &kc);
    scanf("%d %d", &tr, &tc);
    printf("%d\\n", minKnightMoves(n, kr, kc, tr, tc));
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int minKnightMoves(int n, int kr, int kc, int tr, int tc) {
    return -1;
}

int main() {
    int n, kr, kc, tr, tc;
    if (cin >> n >> kr >> kc >> tr >> tc) {
        cout << minKnightMoves(n, kr, kc, tr, tc) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-m5', title: 'Maze with Portals', difficulty: 'Medium',
    description: 'Given an `n x n` maze where `1` is open, `0` is blocked, and cells with value `2` are portal pairs. Stepping on a portal `2` instantly teleports the rat to the other cell with value `2`. The rat starts at `(0,0)` and must reach `(n-1,n-1)` using 4-directional movement. Return `true` if a path exists, `false` otherwise.',
    constraints: ['1 <= n <= 10', 'There are at most 2 cells with value 2 (one portal pair).', 'maze[i][j] is 0, 1, or 2.'],
    examples: [
      { input: 'maze = [[1,1,0,0],[0,1,0,0],[0,2,0,0],[0,0,0,2]]', output: 'true', explanation: 'Rat reaches portal at (2,1) and teleports to (3,3).' }
    ],
    testCases: [
      { input: '4\n1 1 0 0\n0 1 0 0\n0 2 0 0\n0 0 0 2', expectedOutput: 'true', hidden: false },
      { input: '3\n1 0 0\n0 2 0\n0 0 2', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def maze_with_portals(maze):
    pass

n = int(input())
maze = [list(map(int, input().split())) for _ in range(n)]
print(str(maze_with_portals(maze)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean mazeWithPortals(int[][] maze) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] maze = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) maze[i][j] = sc.nextInt();
            System.out.println(mazeWithPortals(maze));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool mazeWithPortals(int** maze, int n) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** maze = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        maze[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &maze[i][j]);
    }
    printf("%s\\n", mazeWithPortals(maze, n) ? "true" : "false");
    for (int i = 0; i < n; i++) free(maze[i]);
    free(maze);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool mazeWithPortals(vector<vector<int>>& maze) {
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> maze(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> maze[i][j];
        cout << (mazeWithPortals(maze) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },

  // --- HARD ---
  {
    id: 'rm-h1', title: 'Rat in a Maze - Collect Maximum Gold', difficulty: 'Hard',
    description: 'Given an `n x n` grid where each cell has a gold value (0 means blocked), a rat starts at `(0,0)` and must reach `(n-1,n-1)` moving in 4 directions without revisiting cells. Find the path that collects maximum gold while reaching the destination. Return the maximum gold collected. If no path exists, return -1.',
    constraints: ['1 <= n <= 10', '0 <= grid[i][j] <= 100'],
    examples: [
      { input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]', output: '12', explanation: 'Path 1→1→5→4→1 collects 12 gold.' }
    ],
    testCases: [
      { input: '3\n1 3 1\n1 5 1\n4 2 1', expectedOutput: '12', hidden: false },
      { input: '3\n1 0 0\n0 0 0\n0 0 1', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `def max_gold_path(grid):
    pass

n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
print(max_gold_path(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int maxGoldPath(int[][] grid) {
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(maxGoldPath(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int maxGoldPath(int** grid, int n) {
    return -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &grid[i][j]);
    }
    printf("%d\\n", maxGoldPath(grid, n));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maxGoldPath(vector<vector<int>>& grid) {
    return -1;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << maxGoldPath(grid) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-h2', title: 'Longest Path in a Maze', difficulty: 'Hard',
    description: 'Given an `n x n` binary maze (`1` = open, `0` = blocked), a rat starts at `(0,0)` and must reach `(n-1,n-1)`. Moving in all 4 directions without revisiting cells, find the length of the longest possible path from source to destination. Return `-1` if no path exists. Length = number of cells visited.',
    constraints: ['1 <= n <= 8', 'maze[i][j] is 0 or 1.'],
    examples: [
      { input: 'maze = [[1,1,1],[1,1,1],[1,1,1]]', output: '9', explanation: 'The longest path visits all 9 cells.' }
    ],
    testCases: [
      { input: '3\n1 1 1\n1 1 1\n1 1 1', expectedOutput: '9', hidden: false },
      { input: '3\n1 0 0\n0 0 0\n0 0 1', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `def longest_path(maze):
    pass

n = int(input())
maze = [list(map(int, input().split())) for _ in range(n)]
print(longest_path(maze))`,
      java: `import java.util.*;

public class Solution {
    public static int longestPath(int[][] maze) {
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] maze = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) maze[i][j] = sc.nextInt();
            System.out.println(longestPath(maze));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int longestPath(int** maze, int n) {
    return -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** maze = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        maze[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &maze[i][j]);
    }
    printf("%d\\n", longestPath(maze, n));
    for (int i = 0; i < n; i++) free(maze[i]);
    free(maze);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int longestPath(vector<vector<int>>& maze) {
    return -1;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> maze(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> maze[i][j];
        cout << longestPath(maze) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-h3', title: 'Minimum Cost Path in Weighted Maze', difficulty: 'Hard',
    description: 'Given an `n x n` grid of costs, find the minimum cost path from `(0,0)` to `(n-1,n-1)` moving in all 4 directions (not just right/down). Each cell has a cost to enter. Use Dijkstra\'s algorithm or backtracking with pruning. Return the minimum cost.',
    constraints: ['1 <= n <= 100', '1 <= grid[i][j] <= 1000'],
    examples: [
      { input: 'grid = [[1,3,1],[1,5,1],[4,2,1]]', output: '7', explanation: 'Path 1→1→1→1→1→2→1 has cost 7 (top-right corner then down).' }
    ],
    testCases: [
      { input: '3\n1 3 1\n1 5 1\n4 2 1', expectedOutput: '7', hidden: false },
      { input: '2\n1 2\n1 1', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: `def min_cost_path(grid):
    pass

n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
print(min_cost_path(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int minCostPath(int[][] grid) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(minCostPath(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int minCostPath(int** grid, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &grid[i][j]);
    }
    printf("%d\\n", minCostPath(grid, n));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

int minCostPath(vector<vector<int>>& grid) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << minCostPath(grid) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-h4', title: 'Rat in Maze - Multiple Rats (Multi-source)', difficulty: 'Hard',
    description: 'Given an `n x n` binary maze, there are multiple rats each starting at different source positions. All rats must reach a single common destination `(n-1, n-1)`. Cells marked `2` indicate rat starting positions. Return the minimum total number of steps across all rats to reach the destination. If any rat cannot reach, return `-1`.',
    constraints: ['1 <= n <= 10', 'maze[i][j] is 0 (blocked), 1 (open), or 2 (rat start).', 'At least one rat exists.'],
    examples: [
      { input: 'maze = [[2,1,0],[1,1,1],[0,1,2]]', output: '5', explanation: 'Rat from (0,0): 4 steps, Rat from (2,2): 0 steps (already at destination). Total = 4.' }
    ],
    testCases: [
      { input: '3\n2 1 0\n1 1 1\n0 1 2', expectedOutput: '4', hidden: false },
      { input: '3\n2 1 1\n0 1 0\n0 1 2', expectedOutput: '6', hidden: false }
    ],
    starterCode: {
      python: `def multi_rat_maze(maze):
    pass

n = int(input())
maze = [list(map(int, input().split())) for _ in range(n)]
print(multi_rat_maze(maze))`,
      java: `import java.util.*;

public class Solution {
    public static int multiRatMaze(int[][] maze) {
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] maze = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) maze[i][j] = sc.nextInt();
            System.out.println(multiRatMaze(maze));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int multiRatMaze(int** maze, int n) {
    return -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** maze = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        maze[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &maze[i][j]);
    }
    printf("%d\\n", multiRatMaze(maze, n));
    for (int i = 0; i < n; i++) free(maze[i]);
    free(maze);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

int multiRatMaze(vector<vector<int>>& maze) {
    return -1;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> maze(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> maze[i][j];
        cout << multiRatMaze(maze) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rm-h5', title: 'Rat in Maze with Keys and Doors', difficulty: 'Hard',
    description: 'You are given an `n x n` grid where: `0` = wall, `1` = open path, lowercase letters = keys, uppercase letters = locked doors (require matching key). A rat starts at `(0,0)` and must reach `(n-1,n-1)`. The rat can pick up keys to unlock doors. Return the minimum number of steps to reach the destination, or `-1` if impossible. Use BFS with state = (row, col, keys_collected_bitmask).',
    constraints: ['1 <= n <= 10', 'At most 6 keys (a-f) and 6 doors (A-F).'],
    examples: [
      { input: 'grid = [[1,1,1],[1,"A",1],["a",1,1]]', output: '4', explanation: 'Rat picks up key "a" then passes door "A" to reach goal in 4 steps.' }
    ],
    testCases: [
      { input: '3\n1 1 1\n1 A 1\na 1 1', expectedOutput: '4', hidden: false },
      { input: '2\n1 A\na 1', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: `def maze_with_keys(grid):
    pass

n = int(input())
grid = [input().split() for _ in range(n)]
print(maze_with_keys(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int mazeWithKeys(String[][] grid) {
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[][] grid = new String[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.next();
            System.out.println(mazeWithKeys(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int mazeWithKeys(char grid[][11][5], int n) {
    return -1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char grid[11][11][5];
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++) scanf("%s", grid[i][j]);
    printf("%d\\n", mazeWithKeys(grid, n));
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <queue>
using namespace std;

int mazeWithKeys(vector<vector<string>>& grid) {
    return -1;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<string>> grid(n, vector<string>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << mazeWithKeys(grid) << "\\n";
    }
    return 0;
}`
    }
  }
];