export const longestCommonSubsequenceProblems = [
  {
    "id": "lcs-e1",
    "title": "Is Subsequence",
    "difficulty": "Easy",
    "description": "Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.",
    "constraints": [
      "0 <= s.length <= 100",
      "0 <= t.length <= 10^4",
      "s and t consist only of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s = 'abc', t = 'ahbgdc'",
        "output": "true",
        "explanation": "'abc' is a subsequence of 'ahbgdc'."
      }
    ],
    "testCases": [
      {
        "input": "abc\nahbgdc",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "input": "axc\nahbgdc",
        "expectedOutput": "false",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def is_subsequence(s, t):\n    pass\n\ns = input()\nt = input()\nprint(str(is_subsequence(s, t)).lower())",
      "java": "import java.util.*;\npublic class Solution {\n    public static boolean isSubsequence(String s, String t) { return false; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.hasNext() ? sc.next() : \"\";\n        String t = sc.hasNext() ? sc.next() : \"\";\n        System.out.println(isSubsequence(s, t));\n    }\n}",
      "c": "#include <stdio.h>\n#include <string.h>\n#include <stdbool.h>\nbool isSubsequence(char* s, char* t) { return false; }\nint main() {\n    char s[1000], t[10000];\n    if(scanf(\"%s %s\", s, t) != 2) return 0;\n    printf(\"%s\\n\", isSubsequence(s, t) ? \"true\" : \"false\");\n    return 0;\n}",
      "cpp": "#include <iostream>\n#include <string>\nusing namespace std;\nbool isSubsequence(string s, string t) { return false; }\nint main() {\n    string s, t;\n    if(cin >> s >> t) {\n        cout << (isSubsequence(s, t) ? \"true\" : \"false\") << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "lcs-e2",
    "title": "Longest Common Prefix",
    "difficulty": "Easy",
    "description": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
    "constraints": [
      "1 <= strs.length <= 200",
      "0 <= strs[i].length <= 200",
      "strs[i] consists of only lowercase English letters."
    ],
    "examples": [
      {
        "input": "flower flow flight",
        "output": "fl",
        "explanation": "The longest common prefix is 'fl'."
      }
    ],
    "testCases": [
      {
        "input": "3\nflower flow flight",
        "expectedOutput": "fl",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def longest_common_prefix(strs):\n    pass\n\nn = int(input())\nstrs = input().split()\nprint(longest_common_prefix(strs))",
      "java": "import java.util.*;\npublic class Solution {\n    public static String longestCommonPrefix(String[] strs) { return \"\"; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        String[] strs = new String[n];\n        for(int i=0;i<n;i++) strs[i] = sc.next();\n        System.out.println(longestCommonPrefix(strs));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\nchar* longestCommonPrefix(char** strs, int strsSize) { return \"\"; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    char** strs = (char**)malloc(n * sizeof(char*));\n    for(int i=0;i<n;i++) { strs[i] = (char*)malloc(250); scanf(\"%s\", strs[i]); }\n    printf(\"%s\\n\", longestCommonPrefix(strs, n));\n    for(int i=0;i<n;i++) free(strs[i]);\n    free(strs); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std; \nstring longestCommonPrefix(vector<string>& strs) { return \"\"; }\nint main() {\n    int n; if(cin >> n) {\n        vector<string> strs(n); for(int i=0;i<n;i++) cin >> strs[i];\n        cout << longestCommonPrefix(strs) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "lcs-e3",
    "title": "Easy LCS Length",
    "difficulty": "Easy",
    "description": "Given two strings `s1` and `s2` with length <= 10. Find the length of the longest common subsequence.",
    "constraints": [
      "1 <= s1.length, s2.length <= 10"
    ],
    "examples": [
      {
        "input": "ab cd",
        "output": "0",
        "explanation": "No common characters."
      }
    ],
    "testCases": [
      {
        "input": "ab\ncd",
        "expectedOutput": "0",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def easy_lcs(s1, s2): pass",
      "java": "class Solution {}",
      "c": "int easyLCS()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-e4",
    "title": "Common Subsequence Length",
    "difficulty": "Easy",
    "description": "Check if the length of the longest common subsequence of two strings `s1` and `s2` is at least 1. If yes, return `true`, else `false`.",
    "constraints": [
      "1 <= s1.length, s2.length <= 100"
    ],
    "examples": [
      {
        "input": "abc def",
        "output": "false",
        "explanation": "No common characters."
      }
    ],
    "testCases": [
      {
        "input": "abc\ndef",
        "expectedOutput": "false",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def at_least_one(s1, s2): pass",
      "java": "class Solution {}",
      "c": "bool atLeastOne()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-e5",
    "title": "Palindrome Check",
    "difficulty": "Easy",
    "description": "Given a string `s`, return `true` if it is a palindrome, or `false` otherwise.",
    "constraints": [
      "1 <= s.length <= 10^5",
      "s consists only of lowercase English letters."
    ],
    "examples": [
      {
        "input": "racecar",
        "output": "true",
        "explanation": "'racecar' read backwards is still 'racecar'."
      }
    ],
    "testCases": [
      {
        "input": "racecar",
        "expectedOutput": "true",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def is_palindrome(s): pass",
      "java": "class Solution {}",
      "c": "bool isPalindrome()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-m1",
    "title": "Longest Common Subsequence",
    "difficulty": "Medium",
    "description": "Given two strings `text1` and `text2`, return the length of their longest common subsequence. If there is no common subsequence, return 0.",
    "constraints": [
      "1 <= text1.length, text2.length <= 1000",
      "text1 and text2 consist of only lowercase English characters."
    ],
    "examples": [
      {
        "input": "text1 = 'abcde', text2 = 'ace'",
        "output": "3",
        "explanation": "The longest common subsequence is 'ace' and its length is 3."
      }
    ],
    "testCases": [
      {
        "input": "abcde\nace",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def lcs(text1, text2): pass",
      "java": "class Solution {}",
      "c": "int lcs()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-m2",
    "title": "Longest Palindromic Subsequence",
    "difficulty": "Medium",
    "description": "Given a string `s`, find the length of the longest palindromic subsequence in `s`.",
    "constraints": [
      "1 <= s.length <= 1000",
      "s consists only of lowercase English letters."
    ],
    "examples": [
      {
        "input": "bbbab",
        "output": "4",
        "explanation": "One possible longest palindromic subsequence is 'bbbb'."
      }
    ],
    "testCases": [
      {
        "input": "bbbab",
        "expectedOutput": "4",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def lps(s): pass",
      "java": "class Solution {}",
      "c": "int lps()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-m3",
    "title": "Delete Operation",
    "difficulty": "Medium",
    "description": "Given two strings `word1` and `word2`, return the minimum number of steps required to make `word1` and `word2` the same. In one step, you can delete one character in either string.",
    "constraints": [
      "1 <= word1.length, word2.length <= 500",
      "word1 and word2 consist of only lowercase English letters."
    ],
    "examples": [
      {
        "input": "word1 = 'sea', word2 = 'eat'",
        "output": "2",
        "explanation": "Delete 's' from 'sea' and 't' from 'eat' to make 'ea'."
      }
    ],
    "testCases": [
      {
        "input": "sea\neat",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def min_distance(word1, word2): pass",
      "java": "class Solution {}",
      "c": "int minDistance()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-m4",
    "title": "Minimum ASCII Delete Sum",
    "difficulty": "Medium",
    "description": "Given two strings `s1` and `s2`, return the lowest ASCII sum of deleted characters to make two strings equal.",
    "constraints": [
      "1 <= s1.length, s2.length <= 1000",
      "s1 and s2 consist only of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s1 = 'sea', s2 = 'eat'",
        "output": "231",
        "explanation": "Deleting 's' from 'sea' adds 115. Deleting 't' from 'eat' adds 116. Total sum is 231."
      }
    ],
    "testCases": [
      {
        "input": "sea\neat",
        "expectedOutput": "231",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def minimum_delete_sum(s1, s2): pass",
      "java": "class Solution {}",
      "c": "int minimumDeleteSum()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-m5",
    "title": "Shortest Common Supersequence",
    "difficulty": "Medium",
    "description": "Given two strings `str1` and `str2`, return the shortest string that has both `str1` and `str2` as subsequences.",
    "constraints": [
      "1 <= str1.length, str2.length <= 1000",
      "str1 and str2 consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "str1 = 'abac', str2 = 'cab'",
        "output": "cabac",
        "explanation": "Shortest supersequence is 'cabac'."
      }
    ],
    "testCases": [
      {
        "input": "abac\ncab",
        "expectedOutput": "cabac",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def shortest_supersequence(str1, str2): pass",
      "java": "class Solution {}",
      "c": "char* shortestSupersequence()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-h1",
    "title": "LCS of Three Strings",
    "difficulty": "Hard",
    "description": "Given three strings `s1`, `s2`, and `s3`, find the length of their longest common subsequence.",
    "constraints": [
      "1 <= s1.length, s2.length, s3.length <= 100",
      "The strings consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "s1 = 'abcd', s2 = 'aece', s3 = 'acde'",
        "output": "2",
        "explanation": "The LCS of three strings is 'ac' of length 2."
      }
    ],
    "testCases": [
      {
        "input": "abcd\naece\nacde",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def lcs_three(s1, s2, s3): pass",
      "java": "class Solution {}",
      "c": "int lcsThree()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-h2",
    "title": "Distinct Subsequences",
    "difficulty": "Hard",
    "description": "Given two strings `s` and `t`, return the number of distinct subsequences of `s` which equals `t`.",
    "constraints": [
      "1 <= s.length, t.length <= 1000",
      "s and t consist of English letters."
    ],
    "examples": [
      {
        "input": "s = 'rabbbit', t = 'rabbit'",
        "output": "3",
        "explanation": "There are 3 ways to get 'rabbit' from 'rabbbit'."
      }
    ],
    "testCases": [
      {
        "input": "rabbbit\nrabbit",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def num_distinct(s, t): pass",
      "java": "class Solution {}",
      "c": "int numDistinct()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-h3",
    "title": "Edit Distance",
    "difficulty": "Hard",
    "description": "Given two strings `word1` and `word2`, return the minimum number of operations required to convert `word1` to `word2`. You have three operations permitted on a word: insert, delete, or replace.",
    "constraints": [
      "0 <= word1.length, word2.length <= 500",
      "word1 and word2 consist of lowercase English letters."
    ],
    "examples": [
      {
        "input": "word1 = 'horse', word2 = 'ros'",
        "output": "3",
        "explanation": "horse -> rorse (replace 'h' with 'r'), rorse -> rose (delete 'r'), rose -> ros (delete 'e'). Total 3 steps."
      }
    ],
    "testCases": [
      {
        "input": "horse\nros",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def min_distance(word1, word2): pass",
      "java": "class Solution {}",
      "c": "int minDistance()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-h4",
    "title": "Minimum Insertion Steps",
    "difficulty": "Hard",
    "description": "Given a string `s`, return the minimum number of insertion steps to make `s` a palindrome.",
    "constraints": [
      "1 <= s.length <= 500",
      "s consists only of lowercase English letters."
    ],
    "examples": [
      {
        "input": "zzazz",
        "output": "0",
        "explanation": "zzazz is already a palindrome."
      }
    ],
    "testCases": [
      {
        "input": "zzazz",
        "expectedOutput": "0",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def min_insertions(s): pass",
      "java": "class Solution {}",
      "c": "int minInsertions()",
      "cpp": "class Solution {}"
    }
  },
  {
    "id": "lcs-h5",
    "title": "Wildcard Matching",
    "difficulty": "Hard",
    "description": "Given an input string `s` and a pattern `p`, implement wildcard pattern matching with support for '?' and '*' where '?' matches any single character and '*' matches any sequence of characters (including empty sequence). Return `true` if matched.",
    "constraints": [
      "0 <= s.length, p.length <= 2000",
      "s consists of lowercase English letters.",
      "p consists of lowercase English letters, '?' or '*'."
    ],
    "examples": [
      {
        "input": "aa\n*",
        "output": "true",
        "explanation": "'*' matches any sequence, including 'aa'."
      }
    ],
    "testCases": [
      {
        "input": "aa\n*",
        "expectedOutput": "true",
        "hidden": false
      },
      {
        "input": "cb\n?a",
        "expectedOutput": "false",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def is_match(s, p): pass",
      "java": "class Solution {}",
      "c": "bool isMatch()",
      "cpp": "class Solution {}"
    }
  }
];
