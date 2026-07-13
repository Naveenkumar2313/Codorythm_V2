export const coinChangeCodeSnippets = {
    c: `#include <stdio.h>

int coinChange(int coins[], int coinsSize, int amount) {
    int dp[amount + 1];
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        dp[i] = amount + 1;
        for (int j = 0; j < coinsSize; j++) {
            if (coins[j] <= i) {
                int sub = dp[i - coins[j]];
                if (sub != amount + 1 && sub + 1 < dp[i]) {
                    dp[i] = sub + 1;
                }
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}

int main() {
    int coins[] = {1, 2, 5};
    int size = sizeof(coins) / sizeof(coins[0]);
    int amount = 11;
    printf("Min coins needed: %d\\n", coinChange(coins, size, amount));
    return 0;
}
`,

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
    vector<int> coins = {1, 2, 5};
    int amount = 11;
    cout << "Min coins needed: " << coinChange(coins, amount) << endl;
    return 0;
}
`,

    python: `def coin_change(coins, amount):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin <= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
                
    return dp[amount] if dp[amount] <= amount else -1

if __name__ == "__main__":
    coins = [1, 2, 5]
    amount = 11
    print(f"Min coins needed: {coin_change(coins, amount)}")
`,

    java: `import java.util.*;

public class CoinChangeExample {
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
        int[] coins = {1, 2, 5};
        int amount = 11;
        System.out.println("Min coins needed: " + coinChange(coins, amount));
    }
}
`
};
