export const nQueensSolutions = [
  // --- EASY SOLUTIONS ---
  {
    id: 'nq-e1',
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
void backtrack(int row, int n) {
    if (row == n) { count_nq++; return; }
    for (int col = 0; col < n; col++) {
        if (cols_nq[col] || diag1_nq[row - col + n] || diag2_nq[row + col]) continue;
        cols_nq[col] = diag1_nq[row - col + n] = diag2_nq[row + col] = true;
        backtrack(row + 1, n);
        cols_nq[col] = diag1_nq[row - col + n] = diag2_nq[row + col] = false;
    }
}
int totalNQueens(int n) {
    count_nq = 0;
    memset(cols_nq, 0, sizeof(cols_nq));
    memset(diag1_nq, 0, sizeof(diag1_nq));
    memset(diag2_nq, 0, sizeof(diag2_nq));
    backtrack(0, n);
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
    id: 'nq-e2',
    solutions: {
      python: `def is_safe_placement(grid):
    n = len(grid)
    queens = []
    for i in range(n):
        for j in range(n):
            if grid[i][j] == 1:
                queens.append((i, j))
    for i in range(len(queens)):
        for j in range(i + 1, len(queens)):
            r1, c1 = queens[i]
            r2, c2 = queens[j]
            if r1 == r2 or c1 == c2: return False
            if abs(r1 - r2) == abs(c1 - c2): return False
    return True`,
      java: `    public static boolean isSafePlacement(int[][] grid) {
        int n = grid.length;
        List<int[]> queens = new ArrayList<>();
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++)
                if (grid[i][j] == 1) queens.add(new int[]{i, j});
        for (int i = 0; i < queens.size(); i++) {
            for (int j = i + 1; j < queens.size(); j++) {
                int r1 = queens.get(i)[0], c1 = queens.get(i)[1];
                int r2 = queens.get(j)[0], c2 = queens.get(j)[1];
                if (r1 == r2 || c1 == c2) return false;
                if (Math.abs(r1-r2) == Math.abs(c1-c2)) return false;
            }
        }
        return true;
    }`,
      c: `bool isSafePlacement(int** grid, int n) {
    int qr[100], qc[100], qCount = 0;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            if (grid[i][j] == 1) { qr[qCount] = i; qc[qCount++] = j; }
    for (int i = 0; i < qCount; i++) {
        for (int j = i + 1; j < qCount; j++) {
            if (qr[i] == qr[j] || qc[i] == qc[j]) return false;
            int dr = qr[i]-qr[j]; if (dr<0) dr=-dr;
            int dc = qc[i]-qc[j]; if (dc<0) dc=-dc;
            if (dr == dc) return false;
        }
    }
    return true;
}`,
      cpp: `bool isSafePlacement(vector<vector<int>>& grid) {
    int n = grid.size();
    vector<pair<int,int>> queens;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < n; j++)
            if (grid[i][j] == 1) queens.push_back({i, j});
    for (int i = 0; i < queens.size(); i++) {
        for (int j = i + 1; j < queens.size(); j++) {
            auto [r1,c1] = queens[i]; auto [r2,c2] = queens[j];
            if (r1==r2 || c1==c2) return false;
            if (abs(r1-r2)==abs(c1-c2)) return false;
        }
    }
    return true;
}`
    }
  },
  {
    id: 'nq-e3',
    solutions: {
      python: `def count_rook_placements(n):
    # n rooks, no two in same row/column = n! permutations
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result`,
      java: `    public static int countRookPlacements(int n) {
        int result = 1;
        for (int i = 1; i <= n; i++) result *= i;
        return result;
    }`,
      c: `int countRookPlacements(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) result *= i;
    return result;
}`,
      cpp: `int countRookPlacements(int n) {
    int result = 1;
    for (int i = 1; i <= n; i++) result *= i;
    return result;
}`
    }
  },
  {
    id: 'nq-e4',
    solutions: {
      python: `def permute(nums):
    res = []
    def backtrack(start):
        if start == len(nums):
            res.append(nums[:])
            return
        for i in range(start, len(nums)):
            nums[start], nums[i] = nums[i], nums[start]
            backtrack(start + 1)
            nums[start], nums[i] = nums[i], nums[start]
    nums.sort()
    backtrack(0)
    return res`,
      java: `    static List<List<Integer>> res_p = new ArrayList<>();
    static void backtrack(int[] nums, boolean[] used, List<Integer> current) {
        if (current.size() == nums.length) { res_p.add(new ArrayList<>(current)); return; }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            used[i] = true; current.add(nums[i]);
            backtrack(nums, used, current);
            used[i] = false; current.remove(current.size() - 1);
        }
    }
    public static List<List<Integer>> permute(int[] nums) {
        res_p = new ArrayList<>();
        Arrays.sort(nums);
        backtrack(nums, new boolean[nums.length], new ArrayList<>());
        return res_p;
    }`,
      c: `// See main() in starter code - backtrack() already implements this
int permute_result[800][7];
int permute_count = 0;
int n_perm;
void backtrack_p(int* nums, int* used, int* cur, int depth) {
    if (depth == n_perm) {
        for (int i = 0; i < n_perm; i++) permute_result[permute_count][i] = cur[i];
        permute_count++;
        return;
    }
    for (int i = 0; i < n_perm; i++) {
        if (!used[i]) {
            used[i] = 1; cur[depth] = nums[i];
            backtrack_p(nums, used, cur, depth + 1);
            used[i] = 0;
        }
    }
}
int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }
int cmpRow(const void* a, const void* b) {
    const int* ra = (const int*)a; const int* rb = (const int*)b;
    for (int i = 0; i < n_perm; i++) if (ra[i] != rb[i]) return ra[i] - rb[i];
    return 0;
}
// Full main already provided in starter code`,
      cpp: `vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> res;
    sort(nums.begin(), nums.end());
    vector<bool> used(nums.size(), false);
    vector<int> current;
    function<void()> backtrack = [&]() {
        if (current.size() == nums.size()) { res.push_back(current); return; }
        for (int i = 0; i < nums.size(); i++) {
            if (used[i]) continue;
            used[i] = true; current.push_back(nums[i]);
            backtrack();
            used[i] = false; current.pop_back();
        }
    };
    backtrack();
    return res;
}`
    }
  },
  {
    id: 'nq-e5',
    solutions: {
      python: `def subsets(nums):
    res = []
    nums.sort()
    def backtrack(start, current):
        res.append(current[:])
        for i in range(start, len(nums)):
            current.append(nums[i])
            backtrack(i + 1, current)
            current.pop()
    backtrack(0, [])
    return res`,
      java: `    static List<List<Integer>> res_ss = new ArrayList<>();
    static void backtrack(int[] nums, int start, List<Integer> current) {
        res_ss.add(new ArrayList<>(current));
        for (int i = start; i < nums.length; i++) {
            current.add(nums[i]);
            backtrack(nums, i + 1, current);
            current.remove(current.size() - 1);
        }
    }
    public static List<List<Integer>> subsets(int[] nums) {
        res_ss = new ArrayList<>();
        Arrays.sort(nums);
        backtrack(nums, 0, new ArrayList<>());
        return res_ss;
    }`,
      c: `// Uses backtrack() from starter code
// Key logic:
// void backtrack(int* nums, int* current, int depth, int start) {
//     save current to result
//     for i from start to n:
//         current[depth] = nums[i]
//         backtrack(nums, current, depth+1, i+1)
// }
// Then sort results and print`,
      cpp: `vector<vector<int>> subsets(vector<int>& nums) {
    vector<vector<int>> res;
    sort(nums.begin(), nums.end());
    vector<int> current;
    function<void(int)> backtrack = [&](<int start>) {
        res.push_back(current);
        for (int i = start; i < nums.size(); i++) {
            current.push_back(nums[i]);
            backtrack(i + 1);
            current.pop_back();
        }
    };
    backtrack(0);
    return res;
}`
    }
  },

  // --- MEDIUM SOLUTIONS ---
  {
    id: 'nq-m1',
    solutions: {
      python: `def solve_n_queens(n):
    res = []
    queens = [-1] * n
    cols = set(); diag1 = set(); diag2 = set()
    def backtrack(row):
        if row == n:
            board = []
            for r in range(n):
                board.append('.' * queens[r] + 'Q' + '.' * (n - queens[r] - 1))
            res.append(board)
            return
        for col in range(n):
            if col in cols or (row - col) in diag1 or (row + col) in diag2:
                continue
            cols.add(col); diag1.add(row - col); diag2.add(row + col)
            queens[row] = col
            backtrack(row + 1)
            cols.remove(col); diag1.remove(row - col); diag2.remove(row + col)
    backtrack(0)
    return res`,
      java: `    static List<List<String>> res_nq1 = new ArrayList<>();
    static boolean[] cols_m1, diag1_m1, diag2_m1;
    static int[] queens_m1;
    static void backtrack(int row, int n) {
        if (row == n) {
            List<String> board = new ArrayList<>();
            for (int r = 0; r < n; r++) {
                char[] rowArr = new char[n];
                Arrays.fill(rowArr, '.');
                rowArr[queens_m1[r]] = 'Q';
                board.add(new String(rowArr));
            }
            res_nq1.add(board);
            return;
        }
        for (int col = 0; col < n; col++) {
            if (cols_m1[col] || diag1_m1[row-col+n] || diag2_m1[row+col]) continue;
            cols_m1[col] = diag1_m1[row-col+n] = diag2_m1[row+col] = true;
            queens_m1[row] = col;
            backtrack(row + 1, n);
            cols_m1[col] = diag1_m1[row-col+n] = diag2_m1[row+col] = false;
        }
    }
    public static List<List<String>> solveNQueens(int n) {
        res_nq1 = new ArrayList<>();
        cols_m1 = new boolean[n];
        diag1_m1 = new boolean[2*n];
        diag2_m1 = new boolean[2*n];
        queens_m1 = new int[n];
        backtrack(0, n);
        return res_nq1;
    }`,
      c: `// Uses backtrack() from starter code - already builds boards array
// Key additions:
// Track queens[] array per row
// When row == n, copy current queen positions into boards[board_count]
// Build string row as dots with 'Q' at queens[i]
// Already implemented in starter code's backtrack function`,
      cpp: `vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> res;
    vector<bool> cols(n,false), diag1(2*n,false), diag2(2*n,false);
    vector<int> queens(n, -1);
    function<void(int)> backtrack = [&](<int row>) {
        if (row == n) {
            vector<string> board(n, string(n, '.'));
            for (int r = 0; r < n; r++) board[r][queens[r]] = 'Q';
            res.push_back(board);
            return;
        }
        for (int col = 0; col < n; col++) {
            if (cols[col] || diag1[row-col+n] || diag2[row+col]) continue;
            cols[col] = diag1[row-col+n] = diag2[row+col] = true;
            queens[row] = col;
            backtrack(row + 1);
            cols[col] = diag1[row-col+n] = diag2[row+col] = false;
        }
    };
    backtrack(0);
    return res;
}`
    }
  },
  {
    id: 'nq-m2',
    solutions: {
      python: `def combination_sum(candidates, target):
    res = []
    candidates.sort()
    def backtrack(start, remaining, current):
        if remaining == 0:
            res.append(current[:])
            return
        for i in range(start, len(candidates)):
            if candidates[i] > remaining: break
            current.append(candidates[i])
            backtrack(i, remaining - candidates[i], current)
            current.pop()
    backtrack(0, target, [])
    return res`,
      java: `    static List<List<Integer>> res_cs = new ArrayList<>();
    static void backtrack(int[] cands, int start, int remaining, List<Integer> current) {
        if (remaining == 0) { res_cs.add(new ArrayList<>(current)); return; }
        for (int i = start; i < cands.length; i++) {
            if (cands[i] > remaining) break;
            current.add(cands[i]);
            backtrack(cands, i, remaining - cands[i], current);
            current.remove(current.size() - 1);
        }
    }
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        res_cs = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(candidates, 0, target, new ArrayList<>());
        return res_cs;
    }`,
      c: `// Key backtrack logic (already in starter code):
// Sort candidates first
// For each index i from start to n:
//   if cands[i] > remaining: break
//   add cands[i] to current
//   backtrack(cands, n, i, remaining - cands[i], depth+1)  // i not i+1 (reuse allowed)
//   remove from current`,
      cpp: `vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    vector<vector<int>> res;
    sort(candidates.begin(), candidates.end());
    vector<int> current;
    function<void(int, int)> backtrack = [&](<int start, int remaining>) {
        if (remaining == 0) { res.push_back(current); return; }
        for (int i = start; i < candidates.size(); i++) {
            if (candidates[i] > remaining) break;
            current.push_back(candidates[i]);
            backtrack(i, remaining - candidates[i]);
            current.pop_back();
        }
    };
    backtrack(0, target);
    return res;
}`
    }
  },
  {
    id: 'nq-m3',
    solutions: {
      python: `def permute_unique(nums):
    res = []
    nums.sort()
    used = [False] * len(nums)
    def backtrack(current):
        if len(current) == len(nums):
            res.append(current[:])
            return
        for i in range(len(nums)):
            if used[i]: continue
            if i > 0 and nums[i] == nums[i-1] and not used[i-1]: continue
            used[i] = True
            current.append(nums[i])
            backtrack(current)
            used[i] = False
            current.pop()
    backtrack([])
    return res`,
      java: `    static List<List<Integer>> res_pu = new ArrayList<>();
    static void backtrack(int[] nums, boolean[] used, List<Integer> current) {
        if (current.size() == nums.length) { res_pu.add(new ArrayList<>(current)); return; }
        for (int i = 0; i < nums.length; i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] == nums[i-1] && !used[i-1]) continue;
            used[i] = true; current.add(nums[i]);
            backtrack(nums, used, current);
            used[i] = false; current.remove(current.size() - 1);
        }
    }
    public static List<List<Integer>> permuteUnique(int[] nums) {
        res_pu = new ArrayList<>();
        Arrays.sort(nums);
        backtrack(nums, new boolean[nums.length], new ArrayList<>());
        return res_pu;
    }`,
      c: `// Key pruning (in starter code backtrack):
// Sort nums first
// Skip: if (i > 0 && nums[i] == nums[i-1] && !used[i-1]) continue;
// This prevents generating duplicate permutations`,
      cpp: `vector<vector<int>> permuteUnique(vector<int>& nums) {
    vector<vector<int>> res;
    sort(nums.begin(), nums.end());
    vector<bool> used(nums.size(), false);
    vector<int> current;
    function<void()> backtrack = [&]() {
        if (current.size() == nums.size()) { res.push_back(current); return; }
        for (int i = 0; i < nums.size(); i++) {
            if (used[i]) continue;
            if (i > 0 && nums[i] == nums[i-1] && !used[i-1]) continue;
            used[i] = true; current.push_back(nums[i]);
            backtrack();
            used[i] = false; current.pop_back();
        }
    };
    backtrack();
    return res;
}`
    }
  },
  {
    id: 'nq-m4',
    solutions: {
      python: `def combination_sum2(candidates, target):
    res = []
    candidates.sort()
    def backtrack(start, remaining, current):
        if remaining == 0:
            res.append(current[:])
            return
        for i in range(start, len(candidates)):
            if i > start and candidates[i] == candidates[i-1]: continue
            if candidates[i] > remaining: break
            current.append(candidates[i])
            backtrack(i + 1, remaining - candidates[i], current)
            current.pop()
    backtrack(0, target, [])
    return res`,
      java: `    static List<List<Integer>> res_cs2 = new ArrayList<>();
    static void backtrack(int[] cands, int start, int remaining, List<Integer> current) {
        if (remaining == 0) { res_cs2.add(new ArrayList<>(current)); return; }
        for (int i = start; i < cands.length; i++) {
            if (i > start && cands[i] == cands[i-1]) continue;
            if (cands[i] > remaining) break;
            current.add(cands[i]);
            backtrack(cands, i + 1, remaining - cands[i], current);
            current.remove(current.size() - 1);
        }
    }
    public static List<List<Integer>> combinationSum2(int[] candidates, int target) {
        res_cs2 = new ArrayList<>();
        Arrays.sort(candidates);
        backtrack(candidates, 0, target, new ArrayList<>());
        return res_cs2;
    }`,
      c: `// Key difference from CombSum I (starter code):
// 1. Skip duplicates: if (i > start && cands[i] == cands[i-1]) continue;
// 2. Each element used once: backtrack(cands, n, i+1, ...) not i`,
      cpp: `vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
    vector<vector<int>> res;
    sort(candidates.begin(), candidates.end());
    vector<int> current;
    function<void(int, int)> backtrack = [&](<int start, int remaining>) {
        if (remaining == 0) { res.push_back(current); return; }
        for (int i = start; i < candidates.size(); i++) {
            if (i > start && candidates[i] == candidates[i-1]) continue;
            if (candidates[i] > remaining) break;
            current.push_back(candidates[i]);
            backtrack(i + 1, remaining - candidates[i]);
            current.pop_back();
        }
    };
    backtrack(0, target);
    return res;
}`
    }
  },
  {
    id: 'nq-m5',
    solutions: {
      python: `def partition(s):
    res = []
    def is_palindrome(sub):
        return sub == sub[::-1]
    def backtrack(start, current):
        if start == len(s):
            res.append(current[:])
            return
        for end in range(start + 1, len(s) + 1):
            sub = s[start:end]
            if is_palindrome(sub):
                current.append(sub)
                backtrack(end, current)
                current.pop()
    backtrack(0, [])
    return res`,
      java: `    static List<List<String>> res_pp = new ArrayList<>();
    static boolean isPalin(String s, int l, int r) {
        while (l < r) { if (s.charAt(l++) != s.charAt(r--)) return false; }
        return true;
    }
    static void backtrack(String s, int start, List<String> current) {
        if (start == s.length()) { res_pp.add(new ArrayList<>(current)); return; }
        for (int end = start + 1; end <= s.length(); end++) {
            if (isPalin(s, start, end - 1)) {
                current.add(s.substring(start, end));
                backtrack(s, end, current);
                current.remove(current.size() - 1);
            }
        }
    }
    public static List<List<String>> partition(String s) {
        res_pp = new ArrayList<>();
        backtrack(s, 0, new ArrayList<>());
        return res_pp;
    }`,
      c: `// Already implemented in starter code:
// isPalin(s, l, r) checks if s[l..r] is palindrome
// backtrack(s, start, depth):
//   if start == strlen(s): save current_pp to result
//   for end from start to len-1:
//     if isPalin(s, start, end):
//       copy s[start..end] to current_pp[depth]
//       backtrack(s, end+1, depth+1)`,
      cpp: `vector<vector<string>> partition(string s) {
    vector<vector<string>> res;
    vector<string> current;
    auto isPalin = [&](<int l, int r>) {
        while (l < r) if (s[l++] != s[r--]) return false;
        return true;
    };
    function<void(int)> backtrack = [&](<int start>) {
        if (start == s.size()) { res.push_back(current); return; }
        for (int end = start + 1; end <= s.size(); end++) {
            if (isPalin(start, end - 1)) {
                current.push_back(s.substr(start, end - start));
                backtrack(end);
                current.pop_back();
            }
        }
    };
    backtrack(0);
    return res;
}`
    }
  },

  // --- HARD SOLUTIONS ---
  {
    id: 'nq-h1',
    solutions: {
      python: `def n_queens_obstacles(grid):
    n = len(grid)
    count = [0]
    cols = set(); diag1 = set(); diag2 = set()
    def backtrack(row):
        if row == n:
            count[0] += 1
            return
        for col in range(n):
            if grid[row][col] == 1: continue
            if col in cols or (row - col) in diag1 or (row + col) in diag2:
                continue
            cols.add(col); diag1.add(row - col); diag2.add(row + col)
            backtrack(row + 1)
            cols.remove(col); diag1.remove(row - col); diag2.remove(row + col)
    backtrack(0)
    return count[0]`,
      java: `    static int count_ob;
    static boolean[] cols_ob, diag1_ob, diag2_ob;
    static void backtrack(int[][] grid, int row, int n) {
        if (row == n) { count_ob++; return; }
        for (int col = 0; col < n; col++) {
            if (grid[row][col] == 1) continue;
            if (cols_ob[col] || diag1_ob[row-col+n] || diag2_ob[row+col]) continue;
            cols_ob[col] = diag1_ob[row-col+n] = diag2_ob[row+col] = true;
            backtrack(grid, row + 1, n);
            cols_ob[col] = diag1_ob[row-col+n] = diag2_ob[row+col] = false;
        }
    }
    public static int nQueensObstacles(int[][] grid) {
        int n = grid.length;
        count_ob = 0;
        cols_ob = new boolean[n];
        diag1_ob = new boolean[2*n];
        diag2_ob = new boolean[2*n];
        backtrack(grid, 0, n);
        return count_ob;
    }`,
      c: `int count_ob;
bool cols_ob[10], diag1_ob[20], diag2_ob[20];
void backtrack_ob(int** grid, int row, int n) {
    if (row == n) { count_ob++; return; }
    for (int col = 0; col < n; col++) {
        if (grid[row][col] == 1) continue;
        if (cols_ob[col] || diag1_ob[row-col+n] || diag2_ob[row+col]) continue;
        cols_ob[col] = diag1_ob[row-col+n] = diag2_ob[row+col] = true;
        backtrack_ob(grid, row + 1, n);
        cols_ob[col] = diag1_ob[row-col+n] = diag2_ob[row+col] = false;
    }
}
int nQueensObstacles(int** grid, int n) {
    count_ob = 0;
    memset(cols_ob, 0, sizeof(cols_ob));
    memset(diag1_ob, 0, sizeof(diag1_ob));
    memset(diag2_ob, 0, sizeof(diag2_ob));
    backtrack_ob(grid, 0, n);
    return count_ob;
}`,
      cpp: `int nQueensObstacles(vector<vector<int>>& grid) {
    int n = grid.size(), count = 0;
    vector<bool> cols(n,false), diag1(2*n,false), diag2(2*n,false);
    function<void(int)> backtrack = [&](<int row>) {
        if (row == n) { count++; return; }
        for (int col = 0; col < n; col++) {
            if (grid[row][col] == 1) continue;
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
    id: 'nq-h2',
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
      c: `bool isValid_sdk(char board[9][9], int row, int col, char num) {
    for (int i = 0; i < 9; i++) {
        if (board[row][i] == num) return false;
        if (board[i][col] == num) return false;
        if (board[3*(row/3)+i/3][3*(col/3)+i%3] == num) return false;
    }
    return true;
}
bool solve_sdk(char board[9][9]) {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (char c = '1'; c <= '9'; c++) {
                    if (isValid_sdk(board, i, j, c)) {
                        board[i][j] = c;
                        if (solve_sdk(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}
void solveSudoku(char board[9][9]) { solve_sdk(board); }`,
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
    id: 'nq-h3',
    solutions: {
      python: `def add_operators(num, target):
    res = []
    def backtrack(idx, path, val, prev):
        if idx == len(num):
            if val == target: res.append(path)
            return
        for i in range(idx, len(num)):
            if i > idx and num[idx] == '0': break
            cur_str = num[idx:i+1]
            cur = int(cur_str)
            if idx == 0:
                backtrack(i+1, cur_str, cur, cur)
            else:
                backtrack(i+1, path+'+'+cur_str, val+cur, cur)
                backtrack(i+1, path+'-'+cur_str, val-cur, -cur)
                backtrack(i+1, path+'*'+cur_str, val-prev+prev*cur, prev*cur)
    backtrack(0, "", 0, 0)
    return res`,
      java: `    static List<String> res_ao = new ArrayList<>();
    static void backtrack(String num, int target, int idx, String path, long val, long prev) {
        if (idx == num.length()) {
            if (val == target) res_ao.add(path);
            return;
        }
        long cur = 0;
        for (int i = idx; i < num.length(); i++) {
            if (i > idx && num.charAt(idx) == '0') break;
            cur = cur * 10 + (num.charAt(i) - '0');
            String cs = num.substring(idx, i + 1);
            if (idx == 0) {
                backtrack(num, target, i+1, cs, cur, cur);
            } else {
                backtrack(num, target, i+1, path+"+"+cs, val+cur, cur);
                backtrack(num, target, i+1, path+"-"+cs, val-cur, -cur);
                backtrack(num, target, i+1, path+"*"+cs, val-prev+prev*cur, prev*cur);
            }
        }
    }
    public static List<String> addOperators(String num, int target) {
        res_ao = new ArrayList<>();
        backtrack(num, target, 0, "", 0, 0);
        return res_ao;
    }`,
      c: `// Already implemented in starter code using recursive backtrack
// Key: track prev (last operand) for multiplication correction
// val - prev + prev*cur handles * by undoing last addition
// Leading zero check: if (i > pos && num_ao[pos] == '0') break;`,
      cpp: `vector<string> addOperators(string num, int target) {
    vector<string> res;
    function<void(int, string, long long, long long)> backtrack =
        [&](<int idx, string path, long long val, long long prev>) {
        if (idx == num.size()) {
            if (val == target) res.push_back(path);
            return;
        }
        long long cur = 0;
        for (int i = idx; i < num.size(); i++) {
            if (i > idx && num[idx] == '0') break;
            cur = cur * 10 + (num[i] - '0');
            string cs = num.substr(idx, i - idx + 1);
            if (idx == 0) {
                backtrack(i+1, cs, cur, cur);
            } else {
                backtrack(i+1, path+"+"+cs, val+cur, cur);
                backtrack(i+1, path+"-"+cs, val-cur, -cur);
                backtrack(i+1, path+"*"+cs, val-prev+prev*cur, prev*cur);
            }
        }
    };
    backtrack(0, "", 0, 0);
    return res;
}`
    }
  },
  {
    id: 'nq-h4',
    solutions: {
      python: `def remove_boxes(boxes):
    from functools import lru_cache
    @lru_cache(maxsize=None)
    def dp(l, r, k):
        if l > r: return 0
        # Extend k by merging same boxes at front
        while l < r and boxes[l] == boxes[l+1]:
            l += 1; k += 1
        res = (k + 1) ** 2 + dp(l + 1, r, 0)
        for m in range(l + 1, r + 1):
            if boxes[m] == boxes[l]:
                res = max(res, dp(l+1, m-1, 0) + dp(m, r, k+1))
        return res
    return dp(0, len(boxes) - 1, 0)`,
      java: `    static int[][][] memo_rb;
    static int dp(int[] boxes, int l, int r, int k) {
        if (l > r) return 0;
        if (memo_rb[l][r][k] != 0) return memo_rb[l][r][k];
        int res = (k + 1) * (k + 1) + dp(boxes, l + 1, r, 0);
        for (int m = l + 1; m <= r; m++) {
            if (boxes[m] == boxes[l]) {
                res = Math.max(res, dp(boxes, l+1, m-1, 0) + dp(boxes, m, r, k+1));
            }
        }
        return memo_rb[l][r][k] = res;
    }
    public static int removeBoxes(int[] boxes) {
        int n = boxes.length;
        memo_rb = new int[n][n][n];
        return dp(boxes, 0, n - 1, 0);
    }`,
      c: `// Already fully implemented in starter code:
// int dp(int* boxes, int l, int r, int k):
//   if l > r: return 0
//   check memo
//   res = (k+1)^2 + dp(boxes, l+1, r, 0)
//   for m from l+1 to r:
//     if boxes[m] == boxes[l]:
//       res = max(res, dp(l+1,m-1,0) + dp(m,r,k+1))
//   memo[l][r][k] = res; return res`,
      cpp: `int removeBoxes(vector<int>& boxes) {
    int n = boxes.size();
    vector<vector<vector<int>>> memo(n, vector<vector<int>>(n, vector<int>(n, 0)));
    function<int(int,int,int)> dp = [&](<int l, int r, int k>) -> int {
        if (l > r) return 0;
        if (memo[l][r][k]) return memo[l][r][k];
        int res = (k+1)*(k+1) + dp(l+1, r, 0);
        for (int m = l+1; m <= r; m++) {
            if (boxes[m] == boxes[l]) {
                res = max(res, dp(l+1, m-1, 0) + dp(m, r, k+1));
            }
        }
        return memo[l][r][k] = res;
    };
    return dp(0, n-1, 0);
}`
    }
  },
  {
    id: 'nq-h5',
    solutions: {
      python: `def min_knight_moves(x, y):
    from collections import deque
    x, y = abs(x), abs(y)
    queue = deque([(0, 0, 0)])
    visited = {(0, 0)}
    moves = [(2,1),(2,-1),(-2,1),(-2,-1),(1,2),(1,-2),(-1,2),(-1,-2)]
    while queue:
        cx, cy, steps = queue.popleft()
        if cx == x and cy == y: return steps
        for dx, dy in moves:
            nx, ny = cx + dx, cy + dy
            if (nx, ny) not in visited and nx >= -2 and ny >= -2:
                visited.add((nx, ny))
                queue.append((nx, ny, steps + 1))
    return -1`,
      java: `    public static int minKnightMoves(int x, int y) {
        x = Math.abs(x); y = Math.abs(y);
        int[][] dirs = {{2,1},{2,-1},{-2,1},{-2,-1},{1,2},{1,-2},{-1,2},{-1,-2}};
        Queue<int[]> queue = new LinkedList<>();
        Map<String, Integer> visited = new HashMap<>();
        queue.offer(new int[]{0, 0, 0});
        visited.put("0,0", 0);
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int cx = curr[0], cy = curr[1], steps = curr[2];
            if (cx == x && cy == y) return steps;
            for (int[] d : dirs) {
                int nx = cx + d[0], ny = cy + d[1];
                String key = nx + "," + ny;
                if (!visited.containsKey(key) && nx >= -2 && ny >= -2) {
                    visited.put(key, steps + 1);
                    queue.offer(new int[]{nx, ny, steps + 1});
                }
            }
        }
        return -1;
    }`,
      c: `int minKnightMoves(int x, int y) {
    if (x < 0) x = -x;
    if (y < 0) y = -y;
    int dx[] = {2,2,-2,-2,1,1,-1,-1};
    int dy[] = {1,-1,1,-1,2,-2,2,-2};
    // BFS with offset for visited array
    int offset = 305;
    int size = 610;
    int** visited = (int**)calloc(size, sizeof(int*));
    for (int i = 0; i < size; i++) visited[i] = (int*)calloc(size, sizeof(int));
    int queue[200000][3];
    int front = 0, back = 0;
    queue[back][0] = 0; queue[back][1] = 0; queue[back][2] = 0; back++;
    visited[offset][offset] = 1;
    while (front < back) {
        int cx = queue[front][0], cy = queue[front][1], steps = queue[front][2]; front++;
        if (cx == x && cy == y) {
            for (int i = 0; i < size; i++) free(visited[i]);
            free(visited);
            return steps;
        }
        for (int d = 0; d < 8; d++) {
            int nx = cx + dx[d], ny = cy + dy[d];
            if (nx >= -2 && ny >= -2 && nx < size-offset && ny < size-offset
                && !visited[nx+offset][ny+offset]) {
                visited[nx+offset][ny+offset] = 1;
                queue[back][0] = nx; queue[back][1] = ny; queue[back][2] = steps+1; back++;
            }
        }
    }
    for (int i = 0; i < size; i++) free(visited[i]);
    free(visited);
    return -1;
}`,
      cpp: `int minKnightMoves(int x, int y) {
    x = abs(x); y = abs(y);
    vector<pair<int,int>> dirs = {{2,1},{2,-1},{-2,1},{-2,-1},{1,2},{1,-2},{-1,2},{-1,-2}};
    queue<tuple<int,int,int>> q;
    map<pair<int,int>, bool> visited;
    q.push({0, 0, 0});
    visited[{0, 0}] = true;
    while (!q.empty()) {
        auto [cx, cy, steps] = q.front(); q.pop();
        if (cx == x && cy == y) return steps;
        for (auto [dx, dy] : dirs) {
            int nx = cx + dx, ny = cy + dy;
            if (!visited[{nx,ny}] && nx >= -2 && ny >= -2) {
                visited[{nx,ny}] = true;
                q.push({nx, ny, steps + 1});
            }
        }
    }
    return -1;
}`
    }
  }
];