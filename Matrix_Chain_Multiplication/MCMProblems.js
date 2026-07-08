export const matrixCHainProblems = [
  {
  id: 'mcm-e1',
  title: 'Matrix Chain Multiplication (Minimum Cost)',
  difficulty: 'Easy',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, find the minimum number of scalar multiplications required to multiply the entire chain of matrices.',
  constraints: [
    '2 <= N <= 100',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '26000',
      explanation: 'The optimal parenthesization is ((A1(A2A3))A4), requiring 26000 scalar multiplications.'
    },
    {
      input: 'arr = [10, 20, 30]',
      output: '6000',
      explanation: 'Only one possible multiplication exists: A1 × A2.'
    }
  ],
  testCases: [
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '26000',
      hidden: false
    },
    {
      input: '3\n10 20 30',
      expectedOutput: '6000',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def matrix_chain_order(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(matrix_chain_order(arr))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int matrixChainOrder(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(matrixChainOrder(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint matrixChainOrder(int* arr, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", matrixChainOrder(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint matrixChainOrder(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << matrixChainOrder(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-e2',
  title: 'Matrix Chain Multiplication (Recursive)',
  difficulty: 'Easy',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, compute the minimum number of scalar multiplications required to multiply the matrix chain using a recursive approach without memoization.',
  constraints: [
    '2 <= N <= 20',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [10, 20, 30, 40]',
      output: '18000',
      explanation: 'The optimal parenthesization is ((A1A2)A3), requiring 18000 scalar multiplications.'
    },
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '26000',
      explanation: 'The recursive solution explores all possible parenthesizations and returns the minimum cost of 26000.'
    }
  ],
  testCases: [
    {
      input: '4\n10 20 30 40',
      expectedOutput: '18000',
      hidden: false
    },
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '26000',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def matrix_chain_recursive(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(matrix_chain_recursive(arr))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int matrixChainRecursive(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(matrixChainRecursive(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint matrixChainRecursive(int* arr, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", matrixChainRecursive(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint matrixChainRecursive(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << matrixChainRecursive(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-e3',
  title: 'Matrix Chain Multiplication (Memoization)',
  difficulty: 'Easy',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, compute the minimum number of scalar multiplications required to multiply the entire matrix chain using recursion with memoization.',
  constraints: [
    '2 <= N <= 100',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [10, 30, 5, 60]',
      output: '4500',
      explanation: 'The optimal parenthesization is ((A1A2)A3), resulting in 4500 scalar multiplications.'
    },
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '26000',
      explanation: 'Memoization stores previously computed subproblems and returns the minimum multiplication cost of 26000.'
    }
  ],
  testCases: [
    {
      input: '4\n10 30 5 60',
      expectedOutput: '4500',
      hidden: false
    },
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '26000',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def matrix_chain_memoization(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(matrix_chain_memoization(arr))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int matrixChainMemoization(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(matrixChainMemoization(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint matrixChainMemoization(int* arr, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", matrixChainMemoization(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint matrixChainMemoization(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << matrixChainMemoization(arr) << "\\n";\n    }\n    return 0;\n}'
  }
}, {
  id: 'mcm-e4',
  title: 'Count the Number of Matrices',
  difficulty: 'Easy',
  description: 'Given an array `arr[]` of size `N` representing the dimensions of a matrix chain, determine the number of matrices in the chain. The i-th matrix has dimensions `arr[i-1] × arr[i]`.',
  constraints: [
    '2 <= N <= 10^5',
    '1 <= arr[i] <= 10^6'
  ],
  examples: [
    {
      input: 'arr = [10, 20, 30]',
      output: '2',
      explanation: 'There are 2 matrices: A1 (10 × 20) and A2 (20 × 30).'
    },
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '4',
      explanation: 'The chain contains 4 matrices.'
    }
  ],
  testCases: [
    {
      input: '3\n10 20 30',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '4',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def count_matrices(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(count_matrices(arr))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int countMatrices(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(countMatrices(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countMatrices(int* arr, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", countMatrices(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint countMatrices(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << countMatrices(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},
  {
  id: 'mcm-e5',
  title: 'Validate Matrix Chain',
  difficulty: 'Easy',
  description: 'Given an array `arr[]` of size `N` representing the dimensions of a matrix chain, determine whether the matrices can be multiplied in the given order. Return `true` if every adjacent pair of matrices is compatible for multiplication, otherwise return `false`.',
  constraints: [
    '2 <= N <= 10^5',
    '1 <= arr[i] <= 10^6'
  ],
  examples: [
    {
      input: 'arr = [10, 20, 30, 40]',
      output: 'true',
      explanation: 'The matrices are A1(10×20), A2(20×30), and A3(30×40). Every adjacent pair is compatible for multiplication.'
    },
    {
      input: 'arr = [15, 25]',
      output: 'true',
      explanation: 'A single matrix is always considered a valid matrix chain.'
    }
  ],
  testCases: [
    {
      input: '4\n10 20 30 40',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '2\n15 25',
      expectedOutput: 'true',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def validate_matrix_chain(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(str(validate_matrix_chain(arr)).lower())',

    java: 'import java.util.*;\n\npublic class Main {\n    public static boolean validateMatrixChain(int[] arr) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(validateMatrixChain(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n#include <stdbool.h>\n\nbool validateMatrixChain(int* arr, int n) {\n    return false;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%s\\n", validateMatrixChain(arr, n) ? "true" : "false");\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nbool validateMatrixChain(vector<int>& arr) {\n    return false;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << (validateMatrixChain(arr) ? "true" : "false") << "\\n";\n    }\n    return 0;\n}'
  }
}, {
  id: 'mcm-m1',
  title: 'Print Optimal Parenthesization',
  difficulty: 'Medium',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, print the optimal parenthesization of the matrix chain that minimizes the total number of scalar multiplications. Represent the matrices as `A1`, `A2`, `A3`, and so on.',
  constraints: [
    '2 <= N <= 30',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '((A1(A2A3))A4)',
      explanation: 'This parenthesization gives the minimum multiplication cost of 26000.'
    },
    {
      input: 'arr = [10, 20, 30]',
      output: '(A1A2)',
      explanation: 'Only one valid parenthesization exists.'
    }
  ],
  testCases: [
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '((A1(A2A3))A4)',
      hidden: false
    },
    {
      input: '3\n10 20 30',
      expectedOutput: '(A1A2)',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def optimal_parenthesization(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(optimal_parenthesization(arr))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static String optimalParenthesization(int[] arr) {\n        return "";\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(optimalParenthesization(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nchar* optimalParenthesization(int* arr, int n) {\n    return "";\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%s\\n", optimalParenthesization(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n\nusing namespace std;\n\nstring optimalParenthesization(vector<int>& arr) {\n    return "";\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << optimalParenthesization(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-m2',
  title: 'Matrix Chain Multiplication (Tabulation)',
  difficulty: 'Medium',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, compute the minimum number of scalar multiplications required to multiply the entire matrix chain using the bottom-up Dynamic Programming (tabulation) approach.',
  constraints: [
    '2 <= N <= 100',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '26000',
      explanation: 'The DP table computes the minimum multiplication cost as 26000.'
    },
    {
      input: 'arr = [10, 30, 5, 60]',
      output: '4500',
      explanation: 'The optimal parenthesization is ((A1A2)A3), giving a minimum cost of 4500.'
    }
  ],
  testCases: [
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '26000',
      hidden: false
    },
    {
      input: '4\n10 30 5 60',
      expectedOutput: '4500',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def matrix_chain_tabulation(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(matrix_chain_tabulation(arr))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int matrixChainTabulation(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(matrixChainTabulation(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint matrixChainTabulation(int* arr, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", matrixChainTabulation(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint matrixChainTabulation(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << matrixChainTabulation(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-m3',
  title: 'Find the Optimal Split Position',
  difficulty: 'Medium',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, determine the split position `k` (1-based index) that produces the minimum number of scalar multiplications for multiplying the entire matrix chain. If multiple split positions give the same minimum cost, return the smallest one.',
  constraints: [
    '2 <= N <= 100',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '3',
      explanation: 'Splitting between A3 and A4 produces the minimum multiplication cost.'
    },
    {
      input: 'arr = [10, 30, 5, 60]',
      output: '2',
      explanation: 'Splitting between A2 and A3 gives the optimal solution.'
    }
  ],
  testCases: [
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '4\n10 30 5 60',
      expectedOutput: '2',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def optimal_split(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(optimal_split(arr))',

    java: 'import java.util.*;\n\npublic class Main {\n    public static int optimalSplit(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(optimalSplit(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint optimalSplit(int* arr, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", optimalSplit(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint optimalSplit(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << optimalSplit(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-m4',
  title: 'Maximum Cost Matrix Chain Multiplication',
  difficulty: 'Medium',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, find the maximum number of scalar multiplications required to multiply the entire matrix chain by choosing an appropriate parenthesization.',
  constraints: [
    '2 <= N <= 100',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [10, 20, 30]',
      output: '6000',
      explanation: 'Only one parenthesization exists, so the maximum cost is 6000.'
    },
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '69000',
      explanation: 'The parenthesization (((A1A2)A3)A4) results in the maximum multiplication cost of 69000.'
    }
  ],
  testCases: [
    {
      input: '3\n10 20 30',
      expectedOutput: '6000',
      hidden: false
    },
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '69000',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def maximum_matrix_chain_cost(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(maximum_matrix_chain_cost(arr))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int maximumMatrixChainCost(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(maximumMatrixChainCost(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maximumMatrixChainCost(int* arr, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", maximumMatrixChainCost(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint maximumMatrixChainCost(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << maximumMatrixChainCost(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-m5',
  title: 'Minimum Cost with Fixed Split',
  difficulty: 'Medium',
  description: 'Given an array `arr[]` of size `N` representing the dimensions of a matrix chain and an integer `k` (1 ≤ k ≤ N-2), split the matrix chain only at the given position `k` and compute the total number of scalar multiplications required. Do not consider any other split positions.',
  constraints: [
    '3 <= N <= 100',
    '1 <= arr[i] <= 1000',
    '1 <= k <= N - 2'
  ],
  examples: [
    {
      input: 'arr = [40, 20, 30, 10, 30], k = 2',
      output: '36000',
      explanation: 'The chain is split into (A1A2) and (A3A4). The total multiplication cost is 24000 + 9000 + 3000 = 36000.'
    },
    {
      input: 'arr = [10, 20, 30], k = 1',
      output: '6000',
      explanation: 'Only one valid split exists, resulting in 6000 scalar multiplications.'
    }
  ],
  testCases: [
    {
      input: '5\n40 20 30 10 30\n2',
      expectedOutput: '36000',
      hidden: false
    },
    {
      input: '3\n10 20 30\n1',
      expectedOutput: '6000',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def fixed_split_cost(arr, k):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nk = int(input())\nprint(fixed_split_cost(arr, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int fixedSplitCost(int[] arr, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            System.out.println(fixedSplitCost(arr, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint fixedSplitCost(int* arr, int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    int k;\n    if (scanf("%d", &k) != 1) return 0;\n    printf("%d\\n", fixedSplitCost(arr, n, k));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint fixedSplitCost(vector<int>& arr, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        int k;\n        cin >> k;\n        cout << fixedSplitCost(arr, k) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-h1',
  title: 'Minimum Cost and Optimal Parenthesization',
  difficulty: 'Hard',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, return both the minimum number of scalar multiplications required to multiply the entire matrix chain and the corresponding optimal parenthesization.',
  constraints: [
    '2 <= N <= 100',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '26000\n((A1(A2A3))A4)',
      explanation: 'The minimum multiplication cost is 26000 and the corresponding optimal parenthesization is ((A1(A2A3))A4).'
    },
    {
      input: 'arr = [10, 20, 30]',
      output: '6000\n(A1A2)',
      explanation: 'Only one valid parenthesization exists with a multiplication cost of 6000.'
    }
  ],
  testCases: [
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '26000\n((A1(A2A3))A4)',
      hidden: false
    },
    {
      input: '3\n10 20 30',
      expectedOutput: '6000\n(A1A2)',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def matrix_chain_details(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\ncost, order = matrix_chain_details(arr)\nprint(cost)\nprint(order)',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static String[] matrixChainDetails(int[] arr) {\n        return new String[]{"0", ""};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            String[] result = matrixChainDetails(arr);\n            System.out.println(result[0]);\n            System.out.println(result[1]);\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid matrixChainDetails(int* arr, int n, int* cost, char* order) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    int cost = 0;\n    char order[1000];\n    matrixChainDetails(arr, n, &cost, order);\n    printf("%d\\n", cost);\n    printf("%s\\n", order);\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n#include <utility>\n\nusing namespace std;\n\npair<int, string> matrixChainDetails(vector<int>& arr) {\n    return {0, ""};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        pair<int, string> result = matrixChainDetails(arr);\n        cout << result.first << "\\n";\n        cout << result.second << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-h2',
  title: 'Matrix Chain Multiplication with Queries',
  difficulty: 'Hard',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, answer multiple queries. Each query contains two indices `i` and `j` (1-based), representing a subchain from matrix `Ai` to `Aj`. For every query, return the minimum number of scalar multiplications required to multiply that subchain.',
  constraints: [
    '2 <= N <= 100',
    '1 <= Q <= 100',
    '1 <= arr[i] <= 1000',
    '1 <= i <= j <= N - 1'
  ],
  examples: [
    {
      input: 'arr = [40, 20, 30, 10, 30], queries = [[1,4],[2,4]]',
      output: '26000\n12000',
      explanation: 'The minimum multiplication costs for the two queried subchains are 26000 and 12000 respectively.'
    },
    {
      input: 'arr = [10, 20, 30], queries = [[1,2]]',
      output: '6000',
      explanation: 'Only one multiplication is required.'
    }
  ],
  testCases: [
    {
      input: '5\n40 20 30 10 30\n2\n1 4\n2 4',
      expectedOutput: '26000\n12000',
      hidden: false
    },
    {
      input: '3\n10 20 30\n1\n1 2',
      expectedOutput: '6000',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def matrix_chain_queries(arr, queries):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nq = int(input())\nqueries = [tuple(map(int, input().split())) for _ in range(q)]\nresults = matrix_chain_queries(arr, queries)\nfor x in results:\n    print(x)',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static List<Integer> matrixChainQueries(int[] arr, int[][] queries) {\n        return new ArrayList<>();\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();\n            int q = sc.nextInt();\n            int[][] queries = new int[q][2];\n            for (int i = 0; i < q; i++) {\n                queries[i][0] = sc.nextInt();\n                queries[i][1] = sc.nextInt();\n            }\n            List<Integer> ans = matrixChainQueries(arr, queries);\n            for (int x : ans) System.out.println(x);\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid matrixChainQueries(int* arr, int n, int queries[][2], int q, int* result) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);\n    int q;\n    scanf("%d", &q);\n    int queries[q][2];\n    int result[q];\n    for (int i = 0; i < q; i++) scanf("%d %d", &queries[i][0], &queries[i][1]);\n    matrixChainQueries(arr, n, queries, q, result);\n    for (int i = 0; i < q; i++) printf("%d\\n", result[i]);\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nvector<int> matrixChainQueries(vector<int>& arr, vector<pair<int,int>>& queries) {\n    return {};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) cin >> arr[i];\n        int q;\n        cin >> q;\n        vector<pair<int,int>> queries(q);\n        for (int i = 0; i < q; i++) cin >> queries[i].first >> queries[i].second;\n        vector<int> ans = matrixChainQueries(arr, queries);\n        for (int x : ans) cout << x << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-h3',
  title: 'Circular Matrix Chain Multiplication',
  difficulty: 'Hard',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, the matrices are arranged in a circular chain. You may choose any matrix as the starting point before performing multiplication. Return the minimum number of scalar multiplications required to multiply the entire circular chain.',
  constraints: [
    '2 <= N <= 100',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [10, 20, 30, 40]',
      output: '18000',
      explanation: 'Starting from an optimal position minimizes the total scalar multiplication cost to 18000.'
    },
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '26000',
      explanation: 'Among all possible starting positions, the minimum multiplication cost is 26000.'
    }
  ],
  testCases: [
    {
      input: '4\n10 20 30 40',
      expectedOutput: '18000',
      hidden: false
    },
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '26000',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def circular_matrix_chain(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\nprint(circular_matrix_chain(arr))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int circularMatrixChain(int[] arr) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            System.out.println(circularMatrixChain(arr));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint circularMatrixChain(int* arr, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    printf("%d\\n", circularMatrixChain(arr, n));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint circularMatrixChain(vector<int>& arr) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        cout << circularMatrixChain(arr) << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-h4',
  title: 'Maximum Cost and Parenthesization',
  difficulty: 'Hard',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, find the maximum number of scalar multiplications required to multiply the entire matrix chain. Also return the corresponding parenthesization that produces this maximum cost.',
  constraints: [
    '2 <= N <= 100',
    '1 <= arr[i] <= 1000'
  ],
  examples: [
    {
      input: 'arr = [40, 20, 30, 10, 30]',
      output: '69000\n(((A1A2)A3)A4)',
      explanation: 'The parenthesization (((A1A2)A3)A4) results in the maximum multiplication cost of 69000.'
    },
    {
      input: 'arr = [10, 20, 30]',
      output: '6000\n(A1A2)',
      explanation: 'Only one parenthesization exists, so it is also the one with the maximum cost.'
    }
  ],
  testCases: [
    {
      input: '5\n40 20 30 10 30',
      expectedOutput: '69000\n(((A1A2)A3)A4)',
      hidden: false
    },
    {
      input: '3\n10 20 30',
      expectedOutput: '6000\n(A1A2)',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def maximum_matrix_chain_details(arr):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\ncost, order = maximum_matrix_chain_details(arr)\nprint(cost)\nprint(order)',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static String[] maximumMatrixChainDetails(int[] arr) {\n        return new String[]{"0", ""};\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            String[] result = maximumMatrixChainDetails(arr);\n            System.out.println(result[0]);\n            System.out.println(result[1]);\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid maximumMatrixChainDetails(int* arr, int n, int* cost, char* order) {\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    int cost = 0;\n    char order[1000];\n    maximumMatrixChainDetails(arr, n, &cost, order);\n    printf("%d\\n", cost);\n    printf("%s\\n", order);\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n#include <string>\n#include <utility>\n\nusing namespace std;\n\npair<int, string> maximumMatrixChainDetails(vector<int>& arr) {\n    return {0, ""};\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        pair<int, string> result = maximumMatrixChainDetails(arr);\n        cout << result.first << "\\n";\n        cout << result.second << "\\n";\n    }\n    return 0;\n}'
  }
},{
  id: 'mcm-h5',
  title: 'Matrix Chain Multiplication with Split Penalty',
  difficulty: 'Hard',
  description: 'Given an array `arr[]` of size `N`, where the dimension of the i-th matrix is `arr[i-1] × arr[i]`, and an integer `P` representing the penalty incurred for every split, determine the minimum total cost required to multiply the entire matrix chain. The total cost is the sum of scalar multiplication costs and the penalty paid for each split.',
  constraints: [
    '2 <= N <= 100',
    '1 <= arr[i] <= 1000',
    '0 <= P <= 10^5'
  ],
  examples: [
    {
      input: 'arr = [10, 20, 30], P = 100',
      output: '6100',
      explanation: 'The multiplication cost is 6000 and one split incurs a penalty of 100, giving a total cost of 6100.'
    },
    {
      input: 'arr = [40, 20, 30, 10, 30], P = 500',
      output: '27500',
      explanation: 'The minimum multiplication cost is 26000. There are three splits in the optimal parenthesization, so the total penalty is 1500. Hence the total cost is 27500.'
    }
  ],
  testCases: [
    {
      input: '3\n10 20 30\n100',
      expectedOutput: '6100',
      hidden: false
    },
    {
      input: '5\n40 20 30 10 30\n500',
      expectedOutput: '27500',
      hidden: false
    }
  ],
  starterCode: {
    python: 'def matrix_chain_with_penalty(arr, penalty):\n    pass\n\nn = int(input())\narr = list(map(int, input().split()))\npenalty = int(input())\nprint(matrix_chain_with_penalty(arr, penalty))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int matrixChainWithPenalty(int[] arr, int penalty) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] arr = new int[n];\n            for (int i = 0; i < n; i++) {\n                arr[i] = sc.nextInt();\n            }\n            int penalty = sc.nextInt();\n            System.out.println(matrixChainWithPenalty(arr, penalty));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint matrixChainWithPenalty(int* arr, int n, int penalty) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* arr = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &arr[i]) != 1) return 0;\n    }\n    int penalty;\n    if (scanf("%d", &penalty) != 1) return 0;\n    printf("%d\\n", matrixChainWithPenalty(arr, n, penalty));\n    free(arr);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint matrixChainWithPenalty(vector<int>& arr, int penalty) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if (cin >> n) {\n        vector<int> arr(n);\n        for (int i = 0; i < n; i++) {\n            cin >> arr[i];\n        }\n        int penalty;\n        cin >> penalty;\n        cout << matrixChainWithPenalty(arr, penalty) << "\\n";\n    }\n    return 0;\n}'
  }
},
];