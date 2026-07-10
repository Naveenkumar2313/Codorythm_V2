export const sudokuSolverProblems = [
  // --- EASY ---
  {
    id: 'ss-e1', title: 'Valid Sudoku', difficulty: 'Easy',
    description: 'Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:\n1. Each row must contain the digits `1-9` without repetition.\n2. Each column must contain the digits `1-9` without repetition.\n3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.',
    constraints: ['board.length == 9', 'board[i].length == 9', 'board[i][j] is a digit 1-9 or \'.\'.'],
    examples: [
      { input: 'A standard valid 9x9 sudoku grid.', output: 'true', explanation: 'No rows, columns, or 3x3 blocks contain duplicate numbers.' }
    ],
    testCases: [
      { input: '5 3 . . 7 . . . .\n6 . . 1 9 5 . . .\n. 9 8 . . . . 6 .\n8 . . . 6 . . . 3\n4 . . 8 . 3 . . 1\n7 . . . 2 . . . 6\n. 6 . . . . 2 8 .\n. . . 4 1 9 . . 5\n. . . . 8 . . 7 9', expectedOutput: 'true', hidden: false },
      { input: '8 3 . . 7 . . . .\n6 . . 1 9 5 . . .\n. 9 8 . . . . 6 .\n8 . . . 6 . . . 3\n4 . . 8 . 3 . . 1\n7 . . . 2 . . . 6\n. 6 . . . . 2 8 .\n. . . 4 1 9 . . 5\n. . . . 8 . . 7 9', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def is_valid_sudoku(board):
    pass

board = [input().split() for _ in range(9)]
print(str(is_valid_sudoku(board)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean isValidSudoku(char[][] board) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[][] board = new char[9][9];
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (sc.hasNext()) board[i][j] = sc.next().charAt(0);
            }
        }
        System.out.println(isValidSudoku(board));
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>

bool isValidSudoku(char board[9][9]) {
    return false;
}

int main() {
    char board[9][9];
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            char s[5];
            if (scanf("%s", s) == 1) board[i][j] = s[0];
        }
    }
    printf("%s\\n", isValidSudoku(board) ? "true" : "false");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

bool isValidSudoku(vector<vector<char>>& board) {
    return false;
}

int main() {
    vector<vector<char>> board(9, vector<char>(9));
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            cin >> board[i][j];
        }
    }
    cout << (isValidSudoku(board) ? "true" : "false") << "\\n";
    return 0;
}`
    }
  },
  {
    id: 'ss-e2', title: 'Check if Every Row and Column Contains All Numbers', difficulty: 'Easy',
    description: 'An `n x n` matrix is valid if every row and every column contains all the integers from `1` to `n` (inclusive). Given an `n x n` integer matrix `matrix`, return `true` if the matrix is valid. Otherwise, return `false`.',
    constraints: ['n == matrix.length == matrix[i].length', '1 <= n <= 100', '1 <= matrix[i][j] <= n'],
    examples: [
      { input: 'matrix = [[1,2,3],[3,1,2],[2,3,1]]', output: 'true', explanation: 'Every row and column contains 1, 2, and 3.' }
    ],
    testCases: [
      { input: '3\n1 2 3\n3 1 2\n2 3 1', expectedOutput: 'true', hidden: false },
      { input: '3\n1 1 1\n1 2 3\n1 2 3', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def check_valid(matrix):
    pass

n = int(input())
matrix = [list(map(int, input().split())) for _ in range(n)]
print(str(check_valid(matrix)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean checkValid(int[][] matrix) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] matrix = new int[n][n];
            for(int i = 0; i < n; i++) {
                for(int j = 0; j < n; j++) matrix[i][j] = sc.nextInt();
            }
            System.out.println(checkValid(matrix));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool checkValid(int** matrix, int n) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** matrix = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        matrix[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &matrix[i][j]);
    }
    printf("%s\\n", checkValid(matrix, n) ? "true" : "false");
    for(int i=0; i<n; i++) free(matrix[i]);
    free(matrix);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

bool checkValid(vector<vector<int>>& matrix) {
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> matrix(n, vector<int>(n));
        for(int i = 0; i < n; i++) {
            for(int j = 0; j < n; j++) cin >> matrix[i][j];
        }
        cout << (checkValid(matrix) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-e3', title: 'Flood Fill', difficulty: 'Easy',
    description: 'An image is represented by an `m x n` integer grid `image` where `image[i][j]` represents the pixel value of the image. You are also given three integers `sr`, `sc`, and `color`. Perform a flood fill on the image starting from the pixel `image[sr][sc]`. Return the modified image.',
    constraints: ['1 <= m, n <= 50', '0 <= image[i][j], color < 2^16'],
    examples: [
      { input: 'image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2', output: '2 2 2\n2 2 0\n2 0 1', explanation: 'All adjacent 1s connected to (1,1) are replaced with 2.' }
    ],
    testCases: [
      { input: '3 3\n1 1 1\n1 1 0\n1 0 1\n1 1 2', expectedOutput: '2 2 2\n2 2 0\n2 0 1', hidden: false },
      { input: '2 3\n0 0 0\n0 0 0\n0 0 0', expectedOutput: '0 0 0\n0 0 0', hidden: false }
    ],
    starterCode: {
      python: `def flood_fill(image, sr, sc, color):
    pass

m, n = map(int, input().split())
image = [list(map(int, input().split())) for _ in range(m)]
sr, sc, color = map(int, input().split())
res = flood_fill(image, sr, sc, color)
for row in res:
    print(*(row))`,
      java: `import java.util.*;

public class Solution {
    public static int[][] floodFill(int[][] image, int sr, int sc, int color) {
        return image;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] image = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) image[i][j] = sc.nextInt();
            }
            int sr = sc.nextInt(), sc = sc.nextInt(), color = sc.nextInt();
            int[][] res = floodFill(image, sr, sc, color);
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    System.out.print(res[i][j] + (j == n - 1 ? "" : " "));
                }
                System.out.println();
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void floodFill(int** image, int m, int n, int sr, int sc, int color) {
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    int** image = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        image[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &image[i][j]);
    }
    int sr, sc, color;
    scanf("%d %d %d", &sr, &sc, &color);
    floodFill(image, m, n, sr, sc, color);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            printf("%d%s", image[i][j], j == n - 1 ? "" : " ");
        }
        printf("\\n");
    }
    for(int i=0; i<m; i++) free(image[i]);
    free(image);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {
    return image;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> image(m, vector<int>(n));
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) cin >> image[i][j];
        }
        int sr, sc, color;
        cin >> sr >> sc >> color;
        vector<vector<int>> res = floodFill(image, sr, sc, color);
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) {
                cout << res[i][j] << (j == n - 1 ? "" : " ");
            }
            cout << "\\n";
        }
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-e4', title: 'Island Perimeter', difficulty: 'Easy',
    description: 'You are given `row x col` `grid` representing a map where `grid[i][j] = 1` represents land and `grid[i][j] = 0` represents water. Determine the perimeter of the island. There is exactly one island.',
    constraints: ['1 <= m, n <= 100', 'grid[i][j] is 0 or 1.'],
    examples: [
      { input: 'grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]', output: '16', explanation: 'The perimeter of the connected 1s is 16.' }
    ],
    testCases: [
      { input: '4 4\n0 1 0 0\n1 1 1 0\n0 1 0 0\n1 1 0 0', expectedOutput: '16', hidden: false },
      { input: '1 1\n1', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: `def island_perimeter(grid):
    pass

m, n = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(m)]
print(island_perimeter(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int islandPerimeter(int[][] grid) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] grid = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            }
            System.out.println(islandPerimeter(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int islandPerimeter(int** grid, int m, int n) {
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
    printf("%d\\n", islandPerimeter(grid, m, n));
    for(int i=0; i<m; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int islandPerimeter(vector<vector<int>>& grid) {
    return 0;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> grid(m, vector<int>(n));
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) cin >> grid[i][j];
        }
        cout << islandPerimeter(grid) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-e5', title: 'Sum of All Subset XOR Totals', difficulty: 'Easy',
    description: 'The XOR total of an array is defined as the bitwise XOR of all its elements, or `0` if the array is empty. Given an array `nums`, return the sum of all XOR totals for every subset of `nums`. A classic introduction to backtracking to generate combinations.',
    constraints: ['1 <= nums.length <= 12', '1 <= nums[i] <= 20'],
    examples: [
      { input: 'nums = [1,3]', output: '6', explanation: 'The 4 subsets are: [], [1], [3], [1,3]. XOR sums are 0 + 1 + 3 + 2 = 6.' }
    ],
    testCases: [
      { input: '2\n1 3', expectedOutput: '6', hidden: false },
      { input: '3\n5 1 6', expectedOutput: '28', hidden: false }
    ],
    starterCode: {
      python: `def subset_xor_sum(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(subset_xor_sum(nums))`,
      java: `import java.util.*;

public class Solution {
    public static int subsetXORSum(int[] nums) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(subsetXORSum(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int subsetXORSum(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", subsetXORSum(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int subsetXORSum(vector<int>& nums) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for(int i = 0; i < n; i++) cin >> nums[i];
        cout << subsetXORSum(nums) << "\\n";
    }
    return 0;
}`
    }
  },

  // --- MEDIUM ---
  {
    id: 'ss-m1', title: 'Word Search', difficulty: 'Medium',
    description: 'Given an `m x n` grid of characters `board` and a string `word`, return `true` if `word` exists in the grid. The word can be constructed from letters of sequentially adjacent cells (horizontal or vertical). The same letter cell may not be used more than once.',
    constraints: ['1 <= m, n <= 6', '1 <= word.length <= 15', 'board and word consist of only lowercase and uppercase English letters.'],
    examples: [
      { input: 'board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"', output: 'true', explanation: 'The word ABCCED exists in the grid.' }
    ],
    testCases: [
      { input: '3 4\nA B C E\nS F C S\nA D E E\nABCCED', expectedOutput: 'true', hidden: false },
      { input: '3 4\nA B C E\nS F C S\nA D E E\nABCB', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def exist(board, word):
    pass

m, n = map(int, input().split())
board = [input().split() for _ in range(m)]
word = input().strip()
print(str(exist(board, word)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean exist(char[][] board, String word) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            char[][] board = new char[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) board[i][j] = sc.next().charAt(0);
            }
            String word = sc.next();
            System.out.println(exist(board, word));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool exist(char** board, int m, int n, char* word) {
    return false;
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    char** board = (char**)malloc(m * sizeof(char*));
    for (int i = 0; i < m; i++) {
        board[i] = (char*)malloc(n * sizeof(char));
        for (int j = 0; j < n; j++) {
            char s[5]; scanf("%s", s); board[i][j] = s[0];
        }
    }
    char word[25]; scanf("%s", word);
    printf("%s\\n", exist(board, m, n, word) ? "true" : "false");
    for(int i=0; i<m; i++) free(board[i]);
    free(board);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

bool exist(vector<vector<char>>& board, string word) {
    return false;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<char>> board(m, vector<char>(n));
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) cin >> board[i][j];
        }
        string word; cin >> word;
        cout << (exist(board, word) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-m2', title: 'Letter Combinations of a Phone Number', difficulty: 'Medium',
    description: 'Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer space-separated in lexicographical order. (Mapping: 2->abc, 3->def, 4->ghi, 5->jkl, 6->mno, 7->pqrs, 8->tuv, 9->wxyz).',
    constraints: ['0 <= digits.length <= 4', 'digits[i] is a digit in the range [2, 9].'],
    examples: [
      { input: 'digits = "23"', output: 'ad ae af bd be bf cd ce cf', explanation: 'All combinations of abc and def.' }
    ],
    testCases: [
      { input: '23', expectedOutput: 'ad ae af bd be bf cd ce cf', hidden: false },
      { input: '2', expectedOutput: 'a b c', hidden: false }
    ],
    starterCode: {
      python: `def letter_combinations(digits):
    pass

try:
    digits = input().strip()
    ans = letter_combinations(digits)
    print(*(sorted(ans)))
except EOFError:
    print()`,
      java: `import java.util.*;

public class Solution {
    public static List<String> letterCombinations(String digits) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String digits = sc.next();
            List<String> res = letterCombinations(digits);
            Collections.sort(res);
            for (int i = 0; i < res.size(); i++) {
                System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
            }
            System.out.println();
        } else {
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmpStr(const void* a, const void* b) { return strcmp(*(const char**)a, *(const char**)b); }

char** letterCombinations(char* digits, int* returnSize) {
    *returnSize = 0;
    return NULL;
}

int main() {
    char digits[10] = "";
    if (scanf("%s", digits) == 1) {
        int retSize;
        char** res = letterCombinations(digits, &retSize);
        if (retSize > 0) {
            qsort(res, retSize, sizeof(char*), cmpStr);
            for (int i = 0; i < retSize; i++) {
                printf("%s%s", res[i], i == retSize - 1 ? "" : " ");
            }
        }
        printf("\\n");
    } else {
        printf("\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

vector<string> letterCombinations(string digits) {
    return {};
}

int main() {
    string digits;
    if (cin >> digits) {
        vector<string> res = letterCombinations(digits);
        sort(res.begin(), res.end());
        for (int i = 0; i < res.size(); i++) {
            cout << res[i] << (i == res.size() - 1 ? "" : " ");
        }
        cout << "\\n";
    } else {
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-m3', title: 'Number of Islands', difficulty: 'Medium',
    description: 'Given an `m x n` 2D binary grid `grid` which represents a map of \'1\'s (land) and \'0\'s (water), return the number of islands. Use backtracking/DFS to traverse and sink the islands.',
    constraints: ['1 <= m, n <= 300', 'grid[i][j] is \'0\' or \'1\'.'],
    examples: [
      { input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', output: '3', explanation: 'There are 3 disconnected islands.' }
    ],
    testCases: [
      { input: '4 5\n1 1 0 0 0\n1 1 0 0 0\n0 0 1 0 0\n0 0 0 1 1', expectedOutput: '3', hidden: false },
      { input: '4 5\n1 1 1 1 0\n1 1 0 1 0\n1 1 0 0 0\n0 0 0 0 0', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `def num_islands(grid):
    pass

m, n = map(int, input().split())
grid = [input().split() for _ in range(m)]
print(num_islands(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int numIslands(char[][] grid) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            char[][] grid = new char[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) grid[i][j] = sc.next().charAt(0);
            }
            System.out.println(numIslands(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int numIslands(char** grid, int m, int n) {
    return 0;
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    char** grid = (char**)malloc(m * sizeof(char*));
    for (int i = 0; i < m; i++) {
        grid[i] = (char*)malloc(n * sizeof(char));
        for (int j = 0; j < n; j++) {
            char s[5]; scanf("%s", s); grid[i][j] = s[0];
        }
    }
    printf("%d\\n", numIslands(grid, m, n));
    for(int i=0; i<m; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int numIslands(vector<vector<char>>& grid) {
    return 0;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<char>> grid(m, vector<char>(n));
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) cin >> grid[i][j];
        }
        cout << numIslands(grid) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-m4', title: 'Generate Parentheses', difficulty: 'Medium',
    description: 'Given `n` pairs of parentheses, write a backtracking function to generate all combinations of well-formed parentheses. Print the output as a space-separated string, lexicographically sorted.',
    constraints: ['1 <= n <= 8'],
    examples: [
      { input: 'n = 3', output: '((())) (()()) (())() ()(()) ()()()', explanation: 'All 5 valid combinations for n=3.' }
    ],
    testCases: [
      { input: '3', expectedOutput: '((())) (()()) (())() ()(()) ()()()', hidden: false },
      { input: '1', expectedOutput: '()', hidden: false }
    ],
    starterCode: {
      python: `def generate_parenthesis(n):
    pass

n = int(input())
ans = generate_parenthesis(n)
print(*(sorted(ans)))`,
      java: `import java.util.*;

public class Solution {
    public static List<String> generateParenthesis(int n) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            List<String> res = generateParenthesis(n);
            Collections.sort(res);
            for (int i = 0; i < res.size(); i++) {
                System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmpStr(const void* a, const void* b) { return strcmp(*(const char**)a, *(const char**)b); }

char** generateParenthesis(int n, int* returnSize) {
    *returnSize = 0;
    return NULL;
}

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        int retSize;
        char** res = generateParenthesis(n, &retSize);
        if (retSize > 0) {
            qsort(res, retSize, sizeof(char*), cmpStr);
            for (int i = 0; i < retSize; i++) {
                printf("%s%s", res[i], i == retSize - 1 ? "" : " ");
            }
        }
        printf("\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

vector<string> generateParenthesis(int n) {
    return {};
}

int main() {
    int n;
    if (cin >> n) {
        vector<string> res = generateParenthesis(n);
        sort(res.begin(), res.end());
        for (int i = 0; i < res.size(); i++) {
            cout << res[i] << (i == res.size() - 1 ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-m5', title: 'Path with Maximum Gold', difficulty: 'Medium',
    description: 'In a gold mine `grid` of size `m x n`, each cell contains an amount of gold. You can start and stop collecting gold from any position in the grid that has some gold. You cannot visit the same cell twice. Return the maximum amount of gold you can collect using backtracking.',
    constraints: ['1 <= m, n <= 15', '0 <= grid[i][j] <= 100', 'There are at most 25 cells containing gold.'],
    examples: [
      { input: 'grid = [[0,6,0],[5,8,7],[0,9,0]]', output: '24', explanation: 'Path to get maximum gold: 9 -> 8 -> 7.' }
    ],
    testCases: [
      { input: '3 3\n0 6 0\n5 8 7\n0 9 0', expectedOutput: '24', hidden: false },
      { input: '3 5\n1 0 7 0 0\n2 0 6 0 1\n3 5 6 7 4', expectedOutput: '28', hidden: false }
    ],
    starterCode: {
      python: `def get_maximum_gold(grid):
    pass

m, n = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(m)]
print(get_maximum_gold(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int getMaximumGold(int[][] grid) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            int[][] grid = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            }
            System.out.println(getMaximumGold(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int getMaximumGold(int** grid, int m, int n) {
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
    printf("%d\\n", getMaximumGold(grid, m, n));
    for(int i=0; i<m; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int getMaximumGold(vector<vector<int>>& grid) {
    return 0;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> grid(m, vector<int>(n));
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) cin >> grid[i][j];
        }
        cout << getMaximumGold(grid) << "\\n";
    }
    return 0;
}`
    }
  },

  // --- HARD ---
  {
    id: 'ss-h1', title: 'Sudoku Solver', difficulty: 'Hard',
    description: 'Write a program to solve a Sudoku puzzle by filling the empty cells. A sudoku solution must satisfy all valid 9x9 sudoku rules. Backtracking search is the standard optimal method. Output the solved 9x9 grid space-separated.',
    constraints: ['board.length == 9', 'board[i].length == 9', 'board[i][j] is a digit or \'.\'.', 'It is guaranteed that the input board has only one solution.'],
    examples: [
      { input: 'A 9x9 grid with missing numbers.', output: 'The solved 9x9 grid.', explanation: 'Standard Sudoku rules.' }
    ],
    testCases: [
      { input: '5 3 . . 7 . . . .\n6 . . 1 9 5 . . .\n. 9 8 . . . . 6 .\n8 . . . 6 . . . 3\n4 . . 8 . 3 . . 1\n7 . . . 2 . . . 6\n. 6 . . . . 2 8 .\n. . . 4 1 9 . . 5\n. . . . 8 . . 7 9', expectedOutput: '5 3 4 6 7 8 9 1 2\n6 7 2 1 9 5 3 4 8\n1 9 8 3 4 2 5 6 7\n8 5 9 7 6 1 4 2 3\n4 2 6 8 5 3 7 9 1\n7 1 3 9 2 4 8 5 6\n9 6 1 5 3 7 2 8 4\n2 8 7 4 1 9 6 3 5\n3 4 5 2 8 6 1 7 9', hidden: false }
    ],
    starterCode: {
      python: `def solve_sudoku(board):
    pass

board = [input().split() for _ in range(9)]
solve_sudoku(board)
for row in board:
    print(*(row))`,
      java: `import java.util.*;

public class Solution {
    public static void solveSudoku(char[][] board) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[][] board = new char[9][9];
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (sc.hasNext()) board[i][j] = sc.next().charAt(0);
            }
        }
        solveSudoku(board);
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                System.out.print(board[i][j] + (j == 8 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>

void solveSudoku(char board[9][9]) {
}

int main() {
    char board[9][9];
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            char s[5];
            if (scanf("%s", s) == 1) board[i][j] = s[0];
        }
    }
    solveSudoku(board);
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            printf("%c%s", board[i][j], j == 8 ? "" : " ");
        }
        printf("\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void solveSudoku(vector<vector<char>>& board) {
}

int main() {
    vector<vector<char>> board(9, vector<char>(9));
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            cin >> board[i][j];
        }
    }
    solveSudoku(board);
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            cout << board[i][j] << (j == 8 ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-h2', title: 'N-Queens II', difficulty: 'Hard',
    description: 'The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other. Given an integer `n`, return the number of distinct solutions to the n-queens puzzle.',
    constraints: ['1 <= n <= 9'],
    examples: [
      { input: 'n = 4', output: '2', explanation: 'There are two distinct solutions for a 4x4 board.' }
    ],
    testCases: [
      { input: '4', expectedOutput: '2', hidden: false },
      { input: '8', expectedOutput: '92', hidden: false }
    ],
    starterCode: {
      python: `def total_n_queens(n):
    pass

n = int(input())
print(total_n_queens(n))`,
      java: `import java.util.*;

public class Solution {
    public static int totalNQueens(int n) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            System.out.println(totalNQueens(sc.nextInt()));
        }
    }
}`,
      c: `#include <stdio.h>

int totalNQueens(int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        printf("%d\\n", totalNQueens(n));
    }
    return 0;
}`,
      cpp: `#include <iostream>

using namespace std;

int totalNQueens(int n) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        cout << totalNQueens(n) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-h3', title: 'Word Search II', difficulty: 'Hard',
    description: 'Given an `m x n` `board` of characters and a list of strings `words`, return all words on the board. Each word must be constructed from letters of sequentially adjacent cells (horizontal/vertical). The optimal algorithm involves combining a Trie with Grid Backtracking. Output the found words sorted lexicographically space-separated.',
    constraints: ['1 <= m, n <= 12', '1 <= words.length <= 30^4', '1 <= words[i].length <= 10'],
    examples: [
      { input: 'board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', output: 'eat oath', explanation: 'Both "eat" and "oath" can be traced on the grid.' }
    ],
    testCases: [
      { input: '4 4\no a a n\ne t a e\ni h k r\ni f l v\n4\noath pea eat rain', expectedOutput: 'eat oath', hidden: false },
      { input: '2 2\na b\nc d\n2\nabcb bdca', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `def find_words(board, words):
    pass

m, n = map(int, input().split())
board = [input().split() for _ in range(m)]
k = int(input())
words = input().split()
ans = find_words(board, words)
print(*(sorted(ans)))`,
      java: `import java.util.*;

public class Solution {
    public static List<String> findWords(char[][] board, String[] words) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            char[][] board = new char[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) board[i][j] = sc.next().charAt(0);
            }
            int k = sc.nextInt();
            String[] words = new String[k];
            for (int i = 0; i < k; i++) words[i] = sc.next();
            List<String> ans = findWords(board, words);
            Collections.sort(ans);
            for (int i = 0; i < ans.size(); i++) {
                System.out.print(ans.get(i) + (i == ans.size() - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int cmpStr(const void* a, const void* b) { return strcmp(*(const char**)a, *(const char**)b); }

char** findWords(char** board, int boardSize, int boardColSize, char** words, int wordsSize, int* returnSize) {
    *returnSize = 0;
    return NULL;
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    char** board = (char**)malloc(m * sizeof(char*));
    for (int i = 0; i < m; i++) {
        board[i] = (char*)malloc(n * sizeof(char));
        for (int j = 0; j < n; j++) {
            char s[5]; scanf("%s", s); board[i][j] = s[0];
        }
    }
    int k; scanf("%d", &k);
    char** words = (char**)malloc(k * sizeof(char*));
    for (int i = 0; i < k; i++) {
        words[i] = (char*)malloc(15 * sizeof(char));
        scanf("%s", words[i]);
    }
    int retSize;
    char** ans = findWords(board, m, n, words, k, &retSize);
    if (retSize > 0) {
        qsort(ans, retSize, sizeof(char*), cmpStr);
        for (int i = 0; i < retSize; i++) {
            printf("%s%s", ans[i], i == retSize - 1 ? "" : " ");
        }
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
    return {};
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<char>> board(m, vector<char>(n));
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) cin >> board[i][j];
        }
        int k; cin >> k;
        vector<string> words(k);
        for(int i = 0; i < k; i++) cin >> words[i];
        vector<string> ans = findWords(board, words);
        sort(ans.begin(), ans.end());
        for (int i = 0; i < ans.size(); i++) {
            cout << ans[i] << (i == ans.size() - 1 ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-h4', title: 'Unique Paths III', difficulty: 'Hard',
    description: 'You are given an `m x n` integer array `grid` where `grid[i][j]` could be: `1` (starting square), `2` (ending square), `0` (empty square you can walk over), `-1` (obstacle). Return the number of 4-directional walks from the starting square to the ending square, that walk over EVERY non-obstacle square exactly once. A classic grid backtracking/DFS problem.',
    constraints: ['1 <= m, n <= 20', 'There is exactly one starting square and one ending square.'],
    examples: [
      { input: 'grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]', output: '2', explanation: 'There are exactly 2 valid paths covering all zeros.' }
    ],
    testCases: [
      { input: '3 4\n1 0 0 0\n0 0 0 0\n0 0 2 -1', expectedOutput: '2', hidden: false },
      { input: '3 4\n1 0 0 0\n0 0 0 0\n0 0 0 2', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: `def unique_paths_iii(grid):
    pass

m, n = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(m)]
print(unique_paths_iii(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int uniquePathsIII(int[][] grid) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            int[][] grid = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            }
            System.out.println(uniquePathsIII(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int uniquePathsIII(int** grid, int m, int n) {
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
    printf("%d\\n", uniquePathsIII(grid, m, n));
    for(int i=0; i<m; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int uniquePathsIII(vector<vector<int>>& grid) {
    return 0;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> grid(m, vector<int>(n));
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) cin >> grid[i][j];
        }
        cout << uniquePathsIII(grid) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ss-h5', title: 'Longest Increasing Path in a Matrix', difficulty: 'Hard',
    description: 'Given an `m x n` integers `matrix`, return the length of the longest increasing path in `matrix`. From each cell, you can either move in four directions. You cannot move diagonally or move outside the boundary. Optimal approaches use DFS Backtracking with Memoization.',
    constraints: ['1 <= m, n <= 200', '0 <= matrix[i][j] <= 2^31 - 1'],
    examples: [
      { input: 'matrix = [[9,9,4],[6,6,8],[2,1,1]]', output: '4', explanation: 'The longest increasing path is [1, 2, 6, 9].' }
    ],
    testCases: [
      { input: '3 3\n9 9 4\n6 6 8\n2 1 1', expectedOutput: '4', hidden: false },
      { input: '3 3\n3 4 5\n3 2 6\n2 2 1', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: `def longest_increasing_path(matrix):
    pass

m, n = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(m)]
print(longest_increasing_path(matrix))`,
      java: `import java.util.*;

public class Solution {
    public static int longestIncreasingPath(int[][] matrix) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt(), n = sc.nextInt();
            int[][] matrix = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) matrix[i][j] = sc.nextInt();
            }
            System.out.println(longestIncreasingPath(matrix));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int longestIncreasingPath(int** matrix, int m, int n) {
    return 0;
}

int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2) return 0;
    int** matrix = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        matrix[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &matrix[i][j]);
    }
    printf("%d\\n", longestIncreasingPath(matrix, m, n));
    for(int i=0; i<m; i++) free(matrix[i]);
    free(matrix);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int longestIncreasingPath(vector<vector<int>>& matrix) {
    return 0;
}

int main() {
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> matrix(m, vector<int>(n));
        for(int i = 0; i < m; i++) {
            for(int j = 0; j < n; j++) cin >> matrix[i][j];
        }
        cout << longestIncreasingPath(matrix) << "\\n";
    }
    return 0;
}`
    }
  }
];