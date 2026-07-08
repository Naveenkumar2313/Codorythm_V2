export const LongestRepeatingCharacterReplacementProblems = [
  // --- EASY ---
  {
    id: 'lrcr-e1', title: 'Max Frequency Character in Window', difficulty: 'Easy',
    description: 'Given a string s and a window size w, return the maximum frequency of any single character in any window of size w.',
    constraints: ['1 <= s.length <= 10^5', '1 <= w <= s.length', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "AABABBA", w = 3', output: '2', explanation: 'Window "AAB" has max frequency 2 for "A".' },
      { input: 's = "AAAB", w = 3', output: '3', explanation: 'Window "AAA" has max frequency 3 for "A".' }
    ],
    testCases: [
      { input: 'AABABBA\n3', expectedOutput: '2', hidden: false },
      { input: 'AAAB\n3', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def max_freq_in_window(s, w):\n    pass\n\ns = input()\nw = int(input())\nprint(max_freq_in_window(s, w))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int maxFreqInWindow(String s, int w) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int w = sc.nextInt();\n        System.out.println(maxFreqInWindow(s, w));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint maxFreqInWindow(char* s, int w) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int w;\n    scanf("%s", s);\n    scanf("%d", &w);\n    printf("%d\\n", maxFreqInWindow(s, w));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint maxFreqInWindow(string s, int w) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int w;\n    cin >> s >> w;\n    cout << maxFreqInWindow(s, w) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-e2', title: 'Can Make Uniform String with K Replacements', difficulty: 'Easy',
    description: 'Given a string s and integer k, return true if you can make the entire string consist of one character by replacing at most k characters.',
    constraints: ['1 <= s.length <= 10^5', '0 <= k <= s.length', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "AABBA", k = 2', output: 'true', explanation: 'Replace 2 "B"s with "A" to get "AAAAA".' },
      { input: 's = "ABCDE", k = 2', output: 'false', explanation: 'Need at least 4 replacements; k=2 is not enough.' }
    ],
    testCases: [
      { input: 'AABBA\n2', expectedOutput: 'true', hidden: false },
      { input: 'ABCDE\n2', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def can_make_uniform(s, k):\n    pass\n\ns = input()\nk = int(input())\nprint(str(can_make_uniform(s, k)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean canMakeUniform(String s, int k) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        System.out.println(canMakeUniform(s, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint canMakeUniform(char* s, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    printf("%s\\n", canMakeUniform(s, k) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool canMakeUniform(string s, int k) {\n    return false;\n}\n\nint main() {\n    string s;\n    int k;\n    cin >> s >> k;\n    cout << (canMakeUniform(s, k) ? "true" : "false") << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-e3', title: 'Minimum Replacements to Make String Uniform', difficulty: 'Easy',
    description: 'Given a string s, return the minimum number of character replacements needed to make the entire string consist of a single character.',
    constraints: ['1 <= s.length <= 10^5', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "AAABBB"', output: '3', explanation: 'Replace 3 "B"s (or 3 "A"s) — minimum is 3.' },
      { input: 's = "AABBA"', output: '2', explanation: 'Replace 2 "B"s to get "AAAAA".' }
    ],
    testCases: [
      { input: 'AAABBB', expectedOutput: '3', hidden: false },
      { input: 'AABBA', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def min_replacements_uniform(s):\n    pass\n\ns = input()\nprint(min_replacements_uniform(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minReplacementsUniform(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(minReplacementsUniform(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint minReplacementsUniform(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%d\\n", minReplacementsUniform(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint minReplacementsUniform(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << minReplacementsUniform(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-e4', title: 'Longest Subarray of Same Character', difficulty: 'Easy',
    description: 'Given a string s, return the length of the longest contiguous subarray where all characters are the same (no replacements allowed).',
    constraints: ['1 <= s.length <= 10^5', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "AABBBCC"', output: '3', explanation: '"BBB" is the longest run of the same character.' },
      { input: 's = "AAABBA"', output: '3', explanation: '"AAA" at the start has length 3.' }
    ],
    testCases: [
      { input: 'AABBBCC', expectedOutput: '3', hidden: false },
      { input: 'AAABBA', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def longest_same_char(s):\n    pass\n\ns = input()\nprint(longest_same_char(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestSameChar(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(longestSameChar(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestSameChar(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%d\\n", longestSameChar(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestSameChar(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << longestSameChar(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-e5', title: 'Count Windows Valid After K Replacements', difficulty: 'Easy',
    description: 'Given a string s, window size w, and integer k, return the count of windows of size w that can be made uniform (all same character) with at most k replacements.',
    constraints: ['1 <= s.length <= 10^5', '1 <= w <= s.length', '0 <= k <= w', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "AABBA", w = 3, k = 1', output: '2', explanation: 'Windows "AAB" and "ABB" each need 1 replacement.' },
      { input: 's = "ABCD", w = 2, k = 1', output: '3', explanation: 'Windows "AB","BC","CD" each need 1 replacement.' }
    ],
    testCases: [
      { input: 'AABBA\n3\n1', expectedOutput: '2', hidden: false },
      { input: 'ABCD\n2\n1', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def count_valid_windows(s, w, k):\n    pass\n\ns = input()\nw = int(input())\nk = int(input())\nprint(count_valid_windows(s, w, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int countValidWindows(String s, int w, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int w = sc.nextInt();\n        int k = sc.nextInt();\n        System.out.println(countValidWindows(s, w, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint countValidWindows(char* s, int w, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int w, k;\n    scanf("%s", s);\n    scanf("%d", &w);\n    scanf("%d", &k);\n    printf("%d\\n", countValidWindows(s, w, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint countValidWindows(string s, int w, int k) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int w, k;\n    cin >> s >> w >> k;\n    cout << countValidWindows(s, w, k) << "\\n";\n    return 0;\n}'
    }
  },
];

export const LongestRepeatingCharacterReplacementMediumProblems = [
  // --- MEDIUM ---
  {
    id: 'lrcr-m1', title: 'Longest Repeating Character Replacement', difficulty: 'Medium',
    description: 'Given a string s and integer k, you can replace at most k characters. Return the length of the longest substring containing the same letter after replacements.',
    constraints: ['1 <= s.length <= 10^5', '0 <= k <= s.length', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "ABAB", k = 2', output: '4', explanation: 'Replace 2 "A"s with "B"s to get "BBBB".' },
      { input: 's = "AABABBA", k = 1', output: '4', explanation: 'Replace one character to get a window of length 4 with all same letters.' }
    ],
    testCases: [
      { input: 'ABAB\n2', expectedOutput: '4', hidden: false },
      { input: 'AABABBA\n1', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: 'def character_replacement(s, k):\n    pass\n\ns = input()\nk = int(input())\nprint(character_replacement(s, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int characterReplacement(String s, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        System.out.println(characterReplacement(s, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint characterReplacement(char* s, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    printf("%d\\n", characterReplacement(s, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint characterReplacement(string s, int k) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int k;\n    cin >> s >> k;\n    cout << characterReplacement(s, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-m2', title: 'Longest Uniform Substring After One Replacement', difficulty: 'Medium',
    description: 'Given a string s, return the length of the longest substring of the same character you can achieve by replacing exactly one character.',
    constraints: ['1 <= s.length <= 10^5', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "AABAAA"', output: '5', explanation: 'Replace "B" at index 2 to get "AAAAAA" — window of 5 around it.' },
      { input: 's = "ABBB"', output: '4', explanation: 'Replace "A" to get "BBBB" — length 4.' }
    ],
    testCases: [
      { input: 'AABAAA', expectedOutput: '5', hidden: false },
      { input: 'ABBB', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: 'def longest_after_one_replacement(s):\n    pass\n\ns = input()\nprint(longest_after_one_replacement(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestAfterOneReplacement(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(longestAfterOneReplacement(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestAfterOneReplacement(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%d\\n", longestAfterOneReplacement(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestAfterOneReplacement(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << longestAfterOneReplacement(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-m3', title: 'Longest Subarray with Same Value After K Replacements', difficulty: 'Medium',
    description: 'Given a binary array nums and integer k, return the length of the longest subarray containing only 1s after flipping at most k 0s.',
    constraints: ['1 <= nums.length <= 10^5', '0 <= k <= nums.length', 'nums[i] is either 0 or 1'],
    examples: [
      { input: 'nums = [1,1,0,0,1,1,1], k = 2', output: '7', explanation: 'Flip both 0s to get all 1s — length 7.' },
      { input: 'nums = [0,0,1,1,0,0,1,1,1,0,1], k = 2', output: '6', explanation: 'Flip 2 zeros to get longest subarray of 1s with length 6.' }
    ],
    testCases: [
      { input: '7\n1 1 0 0 1 1 1\n2', expectedOutput: '7', hidden: false },
      { input: '11\n0 0 1 1 0 0 1 1 1 0 1\n2', expectedOutput: '6', hidden: false }
    ],
    starterCode: {
      python: 'def longest_ones_after_k_flips(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(longest_ones_after_k_flips(nums, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestOnesAfterKFlips(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int k = sc.nextInt();\n        System.out.println(longestOnesAfterKFlips(nums, k));\n    }\n}',
      c: '#include <stdio.h>\n\nint longestOnesAfterKFlips(int* nums, int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int nums[n];\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int k;\n    scanf("%d", &k);\n    printf("%d\\n", longestOnesAfterKFlips(nums, n, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint longestOnesAfterKFlips(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    int k;\n    cin >> k;\n    cout << longestOnesAfterKFlips(nums, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-m4', title: 'Minimum Window Size for Target Frequency', difficulty: 'Medium',
    description: 'Given a string s, a target character c, and integer k, return the minimum window size such that the window contains at least k occurrences of c after at most k replacements of other characters.',
    constraints: ['1 <= s.length <= 10^5', '0 <= k <= s.length', 's consists of uppercase English letters', 'c is an uppercase English letter'],
    examples: [
      { input: 's = "AABACBA", c = "A", k = 2', output: '3', explanation: 'Window "AAB" has 2 "A"s — minimum size is 3.' },
      { input: 's = "BBBAB", c = "B", k = 3', output: '3', explanation: 'Window "BBB" already has 3 "B"s — size 3.' }
    ],
    testCases: [
      { input: 'AABACBA\nA\n2', expectedOutput: '3', hidden: false },
      { input: 'BBBAB\nB\n3', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def min_window_for_freq(s, c, k):\n    pass\n\ns = input()\nc = input()\nk = int(input())\nprint(min_window_for_freq(s, c, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minWindowForFreq(String s, char c, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        char c = sc.next().charAt(0);\n        int k = sc.nextInt();\n        System.out.println(minWindowForFreq(s, c, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint minWindowForFreq(char* s, char c, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001], ch[2];\n    int k;\n    scanf("%s", s);\n    scanf("%s", ch);\n    scanf("%d", &k);\n    printf("%d\\n", minWindowForFreq(s, ch[0], k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint minWindowForFreq(string s, char c, int k) {\n    return 0;\n}\n\nint main() {\n    string s, ch;\n    int k;\n    cin >> s >> ch >> k;\n    cout << minWindowForFreq(s, ch[0], k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-m5', title: 'Longest Substring with Same Letters After K Replacements on Multiple Queries', difficulty: 'Medium',
    description: 'Given a string s and q queries each with a value k, for each query return the length of the longest substring with the same letter after at most k replacements.',
    constraints: ['1 <= s.length <= 10^5', '1 <= q <= 10^4', '0 <= k <= s.length', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "AABABBA", queries = [1, 2]', output: '4\n5', explanation: 'k=1 gives length 4; k=2 gives length 5.' },
      { input: 's = "ABCD", queries = [0, 3]', output: '1\n4', explanation: 'k=0 gives length 1; k=3 gives length 4.' }
    ],
    testCases: [
      { input: 'AABABBA\n2\n1\n2', expectedOutput: '4\n5', hidden: false },
      { input: 'ABCD\n2\n0\n3', expectedOutput: '1\n4', hidden: false }
    ],
    starterCode: {
      python: 'def character_replacement(s, k):\n    pass\n\ns = input()\nq = int(input())\nfor _ in range(q):\n    k = int(input())\n    print(character_replacement(s, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int characterReplacement(String s, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int q = sc.nextInt();\n        for (int i = 0; i < q; i++) {\n            int k = sc.nextInt();\n            System.out.println(characterReplacement(s, k));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint characterReplacement(char* s, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int q;\n    scanf("%s", s);\n    scanf("%d", &q);\n    while (q--) {\n        int k;\n        scanf("%d", &k);\n        printf("%d\\n", characterReplacement(s, k));\n    }\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint characterReplacement(string s, int k) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int q;\n    cin >> s >> q;\n    while (q--) {\n        int k;\n        cin >> k;\n        cout << characterReplacement(s, k) << "\\n";\n    }\n    return 0;\n}'
    }
  },
];

export const LongestRepeatingCharacterReplacementHardProblems = [
  // --- HARD ---
  {
    id: 'lrcr-h1', title: 'Longest Repeating Character Replacement with Frequency Constraint', difficulty: 'Hard',
    description: 'Given a string s, integer k, and integer minFreq, return the length of the longest substring where you can replace at most k characters such that the most frequent character appears at least minFreq times.',
    constraints: ['1 <= s.length <= 10^5', '0 <= k <= s.length', '1 <= minFreq <= s.length', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "AABABBA", k = 1, minFreq = 3', output: '4', explanation: 'Window "AABA" has "A" appearing 3 times with 1 replacement — length 4.' },
      { input: 's = "ABCDE", k = 2, minFreq = 3', output: '5', explanation: 'Replace 2 chars in "ABCDE" to get 3 of one char — length 5.' }
    ],
    testCases: [
      { input: 'AABABBA\n1\n3', expectedOutput: '4', hidden: false },
      { input: 'ABCDE\n2\n3', expectedOutput: '5', hidden: false }
    ],
    starterCode: {
      python: 'def longest_with_freq_constraint(s, k, min_freq):\n    pass\n\ns = input()\nk = int(input())\nmin_freq = int(input())\nprint(longest_with_freq_constraint(s, k, min_freq))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestWithFreqConstraint(String s, int k, int minFreq) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        int minFreq = sc.nextInt();\n        System.out.println(longestWithFreqConstraint(s, k, minFreq));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestWithFreqConstraint(char* s, int k, int minFreq) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int k, minFreq;\n    scanf("%s", s);\n    scanf("%d", &k);\n    scanf("%d", &minFreq);\n    printf("%d\\n", longestWithFreqConstraint(s, k, minFreq));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestWithFreqConstraint(string s, int k, int minFreq) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int k, minFreq;\n    cin >> s >> k >> minFreq;\n    cout << longestWithFreqConstraint(s, k, minFreq) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-h2', title: 'Minimum Cost Character Replacement to Longest Uniform Window', difficulty: 'Hard',
    description: 'Given a string s, a cost array cost where cost[i] is the cost to replace s[i], and integer budget, return the length of the longest substring of the same character achievable within the given budget.',
    constraints: ['1 <= s.length <= 10^5', '1 <= cost[i] <= 10^6', '0 <= budget <= 10^12', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "ABBA", cost = [1,2,2,1], budget = 3', output: '3', explanation: 'Replace "B" at index 1 (cost 2) and "A" at index 3 (cost 1) — total 3, window "ABB" becomes "AAA".' },
      { input: 's = "AABC", cost = [0,0,3,3], budget = 3', output: '3', explanation: 'Replace "B" (cost 3) to get "AAA" — length 3.' }
    ],
    testCases: [
      { input: 'ABBA\n4\n1 2 2 1\n3', expectedOutput: '3', hidden: false },
      { input: 'AABC\n4\n0 0 3 3\n3', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def longest_within_budget(s, cost, budget):\n    pass\n\ns = input()\nn = int(input())\ncost = list(map(int, input().split()))\nbudget = int(input())\nprint(longest_within_budget(s, cost, budget))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestWithinBudget(String s, int[] cost, long budget) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int n = sc.nextInt();\n        int[] cost = new int[n];\n        for (int i = 0; i < n; i++) cost[i] = sc.nextInt();\n        long budget = sc.nextLong();\n        System.out.println(longestWithinBudget(s, cost, budget));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestWithinBudget(char* s, int* cost, int n, long long budget) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int n;\n    scanf("%s", s);\n    scanf("%d", &n);\n    int cost[n];\n    for (int i = 0; i < n; i++) scanf("%d", &cost[i]);\n    long long budget;\n    scanf("%lld", &budget);\n    printf("%d\\n", longestWithinBudget(s, cost, n, budget));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nint longestWithinBudget(string s, vector<int>& cost, long long budget) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int n;\n    cin >> s >> n;\n    vector<int> cost(n);\n    for (int i = 0; i < n; i++) cin >> cost[i];\n    long long budget;\n    cin >> budget;\n    cout << longestWithinBudget(s, cost, budget) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-h3', title: 'Longest Uniform Substring Across Two Strings After K Replacements', difficulty: 'Hard',
    description: 'Given two strings s1 and s2 of equal length and integer k, return the length of the longest common window position where both windows can be made uniform (all same character) with a combined total of at most k replacements.',
    constraints: ['1 <= s1.length == s2.length <= 10^5', '0 <= k <= 2 * s1.length', 's1 and s2 consist of uppercase English letters'],
    examples: [
      { input: 's1 = "AABB", s2 = "BBAA", k = 2', output: '2', explanation: 'Window of size 2 at index 0: "AA" in s1 needs 0, "BB" in s2 needs 0 — total 0 <= 2.' },
      { input: 's1 = "ABCD", s2 = "ABCD", k = 4', output: '3', explanation: 'Window of size 3 needs at most 4 combined replacements.' }
    ],
    testCases: [
      { input: 'AABB\nBBAA\n2', expectedOutput: '2', hidden: false },
      { input: 'ABCD\nABCD\n4', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def longest_common_uniform_window(s1, s2, k):\n    pass\n\ns1 = input()\ns2 = input()\nk = int(input())\nprint(longest_common_uniform_window(s1, s2, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestCommonUniformWindow(String s1, String s2, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s1 = sc.next();\n        String s2 = sc.next();\n        int k = sc.nextInt();\n        System.out.println(longestCommonUniformWindow(s1, s2, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestCommonUniformWindow(char* s1, char* s2, int k) {\n    return 0;\n}\n\nint main() {\n    char s1[100001], s2[100001];\n    int k;\n    scanf("%s", s1);\n    scanf("%s", s2);\n    scanf("%d", &k);\n    printf("%d\\n", longestCommonUniformWindow(s1, s2, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestCommonUniformWindow(string s1, string s2, int k) {\n    return 0;\n}\n\nint main() {\n    string s1, s2;\n    int k;\n    cin >> s1 >> s2 >> k;\n    cout << longestCommonUniformWindow(s1, s2, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-h4', title: 'Count Substrings Achievable as Uniform with Exactly K Replacements', difficulty: 'Hard',
    description: 'Given a string s and integer k, return the number of substrings that can be made uniform (all same character) using exactly k replacements.',
    constraints: ['1 <= s.length <= 10^5', '0 <= k <= s.length', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "ABAB", k = 1', output: '4', explanation: 'Substrings "ABA","BAB","AB","BA" each need exactly 1 replacement.' },
      { input: 's = "AAAA", k = 0', output: '10', explanation: 'All 10 substrings are already uniform — 0 replacements needed.' }
    ],
    testCases: [
      { input: 'ABAB\n1', expectedOutput: '4', hidden: false },
      { input: 'AAAA\n0', expectedOutput: '10', hidden: false }
    ],
    starterCode: {
      python: 'def count_uniform_substrings_exact_k(s, k):\n    pass\n\ns = input()\nk = int(input())\nprint(count_uniform_substrings_exact_k(s, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int countUniformSubstringsExactK(String s, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        System.out.println(countUniformSubstringsExactK(s, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint countUniformSubstringsExactK(char* s, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    printf("%d\\n", countUniformSubstringsExactK(s, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint countUniformSubstringsExactK(string s, int k) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int k;\n    cin >> s >> k;\n    cout << countUniformSubstringsExactK(s, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'lrcr-h5', title: 'Longest Uniform Substring After K Replacements with Forbidden Characters', difficulty: 'Hard',
    description: 'Given a string s, integer k, and a set of forbidden characters that cannot be used as the target uniform character, return the length of the longest substring that can be made uniform using at most k replacements.',
    constraints: ['1 <= s.length <= 10^5', '0 <= k <= s.length', 's consists of uppercase English letters', '0 <= forbidden.length <= 26'],
    examples: [
      { input: 's = "AABBA", k = 1, forbidden = "B"', output: '3', explanation: '"B" is forbidden — best uniform target is "A"; window "AAB" with 1 replacement gives length 3.' },
      { input: 's = "BCCCB", k = 2, forbidden = "BC"', output: '0', explanation: 'All characters are forbidden — no valid uniform substring.' }
    ],
    testCases: [
      { input: 'AABBA\n1\nB', expectedOutput: '3', hidden: false },
      { input: 'BCCCB\n2\nBC', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: 'def longest_uniform_no_forbidden(s, k, forbidden):\n    pass\n\ns = input()\nk = int(input())\nforbidden = input()\nprint(longest_uniform_no_forbidden(s, k, forbidden))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestUniformNoForbidden(String s, int k, String forbidden) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        String forbidden = sc.next();\n        System.out.println(longestUniformNoForbidden(s, k, forbidden));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestUniformNoForbidden(char* s, int k, char* forbidden) {\n    return 0;\n}\n\nint main() {\n    char s[100001], forbidden[27];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    scanf("%s", forbidden);\n    printf("%d\\n", longestUniformNoForbidden(s, k, forbidden));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestUniformNoForbidden(string s, int k, string forbidden) {\n    return 0;\n}\n\nint main() {\n    string s, forbidden;\n    int k;\n    cin >> s >> k >> forbidden;\n    cout << longestUniformNoForbidden(s, k, forbidden) << "\\n";\n    return 0;\n}'
    }
  },
];
