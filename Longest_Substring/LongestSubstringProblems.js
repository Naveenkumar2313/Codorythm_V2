export const LongestSubstringProblems = [
  // --- EASY ---
  {
    id: 'ls-e1', title: 'Longest Substring Without Repeating Characters', difficulty: 'Easy',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    constraints: ['0 <= s.length <= 5*10^4', 's consists of English letters, digits, symbols and spaces'],
    examples: [
      { input: 's = "abcabcbb"', output: '3', explanation: 'The answer is "abc" with length 3.' },
      { input: 's = "bbbbb"', output: '1', explanation: 'The answer is "b" with length 1.' }
    ],
    testCases: [
      { input: 'abcabcbb', expectedOutput: '3', hidden: false },
      { input: 'bbbbb', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: 'def length_of_longest_substring(s):\n    pass\n\ns = input()\nprint(length_of_longest_substring(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int lengthOfLongestSubstring(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(lengthOfLongestSubstring(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint lengthOfLongestSubstring(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[50001];\n    scanf("%s", s);\n    printf("%d\\n", lengthOfLongestSubstring(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint lengthOfLongestSubstring(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << lengthOfLongestSubstring(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-e2', title: 'Contains Duplicate', difficulty: 'Easy',
    description: 'Given an integer array nums, return true if any value appears at least twice, and false if every element is distinct.',
    constraints: ['1 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9'],
    examples: [
      { input: 'nums = [1,2,3,1]', output: 'true', explanation: '1 appears twice.' },
      { input: 'nums = [1,2,3,4]', output: 'false', explanation: 'All elements are distinct.' }
    ],
    testCases: [
      { input: '4\n1 2 3 1', expectedOutput: 'true', hidden: false },
      { input: '4\n1 2 3 4', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def contains_duplicate(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(str(contains_duplicate(nums)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean containsDuplicate(int[] nums) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        System.out.println(containsDuplicate(nums));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint containsDuplicate(int* nums, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int nums[n];\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%s\\n", containsDuplicate(nums, n) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nbool containsDuplicate(vector<int>& nums) {\n    return false;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << (containsDuplicate(nums) ? "true" : "false") << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-e3', title: 'First Non-Repeating Character', difficulty: 'Easy',
    description: 'Given a string s, find the first non-repeating character and return its index. Return -1 if none exists.',
    constraints: ['1 <= s.length <= 10^5', 's consists of only lowercase English letters'],
    examples: [
      { input: 's = "leetcode"', output: '0', explanation: '"l" is the first non-repeating character at index 0.' },
      { input: 's = "aabb"', output: '-1', explanation: 'No non-repeating character exists.' }
    ],
    testCases: [
      { input: 'leetcode', expectedOutput: '0', hidden: false },
      { input: 'aabb', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def first_unique_char(s):\n    pass\n\ns = input()\nprint(first_unique_char(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int firstUniqueChar(String s) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(firstUniqueChar(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint firstUniqueChar(char* s) {\n    return -1;\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%d\\n", firstUniqueChar(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint firstUniqueChar(string s) {\n    return -1;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << firstUniqueChar(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-e4', title: 'Maximum Number of Vowels in a Substring', difficulty: 'Easy',
    description: 'Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.',
    constraints: ['1 <= s.length <= 10^5', '1 <= k <= s.length'],
    examples: [
      { input: 's = "abciiidef", k = 3', output: '3', explanation: 'Substring "iii" has 3 vowels.' },
      { input: 's = "aeiou", k = 2', output: '2', explanation: 'Any substring of length 2 has 2 vowels.' }
    ],
    testCases: [
      { input: 'abciiidef\n3', expectedOutput: '3', hidden: false },
      { input: 'aeiou\n2', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def max_vowels(s, k):\n    pass\n\ns = input()\nk = int(input())\nprint(max_vowels(s, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int maxVowels(String s, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        System.out.println(maxVowels(s, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint maxVowels(char* s, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    printf("%d\\n", maxVowels(s, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint maxVowels(string s, int k) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int k;\n    cin >> s >> k;\n    cout << maxVowels(s, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-e5', title: 'Unique Characters in a String', difficulty: 'Easy',
    description: 'Given a string s, return the number of unique characters in it.',
    constraints: ['1 <= s.length <= 10^5', 's consists of lowercase English letters'],
    examples: [
      { input: 's = "hello"', output: '4', explanation: 'Unique characters are h, e, l, o — count is 4.' },
      { input: 's = "aaa"', output: '1', explanation: 'Only one unique character "a".' }
    ],
    testCases: [
      { input: 'hello', expectedOutput: '4', hidden: false },
      { input: 'aaa', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: 'def count_unique(s):\n    pass\n\ns = input()\nprint(count_unique(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int countUnique(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(countUnique(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint countUnique(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%d\\n", countUnique(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint countUnique(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << countUnique(s) << "\\n";\n    return 0;\n}'
    }
  },
];

export const LongestSubstringMediumProblems = [
  // --- MEDIUM ---
  {
    id: 'ls-m1', title: 'Longest Substring with At Most Two Distinct Characters', difficulty: 'Medium',
    description: 'Given a string s, return the length of the longest substring that contains at most two distinct characters.',
    constraints: ['1 <= s.length <= 10^5'],
    examples: [
      { input: 's = "eceba"', output: '3', explanation: 'Substring "ece" has 2 distinct characters.' },
      { input: 's = "ccaabbb"', output: '5', explanation: 'Substring "aabbb" has 2 distinct characters.' }
    ],
    testCases: [
      { input: 'eceba', expectedOutput: '3', hidden: false },
      { input: 'ccaabbb', expectedOutput: '5', hidden: false }
    ],
    starterCode: {
      python: 'def length_of_longest_two_distinct(s):\n    pass\n\ns = input()\nprint(length_of_longest_two_distinct(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int lengthOfLongestTwoDistinct(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(lengthOfLongestTwoDistinct(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint lengthOfLongestTwoDistinct(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%d\\n", lengthOfLongestTwoDistinct(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint lengthOfLongestTwoDistinct(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << lengthOfLongestTwoDistinct(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-m2', title: 'Longest Substring with At Most K Distinct Characters', difficulty: 'Medium',
    description: 'Given a string s and integer k, return the length of the longest substring with at most k distinct characters.',
    constraints: ['1 <= s.length <= 10^5', '1 <= k <= 10^5'],
    examples: [
      { input: 's = "araaci", k = 2', output: '4', explanation: 'Substring "araa" has 2 distinct characters.' },
      { input: 's = "araaci", k = 1', output: '2', explanation: 'Substring "aa" has 1 distinct character.' }
    ],
    testCases: [
      { input: 'araaci\n2', expectedOutput: '4', hidden: false },
      { input: 'araaci\n1', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def longest_k_distinct(s, k):\n    pass\n\ns = input()\nk = int(input())\nprint(longest_k_distinct(s, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestKDistinct(String s, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        System.out.println(longestKDistinct(s, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestKDistinct(char* s, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    printf("%d\\n", longestKDistinct(s, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestKDistinct(string s, int k) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int k;\n    cin >> s >> k;\n    cout << longestKDistinct(s, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-m3', title: 'Longest Repeating Character Replacement', difficulty: 'Medium',
    description: 'Given a string s and integer k, you can replace at most k characters. Return the length of the longest substring containing the same letter after replacements.',
    constraints: ['1 <= s.length <= 10^5', '0 <= k <= s.length'],
    examples: [
      { input: 's = "ABAB", k = 2', output: '4', explanation: 'Replace 2 "A"s with "B"s to get "BBBB".' },
      { input: 's = "AABABBA", k = 1', output: '4', explanation: 'Replace one "A" to get "AABBBBA" — longest is 4.' }
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
    id: 'ls-m4', title: 'Permutation in String', difficulty: 'Medium',
    description: 'Given two strings s1 and s2, return true if s2 contains a permutation of s1 as a substring.',
    constraints: ['1 <= s1.length, s2.length <= 10^4'],
    examples: [
      { input: 's1 = "ab", s2 = "eidbaooo"', output: 'true', explanation: '"ba" is a permutation of "ab" and is a substring of s2.' },
      { input: 's1 = "ab", s2 = "eidboaoo"', output: 'false', explanation: 'No permutation of "ab" exists in s2.' }
    ],
    testCases: [
      { input: 'ab\neidbaooo', expectedOutput: 'true', hidden: false },
      { input: 'ab\neidboaoo', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def check_inclusion(s1, s2):\n    pass\n\ns1 = input()\ns2 = input()\nprint(str(check_inclusion(s1, s2)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean checkInclusion(String s1, String s2) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s1 = sc.next();\n        String s2 = sc.next();\n        System.out.println(checkInclusion(s1, s2));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint checkInclusion(char* s1, char* s2) {\n    return 0;\n}\n\nint main() {\n    char s1[10001], s2[10001];\n    scanf("%s %s", s1, s2);\n    printf("%s\\n", checkInclusion(s1, s2) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool checkInclusion(string s1, string s2) {\n    return false;\n}\n\nint main() {\n    string s1, s2;\n    cin >> s1 >> s2;\n    cout << (checkInclusion(s1, s2) ? "true" : "false") << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-m5', title: 'Fruit Into Baskets', difficulty: 'Medium',
    description: 'You have two baskets and can only hold one type of fruit each. Given an array of fruits, return the maximum number of fruits you can pick in a contiguous subarray with at most 2 types.',
    constraints: ['1 <= fruits.length <= 10^5', '0 <= fruits[i] < fruits.length'],
    examples: [
      { input: 'fruits = [1,2,1]', output: '3', explanation: 'Pick all 3 fruits — only 2 types.' },
      { input: 'fruits = [0,1,2,2]', output: '3', explanation: 'Pick fruits [1,2,2] — 2 types, length 3.' }
    ],
    testCases: [
      { input: '3\n1 2 1', expectedOutput: '3', hidden: false },
      { input: '4\n0 1 2 2', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def total_fruit(fruits):\n    pass\n\nn = int(input())\nfruits = list(map(int, input().split()))\nprint(total_fruit(fruits))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int totalFruit(int[] fruits) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] fruits = new int[n];\n        for (int i = 0; i < n; i++) fruits[i] = sc.nextInt();\n        System.out.println(totalFruit(fruits));\n    }\n}',
      c: '#include <stdio.h>\n\nint totalFruit(int* fruits, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int fruits[n];\n    for (int i = 0; i < n; i++) scanf("%d", &fruits[i]);\n    printf("%d\\n", totalFruit(fruits, n));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint totalFruit(vector<int>& fruits) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> fruits(n);\n    for (int i = 0; i < n; i++) cin >> fruits[i];\n    cout << totalFruit(fruits) << "\\n";\n    return 0;\n}'
    }
  },
];

export const LongestSubstringHardProblems = [
  // --- HARD ---
  {
    id: 'ls-h1', title: 'Minimum Window Substring', difficulty: 'Hard',
    description: 'Given strings s and t, return the minimum window substring of s that contains all characters of t. Return "" if no such window exists.',
    constraints: ['1 <= s.length, t.length <= 10^5', 's and t consist of uppercase and lowercase English letters'],
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: 'BANC', explanation: 'Minimum window containing A, B, C is "BANC".' },
      { input: 's = "a", t = "a"', output: 'a', explanation: 'The whole string is the minimum window.' }
    ],
    testCases: [
      { input: 'ADOBECODEBANC\nABC', expectedOutput: 'BANC', hidden: false },
      { input: 'a\na', expectedOutput: 'a', hidden: false }
    ],
    starterCode: {
      python: 'def min_window(s, t):\n    pass\n\ns = input()\nt = input()\nprint(min_window(s, t))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static String minWindow(String s, String t) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        String t = sc.next();\n        System.out.println(minWindow(s, t));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid minWindow(char* s, char* t, char* result) {\n    result[0] = \'\\0\';\n}\n\nint main() {\n    char s[100001], t[100001], result[100001];\n    scanf("%s %s", s, t);\n    minWindow(s, t, result);\n    printf("%s\\n", result);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring minWindow(string s, string t) {\n    return "";\n}\n\nint main() {\n    string s, t;\n    cin >> s >> t;\n    cout << minWindow(s, t) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-h2', title: 'Substring with Concatenation of All Words', difficulty: 'Hard',
    description: 'Given a string s and an array of words of the same length, return all starting indices of substrings that are a concatenation of all words in any order.',
    constraints: ['1 <= s.length <= 10^4', '1 <= words.length <= 5000', '1 <= words[i].length <= 30'],
    examples: [
      { input: 's = "barfoothefoobarman", words = ["foo","bar"]', output: '[0,9]', explanation: '"barfoo" starts at 0, "foobar" starts at 9.' },
      { input: 's = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]', output: '[]', explanation: 'No valid concatenation substring exists.' }
    ],
    testCases: [
      { input: 'barfoothefoobarman\n2\nfoo bar', expectedOutput: '0 9', hidden: false },
      { input: 'wordgoodgoodgoodbestword\n4\nword good best word', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: 'def find_substring(s, words):\n    pass\n\ns = input()\nn = int(input())\nwords = input().split()\nresult = find_substring(s, words)\nprint(" ".join(map(str, result)))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> findSubstring(String s, String[] words) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int n = sc.nextInt();\n        String[] words = new String[n];\n        for (int i = 0; i < n; i++) words[i] = sc.next();\n        List<Integer> result = findSubstring(s, words);\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < result.size(); i++) {\n            if (i > 0) sb.append(" ");\n            sb.append(result.get(i));\n        }\n        System.out.println(sb.toString());\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid findSubstring(char* s, char words[][31], int n, int* result, int* resSize) {\n    *resSize = 0;\n}\n\nint main() {\n    char s[10001];\n    scanf("%s", s);\n    int n;\n    scanf("%d", &n);\n    char words[5000][31];\n    for (int i = 0; i < n; i++) scanf("%s", words[i]);\n    int result[10001], resSize;\n    findSubstring(s, words, n, result, &resSize);\n    for (int i = 0; i < resSize; i++) {\n        if (i > 0) printf(" ");\n        printf("%d", result[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<int> findSubstring(string s, vector<string>& words) {\n    return {};\n}\n\nint main() {\n    string s;\n    cin >> s;\n    int n;\n    cin >> n;\n    vector<string> words(n);\n    for (int i = 0; i < n; i++) cin >> words[i];\n    vector<int> result = findSubstring(s, words);\n    for (int i = 0; i < (int)result.size(); i++) {\n        if (i > 0) cout << " ";\n        cout << result[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-h3', title: 'Longest Substring with At Most K Replacements', difficulty: 'Hard',
    description: 'Given a string s and integer k, find the longest substring where you can replace at most k characters to make all characters the same. Return the length.',
    constraints: ['1 <= s.length <= 10^5', '0 <= k <= s.length', 's consists of uppercase English letters'],
    examples: [
      { input: 's = "ABBB", k = 2', output: '4', explanation: 'Replace 1 "A" — whole string becomes "BBBB".' },
      { input: 's = "ABCDE", k = 1', output: '2', explanation: 'Any two adjacent characters can be made same.' }
    ],
    testCases: [
      { input: 'ABBB\n2', expectedOutput: '4', hidden: false },
      { input: 'ABCDE\n1', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def longest_with_k_replacements(s, k):\n    pass\n\ns = input()\nk = int(input())\nprint(longest_with_k_replacements(s, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestWithKReplacements(String s, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        System.out.println(longestWithKReplacements(s, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestWithKReplacements(char* s, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    printf("%d\\n", longestWithKReplacements(s, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestWithKReplacements(string s, int k) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int k;\n    cin >> s >> k;\n    cout << longestWithKReplacements(s, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-h4', title: 'Longest Substring with Equal 0s and 1s After Replacement', difficulty: 'Hard',
    description: 'Given a binary string s and integer k, return the length of the longest substring containing equal number of 0s and 1s with at most k replacements allowed.',
    constraints: ['1 <= s.length <= 10^5', '0 <= k <= s.length', 's consists of only "0" and "1"'],
    examples: [
      { input: 's = "0100110", k = 1', output: '6', explanation: 'Replace one character to get longest balanced substring.' },
      { input: 's = "0000", k = 2', output: '4', explanation: 'Replace 2 zeros to get "0011" — length 4.' }
    ],
    testCases: [
      { input: '0100110\n1', expectedOutput: '6', hidden: false },
      { input: '0000\n2', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: 'def longest_equal_binary(s, k):\n    pass\n\ns = input()\nk = int(input())\nprint(longest_equal_binary(s, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestEqualBinary(String s, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int k = sc.nextInt();\n        System.out.println(longestEqualBinary(s, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestEqualBinary(char* s, int k) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    int k;\n    scanf("%s", s);\n    scanf("%d", &k);\n    printf("%d\\n", longestEqualBinary(s, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestEqualBinary(string s, int k) {\n    return 0;\n}\n\nint main() {\n    string s;\n    int k;\n    cin >> s >> k;\n    cout << longestEqualBinary(s, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'ls-h5', title: 'Subarrays with K Different Integers', difficulty: 'Hard',
    description: 'Given an integer array nums and integer k, return the number of subarrays with exactly k different integers.',
    constraints: ['1 <= nums.length <= 2*10^4', '1 <= nums[i] <= nums.length', '1 <= k <= nums.length'],
    examples: [
      { input: 'nums = [1,2,1,2,3], k = 2', output: '7', explanation: 'Subarrays with exactly 2 different integers: [1,2],[2,1],[1,2],[2,3],[1,2,1],[2,1,2],[1,2,1,2].' },
      { input: 'nums = [1,2,1,3,4], k = 3', output: '3', explanation: 'Subarrays: [1,2,1,3],[2,1,3],[1,3,4].' }
    ],
    testCases: [
      { input: '5\n1 2 1 2 3\n2', expectedOutput: '7', hidden: false },
      { input: '5\n1 2 1 3 4\n3', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def subarrays_with_k_distinct(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(subarrays_with_k_distinct(nums, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int subarraysWithKDistinct(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for (int i = 0; i < n; i++) nums[i] = sc.nextInt();\n        int k = sc.nextInt();\n        System.out.println(subarraysWithKDistinct(nums, k));\n    }\n}',
      c: '#include <stdio.h>\n\nint subarraysWithKDistinct(int* nums, int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int nums[n];\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int k;\n    scanf("%d", &k);\n    printf("%d\\n", subarraysWithKDistinct(nums, n, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint subarraysWithKDistinct(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    int k;\n    cin >> k;\n    cout << subarraysWithKDistinct(nums, k) << "\\n";\n    return 0;\n}'
    }
  },
];
