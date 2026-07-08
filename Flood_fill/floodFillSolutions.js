export const floodFillSolutions = [
  {
    id: 'ff-e1',
    title: 'Basic Flood Fill',
    solutions: {
      python: `def flood_fill(image, sr, sc, color):
    rows = len(image)
    cols = len(image[0])
    original = image[sr][sc]
    if original == color:
        return image
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if image[r][c] != original:
            return
        image[r][c] = color
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    dfs(sr, sc)
    return image
m, n = map(int, input().split())
image = [list(map(int, input().split())) for _ in range(m)]
sr, sc = map(int, input().split())
color = int(input())
result = flood_fill(image, sr, sc, color)
for row in result:
    print(*row)`,

      java: `import java.util.*;
public class Main {
    static int rows, cols, original, newColor;
    static void dfs(int[][] image, int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return;
        if (image[r][c] != original)
            return;
        image[r][c] = newColor;
        dfs(image, r + 1, c);
        dfs(image, r - 1, c);
        dfs(image, r, c + 1);
        dfs(image, r, c - 1);
    }
    public static int[][] floodFill(int[][] image, int sr, int sc, int color) {
        rows = image.length;
        cols = image[0].length;
        original = image[sr][sc];
        if (original == color)
            return image;
        newColor = color;
        dfs(image, sr, sc);
        return image;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] image = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                image[i][j] = sc.nextInt();
            }
        }
        int sr = sc.nextInt();
        int scol = sc.nextInt();
        int color = sc.nextInt();
        int[][] result = floodFill(image, sr, scol, color);
        for (int[] row : result) {
            for (int cell : row)
                System.out.print(cell + " ");
            System.out.println();
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
void dfs(int** image, int rows, int cols, int r, int c, int original, int color) {
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] != original)
        return;
    image[r][c] = color;
    dfs(image, rows, cols, r + 1, c, original, color);
    dfs(image, rows, cols, r - 1, c, original, color);
    dfs(image, rows, cols, r, c + 1, original, color);
    dfs(image, rows, cols, r, c - 1, original, color);
}
int** floodFill(int** image, int m, int n, int sr, int sc, int color) {
    int original = image[sr][sc];
    if (original == color)
        return image;
    dfs(image, m, n, sr, sc, original, color);
    return image;
}
int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int** image = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        image[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &image[i][j]);
    }
    int sr, sc, color;
    scanf("%d %d", &sr, &sc);
    scanf("%d", &color);
    image = floodFill(image, m, n, sr, sc, color);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", image[i][j]);
        printf("\\n");
    }
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
using namespace std;
void dfs(vector<vector<int>>& image, int r, int c, int original, int color) {
    int rows = image.size();
    int cols = image[0].size();
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] != original)
        return;
    image[r][c] = color;
    dfs(image, r + 1, c, original, color);
    dfs(image, r - 1, c, original, color);
    dfs(image, r, c + 1, original, color);
    dfs(image, r, c - 1, original, color);
}
vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int color) {
    int original = image[sr][sc];
    if (original == color)
        return image;
    dfs(image, sr, sc, original, color);
    return image;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> image(m, vector<int>(n));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> image[i][j];
    int sr, sc, color;
    cin >> sr >> sc;
    cin >> color;
    vector<vector<int>> result = floodFill(image, sr, sc, color);
    for (auto &row : result) {
        for (int cell : row)
            cout << cell << " ";
        cout << "\\n";
    }
    return 0;
}`
    }
  },  {
    id: 'ff-e2',
    title: 'Number of Cells Filled',
    solutions: {
      python: `def count_filled_cells(image, sr, sc, color):
    rows = len(image)
    cols = len(image[0])
    original = image[sr][sc]
    if original == color:
        return 0
    count = 0
    def dfs(r, c):
        nonlocal count
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if image[r][c] != original:
            return
        image[r][c] = color
        count += 1
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    dfs(sr, sc)
    return count
m, n = map(int, input().split())
image = [list(map(int, input().split())) for _ in range(m)]
sr, sc = map(int, input().split())
color = int(input())
print(count_filled_cells(image, sr, sc, color))`,

      java: `import java.util.*;
public class Main {
    static int rows, cols;
    static int original;
    static int newColor;
    static int count;
    static void dfs(int[][] image, int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return;
        if (image[r][c] != original)
            return;
        image[r][c] = newColor;
        count++;
        dfs(image, r + 1, c);
        dfs(image, r - 1, c);
        dfs(image, r, c + 1);
        dfs(image, r, c - 1);
    }
    public static int countFilledCells(int[][] image, int sr, int sc, int color) {
        rows = image.length;
        cols = image[0].length;
        original = image[sr][sc];
        if (original == color)
            return 0;
        newColor = color;
        count = 0;
        dfs(image, sr, sc);
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] image = new int[m][n];
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                image[i][j] = sc.nextInt();
            }
        }
        int sr = sc.nextInt();
        int scol = sc.nextInt();
        int color = sc.nextInt();
        System.out.println(countFilledCells(image, sr, scol, color));
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
int count = 0;
void dfs(int** image, int rows, int cols, int r, int c, int original, int color) {
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] != original)
        return;
    image[r][c] = color;
    count++;
    dfs(image, rows, cols, r + 1, c, original, color);
    dfs(image, rows, cols, r - 1, c, original, color);
    dfs(image, rows, cols, r, c + 1, original, color);
    dfs(image, rows, cols, r, c - 1, original, color);
}
int countFilledCells(int** image, int m, int n, int sr, int sc, int color) {
    int original = image[sr][sc];
    if (original == color)
        return 0;
    count = 0;
    dfs(image, m, n, sr, sc, original, color);
    return count;
}
int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int** image = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        image[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &image[i][j]);
    }
    int sr, sc, color;
    scanf("%d %d", &sr, &sc);
    scanf("%d", &color);
    printf("%d\\n", countFilledCells(image, m, n, sr, sc, color));
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
using namespace std;
int count = 0;
void dfs(vector<vector<int>>& image, int r, int c, int original, int color) {
    int rows = image.size();
    int cols = image[0].size();
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] != original)
        return;
    image[r][c] = color;
    count++;
    dfs(image, r + 1, c, original, color);
    dfs(image, r - 1, c, original, color);
    dfs(image, r, c + 1, original, color);
    dfs(image, r, c - 1, original, color);
}
int countFilledCells(vector<vector<int>>& image, int sr, int sc, int color) {
    int original = image[sr][sc];
    if (original == color)
        return 0;
    count = 0;
    dfs(image, sr, sc, original, color);
    return count;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> image(m, vector<int>(n));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> image[i][j];
    int sr, sc, color;
    cin >> sr >> sc;
    cin >> color;
    cout << countFilledCells(image, sr, sc, color) << "\\n";
    return 0;
}`
    }
  },  {
    id: 'ff-e3',
    title: 'Boundary Flood Fill',
    solutions: {
      python: `def boundary_flood_fill(image, sr, sc, color):
    rows = len(image)
    cols = len(image[0])
    original = image[sr][sc]
    if original == color:
        return sr == 0 or sr == rows - 1 or sc == 0 or sc == cols - 1
    touches_boundary = False
    def dfs(r, c):
        nonlocal touches_boundary
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if image[r][c] != original:
            return
        if r == 0 or r == rows - 1 or c == 0 or c == cols - 1:
            touches_boundary = True
        image[r][c] = color
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    dfs(sr, sc)
    return touches_boundary
m, n = map(int, input().split())
image = [list(map(int, input().split())) for _ in range(m)]
sr, sc = map(int, input().split())
color = int(input())
print(str(boundary_flood_fill(image, sr, sc, color)).lower())`,

      java: `import java.util.*;
public class Main {
    static int rows, cols;
    static int original, newColor;
    static boolean touchesBoundary;
    static void dfs(int[][] image, int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return;
        if (image[r][c] != original)
            return;
        if (r == 0 || r == rows - 1 || c == 0 || c == cols - 1)
            touchesBoundary = true;
        image[r][c] = newColor;
        dfs(image, r + 1, c);
        dfs(image, r - 1, c);
        dfs(image, r, c + 1);
        dfs(image, r, c - 1);
    }
    public static boolean boundaryFloodFill(int[][] image, int sr, int sc, int color) {
        rows = image.length;
        cols = image[0].length;
        original = image[sr][sc];
        if (original == color)
            return sr == 0 || sr == rows - 1 || sc == 0 || sc == cols - 1;
        newColor = color;
        touchesBoundary = false;
        dfs(image, sr, sc);
        return touchesBoundary;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] image = new int[m][n];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                image[i][j] = sc.nextInt();
        int sr = sc.nextInt();
        int scol = sc.nextInt();
        int color = sc.nextInt();
        System.out.println(boundaryFloodFill(image, sr, scol, color));
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
bool touchesBoundary = false;
void dfs(int** image, int rows, int cols, int r, int c, int original, int color) {
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] != original)
        return;
    if (r == 0 || r == rows - 1 || c == 0 || c == cols - 1)
        touchesBoundary = true;
    image[r][c] = color;
    dfs(image, rows, cols, r + 1, c, original, color);
    dfs(image, rows, cols, r - 1, c, original, color);
    dfs(image, rows, cols, r, c + 1, original, color);
    dfs(image, rows, cols, r, c - 1, original, color);
}
bool boundaryFloodFill(int** image, int m, int n, int sr, int sc, int color) {
    int original = image[sr][sc];
    if (original == color)
        return sr == 0 || sr == m - 1 || sc == 0 || sc == n - 1;
    touchesBoundary = false;
    dfs(image, m, n, sr, sc, original, color);
    return touchesBoundary;
}
int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int** image = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        image[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &image[i][j]);
    }
    int sr, sc, color;
    scanf("%d %d", &sr, &sc);
    scanf("%d", &color);
    printf("%s\\n", boundaryFloodFill(image, m, n, sr, sc, color) ? "true" : "false");
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
using namespace std;
bool touchesBoundary = false;
void dfs(vector<vector<int>>& image, int r, int c, int original, int color) {
    int rows = image.size();
    int cols = image[0].size();
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] != original)
        return;
    if (r == 0 || r == rows - 1 || c == 0 || c == cols - 1)
        touchesBoundary = true;
    image[r][c] = color;
    dfs(image, r + 1, c, original, color);
    dfs(image, r - 1, c, original, color);
    dfs(image, r, c + 1, original, color);
    dfs(image, r, c - 1, original, color);
}
bool boundaryFloodFill(vector<vector<int>>& image, int sr, int sc, int color) {
    int original = image[sr][sc];
    if (original == color)
        return sr == 0 || sr == image.size() - 1 || sc == 0 || sc == image[0].size() - 1;
    touchesBoundary = false;
    dfs(image, sr, sc, original, color);
    return touchesBoundary;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> image(m, vector<int>(n));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> image[i][j];
    int sr, sc, color;
    cin >> sr >> sc;
    cin >> color;
    cout << (boundaryFloodFill(image, sr, sc, color) ? "true" : "false") << "\\n";
    return 0;
}`
    }
  },  {
    id: 'ff-e4',
    title: 'Flood Fill with Obstacles',
    solutions: {
      python: `def flood_fill_with_obstacles(image, sr, sc, color):
    rows = len(image)
    cols = len(image[0])
    if image[sr][sc] == -1:
        return image
    original = image[sr][sc]
    if original == color:
        return image
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if image[r][c] == -1:
            return
        if image[r][c] != original:
            return
        image[r][c] = color
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    dfs(sr, sc)
    return image
m, n = map(int, input().split())
image = [list(map(int, input().split())) for _ in range(m)]
sr, sc = map(int, input().split())
color = int(input())
result = flood_fill_with_obstacles(image, sr, sc, color)
for row in result:
    print(*row)`,

      java: `import java.util.*;
public class Main {
    static int rows, cols;
    static int original, newColor;
    static void dfs(int[][] image, int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return;
        if (image[r][c] == -1)
            return;
        if (image[r][c] != original)
            return;
        image[r][c] = newColor;
        dfs(image, r + 1, c);
        dfs(image, r - 1, c);
        dfs(image, r, c + 1);
        dfs(image, r, c - 1);
    }
    public static int[][] floodFillWithObstacles(int[][] image, int sr, int sc, int color) {
        rows = image.length;
        cols = image[0].length;
        if (image[sr][sc] == -1)
            return image;
        original = image[sr][sc];
        if (original == color)
            return image;
        newColor = color;
        dfs(image, sr, sc);
        return image;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] image = new int[m][n];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                image[i][j] = sc.nextInt();
        int sr = sc.nextInt();
        int scol = sc.nextInt();
        int color = sc.nextInt();
        int[][] result = floodFillWithObstacles(image, sr, scol, color);
        for (int[] row : result) {
            for (int cell : row)
                System.out.print(cell + " ");
            System.out.println();
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
void dfs(int** image, int rows, int cols, int r, int c, int original, int color) {
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] == -1)
        return;
    if (image[r][c] != original)
        return;
    image[r][c] = color;
    dfs(image, rows, cols, r + 1, c, original, color);
    dfs(image, rows, cols, r - 1, c, original, color);
    dfs(image, rows, cols, r, c + 1, original, color);
    dfs(image, rows, cols, r, c - 1, original, color);
}
int** floodFillWithObstacles(int** image, int m, int n, int sr, int sc, int color) {
    if (image[sr][sc] == -1)
        return image;
    int original = image[sr][sc];
    if (original == color)
        return image;
    dfs(image, m, n, sr, sc, original, color);
    return image;
}
int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int** image = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        image[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &image[i][j]);
    }
    int sr, sc, color;
    scanf("%d %d", &sr, &sc);
    scanf("%d", &color);
    image = floodFillWithObstacles(image, m, n, sr, sc, color);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", image[i][j]);
        printf("\\n");
    }
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
using namespace std;
void dfs(vector<vector<int>>& image, int r, int c, int original, int color) {
    int rows = image.size();
    int cols = image[0].size();
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] == -1)
        return;
    if (image[r][c] != original)
        return;
    image[r][c] = color;
    dfs(image, r + 1, c, original, color);
    dfs(image, r - 1, c, original, color);
    dfs(image, r, c + 1, original, color);
    dfs(image, r, c - 1, original, color);
}
vector<vector<int>> floodFillWithObstacles(vector<vector<int>>& image, int sr, int sc, int color) {
    if (image[sr][sc] == -1)
        return image;
    int original = image[sr][sc];
    if (original == color)
        return image;
    dfs(image, sr, sc, original, color);
    return image;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> image(m, vector<int>(n));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> image[i][j];
    int sr, sc, color;
    cin >> sr >> sc;
    cin >> color;
    vector<vector<int>> result = floodFillWithObstacles(image, sr, sc, color);
    for (auto &row : result) {
        for (int cell : row)
            cout << cell << " ";
        cout << "\\n";
    }
    return 0;
}`
    }
  },  {
    id: 'ff-e5',
    title: 'Flood Fill using 8 Directions',
    solutions: {
      python: `def flood_fill_8_direction(image, sr, sc, color):
    rows = len(image)
    cols = len(image[0])
    original = image[sr][sc]
    if original == color:
        return image
    directions = [
        (-1, -1), (-1, 0), (-1, 1),
        (0, -1),           (0, 1),
        (1, -1),  (1, 0),  (1, 1)
    ]
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if image[r][c] != original:
            return
        image[r][c] = color
        for dr, dc in directions:
            dfs(r + dr, c + dc)
    dfs(sr, sc)
    return image
m, n = map(int, input().split())
image = [list(map(int, input().split())) for _ in range(m)]
sr, sc = map(int, input().split())
color = int(input())
result = flood_fill_8_direction(image, sr, sc, color)
for row in result:
    print(*row)`,

      java: `import java.util.*;
public class Main {
    static int rows, cols;
    static int original, newColor;
    static int[] dr = {-1,-1,-1,0,0,1,1,1};
    static int[] dc = {-1,0,1,-1,1,-1,0,1};
    static void dfs(int[][] image, int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return;
        if (image[r][c] != original)
            return;
        image[r][c] = newColor;
        for (int i = 0; i < 8; i++)
            dfs(image, r + dr[i], c + dc[i]);
    }
    public static int[][] floodFill8Direction(int[][] image, int sr, int sc, int color) {
        rows = image.length;
        cols = image[0].length;
        original = image[sr][sc];
        if (original == color)
            return image;
        newColor = color;
        dfs(image, sr, sc);
        return image;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] image = new int[m][n];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                image[i][j] = sc.nextInt();
        int sr = sc.nextInt();
        int scol = sc.nextInt();
        int color = sc.nextInt();
        int[][] result = floodFill8Direction(image, sr, scol, color);
        for (int[] row : result) {
            for (int cell : row)
                System.out.print(cell + " ");
            System.out.println();
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
int dr[8] = {-1,-1,-1,0,0,1,1,1};
int dc[8] = {-1,0,1,-1,1,-1,0,1};
void dfs(int** image, int rows, int cols, int r, int c, int original, int color) {
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] != original)
        return;
    image[r][c] = color;
    for (int i = 0; i < 8; i++)
        dfs(image, rows, cols, r + dr[i], c + dc[i], original, color);
}
int** floodFill8Direction(int** image, int m, int n, int sr, int sc, int color) {
    int original = image[sr][sc];
    if (original == color)
        return image;
    dfs(image, m, n, sr, sc, original, color);
    return image;
}
int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int** image = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        image[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &image[i][j]);
    }
    int sr, sc, color;
    scanf("%d %d", &sr, &sc);
    scanf("%d", &color);
    image = floodFill8Direction(image, m, n, sr, sc, color);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++)
            printf("%d ", image[i][j]);
        printf("\\n");
    }
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
using namespace std;
int dr[8] = {-1,-1,-1,0,0,1,1,1};
int dc[8] = {-1,0,1,-1,1,-1,0,1};
void dfs(vector<vector<int>>& image, int r, int c, int original, int color) {
    int rows = image.size();
    int cols = image[0].size();
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (image[r][c] != original)
        return;
    image[r][c] = color;
    for (int i = 0; i < 8; i++)
        dfs(image, r + dr[i], c + dc[i], original, color);
}
vector<vector<int>> floodFill8Direction(vector<vector<int>>& image, int sr, int sc, int color) {
    int original = image[sr][sc];
    if (original == color)
        return image;
    dfs(image, sr, sc, original, color);
    return image;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> image(m, vector<int>(n));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> image[i][j];
    int sr, sc, color;
    cin >> sr >> sc;
    cin >> color;
    vector<vector<int>> result = floodFill8Direction(image, sr, sc, color);
    for (auto &row : result) {
        for (int cell : row)
            cout << cell << " ";
        cout << "\\n";
    }
    return 0;
}`
    }
  }, {
    id: 'ff-m1',
    title: 'Number of Islands',
    solutions: {
      python: `def num_islands(grid):
    if not grid:
        return 0
    rows = len(grid)
    cols = len(grid[0])
    islands = 0
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if grid[r][c] == 0:
            return
        grid[r][c] = 0
        dfs(r + 1, c)
        dfs(r - 1, c)
        dfs(r, c + 1)
        dfs(r, c - 1)
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == 1:
                islands += 1
                dfs(i, j)
    return islands
m, n = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(m)]
print(num_islands(grid))`,

      java: `import java.util.*;
public class Main {
    static int rows, cols;
    static void dfs(int[][] grid, int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return;
        if (grid[r][c] == 0)
            return;
        grid[r][c] = 0;
        dfs(grid, r + 1, c);
        dfs(grid, r - 1, c);
        dfs(grid, r, c + 1);
        dfs(grid, r, c - 1);
    }
    public static int numIslands(int[][] grid) {
        rows = grid.length;
        cols = grid[0].length;
        int islands = 0;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    islands++;
                    dfs(grid, i, j);
                }
            }
        }
        return islands;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] grid = new int[m][n];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                grid[i][j] = sc.nextInt();
        System.out.println(numIslands(grid));
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
void dfs(int** grid, int rows, int cols, int r, int c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (grid[r][c] == 0)
        return;
    grid[r][c] = 0;
    dfs(grid, rows, cols, r + 1, c);
    dfs(grid, rows, cols, r - 1, c);
    dfs(grid, rows, cols, r, c + 1);
    dfs(grid, rows, cols, r, c - 1);
}
int numIslands(int** grid, int m, int n) {
    int islands = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                islands++;
                dfs(grid, m, n, i, j);
            }
        }
    }
    return islands;
}
int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int** grid = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &grid[i][j]);
    }
    printf("%d\\n", numIslands(grid, m, n));
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
using namespace std;
void dfs(vector<vector<int>>& grid, int r, int c) {
    int rows = grid.size();
    int cols = grid[0].size();
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (grid[r][c] == 0)
        return;
    grid[r][c] = 0;
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
}
int numIslands(vector<vector<int>>& grid) {

    int islands = 0;

    for (int i = 0; i < grid.size(); i++) {
        for (int j = 0; j < grid[0].size(); j++) {
            if (grid[i][j] == 1) {
                islands++;
                dfs(grid, i, j);
            }
        }
    }
    return islands;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> grid(m, vector<int>(n));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> grid[i][j];
    cout << numIslands(grid) << "\\n";
    return 0;
}`
    }
  },  {
    id: 'ff-m2',
    title: 'Max Area of Island',
    solutions: {
      python: `def max_area_of_island(grid):
    if not grid:
        return 0
    rows = len(grid)
    cols = len(grid[0])
    max_area = 0
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return 0
        if grid[r][c] == 0:
            return 0
        grid[r][c] = 0
        area = 1
        area += dfs(r + 1, c)
        area += dfs(r - 1, c)
        area += dfs(r, c + 1)
        area += dfs(r, c - 1)
        return area
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == 1:
                max_area = max(max_area, dfs(i, j))
    return max_area

m, n = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(m)]
print(max_area_of_island(grid))`,

      java: `import java.util.*;
public class Main {
    static int rows, cols;
    static int dfs(int[][] grid, int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return 0;
        if (grid[r][c] == 0)
            return 0;
        grid[r][c] = 0;
        int area = 1;
        area += dfs(grid, r + 1, c);
        area += dfs(grid, r - 1, c);
        area += dfs(grid, r, c + 1);
        area += dfs(grid, r, c - 1);
        return area;
    }
    public static int maxAreaOfIsland(int[][] grid) {
        rows = grid.length;
        cols = grid[0].length;
        int maxArea = 0;
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    maxArea = Math.max(maxArea, dfs(grid, i, j));
                }
            }
        }
        return maxArea;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int m = sc.nextInt();
        int n = sc.nextInt();
        int[][] grid = new int[m][n];
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                grid[i][j] = sc.nextInt();
        System.out.println(maxAreaOfIsland(grid));
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
int dfs(int** grid, int rows, int cols, int r, int c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return 0;
    if (grid[r][c] == 0)
        return 0;
    grid[r][c] = 0;
    int area = 1;
    area += dfs(grid, rows, cols, r + 1, c);
    area += dfs(grid, rows, cols, r - 1, c);
    area += dfs(grid, rows, cols, r, c + 1);
    area += dfs(grid, rows, cols, r, c - 1);
    return area;
}
int maxAreaOfIsland(int** grid, int m, int n) {
    int maxArea = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                int area = dfs(grid, m, n, i, j);
                if (area > maxArea)
                    maxArea = area;
            }
        }
    }
    return maxArea;
}
int main() {
    int m, n;
    scanf("%d %d", &m, &n);
    int** grid = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &grid[i][j]);
    }
    printf("%d\\n", maxAreaOfIsland(grid, m, n));
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>
using namespace std;
int dfs(vector<vector<int>>& grid, int r, int c) {
    int rows = grid.size();
    int cols = grid[0].size();
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return 0;
    if (grid[r][c] == 0)
        return 0;
    grid[r][c] = 0;
    int area = 1;
    area += dfs(grid, r + 1, c);
    area += dfs(grid, r - 1, c);
    area += dfs(grid, r, c + 1);
    area += dfs(grid, r, c - 1);
    return area;
}
int maxAreaOfIsland(vector<vector<int>>& grid) {
    int maxArea = 0;
    for (int i = 0; i < grid.size(); i++) {
        for (int j = 0; j < grid[0].size(); j++) {
            if (grid[i][j] == 1) {
                maxArea = max(maxArea, dfs(grid, i, j));
            }
        }
    }
    return maxArea;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> grid(m, vector<int>(n));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> grid[i][j];
    cout << maxAreaOfIsland(grid) << "\\n";
    return 0;
}`
    }
  },{
  id: 'ff-m3',
  title: 'Coloring a Border',
  solutions: {
    python: `def color_border(grid, row, col, color):
    rows = len(grid)
    cols = len(grid[0])
    original = grid[row][col]
    visited = [[False] * cols for _ in range(rows)]
    border = []
    def dfs(r, c):
        visited[r][c] = True
        is_border = (
            r == 0 or
            r == rows - 1 or
            c == 0 or
            c == cols - 1
        )
        directions = [
            (-1, 0),
            (1, 0),
            (0, -1),
            (0, 1)
        ]
        for dr, dc in directions:
            nr = r + dr
            nc = c + dc
            if nr < 0 or nr >= rows or nc < 0 or nc >= cols:
                continue
            if grid[nr][nc] != original:
                is_border = True
            elif not visited[nr][nc]:
                dfs(nr, nc)
        if is_border:
            border.append((r, c))
    dfs(row, col)
    for r, c in border:
        grid[r][c] = color
    return grid
m, n = map(int, input().split())
grid = [
    list(map(int, input().split()))
    for _ in range(m)
]
row, col = map(int, input().split())
color = int(input())
result = color_border(grid, row, col, color)
for r in result:
    print(*r)`,

        java: `import java.util.*;
public class Main {
    static int rows, cols;
    static int original;
    static boolean[][] visited;
    static List<int[]> border;
    static int[] dr = {-1, 1, 0, 0};
    static int[] dc = {0, 0, -1, 1};
    static void dfs(int[][] grid, int r, int c) {
        visited[r][c] = true;
        boolean isBorder = (r == 0 || r == rows - 1 || c == 0 || c == cols - 1);
        for (int i = 0; i < 4; i++) {
            int nr = r + dr[i];
            int nc = c + dc[i];
            if (nr < 0 || nr >= rows || nc < 0 || nc >= cols)
                continue;
            if (grid[nr][nc] != original) {
                isBorder = true;
            } else if (!visited[nr][nc]) {
                dfs(grid, nr, nc);
            }
        }
        if (isBorder)
            border.add(new int[]{r, c});
    }
    public static int[][] colorBorder(int[][] grid, int row, int col, int color) {
        rows = grid.length;
        cols = grid[0].length;
        original = grid[row][col];
        visited = new boolean[rows][cols];
        border = new ArrayList<>();
        dfs(grid, row, col);
        for (int[] cell : border) {
            grid[cell[0]][cell[1]] = color;
        }
        return grid;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] grid = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }
            int row = sc.nextInt();
            int col = sc.nextInt();
            int color = sc.nextInt();
            int[][] result = colorBorder(grid, row, col, color);
            for (int[] r : result) {
                for (int cell : r)
                    System.out.print(cell + " ");
                System.out.println();
            }
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
int rows, cols;
int original;
bool **visited;
typedef struct {
    int r;
    int c;
} Cell;
Cell border[2500];
int borderCount = 0;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
void dfs(int **grid, int r, int c) {
    visited[r][c] = true;
    bool isBorder = (r == 0 || r == rows - 1 || c == 0 || c == cols - 1);
    for (int i = 0; i < 4; i++) {
        int nr = r + dr[i];
        int nc = c + dc[i];
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols)
            continue;
        if (grid[nr][nc] != original) {
            isBorder = true;
        }
        else if (!visited[nr][nc]) {
            dfs(grid, nr, nc);
        }
    }
    if (isBorder) {
        border[borderCount].r = r;
        border[borderCount].c = c;
        borderCount++;
    }
}
int** colorBorder(int **grid, int m, int n, int row, int col, int color) {
    rows = m;
    cols = n;
    original = grid[row][col];
    visited = (bool**)malloc(rows * sizeof(bool*));
    for (int i = 0; i < rows; i++) {
        visited[i] = (bool*)calloc(cols, sizeof(bool));
    }
    borderCount = 0;
    dfs(grid, row, col);
    for (int i = 0; i < borderCount; i++) {
        grid[border[i].r][border[i].c] = color;
    }
    for (int i = 0; i < rows; i++) {
        free(visited[i]);
    }
    free(visited);
    return grid;
}
int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2)
        return 0;
    int **grid = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        grid[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            scanf("%d", &grid[i][j]);
        }
    }
    int row, col, color;
    scanf("%d %d", &row, &col);
    scanf("%d", &color);
    grid = colorBorder(grid, m, n, row, col, color);
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            printf("%d ", grid[i][j]);
        }
        printf("\\n");
    }
    for (int i = 0; i < m; i++) {
        free(grid[i]);
    }
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int rows, cols;
int original;
vector<vector<bool>> visited;
vector<pair<int, int>> border;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
void dfs(vector<vector<int>>& grid, int r, int c) {
    visited[r][c] = true;
    bool isBorder = (r == 0 || r == rows - 1 || c == 0 || c == cols - 1);
    for (int i = 0; i < 4; i++) {
        int nr = r + dr[i];
        int nc = c + dc[i];
        if (nr < 0 || nr >= rows || nc < 0 || nc >= cols)
            continue;
        if (grid[nr][nc] != original) {
            isBorder = true;
        }
        else if (!visited[nr][nc]) {
            dfs(grid, nr, nc);
        }
    }
    if (isBorder)
        border.push_back({r, c});
}
vector<vector<int>> colorBorder(vector<vector<int>>& grid,
                                int row,
                                int col,
                                int color) {
    rows = grid.size();
    cols = grid[0].size();
    original = grid[row][col];
    visited.assign(rows, vector<bool>(cols, false));
    border.clear();
    dfs(grid, row, col);
    for (auto &cell : border) {
        grid[cell.first][cell.second] = color;
    }
    return grid;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> grid(m, vector<int>(n));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> grid[i][j];
        }
    }
    int row, col, color;
    cin >> row >> col;
    cin >> color;
    vector<vector<int>> result = colorBorder(grid, row, col, color);
    for (auto &r : result) {
        for (int cell : r)
            cout << cell << " ";
        cout << "\\n";
    }
    return 0;
}`
  }
},{
  id: 'ff-m4',
  title: 'Closed Islands',
  solutions: {
    python: `def closed_island(grid):
    rows = len(grid)
    cols = len(grid[0])
    def dfs(r, c):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return False
        if grid[r][c] == 1:
            return True
        grid[r][c] = 1
        up = dfs(r - 1, c)
        down = dfs(r + 1, c)
        left = dfs(r, c - 1)
        right = dfs(r, c + 1)
        return up and down and left and right
    islands = 0
    for i in range(1, rows - 1):
        for j in range(1, cols - 1):
            if grid[i][j] == 0:
                if dfs(i, j):
                    islands += 1
    return islands
m, n = map(int, input().split())
grid = [
    list(map(int, input().split()))
    for _ in range(m)
]
print(closed_island(grid))`,
    java: `import java.util.*;
public class Main {
    static int rows, cols;
    static boolean dfs(int[][] grid, int r, int c) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return false;
        if (grid[r][c] == 1)
            return true;
        grid[r][c] = 1;
        boolean up = dfs(grid, r - 1, c);
        boolean down = dfs(grid, r + 1, c);
        boolean left = dfs(grid, r, c - 1);
        boolean right = dfs(grid, r, c + 1);
        return up && down && left && right;
    }
    public static int closedIsland(int[][] grid) {
        rows = grid.length;
        cols = grid[0].length;
        int islands = 0;
        for (int i = 1; i < rows - 1; i++) {
            for (int j = 1; j < cols - 1; j++) {
                if (grid[i][j] == 0) {
                    if (dfs(grid, i, j))
                        islands++;
                }
            }
        }
        return islands;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] grid = new int[m][n];
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }
            System.out.println(closedIsland(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
int rows, cols;
bool dfs(int **grid, int r, int c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return false;
    if (grid[r][c] == 1)
        return true;
    grid[r][c] = 1;
    bool up = dfs(grid, r - 1, c);
    bool down = dfs(grid, r + 1, c);
    bool left = dfs(grid, r, c - 1);
    bool right = dfs(grid, r, c + 1);
    return up && down && left && right;
}
int closedIsland(int **grid, int m, int n) {
    rows = m;
    cols = n;
    int islands = 0;
    for (int i = 1; i < rows - 1; i++) {
        for (int j = 1; j < cols - 1; j++) {
            if (grid[i][j] == 0) {
                if (dfs(grid, i, j))
                    islands++;
            }
        }
    }
    return islands;
}
int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2)
        return 0;
    int **grid = (int **)malloc(m * sizeof(int *));
    for (int i = 0; i < m; i++) {
        grid[i] = (int *)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            scanf("%d", &grid[i][j]);
        }
    }
    printf("%d\\n", closedIsland(grid, m, n));
    for (int i = 0; i < m; i++) {
        free(grid[i]);
    }
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int rows, cols;
bool dfs(vector<vector<int>>& grid, int r, int c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return false;
    if (grid[r][c] == 1)
        return true;
    grid[r][c] = 1;
    bool up = dfs(grid, r - 1, c);
    bool down = dfs(grid, r + 1, c);
    bool left = dfs(grid, r, c - 1);
    bool right = dfs(grid, r, c + 1);
    return up && down && left && right;
}
int closedIsland(vector<vector<int>>& grid) {
    rows = grid.size();
    cols = grid[0].size();
    int islands = 0;
    for (int i = 1; i < rows - 1; i++) {
        for (int j = 1; j < cols - 1; j++) {
            if (grid[i][j] == 0) {
                if (dfs(grid, i, j))
                    islands++;
            }
        }
    }
    return islands;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> grid(m, vector<int>(n));
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            cin >> grid[i][j];
        }
    }
    cout << closedIsland(grid) << "\\n";
    return 0;
}`
  }
},{
  id: 'ff-h1',
  title: 'Making a Large Island',
  solutions: {
    python: `def largest_island(grid):
    n = len(grid)
    island_id = 2
    area = {0: 0}
    directions = [
        (-1, 0),
        (1, 0),
        (0, -1),
        (0, 1)
    ]
    for i in range(n):
        for j in range(n):
            if grid[i][j] != 1:
                continue
            stack = [(i, j)]
            grid[i][j] = island_id
            size = 0
            while stack:
                r, c = stack.pop()
                size += 1
                for dr, dc in directions:
                    nr = r + dr
                    nc = c + dc
                    if (
                        0 <= nr < n and
                        0 <= nc < n and
                        grid[nr][nc] == 1
                    ):
                        grid[nr][nc] = island_id
                        stack.append((nr, nc))
            area[island_id] = size
            island_id += 1
    answer = 0
    for value in area.values():
        answer = max(answer, value)
    for i in range(n):
        for j in range(n):
            if grid[i][j] != 0:
                continue
            current = 1
            seen = set()
            for dr, dc in directions:
                nr = i + dr
                nc = j + dc
                if (
                    0 <= nr < n and
                    0 <= nc < n
                ):
                    idx = grid[nr][nc]
                    if idx > 1 and idx not in seen:
                        current += area[idx]
                        seen.add(idx)
            answer = max(answer, current)
    return answer
n = int(input())
grid = [
    list(map(int, input().split()))
    for _ in range(n)
]
print(largest_island(grid))`,
    java: `import java.util.*;
public class Main {
    static int[] dr = {-1, 1, 0, 0};
    static int[] dc = {0, 0, -1, 1};
    public static int largestIsland(int[][] grid) {
        int n = grid.length;
        HashMap<Integer, Integer> area = new HashMap<>();
        area.put(0, 0);
        int islandId = 2;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != 1)
                    continue;
                Stack<int[]> stack = new Stack<>();
                stack.push(new int[]{i, j});
                grid[i][j] = islandId;
                int size = 0;
                while (!stack.isEmpty()) {
                    int[] cell = stack.pop();
                    int r = cell[0];
                    int c = cell[1];
                    size++;
                    for (int k = 0; k < 4; k++) {
                        int nr = r + dr[k];
                        int nc = c + dc[k];
                        if (nr >= 0 && nr < n &&
                            nc >= 0 && nc < n &&
                            grid[nr][nc] == 1) {
                            grid[nr][nc] = islandId;
                            stack.push(new int[]{nr, nc});
                        }
                    }
                }
                area.put(islandId, size);
                islandId++;
            }
        }
        int answer = 0;
        for (int value : area.values())
            answer = Math.max(answer, value);
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != 0)
                    continue;
                int current = 1;
                HashSet<Integer> seen = new HashSet<>();
                for (int k = 0; k < 4; k++) {
                    int nr = i + dr[k];
                    int nc = j + dc[k];
                    if (nr >= 0 && nr < n &&
                        nc >= 0 && nc < n) {
                        int id = grid[nr][nc];
                        if (id > 1 && !seen.contains(id)) {
                            current += area.get(id);
                            seen.add(id);
                        }
                    }
                }
                answer = Math.max(answer, current);
            }
        }
        return answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }
            System.out.println(largestIsland(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
typedef struct {
    int r;
    int c;
} Node;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
int largestIsland(int **grid, int n) {
    int maxCells = n * n;
    int *area = (int *)calloc(maxCells + 2, sizeof(int));
    int islandId = 2;
    Node *stack = (Node *)malloc(maxCells * sizeof(Node));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] != 1)
                continue;
            int top = -1;
            stack[++top] = (Node){i, j};
            grid[i][j] = islandId;
            int size = 0;
            while (top >= 0) {
                Node cur = stack[top--];
                size++;
                for (int k = 0; k < 4; k++) {
                    int nr = cur.r + dr[k];
                    int nc = cur.c + dc[k];
                    if (nr >= 0 && nr < n &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] == 1) {
                        grid[nr][nc] = islandId;
                        stack[++top] = (Node){nr, nc};
                    }
                }
            }
            area[islandId] = size;
            islandId++;
        }
    }
    int answer = 0;
    for (int i = 2; i < islandId; i++) {
        if (area[i] > answer)
            answer = area[i];
    }
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] != 0)
                continue;
            int current = 1;
            int used[4];
            int usedCount = 0;
            for (int k = 0; k < 4; k++) {
                int nr = i + dr[k];
                int nc = j + dc[k];
                if (nr < 0 || nr >= n ||
                    nc < 0 || nc >= n)
                    continue;
                int id = grid[nr][nc];
                if (id <= 1)
                    continue;
                bool exists = false;
                for (int x = 0; x < usedCount; x++) {
                    if (used[x] == id) {
                        exists = true;
                        break;
                    }
                }
                if (!exists) {
                    used[usedCount++] = id;
                    current += area[id];
                }
            }
            if (current > answer)
                answer = current;
        }
    }
    free(area);
    free(stack);
    return answer;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int **grid = (int **)malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        grid[i] = (int *)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &grid[i][j]);
    }
    printf("%d\\n", largestIsland(grid, n));
    for (int i = 0; i < n; i++)
        free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <stack>
using namespace std;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
int largestIsland(vector<vector<int>>& grid) {
    int n = grid.size();
    unordered_map<int, int> area;
    area[0] = 0;
    int islandId = 2;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] != 1)
                continue;
            stack<pair<int, int>> st;
            st.push({i, j});
            grid[i][j] = islandId;
            int size = 0;
            while (!st.empty()) {
                auto cur = st.top();
                st.pop();
                int r = cur.first;
                int c = cur.second;
                size++;
                for (int k = 0; k < 4; k++) {
                    int nr = r + dr[k];
                    int nc = c + dc[k];
                    if (nr >= 0 && nr < n &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] == 1) {
                        grid[nr][nc] = islandId;
                        st.push({nr, nc});
                    }
                }
            }
            area[islandId] = size;
            islandId++;
        }
    }
    int answer = 0;
    for (auto &entry : area)
        answer = max(answer, entry.second);
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] != 0)
                continue;
            int current = 1;
            unordered_set<int> seen;
            for (int k = 0; k < 4; k++) {
                int nr = i + dr[k];
                int nc = j + dc[k];
                if (nr < 0 || nr >= n ||
                    nc < 0 || nc >= n)
                    continue;
                int id = grid[nr][nc];
                if (id > 1 && !seen.count(id)) {
                    current += area[id];
                    seen.insert(id);
                }
            }
            answer = max(answer, current);
        }
    }
    return answer;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<vector<int>> grid(n, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> grid[i][j];
        }
    }
    cout << largestIsland(grid) << "\\n";
    return 0;
}`
  }
},{
  id: 'ff-h2',
  title: 'Shortest Bridge',
  solutions: {
    python: `from collections import deque
def shortest_bridge(grid):
    n = len(grid)
    directions = [
        (-1,0),
        (1,0),
        (0,-1),
        (0,1)
    ]
    queue = deque()
    found = False
    for i in range(n):
        if found:
            break
        for j in range(n):
            if grid[i][j] != 1:
                continue
            stack = [(i,j)]
            grid[i][j] = 2
            while stack:
                r,c = stack.pop()
                queue.append((r,c))
                for dr,dc in directions:
                    nr = r + dr
                    nc = c + dc
                    if (
                        0 <= nr < n and
                        0 <= nc < n and
                        grid[nr][nc] == 1
                    ):
                        grid[nr][nc] = 2
                        stack.append((nr,nc))
            found = True
            break
    distance = 0
    while queue:
        for _ in range(len(queue)):
            r,c = queue.popleft()
            for dr,dc in directions:
                nr = r + dr
                nc = c + dc
                if not (
                    0 <= nr < n and
                    0 <= nc < n
                ):
                    continue
                if grid[nr][nc] == 1:
                    return distance
                if grid[nr][nc] == 0:
                    grid[nr][nc] = 2
                    queue.append((nr,nc))
        distance += 1
    return -1
n = int(input())
grid = [
    list(map(int,input().split()))
    for _ in range(n)
]
print(shortest_bridge(grid))`,
    java: `import java.util.*;
public class Main {
    static int[] dr = {-1, 1, 0, 0};
    static int[] dc = {0, 0, -1, 1};
    public static int shortestBridge(int[][] grid) {
        int n = grid.length;
        Queue<int[]> queue = new LinkedList<>();
        boolean found = false;
        for (int i = 0; i < n && !found; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] != 1)
                    continue;
                Stack<int[]> stack = new Stack<>();
                stack.push(new int[]{i, j});
                grid[i][j] = 2;
                while (!stack.isEmpty()) {
                    int[] cell = stack.pop();
                    int r = cell[0];
                    int c = cell[1];
                    queue.offer(new int[]{r, c});
                    for (int k = 0; k < 4; k++) {
                        int nr = r + dr[k];
                        int nc = c + dc[k];
                        if (nr >= 0 && nr < n &&
                            nc >= 0 && nc < n &&
                            grid[nr][nc] == 1) {
                            grid[nr][nc] = 2;
                            stack.push(new int[]{nr, nc});
                        }
                    }
                }
                found = true;
                break;
            }
        }
        int distance = 0;
        while (!queue.isEmpty()) {
            int size = queue.size();
            while (size-- > 0) {
                int[] cell = queue.poll();
                int r = cell[0];
                int c = cell[1];
                for (int k = 0; k < 4; k++) {
                    int nr = r + dr[k];
                    int nc = c + dc[k];
                    if (nr < 0 || nr >= n ||
                        nc < 0 || nc >= n)
                        continue;
                    if (grid[nr][nc] == 1)
                        return distance;
                    if (grid[nr][nc] == 0) {
                        grid[nr][nc] = 2;
                        queue.offer(new int[]{nr, nc});
                    }
                }
            }
            distance++;
        }
        return -1;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] grid = new int[n][n];
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    grid[i][j] = sc.nextInt();
                }
            }
            System.out.println(shortestBridge(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct {
    int r;
    int c;
} Node;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
int shortestBridge(int **grid, int n) {
    int maxCells = n * n;
    Node *stack = (Node *)malloc(maxCells * sizeof(Node));
    Node *queue = (Node *)malloc(maxCells * sizeof(Node));
    int front = 0;
    int rear = 0;
    int found = 0;
    for (int i = 0; i < n && !found; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] != 1)
                continue;
            int top = -1;
            stack[++top] = (Node){i, j};
            grid[i][j] = 2;
            while (top >= 0) {
                Node cur = stack[top--];
                queue[rear++] = cur;
                for (int k = 0; k < 4; k++) {
                    int nr = cur.r + dr[k];
                    int nc = cur.c + dc[k];
                    if (nr >= 0 && nr < n &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] == 1) {
                        grid[nr][nc] = 2;
                        stack[++top] = (Node){nr, nc};
                    }
                }
            }
            found = 1;
            break;
        }
    }
    int distance = 0;
    while (front < rear) {
        int levelSize = rear - front;
        while (levelSize--) {
            Node cur = queue[front++];
            for (int k = 0; k < 4; k++) {
                int nr = cur.r + dr[k];
                int nc = cur.c + dc[k];
                if (nr < 0 || nr >= n ||
                    nc < 0 || nc >= n)
                    continue;
                if (grid[nr][nc] == 1) {
                    free(stack);
                    free(queue);
                    return distance;
                }
                if (grid[nr][nc] == 0) {
                    grid[nr][nc] = 2;
                    queue[rear++] = (Node){nr, nc};
                }
            }
        }
        distance++;
    }
    free(stack);
    free(queue);
    return -1;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int **grid = (int **)malloc(n * sizeof(int *));
    for (int i = 0; i < n; i++) {
        grid[i] = (int *)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) {
            scanf("%d", &grid[i][j]);
        }
    }
    printf("%d\\n", shortestBridge(grid, n));
    for (int i = 0; i < n; i++)
        free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <stack>
#include <queue>
using namespace std;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
int shortestBridge(vector<vector<int>>& grid) {
    int n = grid.size();
    queue<pair<int, int>> q;
    bool found = false;
    for (int i = 0; i < n && !found; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] != 1)
                continue;
            stack<pair<int, int>> st;
            st.push({i, j});
            grid[i][j] = 2;
            while (!st.empty()) {
                auto cur = st.top();
                st.pop();
                q.push(cur);
                int r = cur.first;
                int c = cur.second;
                for (int k = 0; k < 4; k++) {
                    int nr = r + dr[k];
                    int nc = c + dc[k];
                    if (nr >= 0 && nr < n &&
                        nc >= 0 && nc < n &&
                        grid[nr][nc] == 1) {
                        grid[nr][nc] = 2;
                        st.push({nr, nc});
                    }
                }
            }
            found = true;
            break;
        }
    }
    int distance = 0;
    while (!q.empty()) {
        int levelSize = q.size();
        while (levelSize--) {
            auto cur = q.front();
            q.pop();
            int r = cur.first;
            int c = cur.second;
            for (int k = 0; k < 4; k++) {
                int nr = r + dr[k];
                int nc = c + dc[k];
                if (nr < 0 || nr >= n ||
                    nc < 0 || nc >= n)
                    continue;
                if (grid[nr][nc] == 1)
                    return distance;
                if (grid[nr][nc] == 0) {
                    grid[nr][nc] = 2;
                    q.push({nr, nc});
                }
            }
        }
        distance++;
    }
    return -1;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    cin >> n;
    vector<vector<int>> grid(n, vector<int>(n));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            cin >> grid[i][j];
        }
    }
    cout << shortestBridge(grid) << "\\n";
    return 0;
}`
  }
},{
  id: 'ff-h3',
  title: 'Number of Distinct Islands',
  solutions: {
    python: `def num_distinct_islands(grid):
    rows = len(grid)
    cols = len(grid[0])
    shapes = set()
    def dfs(r, c, br, bc, shape):
        if r < 0 or r >= rows or c < 0 or c >= cols:
            return
        if grid[r][c] == 0:
            return
        grid[r][c] = 0
        shape.append((r - br, c - bc))
        dfs(r + 1, c, br, bc, shape)
        dfs(r - 1, c, br, bc, shape)
        dfs(r, c + 1, br, bc, shape)
        dfs(r, c - 1, br, bc, shape)
    for i in range(rows):
        for j in range(cols):
            if grid[i][j] == 1:
                shape = []
                dfs(i, j, i, j, shape)
                shapes.add(tuple(shape))
    return len(shapes)
m, n = map(int, input().split())
grid = [list(map(int, input().split())) for _ in range(m)]
print(num_distinct_islands(grid))`,
    java: `import java.util.*;
public class Main {
    static int rows, cols;
    static void dfs(int[][] grid, int r, int c, int br, int bc, List<String> shape) {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            return;
        if (grid[r][c] == 0)
            return;
        grid[r][c] = 0;
        shape.add((r - br) + "," + (c - bc));

        dfs(grid, r + 1, c, br, bc, shape);
        dfs(grid, r - 1, c, br, bc, shape);
        dfs(grid, r, c + 1, br, bc, shape);
        dfs(grid, r, c - 1, br, bc, shape);
    }
    public static int numDistinctIslands(int[][] grid) {
        rows = grid.length;
        cols = grid[0].length;
        HashSet<List<String>> shapes = new HashSet<>();
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    List<String> shape = new ArrayList<>();
                    dfs(grid, i, j, i, j, shape);
                    shapes.add(shape);
                }
            }
        }
        return shapes.size();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] grid = new int[m][n];
            for (int i = 0; i < m; i++)
                for (int j = 0; j < n; j++)
                    grid[i][j] = sc.nextInt();
            System.out.println(numDistinctIslands(grid));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define MAX_CELLS 2500
#define MAX_SHAPES 2500
#define MAX_STR 20000
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
void dfs(int **grid, int m, int n, int r, int c, int br, int bc, char *shape) {
    if (r < 0 || r >= m || c < 0 || c >= n)
        return;
    if (grid[r][c] == 0)
        return;
    grid[r][c] = 0;
    char temp[20];
    sprintf(temp, "%d,%d;", r - br, c - bc);
    strcat(shape, temp);
    for (int k = 0; k < 4; k++)
        dfs(grid, m, n, r + dr[k], c + dc[k], br, bc, shape);
}
int numDistinctIslands(int **grid, int m, int n) {
    char shapes[MAX_SHAPES][MAX_STR];
    int count = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                char shape[MAX_STR] = "";
                dfs(grid, m, n, i, j, i, j, shape);
                int exists = 0;
                for (int k = 0; k < count; k++) {
                    if (strcmp(shapes[k], shape) == 0) {
                        exists = 1;
                        break;
                    }
                }
                if (!exists) {
                    strcpy(shapes[count], shape);
                    count++;
                }
            }
        }
    }
    return count;
}
int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2)
        return 0;
    int **grid = (int **)malloc(m * sizeof(int *));
    for (int i = 0; i < m; i++) {
        grid[i] = (int *)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &grid[i][j]);
    }
    printf("%d\n", numDistinctIslands(grid, m, n));
    for (int i = 0; i < m; i++)
        free(grid[i]);
    free(grid);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <set>
using namespace std;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
void dfs(vector<vector<int>>& grid, int r, int c, int br, int bc, vector<pair<int, int>>& shape) {
    int rows = grid.size();
    int cols = grid[0].size();
    if (r < 0 || r >= rows || c < 0 || c >= cols)
        return;
    if (grid[r][c] == 0)
        return;
    grid[r][c] = 0;
    shape.push_back({r - br, c - bc});
    dfs(grid, r + 1, c, br, bc, shape);
    dfs(grid, r - 1, c, br, bc, shape);
    dfs(grid, r, c + 1, br, bc, shape);
    dfs(grid, r, c - 1, br, bc, shape);
}
int numDistinctIslands(vector<vector<int>>& grid) {
    set<vector<pair<int, int>>> shapes;
    int rows = grid.size();
    int cols = grid[0].size();
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                vector<pair<int, int>> shape;
                dfs(grid, i, j, i, j, shape);
                shapes.insert(shape);
            }
        }
    }
    return shapes.size();
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    cin >> m >> n;
    vector<vector<int>> grid(m, vector<int>(n));
    for (int i = 0; i < m; i++)
        for (int j = 0; j < n; j++)
            cin >> grid[i][j];
    cout << numDistinctIslands(grid) << "\n";
    return 0;
}`
  }
},{
  id: 'ff-h4',
  title: 'Pacific Atlantic Water Flow',
  solutions: {
    python: `from collections import deque
def pacific_atlantic(heights):
    if not heights:
        return []
    m = len(heights)
    n = len(heights[0])
    pacific = [[False] * n for _ in range(m)]
    atlantic = [[False] * n for _ in range(m)]
    directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
    def bfs(queue, visited):
        while queue:
            r, c = queue.popleft()
            for dr, dc in directions:
                nr = r + dr
                nc = c + dc
                if nr < 0 or nr >= m or nc < 0 or nc >= n:
                    continue
                if visited[nr][nc]:
                    continue
                if heights[nr][nc] < heights[r][c]:
                    continue
                visited[nr][nc] = True
                queue.append((nr, nc))
    pacific_queue = deque()
    atlantic_queue = deque()
    for i in range(m):
        pacific[i][0] = True
        pacific_queue.append((i, 0))
        atlantic[i][n - 1] = True
        atlantic_queue.append((i, n - 1))
    for j in range(n):
        pacific[0][j] = True
        pacific_queue.append((0, j))
        atlantic[m - 1][j] = True
        atlantic_queue.append((m - 1, j))
    bfs(pacific_queue, pacific)
    bfs(atlantic_queue, atlantic)
    result = []
    for i in range(m):
        for j in range(n):
            if pacific[i][j] and atlantic[i][j]:
                result.append([i, j])
    return result
m, n = map(int, input().split())
heights = [list(map(int, input().split())) for _ in range(m)]
result = pacific_atlantic(heights)
for cell in result:
    print(cell[0], cell[1])`,
        java: `import java.util.*;
public class Solution {
    static int[] dr = {-1, 1, 0, 0};
    static int[] dc = {0, 0, -1, 1};
    static void bfs(Queue<int[]> queue, boolean[][] visited, int[][] heights) {
        int m = heights.length;
        int n = heights[0].length;
        while (!queue.isEmpty()) {
            int[] cell = queue.poll();
            int r = cell[0];
            int c = cell[1];
            for (int k = 0; k < 4; k++) {
                int nr = r + dr[k];
                int nc = c + dc[k];
                if (nr < 0 || nr >= m || nc < 0 || nc >= n)
                    continue;
                if (visited[nr][nc])
                    continue;
                if (heights[nr][nc] < heights[r][c])
                    continue;
                visited[nr][nc] = true;
                queue.offer(new int[]{nr, nc});
            }
        }
    }
    public static List<List<Integer>> pacificAtlantic(int[][] heights) {
        int m = heights.length;
        int n = heights[0].length;
        boolean[][] pacific = new boolean[m][n];
        boolean[][] atlantic = new boolean[m][n];
        Queue<int[]> pacificQueue = new LinkedList<>();
        Queue<int[]> atlanticQueue = new LinkedList<>();
        for (int i = 0; i < m; i++) {
            pacific[i][0] = true;
            pacificQueue.offer(new int[]{i, 0});

            atlantic[i][n - 1] = true;
            atlanticQueue.offer(new int[]{i, n - 1});
        }
        for (int j = 0; j < n; j++) {
            pacific[0][j] = true;
            pacificQueue.offer(new int[]{0, j});

            atlantic[m - 1][j] = true;
            atlanticQueue.offer(new int[]{m - 1, j});
        }
        bfs(pacificQueue, pacific, heights);
        bfs(atlanticQueue, atlantic, heights);
        List<List<Integer>> result = new ArrayList<>();
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.add(Arrays.asList(i, j));
                }
            }
        }
        return result;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] heights = new int[m][n];
            for (int i = 0; i < m; i++)
                for (int j = 0; j < n; j++)
                    heights[i][j] = sc.nextInt();
            List<List<Integer>> result = pacificAtlantic(heights);
            for (List<Integer> cell : result)
                System.out.println(cell.get(0) + " " + cell.get(1));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
typedef struct {
    int r;
    int c;
} Node;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
int** pacificAtlantic(int** heights, int m, int n, int* returnSize) {
    bool** pacific = (bool**)malloc(m * sizeof(bool*));
    bool** atlantic = (bool**)malloc(m * sizeof(bool*));
    for (int i = 0; i < m; i++) {
        pacific[i] = (bool*)calloc(n, sizeof(bool));
        atlantic[i] = (bool*)calloc(n, sizeof(bool));
    }
    Node* pacificQueue = (Node*)malloc(m * n * sizeof(Node));
    Node* atlanticQueue = (Node*)malloc(m * n * sizeof(Node));
    int pf = 0, pr = 0;
    int af = 0, ar = 0;
    for (int i = 0; i < m; i++) {
        pacific[i][0] = true;
        pacificQueue[pr++] = (Node){i, 0};
        atlantic[i][n - 1] = true;
        atlanticQueue[ar++] = (Node){i, n - 1};
    }
    for (int j = 0; j < n; j++) {
        if (!pacific[0][j]) {
            pacific[0][j] = true;
            pacificQueue[pr++] = (Node){0, j};
        }
        if (!atlantic[m - 1][j]) {
            atlantic[m - 1][j] = true;
            atlanticQueue[ar++] = (Node){m - 1, j};
        }
    }
    while (pf < pr) {
        Node cur = pacificQueue[pf++];
        for (int k = 0; k < 4; k++) {
            int nr = cur.r + dr[k];
            int nc = cur.c + dc[k];
            if (nr < 0 || nr >= m || nc < 0 || nc >= n)
                continue;
            if (pacific[nr][nc])
                continue;
            if (heights[nr][nc] < heights[cur.r][cur.c])
                continue;
            pacific[nr][nc] = true;
            pacificQueue[pr++] = (Node){nr, nc};
        }
    }
    while (af < ar) {
        Node cur = atlanticQueue[af++];
        for (int k = 0; k < 4; k++) {
            int nr = cur.r + dr[k];
            int nc = cur.c + dc[k];
            if (nr < 0 || nr >= m || nc < 0 || nc >= n)
                continue;
            if (atlantic[nr][nc])
                continue;
            if (heights[nr][nc] < heights[cur.r][cur.c])
                continue;
            atlantic[nr][nc] = true;
            atlanticQueue[ar++] = (Node){nr, nc};
        }
    }
    int** result = (int**)malloc(m * n * sizeof(int*));
    *returnSize = 0;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j]) {
                result[*returnSize] = (int*)malloc(2 * sizeof(int));
                result[*returnSize][0] = i;
                result[*returnSize][1] = j;
                (*returnSize)++;
            }
        }
    }
    for (int i = 0; i < m; i++) {
        free(pacific[i]);
        free(atlantic[i]);
    }
    free(pacific);
    free(atlantic);
    free(pacificQueue);
    free(atlanticQueue);
    return result;
}
int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2)
        return 0;
    int** heights = (int**)malloc(m * sizeof(int*));
    for (int i = 0; i < m; i++) {
        heights[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &heights[i][j]);
    }
    int returnSize;
    int** result = pacificAtlantic(heights, m, n, &returnSize);
    for (int i = 0; i < returnSize; i++) {
        printf("%d %d\n", result[i][0], result[i][1]);
        free(result[i]);
    }
    free(result);
    for (int i = 0; i < m; i++)
        free(heights[i]);
    free(heights);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
void bfs(queue<pair<int, int>>& q, vector<vector<bool>>& visited, vector<vector<int>>& heights) {
    int m = heights.size();
    int n = heights[0].size();
    while (!q.empty()) {
        auto cur = q.front();
        q.pop();
        int r = cur.first;
        int c = cur.second;
        for (int k = 0; k < 4; k++) {
            int nr = r + dr[k];
            int nc = c + dc[k];
            if (nr < 0 || nr >= m || nc < 0 || nc >= n)
                continue;
            if (visited[nr][nc])
                continue;
            if (heights[nr][nc] < heights[r][c])
                continue;
            visited[nr][nc] = true;
            q.push({nr, nc});
        }
    }
}
vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
    int m = heights.size();
    int n = heights[0].size();
    vector<vector<bool>> pacific(m, vector<bool>(n, false));
    vector<vector<bool>> atlantic(m, vector<bool>(n, false));
    queue<pair<int, int>> pacificQueue;
    queue<pair<int, int>> atlanticQueue;
    for (int i = 0; i < m; i++) {
        pacific[i][0] = true;
        pacificQueue.push({i, 0});
        atlantic[i][n - 1] = true;
        atlanticQueue.push({i, n - 1});
    }
    for (int j = 0; j < n; j++) {
        if (!pacific[0][j]) {
            pacific[0][j] = true;
            pacificQueue.push({0, j});
        }
        if (!atlantic[m - 1][j]) {
            atlantic[m - 1][j] = true;
            atlanticQueue.push({m - 1, j});
        }
    }
    bfs(pacificQueue, pacific, heights);
    bfs(atlanticQueue, atlantic, heights);
    vector<vector<int>> result;
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            if (pacific[i][j] && atlantic[i][j])
                result.push_back({i, j});
        }
    }
    return result;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> heights(m, vector<int>(n));
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                cin >> heights[i][j];
        vector<vector<int>> result = pacificAtlantic(heights);
        for (auto &cell : result)
            cout << cell[0] << " " << cell[1] << "\n";
    }
    return 0;
}`
  }
},
{
  id: 'ff-h5',
  title: 'Trapping Rain Water II',
  solutions: {
    python: `import heapq
def trap_rain_water(height_map):
    if not height_map or not height_map[0]:
        return 0
    m = len(height_map)
    n = len(height_map[0])
    if m < 3 or n < 3:
        return 0
    visited = [[False] * n for _ in range(m)]
    heap = []
    for i in range(m):
        heapq.heappush(heap, (height_map[i][0], i, 0))
        heapq.heappush(heap, (height_map[i][n - 1], i, n - 1))
        visited[i][0] = True
        visited[i][n - 1] = True
    for j in range(1, n - 1):
        heapq.heappush(heap, (height_map[0][j], 0, j))
        heapq.heappush(heap, (height_map[m - 1][j], m - 1, j))
        visited[0][j] = True
        visited[m - 1][j] = True
    water = 0
    directions = [(-1,0),(1,0),(0,-1),(0,1)]
    while heap:
        height, r, c = heapq.heappop(heap)
        for dr, dc in directions:
            nr = r + dr
            nc = c + dc
            if nr < 0 or nr >= m or nc < 0 or nc >= n:
                continue
            if visited[nr][nc]:
                continue
            visited[nr][nc] = True
            water += max(0, height - height_map[nr][nc])
            heapq.heappush(
                heap,
                (
                    max(height, height_map[nr][nc]),
                    nr,
                    nc
                )
            )
    return water
m, n = map(int, input().split())
height_map = [list(map(int, input().split())) for _ in range(m)]
print(trap_rain_water(height_map))`,
    java: `import java.util.*;
public class Main {
    static class Cell {
        int row;
        int col;
        int height;
        Cell(int row, int col, int height) {
            this.row = row;
            this.col = col;
            this.height = height;
        }
    }
    static int[] dr = {-1, 1, 0, 0};
    static int[] dc = {0, 0, -1, 1};
    public static int trapRainWater(int[][] heightMap) {
        if (heightMap == null || heightMap.length == 0 || heightMap[0].length == 0)
            return 0;
        int m = heightMap.length;
        int n = heightMap[0].length;
        if (m < 3 || n < 3)
            return 0;
        boolean[][] visited = new boolean[m][n];
        PriorityQueue<Cell> pq = new PriorityQueue<>((a, b) -> a.height - b.height);
        for (int i = 0; i < m; i++) {
            pq.offer(new Cell(i, 0, heightMap[i][0]));
            pq.offer(new Cell(i, n - 1, heightMap[i][n - 1]));
            visited[i][0] = true;
            visited[i][n - 1] = true;
        }
        for (int j = 1; j < n - 1; j++) {
            pq.offer(new Cell(0, j, heightMap[0][j]));
            pq.offer(new Cell(m - 1, j, heightMap[m - 1][j]));
            visited[0][j] = true;
            visited[m - 1][j] = true;
        }
        int water = 0;
        while (!pq.isEmpty()) {
            Cell cur = pq.poll();
            for (int k = 0; k < 4; k++) {
                int nr = cur.row + dr[k];
                int nc = cur.col + dc[k];
                if (nr < 0 || nr >= m || nc < 0 || nc >= n)
                    continue;
                if (visited[nr][nc])
                    continue;
                visited[nr][nc] = true;
                water += Math.max(0, cur.height - heightMap[nr][nc]);
                pq.offer(new Cell(
                    nr,
                    nc,
                    Math.max(cur.height, heightMap[nr][nc])
                ));
            }
        }
        return water;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int m = sc.nextInt();
            int n = sc.nextInt();
            int[][] heightMap = new int[m][n];
            for (int i = 0; i < m; i++)
                for (int j = 0; j < n; j++)
                    heightMap[i][j] = sc.nextInt();
            System.out.println(trapRainWater(heightMap));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
typedef struct {
    int row;
    int col;
    int height;
} Cell;
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
void swap(Cell *a, Cell *b) {
    Cell temp = *a;
    *a = *b;
    *b = temp;
}
void heapifyUp(Cell heap[], int index) {
    while (index > 0) {
        int parent = (index - 1) / 2;
        if (heap[parent].height <= heap[index].height)
            break;
        swap(&heap[parent], &heap[index]);
        index = parent;
    }
}
void heapifyDown(Cell heap[], int size, int index) {
    while (1) {
        int smallest = index;
        int left = 2 * index + 1;
        int right = 2 * index + 2;
        if (left < size && heap[left].height < heap[smallest].height)
            smallest = left;
        if (right < size && heap[right].height < heap[smallest].height)
            smallest = right;
        if (smallest == index)
            break;
        swap(&heap[index], &heap[smallest]);
        index = smallest;
    }
}
void push(Cell heap[], int *size, Cell value) {
    heap[*size] = value;
    heapifyUp(heap, *size);
    (*size)++;
}
Cell pop(Cell heap[], int *size) {
    Cell top = heap[0];
    heap[0] = heap[--(*size)];
    heapifyDown(heap, *size, 0);
    return top;
}
int trapRainWater(int **heightMap, int m, int n) {
    if (m < 3 || n < 3)
        return 0;
    bool **visited = (bool **)malloc(m * sizeof(bool *));
    for (int i = 0; i < m; i++)
        visited[i] = (bool *)calloc(n, sizeof(bool));
    Cell *heap = (Cell *)malloc(m * n * sizeof(Cell));
    int heapSize = 0;
    for (int i = 0; i < m; i++) {
        push(heap, &heapSize, (Cell){i, 0, heightMap[i][0]});
        push(heap, &heapSize, (Cell){i, n - 1, heightMap[i][n - 1]});
        visited[i][0] = true;
        visited[i][n - 1] = true;
    }
    for (int j = 1; j < n - 1; j++) {
        push(heap, &heapSize, (Cell){0, j, heightMap[0][j]});
        push(heap, &heapSize, (Cell){m - 1, j, heightMap[m - 1][j]});
        visited[0][j] = true;
        visited[m - 1][j] = true;
    }
    int water = 0;
    while (heapSize > 0) {
        Cell cur = pop(heap, &heapSize);
        for (int k = 0; k < 4; k++) {
            int nr = cur.row + dr[k];
            int nc = cur.col + dc[k];
            if (nr < 0 || nr >= m || nc < 0 || nc >= n)
                continue;
            if (visited[nr][nc])
                continue;
            visited[nr][nc] = true;
            if (cur.height > heightMap[nr][nc])
                water += cur.height - heightMap[nr][nc];
            push(heap, &heapSize, (Cell){
                nr,
                nc,
                cur.height > heightMap[nr][nc] ? cur.height : heightMap[nr][nc]
            });
        }
    }
    for (int i = 0; i < m; i++)
        free(visited[i]);
    free(visited);
    free(heap);
    return water;
}
int main() {
    int m, n;
    if (scanf("%d %d", &m, &n) != 2)
        return 0;
    int **heightMap = (int **)malloc(m * sizeof(int *));
    for (int i = 0; i < m; i++) {
        heightMap[i] = (int *)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++)
            scanf("%d", &heightMap[i][j]);
    }
    printf("%d\n", trapRainWater(heightMap, m, n));
    for (int i = 0; i < m; i++)
        free(heightMap[i]);
    free(heightMap);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;
struct Cell {
    int row;
    int col;
    int height;
    bool operator>(const Cell& other) const {
        return height > other.height;
    }
};
int dr[] = {-1, 1, 0, 0};
int dc[] = {0, 0, -1, 1};
int trapRainWater(vector<vector<int>>& heightMap) {
    if (heightMap.empty() || heightMap[0].empty())
        return 0;
    int m = heightMap.size();
    int n = heightMap[0].size();
    if (m < 3 || n < 3)
        return 0;
    vector<vector<bool>> visited(m, vector<bool>(n, false));
    priority_queue<Cell, vector<Cell>, greater<Cell>> pq;
    for (int i = 0; i < m; i++) {
        pq.push({i, 0, heightMap[i][0]});
        pq.push({i, n - 1, heightMap[i][n - 1]});
        visited[i][0] = true;
        visited[i][n - 1] = true;
    }
    for (int j = 1; j < n - 1; j++) {
        pq.push({0, j, heightMap[0][j]});
        pq.push({m - 1, j, heightMap[m - 1][j]});
        visited[0][j] = true;
        visited[m - 1][j] = true;
    }
    int water = 0;
    while (!pq.empty()) {
        Cell cur = pq.top();
        pq.pop();
        for (int k = 0; k < 4; k++) {
            int nr = cur.row + dr[k];
            int nc = cur.col + dc[k];
            if (nr < 0 || nr >= m || nc < 0 || nc >= n)
                continue;
            if (visited[nr][nc])
                continue;
            visited[nr][nc] = true;
            water += max(0, cur.height - heightMap[nr][nc]);
            pq.push({
                nr,
                nc,
                max(cur.height, heightMap[nr][nc])
            });
        }
    }
    return water;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int m, n;
    if (cin >> m >> n) {
        vector<vector<int>> heightMap(m, vector<int>(n));
        for (int i = 0; i < m; i++)
            for (int j = 0; j < n; j++)
                cin >> heightMap[i][j];
        cout << trapRainWater(heightMap) << "\n";
    }
    return 0;
}`
  }
},
];

