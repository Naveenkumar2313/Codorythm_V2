export const matrixChainSolutions = {
    'mcm-e1': {
  python: `def matrix_chain_order(arr):
    n = len(arr)
    if n <= 2:
        return 0
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
    return dp[1][n - 1]

n = int(input())
arr = list(map(int, input().split()))
print(matrix_chain_order(arr))`,
    java: `import java.util.*;
public class Main {
    public static int matrixChainOrder(int[] arr) {
        int n = arr.length;
        if (n <= 2) return 0;
        int[][] dp = new int[n][n];
        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                    }
                }
            }
        }
        return dp[1][n - 1];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            System.out.println(matrixChainOrder(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int matrixChainOrder(int* arr, int n) {
    if (n <= 2) return 0;
    int** dp = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)calloc(n, sizeof(int));
    }
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    int ans = dp[1][n - 1];
    for (int i = 0; i < n; i++) {
        free(dp[i]);
    }
    free(dp);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    printf("%d\\n", matrixChainOrder(arr, n));
    free(arr);
    return 0;
}`,    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int matrixChainOrder(vector<int>& arr) {
    int n = arr.size();
    if (n <= 2) return 0;
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    return dp[1][n - 1];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << matrixChainOrder(arr) << "\\n";
    }
    return 0;
}`
},'mcm-e2': {
  python: `def matrix_chain_recursive(arr):
    def solve(i, j):
        if i == j:
            return 0
        ans = float('inf')
        for k in range(i, j):
            cost = solve(i, k) + solve(k + 1, j) + arr[i - 1] * arr[k] * arr[j]
            ans = min(ans, cost)
        return ans
    if len(arr) <= 2:
        return 0
    return solve(1, len(arr) - 1)

n = int(input())
arr = list(map(int, input().split()))
print(matrix_chain_recursive(arr))`,
    java: `import java.util.*;

public class Main {
    private static int solve(int[] arr, int i, int j) {
        if (i == j) return 0;
        int ans = Integer.MAX_VALUE;
        for (int k = i; k < j; k++) {
            int cost = solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
            ans = Math.min(ans, cost);
        }
        return ans;
    }

    public static int matrixChainRecursive(int[] arr) {
        if (arr.length <= 2) return 0;
        return solve(arr, 1, arr.length - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            System.out.println(matrixChainRecursive(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int solve(int* arr, int i, int j) {
    if (i == j) return 0;
    int ans = INT_MAX;
    for (int k = i; k < j; k++) {
        int cost = solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
        if (cost < ans) ans = cost;
    }
    return ans;
}

int matrixChainRecursive(int* arr, int n) {
    if (n <= 2) return 0;
    return solve(arr, 1, n - 1);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    printf("%d\\n", matrixChainRecursive(arr, n));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int solve(vector<int>& arr, int i, int j) {
    if (i == j) return 0;
    int ans = INT_MAX;
    for (int k = i; k < j; k++) {
        int cost = solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
        ans = min(ans, cost);
    }
    return ans;
}

int matrixChainRecursive(vector<int>& arr) {
    if (arr.size() <= 2) return 0;
    return solve(arr, 1, arr.size() - 1);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << matrixChainRecursive(arr) << "\\n";
    }
    return 0;
}`
},'mcm-e3': {
  python: `def matrix_chain_memoization(arr):
    n = len(arr)
    if n <= 2:
        return 0
    dp = [[-1] * n for _ in range(n)]
    def solve(i, j):
        if i == j:
            return 0
        if dp[i][j] != -1:
            return dp[i][j]
        dp[i][j] = float('inf')
        for k in range(i, j):
            cost = solve(i, k) + solve(k + 1, j) + arr[i - 1] * arr[k] * arr[j]
            dp[i][j] = min(dp[i][j], cost)
        return dp[i][j]
    return solve(1, n - 1)

n = int(input())
arr = list(map(int, input().split()))
print(matrix_chain_memoization(arr))`,
    java: `import java.util.*;
public class Main {
    static int[][] dp;

    private static int solve(int[] arr, int i, int j) {
        if (i == j) return 0;
        if (dp[i][j] != -1) return dp[i][j];
        dp[i][j] = Integer.MAX_VALUE;
        for (int k = i; k < j; k++) {
            int cost = solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
            dp[i][j] = Math.min(dp[i][j], cost);
        }
        return dp[i][j];
    }

    public static int matrixChainMemoization(int[] arr) {
        int n = arr.length;
        if (n <= 2) return 0;
        dp = new int[n][n];
        for (int[] row : dp) Arrays.fill(row, -1);
        return solve(arr, 1, n - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            System.out.println(matrixChainMemoization(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int** dp;

int solve(int* arr, int i, int j) {
    if (i == j) return 0;
    if (dp[i][j] != -1) return dp[i][j];
    dp[i][j] = INT_MAX;
    for (int k = i; k < j; k++) {
        int cost = solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
        if (cost < dp[i][j]) dp[i][j] = cost;
    }
    return dp[i][j];
}

int matrixChainMemoization(int* arr, int n) {
    if (n <= 2) return 0;
    dp = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)malloc(n * sizeof(int));
        for (int j = 0; j < n; j++) dp[i][j] = -1;
    }
    int ans = solve(arr, 1, n - 1);
    for (int i = 0; i < n; i++) free(dp[i]);
    free(dp);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    printf("%d\\n", matrixChainMemoization(arr, n));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

vector<vector<int>> dp;

int solve(vector<int>& arr, int i, int j) {
    if (i == j) return 0;
    if (dp[i][j] != -1) return dp[i][j];
    dp[i][j] = INT_MAX;
    for (int k = i; k < j; k++) {
        int cost = solve(arr, i, k) + solve(arr, k + 1, j) + arr[i - 1] * arr[k] * arr[j];
        dp[i][j] = min(dp[i][j], cost);
    }
    return dp[i][j];
}

int matrixChainMemoization(vector<int>& arr) {
    int n = arr.size();
    if (n <= 2) return 0;
    dp.assign(n, vector<int>(n, -1));
    return solve(arr, 1, n - 1);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << matrixChainMemoization(arr) << "\\n";
    }
    return 0;
}`
},'mcm-e4': {
  python: `def count_matrices(arr):
    return len(arr) - 1

n = int(input())
arr = list(map(int, input().split()))
print(count_matrices(arr))`,
    java: `import java.util.*;
public class Main {
    public static int countMatrices(int[] arr) {
        return arr.length - 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            System.out.println(countMatrices(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int countMatrices(int* arr, int n) {
    return n - 1;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    printf("%d\\n", countMatrices(arr, n));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int countMatrices(vector<int>& arr) {
    return arr.size() - 1;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << countMatrices(arr) << "\\n";
    }
    return 0;
}`
},'mcm-e5': {
  python: `def validate_matrix_chain(arr):
    return True

n = int(input())
arr = list(map(int, input().split()))
print(str(validate_matrix_chain(arr)).lower())`,
    java: `import java.util.*;

public class Main {
    public static boolean validateMatrixChain(int[] arr) {
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            System.out.println(validateMatrixChain(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool validateMatrixChain(int* arr, int n) {
    return true;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    printf("%s\\n", validateMatrixChain(arr, n) ? "true" : "false");
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

bool validateMatrixChain(vector<int>& arr) {
    return true;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << (validateMatrixChain(arr) ? "true" : "false") << "\\n";
    }
    return 0;
}`
},'mcm-m1': {
  python: `def optimal_parenthesization(arr):
    n = len(arr)
    if n <= 2:
        return ""
    dp = [[0] * n for _ in range(n)]
    split = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    split[i][j] = k
    def build(i, j):
        if i == j:
            return f"A{i}"
        k = split[i][j]
        return "(" + build(i, k) + build(k + 1, j) + ")"
    return build(1, n - 1)

n = int(input())
arr = list(map(int, input().split()))
print(optimal_parenthesization(arr))`,
    java: `import java.util.*;
public class Main {
    static int[][] dp;
    static int[][] split;
    static String build(int i, int j) {
        if (i == j) return "A" + i;
        int k = split[i][j];
        return "(" + build(i, k) + build(k + 1, j) + ")";
    }
    public static String optimalParenthesization(int[] arr) {
        int n = arr.length;
        if (n <= 2) return "";
        dp = new int[n][n];
        split = new int[n][n];
        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                        split[i][j] = k;
                    }
                }
            }
        }
        return build(1, n - 1);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            System.out.println(optimalParenthesization(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>
int dp[105][105], split[105][105];
void build(int i, int j, char* res) {
    if (i == j) {
        char temp[10];
        sprintf(temp, "A%d", i);
        strcat(res, temp);
        return;
    }
    strcat(res, "(");
    build(i, split[i][j], res);
    build(split[i][j] + 1, j, res);
    strcat(res, ")");
}
char* optimalParenthesization(int* arr, int n) {
    static char res[1000];
    res[0] = '\0';
    if (n <= 2) return res;
    memset(dp, 0, sizeof(dp));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    build(1, n - 1, res);
    return res;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("%s\\n", optimalParenthesization(arr, n));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <climits>

using namespace std;

vector<vector<int>> dp, split;

string build(int i, int j) {
    if (i == j) return "A" + to_string(i);
    return "(" + build(i, split[i][j]) + build(split[i][j] + 1, j) + ")";
}

string optimalParenthesization(vector<int>& arr) {
    int n = arr.size();
    if (n <= 2) return "";
    dp.assign(n, vector<int>(n, 0));
    split.assign(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    return build(1, n - 1);
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        cout << optimalParenthesization(arr) << "\\n";
    }
    return 0;
}`
},'mcm-m2': {
  python: `def matrix_chain_tabulation(arr):
    n = len(arr)
    if n <= 2:
        return 0
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
    return dp[1][n - 1]

n = int(input())
arr = list(map(int, input().split()))
print(matrix_chain_tabulation(arr))`,
    java: `import java.util.*;
public class Main {
    public static int matrixChainTabulation(int[] arr) {
        int n = arr.length;
        if (n <= 2) return 0;
        int[][] dp = new int[n][n];
        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                    }
                }
            }
        }
        return dp[1][n - 1];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            System.out.println(matrixChainTabulation(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int matrixChainTabulation(int* arr, int n) {
    if (n <= 2) return 0;
    int** dp = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)calloc(n, sizeof(int));
    }
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    int ans = dp[1][n - 1];
    for (int i = 0; i < n; i++) {
        free(dp[i]);
    }
    free(dp);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    printf("%d\\n", matrixChainTabulation(arr, n));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int matrixChainTabulation(vector<int>& arr) {
    int n = arr.size();
    if (n <= 2) return 0;
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    return dp[1][n - 1];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << matrixChainTabulation(arr) << "\\n";
    }
    return 0;
}`
}, 'mcm-m3': {
  python: `def optimal_split(arr):
    n = len(arr)
    if n <= 2:
        return 0
    dp = [[0] * n for _ in range(n)]
    split = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    split[i][j] = k
    return split[1][n - 1]

n = int(input())
arr = list(map(int, input().split()))
print(optimal_split(arr))`,
    java: `import java.util.*;

public class Main {
    public static int optimalSplit(int[] arr) {
        int n = arr.length;
        if (n <= 2) return 0;
        int[][] dp = new int[n][n];
        int[][] split = new int[n][n];
        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                        split[i][j] = k;
                    }
                }
            }
        }
        return split[1][n - 1];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            System.out.println(optimalSplit(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int optimalSplit(int* arr, int n) {
    if (n <= 2) return 0;
    int** dp = (int**)malloc(n * sizeof(int*));
    int** split = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)calloc(n, sizeof(int));
        split[i] = (int*)calloc(n, sizeof(int));
    }
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    int ans = split[1][n - 1];
    for (int i = 0; i < n; i++) {
        free(dp[i]);
        free(split[i]);
    }
    free(dp);
    free(split);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    printf("%d\\n", optimalSplit(arr, n));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int optimalSplit(vector<int>& arr) {
    int n = arr.size();
    if (n <= 2) return 0;
    vector<vector<int>> dp(n, vector<int>(n, 0));
    vector<vector<int>> split(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    return split[1][n - 1];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << optimalSplit(arr) << "\\n";
    }
    return 0;
}`
},'mcm-m4': {
  python: `def maximum_matrix_chain_cost(arr):
    n = len(arr)
    if n <= 2:
        return 0
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = 0
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]
                if cost > dp[i][j]:
                    dp[i][j] = cost
    return dp[1][n - 1]

n = int(input())
arr = list(map(int, input().split()))
print(maximum_matrix_chain_cost(arr))`,
    java: `import java.util.*;

public class Solution {
    public static int maximumMatrixChainCost(int[] arr) {
        int n = arr.length;
        if (n <= 2) return 0;
        int[][] dp = new int[n][n];
        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    if (cost > dp[i][j]) {
                        dp[i][j] = cost;
                    }
                }
            }
        }
        return dp[1][n - 1];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            System.out.println(maximumMatrixChainCost(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int maximumMatrixChainCost(int* arr, int n) {
    if (n <= 2) return 0;
    int** dp = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        dp[i] = (int*)calloc(n, sizeof(int));
    }
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost > dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    int ans = dp[1][n - 1];
    for (int i = 0; i < n; i++) free(dp[i]);
    free(dp);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &arr[i]) != 1) return 0;
    }
    printf("%d\\n", maximumMatrixChainCost(arr, n));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int maximumMatrixChainCost(vector<int>& arr) {
    int n = arr.size();
    if (n <= 2) return 0;
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost > dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    return dp[1][n - 1];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        cout << maximumMatrixChainCost(arr) << "\\n";
    }
    return 0;
}`
},'mcm-m5': {
  python: `def fixed_split_cost(arr, k):
    n = len(arr)
    if n <= 2:
        return 0

    def cost(i, j):
        if i == j:
            return 0
        dp = [[0] * n for _ in range(n)]
        for length in range(2, j - i + 2):
            for l in range(i, j - length + 2):
                r = l + length - 1
                dp[l][r] = float('inf')
                for m in range(l, r):
                    cur = dp[l][m] + dp[m + 1][r] + arr[l - 1] * arr[m] * arr[r]
                    if cur < dp[l][r]:
                        dp[l][r] = cur
        return dp[i][j]

    left = cost(1, k)
    right = cost(k + 1, n - 1)
    merge = arr[0] * arr[k] * arr[n - 1]
    return left + right + merge

n = int(input())
arr = list(map(int, input().split()))
k = int(input())
print(fixed_split_cost(arr, k))`,
    java: `import java.util.*;

public class Solution {
    static int cost(int[] arr, int s, int e) {
        if (s == e) return 0;
        int n = arr.length;
        int[][] dp = new int[n][n];
        for (int len = 2; len <= e - s + 1; len++) {
            for (int i = s; i <= e - len + 1; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int cur = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    dp[i][j] = Math.min(dp[i][j], cur);
                }
            }
        }
        return dp[s][e];
    }

    public static int fixedSplitCost(int[] arr, int k) {
        int n = arr.length;
        if (n <= 2) return 0;
        int left = cost(arr, 1, k);
        int right = cost(arr, k + 1, n - 1);
        int merge = arr[0] * arr[k] * arr[n - 1];
        return left + right + merge;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(fixedSplitCost(arr, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int cost(int* arr, int n, int s, int e) {
    if (s == e) return 0;
    int dp[105][105] = {0};
    for (int len = 2; len <= e - s + 1; len++) {
        for (int i = s; i <= e - len + 1; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cur = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cur < dp[i][j]) dp[i][j] = cur;
            }
        }
    }
    return dp[s][e];
}

int fixedSplitCost(int* arr, int n, int k) {
    if (n <= 2) return 0;
    int left = cost(arr, n, 1, k);
    int right = cost(arr, n, k + 1, n - 1);
    int merge = arr[0] * arr[k] * arr[n - 1];
    return left + right + merge;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int k;
    scanf("%d", &k);
    printf("%d\\n", fixedSplitCost(arr, n, k));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int cost(vector<int>& arr, int s, int e) {
    if (s == e) return 0;
    int n = arr.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int len = 2; len <= e - s + 1; len++) {
        for (int i = s; i <= e - len + 1; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cur = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                dp[i][j] = min(dp[i][j], cur);
            }
        }
    }
    return dp[s][e];
}

int fixedSplitCost(vector<int>& arr, int k) {
    int n = arr.size();
    if (n <= 2) return 0;
    int left = cost(arr, 1, k);
    int right = cost(arr, k + 1, n - 1);
    int merge = arr[0] * arr[k] * arr[n - 1];
    return left + right + merge;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        int k;
        cin >> k;
        cout << fixedSplitCost(arr, k) << "\\n";
    }
    return 0;
}`
},'mcm-h1': {
  python: `def matrix_chain_details(arr):
    n = len(arr)
    if n <= 2:
        return (0, "")
    dp = [[0] * n for _ in range(n)]
    split = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
                    split[i][j] = k
    def build(i, j):
        if i == j:
            return "A" + str(i)
        k = split[i][j]
        return "(" + build(i, k) + build(k + 1, j) + ")"
    return (dp[1][n - 1], build(1, n - 1))

n = int(input())
arr = list(map(int, input().split()))
cost, order = matrix_chain_details(arr)
print(cost)
print(order)`,
    java: `import java.util.*;

public class Solution {
    static int[][] dp;
    static int[][] split;

    static String build(int i, int j) {
        if (i == j) return "A" + i;
        int k = split[i][j];
        return "(" + build(i, k) + build(k + 1, j) + ")";
    }

    public static String[] matrixChainDetails(int[] arr) {
        int n = arr.length;
        if (n <= 2) return new String[]{"0", ""};
        dp = new int[n][n];
        split = new int[n][n];
        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                        split[i][j] = k;
                    }
                }
            }
        }
        return new String[]{String.valueOf(dp[1][n - 1]), build(1, n - 1)};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            String[] result = matrixChainDetails(arr);
            System.out.println(result[0]);
            System.out.println(result[1]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <limits.h>

int dp[105][105], split[105][105];

void build(int i, int j, char* res) {
    if (i == j) {
        char temp[10];
        sprintf(temp, "A%d", i);
        strcat(res, temp);
        return;
    }
    strcat(res, "(");
    build(i, split[i][j], res);
    build(split[i][j] + 1, j, res);
    strcat(res, ")");
}

void matrixChainDetails(int* arr, int n, int* cost, char* order) {
    order[0] = '\0';
    if (n <= 2) {
        *cost = 0;
        return;
    }
    memset(dp, 0, sizeof(dp));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cur = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cur < dp[i][j]) {
                    dp[i][j] = cur;
                    split[i][j] = k;
                }
            }
        }
    }
    *cost = dp[1][n - 1];
    build(1, n - 1, order);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int cost;
    char order[1000];
    matrixChainDetails(arr, n, &cost, order);
    printf("%d\\n", cost);
    printf("%s\\n", order);
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <climits>

using namespace std;

vector<vector<int>> dp, split;

string build(int i, int j) {
    if (i == j) return "A" + to_string(i);
    return "(" + build(i, split[i][j]) + build(split[i][j] + 1, j) + ")";
}

pair<int, string> matrixChainDetails(vector<int>& arr) {
    int n = arr.size();
    if (n <= 2) return {0, ""};
    dp.assign(n, vector<int>(n, 0));
    split.assign(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    return {dp[1][n - 1], build(1, n - 1)};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        auto result = matrixChainDetails(arr);
        cout << result.first << "\\n";
        cout << result.second << "\\n";
    }
    return 0;
}`
},'mcm-h2': {
  python: `def matrix_chain_queries(arr, queries):
    n = len(arr)
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]
                if cost < dp[i][j]:
                    dp[i][j] = cost
    return [dp[i][j] for i, j in queries]

n = int(input())
arr = list(map(int, input().split()))
q = int(input())
queries = [tuple(map(int, input().split())) for _ in range(q)]
results = matrix_chain_queries(arr, queries)
for x in results:
    print(x)`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> matrixChainQueries(int[] arr, int[][] queries) {
        int n = arr.length;
        int[][] dp = new int[n][n];
        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                    }
                }
            }
        }
        List<Integer> ans = new ArrayList<>();
        for (int[] q : queries) {
            ans.add(dp[q[0]][q[1]]);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int q = sc.nextInt();
            int[][] queries = new int[q][2];
            for (int i = 0; i < q; i++) {
                queries[i][0] = sc.nextInt();
                queries[i][1] = sc.nextInt();
            }
            List<Integer> ans = matrixChainQueries(arr, queries);
            for (int x : ans) System.out.println(x);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

void matrixChainQueries(int* arr, int n, int queries[][2], int q, int* result) {
    int dp[105][105] = {0};
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) dp[i][j] = cost;
            }
        }
    }
    for (int i = 0; i < q; i++) {
        result[i] = dp[queries[i][0]][queries[i][1]];
    }
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int q;
    scanf("%d", &q);
    int queries[105][2];
    int result[105];
    for (int i = 0; i < q; i++) scanf("%d %d", &queries[i][0], &queries[i][1]);
    matrixChainQueries(arr, n, queries, q, result);
    for (int i = 0; i < q; i++) printf("%d\\n", result[i]);
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

vector<int> matrixChainQueries(vector<int>& arr, vector<pair<int,int>>& queries) {
    int n = arr.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    vector<int> ans;
    for (auto &q : queries) {
        ans.push_back(dp[q.first][q.second]);
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        int q;
        cin >> q;
        vector<pair<int,int>> queries(q);
        for (int i = 0; i < q; i++) {
            cin >> queries[i].first >> queries[i].second;
        }
        vector<int> ans = matrixChainQueries(arr, queries);
        for (int x : ans) cout << x << "\\n";
    }
    return 0;
}`
},'mcm-h3': {
  python: `def circular_matrix_chain(arr):
    m = len(arr) - 1
    if m <= 1:
        return 0
    dims = arr + arr[1:]
    INF = float('inf')
    ans = INF
    for start in range(m):
        d = dims[start:start + m + 1]
        n = len(d)
        dp = [[0] * n for _ in range(n)]
        for length in range(2, n):
            for i in range(1, n - length + 1):
                j = i + length - 1
                dp[i][j] = INF
                for k in range(i, j):
                    cost = dp[i][k] + dp[k + 1][j] + d[i - 1] * d[k] * d[j]
                    if cost < dp[i][j]:
                        dp[i][j] = cost
        ans = min(ans, dp[1][m])
    return ans

n = int(input())
arr = list(map(int, input().split()))
print(circular_matrix_chain(arr))`,
    java: `import java.util.*;

public class Solution {
    public static int circularMatrixChain(int[] arr) {
        int m = arr.length - 1;
        if (m <= 1) return 0;
        int[] dims = new int[arr.length + m - 1];
        for (int i = 0; i < arr.length; i++) dims[i] = arr[i];
        for (int i = 1; i < arr.length - 1; i++) dims[arr.length + i - 1] = arr[i];
        int ans = Integer.MAX_VALUE;
        for (int start = 0; start < m; start++) {
            int[] d = Arrays.copyOfRange(dims, start, start + m + 1);
            int n = d.length;
            int[][] dp = new int[n][n];
            for (int len = 2; len < n; len++) {
                for (int i = 1; i <= n - len; i++) {
                    int j = i + len - 1;
                    dp[i][j] = Integer.MAX_VALUE;
                    for (int k = i; k < j; k++) {
                        int cost = dp[i][k] + dp[k + 1][j] + d[i - 1] * d[k] * d[j];
                        if (cost < dp[i][j]) dp[i][j] = cost;
                    }
                }
            }
            ans = Math.min(ans, dp[1][m]);
        }
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            System.out.println(circularMatrixChain(arr));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int circularMatrixChain(int* arr, int n) {
    int m = n - 1;
    if (m <= 1) return 0;
    int dims[205];
    for (int i = 0; i < n; i++) dims[i] = arr[i];
    for (int i = 1; i < n - 1; i++) dims[n + i - 1] = arr[i];
    int ans = INT_MAX;
    for (int start = 0; start < m; start++) {
        int d[105];
        for (int i = 0; i <= m; i++) d[i] = dims[start + i];
        int dp[105][105] = {0};
        for (int len = 2; len <= m; len++) {
            for (int i = 1; i <= m - len + 1; i++) {
                int j = i + len - 1;
                dp[i][j] = INT_MAX;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + d[i - 1] * d[k] * d[j];
                    if (cost < dp[i][j]) dp[i][j] = cost;
                }
            }
        }
        if (dp[1][m] < ans) ans = dp[1][m];
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("%d\\n", circularMatrixChain(arr, n));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int circularMatrixChain(vector<int>& arr) {
    int m = arr.size() - 1;
    if (m <= 1) return 0;
    vector<int> dims = arr;
    for (int i = 1; i < (int)arr.size() - 1; i++) dims.push_back(arr[i]);
    int ans = INT_MAX;
    for (int start = 0; start < m; start++) {
        vector<int> d(dims.begin() + start, dims.begin() + start + m + 1);
        vector<vector<int>> dp(m + 1, vector<int>(m + 1, 0));
        for (int len = 2; len <= m; len++) {
            for (int i = 1; i <= m - len + 1; i++) {
                int j = i + len - 1;
                dp[i][j] = INT_MAX;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + d[i - 1] * d[k] * d[j];
                    if (cost < dp[i][j]) dp[i][j] = cost;
                }
            }
        }
        ans = min(ans, dp[1][m]);
    }
    return ans;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        cout << circularMatrixChain(arr) << "\\n";
    }
    return 0;
}`
},'mcm-h4': {
  python: `def maximum_matrix_chain_details(arr):
    n = len(arr)
    if n <= 2:
        return (0, "")
    dp = [[0] * n for _ in range(n)]
    split = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]
                if cost > dp[i][j]:
                    dp[i][j] = cost
                    split[i][j] = k
    def build(i, j):
        if i == j:
            return "A" + str(i)
        k = split[i][j]
        return "(" + build(i, k) + build(k + 1, j) + ")"
    return (dp[1][n - 1], build(1, n - 1))

n = int(input())
arr = list(map(int, input().split()))
cost, order = maximum_matrix_chain_details(arr)
print(cost)
print(order)`,
    java: `import java.util.*;

public class Solution {
    static int[][] dp;
    static int[][] split;

    static String build(int i, int j) {
        if (i == j) return "A" + i;
        int k = split[i][j];
        return "(" + build(i, k) + build(k + 1, j) + ")";
    }

    public static String[] maximumMatrixChainDetails(int[] arr) {
        int n = arr.length;
        if (n <= 2) return new String[]{"0", ""};
        dp = new int[n][n];
        split = new int[n][n];
        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    if (cost > dp[i][j]) {
                        dp[i][j] = cost;
                        split[i][j] = k;
                    }
                }
            }
        }
        return new String[]{String.valueOf(dp[1][n - 1]), build(1, n - 1)};
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            String[] result = maximumMatrixChainDetails(arr);
            System.out.println(result[0]);
            System.out.println(result[1]);
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int dp[105][105], split[105][105];

void build(int i, int j, char* res) {
    if (i == j) {
        char temp[10];
        sprintf(temp, "A%d", i);
        strcat(res, temp);
        return;
    }
    strcat(res, "(");
    build(i, split[i][j], res);
    build(split[i][j] + 1, j, res);
    strcat(res, ")");
}

void maximumMatrixChainDetails(int* arr, int n, int* cost, char* order) {
    order[0] = '\0';
    if (n <= 2) {
        *cost = 0;
        return;
    }
    memset(dp, 0, sizeof(dp));
    memset(split, 0, sizeof(split));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            for (int k = i; k < j; k++) {
                int cur = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cur > dp[i][j]) {
                    dp[i][j] = cur;
                    split[i][j] = k;
                }
            }
        }
    }
    *cost = dp[1][n - 1];
    build(1, n - 1, order);
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int cost;
    char order[1000];
    maximumMatrixChainDetails(arr, n, &cost, order);
    printf("%d\\n", cost);
    printf("%s\\n", order);
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

vector<vector<int>> dp, split;

string build(int i, int j) {
    if (i == j) return "A" + to_string(i);
    return "(" + build(i, split[i][j]) + build(split[i][j] + 1, j) + ")";
}

pair<int, string> maximumMatrixChainDetails(vector<int>& arr) {
    int n = arr.size();
    if (n <= 2) return {0, ""};
    dp.assign(n, vector<int>(n, 0));
    split.assign(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost > dp[i][j]) {
                    dp[i][j] = cost;
                    split[i][j] = k;
                }
            }
        }
    }
    return {dp[1][n - 1], build(1, n - 1)};
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        auto result = maximumMatrixChainDetails(arr);
        cout << result.first << "\\n";
        cout << result.second << "\\n";
    }
    return 0;
}`
},'mcm-h5': {
  python: `def matrix_chain_with_penalty(arr, penalty):
    n = len(arr)
    if n <= 2:
        return 0
    dp = [[0] * n for _ in range(n)]
    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')
            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j] + penalty
                if cost < dp[i][j]:
                    dp[i][j] = cost
    return dp[1][n - 1]

n = int(input())
arr = list(map(int, input().split()))
penalty = int(input())
print(matrix_chain_with_penalty(arr, penalty))`,
    java: `import java.util.*;

public class Solution {
    public static int matrixChainWithPenalty(int[] arr, int penalty) {
        int n = arr.length;
        if (n <= 2) return 0;
        int[][] dp = new int[n][n];
        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j] + penalty;
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                    }
                }
            }
        }
        return dp[1][n - 1];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) {
                arr[i] = sc.nextInt();
            }
            int penalty = sc.nextInt();
            System.out.println(matrixChainWithPenalty(arr, penalty));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int matrixChainWithPenalty(int* arr, int n, int penalty) {
    if (n <= 2) return 0;
    int dp[105][105] = {0};
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j] + penalty;
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    return dp[1][n - 1];
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }
    int penalty;
    scanf("%d", &penalty);
    printf("%d\\n", matrixChainWithPenalty(arr, n, penalty));
    free(arr);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int matrixChainWithPenalty(vector<int>& arr, int penalty) {
    int n = arr.size();
    if (n <= 2) return 0;
    vector<vector<int>> dp(n, vector<int>(n, 0));
    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;
            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j] + penalty;
                if (cost < dp[i][j]) {
                    dp[i][j] = cost;
                }
            }
        }
    }
    return dp[1][n - 1];
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) {
            cin >> arr[i];
        }
        int penalty;
        cin >> penalty;
        cout << matrixChainWithPenalty(arr, penalty) << "\\n";
    }
    return 0;
}`
},
};
