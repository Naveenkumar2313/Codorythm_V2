export const nQueensProblems = [
  // --- EASY ---
  {
    id: 'nq-e1', title: 'N-Queens II (Count Solutions)', difficulty: 'Easy',
    description: 'The n-queens puzzle is the problem of placing `n` queens on an `n x n` chessboard such that no two queens attack each other (same row, column, or diagonal). Given an integer `n`, return the total number of distinct solutions.',
    constraints: ['1 <= n <= 9'],
    examples: [
      { input: 'n = 4', output: '2', explanation: 'There are 2 distinct ways to place 4 queens on a 4x4 board.' },
      { input: 'n = 1', output: '1', explanation: 'Only one way to place a single queen.' }
    ],
    testCases: [
      { input: '4', expectedOutput: '2', hidden: false },
      { input: '8', expectedOutput: '92', hidden: false },
      { input: '1', expectedOutput: '1', hidden: false }
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
    id: 'nq-e2', title: 'Check if Queens are Safe', difficulty: 'Easy',
    description: 'Given a `n x n` chessboard represented as a 2D grid where `1` means a queen is placed and `0` means empty, determine if the placement of queens is valid (no two queens attack each other). Queens attack on the same row, column, or diagonal.',
    constraints: ['1 <= n <= 9', 'grid[i][j] is 0 or 1.'],
    examples: [
      { input: 'n = 4\ngrid = [[0,1,0,0],[0,0,0,1],[1,0,0,0],[0,0,1,0]]', output: 'true', explanation: 'All 4 queens are safely placed.' },
      { input: 'n = 2\ngrid = [[1,0],[1,0]]', output: 'false', explanation: 'Two queens in the same column.' }
    ],
    testCases: [
      { input: '4\n0 1 0 0\n0 0 0 1\n1 0 0 0\n0 0 1 0', expectedOutput: 'true', hidden: false },
      { input: '2\n1 0\n1 0', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def is_safe_placement(grid):
    pass

n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
print(str(is_safe_placement(grid)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean isSafePlacement(int[][] grid) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(isSafePlacement(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

bool isSafePlacement(int** grid, int n) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** grid = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) scanf("%d", &grid[i][j]);
    }
    printf("%s\\n", isSafePlacement(grid, n) ? "true" : "false");
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

bool isSafePlacement(vector<vector<int>>& grid) {
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << (isSafePlacement(grid) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-e3', title: 'Place N Rooks', difficulty: 'Easy',
    description: 'Given an integer `n`, return the number of ways to place `n` rooks on an `n x n` chessboard such that no two rooks share the same row or column. Rooks do NOT attack diagonally — this is a simpler warm-up before N-Queens.',
    constraints: ['1 <= n <= 12'],
    examples: [
      { input: 'n = 2', output: '2', explanation: 'Two arrangements: (0,0)(1,1) and (0,1)(1,0).' },
      { input: 'n = 3', output: '6', explanation: '3! = 6 permutations.' }
    ],
    testCases: [
      { input: '2', expectedOutput: '2', hidden: false },
      { input: '3', expectedOutput: '6', hidden: false },
      { input: '4', expectedOutput: '24', hidden: false }
    ],
    starterCode: {
      python: `def count_rook_placements(n):
    pass

n = int(input())
print(count_rook_placements(n))`,
      java: `import java.util.*;

public class Solution {
    public static int countRookPlacements(int n) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            System.out.println(countRookPlacements(sc.nextInt()));
        }
    }
}`,
      c: `#include <stdio.h>

int countRookPlacements(int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        printf("%d\\n", countRookPlacements(n));
    }
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

int countRookPlacements(int n) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        cout << countRookPlacements(n) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-e4', title: 'Permutations', difficulty: 'Easy',
    description: 'Given an array `nums` of distinct integers, return all the possible permutations in lexicographically sorted order. This is the fundamental backtracking pattern that N-Queens builds upon — generating all arrangements.',
    constraints: ['1 <= nums.length <= 6', 'All integers in nums are unique.', '-10 <= nums[i] <= 10'],
    examples: [
      { input: 'nums = [1,2,3]', output: '1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1', explanation: 'All 6 permutations of [1,2,3] in sorted order.' }
    ],
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1', hidden: false },
      { input: '1\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `def permute(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
result = permute(nums)
for perm in sorted(result):
    print(*perm)`,
      java: `import java.util.*;

public class Solution {
    public static List<List<Integer>> permute(int[] nums) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            List<List<Integer>> result = permute(nums);
            result.sort((a, b) -> {
                for (int i = 0; i < a.size(); i++) {
                    if (!a.get(i).equals(b.get(i))) return a.get(i) - b.get(i);
                }
                return 0;
            });
            for (List<Integer> perm : result) {
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < perm.size(); i++)
                    sb.append(perm.get(i)).append(i == perm.size() - 1 ? "" : " ");
                System.out.println(sb);
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int result[800][7];
int resultSize = 0;
int n_perm;

void backtrack(int* nums, int* used, int* current, int depth) {
    if (depth == n_perm) {
        for (int i = 0; i < n_perm; i++) result[resultSize][i] = current[i];
        resultSize++;
        return;
    }
    for (int i = 0; i < n_perm; i++) {
        if (!used[i]) {
            used[i] = 1; current[depth] = nums[i];
            backtrack(nums, used, current, depth + 1);
            used[i] = 0;
        }
    }
}

int cmpRow(const void* a, const void* b) {
    const int* ra = (const int*)a; const int* rb = (const int*)b;
    for (int i = 0; i < n_perm; i++) if (ra[i] != rb[i]) return ra[i] - rb[i];
    return 0;
}

int main() {
    if (scanf("%d", &n_perm) != 1) return 0;
    int nums[7], used[7] = {0}, current[7];
    for (int i = 0; i < n_perm; i++) scanf("%d", &nums[i]);
    resultSize = 0;
    backtrack(nums, used, current, 0);
    qsort(result, resultSize, sizeof(result[0]), cmpRow);
    for (int i = 0; i < resultSize; i++) {
        for (int j = 0; j < n_perm; j++)
            printf("%d%s", result[i][j], j == n_perm - 1 ? "" : " ");
        printf("\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> permute(vector<int>& nums) {
    return {};
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        vector<vector<int>> result = permute(nums);
        sort(result.begin(), result.end());
        for (auto& perm : result) {
            for (int i = 0; i < perm.size(); i++)
                cout << perm[i] << (i == perm.size() - 1 ? "" : " ");
            cout << "\\n";
        }
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-e5', title: 'Subsets', difficulty: 'Easy',
    description: 'Given an integer array `nums` of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets. Print each subset space-separated on its own line, in lexicographically sorted order. An empty subset is represented by an empty line.',
    constraints: ['1 <= nums.length <= 10', 'All nums[i] are unique.', '-10 <= nums[i] <= 10'],
    examples: [
      { input: 'nums = [1,2,3]', output: '\n1\n1 2\n1 2 3\n1 3\n2\n2 3\n3', explanation: 'All 8 subsets including the empty set.' }
    ],
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '\n1\n1 2\n1 2 3\n1 3\n2\n2 3\n3', hidden: false },
      { input: '1\n0', expectedOutput: '\n0', hidden: false }
    ],
    starterCode: {
      python: `def subsets(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
result = subsets(nums)
for subset in sorted(result):
    print(*subset)`,
      java: `import java.util.*;

public class Solution {
    public static List<List<Integer>> subsets(int[] nums) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            List<List<Integer>> result = subsets(nums);
            result.sort((a, b) -> {
                int len = Math.min(a.size(), b.size());
                for (int i = 0; i < len; i++) {
                    if (!a.get(i).equals(b.get(i))) return a.get(i) - b.get(i);
                }
                return a.size() - b.size();
            });
            for (List<Integer> sub : result) {
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < sub.size(); i++)
                    sb.append(sub.get(i)).append(i == sub.size() - 1 ? "" : " ");
                System.out.println(sb);
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int result_ss[1024][11];
int result_sizes[1024];
int result_count = 0;
int n_ss;

void backtrack(int* nums, int* current, int depth, int start) {
    for (int i = 0; i < depth; i++) result_ss[result_count][i] = current[i];
    result_sizes[result_count] = depth;
    result_count++;
    for (int i = start; i < n_ss; i++) {
        current[depth] = nums[i];
        backtrack(nums, current, depth + 1, i + 1);
    }
}

int cmpSubset(const void* a, const void* b) {
    int ia = *(int*)a, ib = *(int*)b;
    int len = result_sizes[ia] < result_sizes[ib] ? result_sizes[ia] : result_sizes[ib];
    for (int i = 0; i < len; i++)
        if (result_ss[ia][i] != result_ss[ib][i]) return result_ss[ia][i] - result_ss[ib][i];
    return result_sizes[ia] - result_sizes[ib];
}

int main() {
    if (scanf("%d", &n_ss) != 1) return 0;
    int nums[11], current[11];
    for (int i = 0; i < n_ss; i++) scanf("%d", &nums[i]);
    result_count = 0;
    backtrack(nums, current, 0, 0);
    int indices[1024];
    for (int i = 0; i < result_count; i++) indices[i] = i;
    qsort(indices, result_count, sizeof(int), cmpSubset);
    for (int i = 0; i < result_count; i++) {
        int idx = indices[i];
        for (int j = 0; j < result_sizes[idx]; j++)
            printf("%d%s", result_ss[idx][j], j == result_sizes[idx] - 1 ? "" : " ");
        printf("\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> subsets(vector<int>& nums) {
    return {};
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        vector<vector<int>> result = subsets(nums);
        sort(result.begin(), result.end());
        for (auto& sub : result) {
            for (int i = 0; i < sub.size(); i++)
                cout << sub[i] << (i == sub.size() - 1 ? "" : " ");
            cout << "\\n";
        }
    }
    return 0;
}`
    }
  },

  // --- MEDIUM ---
  {
    id: 'nq-m1', title: 'N-Queens I (Print All Boards)', difficulty: 'Medium',
    description: 'Given an integer `n`, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration of the n-queens placement, where `Q` indicates a queen and `.` indicates an empty space. Print each board row by row, boards separated by a blank line, in lexicographic order.',
    constraints: ['1 <= n <= 9'],
    examples: [
      { input: 'n = 4', output: '.Q..\n...Q\nQ...\n..Q.\n\n..Q.\nQ...\n...Q\n.Q..', explanation: 'Two valid boards for n=4.' }
    ],
    testCases: [
      { input: '4', expectedOutput: '.Q..\n...Q\nQ...\n..Q.\n\n..Q.\nQ...\n...Q\n.Q..', hidden: false },
      { input: '1', expectedOutput: 'Q', hidden: false }
    ],
    starterCode: {
      python: `def solve_n_queens(n):
    pass

n = int(input())
result = solve_n_queens(n)
for i, board in enumerate(sorted(result)):
    for row in board:
        print(row)
    if i < len(result) - 1:
        print()`,
      java: `import java.util.*;

public class Solution {
    public static List<List<String>> solveNQueens(int n) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            List<List<String>> result = solveNQueens(n);
            result.sort((a, b) -> {
                for (int i = 0; i < a.size(); i++) {
                    int cmp = a.get(i).compareTo(b.get(i));
                    if (cmp != 0) return cmp;
                }
                return 0;
            });
            for (int i = 0; i < result.size(); i++) {
                for (String row : result.get(i)) System.out.println(row);
                if (i < result.size() - 1) System.out.println();
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char boards[200][10][11];
int board_count = 0;
int queens[10];
int n_nq;

void backtrack(int row, int* cols, int* diag1, int* diag2) {
    if (row == n_nq) {
        for (int i = 0; i < n_nq; i++) {
            for (int j = 0; j < n_nq; j++)
                boards[board_count][i][j] = (queens[i] == j) ? 'Q' : '.';
            boards[board_count][i][n_nq] = '\\0';
        }
        board_count++;
        return;
    }
    for (int col = 0; col < n_nq; col++) {
        if (!cols[col] && !diag1[row - col + n_nq] && !diag2[row + col]) {
            cols[col] = diag1[row - col + n_nq] = diag2[row + col] = 1;
            queens[row] = col;
            backtrack(row + 1, cols, diag1, diag2);
            cols[col] = diag1[row - col + n_nq] = diag2[row + col] = 0;
        }
    }
}

int main() {
    if (scanf("%d", &n_nq) != 1) return 0;
    int cols[10]={0}, diag1[20]={0}, diag2[20]={0};
    board_count = 0;
    backtrack(0, cols, diag1, diag2);
    for (int b = 0; b < board_count; b++) {
        for (int i = 0; i < n_nq; i++) printf("%s\\n", boards[b][i]);
        if (b < board_count - 1) printf("\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

vector<vector<string>> solveNQueens(int n) {
    return {};
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<string>> result = solveNQueens(n);
        sort(result.begin(), result.end());
        for (int i = 0; i < result.size(); i++) {
            for (auto& row : result[i]) cout << row << "\\n";
            if (i < result.size() - 1) cout << "\\n";
        }
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-m2', title: 'Combination Sum', difficulty: 'Medium',
    description: 'Given an array of distinct integers `candidates` and a target integer `target`, return all unique combinations of `candidates` where the chosen numbers sum to `target`. The same number may be chosen from `candidates` an unlimited number of times. Output combinations in sorted order, one per line.',
    constraints: ['1 <= candidates.length <= 30', '2 <= candidates[i] <= 40', '1 <= target <= 40'],
    examples: [
      { input: 'candidates = [2,3,6,7], target = 7', output: '2 2 3\n7', explanation: '2+2+3=7 and 7=7 are the two valid combinations.' }
    ],
    testCases: [
      { input: '4\n2 3 6 7\n7', expectedOutput: '2 2 3\n7', hidden: false },
      { input: '3\n2 3 5\n8', expectedOutput: '2 2 2 2\n2 3 3\n3 5', hidden: false }
    ],
    starterCode: {
      python: `def combination_sum(candidates, target):
    pass

n = int(input())
candidates = list(map(int, input().split()))
target = int(input())
result = combination_sum(candidates, target)
for combo in sorted(result):
    print(*combo)`,
      java: `import java.util.*;

public class Solution {
    public static List<List<Integer>> combinationSum(int[] candidates, int target) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] candidates = new int[n];
            for (int i = 0; i < n; i++) candidates[i] = sc.nextInt();
            int target = sc.nextInt();
            List<List<Integer>> result = combinationSum(candidates, target);
            result.sort((a, b) -> {
                int len = Math.min(a.size(), b.size());
                for (int i = 0; i < len; i++)
                    if (!a.get(i).equals(b.get(i))) return a.get(i) - b.get(i);
                return a.size() - b.size();
            });
            for (List<Integer> combo : result) {
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < combo.size(); i++)
                    sb.append(combo.get(i)).append(i == combo.size()-1 ? "" : " ");
                System.out.println(sb);
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int res_cs[200][50];
int res_sizes_cs[200];
int res_count_cs = 0;
int current_cs[50];

void backtrack(int* cands, int n, int start, int remaining, int depth) {
    if (remaining == 0) {
        for (int i = 0; i < depth; i++) res_cs[res_count_cs][i] = current_cs[i];
        res_sizes_cs[res_count_cs++] = depth;
        return;
    }
    for (int i = start; i < n; i++) {
        if (cands[i] <= remaining) {
            current_cs[depth] = cands[i];
            backtrack(cands, n, i, remaining - cands[i], depth + 1);
        }
    }
}

int cmpArr(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int cands[35];
    for (int i = 0; i < n; i++) scanf("%d", &cands[i]);
    int target; scanf("%d", &target);
    qsort(cands, n, sizeof(int), cmpArr);
    res_count_cs = 0;
    backtrack(cands, n, 0, target, 0);
    for (int i = 0; i < res_count_cs; i++) {
        for (int j = 0; j < res_sizes_cs[i]; j++)
            printf("%d%s", res_cs[i][j], j == res_sizes_cs[i]-1 ? "" : " ");
        printf("\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    return {};
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> candidates(n);
        for (int i = 0; i < n; i++) cin >> candidates[i];
        int target; cin >> target;
        vector<vector<int>> result = combinationSum(candidates, target);
        sort(result.begin(), result.end());
        for (auto& combo : result) {
            for (int i = 0; i < combo.size(); i++)
                cout << combo[i] << (i == combo.size()-1 ? "" : " ");
            cout << "\\n";
        }
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-m3', title: 'Permutations II (With Duplicates)', difficulty: 'Medium',
    description: 'Given a collection of numbers `nums` that might contain duplicates, return all possible unique permutations in lexicographically sorted order. This requires a pruning strategy during backtracking to avoid generating duplicate permutations.',
    constraints: ['1 <= nums.length <= 8', '-10 <= nums[i] <= 10'],
    examples: [
      { input: 'nums = [1,1,2]', output: '1 1 2\n1 2 1\n2 1 1', explanation: 'Three unique permutations despite duplicate 1s.' }
    ],
    testCases: [
      { input: '3\n1 1 2', expectedOutput: '1 1 2\n1 2 1\n2 1 1', hidden: false },
      { input: '3\n1 2 3', expectedOutput: '1 2 3\n1 3 2\n2 1 3\n2 3 1\n3 1 2\n3 2 1', hidden: false }
    ],
    starterCode: {
      python: `def permute_unique(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
result = permute_unique(nums)
for perm in sorted(result):
    print(*perm)`,
      java: `import java.util.*;

public class Solution {
    public static List<List<Integer>> permuteUnique(int[] nums) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            List<List<Integer>> result = permuteUnique(nums);
            result.sort((a, b) -> {
                for (int i = 0; i < a.size(); i++)
                    if (!a.get(i).equals(b.get(i))) return a.get(i) - b.get(i);
                return 0;
            });
            for (List<Integer> perm : result) {
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < perm.size(); i++)
                    sb.append(perm.get(i)).append(i == perm.size()-1 ? "" : " ");
                System.out.println(sb);
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int res_pu[50000][9];
int res_count_pu = 0;
int n_pu;

int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

void backtrack(int* nums, int* used, int* current, int depth) {
    if (depth == n_pu) {
        for (int i = 0; i < n_pu; i++) res_pu[res_count_pu][i] = current[i];
        res_count_pu++;
        return;
    }
    for (int i = 0; i < n_pu; i++) {
        if (used[i]) continue;
        if (i > 0 && nums[i] == nums[i-1] && !used[i-1]) continue;
        used[i] = 1; current[depth] = nums[i];
        backtrack(nums, used, current, depth + 1);
        used[i] = 0;
    }
}

int cmpRow_pu(const void* a, const void* b) {
    const int* ra = (const int*)a; const int* rb = (const int*)b;
    for (int i = 0; i < n_pu; i++) if (ra[i] != rb[i]) return ra[i] - rb[i];
    return 0;
}

int main() {
    if (scanf("%d", &n_pu) != 1) return 0;
    int nums[9], used[9] = {0}, current[9];
    for (int i = 0; i < n_pu; i++) scanf("%d", &nums[i]);
    qsort(nums, n_pu, sizeof(int), cmpInt);
    res_count_pu = 0;
    backtrack(nums, used, current, 0);
    qsort(res_pu, res_count_pu, sizeof(res_pu[0]), cmpRow_pu);
    for (int i = 0; i < res_count_pu; i++) {
        for (int j = 0; j < n_pu; j++)
            printf("%d%s", res_pu[i][j], j == n_pu-1 ? "" : " ");
        printf("\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> permuteUnique(vector<int>& nums) {
    return {};
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        vector<vector<int>> result = permuteUnique(nums);
        sort(result.begin(), result.end());
        for (auto& perm : result) {
            for (int i = 0; i < perm.size(); i++)
                cout << perm[i] << (i == perm.size()-1 ? "" : " ");
            cout << "\\n";
        }
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-m4', title: 'Combination Sum II', difficulty: 'Medium',
    description: 'Given a collection of candidate numbers `candidates` (which may contain duplicates) and a target number `target`, find all unique combinations in `candidates` where the candidate numbers sum to `target`. Each number in `candidates` may only be used once. Output in sorted order, one per line.',
    constraints: ['1 <= candidates.length <= 100', '1 <= candidates[i] <= 50', '1 <= target <= 30'],
    examples: [
      { input: 'candidates = [10,1,2,7,6,1,5], target = 8', output: '1 1 6\n1 2 5\n1 7\n2 6', explanation: 'All unique combinations summing to 8.' }
    ],
    testCases: [
      { input: '7\n10 1 2 7 6 1 5\n8', expectedOutput: '1 1 6\n1 2 5\n1 7\n2 6', hidden: false },
      { input: '5\n2 5 2 1 2\n5', expectedOutput: '1 2 2\n5', hidden: false }
    ],
    starterCode: {
      python: `def combination_sum2(candidates, target):
    pass

n = int(input())
candidates = list(map(int, input().split()))
target = int(input())
result = combination_sum2(candidates, target)
for combo in sorted(result):
    print(*combo)`,
      java: `import java.util.*;

public class Solution {
    public static List<List<Integer>> combinationSum2(int[] candidates, int target) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] candidates = new int[n];
            for (int i = 0; i < n; i++) candidates[i] = sc.nextInt();
            int target = sc.nextInt();
            List<List<Integer>> result = combinationSum2(candidates, target);
            result.sort((a, b) -> {
                int len = Math.min(a.size(), b.size());
                for (int i = 0; i < len; i++)
                    if (!a.get(i).equals(b.get(i))) return a.get(i) - b.get(i);
                return a.size() - b.size();
            });
            for (List<Integer> combo : result) {
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < combo.size(); i++)
                    sb.append(combo.get(i)).append(i == combo.size()-1 ? "" : " ");
                System.out.println(sb);
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int res_cs2[500][55];
int res_sizes_cs2[500];
int res_count_cs2 = 0;
int current_cs2[55];
int n_cs2;

int cmpInt(const void* a, const void* b) { return *(int*)a - *(int*)b; }

void backtrack(int* cands, int start, int remaining, int depth) {
    if (remaining == 0) {
        for (int i = 0; i < depth; i++) res_cs2[res_count_cs2][i] = current_cs2[i];
        res_sizes_cs2[res_count_cs2++] = depth;
        return;
    }
    for (int i = start; i < n_cs2; i++) {
        if (i > start && cands[i] == cands[i-1]) continue;
        if (cands[i] > remaining) break;
        current_cs2[depth] = cands[i];
        backtrack(cands, i + 1, remaining - cands[i], depth + 1);
    }
}

int main() {
    if (scanf("%d", &n_cs2) != 1) return 0;
    int cands[105];
    for (int i = 0; i < n_cs2; i++) scanf("%d", &cands[i]);
    int target; scanf("%d", &target);
    qsort(cands, n_cs2, sizeof(int), cmpInt);
    res_count_cs2 = 0;
    backtrack(cands, 0, target, 0);
    for (int i = 0; i < res_count_cs2; i++) {
        for (int j = 0; j < res_sizes_cs2[i]; j++)
            printf("%d%s", res_cs2[i][j], j == res_sizes_cs2[i]-1 ? "" : " ");
        printf("\\n");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
    return {};
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> candidates(n);
        for (int i = 0; i < n; i++) cin >> candidates[i];
        int target; cin >> target;
        vector<vector<int>> result = combinationSum2(candidates, target);
        sort(result.begin(), result.end());
        for (auto& combo : result) {
            for (int i = 0; i < combo.size(); i++)
                cout << combo[i] << (i == combo.size()-1 ? "" : " ");
            cout << "\\n";
        }
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-m5', title: 'Palindrome Partitioning', difficulty: 'Medium',
    description: 'Given a string `s`, partition `s` such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of `s`. Print each partition on its own line with substrings space-separated, sorted lexicographically.',
    constraints: ['1 <= s.length <= 16', 's consists of only lowercase English letters.'],
    examples: [
      { input: 's = "aab"', output: 'a a b\na ab', explanation: 'Two valid palindrome partitions.' }
    ],
    testCases: [
      { input: 'aab', expectedOutput: 'a a b\na ab', hidden: false },
      { input: 'a', expectedOutput: 'a', hidden: false }
    ],
    starterCode: {
      python: `def partition(s):
    pass

s = input().strip()
result = partition(s)
for part in sorted(result):
    print(*part)`,
      java: `import java.util.*;

public class Solution {
    public static List<List<String>> partition(String s) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s = sc.next();
            List<List<String>> result = partition(s);
            result.sort((a, b) -> {
                int len = Math.min(a.size(), b.size());
                for (int i = 0; i < len; i++) {
                    int cmp = a.get(i).compareTo(b.get(i));
                    if (cmp != 0) return cmp;
                }
                return a.size() - b.size();
            });
            for (List<String> part : result) {
                System.out.println(String.join(" ", part));
            }
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

char res_pp[5000][20][20];
int res_depths[5000];
int res_count_pp = 0;
char current_pp[20][20];

bool isPalin(char* s, int l, int r) {
    while (l < r) { if (s[l++] != s[r--]) return false; } return true;
}

void backtrack(char* s, int start, int depth) {
    int len = strlen(s);
    if (start == len) {
        for (int i = 0; i < depth; i++) strcpy(res_pp[res_count_pp][i], current_pp[i]);
        res_depths[res_count_pp++] = depth;
        return;
    }
    for (int end = start; end < len; end++) {
        if (isPalin(s, start, end)) {
            strncpy(current_pp[depth], s + start, end - start + 1);
            current_pp[depth][end - start + 1] = '\\0';
            backtrack(s, end + 1, depth + 1);
        }
    }
}

int main() {
    char s[20];
    if (scanf("%s", s) == 1) {
        res_count_pp = 0;
        backtrack(s, 0, 0);
        for (int i = 0; i < res_count_pp; i++) {
            for (int j = 0; j < res_depths[i]; j++)
                printf("%s%s", res_pp[i][j], j == res_depths[i]-1 ? "" : " ");
            printf("\\n");
        }
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

vector<vector<string>> partition(string s) {
    return {};
}

int main() {
    string s;
    if (cin >> s) {
        vector<vector<string>> result = partition(s);
        sort(result.begin(), result.end());
        for (auto& part : result) {
            for (int i = 0; i < part.size(); i++)
                cout << part[i] << (i == part.size()-1 ? "" : " ");
            cout << "\\n";
        }
    }
    return 0;
}`
    }
  },

  // --- HARD ---
  {
    id: 'nq-h1', title: 'N-Queens with Obstacles', difficulty: 'Hard',
    description: 'Given an `n x n` chessboard with some cells blocked (marked as `1`), place `n` queens such that no two attack each other, and no queen is on a blocked cell. Return the number of valid arrangements. Queens attack along rows, columns, and diagonals.',
    constraints: ['1 <= n <= 9', 'grid[i][j] is 0 (free) or 1 (blocked).'],
    examples: [
      { input: 'n = 4\n0 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0', output: '2', explanation: 'Standard 4-Queens without obstacles gives 2 solutions.' },
      { input: 'n = 4\n1 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0', output: '1', explanation: 'One cell blocked, only 1 solution remains.' }
    ],
    testCases: [
      { input: '4\n0 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0', expectedOutput: '2', hidden: false },
      { input: '4\n1 0 0 0\n0 0 0 0\n0 0 0 0\n0 0 0 0', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `def n_queens_obstacles(grid):
    pass

n = int(input())
grid = [list(map(int, input().split())) for _ in range(n)]
print(n_queens_obstacles(grid))`,
      java: `import java.util.*;

public class Solution {
    public static int nQueensObstacles(int[][] grid) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++)
                for (int j = 0; j < n; j++) grid[i][j] = sc.nextInt();
            System.out.println(nQueensObstacles(grid));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int nQueensObstacles(int** grid, int n) {
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
    printf("%d\\n", nQueensObstacles(grid, n));
    for (int i = 0; i < n; i++) free(grid[i]);
    free(grid);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int nQueensObstacles(vector<vector<int>>& grid) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> grid(n, vector<int>(n));
        for (int i = 0; i < n; i++)
            for (int j = 0; j < n; j++) cin >> grid[i][j];
        cout << nQueensObstacles(grid) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-h2', title: 'Sudoku Solver', difficulty: 'Hard',
    description: 'Write a program to solve a Sudoku puzzle by filling the empty cells using backtracking. A sudoku solution must satisfy all rules: each row, column, and 3x3 box contains digits 1-9 without repetition. Output the solved board row by row, space-separated.',
    constraints: ['board.length == 9', 'board[i][j] is a digit or \'.\'.', 'The input board has exactly one solution.'],
    examples: [
      { input: 'A partially filled 9x9 board.', output: 'The completed 9x9 board.', explanation: 'Standard backtracking with constraint checking.' }
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
    print(*row)`,
      java: `import java.util.*;

public class Solution {
    public static void solveSudoku(char[][] board) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        char[][] board = new char[9][9];
        for (int i = 0; i < 9; i++)
            for (int j = 0; j < 9; j++) if (sc.hasNext()) board[i][j] = sc.next().charAt(0);
        solveSudoku(board);
        for (int i = 0; i < 9; i++) {
            for (int j = 0; j < 9; j++) System.out.print(board[i][j] + (j==8?"":" "));
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
            char s[5]; if (scanf("%s", s) == 1) board[i][j] = s[0];
        }
    }
    solveSudoku(board);
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) printf("%c%s", board[i][j], j==8?"":" ");
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
    for (int i = 0; i < 9; i++)
        for (int j = 0; j < 9; j++) cin >> board[i][j];
    solveSudoku(board);
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) cout << board[i][j] << (j==8?"":" ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-h3', title: 'Expression Add Operators', difficulty: 'Hard',
    description: 'Given a string `num` that contains only digits and an integer `target`, return all possibilities to insert the binary operators `+`, `-`, or `*` between the digits of `num` so that the resultant expression evaluates to the `target` value. Output results sorted lexicographically, one per line.',
    constraints: ['1 <= num.length <= 10', 'num consists of only digits.', '-2^31 <= target <= 2^31 - 1'],
    examples: [
      { input: 'num = "123", target = 6', output: '1*2*3\n1+2+3', explanation: '1*2*3=6 and 1+2+3=6.' }
    ],
    testCases: [
      { input: '123\n6', expectedOutput: '1*2*3\n1+2+3', hidden: false },
      { input: '232\n8', expectedOutput: '2*3+2\n2+3*2', hidden: false }
    ],
    starterCode: {
      python: `def add_operators(num, target):
    pass

num = input().strip()
target = int(input())
result = add_operators(num, target)
for expr in sorted(result):
    print(expr)`,
      java: `import java.util.*;

public class Solution {
    public static List<String> addOperators(String num, int target) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String num = sc.next();
            int target = sc.nextInt();
            List<String> result = addOperators(num, target);
            Collections.sort(result);
            for (String expr : result) System.out.println(expr);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char res_ao[5000][25];
int res_count_ao = 0;
char num_ao[15];
long long target_ao;

void backtrack(int pos, long long val, long long prev, char* expr, int eLen) {
    int numLen = strlen(num_ao);
    if (pos == numLen) {
        if (val == target_ao) {
            strncpy(res_ao[res_count_ao], expr, eLen);
            res_ao[res_count_ao++][eLen] = '\\0';
        }
        return;
    }
    long long cur = 0;
    for (int i = pos; i < numLen; i++) {
        if (i > pos && num_ao[pos] == '0') break;
        cur = cur * 10 + (num_ao[i] - '0');
        char tmp[25]; strncpy(tmp, expr, eLen); tmp[eLen] = '\\0';
        if (pos == 0) {
            char seg[15]; snprintf(seg, 15, "%lld", cur);
            strcat(tmp, seg);
            backtrack(i+1, cur, cur, tmp, strlen(tmp));
        } else {
            char seg[15]; snprintf(seg, 15, "%lld", cur);
            char e2[25]; snprintf(e2, 25, "%s+%s", tmp, seg);
            backtrack(i+1, val + cur, cur, e2, strlen(e2));
            snprintf(e2, 25, "%s-%s", tmp, seg);
            backtrack(i+1, val - cur, -cur, e2, strlen(e2));
            snprintf(e2, 25, "%s*%s", tmp, seg);
            backtrack(i+1, val - prev + prev * cur, prev * cur, e2, strlen(e2));
        }
    }
}

int cmpStr(const void* a, const void* b) { return strcmp((const char*)a, (const char*)b); }

int main() {
    if (scanf("%s %lld", num_ao, &target_ao) == 2) {
        res_count_ao = 0;
        char expr[25] = "";
        backtrack(0, 0, 0, expr, 0);
        qsort(res_ao, res_count_ao, sizeof(res_ao[0]), cmpStr);
        for (int i = 0; i < res_count_ao; i++) printf("%s\\n", res_ao[i]);
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;

vector<string> addOperators(string num, int target) {
    return {};
}

int main() {
    string num;
    int target;
    if (cin >> num >> target) {
        vector<string> result = addOperators(num, target);
        sort(result.begin(), result.end());
        for (auto& expr : result) cout << expr << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-h4', title: 'Zuma Game (Remove Boxes)', difficulty: 'Hard',
    description: 'You are given several `boxes` with different colors represented by different positive integers. You may experience several rounds to remove boxes until there are no boxes left. Each time you can choose some continuous boxes with the same color to remove, gaining `k * k` points where `k` is the number of boxes removed. Return the maximum points you can get. Uses backtracking with memoization (interval DP).',
    constraints: ['1 <= boxes.length <= 100', '1 <= boxes[i] <= 100'],
    examples: [
      { input: 'boxes = [1,3,2,2,2,3,4,3,1]', output: '23', explanation: 'Optimal removal yields 23 points.' }
    ],
    testCases: [
      { input: '9\n1 3 2 2 2 3 4 3 1', expectedOutput: '23', hidden: false },
      { input: '3\n1 1 1', expectedOutput: '9', hidden: false }
    ],
    starterCode: {
      python: `def remove_boxes(boxes):
    pass

n = int(input())
boxes = list(map(int, input().split()))
print(remove_boxes(boxes))`,
      java: `import java.util.*;

public class Solution {
    public static int removeBoxes(int[] boxes) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] boxes = new int[n];
            for (int i = 0; i < n; i++) boxes[i] = sc.nextInt();
            System.out.println(removeBoxes(boxes));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int memo_rb[105][105][105];

int dp(int* boxes, int l, int r, int k) {
    if (l > r) return 0;
    if (memo_rb[l][r][k]) return memo_rb[l][r][k];
    int res = (k + 1) * (k + 1) + dp(boxes, l + 1, r, 0);
    for (int m = l + 1; m <= r; m++) {
        if (boxes[m] == boxes[l]) {
            int val = dp(boxes, l+1, m-1, 0) + dp(boxes, m, r, k+1);
            if (val > res) res = val;
        }
    }
    return memo_rb[l][r][k] = res;
}

int removeBoxes(int* boxes, int n) {
    memset(memo_rb, 0, sizeof(memo_rb));
    return dp(boxes, 0, n - 1, 0);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* boxes = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &boxes[i]);
    printf("%d\\n", removeBoxes(boxes, n));
    free(boxes);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int removeBoxes(vector<int>& boxes) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> boxes(n);
        for (int i = 0; i < n; i++) cin >> boxes[i];
        cout << removeBoxes(boxes) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'nq-h5', title: 'Minimum Knight Moves', difficulty: 'Hard',
    description: 'In an infinite chess board, a knight starts at `(0, 0)`. Given a target `(x, y)`, return the minimum number of moves required for the knight to reach the target. Knights move in an L-shape: 2 cells in one direction and 1 cell perpendicular. Uses BFS/backtracking with pruning.',
    constraints: ['-300 <= x, y <= 300'],
    examples: [
      { input: 'x = 2, y = 1', output: '1', explanation: 'One knight move from (0,0) to (2,1).' },
      { input: 'x = 5, y = 5', output: '4', explanation: '4 moves needed to reach (5,5).' }
    ],
    testCases: [
      { input: '2 1', expectedOutput: '1', hidden: false },
      { input: '5 5', expectedOutput: '4', hidden: false },
      { input: '0 0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `def min_knight_moves(x, y):
    pass

x, y = map(int, input().split())
print(min_knight_moves(x, y))`,
      java: `import java.util.*;

public class Solution {
    public static int minKnightMoves(int x, int y) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int x = sc.nextInt(), y = sc.nextInt();
            System.out.println(minKnightMoves(x, y));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int minKnightMoves(int x, int y) {
    return 0;
}

int main() {
    int x, y;
    if (scanf("%d %d", &x, &y) == 2) {
        printf("%d\\n", minKnightMoves(x, y));
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <queue>
#include <unordered_map>
using namespace std;

int minKnightMoves(int x, int y) {
    return 0;
}

int main() {
    int x, y;
    if (cin >> x >> y) {
        cout << minKnightMoves(x, y) << "\\n";
    }
    return 0;
}`
    }
  }
];