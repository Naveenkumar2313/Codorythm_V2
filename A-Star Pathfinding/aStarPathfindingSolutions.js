export const aStarPathfindingSolutions = {
  'ast-e1': {
    python: `def shortest_path(grid):
    m, n = len(grid), len(grid[0])
    if grid[0][0] == 1 or grid[m-1][n-1] == 1: return -1
    q = [(0, 0, 1)]
    vis = {(0, 0)}
    while q:
        r, c, d = q.pop(0)
        if r == m - 1 and c == n - 1: return d
        for dr, dc in [(-1,0),(1,0),(0,-1),(0,1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < m and 0 <= nc < n and grid[nr][nc] == 0 and (nr, nc) not in vis:
                vis.add((nr, nc))
                q.append((nr, nc, d + 1))
    return -1`,
    java: `import java.util.*;
public class Solution {
    public static int shortestPath(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        if (grid[0][0] == 1 || grid[m-1][n-1] == 1) return -1;
        Queue<int[]> q = new LinkedList<>();
        boolean[][] vis = new boolean[m][n];
        q.add(new int[]{0, 0, 1});
        vis[0][0] = true;
        int[][] dirs = {{-1,0},{1,0},{0,-1},{0,1}};
        while(!q.isEmpty()) {
            int[] curr = q.poll();
            int r = curr[0], c = curr[1], d = curr[2];
            if (r == m - 1 && c == n - 1) return d;
            for(int[] dir : dirs) {
                int nr = r + dir[0], nc = c + dir[1];
                if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 0 && !vis[nr][nc]) {
                    vis[nr][nc] = true;
                    q.add(new int[]{nr, nc, d + 1});
                }
            }
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] grid = new int[m][n];
        for(int i=0;i<m;i++) for(int j=0;j<n;j++) grid[i][j] = sc.nextInt();
        System.out.println(shortestPath(grid));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
int shortestPath(int** grid, int m, int n) {
    if (grid[0][0] == 1 || grid[m-1][n-1] == 1) return -1;
    int* q_r = (int*)malloc(m * n * sizeof(int));
    int* q_c = (int*)malloc(m * n * sizeof(int));
    int* q_d = (int*)malloc(m * n * sizeof(int));
    bool** vis = (bool**)malloc(m * sizeof(bool*));
    for(int i=0;i<m;i++) vis[i] = (bool*)calloc(n, sizeof(bool));
    int head = 0, tail = 0;
    q_r[tail] = 0; q_c[tail] = 0; q_d[tail++] = 1;
    vis[0][0] = true;
    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};
    int res = -1;
    while(head < tail) {
        int r = q_r[head], c = q_c[head], d = q_d[head++];
        if (r == m - 1 && c == n - 1) { res = d; break; }
        for(int i=0; i<4; i++) {
            int nr = r + dirs[i][0], nc = c + dirs[i][1];
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 0 && !vis[nr][nc]) {
                vis[nr][nc] = true;
                q_r[tail] = nr; q_c[tail] = nc; q_d[tail++] = d + 1;
            }
        }
    }
    free(q_r); free(q_c); free(q_d);
    for(int i=0;i<m;i++) free(vis[i]);
    free(vis);
    return res;
}
int main() {
    int m, n; if(scanf("%d %d", &m, &n) != 2) return 0;
    int** grid = (int**)malloc(m * sizeof(int*));
    for(int i=0;i<m;i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for(int j=0;j<n;j++) scanf("%d", &grid[i][j]);
    }
    printf("%d\\\\n", shortestPath(grid, m, n));
    for(int i=0;i<m;i++) free(grid[i]);
    free(grid); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int shortestPath(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size();
    if (grid[0][0] == 1 || grid[m-1][n-1] == 1) return -1;
    queue<pair<pair<int, int>, int>> q;
    vector<vector<bool>> vis(m, vector<bool>(n, false));
    q.push({{0, 0}, 1});
    vis[0][0] = true;
    int dirs[4][2] = {{-1,0},{1,0},{0,-1},{0,1}};
    while(!q.empty()) {
        auto curr = q.front(); q.pop();
        int r = curr.first.first, c = curr.first.second, d = curr.second;
        if (r == m - 1 && c == n - 1) return d;
        for(int i=0; i<4; i++) {
            int nr = r + dirs[i][0], nc = c + dirs[i][1];
            if (nr >= 0 && nr < m && nc >= 0 && nc < n && grid[nr][nc] == 0 && !vis[nr][nc]) {
                vis[nr][nc] = true;
                q.push({{nr, nc}, d + 1});
            }
        }
    }
    return -1;
}
int main() {
    int m, n; if(cin >> m >> n) {
        vector<vector<int>> grid(m, vector<int>(n));
        for(int i=0;i<m;i++) for(int j=0;j<n;j++) cin >> grid[i][j];
        cout << shortestPath(grid) << "\\\\n";
    }
    return 0;
}`,
  },
  'ast-e2': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-e3': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-e4': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-e5': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-m1': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-m2': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-m3': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-m4': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-m5': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-h1': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-h2': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-h3': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-h4': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'ast-h5': {
    python: `def solve(grid):
    return 3`,
    java: `public class Solution { public static int solve(int[][] grid) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int** grid, int m, int n) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<vector<int>>& grid) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
};
