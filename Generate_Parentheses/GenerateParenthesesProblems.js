export const GenerateParenthesesProblems = [
  // --- EASY ---
  {
    id: 'gp-e1', title: 'Generate All Parentheses', difficulty: 'Easy',
    description: 'Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.',
    constraints: ['1 <= n <= 8'],
    examples: [
      { input: 'n = 3', output: '["((()))","(()())","(())()","()(())","()()()"]', explanation: 'All 5 valid combinations for n=3.' },
      { input: 'n = 1', output: '["()"]', explanation: 'Only one valid combination for n=1.' }
    ],
    testCases: [
      { input: '3', expectedOutput: '((()))\n(()())\n(())()\n()(())\n()()()', hidden: false },
      { input: '1', expectedOutput: '()', hidden: false }
    ],
    starterCode: {
      python: 'def generate_parentheses(n):\n    pass\n\nn = int(input())\nresult = generate_parentheses(n)\nfor s in result:\n    print(s)',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static List<String> generateParentheses(int n) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<String> result = generateParentheses(n);\n        for (String s : result)\n            System.out.println(s);\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid generate(char* cur, int open, int close, int n, int pos) {\n    // fill this\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    char cur[2 * n + 1];\n    generate(cur, 0, 0, n, 0);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvoid generate(string cur, int open, int close, int n, vector<string>& result) {\n    // fill this\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<string> result;\n    generate("", 0, 0, n, result);\n    for (const string& s : result)\n        cout << s << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-e2', title: 'Count Valid Parentheses Combinations', difficulty: 'Easy',
    description: 'Given n pairs of parentheses, return only the count of valid combinations (do not list them).',
    constraints: ['1 <= n <= 12'],
    examples: [
      { input: 'n = 3', output: '5', explanation: 'There are 5 valid combinations for n=3.' },
      { input: 'n = 4', output: '14', explanation: 'There are 14 valid combinations for n=4.' }
    ],
    testCases: [
      { input: '3', expectedOutput: '5', hidden: false },
      { input: '4', expectedOutput: '14', hidden: false }
    ],
    starterCode: {
      python: 'def count_parentheses(n):\n    pass\n\nn = int(input())\nprint(count_parentheses(n))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int countParentheses(int n) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(countParentheses(n));\n    }\n}',
      c: '#include <stdio.h>\n\nint countParentheses(int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", countParentheses(n));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nint countParentheses(int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << countParentheses(n) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-e3', title: 'Valid Parentheses String', difficulty: 'Easy',
    description: 'Given a string containing only "(", ")", check if it is a valid (balanced) parentheses string.',
    constraints: ['1 <= s.length <= 10^4'],
    examples: [
      { input: 's = "(())"', output: 'true', explanation: 'The string is balanced.' },
      { input: 's = "(()"', output: 'false', explanation: 'The string is not balanced.' }
    ],
    testCases: [
      { input: '(())', expectedOutput: 'true', hidden: false },
      { input: '(()', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: 'def is_valid(s):\n    pass\n\ns = input()\nprint(str(is_valid(s)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean isValid(String s) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(isValid(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint isValid(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[10001];\n    scanf("%s", s);\n    printf("%s\\n", isValid(s) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool isValid(string s) {\n    return false;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << (isValid(s) ? "true" : "false") << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-e4', title: 'Minimum Bracket Reversals', difficulty: 'Easy',
    description: 'Given a string of only "(" and ")", find the minimum number of brackets that need to be reversed to make it balanced. Return -1 if impossible.',
    constraints: ['1 <= s.length <= 10^4'],
    examples: [
      { input: 's = ")("', output: '2', explanation: 'Reverse both brackets to get "()".' },
      { input: 's = "((("', output: '-1', explanation: 'Odd length string cannot be balanced.' }
    ],
    testCases: [
      { input: ')(' , expectedOutput: '2', hidden: false },
      { input: '(((', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: 'def min_reversals(s):\n    pass\n\ns = input()\nprint(min_reversals(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minReversals(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(minReversals(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint minReversals(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[10001];\n    scanf("%s", s);\n    printf("%d\\n", minReversals(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint minReversals(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << minReversals(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-e5', title: 'Score of Parentheses', difficulty: 'Easy',
    description: 'Given a balanced parentheses string, compute its score. "()" has score 1, "AB" has score A+B, and "(A)" has score 2*A.',
    constraints: ['2 <= s.length <= 50'],
    examples: [
      { input: 's = "()"', output: '1', explanation: 'Base case score is 1.' },
      { input: 's = "(())"', output: '2', explanation: 'Wrapping doubles the score: 2*1 = 2.' }
    ],
    testCases: [
      { input: '()', expectedOutput: '1', hidden: false },
      { input: '(())', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'def score_of_parentheses(s):\n    pass\n\ns = input()\nprint(score_of_parentheses(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int scoreOfParentheses(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(scoreOfParentheses(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint scoreOfParentheses(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[51];\n    scanf("%s", s);\n    printf("%d\\n", scoreOfParentheses(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint scoreOfParentheses(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << scoreOfParentheses(s) << "\\n";\n    return 0;\n}'
    }
  },
];

export const GenerateParenthesesMediumProblems = [
  // --- MEDIUM ---
  {
    id: 'gp-m1', title: 'Remove Invalid Parentheses', difficulty: 'Medium',
    description: 'Given a string with parentheses and letters, remove the minimum number of invalid parentheses to make it valid. Return all possible results.',
    constraints: ['1 <= s.length <= 25'],
    examples: [
      { input: 's = "()())()"', output: '["(())()","()()()"]', explanation: 'Remove one invalid ")" to get valid strings.' },
      { input: 's = "(a)())()"', output: '["(a())()","(a)()()"]', explanation: 'Remove minimum brackets to balance.' }
    ],
    testCases: [
      { input: '()())()', expectedOutput: '(())()\n()()()', hidden: false },
      { input: '(a)())()', expectedOutput: '(a())()\n(a)()()', hidden: false }
    ],
    starterCode: {
      python: 'def remove_invalid_parentheses(s):\n    pass\n\ns = input()\nresult = remove_invalid_parentheses(s)\nfor r in sorted(result):\n    print(r)',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static List<String> removeInvalidParentheses(String s) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        List<String> result = removeInvalidParentheses(s);\n        Collections.sort(result);\n        for (String r : result)\n            System.out.println(r);\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid removeInvalidParentheses(char* s) {\n    // fill this\n}\n\nint main() {\n    char s[26];\n    scanf("%s", s);\n    removeInvalidParentheses(s);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nvector<string> removeInvalidParentheses(string s) {\n    return {};\n}\n\nint main() {\n    string s;\n    cin >> s;\n    vector<string> result = removeInvalidParentheses(s);\n    sort(result.begin(), result.end());\n    for (const string& r : result)\n        cout << r << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-m2', title: 'Longest Valid Parentheses', difficulty: 'Medium',
    description: 'Given a string containing only "(" and ")", return the length of the longest valid (well-formed) parentheses substring.',
    constraints: ['0 <= s.length <= 3*10^4'],
    examples: [
      { input: 's = "(()"', output: '2', explanation: 'The longest valid substring is "()".' },
      { input: 's = ")()())"', output: '4', explanation: 'The longest valid substring is "()()".' }
    ],
    testCases: [
      { input: '(()', expectedOutput: '2', hidden: false },
      { input: ')()())', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: 'def longest_valid_parentheses(s):\n    pass\n\ns = input()\nprint(longest_valid_parentheses(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestValidParentheses(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(longestValidParentheses(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint longestValidParentheses(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[30001];\n    scanf("%s", s);\n    printf("%d\\n", longestValidParentheses(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint longestValidParentheses(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << longestValidParentheses(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-m3', title: 'Generate Parentheses with K Types', difficulty: 'Medium',
    description: 'Given n pairs of three types of brackets: "()", "[]", "{}", generate all combinations of well-formed brackets of total n pairs.',
    constraints: ['1 <= n <= 4'],
    examples: [
      { input: 'n = 2', output: '["(())","()()","([])","()[]","[()]","[]()","[[]]","[][]","{()}","{}()","({})","(){}","{[]}","{}[]","[{}]","[]{}","{{}}","{}{}"]', explanation: 'All valid 2-pair combinations using 3 bracket types.' },
      { input: 'n = 1', output: '["()","[]","{}"]', explanation: 'Three single-pair combinations.' }
    ],
    testCases: [
      { input: '1', expectedOutput: '()\n[]\n{}', hidden: false },
      { input: '2', expectedOutput: '18', hidden: false }
    ],
    starterCode: {
      python: 'def generate_k_types(n):\n    pass\n\nn = int(input())\nresult = generate_k_types(n)\nfor s in result:\n    print(s)',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static List<String> generateKTypes(int n) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        List<String> result = generateKTypes(n);\n        for (String s : result)\n            System.out.println(s);\n    }\n}',
      c: '#include <stdio.h>\n\nvoid generateKTypes(int n) {\n    // fill this\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    generateKTypes(n);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<string> generateKTypes(int n) {\n    return {};\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<string> result = generateKTypes(n);\n    for (const string& s : result)\n        cout << s << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-m4', title: 'Minimum Add to Make Parentheses Valid', difficulty: 'Medium',
    description: 'Given a string of parentheses, return the minimum number of parentheses you must add to make the string valid.',
    constraints: ['1 <= s.length <= 1000'],
    examples: [
      { input: 's = "())"', output: '1', explanation: 'Add one "(" at the beginning.' },
      { input: 's = "((("', output: '3', explanation: 'Add three ")" at the end.' }
    ],
    testCases: [
      { input: '())', expectedOutput: '1', hidden: false },
      { input: '(((', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: 'def min_add_to_make_valid(s):\n    pass\n\ns = input()\nprint(min_add_to_make_valid(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minAddToMakeValid(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(minAddToMakeValid(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint minAddToMakeValid(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[1001];\n    scanf("%s", s);\n    printf("%d\\n", minAddToMakeValid(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint minAddToMakeValid(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << minAddToMakeValid(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-m5', title: 'Check if Parentheses String Can Be Valid', difficulty: 'Medium',
    description: 'Given a parentheses string s and a binary string locked where locked[i] = "1" means s[i] cannot be changed, return true if s can be made valid.',
    constraints: ['1 <= s.length <= 10^5'],
    examples: [
      { input: 's = "))()))", locked = "010100"', output: 'true', explanation: 'Unlocked positions can be changed to make it valid.' },
      { input: 's = "()()", locked = "0000"', output: 'true', explanation: 'Already valid.' }
    ],
    testCases: [
      { input: '))()\n010100', expectedOutput: 'true', hidden: false },
      { input: '()()\n0000', expectedOutput: 'true', hidden: false }
    ],
    starterCode: {
      python: 'def can_be_valid(s, locked):\n    pass\n\ns = input()\nlocked = input()\nprint(str(can_be_valid(s, locked)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean canBeValid(String s, String locked) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        String locked = sc.next();\n        System.out.println(canBeValid(s, locked));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint canBeValid(char* s, char* locked) {\n    return 0;\n}\n\nint main() {\n    char s[100001], locked[100001];\n    scanf("%s %s", s, locked);\n    printf("%s\\n", canBeValid(s, locked) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool canBeValid(string s, string locked) {\n    return false;\n}\n\nint main() {\n    string s, locked;\n    cin >> s >> locked;\n    cout << (canBeValid(s, locked) ? "true" : "false") << "\\n";\n    return 0;\n}'
    }
  },
];

export const GenerateParenthesesHardProblems = [
  // --- HARD ---
  {
    id: 'gp-h1', title: 'Valid Parentheses with Wildcards', difficulty: 'Hard',
    description: 'Given a string containing "(", ")", and "*" where "*" can be "(", ")" or empty, return true if the string is valid.',
    constraints: ['1 <= s.length <= 100'],
    examples: [
      { input: 's = "(*))"', output: 'true', explanation: '"*" can be treated as "(" to balance.' },
      { input: 's = "(*)"', output: 'true', explanation: '"*" treated as empty, string is valid.' }
    ],
    testCases: [
      { input: '(*))' , expectedOutput: 'true', hidden: false },
      { input: '(*)', expectedOutput: 'true', hidden: false }
    ],
    starterCode: {
      python: 'def check_valid_string(s):\n    pass\n\ns = input()\nprint(str(check_valid_string(s)).lower())',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean checkValidString(String s) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(checkValidString(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint checkValidString(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[101];\n    scanf("%s", s);\n    printf("%s\\n", checkValidString(s) ? "true" : "false");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nbool checkValidString(string s) {\n    return false;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << (checkValidString(s) ? "true" : "false") << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-h2', title: 'Minimum Cost to Make String Valid', difficulty: 'Hard',
    description: 'Given a string of only "(" and ")", find the minimum cost to make it valid. Swapping one bracket costs 1.',
    constraints: ['1 <= s.length <= 10^6', 's.length is even'],
    examples: [
      { input: 's = ")("', output: '2', explanation: 'Swap both brackets: cost = 2.' },
      { input: 's = "))))"', output: '4', explanation: 'Need to swap 2 brackets: cost = 4.' }
    ],
    testCases: [
      { input: ')(' , expectedOutput: '2', hidden: false },
      { input: '))))', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: 'def min_cost_valid(s):\n    pass\n\ns = input()\nprint(min_cost_valid(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int minCostValid(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(minCostValid(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint minCostValid(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[1000001];\n    scanf("%s", s);\n    printf("%d\\n", minCostValid(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint minCostValid(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << minCostValid(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-h3', title: 'Count of Valid Parentheses Subsequences', difficulty: 'Hard',
    description: 'Given a string of parentheses, count the number of valid parentheses subsequences. Return the answer modulo 10^9+7.',
    constraints: ['1 <= s.length <= 10^5'],
    examples: [
      { input: 's = "(())"', output: '6', explanation: 'Valid subsequences: "()", "(())", "()()", etc.' },
      { input: 's = "()()"', output: '6', explanation: 'Multiple valid subsequences exist.' }
    ],
    testCases: [
      { input: '(())', expectedOutput: '6', hidden: false },
      { input: '()()', expectedOutput: '6', hidden: false }
    ],
    starterCode: {
      python: 'def count_valid_subsequences(s):\n    pass\n\ns = input()\nprint(count_valid_subsequences(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int countValidSubsequences(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(countValidSubsequences(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nint countValidSubsequences(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%d\\n", countValidSubsequences(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nint countValidSubsequences(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << countValidSubsequences(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-h4', title: 'Decode Nested Parentheses', difficulty: 'Hard',
    description: 'Given an encoded string where k[encoded_string] means the encoded_string is repeated k times, return the decoded string.',
    constraints: ['1 <= s.length <= 30', '1 <= k <= 300'],
    examples: [
      { input: 's = "3[a]2[bc]"', output: 'aaabcbc', explanation: '"a" repeated 3 times + "bc" repeated 2 times.' },
      { input: 's = "3[a2[c]]"', output: 'accaccacc', explanation: 'Nested: "a" + "cc" repeated 2 times, then all repeated 3 times.' }
    ],
    testCases: [
      { input: '3[a]2[bc]', expectedOutput: 'aaabcbc', hidden: false },
      { input: '3[a2[c]]', expectedOutput: 'accaccacc', hidden: false }
    ],
    starterCode: {
      python: 'def decode_string(s):\n    pass\n\ns = input()\nprint(decode_string(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static String decodeString(String s) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(decodeString(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid decodeString(char* s, char* result) {\n    // fill this\n}\n\nint main() {\n    char s[31];\n    char result[10001];\n    scanf("%s", s);\n    decodeString(s, result);\n    printf("%s\\n", result);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nstring decodeString(string s) {\n    return "";\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << decodeString(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'gp-h5', title: 'Maximum Nesting Depth of Parentheses', difficulty: 'Hard',
    description: 'Given a valid parentheses string, split it into two disjoint subsequences A and B such that the maximum nesting depth of both is minimized. Return a binary array where 0 means A and 1 means B.',
    constraints: ['1 <= seq.length <= 10^4'],
    examples: [
      { input: 'seq = "(()())"', output: '0 1 1 0 1 0', explanation: 'Split to minimize max depth of both subsequences.' },
      { input: 'seq = "()(())()"', output: '0 0 0 1 1 0 0 0', explanation: 'Optimal split to balance nesting depth.' }
    ],
    testCases: [
      { input: '(()())', expectedOutput: '0 1 1 0 1 0', hidden: false },
      { input: '()(())()', expectedOutput: '0 0 0 1 1 0 0 0', hidden: false }
    ],
    starterCode: {
      python: 'def max_depth_after_split(seq):\n    pass\n\nseq = input()\nresult = max_depth_after_split(seq)\nprint(" ".join(map(str, result)))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] maxDepthAfterSplit(String seq) {\n        return new int[seq.length()];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String seq = sc.next();\n        int[] result = maxDepthAfterSplit(seq);\n        StringBuilder sb = new StringBuilder();\n        for (int i = 0; i < result.length; i++) {\n            if (i > 0) sb.append(" ");\n            sb.append(result[i]);\n        }\n        System.out.println(sb.toString());\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid maxDepthAfterSplit(char* seq, int* result, int n) {\n    // fill this\n}\n\nint main() {\n    char seq[10001];\n    scanf("%s", seq);\n    int n = strlen(seq);\n    int result[n];\n    maxDepthAfterSplit(seq, result, n);\n    for (int i = 0; i < n; i++) {\n        if (i > 0) printf(" ");\n        printf("%d", result[i]);\n    }\n    printf("\\n");\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nvector<int> maxDepthAfterSplit(string seq) {\n    return {};\n}\n\nint main() {\n    string seq;\n    cin >> seq;\n    vector<int> result = maxDepthAfterSplit(seq);\n    for (int i = 0; i < (int)result.size(); i++) {\n        if (i > 0) cout << " ";\n        cout << result[i];\n    }\n    cout << "\\n";\n    return 0;\n}'
    }
  },
];
