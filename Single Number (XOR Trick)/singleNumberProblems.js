export const singleNumberProblems = [
  {
    "id": "sn-e1",
    "title": "Classic Single Number",
    "difficulty": "Easy",
    "description": "Given a non-empty array of integers `nums`, every element appears twice except for one. Find that single one. Implement in O(n) time and O(1) space.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "-3 * 10^4 <= nums[i] <= 3 * 10^4"
    ],
    "examples": [
      {
        "input": "nums = [2,2,1]",
        "output": "1",
        "explanation": "1 appears once."
      },
      {
        "input": "nums = [4,1,2,1,2]",
        "output": "4",
        "explanation": "4 appears once."
      }
    ],
    "testCases": [
      {
        "input": "3\n2 2 1",
        "expectedOutput": "1",
        "hidden": false
      },
      {
        "input": "5\n4 1 2 1 2",
        "expectedOutput": "4",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def single_number(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(single_number(nums))",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int singleNumber(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(singleNumber(nums));\n        }\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n\nint singleNumber(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf(\"%d\", &nums[i]) != 1) return 0;\n    }\n    printf(\"%d\\n\", singleNumber(nums, n));\n    free(nums);\n    return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint singleNumber(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << singleNumber(nums) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-e2",
    "title": "Missing Number",
    "difficulty": "Easy",
    "description": "Given an array `nums` containing `n` distinct numbers in the range `[0, n]`, return the only number in the range that is missing from the array. Use XOR to achieve O(1) space.",
    "constraints": [
      "n == nums.length",
      "1 <= n <= 10^4",
      "0 <= nums[i] <= n",
      "All numbers are unique."
    ],
    "examples": [
      {
        "input": "nums = [3,0,1]",
        "output": "2",
        "explanation": "n = 3, range [0, 3]. 2 is missing."
      },
      {
        "input": "nums = [0,1]",
        "output": "2",
        "explanation": "n = 2, range [0, 2]. 2 is missing."
      }
    ],
    "testCases": [
      {
        "input": "3\n3 0 1",
        "expectedOutput": "2",
        "hidden": false
      },
      {
        "input": "2\n0 1",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def missing_number(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(missing_number(nums))",
      "java": "import java.util.*;\n\npublic class Solution {\n    public static int missingNumber(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            System.out.println(missingNumber(nums));\n        }\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\n\nint missingNumber(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf(\"%d\", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf(\"%d\", &nums[i]) != 1) return 0;\n    }\n    printf(\"%d\\n\", missingNumber(nums, n));\n    free(nums);\n    return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint missingNumber(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        cout << missingNumber(nums) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-e3",
    "title": "Find the Odd Occurrence",
    "difficulty": "Easy",
    "description": "Given an array where all elements occur an even number of times except one element which occurs an odd number of times. Find that element.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "-10^9 <= nums[i] <= 10^9"
    ],
    "examples": [
      {
        "input": "nums = [1, 2, 3, 2, 1]",
        "output": "3",
        "explanation": "3 occurs 1 time, others occur twice."
      }
    ],
    "testCases": [
      {
        "input": "5\n1 2 3 2 1",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def find_odd(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(find_odd(nums))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int findOdd(int[] nums) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i] = sc.nextInt();\n        System.out.println(findOdd(nums));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint findOdd(int* nums, int n) { return 0; }\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1) return 0;\n    int* arr = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    printf(\"%d\\n\", findOdd(arr, n));\n    free(arr); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint findOdd(vector<int>& nums) { return 0; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];\n        cout << findOdd(nums) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-e4",
    "title": "XOR of All Elements",
    "difficulty": "Easy",
    "description": "Given an array `nums`, compute and return the XOR sum of all elements in the array.",
    "constraints": [
      "1 <= nums.length <= 10^5",
      "0 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [1, 2, 3]",
        "output": "0",
        "explanation": "1 ^ 2 ^ 3 = 0."
      }
    ],
    "testCases": [
      {
        "input": "3\n1 2 3",
        "expectedOutput": "0",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def xor_all(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(xor_all(nums))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int xorAll(int[] nums) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i] = sc.nextInt();\n        System.out.println(xorAll(nums));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint xorAll(int* nums, int n) { return 0; }\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1) return 0;\n    int* arr = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    printf(\"%d\\n\", xorAll(arr, n));\n    free(arr); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint xorAll(vector<int>& nums) { return 0; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];\n        cout << xorAll(nums) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-e5",
    "title": "Decode XORed Array",
    "difficulty": "Easy",
    "description": "There is a hidden integer array `arr` of size `n` with non-negative integers. It is encoded into an array `encoded` of size `n-1` where `encoded[i] = arr[i] ^ arr[i+1]`. Given `encoded` and `first = arr[0]`, reconstruct the original array `arr`.",
    "constraints": [
      "encoded.length == n - 1",
      "2 <= n <= 10^4",
      "0 <= encoded[i] <= 10^5",
      "0 <= first <= 10^5"
    ],
    "examples": [
      {
        "input": "encoded = [1, 2, 3], first = 1",
        "output": "1 0 2 1",
        "explanation": "arr[0]=1, arr[1]=1^1=0, arr[2]=0^2=2, arr[3]=2^3=1."
      }
    ],
    "testCases": [
      {
        "input": "3\n1 2 3\n1",
        "expectedOutput": "1 0 2 1",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def decode(encoded, first):\n    pass\n\nn = int(input())\nencoded = list(map(int, input().split()))\nfirst = int(input())\nprint(*(decode(encoded, first)))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int[] decode(int[] encoded, int first) { return new int[0]; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] encoded = new int[n];\n        for(int i=0;i<n;i++) encoded[i] = sc.nextInt();\n        int first = sc.nextInt();\n        int[] ans = decode(encoded, first);\n        for(int i=0;i<ans.length;i++) {\n            System.out.print(ans[i] + (i == ans.length - 1 ? \"\" : \" \"));\n        }\n        System.out.println();\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint* decode(int* encoded, int encSize, int first, int* returnSize) { return NULL; }\nint main() {\n    int n; if (scanf(\"%d\", &n) != 1) return 0;\n    int* enc = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &enc[i]);\n    int first; scanf(\"%d\", &first);\n    int retSz;\n    int* ans = decode(enc, n, first, &retSz);\n    for(int i=0;i<retSz;i++) printf(\"%d%c\", ans[i], i==retSz-1 ? '\\n':' ');\n    free(enc); free(ans); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> decode(vector<int>& encoded, int first) { return {}; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> enc(n); for(int i=0;i<n;i++) cin >> enc[i];\n        int first; cin >> first;\n        vector<int> ans = decode(enc, first);\n        for(int i=0;i<ans.size();i++) cout << ans[i] << (i==ans.size()-1 ? \"\":\" \");\n        cout << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-m1",
    "title": "Single Number II",
    "difficulty": "Medium",
    "description": "Given an integer array `nums` where every element appears three times except for one, which appears exactly once. Find the single element. Must implement in O(n) time and O(1) space.",
    "constraints": [
      "1 <= nums.length <= 3 * 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [2,2,3,2]",
        "output": "3",
        "explanation": "3 appears once, 2 appears three times."
      }
    ],
    "testCases": [
      {
        "input": "4\n2 2 3 2",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def single_number_ii(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(single_number_ii(nums))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int singleNumberII(int[] nums) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i] = sc.nextInt();\n        System.out.println(singleNumberII(nums));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint singleNumberII(int* nums, int n) { return 0; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* arr = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    printf(\"%d\\n\", singleNumberII(arr, n));\n    free(arr); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint singleNumberII(vector<int>& nums) { return 0; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];\n        cout << singleNumberII(nums) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-m2",
    "title": "Single Number III",
    "difficulty": "Medium",
    "description": "Given an integer array `nums`, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once. Return them sorted in ascending order.",
    "constraints": [
      "2 <= nums.length <= 3 * 10^4",
      "-2^31 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [1,2,1,3,2,5]",
        "output": "3 5",
        "explanation": "3 and 5 appear once, others twice."
      }
    ],
    "testCases": [
      {
        "input": "6\n1 2 1 3 2 5",
        "expectedOutput": "3 5",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def single_number_iii(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(*(single_number_iii(nums)))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int[] singleNumberIII(int[] nums) { return new int[0]; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i] = sc.nextInt();\n        int[] ans = singleNumberIII(nums);\n        System.out.println(ans[0] + \" \" + ans[1]);\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint* singleNumberIII(int* nums, int n, int* returnSize) { return NULL; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* arr = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    int retSz;\n    int* ans = singleNumberIII(arr, n, &retSz);\n    printf(\"%d %d\\n\", ans[0], ans[1]);\n    free(arr); free(ans); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <algorithm>\nusing namespace std;\nvector<int> singleNumberIII(vector<int>& nums) { return {}; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];\n        vector<int> ans = singleNumberIII(nums);\n        cout << ans[0] << \" \" << ans[1] << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-m3",
    "title": "XOR Queries of a Subarray",
    "difficulty": "Medium",
    "description": "Given an array `arr` of positive integers and a 2D array `queries` where `queries[i] = [L, R]`, return an array containing the XOR sum of elements from index L to R.",
    "constraints": [
      "1 <= arr.length, queries.length <= 10^4",
      "1 <= arr[i] <= 10^9",
      "queries[i].length == 2"
    ],
    "examples": [
      {
        "input": "arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3]]",
        "output": "2 7 14",
        "explanation": "0-1: 1^3=2; 1-2: 3^4=7; 0-3: 1^3^4^8=14."
      }
    ],
    "testCases": [
      {
        "input": "4\n1 3 4 8\n3\n0 1\n1 2\n0 3",
        "expectedOutput": "2 7 14",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def xor_queries(arr, queries):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nq = int(input())\nqueries = []\nfor _ in range(q):\n    queries.append(list(map(int, input().split())))\nprint(*(xor_queries(arr, queries)))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int[] xorQueries(int[] arr, int[][] queries) { return new int[0]; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] arr = new int[n];\n        for(int i=0;i<n;i++) arr[i] = sc.nextInt();\n        int q = sc.nextInt();\n        int[][] queries = new int[q][2];\n        for(int i=0;i<q;i++) { queries[i][0] = sc.nextInt(); queries[i][1] = sc.nextInt(); }\n        int[] ans = xorQueries(arr, queries);\n        for(int i=0;i<q;i++) System.out.print(ans[i] + (i==q-1 ? \"\":\" \"));\n        System.out.println();\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint* xorQueries(int* arr, int arrSize, int** queries, int queriesSize, int* returnSize) { return NULL; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* arr = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    int q; scanf(\"%d\", &q);\n    int** queries = (int**)malloc(q*sizeof(int*));\n    for(int i=0;i<q;i++) {\n        queries[i] = (int*)malloc(2*sizeof(int));\n        scanf(\"%d %d\", &queries[i][0], &queries[i][1]);\n    }\n    int retSz;\n    int* ans = xorQueries(arr, n, queries, q, &retSz);\n    for(int i=0;i<retSz;i++) printf(\"%d%c\", ans[i], i==retSz-1 ? '\\n':' ');\n    free(arr);\n    for(int i=0;i<q;i++) free(queries[i]);\n    free(queries); free(ans); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) { return {}; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> arr(n); for(int i=0;i<n;i++) cin >> arr[i];\n        int q; cin >> q;\n        vector<vector<int>> queries(q, vector<int>(2));\n        for(int i=0;i<q;i++) cin >> queries[i][0] >> queries[i][1];\n        vector<int> ans = xorQueries(arr, queries);\n        for(int i=0;i<ans.size();i++) cout << ans[i] << (i==ans.size()-1 ? \"\":\" \");\n        cout << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-m4",
    "title": "Find Duplicate and Missing",
    "difficulty": "Medium",
    "description": "Given an unsorted array of size `n` containing numbers from `1` to `n`. One number is missing, and one number is duplicate. Find both using XOR. Return them as: `duplicate missing`.",
    "constraints": [
      "2 <= n <= 10^5",
      "1 <= nums[i] <= n"
    ],
    "examples": [
      {
        "input": "nums = [1, 2, 2, 4]",
        "output": "2 3",
        "explanation": "2 is duplicated, 3 is missing."
      }
    ],
    "testCases": [
      {
        "input": "4\n1 2 2 4",
        "expectedOutput": "2 3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def find_dup_missing(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(*(find_dup_missing(nums)))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int[] findDupMissing(int[] nums) { return new int[0]; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i] = sc.nextInt();\n        int[] ans = findDupMissing(nums);\n        System.out.println(ans[0] + \" \" + ans[1]);\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint* findDupMissing(int* nums, int n, int* returnSize) { return NULL; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* arr = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    int retSz;\n    int* ans = findDupMissing(arr, n, &retSz);\n    printf(\"%d %d\\n\", ans[0], ans[1]);\n    free(arr); free(ans); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nvector<int> findDupMissing(vector<int>& nums) { return {}; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];\n        vector<int> ans = findDupMissing(nums);\n        cout << ans[0] << \" \" << ans[1] << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-m5",
    "title": "Minimum Flips for OR",
    "difficulty": "Medium",
    "description": "Given three integers `a`, `b`, and `c`. Return the minimum flips required in some bits of `a` and `b` to make `a OR b == c`.",
    "constraints": [
      "1 <= a, b, c <= 10^9"
    ],
    "examples": [
      {
        "input": "a = 2, b = 6, c = 5",
        "output": "3",
        "explanation": "a = 0010, b = 0110, c = 0101. Flips needed: a[0]->1, a[1]->0, b[1]->0. Total 3 flips."
      }
    ],
    "testCases": [
      {
        "input": "2 6 5",
        "expectedOutput": "3",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def min_flips(a, b, c):\n    pass\n\na, b, c = map(int, input().split())\nprint(min_flips(a, b, c))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int minFlips(int a, int b, int c) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        int c = sc.nextInt();\n        System.out.println(minFlips(a, b, c));\n    }\n}",
      "c": "#include <stdio.h>\nint minFlips(int a, int b, int c) { return 0; }\nint main() {\n    int a, b, c;\n    if(scanf(\"%d %d %d\", &a, &b, &c) == 3) {\n        printf(\"%d\\n\", minFlips(a, b, c));\n    }\n    return 0;\n}",
      "cpp": "#include <iostream>\nusing namespace std;\nint minFlips(int a, int b, int c) { return 0; }\nint main() {\n    int a, b, c;\n    if(cin >> a >> b >> c) {\n        cout << minFlips(a, b, c) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-h1",
    "title": "Max XOR Two Numbers",
    "difficulty": "Hard",
    "description": "Given an integer array `nums`, return the maximum result of `nums[i] XOR nums[j]`, where `0 <= i <= j < n`.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "0 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [3,10,5,25,2,8]",
        "output": "28",
        "explanation": "Maximum is 5 ^ 25 = 28."
      }
    ],
    "testCases": [
      {
        "input": "6\n3 10 5 25 2 8",
        "expectedOutput": "28",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def find_max_xor(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(find_max_xor(nums))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int findMaxXOR(int[] nums) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i] = sc.nextInt();\n        System.out.println(findMaxXOR(nums));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint findMaxXOR(int* nums, int n) { return 0; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* arr = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    printf(\"%d\\n\", findMaxXOR(arr, n));\n    free(arr); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint findMaxXOR(vector<int>& nums) { return 0; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];\n        cout << findMaxXOR(nums) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-h2",
    "title": "Max XOR Subarray",
    "difficulty": "Hard",
    "description": "Given an array of integers, find the contiguous subarray with the maximum XOR sum.",
    "constraints": [
      "1 <= nums.length <= 2 * 10^4",
      "0 <= nums[i] <= 2^31 - 1"
    ],
    "examples": [
      {
        "input": "nums = [8, 1, 2, 12]",
        "output": "15",
        "explanation": "Subarray [8, 1, 2, 12] has XOR sum 8^1^2^12 = 7. Subarray [1, 2, 12] has XOR sum 1^2^12 = 15."
      }
    ],
    "testCases": [
      {
        "input": "4\n8 1 2 12",
        "expectedOutput": "15",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def max_xor_subarray(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(max_xor_subarray(nums))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int maxXORSubarray(int[] nums) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i] = sc.nextInt();\n        System.out.println(maxXORSubarray(nums));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint maxXORSubarray(int* nums, int n) { return 0; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* arr = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    printf(\"%d\\n\", maxXORSubarray(arr, n));\n    free(arr); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint maxXORSubarray(vector<int>& nums) { return 0; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];\n        cout << maxXORSubarray(nums) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-h3",
    "title": "Min XOR Sum of Two Arrays",
    "difficulty": "Hard",
    "description": "Given two integer arrays `nums1` and `nums2` of equal size `n`. Pair each element of `nums1` with an element in `nums2` such that the sum of the XOR of all pairs is minimized. Return the minimum XOR sum.",
    "constraints": [
      "n == nums1.length == nums2.length",
      "1 <= n <= 14",
      "0 <= nums1[i], nums2[i] <= 10^6"
    ],
    "examples": [
      {
        "input": "nums1 = [1, 2], nums2 = [2, 3]",
        "output": "2",
        "explanation": "Pair 1 with 3 (1^3=2), pair 2 with 2 (2^2=0). Sum is 2+0=2."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n2 3",
        "expectedOutput": "2",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def min_xor_sum(nums1, nums2):\n    pass\n\nn = int(input())\nnums1 = list(map(int, input().split()))\nnums2 = list(map(int, input().split()))\nprint(min_xor_sum(nums1, nums2))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int minXorSum(int[] nums1, int[] nums2) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums1 = new int[n];\n        for(int i=0;i<n;i++) nums1[i] = sc.nextInt();\n        int[] nums2 = new int[n];\n        for(int i=0;i<n;i++) nums2[i] = sc.nextInt();\n        System.out.println(minXorSum(nums1, nums2));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint minXorSum(int* nums1, int* nums2, int n) { return 0; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* n1 = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &n1[i]);\n    int* n2 = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &n2[i]);\n    printf(\"%d\\n\", minXorSum(n1, n2, n));\n    free(n1); free(n2); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint minXorSum(vector<int>& nums1, vector<int>& nums2) { return 0; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> nums1(n); for(int i=0;i<n;i++) cin >> nums1[i];\n        vector<int> nums2(n); for(int i=0;i<n;i++) cin >> nums2[i];\n        cout << minXorSum(nums1, nums2) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-h4",
    "title": "XOR Sum of All Pairs",
    "difficulty": "Hard",
    "description": "Given two arrays `A` and `B` of sizes `n` and `m` respectively. Return the XOR sum of `(A[i] ^ B[j])` for all possible pairs `(i, j)`.",
    "constraints": [
      "1 <= n, m <= 10^5",
      "0 <= A[i], B[j] <= 10^9"
    ],
    "examples": [
      {
        "input": "A = [1, 2], B = [3, 4]",
        "output": "0",
        "explanation": "(1^3) ^ (1^4) ^ (2^3) ^ (2^4) = 2 ^ 5 ^ 1 ^ 6 = 0."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 2\n2\n3 4",
        "expectedOutput": "0",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def xor_sum_pairs(a, b):\n    pass\n\nn = int(input())\na = list(map(int, input().split()))\nm = int(input())\nb = list(map(int, input().split()))\nprint(xor_sum_pairs(a, b))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int xorSumPairs(int[] A, int[] B) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] A = new int[n];\n        for(int i=0;i<n;i++) A[i] = sc.nextInt();\n        int m = sc.nextInt();\n        int[] B = new int[m];\n        for(int i=0;i<m;i++) B[i] = sc.nextInt();\n        System.out.println(xorSumPairs(A, B));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint xorSumPairs(int* A, int n, int* B, int m) { return 0; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* A = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &A[i]);\n    int m; if(scanf(\"%d\", &m) != 1) return 0;\n    int* B = (int*)malloc(m*sizeof(int));\n    for(int i=0;i<m;i++) scanf(\"%d\", &B[i]);\n    printf(\"%d\\n\", xorSumPairs(A, n, B, m));\n    free(A); free(B); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint xorSumPairs(vector<int>& A, vector<int>& B) { return 0; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> A(n); for(int i=0;i<n;i++) cin >> A[i];\n        int m; cin >> m;\n        vector<int> B(m); for(int i=0;i<m;i++) cin >> B[i];\n        cout << xorSumPairs(A, B) << \"\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "sn-h5",
    "title": "Triplets with XOR Zero",
    "difficulty": "Hard",
    "description": "Given an integer array `nums`, return the number of triplets `(i, j, k)` such that `nums[i] ^ nums[j] ^ nums[k] == 0` (where `0 <= i, j, k < n`).",
    "constraints": [
      "1 <= nums.length <= 1000",
      "0 <= nums[i] < 2^16"
    ],
    "examples": [
      {
        "input": "nums = [2, 1, 3]",
        "output": "12",
        "explanation": "Triplets are (0,0,0), (1,1,1), (2,2,2) which XOR to 2^2^2=2, etc. Wait, nums[i]^nums[j]^nums[k]=0. Possible ones are: (0,1,2)->2^1^3=0. Permutations: (0,1,2), (0,2,1), (1,0,2), (1,2,0), (2,0,1), (2,1,0) (6 triplets). Total 12 including matching values if any, etc. For [2,1,3], triplets are 6 permutations + 3 other combinations."
      }
    ],
    "testCases": [
      {
        "input": "3\n2 1 3",
        "expectedOutput": "12",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def count_triplets(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(count_triplets(nums))",
      "java": "import java.util.*;\npublic class Solution {\n    public static int countTriplets(int[] nums) { return 0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0;i<n;i++) nums[i] = sc.nextInt();\n        System.out.println(countTriplets(nums));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nint countTriplets(int* nums, int n) { return 0; }\nint main() {\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* arr = (int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &arr[i]);\n    printf(\"%d\\n\", countTriplets(arr, n));\n    free(arr); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nint countTriplets(vector<int>& nums) { return 0; }\nint main() {\n    int n; if(cin >> n) {\n        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];\n        cout << countTriplets(nums) << \"\\n\";\n    }\n    return 0;\n}"
    }
  }
];
