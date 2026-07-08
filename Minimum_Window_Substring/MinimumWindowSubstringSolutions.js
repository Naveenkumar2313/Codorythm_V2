export const MinimumWindowSubstringSolutions = {
  'mws-e1': {
    python: `def contains_all(s, t):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    for c in s:
        if c in need:
            need[c] -= 1
    return all(v <= 0 for v in need.values())

s = input()
t = input()
print(str(contains_all(s, t)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean containsAll(String s, String t) {
        int[] need = new int[128];
        for (char c : t.toCharArray()) need[c]++;
        for (char c : s.toCharArray()) if (need[c] > 0) need[c]--;
        for (char c : t.toCharArray()) if (need[c] > 0) return false;
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String t = sc.next();
        System.out.println(containsAll(s, t));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int containsAll(char* s, char* t) {
    int need[128] = {0};
    for (int i = 0; t[i]; i++) need[(int)t[i]]++;
    for (int i = 0; s[i]; i++) if (need[(int)s[i]] > 0) need[(int)s[i]]--;
    for (int i = 0; t[i]; i++) if (need[(int)t[i]] > 0) return 0;
    return 1;
}

int main() {
    char s[100001], t[100001];
    scanf("%s", s);
    scanf("%s", t);
    printf("%s\n", containsAll(s, t) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

bool containsAll(string s, string t) {
    int need[128] = {0};
    for (char c : t) need[c]++;
    for (char c : s) if (need[c] > 0) need[c]--;
    for (char c : t) if (need[c] > 0) return false;
    return true;
}

int main() {
    string s, t;
    cin >> s >> t;
    cout << (containsAll(s, t) ? "true" : "false") << "\n";
    return 0;
}`
  },
  'mws-e2': {
    python: `def min_window_single(s, c):
    for i, ch in enumerate(s):
        if ch == c:
            return 1
    return -1

s = input()
c = input()
print(min_window_single(s, c))`,
    java: `import java.util.*;

public class Solution {
    public static int minWindowSingle(String s, char c) {
        for (int i = 0; i < s.length(); i++)
            if (s.charAt(i) == c) return 1;
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        char c = sc.next().charAt(0);
        System.out.println(minWindowSingle(s, c));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int minWindowSingle(char* s, char c) {
    for (int i = 0; s[i]; i++)
        if (s[i] == c) return 1;
    return -1;
}

int main() {
    char s[100001], ch[2];
    scanf("%s", s);
    scanf("%s", ch);
    printf("%d\n", minWindowSingle(s, ch[0]));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int minWindowSingle(string s, char c) {
    for (char ch : s)
        if (ch == c) return 1;
    return -1;
}

int main() {
    string s, ch;
    cin >> s >> ch;
    cout << minWindowSingle(s, ch[0]) << "\n";
    return 0;
}`
  },
  'mws-e3': {
    python: `def count_missing(s, t):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    have = {}
    for c in s:
        have[c] = have.get(c, 0) + 1
    missing = 0
    for c, freq in need.items():
        missing += max(0, freq - have.get(c, 0))
    return missing

s = input()
t = input()
print(count_missing(s, t))`,
    java: `import java.util.*;

public class Solution {
    public static int countMissing(String s, String t) {
        int[] need = new int[128], have = new int[128];
        for (char c : t.toCharArray()) need[c]++;
        for (char c : s.toCharArray()) have[c]++;
        int missing = 0;
        for (int i = 0; i < 128; i++)
            if (need[i] > have[i]) missing += need[i] - have[i];
        return missing;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String t = sc.next();
        System.out.println(countMissing(s, t));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int countMissing(char* s, char* t) {
    int need[128] = {0}, have[128] = {0};
    for (int i = 0; t[i]; i++) need[(int)t[i]]++;
    for (int i = 0; s[i]; i++) have[(int)s[i]]++;
    int missing = 0;
    for (int i = 0; i < 128; i++)
        if (need[i] > have[i]) missing += need[i] - have[i];
    return missing;
}

int main() {
    char s[100001], t[100001];
    scanf("%s", s);
    scanf("%s", t);
    printf("%d\n", countMissing(s, t));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int countMissing(string s, string t) {
    int need[128] = {0}, have[128] = {0};
    for (char c : t) need[c]++;
    for (char c : s) have[c]++;
    int missing = 0;
    for (int i = 0; i < 128; i++)
        if (need[i] > have[i]) missing += need[i] - have[i];
    return missing;
}

int main() {
    string s, t;
    cin >> s >> t;
    cout << countMissing(s, t) << "\n";
    return 0;
}`
  },
  'mws-e4': {
    python: `def smallest_window_all_unique(s):
    from collections import Counter
    required = len(set(s))
    need = Counter(s)
    window = {}
    have, left = 0, 0
    min_len = float('inf')
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if window[c] == need[c]:
            have += 1
        while have == required:
            min_len = min(min_len, right - left + 1)
            window[s[left]] -= 1
            if window[s[left]] < need[s[left]]:
                have -= 1
            left += 1
    return min_len

s = input()
print(smallest_window_all_unique(s))`,
    java: `import java.util.*;

public class Solution {
    public static int smallestWindowAllUnique(String s) {
        int[] need = new int[128], window = new int[128];
        Set<Character> unique = new HashSet<>();
        for (char c : s.toCharArray()) { need[c]++; unique.add(c); }
        int required = unique.size(), have = 0, left = 0, minLen = Integer.MAX_VALUE;
        for (int right = 0; right < s.length(); right++) {
            window[s.charAt(right)]++;
            if (window[s.charAt(right)] == need[s.charAt(right)]) have++;
            while (have == required) {
                minLen = Math.min(minLen, right - left + 1);
                window[s.charAt(left)]--;
                if (window[s.charAt(left)] < need[s.charAt(left)]) have--;
                left++;
            }
        }
        return minLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(smallestWindowAllUnique(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

int smallestWindowAllUnique(char* s) {
    int need[128] = {0}, window[128] = {0};
    int n = strlen(s);
    for (int i = 0; i < n; i++) need[(int)s[i]]++;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX;
    for (int right = 0; right < n; right++) {
        window[(int)s[right]]++;
        if (window[(int)s[right]] == need[(int)s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) minLen = right - left + 1;
            window[(int)s[left]]--;
            if (window[(int)s[left]] < need[(int)s[left]]) have--;
            left++;
        }
    }
    return minLen;
}

int main() {
    char s[100001];
    scanf("%s", s);
    printf("%d\n", smallestWindowAllUnique(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_set>
#include <climits>
using namespace std;

int smallestWindowAllUnique(string s) {
    int need[128] = {0}, window[128] = {0};
    for (char c : s) need[c]++;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX;
    for (int right = 0; right < (int)s.size(); right++) {
        window[s[right]]++;
        if (window[s[right]] == need[s[right]]) have++;
        while (have == required) {
            minLen = min(minLen, right - left + 1);
            window[s[left]]--;
            if (window[s[left]] < need[s[left]]) have--;
            left++;
        }
    }
    return minLen;
}

int main() {
    string s;
    cin >> s;
    cout << smallestWindowAllUnique(s) << "\n";
    return 0;
}`
  },
  'mws-e5': {
    python: `def has_anagram_substring(s, t):
    if len(t) > len(s):
        return False
    need = [0] * 26
    window = [0] * 26
    for c in t:
        need[ord(c) - ord('a')] += 1
    for i in range(len(t)):
        window[ord(s[i]) - ord('a')] += 1
    if window == need:
        return True
    for i in range(len(t), len(s)):
        window[ord(s[i]) - ord('a')] += 1
        window[ord(s[i - len(t)]) - ord('a')] -= 1
        if window == need:
            return True
    return False

s = input()
t = input()
print(str(has_anagram_substring(s, t)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean hasAnagramSubstring(String s, String t) {
        if (t.length() > s.length()) return false;
        int[] need = new int[26], window = new int[26];
        for (char c : t.toCharArray()) need[c - 'a']++;
        for (int i = 0; i < t.length(); i++) window[s.charAt(i) - 'a']++;
        if (Arrays.equals(window, need)) return true;
        for (int i = t.length(); i < s.length(); i++) {
            window[s.charAt(i) - 'a']++;
            window[s.charAt(i - t.length()) - 'a']--;
            if (Arrays.equals(window, need)) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String t = sc.next();
        System.out.println(hasAnagramSubstring(s, t));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int hasAnagramSubstring(char* s, char* t) {
    int ns = strlen(s), nt = strlen(t);
    if (nt > ns) return 0;
    int need[26] = {0}, window[26] = {0};
    for (int i = 0; i < nt; i++) need[t[i] - 'a']++;
    for (int i = 0; i < nt; i++) window[s[i] - 'a']++;
    int match = 1;
    for (int i = 0; i < 26; i++) if (need[i] != window[i]) { match = 0; break; }
    if (match) return 1;
    for (int i = nt; i < ns; i++) {
        window[s[i] - 'a']++;
        window[s[i - nt] - 'a']--;
        match = 1;
        for (int j = 0; j < 26; j++) if (need[j] != window[j]) { match = 0; break; }
        if (match) return 1;
    }
    return 0;
}

int main() {
    char s[100001], t[100001];
    scanf("%s", s);
    scanf("%s", t);
    printf("%s\n", hasAnagramSubstring(s, t) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

bool hasAnagramSubstring(string s, string t) {
    if (t.size() > s.size()) return false;
    vector<int> need(26, 0), window(26, 0);
    for (char c : t) need[c - 'a']++;
    for (int i = 0; i < (int)t.size(); i++) window[s[i] - 'a']++;
    if (window == need) return true;
    for (int i = t.size(); i < (int)s.size(); i++) {
        window[s[i] - 'a']++;
        window[s[i - t.size()] - 'a']--;
        if (window == need) return true;
    }
    return false;
}

int main() {
    string s, t;
    cin >> s >> t;
    cout << (hasAnagramSubstring(s, t) ? "true" : "false") << "\n";
    return 0;
}`
  },
};

export const MinimumWindowSubstringMediumSolutions = {
  'mws-m1': {
    python: `def min_window(s, t):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    window = {}
    have, required = 0, len(need)
    left = 0
    min_len = float('inf')
    start = 0
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]:
            have += 1
        while have == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                start = left
            window[s[left]] -= 1
            if s[left] in need and window[s[left]] < need[s[left]]:
                have -= 1
            left += 1
    return s[start:start + min_len] if min_len != float('inf') else ""

s = input()
t = input()
print(min_window(s, t))`,
    java: `import java.util.*;

public class Solution {
    public static String minWindow(String s, String t) {
        int[] need = new int[128], window = new int[128];
        for (char c : t.toCharArray()) need[c]++;
        int have = 0, required = 0;
        for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
        int left = 0, minLen = Integer.MAX_VALUE, start = 0;
        for (int right = 0; right < s.length(); right++) {
            window[s.charAt(right)]++;
            if (need[s.charAt(right)] > 0 && window[s.charAt(right)] == need[s.charAt(right)]) have++;
            while (have == required) {
                if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
                window[s.charAt(left)]--;
                if (need[s.charAt(left)] > 0 && window[s.charAt(left)] < need[s.charAt(left)]) have--;
                left++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String t = sc.next();
        System.out.println(minWindow(s, t));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

void minWindow(char* s, char* t, char* result) {
    int need[128] = {0}, window[128] = {0};
    int sLen = strlen(s);
    for (int i = 0; t[i]; i++) need[(int)t[i]]++;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX, start = 0;
    for (int right = 0; right < sLen; right++) {
        window[(int)s[right]]++;
        if (need[(int)s[right]] > 0 && window[(int)s[right]] == need[(int)s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
            window[(int)s[left]]--;
            if (need[(int)s[left]] > 0 && window[(int)s[left]] < need[(int)s[left]]) have--;
            left++;
        }
    }
    if (minLen == INT_MAX) result[0] = '\\0';
    else { strncpy(result, s + start, minLen); result[minLen] = '\\0'; }
}

int main() {
    char s[100001], t[100001], result[100001];
    scanf("%s", s);
    scanf("%s", t);
    minWindow(s, t, result);
    printf("%s\n", result);
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <climits>
using namespace std;

string minWindow(string s, string t) {
    int need[128] = {0}, window[128] = {0};
    for (char c : t) need[c]++;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX, start = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        window[s[right]]++;
        if (need[s[right]] > 0 && window[s[right]] == need[s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
            window[s[left]]--;
            if (need[s[left]] > 0 && window[s[left]] < need[s[left]]) have--;
            left++;
        }
    }
    return minLen == INT_MAX ? "" : s.substr(start, minLen);
}

int main() {
    string s, t;
    cin >> s >> t;
    cout << minWindow(s, t) << "\n";
    return 0;
}`
  },
  'mws-m2': {
    python: `def find_anagrams(s, p):
    if len(p) > len(s):
        return []
    need = [0] * 26
    window = [0] * 26
    for c in p:
        need[ord(c) - ord('a')] += 1
    for i in range(len(p)):
        window[ord(s[i]) - ord('a')] += 1
    result = []
    if window == need:
        result.append(0)
    for i in range(len(p), len(s)):
        window[ord(s[i]) - ord('a')] += 1
        window[ord(s[i - len(p)]) - ord('a')] -= 1
        if window == need:
            result.append(i - len(p) + 1)
    return result

s = input()
p = input()
result = find_anagrams(s, p)
print(" ".join(map(str, result)))`,
    java: `import java.util.*;

public class Solution {
    public static List<Integer> findAnagrams(String s, String p) {
        List<Integer> result = new ArrayList<>();
        if (p.length() > s.length()) return result;
        int[] need = new int[26], window = new int[26];
        for (char c : p.toCharArray()) need[c - 'a']++;
        for (int i = 0; i < p.length(); i++) window[s.charAt(i) - 'a']++;
        if (Arrays.equals(window, need)) result.add(0);
        for (int i = p.length(); i < s.length(); i++) {
            window[s.charAt(i) - 'a']++;
            window[s.charAt(i - p.length()) - 'a']--;
            if (Arrays.equals(window, need)) result.add(i - p.length() + 1);
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String p = sc.next();
        List<Integer> result = findAnagrams(s, p);
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < result.size(); i++) {
            if (i > 0) sb.append(" ");
            sb.append(result.get(i));
        }
        System.out.println(sb.toString());
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

void findAnagrams(char* s, char* p, int* result, int* size) {
    int ns = strlen(s), np = strlen(p);
    *size = 0;
    if (np > ns) return;
    int need[26] = {0}, window[26] = {0};
    for (int i = 0; i < np; i++) need[p[i] - 'a']++;
    for (int i = 0; i < np; i++) window[s[i] - 'a']++;
    int match = 1;
    for (int i = 0; i < 26; i++) if (need[i] != window[i]) { match = 0; break; }
    if (match) result[(*size)++] = 0;
    for (int i = np; i < ns; i++) {
        window[s[i] - 'a']++;
        window[s[i - np] - 'a']--;
        match = 1;
        for (int j = 0; j < 26; j++) if (need[j] != window[j]) { match = 0; break; }
        if (match) result[(*size)++] = i - np + 1;
    }
}

int main() {
    char s[30001], p[30001];
    scanf("%s", s);
    scanf("%s", p);
    int result[30001], size;
    findAnagrams(s, p, result, &size);
    for (int i = 0; i < size; i++) {
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

vector<int> findAnagrams(string s, string p) {
    vector<int> result;
    if (p.size() > s.size()) return result;
    vector<int> need(26, 0), window(26, 0);
    for (char c : p) need[c - 'a']++;
    for (int i = 0; i < (int)p.size(); i++) window[s[i] - 'a']++;
    if (window == need) result.push_back(0);
    for (int i = p.size(); i < (int)s.size(); i++) {
        window[s[i] - 'a']++;
        window[s[i - p.size()] - 'a']--;
        if (window == need) result.push_back(i - p.size() + 1);
    }
    return result;
}

int main() {
    string s, p;
    cin >> s >> p;
    vector<int> result = findAnagrams(s, p);
    for (int i = 0; i < (int)result.size(); i++) {
        if (i > 0) cout << " ";
        cout << result[i];
    }
    cout << "\n";
    return 0;
}`
  },
  'mws-m3': {
    python: `def longest_k_distinct(s, k):
    window = {}
    left = 0
    max_len = 0
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        while len(window) > k:
            window[s[left]] -= 1
            if window[s[left]] == 0:
                del window[s[left]]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

s = input()
k = int(input())
print(longest_k_distinct(s, k))`,
    java: `import java.util.*;

public class Solution {
    public static int longestKDistinct(String s, int k) {
        Map<Character, Integer> window = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            window.put(c, window.getOrDefault(c, 0) + 1);
            while (window.size() > k) {
                char lc = s.charAt(left);
                window.put(lc, window.get(lc) - 1);
                if (window.get(lc) == 0) window.remove(lc);
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int k = sc.nextInt();
        System.out.println(longestKDistinct(s, k));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int longestKDistinct(char* s, int k) {
    int window[128] = {0};
    int distinct = 0, left = 0, maxLen = 0, n = strlen(s);
    for (int right = 0; right < n; right++) {
        if (window[(int)s[right]] == 0) distinct++;
        window[(int)s[right]]++;
        while (distinct > k) {
            window[(int)s[left]]--;
            if (window[(int)s[left]] == 0) distinct--;
            left++;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    char s[100001];
    int k;
    scanf("%s", s);
    scanf("%d", &k);
    printf("%d\n", longestKDistinct(s, k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int longestKDistinct(string s, int k) {
    unordered_map<char, int> window;
    int left = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        window[s[right]]++;
        while ((int)window.size() > k) {
            window[s[left]]--;
            if (window[s[left]] == 0) window.erase(s[left]);
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s;
    int k;
    cin >> s >> k;
    cout << longestKDistinct(s, k) << "\n";
    return 0;
}`
  },
  'mws-m4': {
    python: `def min_subarray_len(target, nums):
    left = 0
    total = 0
    min_len = float('inf')
    for right in range(len(nums)):
        total += nums[right]
        while total >= target:
            min_len = min(min_len, right - left + 1)
            total -= nums[left]
            left += 1
    return 0 if min_len == float('inf') else min_len

target = int(input())
n = int(input())
nums = list(map(int, input().split()))
print(min_subarray_len(target, nums))`,
    java: `import java.util.*;

public class Solution {
    public static int minSubarrayLen(int target, int[] nums) {
        int left = 0, total = 0, minLen = Integer.MAX_VALUE;
        for (int right = 0; right < nums.length; right++) {
            total += nums[right];
            while (total >= target) {
                minLen = Math.min(minLen, right - left + 1);
                total -= nums[left++];
            }
        }
        return minLen == Integer.MAX_VALUE ? 0 : minLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int target = sc.nextInt();
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(minSubarrayLen(target, nums));
    }
}`,
    c: `#include <stdio.h>
#include <limits.h>

int minSubarrayLen(int target, int* nums, int n) {
    int left = 0, total = 0, minLen = INT_MAX;
    for (int right = 0; right < n; right++) {
        total += nums[right];
        while (total >= target) {
            if (right - left + 1 < minLen) minLen = right - left + 1;
            total -= nums[left++];
        }
    }
    return minLen == INT_MAX ? 0 : minLen;
}

int main() {
    int target, n;
    scanf("%d", &target);
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\n", minSubarrayLen(target, nums, n));
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;

int minSubarrayLen(int target, vector<int>& nums) {
    int left = 0, total = 0, minLen = INT_MAX;
    for (int right = 0; right < (int)nums.size(); right++) {
        total += nums[right];
        while (total >= target) {
            minLen = min(minLen, right - left + 1);
            total -= nums[left++];
        }
    }
    return minLen == INT_MAX ? 0 : minLen;
}

int main() {
    int target, n;
    cin >> target >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << minSubarrayLen(target, nums) << "\n";
    return 0;
}`
  },
  'mws-m5': {
    python: `def min_window(s, t):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    window = {}
    have, required = 0, len(need)
    left = 0
    min_len = float('inf')
    start = 0
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]:
            have += 1
        while have == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                start = left
            window[s[left]] -= 1
            if s[left] in need and window[s[left]] < need[s[left]]:
                have -= 1
            left += 1
    return s[start:start + min_len] if min_len != float('inf') else ""

s = input()
q = int(input())
for _ in range(q):
    t = input()
    print(min_window(s, t))`,
    java: `import java.util.*;

public class Solution {
    public static String minWindow(String s, String t) {
        int[] need = new int[128], window = new int[128];
        for (char c : t.toCharArray()) need[c]++;
        int required = 0;
        for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
        int have = 0, left = 0, minLen = Integer.MAX_VALUE, start = 0;
        for (int right = 0; right < s.length(); right++) {
            window[s.charAt(right)]++;
            if (need[s.charAt(right)] > 0 && window[s.charAt(right)] == need[s.charAt(right)]) have++;
            while (have == required) {
                if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
                window[s.charAt(left)]--;
                if (need[s.charAt(left)] > 0 && window[s.charAt(left)] < need[s.charAt(left)]) have--;
                left++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int q = sc.nextInt();
        for (int i = 0; i < q; i++) {
            String t = sc.next();
            System.out.println(minWindow(s, t));
        }
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

void minWindow(char* s, char* t, char* result) {
    int need[128] = {0}, window[128] = {0};
    int sLen = strlen(s);
    for (int i = 0; t[i]; i++) need[(int)t[i]]++;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX, start = 0;
    for (int right = 0; right < sLen; right++) {
        window[(int)s[right]]++;
        if (need[(int)s[right]] > 0 && window[(int)s[right]] == need[(int)s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
            window[(int)s[left]]--;
            if (need[(int)s[left]] > 0 && window[(int)s[left]] < need[(int)s[left]]) have--;
            left++;
        }
    }
    if (minLen == INT_MAX) result[0] = '\\0';
    else { strncpy(result, s + start, minLen); result[minLen] = '\\0'; }
}

int main() {
    char s[100001], t[101], result[100001];
    scanf("%s", s);
    int q;
    scanf("%d", &q);
    while (q--) {
        scanf("%s", t);
        minWindow(s, t, result);
        printf("%s\n", result);
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <climits>
using namespace std;

string minWindow(string s, string t) {
    int need[128] = {0}, window[128] = {0};
    for (char c : t) need[c]++;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX, start = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        window[s[right]]++;
        if (need[s[right]] > 0 && window[s[right]] == need[s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
            window[s[left]]--;
            if (need[s[left]] > 0 && window[s[left]] < need[s[left]]) have--;
            left++;
        }
    }
    return minLen == INT_MAX ? "" : s.substr(start, minLen);
}

int main() {
    string s;
    int q;
    cin >> s >> q;
    while (q--) {
        string t;
        cin >> t;
        cout << minWindow(s, t) << "\n";
    }
    return 0;
}`
  },
};

export const MinimumWindowSubstringHardSolutions = {
  'mws-h1': {
    python: `def at_most_k_distinct(s, k):
    window = {}
    left = 0
    result = 0
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        while len(window) > k:
            window[s[left]] -= 1
            if window[s[left]] == 0:
                del window[s[left]]
            left += 1
        result += right - left + 1
    return result

def min_window_k_distinct(s, k):
    if k == 0:
        return -1
    min_len = float('inf')
    window = {}
    left = 0
    distinct = 0
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if window[c] == 1:
            distinct += 1
        while distinct > k:
            window[s[left]] -= 1
            if window[s[left]] == 0:
                del window[s[left]]
                distinct -= 1
            left += 1
        if distinct == k:
            inner_left = left
            while True:
                lc = s[inner_left]
                if window[lc] > 1:
                    window[lc] -= 1
                    inner_left += 1
                else:
                    break
            min_len = min(min_len, right - inner_left + 1)
    return -1 if min_len == float('inf') else min_len

s = input()
k = int(input())
print(min_window_k_distinct(s, k))`,
    java: `import java.util.*;

public class Solution {
    public static int minWindowKDistinct(String s, int k) {
        if (k == 0) return -1;
        Map<Character, Integer> window = new HashMap<>();
        int left = 0, minLen = Integer.MAX_VALUE, distinct = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            window.put(c, window.getOrDefault(c, 0) + 1);
            if (window.get(c) == 1) distinct++;
            while (distinct > k) {
                char lc = s.charAt(left);
                window.put(lc, window.get(lc) - 1);
                if (window.get(lc) == 0) { window.remove(lc); distinct--; }
                left++;
            }
            if (distinct == k) {
                int innerLeft = left;
                while (window.get(s.charAt(innerLeft)) > 1) {
                    window.put(s.charAt(innerLeft), window.get(s.charAt(innerLeft)) - 1);
                    innerLeft++;
                }
                minLen = Math.min(minLen, right - innerLeft + 1);
                window.put(s.charAt(innerLeft), window.get(s.charAt(innerLeft)) + 1);
                while (innerLeft > left) {
                    innerLeft--;
                    window.put(s.charAt(innerLeft), window.get(s.charAt(innerLeft)) + 1);
                }
            }
        }
        return minLen == Integer.MAX_VALUE ? -1 : minLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int k = sc.nextInt();
        System.out.println(minWindowKDistinct(s, k));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

int minWindowKDistinct(char* s, int k) {
    if (k == 0) return -1;
    int window[128] = {0};
    int n = strlen(s), left = 0, minLen = INT_MAX, distinct = 0;
    for (int right = 0; right < n; right++) {
        if (window[(int)s[right]] == 0) distinct++;
        window[(int)s[right]]++;
        while (distinct > k) {
            window[(int)s[left]]--;
            if (window[(int)s[left]] == 0) distinct--;
            left++;
        }
        if (distinct == k) {
            int innerLeft = left;
            while (window[(int)s[innerLeft]] > 1) {
                window[(int)s[innerLeft]]--;
                innerLeft++;
            }
            if (right - innerLeft + 1 < minLen) minLen = right - innerLeft + 1;
            while (innerLeft >= left) {
                window[(int)s[innerLeft]]++;
                if (innerLeft == left) break;
                innerLeft--;
            }
        }
    }
    return minLen == INT_MAX ? -1 : minLen;
}

int main() {
    char s[100001];
    int k;
    scanf("%s", s);
    scanf("%d", &k);
    printf("%d\n", minWindowKDistinct(s, k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_map>
#include <climits>
using namespace std;

int minWindowKDistinct(string s, int k) {
    if (k == 0) return -1;
    unordered_map<char, int> window;
    int left = 0, minLen = INT_MAX, distinct = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        if (window[s[right]]++ == 0) distinct++;
        while (distinct > k) {
            if (--window[s[left]] == 0) { window.erase(s[left]); distinct--; }
            left++;
        }
        if (distinct == k) {
            int innerLeft = left;
            while (window[s[innerLeft]] > 1) { window[s[innerLeft]]--; innerLeft++; }
            minLen = min(minLen, right - innerLeft + 1);
            while (innerLeft >= left) { window[s[innerLeft]]++; if (innerLeft-- == left) break; }
        }
    }
    return minLen == INT_MAX ? -1 : minLen;
}

int main() {
    string s;
    int k;
    cin >> s >> k;
    cout << minWindowKDistinct(s, k) << "\n";
    return 0;
}`
  },
  'mws-h2': {
    python: `def min_window_freq_constraint(s, t, m):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + m
    window = {}
    have, required = 0, len(need)
    left = 0
    min_len = float('inf')
    start = 0
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]:
            have += 1
        while have == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                start = left
            window[s[left]] -= 1
            if s[left] in need and window[s[left]] < need[s[left]]:
                have -= 1
            left += 1
    return s[start:start + min_len] if min_len != float('inf') else ""

s = input()
t = input()
m = int(input())
print(min_window_freq_constraint(s, t, m))`,
    java: `import java.util.*;

public class Solution {
    public static String minWindowFreqConstraint(String s, String t, int m) {
        int[] need = new int[128], window = new int[128];
        for (char c : t.toCharArray()) need[c] += m;
        int required = 0;
        for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
        int have = 0, left = 0, minLen = Integer.MAX_VALUE, start = 0;
        for (int right = 0; right < s.length(); right++) {
            window[s.charAt(right)]++;
            if (need[s.charAt(right)] > 0 && window[s.charAt(right)] == need[s.charAt(right)]) have++;
            while (have == required) {
                if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
                window[s.charAt(left)]--;
                if (need[s.charAt(left)] > 0 && window[s.charAt(left)] < need[s.charAt(left)]) have--;
                left++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String t = sc.next();
        int m = sc.nextInt();
        System.out.println(minWindowFreqConstraint(s, t, m));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

void minWindowFreqConstraint(char* s, char* t, int m, char* result) {
    int need[128] = {0}, window[128] = {0};
    int sLen = strlen(s);
    for (int i = 0; t[i]; i++) need[(int)t[i]] += m;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX, start = 0;
    for (int right = 0; right < sLen; right++) {
        window[(int)s[right]]++;
        if (need[(int)s[right]] > 0 && window[(int)s[right]] == need[(int)s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
            window[(int)s[left]]--;
            if (need[(int)s[left]] > 0 && window[(int)s[left]] < need[(int)s[left]]) have--;
            left++;
        }
    }
    if (minLen == INT_MAX) result[0] = '\\0';
    else { strncpy(result, s + start, minLen); result[minLen] = '\\0'; }
}

int main() {
    char s[100001], t[101], result[100001];
    int m;
    scanf("%s", s);
    scanf("%s", t);
    scanf("%d", &m);
    minWindowFreqConstraint(s, t, m, result);
    printf("%s\n", result);
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <climits>
using namespace std;

string minWindowFreqConstraint(string s, string t, int m) {
    int need[128] = {0}, window[128] = {0};
    for (char c : t) need[c] += m;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX, start = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        window[s[right]]++;
        if (need[s[right]] > 0 && window[s[right]] == need[s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
            window[s[left]]--;
            if (need[s[left]] > 0 && window[s[left]] < need[s[left]]) have--;
            left++;
        }
    }
    return minLen == INT_MAX ? "" : s.substr(start, minLen);
}

int main() {
    string s, t;
    int m;
    cin >> s >> t >> m;
    cout << minWindowFreqConstraint(s, t, m) << "\n";
    return 0;
}`
  },
  'mws-h3': {
    python: `import heapq

def smallest_range(nums):
    heap = []
    cur_max = float('-inf')
    for i, row in enumerate(nums):
        heapq.heappush(heap, (row[0], i, 0))
        cur_max = max(cur_max, row[0])
    range_lo, range_hi = float('-inf'), float('inf')
    while len(heap) == len(nums):
        cur_min, i, j = heapq.heappop(heap)
        if cur_max - cur_min < range_hi - range_lo:
            range_lo, range_hi = cur_min, cur_max
        if j + 1 < len(nums[i]):
            next_val = nums[i][j + 1]
            heapq.heappush(heap, (next_val, i, j + 1))
            cur_max = max(cur_max, next_val)
        else:
            break
    return [range_lo, range_hi]

k = int(input())
nums = []
for _ in range(k):
    n = int(input())
    nums.append(list(map(int, input().split())))
result = smallest_range(nums)
print(result[0], result[1])`,
    java: `import java.util.*;

public class Solution {
    public static int[] smallestRange(List<List<Integer>> nums) {
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> a[0] - b[0]);
        int curMax = Integer.MIN_VALUE;
        for (int i = 0; i < nums.size(); i++) {
            heap.offer(new int[]{nums.get(i).get(0), i, 0});
            curMax = Math.max(curMax, nums.get(i).get(0));
        }
        int[] result = {0, Integer.MAX_VALUE};
        while (heap.size() == nums.size()) {
            int[] curr = heap.poll();
            int curMin = curr[0], i = curr[1], j = curr[2];
            if (curMax - curMin < result[1] - result[0]) {
                result[0] = curMin; result[1] = curMax;
            }
            if (j + 1 < nums.get(i).size()) {
                int nextVal = nums.get(i).get(j + 1);
                heap.offer(new int[]{nextVal, i, j + 1});
                curMax = Math.max(curMax, nextVal);
            } else break;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        List<List<Integer>> nums = new ArrayList<>();
        for (int i = 0; i < k; i++) {
            int n = sc.nextInt();
            List<Integer> list = new ArrayList<>();
            for (int j = 0; j < n; j++) list.add(sc.nextInt());
            nums.add(list);
        }
        int[] result = smallestRange(nums);
        System.out.println(result[0] + " " + result[1]);
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

typedef struct { int val, row, col; } Node;

int cmp(const void* a, const void* b) {
    return ((Node*)a)->val - ((Node*)b)->val;
}

void smallestRange(int** nums, int* sizes, int k, int* lo, int* hi) {
    Node* heap = (Node*)malloc(k * sizeof(Node));
    int curMax = INT_MIN;
    for (int i = 0; i < k; i++) {
        heap[i] = (Node){nums[i][0], i, 0};
        if (nums[i][0] > curMax) curMax = nums[i][0];
    }
    *lo = INT_MIN; *hi = INT_MAX;
    while (1) {
        qsort(heap, k, sizeof(Node), cmp);
        int curMin = heap[0].val, row = heap[0].row, col = heap[0].col;
        if (curMax - curMin < *hi - *lo) { *lo = curMin; *hi = curMax; }
        if (col + 1 >= sizes[row]) break;
        heap[0] = (Node){nums[row][col + 1], row, col + 1};
        if (nums[row][col + 1] > curMax) curMax = nums[row][col + 1];
    }
    free(heap);
}

int main() {
    int k;
    scanf("%d", &k);
    int* sizes = (int*)malloc(k * sizeof(int));
    int** nums = (int**)malloc(k * sizeof(int*));
    for (int i = 0; i < k; i++) {
        scanf("%d", &sizes[i]);
        nums[i] = (int*)malloc(sizes[i] * sizeof(int));
        for (int j = 0; j < sizes[i]; j++) scanf("%d", &nums[i][j]);
    }
    int lo, hi;
    smallestRange(nums, sizes, k, &lo, &hi);
    printf("%d %d\n", lo, hi);
    for (int i = 0; i < k; i++) free(nums[i]);
    free(nums); free(sizes);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <queue>
#include <climits>
using namespace std;

vector<int> smallestRange(vector<vector<int>>& nums) {
    priority_queue<tuple<int,int,int>, vector<tuple<int,int,int>>, greater<>> heap;
    int curMax = INT_MIN;
    for (int i = 0; i < (int)nums.size(); i++) {
        heap.push({nums[i][0], i, 0});
        curMax = max(curMax, nums[i][0]);
    }
    vector<int> result = {0, INT_MAX};
    while ((int)heap.size() == (int)nums.size()) {
        auto [curMin, i, j] = heap.top(); heap.pop();
        if (curMax - curMin < result[1] - result[0])
            result = {curMin, curMax};
        if (j + 1 < (int)nums[i].size()) {
            heap.push({nums[i][j + 1], i, j + 1});
            curMax = max(curMax, nums[i][j + 1]);
        } else break;
    }
    return result;
}

int main() {
    int k;
    cin >> k;
    vector<vector<int>> nums(k);
    for (int i = 0; i < k; i++) {
        int n; cin >> n;
        nums[i].resize(n);
        for (int j = 0; j < n; j++) cin >> nums[i][j];
    }
    vector<int> result = smallestRange(nums);
    cout << result[0] << " " << result[1] << "\n";
    return 0;
}`
  },
  'mws-h4': {
    python: `def min_window_subsequence(s, t):
    min_len = float('inf')
    start = 0
    i = 0
    while i < len(s):
        j = 0
        while i < len(s) and j < len(t):
            if s[i] == t[j]:
                j += 1
            i += 1
        if j == len(t):
            end = i
            i -= 1
            j -= 1
            while j >= 0:
                if s[i] == t[j]:
                    j -= 1
                i -= 1
            i += 1
            if end - i < min_len:
                min_len = end - i
                start = i
            i += 1
    return s[start:start + min_len] if min_len != float('inf') else ""

s = input()
t = input()
print(min_window_subsequence(s, t))`,
    java: `import java.util.*;

public class Solution {
    public static String minWindowSubsequence(String s, String t) {
        int minLen = Integer.MAX_VALUE, start = 0;
        int i = 0;
        while (i < s.length()) {
            int j = 0;
            while (i < s.length() && j < t.length()) {
                if (s.charAt(i) == t.charAt(j)) j++;
                i++;
            }
            if (j == t.length()) {
                int end = i;
                i--; j--;
                while (j >= 0) {
                    if (s.charAt(i) == t.charAt(j)) j--;
                    i--;
                }
                i++;
                if (end - i < minLen) { minLen = end - i; start = i; }
                i++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(start, start + minLen);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        String t = sc.next();
        System.out.println(minWindowSubsequence(s, t));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

void minWindowSubsequence(char* s, char* t, char* result) {
    int sLen = strlen(s), tLen = strlen(t);
    int minLen = INT_MAX, start = 0, i = 0;
    while (i < sLen) {
        int j = 0;
        while (i < sLen && j < tLen) {
            if (s[i] == t[j]) j++;
            i++;
        }
        if (j == tLen) {
            int end = i;
            i--; j--;
            while (j >= 0) {
                if (s[i] == t[j]) j--;
                i--;
            }
            i++;
            if (end - i < minLen) { minLen = end - i; start = i; }
            i++;
        }
    }
    if (minLen == INT_MAX) result[0] = '\\0';
    else { strncpy(result, s + start, minLen); result[minLen] = '\\0'; }
}

int main() {
    char s[20001], t[101], result[20001];
    scanf("%s", s);
    scanf("%s", t);
    minWindowSubsequence(s, t, result);
    printf("%s\n", result);
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <climits>
using namespace std;

string minWindowSubsequence(string s, string t) {
    int minLen = INT_MAX, start = 0, i = 0;
    int sLen = s.size(), tLen = t.size();
    while (i < sLen) {
        int j = 0;
        while (i < sLen && j < tLen) {
            if (s[i] == t[j]) j++;
            i++;
        }
        if (j == tLen) {
            int end = i;
            i--; j--;
            while (j >= 0) {
                if (s[i] == t[j]) j--;
                i--;
            }
            i++;
            if (end - i < minLen) { minLen = end - i; start = i; }
            i++;
        }
    }
    return minLen == INT_MAX ? "" : s.substr(start, minLen);
}

int main() {
    string s, t;
    cin >> s >> t;
    cout << minWindowSubsequence(s, t) << "\n";
    return 0;
}`
  },
  'mws-h5': {
    python: `def min_window_index(s, t):
    need = {}
    for c in t:
        need[c] = need.get(c, 0) + 1
    window = {}
    have, required = 0, len(need)
    left = 0
    min_len = float('inf')
    best_start = -1
    for right, c in enumerate(s):
        window[c] = window.get(c, 0) + 1
        if c in need and window[c] == need[c]:
            have += 1
        while have == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                best_start = left
            window[s[left]] -= 1
            if s[left] in need and window[s[left]] < need[s[left]]:
                have -= 1
            left += 1
    return best_start

s = input()
q = int(input())
for _ in range(q):
    t = input()
    print(min_window_index(s, t))`,
    java: `import java.util.*;

public class Solution {
    public static int minWindowIndex(String s, String t) {
        int[] need = new int[128], window = new int[128];
        for (char c : t.toCharArray()) need[c]++;
        int required = 0;
        for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
        int have = 0, left = 0, minLen = Integer.MAX_VALUE, bestStart = -1;
        for (int right = 0; right < s.length(); right++) {
            window[s.charAt(right)]++;
            if (need[s.charAt(right)] > 0 && window[s.charAt(right)] == need[s.charAt(right)]) have++;
            while (have == required) {
                if (right - left + 1 < minLen) { minLen = right - left + 1; bestStart = left; }
                window[s.charAt(left)]--;
                if (need[s.charAt(left)] > 0 && window[s.charAt(left)] < need[s.charAt(left)]) have--;
                left++;
            }
        }
        return bestStart;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int q = sc.nextInt();
        for (int i = 0; i < q; i++) {
            String t = sc.next();
            System.out.println(minWindowIndex(s, t));
        }
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

int minWindowIndex(char* s, char* t) {
    int need[128] = {0}, window[128] = {0};
    int sLen = strlen(s);
    for (int i = 0; t[i]; i++) need[(int)t[i]]++;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX, bestStart = -1;
    for (int right = 0; right < sLen; right++) {
        window[(int)s[right]]++;
        if (need[(int)s[right]] > 0 && window[(int)s[right]] == need[(int)s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; bestStart = left; }
            window[(int)s[left]]--;
            if (need[(int)s[left]] > 0 && window[(int)s[left]] < need[(int)s[left]]) have--;
            left++;
        }
    }
    return bestStart;
}

int main() {
    char s[100001], t[101];
    scanf("%s", s);
    int q;
    scanf("%d", &q);
    while (q--) {
        scanf("%s", t);
        printf("%d\n", minWindowIndex(s, t));
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <climits>
using namespace std;

int minWindowIndex(string s, string t) {
    int need[128] = {0}, window[128] = {0};
    for (char c : t) need[c]++;
    int required = 0;
    for (int i = 0; i < 128; i++) if (need[i] > 0) required++;
    int have = 0, left = 0, minLen = INT_MAX, bestStart = -1;
    for (int right = 0; right < (int)s.size(); right++) {
        window[s[right]]++;
        if (need[s[right]] > 0 && window[s[right]] == need[s[right]]) have++;
        while (have == required) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; bestStart = left; }
            window[s[left]]--;
            if (need[s[left]] > 0 && window[s[left]] < need[s[left]]) have--;
            left++;
        }
    }
    return bestStart;
}

int main() {
    string s;
    int q;
    cin >> s >> q;
    while (q--) {
        string t;
        cin >> t;
        cout << minWindowIndex(s, t) << "\n";
    }
    return 0;
}`
  },
};
