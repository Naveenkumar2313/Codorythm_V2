export const GenerateParenthesesSolutions = {
  'gp-e1': {
    python: `def generate_parentheses(n):
    result = []
    def backtrack(current, open, close):
        if len(current) == 2 * n:
            result.append(current)
            return
        if open < n:
            backtrack(current + "(", open + 1, close)
        if close < open:
            backtrack(current + ")", open, close + 1)
    backtrack("", 0, 0)
    return result

n = int(input())
result = generate_parentheses(n)
for s in result:
    print(s)`,
    java: `import java.util.*;

public class Solution {
    public static void backtrack(String current, int open, int close, int n, List<String> result) {
        if (current.length() == 2 * n) {
            result.add(current);
            return;
        }
        if (open < n)
            backtrack(current + "(", open + 1, close, n, result);
        if (close < open)
            backtrack(current + ")", open, close + 1, n, result);
    }

    public static List<String> generateParentheses(int n) {
        List<String> result = new ArrayList<>();
        backtrack("", 0, 0, n, result);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        List<String> result = generateParentheses(n);
        for (String s : result)
            System.out.println(s);
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

void generate(char* cur, int open, int close, int n, int pos) {
    if (pos == 2 * n) {
        cur[pos] = '\\0';
        printf("%s\\n", cur);
        return;
    }
    if (open < n) {
        cur[pos] = '(';
        generate(cur, open + 1, close, n, pos + 1);
    }
    if (close < open) {
        cur[pos] = ')';
        generate(cur, open, close + 1, n, pos + 1);
    }
}

int main() {
    int n;
    scanf("%d", &n);
    char cur[2 * n + 1];
    generate(cur, 0, 0, n, 0);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void generate(string cur, int open, int close, int n, vector<string>& result) {
    if ((int)cur.size() == 2 * n) {
        result.push_back(cur);
        return;
    }
    if (open < n)
        generate(cur + "(", open + 1, close, n, result);
    if (close < open)
        generate(cur + ")", open, close + 1, n, result);
}

int main() {
    int n;
    cin >> n;
    vector<string> result;
    generate("", 0, 0, n, result);
    for (const string& s : result)
        cout << s << "\n";
    return 0;
}`
  },
  'gp-e2': {
    python: `def count_parentheses(n):
    if n == 0:
        return 1
    dp = [0] * (n + 1)
    dp[0] = 1
    for i in range(1, n + 1):
        for j in range(i):
            dp[i] += dp[j] * dp[i - 1 - j]
    return dp[n]

n = int(input())
print(count_parentheses(n))`,
    java: `import java.util.*;

public class Solution {
    public static int countParentheses(int n) {
        int[] dp = new int[n + 1];
        dp[0] = 1;
        for (int i = 1; i <= n; i++)
            for (int j = 0; j < i; j++)
                dp[i] += dp[j] * dp[i - 1 - j];
        return dp[n];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println(countParentheses(n));
    }
}`,
    c: `#include <stdio.h>

int countParentheses(int n) {
    int dp[n + 1];
    dp[0] = 1;
    for (int i = 1; i <= n; i++) {
        dp[i] = 0;
        for (int j = 0; j < i; j++)
            dp[i] += dp[j] * dp[i - 1 - j];
    }
    return dp[n];
}

int main() {
    int n;
    scanf("%d", &n);
    printf("%d\n", countParentheses(n));
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

int countParentheses(int n) {
    vector<int> dp(n + 1, 0);
    dp[0] = 1;
    for (int i = 1; i <= n; i++)
        for (int j = 0; j < i; j++)
            dp[i] += dp[j] * dp[i - 1 - j];
    return dp[n];
}

int main() {
    int n;
    cin >> n;
    cout << countParentheses(n) << "\n";
    return 0;
}`
  },
  'gp-e3': {
    python: `def is_valid(s):
    count = 0
    for c in s:
        if c == '(':
            count += 1
        else:
            count -= 1
        if count < 0:
            return False
    return count == 0

s = input()
print(str(is_valid(s)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean isValid(String s) {
        int count = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') count++;
            else count--;
            if (count < 0) return false;
        }
        return count == 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(isValid(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int isValid(char* s) {
    int count = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(') count++;
        else count--;
        if (count < 0) return 0;
    }
    return count == 0;
}

int main() {
    char s[10001];
    scanf("%s", s);
    printf("%s\n", isValid(s) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

bool isValid(string s) {
    int count = 0;
    for (char c : s) {
        if (c == '(') count++;
        else count--;
        if (count < 0) return false;
    }
    return count == 0;
}

int main() {
    string s;
    cin >> s;
    cout << (isValid(s) ? "true" : "false") << "\n";
    return 0;
}`
  },
  'gp-e4': {
    python: `def min_reversals(s):
    if len(s) % 2 != 0:
        return -1
    open = 0
    close = 0
    for c in s:
        if c == '(':
            open += 1
        else:
            if open > 0:
                open -= 1
            else:
                close += 1
    return (open + 1) // 2 + (close + 1) // 2

s = input()
print(min_reversals(s))`,
    java: `import java.util.*;

public class Solution {
    public static int minReversals(String s) {
        if (s.length() % 2 != 0) return -1;
        int open = 0, close = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                open++;
            } else {
                if (open > 0) open--;
                else close++;
            }
        }
        return (open + 1) / 2 + (close + 1) / 2;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(minReversals(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int minReversals(char* s) {
    int len = strlen(s);
    if (len % 2 != 0) return -1;
    int open = 0, close = 0;
    for (int i = 0; i < len; i++) {
        if (s[i] == '(') {
            open++;
        } else {
            if (open > 0) open--;
            else close++;
        }
    }
    return (open + 1) / 2 + (close + 1) / 2;
}

int main() {
    char s[10001];
    scanf("%s", s);
    printf("%d\n", minReversals(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int minReversals(string s) {
    if (s.size() % 2 != 0) return -1;
    int open = 0, close = 0;
    for (char c : s) {
        if (c == '(') {
            open++;
        } else {
            if (open > 0) open--;
            else close++;
        }
    }
    return (open + 1) / 2 + (close + 1) / 2;
}

int main() {
    string s;
    cin >> s;
    cout << minReversals(s) << "\n";
    return 0;
}`
  },
  'gp-e5': {
    python: `def score_of_parentheses(s):
    stack = [0]
    for c in s:
        if c == '(':
            stack.append(0)
        else:
            v = stack.pop()
            stack[-1] += max(2 * v, 1)
    return stack[0]

s = input()
print(score_of_parentheses(s))`,
    java: `import java.util.*;

public class Solution {
    public static int scoreOfParentheses(String s) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(0);
        for (char c : s.toCharArray()) {
            if (c == '(') {
                stack.push(0);
            } else {
                int v = stack.pop();
                stack.push(stack.pop() + Math.max(2 * v, 1));
            }
        }
        return stack.pop();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(scoreOfParentheses(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int scoreOfParentheses(char* s) {
    int stack[51];
    int top = 0;
    stack[top++] = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(') {
            stack[top++] = 0;
        } else {
            int v = stack[--top];
            stack[top - 1] += v > 0 ? 2 * v : 1;
        }
    }
    return stack[0];
}

int main() {
    char s[51];
    scanf("%s", s);
    printf("%d\n", scoreOfParentheses(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

int scoreOfParentheses(string s) {
    stack<int> st;
    st.push(0);
    for (char c : s) {
        if (c == '(') {
            st.push(0);
        } else {
            int v = st.top(); st.pop();
            st.top() += max(2 * v, 1);
        }
    }
    return st.top();
}

int main() {
    string s;
    cin >> s;
    cout << scoreOfParentheses(s) << "\n";
    return 0;
}`
  },
};

export const GenerateParenthesesMediumSolutions = {
  'gp-m1': {
    python: `def remove_invalid_parentheses(s):
    result = set()
    min_removed = [float('inf')]

    def backtrack(index, left_count, right_count, left_rem, right_rem, current):
        if index == len(s):
            if left_rem == 0 and right_rem == 0:
                result.add("".join(current))
            return
        ch = s[index]
        if (ch == '(' and left_rem > 0) or (ch == ')' and right_rem > 0):
            backtrack(index + 1, left_count, right_count,
                      left_rem - (ch == '('), right_rem - (ch == ')'), current)
        current.append(ch)
        if ch == '(':
            backtrack(index + 1, left_count + 1, right_count, left_rem, right_rem, current)
        elif ch == ')' and left_count > right_count:
            backtrack(index + 1, left_count, right_count + 1, left_rem, right_rem, current)
        elif ch not in '()':
            backtrack(index + 1, left_count, right_count, left_rem, right_rem, current)
        current.pop()

    left_rem = right_rem = 0
    for c in s:
        if c == '(':
            left_rem += 1
        elif c == ')':
            if left_rem > 0:
                left_rem -= 1
            else:
                right_rem += 1

    backtrack(0, 0, 0, left_rem, right_rem, [])
    return sorted(result)

s = input()
result = remove_invalid_parentheses(s)
for r in result:
    print(r)`,
    java: `import java.util.*;

public class Solution {
    static Set<String> result = new HashSet<>();

    public static void backtrack(String s, int index, int leftCount, int rightCount,
                                  int leftRem, int rightRem, StringBuilder current) {
        if (index == s.length()) {
            if (leftRem == 0 && rightRem == 0)
                result.add(current.toString());
            return;
        }
        char ch = s.charAt(index);
        if ((ch == '(' && leftRem > 0) || (ch == ')' && rightRem > 0)) {
            backtrack(s, index + 1, leftCount, rightCount,
                leftRem - (ch == '(' ? 1 : 0), rightRem - (ch == ')' ? 1 : 0), current);
        }
        current.append(ch);
        if (ch == '(') {
            backtrack(s, index + 1, leftCount + 1, rightCount, leftRem, rightRem, current);
        } else if (ch == ')' && leftCount > rightCount) {
            backtrack(s, index + 1, leftCount, rightCount + 1, leftRem, rightRem, current);
        } else if (ch != '(' && ch != ')') {
            backtrack(s, index + 1, leftCount, rightCount, leftRem, rightRem, current);
        }
        current.deleteCharAt(current.length() - 1);
    }

    public static List<String> removeInvalidParentheses(String s) {
        result.clear();
        int leftRem = 0, rightRem = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') leftRem++;
            else if (c == ')') {
                if (leftRem > 0) leftRem--;
                else rightRem++;
            }
        }
        backtrack(s, 0, 0, 0, leftRem, rightRem, new StringBuilder());
        List<String> ans = new ArrayList<>(result);
        Collections.sort(ans);
        return ans;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        for (String r : removeInvalidParentheses(s))
            System.out.println(r);
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char results[1000][30];
int resCount = 0;

void backtrack(char* s, int n, int index, int lc, int rc, int lr, int rr, char* cur, int pos) {
    if (index == n) {
        if (lr == 0 && rr == 0) {
            cur[pos] = '\\0';
            for (int i = 0; i < resCount; i++)
                if (strcmp(results[i], cur) == 0) return;
            strcpy(results[resCount++], cur);
        }
        return;
    }
    char ch = s[index];
    if ((ch == '(' && lr > 0) || (ch == ')' && rr > 0))
        backtrack(s, n, index + 1, lc, rc, lr - (ch == '('), rr - (ch == ')'), cur, pos);
    cur[pos] = ch;
    if (ch == '(')
        backtrack(s, n, index + 1, lc + 1, rc, lr, rr, cur, pos + 1);
    else if (ch == ')' && lc > rc)
        backtrack(s, n, index + 1, lc, rc + 1, lr, rr, cur, pos + 1);
    else if (ch != '(' && ch != ')')
        backtrack(s, n, index + 1, lc, rc, lr, rr, cur, pos + 1);
}

int main() {
    char s[26], cur[26];
    scanf("%s", s);
    int n = strlen(s), lr = 0, rr = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') lr++;
        else if (s[i] == ')') { if (lr > 0) lr--; else rr++; }
    }
    backtrack(s, n, 0, 0, 0, lr, rr, cur, 0);
    for (int i = 0; i < resCount; i++)
        printf("%s\n", results[i]);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <set>
#include <algorithm>
using namespace std;

set<string> result;

void backtrack(string& s, int index, int lc, int rc, int lr, int rr, string current) {
    if (index == (int)s.size()) {
        if (lr == 0 && rr == 0) result.insert(current);
        return;
    }
    char ch = s[index];
    if ((ch == '(' && lr > 0) || (ch == ')' && rr > 0))
        backtrack(s, index + 1, lc, rc, lr - (ch == '('), rr - (ch == ')'), current);
    current += ch;
    if (ch == '(')
        backtrack(s, index + 1, lc + 1, rc, lr, rr, current);
    else if (ch == ')' && lc > rc)
        backtrack(s, index + 1, lc, rc + 1, lr, rr, current);
    else if (ch != '(' && ch != ')')
        backtrack(s, index + 1, lc, rc, lr, rr, current);
}

int main() {
    string s;
    cin >> s;
    int lr = 0, rr = 0;
    for (char c : s) {
        if (c == '(') lr++;
        else if (c == ')') { if (lr > 0) lr--; else rr++; }
    }
    backtrack(s, 0, 0, 0, lr, rr, "");
    vector<string> ans(result.begin(), result.end());
    sort(ans.begin(), ans.end());
    for (const string& r : ans)
        cout << r << "\n";
    return 0;
}`
  },
  'gp-m2': {
    python: `def longest_valid_parentheses(s):
    stack = [-1]
    max_len = 0
    for i, c in enumerate(s):
        if c == '(':
            stack.append(i)
        else:
            stack.pop()
            if not stack:
                stack.append(i)
            else:
                max_len = max(max_len, i - stack[-1])
    return max_len

s = input()
print(longest_valid_parentheses(s))`,
    java: `import java.util.*;

public class Solution {
    public static int longestValidParentheses(String s) {
        Deque<Integer> stack = new ArrayDeque<>();
        stack.push(-1);
        int maxLen = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(') {
                stack.push(i);
            } else {
                stack.pop();
                if (stack.isEmpty()) stack.push(i);
                else maxLen = Math.max(maxLen, i - stack.peek());
            }
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(longestValidParentheses(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int longestValidParentheses(char* s) {
    int n = strlen(s);
    int stack[n + 1], top = 0;
    stack[top++] = -1;
    int maxLen = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') {
            stack[top++] = i;
        } else {
            top--;
            if (top == 0) stack[top++] = i;
            else {
                int len = i - stack[top - 1];
                if (len > maxLen) maxLen = len;
            }
        }
    }
    return maxLen;
}

int main() {
    char s[30001];
    scanf("%s", s);
    printf("%d\n", longestValidParentheses(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

int longestValidParentheses(string s) {
    stack<int> st;
    st.push(-1);
    int maxLen = 0;
    for (int i = 0; i < (int)s.size(); i++) {
        if (s[i] == '(') {
            st.push(i);
        } else {
            st.pop();
            if (st.empty()) st.push(i);
            else maxLen = max(maxLen, i - st.top());
        }
    }
    return maxLen;
}

int main() {
    string s;
    cin >> s;
    cout << longestValidParentheses(s) << "\n";
    return 0;
}`
  },
  'gp-m3': {
    python: `def generate_k_types(n):
    result = []
    brackets = [('(', ')'), ('[', ']'), ('{', '}')]

    def backtrack(current, counts):
        if len(current) == 2 * n:
            result.append(current)
            return
        for i, (op, cl) in enumerate(brackets):
            if counts[i][0] < n:
                counts[i][0] += 1
                backtrack(current + op, counts)
                counts[i][0] -= 1
            if counts[i][1] < counts[i][0]:
                counts[i][1] += 1
                backtrack(current + cl, counts)
                counts[i][1] -= 1

    backtrack("", [[0, 0], [0, 0], [0, 0]])
    return result

n = int(input())
result = generate_k_types(n)
for s in result:
    print(s)`,
    java: `import java.util.*;

public class Solution {
    static char[] open = {'(', '[', '{'};
    static char[] close = {')', ']', '}'};
    static List<String> result = new ArrayList<>();

    public static void backtrack(String cur, int[] openCnt, int[] closeCnt, int n) {
        if (cur.length() == 2 * n) {
            result.add(cur);
            return;
        }
        for (int i = 0; i < 3; i++) {
            if (openCnt[i] < n) {
                openCnt[i]++;
                backtrack(cur + open[i], openCnt, closeCnt, n);
                openCnt[i]--;
            }
            if (closeCnt[i] < openCnt[i]) {
                closeCnt[i]++;
                backtrack(cur + close[i], openCnt, closeCnt, n);
                closeCnt[i]--;
            }
        }
    }

    public static List<String> generateKTypes(int n) {
        result.clear();
        backtrack("", new int[3], new int[3], n);
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        for (String s : generateKTypes(n))
            System.out.println(s);
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

char openB[] = {'(', '[', '{'};
char closeB[] = {')', ']', '}'};

void backtrack(char* cur, int pos, int* oc, int* cc, int n) {
    if (pos == 2 * n) {
        cur[pos] = '\\0';
        printf("%s\n", cur);
        return;
    }
    for (int i = 0; i < 3; i++) {
        if (oc[i] < n) {
            cur[pos] = openB[i];
            oc[i]++;
            backtrack(cur, pos + 1, oc, cc, n);
            oc[i]--;
        }
        if (cc[i] < oc[i]) {
            cur[pos] = closeB[i];
            cc[i]++;
            backtrack(cur, pos + 1, oc, cc, n);
            cc[i]--;
        }
    }
}

int main() {
    int n;
    scanf("%d", &n);
    char cur[2 * n + 1];
    int oc[3] = {0}, cc[3] = {0};
    backtrack(cur, 0, oc, cc, n);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string openB = "([{";
string closeB = ")]}";

void backtrack(string cur, vector<int>& oc, vector<int>& cc, int n, vector<string>& result) {
    if ((int)cur.size() == 2 * n) {
        result.push_back(cur);
        return;
    }
    for (int i = 0; i < 3; i++) {
        if (oc[i] < n) {
            oc[i]++;
            backtrack(cur + openB[i], oc, cc, n, result);
            oc[i]--;
        }
        if (cc[i] < oc[i]) {
            cc[i]++;
            backtrack(cur + closeB[i], oc, cc, n, result);
            cc[i]--;
        }
    }
}

int main() {
    int n;
    cin >> n;
    vector<string> result;
    vector<int> oc(3, 0), cc(3, 0);
    backtrack("", oc, cc, n, result);
    for (const string& s : result)
        cout << s << "\n";
    return 0;
}`
  },
  'gp-m4': {
    python: `def min_add_to_make_valid(s):
    open = 0
    close = 0
    for c in s:
        if c == '(':
            open += 1
        else:
            if open > 0:
                open -= 1
            else:
                close += 1
    return open + close

s = input()
print(min_add_to_make_valid(s))`,
    java: `import java.util.*;

public class Solution {
    public static int minAddToMakeValid(String s) {
        int open = 0, close = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                open++;
            } else {
                if (open > 0) open--;
                else close++;
            }
        }
        return open + close;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(minAddToMakeValid(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int minAddToMakeValid(char* s) {
    int open = 0, close = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(') {
            open++;
        } else {
            if (open > 0) open--;
            else close++;
        }
    }
    return open + close;
}

int main() {
    char s[1001];
    scanf("%s", s);
    printf("%d\n", minAddToMakeValid(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int minAddToMakeValid(string s) {
    int open = 0, close = 0;
    for (char c : s) {
        if (c == '(') {
            open++;
        } else {
            if (open > 0) open--;
            else close++;
        }
    }
    return open + close;
}

int main() {
    string s;
    cin >> s;
    cout << minAddToMakeValid(s) << "\n";
    return 0;
}`
  },
  'gp-m5': {
    python: `def can_be_valid(s, locked):
    if len(s) % 2 != 0:
        return False
    open = 0
    for i in range(len(s)):
        if locked[i] == '0' or s[i] == '(':
            open += 1
        else:
            open -= 1
        if open < 0:
            return False
    close = 0
    for i in range(len(s) - 1, -1, -1):
        if locked[i] == '0' or s[i] == ')':
            close += 1
        else:
            close -= 1
        if close < 0:
            return False
    return True

s = input()
locked = input()
print(str(can_be_valid(s, locked)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean canBeValid(String s, String locked) {
        int n = s.length();
        if (n % 2 != 0) return false;
        int open = 0;
        for (int i = 0; i < n; i++) {
            if (locked.charAt(i) == '0' || s.charAt(i) == '(') open++;
            else open--;
            if (open < 0) return false;
        }
        int close = 0;
        for (int i = n - 1; i >= 0; i--) {
            if (locked.charAt(i) == '0' || s.charAt(i) == ')') close++;
            else close--;
            if (close < 0) return false;
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String locked = sc.next();
        System.out.println(canBeValid(s, locked));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int canBeValid(char* s, char* locked) {
    int n = strlen(s);
    if (n % 2 != 0) return 0;
    int open = 0;
    for (int i = 0; i < n; i++) {
        if (locked[i] == '0' || s[i] == '(') open++;
        else open--;
        if (open < 0) return 0;
    }
    int close = 0;
    for (int i = n - 1; i >= 0; i--) {
        if (locked[i] == '0' || s[i] == ')') close++;
        else close--;
        if (close < 0) return 0;
    }
    return 1;
}

int main() {
    char s[100001], locked[100001];
    scanf("%s %s", s, locked);
    printf("%s\n", canBeValid(s, locked) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

bool canBeValid(string s, string locked) {
    int n = s.size();
    if (n % 2 != 0) return false;
    int open = 0;
    for (int i = 0; i < n; i++) {
        if (locked[i] == '0' || s[i] == '(') open++;
        else open--;
        if (open < 0) return false;
    }
    int close = 0;
    for (int i = n - 1; i >= 0; i--) {
        if (locked[i] == '0' || s[i] == ')') close++;
        else close--;
        if (close < 0) return false;
    }
    return true;
}

int main() {
    string s, locked;
    cin >> s >> locked;
    cout << (canBeValid(s, locked) ? "true" : "false") << "\n";
    return 0;
}`
  },
};

export const GenerateParenthesesHardSolutions = {
  'gp-h1': {
    python: `def check_valid_string(s):
    low = 0
    high = 0
    for c in s:
        if c == '(':
            low += 1
            high += 1
        elif c == ')':
            low -= 1
            high -= 1
        else:
            low -= 1
            high += 1
        if high < 0:
            return False
        low = max(low, 0)
    return low == 0

s = input()
print(str(check_valid_string(s)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean checkValidString(String s) {
        int low = 0, high = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') { low++; high++; }
            else if (c == ')') { low--; high--; }
            else { low--; high++; }
            if (high < 0) return false;
            low = Math.max(low, 0);
        }
        return low == 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(checkValidString(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int checkValidString(char* s) {
    int low = 0, high = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(') { low++; high++; }
        else if (s[i] == ')') { low--; high--; }
        else { low--; high++; }
        if (high < 0) return 0;
        if (low < 0) low = 0;
    }
    return low == 0;
}

int main() {
    char s[101];
    scanf("%s", s);
    printf("%s\n", checkValidString(s) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

bool checkValidString(string s) {
    int low = 0, high = 0;
    for (char c : s) {
        if (c == '(') { low++; high++; }
        else if (c == ')') { low--; high--; }
        else { low--; high++; }
        if (high < 0) return false;
        low = max(low, 0);
    }
    return low == 0;
}

int main() {
    string s;
    cin >> s;
    cout << (checkValidString(s) ? "true" : "false") << "\n";
    return 0;
}`
  },
  'gp-h2': {
    python: `def min_cost_valid(s):
    if len(s) % 2 != 0:
        return -1
    open = 0
    close = 0
    for c in s:
        if c == '(':
            open += 1
        else:
            if open > 0:
                open -= 1
            else:
                close += 1
    return (open + 1) // 2 * 2 + (close + 1) // 2 * 2

s = input()
print(min_cost_valid(s))`,
    java: `import java.util.*;

public class Solution {
    public static int minCostValid(String s) {
        if (s.length() % 2 != 0) return -1;
        int open = 0, close = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') open++;
            else {
                if (open > 0) open--;
                else close++;
            }
        }
        return ((open + 1) / 2) * 2 + ((close + 1) / 2) * 2;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(minCostValid(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int minCostValid(char* s) {
    int n = strlen(s);
    if (n % 2 != 0) return -1;
    int open = 0, close = 0;
    for (int i = 0; i < n; i++) {
        if (s[i] == '(') open++;
        else {
            if (open > 0) open--;
            else close++;
        }
    }
    return ((open + 1) / 2) * 2 + ((close + 1) / 2) * 2;
}

int main() {
    char s[1000001];
    scanf("%s", s);
    printf("%d\n", minCostValid(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int minCostValid(string s) {
    if (s.size() % 2 != 0) return -1;
    int open = 0, close = 0;
    for (char c : s) {
        if (c == '(') open++;
        else {
            if (open > 0) open--;
            else close++;
        }
    }
    return ((open + 1) / 2) * 2 + ((close + 1) / 2) * 2;
}

int main() {
    string s;
    cin >> s;
    cout << minCostValid(s) << "\n";
    return 0;
}`
  },
  'gp-h3': {
    python: `def count_valid_subsequences(s):
    MOD = 10**9 + 7
    dp = 0
    open = 0
    for c in s:
        if c == '(':
            open += 1
        else:
            if open > 0:
                dp = (2 * dp + open) % MOD
                open -= 1
    return dp

s = input()
print(count_valid_subsequences(s))`,
    java: `import java.util.*;

public class Solution {
    public static int countValidSubsequences(String s) {
        long MOD = 1_000_000_007;
        long dp = 0;
        int open = 0;
        for (char c : s.toCharArray()) {
            if (c == '(') {
                open++;
            } else if (open > 0) {
                dp = (2 * dp + open) % MOD;
                open--;
            }
        }
        return (int) dp;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(countValidSubsequences(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int countValidSubsequences(char* s) {
    long long MOD = 1000000007;
    long long dp = 0;
    int open = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(') {
            open++;
        } else if (open > 0) {
            dp = (2 * dp + open) % MOD;
            open--;
        }
    }
    return (int) dp;
}

int main() {
    char s[100001];
    scanf("%s", s);
    printf("%d\n", countValidSubsequences(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int countValidSubsequences(string s) {
    long long MOD = 1e9 + 7;
    long long dp = 0;
    int open = 0;
    for (char c : s) {
        if (c == '(') {
            open++;
        } else if (open > 0) {
            dp = (2 * dp + open) % MOD;
            open--;
        }
    }
    return (int) dp;
}

int main() {
    string s;
    cin >> s;
    cout << countValidSubsequences(s) << "\n";
    return 0;
}`
  },
  'gp-h4': {
    python: `def decode_string(s):
    stack = []
    current = ""
    k = 0
    for c in s:
        if c.isdigit():
            k = k * 10 + int(c)
        elif c == '[':
            stack.append((current, k))
            current = ""
            k = 0
        elif c == ']':
            prev, num = stack.pop()
            current = prev + num * current
        else:
            current += c
    return current

s = input()
print(decode_string(s))`,
    java: `import java.util.*;

public class Solution {
    public static String decodeString(String s) {
        Deque<String> strStack = new ArrayDeque<>();
        Deque<Integer> numStack = new ArrayDeque<>();
        String current = "";
        int k = 0;
        for (char c : s.toCharArray()) {
            if (Character.isDigit(c)) {
                k = k * 10 + (c - '0');
            } else if (c == '[') {
                strStack.push(current);
                numStack.push(k);
                current = "";
                k = 0;
            } else if (c == ']') {
                int num = numStack.pop();
                String prev = strStack.pop();
                StringBuilder sb = new StringBuilder(prev);
                for (int i = 0; i < num; i++) sb.append(current);
                current = sb.toString();
            } else {
                current += c;
            }
        }
        return current;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(decodeString(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char result[10001];

void decodeString(char* s, char* out) {
    char strStack[100][10001];
    int numStack[100];
    int top = 0;
    char current[10001] = "";
    int k = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            k = k * 10 + (s[i] - '0');
        } else if (s[i] == '[') {
            strcpy(strStack[top], current);
            numStack[top++] = k;
            current[0] = '\\0';
            k = 0;
        } else if (s[i] == ']') {
            int num = numStack[--top];
            char temp[10001];
            strcpy(temp, strStack[top]);
            for (int j = 0; j < num; j++) strcat(temp, current);
            strcpy(current, temp);
        } else {
            int len = strlen(current);
            current[len] = s[i];
            current[len + 1] = '\\0';
        }
    }
    strcpy(out, current);
}

int main() {
    char s[31];
    scanf("%s", s);
    decodeString(s, result);
    printf("%s\n", result);
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <stack>
using namespace std;

string decodeString(string s) {
    stack<string> strStack;
    stack<int> numStack;
    string current = "";
    int k = 0;
    for (char c : s) {
        if (isdigit(c)) {
            k = k * 10 + (c - '0');
        } else if (c == '[') {
            strStack.push(current);
            numStack.push(k);
            current = "";
            k = 0;
        } else if (c == ']') {
            int num = numStack.top(); numStack.pop();
            string prev = strStack.top(); strStack.pop();
            for (int i = 0; i < num; i++) prev += current;
            current = prev;
        } else {
            current += c;
        }
    }
    return current;
}

int main() {
    string s;
    cin >> s;
    cout << decodeString(s) << "\n";
    return 0;
}`
  },
  'gp-h5': {
    python: `def max_depth_after_split(seq):
    result = []
    depth = 0
    for c in seq:
        if c == '(':
            depth += 1
            result.append(depth % 2)
        else:
            result.append(depth % 2)
            depth -= 1
    return result

seq = input()
result = max_depth_after_split(seq)
print(" ".join(map(str, result)))`,
    java: `import java.util.*;

public class Solution {
    public static int[] maxDepthAfterSplit(String seq) {
        int[] result = new int[seq.length()];
        int depth = 0;
        for (int i = 0; i < seq.length(); i++) {
            if (seq.charAt(i) == '(') {
                depth++;
                result[i] = depth % 2;
            } else {
                result[i] = depth % 2;
                depth--;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String seq = sc.next();
        int[] result = maxDepthAfterSplit(seq);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < result.length; i++) {
            if (i > 0) sb.append(" ");
            sb.append(result[i]);
        }
        System.out.println(sb.toString());
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

void maxDepthAfterSplit(char* seq, int* result, int n) {
    int depth = 0;
    for (int i = 0; i < n; i++) {
        if (seq[i] == '(') {
            depth++;
            result[i] = depth % 2;
        } else {
            result[i] = depth % 2;
            depth--;
        }
    }
}

int main() {
    char seq[10001];
    scanf("%s", seq);
    int n = strlen(seq);
    int result[n];
    maxDepthAfterSplit(seq, result, n);
    for (int i = 0; i < n; i++) {
        if (i > 0) printf(" ");
        printf("%d", result[i]);
    }
    printf("\n");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<int> maxDepthAfterSplit(string seq) {
    vector<int> result;
    int depth = 0;
    for (char c : seq) {
        if (c == '(') {
            depth++;
            result.push_back(depth % 2);
        } else {
            result.push_back(depth % 2);
            depth--;
        }
    }
    return result;
}

int main() {
    string seq;
    cin >> seq;
    vector<int> result = maxDepthAfterSplit(seq);
    for (int i = 0; i < (int)result.size(); i++) {
        if (i > 0) cout << " ";
        cout << result[i];
    }
    cout << "\n";
    return 0;
}`
  },
};
