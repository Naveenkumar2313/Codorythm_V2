export const LongestRepeatingCharacterReplacementSolutions = {
  'lrcr-e1': {
    python: `def max_freq_in_window(s, w):
    count = [0] * 26
    max_freq = 0
    for i in range(w):
        count[ord(s[i]) - ord('A')] += 1
    max_freq = max(count)
    result = max_freq
    for i in range(w, len(s)):
        count[ord(s[i]) - ord('A')] += 1
        count[ord(s[i - w]) - ord('A')] -= 1
        max_freq = max(count)
        result = max(result, max_freq)
    return result

s = input()
w = int(input())
print(max_freq_in_window(s, w))`,
    java: `import java.util.*;

public class Solution {
    public static int maxFreqInWindow(String s, int w) {
        int[] count = new int[26];
        int maxFreq = 0, result = 0;
        for (int i = 0; i < w; i++)
            count[s.charAt(i) - 'A']++;
        for (int c : count) maxFreq = Math.max(maxFreq, c);
        result = maxFreq;
        for (int i = w; i < s.length(); i++) {
            count[s.charAt(i) - 'A']++;
            count[s.charAt(i - w) - 'A']--;
            maxFreq = 0;
            for (int c : count) maxFreq = Math.max(maxFreq, c);
            result = Math.max(result, maxFreq);
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int w = sc.nextInt();
        System.out.println(maxFreqInWindow(s, w));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int maxFreqInWindow(char* s, int w) {
    int count[26] = {0};
    int n = strlen(s), maxFreq = 0, result = 0;
    for (int i = 0; i < w; i++) count[s[i] - 'A']++;
    for (int i = 0; i < 26; i++) if (count[i] > maxFreq) maxFreq = count[i];
    result = maxFreq;
    for (int i = w; i < n; i++) {
        count[s[i] - 'A']++;
        count[s[i - w] - 'A']--;
        maxFreq = 0;
        for (int j = 0; j < 26; j++) if (count[j] > maxFreq) maxFreq = count[j];
        if (maxFreq > result) result = maxFreq;
    }
    return result;
}

int main() {
    char s[100001];
    int w;
    scanf("%s", s);
    scanf("%d", &w);
    printf("%d\n", maxFreqInWindow(s, w));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int maxFreqInWindow(string s, int w) {
    int count[26] = {0};
    int result = 0;
    for (int i = 0; i < w; i++) count[s[i] - 'A']++;
    result = *max_element(count, count + 26);
    for (int i = w; i < (int)s.size(); i++) {
        count[s[i] - 'A']++;
        count[s[i - w] - 'A']--;
        result = max(result, *max_element(count, count + 26));
    }
    return result;
}

int main() {
    string s;
    int w;
    cin >> s >> w;
    cout << maxFreqInWindow(s, w) << " \n";
    return 0;
}`
  },
  'lrcr-e2': {
    python: `def can_make_uniform(s, k):
    count = [0] * 26
    for c in s:
        count[ord(c) - ord('A')] += 1
    max_freq = max(count)
    return len(s) - max_freq <= k

s = input()
k = int(input())
print(str(can_make_uniform(s, k)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean canMakeUniform(String s, int k) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'A']++;
        int maxFreq = 0;
        for (int c : count) maxFreq = Math.max(maxFreq, c);
        return s.length() - maxFreq <= k;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int k = sc.nextInt();
        System.out.println(canMakeUniform(s, k));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int canMakeUniform(char* s, int k) {
    int count[26] = {0};
    int n = strlen(s), maxFreq = 0;
    for (int i = 0; i < n; i++) count[s[i] - 'A']++;
    for (int i = 0; i < 26; i++) if (count[i] > maxFreq) maxFreq = count[i];
    return n - maxFreq <= k;
}

int main() {
    char s[100001];
    int k;
    scanf("%s", s);
    scanf("%d", &k);
    printf("%s\n", canMakeUniform(s, k) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

bool canMakeUniform(string s, int k) {
    int count[26] = {0};
    for (char c : s) count[c - 'A']++;
    int maxFreq = *max_element(count, count + 26);
    return (int)s.size() - maxFreq <= k;
}

int main() {
    string s;
    int k;
    cin >> s >> k;
    cout << (canMakeUniform(s, k) ? "true" : "false") << "\n";
    return 0;
}`
  },
  'lrcr-e3': {
    python: `def min_replacements_uniform(s):
    count = [0] * 26
    for c in s:
        count[ord(c) - ord('A')] += 1
    max_freq = max(count)
    return len(s) - max_freq

s = input()
print(min_replacements_uniform(s))`,
    java: `import java.util.*;

public class Solution {
    public static int minReplacementsUniform(String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'A']++;
        int maxFreq = 0;
        for (int c : count) maxFreq = Math.max(maxFreq, c);
        return s.length() - maxFreq;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(minReplacementsUniform(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int minReplacementsUniform(char* s) {
    int count[26] = {0};
    int n = strlen(s), maxFreq = 0;
    for (int i = 0; i < n; i++) count[s[i] - 'A']++;
    for (int i = 0; i < 26; i++) if (count[i] > maxFreq) maxFreq = count[i];
    return n - maxFreq;
}

int main() {
    char s[100001];
    scanf("%s", s);
    printf("%d\n", minReplacementsUniform(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int minReplacementsUniform(string s) {
    int count[26] = {0};
    for (char c : s) count[c - 'A']++;
    int maxFreq = *max_element(count, count + 26);
    return (int)s.size() - maxFreq;
}

int main() {
    string s;
    cin >> s;
    cout << minReplacementsUniform(s) << "\n";
    return 0;
}`
  },
  'lrcr-e4': {
    python: `def longest_same_char(s):
    max_len = 1
    cur_len = 1
    for i in range(1, len(s)):
        if s[i] == s[i - 1]:
            cur_len += 1
            if cur_len > max_len:
                max_len = cur_len
        else:
            cur_len = 1
    return max_len

s = input()
print(longest_same_char(s))`,
    java: `import java.util.*;

public class Solution {
    public static int longestSameChar(String s) {
        int maxLen = 1, curLen = 1;
        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == s.charAt(i - 1))
                curLen++;
            else
                curLen = 1;
            maxLen = Math.max(maxLen, curLen);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(longestSameChar(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int longestSameChar(char* s) {
    int n = strlen(s), maxLen = 1, curLen = 1;
    for (int i = 1; i < n; i++) {
        if (s[i] == s[i - 1]) curLen++;
        else curLen = 1;
        if (curLen > maxLen) maxLen = curLen;
    }
    return maxLen;
}

int main() {
    char s[100001];
    scanf("%s", s);
    printf("%d\n", longestSameChar(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int longestSameChar(string s) {
    int maxLen = 1, curLen = 1;
    for (int i = 1; i < (int)s.size(); i++) {
        curLen = (s[i] == s[i - 1]) ? curLen + 1 : 1;
        maxLen = max(maxLen, curLen);
    }
    return maxLen;
}

int main() {
    string s;
    cin >> s;
    cout << longestSameChar(s) << "\n";
    return 0;
}`
  },
  'lrcr-e5': {
    python: `def count_valid_windows(s, w, k):
    result = 0
    for i in range(len(s) - w + 1):
        window = s[i:i + w]
        count = [0] * 26
        for c in window:
            count[ord(c) - ord('A')] += 1
        max_freq = max(count)
        if w - max_freq <= k:
            result += 1
    return result

s = input()
w = int(input())
k = int(input())
print(count_valid_windows(s, w, k))`,
    java: `import java.util.*;

public class Solution {
    public static int countValidWindows(String s, int w, int k) {
        int result = 0;
        int[] count = new int[26];
        for (int i = 0; i < w; i++) count[s.charAt(i) - 'A']++;
        int maxFreq = 0;
        for (int c : count) maxFreq = Math.max(maxFreq, c);
        if (w - maxFreq <= k) result++;
        for (int i = w; i < s.length(); i++) {
            count[s.charAt(i) - 'A']++;
            count[s.charAt(i - w) - 'A']--;
            maxFreq = 0;
            for (int c : count) maxFreq = Math.max(maxFreq, c);
            if (w - maxFreq <= k) result++;
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int w = sc.nextInt();
        int k = sc.nextInt();
        System.out.println(countValidWindows(s, w, k));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int countValidWindows(char* s, int w, int k) {
    int count[26] = {0};
    int n = strlen(s), result = 0, maxFreq = 0;
    for (int i = 0; i < w; i++) count[s[i] - 'A']++;
    for (int i = 0; i < 26; i++) if (count[i] > maxFreq) maxFreq = count[i];
    if (w - maxFreq <= k) result++;
    for (int i = w; i < n; i++) {
        count[s[i] - 'A']++;
        count[s[i - w] - 'A']--;
        maxFreq = 0;
        for (int j = 0; j < 26; j++) if (count[j] > maxFreq) maxFreq = count[j];
        if (w - maxFreq <= k) result++;
    }
    return result;
}

int main() {
    char s[100001];
    int w, k;
    scanf("%s", s);
    scanf("%d", &w);
    scanf("%d", &k);
    printf("%d\n", countValidWindows(s, w, k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int countValidWindows(string s, int w, int k) {
    int count[26] = {0}, result = 0;
    for (int i = 0; i < w; i++) count[s[i] - 'A']++;
    if (w - *max_element(count, count + 26) <= k) result++;
    for (int i = w; i < (int)s.size(); i++) {
        count[s[i] - 'A']++;
        count[s[i - w] - 'A']--;
        if (w - *max_element(count, count + 26) <= k) result++;
    }
    return result;
}

int main() {
    string s;
    int w, k;
    cin >> s >> w >> k;
    cout << countValidWindows(s, w, k) << "\n";
    return 0;
}`
  },
};

export const LongestRepeatingCharacterReplacementMediumSolutions = {
  'lrcr-m1': {
    python: `def character_replacement(s, k):
    count = [0] * 26
    left = 0
    max_count = 0
    max_len = 0
    for right in range(len(s)):
        count[ord(s[right]) - ord('A')] += 1
        max_count = max(max_count, count[ord(s[right]) - ord('A')])
        while (right - left + 1) - max_count > k:
            count[ord(s[left]) - ord('A')] -= 1
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

s = input()
k = int(input())
print(character_replacement(s, k))`,
    java: `import java.util.*;

public class Solution {
    public static int characterReplacement(String s, int k) {
        int[] count = new int[26];
        int left = 0, maxCount = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            count[s.charAt(right) - 'A']++;
            maxCount = Math.max(maxCount, count[s.charAt(right) - 'A']);
            while ((right - left + 1) - maxCount > k) {
                count[s.charAt(left) - 'A']--;
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
        System.out.println(characterReplacement(s, k));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int characterReplacement(char* s, int k) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        count[s[right] - 'A']++;
        if (count[s[right] - 'A'] > maxCount)
            maxCount = count[s[right] - 'A'];
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
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
    printf("%d\n", characterReplacement(s, k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int characterReplacement(string s, int k) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        count[s[right] - 'A']++;
        maxCount = max(maxCount, count[s[right] - 'A']);
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
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
    cout << characterReplacement(s, k) << "\n";
    return 0;
}`
  },
  'lrcr-m2': {
    python: `def longest_after_one_replacement(s):
    count = [0] * 26
    left = 0
    max_count = 0
    max_len = 0
    for right in range(len(s)):
        count[ord(s[right]) - ord('A')] += 1
        max_count = max(max_count, count[ord(s[right]) - ord('A')])
        while (right - left + 1) - max_count > 1:
            count[ord(s[left]) - ord('A')] -= 1
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

s = input()
print(longest_after_one_replacement(s))`,
    java: `import java.util.*;

public class Solution {
    public static int longestAfterOneReplacement(String s) {
        int[] count = new int[26];
        int left = 0, maxCount = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            count[s.charAt(right) - 'A']++;
            maxCount = Math.max(maxCount, count[s.charAt(right) - 'A']);
            while ((right - left + 1) - maxCount > 1) {
                count[s.charAt(left) - 'A']--;
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(longestAfterOneReplacement(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int longestAfterOneReplacement(char* s) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        count[s[right] - 'A']++;
        if (count[s[right] - 'A'] > maxCount)
            maxCount = count[s[right] - 'A'];
        while ((right - left + 1) - maxCount > 1) {
            count[s[left] - 'A']--;
            left++;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    char s[100001];
    scanf("%s", s);
    printf("%d\n", longestAfterOneReplacement(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int longestAfterOneReplacement(string s) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        count[s[right] - 'A']++;
        maxCount = max(maxCount, count[s[right] - 'A']);
        while ((right - left + 1) - maxCount > 1) {
            count[s[left] - 'A']--;
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s;
    cin >> s;
    cout << longestAfterOneReplacement(s) << "\n";
    return 0;
}`
  },
  'lrcr-m3': {
    python: `def longest_ones_after_k_flips(nums, k):
    left = 0
    max_len = 0
    zeros = 0
    for right in range(len(nums)):
        if nums[right] == 0:
            zeros += 1
        while zeros > k:
            if nums[left] == 0:
                zeros -= 1
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(longest_ones_after_k_flips(nums, k))`,
    java: `import java.util.*;

public class Solution {
    public static int longestOnesAfterKFlips(int[] nums, int k) {
        int left = 0, maxLen = 0, zeros = 0;
        for (int right = 0; right < nums.length; right++) {
            if (nums[right] == 0) zeros++;
            while (zeros > k) {
                if (nums[left] == 0) zeros--;
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        int k = sc.nextInt();
        System.out.println(longestOnesAfterKFlips(nums, k));
    }
}`,
    c: `#include <stdio.h>

int longestOnesAfterKFlips(int* nums, int n, int k) {
    int left = 0, maxLen = 0, zeros = 0;
    for (int right = 0; right < n; right++) {
        if (nums[right] == 0) zeros++;
        while (zeros > k) {
            if (nums[left] == 0) zeros--;
            left++;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", longestOnesAfterKFlips(nums, n, k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;

int longestOnesAfterKFlips(vector<int>& nums, int k) {
    int left = 0, maxLen = 0, zeros = 0;
    for (int right = 0; right < (int)nums.size(); right++) {
        if (nums[right] == 0) zeros++;
        while (zeros > k) {
            if (nums[left] == 0) zeros--;
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    int k;
    cin >> k;
    cout << longestOnesAfterKFlips(nums, k) << "\n";
    return 0;
}`
  },
  'lrcr-m4': {
    python: `def min_window_for_freq(s, c, k):
    left = 0
    min_len = float('inf')
    count_c = 0
    for right in range(len(s)):
        if s[right] == c:
            count_c += 1
        while count_c >= k:
            min_len = min(min_len, right - left + 1)
            if s[left] == c:
                count_c -= 1
            left += 1
    return min_len if min_len != float('inf') else -1

s = input()
c = input()
k = int(input())
print(min_window_for_freq(s, c, k))`,
    java: `import java.util.*;

public class Solution {
    public static int minWindowForFreq(String s, char c, int k) {
        int left = 0, minLen = Integer.MAX_VALUE, countC = 0;
        for (int right = 0; right < s.length(); right++) {
            if (s.charAt(right) == c) countC++;
            while (countC >= k) {
                minLen = Math.min(minLen, right - left + 1);
                if (s.charAt(left) == c) countC--;
                left++;
            }
        }
        return minLen == Integer.MAX_VALUE ? -1 : minLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        char c = sc.next().charAt(0);
        int k = sc.nextInt();
        System.out.println(minWindowForFreq(s, c, k));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

int minWindowForFreq(char* s, char c, int k) {
    int n = strlen(s), left = 0, minLen = INT_MAX, countC = 0;
    for (int right = 0; right < n; right++) {
        if (s[right] == c) countC++;
        while (countC >= k) {
            if (right - left + 1 < minLen) minLen = right - left + 1;
            if (s[left] == c) countC--;
            left++;
        }
    }
    return minLen == INT_MAX ? -1 : minLen;
}

int main() {
    char s[100001], ch[2];
    int k;
    scanf("%s", s);
    scanf("%s", ch);
    scanf("%d", &k);
    printf("%d\n", minWindowForFreq(s, ch[0], k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <climits>
using namespace std;

int minWindowForFreq(string s, char c, int k) {
    int left = 0, minLen = INT_MAX, countC = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        if (s[right] == c) countC++;
        while (countC >= k) {
            minLen = min(minLen, right - left + 1);
            if (s[left] == c) countC--;
            left++;
        }
    }
    return minLen == INT_MAX ? -1 : minLen;
}

int main() {
    string s, ch;
    int k;
    cin >> s >> ch >> k;
    cout << minWindowForFreq(s, ch[0], k) << "\n";
    return 0;
}`
  },
  'lrcr-m5': {
    python: `def character_replacement(s, k):
    count = [0] * 26
    left = 0
    max_count = 0
    max_len = 0
    for right in range(len(s)):
        count[ord(s[right]) - ord('A')] += 1
        max_count = max(max_count, count[ord(s[right]) - ord('A')])
        while (right - left + 1) - max_count > k:
            count[ord(s[left]) - ord('A')] -= 1
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

s = input()
q = int(input())
for _ in range(q):
    k = int(input())
    print(character_replacement(s, k))`,
    java: `import java.util.*;

public class Solution {
    public static int characterReplacement(String s, int k) {
        int[] count = new int[26];
        int left = 0, maxCount = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            count[s.charAt(right) - 'A']++;
            maxCount = Math.max(maxCount, count[s.charAt(right) - 'A']);
            while ((right - left + 1) - maxCount > k) {
                count[s.charAt(left) - 'A']--;
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int q = sc.nextInt();
        for (int i = 0; i < q; i++) {
            int k = sc.nextInt();
            System.out.println(characterReplacement(s, k));
        }
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int characterReplacement(char* s, int k) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        count[s[right] - 'A']++;
        if (count[s[right] - 'A'] > maxCount)
            maxCount = count[s[right] - 'A'];
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
            left++;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    char s[100001];
    int q;
    scanf("%s", s);
    scanf("%d", &q);
    while (q--) {
        int k;
        scanf("%d", &k);
        printf("%d\n", characterReplacement(s, k));
    }
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int characterReplacement(string s, int k) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        count[s[right] - 'A']++;
        maxCount = max(maxCount, count[s[right] - 'A']);
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s;
    int q;
    cin >> s >> q;
    while (q--) {
        int k;
        cin >> k;
        cout << characterReplacement(s, k) << "\n";
    }
    return 0;
}`
  },
};

export const LongestRepeatingCharacterReplacementHardSolutions = {
  'lrcr-h1': {
    python: `def longest_with_freq_constraint(s, k, min_freq):
    count = [0] * 26
    left = 0
    max_count = 0
    max_len = 0
    for right in range(len(s)):
        count[ord(s[right]) - ord('A')] += 1
        max_count = max(max_count, count[ord(s[right]) - ord('A')])
        while (right - left + 1) - max_count > k:
            count[ord(s[left]) - ord('A')] -= 1
            left += 1
        if max_count >= min_freq:
            max_len = max(max_len, right - left + 1)
    return max_len

s = input()
k = int(input())
min_freq = int(input())
print(longest_with_freq_constraint(s, k, min_freq))`,
    java: `import java.util.*;

public class Solution {
    public static int longestWithFreqConstraint(String s, int k, int minFreq) {
        int[] count = new int[26];
        int left = 0, maxCount = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            count[s.charAt(right) - 'A']++;
            maxCount = Math.max(maxCount, count[s.charAt(right) - 'A']);
            while ((right - left + 1) - maxCount > k) {
                count[s.charAt(left) - 'A']--;
                left++;
            }
            if (maxCount >= minFreq)
                maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int k = sc.nextInt();
        int minFreq = sc.nextInt();
        System.out.println(longestWithFreqConstraint(s, k, minFreq));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int longestWithFreqConstraint(char* s, int k, int minFreq) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        count[s[right] - 'A']++;
        if (count[s[right] - 'A'] > maxCount)
            maxCount = count[s[right] - 'A'];
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
            left++;
        }
        if (maxCount >= minFreq && right - left + 1 > maxLen)
            maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    char s[100001];
    int k, minFreq;
    scanf("%s", s);
    scanf("%d", &k);
    scanf("%d", &minFreq);
    printf("%d\n", longestWithFreqConstraint(s, k, minFreq));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int longestWithFreqConstraint(string s, int k, int minFreq) {
    int count[26] = {0};
    int left = 0, maxCount = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        count[s[right] - 'A']++;
        maxCount = max(maxCount, count[s[right] - 'A']);
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
            left++;
        }
        if (maxCount >= minFreq)
            maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s;
    int k, minFreq;
    cin >> s >> k >> minFreq;
    cout << longestWithFreqConstraint(s, k, minFreq) << "\n";
    return 0;
}`
  },
  'lrcr-h2': {
    python: `def longest_within_budget(s, cost, budget):
    left = 0
    max_len = 0
    window_cost = [0] * 26
    window_max_cost = [0] * 26
    total_cost = 0
    char_count = [0] * 26
    for right in range(len(s)):
        idx = ord(s[right]) - ord('A')
        char_count[idx] += 1
        window_cost[idx] += cost[right]
        if cost[right] > window_max_cost[idx]:
            window_max_cost[idx] = cost[right]
        total_cost += cost[right]
        while True:
            min_cost = min(
                window_cost[i] - window_max_cost[i]
                for i in range(26) if char_count[i] > 0
            )
            if total_cost - min_cost <= budget:
                break
            l_idx = ord(s[left]) - ord('A')
            total_cost -= cost[left]
            window_cost[l_idx] -= cost[left]
            char_count[l_idx] -= 1
            if char_count[l_idx] == 0:
                window_max_cost[l_idx] = 0
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

s = input()
n = int(input())
cost = list(map(int, input().split()))
budget = int(input())
print(longest_within_budget(s, cost, budget))`,
    java: `import java.util.*;

public class Solution {
    public static int longestWithinBudget(String s, int[] cost, long budget) {
        int n = s.length();
        int left = 0, maxLen = 0;
        long[] windowCost = new long[26];
        long[] windowMaxCost = new long[26];
        int[] charCount = new int[26];
        long totalCost = 0;
        for (int right = 0; right < n; right++) {
            int idx = s.charAt(right) - 'A';
            charCount[idx]++;
            windowCost[idx] += cost[right];
            windowMaxCost[idx] = Math.max(windowMaxCost[idx], cost[right]);
            totalCost += cost[right];
            while (true) {
                long minReplace = Long.MAX_VALUE;
                for (int i = 0; i < 26; i++)
                    if (charCount[i] > 0)
                        minReplace = Math.min(minReplace, windowCost[i] - windowMaxCost[i]);
                if (totalCost - minReplace <= budget) break;
                int lIdx = s.charAt(left) - 'A';
                totalCost -= cost[left];
                windowCost[lIdx] -= cost[left];
                charCount[lIdx]--;
                if (charCount[lIdx] == 0) windowMaxCost[lIdx] = 0;
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int n = sc.nextInt();
        int[] cost = new int[n];
        for (int i = 0; i < n; i++) cost[i] = sc.nextInt();
        long budget = sc.nextLong();
        System.out.println(longestWithinBudget(s, cost, budget));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>
#include <limits.h>

int longestWithinBudget(char* s, int* cost, int n, long long budget) {
    int left = 0, maxLen = 0;
    long long windowCost[26] = {0}, windowMaxCost[26] = {0}, totalCost = 0;
    int charCount[26] = {0};
    for (int right = 0; right < n; right++) {
        int idx = s[right] - 'A';
        charCount[idx]++;
        windowCost[idx] += cost[right];
        if (cost[right] > windowMaxCost[idx]) windowMaxCost[idx] = cost[right];
        totalCost += cost[right];
        while (1) {
            long long minReplace = LLONG_MAX;
            for (int i = 0; i < 26; i++)
                if (charCount[i] > 0 && windowCost[i] - windowMaxCost[i] < minReplace)
                    minReplace = windowCost[i] - windowMaxCost[i];
            if (totalCost - minReplace <= budget) break;
            int lIdx = s[left] - 'A';
            totalCost -= cost[left];
            windowCost[lIdx] -= cost[left];
            charCount[lIdx]--;
            if (charCount[lIdx] == 0) windowMaxCost[lIdx] = 0;
            left++;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    char s[100001];
    int n;
    scanf("%s", s);
    scanf("%d", &n);
    int cost[n];
    for (int i = 0; i < n; i++) scanf("%d", &cost[i]);
    long long budget;
    scanf("%lld", &budget);
    printf("%d\n", longestWithinBudget(s, cost, n, budget));
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <string>
#include <climits>
using namespace std;

int longestWithinBudget(string s, vector<int>& cost, long long budget) {
    int n = s.size(), left = 0, maxLen = 0;
    long long windowCost[26] = {0}, windowMaxCost[26] = {0}, totalCost = 0;
    int charCount[26] = {0};
    for (int right = 0; right < n; right++) {
        int idx = s[right] - 'A';
        charCount[idx]++;
        windowCost[idx] += cost[right];
        windowMaxCost[idx] = max(windowMaxCost[idx], (long long)cost[right]);
        totalCost += cost[right];
        while (true) {
            long long minReplace = LLONG_MAX;
            for (int i = 0; i < 26; i++)
                if (charCount[i] > 0)
                    minReplace = min(minReplace, windowCost[i] - windowMaxCost[i]);
            if (totalCost - minReplace <= budget) break;
            int lIdx = s[left] - 'A';
            totalCost -= cost[left];
            windowCost[lIdx] -= cost[left];
            charCount[lIdx]--;
            if (charCount[lIdx] == 0) windowMaxCost[lIdx] = 0;
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s;
    int n;
    cin >> s >> n;
    vector<int> cost(n);
    for (int i = 0; i < n; i++) cin >> cost[i];
    long long budget;
    cin >> budget;
    cout << longestWithinBudget(s, cost, budget) << "\n";
    return 0;
}`
  },
  'lrcr-h3': {
    python: `def longest_common_uniform_window(s1, s2, k):
    n = len(s1)
    left = 0
    max_len = 0
    count1 = [0] * 26
    count2 = [0] * 26
    for right in range(n):
        count1[ord(s1[right]) - ord('A')] += 1
        count2[ord(s2[right]) - ord('A')] += 1
        win = right - left + 1
        max1 = max(count1)
        max2 = max(count2)
        while (win - max1) + (win - max2) > k:
            count1[ord(s1[left]) - ord('A')] -= 1
            count2[ord(s2[left]) - ord('A')] -= 1
            left += 1
            win = right - left + 1
            max1 = max(count1)
            max2 = max(count2)
        max_len = max(max_len, win)
    return max_len

s1 = input()
s2 = input()
k = int(input())
print(longest_common_uniform_window(s1, s2, k))`,
    java: `import java.util.*;

public class Solution {
    public static int longestCommonUniformWindow(String s1, String s2, int k) {
        int n = s1.length(), left = 0, maxLen = 0;
        int[] count1 = new int[26], count2 = new int[26];
        for (int right = 0; right < n; right++) {
            count1[s1.charAt(right) - 'A']++;
            count2[s2.charAt(right) - 'A']++;
            int win = right - left + 1;
            int max1 = 0, max2 = 0;
            for (int c : count1) max1 = Math.max(max1, c);
            for (int c : count2) max2 = Math.max(max2, c);
            while ((win - max1) + (win - max2) > k) {
                count1[s1.charAt(left) - 'A']--;
                count2[s2.charAt(left) - 'A']--;
                left++;
                win = right - left + 1;
                max1 = 0; max2 = 0;
                for (int c : count1) max1 = Math.max(max1, c);
                for (int c : count2) max2 = Math.max(max2, c);
            }
            maxLen = Math.max(maxLen, win);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.next();
        String s2 = sc.next();
        int k = sc.nextInt();
        System.out.println(longestCommonUniformWindow(s1, s2, k));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int longestCommonUniformWindow(char* s1, char* s2, int k) {
    int n = strlen(s1), left = 0, maxLen = 0;
    int count1[26] = {0}, count2[26] = {0};
    for (int right = 0; right < n; right++) {
        count1[s1[right] - 'A']++;
        count2[s2[right] - 'A']++;
        int win = right - left + 1, max1 = 0, max2 = 0;
        for (int i = 0; i < 26; i++) {
            if (count1[i] > max1) max1 = count1[i];
            if (count2[i] > max2) max2 = count2[i];
        }
        while ((win - max1) + (win - max2) > k) {
            count1[s1[left] - 'A']--;
            count2[s2[left] - 'A']--;
            left++;
            win = right - left + 1;
            max1 = 0; max2 = 0;
            for (int i = 0; i < 26; i++) {
                if (count1[i] > max1) max1 = count1[i];
                if (count2[i] > max2) max2 = count2[i];
            }
        }
        if (win > maxLen) maxLen = win;
    }
    return maxLen;
}

int main() {
    char s1[100001], s2[100001];
    int k;
    scanf("%s", s1);
    scanf("%s", s2);
    scanf("%d", &k);
    printf("%d\n", longestCommonUniformWindow(s1, s2, k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int longestCommonUniformWindow(string s1, string s2, int k) {
    int n = s1.size(), left = 0, maxLen = 0;
    int count1[26] = {0}, count2[26] = {0};
    for (int right = 0; right < n; right++) {
        count1[s1[right] - 'A']++;
        count2[s2[right] - 'A']++;
        int win = right - left + 1;
        int max1 = *max_element(count1, count1 + 26);
        int max2 = *max_element(count2, count2 + 26);
        while ((win - max1) + (win - max2) > k) {
            count1[s1[left] - 'A']--;
            count2[s2[left] - 'A']--;
            left++;
            win = right - left + 1;
            max1 = *max_element(count1, count1 + 26);
            max2 = *max_element(count2, count2 + 26);
        }
        maxLen = max(maxLen, win);
    }
    return maxLen;
}

int main() {
    string s1, s2;
    int k;
    cin >> s1 >> s2 >> k;
    cout << longestCommonUniformWindow(s1, s2, k) << "\n";
    return 0;
}`
  },
  'lrcr-h4': {
    python: `def at_most_k(s, k):
    count = [0] * 26
    left = 0
    result = 0
    max_count = 0
    for right in range(len(s)):
        count[ord(s[right]) - ord('A')] += 1
        max_count = max(max_count, count[ord(s[right]) - ord('A')])
        while (right - left + 1) - max_count > k:
            count[ord(s[left]) - ord('A')] -= 1
            left += 1
            max_count = max(count)
        result += right - left + 1
    return result

def count_uniform_substrings_exact_k(s, k):
    return at_most_k(s, k) - at_most_k(s, k - 1)

s = input()
k = int(input())
print(count_uniform_substrings_exact_k(s, k))`,
    java: `import java.util.*;

public class Solution {
    public static int atMostK(String s, int k) {
        if (k < 0) return 0;
        int[] count = new int[26];
        int left = 0, result = 0, maxCount = 0;
        for (int right = 0; right < s.length(); right++) {
            count[s.charAt(right) - 'A']++;
            maxCount = Math.max(maxCount, count[s.charAt(right) - 'A']);
            while ((right - left + 1) - maxCount > k) {
                count[s.charAt(left) - 'A']--;
                left++;
                maxCount = 0;
                for (int c : count) maxCount = Math.max(maxCount, c);
            }
            result += right - left + 1;
        }
        return result;
    }

    public static int countUniformSubstringsExactK(String s, int k) {
        return atMostK(s, k) - atMostK(s, k - 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int k = sc.nextInt();
        System.out.println(countUniformSubstringsExactK(s, k));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int atMostK(char* s, int k) {
    if (k < 0) return 0;
    int count[26] = {0};
    int left = 0, result = 0, maxCount = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        count[s[right] - 'A']++;
        if (count[s[right] - 'A'] > maxCount) maxCount = count[s[right] - 'A'];
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
            left++;
            maxCount = 0;
            for (int i = 0; i < 26; i++) if (count[i] > maxCount) maxCount = count[i];
        }
        result += right - left + 1;
    }
    return result;
}

int countUniformSubstringsExactK(char* s, int k) {
    return atMostK(s, k) - atMostK(s, k - 1);
}

int main() {
    char s[100001];
    int k;
    scanf("%s", s);
    scanf("%d", &k);
    printf("%d\n", countUniformSubstringsExactK(s, k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int atMostK(string& s, int k) {
    if (k < 0) return 0;
    int count[26] = {0};
    int left = 0, result = 0, maxCount = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        count[s[right] - 'A']++;
        maxCount = max(maxCount, count[s[right] - 'A']);
        while ((right - left + 1) - maxCount > k) {
            count[s[left] - 'A']--;
            left++;
            maxCount = *max_element(count, count + 26);
        }
        result += right - left + 1;
    }
    return result;
}

int countUniformSubstringsExactK(string s, int k) {
    return atMostK(s, k) - atMostK(s, k - 1);
}

int main() {
    string s;
    int k;
    cin >> s >> k;
    cout << countUniformSubstringsExactK(s, k) << "\n";
    return 0;
}`
  },
  'lrcr-h5': {
    python: `def longest_uniform_no_forbidden(s, k, forbidden):
    forbidden_set = set(forbidden)
    max_len = 0
    for target in set(s):
        if target in forbidden_set:
            continue
        count = [0] * 26
        left = 0
        max_count = 0
        for right in range(len(s)):
            count[ord(s[right]) - ord('A')] += 1
            if s[right] == target:
                max_count = count[ord(target) - ord('A')]
            while (right - left + 1) - max_count > k:
                count[ord(s[left]) - ord('A')] -= 1
                left += 1
                max_count = count[ord(target) - ord('A')]
            max_len = max(max_len, right - left + 1)
    return max_len

s = input()
k = int(input())
forbidden = input()
print(longest_uniform_no_forbidden(s, k, forbidden))`,
    java: `import java.util.*;

public class Solution {
    public static int longestUniformNoForbidden(String s, int k, String forbidden) {
        Set<Character> forbiddenSet = new HashSet<>();
        for (char c : forbidden.toCharArray()) forbiddenSet.add(c);
        int maxLen = 0;
        Set<Character> chars = new HashSet<>();
        for (char c : s.toCharArray()) chars.add(c);
        for (char target : chars) {
            if (forbiddenSet.contains(target)) continue;
            int[] count = new int[26];
            int left = 0, maxCount = 0;
            for (int right = 0; right < s.length(); right++) {
                count[s.charAt(right) - 'A']++;
                if (s.charAt(right) == target)
                    maxCount = count[target - 'A'];
                while ((right - left + 1) - maxCount > k) {
                    count[s.charAt(left) - 'A']--;
                    left++;
                    maxCount = count[target - 'A'];
                }
                maxLen = Math.max(maxLen, right - left + 1);
            }
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int k = sc.nextInt();
        String forbidden = sc.next();
        System.out.println(longestUniformNoForbidden(s, k, forbidden));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int longestUniformNoForbidden(char* s, int k, char* forbidden) {
    int forbiddenSet[26] = {0};
    for (int i = 0; forbidden[i] != '\\0'; i++)
        forbiddenSet[forbidden[i] - 'A'] = 1;
    int n = strlen(s), maxLen = 0;
    for (int t = 0; t < 26; t++) {
        if (forbiddenSet[t]) continue;
        int count[26] = {0};
        int left = 0, maxCount = 0;
        for (int right = 0; right < n; right++) {
            count[s[right] - 'A']++;
            if (s[right] - 'A' == t) maxCount = count[t];
            while ((right - left + 1) - maxCount > k) {
                count[s[left] - 'A']--;
                left++;
                maxCount = count[t];
            }
            if (right - left + 1 > maxLen) maxLen = right - left + 1;
        }
    }
    return maxLen;
}

int main() {
    char s[100001], forbidden[27];
    int k;
    scanf("%s", s);
    scanf("%d", &k);
    scanf("%s", forbidden);
    printf("%d\n", longestUniformNoForbidden(s, k, forbidden));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

int longestUniformNoForbidden(string s, int k, string forbidden) {
    unordered_set<char> forbiddenSet(forbidden.begin(), forbidden.end());
    int maxLen = 0;
    unordered_set<char> chars(s.begin(), s.end());
    for (char target : chars) {
        if (forbiddenSet.count(target)) continue;
        int count[26] = {0};
        int left = 0, maxCount = 0;
        for (int right = 0; right < (int)s.size(); right++) {
            count[s[right] - 'A']++;
            if (s[right] == target) maxCount = count[target - 'A'];
            while ((right - left + 1) - maxCount > k) {
                count[s[left] - 'A']--;
                left++;
                maxCount = count[target - 'A'];
            }
            maxLen = max(maxLen, right - left + 1);
        }
    }
    return maxLen;
}

int main() {
    string s, forbidden;
    int k;
    cin >> s >> k >> forbidden;
    cout << longestUniformNoForbidden(s, k, forbidden) << "\n";
    return 0;
}`
  },
};
