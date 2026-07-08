export const editDistanceSolutions={
    'ed-e1': {
  python: `def min_edit_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1]
                )
    return dp[m][n]

word1 = input().strip()
word2 = input().strip()
print(min_edit_distance(word1, word2))`,
  java: `import java.util.*;

public class Main {
    public static int minEditDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],
                        Math.min(dp[i][j - 1], dp[i - 1][j - 1])
                    );
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(minEditDistance(word1, word2));
    }
}`,  c: `#include <stdio.h>
#include <string.h>

int minEditDistance(char word1[], char word2[]) {
    int m = strlen(word1);
    int n = strlen(word2);
    int dp[m + 1][n + 1];
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                int a = dp[i - 1][j];
                int b = dp[i][j - 1];
                int c = dp[i - 1][j - 1];
                int min = a;
                if (b < min) min = b;
                if (c < min) min = c;
                dp[i][j] = 1 + min;
            }
        }
    }
    return dp[m][n];
}

int main() {
    char word1[505], word2[505];
    scanf("%s", word1);
    scanf("%s", word2);
    printf("%d\n", minEditDistance(word1, word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

int minEditDistance(string word1, string word2) {
    int m = word1.size();
    int n = word2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1]));
            }
        }
    }
    return dp[m][n];
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1, word2;
    cin >> word1 >> word2;
    cout << minEditDistance(word1, word2) << "\n";
    return 0;
}`
},'ed-e2': {
  python: `def one_edit_apart(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1]
                )
    return dp[m][n] == 1

word1 = input().strip()
word2 = input().strip()
print(str(one_edit_apart(word1, word2)).lower())`,
  java: `import java.util.*;
public class Main {
    public static boolean oneEditApart(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],
                        Math.min(dp[i][j - 1], dp[i - 1][j - 1])
                    );
                }
            }
        }
        return dp[m][n] == 1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(oneEditApart(word1, word2));
    }
}`,  c: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>
bool oneEditApart(char word1[], char word2[]) {
    int m = strlen(word1);
    int n = strlen(word2);
    int dp[m + 1][n + 1];
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                int a = dp[i - 1][j];
                int b = dp[i][j - 1];
                int c = dp[i - 1][j - 1];
                int min = a;
                if (b < min) min = b;
                if (c < min) min = c;
                dp[i][j] = 1 + min;
            }
        }
    }
    return dp[m][n] == 1;
}

int main() {
    char word1[505], word2[505];
    scanf("%s", word1);
    scanf("%s", word2);
    printf("%s\n", oneEditApart(word1, word2) ? "true" : "false");
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

bool oneEditApart(string word1, string word2) {
    int m = word1.size();
    int n = word2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1]));
            }
        }
    }
    return dp[m][n] == 1;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1, word2;
    cin >> word1 >> word2;
    cout << (oneEditApart(word1, word2) ? "true" : "false") << "\n";
    return 0;
}`
},'ed-e3': {
  python: `def edit_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(
                    dp[i - 1][j],
                    dp[i][j - 1],
                    dp[i - 1][j - 1]
                )
    return dp[m][n]

word1 = input().strip()
word2 = input().strip()
print(edit_distance(word1, word2))`,
  java: `import java.util.*;

public class Main {
    public static int editDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],
                        Math.min(dp[i][j - 1], dp[i - 1][j - 1])
                    );
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(editDistance(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int editDistance(char word1[], char word2[]) {
    int m = strlen(word1);
    int n = strlen(word2);
    int dp[m + 1][n + 1];
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                int a = dp[i - 1][j];
                int b = dp[i][j - 1];
                int c = dp[i - 1][j - 1];
                int min = a;
                if (b < min) min = b;
                if (c < min) min = c;
                dp[i][j] = 1 + min;
            }
        }
    }
    return dp[m][n];
}

int main() {
    char word1[505], word2[505];
    scanf("%s", word1);
    scanf("%s", word2);
    printf("%d\n", editDistance(word1, word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

int editDistance(string word1, string word2) {
    int m = word1.size();
    int n = word2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1]));
            }
        }
    }
    return dp[m][n];
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1, word2;
    cin >> word1 >> word2;
    cout << editDistance(word1, word2) << "\n";
    return 0;
}`
},'ed-e4': {
  python: `def convert_empty(word1, word2):
    return len(word2)

word1 = input()
word2 = input()
print(convert_empty(word1, word2))`,
  java: `import java.util.*;
public class Main {
    public static int convertEmpty(String word1, String word2) {
        return word2.length();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(convertEmpty(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int convertEmpty(char word1[], char word2[]) {
    return strlen(word2);
}

int main() {
    char word1[505], word2[505];
    fgets(word1, sizeof(word1), stdin);
    fgets(word2, sizeof(word2), stdin);
    word1[strcspn(word1, "\n")] = '\0';
    word2[strcspn(word2, "\n")] = '\0';
    printf("%d\n", convertEmpty(word1, word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <string>

using namespace std;

int convertEmpty(string word1, string word2) {
    return word2.length();
}

int main() {
    string word1, word2;
    getline(cin, word1);
    getline(cin, word2);
    cout << convertEmpty(word1, word2) << "\n";
    return 0;
}`
},'ed-e5': {
  python: `def insert_delete_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + 1
    return dp[m][n]

word1 = input().strip()
word2 = input().strip()
print(insert_delete_distance(word1, word2))`,
  java: `import java.util.*;
public class Main {
    public static int insertDeleteDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(insertDeleteDistance(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int insertDeleteDistance(char word1[], char word2[]) {
    int m = strlen(word1);
    int n = strlen(word2);
    int dp[m + 1][n + 1];
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                int min = dp[i - 1][j];
                if (dp[i][j - 1] < min) min = dp[i][j - 1];
                dp[i][j] = min + 1;
            }
        }
    }
    return dp[m][n];
}

int main() {
    char word1[505], word2[505];
    scanf("%s", word1);
    scanf("%s", word2);
    printf("%d\n", insertDeleteDistance(word1, word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

int insertDeleteDistance(string word1, string word2) {
    int m = word1.size();
    int n = word2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }
    return dp[m][n];
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1, word2;
    cin >> word1 >> word2;
    cout << insertDeleteDistance(word1, word2) << "\n";
    return 0;
}`
},'ed-m1': {
  python: `def edit_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    return dp[m][n]

word1 = input().strip()
word2 = input().strip()
print(edit_distance(word1, word2))`,
  java: `import java.util.*;
public class Main {
    public static int editDistance(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(editDistance(word1, word2));
    }
}`,  c: `#include <stdio.h>
#include <string.h>
int editDistance(char word1[], char word2[]) {
    int m = strlen(word1);
    int n = strlen(word2);
    int dp[m + 1][n + 1];
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                int a = dp[i - 1][j];
                int b = dp[i][j - 1];
                int c = dp[i - 1][j - 1];
                int min = a;
                if (b < min) min = b;
                if (c < min) min = c;
                dp[i][j] = min + 1;
            }
        }
    }
    return dp[m][n];
}

int main() {
    char word1[505], word2[505];
    scanf("%s", word1);
    scanf("%s", word2);
    printf("%d\n", editDistance(word1, word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

int editDistance(string word1, string word2) {
    int m = word1.size();
    int n = word2.size();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i - 1] == word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + min(dp[i - 1][j], min(dp[i][j - 1], dp[i - 1][j - 1]));
            }
        }
    }
    return dp[m][n];
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1, word2;
    cin >> word1 >> word2;
    cout << editDistance(word1, word2) << "\n";
    return 0;
}`
},'ed-m2': {
  python: `def min_deletions(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    lcs = dp[m][n]
    return m + n - 2 * lcs

word1 = input().strip()
word2 = input().strip()
print(min_deletions(word1, word2))`,
  java: `import java.util.*;
public class Main {
    public static int minDeletions(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return m + n - 2 * dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(minDeletions(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int max(int a,int b){
    return a>b?a:b;
}

int minDeletions(char word1[],char word2[]){
    int m=strlen(word1);
    int n=strlen(word2);
    int dp[m+1][n+1];
    for(int i=0;i<=m;i++)
        for(int j=0;j<=n;j++)
            dp[i][j]=0;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1]+1;
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return m+n-2*dp[m][n];
}

int main(){
    char word1[505],word2[505];
    scanf("%s",word1);
    scanf("%s",word2);
    printf("%d\n",minDeletions(word1,word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>

using namespace std;

int minDeletions(string word1,string word2){
    int m=word1.size();
    int n=word2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1,0));
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1]+1;
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return m+n-2*dp[m][n];
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1,word2;
    cin>>word1>>word2;
    cout<<minDeletions(word1,word2)<<"\n";
    return 0;
}`
},'ed-m3': {
  python: `def one_edit_away(word1, word2):
    m, n = len(word1), len(word2)
    if abs(m - n) > 1:
        return False
    if m > n:
        return one_edit_away(word2, word1)
    i = j = 0
    found = False
    while i < m and j < n:
        if word1[i] != word2[j]:
            if found:
                return False
            found = True
            if m == n:
                i += 1
        else:
            i += 1
        j += 1
    return True

word1 = input().strip()
word2 = input().strip()
print(str(one_edit_away(word1, word2)).lower())`,
  java: `import java.util.*;
public class Main {
    public static boolean oneEditAway(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        if (Math.abs(m - n) > 1) return false;
        if (m > n) return oneEditAway(word2, word1);
        int i = 0, j = 0;
        boolean found = false;
        while (i < m && j < n) {
            if (word1.charAt(i) != word2.charAt(j)) {
                if (found) return false;
                found = true;
                if (m == n) i++;
            } else {
                i++;
            }
            j++;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(oneEditAway(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#include <stdlib.h>
bool oneEditAway(char word1[], char word2[]) {
    int m = strlen(word1), n = strlen(word2);
    if (abs(m - n) > 1) return false;
    if (m > n) return oneEditAway(word2, word1);
    int i = 0, j = 0;
    bool found = false;
    while (i < m && j < n) {
        if (word1[i] != word2[j]) {
            if (found) return false;
            found = true;
            if (m == n) i++;
        } else {
            i++;
        }
        j++;
    }
    return true;
}

int main() {
    char word1[505], word2[505];
    scanf("%s", word1);
    scanf("%s", word2);
    printf("%s\n", oneEditAway(word1, word2) ? "true" : "false");
    return 0;
}`,
  cpp: `#include <iostream>
#include <string>
#include <cmath>

using namespace std;

bool oneEditAway(string word1, string word2) {
    int m = word1.size(), n = word2.size();
    if (abs(m - n) > 1) return false;
    if (m > n) return oneEditAway(word2, word1);
    int i = 0, j = 0;
    bool found = false;
    while (i < m && j < n) {
        if (word1[i] != word2[j]) {
            if (found) return false;
            found = true;
            if (m == n) i++;
        } else {
            i++;
        }
        j++;
    }
    return true;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1, word2;
    cin >> word1 >> word2;
    cout << (oneEditAway(word1, word2) ? "true" : "false") << "\n";
    return 0;
}`
},'ed-m4': {
  python: `def weighted_edit_distance(word1, word2, ins, dele, rep):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i * dele
    for j in range(n + 1):
        dp[0][j] = j * ins
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = min(
                    dp[i - 1][j] + dele,
                    dp[i][j - 1] + ins,
                    dp[i - 1][j - 1] + rep
                )
    return dp[m][n]

word1 = input().strip()
word2 = input().strip()
ins, dele, rep = map(int, input().split())
print(weighted_edit_distance(word1, word2, ins, dele, rep))`,
  java: `import java.util.*;
public class Main {
    public static int weightedEditDistance(String word1, String word2, int ins, int del, int rep) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i * del;
        for (int j = 0; j <= n; j++) dp[0][j] = j * ins;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.min(
                        dp[i - 1][j] + del,
                        Math.min(dp[i][j - 1] + ins, dp[i - 1][j - 1] + rep)
                    );
                }
            }
        }
        return dp[m][n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        int ins = sc.nextInt();
        int del = sc.nextInt();
        int rep = sc.nextInt();
        System.out.println(weightedEditDistance(word1, word2, ins, del, rep));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>
int min3(int a,int b,int c){
    int m=a;
    if(b<m) m=b;
    if(c<m) m=c;
    return m;
}
int weightedEditDistance(char word1[],char word2[],int ins,int del,int rep){
    int m=strlen(word1);
    int n=strlen(word2);
    int dp[m+1][n+1];
    for(int i=0;i<=m;i++) dp[i][0]=i*del;
    for(int j=0;j<=n;j++) dp[0][j]=j*ins;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=min3(dp[i-1][j]+del,dp[i][j-1]+ins,dp[i-1][j-1]+rep);
        }
    }
    return dp[m][n];
}
int main(){
    char word1[305],word2[305];
    int ins,del,rep;
    scanf("%s",word1);
    scanf("%s",word2);
    scanf("%d%d%d",&ins,&del,&rep);
    printf("%d\n",weightedEditDistance(word1,word2,ins,del,rep));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
using namespace std;
int weightedEditDistance(string word1,string word2,int ins,int del,int rep){
    int m=word1.size();
    int n=word2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1));
    for(int i=0;i<=m;i++) dp[i][0]=i*del;
    for(int j=0;j<=n;j++) dp[0][j]=j*ins;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=min({dp[i-1][j]+del,dp[i][j-1]+ins,dp[i-1][j-1]+rep});
        }
    }
    return dp[m][n];
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1,word2;
    int ins,del,rep;
    cin>>word1>>word2>>ins>>del>>rep;
    cout<<weightedEditDistance(word1,word2,ins,del,rep)<<"\n";
    return 0;
}`
},'ed-m5': {
  python: `def minimum_operations(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1])
    return dp[m][n]

word1 = input().strip()
word2 = input().strip()
print(minimum_operations(word1, word2))`,
  java: `import java.util.*;
public class Main {
    public static int minimumOperations(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1]));
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(minimumOperations(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int min3(int a,int b,int c){
    int m=a;
    if(b<m) m=b;
    if(c<m) m=c;
    return m;
}

int minimumOperations(char word1[],char word2[]){
    int m=strlen(word1);
    int n=strlen(word2);
    int dp[m+1][n+1];
    for(int i=0;i<=m;i++) dp[i][0]=i;
    for(int j=0;j<=n;j++) dp[0][j]=j;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=1+min3(dp[i-1][j],dp[i][j-1],dp[i-1][j-1]);
        }
    }
    return dp[m][n];
}

int main(){
    char word1[505],word2[505];
    scanf("%s",word1);
    scanf("%s",word2);
    printf("%d\n",minimumOperations(word1,word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int minimumOperations(string word1,string word2){
    int m=word1.size();
    int n=word2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1));
    for(int i=0;i<=m;i++) dp[i][0]=i;
    for(int j=0;j<=n;j++) dp[0][j]=j;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=1+min({dp[i-1][j],dp[i][j-1],dp[i-1][j-1]});
        }
    }
    return dp[m][n];
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1,word2;
    cin>>word1>>word2;
    cout<<minimumOperations(word1,word2)<<"\n";
    return 0;
}`
},'ed-h1': {
  python: `def weighted_edit_distance(word1, word2, ins, dele, rep):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i * dele
    for j in range(n + 1):
        dp[0][j] = j * ins
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = min(
                    dp[i - 1][j] + dele,
                    dp[i][j - 1] + ins,
                    dp[i - 1][j - 1] + rep
                )
    return dp[m][n]

word1 = input().strip()
word2 = input().strip()
ins, dele, rep = map(int, input().split())
print(weighted_edit_distance(word1, word2, ins, dele, rep))`,
  java: `import java.util.*;

public class Main {
    public static int weightedEditDistance(String word1, String word2, int ins, int del, int rep) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i * del;
        for (int j = 0; j <= n; j++) dp[0][j] = j * ins;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1];
                else
                    dp[i][j] = Math.min(dp[i - 1][j] + del,
                            Math.min(dp[i][j - 1] + ins, dp[i - 1][j - 1] + rep));
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        int ins = sc.nextInt();
        int del = sc.nextInt();
        int rep = sc.nextInt();
        System.out.println(weightedEditDistance(word1, word2, ins, del, rep));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int min3(int a,int b,int c){
    int m=a;
    if(b<m)m=b;
    if(c<m)m=c;
    return m;
}

int weightedEditDistance(char word1[],char word2[],int ins,int del,int rep){
    int m=strlen(word1),n=strlen(word2);
    int dp[m+1][n+1];
    for(int i=0;i<=m;i++)dp[i][0]=i*del;
    for(int j=0;j<=n;j++)dp[0][j]=j*ins;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=min3(dp[i-1][j]+del,dp[i][j-1]+ins,dp[i-1][j-1]+rep);
        }
    }
    return dp[m][n];
}

int main(){
    char word1[1005],word2[1005];
    int ins,del,rep;
    scanf("%s",word1);
    scanf("%s",word2);
    scanf("%d%d%d",&ins,&del,&rep);
    printf("%d\n",weightedEditDistance(word1,word2,ins,del,rep));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int weightedEditDistance(string word1,string word2,int ins,int del,int rep){
    int m=word1.size(),n=word2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1));
    for(int i=0;i<=m;i++)dp[i][0]=i*del;
    for(int j=0;j<=n;j++)dp[0][j]=j*ins;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1];
            else
                dp[i][j]=min({dp[i-1][j]+del,dp[i][j-1]+ins,dp[i-1][j-1]+rep});
        }
    }
    return dp[m][n];
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1,word2;
    int ins,del,rep;
    cin>>word1>>word2>>ins>>del>>rep;
    cout<<weightedEditDistance(word1,word2,ins,del,rep)<<"\n";
    return 0;
}`
},'ed-h2': {
  python: `def transposition_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            cost = 0 if word1[i - 1] == word2[j - 1] else 1
            dp[i][j] = min(
                dp[i - 1][j] + 1,
                dp[i][j - 1] + 1,
                dp[i - 1][j - 1] + cost
            )
            if i > 1 and j > 1 and word1[i - 1] == word2[j - 2] and word1[i - 2] == word2[j - 1]:
                dp[i][j] = min(dp[i][j], dp[i - 2][j - 2] + 1)
    return dp[m][n]

word1 = input().strip()
word2 = input().strip()
print(transposition_distance(word1, word2))`,
  java: `import java.util.*;
public class Main {
    public static int transpositionDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                int cost = word1.charAt(i - 1) == word2.charAt(j - 1) ? 0 : 1;
                dp[i][j] = Math.min(dp[i - 1][j] + 1,
                        Math.min(dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost));
                if (i > 1 && j > 1 &&
                    word1.charAt(i - 1) == word2.charAt(j - 2) &&
                    word1.charAt(i - 2) == word2.charAt(j - 1)) {
                    dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + 1);
                }
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(transpositionDistance(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int min(int a,int b){return a<b?a:b;}
int min3(int a,int b,int c){return min(min(a,b),c);}

int transpositionDistance(char word1[],char word2[]){
    int m=strlen(word1),n=strlen(word2);
    int dp[m+1][n+1];
    for(int i=0;i<=m;i++)dp[i][0]=i;
    for(int j=0;j<=n;j++)dp[0][j]=j;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            int cost=(word1[i-1]==word2[j-1])?0:1;
            dp[i][j]=min3(dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+cost);
            if(i>1&&j>1&&word1[i-1]==word2[j-2]&&word1[i-2]==word2[j-1]){
                if(dp[i-2][j-2]+1<dp[i][j])
                    dp[i][j]=dp[i-2][j-2]+1;
            }
        }
    }
    return dp[m][n];
}

int main(){
    char word1[1005],word2[1005];
    scanf("%s",word1);
    scanf("%s",word2);
    printf("%d\n",transpositionDistance(word1,word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int transpositionDistance(string word1,string word2){
    int m=word1.size(),n=word2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1));
    for(int i=0;i<=m;i++)dp[i][0]=i;
    for(int j=0;j<=n;j++)dp[0][j]=j;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            int cost=(word1[i-1]==word2[j-1])?0:1;
            dp[i][j]=min({dp[i-1][j]+1,dp[i][j-1]+1,dp[i-1][j-1]+cost});
            if(i>1&&j>1&&word1[i-1]==word2[j-2]&&word1[i-2]==word2[j-1]){
                dp[i][j]=min(dp[i][j],dp[i-2][j-2]+1);
            }
        }
    }
    return dp[m][n];
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1,word2;
    cin>>word1>>word2;
    cout<<transpositionDistance(word1,word2)<<"\n";
    return 0;
}`
},'ed-h3': {
  python: `def minimum_ascii_delete_sum(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(m - 1, -1, -1):
        dp[i][n] = dp[i + 1][n] + ord(word1[i])
    for j in range(n - 1, -1, -1):
        dp[m][j] = dp[m][j + 1] + ord(word2[j])
    for i in range(m - 1, -1, -1):
        for j in range(n - 1, -1, -1):
            if word1[i] == word2[j]:
                dp[i][j] = dp[i + 1][j + 1]
            else:
                dp[i][j] = min(dp[i + 1][j] + ord(word1[i]), dp[i][j + 1] + ord(word2[j]))
    return dp[0][0]

word1 = input().strip()
word2 = input().strip()
print(minimum_ascii_delete_sum(word1, word2))`,
  java: `import java.util.*;
public class Main {
    public static int minimumASCIIDeleteSum(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = m - 1; i >= 0; i--)
            dp[i][n] = dp[i + 1][n] + word1.charAt(i);
        for (int j = n - 1; j >= 0; j--)
            dp[m][j] = dp[m][j + 1] + word2.charAt(j);
        for (int i = m - 1; i >= 0; i--) {
            for (int j = n - 1; j >= 0; j--) {
                if (word1.charAt(i) == word2.charAt(j))
                    dp[i][j] = dp[i + 1][j + 1];
                else
                    dp[i][j] = Math.min(dp[i + 1][j] + word1.charAt(i), dp[i][j + 1] + word2.charAt(j));
            }
        }
        return dp[0][0];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(minimumASCIIDeleteSum(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>
int min(int a,int b){
    return a<b?a:b;
}
int minimumASCIIDeleteSum(char word1[],char word2[]){
    int m=strlen(word1),n=strlen(word2);
    int dp[m+1][n+1];
    dp[m][n]=0;
    for(int i=m-1;i>=0;i--)
        dp[i][n]=dp[i+1][n]+word1[i];
    for(int j=n-1;j>=0;j--)
        dp[m][j]=dp[m][j+1]+word2[j];
    for(int i=m-1;i>=0;i--){
        for(int j=n-1;j>=0;j--){
            if(word1[i]==word2[j])
                dp[i][j]=dp[i+1][j+1];
            else
                dp[i][j]=min(dp[i+1][j]+word1[i],dp[i][j+1]+word2[j]);
        }
    }
    return dp[0][0];
}
int main(){
    char word1[1005],word2[1005];
    scanf("%s",word1);
    scanf("%s",word2);
    printf("%d\n",minimumASCIIDeleteSum(word1,word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int minimumASCIIDeleteSum(string word1,string word2){
    int m=word1.size(),n=word2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1));
    for(int i=m-1;i>=0;i--)
        dp[i][n]=dp[i+1][n]+word1[i];
    for(int j=n-1;j>=0;j--)
        dp[m][j]=dp[m][j+1]+word2[j];
    for(int i=m-1;i>=0;i--){
        for(int j=n-1;j>=0;j--){
            if(word1[i]==word2[j])
                dp[i][j]=dp[i+1][j+1];
            else
                dp[i][j]=min(dp[i+1][j]+word1[i],dp[i][j+1]+word2[j]);
        }
    }
    return dp[0][0];
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1,word2;
    cin>>word1>>word2;
    cout<<minimumASCIIDeleteSum(word1,word2)<<"\n";
    return 0;
}`
},'ed-h4': {
  python: `def lcs_length(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return dp[m][n]

word1 = input().strip()
word2 = input().strip()
print(lcs_length(word1, word2))`,
  java: `import java.util.*;
public class Main {
    public static int lcsLength(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(lcsLength(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int max(int a,int b){
    return a>b?a:b;
}

int lcsLength(char word1[],char word2[]){
    int m=strlen(word1),n=strlen(word2);
    int dp[m+1][n+1];
    for(int i=0;i<=m;i++)
        for(int j=0;j<=n;j++)
            dp[i][j]=0;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1]+1;
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return dp[m][n];
}

int main(){
    char word1[1005],word2[1005];
    scanf("%s",word1);
    scanf("%s",word2);
    printf("%d\n",lcsLength(word1,word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int lcsLength(string word1,string word2){
    int m=word1.size(),n=word2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1,0));
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1]+1;
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return dp[m][n];
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1,word2;
    cin>>word1>>word2;
    cout<<lcsLength(word1,word2)<<"\n";
    return 0;
}`
},'ed-h5': {
  python: `def shortest_common_supersequence_length(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    return m + n - dp[m][n]

word1 = input().strip()
word2 = input().strip()
print(shortest_common_supersequence_length(word1, word2))`,
  java: `import java.util.*;
public class Main{
    public static int shortestCommonSupersequenceLength(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        int[][] dp = new int[m + 1][n + 1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i - 1) == word2.charAt(j - 1))
                    dp[i][j] = dp[i - 1][j - 1] + 1;
                else
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
        return m + n - dp[m][n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String word1 = sc.nextLine();
        String word2 = sc.nextLine();
        System.out.println(shortestCommonSupersequenceLength(word1, word2));
    }
}`,
  c: `#include <stdio.h>
#include <string.h>

int max(int a,int b){
    return a>b?a:b;
}

int shortestCommonSupersequenceLength(char word1[],char word2[]){
    int m=strlen(word1),n=strlen(word2);
    int dp[m+1][n+1];
    for(int i=0;i<=m;i++)
        for(int j=0;j<=n;j++)
            dp[i][j]=0;
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1]+1;
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return m+n-dp[m][n];
}

int main(){
    char word1[1005],word2[1005];
    scanf("%s",word1);
    scanf("%s",word2);
    printf("%d\n",shortestCommonSupersequenceLength(word1,word2));
    return 0;
}`,
  cpp: `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

int shortestCommonSupersequenceLength(string word1,string word2){
    int m=word1.size(),n=word2.size();
    vector<vector<int>> dp(m+1,vector<int>(n+1,0));
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(word1[i-1]==word2[j-1])
                dp[i][j]=dp[i-1][j-1]+1;
            else
                dp[i][j]=max(dp[i-1][j],dp[i][j-1]);
        }
    }
    return m+n-dp[m][n];
}

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    string word1,word2;
    cin>>word1>>word2;
    cout<<shortestCommonSupersequenceLength(word1,word2)<<"\n";
    return 0;
}`
},
};