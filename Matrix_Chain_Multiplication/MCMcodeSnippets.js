// src/data/codeSnippets.js
export const MCMcodeSnippets = {
    c: `#include <stdio.h>
#include <limits.h>

int matrixChainOrder(int arr[], int n) {
    int dp[100][100] = {0};

    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;

            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                if (cost < dp[i][j])
                    dp[i][j] = cost;
            }
        }
    }

    return dp[1][n - 1];
}

int main() {
    int arr[] = {40, 20, 30, 10, 30};
    int n = sizeof(arr) / sizeof(arr[0]);

    printf("Minimum multiplication cost: %d\\n", matrixChainOrder(arr, n));

    return 0;
}
`,

    cpp: `#include <iostream>
#include <vector>
#include <climits>

using namespace std;

int matrixChainOrder(vector<int>& arr) {
    int n = arr.size();
    vector<vector<int>> dp(n, vector<int>(n, 0));

    for (int len = 2; len < n; len++) {
        for (int i = 1; i <= n - len; i++) {
            int j = i + len - 1;
            dp[i][j] = INT_MAX;

            for (int k = i; k < j; k++) {
                int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                dp[i][j] = min(dp[i][j], cost);
            }
        }
    }

    return dp[1][n - 1];
}

int main() {
    vector<int> arr = {40, 20, 30, 10, 30};

    cout << "Minimum multiplication cost: " << matrixChainOrder(arr) << endl;

    return 0;
}
`,

    python: `def matrix_chain_order(arr):
    n = len(arr)
    dp = [[0] * n for _ in range(n)]

    for length in range(2, n):
        for i in range(1, n - length + 1):
            j = i + length - 1
            dp[i][j] = float('inf')

            for k in range(i, j):
                cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j]
                dp[i][j] = min(dp[i][j], cost)

    return dp[1][n - 1]

arr = [40, 20, 30, 10, 30]

print("Minimum multiplication cost:", matrix_chain_order(arr))
`,

    java: `import java.util.*;

public class Main {
    public static int matrixChainOrder(int[] arr) {
        int n = arr.length;
        int[][] dp = new int[n][n];

        for (int len = 2; len < n; len++) {
            for (int i = 1; i <= n - len; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;

                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + arr[i - 1] * arr[k] * arr[j];
                    dp[i][j] = Math.min(dp[i][j], cost);
                }
            }
        }

        return dp[1][n - 1];
    }

    public static void main(String[] args) {
        int[] arr = {40, 20, 30, 10, 30};

        System.out.println("Minimum multiplication cost: " + matrixChainOrder(arr));
    }
}
`
};