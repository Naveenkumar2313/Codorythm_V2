export const BSAproblems = [
  // EASY
  {
  id: 'bsoa-e1',
  title: 'Integer Square Root',
  difficulty: 'Easy',

  description: 'Given a non-negative integer n, find and return its integer square root. The integer square root is the largest integer x such that x × x ≤ n.',

  constraints: [
    '0 <= n <= 2^31 - 1'
  ],

  examples: [
    {
      input: '4',
      output: '2',
      explanation: 'The square root of 4 is exactly 2.'
    },
    {
      input: '8',
      output: '2',
      explanation: 'The square root of 8 is approximately 2.828, so the integer square root is 2.'
    }
  ],

  testCases: [
    {
      input: '4',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '8',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '0',
      expectedOutput: '0',
      hidden: true
    },
    {
      input: '1',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '2147395599',
      expectedOutput: '46339',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def integer_square_root(n):\n    return 0\n\nn = int(input())\nprint(integer_square_root(n))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int integerSquareRoot(int n) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            System.out.println(integerSquareRoot(n));\n        }\n    }\n}',

    c: '#include <stdio.h>\n\nint integerSquareRoot(int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    printf("%d\\n", integerSquareRoot(n));\n    return 0;\n}',

    cpp: '#include <iostream>\n\nusing namespace std;\n\nint integerSquareRoot(int n) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        cout << integerSquareRoot(n) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-e2',
  title: 'Perfect Square Check',
  difficulty: 'Easy',

  description: 'Given a non-negative integer n, determine whether it is a perfect square. Return true if there exists an integer x such that x × x = n, otherwise return false.',

  constraints: [
    '0 <= n <= 2^31 - 1'
  ],

  examples: [
    {
      input: '16',
      output: 'true',
      explanation: '4 × 4 = 16, so 16 is a perfect square.'
    },
    {
      input: '14',
      output: 'false',
      explanation: 'No integer squared equals 14.'
    }
  ],

  testCases: [
    {
      input: '16',
      expectedOutput: 'true',
      hidden: false
    },
    {
      input: '14',
      expectedOutput: 'false',
      hidden: false
    },
    {
      input: '0',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '1',
      expectedOutput: 'true',
      hidden: true
    },
    {
      input: '2147395600',
      expectedOutput: 'true',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def is_perfect_square(n):\n    return False\n\nn = int(input())\nprint(is_perfect_square(n))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static boolean isPerfectSquare(int n) {\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            System.out.println(isPerfectSquare(n));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdbool.h>\n\nbool isPerfectSquare(int n) {\n    return false;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    printf("%s\\n", isPerfectSquare(n) ? "true" : "false");\n    return 0;\n}',

    cpp: '#include <iostream>\n\nusing namespace std;\n\nbool isPerfectSquare(int n) {\n    return false;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        cout << (isPerfectSquare(n) ? "true" : "false") << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-e3',
  title: 'Smallest Divisor Given a Threshold',
  difficulty: 'Easy',

  description: 'Given an array of positive integers nums and an integer threshold, find the smallest positive divisor such that the sum of the division results rounded up is less than or equal to the threshold.',

  constraints: [
    '1 <= nums.length <= 10^5',
    '1 <= nums[i] <= 10^6',
    'nums.length <= threshold <= 10^6'
  ],

  examples: [
    {
      input: 'nums = [1, 2, 5, 9]\nthreshold = 6',
      output: '5',
      explanation: 'Using divisor 5, the rounded-up divisions are 1, 1, 1, and 2. Their sum is 5, which is less than or equal to the threshold.'
    },
    {
      input: 'nums = [44, 22, 33, 11, 1]\nthreshold = 5',
      output: '44',
      explanation: 'The smallest divisor that satisfies the threshold condition is 44.'
    }
  ],

  testCases: [
    {
      input: '4\n1 2 5 9\n6',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '5\n44 22 33 11 1\n5',
      expectedOutput: '44',
      hidden: false
    },
    {
      input: '1\n10\n1',
      expectedOutput: '10',
      hidden: true
    },
    {
      input: '3\n2 3 5\n6',
      expectedOutput: '2',
      hidden: true
    },
    {
      input: '5\n1000000 1000000 1000000 1000000 1000000\n5',
      expectedOutput: '1000000',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def smallest_divisor(nums, threshold):\n    return 0\n\nn = int(input())\nnums = list(map(int, input().split()))\nthreshold = int(input())\nprint(smallest_divisor(nums, threshold))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int smallestDivisor(int[] nums, int threshold) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int threshold = sc.nextInt();\n            System.out.println(smallestDivisor(nums, threshold));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint smallestDivisor(int* nums, int numsSize, int threshold) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int threshold;\n    if (scanf("%d", &threshold) != 1) return 0;\n    printf("%d\\n", smallestDivisor(nums, n, threshold));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint smallestDivisor(vector<int>& nums, int threshold) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int threshold;\n        cin >> threshold;\n        cout << smallestDivisor(nums, threshold) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-e4',
  title: 'Minimum Eating Speed',
  difficulty: 'Easy',

  description: 'A worker needs to process several piles of items. Given an array piles where piles[i] represents the number of items in the ith pile and an integer h representing the number of hours available, find the minimum integer processing speed k such that all items can be processed within h hours. In one hour, the worker can process at most k items from a single pile.',

  constraints: [
    '1 <= piles.length <= 10^4',
    '1 <= piles[i] <= 10^9',
    'piles.length <= h <= 10^9'
  ],

  examples: [
    {
      input: 'piles = [3, 6, 7, 11]\nh = 8',
      output: '4',
      explanation: 'At a speed of 4 items per hour, all piles can be processed within 8 hours.'
    },
    {
      input: 'piles = [30, 11, 23, 4, 20]\nh = 6',
      output: '23',
      explanation: 'The minimum speed required to finish within 6 hours is 23.'
    }
  ],

  testCases: [
    {
      input: '4\n3 6 7 11\n8',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '5\n30 11 23 4 20\n6',
      expectedOutput: '23',
      hidden: false
    },
    {
      input: '1\n100\n1',
      expectedOutput: '100',
      hidden: true
    },
    {
      input: '3\n5 5 5\n3',
      expectedOutput: '5',
      hidden: true
    },
    {
      input: '5\n1000000000 1000000000 1000000000 1000000000 1000000000\n5',
      expectedOutput: '1000000000',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def minimum_eating_speed(piles, h):\n    return 0\n\nn = int(input())\npiles = list(map(int, input().split()))\nh = int(input())\nprint(minimum_eating_speed(piles, h))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int minimumEatingSpeed(int[] piles, int h) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] piles = new int[n];\n            for (int i = 0; i < n; i++) {\n                piles[i] = sc.nextInt();\n            }\n            int h = sc.nextInt();\n            System.out.println(minimumEatingSpeed(piles, h));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint minimumEatingSpeed(int* piles, int pilesSize, int h) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* piles = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &piles[i]) != 1) return 0;\n    }\n    int h;\n    if (scanf("%d", &h) != 1) return 0;\n    printf("%d\\n", minimumEatingSpeed(piles, n, h));\n    free(piles);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint minimumEatingSpeed(vector<int>& piles, int h) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> piles(n);\n        for (int i = 0; i < n; i++) {\n            cin >> piles[i];\n        }\n        int h;\n        cin >> h;\n        cout << minimumEatingSpeed(piles, h) << "\\n";}\n\n    return 0;\n}'  }
},
{
  id: 'bsoa-e5',
  title: 'Minimum Days to Make Bouquets',
  difficulty: 'Easy',

  description: 'You are given an array bloomDay where bloomDay[i] represents the day the ith flower blooms. You are also given two integers m and k. You need to make exactly m bouquets, and each bouquet must contain k adjacent flowers that have bloomed by a certain day. Return the minimum number of days required to make m bouquets. If it is impossible, return -1.',

  constraints: [
    '1 <= bloomDay.length <= 10^5',
    '1 <= bloomDay[i] <= 10^9',
    '1 <= m <= 10^6',
    '1 <= k <= bloomDay.length'
  ],

  examples: [
    {
      input: 'bloomDay = [1, 10, 3, 10, 2]\nm = 3\nk = 1',
      output: '3',
      explanation: 'By day 3, flowers at indices 0, 2, and 4 have bloomed, allowing 3 bouquets to be made.'
    },
    {
      input: 'bloomDay = [1, 10, 3, 10, 2]\nm = 3\nk = 2',
      output: '-1',
      explanation: 'It is impossible to make 3 bouquets of 2 adjacent flowers.'
    }
  ],

  testCases: [
    {
      input: '5\n1 10 3 10 2\n3\n1',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '5\n1 10 3 10 2\n3\n2',
      expectedOutput: '-1',
      hidden: false
    },
    {
      input: '6\n7 7 7 7 12 7\n2\n3',
      expectedOutput: '12',
      hidden: true
    },
    {
      input: '5\n1000000000 1000000000 1000000000 1000000000 1000000000\n1\n5',
      expectedOutput: '1000000000',
      hidden: true
    },
    {
      input: '4\n1 2 3 4\n2\n2',
      expectedOutput: '4',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def min_days(bloom_day, m, k):\n    return -1\n\nn = int(input())\nbloom_day = list(map(int, input().split()))\nm = int(input())\nk = int(input())\nprint(min_days(bloom_day, m, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int minDays(int[] bloomDay, int m, int k) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] bloomDay = new int[n];\n            for (int i = 0; i < n; i++) {\n                bloomDay[i] = sc.nextInt();\n            }\n            int m = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(minDays(bloomDay, m, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint minDays(int* bloomDay, int bloomDaySize, int m, int k) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* bloomDay = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &bloomDay[i]) != 1) return 0;\n    }\n    int m, k;\n    if (scanf("%d %d", &m, &k) != 2) return 0;\n    printf("%d\\n", minDays(bloomDay, n, m, k));\n    free(bloomDay);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint minDays(vector<int>& bloomDay, int m, int k) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> bloomDay(n);\n        for (int i = 0; i < n; i++) {\n            cin >> bloomDay[i];\n        }\n        int m, k;\n        cin >> m >> k;\n        cout << minDays(bloomDay, m, k) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
// MEDIUM
{
  id: 'bsoa-m1',
  title: 'Koko Eating Bananas',
  difficulty: 'Medium',

  description: 'Koko loves eating bananas. There are n piles of bananas, where the ith pile contains piles[i] bananas. Koko can decide her eating speed k (bananas per hour). Each hour, she chooses one pile and eats up to k bananas from that pile. If the pile contains fewer than k bananas, she finishes the entire pile and waits until the next hour. Given an integer h representing the total hours available, return the minimum integer eating speed required to finish all the bananas within h hours.',

  constraints: [
    '1 <= piles.length <= 10^4',
    '1 <= piles[i] <= 10^9',
    'piles.length <= h <= 10^9'
  ],

  examples: [
    {
      input: 'piles = [3, 6, 7, 11]\nh = 8',
      output: '4',
      explanation: 'At a speed of 4 bananas per hour, Koko can finish all the bananas within 8 hours.'
    },
    {
      input: 'piles = [30, 11, 23, 4, 20]\nh = 5',
      output: '30',
      explanation: 'The minimum speed required to finish all the bananas within 5 hours is 30.'
    }
  ],

  testCases: [
    {
      input: '4\n3 6 7 11\n8',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '5\n30 11 23 4 20\n5',
      expectedOutput: '30',
      hidden: false
    },
    {
      input: '5\n30 11 23 4 20\n6',
      expectedOutput: '23',
      hidden: true
    },
    {
      input: '1\n1000000000\n1',
      expectedOutput: '1000000000',
      hidden: true
    },
    {
      input: '3\n5 5 5\n3',
      expectedOutput: '5',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def min_eating_speed(piles, h):\n    return 0\n\nn = int(input())\npiles = list(map(int, input().split()))\nh = int(input())\nprint(min_eating_speed(piles, h))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int minEatingSpeed(int[] piles, int h) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] piles = new int[n];\n            for (int i = 0; i < n; i++) {\n                piles[i] = sc.nextInt();\n            }\n            int h = sc.nextInt();\n            System.out.println(minEatingSpeed(piles, h));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint minEatingSpeed(int* piles, int pilesSize, int h) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* piles = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &piles[i]) != 1) return 0;\n    }\n    int h;\n    if (scanf("%d", &h) != 1) return 0;\n    printf("%d\\n", minEatingSpeed(piles, n, h));\n    free(piles);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint minEatingSpeed(vector<int>& piles, int h) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> piles(n);\n        for (int i = 0; i < n; i++) {\n            cin >> piles[i];\n        }\n        int h;\n        cin >> h;\n        cout << minEatingSpeed(piles, h) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-m2',
  title: 'Capacity to Ship Packages Within D Days',
  difficulty: 'Medium',

  description: 'A conveyor belt has packages that must be shipped in the given order. You are given an array weights where weights[i] represents the weight of the ith package and an integer days. Find the minimum ship capacity required to ship all the packages within the given number of days. Packages must be shipped in the given order and cannot be split.',

  constraints: [
    '1 <= weights.length <= 5 × 10^4',
    '1 <= weights[i] <= 500',
    '1 <= days <= weights.length'
  ],

  examples: [
    {
      input: 'weights = [1,2,3,4,5,6,7,8,9,10]\ndays = 5',
      output: '15',
      explanation: 'A ship capacity of 15 allows all packages to be shipped within 5 days while preserving their order.'
    },
    {
      input: 'weights = [3,2,2,4,1,4]\ndays = 3',
      output: '6',
      explanation: 'The minimum ship capacity required is 6.'
    }
  ],

  testCases: [
    {
      input: '10\n1 2 3 4 5 6 7 8 9 10\n5',
      expectedOutput: '15',
      hidden: false
    },
    {
      input: '6\n3 2 2 4 1 4\n3',
      expectedOutput: '6',
      hidden: false
    },
    {
      input: '5\n1 2 3 1 1\n4',
      expectedOutput: '3',
      hidden: true
    },
    {
      input: '1\n100\n1',
      expectedOutput: '100',
      hidden: true
    },
    {
      input: '5\n10 10 10 10 10\n5',
      expectedOutput: '10',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def ship_within_days(weights, days):\n    return 0\n\nn = int(input())\nweights = list(map(int, input().split()))\ndays = int(input())\nprint(ship_within_days(weights, days))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int shipWithinDays(int[] weights, int days) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] weights = new int[n];\n            for (int i = 0; i < n; i++) {\n                weights[i] = sc.nextInt();\n            }\n            int days = sc.nextInt();\n            System.out.println(shipWithinDays(weights, days));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint shipWithinDays(int* weights, int weightsSize, int days) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* weights = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &weights[i]) != 1) return 0;\n    }\n    int days;\n    if (scanf("%d", &days) != 1) return 0;\n    printf("%d\\n", shipWithinDays(weights, n, days));\n    free(weights);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint shipWithinDays(vector<int>& weights, int days) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> weights(n);\n        for (int i = 0; i < n; i++) {\n            cin >> weights[i];\n        }\n        int days;\n        cin >> days;\n        cout << shipWithinDays(weights, days) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-m3',
  title: 'Allocate Minimum Number of Pages',
  difficulty: 'Medium',

  description: 'Given an array pages where pages[i] represents the number of pages in the ith book and an integer students representing the number of students, allocate the books such that each student gets at least one book, books are allocated contiguously, and each book is assigned to only one student. Return the minimum possible value of the maximum number of pages assigned to any student. If allocation is not possible, return -1.',

  constraints: [
    '1 <= pages.length <= 10^5',
    '1 <= pages[i] <= 10^6',
    '1 <= students <= 10^5'
  ],

  examples: [
    {
      input: 'pages = [12, 34, 67, 90]\nstudents = 2',
      output: '113',
      explanation: 'One optimal allocation is [12, 34, 67] and [90]. The maximum pages assigned is 113, which is the minimum possible.'
    },
    {
      input: 'pages = [10, 20, 30, 40]\nstudents = 2',
      output: '60',
      explanation: 'Allocate [10, 20, 30] to the first student and [40] to the second. The maximum pages assigned is 60.'
    }
  ],

  testCases: [
    {
      input: '4\n12 34 67 90\n2',
      expectedOutput: '113',
      hidden: false
    },
    {
      input: '4\n10 20 30 40\n2',
      expectedOutput: '60',
      hidden: false
    },
    {
      input: '3\n10 20 30\n4',
      expectedOutput: '-1',
      hidden: true
    },
    {
      input: '5\n10 10 10 10 10\n5',
      expectedOutput: '10',
      hidden: true
    },
    {
      input: '1\n100\n1',
      expectedOutput: '100',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def allocate_pages(pages, students):\n    return -1\n\nn = int(input())\npages = list(map(int, input().split()))\nstudents = int(input())\nprint(allocate_pages(pages, students))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int allocatePages(int[] pages, int students) {\n        return -1;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] pages = new int[n];\n            for (int i = 0; i < n; i++) {\n                pages[i] = sc.nextInt();\n            }\n            int students = sc.nextInt();\n            System.out.println(allocatePages(pages, students));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint allocatePages(int* pages, int pagesSize, int students) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* pages = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &pages[i]) != 1) return 0;\n    }\n    int students;\n    if (scanf("%d", &students) != 1) return 0;\n    printf("%d\\n", allocatePages(pages, n, students));\n    free(pages);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint allocatePages(vector<int>& pages, int students) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> pages(n);\n        for (int i = 0; i < n; i++) {\n            cin >> pages[i];\n        }\n        int students;\n        cin >> students;\n        cout << allocatePages(pages, students) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-m4',
  title: "Painter's Partition Problem",
  difficulty: 'Medium',

  description: 'You are given an array boards where boards[i] represents the length of the ith board and an integer painters representing the number of painters available. Each painter can only paint contiguous boards, and every board must be painted by exactly one painter. All painters work at the same speed. Return the minimum time required to paint all the boards.',

  constraints: [
    '1 <= boards.length <= 10^5',
    '1 <= boards[i] <= 10^6',
    '1 <= painters <= 10^5'
  ],

  examples: [
    {
      input: 'boards = [10, 20, 30, 40]\npainters = 2',
      output: '60',
      explanation: 'One optimal partition is [10, 20, 30] and [40]. The maximum time taken by any painter is 60.'
    },
    {
      input: 'boards = [5, 10, 30, 20, 15]\npainters = 3',
      output: '35',
      explanation: 'An optimal partition is [5, 10], [30], and [20, 15]. The minimum possible maximum workload is 35.'
    }
  ],

  testCases: [
    {
      input: '4\n10 20 30 40\n2',
      expectedOutput: '60',
      hidden: false
    },
    {
      input: '5\n5 10 30 20 15\n3',
      expectedOutput: '35',
      hidden: false
    },
    {
      input: '3\n10 20 30\n1',
      expectedOutput: '60',
      hidden: true
    },
    {
      input: '3\n10 20 30\n3',
      expectedOutput: '30',
      hidden: true
    },
    {
      input: '1\n100\n1',
      expectedOutput: '100',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def painter_partition(boards, painters):\n    return 0\n\nn = int(input())\nboards = list(map(int, input().split()))\npainters = int(input())\nprint(painter_partition(boards, painters))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int painterPartition(int[] boards, int painters) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] boards = new int[n];\n            for (int i = 0; i < n; i++) {\n                boards[i] = sc.nextInt();\n            }\n            int painters = sc.nextInt();\n            System.out.println(painterPartition(boards, painters));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint painterPartition(int* boards, int boardsSize, int painters) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* boards = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &boards[i]) != 1) return 0;\n    }\n    int painters;\n    if (scanf("%d", &painters) != 1) return 0;\n    printf("%d\\n", painterPartition(boards, n, painters));\n    free(boards);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint painterPartition(vector<int>& boards, int painters) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> boards(n);\n        for (int i = 0; i < n; i++) {\n            cin >> boards[i];\n        }\n        int painters;\n        cin >> painters;\n        cout << painterPartition(boards, painters) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-m5',
  title: 'Split Array Largest Sum',
  difficulty: 'Medium',

  description: 'Given an integer array nums and an integer k, split the array into k non-empty contiguous subarrays such that the largest sum among these subarrays is minimized. Return the minimum possible largest subarray sum.',

  constraints: [
    '1 <= nums.length <= 1000',
    '0 <= nums[i] <= 10^6',
    '1 <= k <= nums.length'
  ],

  examples: [
    {
      input: 'nums = [7, 2, 5, 10, 8]\nk = 2',
      output: '18',
      explanation: 'Split the array into [7, 2, 5] and [10, 8]. The largest sum is 18, which is the minimum possible.'
    },
    {
      input: 'nums = [1, 2, 3, 4, 5]\nk = 2',
      output: '9',
      explanation: 'Split the array into [1, 2, 3] and [4, 5]. The largest subarray sum is 9.'
    }
  ],

  testCases: [
    {
      input: '5\n7 2 5 10 8\n2',
      expectedOutput: '18',
      hidden: false
    },
    {
      input: '5\n1 2 3 4 5\n2',
      expectedOutput: '9',
      hidden: false
    },
    {
      input: '4\n1 4 4 1\n3',
      expectedOutput: '4',
      hidden: true
    },
    {
      input: '1\n100\n1',
      expectedOutput: '100',
      hidden: true
    },
    {
      input: '5\n10 10 10 10 10\n5',
      expectedOutput: '10',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def split_array(nums, k):\n    return 0\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(split_array(nums, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int splitArray(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            System.out.println(splitArray(nums, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint splitArray(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int k;\n    if (scanf("%d", &k) != 1) return 0;\n    printf("%d\\n", splitArray(nums, n, k));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint splitArray(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int k;\n        cin >> k;\n        cout << splitArray(nums, k) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
// HARD
{
  id: 'bsoa-h1',
  title: 'Aggressive Cows',
  difficulty: 'Hard',

  description: 'You are given the positions of stalls along a straight line and an integer cows representing the number of cows to be placed. Place the cows in the stalls such that the minimum distance between any two cows is as large as possible. Return the largest possible minimum distance.',

  constraints: [
    '2 <= stalls.length <= 10^5',
    '1 <= stalls[i] <= 10^9',
    '2 <= cows <= stalls.length'
  ],

  examples: [
    {
      input: 'stalls = [1, 2, 4, 8, 9]\ncows = 3',
      output: '3',
      explanation: 'Place the cows at positions 1, 4, and 8. The minimum distance between any two cows is 3, which is the maximum possible.'
    },
    {
      input: 'stalls = [10, 1, 2, 7, 5]\ncows = 3',
      output: '4',
      explanation: 'After sorting the stalls to [1, 2, 5, 7, 10], place the cows at positions 1, 5, and 10. The minimum distance is 4.'
    }
  ],

  testCases: [
    {
      input: '5\n1 2 4 8 9\n3',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '5\n10 1 2 7 5\n3',
      expectedOutput: '4',
      hidden: false
    },
    {
      input: '2\n1 100\n2',
      expectedOutput: '99',
      hidden: true
    },
    {
      input: '5\n1 2 3 4 5\n5',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '6\n1 3 7 9 13 15\n4',
      expectedOutput: '4',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def aggressive_cows(stalls, cows):\n    return 0\n\nn = int(input())\nstalls = list(map(int, input().split()))\ncows = int(input())\nprint(aggressive_cows(stalls, cows))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int aggressiveCows(int[] stalls, int cows) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stalls = new int[n];\n            for (int i = 0; i < n; i++) {\n                stalls[i] = sc.nextInt();\n            }\n            int cows = sc.nextInt();\n            System.out.println(aggressiveCows(stalls, cows));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint aggressiveCows(int* stalls, int stallsSize, int cows) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stalls = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stalls[i]) != 1) return 0;\n    }\n    int cows;\n    if (scanf("%d", &cows) != 1) return 0;\n    printf("%d\\n", aggressiveCows(stalls, n, cows));\n    free(stalls);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint aggressiveCows(vector<int>& stalls, int cows) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> stalls(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stalls[i];\n        }\n        int cows;\n        cin >> cows;\n        cout << aggressiveCows(stalls, cows) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-h2',
  title: 'Magnetic Force Between Two Balls',
  difficulty: 'Hard',

  description: 'You are given an array position where position[i] represents the position of the ith basket and an integer m representing the number of balls to place. Place the balls into the baskets such that the minimum magnetic force between any two balls is maximized. Return the largest possible minimum magnetic force.',

  constraints: [
    '2 <= position.length <= 10^5',
    '1 <= position[i] <= 10^9',
    '2 <= m <= position.length'
  ],

  examples: [
    {
      input: 'position = [1, 2, 3, 4, 7]\nm = 3',
      output: '3',
      explanation: 'Place the balls at positions 1, 4, and 7. The minimum distance between any two balls is 3.'
    },
    {
      input: 'position = [5, 4, 3, 2, 1, 1000000000]\nm = 2',
      output: '999999999',
      explanation: 'Place the balls at positions 1 and 1000000000 to maximize the minimum distance.'
    }
  ],

  testCases: [
    {
      input: '5\n1 2 3 4 7\n3',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '6\n5 4 3 2 1 1000000000\n2',
      expectedOutput: '999999999',
      hidden: false
    },
    {
      input: '2\n1 2\n2',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '5\n10 20 30 40 50\n5',
      expectedOutput: '10',
      hidden: true
    },
    {
      input: '6\n1 3 6 10 15 21\n4',
      expectedOutput: '5',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def max_distance(position, m):\n    return 0\n\nn = int(input())\nposition = list(map(int, input().split()))\nm = int(input())\nprint(max_distance(position, m))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int maxDistance(int[] position, int m) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] position = new int[n];\n            for (int i = 0; i < n; i++) {\n                position[i] = sc.nextInt();\n            }\n            int m = sc.nextInt();\n            System.out.println(maxDistance(position, m));\n        }\n    }\
}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxDistance(int* position, int positionSize, int m) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* position = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &position[i]) != 1) return 0;\n    }\n    int m;\n    if (scanf("%d", &m) != 1) return 0;\n    printf("%d\\n", maxDistance(position, n, m));\n    free(position);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint maxDistance(vector<int>& position, int m) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> position(n);\n        for (int i = 0; i < n; i++) {\n            cin >> position[i];\n        }\n        int m;\n        cin >> m;\n        cout << maxDistance(position, m) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-h3',
  title: 'Minimum Time to Complete Trips',
  difficulty: 'Hard',

  description: 'You are given an array time where time[i] represents the time taken by the ith bus to complete one trip. Each bus can perform multiple trips independently. Given an integer totalTrips, return the minimum time required for all buses combined to complete at least totalTrips trips.',

  constraints: [
    '1 <= time.length <= 10^5',
    '1 <= time[i] <= 10^7',
    '1 <= totalTrips <= 10^7'
  ],

  examples: [
    {
      input: 'time = [1, 2, 3]\ntotalTrips = 5',
      output: '3',
      explanation: 'In 3 units of time, the buses complete 3 + 1 + 1 = 5 trips, which is the minimum possible.'
    },
    {
      input: 'time = [2]\ntotalTrips = 1',
      output: '2',
      explanation: 'The single bus completes one trip in 2 units of time.'
    }
  ],

  testCases: [
    {
      input: '3\n1 2 3\n5',
      expectedOutput: '3',
      hidden: false
    },
    {
      input: '1\n2\n1',
      expectedOutput: '2',
      hidden: false
    },
    {
      input: '2\n2 3\n10',
      expectedOutput: '12',
      hidden: true
    },
    {
      input: '3\n5 10 10\n9',
      expectedOutput: '25',
      hidden: true
    },
    {
      input: '4\n1 1 1 1\n100',
      expectedOutput: '25',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def minimum_time(time, total_trips):\n    return 0\n\nn = int(input())\ntime = list(map(int, input().split()))\ntotal_trips = int(input())\nprint(minimum_time(time, total_trips))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static long minimumTime(int[] time, int totalTrips) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] time = new int[n];\n            for (int i = 0; i < n; i++) {\n                time[i] = sc.nextInt();\n            }\n            int totalTrips = sc.nextInt();\n            System.out.println(minimumTime(time, totalTrips));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nlong long minimumTime(int* time, int timeSize, int totalTrips) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* time = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &time[i]) != 1) return 0;\n    }\n    int totalTrips;\n    if (scanf("%d", &totalTrips) != 1) return 0;\n    printf("%lld\\n", minimumTime(time, n, totalTrips));\n    free(time);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nlong long minimumTime(vector<int>& time, int totalTrips) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> time(n);\n        for (int i = 0; i < n; i++) {\n            cin >> time[i];\n        }\n        int totalTrips;\n        cin >> totalTrips;\n        cout << minimumTime(time, totalTrips) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-h4',
  title: 'Minimize Maximum Distance Between Gas Stations',
  difficulty: 'Hard',

  description: 'You are given a sorted array stations where stations[i] represents the position of the ith gas station along a highway. You can build exactly k additional gas stations at any positions along the highway. Return the minimum possible value of the maximum distance between any two adjacent gas stations after adding the new stations. Your answer will be considered correct if it is within 10⁻⁶ of the actual answer.',

  constraints: [
    '2 <= stations.length <= 2000',
    '0 <= stations[i] <= 10^8',
    'stations is sorted in strictly increasing order',
    '1 <= k <= 10^6'
  ],

  examples: [
    {
      input: 'stations = [1, 2, 3, 4, 5]\nk = 4',
      output: '0.5',
      explanation: 'Adding one station between every pair of adjacent stations reduces the maximum distance to 0.5.'
    },
    {
      input: 'stations = [1, 10]\nk = 1',
      output: '4.5',
      explanation: 'Adding one station at position 5.5 divides the distance into two equal segments of length 4.5.'
    }
  ],

  testCases: [
    {
      input: '5\n1 2 3 4 5\n4',
      expectedOutput: '0.500000',
      hidden: false
    },
    {
      input: '2\n1 10\n1',
      expectedOutput: '4.500000',
      hidden: false
    },
    {
      input: '2\n0 100\n9',
      expectedOutput: '10.000000',
      hidden: true
    },
    {
      input: '3\n1 5 9\n2',
      expectedOutput: '2.000000',
      hidden: true
    },
    {
      input: '4\n1 6 11 16\n3',
      expectedOutput: '2.500000',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def minimize_max_distance(stations, k):\n    return 0.0\n\nn = int(input())\nstations = list(map(int, input().split()))\nk = int(input())\nprint(f"{minimize_max_distance(stations, k):.6f}")',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static double minimizeMaxDistance(int[] stations, int k) {\n        return 0.0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] stations = new int[n];\n            for (int i = 0; i < n; i++) {\n                stations[i] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            System.out.printf("%.6f\\n", minimizeMaxDistance(stations, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\ndouble minimizeMaxDistance(int* stations, int stationsSize, int k) {\n    return 0.0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* stations = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &stations[i]) != 1) return 0;\n    }\n    int k;\n    if (scanf("%d", &k) != 1) return 0;\n    printf("%.6f\\n", minimizeMaxDistance(stations, n, k));\n    free(stations);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n#include <iomanip>\n\nusing namespace std;\n\ndouble minimizeMaxDistance(vector<int>& stations, int k) {\n    return 0.0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> stations(n);\n        for (int i = 0; i < n; i++) {\n            cin >> stations[i];\n        }\n        int k;\n        cin >> k;\n        cout << fixed << setprecision(6) << minimizeMaxDistance(stations, k) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
{
  id: 'bsoa-h5',
  title: 'K-th Smallest Pair Distance',
  difficulty: 'Hard',

  description: 'Given an integer array nums and an integer k, return the k-th smallest absolute difference among all possible pairs (i, j), where i < j. The absolute difference of a pair is |nums[i] - nums[j]|.',

  constraints: [
    '2 <= nums.length <= 10^4',
    '0 <= nums[i] <= 10^6',
    '1 <= k <= nums.length × (nums.length - 1) / 2'
  ],

  examples: [
    {
      input: 'nums = [1, 3, 1]\nk = 1',
      output: '0',
      explanation: 'The pair distances are [0, 2, 2]. The 1st smallest distance is 0.'
    },
    {
      input: 'nums = [1, 6, 1]\nk = 3',
      output: '5',
      explanation: 'The pair distances are [0, 5, 5]. The 3rd smallest distance is 5.'
    }
  ],

  testCases: [
    {
      input: '3\n1 3 1\n1',
      expectedOutput: '0',
      hidden: false
    },
    {
      input: '3\n1 6 1\n3',
      expectedOutput: '5',
      hidden: false
    },
    {
      input: '2\n1 1000000\n1',
      expectedOutput: '999999',
      hidden: true
    },
    {
      input: '5\n1 2 3 4 5\n4',
      expectedOutput: '1',
      hidden: true
    },
    {
      input: '4\n1 1 1 1\n6',
      expectedOutput: '0',
      hidden: true
    }
  ],

  starterCode: {
    python: 'def smallest_distance_pair(nums, k):\n    return 0\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(smallest_distance_pair(nums, k))',

    java: 'import java.util.*;\n\npublic class Solution {\n    public static int smallestDistancePair(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if (sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for (int i = 0; i < n; i++) {\n                nums[i] = sc.nextInt();\n            }\n            int k = sc.nextInt();\n            System.out.println(smallestDistancePair(nums, k));\n        }\n    }\n}',

    c: '#include <stdio.h>\n#include <stdlib.h>\n\nint smallestDistancePair(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) {\n        if (scanf("%d", &nums[i]) != 1) return 0;\n    }\n    int k;\n    if (scanf("%d", &k) != 1) return 0;\n    printf("%d\\n", smallestDistancePair(nums, n, k));\n    free(nums);\n    return 0;\n}',

    cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint smallestDistancePair(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n\n    int n;\n    if (cin >> n) {\n        vector<int> nums(n);\n        for (int i = 0; i < n; i++) {\n            cin >> nums[i];\n        }\n        int k;\n        cin >> k;\n        cout << smallestDistancePair(nums, k) << "\\n";\n    }\n\n    return 0;\n}'
  }
},
]