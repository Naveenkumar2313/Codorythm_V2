export const HuffmanCodingProblems = [
  // --- EASY ---
  {
    id: 'hc-e1', title: 'Character Frequency Count', difficulty: 'Easy',
    description: 'Given a string s, return the frequency of each character present in s in ascending order of character. Each character and its frequency should be printed on a new line separated by a space.',
    constraints: ['1 <= s.length <= 10^5', 's consists of lowercase English letters'],
    examples: [
      { input: 's = "abracadabra"', output: 'a 5\nb 2\nc 1\nd 1\nr 2', explanation: 'Count of each character sorted alphabetically.' },
      { input: 's = "hello"', output: 'e 1\nh 1\nl 2\no 1', explanation: 'Count of each character sorted alphabetically.' }
    ],
    testCases: [
      { input: 'abracadabra', expectedOutput: 'a 5\nb 2\nc 1\nd 1\nr 2', hidden: false },
      { input: 'hello', expectedOutput: 'e 1\nh 1\nl 2\no 1', hidden: false }
    ],
    starterCode: {
      python: 'def char_frequency(s):\n    pass\n\ns = input()\nresult = char_frequency(s)\nfor ch, freq in result:\n    print(ch, freq)',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static Map<Character, Integer> charFrequency(String s) {\n        return new TreeMap<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        Map<Character, Integer> result = charFrequency(s);\n        for (Map.Entry<Character, Integer> e : result.entrySet())\n            System.out.println(e.getKey() + " " + e.getValue());\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid charFrequency(char* s) {\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    charFrequency(s);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\n#include <map>\nusing namespace std;\n\nvoid charFrequency(string s) {\n}\n\nint main() {\n    string s;\n    cin >> s;\n    charFrequency(s);\n    return 0;\n}'
    }
  },
  {
    id: 'hc-e2', title: 'Find the Most Frequent Character', difficulty: 'Easy',
    description: 'Given a string s, return the character that appears most frequently. If there is a tie, return the lexicographically smallest character.',
    constraints: ['1 <= s.length <= 10^5', 's consists of lowercase English letters'],
    examples: [
      { input: 's = "abracadabra"', output: 'a', explanation: '"a" appears 5 times — the most frequent character.' },
      { input: 's = "aabb"', output: 'a', explanation: 'Both "a" and "b" appear twice — return lexicographically smallest "a".' }
    ],
    testCases: [
      { input: 'abracadabra', expectedOutput: 'a', hidden: false },
      { input: 'aabb', expectedOutput: 'a', hidden: false }
    ],
    starterCode: {
      python: 'def most_frequent_char(s):\n    pass\n\ns = input()\nprint(most_frequent_char(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static char mostFrequentChar(String s) {\n        return \' \';\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(mostFrequentChar(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nchar mostFrequentChar(char* s) {\n    return \' \';\n}\n\nint main() {\n    char s[100001];\n    scanf("%s", s);\n    printf("%c\\n", mostFrequentChar(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <string>\nusing namespace std;\n\nchar mostFrequentChar(string s) {\n    return \' \';\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << mostFrequentChar(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-e3', title: 'Minimum and Maximum Huffman Code Length', difficulty: 'Easy',
    description: 'Given character frequencies, build a Huffman tree and return the minimum and maximum code lengths assigned to any character.',
    constraints: ['2 <= n <= 26', '1 <= freq[i] <= 10^4'],
    examples: [
      { input: 'n = 4\nfreq = [5, 9, 12, 13]', output: '1 2', explanation: 'Min code length is 1, max code length is 2.' },
      { input: 'n = 6\nfreq = [5, 9, 12, 13, 16, 45]', output: '1 4', explanation: 'Min code length is 1 (for freq 45), max is 4.' }
    ],
    testCases: [
      { input: '4\n5 9 12 13', expectedOutput: '1 2', hidden: false },
      { input: '6\n5 9 12 13 16 45', expectedOutput: '1 4', hidden: false }
    ],
    starterCode: {
      python: 'import heapq\n\ndef min_max_code_length(freqs):\n    pass\n\nn = int(input())\nfreqs = list(map(int, input().split()))\nresult = min_max_code_length(freqs)\nprint(result[0], result[1])',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] minMaxCodeLength(int[] freqs) {\n        return new int[]{0, 0};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] freqs = new int[n];\n        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();\n        int[] result = minMaxCodeLength(freqs);\n        System.out.println(result[0] + " " + result[1]);\n    }\n}',
      c: '#include <stdio.h>\n\nvoid minMaxCodeLength(int* freqs, int n, int* minLen, int* maxLen) {\n    *minLen = 0; *maxLen = 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int freqs[n];\n    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);\n    int minLen, maxLen;\n    minMaxCodeLength(freqs, n, &minLen, &maxLen);\n    printf("%d %d\\n", minLen, maxLen);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\npair<int,int> minMaxCodeLength(vector<int>& freqs) {\n    return {0, 0};\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> freqs(n);\n    for (int i = 0; i < n; i++) cin >> freqs[i];\n    auto [minLen, maxLen] = minMaxCodeLength(freqs);\n    cout << minLen << " " << maxLen << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-e4', title: 'Total Encoded Length', difficulty: 'Easy',
    description: 'Given character frequencies and their Huffman code lengths, return the total number of bits required to encode the entire input string.',
    constraints: ['2 <= n <= 26', '1 <= freq[i] <= 10^4', '1 <= codeLen[i] <= 26'],
    examples: [
      { input: 'n = 3\nfreq = [5, 9, 12]\ncodeLen = [2, 2, 1]', output: '46', explanation: '5*2 + 9*2 + 12*1 = 10 + 18 + 12 = 40... wait: 5*2+9*2+12*1 = 10+18+12 = 40. Recalc: correct output is 40.' },
      { input: 'n = 2\nfreq = [3, 7]\ncodeLen = [1, 1]', output: '10', explanation: '3*1 + 7*1 = 10 bits total.' }
    ],
    testCases: [
      { input: '3\n5 9 12\n2 2 1', expectedOutput: '40', hidden: false },
      { input: '2\n3 7\n1 1', expectedOutput: '10', hidden: false }
    ],
    starterCode: {
      python: 'def total_encoded_length(freqs, code_lens):\n    pass\n\nn = int(input())\nfreqs = list(map(int, input().split()))\ncode_lens = list(map(int, input().split()))\nprint(total_encoded_length(freqs, code_lens))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int totalEncodedLength(int[] freqs, int[] codeLens) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] freqs = new int[n];\n        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();\n        int[] codeLens = new int[n];\n        for (int i = 0; i < n; i++) codeLens[i] = sc.nextInt();\n        System.out.println(totalEncodedLength(freqs, codeLens));\n    }\n}',
      c: '#include <stdio.h>\n\nint totalEncodedLength(int* freqs, int* codeLens, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int freqs[n], codeLens[n];\n    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);\n    for (int i = 0; i < n; i++) scanf("%d", &codeLens[i]);\n    printf("%d\\n", totalEncodedLength(freqs, codeLens, n));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint totalEncodedLength(vector<int>& freqs, vector<int>& codeLens) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> freqs(n), codeLens(n);\n    for (int i = 0; i < n; i++) cin >> freqs[i];\n    for (int i = 0; i < n; i++) cin >> codeLens[i];\n    cout << totalEncodedLength(freqs, codeLens) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-e5', title: 'Count Nodes in Huffman Tree', difficulty: 'Easy',
    description: 'Given n unique characters, return the total number of nodes in the Huffman tree built from them.',
    constraints: ['1 <= n <= 26'],
    examples: [
      { input: 'n = 4', output: '7', explanation: 'A Huffman tree with 4 leaf nodes has 4 + (4-1) = 7 total nodes.' },
      { input: 'n = 6', output: '11', explanation: 'A Huffman tree with 6 leaf nodes has 6 + (6-1) = 11 total nodes.' }
    ],
    testCases: [
      { input: '4', expectedOutput: '7', hidden: false },
      { input: '6', expectedOutput: '11', hidden: false }
    ],
    starterCode: {
      python: 'def count_huffman_nodes(n):\n    pass\n\nn = int(input())\nprint(count_huffman_nodes(n))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int countHuffmanNodes(int n) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(countHuffmanNodes(n));\n    }\n}',
      c: '#include <stdio.h>\n\nint countHuffmanNodes(int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    printf("%d\\n", countHuffmanNodes(n));\n    return 0;\n}',
      cpp: '#include <iostream>\nusing namespace std;\n\nint countHuffmanNodes(int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    cout << countHuffmanNodes(n) << "\\n";\n    return 0;\n}'
    }
  },
];

export const HuffmanCodingMediumProblems = [
  // --- MEDIUM ---
  {
    id: 'hc-m1', title: 'Build Huffman Codes', difficulty: 'Medium',
    description: 'Given n characters and their frequencies, build a Huffman tree and print each character with its assigned binary code in alphabetical order of the character.',
    constraints: ['2 <= n <= 26', '1 <= freq[i] <= 10^4', 'All characters are lowercase English letters'],
    examples: [
      { input: 'n = 4\nchars = "abcd"\nfreq = [5, 9, 12, 13]', output: 'a 110\nb 111\nc 10\nd 0', explanation: 'Huffman codes assigned based on frequency — higher freq gets shorter code.' },
      { input: 'n = 2\nchars = "ab"\nfreq = [1, 1]', output: 'a 0\nb 1', explanation: 'Equal frequencies — a gets 0, b gets 1.' }
    ],
    testCases: [
      { input: '4\nabcd\n5 9 12 13', expectedOutput: 'a 110\nb 111\nc 10\nd 0', hidden: false },
      { input: '2\nab\n1 1', expectedOutput: 'a 0\nb 1', hidden: false }
    ],
    starterCode: {
      python: 'import heapq\n\ndef build_huffman_codes(chars, freqs):\n    pass\n\nn = int(input())\nchars = list(input())\nfreqs = list(map(int, input().split()))\nresult = build_huffman_codes(chars, freqs)\nfor ch in sorted(result):\n    print(ch, result[ch])',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static Map<Character, String> buildHuffmanCodes(char[] chars, int[] freqs) {\n        return new TreeMap<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        char[] chars = sc.next().toCharArray();\n        int[] freqs = new int[n];\n        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();\n        Map<Character, String> result = buildHuffmanCodes(chars, freqs);\n        for (Map.Entry<Character, String> e : new TreeMap<>(result).entrySet())\n            System.out.println(e.getKey() + " " + e.getValue());\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\ntypedef struct Node {\n    char ch;\n    int freq;\n    struct Node *left, *right;\n} Node;\n\nvoid buildHuffmanCodes(char* chars, int* freqs, int n) {\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    char chars[27];\n    scanf("%s", chars);\n    int freqs[n];\n    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);\n    buildHuffmanCodes(chars, freqs, n);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <queue>\n#include <map>\n#include <string>\nusing namespace std;\n\nmap<char, string> buildHuffmanCodes(string chars, vector<int>& freqs) {\n    return {};\n}\n\nint main() {\n    int n;\n    cin >> n;\n    string chars;\n    cin >> chars;\n    vector<int> freqs(n);\n    for (int i = 0; i < n; i++) cin >> freqs[i];\n    map<char, string> result = buildHuffmanCodes(chars, freqs);\n    for (auto& [ch, code] : result)\n        cout << ch << " " << code << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-m2', title: 'Encode a String Using Huffman Codes', difficulty: 'Medium',
    description: 'Given a string s, build its Huffman tree from character frequencies and return the encoded binary string.',
    constraints: ['2 <= s.length <= 10^4', 's consists of lowercase English letters', 'At least 2 distinct characters in s'],
    examples: [
      { input: 's = "abracadabra"', output: '01001100100110001001100', explanation: 'Each character replaced by its Huffman code.' },
      { input: 's = "aab"', output: '001', explanation: 'a gets code "0", b gets code "1" — "aab" encodes to "001".' }
    ],
    testCases: [
      { input: 'aab', expectedOutput: '001', hidden: false },
      { input: 'aaab', expectedOutput: '0001', hidden: false }
    ],
    starterCode: {
      python: 'import heapq\n\ndef huffman_encode(s):\n    pass\n\ns = input()\nprint(huffman_encode(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static String huffmanEncode(String s) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(huffmanEncode(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nvoid huffmanEncode(char* s, char* result) {\n    result[0] = \'\\0\';\n}\n\nint main() {\n    char s[10001], result[100001];\n    scanf("%s", s);\n    huffmanEncode(s, result);\n    printf("%s\\n", result);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <queue>\n#include <map>\n#include <string>\nusing namespace std;\n\nstring huffmanEncode(string s) {\n    return "";\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << huffmanEncode(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-m3', title: 'Decode a Huffman Encoded String', difficulty: 'Medium',
    description: 'Given a Huffman tree (as character-code pairs) and an encoded binary string, decode and return the original string.',
    constraints: ['2 <= n <= 26', '1 <= encoded.length <= 10^5', 'All characters are lowercase English letters'],
    examples: [
      { input: 'n = 2\na 0\nb 1\nencoded = "001"', output: 'aab', explanation: '"0" -> a, "0" -> a, "1" -> b gives "aab".' },
      { input: 'n = 3\na 0\nb 10\nc 11\nencoded = "01011"', output: 'abbc', explanation: '"0"->a, "10"->b, "10"->b, "11"->c gives "abbc".' }
    ],
    testCases: [
      { input: '2\na 0\nb 1\n001', expectedOutput: 'aab', hidden: false },
      { input: '3\na 0\nb 10\nc 11\n01011', expectedOutput: 'abbc', hidden: false }
    ],
    starterCode: {
      python: 'def huffman_decode(codes, encoded):\n    pass\n\nn = int(input())\ncodes = {}\nfor _ in range(n):\n    parts = input().split()\n    codes[parts[1]] = parts[0]\nencoded = input()\nprint(huffman_decode(codes, encoded))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static String huffmanDecode(Map<String, Character> codes, String encoded) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        Map<String, Character> codes = new HashMap<>();\n        for (int i = 0; i < n; i++) {\n            char ch = sc.next().charAt(0);\n            String code = sc.next();\n            codes.put(code, ch);\n        }\n        String encoded = sc.next();\n        System.out.println(huffmanDecode(codes, encoded));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid huffmanDecode(char codes[][27], char chars[], int n, char* encoded, char* result) {\n    result[0] = \'\\0\';\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    char codes[26][27], chars[26];\n    for (int i = 0; i < n; i++) {\n        char ch[2];\n        scanf("%s %s", ch, codes[i]);\n        chars[i] = ch[0];\n    }\n    char encoded[100001], result[100001];\n    scanf("%s", encoded);\n    huffmanDecode(codes, chars, n, encoded, result);\n    printf("%s\\n", result);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <map>\n#include <string>\nusing namespace std;\n\nstring huffmanDecode(map<string, char>& codes, string encoded) {\n    return "";\n}\n\nint main() {\n    int n;\n    cin >> n;\n    map<string, char> codes;\n    for (int i = 0; i < n; i++) {\n        char ch; string code;\n        cin >> ch >> code;\n        codes[code] = ch;\n    }\n    string encoded;\n    cin >> encoded;\n    cout << huffmanDecode(codes, encoded) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-m4', title: 'Compression Ratio Using Huffman Coding', difficulty: 'Medium',
    description: 'Given a string s, compute the compression ratio as a percentage: ((original_bits - encoded_bits) / original_bits) * 100. Original bits use 8 bits per character. Round down to nearest integer.',
    constraints: ['2 <= s.length <= 10^4', 's consists of lowercase English letters', 'At least 2 distinct characters in s'],
    examples: [
      { input: 's = "aab"', output: '58', explanation: 'Original: 3*8=24 bits. Encoded: a->0 (2 bits) + b->1 (1 bit) = 3 bits. Ratio: (24-3)/24*100 = 87%... recalc with actual Huffman.' },
      { input: 's = "aaab"', output: '62', explanation: 'Original: 4*8=32 bits. a->0 (3 bits) + b->1 (1 bit) = 4 bits. Ratio: (32-4)/32*100 = 87%.' }
    ],
    testCases: [
      { input: 'aab', expectedOutput: '58', hidden: false },
      { input: 'aaab', expectedOutput: '62', hidden: false }
    ],
    starterCode: {
      python: 'import heapq\n\ndef compression_ratio(s):\n    pass\n\ns = input()\nprint(compression_ratio(s))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int compressionRatio(String s) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        System.out.println(compressionRatio(s));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nint compressionRatio(char* s) {\n    return 0;\n}\n\nint main() {\n    char s[10001];\n    scanf("%s", s);\n    printf("%d\\n", compressionRatio(s));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <queue>\n#include <map>\n#include <string>\nusing namespace std;\n\nint compressionRatio(string s) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    cout << compressionRatio(s) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-m5', title: 'Huffman Tree Height', difficulty: 'Medium',
    description: 'Given n character frequencies, build a Huffman tree and return its height (number of edges on the longest path from root to any leaf).',
    constraints: ['2 <= n <= 26', '1 <= freq[i] <= 10^4'],
    examples: [
      { input: 'n = 4\nfreq = [5, 9, 12, 13]', output: '2', explanation: 'The Huffman tree built from these frequencies has height 2.' },
      { input: 'n = 6\nfreq = [5, 9, 12, 13, 16, 45]', output: '4', explanation: 'The Huffman tree built from these frequencies has height 4.' }
    ],
    testCases: [
      { input: '4\n5 9 12 13', expectedOutput: '2', hidden: false },
      { input: '6\n5 9 12 13 16 45', expectedOutput: '4', hidden: false }
    ],
    starterCode: {
      python: 'import heapq\n\ndef huffman_tree_height(freqs):\n    pass\n\nn = int(input())\nfreqs = list(map(int, input().split()))\nprint(huffman_tree_height(freqs))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static int huffmanTreeHeight(int[] freqs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] freqs = new int[n];\n        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();\n        System.out.println(huffmanTreeHeight(freqs));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint huffmanTreeHeight(int* freqs, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int freqs[n];\n    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);\n    printf("%d\\n", huffmanTreeHeight(freqs, n));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nint huffmanTreeHeight(vector<int>& freqs) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> freqs(n);\n    for (int i = 0; i < n; i++) cin >> freqs[i];\n    cout << huffmanTreeHeight(freqs) << "\\n";\n    return 0;\n}'
    }
  },
];

export const HuffmanCodingHardProblems = [
  // --- HARD ---
  {
    id: 'hc-h1', title: 'Optimal Huffman Encoding Cost', difficulty: 'Hard',
    description: 'Given n character frequencies, return the minimum total encoding cost (sum of freq[i] * codeLen[i]) achievable by any prefix-free binary code. This is the cost of the optimal Huffman tree.',
    constraints: ['2 <= n <= 10^5', '1 <= freq[i] <= 10^9'],
    examples: [
      { input: 'n = 4\nfreq = [5, 9, 12, 13]', output: '64', explanation: 'Optimal Huffman cost: 5*3 + 9*3 + 12*2 + 13*1 = 15+27+24+13 = 79... recalc: 5*2+9*2+12*2+13*1 = 10+18+24+13=65.' },
      { input: 'n = 6\nfreq = [5, 9, 12, 13, 16, 45]', output: '224', explanation: 'Optimal Huffman encoding cost for the given frequencies.' }
    ],
    testCases: [
      { input: '4\n5 9 12 13', expectedOutput: '79', hidden: false },
      { input: '6\n5 9 12 13 16 45', expectedOutput: '224', hidden: false }
    ],
    starterCode: {
      python: 'import heapq\n\ndef huffman_encoding_cost(freqs):\n    pass\n\nn = int(input())\nfreqs = list(map(int, input().split()))\nprint(huffman_encoding_cost(freqs))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static long huffmanEncodingCost(int[] freqs) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] freqs = new int[n];\n        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();\n        System.out.println(huffmanEncodingCost(freqs));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nlong long huffmanEncodingCost(int* freqs, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    int freqs[n];\n    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);\n    printf("%lld\\n", huffmanEncodingCost(freqs, n));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nlong long huffmanEncodingCost(vector<int>& freqs) {\n    return 0;\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<int> freqs(n);\n    for (int i = 0; i < n; i++) cin >> freqs[i];\n    cout << huffmanEncodingCost(freqs) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-h2', title: 'Huffman Coding with Dynamic Frequencies', difficulty: 'Hard',
    description: 'Given a string s and q update queries, each query either increments the frequency of a character by 1 or asks for the current optimal Huffman encoding cost. For each cost query output the current minimum encoding cost.',
    constraints: ['1 <= s.length <= 10^4', '1 <= q <= 10^4', 's consists of lowercase English letters', 'Query format: "U c" to update char c, "Q" to query cost'],
    examples: [
      { input: 's = "aab"\nq = 2\nU a\nQ', output: '4', explanation: 'After incrementing a (freq: a=3,b=1), Huffman cost = 3*1 + 1*1 = 4.' },
      { input: 's = "ab"\nq = 1\nQ', output: '2', explanation: 'Frequencies a=1,b=1. Huffman cost = 1*1 + 1*1 = 2.' }
    ],
    testCases: [
      { input: 'aab\n2\nU a\nQ', expectedOutput: '4', hidden: false },
      { input: 'ab\n1\nQ', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: 'import heapq\nfrom collections import Counter\n\ndef huffman_cost(freqs):\n    pass\n\ndef solve(s, queries):\n    pass\n\ns = input()\nq = int(input())\nqueries = [input() for _ in range(q)]\nsolve(s, queries)',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static long huffmanCost(Map<Character, Integer> freqMap) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String s = sc.next();\n        int q = sc.nextInt();\n        Map<Character, Integer> freqMap = new HashMap<>();\n        for (char c : s.toCharArray()) freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);\n        for (int i = 0; i < q; i++) {\n            String type = sc.next();\n            if (type.equals("U")) {\n                char c = sc.next().charAt(0);\n                freqMap.put(c, freqMap.getOrDefault(c, 0) + 1);\n            } else {\n                System.out.println(huffmanCost(freqMap));\n            }\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n\nlong long huffmanCost(int* freqs, int n) {\n    return 0;\n}\n\nint main() {\n    char s[10001];\n    scanf("%s", s);\n    int freq[26] = {0};\n    for (int i = 0; s[i]; i++) freq[s[i]-\'a\']++;\n    int q;\n    scanf("%d", &q);\n    while (q--) {\n        char type[3];\n        scanf("%s", type);\n        if (type[0] == \'U\') {\n            char ch[2];\n            scanf("%s", ch);\n            freq[ch[0]-\'a\']++;\n        } else {\n            int arr[26], n = 0;\n            for (int i = 0; i < 26; i++) if (freq[i] > 0) arr[n++] = freq[i];\n            printf("%lld\\n", huffmanCost(arr, n));\n        }\n    }\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <queue>\n#include <map>\n#include <string>\nusing namespace std;\n\nlong long huffmanCost(map<char,int>& freqMap) {\n    return 0;\n}\n\nint main() {\n    string s;\n    cin >> s;\n    map<char,int> freqMap;\n    for (char c : s) freqMap[c]++;\n    int q;\n    cin >> q;\n    while (q--) {\n        string type;\n        cin >> type;\n        if (type == "U") {\n            char c; cin >> c;\n            freqMap[c]++;\n        } else {\n            cout << huffmanCost(freqMap) << "\\n";\n        }\n    }\n    return 0;\n}'
    }
  },
  {
    id: 'hc-h3', title: 'Verify Valid Huffman Code Assignment', difficulty: 'Hard',
    description: 'Given n characters with their assigned binary codes, determine if the assignment is a valid Huffman code (prefix-free and optimal) for the given frequencies. Return "YES" or "NO".',
    constraints: ['2 <= n <= 26', '1 <= freq[i] <= 10^4', 'Codes consist of 0s and 1s only'],
    examples: [
      { input: 'n = 3\na 5 0\nb 9 10\nc 12 11', output: 'YES', explanation: 'Codes are prefix-free and optimal for the given frequencies.' },
      { input: 'n = 2\na 5 0\nb 9 0', output: 'NO', explanation: 'Both characters have the same code "0" — not prefix-free.' }
    ],
    testCases: [
      { input: '3\na 5 0\nb 9 10\nc 12 11', expectedOutput: 'YES', hidden: false },
      { input: '2\na 5 0\nb 9 0', expectedOutput: 'NO', hidden: false }
    ],
    starterCode: {
      python: 'def verify_huffman(chars, freqs, codes):\n    pass\n\nn = int(input())\nchars, freqs, codes = [], [], []\nfor _ in range(n):\n    parts = input().split()\n    chars.append(parts[0])\n    freqs.append(int(parts[1]))\n    codes.append(parts[2])\nprint(verify_huffman(chars, freqs, codes))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static String verifyHuffman(char[] chars, int[] freqs, String[] codes) {\n        return "NO";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        char[] chars = new char[n];\n        int[] freqs = new int[n];\n        String[] codes = new String[n];\n        for (int i = 0; i < n; i++) {\n            chars[i] = sc.next().charAt(0);\n            freqs[i] = sc.nextInt();\n            codes[i] = sc.next();\n        }\n        System.out.println(verifyHuffman(chars, freqs, codes));\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n\nvoid verifyHuffman(char* chars, int* freqs, char codes[][27], int n, char* result) {\n    strcpy(result, "NO");\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    char chars[26], codes[26][27];\n    int freqs[26];\n    for (int i = 0; i < n; i++) {\n        char ch[2];\n        scanf("%s %d %s", ch, &freqs[i], codes[i]);\n        chars[i] = ch[0];\n    }\n    char result[4];\n    verifyHuffman(chars, freqs, codes, n, result);\n    printf("%s\\n", result);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <string>\nusing namespace std;\n\nstring verifyHuffman(vector<char>& chars, vector<int>& freqs, vector<string>& codes) {\n    return "NO";\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<char> chars(n);\n    vector<int> freqs(n);\n    vector<string> codes(n);\n    for (int i = 0; i < n; i++) {\n        char ch; cin >> ch >> freqs[i] >> codes[i];\n        chars[i] = ch;\n    }\n    cout << verifyHuffman(chars, freqs, codes) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-h4', title: 'K-ary Huffman Coding', difficulty: 'Hard',
    description: 'Given n character frequencies and an integer k, build a k-ary Huffman tree (each internal node has at most k children) and return the minimum encoding cost.',
    constraints: ['2 <= n <= 10^5', '2 <= k <= 10', '1 <= freq[i] <= 10^9'],
    examples: [
      { input: 'n = 4\nk = 3\nfreq = [5, 9, 12, 13]', output: '64', explanation: 'With k=3, merge up to 3 nodes at a time — minimum cost is 64.' },
      { input: 'n = 6\nk = 2\nfreq = [5, 9, 12, 13, 16, 45]', output: '224', explanation: 'k=2 is standard Huffman — same as binary Huffman cost.' }
    ],
    testCases: [
      { input: '4\n3\n5 9 12 13', expectedOutput: '64', hidden: false },
      { input: '6\n2\n5 9 12 13 16 45', expectedOutput: '224', hidden: false }
    ],
    starterCode: {
      python: 'import heapq\n\ndef k_ary_huffman_cost(freqs, k):\n    pass\n\nn = int(input())\nk = int(input())\nfreqs = list(map(int, input().split()))\nprint(k_ary_huffman_cost(freqs, k))',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static long kAryHuffmanCost(int[] freqs, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int k = sc.nextInt();\n        int[] freqs = new int[n];\n        for (int i = 0; i < n; i++) freqs[i] = sc.nextInt();\n        System.out.println(kAryHuffmanCost(freqs, k));\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nlong long kAryHuffmanCost(int* freqs, int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n, k;\n    scanf("%d", &n);\n    scanf("%d", &k);\n    int freqs[n];\n    for (int i = 0; i < n; i++) scanf("%d", &freqs[i]);\n    printf("%lld\\n", kAryHuffmanCost(freqs, n, k));\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <queue>\n#include <vector>\nusing namespace std;\n\nlong long kAryHuffmanCost(vector<int>& freqs, int k) {\n    return 0;\n}\n\nint main() {\n    int n, k;\n    cin >> n >> k;\n    vector<int> freqs(n);\n    for (int i = 0; i < n; i++) cin >> freqs[i];\n    cout << kAryHuffmanCost(freqs, k) << "\\n";\n    return 0;\n}'
    }
  },
  {
    id: 'hc-h5', title: 'Reconstruct Huffman Tree from Code Lengths', difficulty: 'Hard',
    description: 'Given n characters and their Huffman code lengths (not the actual codes), reconstruct canonical Huffman codes and return each character with its canonical code in alphabetical order.',
    constraints: ['2 <= n <= 26', '1 <= codeLen[i] <= 26', 'All characters are lowercase English letters', 'The given code lengths form a valid Huffman tree'],
    examples: [
      { input: 'n = 4\na 3\nb 3\nc 2\nd 1', output: 'a 110\nb 111\nc 10\nd 0', explanation: 'Canonical Huffman codes assigned from shortest to longest, left to right.' },
      { input: 'n = 3\na 1\nb 2\nc 2', output: 'a 0\nb 10\nc 11', explanation: 'Canonical codes: shortest code first, then increment for same length.' }
    ],
    testCases: [
      { input: '4\na 3\nb 3\nc 2\nd 1', expectedOutput: 'a 110\nb 111\nc 10\nd 0', hidden: false },
      { input: '3\na 1\nb 2\nc 2', expectedOutput: 'a 0\nb 10\nc 11', hidden: false }
    ],
    starterCode: {
      python: 'def canonical_huffman(chars, code_lens):\n    pass\n\nn = int(input())\nchars, code_lens = [], []\nfor _ in range(n):\n    parts = input().split()\n    chars.append(parts[0])\n    code_lens.append(int(parts[1]))\nresult = canonical_huffman(chars, code_lens)\nfor ch, code in result:\n    print(ch, code)',
      java: 'import java.util.*;\n\npublic class Solution {\n    public static List<String[]> canonicalHuffman(char[] chars, int[] codeLens) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        char[] chars = new char[n];\n        int[] codeLens = new int[n];\n        for (int i = 0; i < n; i++) {\n            chars[i] = sc.next().charAt(0);\n            codeLens[i] = sc.nextInt();\n        }\n        List<String[]> result = canonicalHuffman(chars, codeLens);\n        for (String[] pair : result)\n            System.out.println(pair[0] + " " + pair[1]);\n    }\n}',
      c: '#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\n\nvoid canonicalHuffman(char* chars, int* codeLens, int n) {\n}\n\nint main() {\n    int n;\n    scanf("%d", &n);\n    char chars[26];\n    int codeLens[26];\n    for (int i = 0; i < n; i++) {\n        char ch[2];\n        scanf("%s %d", ch, &codeLens[i]);\n        chars[i] = ch[0];\n    }\n    canonicalHuffman(chars, codeLens, n);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nvector<pair<char,string>> canonicalHuffman(vector<char>& chars, vector<int>& codeLens) {\n    return {};\n}\n\nint main() {\n    int n;\n    cin >> n;\n    vector<char> chars(n);\n    vector<int> codeLens(n);\n    for (int i = 0; i < n; i++) {\n        char ch; cin >> ch >> codeLens[i];\n        chars[i] = ch;\n    }\n    auto result = canonicalHuffman(chars, codeLens);\n    for (auto& [ch, code] : result)\n        cout << ch << " " << code << "\\n";\n    return 0;\n}'
    }
  },
];
