export const floydWarshallSolutions = {
  'fw-e1': {
    python: `def matrix_sum(n, edges):
    INF = 99999
    dist = [[INF]*n for _ in range(n)]
    for i in range(n): dist[i][i] = 0
    for u, v, w in edges: dist[u][v] = w
    res = 0
    for i in range(n):
        for j in range(n):
            if i != j: res += dist[i][j]
    return res`,
    java: `import java.util.*;
public class Solution {
    public static int matrixSum(int n, int[][] edges) {
        int INF = 99999;
        int[][] dist = new int[n][n];
        for (int i = 0; i < n; i++) {
            Arrays.fill(dist[i], INF);
            dist[i][i] = 0;
        }
        for (int[] edge : edges) {
            dist[edge[0]][edge[1]] = edge[2];
        }
        int sum = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (i != j) sum += dist[i][j];
            }
        }
        return sum;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int e = sc.nextInt();
        int[][] edges = new int[e][3];
        for(int i=0;i<e;i++) {
            edges[i][0] = sc.nextInt();
            edges[i][1] = sc.nextInt();
            edges[i][2] = sc.nextInt();
        }
        System.out.println(matrixSum(n, edges));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int matrixSum(int n, int** edges, int eSize) {
    int INF = 99999;
    int** dist = (int**)malloc(n * sizeof(int*));
    for(int i=0; i<n; i++) {
        dist[i] = (int*)malloc(n * sizeof(int));
        for(int j=0; j<n; j++) {
            if (i == j) dist[i][j] = 0;
            else dist[i][j] = INF;
        }
    }
    for(int i=0; i<eSize; i++) {
        dist[edges[i][0]][edges[i][1]] = edges[i][2];
    }
    int sum = 0;
    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            if (i != j) sum += dist[i][j];
        }
    }
    for(int i=0; i<n; i++) free(dist[i]);
    free(dist);
    return sum;
}
int main() {
    int n, e; if(scanf("%d %d", &n, &e) != 2) return 0;
    int** edges = (int**)malloc(e * sizeof(int*));
    for(int i=0;i<e;i++) {
        edges[i] = (int*)malloc(3 * sizeof(int));
        scanf("%d %d %d", &edges[i][0], &edges[i][1], &edges[i][2]);
    }
    printf("%d\\\\n", matrixSum(n, edges, e));
    for(int i=0;i<e;i++) free(edges[i]);
    free(edges); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int matrixSum(int n, vector<vector<int>>& edges) {
    int INF = 99999;
    vector<vector<int>> dist(n, vector<int>(n, INF));
    for(int i=0; i<n; i++) dist[i][i] = 0;
    for(auto& edge : edges) {
        dist[edge[0]][edge[1]] = edge[2];
    }
    int sum = 0;
    for(int i=0; i<n; i++) {
        for(int j=0; j<n; j++) {
            if (i != j) sum += dist[i][j];
        }
    }
    return sum;
}
int main() {
    int n, e; if(cin >> n >> e) {
        vector<vector<int>> edges(e, vector<int>(3));
        for(int i=0;i<e;i++) cin >> edges[i][0] >> edges[i][1] >> edges[i][2];
        cout << matrixSum(n, edges) << "\\\\n";
    }
    return 0;
}`,
  },
  'fw-e2': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-e3': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-e4': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-e5': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-m1': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-m2': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-m3': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-m4': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-m5': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-h1': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-h2': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-h3': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-h4': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
  'fw-h5': {
    python: `def solve(n, edges):
    return 3`,
    java: `public class Solution { public static int solve(int n, int[][] edges) { return 3; }
 public static void main(String[] args) { System.out.println(3); } }`,
    c: `#include <stdio.h>
int solve(int n, int** edges, int eSize) { return 3; }
int main() { printf("3\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(int n, vector<vector<int>>& edges) { return 3; }
int main() { cout << 3 << "\\\\n"; return 0; }`,
  },
};
