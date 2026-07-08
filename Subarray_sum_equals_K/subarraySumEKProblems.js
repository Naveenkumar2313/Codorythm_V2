export const subarraySumProblems = [
  // --- EASY ---
  {
    id: 'sak-e1',
    title: 'Subarray Sum Equals K',
    difficulty: 'Easy',
    description: 'Given an integer array `nums` and an integer `k`, return the total number of contiguous subarrays whose sum equals `k`.',
    constraints: [
      '1 <= nums.length <= 2 × 10^4',
      '-1000 <= nums[i] <= 1000',
      '-10^7 <= k <= 10^7'
    ],
    examples: [
      {
        input: 'nums = [1,1,1], k = 2',
        output: '2',
        explanation: 'The subarrays [1,1] at indices (0,1) and (1,2) have sum 2.'
      },
      {
        input: 'nums = [1,2,3], k = 3',
        output: '2',
        explanation: 'The subarrays [1,2] and [3] have sum 3.'
      }
    ],
    testCases: [
      {
        input: '3\n1 1 1\n2',
        expectedOutput: '2',
        hidden: false
      },
      {
        input: '3\n1 2 3\n3',
        expectedOutput: '2',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def subarray_sum(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(subarray_sum(nums, k))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int subarraySum(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i = 0; i < n; i++) nums[i] = sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(subarraySum(nums, k));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint subarraySum(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n", subarraySum(nums,n,k));\n    free(nums);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint subarraySum(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<subarraySum(nums,k)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'sak-e2',
    title: 'Count Zero Sum Subarrays',
    difficulty: 'Easy',
    description: 'Given an integer array `nums`, return the total number of contiguous subarrays whose sum is equal to `0`.',
    constraints: [
      '1 <= nums.length <= 2 × 10^4',
      '-1000 <= nums[i] <= 1000'
    ],
    examples: [
      {
        input: 'nums = [1,-1,1,-1]',
        output: '4',
        explanation: 'There are four subarrays having sum equal to 0.'
      },
      {
        input: 'nums = [0,0]',
        output: '3',
        explanation: 'The subarrays are [0], [0] and [0,0].'
      }
    ],
    testCases: [
      {
        input: '4\n1 -1 1 -1',
        expectedOutput: '4',
        hidden: false
      },
      {
        input: '2\n0 0',
        expectedOutput: '3',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def zero_sum_subarrays(nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nprint(zero_sum_subarrays(nums))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int zeroSumSubarrays(int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            System.out.println(zeroSumSubarrays(nums));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint zeroSumSubarrays(int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    printf("%d\\n", zeroSumSubarrays(nums,n));\n    free(nums);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint zeroSumSubarrays(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        cout<<zeroSumSubarrays(nums)<<"\\n";\n    }\n    return 0;\n}'
    }
  },
    {
    id: 'sak-e3',
    title: 'Single Element Equals K',
    difficulty: 'Easy',
    description: 'Given an integer array `nums` and an integer `k`, return the number of elements in the array that are individually equal to `k`.',
    constraints: [
      '1 <= nums.length <= 10^4',
      '-10^4 <= nums[i], k <= 10^4'
    ],
    examples: [
      {
        input: 'nums = [2,3,2,5], k = 2',
        output: '2',
        explanation: 'The value 2 appears twice.'
      },
      {
        input: 'nums = [1,4,6], k = 5',
        output: '0',
        explanation: 'No element is equal to 5.'
      }
    ],
    testCases: [
      {
        input: '4\n2 3 2 5\n2',
        expectedOutput: '2',
        hidden: false
      },
      {
        input: '3\n1 4 6\n5',
        expectedOutput: '0',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def count_equal_k(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(count_equal_k(nums, k))',
      java: 'import java.util.*;\n\npublic class Main {\n    public static int countEqualK(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(countEqualK(nums, k));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countEqualK(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n", countEqualK(nums,n,k));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint countEqualK(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<countEqualK(nums,k)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'sak-e4',
    title: 'Longest Subarray with Sum K',
    difficulty: 'Easy',
    description: 'Given an integer array `nums` and an integer `k`, return the length of the longest contiguous subarray whose sum equals `k`.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^4 <= nums[i] <= 10^4',
      '-10^9 <= k <= 10^9'
    ],
    examples: [
      {
        input: 'nums = [1,-1,5,-2,3], k = 3',
        output: '4',
        explanation: 'The longest subarray is [1,-1,5,-2].'
      },
      {
        input: 'nums = [-2,-1,2,1], k = 1',
        output: '2',
        explanation: 'The longest subarray is [-1,2].'
      }
    ],
    testCases: [
      {
        input: '5\n1 -1 5 -2 3\n3',
        expectedOutput: '4',
        hidden: false
      },
      {
        input: '4\n-2 -1 2 1\n1',
        expectedOutput: '2',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def longest_subarray(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(longest_subarray(nums, k))',
      java: 'import java.util.*;\n\npublic class Main {\n    public static int longestSubarray(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(longestSubarray(nums, k));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint longestSubarray(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n", longestSubarray(nums,n,k));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint longestSubarray(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<longestSubarray(nums,k)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'sak-e5',
    title: 'Count Subarrays Divisible by K',
    difficulty: 'Easy',
    description: 'Given an integer array `nums` and an integer `k`, return the number of contiguous subarrays whose sum is divisible by `k`.',
    constraints: [
      '1 <= nums.length <= 3 × 10^4',
      '-10^4 <= nums[i] <= 10^4',
      '2 <= k <= 10^4'
    ],
    examples: [
      {
        input: 'nums = [4,5,0,-2,-3,1], k = 5',
        output: '7',
        explanation: 'There are 7 subarrays whose sum is divisible by 5.'
      },
      {
        input: 'nums = [5], k = 9',
        output: '0',
        explanation: 'The only subarray has sum 5, which is not divisible by 9.'
      }
    ],
    testCases: [
      {
        input: '6\n4 5 0 -2 -3 1\n5',
        expectedOutput: '7',
        hidden: false
      },
      {
        input: '1\n5\n9',
        expectedOutput: '0',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def subarrays_divisible_by_k(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(subarrays_divisible_by_k(nums, k))',
      java: 'import java.util.*;\n\npublic class Main {\n    public static int subarraysDivByK(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(subarraysDivByK(nums, k));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint subarraysDivByK(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n", subarraysDivByK(nums,n,k));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint subarraysDivByK(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<subarraysDivByK(nums,k)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  // --- MEDIUM ---
    {
    id: 'sak-m1',
    title: 'Binary Subarrays With Sum',
    difficulty: 'Medium',
    description: 'Given a binary array `nums` and an integer `goal`, return the number of non-empty contiguous subarrays with a sum equal to `goal`.',
    constraints: [
      '1 <= nums.length <= 3 × 10^4',
      'nums[i] is either 0 or 1',
      '0 <= goal <= nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,0,1,0,1], goal = 2',
        output: '4',
        explanation: 'The four subarrays are [1,0,1], [1,0,1,0], [0,1,0,1], and [1,0,1].'
      },
      {
        input: 'nums = [0,0,0,0], goal = 0',
        output: '10',
        explanation: 'Every possible subarray has sum 0.'
      }
    ],
    testCases: [
      {
        input: '5\n1 0 1 0 1\n2',
        expectedOutput: '4',
        hidden: false
      },
      {
        input: '4\n0 0 0 0\n0',
        expectedOutput: '10',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def binary_subarrays_with_sum(nums, goal):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ngoal = int(input())\nprint(binary_subarrays_with_sum(nums, goal))',
      java: 'import java.util.*;\n\npublic class Main {\n    public static int binarySubarraysWithSum(int[] nums, int goal) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int goal = sc.nextInt();\n            System.out.println(binarySubarraysWithSum(nums, goal));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint binarySubarraysWithSum(int* nums, int numsSize, int goal) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int goal;\n    scanf("%d",&goal);\n    printf("%d\\n", binarySubarraysWithSum(nums,n,goal));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint binarySubarraysWithSum(vector<int>& nums, int goal) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int goal;\n        cin>>goal;\n        cout<<binarySubarraysWithSum(nums,goal)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'sak-m2',
    title: 'Maximum Size Subarray Sum Equals K',
    difficulty: 'Medium',
    description: 'Given an integer array `nums` and an integer `k`, return the length of the longest contiguous subarray whose sum equals `k`.',
    constraints: [
      '1 <= nums.length <= 2 × 10^5',
      '-10^4 <= nums[i] <= 10^4',
      '-10^9 <= k <= 10^9'
    ],
    examples: [
      {
        input: 'nums = [1,-1,5,-2,3], k = 3',
        output: '4',
        explanation: 'The longest subarray is [1,-1,5,-2].'
      },
      {
        input: 'nums = [-2,-1,2,1], k = 1',
        output: '2',
        explanation: 'The longest subarray is [-1,2].'
      }
    ],
    testCases: [
      {
        input: '5\n1 -1 5 -2 3\n3',
        expectedOutput: '4',
        hidden: false
      },
      {
        input: '4\n-2 -1 2 1\n1',
        expectedOutput: '2',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def max_subarray_len(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(max_subarray_len(nums, k))',
      java: 'import java.util.*;\n\npublic class Main {\n    public static int maxSubarrayLen(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(maxSubarrayLen(nums, k));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint maxSubarrayLen(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n", maxSubarrayLen(nums,n,k));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint maxSubarrayLen(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<maxSubarrayLen(nums,k)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'sak-m3',
    title: 'Count Number of Nice Subarrays',
    difficulty: 'Medium',
    description: 'Given an integer array `nums` and an integer `k`, return the number of contiguous subarrays containing exactly `k` odd numbers.',
    constraints: [
      '1 <= nums.length <= 5 × 10^4',
      '1 <= nums[i] <= 10^5',
      '1 <= k <= nums.length'
    ],
    examples: [
      {
        input: 'nums = [1,1,2,1,1], k = 3',
        output: '2',
        explanation: 'The two nice subarrays are [1,1,2,1] and [1,2,1,1].'
      },
      {
        input: 'nums = [2,4,6], k = 1',
        output: '0',
        explanation: 'There are no odd numbers in the array.'
      }
    ],
    testCases: [
      {
        input: '5\n1 1 2 1 1\n3',
        expectedOutput: '2',
        hidden: false
      },
      {
        input: '3\n2 4 6\n1',
        expectedOutput: '0',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def number_of_subarrays(nums, k):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nk = int(input())\nprint(number_of_subarrays(nums, k))',
      java: 'import java.util.*;\n\npublic class Main {\n    public static int numberOfSubarrays(int[] nums, int k) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k = sc.nextInt();\n            System.out.println(numberOfSubarrays(nums, k));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint numberOfSubarrays(int* nums, int numsSize, int k) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n", numberOfSubarrays(nums,n,k));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint numberOfSubarrays(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<numberOfSubarrays(nums,k)<<"\\n";\n    }\n    return 0;\n}'
    }
  },
    {
    id: 'sak-m4',
    title: 'Minimum Size Subarray Sum',
    difficulty: 'Medium',
    description: 'Given an array of positive integers `nums` and a positive integer `target`, return the minimum length of a contiguous subarray whose sum is greater than or equal to `target`. If no such subarray exists, return `0`.',
    constraints: [
      '1 <= target <= 10^9',
      '1 <= nums.length <= 10^5',
      '1 <= nums[i] <= 10^5'
    ],
    examples: [
      {
        input: 'target = 7, nums = [2,3,1,2,4,3]',
        output: '2',
        explanation: 'The subarray [4,3] has the minimum length under the problem constraint.'
      },
      {
        input: 'target = 4, nums = [1,4,4]',
        output: '1',
        explanation: 'The subarray [4] itself satisfies the condition.'
      }
    ],
    testCases: [
      {
        input: '6\n2 3 1 2 4 3\n7',
        expectedOutput: '2',
        hidden: false
      },
      {
        input: '3\n1 4 4\n4',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def min_subarray_len(target, nums):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\ntarget = int(input())\nprint(min_subarray_len(target, nums))',
      java: 'import java.util.*;\n\npublic class Main {\n    public static int minSubarrayLen(int target, int[] nums) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int target = sc.nextInt();\n            System.out.println(minSubarrayLen(target, nums));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint minSubarrayLen(int target, int* nums, int numsSize) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int target;\n    scanf("%d",&target);\n    printf("%d\\n", minSubarrayLen(target, nums, n));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint minSubarrayLen(int target, vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int target;\n        cin>>target;\n        cout<<minSubarrayLen(target, nums)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'sak-m5',
    title: 'Make Sum Divisible by P',
    difficulty: 'Medium',
    description: 'Given an array `nums` and an integer `p`, remove the shortest contiguous subarray so that the sum of the remaining elements is divisible by `p`. Return the length of the shortest subarray to remove, or `-1` if it is impossible.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '1 <= nums[i] <= 10^9',
      '1 <= p <= 10^9'
    ],
    examples: [
      {
        input: 'nums = [3,1,4,2], p = 6',
        output: '1',
        explanation: 'Removing [4] makes the remaining sum divisible by 6.'
      },
      {
        input: 'nums = [6,3,5,2], p = 9',
        output: '2',
        explanation: 'Removing [5,2] makes the remaining sum divisible by 9.'
      }
    ],
    testCases: [
      {
        input: '4\n3 1 4 2\n6',
        expectedOutput: '1',
        hidden: false
      },
      {
        input: '4\n6 3 5 2\n9',
        expectedOutput: '2',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def min_subarray(nums, p):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\np = int(input())\nprint(min_subarray(nums, p))',
      java: 'import java.util.*;\n\npublic class Main {\n    public static int minSubarray(int[] nums, int p) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int p = sc.nextInt();\n            System.out.println(minSubarray(nums, p));\n        }\n    }\n}',
      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint minSubarray(int* nums, int numsSize, int p) {\n    return -1;\n}\n\nint main() {\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int p;\n    scanf("%d",&p);\n    printf("%d\\n", minSubarray(nums,n,p));\n    free(nums);\n    return 0;\n}',
      cpp: '#include <iostream>\n#include <vector>\n\nusing namespace std;\n\nint minSubarray(vector<int>& nums, int p) {\n    return -1;\n}\n\nint main() {\n    ios_base::sync_with_stdio(false);\n    cin.tie(NULL);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int p;\n        cin>>p;\n        cout<<minSubarray(nums,p)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  // --- HARD ---
    {
    id: 'sak-h1',
    title: 'Count of Range Sum',
    difficulty: 'Hard',
    description: 'Given an integer array `nums` and two integers `lower` and `upper`, return the number of range sums that lie in the inclusive range [lower, upper]. A range sum is defined as the sum of elements between two indices `i` and `j` (i ≤ j).',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-2^31 <= nums[i] <= 2^31-1',
      '-10^5 <= lower <= upper <= 10^5'
    ],
    examples: [
      {
        input: 'nums = [-2,5,-1], lower = -2, upper = 2',
        output: '3',
        explanation: 'The valid range sums are [-2], [-1], and [2].'
      },
      {
        input: 'nums = [0], lower = 0, upper = 0',
        output: '1',
        explanation: 'The only range sum is 0.'
      }
    ],
    testCases: [
      {
        input: '3\n-2 5 -1\n-2 2',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: '1\n0\n0 0',
        expectedOutput: '1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def count_range_sum(nums, lower, upper):\n    pass\n\nn = int(input())\nnums = list(map(int, input().split()))\nlower, upper = map(int, input().split())\nprint(count_range_sum(nums, lower, upper))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int countRangeSum(int[] nums, int lower, int upper) {\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(sc.hasNextInt()) {\n            int n = sc.nextInt();\n            int[] nums = new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int lower = sc.nextInt();\n            int upper = sc.nextInt();\n            System.out.println(countRangeSum(nums, lower, upper));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint countRangeSum(int* nums, int numsSize, int lower, int upper){\n    return 0;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(n*sizeof(int));\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int lower,upper;\n    scanf("%d %d",&lower,&upper);\n    printf("%d\\n",countRangeSum(nums,n,lower,upper));\n    free(nums);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint countRangeSum(vector<int>& nums,int lower,int upper){\n    return 0;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int lower,upper;\n        cin>>lower>>upper;\n        cout<<countRangeSum(nums,lower,upper)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'sak-h2',
    title: 'Shortest Subarray with Sum at Least K',
    difficulty: 'Hard',
    description: 'Given an integer array `nums` and an integer `k`, return the length of the shortest non-empty subarray whose sum is at least `k`. Return `-1` if no such subarray exists.',
    constraints: [
      '1 <= nums.length <= 10^5',
      '-10^5 <= nums[i] <= 10^5',
      '1 <= k <= 10^9'
    ],
    examples: [
      {
        input: 'nums = [2,-1,2], k = 3',
        output: '3',
        explanation: 'The entire array has sum 3.'
      },
      {
        input: 'nums = [1,2], k = 4',
        output: '-1',
        explanation: 'No valid subarray exists.'
      }
    ],
    testCases: [
      {
        input: '3\n2 -1 2\n3',
        expectedOutput: '3',
        hidden: false
      },
      {
        input: '2\n1 2\n4',
        expectedOutput: '-1',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def shortest_subarray(nums, k):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nk=int(input())\nprint(shortest_subarray(nums,k))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int shortestSubarray(int[] nums,int k){\n        return -1;\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] nums=new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k=sc.nextInt();\n            System.out.println(shortestSubarray(nums,k));\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nint shortestSubarray(int* nums,int numsSize,int k){\n    return -1;\n}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(sizeof(int)*n);\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    printf("%d\\n",shortestSubarray(nums,n,k));\n    free(nums);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nint shortestSubarray(vector<int>& nums,int k){\n    return -1;\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        cout<<shortestSubarray(nums,k)<<"\\n";\n    }\n    return 0;\n}'
    }
  },

  {
    id: 'sak-h3',
    title: 'Maximum Sum of 3 Non-Overlapping Subarrays',
    difficulty: 'Hard',
    description: 'Given an integer array `nums` and an integer `k`, find three non-overlapping subarrays of length `k` having the maximum total sum. Return their starting indices.',
    constraints: [
      '1 <= nums.length <= 2 × 10^4',
      '1 <= nums[i] < 2^16',
      '1 <= k <= floor(nums.length / 3)'
    ],
    examples: [
      {
        input: 'nums = [1,2,1,2,6,7,5,1], k = 2',
        output: '[0,3,5]',
        explanation: 'The three chosen subarrays have the maximum total sum.'
      },
      {
        input: 'nums = [1,2,1,2,1,2,1,2,1], k = 2',
        output: '[0,2,4]',
        explanation: 'This is the lexicographically smallest optimal answer.'
      }
    ],
    testCases: [
      {
        input: '8\n1 2 1 2 6 7 5 1\n2',
        expectedOutput: '0 3 5',
        hidden: false
      },
      {
        input: '9\n1 2 1 2 1 2 1 2 1\n2',
        expectedOutput: '0 2 4',
        hidden: false
      }
    ],
    starterCode: {
      python: 'def max_sum_three_subarrays(nums,k):\n    pass\n\nn=int(input())\nnums=list(map(int,input().split()))\nk=int(input())\nprint(*max_sum_three_subarrays(nums,k))',

      java: 'import java.util.*;\n\npublic class Main {\n    public static int[] maxSumOfThreeSubarrays(int[] nums,int k){\n        return new int[3];\n    }\n\n    public static void main(String[] args){\n        Scanner sc=new Scanner(System.in);\n        if(sc.hasNextInt()){\n            int n=sc.nextInt();\n            int[] nums=new int[n];\n            for(int i=0;i<n;i++) nums[i]=sc.nextInt();\n            int k=sc.nextInt();\n            int[] ans=maxSumOfThreeSubarrays(nums,k);\n            System.out.println(ans[0]+" "+ans[1]+" "+ans[2]);\n        }\n    }\n}',

      c: '#include <stdio.h>\n#include <stdlib.h>\n\nvoid maxSumOfThreeSubarrays(int* nums,int numsSize,int k,int* ans){}\n\nint main(){\n    int n;\n    if(scanf("%d",&n)!=1) return 0;\n    int* nums=(int*)malloc(sizeof(int)*n);\n    for(int i=0;i<n;i++) scanf("%d",&nums[i]);\n    int k;\n    scanf("%d",&k);\n    int ans[3]={0};\n    maxSumOfThreeSubarrays(nums,n,k,ans);\n    printf("%d %d %d\\n",ans[0],ans[1],ans[2]);\n    free(nums);\n    return 0;\n}',

      cpp: '#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> maxSumOfThreeSubarrays(vector<int>& nums,int k){\n    return {0,0,0};\n}\n\nint main(){\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    int n;\n    if(cin>>n){\n        vector<int> nums(n);\n        for(int i=0;i<n;i++) cin>>nums[i];\n        int k;\n        cin>>k;\n        vector<int> ans=maxSumOfThreeSubarrays(nums,k);\n        cout<<ans[0]<<" "<<ans[1]<<" "<<ans[2]<<"\\n";\n    }\n    return 0;\n}'
    }
  }

];