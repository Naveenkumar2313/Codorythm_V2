export const countSetBitsProblem = [
  // EASY
  {
    id: 'csb-e1',
    title: 'Count Set Bits',
    difficulty: 'Easy',

    description: 'Given a non-negative integer n, return the number of set bits (1s) present in its binary representation. Solve the problem efficiently using Brian Kernighan\'s Algorithm.',

    constraints: [
        '0 <= n <= 10^9'
    ],

    examples: [
        {
            input: 'n = 13',
            output: '3',
            explanation: '13 in binary is 1101, which contains three set bits.'
        },
        {
            input: 'n = 8',
            output: '1',
            explanation: '8 in binary is 1000, which contains one set bit.'
        }
    ],

    testCases: [
        {
            input: '13',
            expectedOutput: '3',
            hidden: false
        },
        {
            input: '8',
            expectedOutput: '1',
            hidden: false
        },
        {
            input: '0',
            expectedOutput: '0',
            hidden: true
        }
    ],

    starterCode: {

        python: `def count_set_bits(n):
    # Write your code here
    pass

n = int(input())
print(count_set_bits(n))
`,

        java: `import java.util.*;

public class Solution {

    public static int countSetBits(int n) {

        // Write your code here

        return 0;
    }

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {

            int n = sc.nextInt();

            System.out.println(countSetBits(n));
        }
    }
}
`,

        c: `#include <stdio.h>

int countSetBits(int n) {

    // Write your code here

    return 0;
}

int main() {

    int n;

    if (scanf("%d", &n) == 1) {

        printf("%d\\n", countSetBits(n));
    }

    return 0;
}
`,

        cpp: `#include <iostream>

using namespace std;

int countSetBits(int n) {

    // Write your code here

    return 0;
}

int main() {

    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;

    if (cin >> n) {

        cout << countSetBits(n) << "\\n";
    }

    return 0;
}
`
    }
},

  {
  id: 'csb-e2',
  title: 'Power of Two',
  difficulty: 'Easy',

  description: 'Given a positive integer n, determine whether it is a power of two. Return true if it is a power of two; otherwise, return false.\n\nA number is a power of two if it has exactly one set bit in its binary representation.',

  constraints: [
    '1 <= n <= 10^9'
  ],

  examples: [
    {
      input: 'n = 16',
      output: 'true',
      explanation: '16 in binary is 10000, which contains exactly one set bit.'
    },
    {
      input: 'n = 10',
      output: 'false',
      explanation: '10 in binary is 1010, which contains two set bits.'
    }
  ],

  testCases: [
    {
      input: '16',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '10',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '1',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '1024',
      expectedOutput: 'true',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def is_power_of_two(n):\n    pass\n\nn = int(input())\nprint(is_power_of_two(n))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean isPowerOfTwo(int n) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            System.out.println(isPowerOfTwo(n));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool isPowerOfTwo(int n) {\n    return false;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    printf("%s\\n", isPowerOfTwo(n) ? "true" : "false");\n    return 0;\n}',

    cpp: '#include <iostream>\n\nusing namespace std;\n\nbool isPowerOfTwo(int n) {\n    return false;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        cout << (isPowerOfTwo(n) ? "true" : "false") << "\\n";\n    }\n    return 0;\n}'
  }
},

{
  id: 'csb-e3',
  title: 'Count Set Bits in an Array',
  difficulty: 'Easy',

  description: 'Given an array of non-negative integers, return the total number of set bits (1s) present in the binary representation of all the elements in the array.',

  constraints: [
    '1 <= n <= 10^5',
    '0 <= arr[i] <= 10^9'
  ],

  examples: [
    {
      input: 'n = 4\narr = [1, 2, 3, 4]',
      output: '5',
      explanation: '1 → 1 set bit, 2 → 1 set bit, 3 → 2 set bits, 4 → 1 set bit. Total = 5.'
    },
    {
      input: 'n = 3\narr = [7, 8, 15]',
      output: '8',
      explanation: '7 → 3 set bits, 8 → 1 set bit, 15 → 4 set bits. Total = 8.'
    }
  ],

  testCases: [
    {
      input: '4\n1 2 3 4',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '3\n7 8 15',
      expectedOutput: '8',
      hidden: false
    },
    {
      input: '5\n0 0 0 0 0',
      expectedOutput: '0',
      hidden: true
    },
    {
      input: '1\n1023',
      expectedOutput: '10',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def total_set_bits(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(total_set_bits(arr))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int totalSetBits(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(totalSetBits(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint totalSetBits(int* arr, int size) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", totalSetBits(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint totalSetBits(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << totalSetBits(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},

{
  id: 'csb-e4',
  title: 'Count Numbers with Odd Set Bits',
  difficulty: 'Easy',

  description: 'Given an array of non-negative integers, count how many numbers have an odd number of set bits (1s) in their binary representation.',

  constraints: [
    '1 <= n <= 10^5',
    '0 <= arr[i] <= 10^9'
  ],

  examples: [
    {
      input: 'n = 5\narr = [1, 2, 3, 4, 5]',
      output: '3',
      explanation: 'Set bits are: 1→1, 2→1, 3→2, 4→1, 5→2. Numbers with an odd number of set bits are 1, 2 and 4. Therefore, the answer is 3.'
    },
    {
      input: 'n = 4\narr = [7, 8, 15, 16]',
      output: '3',
      explanation: '7→3, 8→1, 15→4, 16→1. Numbers with an odd number of set bits are 7, 8 and 16. Therefore, the answer is 3.'
    }
  ],

  testCases: [
    {
      input: '5\n1 2 3 4 5',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '4\n7 8 15 16',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '3\n0 0 0',
      expectedOutput: '0',
      hidden: true
    },
    {
      input: '1\n31',
      expectedOutput: '1',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def count_odd_set_bits(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(count_odd_set_bits(arr))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countOddSetBits(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(countOddSetBits(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countOddSetBits(int* arr, int size) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", countOddSetBits(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint countOddSetBits(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << countOddSetBits(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},

{
  id: 'csb-e5',
  title: 'Element with Maximum Set Bits',
  difficulty: 'Easy',

  description: 'Given an array of non-negative integers, find the element that contains the maximum number of set bits (1s) in its binary representation. If multiple elements have the same maximum number of set bits, return the smallest such element.',

  constraints: [
    '1 <= n <= 10^5',
    '0 <= arr[i] <= 10^9'
  ],

  examples: [
    {
      input: 'n = 5\narr = [3, 7, 8, 10, 5]',
      output: '7',
      explanation: 'Set bit counts are: 3→2, 7→3, 8→1, 10→2, 5→2. The maximum is 3, so the answer is 7.'
    },
    {
      input: 'n = 4\narr = [6, 9, 10, 12]',
      output: '6',
      explanation: 'Each number has exactly two set bits. Return the smallest element, which is 6.'
    }
  ],

  testCases: [
    {
      input: '5\n3 7 8 10 5',
      expectedOutput: '7',
      hidden: false
    },
    {
      input: '4\n6 9 10 12',
      expectedOutput: '6',
      hidden: false
    },
    {
      input: '1\n31',
      expectedOutput: '31',
      hidden: true
    },
    {
      input: '3\n0 0 0',
      expectedOutput: '0',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def max_set_bit_element(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(max_set_bit_element(arr))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int maxSetBitElement(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(maxSetBitElement(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxSetBitElement(int* arr, int size) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", maxSetBitElement(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint maxSetBitElement(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << maxSetBitElement(arr) << "\\n";\n    }\n\n    return 0;\n}'
  }
},

// MEDIUM
{
  id: 'csb-m1',
  title: 'Hamming Distance',
  difficulty: 'Medium',

  description: 'Given two non-negative integers x and y, return the Hamming Distance between them. The Hamming Distance is the number of positions at which the corresponding bits are different.',

  constraints: [
    '0 <= x, y <= 10^9'
  ],

  examples: [
    {
      input: 'x = 1, y = 4',
      output: '2',
      explanation: '1 = 0001, 4 = 0100. They differ at two bit positions.'
    },
    {
      input: 'x = 3, y = 1',
      output: '1',
      explanation: '3 = 0011, 1 = 0001. They differ at one bit position.'
    }
  ],

  testCases: [
    {
      input: '1\n4',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '3\n1',
      expectedOutput: '1',
      hidden: false
    },
    {
      input: '0\n0',
      expectedOutput: '0',
      hidden: true
    },
    {
      input: '255\n0',
      expectedOutput: '8',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def hamming_distance(x, y):\n    pass\n\nx = int(input())\ny = int(input())\nprint(hamming_distance(x, y))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int hammingDistance(int x, int y) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int x = sc.nextInt();\n            int y = sc.nextInt();\n            System.out.println(hammingDistance(x, y));\n        }\n    }\n}',

    c: '#include <stdio.h>\n\nint hammingDistance(int x, int y) {\n    return 0;\n}\n\nint main() {\n    int x, y;\n    if (scanf("%d %d", &x, &y) != 2) return 0;\n    printf("%d\\n", hammingDistance(x, y));\n    return 0;\n}',

    cpp: '#include <iostream>\n\nusing namespace std;\n\nint hammingDistance(int x, int y) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int x, y;\n    if (cin >> x >> y) {\n        cout << hammingDistance(x, y) << "\\n";\n    }\n    return 0;\n}'
  }
},

{
  id: 'csb-m2',
  title: 'Count Numbers with Exactly K Set Bits',
  difficulty: 'Medium',

  description: 'Given an array of non-negative integers and an integer k, count how many numbers in the array have exactly k set bits (1s) in their binary representation.',

  constraints: [
    '1 <= n <= 10^5',
    '0 <= arr[i] <= 10^9',
    '0 <= k <= 31'
  ],

  examples: [
    {
      input: 'n = 5\narr = [3, 5, 7, 8, 9]\nk = 2',
      output: '3',
      explanation: '3 (0011), 5 (0101), and 9 (1001) each have exactly two set bits.'
    },
    {
      input: 'n = 4\narr = [1, 2, 4, 8]\nk = 1',
      output: '4',
      explanation: 'Every number has exactly one set bit.'
    }
  ],

  testCases: [
    {
      input: '5\n3 5 7 8 9\n2',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '4\n1 2 4 8\n1',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '3\n0 0 0\n0',
      expectedOutput: '3',
      hidden: true
    },
    {
      input: '5\n15 31 63 127 255\n8',
      expectedOutput: '1',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def count_numbers_with_k_set_bits(arr, k):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nk = int(input())\nprint(count_numbers_with_k_set_bits(arr, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countNumbersWithKSetBits(int[] arr, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            System.out.println(countNumbersWithKSetBits(arr, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countNumbersWithKSetBits(int* arr, int size, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    int k;\n    if (scanf("%d", &k) != 1) return 0;\n    printf("%d\\n", countNumbersWithKSetBits(arr, n, k));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint countNumbersWithKSetBits(vector<int>& arr, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        int k;\n        cin >> k;\n        cout << countNumbersWithKSetBits(arr, k) << "\\n";} \n    return 0;\n}'
  }
},

{
  id: 'csb-m3',
  title: 'Minimum Bit Flips to Convert A to B',
  difficulty: 'Medium',

  description: 'Given two non-negative integers A and B, determine the minimum number of bit flips required to convert A into B. A single bit flip changes a 0 to 1 or a 1 to 0.',

  constraints: [
    '0 <= A, B <= 10^9'
  ],

  examples: [
    {
      input: 'A = 10\nB = 7',
      output: '3',
      explanation: '10 = 1010 and 7 = 0111. They differ at three bit positions.'
    },
    {
      input: 'A = 15\nB = 15',
      output: '0',
      explanation: 'Both numbers are identical, so no bit flips are required.'
    }
  ],

  testCases: [
    {
      input: '10\n7',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '15\n15',
      expectedOutput: '0',
      hidden: false
    },
    {
      input: '0\n31',
      expectedOutput: '5',
      hidden: true
    },
    {
      input: '255\n0',
      expectedOutput: '8',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def min_bit_flips(a, b):\n    pass\n\na = int(input())\nb = int(input())\nprint(min_bit_flips(a, b))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int minBitFlips(int a, int b) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int a = sc.nextInt();\n            int b = sc.nextInt();\n            System.out.println(minBitFlips(a, b));\n        }\n    }\n}',

    c: '#include <stdio.h>\n\nint minBitFlips(int a, int b) {\n    return 0;\n}\n\nint main() {\n    int a, b;\n    if (scanf("%d %d", &a, &b) != 2) return 0;\n    printf("%d\\n", minBitFlips(a, b));\n    return 0;\n}',

    cpp: '#include <iostream>\n\nusing namespace std;\n\nint minBitFlips(int a, int b) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int a, b;\n    if (cin >> a >> b) {\n        cout << minBitFlips(a, b) << "\\n";\n    }\n    return 0;\n}'
  }
},

{
  id: 'csb-m4',
  title: 'Counting Bits',
  difficulty: 'Medium',

  description: 'Given an integer n, return an array answer of size n + 1 where answer[i] is the number of set bits (1s) in the binary representation of i for every 0 <= i <= n.',

  constraints: [
    '0 <= n <= 10^5'
  ],

  examples: [
    {
      input: 'n = 5',
      output: '[0, 1, 1, 2, 1, 2]',
      explanation: 'The number of set bits for numbers from 0 to 5 are [0, 1, 1, 2, 1, 2].'
    },
    {
      input: 'n = 2',
      output: '[0, 1, 1]',
      explanation: '0 has 0 set bits, while 1 and 2 each have 1 set bit.'
    }
  ],

  testCases: [
    {
      input: '5',
      expectedOutput: '[0,1,1,2,1,2]',
      hidden: false
    },
    {
      input: '2',
      expectedOutput: '[0,1,1]',
      hidden: false
    },
    {
      input: '0',
      expectedOutput: '[0]',
      hidden: true
    },
    {
      input: '8',
      expectedOutput: '[0,1,1,2,1,2,2,3,1]',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def counting_bits(n):\n    pass\n\nn = int(input())\nprint(counting_bits(n))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int[] countingBits(int n) {\n        return new int[0];\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            System.out.println(Arrays.toString(countingBits(n)));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint* countingBits(int n) {\n    return NULL;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* result = countingBits(n);\n    if (result != NULL) {\n        for (int i = 0; i <= n; i++) {\n            printf("%d", result[i]);\n            if (i != n) printf(" ");\n        }\n        printf("\\n");\n        free(result);\n    }\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> countingBits(int n) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> result = countingBits(n);\n        for (int i = 0; i < result.size(); i++) {\n            cout << result[i];\n            if (i != result.size() - 1) cout << " ";\n        }\n        cout << "\\n";\n    }\n    return 0;\n}'
  }
},

{
  id: 'csb-m5',
  title: 'Longest Sequence with Equal Set Bits',
  difficulty: 'Medium',

  description: 'Given an array of non-negative integers, find the length of the longest contiguous subarray in which every element has the same number of set bits (1s) in its binary representation.',

  constraints: [
    '1 <= n <= 10^5',
    '0 <= arr[i] <= 10^9'
  ],

  examples: [
    {
      input: 'n = 6\narr = [3, 5, 6, 8, 9, 10]',
      output: '3',
      explanation: 'The first three elements (3, 5, 6) each have two set bits, forming the longest contiguous subarray.'
    },
    {
      input: 'n = 5\narr = [1, 2, 4, 7, 15]',
      output: '3',
      explanation: '1, 2 and 4 each have one set bit, giving the longest contiguous subarray of length 3.'
    }
  ],

  testCases: [
    {
      input: '6\n3 5 6 8 9 10',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '5\n1 2 4 7 15',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '1\n31',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '4\n0 0 0 0',
      expectedOutput: '4',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def longest_equal_set_bits(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(longest_equal_set_bits(arr))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int longestEqualSetBits(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(longestEqualSetBits(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestEqualSetBits(int* arr, int size) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", longestEqualSetBits(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint longestEqualSetBits(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << longestEqualSetBits(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},

// HARD

{
  id: 'csb-h1',
  title: 'Total Set Bits from 1 to N',
  difficulty: 'Hard',

  description: 'Given a positive integer n, find the total number of set bits (1s) in the binary representation of all numbers from 1 to n (inclusive).',

  constraints: [
    '1 <= n <= 10^9'
  ],

  examples: [
    {
      input: 'n = 4',
      output: '5',
      explanation: '1 (1) → 1, 2 (10) → 1, 3 (11) → 2, 4 (100) → 1. Total = 5.'
    },
    {
      input: 'n = 7',
      output: '12',
      explanation: 'The total number of set bits from 1 to 7 is 12.'
    }
  ],

  testCases: [
    {
      input: '4',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '7',
      expectedOutput: '12',
      hidden: false
    },
    {
      input: '1',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '100',
      expectedOutput: '319',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def total_set_bits(n):\n    pass\n\nn = int(input())\nprint(total_set_bits(n))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int totalSetBits(int n) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            System.out.println(totalSetBits(n));\n        }\n    }\n}',

    c: '#include <stdio.h>\n\nint totalSetBits(int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    printf("%d\\n", totalSetBits(n));\n    return 0;\n}',

    cpp: '#include <iostream>\n\nusing namespace std;\n\nint totalSetBits(int n) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        cout << totalSetBits(n) << "\\n";\n    }\n    return 0;\n}'
  }
},

{
  id: 'csb-h2',
  title: 'Maximum Set Bits in a Range',
  difficulty: 'Hard',

  description: 'Given two integers L and R, find the maximum number of set bits (1s) present in the binary representation of any integer in the range [L, R].',

  constraints: [
    '1 <= L <= R <= 10^9',
    'R - L <= 10^5'
  ],

  examples: [
    {
      input: 'L = 5\nR = 10',
      output: '3',
      explanation: 'The numbers 7 (111) and 10 (1010) have 3 and 2 set bits respectively. The maximum number of set bits in the range is 3.'
    },
    {
      input: 'L = 8\nR = 15',
      output: '4',
      explanation: '15 (1111) has four set bits, which is the maximum in the given range.'
    }
  ],

  testCases: [
    {
      input: '5\n10',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '8\n15',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '1\n1',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '100\n200',
      expectedOutput: '7',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def max_set_bits_in_range(l, r):\n    pass\n\nl = int(input())\nr = int(input())\nprint(max_set_bits_in_range(l, r))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int maxSetBitsInRange(int l, int r) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int l = sc.nextInt();\n            int r = sc.nextInt();\n            System.out.println(maxSetBitsInRange(l, r));\n        }\n    }\n}',

    c: '#include <stdio.h>\n\nint maxSetBitsInRange(int l, int r) {\n    return 0;\n}\n\nint main() {\n    int l, r;\n    if (scanf("%d %d", &l, &r) != 2) return 0;\n    printf("%d\\n", maxSetBitsInRange(l, r));\n    return 0;\n}',

    cpp: '#include <iostream>\n\nusing namespace std;\n\nint maxSetBitsInRange(int l, int r) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int l, r;\n    if (cin >> l >> r) {\n        cout << maxSetBitsInRange(l, r) << "\\n";\n    }\n\n    return 0;\n}'
  }
},

{
  id: 'csb-h3',
  title: 'Count Numbers Less Than N with Exactly K Set Bits',
  difficulty: 'Hard',

  description: 'Given two integers N and K, count how many positive integers less than or equal to N have exactly K set bits (1s) in their binary representation.',

  constraints: [
    '1 <= N <= 10^9',
    '0 <= K <= 31'
  ],

  examples: [
    {
      input: 'N = 7\nK = 2',
      output: '3',
      explanation: 'The numbers 3 (011), 5 (101), and 6 (110) each contain exactly two set bits.'
    },
    {
      input: 'N = 10\nK = 1',
      output: '4',
      explanation: 'The numbers 1, 2, 4, and 8 each contain exactly one set bit.'
    }
  ],

  testCases: [
    {
      input: '7\n2',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '10\n1',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '1\n1',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '31\n5',
      expectedOutput: '1',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def count_numbers_with_k_set_bits(n, k):\n    pass\n\nn = int(input())\nk = int(input())\nprint(count_numbers_with_k_set_bits(n, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int countNumbersWithKSetBits(int n, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(countNumbersWithKSetBits(n, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n\nint countNumbersWithKSetBits(int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n, k;\n    if (scanf("%d %d", &n, &k) != 2) return 0;\n    printf("%d\\n", countNumbersWithKSetBits(n, k));\n    return 0;\n}',

    cpp: '#include <iostream>\n\nusing namespace std;\n\nint countNumbersWithKSetBits(int n, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n, k;\n    if (cin >> n >> k) {\n        cout << countNumbersWithKSetBits(n, k) << "\\n";\n    }\n    return 0;\n}'
  }
},
{
  id: 'csb-h4',
  title: 'Smallest Number with Exactly K Set Bits',
  difficulty: 'Hard',

  description: 'Given two integers N and K, find the smallest integer greater than or equal to N that contains exactly K set bits (1s) in its binary representation. If no such number exists within the 32-bit signed integer range, return -1.',

  constraints: [
    '1 <= N <= 2^31 - 1',
    '0 <= K <= 31'
  ],

  examples: [
    {
      input: 'N = 10\nK = 2',
      output: '10',
      explanation: '10 in binary is 1010, which already contains exactly two set bits.'
    },
    {
      input: 'N = 11\nK = 2',
      output: '12',
      explanation: '11 (1011) has three set bits. The next smallest number with exactly two set bits is 12 (1100).'
    }
  ],

  testCases: [
    {
      input: '10\n2',
      expectedOutput: '10',
      hidden: false
    },
    {
      input: '11\n2',
      expectedOutput: '12',
      hidden: false
    },
    {
      input: '1\n1',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '31\n1',
      expectedOutput: '32',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def smallest_number_with_k_set_bits(n, k):\n    pass\n\nn = int(input())\nk = int(input())\nprint(smallest_number_with_k_set_bits(n, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int smallestNumberWithKSetBits(int n, int k) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(smallestNumberWithKSetBits(n, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n\nint smallestNumberWithKSetBits(int n, int k) {\n    return -1;\n}\n\nint main() {\n    int n, k;\n    if (scanf("%d %d", &n, &k) != 2) return 0;\n    printf("%d\\n", smallestNumberWithKSetBits(n, k));\n    return 0;\n}',

    cpp: '#include <iostream>\n\nusing namespace std;\n\nint smallestNumberWithKSetBits(int n, int k) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n, k;\n    if (cin >> n >> k) {\n        cout << smallestNumberWithKSetBits(n, k) << "\\n";\n    }\n    return 0;\n}'
  }
},
{
  id: 'csb-h5',
  title: 'Maximum Sum of Set Bits in a Subarray',
  difficulty: 'Hard',

  description: 'Given an array of non-negative integers, find the maximum total number of set bits (1s) among all possible contiguous subarrays. The set bit count of a subarray is the sum of the set bits of all its elements.',

  constraints: [
    '1 <= n <= 10^5',
    '0 <= arr[i] <= 10^9'
  ],

  examples: [
    {
      input: 'n = 5\narr = [3, 5, 1, 7, 2]',
      output: '10',
      explanation: 'The entire array contains 2 + 2 + 1 + 3 + 1 = 9 set bits. The maximum is obtained from the subarray [3, 5, 1, 7, 2] with a total of 9 set bits.'
    },
    {
      input: 'n = 4\narr = [8, 1, 3, 15]',
      output: '6',
      explanation: 'The subarray [1, 3, 15] contains 1 + 2 + 4 = 7 set bits, which is the maximum.'
    }
  ],

  testCases: [
    {
      input: '5\n3 5 1 7 2',
      expectedOutput: '9',
      hidden: false
    },
    {
      input: '4\n8 1 3 15',
      expectedOutput: '7',
      hidden: false
    },
    {
      input: '1\n0',
      expectedOutput: '0',
      hidden: true
    },
    {
      input: '3\n31 31 31',
      expectedOutput: '15',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def maximum_set_bit_sum(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(maximum_set_bit_sum(arr))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int maximumSetBitSum(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(maximumSetBitSum(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maximumSetBitSum(int* arr, int size) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", maximumSetBitSum(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint maximumSetBitSum(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << maximumSetBitSum(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},

];
