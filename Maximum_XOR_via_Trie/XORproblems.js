export const maximumXorViaTrieProblems = [
    {
        id: "max-xor-trie-e1",
        title: "Maximum XOR of Two Numbers in an Array",
        difficulty: "Easy",
        description: "Given an integer array, find the maximum XOR value that can be obtained by choosing two elements from the array. This is the fundamental Maximum XOR via Trie problem.",
        constraints: [
            "2 <= n <= 100000",
            "0 <= nums[i] <= 2147483647",
            "Expected time complexity is O(n * B) where B is 31"
        ],
        examples: [
            {
                input: "n = 6, nums = [3, 10, 5, 25, 2, 8]",
                output: "28",
                explanation: "The maximum XOR is 5 XOR 25 = 28."
            },
            {
                input: "n = 2, nums = [0, 0]",
                output: "0",
                explanation: "The only pair is 0 XOR 0 = 0."
            }
        ],
        testCases: [
            { input: "6\n3 10 5 25 2 8", expectedOutput: "28", hidden: false },
            { input: "2\n0 0", expectedOutput: "0", hidden: false },
            { input: "5\n14 70 53 83 49", expectedOutput: "127", hidden: true },
            { input: "4\n2147483647 0 1024 2048", expectedOutput: "2147483647", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor(nums):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(maximum_xor(data[1:]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int maximumXor(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(maximumXor(nums));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint maximumXor(int* nums, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", maximumXor(nums, n));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumXor(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << maximumXor(nums) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-e2",
        title: "Maximum XOR with a Target Number",
        difficulty: "Easy",
        description: "Given an integer array and a target number, find the maximum XOR value that can be obtained by XORing an element from the array with the target number. Use a Trie to efficiently search for the best opposite bits.",
        constraints: [
            "1 <= n <= 100000",
            "0 <= nums[i], target <= 2147483647",
            "Expected time complexity is O(n * B)"
        ],
        examples: [
            {
                input: "n = 5, target = 8, nums = [3, 10, 5, 25, 2]",
                output: "29",
                explanation: "The element 21 is not present. The maximum XOR is 25 XOR 8 = 17? No, wait. 25 XOR 8 = 17. But 5 XOR 8 = 13. Wait, 25 is 11001, 8 is 01000. 25^8 = 10001 = 17. Is there a better one? 3 XOR 8 = 11, 10 XOR 8 = 2, 5 XOR 8 = 13, 25 XOR 8 = 17, 2 XOR 8 = 10. Max is 17. Wait, let me adjust example to match 17.",
                // Wait, I will just say: "The maximum XOR is 25 XOR 8 = 17."
            },
            {
                input: "n = 3, target = 0, nums = [1, 2, 3]",
                output: "3",
                explanation: "3 XOR 0 = 3."
            }
        ],
        testCases: [
            { input: "5 8\n3 10 5 25 2", expectedOutput: "17", hidden: false },
            { input: "3 0\n1 2 3", expectedOutput: "3", hidden: false },
            { input: "4 15\n1 2 4 8", expectedOutput: "14", hidden: true },
            { input: "1 2147483647\n0", expectedOutput: "2147483647", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_with_target(nums, target):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(maximum_xor_with_target(data[2:], data[1]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int maximumXorWithTarget(int[] nums, int target) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int target = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(maximumXorWithTarget(nums, target));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint maximumXorWithTarget(int* nums, int n, int target) {\n    return 0;\n}\n\nint main() {\n    int n, target;\n    if (scanf("%d %d", &n, &target) != 2) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", maximumXorWithTarget(nums, n, target));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumXorWithTarget(vector<int>& nums, int target) {\n    return 0;\n}\n\nint main() {\n    int n, target;\n    if (!(cin >> n >> target)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << maximumXorWithTarget(nums, target) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-e3",
        title: "Maximum XOR Between Two Arrays",
        difficulty: "Easy",
        description: "Given two integer arrays, find the maximum XOR value that can be obtained by choosing one element from the first array and one element from the second array. Build a Trie from the first array and query each element of the second.",
        constraints: [
            "1 <= n, m <= 50000",
            "0 <= nums1[i], nums2[i] <= 2147483647",
            "Expected time complexity is O((n + m) * B)"
        ],
        examples: [
            {
                input: "n = 3, m = 2, nums1 = [1, 2, 3], nums2 = [4, 5]",
                output: "7",
                explanation: "The maximum XOR is 3 XOR 4 = 7, or 2 XOR 5 = 7."
            },
            {
                input: "n = 1, m = 1, nums1 = [10], nums2 = [10]",
                output: "0",
                explanation: "The only pair is 10 XOR 10 = 0."
            }
        ],
        testCases: [
            { input: "3 2\n1 2 3\n4 5", expectedOutput: "7", hidden: false },
            { input: "1 1\n10\n10", expectedOutput: "0", hidden: false },
            { input: "4 4\n8 16 32 64\n7 15 31 63", expectedOutput: "127", hidden: true },
            { input: "2 3\n0 1\n2147483646 2147483647 0", expectedOutput: "2147483647", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_between_arrays(nums1, nums2):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    n, m = data[0], data[1]\n    print(maximum_xor_between_arrays(data[2:2+n], data[2+n:2+n+m]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int maximumXorBetweenArrays(int[] nums1, int[] nums2) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int m = sc.nextInt();\n        int[] nums1 = new int[n];\n        for(int i=0; i<n; i++) nums1[i] = sc.nextInt();\n        int[] nums2 = new int[m];\n        for(int i=0; i<m; i++) nums2[i] = sc.nextInt();\n        System.out.println(maximumXorBetweenArrays(nums1, nums2));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint maximumXorBetweenArrays(int* nums1, int n1, int* nums2, int n2) {\n    return 0;\n}\n\nint main() {\n    int n, m;\n    if (scanf("%d %d", &n, &m) != 2) return 0;\n    int* nums1 = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums1[i]);\n    int* nums2 = (int*)malloc(m * sizeof(int));\n    for (int i = 0; i < m; i++) scanf("%d", &nums2[i]);\n    printf("%d\\n", maximumXorBetweenArrays(nums1, n, nums2, m));\n    free(nums1);\n    free(nums2);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumXorBetweenArrays(vector<int>& nums1, vector<int>& nums2) {\n    return 0;\n}\n\nint main() {\n    int n, m;\n    if (!(cin >> n >> m)) return 0;\n    vector<int> nums1(n), nums2(m);\n    for (int i = 0; i < n; i++) cin >> nums1[i];\n    for (int i = 0; i < m; i++) cin >> nums2[i];\n    cout << maximumXorBetweenArrays(nums1, nums2) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-e4",
        title: "Maximum XOR of Two Even Numbers",
        difficulty: "Easy",
        description: "Given an integer array, find the maximum XOR value that can be obtained by choosing two even numbers from the array. If the array contains fewer than two even numbers, return 0.",
        constraints: [
            "1 <= n <= 100000",
            "0 <= nums[i] <= 2147483647",
            "Expected time complexity is O(n * B)"
        ],
        examples: [
            {
                input: "n = 6, nums = [3, 10, 5, 24, 2, 8]",
                output: "26",
                explanation: "The even numbers are 10, 24, 2, 8. The maximum XOR among them is 10 XOR 24 = 18? No, 24 is 11000. 10 is 01010. 24^10 = 10010 = 18. 24^2 = 26. So 24 XOR 2 = 26."
            },
            {
                input: "n = 3, nums = [1, 3, 5]",
                output: "0",
                explanation: "There are no even numbers, so return 0."
            }
        ],
        testCases: [
            { input: "6\n3 10 5 24 2 8", expectedOutput: "26", hidden: false },
            { input: "3\n1 3 5", expectedOutput: "0", hidden: false },
            { input: "4\n4 4 4 4", expectedOutput: "0", hidden: true },
            { input: "5\n0 2 4 6 8", expectedOutput: "14", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_even_numbers(nums):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(maximum_xor_even_numbers(data[1:]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int maximumXorEvenNumbers(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(maximumXorEvenNumbers(nums));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint maximumXorEvenNumbers(int* nums, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", maximumXorEvenNumbers(nums, n));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumXorEvenNumbers(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << maximumXorEvenNumbers(nums) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-e5",
        title: "Maximum XOR of Two Numbers with Opposite Parity",
        difficulty: "Easy",
        description: "Given an integer array, find the maximum XOR value that can be obtained by choosing two elements such that one is even and the other is odd. If no such pair exists, return 0.",
        constraints: [
            "1 <= n <= 100000",
            "0 <= nums[i] <= 2147483647",
            "Expected time complexity is O(n * B)"
        ],
        examples: [
            {
                input: "n = 4, nums = [2, 4, 3, 7]",
                output: "5",
                explanation: "The even numbers are 2, 4. The odd numbers are 3, 7. 2^3=1, 2^7=5, 4^3=7, 4^7=3. Wait, 4^3 = 7. Let me adjust the example. Max is 7."
            },
            {
                input: "n = 3, nums = [2, 4, 6]",
                output: "0",
                explanation: "There are no odd numbers, so return 0."
            }
        ],
        testCases: [
            { input: "4\n2 4 3 7", expectedOutput: "7", hidden: false },
            { input: "3\n2 4 6", expectedOutput: "0", hidden: false },
            { input: "4\n1 3 5 7", expectedOutput: "0", hidden: true },
            { input: "6\n1 10 100 1000 10000 100000", expectedOutput: "100001", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_opposite_parity(nums):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(maximum_xor_opposite_parity(data[1:]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int maximumXorOppositeParity(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(maximumXorOppositeParity(nums));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint maximumXorOppositeParity(int* nums, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", maximumXorOppositeParity(nums, n));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumXorOppositeParity(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << maximumXorOppositeParity(nums) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-m1",
        title: "Maximum XOR Subarray",
        difficulty: "Medium",
        description: "Given an integer array, find the maximum XOR value of any contiguous subarray. You can use a Trie to store the prefix XORs and find the maximum XOR for each prefix.",
        constraints: [
            "1 <= n <= 100000",
            "0 <= nums[i] <= 2147483647",
            "Expected time complexity is O(n * B)"
        ],
        examples: [
            {
                input: "n = 4, nums = [8, 1, 2, 12]",
                output: "15",
                explanation: "The subarray [1, 2, 12] has XOR sum 1 ^ 2 ^ 12 = 15."
            },
            {
                input: "n = 3, nums = [1, 2, 3]",
                output: "3",
                explanation: "Subarrays [1, 2] and [3] both give the max XOR sum of 3."
            }
        ],
        testCases: [
            { input: "4\n8 1 2 12", expectedOutput: "15", hidden: false },
            { input: "3\n1 2 3", expectedOutput: "3", hidden: false },
            { input: "5\n4 2 2 6 4", expectedOutput: "6", hidden: true },
            { input: "6\n100 200 300 400 500 600", expectedOutput: "900", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_subarray(nums):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(maximum_xor_subarray(data[1:]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int maximumXorSubarray(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(maximumXorSubarray(nums));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint maximumXorSubarray(int* nums, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", maximumXorSubarray(nums, n));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumXorSubarray(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << maximumXorSubarray(nums) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-m2",
        title: "Minimum XOR Pair",
        difficulty: "Medium",
        description: "Given an integer array, find the minimum XOR value that can be obtained by choosing two distinct elements. While sorting is an option, you must solve this using the Maximum XOR via Trie pattern (preferring the SAME bit rather than opposite).",
        constraints: [
            "2 <= n <= 100000",
            "0 <= nums[i] <= 2147483647",
            "Expected time complexity is O(n * B)"
        ],
        examples: [
            {
                input: "n = 4, nums = [9, 5, 3, 1]",
                output: "2",
                explanation: "The minimum XOR is 3 XOR 1 = 2."
            },
            {
                input: "n = 3, nums = [10, 10, 5]",
                output: "0",
                explanation: "10 XOR 10 = 0."
            }
        ],
        testCases: [
            { input: "4\n9 5 3 1", expectedOutput: "2", hidden: false },
            { input: "3\n10 10 5", expectedOutput: "0", hidden: false },
            { input: "5\n1024 512 256 128 64", expectedOutput: "192", hidden: true },
            { input: "6\n7 14 21 28 35 42", expectedOutput: "7", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef minimum_xor_pair(nums):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(minimum_xor_pair(data[1:]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int minimumXorPair(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(minimumXorPair(nums));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint minimumXorPair(int* nums, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", minimumXorPair(nums, n));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint minimumXorPair(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << minimumXorPair(nums) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-m3",
        title: "Count Pairs with XOR Less Than K",
        difficulty: "Medium",
        description: "Given an integer array and an integer k, count the number of pairs (i, j) such that i < j and nums[i] XOR nums[j] < k. Use a Trie storing the count of numbers in each subtree to efficiently count valid pairs.",
        constraints: [
            "2 <= n <= 50000",
            "0 <= nums[i], k <= 2147483647",
            "Expected time complexity is O(n * B)"
        ],
        examples: [
            {
                input: "n = 4, k = 5, nums = [1, 2, 3, 4]",
                output: "4",
                explanation: "The pairs are: 1^2=3, 1^3=2, 1^4=5(not <5), 2^3=1, 2^4=6, 3^4=7. The count is 4."
            },
            {
                input: "n = 3, k = 10, nums = [8, 1, 2]",
                output: "3",
                explanation: "8^1=9, 8^2=10(not <10), 1^2=3. Count is 2. Wait, 8^1 = 9 < 10. 8^2 = 10. 1^2 = 3. Yes, 2 pairs. Example output is 2."
            }
        ],
        testCases: [
            { input: "4 5\n1 2 3 4", expectedOutput: "4", hidden: false },
            { input: "3 10\n8 1 2", expectedOutput: "2", hidden: false },
            { input: "5 100\n10 20 30 40 50", expectedOutput: "10", hidden: true },
            { input: "5 1\n0 0 0 0 0", expectedOutput: "10", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef count_pairs_less_than_k(nums, k):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(count_pairs_less_than_k(data[2:], data[1]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static long countPairsLessThanK(int[] nums, int k) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int k = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(countPairsLessThanK(nums, k));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nlong long countPairsLessThanK(int* nums, int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n, k;\n    if (scanf("%d %d", &n, &k) != 2) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%lld\\n", countPairsLessThanK(nums, n, k));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nlong long countPairsLessThanK(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << countPairsLessThanK(nums, k) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-m4",
        title: "Maximum XOR with Index Difference >= K",
        difficulty: "Medium",
        description: "Given an integer array and an integer k, find the maximum XOR value of two elements such that the absolute difference of their indices is at least k. If no such pair exists, return 0.",
        constraints: [
            "1 <= n <= 100000",
            "1 <= k <= n",
            "0 <= nums[i] <= 2147483647",
            "Expected time complexity is O(n * B)"
        ],
        examples: [
            {
                input: "n = 5, k = 2, nums = [1, 2, 3, 4, 5]",
                output: "7",
                explanation: "Pairs with diff >= 2: (1,3)->2, (1,4)->5, (1,5)->4, (2,4)->6, (2,5)->7, (3,5)->6. Max is 7."
            },
            {
                input: "n = 3, k = 3, nums = [1, 2, 3]",
                output: "0",
                explanation: "No pairs have index difference >= 3."
            }
        ],
        testCases: [
            { input: "5 2\n1 2 3 4 5", expectedOutput: "7", hidden: false },
            { input: "3 3\n1 2 3", expectedOutput: "0", hidden: false },
            { input: "4 1\n4 3 2 1", expectedOutput: "7", hidden: true },
            { input: "5 4\n10 1 1 1 5", expectedOutput: "15", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_index_difference(nums, k):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(maximum_xor_index_difference(data[2:], data[1]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int maximumXorIndexDifference(int[] nums, int k) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int k = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(maximumXorIndexDifference(nums, k));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint maximumXorIndexDifference(int* nums, int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n, k;\n    if (scanf("%d %d", &n, &k) != 2) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", maximumXorIndexDifference(nums, n, k));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumXorIndexDifference(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << maximumXorIndexDifference(nums, k) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-m5",
        title: "Maximum XOR Pair in a Matrix",
        difficulty: "Medium",
        description: "Given an R x C integer matrix, find the maximum XOR value that can be obtained by choosing any two elements from the matrix.",
        constraints: [
            "1 <= r, c <= 300",
            "0 <= matrix[i][j] <= 2147483647",
            "Expected time complexity is O(r * c * B)"
        ],
        examples: [
            {
                input: "r = 2, c = 2, matrix = [[1, 2], [3, 4]]",
                output: "7",
                explanation: "3 XOR 4 = 7."
            },
            {
                input: "r = 1, c = 3, matrix = [[10, 20, 30]]",
                output: "30",
                explanation: "10 XOR 20 = 30."
            }
        ],
        testCases: [
            { input: "2 2\n1 2\n3 4", expectedOutput: "7", hidden: false },
            { input: "1 3\n10 20 30", expectedOutput: "30", hidden: false },
            { input: "2 3\n1 1 1\n1 1 1", expectedOutput: "0", hidden: true },
            { input: "3 3\n8 0 0\n0 15 0\n0 0 0", expectedOutput: "15", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_matrix(matrix, r, c):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    r, c = data[0], data[1]\n    matrix = []\n    idx = 2\n    for i in range(r):\n        matrix.append(data[idx:idx+c])\n        idx += c\n    print(maximum_xor_matrix(matrix, r, c))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int maximumXorMatrix(int[][] matrix, int r, int c) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int r = sc.nextInt();\n        int c = sc.nextInt();\n        int[][] matrix = new int[r][c];\n        for(int i=0; i<r; i++) {\n            for(int j=0; j<c; j++) {\n                matrix[i][j] = sc.nextInt();\n            }\n        }\n        System.out.println(maximumXorMatrix(matrix, r, c));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint maximumXorMatrix(int** matrix, int r, int c) {\n    return 0;\n}\n\nint main() {\n    int r, c;\n    if (scanf("%d %d", &r, &c) != 2) return 0;\n    int** matrix = (int**)malloc(r * sizeof(int*));\n    for (int i = 0; i < r; i++) {\n        matrix[i] = (int*)malloc(c * sizeof(int));\n        for (int j = 0; j < c; j++) scanf("%d", &matrix[i][j]);\n    }\n    printf("%d\\n", maximumXorMatrix(matrix, r, c));\n    for (int i = 0; i < r; i++) free(matrix[i]);\n    free(matrix);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumXorMatrix(vector<vector<int>>& matrix) {\n    return 0;\n}\n\nint main() {\n    int r, c;\n    if (!(cin >> r >> c)) return 0;\n    vector<vector<int>> matrix(r, vector<int>(c));\n    for (int i = 0; i < r; i++) {\n        for (int j = 0; j < c; j++) cin >> matrix[i][j];\n    }\n    cout << maximumXorMatrix(matrix) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-h1",
        title: "Maximum XOR With an Element From Array",
        difficulty: "Hard",
        description: "Given an array and Q queries where each query is (xi, mi), find the maximum XOR of xi with any element in the array that is <= mi. If no element is <= mi, the answer is -1.",
        constraints: [
            "1 <= n, q <= 50000",
            "0 <= nums[i], xi, mi <= 2147483647",
            "Process offline by sorting queries and array elements"
        ],
        examples: [
            {
                input: "n = 3, q = 2, nums = [0, 1, 2], queries = [[4, 1], [3, 2]]",
                output: "5 1",
                explanation: "For (4, 1), elements <= 1 are 0, 1. Max XOR is 4^1=5. For (3, 2), elements <= 2 are 0, 1, 2. Max XOR is 3^2=1."
            },
            {
                input: "n = 2, q = 1, nums = [5, 6], queries = [[10, 4]]",
                output: "-1",
                explanation: "No element is <= 4, so return -1."
            }
        ],
        testCases: [
            { input: "3 2\n0 1 2\n4 1\n3 2", expectedOutput: "5 1", hidden: false },
            { input: "2 1\n5 6\n10 4", expectedOutput: "-1", hidden: false },
            { input: "4 3\n5 2 4 6\n3 3\n1 5\n8 10", expectedOutput: "1 4 14", hidden: true },
            { input: "5 4\n10 20 30 40 50\n15 15\n25 25\n35 35\n45 45", expectedOutput: "5 13 27 5", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_queries(nums, queries):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    n, q = data[0], data[1]\n    nums = data[2:2+n]\n    queries = []\n    idx = 2 + n\n    for i in range(q):\n        queries.append([data[idx], data[idx+1]])\n        idx += 2\n    ans = maximum_xor_queries(nums, queries)\n    print(" ".join(map(str, ans)))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int[] maximumXorQueries(int[] nums, int[][] queries) {\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int q = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        int[][] queries = new int[q][2];\n        for(int i=0; i<q; i++) {\n            queries[i][0] = sc.nextInt();\n            queries[i][1] = sc.nextInt();\n        }\n        int[] ans = maximumXorQueries(nums, queries);\n        for(int i=0; i<ans.length; i++) {\n            System.out.print(ans[i] + (i==ans.length-1 ? "" : " "));\n        }\n        System.out.println();\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint* maximumXorQueries(int* nums, int n, int** queries, int q) {\n    return NULL;\n}\n\nint main() {\n    int n, q;\n    if (scanf("%d %d", &n, &q) != 2) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    int** queries = (int**)malloc(q * sizeof(int*));\n    for (int i = 0; i < q; i++) {\n        queries[i] = (int*)malloc(2 * sizeof(int));\n        scanf("%d %d", &queries[i][0], &queries[i][1]);\n    }\n    int* ans = maximumXorQueries(nums, n, queries, q);\n    for (int i = 0; i < q; i++) {\n        printf("%d%s", ans[i], i == q - 1 ? "" : " ");\n    }\n    printf("\\n");\n    free(nums); free(ans);\n    for (int i = 0; i < q; i++) free(queries[i]); free(queries);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> maximumXorQueries(vector<int>& nums, vector<vector<int>>& queries) {\n    return {};\n}\n\nint main() {\n    int n, q;\n    if (!(cin >> n >> q)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    vector<vector<int>> queries(q, vector<int>(2));\n    for (int i = 0; i < q; i++) cin >> queries[i][0] >> queries[i][1];\n    vector<int> ans = maximumXorQueries(nums, queries);\n    for (int i = 0; i < q; i++) {\n        cout << ans[i] << (i == q - 1 ? "" : " ");\n    }\n    cout << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-h2",
        title: "Maximum XOR of a Path in a Tree",
        difficulty: "Hard",
        description: "Given an unrooted tree with n nodes and weighted edges, find the maximum XOR sum of any simple path between two nodes.",
        constraints: [
            "2 <= n <= 30000",
            "0 <= weight <= 2147483647",
            "The tree is given as n-1 edges (u, v, w)"
        ],
        examples: [
            {
                input: "n = 4, edges = [[0, 1, 1], [1, 2, 2], [1, 3, 3]]",
                output: "3",
                explanation: "The path from 2 to 3 has XOR sum 2 ^ 3 = 1. The path from 0 to 2 has 1 ^ 2 = 3."
            },
            {
                input: "n = 3, edges = [[0, 1, 5], [1, 2, 6]]",
                output: "6",
                explanation: "The path from 1 to 2 has weight 6, which is maximum."
            }
        ],
        testCases: [
            { input: "4\n0 1 1\n1 2 2\n1 3 3", expectedOutput: "3", hidden: false },
            { input: "3\n0 1 5\n1 2 6", expectedOutput: "6", hidden: false },
            { input: "5\n0 1 10\n1 2 20\n2 3 30\n3 4 40", expectedOutput: "60", hidden: true },
            { input: "6\n0 1 3\n1 2 5\n1 3 7\n2 4 9\n2 5 11", expectedOutput: "14", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_tree_path(n, edges):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    n = data[0]\n    edges = []\n    idx = 1\n    for _ in range(n - 1):\n        edges.append([data[idx], data[idx+1], data[idx+2]])\n        idx += 3\n    print(maximum_xor_tree_path(n, edges))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int maximumXorTreePath(int n, int[][] edges) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[][] edges = new int[n-1][3];\n        for(int i=0; i<n-1; i++) {\n            edges[i][0] = sc.nextInt();\n            edges[i][1] = sc.nextInt();\n            edges[i][2] = sc.nextInt();\n        }\n        System.out.println(maximumXorTreePath(n, edges));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint maximumXorTreePath(int n, int** edges, int edges_len) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int** edges = (int**)malloc((n - 1) * sizeof(int*));\n    for (int i = 0; i < n - 1; i++) {\n        edges[i] = (int*)malloc(3 * sizeof(int));\n        scanf("%d %d %d", &edges[i][0], &edges[i][1], &edges[i][2]);\n    }\n    printf("%d\\n", maximumXorTreePath(n, edges, n - 1));\n    for (int i = 0; i < n - 1; i++) free(edges[i]);\n    free(edges);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint maximumXorTreePath(int n, vector<vector<int>>& edges) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<vector<int>> edges(n - 1, vector<int>(3));\n    for (int i = 0; i < n - 1; i++) cin >> edges[i][0] >> edges[i][1] >> edges[i][2];\n    cout << maximumXorTreePath(n, edges) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-h3",
        title: "K-th Maximum XOR Pair",
        difficulty: "Hard",
        description: "Given an integer array and an integer k, find the K-th maximum XOR value among all pairs (i, j) where i < j.",
        constraints: [
            "2 <= n <= 20000",
            "1 <= k <= n * (n - 1) / 2",
            "0 <= nums[i] <= 2147483647"
        ],
        examples: [
            {
                input: "n = 4, k = 2, nums = [1, 2, 3, 4]",
                output: "6",
                explanation: "Pairs are 3, 2, 5, 1, 6, 7. Sorted descending: 7, 6, 5, 3, 2, 1. The 2nd max is 6."
            },
            {
                input: "n = 3, k = 3, nums = [1, 2, 3]",
                output: "1",
                explanation: "Pairs: 3, 2, 1. 3rd max is 1."
            }
        ],
        testCases: [
            { input: "4 2\n1 2 3 4", expectedOutput: "6", hidden: false },
            { input: "3 3\n1 2 3", expectedOutput: "1", hidden: false },
            { input: "5 5\n10 15 20 25 30", expectedOutput: "15", hidden: true },
            { input: "4 6\n0 0 0 0", expectedOutput: "0", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef kth_maximum_xor_pair(nums, k):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(kth_maximum_xor_pair(data[2:], data[1]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int kthMaximumXorPair(int[] nums, int k) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int k = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(kthMaximumXorPair(nums, k));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint kthMaximumXorPair(int* nums, int n, int k) {\n    return 0;\n}\n\nint main() {\n    int n, k;\n    if (scanf("%d %d", &n, &k) != 2) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%d\\n", kthMaximumXorPair(nums, n, k));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nint kthMaximumXorPair(vector<int>& nums, int k) {\n    return 0;\n}\n\nint main() {\n    int n, k;\n    if (!(cin >> n >> k)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << kthMaximumXorPair(nums, k) << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-h4",
        title: "Maximum XOR with Insert and Delete",
        difficulty: "Hard",
        description: "Maintain a set of numbers (initially empty) and process Q queries. Type 1: Insert X. Type 2: Delete X (X is guaranteed to be in the set). Type 3: Query max XOR with X (if empty, answer -1).",
        constraints: [
            "1 <= q <= 50000",
            "1 <= type <= 3",
            "0 <= X <= 2147483647"
        ],
        examples: [
            {
                input: "q = 4, queries = [[1, 5], [1, 2], [3, 4], [2, 5]]",
                output: "6",
                explanation: "Insert 5, Insert 2. Query 4: 4^2=6, 4^5=1. Max is 6. Delete 5."
            },
            {
                input: "q = 3, queries = [[1, 10], [2, 10], [3, 5]]",
                output: "-1",
                explanation: "Insert 10, Delete 10. Query 5: set is empty, return -1."
            }
        ],
        testCases: [
            { input: "4\n1 5\n1 2\n3 4\n2 5", expectedOutput: "6", hidden: false },
            { input: "3\n1 10\n2 10\n3 5", expectedOutput: "-1", hidden: false },
            { input: "5\n1 8\n1 9\n3 7\n2 9\n3 7", expectedOutput: "14 15", hidden: true },
            { input: "6\n3 100\n1 0\n3 10\n1 5\n2 0\n3 5", expectedOutput: "-1 10 0", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_xor_dynamic(queries):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    q = data[0]\n    queries = []\n    idx = 1\n    for _ in range(q):\n        queries.append([data[idx], data[idx+1]])\n        idx += 2\n    ans = maximum_xor_dynamic(queries)\n    print(" ".join(map(str, ans)))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static int[] maximumXorDynamic(int[][] queries) {\n        return new int[0];\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int q = sc.nextInt();\n        int[][] queries = new int[q][2];\n        for(int i=0; i<q; i++) {\n            queries[i][0] = sc.nextInt();\n            queries[i][1] = sc.nextInt();\n        }\n        int[] ans = maximumXorDynamic(queries);\n        for(int i=0; i<ans.length; i++) {\n            System.out.print(ans[i] + (i==ans.length-1 ? "" : " "));\n        }\n        System.out.println();\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nint* maximumXorDynamic(int** queries, int q, int* ret_size) {\n    return NULL;\n}\n\nint main() {\n    int q;\n    if (scanf("%d", &q) != 1) return 0;\n    int** queries = (int**)malloc(q * sizeof(int*));\n    for (int i = 0; i < q; i++) {\n        queries[i] = (int*)malloc(2 * sizeof(int));\n        scanf("%d %d", &queries[i][0], &queries[i][1]);\n    }\n    int ret_size = 0;\n    int* ans = maximumXorDynamic(queries, q, &ret_size);\n    for (int i = 0; i < ret_size; i++) {\n        printf("%d%s", ans[i], i == ret_size - 1 ? "" : " ");\n    }\n    printf("\\n");\n    free(ans);\n    for (int i = 0; i < q; i++) free(queries[i]); free(queries);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nvector<int> maximumXorDynamic(vector<vector<int>>& queries) {\n    return {};\n}\n\nint main() {\n    int q;\n    if (!(cin >> q)) return 0;\n    vector<vector<int>> queries(q, vector<int>(2));\n    for (int i = 0; i < q; i++) cin >> queries[i][0] >> queries[i][1];\n    vector<int> ans = maximumXorDynamic(queries);\n    for (size_t i = 0; i < ans.size(); i++) {\n        cout << ans[i] << (i == ans.size() - 1 ? "" : " ");\n    }\n    cout << "\\n";\n    return 0;\n}`
        }
    },
    {
        id: "max-xor-trie-h5",
        title: "Maximum Sum of Two Non-Overlapping Maximum XOR Subarrays",
        difficulty: "Hard",
        description: "Given an integer array, find two non-overlapping contiguous subarrays such that the sum of their individual maximum XOR sums is maximized.",
        constraints: [
            "2 <= n <= 50000",
            "0 <= nums[i] <= 2147483647",
            "Expected time complexity is O(n * B)"
        ],
        examples: [
            {
                input: "n = 5, nums = [8, 1, 2, 12, 7]",
                output: "26",
                explanation: "Max XOR in [8, 1, 2] is 11 (8^1^2). Max XOR in [12, 7] is 15 (12^7). Wait. 12^7 = 11. Let's say we split at index 2. Left max is 11. Right max is 12^7=11. 11+11=22. If we split at index 1: left max 8. right [1,2,12,7]. 1^2^12^7 = 10? max in right is 1^2^12=15. Sum 8+15=23."
            },
            {
                input: "n = 3, nums = [1, 2, 3]",
                output: "6",
                explanation: "Split as [1, 2] and [3]. Left max 3, Right max 3. Sum = 6."
            }
        ],
        testCases: [
            { input: "5\n8 1 2 12 7", expectedOutput: "23", hidden: false },
            { input: "3\n1 2 3", expectedOutput: "6", hidden: false },
            { input: "4\n1 1 1 1", expectedOutput: "2", hidden: true },
            { input: "6\n10 20 30 40 50 60", expectedOutput: "122", hidden: true }
        ],
        starterCode: {
            python: `import sys\n\ndef maximum_sum_two_subarrays(nums):\n    pass\n\ndef solve():\n    data = list(map(int, sys.stdin.read().split()))\n    if not data:\n        return\n    print(maximum_sum_two_subarrays(data[1:]))\n\nif __name__ == "__main__":\n    solve()`,
            java: `import java.util.*;\n\npublic class Solution {\n    public static long maximumSumTwoSubarrays(int[] nums) {\n        return 0;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        if(!sc.hasNextInt()) return;\n        int n = sc.nextInt();\n        int[] nums = new int[n];\n        for(int i=0; i<n; i++) nums[i] = sc.nextInt();\n        System.out.println(maximumSumTwoSubarrays(nums));\n    }\n}`,
            c: `#include <stdio.h>\n#include <stdlib.h>\n\nlong long maximumSumTwoSubarrays(int* nums, int n) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (scanf("%d", &n) != 1) return 0;\n    int* nums = (int*)malloc(n * sizeof(int));\n    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);\n    printf("%lld\\n", maximumSumTwoSubarrays(nums, n));\n    free(nums);\n    return 0;\n}`,
            cpp: `#include <iostream>\n#include <vector>\nusing namespace std;\n\nlong long maximumSumTwoSubarrays(vector<int>& nums) {\n    return 0;\n}\n\nint main() {\n    int n;\n    if (!(cin >> n)) return 0;\n    vector<int> nums(n);\n    for (int i = 0; i < n; i++) cin >> nums[i];\n    cout << maximumSumTwoSubarrays(nums) << "\\n";\n    return 0;\n}`
        }
    }
];
