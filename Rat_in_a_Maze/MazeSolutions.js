export const ratInAMazeSolutions = [
  // --- EASY SOLUTIONS ---
  {
    id: 'rm-e1',
    solutions: {
      python: `def count_paths(maze):
    n = len(maze)
    def dfs(r, c):
        if r == n - 1 and c == n - 1: return 1
        count = 0
        for dr, dc in [(1, 0), (0, 1)]:
            nr, nc = r + dr, c + dc
            if 0 <= nr < n and 0 <= nc < n and maze[nr][nc] == 1:
                count += dfs(nr, nc)
        return count
    if maze[0][0] == 0: return 0
    return dfs(0, 0)`,
      java: `    static int dfs(int[][] maze, int r, int c, int n) {
        if (r == n-1 && c == n-1) return 1;
        int count = 0;
        int[] dr = {1, 0}, dc = {0, 1};
        for (int d = 0; d < 2; d++) {
            int nr = r + dr[d], nc = c + dc[d];
            if (nr < n && nc < n && maze[nr][nc] == 1)
                count += dfs(maze, nr, nc, n);
        }
        return count;
    }
    public static int countPaths(int[][] maze) {
        int n = maze.length;
        if (maze[0][0] == 0) return 0;
        return dfs(maze, 0, 0, n);
    }`,
      c: `int n_cp;
int dfs_cp(int** maze, int r, int c) {
    if (r == n_cp-1 && c == n_cp-1) return 1;
    int count = 0;
    int dr[] = {1, 0}, dc[] = {0, 1};
    for (int d = 0; d < 2; d++) {
        int nr = r + dr[d], nc = c + dc[d];
        if (nr < n_cp && nc < n_cp && maze[nr][nc] == 1)
            count += dfs_cp(maze, nr, nc);
    }
    return count;
}
int countPaths(int** maze, int n) {
    n_cp = n;
    if (maze[0][0] == 0) return 0;
    return dfs_cp(maze, 0, 0);
}`,
      cpp: `int countPaths(vector<vector<int>>& maze) {
    int n = maze.size();
    if (maze[0][0] == 0) return 0;
    function<int(int,int)> dfs = [&](<int r, int c>) -> int {
        if (r == n-1 && c == n-1) return 1;
        int count = 0;
        vector<pair<int,int>> dirs = {{1,0},{0,1}};
        for (auto [dr,dc] : dirs) {
            int nr = r+dr, nc = c+dc;
            if (nr < n && nc < n && maze[nr][nc] == 1)
                count += dfs(nr, nc);
        }
        return count;
    };
    return dfs(0, 0);
}`
    }
  },
  {
    id: 'rm-e2',
    solutions: {
      python: `def unique_paths(m, n):
    dp = [[1] * n for _ in range(m)]
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i-1][j] + dp[i][j-1]
    return dp[m-1][n-1]`,
      java: `    public static int uniquePaths(int m, int n) {
        int[][] dp = new int[m][n];
        for (int i = 0; i < m; i++) dp[i][0] = 1;
        for (int j = 0; j < n; j++) dp[0][j] = 1;
        for (int i = 1; i < m; i++)
            for (int j = 1; j < n; j++)
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
        return dp[m-1][n-1];
    }`,
      c: `int uniquePaths(int m, int n) {
    int dp[105][105];
    for (int i = 0; i < m; i++) dp[i][0] = 1;
    for (int j = 0; j < n; j++) dp[0][j] = 1;
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
    return dp[m-1][n-1];
}`,
      cpp: `int uniquePaths(int m, int n) {
    vector<vector<int>> dp(m, vector<int>(n, 1));
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            dp[i][j] = dp[i-1][j] + dp[i][j-1];
    return dp[m-1][n-1];
}`
    }
  },
  {
    id: 'rm-e3',
    solutions: {
      python: `def unique_paths_with_obstacles(grid):
    m, n = len(grid), len(grid[0])
    if grid[0][0] == 1 or grid[m-1][n-1] == 1: return 0
    dp = [[0] * n for _ in range(m)]
    dp[0][0] = 1
    for i in range(1, m):
        dp[i][0] = dp[i-1][0] if grid[i][0] == 0 else 0
    for j in range(1, n):
        dp[0][j] = dp[0][j-1] if grid[0][j] == 0 else 0
    for i in range(1, m):
        for j in range(1, n):
            if grid[i][j] == 1:
                dp[i][j] = 0
            else:
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
    return dp[m-1][n-1]`,
      java: `    public static int uniquePathsWithObstacles(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        if (grid[0][0] == 1 || grid[m-1][n-1] == 1) return 0;
        int[][] dp = new int[m][n];
        dp[0][0] = 1;
        for (int i = 1; i < m; i++) dp[i][0] = (grid[i][0] == 0) ? dp[i-1][0] : 0;
        for (int j = 1; j < n; j++) dp[0][j] = (grid[0][j] == 0) ? dp[0][j-1] : 0;
        for (int i = 1; i < m; i++)
            for (int j = 1; j < n; j++)
                dp[i][j] = (grid[i][j] == 1) ? 0 : dp[i-1][j] + dp[i][j-1];
        return dp[m-1][n-1];
    }`,
      c: `int uniquePathsWithObstacles(int** grid, int m, int n) {
    if (grid[0][0] == 1 || grid[m-1][n-1] == 1) return 0;
    int dp[105][105];
    memset(dp, 0, sizeof(dp));
    dp[0][0] = 1;
    for (int i = 1; i < m; i++) dp[i][0] = (grid[i][0] == 0) ? dp[i-1][0] : 0;
    for (int j = 1; j < n; j++) dp[0][j] = (grid[0][j] == 0) ? dp[0][j-1] : 0;
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            dp[i][j] = (grid[i][j] == 1) ? 0 : dp[i-1][j] + dp[i][j-1];
    return dp[m-1][n-1];
}`,
      cpp: `int uniquePathsWithObstacles(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size();
    if (grid[0][0] == 1 || grid[m-1][n-1] == 1) return 0;
    vector<vector<int>> dp(m, vector<int>(n, 0));
    dp[0][0] = 1;
    for (int i = 1; i < m; i++) dp[i][0] = (grid[i][0] == 0) ? dp[i-1][0] : 0;
    for (int j = 1; j < n; j++) dp[0][j] = (grid[0][j] == 0) ? dp[0][j-1] : 0;
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            dp[i][j] = (grid[i][j] == 1) ? 0 : dp[i-1][j] + dp[i][j-1];
    return dp[m-1][n-1];
}`
    }
  },
  {
    id: 'rm-e4',
    solutions: {
      python: `def min_path_sum(grid):
    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]
    dp[0][0] = grid[0][0]
    for i in range(1, m): dp[i][0] = dp[i-1][0] + grid[i][0]
    for j in range(1, n): dp[0][j] = dp[0][j-1] + grid[0][j]
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
    return dp[m-1][n-1]`,
      java: `    public static int minPathSum(int[][] grid) {
        int m = grid.length, n = grid[0].length;
        int[][] dp = new int[m][n];
        dp[0][0] = grid[0][0];
        for (int i = 1; i < m; i++) dp[i][0] = dp[i-1][0] + grid[i][0];
        for (int j = 1; j < n; j++) dp[0][j] = dp[0][j-1] + grid[0][j];
        for (int i = 1; i < m; i++)
            for (int j = 1; j < n; j++)
                dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
        return dp[m-1][n-1];
    }`,
      c: `int minPathSum(int** grid, int m, int n) {
    int dp[205][205];
    dp[0][0] = grid[0][0];
    for (int i = 1; i < m; i++) dp[i][0] = dp[i-1][0] + grid[i][0];
    for (int j = 1; j < n; j++) dp[0][j] = dp[0][j-1] + grid[0][j];
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++) {
            int best = dp[i-1][j] < dp[i][j-1] ? dp[i-1][j] : dp[i][j-1];
            dp[i][j] = best + grid[i][j];
        }
    return dp[m-1][n-1];
}`,
      cpp: `int minPathSum(vector<vector<int>>& grid) {
    int m = grid.size(), n = grid[0].size();
    vector<vector<int>> dp(m, vector<int>(n, 0));
    dp[0][0] = grid[0][0];
    for (int i = 1; i < m; i++) dp[i][0] = dp[i-1][0] + grid[i][0];
    for (int j = 1; j < n; j++) dp[0][j] = dp[0][j-1] + grid[0][j];
    for (int i = 1; i < m; i++)
        for (int j = 1; j < n; j++)
            dp[i][j] = min(dp[i-1][j], dp[i][j-1]) + grid[i][j];
    return dp[m-1][n-1];
}`
    }
  },
  {
    id: 'rm-e5',
    solutions: {
      python: `def has_path(maze):
    n = len(maze)
    visited = [[False] * n for _ in range(n)]
    def dfs(r, c):
        if r == n-1 and c == n-1: return True
        visited[r][c] = True
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r+dr, c+dc
            if 0 <= nr < n and 0 <= nc < n and not visited[nr][nc] and maze[nr][nc] == 1:
                if dfs(nr, nc): return True
        return False
    if maze[0][0] == 0: return False
    return dfs(0, 0)`,
      java: `    static boolean dfs(int[][] maze, boolean[][] visited, int r, int c, int n) {
        if (r == n-1 && c == n-1) return true;
        visited[r][c] = true;
        int[] dr = {1,-1,0,0}, dc = {0,0,1,-1};
        for (int d = 0; d < 4; d++) {
            int nr = r+dr[d], nc = c+dc[d];
            if (nr>=0 && nr<n && nc>=0 && nc<n && !visited[nr][nc] && maze[nr][nc]==1)
                if (dfs(maze, visited, nr, nc, n)) return true;
        }
        return false;
    }
    public static boolean hasPath(int[][] maze) {
        int n = maze.length;
        if (maze[0][0] == 0) return false;
        return dfs(maze, new boolean[n][n], 0, 0, n);
    }`,
      c: `int n_hp;
bool visited_hp[15][15];
int dr_hp[] = {1,-1,0,0}, dc_hp[] = {0,0,1,-1};
bool dfs_hp(int** maze, int r, int c) {
    if (r == n_hp-1 && c == n_hp-1) return true;
    visited_hp[r][c] = true;
    for (int d = 0; d < 4; d++) {
        int nr = r+dr_hp[d], nc = c+dc_hp[d];
        if (nr>=0 && nr<n_hp && nc>=0 && nc<n_hp && !visited_hp[nr][nc] && maze[nr][nc]==1)
            if (dfs_hp(maze, nr, nc)) return true;
    }
    return false;
}
bool hasPath(int** maze, int n) {
    n_hp = n;
    memset(visited_hp, 0, sizeof(visited_hp));
    if (maze[0][0] == 0) return false;
    return dfs_hp(maze, 0, 0);
}`,
      cpp: `bool hasPath(vector<vector<int>>& maze) {
    int n = maze.size();
    if (maze[0][0] == 0) return false;
    vector<vector<bool>> visited(n, vector<bool>(n, false));
    vector<int> dr = {1,-1,0,0}, dc = {0,0,1,-1};
    function<bool(int,int)> dfs = [&](<int r, int c>) -> bool {
        if (r == n-1 && c == n-1) return true;
        visited[r][c] = true;
        for (int d = 0; d < 4; d++) {
            int nr = r+dr[d], nc = c+dc[d];
            if (nr>=0 && nr<n && nc>=0 && nc<n && !visited[nr][nc] && maze[nr][nc]==1)
                if (dfs(nr, nc)) return true;
        }
        return false;
    };
    return dfs(0, 0);
}`
    }
  },

  // --- MEDIUM SOLUTIONS ---
  {
    id: 'rm-m1',
    solutions: {
      python: `def find_paths(maze):
    n = len(maze)
    res = []
    visited = [[False] * n for _ in range(n)]
    dirs = [('D',1,0),('L',0,-1),('R',0,1),('U',-1,0)]
    def dfs(r, c, path):
        if r == n-1 and c == n-1:
            res.append(path)
            return
        visited[r][c] = True
        for ch, dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n and not visited[nr][nc] and maze[nr][nc]==1:
                dfs(nr, nc, path+ch)
        visited[r][c] = False
    if maze[0][0] == 1:
        dfs(0, 0, "")
    return res`,
      java: `    static List<String> res_fp = new ArrayList<>();
    static int[][] dirs_fp = {{1,0},{0,-1},{0,1},{-1,0}};
    static char[] dirChars = {'D','L','R','U'};
    static void dfs(int[][] maze, boolean[][] visited, int r, int c, int n, StringBuilder path) {
        if (r == n-1 && c == n-1) { res_fp.add(path.toString()); return; }
        visited[r][c] = true;
        for (int d = 0; d < 4; d++) {
            int nr = r+dirs_fp[d][0], nc = c+dirs_fp[d][1];
            if (nr>=0 && nr<n && nc>=0 && nc<n && !visited[nr][nc] && maze[nr][nc]==1) {
                path.append(dirChars[d]);
                dfs(maze, visited, nr, nc, n, path);
                path.deleteCharAt(path.length()-1);
            }
        }
        visited[r][c] = false;
    }
    public static List<String> findPaths(int[][] maze) {
        res_fp = new ArrayList<>();
        int n = maze.length;
        if (maze[0][0] == 1)
            dfs(maze, new boolean[n][n], 0, 0, n, new StringBuilder());
        return res_fp;
    }`,
      c: `// In starter code:
// dirs: D=(1,0), L=(0,-1), R=(0,1), U=(-1,0)
// dfs(maze, n, r, c, current, len, visited):
//   if r==n-1 && c==n-1: save current to paths, return
//   visited[r][c] = 1
//   for each direction d in {D,L,R,U}:
//     nr = r+dr[d], nc = c+dc[d]
//     if valid && !visited && maze[nr][nc]==1:
//       current[len] = dirChar[d]
//       dfs(maze, n, nr, nc, current, len+1, visited)
//   current[len] = 0; visited[r][c] = 0`,
      cpp: `vector<string> findPaths(vector<vector<int>>& maze) {
    int n = maze.size();
    vector<string> res;
    if (maze[0][0] == 0) return res;
    vector<vector<bool>> visited(n, vector<bool>(n, false));
    vector<pair<char,pair<int,int>>> dirs = {{'D',{1,0}},{'L',{0,-1}},{'R',{0,1}},{'U',{-1,0}}};
    function<void(int,int,string)> dfs = [&](<int r, int c, string path>) {
        if (r == n-1 && c == n-1) { res.push_back(path); return; }
        visited[r][c] = true;
        for (auto& [ch, d] : dirs) {
            int nr = r+d.first, nc = c+d.second;
            if (nr>=0 && nr<n && nc>=0 && nc<n && !visited[nr][nc] && maze[nr][nc]==1)
                dfs(nr, nc, path+ch);
        }
        visited[r][c] = false;
    };
    dfs(0, 0, "");
    return res;
}`
    }
  },
  {
    id: 'rm-m2',
    solutions: {
      python: `def shortest_path_binary_matrix(grid):
    from collections import deque
    n = len(grid)
    if grid[0][0] == 1 or grid[n-1][n-1] == 1: return -1
    dirs = [(-1,-1),(-1,0),(-1,1),(0,-1),(0,1),(1,-1),(1,0),(1,1)]
    queue = deque([(0, 0, 1)])
    grid[0][0] = 1
    while queue:
        r, c, dist = queue.popleft()
        if r == n-1 and c == n-1: return dist
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n and grid[nr][nc]==0:
                grid[nr][nc] = 1
                queue.append((nr, nc, dist+1))
    return -1`,
      java: `    public static int shortestPathBinaryMatrix(int[][] grid) {
        int n = grid.length;
        if (grid[0][0]==1 || grid[n-1][n-1]==1) return -1;
        int[][] dirs = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0,0,1});
        grid[0][0] = 1;
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int r = curr[0], c = curr[1], dist = curr[2];
            if (r==n-1 && c==n-1) return dist;
            for (int[] d : dirs) {
                int nr = r+d[0], nc = c+d[1];
                if (nr>=0 && nr<n && nc>=0 && nc<n && grid[nr][nc]==0) {
                    grid[nr][nc] = 1;
                    queue.offer(new int[]{nr, nc, dist+1});
                }
            }
        }
        return -1;
    }`,
      c: `int shortestPathBinaryMatrix(int** grid, int n) {
    if (grid[0][0]==1 || grid[n-1][n-1]==1) return -1;
    int dr[] = {-1,-1,-1,0,0,1,1,1};
    int dc[] = {-1,0,1,-1,1,-1,0,1};
    int queue[10005][3]; int front=0, back=0;
    queue[back][0]=0; queue[back][1]=0; queue[back][2]=1; back++;
    grid[0][0] = 1;
    while (front < back) {
        int r=queue[front][0], c=queue[front][1], dist=queue[front][2]; front++;
        if (r==n-1 && c==n-1) return dist;
        for (int d=0; d<8; d++) {
            int nr=r+dr[d], nc=c+dc[d];
            if (nr>=0 && nr<n && nc>=0 && nc<n && grid[nr][nc]==0) {
                grid[nr][nc]=1;
                queue[back][0]=nr; queue[back][1]=nc; queue[back][2]=dist+1; back++;
            }
        }
    }
    return -1;
}`,
      cpp: `int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
    int n = grid.size();
    if (grid[0][0]==1 || grid[n-1][n-1]==1) return -1;
    vector<pair<int,int>> dirs = {{-1,-1},{-1,0},{-1,1},{0,-1},{0,1},{1,-1},{1,0},{1,1}};
    queue<tuple<int,int,int>> q;
    q.push({0,0,1});
    grid[0][0] = 1;
    while (!q.empty()) {
        auto [r,c,dist] = q.front(); q.pop();
        if (r==n-1 && c==n-1) return dist;
        for (auto [dr,dc] : dirs) {
            int nr=r+dr, nc=c+dc;
            if (nr>=0 && nr<n && nc>=0 && nc<n && grid[nr][nc]==0) {
                grid[nr][nc]=1;
                q.push({nr,nc,dist+1});
            }
        }
    }
    return -1;
}`
    }
  },
  {
    id: 'rm-m3',
    solutions: {
      python: `def count_paths_k_steps(maze, k):
    n = len(maze)
    visited = [[False]*n for _ in range(n)]
    count = [0]
    def dfs(r, c, steps):
        if r==n-1 and c==n-1:
            if steps == k: count[0] += 1
            return
        if steps >= k: return
        visited[r][c] = True
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n and not visited[nr][nc] and maze[nr][nc]==1:
                dfs(nr, nc, steps+1)
        visited[r][c] = False
    if maze[0][0] == 1:
        dfs(0, 0, 0)
    return count[0]`,
      java: `    static int count_ks;
    static void dfs(int[][] maze, boolean[][] visited, int r, int c, int n, int k, int steps) {
        if (r==n-1 && c==n-1) { if (steps==k) count_ks++; return; }
        if (steps >= k) return;
        visited[r][c] = true;
        int[] dr={1,-1,0,0}, dc={0,0,1,-1};
        for (int d=0; d<4; d++) {
            int nr=r+dr[d], nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]&&maze[nr][nc]==1)
                dfs(maze,visited,nr,nc,n,k,steps+1);
        }
        visited[r][c] = false;
    }
    public static int countPathsKSteps(int[][] maze, int k) {
        int n = maze.length;
        count_ks = 0;
        if (maze[0][0]==1) dfs(maze,new boolean[n][n],0,0,n,k,0);
        return count_ks;
    }`,
      c: `int n_ks, k_ks, count_ks;
bool visited_ks[10][10];
int dr_ks[]={1,-1,0,0}, dc_ks[]={0,0,1,-1};
void dfs_ks(int** maze, int r, int c, int steps) {
    if (r==n_ks-1 && c==n_ks-1) { if (steps==k_ks) count_ks++; return; }
    if (steps >= k_ks) return;
    visited_ks[r][c] = true;
    for (int d=0; d<4; d++) {
        int nr=r+dr_ks[d], nc=c+dc_ks[d];
        if (nr>=0&&nr<n_ks&&nc>=0&&nc<n_ks&&!visited_ks[nr][nc]&&maze[nr][nc]==1)
            dfs_ks(maze,nr,nc,steps+1);
    }
    visited_ks[r][c] = false;
}
int countPathsKSteps(int** maze, int n, int k) {
    n_ks=n; k_ks=k; count_ks=0;
    memset(visited_ks, 0, sizeof(visited_ks));
    if (maze[0][0]==1) dfs_ks(maze,0,0,0);
    return count_ks;
}`,
      cpp: `int countPathsKSteps(vector<vector<int>>& maze, int k) {
    int n = maze.size(), count = 0;
    if (maze[0][0] == 0) return 0;
    vector<vector<bool>> visited(n, vector<bool>(n, false));
    vector<int> dr={1,-1,0,0}, dc={0,0,1,-1};
    function<void(int,int,int)> dfs = [&](<int r, int c, int steps>) {
        if (r==n-1 && c==n-1) { if (steps==k) count++; return; }
        if (steps >= k) return;
        visited[r][c] = true;
        for (int d=0; d<4; d++) {
            int nr=r+dr[d], nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]&&maze[nr][nc]==1)
                dfs(nr,nc,steps+1);
        }
        visited[r][c] = false;
    };
    dfs(0, 0, 0);
    return count;
}`
    }
  },
  {
    id: 'rm-m4',
    solutions: {
      python: `def min_knight_moves(n, kr, kc, tr, tc):
    from collections import deque
    if kr==tr and kc==tc: return 0
    moves = [(2,1),(2,-1),(-2,1),(-2,-1),(1,2),(1,-2),(-1,2),(-1,-2)]
    visited = [[False]*n for _ in range(n)]
    queue = deque([(kr, kc, 0)])
    visited[kr][kc] = True
    while queue:
        r, c, steps = queue.popleft()
        for dr, dc in moves:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n and not visited[nr][nc]:
                if nr==tr and nc==tc: return steps+1
                visited[nr][nc] = True
                queue.append((nr, nc, steps+1))
    return -1`,
      java: `    public static int minKnightMoves(int n, int kr, int kc, int tr, int tc) {
        if (kr==tr && kc==tc) return 0;
        int[][] moves = {{2,1},{2,-1},{-2,1},{-2,-1},{1,2},{1,-2},{-1,2},{-1,-2}};
        boolean[][] visited = new boolean[n][n];
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{kr,kc,0});
        visited[kr][kc] = true;
        while (!q.isEmpty()) {
            int[] curr = q.poll();
            int r=curr[0], c=curr[1], steps=curr[2];
            for (int[] m : moves) {
                int nr=r+m[0], nc=c+m[1];
                if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]) {
                    if (nr==tr&&nc==tc) return steps+1;
                    visited[nr][nc]=true;
                    q.offer(new int[]{nr,nc,steps+1});
                }
            }
        }
        return -1;
    }`,
      c: `int minKnightMoves(int n, int kr, int kc, int tr, int tc) {
    if (kr==tr && kc==tc) return 0;
    int dr[]={2,2,-2,-2,1,1,-1,-1};
    int dc[]={1,-1,1,-1,2,-2,2,-2};
    bool visited[105][105]; memset(visited,0,sizeof(visited));
    int queue[10005][3]; int front=0,back=0;
    queue[back][0]=kr; queue[back][1]=kc; queue[back][2]=0; back++;
    visited[kr][kc]=true;
    while (front<back) {
        int r=queue[front][0],c=queue[front][1],steps=queue[front][2]; front++;
        for (int d=0;d<8;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]) {
                if (nr==tr&&nc==tc) return steps+1;
                visited[nr][nc]=true;
                queue[back][0]=nr; queue[back][1]=nc; queue[back][2]=steps+1; back++;
            }
        }
    }
    return -1;
}`,
      cpp: `int minKnightMoves(int n, int kr, int kc, int tr, int tc) {
    if (kr==tr && kc==tc) return 0;
    vector<pair<int,int>> moves={{2,1},{2,-1},{-2,1},{-2,-1},{1,2},{1,-2},{-1,2},{-1,-2}};
    vector<vector<bool>> visited(n, vector<bool>(n, false));
    queue<tuple<int,int,int>> q;
    q.push({kr,kc,0}); visited[kr][kc]=true;
    while (!q.empty()) {
        auto [r,c,steps]=q.front(); q.pop();
        for (auto [dr,dc] : moves) {
            int nr=r+dr, nc=c+dc;
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]) {
                if (nr==tr&&nc==tc) return steps+1;
                visited[nr][nc]=true;
                q.push({nr,nc,steps+1});
            }
        }
    }
    return -1;
}`
    }
  },
  {
    id: 'rm-m5',
    solutions: {
      python: `def maze_with_portals(maze):
    n = len(maze)
    portals = []
    for i in range(n):
        for j in range(n):
            if maze[i][j] == 2:
                portals.append((i,j))
    visited = [[False]*n for _ in range(n)]
    def dfs(r, c):
        if r==n-1 and c==n-1: return True
        visited[r][c] = True
        # Check portal teleport
        if maze[r][c] == 2:
            for pr, pc in portals:
                if (pr,pc) != (r,c) and not visited[pr][pc]:
                    if dfs(pr, pc): return True
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n and not visited[nr][nc] and maze[nr][nc]!=0:
                if dfs(nr, nc): return True
        return False
    if maze[0][0] == 0: return False
    return dfs(0, 0)`,
      java: `    static int[][] portals_mwp;
    static boolean dfs(int[][] maze, boolean[][] visited, int r, int c, int n) {
        if (r==n-1 && c==n-1) return true;
        visited[r][c] = true;
        if (maze[r][c]==2) {
            for (int[] p : portals_mwp) {
                if ((p[0]!=r||p[1]!=c) && !visited[p[0]][p[1]])
                    if (dfs(maze,visited,p[0],p[1],n)) return true;
            }
        }
        int[] dr={1,-1,0,0}, dc={0,0,1,-1};
        for (int d=0; d<4; d++) {
            int nr=r+dr[d], nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]&&maze[nr][nc]!=0)
                if (dfs(maze,visited,nr,nc,n)) return true;
        }
        return false;
    }
    public static boolean mazeWithPortals(int[][] maze) {
        int n=maze.length;
        List<int[]> pl=new ArrayList<>();
        for (int i=0;i<n;i++) for (int j=0;j<n;j++) if (maze[i][j]==2) pl.add(new int[]{i,j});
        portals_mwp=pl.toArray(new int[0][]);
        if (maze[0][0]==0) return false;
        return dfs(maze,new boolean[n][n],0,0,n);
    }`,
      c: `int portal_r[2], portal_c[2], portal_count_mwp;
int n_mwp;
bool visited_mwp[12][12];
int dr_mwp[]={1,-1,0,0}, dc_mwp[]={0,0,1,-1};
bool dfs_mwp(int** maze, int r, int c) {
    if (r==n_mwp-1 && c==n_mwp-1) return true;
    visited_mwp[r][c]=true;
    if (maze[r][c]==2) {
        for (int p=0;p<portal_count_mwp;p++) {
            if ((portal_r[p]!=r||portal_c[p]!=c)&&!visited_mwp[portal_r[p]][portal_c[p]])
                if (dfs_mwp(maze,portal_r[p],portal_c[p])) return true;
        }
    }
    for (int d=0;d<4;d++) {
        int nr=r+dr_mwp[d],nc=c+dc_mwp[d];
        if (nr>=0&&nr<n_mwp&&nc>=0&&nc<n_mwp&&!visited_mwp[nr][nc]&&maze[nr][nc]!=0)
            if (dfs_mwp(maze,nr,nc)) return true;
    }
    return false;
}
bool mazeWithPortals(int** maze, int n) {
    n_mwp=n; portal_count_mwp=0;
    memset(visited_mwp,0,sizeof(visited_mwp));
    for (int i=0;i<n;i++) for (int j=0;j<n;j++)
        if (maze[i][j]==2) { portal_r[portal_count_mwp]=i; portal_c[portal_count_mwp++]=j; }
    if (maze[0][0]==0) return false;
    return dfs_mwp(maze,0,0);
}`,
      cpp: `bool mazeWithPortals(vector<vector<int>>& maze) {
    int n = maze.size();
    if (maze[0][0]==0) return false;
    vector<pair<int,int>> portals;
    for (int i=0;i<n;i++) for (int j=0;j<n;j++) if (maze[i][j]==2) portals.push_back({i,j});
    vector<vector<bool>> visited(n, vector<bool>(n, false));
    vector<int> dr={1,-1,0,0}, dc={0,0,1,-1};
    function<bool(int,int)> dfs = [&](<int r, int c>) -> bool {
        if (r==n-1 && c==n-1) return true;
        visited[r][c] = true;
        if (maze[r][c]==2) {
            for (auto [pr,pc] : portals) {
                if ((pr!=r||pc!=c) && !visited[pr][pc])
                    if (dfs(pr,pc)) return true;
            }
        }
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]&&maze[nr][nc]!=0)
                if (dfs(nr,nc)) return true;
        }
        return false;
    };
    return dfs(0,0);
}`
    }
  },

  // --- HARD SOLUTIONS ---
  {
    id: 'rm-h1',
    solutions: {
      python: `def max_gold_path(grid):
    n = len(grid)
    if grid[0][0] == 0: return -1
    visited = [[False]*n for _ in range(n)]
    best = [-1]
    def dfs(r, c, gold):
        if r==n-1 and c==n-1:
            best[0] = max(best[0], gold)
            return
        visited[r][c] = True
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n and not visited[nr][nc] and grid[nr][nc]!=0:
                dfs(nr, nc, gold+grid[nr][nc])
        visited[r][c] = False
    dfs(0, 0, grid[0][0])
    return best[0]`,
      java: `    static int best_mg;
    static void dfs(int[][] grid, boolean[][] visited, int r, int c, int n, int gold) {
        if (r==n-1 && c==n-1) { best_mg=Math.max(best_mg,gold); return; }
        visited[r][c]=true;
        int[] dr={1,-1,0,0}, dc={0,0,1,-1};
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]&&grid[nr][nc]!=0)
                dfs(grid,visited,nr,nc,n,gold+grid[nr][nc]);
        }
        visited[r][c]=false;
    }
    public static int maxGoldPath(int[][] grid) {
        int n=grid.length;
        if (grid[0][0]==0) return -1;
        best_mg=-1;
        dfs(grid,new boolean[n][n],0,0,n,grid[0][0]);
        return best_mg;
    }`,
      c: `int n_mg, best_mg;
bool visited_mg[12][12];
int dr_mg[]={1,-1,0,0}, dc_mg[]={0,0,1,-1};
void dfs_mg(int** grid, int r, int c, int gold) {
    if (r==n_mg-1 && c==n_mg-1) { if (gold>best_mg) best_mg=gold; return; }
    visited_mg[r][c]=true;
    for (int d=0;d<4;d++) {
        int nr=r+dr_mg[d],nc=c+dc_mg[d];
        if (nr>=0&&nr<n_mg&&nc>=0&&nc<n_mg&&!visited_mg[nr][nc]&&grid[nr][nc]!=0)
            dfs_mg(grid,nr,nc,gold+grid[nr][nc]);
    }
    visited_mg[r][c]=false;
}
int maxGoldPath(int** grid, int n) {
    n_mg=n; best_mg=-1;
    memset(visited_mg,0,sizeof(visited_mg));
    if (grid[0][0]==0) return -1;
    dfs_mg(grid,0,0,grid[0][0]);
    return best_mg;
}`,
      cpp: `int maxGoldPath(vector<vector<int>>& grid) {
    int n=grid.size(), best=-1;
    if (grid[0][0]==0) return -1;
    vector<vector<bool>> visited(n, vector<bool>(n,false));
    vector<int> dr={1,-1,0,0}, dc={0,0,1,-1};
    function<void(int,int,int)> dfs=[&](<int r, int c, int gold>) {
        if (r==n-1&&c==n-1) { best=max(best,gold); return; }
        visited[r][c]=true;
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]&&grid[nr][nc]!=0)
                dfs(nr,nc,gold+grid[nr][nc]);
        }
        visited[r][c]=false;
    };
    dfs(0,0,grid[0][0]);
    return best;
}`
    }
  },
  {
    id: 'rm-h2',
    solutions: {
      python: `def longest_path(maze):
    n = len(maze)
    if maze[0][0]==0: return -1
    visited = [[False]*n for _ in range(n)]
    best = [-1]
    def dfs(r, c, length):
        if r==n-1 and c==n-1:
            best[0] = max(best[0], length)
            return
        visited[r][c] = True
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n and not visited[nr][nc] and maze[nr][nc]==1:
                dfs(nr, nc, length+1)
        visited[r][c] = False
    dfs(0, 0, 1)
    return best[0]`,
      java: `    static int best_lp;
    static void dfs(int[][] maze, boolean[][] visited, int r, int c, int n, int len) {
        if (r==n-1&&c==n-1) { best_lp=Math.max(best_lp,len); return; }
        visited[r][c]=true;
        int[] dr={1,-1,0,0}, dc={0,0,1,-1};
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]&&maze[nr][nc]==1)
                dfs(maze,visited,nr,nc,n,len+1);
        }
        visited[r][c]=false;
    }
    public static int longestPath(int[][] maze) {
        int n=maze.length;
        if (maze[0][0]==0) return -1;
        best_lp=-1;
        dfs(maze,new boolean[n][n],0,0,n,1);
        return best_lp;
    }`,
      c: `int n_lp, best_lp;
bool visited_lp[10][10];
int dr_lp[]={1,-1,0,0}, dc_lp[]={0,0,1,-1};
void dfs_lp(int** maze, int r, int c, int len) {
    if (r==n_lp-1&&c==n_lp-1) { if(len>best_lp) best_lp=len; return; }
    visited_lp[r][c]=true;
    for (int d=0;d<4;d++) {
        int nr=r+dr_lp[d],nc=c+dc_lp[d];
        if (nr>=0&&nr<n_lp&&nc>=0&&nc<n_lp&&!visited_lp[nr][nc]&&maze[nr][nc]==1)
            dfs_lp(maze,nr,nc,len+1);
    }
    visited_lp[r][c]=false;
}
int longestPath(int** maze, int n) {
    n_lp=n; best_lp=-1;
    memset(visited_lp,0,sizeof(visited_lp));
    if (maze[0][0]==0) return -1;
    dfs_lp(maze,0,0,1);
    return best_lp;
}`,
      cpp: `int longestPath(vector<vector<int>>& maze) {
    int n=maze.size(), best=-1;
    if (maze[0][0]==0) return -1;
    vector<vector<bool>> visited(n,vector<bool>(n,false));
    vector<int> dr={1,-1,0,0}, dc={0,0,1,-1};
    function<void(int,int,int)> dfs=[&](<int r, int c, int len>) {
        if (r==n-1&&c==n-1) { best=max(best,len); return; }
        visited[r][c]=true;
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&!visited[nr][nc]&&maze[nr][nc]==1)
                dfs(nr,nc,len+1);
        }
        visited[r][c]=false;
    };
    dfs(0,0,1);
    return best;
}`
    }
  },
  {
    id: 'rm-h3',
    solutions: {
      python: `def min_cost_path(grid):
    import heapq
    n = len(grid)
    dist = [[float('inf')]*n for _ in range(n)]
    dist[0][0] = grid[0][0]
    heap = [(grid[0][0], 0, 0)]
    dirs = [(1,0),(-1,0),(0,1),(0,-1)]
    while heap:
        cost, r, c = heapq.heappop(heap)
        if r==n-1 and c==n-1: return cost
        if cost > dist[r][c]: continue
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n:
                new_cost = cost + grid[nr][nc]
                if new_cost < dist[nr][nc]:
                    dist[nr][nc] = new_cost
                    heapq.heappush(heap, (new_cost, nr, nc))
    return dist[n-1][n-1]`,
      java: `    public static int minCostPath(int[][] grid) {
        int n=grid.length;
        int[][] dist=new int[n][n];
        for (int[] row:dist) Arrays.fill(row,Integer.MAX_VALUE);
        dist[0][0]=grid[0][0];
        PriorityQueue<int[]> pq=new PriorityQueue<>((a,b)->a[0]-b[0]);
        pq.offer(new int[]{grid[0][0],0,0});
        int[] dr={1,-1,0,0}, dc={0,0,1,-1};
        while (!pq.isEmpty()) {
            int[] curr=pq.poll();
            int cost=curr[0],r=curr[1],c=curr[2];
            if (r==n-1&&c==n-1) return cost;
            if (cost>dist[r][c]) continue;
            for (int d=0;d<4;d++) {
                int nr=r+dr[d],nc=c+dc[d];
                if (nr>=0&&nr<n&&nc>=0&&nc<n) {
                    int nc2=cost+grid[nr][nc];
                    if (nc2<dist[nr][nc]) { dist[nr][nc]=nc2; pq.offer(new int[]{nc2,nr,nc}); }
                }
            }
        }
        return dist[n-1][n-1];
    }`,
      c: `typedef struct { int cost, r, c; } Node;
int cmpNode(const void* a, const void* b) { return ((Node*)a)->cost - ((Node*)b)->cost; }
int minCostPath(int** grid, int n) {
    int dist[105][105];
    for (int i=0;i<n;i++) for (int j=0;j<n;j++) dist[i][j]=1e9;
    dist[0][0]=grid[0][0];
    Node heap[20005]; int hSize=0;
    heap[hSize++]=(Node){grid[0][0],0,0};
    int dr[]={1,-1,0,0},dc[]={0,0,1,-1};
    while (hSize>0) {
        qsort(heap,hSize,sizeof(Node),cmpNode);
        Node curr=heap[0]; for(int i=0;i<hSize-1;i++) heap[i]=heap[i+1]; hSize--;
        int cost=curr.cost,r=curr.r,c=curr.c;
        if (r==n-1&&c==n-1) return cost;
        if (cost>dist[r][c]) continue;
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&cost+grid[nr][nc]<dist[nr][nc]) {
                dist[nr][nc]=cost+grid[nr][nc];
                heap[hSize++]=(Node){dist[nr][nc],nr,nc};
            }
        }
    }
    return dist[n-1][n-1];
}`,
      cpp: `int minCostPath(vector<vector<int>>& grid) {
    int n=grid.size();
    vector<vector<int>> dist(n,vector<int>(n,INT_MAX));
    dist[0][0]=grid[0][0];
    priority_queue<tuple<int,int,int>,vector<tuple<int,int,int>>,greater<>> pq;
    pq.push({grid[0][0],0,0});
    vector<int> dr={1,-1,0,0},dc={0,0,1,-1};
    while (!pq.empty()) {
        auto [cost,r,c]=pq.top(); pq.pop();
        if (r==n-1&&c==n-1) return cost;
        if (cost>dist[r][c]) continue;
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&cost+grid[nr][nc]<dist[nr][nc]) {
                dist[nr][nc]=cost+grid[nr][nc];
                pq.push({dist[nr][nc],nr,nc});
            }
        }
    }
    return dist[n-1][n-1];
}`
    }
  },
  {
    id: 'rm-h4',
    solutions: {
      python: `def multi_rat_maze(maze):
    from collections import deque
    n = len(maze)
    rats = []
    clean = []
    for i in range(n):
        for j in range(n):
            if maze[i][j] == 2:
                rats.append((i,j))
                clean.append((i,j))
    # BFS from destination back to all cells
    dist = [[-1]*n for _ in range(n)]
    queue = deque()
    dist[n-1][n-1] = 0
    queue.append((n-1, n-1))
    dirs = [(1,0),(-1,0),(0,1),(0,-1)]
    while queue:
        r, c = queue.popleft()
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n and dist[nr][nc]==-1 and maze[nr][nc]!=0:
                dist[nr][nc] = dist[r][c]+1
                queue.append((nr,nc))
    total = 0
    for r, c in rats:
        if dist[r][c] == -1: return -1
        total += dist[r][c]
    return total`,
      java: `    public static int multiRatMaze(int[][] maze) {
        int n=maze.length;
        List<int[]> rats=new ArrayList<>();
        int[][] dist=new int[n][n];
        for (int[] row:dist) Arrays.fill(row,-1);
        dist[n-1][n-1]=0;
        Queue<int[]> q=new LinkedList<>();
        q.offer(new int[]{n-1,n-1});
        int[] dr={1,-1,0,0},dc={0,0,1,-1};
        while (!q.isEmpty()) {
            int[] curr=q.poll();
            int r=curr[0],c=curr[1];
            for (int d=0;d<4;d++) {
                int nr=r+dr[d],nc=c+dc[d];
                if (nr>=0&&nr<n&&nc>=0&&nc<n&&dist[nr][nc]==-1&&maze[nr][nc]!=0) {
                    dist[nr][nc]=dist[r][c]+1;
                    q.offer(new int[]{nr,nc});
                }
            }
        }
        for (int i=0;i<n;i++) for (int j=0;j<n;j++) if (maze[i][j]==2) rats.add(new int[]{i,j});
        int total=0;
        for (int[] rat:rats) {
            if (dist[rat[0]][rat[1]]==-1) return -1;
            total+=dist[rat[0]][rat[1]];
        }
        return total;
    }`,
      c: `int multiRatMaze(int** maze, int n) {
    int dist[12][12]; memset(dist,-1,sizeof(dist));
    dist[n-1][n-1]=0;
    int queue[500][2]; int front=0,back=0;
    queue[back][0]=n-1; queue[back][1]=n-1; back++;
    int dr[]={1,-1,0,0},dc[]={0,0,1,-1};
    while (front<back) {
        int r=queue[front][0],c=queue[front][1]; front++;
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&dist[nr][nc]==-1&&maze[nr][nc]!=0) {
                dist[nr][nc]=dist[r][c]+1;
                queue[back][0]=nr; queue[back][1]=nc; back++;
            }
        }
    }
    int total=0;
    for (int i=0;i<n;i++) for (int j=0;j<n;j++) {
        if (maze[i][j]==2) {
            if (dist[i][j]==-1) return -1;
            total+=dist[i][j];
        }
    }
    return total;
}`,
      cpp: `int multiRatMaze(vector<vector<int>>& maze) {
    int n=maze.size();
    vector<vector<int>> dist(n,vector<int>(n,-1));
    dist[n-1][n-1]=0;
    queue<pair<int,int>> q;
    q.push({n-1,n-1});
    vector<int> dr={1,-1,0,0},dc={0,0,1,-1};
    while (!q.empty()) {
        auto [r,c]=q.front(); q.pop();
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr>=0&&nr<n&&nc>=0&&nc<n&&dist[nr][nc]==-1&&maze[nr][nc]!=0) {
                dist[nr][nc]=dist[r][c]+1;
                q.push({nr,nc});
            }
        }
    }
    int total=0;
    for (int i=0;i<n;i++) for (int j=0;j<n;j++) {
        if (maze[i][j]==2) {
            if (dist[i][j]==-1) return -1;
            total+=dist[i][j];
        }
    }
    return total;
}`
    }
  },
  {
    id: 'rm-h5',
    solutions: {
      python: `def maze_with_keys(grid):
    from collections import deque
    n = len(grid)
    # Find all keys and count them
    key_mask = 0
    all_keys = 0
    for i in range(n):
        for j in range(n):
            c = grid[i][j]
            if c.islower():
                all_keys |= (1 << (ord(c) - ord('a')))
    # BFS: state = (row, col, keys_bitmask)
    visited = [[[False]*(1<<6) for _ in range(n)] for _ in range(n)]
    queue = deque([(0, 0, 0, 0)])  # r, c, keys, steps
    visited[0][0][0] = True
    dirs = [(1,0),(-1,0),(0,1),(0,-1)]
    while queue:
        r, c, keys, steps = queue.popleft()
        if r==n-1 and c==n-1: return steps
        for dr, dc in dirs:
            nr, nc = r+dr, c+dc
            if 0<=nr<n and 0<=nc<n:
                cell = grid[nr][nc]
                if cell == '0': continue
                # Door check
                if cell.isupper():
                    if not (keys & (1 << (ord(cell.lower()) - ord('a')))): continue
                new_keys = keys
                if cell.islower():
                    new_keys |= (1 << (ord(cell) - ord('a')))
                if not visited[nr][nc][new_keys]:
                    visited[nr][nc][new_keys] = True
                    queue.append((nr, nc, new_keys, steps+1))
    return -1`,
      java: `    public static int mazeWithKeys(String[][] grid) {
        int n=grid.length;
        int allKeys=0;
        for (int i=0;i<n;i++) for (int j=0;j<n;j++) {
            String c=grid[i][j];
            if (c.length()==1&&Character.isLowerCase(c.charAt(0)))
                allKeys|=(1<<(c.charAt(0)-'a'));
        }
        boolean[][][] visited=new boolean[n][n][1<<6];
        Queue<int[]> q=new LinkedList<>();
        q.offer(new int[]{0,0,0,0});
        visited[0][0][0]=true;
        int[] dr={1,-1,0,0},dc={0,0,1,-1};
        while (!q.isEmpty()) {
            int[] curr=q.poll();
            int r=curr[0],c=curr[1],keys=curr[2],steps=curr[3];
            if (r==n-1&&c==n-1) return steps;
            for (int d=0;d<4;d++) {
                int nr=r+dr[d],nc=c+dc[d];
                if (nr<0||nr>=n||nc<0||nc>=n) continue;
                String cell=grid[nr][nc];
                if (cell.equals("0")) continue;
                if (cell.length()==1&&Character.isUpperCase(cell.charAt(0)))
                    if ((keys&(1<<(Character.toLowerCase(cell.charAt(0))-'a')))==0) continue;
                int newKeys=keys;
                if (cell.length()==1&&Character.isLowerCase(cell.charAt(0)))
                    newKeys|=(1<<(cell.charAt(0)-'a'));
                if (!visited[nr][nc][newKeys]) {
                    visited[nr][nc][newKeys]=true;
                    q.offer(new int[]{nr,nc,newKeys,steps+1});
                }
            }
        }
        return -1;
    }`,
      c: `int mazeWithKeys(char grid[][11][5], int n) {
    bool visited[11][11][64]; memset(visited,0,sizeof(visited));
    int queue[50000][4]; int front=0,back=0;
    queue[back][0]=0;queue[back][1]=0;queue[back][2]=0;queue[back][3]=0; back++;
    visited[0][0][0]=true;
    int dr[]={1,-1,0,0},dc[]={0,0,1,-1};
    while (front<back) {
        int r=queue[front][0],c=queue[front][1],keys=queue[front][2],steps=queue[front][3]; front++;
        if (r==n-1&&c==n-1) return steps;
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr<0||nr>=n||nc<0||nc>=n) continue;
            char cell=grid[nr][nc][0];
            if (cell=='0') continue;
            if (cell>='A'&&cell<='F') if (!(keys&(1<<(cell-'A')))) continue;
            int newKeys=keys;
            if (cell>='a'&&cell<='f') newKeys|=(1<<(cell-'a'));
            if (!visited[nr][nc][newKeys]) {
                visited[nr][nc][newKeys]=true;
                queue[back][0]=nr;queue[back][1]=nc;queue[back][2]=newKeys;queue[back][3]=steps+1; back++;
            }
        }
    }
    return -1;
}`,
      cpp: `int mazeWithKeys(vector<vector<string>>& grid) {
    int n=grid.size();
    vector<vector<vector<bool>>> visited(n,vector<vector<bool>>(n,vector<bool>(64,false)));
    queue<tuple<int,int,int,int>> q;
    q.push({0,0,0,0}); visited[0][0][0]=true;
    vector<int> dr={1,-1,0,0},dc={0,0,1,-1};
    while (!q.empty()) {
        auto [r,c,keys,steps]=q.front(); q.pop();
        if (r==n-1&&c==n-1) return steps;
        for (int d=0;d<4;d++) {
            int nr=r+dr[d],nc=c+dc[d];
            if (nr<0||nr>=n||nc<0||nc>=n) continue;
            string cell=grid[nr][nc];
            if (cell=="0") continue;
            char ch=cell[0];
            if (isupper(ch)&&!(keys&(1<<(tolower(ch)-'a')))) continue;
            int newKeys=keys;
            if (islower(ch)) newKeys|=(1<<(ch-'a'));
            if (!visited[nr][nc][newKeys]) {
                visited[nr][nc][newKeys]=true;
                q.push({nr,nc,newKeys,steps+1});
            }
        }
    }
    return -1;
}`
    }
  }
];