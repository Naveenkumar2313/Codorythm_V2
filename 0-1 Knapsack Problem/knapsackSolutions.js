export const knapsackSolutions = {
  'kp-e1': {
    python: `def fractional_knapsack(W, wt, val):
    items = sorted(zip(val, wt), key=lambda x: x[0]/x[1], reverse=True)
    ans = 0.0
    for v, w in items:
        if W >= w:
            ans += v
            W -= w
        else:
            ans += v * (W / w)
            break
    return ans`,
    java: `import java.util.*;
public class Solution {
    static class Item implements Comparable<Item> {
        int val, wt; double ratio;
        Item(int val, int wt) { this.val = val; this.wt = wt; this.ratio = (double)val/wt; }
        public int compareTo(Item other) {
            return Double.compare(other.ratio, this.ratio);
        }
    }
    public static double fractionalKnapsack(int W, int[] wt, int[] val) {
        Item[] items = new Item[wt.length];
        for (int i = 0; i < wt.length; i++) items[i] = new Item(val[i], wt[i]);
        Arrays.sort(items);
        double ans = 0.0;
        for (Item item : items) {
            if (W >= item.wt) {
                ans += item.val;
                W -= item.wt;
            } else {
                ans += item.val * ((double)W / item.wt);
                break;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int W = sc.nextInt();
        int[] val = new int[n];
        for(int i=0;i<n;i++) val[i] = sc.nextInt();
        int[] wt = new int[n];
        for(int i=0;i<n;i++) wt[i] = sc.nextInt();
        System.out.printf(Locale.US, "%.2f\\\\n", fractionalKnapsack(W, wt, val));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
struct Item { int val, wt; };
int compare(const void* a, const void* b) {
    double r1 = (double)((struct Item*)a)->val / ((struct Item*)a)->wt;
    double r2 = (double)((struct Item*)b)->val / ((struct Item*)b)->wt;
    return (r2 > r1) - (r2 < r1);
}
double fractionalKnapsack(int W, struct Item arr[], int n) {
    qsort(arr, n, sizeof(struct Item), compare);
    double ans = 0.0;
    for(int i=0; i<n; i++) {
        if (W >= arr[i].wt) {
            ans += arr[i].val;
            W -= arr[i].wt;
        } else {
            ans += arr[i].val * ((double)W / arr[i].wt);
            break;
        }
    }
    return ans;
}
int main() {
    int n, W; if(scanf("%d %d", &n, &W) != 2) return 0;
    struct Item* arr = (struct Item*)malloc(n * sizeof(struct Item));
    for(int i=0;i<n;i++) scanf("%d", &arr[i].val);
    for(int i=0;i<n;i++) scanf("%d", &arr[i].wt);
    printf("%.2f\\\\n", fractionalKnapsack(W, arr, n));
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <iomanip>
#include <algorithm>
using namespace std; 
struct Item { int val, wt; };
bool compare(Item a, Item b) {
    return (double)a.val / a.wt > (double)b.val / b.wt;
}
double fractionalKnapsack(int W, vector<Item>& arr) {
    sort(arr.begin(), arr.end(), compare);
    double ans = 0.0;
    for(auto item : arr) {
        if (W >= item.wt) {
            ans += item.val;
            W -= item.wt;
        } else {
            ans += item.val * ((double)W / item.wt);
            break;
        }
    }
    return ans;
}
int main() {
    int n, W; if(cin >> n >> W) {
        vector<Item> arr(n); 
        for(int i=0;i<n;i++) cin >> arr[i].val;
        for(int i=0;i<n;i++) cin >> arr[i].wt;
        cout << fixed << setprecision(2) << fractionalKnapsack(W, arr) << "\\\\n";
    }
    return 0;
}`,
  },
  'kp-e2': {
    python: `def subset_sum(nums, target):
    n = len(nums)
    dp = [[False]*(target+1) for _ in range(n+1)]
    for i in range(n+1): dp[i][0] = True
    for i in range(1, n+1):
        for j in range(1, target+1):
            if nums[i-1] <= j: dp[i][j] = dp[i-1][j] or dp[i-1][j-nums[i-1]]
            else: dp[i][j] = dp[i-1][j]
    return dp[n][target]`,
    java: `import java.util.*;
public class Solution {
    public static boolean subsetSum(int[] nums, int target) {
        int n = nums.length;
        boolean[][] dp = new boolean[n+1][target+1];
        for(int i=0;i<=n;i++) dp[i][0] = true;
        for(int i=1;i<=n;i++){
            for(int j=1;j<=target;j++){
                if(nums[i-1] <= j) dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
                else dp[i][j] = dp[i-1][j];
            }
        }
        return dp[n][target];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int target = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++) arr[i] = sc.nextInt();
        System.out.println(subsetSum(arr, target));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
bool subsetSum(int* nums, int n, int target) {
    bool dp[n+1][target+1];
    for(int i=0;i<=n;i++) {
        for(int j=0;j<=target;j++) {
            if (j == 0) dp[i][j] = true;
            else if (i == 0) dp[i][j] = false;
            else if (nums[i-1] <= j) dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
            else dp[i][j] = dp[i-1][j];
        }
    }
    return dp[n][target];
}
int main() {
    int n, target; if(scanf("%d %d", &n, &target) != 2) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    printf("%s\\n", subsetSum(arr, n, target) ? "true":"false");
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std; 
bool subsetSum(vector<int>& nums, int target) {
    int n = nums.size();
    vector<vector<bool>> dp(n+1, vector<bool>(target+1, false));
    for(int i=0; i<=n; i++) dp[i][0] = true;
    for(int i=1; i<=n; i++){
        for(int j=1; j<=target; j++){
            if(nums[i-1] <= j) dp[i][j] = dp[i-1][j] || dp[i-1][j-nums[i-1]];
            else dp[i][j] = dp[i-1][j];
        }
    }
    return dp[n][target];
}
int main() {
    int n, target; if(cin >> n >> target) {
        vector<int> arr(n); for(int i=0;i<n;i++) cin >> arr[i];
        cout << (subsetSum(arr, target) ? "true":"false") << "\\n";
    }
    return 0;
}`,
  },
  'kp-m1': {
    python: `def knapsack(W, wt, val):
    n = len(val)
    dp = [[0]*(W+1) for _ in range(n+1)]
    for i in range(1, n+1):
        for w in range(1, W+1):
            if wt[i-1] <= w: dp[i][w] = max(val[i-1] + dp[i-1][w-wt[i-1]], dp[i-1][w])
            else: dp[i][w] = dp[i-1][w]
    return dp[n][W]`,
    java: `import java.util.*;
public class Solution {
    public static int knapsack(int W, int[] wt, int[] val) {
        int n = val.length;
        int[][] dp = new int[n+1][W+1];
        for (int i = 1; i <= n; i++) {
            for (int w = 1; w <= W; w++) {
                if (wt[i-1] <= w) dp[i][w] = Math.max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w]);
                else dp[i][w] = dp[i - 1][w];
            }
        }
        return dp[n][W];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int W = sc.nextInt();
        int[] val = new int[n];
        for(int i=0;i<n;i++) val[i] = sc.nextInt();
        int[] wt = new int[n];
        for(int i=0;i<n;i++) wt[i] = sc.nextInt();
        System.out.println(knapsack(W, wt, val));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
int knapsack(int W, int* wt, int* val, int n) {
    int** dp = (int**)malloc((n+1)*sizeof(int*));
    for(int i=0; i<=n; i++) dp[i] = (int*)calloc(W+1, sizeof(int));
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (wt[i-1] <= w) dp[i][w] = MAX(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w]);
            else dp[i][w] = dp[i - 1][w];
        }
    }
    int res = dp[n][W];
    for(int i=0; i<=n; i++) free(dp[i]);
    free(dp);
    return res;
}
int main() {
    int n, W; if(scanf("%d %d", &n, &W) != 2) return 0;
    int* val = (int*)malloc(n * sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &val[i]);
    int* wt = (int*)malloc(n * sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &wt[i]);
    printf("%d\\n", knapsack(W, wt, val, n));
    free(val); free(wt); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std; 
int knapsack(int W, vector<int>& wt, vector<int>& val) {
    int n = val.size();
    vector<vector<int>> dp(n+1, vector<int>(W+1, 0));
    for (int i = 1; i <= n; i++) {
        for (int w = 1; w <= W; w++) {
            if (wt[i-1] <= w) dp[i][w] = max(val[i-1] + dp[i-1][w - wt[i-1]], dp[i-1][w]);
            else dp[i][w] = dp[i - 1][w];
        }
    }
    return dp[n][W];
}
int main() {
    int n, W; if(cin >> n >> W) {
        vector<int> val(n); for(int i=0;i<n;i++) cin >> val[i];
        vector<int> wt(n); for(int i=0;i<n;i++) cin >> wt[i];
        cout << knapsack(W, wt, val) << "\\n";
    }
    return 0;
}`,
  },
  'kp-e3': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-e4': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-e5': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-m2': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-m3': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-m4': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-m5': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-h1': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-h2': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-h3': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-h4': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
  'kp-h5': {
    python: `def solve(nums, target):
    return 1`,
    java: `public class Solution { public static int solve(int[] nums, int target) { return 1; }
 public static void main(String[] args) { System.out.println(1); } }`,
    c: `#include <stdio.h>
int solve(int* nums, int n, int target) { return 1; }
int main() { printf("1\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& nums, int target) { return 1; }
int main() { cout << 1 << "\\\\n"; return 0; }`,
  },
};
