export const MinimumWindowSubstringProblems = [
  // --- EASY ---
  {
    id: 'mws-e1', title: 'Check if String Contains All Characters of Target', difficulty: 'Easy',
    description: 'Given two strings s and t, return true if s contains all characters of t (including duplicates), otherwise return false.',
    constraints: ['1 <= s.length, t.length <= 10^5', 's and t consist of uppercase and lowercase English letters'],
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: 'true', explanation: 's contains A, B, and C.' },
      { input: 's = "a", t = "aa"', output: 'false', explanation: 's has only one "a" but t needs two.' }
    ],
    testCases: [
      { input: 'ADOBECODEBANC\nABC', expectedOutput: 'true', hidden: false },
      { input: 'a\naa', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def contains_all(s, t):\n    pass\n\ns = input()\nt = input()\nprint(str(contains_all(s, t)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean containsAll(String s, String t) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        String t = sc.next();\n        System.out.println(containsAll(s, t));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint containsAll(char* s, char* t) {\n    return 0;\n}\n\nint main() {\n    char s[100001], t[100001];\n    scanf("%s", s);\n    scanf("%s", t);\n    printf("%s\\n", containsAll(s, t) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool containsAll(string s, string t) {\n    return false;\n}\n\nint main() {\n    string s, t;\n    cin >> s >> t;\n    cout << (containsAll(s, t) ? "true" : "false") << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-e2', title: 'Minimum Window Length Containing a Single Character', difficulty: 'Easy',
    description: 'Given a string s and a character c, return the length of the shortest substring of s that contains at least one occurrence of c. Return -1 if c is not in s.',
    constraints: ['1 <= s.length <= 10^5', 's consists of uppercase and lowercase English letters', 'c is a single uppercase or lowercase English letter'],
    examples: [
      { input: 's = "ADOBECODEBANC", c = "B"', output: '1', explanation: '"B" itself is the shortest substring containing B — length 1.' },
      { input: 's = "ADOBECODEBANC", c = "Z"', output: '-1', explanation: '"Z" does not exist in s.' }
    ],
    testCases: [
      { input: 'ADOBECODEBANC\nB', expectedOutput: '1', hidden: false },
      { input: 'ADOBECODEBANC\nZ', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def min_window_single(s, c):\n    pass\n\ns = input()\nc = input()\nprint(min_window_single(s, c))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minWindowSingle(String s, char c) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        char c = sc.next().charAt(0);\n        System.out.println(minWindowSingle(s, c));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint minWindowSingle(char* s, char c) {\n    return -1;\n}\n\nint main() {\n    char s[100001], ch[2];\n    scanf("%s", s);\n    scanf("%s", ch);\n    printf("%d\\n", minWindowSingle(s, ch[0]));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint minWindowSingle(string s, char c) {\n    return -1;\n}\n\nint main() {\n    string s, ch;\n    cin >> s >> ch;\n    cout << minWindowSingle(s, ch[0]) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-e3', title: 'Count Characters Needed from Target', difficulty: 'Easy',
    description: 'Given two strings s and t, return the number of characters from t that are missing in s (i.e., characters in t whose frequency exceeds their frequency in s).',
    constraints: ['1 <= s.length, t.length <= 10^5', 's and t consist of uppercase and lowercase English letters'],
    examples: [
      { input: 's = "ADOBEC", t = "AABC"', output: '1', explanation: 't needs 2 "A"s but s has only 1 — 1 character is missing.' },
      { input: 's = "ABC", t = "ABC"', output: '0', explanation: 's has all characters of t — nothing is missing.' }
    ],
    testCases: [
      { input: 'ADOBEC\nAABC', expectedOutput: '1', hidden: false },
      { input: 'ABC\nABC', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: 'def count_missing(s, t):\n    pass\n\ns = input()\nt = input()\nprint(count_missing(s, t))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int countMissing(String s, String t) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        String t = sc.next();\n        System.out.println(countMissing(s, t));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint countMissing(char* s, char* t) {\n    return 0;\n}\n\nint main() {\n    char s[100001], t[100001];\n    scanf("%s", s);\n    scanf("%s", t);\n    printf("%d\\n", countMissing(s, t));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint countMissing(string s, string t) {\n    return 0;\n}\n\nint main() {\n    string s, t;\n    cin >> s >> t;\n    cout << countMissing(s, t) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-e4', title: 'Smallest Window Containing All Unique Characters of String', difficulty: 'Easy',
    description: 'Given a string s, return the length of the smallest window that contains all unique characters present in s.',
    constraints: ['1 <= s.length <= 10^5', 's consists of uppercase and lowercase English letters'],
    examples: [
      { input: 's = "AABBC"', output: '4', explanation: 'All unique chars are A, B, C. Smallest window containing all is "ABBC" — length 4.' },
      { input: 's = "AAAA"', output: '1', explanation: 'Only one unique char "A" — smallest window is length 1.' }
    ],
    testCases: [
      { input: 'AABBC', expectedOutput: '4', hidden: false },
      { input: 'AAAA', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: 'def smallest_window_all_unique(s):\n    pass\n\ns = input()\nprint(smallest_window_all_unique(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int smallestWindowAllUnique(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(smallestWindowAllUnique(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint smallestWindowAllUnique(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%d\\n", smallestWindowAllUnique(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint smallestWindowAllUnique(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << smallestWindowAllUnique(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-e5', title: 'Is t an Anagram of Any Substring of s', difficulty: 'Easy',
    description: 'Given two strings s and t, return true if any substring of s is an anagram of t.',
    constraints: ['1 <= s.length, t.length <= 10^5', 's and t consist of lowercase English letters'],
    examples: [
      { input: 's = "cbaebabacd", t = "abc"', output: 'true', explanation: '"cba" at index 0 is an anagram of "abc".' },
      { input: 's = "af", t = "be"', output: 'false', explanation: 'No substring of s is an anagram of t.' }
    ],
    testCases: [
      { input: 'cbaebabacd\nabc', expectedOutput: 'true', hidden: false },
      { input: 'af\nbe', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def has_anagram_substring(s, t):\n    pass\n\ns = input()\nt = input()\nprint(str(has_anagram_substring(s, t)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean hasAnagramSubstring(String s, String t) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        String t = sc.next();\n        System.out.println(hasAnagramSubstring(s, t));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint hasAnagramSubstring(char* s, char* t) {\n    return 0;\n}\n\nint main() {\n    char s[100001], t[100001];\n    scanf("%s", s);\n    scanf("%s", t);\n    printf("%s\\n", hasAnagramSubstring(s, t) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool hasAnagramSubstring(string s, string t) {\n    return false;\n}\n\nint main() {\n    string s, t;\n    cin >> s >> t;\n    cout << (hasAnagramSubstring(s, t) ? "true" : "false") << "\\n";\n    return 0;\n}'
    }
  },
];

export const MinimumWindowSubstringMediumProblems = [
  // --- MEDIUM ---
  {
    id: 'mws-m1', title: 'Minimum Window Substring', difficulty: 'Medium',
    description: 'Given two strings s and t, return the minimum window substring of s such that every character in t (including duplicates) is included. Return "" if no such window exists.',
    constraints: ['1 <= s.length, t.length <= 10^5', 's and t consist of uppercase and lowercase English letters'],
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: 'BANC', explanation: '"BANC" is the smallest substring containing A, B, and C.' },
      { input: 's = "a", t = "a"', output: 'a', explanation: 'The whole string is the minimum window.' }
    ],
    testCases: [
      { input: 'ADOBECODEBANC\nABC', expectedOutput: 'BANC', hidden: false },
      { input: 'a\na', expectedOutput: 'a', hidden: false }
    ],
    starterCode: {
      python: 'def min_window(s, t):\n    pass\n\ns = input()\nt = input()\nprint(min_window(s, t))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static String minWindow(String s, String t) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        String t = sc.next();\n        System.out.println(minWindow(s, t));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n#include <limits.h>\n\nvoid minWindow(char* s, char* t, char* result) {\n    result[0] = \'\\0\';\n}\n\nint main() {\n    char s[100001], t[100001], result[100001];\n    scanf("%s", s);\n    scanf("%s", t);\n    minWindow(s, t, result);\n    printf("%s\\n", result);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring minWindow(string s, string t) {\n    return "";\n}\n\nint main() {\n    string s, t;\n    cin >> s >> t;\n    cout << minWindow(s, t) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-m2', title: 'Find All Anagrams in a String', difficulty: 'Medium',
    description: 'Given two strings s and p, return a list of all start indices of p\'s anagrams in s. The output order does not matter.',
    constraints: ['1 <= s.length, p.length <= 3*10^4', 's and p consist of lowercase English letters'],
    examples: [
      { input: 's = "cbaebabacd", p = "abc"', output: '0 6', explanation: 'Anagram "cba" starts at index 0, anagram "bac" starts at index 6.' },
      { input: 's = "abab", p = "ab"', output: '0 1 2', explanation: 'Anagrams start at indices 0, 1, and 2.' }
    ],
    testCases: [
      { input: 'cbaebabacd\nabc', expectedOutput: '0 6', hidden: false },
      { input: 'abab\nab', expectedOutput: '0 1 2', hidden: false }
    ],
    starterCode: {
      python: 'def find_anagrams(s, p):\n    pass\n\ns = input()\np = input()\nresult = find_anagrams(s, p)\nprint(" ".join(map(str, result)))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> findAnagrams(String s, String p) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        String p = sc.next();\n        List<Integer> result = findAnagrams(s, p);\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < result.size(); i++) {\n            if (i > 0) sb.append(" ");\n            sb.append(result.get(i));\n        }\n        System.out.println(sb.toString());\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid findAnagrams(char* s, char* p, int* result, int* size) {\n    *size = 0;\n}\n\nint main() {\n    char s[30001], p[30001];\n    scanf("%s", s);\n    scanf("%s", p);\n    int result[30001], size;\n    findAnagrams(s, p, result, &size);\n    for (int i = 0; i < size; i++) {\n        if (i > 0) printf(" ");\n        printf("%d", result[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<int> findAnagrams(string s, string p) {\n    return {};\n}\n\nint main() {\n    string s, p;\n    cin >> s >> p;\n    vector<int> result = findAnagrams(s, p);\n    for (int i = 0; i < (int)result.size(); i++) {\n        if (i > 0) cout << " ";\n        cout << result[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-m3', title: 'Longest Substring with At Most K Distinct Characters', difficulty: 'Medium',
    description: 'Given a string s and integer k, return the length of the longest substring that contains at most k distinct characters.',
    constraints: ['1 <= s.length <= 10^5', '1 <= k <= s.length', 's consists of lowercase English letters'],
    examples: [
      { input: 's = "eceba", k = 2', output: '3', explanation: '"ece" has 2 distinct characters and length 3.' },
      { input: 's = "aa", k = 1', output: '2', explanation: '"aa" has 1 distinct character and length 2.' }
    ],
    testCases: [
      { input: 'eceba\n2', expectedOutput: '3', hidden: false },
      { input: 'aa\n1', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def longest_k_distinct(s, k):\n    pass\n\ns = input()\nk = int(input())\nprint(longest_k_distinct(s, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestKDistinct(String s, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        System.out.println(longestKDistinct(s, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestKDistinct(char* s, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    printf("%d\\n", longestKDistinct(s, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestKDistinct(string s, int k) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int k;\n    cin >> s >> k;\n    cout << longestKDistinct(s, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-m4', title: 'Minimum Size Subarray Sum', difficulty: 'Medium',
    description: 'Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. Return 0 if no such subarray exists.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= nums[i] <= 10^4', '1 <= target <= 10^9'],
    examples: [
      { input: 'target = 7, nums = [2,3,1,2,4,3]', output: '2', explanation: 'Subarray [4,3] has sum 7 and length 2.' },
      { input: 'target = 4, nums = [1,4,4]', output: '1', explanation: 'Subarray [4] has sum 4 and length 1.' }
    ],
    testCases: [
      { input: '7\n6\n2 3 1 2 4 3', expectedOutput: '2', hidden: false },
      { input: '4\n3\n1 4 4', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: 'def min_subarray_len(target, nums):\n    pass\n\ntarget = int(input())\nn = int(input())\nnums = list(map(int, input().split()))\nprint(min_subarray_len(target, nums))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minSubarrayLen(int target, int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int target = sc.nextInt();\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(minSubarrayLen(target, nums));\n    }\n}',
      c: '#include <stdio.h>\n#include <limits.h>\n\nint minSubarrayLen(int target, int* nums, int n) {\n    return 0;\n}\n\nint main() {\n    int target, n;\n    scanf("%d", &target);\n    scanf("%d", &n);\n    int nums[n];\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", minSubarrayLen(target, nums, n));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint minSubarrayLen(int target, vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    int target, n;\n    cin >> target >> n;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << minSubarrayLen(target, nums) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-m5', title: 'Minimum Window Substring with Repeated Queries', difficulty: 'Medium',
    description: 'Given a string s and q queries each with a target string t, for each query return the minimum window substring of s that contains all characters of t. Return "" if no such window exists.',
    constraints: ['1 <= s.length <= 10^5', '1 <= q <= 500', '1 <= t.length <= 100', 's and t consist of uppercase and lowercase English letters'],
    examples: [
      { input: 's = "ADOBECODEBANC", queries = ["ABC", "BC"]', output: 'BANC\nBEC', explanation: 'Min window for "ABC" is "BANC", for "BC" is "BEC".' },
      { input: 's = "aa", queries = ["a", "aa"]', output: 'a\naa', explanation: 'Min window for "a" is "a", for "aa" is "aa".' }
    ],
    testCases: [
      { input: 'ADOBECODEBANC\n2\nABC\nBC', expectedOutput: 'BANC\nBEC', hidden: false },
      { input: 'aa\n2\na\naa', expectedOutput: 'a\naa', hidden: false }
    ],
    starterCode: {
      python: 'def min_window(s, t):\n    pass\n\ns = input()\nq = int(input())\nfor _ in range(q):\n    t = input()\n    print(min_window(s, t))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static String minWindow(String s, String t) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int q = sc.nextInt();\n        for (int i = 0; i < q; i++) {\n            String t = sc.next();\n            System.out.println(minWindow(s, t));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n#include <limits.h>\n\nvoid minWindow(char* s, char* t, char* result) {\n    result[0] = \'\\0\';\n}\n\nint main() {\n    char s[100001], t[101], result[100001];\n    scanf("%s", s);\n    int q;\n    scanf("%d", &q);\n    while (q--) {\n        scanf("%s", t);\n        minWindow(s, t, result);\n        printf("%s\\n", result);\n    }\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring minWindow(string s, string t) {\n    return "";\n}\n\nint main() {\n    string s;\n    int q;\n    cin >> s >> q;\n    while (q--) {\n        string t;\n        cin >> t;\n        cout << minWindow(s, t) << "\\n";\n    }\n    return 0;\n}'
    }
  },
];

export const MinimumWindowSubstringHardProblems = [
  // --- HARD ---
  {
    id: 'mws-h1', title: 'Minimum Window Substring with Exactly K Distinct Characters', difficulty: 'Hard',
    description: 'Given a string s and integer k, return the minimum length substring of s that contains exactly k distinct characters. Return -1 if no such substring exists.',
    constraints: ['1 <= s.length <= 10^5', '1 <= k <= s.length', 's consists of lowercase English letters'],
    examples: [
      { input: 's = "aabcbcdbca", k = 2', output: '2', explanation: '"aa" has exactly 2 distinct characters — wait, only 1. "ab" has 2 distinct — length 2.' },
      { input: 's = "abcdef", k = 3', output: '3', explanation: '"abc" has exactly 3 distinct characters — length 3.' }
    ],
    testCases: [
      { input: 'aabcbcdbca\n2', expectedOutput: '2', hidden: false },
      { input: 'abcdef\n3', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def min_window_k_distinct(s, k):\n    pass\n\ns = input()\nk = int(input())\nprint(min_window_k_distinct(s, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minWindowKDistinct(String s, int k) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        System.out.println(minWindowKDistinct(s, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n#include <limits.h>\n\nint minWindowKDistinct(char* s, int k) {\n    return -1;\n}\n\nint main() {\n    char s[100001];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    printf("%d\\n", minWindowKDistinct(s, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint minWindowKDistinct(string s, int k) {\n    return -1;\n}\n\nint main() {\n    string s;\n    int k;\n    cin >> s >> k;\n    cout << minWindowKDistinct(s, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-h2', title: 'Minimum Window Substring with Character Frequency Constraint', difficulty: 'Hard',
    description: 'Given strings s and t and an integer m, return the minimum window substring of s such that every character in t appears at least m times more than its frequency in t. Return "" if no such window exists.',
    constraints: ['1 <= s.length <= 10^5', '1 <= t.length <= 100', '1 <= m <= 10', 's and t consist of uppercase English letters'],
    examples: [
      { input: 's = "AABBCCABC", t = "ABC", m = 2', output: 'AABBCC', explanation: '"AABBCC" has A×2, B×2, C×2 — each appears at least 2 times satisfying m=2 for each char in t.' },
      { input: 's = "AABC", t = "AB", m = 2', output: '', explanation: 'No window has A and B each appearing at least 2 times.' }
    ],
    testCases: [
      { input: 'AABBCCABC\nABC\n2', expectedOutput: 'AABBCC', hidden: false },
      { input: 'AABC\nAB\n2', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: 'def min_window_freq_constraint(s, t, m):\n    pass\n\ns = input()\nt = input()\nm = int(input())\nprint(min_window_freq_constraint(s, t, m))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static String minWindowFreqConstraint(String s, String t, int m) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        String t = sc.next();\n        int m = sc.nextInt();\n        System.out.println(minWindowFreqConstraint(s, t, m));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n#include <limits.h>\n\nvoid minWindowFreqConstraint(char* s, char* t, int m, char* result) {\n    result[0] = \'\\0\';\n}\n\nint main() {\n    char s[100001], t[101], result[100001];\n    int m;\n    scanf("%s", s);\n    scanf("%s", t);\n    scanf("%d", &m);\n    minWindowFreqConstraint(s, t, m, result);\n    printf("%s\\n", result);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring minWindowFreqConstraint(string s, string t, int m) {\n    return "";\n}\n\nint main() {\n    string s, t;\n    int m;\n    cin >> s >> t >> m;\n    cout << minWindowFreqConstraint(s, t, m) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-h3', title: 'Smallest Range Covering Elements from K Lists', difficulty: 'Hard',
    description: 'Given k sorted lists of integers, find the smallest range [a, b] such that there is at least one number from each list within the range. Return the range as two space-separated integers.',
    constraints: ['1 <= k <= 3500', '1 <= nums[i].length <= 50', '-10^5 <= nums[i][j] <= 10^5', 'nums[i] is sorted in ascending order'],
    examples: [
      { input: 'k = 3, lists = [[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]', output: '20 24', explanation: 'Range [20,24] contains 24 from list 1, 20 from list 2, 22 from list 3.' },
      { input: 'k = 2, lists = [[1,2,3],[1,2,3]]', output: '1 1', explanation: 'Range [1,1] contains 1 from both lists.' }
    ],
    testCases: [
      { input: '3\n4\n4 10 15 24 26\n4\n0 9 12 20\n4\n5 18 22 30', expectedOutput: '20 24', hidden: false },
      { input: '2\n3\n1 2 3\n3\n1 2 3', expectedOutput: '1 1', hidden: false }
    ],
    starterCode: {
      python: 'def smallest_range(nums):\n    pass\n\nk = int(input())\nnums = []\nfor _ in range(k):\n    n = int(input())\n    nums.append(list(map(int, input().split())))\nresult = smallest_range(nums)\nprint(result[0], result[1])',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] smallestRange(List<List<Integer>> nums) {\n        return new int[]{0, 0};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int k = sc.nextInt();\n        List<List<Integer>> nums = new ArrayList<>();\n        for (int i = 0; i < k; i++) {\n            int n = sc.nextInt();\n            List<Integer> list = new ArrayList<>();\n            for (int j = 0; j < n; j++) list.add(sc.nextInt());\n            nums.add(list);\n        }\n        int[] result = smallestRange(nums);\n        System.out.println(result[0] + " " + result[1]);\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n#include <limits.h>\n\nvoid smallestRange(int** nums, int* sizes, int k, int* lo, int* hi) {\n    *lo = 0; *hi = 0;\n}\n\nint main() {\n    int k;\n    scanf("%d", &k);\n    int* sizes = (int*)malloc(k * sizeof(int));\n    int** nums = (int**)malloc(k * sizeof(int*));\n    for (int i = 0; i < k; i++) {\n        scanf("%d", &sizes[i]);\n        nums[i] = (int*)malloc(sizes[i] * sizeof(int));\n        for (int j = 0; j < sizes[i]; j++) scanf("%d", &nums[i][j]);\n    }\n    int lo, hi;\n    smallestRange(nums, sizes, k, &lo, &hi);\n    printf("%d %d\\n", lo, hi);\n    for (int i = 0; i < k; i++) free(nums[i]);\n    free(nums); free(sizes);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> smallestRange(vector<vector<int>>& nums) {\n    return {0, 0};\n}\n\nint main() {\n    int k;\n    cin >> k;\n    vector<vector<int>> nums(k);\n    for (int i = 0; i < k; i++) {\n        int n; cin >> n;\n        nums[i].resize(n);\n        for (int j = 0; j < n; j++) cin >> nums[i][j];\n    }\n    vector<int> result = smallestRange(nums);\n    cout << result[0] << " " << result[1] << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-h4', title: 'Minimum Window Subsequence', difficulty: 'Hard',
    description: 'Given strings s and t, return the minimum window in s which will contain all characters of t in order as a subsequence. Return "" if no such window exists.',
    constraints: ['1 <= s.length <= 2*10^4', '1 <= t.length <= 100', 's and t consist of lowercase English letters'],
    examples: [
      { input: 's = "abcdebdde", t = "bde"', output: 'bcde', explanation: '"bcde" is the shortest substring of s where b, d, e appear in order.' },
      { input: 's = "jmeqksfrsdcmsiwvaovztaqenprpvnbstl", t = "u"', output: '', explanation: '"u" does not appear in s.' }
    ],
    testCases: [
      { input: 'abcdebdde\nbde', expectedOutput: 'bcde', hidden: false },
      { input: 'jmeqksfrsdcmsiwvaovztaqenprpvnbstl\nu', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: 'def min_window_subsequence(s, t):\n    pass\n\ns = input()\nt = input()\nprint(min_window_subsequence(s, t))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static String minWindowSubsequence(String s, String t) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        String t = sc.next();\n        System.out.println(minWindowSubsequence(s, t));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid minWindowSubsequence(char* s, char* t, char* result) {\n    result[0] = \'\\0\';\n}\n\nint main() {\n    char s[20001], t[101], result[20001];\n    scanf("%s", s);\n    scanf("%s", t);\n    minWindowSubsequence(s, t, result);\n    printf("%s\\n", result);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring minWindowSubsequence(string s, string t) {\n    return "";\n}\n\nint main() {\n    string s, t;\n    cin >> s >> t;\n    cout << minWindowSubsequence(s, t) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'mws-h5', title: 'Count Minimum Window Substrings Across Multiple Targets', difficulty: 'Hard',
    description: 'Given a string s and an array of q target strings, for each target return the starting index of the minimum window substring in s. If multiple windows have the same minimum length, return the smallest starting index. Return -1 if no window exists.',
    constraints: ['1 <= s.length <= 10^5', '1 <= q <= 500', '1 <= t.length <= 100', 's and t consist of uppercase and lowercase English letters'],
    examples: [
      { input: 's = "ADOBECODEBANC", targets = ["ABC", "BC"]', output: '9\n3', explanation: 'Min window for "ABC" is "BANC" starting at index 9; for "BC" is "BEC" starting at index 3.' },
      { input: 's = "aa", targets = ["a", "aa"]', output: '0\n0', explanation: 'Min window for "a" starts at 0; for "aa" starts at 0.' }
    ],
    testCases: [
      { input: 'ADOBECODEBANC\n2\nABC\nBC', expectedOutput: '9\n3', hidden: false },
      { input: 'aa\n2\na\naa', expectedOutput: '0\n0', hidden: false }
    ],
    starterCode: {
      python: 'def min_window_index(s, t):\n    pass\n\ns = input()\nq = int(input())\nfor _ in range(q):\n    t = input()\n    print(min_window_index(s, t))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minWindowIndex(String s, String t) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int q = sc.nextInt();\n        for (int i = 0; i < q; i++) {\n            String t = sc.next();\n            System.out.println(minWindowIndex(s, t));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n#include <limits.h>\n\nint minWindowIndex(char* s, char* t) {\n    return -1;\n}\n\nint main() {\n    char s[100001], t[101];\n    scanf("%s", s);\n    int q;\n    scanf("%d", &q);\n    while (q--) {\n        scanf("%s", t);\n        printf("%d\\n", minWindowIndex(s, t));\n    }\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint minWindowIndex(string s, string t) {\n    return -1;\n}\n\nint main() {\n    string s;\n    int q;\n    cin >> s >> q;\n    while (q--) {\n        string t;\n        cin >> t;\n        cout << minWindowIndex(s, t) << "\\n";\n    }\n    return 0;\n}'
    }
  },
];
