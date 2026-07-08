export const LongestSubstringSolutions = {
  'ls-e1': {
    python: `def length_of_longest_substring(s):
    char_map = {}
    left = 0
    max_len = 0
    for right, ch in enumerate(s):
        if ch in char_map and char_map[ch] >= left:
            left = char_map[ch] + 1
        char_map[ch] = right
        max_len = max(max_len, right - left + 1)
    return max_len

s = input()
print(length_of_longest_substring(s))`,
    java: `import java.util.*;

public class Solution {
    public static int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            if (map.containsKey(ch) && map.get(ch) >= left)
                left = map.get(ch) + 1;
            map.put(ch, right);
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(lengthOfLongestSubstring(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int map[256];
    memset(map, -1, sizeof(map));
    int left = 0, maxLen = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        unsigned char ch = s[right];
        if (map[ch] >= left)
            left = map[ch] + 1;
        map[ch] = right;
        if (right - left + 1 > maxLen)
            maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    char s[50001];
    scanf("%s", s);
    printf("%d\n", lengthOfLongestSubstring(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_map<char, int> map;
    int left = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        if (map.count(s[right]) && map[s[right]] >= left)
            left = map[s[right]] + 1;
        map[s[right]] = right;
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s;
    cin >> s;
    cout << lengthOfLongestSubstring(s) << "\n";
    return 0;
}`
  },
  'ls-e2': {
    python: `def contains_duplicate(nums):
    return len(nums) != len(set(nums))

n = int(input())
nums = list(map(int, input().split()))
print(str(contains_duplicate(nums)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean containsDuplicate(int[] nums) {
        Set<Integer> seen = new HashSet<>();
        for (int num : nums) {
            if (!seen.add(num)) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
        System.out.println(containsDuplicate(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int containsDuplicate(int* nums, int n) {
    int temp[n];
    for (int i = 0; i < n; i++) temp[i] = nums[i];
    qsort(temp, n, sizeof(int), cmp);
    for (int i = 1; i < n; i++)
        if (temp[i] == temp[i - 1]) return 1;
    return 0;
}

int main() {
    int n;
    scanf("%d", &n);
    int nums[n];
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%s\n", containsDuplicate(nums, n) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> seen;
    for (int num : nums)
        if (!seen.insert(num).second) return true;
    return false;
}

int main() {
    int n;
    cin >> n;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << (containsDuplicate(nums) ? "true" : "false") << "\n";
    return 0;
}`
  },
  'ls-e3': {
    python: `def first_unique_char(s):
    count = {}
    for ch in s:
        count[ch] = count.get(ch, 0) + 1
    for i, ch in enumerate(s):
        if count[ch] == 1:
            return i
    return -1

s = input()
print(first_unique_char(s))`,
    java: `import java.util.*;

public class Solution {
    public static int firstUniqueChar(String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'a']++;
        for (int i = 0; i < s.length(); i++)
            if (count[s.charAt(i) - 'a'] == 1) return i;
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(firstUniqueChar(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int firstUniqueChar(char* s) {
    int count[26] = {0};
    int n = strlen(s);
    for (int i = 0; i < n; i++) count[s[i] - 'a']++;
    for (int i = 0; i < n; i++)
        if (count[s[i] - 'a'] == 1) return i;
    return -1;
}

int main() {
    char s[100001];
    scanf("%s", s);
    printf("%d\n", firstUniqueChar(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int firstUniqueChar(string s) {
    int count[26] = {0};
    for (char c : s) count[c - 'a']++;
    for (int i = 0; i < (int)s.size(); i++)
        if (count[s[i] - 'a'] == 1) return i;
    return -1;
}

int main() {
    string s;
    cin >> s;
    cout << firstUniqueChar(s) << "\n";
    return 0;
}`
  },
  'ls-e4': {
    python: `def max_vowels(s, k):
    vowels = set('aeiou')
    count = sum(1 for c in s[:k] if c in vowels)
    max_count = count
    for i in range(k, len(s)):
        count += (s[i] in vowels) - (s[i - k] in vowels)
        max_count = max(max_count, count)
    return max_count

s = input()
k = int(input())
print(max_vowels(s, k))`,
    java: `import java.util.*;

public class Solution {
    public static int maxVowels(String s, int k) {
        String vowels = "aeiou";
        int count = 0;
        for (int i = 0; i < k; i++)
            if (vowels.indexOf(s.charAt(i)) != -1) count++;
        int maxCount = count;
        for (int i = k; i < s.length(); i++) {
            if (vowels.indexOf(s.charAt(i)) != -1) count++;
            if (vowels.indexOf(s.charAt(i - k)) != -1) count--;
            maxCount = Math.max(maxCount, count);
        }
        return maxCount;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        int k = sc.nextInt();
        System.out.println(maxVowels(s, k));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int isVowel(char c) {
    return c=='a'||c=='e'||c=='i'||c=='o'||c=='u';
}

int maxVowels(char* s, int k) {
    int count = 0, n = strlen(s);
    for (int i = 0; i < k; i++) if (isVowel(s[i])) count++;
    int maxCount = count;
    for (int i = k; i < n; i++) {
        if (isVowel(s[i])) count++;
        if (isVowel(s[i - k])) count--;
        if (count > maxCount) maxCount = count;
    }
    return maxCount;
}

int main() {
    char s[100001];
    int k;
    scanf("%s", s);
    scanf("%d", &k);
    printf("%d\n", maxVowels(s, k));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
using namespace std;

int maxVowels(string s, int k) {
    string vowels = "aeiou";
    int count = 0;
    for (int i = 0; i < k; i++)
        if (vowels.find(s[i]) != string::npos) count++;
    int maxCount = count;
    for (int i = k; i < (int)s.size(); i++) {
        if (vowels.find(s[i]) != string::npos) count++;
        if (vowels.find(s[i - k]) != string::npos) count--;
        maxCount = max(maxCount, count);
    }
    return maxCount;
}

int main() {
    string s;
    int k;
    cin >> s >> k;
    cout << maxVowels(s, k) << "\n";
    return 0;
}`
  },
  'ls-e5': {
    python: `def count_unique(s):
    return len(set(s))

s = input()
print(count_unique(s))`,
    java: `import java.util.*;

public class Solution {
    public static int countUnique(String s) {
        Set<Character> set = new HashSet<>();
        for (char c : s.toCharArray()) set.add(c);
        return set.size();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(countUnique(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int countUnique(char* s) {
    int seen[26] = {0};
    int count = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (!seen[s[i] - 'a']) {
            seen[s[i] - 'a'] = 1;
            count++;
        }
    }
    return count;
}

int main() {
    char s[100001];
    scanf("%s", s);
    printf("%d\n", countUnique(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_set>
using namespace std;

int countUnique(string s) {
    unordered_set<char> seen(s.begin(), s.end());
    return (int)seen.size();
}

int main() {
    string s;
    cin >> s;
    cout << countUnique(s) << "\n";
    return 0;
}`
  },
};

export const LongestSubstringMediumSolutions = {
  'ls-m1': {
    python: `def length_of_longest_two_distinct(s):
    char_map = {}
    left = 0
    max_len = 0
    for right, ch in enumerate(s):
        char_map[ch] = char_map.get(ch, 0) + 1
        while len(char_map) > 2:
            left_ch = s[left]
            char_map[left_ch] -= 1
            if char_map[left_ch] == 0:
                del char_map[left_ch]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

s = input()
print(length_of_longest_two_distinct(s))`,
    java: `import java.util.*;

public class Solution {
    public static int lengthOfLongestTwoDistinct(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            map.put(ch, map.getOrDefault(ch, 0) + 1);
            while (map.size() > 2) {
                char lc = s.charAt(left);
                map.put(lc, map.get(lc) - 1);
                if (map.get(lc) == 0) map.remove(lc);
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.next();
        System.out.println(lengthOfLongestTwoDistinct(s));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestTwoDistinct(char* s) {
    int map[256] = {0};
    int distinct = 0, left = 0, maxLen = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        unsigned char ch = s[right];
        if (map[ch] == 0) distinct++;
        map[ch]++;
        while (distinct > 2) {
            unsigned char lc = s[left];
            map[lc]--;
            if (map[lc] == 0) distinct--;
            left++;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    char s[100001];
    scanf("%s", s);
    printf("%d\n", lengthOfLongestTwoDistinct(s));
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <unordered_map>
using namespace std;

int lengthOfLongestTwoDistinct(string s) {
    unordered_map<char, int> map;
    int left = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        map[s[right]]++;
        while ((int)map.size() > 2) {
            map[s[left]]--;
            if (map[s[left]] == 0) map.erase(s[left]);
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    string s;
    cin >> s;
    cout << lengthOfLongestTwoDistinct(s) << "\n";
    return 0;
}`
  },
  'ls-m2': {
    python: `def longest_k_distinct(s, k):
    char_map = {}
    left = 0
    max_len = 0
    for right, ch in enumerate(s):
        char_map[ch] = char_map.get(ch, 0) + 1
        while len(char_map) > k:
            left_ch = s[left]
            char_map[left_ch] -= 1
            if char_map[left_ch] == 0:
                del char_map[left_ch]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

s = input()
k = int(input())
print(longest_k_distinct(s, k))`,
    java: `import java.util.*;

public class Solution {
    public static int longestKDistinct(String s, int k) {
        Map<Character, Integer> map = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            char ch = s.charAt(right);
            map.put(ch, map.getOrDefault(ch, 0) + 1);
            while (map.size() > k) {
                char lc = s.charAt(left);
                map.put(lc, map.get(lc) - 1);
                if (map.get(lc) == 0) map.remove(lc);
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
    int map[256] = {0};
    int distinct = 0, left = 0, maxLen = 0;
    for (int right = 0; s[right] != '\\0'; right++) {
        unsigned char ch = s[right];
        if (map[ch] == 0) distinct++;
        map[ch]++;
        while (distinct > k) {
            unsigned char lc = s[left];
            map[lc]--;
            if (map[lc] == 0) distinct--;
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
    unordered_map<char, int> map;
    int left = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        map[s[right]]++;
        while ((int)map.size() > k) {
            map[s[left]]--;
            if (map[s[left]] == 0) map.erase(s[left]);
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
  'ls-m3': {
    python: `def character_replacement(s, k):
    count = {}
    left = 0
    max_count = 0
    max_len = 0
    for right in range(len(s)):
        count[s[right]] = count.get(s[right], 0) + 1
        max_count = max(max_count, count[s[right]])
        while (right - left + 1) - max_count > k:
            count[s[left]] -= 1
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
  'ls-m4': {
    python: `def check_inclusion(s1, s2):
    if len(s1) > len(s2):
        return False
    count = [0] * 26
    for c in s1:
        count[ord(c) - ord('a')] += 1
    window = [0] * 26
    for i in range(len(s2)):
        window[ord(s2[i]) - ord('a')] += 1
        if i >= len(s1):
            window[ord(s2[i - len(s1)]) - ord('a')] -= 1
        if window == count:
            return True
    return False

s1 = input()
s2 = input()
print(str(check_inclusion(s1, s2)).lower())`,
    java: `import java.util.*;

public class Solution {
    public static boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) return false;
        int[] count = new int[26];
        int[] window = new int[26];
        for (char c : s1.toCharArray()) count[c - 'a']++;
        for (int i = 0; i < s2.length(); i++) {
            window[s2.charAt(i) - 'a']++;
            if (i >= s1.length())
                window[s2.charAt(i - s1.length()) - 'a']--;
            if (Arrays.equals(window, count)) return true;
        }
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s1 = sc.next();
        String s2 = sc.next();
        System.out.println(checkInclusion(s1, s2));
    }
}`,
    c: `#include <stdio.h>
#include <string.h>

int checkInclusion(char* s1, char* s2) {
    int n1 = strlen(s1), n2 = strlen(s2);
    if (n1 > n2) return 0;
    int count[26] = {0}, window[26] = {0};
    for (int i = 0; i < n1; i++) count[s1[i] - 'a']++;
    for (int i = 0; i < n2; i++) {
        window[s2[i] - 'a']++;
        if (i >= n1) window[s2[i - n1] - 'a']--;
        int match = 1;
        for (int j = 0; j < 26; j++)
            if (count[j] != window[j]) { match = 0; break; }
        if (match) return 1;
    }
    return 0;
}

int main() {
    char s1[10001], s2[10001];
    scanf("%s %s", s1, s2);
    printf("%s\n", checkInclusion(s1, s2) ? "true" : "false");
    return 0;
}`,
    cpp: `#include <iostream>
#include <string>
#include <vector>
using namespace std;

bool checkInclusion(string s1, string s2) {
    if (s1.size() > s2.size()) return false;
    vector<int> count(26, 0), window(26, 0);
    for (char c : s1) count[c - 'a']++;
    for (int i = 0; i < (int)s2.size(); i++) {
        window[s2[i] - 'a']++;
        if (i >= (int)s1.size())
            window[s2[i - s1.size()] - 'a']--;
        if (window == count) return true;
    }
    return false;
}

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    cout << (checkInclusion(s1, s2) ? "true" : "false") << "\n";
    return 0;
}`
  },
  'ls-m5': {
    python: `def total_fruit(fruits):
    basket = {}
    left = 0
    max_len = 0
    for right in range(len(fruits)):
        basket[fruits[right]] = basket.get(fruits[right], 0) + 1
        while len(basket) > 2:
            basket[fruits[left]] -= 1
            if basket[fruits[left]] == 0:
                del basket[fruits[left]]
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len

n = int(input())
fruits = list(map(int, input().split()))
print(total_fruit(fruits))`,
    java: `import java.util.*;

public class Solution {
    public static int totalFruit(int[] fruits) {
        Map<Integer, Integer> basket = new HashMap<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < fruits.length; right++) {
            basket.put(fruits[right], basket.getOrDefault(fruits[right], 0) + 1);
            while (basket.size() > 2) {
                basket.put(fruits[left], basket.get(fruits[left]) - 1);
                if (basket.get(fruits[left]) == 0) basket.remove(fruits[left]);
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] fruits = new int[n];
        for (int i = 0; i < n; i++) fruits[i] = sc.nextInt();
        System.out.println(totalFruit(fruits));
    }
}`,
    c: `#include <stdio.h>

int totalFruit(int* fruits, int n) {
    int map[n + 1];
    for (int i = 0; i <= n; i++) map[i] = 0;
    int distinct = 0, left = 0, maxLen = 0;
    for (int right = 0; right < n; right++) {
        if (map[fruits[right]] == 0) distinct++;
        map[fruits[right]]++;
        while (distinct > 2) {
            map[fruits[left]]--;
            if (map[fruits[left]] == 0) distinct--;
            left++;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    int n;
    scanf("%d", &n);
    int fruits[n];
    for (int i = 0; i < n; i++) scanf("%d", &fruits[i]);
    printf("%d\n", totalFruit(fruits, n));
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

int totalFruit(vector<int>& fruits) {
    unordered_map<int, int> basket;
    int left = 0, maxLen = 0;
    for (int right = 0; right < (int)fruits.size(); right++) {
        basket[fruits[right]]++;
        while ((int)basket.size() > 2) {
            basket[fruits[left]]--;
            if (basket[fruits[left]] == 0) basket.erase(fruits[left]);
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    int n;
    cin >> n;
    vector<int> fruits(n);
    for (int i = 0; i < n; i++) cin >> fruits[i];
    cout << totalFruit(fruits) << "\n";
    return 0;
}`
  },
};
