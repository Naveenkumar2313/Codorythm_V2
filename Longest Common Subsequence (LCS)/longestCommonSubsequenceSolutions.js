export const longestCommonSubsequenceSolutions = {
  'lcs-e1': {
    python: `def is_subsequence(s, t):
    i, j = 0, 0
    while i < len(s) and j < len(t):
        if s[i] == t[j]:
            i += 1
        j += 1
    return i == len(s)`,
    java: `import java.util.*;
public class Solution {
    public static boolean isSubsequence(String s, String t) {
        int i = 0, j = 0;
        while (i < s.length() && j < t.length()) {
            if (s.charAt(i) == t.charAt(j)) i++;
            j++;
        }
        return i == s.length();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.hasNext() ? sc.next() : "";
        String t = sc.hasNext() ? sc.next() : "";
        System.out.println(isSubsequence(s, t));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>
bool isSubsequence(char* s, char* t) {
    int i = 0, j = 0;
    int len_s = strlen(s), len_t = strlen(t);
    while(i < len_s && j < len_t) {
        if(s[i] == t[j]) i++;
        j++;
    }
    return i == len_s;
}
int main() {
    char s[1000] = "", t[10000] = "";
    if(scanf("%s %s", s, t) == 2) {
        printf("%s\\n", isSubsequence(s, t) ? "true" : "false");
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;
bool isSubsequence(string s, string t) {
    int i = 0, j = 0;
    while(i < s.length() && j < t.length()) {
        if(s[i] == t[j]) i++;
        j++;
    }
    return i == s.length();
}
int main() {
    string s, t;
    if(cin >> s >> t) {
        cout << (isSubsequence(s, t) ? "true" : "false") << "\\n";
    }
    return 0;
}`,
  },
  'lcs-e2': {
    python: `def longest_common_prefix(strs):
    if not strs: return ''
    pref = strs[0]
    for s in strs[1:]:
        while not s.startswith(pref):
            pref = pref[:-1]
            if not pref: return ''
    return pref`,
    java: `import java.util.*;
public class Solution {
    public static String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        String pref = strs[0];
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(pref) != 0) {
                pref = pref.substring(0, pref.length() - 1);
                if (pref.isEmpty()) return "";
            }
        }
        return pref;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] strs = new String[n];
        for(int i=0;i<n;i++) strs[i] = sc.next();
        System.out.println(longestCommonPrefix(strs));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>
char* longestCommonPrefix(char** strs, int strsSize) {
    if (strsSize == 0) return "";
    char* pref = (char*)malloc(250);
    strcpy(pref, strs[0]);
    for (int i = 1; i < strsSize; i++) {
        int j = 0;
        while (pref[j] && strs[i][j] && pref[j] == strs[i][j]) j++;
        pref[j] = '\\0';
    }
    return pref;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    char** strs = (char**)malloc(n * sizeof(char*));
    for(int i=0;i<n;i++) { strs[i] = (char*)malloc(250); scanf("%s", strs[i]); }
    printf("%s\\n", longestCommonPrefix(strs, n));
    for(int i=0;i<n;i++) free(strs[i]);
    free(strs); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std; 
string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) return "";
    string pref = strs[0];
    for (size_t i = 1; i < strs.size(); i++) {
        while (strs[i].find(pref) != 0) {
            pref = pref.substr(0, pref.length() - 1);
            if (pref.empty()) return "";
        }
    }
    return pref;
}
int main() {
    int n; if(cin >> n) {
        vector<string> strs(n); for(int i=0;i<n;i++) cin >> strs[i];
        cout << longestCommonPrefix(strs) << "\\n";
    }
    return 0;
}`,
  },
  'lcs-e3': {
    python: `def easy_lcs(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1]+1
            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]`,
    java: `import java.util.*;
public class Solution {
    public static int easyLCS(String s1, String s2) {
        int m=s1.length(), n=s2.length();
        int[][] dp = new int[m+1][n+1];
        for(int i=1;i<=m;i++){
            for(int j=1;j<=n;j++){
                if(s1.charAt(i-1) == s2.charAt(j-1)) dp[i][j] = dp[i-1][j-1]+1;
                else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        return dp[m][n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(easyLCS(sc.next(), sc.next()));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
int easyLCS(char* s1, char* s2) {
    int m=strlen(s1), n=strlen(s2);
    int dp[15][15] = {0};
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1]+1;
            else dp[i][j] = MAX(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}
int main() {
    char s1[15], s2[15];
    if(scanf("%s %s", s1, s2) == 2) printf("%d\\n", easyLCS(s1, s2));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
int easyLCS(string s1, string s2) {
    int m = s1.length(), n = s2.length();
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
    for(int i=1;i<=m;i++){
        for(int j=1;j<=n;j++){
            if(s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1]+1;
            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}
int main() {
    string s1, s2; if(cin >> s1 >> s2) cout << easyLCS(s1, s2) << "\\n";
    return 0;
}`,
  },
  'lcs-e4': {
    python: `def at_least_one(s1, s2):
    return len(set(s1) & set(s2)) > 0`,
    java: `import java.util.*;
public class Solution {
    public static boolean atLeastOne(String s1, String s2) {
        Set<Character> set = new HashSet<>();
        for(char c : s1.toCharArray()) set.add(c);
        for(char c : s2.toCharArray()) if(set.contains(c)) return true;
        return false;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(atLeastOne(sc.next(), sc.next()));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>
bool atLeastOne(char* s1, char* s2) {
    int map[256] = {0};
    for(int i=0; s1[i]; i++) map[(unsigned char)s1[i]] = 1;
    for(int i=0; s2[i]; i++) if(map[(unsigned char)s2[i]]) return true;
    return false;
}
int main() {
    char s1[200], s2[200];
    if(scanf("%s %s", s1, s2) == 2) printf("%s\\n", atLeastOne(s1, s2) ? "true":"false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;
bool atLeastOne(string s1, string s2) {
    unordered_set<char> s(s1.begin(), s1.end());
    for(char c : s2) if(s.count(c)) return true;
    return false;
}
int main() {
    string s1, s2; if(cin >> s1 >> s2) cout << (atLeastOne(s1, s2) ? "true":"false") << "\\n";
    return 0;
}`,
  },
  'lcs-e5': {
    python: `def is_palindrome(s):
    return s == s[::-1]`,
    java: `import java.util.*;
public class Solution {
    public static boolean isPalindrome(String s) {
        int i = 0, j = s.length() - 1;
        while (i < j) {
            if (s.charAt(i) != s.charAt(j)) return false;
            i++; j--;
        }
        return true;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println(isPalindrome(sc.hasNext() ? sc.next() : ""));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>
bool isPalindrome(char* s) {
    int i = 0, j = strlen(s) - 1;
    while(i < j) {
        if (s[i] != s[j]) return false;
        i++; j--;
    }
    return true;
}
int main() {
    char s[100000];
    if(scanf("%s", s) == 1) printf("%s\\n", isPalindrome(s) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std; 
bool isPalindrome(string s) {
    int i = 0, j = s.length() - 1;
    while(i < j) {
        if(s[i] != s[j]) return false;
        i++; j--;
    }
    return true;
}
int main() {
    string s; if(cin >> s) cout << (isPalindrome(s) ? "true":"false") << "\\n";
    return 0;
}`,
  },
  'lcs-m1': {
    python: `def lcs(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if text1[i-1] == text2[j-1]: dp[i][j] = dp[i-1][j-1]+1
            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][n]`,
    java: `import java.util.*;
public class Solution {
    public static int lcs(String text1, String text2) {
        int m = text1.length(), n = text2.length();
        int[][] dp = new int[m+1][n+1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (text1.charAt(i-1) == text2.charAt(j-1)) dp[i][j] = dp[i-1][j-1] + 1;
                else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        return dp[m][n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNext()) {
            System.out.println(lcs(sc.next(), sc.next()));
        }
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
int lcs(char* text1, char* text2) {
    int m = strlen(text1), n = strlen(text2);
    int dp[m+1][n+1];
    for(int i=0; i<=m; i++){
        for(int j=0; j<=n; j++){
            if(i==0 || j==0) dp[i][j] = 0;
            else if(text1[i-1] == text2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = MAX(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}
int main() {
    char s1[1100], s2[1100];
    if(scanf("%s %s", s1, s2) == 2) printf("%d\\n", lcs(s1, s2));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
int lcs(string text1, string text2) {
    int m = text1.length(), n = text2.length();
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (text1[i-1] == text2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}
int main() {
    string s1, s2; if(cin >> s1 >> s2) cout << lcs(s1, s2) << "\\n";
    return 0;
}`,
  },
  'lcs-m2': {
    python: `def lps(s):
    r = s[::-1]
    m = len(s)
    dp = [[0]*(m+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, m+1):
            if s[i-1] == r[j-1]: dp[i][j] = dp[i-1][j-1]+1
            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return dp[m][m]`,
    java: `import java.util.*;
public class Solution {
    public static int lps(String s) {
        String r = new StringBuilder(s).reverse().toString();
        int m = s.length();
        int[][] dp = new int[m+1][m+1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= m; j++) {
                if (s.charAt(i-1) == r.charAt(j-1)) dp[i][j] = dp[i-1][j-1] + 1;
                else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        return dp[m][m];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNext()) System.out.println(lps(sc.next()));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
int lps(char* s) {
    int m = strlen(s);
    char r[m+1];
    for(int i=0; i<m; i++) r[i] = s[m-1-i];
    r[m] = '\\0';
    int dp[m+1][m+1];
    for(int i=0; i<=m; i++){
        for(int j=0; j<=m; j++){
            if(i==0 || j==0) dp[i][j] = 0;
            else if(s[i-1] == r[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = MAX(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][m];
}
int main() {
    char s[1100];
    if(scanf("%s", s) == 1) printf("%d\\n", lps(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int lps(string s) {
    string r = s;
    reverse(r.begin(), r.end());
    int m = s.length();
    vector<vector<int>> dp(m+1, vector<int>(m+1, 0));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= m; j++) {
            if (s[i-1] == r[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][m];
}
int main() {
    string s; if(cin >> s) cout << lps(s) << "\\n";
    return 0;
}`,
  },
  'lcs-m3': {
    python: `def min_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if word1[i-1] == word2[j-1]: dp[i][j] = dp[i-1][j-1]+1
            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return m + n - 2*dp[m][n]`,
    java: `import java.util.*;
public class Solution {
    public static int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m+1][n+1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i-1) == word2.charAt(j-1)) dp[i][j] = dp[i-1][j-1] + 1;
                else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        return m + n - 2 * dp[m][n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) System.out.println(minDistance(sc.next(), sc.next()));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
int minDistance(char* word1, char* word2) {
    int m = strlen(word1), n = strlen(word2);
    int dp[m+1][n+1];
    for(int i=0; i<=m; i++){
        for(int j=0; j<=n; j++){
            if(i==0 || j==0) dp[i][j] = 0;
            else if(word1[i-1] == word2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = MAX(dp[i-1][j], dp[i][j-1]);
        }
    }
    return m + n - 2 * dp[m][n];
}
int main() {
    char s1[600], s2[600];
    if(scanf("%s %s", s1, s2) == 2) printf("%d\\n", minDistance(s1, s2));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
int minDistance(string word1, string word2) {
    int m = word1.length(), n = word2.length();
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i-1] == word2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return m + n - 2 * dp[m][n];
}
int main() {
    string s1, s2; if(cin >> s1 >> s2) cout << minDistance(s1, s2) << "\\n";
    return 0;
}`,
  },
  'lcs-m4': {
    python: `def minimum_delete_sum(s1, s2):
    m, n = len(s1), len(s2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1): dp[i][0] = dp[i-1][0] + ord(s1[i-1])
    for j in range(1, n+1): dp[0][j] = dp[0][j-1] + ord(s2[j-1])
    for i in range(1, m+1):
        for j in range(1, n+1):
            if s1[i-1] == s2[j-1]: dp[i][j] = dp[i-1][j-1]
            else: dp[i][j] = min(dp[i-1][j] + ord(s1[i-1]), dp[i][j-1] + ord(s2[j-1]))
    return dp[m][n]`,
    java: `import java.util.*;
public class Solution {
    public static int minimumDeleteSum(String s1, String s2) {
        int m = s1.length(), n = s2.length();
        int[][] dp = new int[m+1][n+1];
        for (int i = 1; i <= m; i++) dp[i][0] = dp[i-1][0] + s1.charAt(i-1);
        for (int j = 1; j <= n; j++) dp[0][j] = dp[0][j-1] + s2.charAt(j-1);
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (s1.charAt(i-1) == s2.charAt(j-1)) dp[i][j] = dp[i-1][j-1];
                else dp[i][j] = Math.min(dp[i-1][j] + s1.charAt(i-1), dp[i][j-1] + s2.charAt(j-1));
            }
        }
        return dp[m][n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) System.out.println(minimumDeleteSum(sc.next(), sc.next()));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#define MIN(a,b) ((a)<(b)?(a):(b))
int minimumDeleteSum(char* s1, char* s2) {
    int m = strlen(s1), n = strlen(s2);
    int dp[m+1][n+1];
    dp[0][0] = 0;
    for (int i = 1; i <= m; i++) dp[i][0] = dp[i-1][0] + (int)s1[i-1];
    for (int j = 1; j <= n; j++) dp[0][j] = dp[0][j-1] + (int)s2[j-1];
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1];
            else dp[i][j] = MIN(dp[i-1][j] + (int)s1[i-1], dp[i][j-1] + (int)s2[j-1]);
        }
    }
    return dp[m][n];
}
int main() {
    char s1[1100], s2[1100];
    if(scanf("%s %s", s1, s2) == 2) printf("%d\\n", minimumDeleteSum(s1, s2));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int minimumDeleteSum(string s1, string s2) {
    int m = s1.length(), n = s2.length();
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
    for (int i = 1; i <= m; i++) dp[i][0] = dp[i-1][0] + s1[i-1];
    for (int j = 1; j <= n; j++) dp[0][j] = dp[0][j-1] + s2[j-1];
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1];
            else dp[i][j] = min(dp[i-1][j] + s1[i-1], dp[i][j-1] + s2[j-1]);
        }
    }
    return dp[m][n];
}
int main() {
    string s1, s2; if(cin >> s1 >> s2) cout << minimumDeleteSum(s1, s2) << "\\n";
    return 0;
}`,
  },
  'lcs-m5': {
    python: `def shortest_supersequence(str1, str2):
    m, n = len(str1), len(str2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            if str1[i-1] == str2[j-1]: dp[i][j] = dp[i-1][j-1] + 1
            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    i, j = m, n
    res = []
    while i > 0 and j > 0:
        if str1[i-1] == str2[j-1]:
            res.append(str1[i-1])
            i -= 1; j -= 1
        elif dp[i-1][j] > dp[i][j-1]:
            res.append(str1[i-1])
            i -= 1
        else:
            res.append(str2[j-1])
            j -= 1
    while i > 0:
        res.append(str1[i-1]); i -= 1
    while j > 0:
        res.append(str2[j-1]); j -= 1
    return ''.join(reversed(res))`,
    java: `import java.util.*;
public class Solution {
    public static String shortestSupersequence(String str1, String str2) {
        int m = str1.length(), n = str2.length();
        int[][] dp = new int[m+1][n+1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (str1.charAt(i-1) == str2.charAt(j-1)) dp[i][j] = dp[i-1][j-1] + 1;
                else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        int i = m, j = n;
        StringBuilder sb = new StringBuilder();
        while (i > 0 && j > 0) {
            if (str1.charAt(i-1) == str2.charAt(j-1)) {
                sb.append(str1.charAt(i-1));
                i--; j--;
            } else if (dp[i-1][j] > dp[i][j-1]) {
                sb.append(str1.charAt(i-1));
                i--;
            } else {
                sb.append(str2.charAt(j-1));
                j--;
            }
        }
        while (i > 0) { sb.append(str1.charAt(i-1)); i--; }
        while (j > 0) { sb.append(str2.charAt(j-1)); j--; }
        return sb.reverse().toString();
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) System.out.println(shortestSupersequence(sc.next(), sc.next()));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
char* shortestSupersequence(char* str1, char* str2) {
    int m = strlen(str1), n = strlen(str2);
    int** dp = (int**)malloc((m+1)*sizeof(int*));
    for(int i=0; i<=m; i++) dp[i] = (int*)calloc(n+1, sizeof(int));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (str1[i-1] == str2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = MAX(dp[i-1][j], dp[i][j-1]);
        }
    }
    int i = m, j = n;
    char* res = (char*)malloc(2500 * sizeof(char));
    int resIdx = 0;
    while (i > 0 && j > 0) {
        if (str1[i-1] == str2[j-1]) {
            res[resIdx++] = str1[i-1];
            i--; j--;
        } else if (dp[i-1][j] > dp[i][j-1]) {
            res[resIdx++] = str1[i-1];
            i--;
        } else {
            res[resIdx++] = str2[j-1];
            j--;
        }
    }
    while (i > 0) { res[resIdx++] = str1[i-1]; i--; }
    while (j > 0) { res[resIdx++] = str2[j-1]; j--; }
    res[resIdx] = '\\0';
    for(int k=0; k<resIdx/2; k++) {
        char temp = res[k];
        res[k] = res[resIdx-1-k];
        res[resIdx-1-k] = temp;
    }
    for(int k=0; k<=m; k++) free(dp[k]);
    free(dp);
    return res;
}
int main() {
    char s1[1100], s2[1100];
    if(scanf("%s %s", s1, s2) == 2) {
        char* ans = shortestSupersequence(s1, s2);
        printf("%s\\n", ans);
        free(ans);
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std; 
string shortestSupersequence(string str1, string str2) {
    int m = str1.length(), n = str2.length();
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (str1[i-1] == str2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }
    int i = m, j = n;
    string res = "";
    while (i > 0 && j > 0) {
        if (str1[i-1] == str2[j-1]) {
            res += str1[i-1];
            i--; j--;
        } else if (dp[i-1][j] > dp[i][j-1]) {
            res += str1[i-1];
            i--;
        } else {
            res += str2[j-1];
            j--;
        }
    }
    while (i > 0) { res += str1[i-1]; i--; }
    while (j > 0) { res += str2[j-1]; j--; }
    reverse(res.begin(), res.end());
    return res;
}
int main() {
    string s1, s2; if(cin >> s1 >> s2) cout << shortestSupersequence(s1, s2) << "\\n";
    return 0;
}`,
  },
  'lcs-h1': {
    python: `def lcs_three(s1, s2, s3):
    m, n, o = len(s1), len(s2), len(s3)
    dp = [[[0]*(o+1) for _ in range(n+1)] for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, n+1):
            for k in range(1, o+1):
                if s1[i-1] == s2[j-1] == s3[k-1]:
                    dp[i][j][k] = dp[i-1][j-1][k-1] + 1
                else:
                    dp[i][j][k] = max(dp[i-1][j][k], dp[i][j-1][k], dp[i][j][k-1])
    return dp[m][n][o]`,
    java: `import java.util.*;
public class Solution {
    public static int lcsThree(String s1, String s2, String s3) {
        int m=s1.length(), n=s2.length(), o=s3.length();
        int[][][] dp = new int[m+1][n+1][o+1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                for (int k = 1; k <= o; k++) {
                    if (s1.charAt(i-1) == s2.charAt(j-1) && s2.charAt(j-1) == s3.charAt(k-1)) {
                        dp[i][j][k] = dp[i-1][j-1][k-1] + 1;
                    } else {
                        dp[i][j][k] = Math.max(dp[i-1][j][k], Math.max(dp[i][j-1][k], dp[i][j][k-1]));
                    }
                }
            }
        }
        return dp[m][n][o];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNext()) System.out.println(lcsThree(sc.next(), sc.next(), sc.next()));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#define MAX3(a,b,c) ((a)>(b)?((a)>(c)?(a):(c)):((b)>(c)?(b):(c)))
int lcsThree(char* s1, char* s2, char* s3) {
    int m = strlen(s1), n = strlen(s2), o = strlen(s3);
    int dp[m+1][n+1][o+1];
    for (int i = 0; i <= m; i++) {
        for (int j = 0; j <= n; j++) {
            for (int k = 0; k <= o; k++) {
                if (i == 0 || j == 0 || k == 0) dp[i][j][k] = 0;
                else if (s1[i-1] == s2[j-1] && s2[j-1] == s3[k-1])
                    dp[i][j][k] = dp[i-1][j-1][k-1] + 1;
                else
                    dp[i][j][k] = MAX3(dp[i-1][j][k], dp[i][j-1][k], dp[i][j][k-1]);
            }
        }
    }
    return dp[m][n][o];
}
int main() {
    char s1[110], s2[110], s3[110];
    if(scanf("%s %s %s", s1, s2, s3) == 3) printf("%d\\n", lcsThree(s1, s2, s3));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int lcsThree(string s1, string s2, string s3) {    int m = s1.length(), n = s2.length(), o = s3.length();
    vector<vector<vector<int>>> dp(m+1, vector<vector<int>>(n+1, vector<int>(o+1, 0)));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            for (int k = 1; k <= o; k++) {
                if (s1[i-1] == s2[j-1] && s2[j-1] == s3[k-1])
                    dp[i][j][k] = dp[i-1][j-1][k-1] + 1;
                else
                    dp[i][j][k] = max({dp[i-1][j][k], dp[i][j-1][k], dp[i][j][k-1]});
            }
        }
    }
    return dp[m][n][o];
}
int main() {
    string s1, s2, s3; if(cin >> s1 >> s2 >> s3) cout << lcsThree(s1, s2, s3) << "\\n";
    return 0;
}`,
  },
  'lcs-h2': {
    python: `def num_distinct(s, t):
    m, n = len(s), len(t)
    dp = [0] * (n + 1)
    dp[0] = 1
    for i in range(1, m + 1):
        for j in range(n, 0, -1):
            if s[i-1] == t[j-1]:
                dp[j] += dp[j-1]
    return dp[n]`,
    java: `import java.util.*;
public class Solution {
    public static int numDistinct(String s, String t) {
        int m = s.length(), n = t.length();
        int[] dp = new int[n+1];
        dp[0] = 1;
        for (int i = 1; i <= m; i++) {
            for (int j = n; j >= 1; j--) {
                if (s.charAt(i-1) == t.charAt(j-1)) {
                    dp[j] += dp[j-1];
                }
            }
        }
        return dp[n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNext()) System.out.println(numDistinct(sc.next(), sc.next()));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
int numDistinct(char* s, char* t) {
    int m = strlen(s), n = strlen(t);
    unsigned int* dp = (unsigned int*)calloc(n+1, sizeof(unsigned int));
    dp[0] = 1;
    for (int i = 1; i <= m; i++) {
        for (int j = n; j >= 1; j--) {
            if (s[i-1] == t[j-1]) {
                dp[j] += dp[j-1];
            }
        }
    }
    int result = dp[n];
    free(dp);
    return result;
}
int main() {
    char s[1100], t[1100];
    if(scanf("%s %s", s, t) == 2) printf("%d\\n", numDistinct(s, t));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;
int numDistinct(string s, string t) {
    int m = s.length(), n = t.length();
    vector<unsigned int> dp(n+1, 0);
    dp[0] = 1;
    for (int i = 1; i <= m; i++) {
        for (int j = n; j >= 1; j--) {
            if (s[i-1] == t[j-1]) {
                dp[j] += dp[j-1];
            }
        }
    }
    return dp[n];
}
int main() {
    string s, t; if(cin >> s >> t) cout << numDistinct(s, t) << "\\n";
    return 0;
}`,
  },
  'lcs-h3': {
    python: `def min_distance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0]*(n+1) for _ in range(m+1)]
    for i in range(m+1): dp[i][0] = i
    for j in range(n+1): dp[0][j] = j
    for i in range(1, m+1):
        for j in range(1, n+1):
            if word1[i-1] == word2[j-1]:
                dp[i][j] = dp[i-1][j-1]
            else:
                dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
    return dp[m][n]`,
    java: `import java.util.*;
public class Solution {
    public static int minDistance(String word1, String word2) {
        int m = word1.length(), n = word2.length();
        int[][] dp = new int[m+1][n+1];
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (word1.charAt(i-1) == word2.charAt(j-1)) {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = Math.min(dp[i-1][j], Math.min(dp[i][j-1], dp[i-1][j-1])) + 1;
                }
            }
        }
        return dp[m][n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String w1 = sc.hasNext() ? sc.next() : "";
        String w2 = sc.hasNext() ? sc.next() : "";
        System.out.println(minDistance(w1, w2));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#define MIN3(a,b,c) ((a)<(b)?((a)<(c)?(a):(c)):((b)<(c)?(b):(c)))
int minDistance(char* word1, char* word2) {
    int m = strlen(word1), n = strlen(word2);
    int dp[m+1][n+1];
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = MIN3(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
            }
        }
    }
    return dp[m][n];
}
int main() {
    char s1[600] = "", s2[600] = "";
    if(scanf("%s %s", s1, s2) == 2) printf("%d\\n", minDistance(s1, s2));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std; 
int minDistance(string word1, string word2) {
    int m = word1.length(), n = word2.length();
    vector<vector<int>> dp(m+1, vector<int>(n+1, 0));
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = min({dp[i-1][j], dp[i][j-1], dp[i-1][j-1]}) + 1;
            }
        }
    }
    return dp[m][n];
}
int main() {
    string s1, s2; if(cin >> s1 >> s2) cout << minDistance(s1, s2) << "\\n";
    return 0;
}`,
  },
  'lcs-h4': {
    python: `def min_insertions(s):
    r = s[::-1]
    m = len(s)
    dp = [[0]*(m+1) for _ in range(m+1)]
    for i in range(1, m+1):
        for j in range(1, m+1):
            if s[i-1] == r[j-1]: dp[i][j] = dp[i-1][j-1]+1
            else: dp[i][j] = max(dp[i-1][j], dp[i][j-1])
    return m - dp[m][m]`,
    java: `import java.util.*;
public class Solution {
    public static int minInsertions(String s) {
        String r = new StringBuilder(s).reverse().toString();
        int m = s.length();
        int[][] dp = new int[m+1][m+1];
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= m; j++) {
                if (s.charAt(i-1) == r.charAt(j-1)) dp[i][j] = dp[i-1][j-1] + 1;
                else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
        return m - dp[m][m];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(sc.hasNext()) System.out.println(minInsertions(sc.next()));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
int minInsertions(char* s) {
    int m = strlen(s);
    char r[m+1];
    for(int i=0; i<m; i++) r[i] = s[m-1-i];
    r[m] = '\\0';
    int dp[m+1][m+1];
    for(int i=0; i<=m; i++){
        for(int j=0; j<=m; j++){
            if(i==0 || j==0) dp[i][j] = 0;
            else if(s[i-1] == r[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = MAX(dp[i-1][j], dp[i][j-1]);
        }
    }
    return m - dp[m][m];
}
int main() {
    char s[600];
    if(scanf("%s", s) == 1) printf("%d\\n", minInsertions(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
using namespace std;
int minInsertions(string s) {
    string r = s;
    reverse(r.begin(), r.end());
    int m = s.length();
    vector<vector<int>> dp(m+1, vector<int>(m+1, 0));
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= m; j++) {
            if (s[i-1] == r[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return m - dp[m][m];
}
int main() {
    string s; if(cin >> s) cout << minInsertions(s) << "\\n";
    return 0;
}`,
  },
  'lcs-h5': {
    python: `def is_match(s, p):
    m, n = len(s), len(p)
    dp = [[False] * (n + 1) for _ in range(m + 1)]
    dp[0][0] = True
    for j in range(1, n + 1):
        if p[j-1] == '*':
            dp[0][j] = dp[0][j-1]
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if p[j-1] == s[i-1] or p[j-1] == '?':
                dp[i][j] = dp[i-1][j-1]
            elif p[j-1] == '*':
                dp[i][j] = dp[i-1][j] or dp[i][j-1]
    return dp[m][n]

s = input()
p = input()
print(str(is_match(s, p)).lower())`,
    java: `import java.util.*;
public class Solution {
    public static boolean isMatch(String s, String p) {
        int m = s.length(), n = p.length();
        boolean[][] dp = new boolean[m+1][n+1];
        dp[0][0] = true;
        for (int j = 1; j <= n; j++) {
            if (p.charAt(j-1) == '*') dp[0][j] = dp[0][j-1];
        }
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (p.charAt(j-1) == s.charAt(i-1) || p.charAt(j-1) == '?') {
                    dp[i][j] = dp[i-1][j-1];
                } else if (p.charAt(j-1) == '*') {
                    dp[i][j] = dp[i-1][j] || dp[i][j-1];
                }
            }
        }
        return dp[m][n];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.hasNext() ? sc.next() : "";
        String p = sc.hasNext() ? sc.next() : "";
        System.out.println(isMatch(s, p));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <stdbool.h>
bool isMatch(char* s, char* p) {
    int m = strlen(s), n = strlen(p);
    bool** dp = (bool**)malloc((m+1)*sizeof(bool*));
    for(int i=0; i<=m; i++) dp[i] = (bool*)calloc(n+1, sizeof(bool));
    dp[0][0] = true;
    for (int j = 1; j <= n; j++) {
        if (p[j-1] == '*') dp[0][j] = dp[0][j-1];
    }
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (p[j-1] == s[i-1] || p[j-1] == '?') {
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] == '*') {
                dp[i][j] = dp[i-1][j] || dp[i][j-1];
            }
        }
    }
    bool res = dp[m][n];
    for(int i=0; i<=m; i++) free(dp[i]);
    free(dp);
    return res;
}
int main() {
    char s[2100] = "", p[2100] = "";
    if(scanf("%s %s", s, p) == 2) printf("%s\\n", isMatch(s, p) ? "true" : "false");
    else printf("true\\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std; 
bool isMatch(string s, string p) {
    int m = s.length(), n = p.length();
    vector<vector<bool>> dp(m+1, vector<bool>(n+1, false));
    dp[0][0] = true;
    for (int j = 1; j <= n; j++) {
        if (p[j-1] == '*') dp[0][j] = dp[0][j-1];
    }
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (p[j-1] == s[i-1] || p[j-1] == '?') {
                dp[i][j] = dp[i-1][j-1];
            } else if (p[j-1] == '*') {
                dp[i][j] = dp[i-1][j] || dp[i][j-1];
            }
        }
    }
    return dp[m][n];
}
int main() {
    string s, p;
    if(cin >> s >> p) cout << (isMatch(s, p) ? "true" : "false") << "\\n";
    else cout << "true\\n";
    return 0;
}`,
  },
};
