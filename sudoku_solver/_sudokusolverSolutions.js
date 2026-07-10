export const sudokuSolverSolutions = [
  // --- EASY SOLUTIONS ---
  {
    id: 'ss-e1',
    solutions: {
      python: `def is_valid_sudoku(board):
    rows = [set() for _ in range(9)]
    cols = [set() for _ in range(9)]
    boxes = [set() for _ in range(9)]
    for i in range(9):
        for j in range(9):
            val = board[i][j]
            if val == '.': continue
            box_idx = (i // 3) * 3 + (j // 3)
            if val in rows[i] or val in cols[j] or val in boxes[box_idx]:
                return False
            rows[i].add(val)
            cols[j].add(val)
            boxes[box_idx].add(val)
    return True`,
      java: `    public static boolean isValidSudoku(char[][] board) {
        boolean[][] rows = new boolean[9][9];
        boolean[][] cols = new boolean[9][9];
        boolean[][] boxes = new boolean[9][9];
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') continue;
                int val = board[i][j] - '1';
                int box = (i / 3) * 3 + (j / 3);
                if (rows[i][val] || cols[j][val] || boxes[box][val]) return false;
                rows[i][val] = cols[j][val] = boxes[box][val] = true;
            }
        }
        return true;
    }`,
      c: `bool isValidSudoku(char board[9][9]) {
    bool rows[9][9] = {false};
    bool cols[9][9] = {false};
    bool boxes[9][9] = {false};
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') continue;
            int val = board[i][j] - '1';
            int box = (i / 3) * 3 + (j / 3);
            if (rows[i][val] || cols[j][val] || boxes[box][val]) return false;
            rows[i][val] = cols[j][val] = boxes[box][val] = true;
        }
    }
    return true;
}`,
      cpp: `bool isValidSudoku(vector<vector<char>>& board) {
    vector<vector<bool>> rows(9, vector<bool>(9, false));
    vector<vector<bool>> cols(9, vector<bool>(9, false));
    vector<vector<bool>> boxes(9, vector<bool>(9, false));
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') continue;
            int val = board[i][j] - '1';
            int box = (i / 3) * 3 + (j / 3);
            if (rows[i][val] || cols[j][val] || boxes[box][val]) return false;
            rows[i][val] = cols[j][val] = boxes[box][val] = true;
        }
    }
    return true;
}`
    }
  },
  {
    id: 'ss-e2',
    solutions: {
      python: `def check_valid(matrix):
    n = len(matrix)
    for i in range(n):
        row_seen = set()
        col_seen = set()
        for j in range(n):
            if matrix[i][j] in row_seen: return False
            row_seen.add(matrix[i][j])
            if matrix[j][i] in col_seen: return False
            col_seen.add(matrix[j][i])
    return True`,
      java: `    public static boolean checkValid(int[][] matrix) {
        int n = matrix.length;
        for (int i = 0; i < n; i++) {
            boolean[] rowSeen = new boolean[n + 1];
            boolean[] colSeen = new boolean[n + 1];
            for (int j = 0; j < n; j++) {
                if (rowSeen[matrix[i][j]]) return false;
                rowSeen[matrix[i][j]] = true;
                if (colSeen[matrix[j][i]]) return false;
                colSeen[matrix[j][i]] = true;
            }
        }
        return true;
    }`,
      c: `bool checkValid(int** matrix, int n) {
    for (int i = 0; i < n; i++) {
        bool rowSeen[n + 1]; bool colSeen[n + 1];
        for (int k = 0; k <= n; k++) rowSeen[k] = colSeen[k] = false;
        for (int j = 0; j < n; j++) {
            if (rowSeen[matrix[i][j]]) return false;
            rowSeen[matrix[i][j]] = true;
            if (colSeen[matrix[j][i]]) return false;
            colSeen[matrix[j][i]] = true;
        }
    }
    return true;
}`,
      cpp: `bool checkValid(vector<vector<int>>& matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; i++) {
        vector<bool> rowSeen(n + 1, false), colSeen(n + 1, false);
        for (int j = 0; j < n; j++) {
            if (rowSeen[matrix[i][j]]) return false;
            rowSeen[matrix[i][j]] = true;
            if (colSeen[matrix[j][i]]) return false;
            colSeen[matrix[j][i]] = true;
        }
    }
    return true;
}`
    }
  },
  {
    id: 'ss-e3',
    solutions: {
      python: `def flood_fill(image, sr, sc, color):
    original = image[sr][sc]
    if original == color: return image
    def dfs(r, c):
        if r < 0 or r >= len(image) or c < 0 or c >= len(image[0]): return
        if image[r][c] != original: return
        image[r][c] = color
        dfs(r+1, c); dfs(r-1, c); dfs(r, c+1); dfs(r, c-1)
    dfs(sr, sc)
    return image`,
      java: `    static int[][] floodFillHelper(int[][] image, int r, int c, int color, int orig) {
        if (r < 0 || r >= image.length || c < 0 || c >= image[0].length) return image;
        if (image[r][c] != orig) return image;
        image[r][c] = color;
        floodFillHelper(image, r+1, c, color, orig);
        floodFillHelper(image, r-1, c, color, orig);
        floodFillHelper(image, r, c+1, color, orig);
        floodFillHelper(image, r, c-1, color, orig);
        return image;
    }
    public static int[][] floodFill(int[][] image, int sr, int sc, int color) {
        int orig = image[sr][sc];
        if (orig == color) return image;
        return floodFillHelper(image, sr, sc, color, orig);
    }`,
      c: `void dfs(int** image, int m, int n, int r, int c, int color, int orig) {
    if (r < 0 || r >= m || c < 0 || c >= n || image[r][c] != orig) return;
    image[r][c] = color;
    dfs(image, m, n, r+1, c, color, orig);
    dfs(image, m, n, r-1, c, color, orig);
    dfs(image, m, n, r, c+1, color, orig);
    dfs(image, m, n, r, c-1, color, orig);
}
void floodFill(int** image, int m, int n, int sr, int sc, int color) {
    int orig = image[sr][sc];
    if (orig == color) return;
    dfs(image, m, n, sr, sc, color, orig);
}`,
      cpp: `void dfs(vector<vector<int>>& image, int r, int c, int color, int orig) {
    if (r < 0 || r >= image.size() || c < 0 || c >= image[0].size()) return;
    if (image[r][c] != orig) return;
    image[r][c] = color;
    dfs(image, r+1, c, color, orig);
    dfs(image, r-1, c, color, orig);
    dfs(image, r, c+1, color, orig);
    dfs(image, r, c-1, color, orig);
}
vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {
    int orig = image[sr][sc];
    if (orig != color) dfs(image, sr, sc, color, orig);
    return image;
}`
    }
  },
  {
    id: 'ss-e4',
    solutions: {
      python: `def island_perimeter(grid):
    m, n = len(grid), len(grid[0])
    perimeter = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] == 1:
                perimeter += 4
                if i > 0 and grid[i-1][j] == 1: perimeter -= 2
                if j > 0 and grid[i][j-1] == 1: perimeter -= 2
    return perimeter`,
      java: `    public static int islandPerimeter(int[][] grid) {
        int m = grid.length, n = grid[0].length, perimeter = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    perimeter += 4;
                    if (i > 0 && grid[i-1][j] == 1) perimeter -= 2;
                    if (j > 0 && grid[i][j-1] == 1) perimeter -= 2;
                }
            }
        }
        return perimeter;
    }`,
      c: `int islandPerimeter(int** grid, int m, int n) {
    int perimeter = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                perimeter += 4;
                if (i > 0 && grid[i-1][j] == 1) perimeter -= 2;
                if (j > 0 && grid[i][j-1] == 1) perimeter -= 2;
            }
        }
    }
    return perimeter;
}`,
      cpp: `int islandPerimeter(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size(), perimeter = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                perimeter += 4;
                if (i > 0 && grid[i-1][j] == 1) perimeter -= 2;
                if (j > 0 && grid[i][j-1] == 1) perimeter -= 2;
            }
        }
    }
    return perimeter;
}`
    }
  },
  {
    id: 'ss-e5',
    solutions: {
      python: `def subset_xor_sum(nums):
    total = 0
    def backtrack(idx, current_xor):
        nonlocal total
        total += current_xor
        for i in range(idx, len(nums)):
            backtrack(i + 1, current_xor ^ nums[i])
    backtrack(0, 0)
    return total`,
      java: `    static int total = 0;
    static void backtrack(int[] nums, int idx, int curXor) {
        total += curXor;
        for (int i = idx; i < nums.length; i++) {
            backtrack(nums, i + 1, curXor ^ nums[i]);
        }
    }
    public static int subsetXORSum(int[] nums) {
        total = 0;
        backtrack(nums, 0, 0);
        return total;
    }`,
      c: `int total_xor;
void backtrack(int* nums, int n, int idx, int curXor) {
    total_xor += curXor;
    for (int i = idx; i < n; i++) {
        backtrack(nums, n, i + 1, curXor ^ nums[i]);
    }
}
int subsetXORSum(int* nums, int n) {
    total_xor = 0;
    backtrack(nums, n, 0, 0);
    return total_xor;
}`,
      cpp: `int total_val = 0;
void backtrack(vector<int>& nums, int idx, int curXor) {
    total_val += curXor;
    for (int i = idx; i < nums.size(); i++) {
        backtrack(nums, i + 1, curXor ^ nums[i]);
    }
}
int subsetXORSum(vector<int>& nums) {
    total_val = 0;
    backtrack(nums, 0, 0);
    return total_val;
}`
    }
  },

  // --- MEDIUM SOLUTIONS ---
  {
    id: 'ss-m1',
    solutions: {
      python: `def exist(board, word):
    m, n = len(board), len(board[0])
    def dfs(i, j, k):
        if k == len(word): return True
        if i < 0 or i >= m or j < 0 or j >= n: return False
        if board[i][j] != word[k]: return False
        temp = board[i][j]
        board[i][j] = '#'
        found = dfs(i+1,j,k+1) or dfs(i-1,j,k+1) or dfs(i,j+1,k+1) or dfs(i,j-1,k+1)
        board[i][j] = temp
        return found
    for i in range(m):
        for j in range(n):
            if dfs(i, j, 0): return True
    return False`,
      java: `    static boolean dfs(char[][] board, String word, int i, int j, int k) {
        if (k == word.length()) return true;
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return false;
        if (board[i][j] != word.charAt(k)) return false;
        char temp = board[i][j]; board[i][j] = '#';
        boolean found = dfs(board,word,i+1,j,k+1) || dfs(board,word,i-1,j,k+1)
                     || dfs(board,word,i,j+1,k+1) || dfs(board,word,i,j-1,k+1);
        board[i][j] = temp;
        return found;
    }
    public static boolean exist(char[][] board, String word) {
        for (int i = 0; i < board.length; i++)
            for (int j = 0; j < board[0].length; j++)
                if (dfs(board, word, i, j, 0)) return true;
        return false;
    }`,
      c: `bool dfs(char** board, int m, int n, char* word, int i, int j, int k) {
    if (word[k] == '\\0') return true;
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[k]) return false;
    char temp = board[i][j]; board[i][j] = '#';
    bool found = dfs(board,m,n,word,i+1,j,k+1) || dfs(board,m,n,word,i-1,j,k+1)
              || dfs(board,m,n,word,i,j+1,k+1) || dfs(board,m,n,word,i,j-1,k+1);
    board[i][j] = temp;
    return found;
}
bool exist(char** board, int m, int n, char* word) {
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (dfs(board, m, n, word, i, j, 0)) return true;
    return false;
}`,
      cpp: `bool dfs(vector<vector<char>>& board, string& word, int i, int j, int k) {
    if (k == word.size()) return true;
    if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size()) return false;
    if (board[i][j] != word[k]) return false;
    char temp = board[i][j]; board[i][j] = '#';
    bool found = dfs(board,word,i+1,j,k+1) || dfs(board,word,i-1,j,k+1)
              || dfs(board,word,i,j+1,k+1) || dfs(board,word,i,j-1,k+1);
    board[i][j] = temp;
    return found;
}
bool exist(vector<vector<char>>& board, string word) {
    for (int i = 0; i < board.size(); i++)
        for (int j = 0; j < board[0].size(); j++)
            if (dfs(board, word, i, j, 0)) return true;
    return false;
}`
    }
  },
  {
    id: 'ss-m2',
    solutions: {
      python: `def letter_combinations(digits):
    if not digits: return []
    phone = {'2':'abc','3':'def','4':'ghi','5':'jkl','6':'mno','7':'pqrs','8':'tuv','9':'wxyz'}
    res = []
    def backtrack(idx, path):
        if idx == len(digits):
            res.append(path)
            return
        for c in phone[digits[idx]]:
            backtrack(idx + 1, path + c)
    backtrack(0, "")
    return res`,
      java: `    static String[] phone = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    static List<String> result = new ArrayList<>();
    static void backtrack(String digits, int idx, StringBuilder path) {
        if (idx == digits.length()) { result.add(path.toString()); return; }
        for (char c : phone[digits.charAt(idx) - '0'].toCharArray()) {
            path.append(c);
            backtrack(digits, idx + 1, path);
            path.deleteCharAt(path.length() - 1);
        }
    }
    public static List<String> letterCombinations(String digits) {
        result = new ArrayList<>();
        if (!digits.isEmpty()) backtrack(digits, 0, new StringBuilder());
        return result;
    }`,
      c: `const char* phone[] = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
char path[20];
char** res;
int resSize;
void backtrack(char* digits, int idx, int pathLen) {
    if (digits[idx] == '\\0') {
        res[resSize] = (char*)malloc(pathLen + 1);
        strncpy(res[resSize], path, pathLen);
        res[resSize][pathLen] = '\\0';
        resSize++;
        return;
    }
    const char* letters = phone[digits[idx] - '0'];
    for (int i = 0; letters[i]; i++) {
        path[pathLen] = letters[i];
        backtrack(digits, idx + 1, pathLen + 1);
    }
}
char** letterCombinations(char* digits, int* returnSize) {
    *returnSize = 0;
    if (!digits[0]) return NULL;
    res = (char**)malloc(10000 * sizeof(char*));
    resSize = 0;
    backtrack(digits, 0, 0);
    *returnSize = resSize;
    return res;
}`,
      cpp: `vector<string> letterCombinations(string digits) {
    if (digits.empty()) return {};
    vector<string> phone = {"","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
    vector<string> res;
    string path = "";
    function<void(int)> backtrack = [&](<int idx>) {
        if (idx == digits.size()) { res.push_back(path); return; }
        for (char c : phone[digits[idx] - '0']) {
            path += c;
            backtrack(idx + 1);
            path.pop_back();
        }
    };
    backtrack(0);
    return res;
}`
    }
  },
  {
    id: 'ss-m3',
    solutions: {
      python: `def num_islands(grid):
    if not grid: return 0
    m, n = len(grid), len(grid[0])
    count = 0
    def dfs(i, j):
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] != '1': return
        grid[i][j] = '0'
        dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1)
    for i in range(m):
        for j in range(n):
            if grid[i][j] == '1':
                dfs(i, j)
                count += 1
    return count`,
      java: `    static void dfs(char[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] != '1') return;
        grid[i][j] = '0';
        dfs(grid,i+1,j); dfs(grid,i-1,j); dfs(grid,i,j+1); dfs(grid,i,j-1);
    }
    public static int numIslands(char[][] grid) {
        int count = 0;
        for (int i = 0; i < grid.length; i++)
            for (int j = 0; j < grid[0].length; j++)
                if (grid[i][j] == '1') { dfs(grid, i, j); count++; }
        return count;
    }`,
      c: `void dfs(char** grid, int m, int n, int i, int j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != '1') return;
    grid[i][j] = '0';
    dfs(grid,m,n,i+1,j); dfs(grid,m,n,i-1,j);
    dfs(grid,m,n,i,j+1); dfs(grid,m,n,i,j-1);
}
int numIslands(char** grid, int m, int n) {
    int count = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (grid[i][j] == '1') { dfs(grid,m,n,i,j); count++; }
    return count;
}`,
      cpp: `void dfs(vector<vector<char>>& grid, int i, int j) {
    if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() || grid[i][j] != '1') return;
    grid[i][j] = '0';
    dfs(grid,i+1,j); dfs(grid,i-1,j); dfs(grid,i,j+1); dfs(grid,i,j-1);
}
int numIslands(vector<vector<char>>& grid) {
    int count = 0;
    for (int i = 0; i < grid.size(); i++)
        for (int j = 0; j < grid[0].size(); j++)
            if (grid[i][j] == '1') { dfs(grid, i, j); count++; }
    return count;
}`
    }
  },
  {
    id: 'ss-m4',
    solutions: {
      python: `def generate_parenthesis(n):
    res = []
    def backtrack(s, open_count, close_count):
        if len(s) == 2 * n:
            res.append(s)
            return
        if open_count < n:
            backtrack(s + '(', open_count + 1, close_count)
        if close_count < open_count:
            backtrack(s + ')', open_count, close_count + 1)
    backtrack("", 0, 0)
    return res`,
      java: `    static List<String> res = new ArrayList<>();
    static void backtrack(String s, int open, int close, int n) {
        if (s.length() == 2 * n) { res.add(s); return; }
        if (open < n) backtrack(s + "(", open + 1, close, n);
        if (close < open) backtrack(s + ")", open, close + 1, n);
    }
    public static List<String> generateParenthesis(int n) {
        res = new ArrayList<>();
        backtrack("", 0, 0, n);
        return res;
    }`,
      c: `char** res_gp;
int res_gp_size;
void backtrack(char* path, int len, int open, int close, int n) {
    if (len == 2 * n) {
        res_gp[res_gp_size] = (char*)malloc((len + 1) * sizeof(char));
        strncpy(res_gp[res_gp_size], path, len);
        res_gp[res_gp_size][len] = '\\0';
        res_gp_size++;
        return;
    }
    if (open < n) { path[len] = '('; backtrack(path, len+1, open+1, close, n); }
    if (close < open) { path[len] = ')'; backtrack(path, len+1, open, close+1, n); }
}
char** generateParenthesis(int n, int* returnSize) {
    res_gp = (char**)malloc(10000 * sizeof(char*));
    res_gp_size = 0;
    char path[20];
    backtrack(path, 0, 0, 0, n);
    *returnSize = res_gp_size;
    return res_gp;
}`,
      cpp: `vector<string> generateParenthesis(int n) {
    vector<string> res;
    function<void(string, int, int)> backtrack = [&](<string s, int open, int close>) {
        if (s.length() == 2 * n) { res.push_back(s); return; }
        if (open < n) backtrack(s + "(", open + 1, close);
        if (close < open) backtrack(s + ")", open, close + 1);
    };
    backtrack("", 0, 0);
    return res;
}`
    }
  },
  {
    id: 'ss-m5',
    solutions: {
      python: `def get_maximum_gold(grid):
    m, n = len(grid), len(grid[0])
    def dfs(i, j):
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 0: return 0
        temp = grid[i][j]
        grid[i][j] = 0
        best = max(dfs(i+1,j), dfs(i-1,j), dfs(i,j+1), dfs(i,j-1))
        grid[i][j] = temp
        return temp + best
    ans = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] != 0:
                ans = max(ans, dfs(i, j))
    return ans`,
      java: `    static int dfs(int[][] grid, int i, int j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] == 0) return 0;
        int temp = grid[i][j]; grid[i][j] = 0;
        int best = Math.max(Math.max(dfs(grid,i+1,j), dfs(grid,i-1,j)),
                            Math.max(dfs(grid,i,j+1), dfs(grid,i,j-1)));
        grid[i][j] = temp;
        return temp + best;
    }
    public static int getMaximumGold(int[][] grid) {
        int ans = 0;
        for (int i = 0; i < grid.length; i++)
            for (int j = 0; j < grid[0].length; j++)
                if (grid[i][j] != 0) ans = Math.max(ans, dfs(grid, i, j));
        return ans;
    }`,
      c: `int dfs_gold(int** grid, int m, int n, int i, int j) {
    if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == 0) return 0;
    int temp = grid[i][j]; grid[i][j] = 0;
    int a = dfs_gold(grid,m,n,i+1,j), b = dfs_gold(grid,m,n,i-1,j);
    int c = dfs_gold(grid,m,n,i,j+1), d = dfs_gold(grid,m,n,i,j-1);
    int best = a > b ? a : b; best = best > c ? best : c; best = best > d ? best : d;
    grid[i][j] = temp;
    return temp + best;
}
int getMaximumGold(int** grid, int m, int n) {
    int ans = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            if (grid[i][j] != 0) {
                int val = dfs_gold(grid, m, n, i, j);
                if (val > ans) ans = val;
            }
    return ans;
}`,
      cpp: `int dfs(vector<vector<int>>& grid, int i, int j) {
    if (i < 0 || i >= grid.size() || j < 0 || j >= grid[0].size() || grid[i][j] == 0) return 0;
    int temp = grid[i][j]; grid[i][j] = 0;
    int best = max({dfs(grid,i+1,j), dfs(grid,i-1,j), dfs(grid,i,j+1), dfs(grid,i,j-1)});
    grid[i][j] = temp;
    return temp + best;
}
int getMaximumGold(vector<vector<int>>& grid) {
    int ans = 0;
    for (int i = 0; i < grid.size(); i++)
        for (int j = 0; j < grid[0].size(); j++)
            if (grid[i][j] != 0) ans = max(ans, dfs(grid, i, j));
    return ans;
}`
    }
  },

  // --- HARD SOLUTIONS ---
  {
    id: 'ss-h1',
    solutions: {
      python: `def solve_sudoku(board):
    def is_valid(board, row, col, num):
        for i in range(9):
            if board[row][i] == num: return False
            if board[i][col] == num: return False
            if board[3*(row//3)+i//3][3*(col//3)+i%3] == num: return False
        return True
    def solve(board):
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    for num in '123456789':
                        if is_valid(board, i, j, num):
                            board[i][j] = num
                            if solve(board): return True
                            board[i][j] = '.'
                    return False
        return True
    solve(board)`,
      java: `    static boolean isValid(char[][] board, int row, int col, char num) {
        for (int i = 0; i < 9; i++) {
            if (board[row][i] == num) return false;
            if (board[i][col] == num) return false;
            if (board[3*(row/3)+i/3][3*(col/3)+i%3] == num) return false;
        }
        return true;
    }
    static boolean solve(char[][] board) {
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) {
                if (board[i][j] == '.') {
                    for (char c = '1'; c <= '9'; c++) {
                        if (isValid(board, i, j, c)) {
                            board[i][j] = c;
                            if (solve(board)) return true;
                            board[i][j] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    public static void solveSudoku(char[][] board) { solve(board); }`,
      c: `bool isValid(char board[9][9], int row, int col, char num) {
    for (int i = 0; i < 9; i++) {
        if (board[row][i] == num) return false;
        if (board[i][col] == num) return false;
        if (board[3*(row/3)+i/3][3*(col/3)+i%3] == num) return false;
    }
    return true;
}
bool solve(char board[9][9]) {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (char c = '1'; c <= '9'; c++) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c;
                        if (solve(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}
void solveSudoku(char board[9][9]) { solve(board); }`,
      cpp: `bool isValid(vector<vector<char>>& board, int row, int col, char num) {
    for (int i = 0; i < 9; i++) {
        if (board[row][i] == num) return false;
        if (board[i][col] == num) return false;
        if (board[3*(row/3)+i/3][3*(col/3)+i%3] == num) return false;
    }
    return true;
}
bool solve(vector<vector<char>>& board) {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (char c = '1'; c <= '9'; c++) {
                    if (isValid(board, i, j, c)) {
                        board[i][j] = c;
                        if (solve(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}
void solveSudoku(vector<vector<char>>& board) { solve(board); }`
    }
  },
  {
    id: 'ss-h2',
    solutions: {
      python: `def total_n_queens(n):
    count = [0]
    cols = set(); diag1 = set(); diag2 = set()
    def backtrack(row):
        if row == n:
            count[0] += 1
            return
        for col in range(n):
            if col in cols or (row - col) in diag1 or (row + col) in diag2:
                continue
            cols.add(col); diag1.add(row - col); diag2.add(row + col)
            backtrack(row + 1)
            cols.remove(col); diag1.remove(row - col); diag2.remove(row + col)
    backtrack(0)
    return count[0]`,
      java: `    static int count_nq;
    static boolean[] cols_nq, diag1_nq, diag2_nq;
    static void backtrack(int row, int n) {
        if (row == n) { count_nq++; return; }
        for (int col = 0; col < n; col++) {
            if (cols_nq[col] || diag1_nq[row - col + n] || diag2_nq[row + col]) continue;
            cols_nq[col] = diag1_nq[row - col + n] = diag2_nq[row + col] = true;
            backtrack(row + 1, n);
            cols_nq[col] = diag1_nq[row - col + n] = diag2_nq[row + col] = false;
        }
    }
    public static int totalNQueens(int n) {
        count_nq = 0;
        cols_nq = new boolean[n];
        diag1_nq = new boolean[2 * n];
        diag2_nq = new boolean[2 * n];
        backtrack(0, n);
        return count_nq;
    }`,
      c: `int count_nq;
bool cols_nq[10], diag1_nq[20], diag2_nq[20];
void backtrack_nq(int row, int n) {
    if (row == n) { count_nq++; return; }
    for (int col = 0; col < n; col++) {
        if (cols_nq[col] || diag1_nq[row - col + n] || diag2_nq[row + col]) continue;
        cols_nq[col] = diag1_nq[row - col + n] = diag2_nq[row + col] = true;
        backtrack_nq(row + 1, n);
        cols_nq[col] = diag1_nq[row - col + n] = diag2_nq[row + col] = false;
    }
}
int totalNQueens(int n) {
    count_nq = 0;
    memset(cols_nq, 0, sizeof(cols_nq));
    memset(diag1_nq, 0, sizeof(diag1_nq));
    memset(diag2_nq, 0, sizeof(diag2_nq));
    backtrack_nq(0, n);
    return count_nq;
}`,
      cpp: `int totalNQueens(int n) {
    int count = 0;
    vector<bool> cols(n, false), diag1(2*n, false), diag2(2*n, false);
    function<void(int)> backtrack = [&](<int row>) {
        if (row == n) { count++; return; }
        for (int col = 0; col < n; col++) {
            if (cols[col] || diag1[row-col+n] || diag2[row+col]) continue;
            cols[col] = diag1[row-col+n] = diag2[row+col] = true;
            backtrack(row + 1);
            cols[col] = diag1[row-col+n] = diag2[row+col] = false;
        }
    };
    backtrack(0);
    return count;
}`
    }
  },
  {
    id: 'ss-h3',
    solutions: {
      python: `def find_words(board, words):
    # Trie + Backtracking
    from collections import defaultdict
    def build_trie(words):
        trie = {}
        for word in words:
            node = trie
            for c in word:
                node = node.setdefault(c, {})
            node['$'] = word
        return trie
    m, n = len(board), len(board[0])
    trie = build_trie(words)
    res = set()
    def dfs(i, j, node):
        c = board[i][j]
        if c not in node: return
        next_node = node[c]
        if '$' in next_node: res.add(next_node['$'])
        board[i][j] = '#'
        for di, dj in [(1,0),(-1,0),(0,1),(0,-1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < m and 0 <= nj < n and board[ni][nj] != '#':
                dfs(ni, nj, next_node)
        board[i][j] = c
    for i in range(m):
        for j in range(n):
            dfs(i, j, trie)
    return list(res)`,
      java: `    static class TrieNode {
        TrieNode[] children = new TrieNode[26];
        String word = null;
    }
    static void insert(TrieNode root, String word) {
        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (node.children[idx] == null) node.children[idx] = new TrieNode();
            node = node.children[idx];
        }
        node.word = word;
    }
    static Set<String> found = new HashSet<>();
    static void dfs(char[][] board, int i, int j, TrieNode node) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
        char c = board[i][j];
                if (c == '#' || node.children[c - 'a'] == null) return;
        node = node.children[c - 'a'];
        if (node.word != null) found.add(node.word);
        board[i][j] = '#';
        dfs(board, i+1, j, node); dfs(board, i-1, j, node);
        dfs(board, i, j+1, node); dfs(board, i, j-1, node);
        board[i][j] = c;
    }
    public static List<String> findWords(char[][] board, String[] words) {
        TrieNode root = new TrieNode();
        for (String w : words) insert(root, w);
        found = new HashSet<>();
        for (int i = 0; i < board.length; i++)
            for (int j = 0; j < board[0].length; j++)
                dfs(board, i, j, root);
        return new ArrayList<>(found);
    }`,
      c: `#define ALPHA 26
typedef struct TrieNode { struct TrieNode* children[ALPHA]; char word[15]; } TrieNode;
TrieNode* newNode() { TrieNode* n = (TrieNode*)calloc(1, sizeof(TrieNode)); n->word[0]='\\0'; return n; }
void insertTrie(TrieNode* root, char* word) {
    TrieNode* node = root;
    for (int i = 0; word[i]; i++) {
        int idx = word[i] - 'a';
        if (!node->children[idx]) node->children[idx] = newNode();
        node = node->children[idx];
    }
    strcpy(node->word, word);
}
char** found_words; int found_count;
void dfs_w(char** board, int m, int n, int i, int j, TrieNode* node) {
    if (i < 0 || i >= m || j < 0 || j >= n) return;
    char c = board[i][j];
    if (c == '#' || !node->children[c - 'a']) return;
    node = node->children[c - 'a'];
    if (node->word[0]) {
        bool dup = false;
        for (int k = 0; k < found_count; k++) if (!strcmp(found_words[k], node->word)) { dup = true; break; }
        if (!dup) { found_words[found_count] = (char*)malloc(15); strcpy(found_words[found_count++], node->word); }
    }
    board[i][j] = '#';
    dfs_w(board,m,n,i+1,j,node); dfs_w(board,m,n,i-1,j,node);
    dfs_w(board,m,n,i,j+1,node); dfs_w(board,m,n,i,j-1,node);
    board[i][j] = c;
}
char** findWords(char** board, int boardSize, int boardColSize, char** words, int wordsSize, int* returnSize) {
    TrieNode* root = newNode();
    for (int i = 0; i < wordsSize; i++) insertTrie(root, words[i]);
    found_words = (char**)malloc(wordsSize * sizeof(char*));
    found_count = 0;
    for (int i = 0; i < boardSize; i++)
        for (int j = 0; j < boardColSize; j++)
            dfs_w(board, boardSize, boardColSize, i, j, root);
    *returnSize = found_count;
    return found_words;
}`,
      cpp: `struct TrieNode {
    TrieNode* children[26] = {};
    string word = "";
};
void insert(TrieNode* root, string& word) {
    TrieNode* node = root;
    for (char c : word) {
        if (!node->children[c - 'a']) node->children[c - 'a'] = new TrieNode();
        node = node->children[c - 'a'];
    }
    node->word = word;
}
void dfs(vector<vector<char>>& board, int i, int j, TrieNode* node, set<string>& res) {
    if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size()) return;
    char c = board[i][j];
    if (c == '#' || !node->children[c - 'a']) return;
    node = node->children[c - 'a'];
    if (!node->word.empty()) res.insert(node->word);
    board[i][j] = '#';
    dfs(board,i+1,j,node,res); dfs(board,i-1,j,node,res);
    dfs(board,i,j+1,node,res); dfs(board,i,j-1,node,res);
    board[i][j] = c;
}
vector<string> findWords(vector<vector<char>>& board, vector<string>& words) {
    TrieNode* root = new TrieNode();
    for (auto& w : words) insert(root, w);
    set<string> res;
    for (int i = 0; i < board.size(); i++)
        for (int j = 0; j < board[0].size(); j++)
            dfs(board, i, j, root, res);
    return vector<string>(res.begin(), res.end());
}`
    }
  },
  {
    id: 'ss-h4',
    solutions: {
      python: `def unique_paths_iii(grid):
    m, n = len(grid), len(grid[0])
    start_r = start_c = 0
    empty = 0
    for i in range(m):
        for j in range(n):
            if grid[i][j] != -1: empty += 1
            if grid[i][j] == 1: start_r, start_c = i, j
    count = [0]
    def dfs(i, j, remaining):
        if grid[i][j] == 2:
            if remaining == 1: count[0] += 1
            return
        temp = grid[i][j]
        grid[i][j] = -1
        for di, dj in [(1,0),(-1,0),(0,1),(0,-1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] != -1:
                dfs(ni, nj, remaining - 1)
        grid[i][j] = temp
    dfs(start_r, start_c, empty)
    return count[0]`,
      java: `    static int count_up3;
    static int[] drs = {1,-1,0,0};
    static int[] dcs = {0,0,1,-1};
    static void dfs(int[][] grid, int i, int j, int remaining, int m, int n) {
        if (grid[i][j] == 2) {
            if (remaining == 1) count_up3++;
            return;
        }
        int temp = grid[i][j]; grid[i][j] = -1;
        for (int d = 0; d < 4; d++) {
            int ni = i + drs[d], nj = j + dcs[d];
            if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] != -1)
                dfs(grid, ni, nj, remaining - 1, m, n);
        }
        grid[i][j] = temp;
    }
    public static int uniquePathsIII(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int sr = 0, sc = 0, empty = 0;
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != -1) empty++;
                if (grid[i][j] == 1) { sr = i; sc = j; }
            }
        count_up3 = 0;
        dfs(grid, sr, sc, empty, m, n);
        return count_up3;
    }`,
      c: `int count_up3;
int drs[] = {1,-1,0,0};
int dcs[] = {0,0,1,-1};
void dfs_up3(int** grid, int m, int n, int i, int j, int remaining) {
    if (grid[i][j] == 2) {
        if (remaining == 1) count_up3++;
        return;
    }
    int temp = grid[i][j]; grid[i][j] = -1;
    for (int d = 0; d < 4; d++) {
        int ni = i + drs[d], nj = j + dcs[d];
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && grid[ni][nj] != -1)
            dfs_up3(grid, m, n, ni, nj, remaining - 1);
    }
    grid[i][j] = temp;
}
int uniquePathsIII(int** grid, int m, int n) {
    int sr = 0, sc = 0, empty = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            if (grid[i][j] != -1) empty++;
            if (grid[i][j] == 1) { sr = i; sc = j; }
        }
    count_up3 = 0;
    dfs_up3(grid, m, n, sr, sc, empty);
    return count_up3;
}`,
      cpp: `int uniquePathsIII(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size();
    int sr = 0, sc = 0, empty = 0, count = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            if (grid[i][j] != -1) empty++;
            if (grid[i][j] == 1) { sr = i; sc = j; }
        }
    vector<int> dr = {1,-1,0,0}, dc = {0,0,1,-1};
    function<void(int,int,int)> dfs = [&](<int i, int j, int rem>) {
        if (grid[i][j] == 2) { if (rem == 1) count++; return; }
        int temp = grid[i][j]; grid[i][j] = -1;
        for (int d = 0; d < 4; d++) {
            int ni = i+dr[d], nj = j+dc[d];
            if (ni>=0 && ni<m && nj>=0 && nj<n && grid[ni][nj] != -1)
                dfs(ni, nj, rem - 1);
        }
        grid[i][j] = temp;
    };
    dfs(sr, sc, empty);
    return count;
}`
    }
  },
  {
    id: 'ss-h5',
    solutions: {
      python: `def longest_increasing_path(matrix):
    if not matrix: return 0
    m, n = len(matrix), len(matrix[0])
    memo = {}
    def dfs(i, j):
        if (i, j) in memo: return memo[(i, j)]
        best = 1
        for di, dj in [(1,0),(-1,0),(0,1),(0,-1)]:
            ni, nj = i + di, j + dj
            if 0 <= ni < m and 0 <= nj < n and matrix[ni][nj] > matrix[i][j]:
                best = max(best, 1 + dfs(ni, nj))
        memo[(i, j)] = best
        return best
    return max(dfs(i, j) for i in range(m) for j in range(n))`,
      java: `    static int[][] memo_lip;
    static int[] dr = {1,-1,0,0};
    static int[] dc = {0,0,1,-1};
    static int dfs(int[][] matrix, int i, int j) {
        if (memo_lip[i][j] != 0) return memo_lip[i][j];
        int best = 1;
        for (int d = 0; d < 4; d++) {
            int ni = i + dr[d], nj = j + dc[d];
            if (ni >= 0 && ni < matrix.length && nj >= 0 && nj < matrix[0].length
                && matrix[ni][nj] > matrix[i][j]) {
                best = Math.max(best, 1 + dfs(matrix, ni, nj));
            }
        }
        return memo_lip[i][j] = best;
    }
    public static int longestIncreasingPath(int[][] matrix) {
        int m = matrix.length, n = matrix[0].length;
        memo_lip = new int[m][n];
        int ans = 0;
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                ans = Math.max(ans, dfs(matrix, i, j));
        return ans;
    }`,
      c: `int** memo_lip;
int dr[] = {1,-1,0,0};
int dc[] = {0,0,1,-1};
int dfs_lip(int** matrix, int m, int n, int i, int j) {
    if (memo_lip[i][j]) return memo_lip[i][j];
    int best = 1;
    for (int d = 0; d < 4; d++) {
        int ni = i + dr[d], nj = j + dc[d];
        if (ni >= 0 && ni < m && nj >= 0 && nj < n && matrix[ni][nj] > matrix[i][j]) {
            int val = 1 + dfs_lip(matrix, m, n, ni, nj);
            if (val > best) best = val;
        }
    }
    return memo_lip[i][j] = best;
}
int longestIncreasingPath(int** matrix, int m, int n) {
    memo_lip = (int**)calloc(m, sizeof(int*));
    for (int i = 0; i < m; i++) memo_lip[i] = (int*)calloc(n, sizeof(int));
    int ans = 0;
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++) {
            int val = dfs_lip(matrix, m, n, i, j);
            if (val > ans) ans = val;
        }
    for (int i = 0; i < m; i++) free(memo_lip[i]);
    free(memo_lip);
    return ans;
}`,
      cpp: `int longestIncreasingPath(vector<vector<int>>& matrix) {
    int m = matrix.size(), n = matrix[0].size(), ans = 0;
    vector<vector<int>> memo(m, vector<int>(n, 0));
    vector<int> dr = {1,-1,0,0}, dc = {0,0,1,-1};
    function<int(int,int)> dfs = [&](<int i, int j>) -> int {
        if (memo[i][j]) return memo[i][j];
        int best = 1;
        for (int d = 0; d < 4; d++) {
            int ni = i+dr[d], nj = j+dc[d];
            if (ni>=0 && ni<m && nj>=0 && nj<n && matrix[ni][nj] > matrix[i][j])
                best = max(best, 1 + dfs(ni, nj));
        }
        return memo[i][j] = best;
    };
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            ans = max(ans, dfs(i, j));
    return ans;
}`
    }
  }
];