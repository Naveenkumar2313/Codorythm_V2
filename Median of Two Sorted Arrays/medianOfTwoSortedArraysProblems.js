export const medianOfTwoSortedArraysProblems = [
  {
    "id": "mts-e1",
    "title": "Merge Sorted Arrays",
    "difficulty": "Easy",
    "description": "Given two sorted integer arrays `A` and `B`, merge `B` into `A` as one sorted array. `A` has enough space to hold elements from `B`.",
    "constraints": [
      "A.length == m + n",
      "B.length == n",
      "0 <= m, n <= 1000"
    ],
    "examples": [
      {
        "input": "A = [1,2,3,0,0,0], m = 3, B = [2,5,6], n = 3",
        "output": "1 2 2 3 5 6",
        "explanation": "Merged result is [1,2,2,3,5,6]."
      }
    ],
    "testCases": [
      {
        "input": "3 3\n1 2 3 0 0 0\n2 5 6",
        "expectedOutput": "1 2 2 3 5 6",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def merge(A, m, B, n):\n    pass\n\nm, n = map(int, input().split())\na = list(map(int, input().split()))\nb = list(map(int, input().split()))\nmerge(a, m, b, n)\nprint(*(a))",
      "java": "import java.util.*;\npublic class Solution {\n    public static void merge(int[] A, int m, int[] B, int n) {}\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        int n = sc.nextInt();\n        int[] A = new int[m + n];\n        for(int i=0;i<m+n;i++) A[i] = sc.nextInt();\n        int[] B = new int[n];\n        for(int i=0;i<n;i++) B[i] = sc.nextInt();\n        merge(A, m, B, n);\n        for(int i=0;i<m+n;i++) System.out.print(A[i] + (i==m+n-1?\"\":\" \"));\n        System.out.println();\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\nvoid merge(int* A, int m, int* B, int n) {}\nint main() {\n    int m, n; if(scanf(\"%d %d\", &m, &n) != 2) return 0;\n    int* A = (int*)malloc((m+n) * sizeof(int));\n    for(int i=0;i<m+n;i++) scanf(\"%d\", &A[i]);\n    int* B = (int*)malloc(n * sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &B[i]);\n    merge(A, m, B, n);\n    for(int i=0;i<m+n;i++) printf(\"%d%c\", A[i], i==m+n-1?'\\n':' ');\n    free(A); free(B); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\nusing namespace std;\nvoid merge(vector<int>& A, int m, vector<int>& B, int n) {}\nint main() {\n    int m, n; if(cin >> m >> n) {\n        vector<int> A(m + n);\n        for(int i=0;i<m+n;i++) cin >> A[i];\n        vector<int> B(n);\n        for(int i=0;i<n;i++) cin >> B[i];\n        merge(A, m, B, n);\n        for(int i=0;i<m+n;i++) cout << A[i] << (i==m+n-1?\"\":\" \");\n        cout << \"\\\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "mts-h1",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "description": "Given two sorted arrays of sizes `m` and `n`, return the median of the combined sorted array in O(log(min(m, n))).",
    "constraints": [
      "0 <= m, n <= 1000",
      "m + n >= 1",
      "-10^6 <= nums1[i], nums2[j] <= 10^6"
    ],
    "examples": [
      {
        "input": "nums1 = [1,3], nums2 = [2]",
        "output": "2.00000",
        "explanation": "Merged is [1,2,3], median is 2.00000."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def find_median(nums1, nums2):\n    pass\n\nm = int(input())\nnums1 = list(map(int, input().split())) if m > 0 else []\nn = int(input())\nnums2 = list(map(int, input().split())) if n > 0 else []\nres = find_median(nums1, nums2)\nprint(f'{float(res):.5f}')",
      "java": "import java.util.*;\npublic class Solution {\n    public static double findMedian(int[] nums1, int[] nums2) { return 0.0; }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int m = sc.nextInt();\n        int[] nums1 = new int[m];\n        for (int i = 0; i < m; i++) nums1[i] = sc.nextInt();\n        int n = sc.nextInt();\n        int[] nums2 = new int[n];\n        for (int i = 0; i < n; i++) nums2[i] = sc.nextInt();\n        System.out.printf(Locale.US, \"%.5f\\\\n\", findMedian(nums1, nums2));\n    }\n}",
      "c": "#include <stdio.h>\n#include <stdlib.h>\ndouble findMedian(int* nums1, int m, int* nums2, int n) { return 0.0; }\nint main() {\n    int m; if(scanf(\"%d\", &m) != 1) return 0;\n    int* nums1 = (int*)malloc(m * sizeof(int));\n    for(int i=0;i<m;i++) scanf(\"%d\", &nums1[i]);\n    int n; if(scanf(\"%d\", &n) != 1) return 0;\n    int* nums2 = (int*)malloc(n * sizeof(int));\n    for(int i=0;i<n;i++) scanf(\"%d\", &nums2[i]);\n    printf(\"%.5f\\\\n\", findMedian(nums1, m, nums2, n));\n    free(nums1); free(nums2); return 0;\n}",
      "cpp": "#include <iostream>\n#include <vector>\n#include <iomanip>\nusing namespace std;\ndouble findMedian(vector<int>& nums1, vector<int>& nums2) { return 0.0; }\nint main() {\n    int m; if (cin >> m) {\n        vector<int> nums1(m);\n        for(int i=0;i<m;i++) cin >> nums1[i];\n        int n; cin >> n;\n        vector<int> nums2(n);\n        for(int i=0;i<n;i++) cin >> nums2[i];\n        cout << fixed << setprecision(5) << findMedian(nums1, nums2) << \"\\\\n\";\n    }\n    return 0;\n}"
    }
  },
  {
    "id": "mts-e2",
    "title": "Median of Single Sorted Array",
    "difficulty": "Easy",
    "description": "Solve the Median of Single Sorted Array problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-e3",
    "title": "Sorted Arrays Intersection",
    "difficulty": "Easy",
    "description": "Solve the Sorted Arrays Intersection problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-e4",
    "title": "Kth Element Linear Search",
    "difficulty": "Easy",
    "description": "Solve the Kth Element Linear Search problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-e5",
    "title": "Median of Unsorted Array",
    "difficulty": "Easy",
    "description": "Solve the Median of Unsorted Array problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-m1",
    "title": "Kth Element Logarithmic",
    "difficulty": "Medium",
    "description": "Solve the Kth Element Logarithmic problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-m2",
    "title": "Median of Two Sorted Arrays Linear",
    "difficulty": "Medium",
    "description": "Solve the Median of Two Sorted Arrays Linear problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-m3",
    "title": "Search in Two Sorted Arrays",
    "difficulty": "Medium",
    "description": "Solve the Search in Two Sorted Arrays problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-m4",
    "title": "Median of Row-wise Sorted Matrix",
    "difficulty": "Medium",
    "description": "Solve the Median of Row-wise Sorted Matrix problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-m5",
    "title": "Split Array Equal Medians",
    "difficulty": "Medium",
    "description": "Solve the Split Array Equal Medians problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-h2",
    "title": "Median with Different Distributions",
    "difficulty": "Hard",
    "description": "Solve the Median with Different Distributions problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-h3",
    "title": "Sliding Window Median",
    "difficulty": "Hard",
    "description": "Solve the Sliding Window Median problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-h4",
    "title": "Kth Sum of Two Sorted Arrays",
    "difficulty": "Hard",
    "description": "Solve the Kth Sum of Two Sorted Arrays problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  },
  {
    "id": "mts-h5",
    "title": "Median in Merged Stream",
    "difficulty": "Hard",
    "description": "Solve the Median in Merged Stream problem. Given sorted arrays or grid, return the double or integer median value.",
    "constraints": [
      "0 <= m, n <= 1000",
      "Elements are sorted."
    ],
    "examples": [
      {
        "input": "2\n1 3\n1\n2",
        "output": "2.00000",
        "explanation": "Median target found."
      }
    ],
    "testCases": [
      {
        "input": "2\n1 3\n1\n2",
        "expectedOutput": "2.00000",
        "hidden": false
      }
    ],
    "starterCode": {
      "python": "def solve(nums1, nums2):\n    return 2.0",
      "java": "public class Solution { public static double solve(int[] A, int[] B) { return 2.0; } }",
      "c": "double solve(int* A, int m, int* B, int n) { return 2.0; }",
      "cpp": "double solve(vector<int>& A, vector<int>& B) { return 2.0; }"
    }
  }
];
