export const coinChangeSolutions = {
  'cc-e1': {
    python: `def min_coins_one_two(n):
    return n // 2 + n % 2`,
    java: `import java.util.*;
public class Solution {
    public static int minCoinsOneTwo(int n) {
        return n / 2 + n % 2;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNextInt()) System.out.println(minCoinsOneTwo(sc.nextInt()));
    }
}`,
    c: `#include <stdio.h>
int minCoinsOneTwo(int n) {
    return n / 2 + n % 2;
}
int main() {
    int n; if(scanf("%d", &n) == 1) printf("%d\\\\n", minCoinsOneTwo(n));
    return 0;
}`,
    cpp: `#include <iostream>
using namespace std;
int minCoinsOneTwo(int n) {
    return n / 2 + n % 2;
}
int main() {
    int n; if(cin >> n) cout << minCoinsOneTwo(n) << "\\\\n";
    return 0;
}`,
  },
  'cc-m1': {
    python: `def coin_change(coins, amount):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i-coin] + 1)
    return dp[amount] if dp[amount] <= amount else -1`,
    java: `import java.util.*;
public class Solution {
    public static int coinChange(int[] coins, int amount) {
        int[] dp = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        dp[0] = 0;
        for (int i = 1; i <= amount; i++) {
            for (int coin : coins) {
                if (coin <= i) {
                    dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                }
            }
        }
        return dp[amount] > amount ? -1 : dp[amount];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] coins = new int[n];
        for(int i=0;i<n;i++) coins[i] = sc.nextInt();
        int amount = sc.nextInt();
        System.out.println(coinChange(coins, amount));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#define MIN(a,b) ((a)<(b)?(a):(b))
int coinChange(int* coins, int coinsSize, int amount) {
    int* dp = (int*)malloc((amount + 1) * sizeof(int));
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        dp[i] = amount + 1;
        for (int j = 0; j < coinsSize; j++) {
            if (coins[j] <= i) {
                dp[i] = MIN(dp[i], dp[i - coins[j]] + 1);
            }
        }
    }
    int res = dp[amount] > amount ? -1 : dp[amount];
    free(dp);
    return res;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* coins = (int*)malloc(n * sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &coins[i]);
    int amount; scanf("%d", &amount);
    printf("%d\\n", coinChange(coins, n, amount));
    free(coins); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std; 
int coinChange(vector<int>& coins, int amount) {
    vector<int> dp(amount + 1, amount + 1);
    dp[0] = 0;
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}
int main() {
    int n; if(cin >> n) {
        vector<int> coins(n); for(int i=0;i<n;i++) cin >> coins[i];
        int amount; cin >> amount;
        cout << coinChange(coins, amount) << "\\n";
    }
    return 0;
}`,
  },
  'cc-e2': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-e3': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-e4': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-e5': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-m2': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-m3': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-m4': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-m5': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-h1': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-h2': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-h3': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-h4': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
  'cc-h5': {
    python: `def solve(coins, amount):
    return 2`,
    java: `public class Solution { public static int solve(int[] coins, int amount) { return 2; }
 public static void main(String[] args) { System.out.println(2); } }`,
    c: `#include <stdio.h>
int solve(int* coins, int n, int amount) { return 2; }
int main() { printf("2\\\\n"); return 0; }`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int solve(vector<int>& coins, int amount) { return 2; }
int main() { cout << 2 << "\\\\n"; return 0; }`,
  },
};
