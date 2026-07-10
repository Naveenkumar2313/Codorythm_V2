export const longestPalindromicSubstringProblems = [
  // EASY
  {
    id: 'lps-ps-e1',
    title: 'Count Target Sum Subsets',
    difficulty: 'Easy',
    description:
      'Given n integers and a target value, count how many subsets have sum exactly equal to the target. Treat equal values at different indices as different choices.',
    constraints: [
      '0 <= n <= 20',
      '-30 <= nums[i] <= 30',
      '-300 <= target <= 300',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]\ntarget = 3',
        output: '2',
        explanation: 'The matching subsets are [1, 2] and [3].',
      },
      {
        input: 'n = 3\nnums = [2, 2, 2]\ntarget = 4',
        output: '3',
        explanation:
          'Any choice of two indices forms a valid subset, so the count is 3.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3\n3', expectedOutput: '2', hidden: false },
      { input: '3\n2 2 2\n4', expectedOutput: '3', hidden: false },
      { input: '0\n0', expectedOutput: '1', hidden: true },
      { input: '4\n-1 1 -1 1\n0', expectedOutput: '6', hidden: true },
      {
        input: '20\n1 2 3 4 5 6 7 8 9 10 1 2 3 4 5 6 7 8 9 10\n200',
        expectedOutput: '0',
        hidden: true,
      },
    ],
    starterCode: {
      python: `def count_target_sum_subsets(nums, target):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(count_target_sum_subsets(nums, target))`,
      java: `import java.util.*;

public class Solution {
    public static long countTargetSumSubsets(int[] nums, int target) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            System.out.println(countTargetSumSubsets(nums, target));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countTargetSumSubsets(int* nums, int n, int target) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    printf("%lld\\n", countTargetSumSubsets(nums, n, target));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countTargetSumSubsets(vector<int>& nums, int target) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int target;
        cin >> target;
        cout << countTargetSumSubsets(nums, target) << "\\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-e2',
    title: 'First Divisible Sum Subset',
    difficulty: 'Easy',
    description:
      'Given n integers and a positive integer k, print the first non-empty subset in mask order whose sum is divisible by k. If no such subset exists, print None.',
    constraints: [
      '0 <= n <= 18',
      '-30 <= nums[i] <= 30',
      '1 <= k <= 50',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [3, 5, 2]\nk = 4',
        output: '[3, 5]',
        explanation:
          'Masks 001 and 010 fail, while mask 011 gives subset [3, 5] with sum 8.',
      },
      {
        input: 'n = 3\nnums = [1, 1, 1]\nk = 5',
        output: 'None',
        explanation: 'No non-empty subset has sum divisible by 5.',
      },
    ],
    testCases: [
      { input: '3\n3 5 2\n4', expectedOutput: '[3, 5]', hidden: false },
      { input: '3\n1 1 1\n5', expectedOutput: 'None', hidden: false },
      { input: '1\n6\n3', expectedOutput: '[6]', hidden: true },
      { input: '2\n2 2\n4', expectedOutput: '[2, 2]', hidden: true },
      { input: '0\n7', expectedOutput: 'None', hidden: true },
    ],
    starterCode: {
      python: `def print_first_divisible_subset(nums, k):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    k = data[1 + n]
    print_first_divisible_subset(nums, k)`,
      java: `import java.util.*;

public class Solution {
    public static void printFirstDivisibleSubset(int[] nums, int k) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            printFirstDivisibleSubset(nums, k);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printFirstDivisibleSubset(int* nums, int n, int k) {
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printFirstDivisibleSubset(nums, n, k);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printFirstDivisibleSubset(vector<int>& nums, int k) {
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int k;
        cin >> k;
        printFirstDivisibleSubset(nums, k);
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-e3',
    title: 'Even Size Odd Sum Count',
    difficulty: 'Easy',
    description:
      'Given n integers, count subsets that have even number of elements and odd total sum. Include all valid subsets and print the count.',
    constraints: [
      '0 <= n <= 20',
      '-20 <= nums[i] <= 20',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]',
        output: '2',
        explanation: 'The valid subsets are [1, 2] and [2, 3].',
      },
      {
        input: 'n = 3\nnums = [2, 4, 6]',
        output: '0',
        explanation: 'All subset sums are even, so none qualify.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '2', hidden: false },
      { input: '3\n2 4 6', expectedOutput: '0', hidden: false },
      { input: '0', expectedOutput: '0', hidden: true },
      { input: '2\n1 1', expectedOutput: '0', hidden: true },
      { input: '4\n1 1 1 1', expectedOutput: '6', hidden: true },
    ],
    starterCode: {
      python: `def count_even_size_odd_sum_subsets(nums):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_even_size_odd_sum_subsets(nums))`,
      java: `import java.util.*;

public class Solution {
    public static long countEvenSizeOddSumSubsets(int[] nums) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(countEvenSizeOddSumSubsets(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countEvenSizeOddSumSubsets(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%lld\\n", countEvenSizeOddSumSubsets(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countEvenSizeOddSumSubsets(vector<int>& nums) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        cout << countEvenSizeOddSumSubsets(nums) << "\\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-e4',
    title: 'Maximum Subset XOR',
    difficulty: 'Easy',
    description:
      'Given n non-negative integers, find the maximum XOR value obtainable from any subset, including single-element and full subsets.',
    constraints: [
      '0 <= n <= 20',
      '0 <= nums[i] <= 10^6',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]',
        output: '3',
        explanation: 'A best XOR value is 3, achieved by subset [1, 2] or [3].',
      },
      {
        input: 'n = 3\nnums = [8, 1, 2]',
        output: '11',
        explanation: 'Subset [8, 1, 2] has XOR 11, which is maximum.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '3', hidden: false },
      { input: '3\n8 1 2', expectedOutput: '11', hidden: false },
      { input: '0', expectedOutput: '0', hidden: true },
      { input: '4\n0 0 0 0', expectedOutput: '0', hidden: true },
      { input: '4\n5 5 5 5', expectedOutput: '5', hidden: true },
    ],
    starterCode: {
      python: `def max_subset_xor(nums):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(max_subset_xor(nums))`,
      java: `import java.util.*;

public class Solution {
    public static int maxSubsetXor(int[] nums) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(maxSubsetXor(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int maxSubsetXor(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", maxSubsetXor(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int maxSubsetXor(vector<int>& nums) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        cout << maxSubsetXor(nums) << "\\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-e5',
    title: 'Count Size and Sum Matched Subsets',
    difficulty: 'Easy',
    description:
      'Given n integers, an exact subset size k, and target sum t, count subsets that use exactly k elements and whose sum is exactly t.',
    constraints: [
      '0 <= n <= 20',
      '0 <= k <= n',
      '-25 <= nums[i] <= 25',
      '-300 <= t <= 300',
    ],
    examples: [
      {
        input: 'n = 4\nnums = [1, 2, 3, 4]\nk = 2\nt = 5',
        output: '2',
        explanation: 'The valid subsets are [1, 4] and [2, 3].',
      },
      {
        input: 'n = 3\nnums = [2, 2, 2]\nk = 2\nt = 4',
        output: '3',
        explanation: 'Any two indices form a valid subset.',
      },
    ],
    testCases: [
      { input: '4\n1 2 3 4\n2\n5', expectedOutput: '2', hidden: false },
      { input: '3\n2 2 2\n2\n4', expectedOutput: '3', hidden: false },
      { input: '0\n0\n0', expectedOutput: '1', hidden: true },
      { input: '5\n1 1 1 1 1\n3\n3', expectedOutput: '10', hidden: true },
      { input: '6\n-1 -1 2 2 0 0\n2\n1', expectedOutput: '4', hidden: true },
    ],
    starterCode: {
      python: `def count_size_sum_subsets(nums, k, target):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    k = data[1 + n]
    target = data[2 + n]
    print(count_size_sum_subsets(nums, k, target))`,
      java: `import java.util.*;

public class Solution {
    public static long countSizeSumSubsets(int[] nums, int k, int target) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int k = sc.nextInt();
            int target = sc.nextInt();
            System.out.println(countSizeSumSubsets(nums, k, target));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countSizeSumSubsets(int* nums, int n, int k, int target) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int k, target;
    if (scanf("%d", &k) != 1) return 0;
    if (scanf("%d", &target) != 1) return 0;
    printf("%lld\\n", countSizeSumSubsets(nums, n, k, target));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countSizeSumSubsets(vector<int>& nums, int k, int target) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int k, target;
        cin >> k >> target;
        cout << countSizeSumSubsets(nums, k, target) << "\\n";
    }

    return 0;
}`,
    },
  },

  // MEDIUM
  {
    id: 'lps-ps-m1',
    title: 'Closest Subset Sum Distance',
    difficulty: 'Medium',
    description:
      'Given n integers and a target value, find the minimum absolute difference between target and the sum of any subset. Print that minimum difference.',
    constraints: [
      '0 <= n <= 22',
      '-50 <= nums[i] <= 50',
      '-1000 <= target <= 1000',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [4, 7, 10]\ntarget = 15',
        output: '1',
        explanation: 'Subset sums 14 and 17 are both at distance 1 from 15.',
      },
      {
        input: 'n = 2\nnums = [5, 9]\ntarget = 3',
        output: '2',
        explanation: 'Subset [5] gives sum 5, so the minimum distance is 2.',
      },
    ],
    testCases: [
      { input: '3\n4 7 10\n15', expectedOutput: '1', hidden: false },
      { input: '2\n5 9\n3', expectedOutput: '2', hidden: false },
      { input: '0\n8', expectedOutput: '8', hidden: true },
      { input: '4\n-5 -2 7 9\n1', expectedOutput: '1', hidden: true },
      {
        input: '20\n1 2 3 4 5 6 7 8 9 10 -1 -2 -3 -4 -5 -6 -7 -8 -9 -10\n37',
        expectedOutput: '0',
        hidden: true,
      },
    ],
    starterCode: {
      python: `def min_subset_sum_distance(nums, target):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(min_subset_sum_distance(nums, target))`,
      java: `import java.util.*;

public class Solution {
    public static int minSubsetSumDistance(int[] nums, int target) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            System.out.println(minSubsetSumDistance(nums, target));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int minSubsetSumDistance(int* nums, int n, int target) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    printf("%d\\n", minSubsetSumDistance(nums, n, target));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int minSubsetSumDistance(vector<int>& nums, int target) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int target;
        cin >> target;
        cout << minSubsetSumDistance(nums, target) << "\\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-m2',
    title: 'Small Range Subset Counter',
    difficulty: 'Medium',
    description:
      'Given n integers and a limit d, count non-empty subsets where max element minus min element is at most d.',
    constraints: [
      '0 <= n <= 20',
      '-10^6 <= nums[i] <= 10^6',
      '0 <= d <= 10^6',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 3, 4]\nd = 2',
        output: '5',
        explanation:
          'Valid non-empty subsets are [1], [3], [4], [1, 3], and [3, 4].',
      },
      {
        input: 'n = 3\nnums = [2, 2, 2]\nd = 0',
        output: '7',
        explanation: 'All non-empty subsets satisfy max-min = 0.',
      },
    ],
    testCases: [
      { input: '3\n1 3 4\n2', expectedOutput: '5', hidden: false },
      { input: '3\n2 2 2\n0', expectedOutput: '7', hidden: false },
      { input: '0\n5', expectedOutput: '0', hidden: true },
      { input: '4\n1 10 20 30\n100', expectedOutput: '15', hidden: true },
      { input: '5\n-2 -2 0 1 4\n1', expectedOutput: '7', hidden: true },
    ],
    starterCode: {
      python: `def count_small_range_subsets(nums, limit):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    limit = data[1 + n]
    print(count_small_range_subsets(nums, limit))`,
      java: `import java.util.*;

public class Solution {
    public static long countSmallRangeSubsets(int[] nums, int limit) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int limit = sc.nextInt();
            System.out.println(countSmallRangeSubsets(nums, limit));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countSmallRangeSubsets(int* nums, int n, int limit) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int limit;
    if (scanf("%d", &limit) != 1) return 0;
    printf("%lld\\n", countSmallRangeSubsets(nums, n, limit));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countSmallRangeSubsets(vector<int>& nums, int limit) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int limit;
        cin >> limit;
        cout << countSmallRangeSubsets(nums, limit) << "\\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-m3',
    title: 'Best Subset Under Limit',
    difficulty: 'Medium',
    description:
      'Given n integers and a limit L, print one subset whose sum is at most L and as large as possible. Break ties by smaller subset size, then by smaller mask order. Print None if no subset is valid.',
    constraints: [
      '0 <= n <= 20',
      '-30 <= nums[i] <= 30',
      '-200 <= L <= 200',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [6, 4, 5]\nL = 9',
        output: '[4, 5]',
        explanation: 'Subset [4, 5] reaches sum 9, which is the best valid sum.',
      },
      {
        input: 'n = 2\nnums = [7, 8]\nL = 6',
        output: '[]',
        explanation: 'Only the empty subset has sum at most 6.',
      },
    ],
    testCases: [
      { input: '3\n6 4 5\n9', expectedOutput: '[4, 5]', hidden: false },
      { input: '2\n7 8\n6', expectedOutput: '[]', hidden: false },
      { input: '0\n0', expectedOutput: '[]', hidden: true },
      { input: '3\n2 2 2\n3', expectedOutput: '[2]', hidden: true },
      { input: '4\n-5 -2 4 7\n-3', expectedOutput: '[-5, -2, 4]', hidden: true },
    ],
    starterCode: {
      python: `def print_best_subset_under_limit(nums, limit):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    limit = data[1 + n]
    print_best_subset_under_limit(nums, limit)`,
      java: `import java.util.*;

public class Solution {
    public static void printBestSubsetUnderLimit(int[] nums, int limit) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int limit = sc.nextInt();
            printBestSubsetUnderLimit(nums, limit);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printBestSubsetUnderLimit(int* nums, int n, int limit) {
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int limit;
    if (scanf("%d", &limit) != 1) return 0;
    printBestSubsetUnderLimit(nums, n, limit);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printBestSubsetUnderLimit(vector<int>& nums, int limit) {
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int limit;
        cin >> limit;
        printBestSubsetUnderLimit(nums, limit);
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-m4',
    title: 'Integral Average Subset Count',
    difficulty: 'Medium',
    description:
      'Given n integers, count non-empty subsets whose average value is an integer.',
    constraints: [
      '0 <= n <= 20',
      '-30 <= nums[i] <= 30',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]',
        output: '5',
        explanation:
          'The valid subsets are [1], [2], [3], [1, 3], and [1, 2, 3].',
      },
      {
        input: 'n = 4\nnums = [2, 4, 6, 8]',
        output: '13',
        explanation: 'Thirteen non-empty subsets have integer average.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '5', hidden: false },
      { input: '4\n2 4 6 8', expectedOutput: '13', hidden: false },
      { input: '0', expectedOutput: '0', hidden: true },
      { input: '3\n5 5 5', expectedOutput: '7', hidden: true },
      { input: '4\n1 2 4 8', expectedOutput: '7', hidden: true },
    ],
    starterCode: {
      python: `def count_integral_average_subsets(nums):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_integral_average_subsets(nums))`,
      java: `import java.util.*;

public class Solution {
    public static long countIntegralAverageSubsets(int[] nums) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(countIntegralAverageSubsets(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countIntegralAverageSubsets(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%lld\\n", countIntegralAverageSubsets(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countIntegralAverageSubsets(vector<int>& nums) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        cout << countIntegralAverageSubsets(nums) << "\\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-m5',
    title: 'Product Modulo Subset Counter',
    difficulty: 'Medium',
    description:
      'Given n non-negative integers, a modulus m, and a remainder r, count non-empty subsets whose product modulo m is exactly r.',
    constraints: [
      '0 <= n <= 20',
      '0 <= nums[i] <= 10^6',
      '1 <= m <= 1000',
      '0 <= r < m',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [2, 3, 4]\nm = 5\nr = 1',
        output: '1',
        explanation: 'Only subset [2, 3] gives product modulo 5 equal to 1.',
      },
      {
        input: 'n = 2\nnums = [5, 10]\nm = 5\nr = 0',
        output: '3',
        explanation: 'All non-empty subsets have product divisible by 5.',
      },
    ],
    testCases: [
      { input: '3\n2 3 4\n5\n1', expectedOutput: '1', hidden: false },
      { input: '2\n5 10\n5\n0', expectedOutput: '3', hidden: false },
      { input: '0\n7\n0', expectedOutput: '0', hidden: true },
      { input: '3\n0 1 2\n3\n0', expectedOutput: '4', hidden: true },
      {
        input: '5\n2 2 2 2 2\n7\n4',
        expectedOutput: '11',
        hidden: true,
      },
    ],
    starterCode: {
      python: `def count_product_mod_subsets(nums, mod, target):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    mod = data[1 + n]
    target = data[2 + n]
    print(count_product_mod_subsets(nums, mod, target))`,
      java: `import java.util.*;

public class Solution {
    public static long countProductModSubsets(int[] nums, int mod, int target) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int mod = sc.nextInt();
            int target = sc.nextInt();
            System.out.println(countProductModSubsets(nums, mod, target));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countProductModSubsets(int* nums, int n, int mod, int target) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int mod, target;
    if (scanf("%d", &mod) != 1) return 0;
    if (scanf("%d", &target) != 1) return 0;
    printf("%lld\\n", countProductModSubsets(nums, n, mod, target));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countProductModSubsets(vector<int>& nums, int mod, int target) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int mod, target;
        cin >> mod >> target;
        cout << countProductModSubsets(nums, mod, target) << "\\n";
    }

    return 0;
}`,
    },
  },

  // HARD
  {
    id: 'lps-ps-h1',
    title: 'Prime Sum Prime Size Subsets',
    difficulty: 'Hard',
    description:
      'Given n positive integers, count non-empty subsets where subset size is prime and subset sum is also prime.',
    constraints: [
      '0 <= n <= 20',
      '1 <= nums[i] <= 50',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [2, 3, 5]',
        output: '2',
        explanation:
          'Valid subsets are [2, 3] and [2, 5]. Both have prime size 2 and prime sums.',
      },
      {
        input: 'n = 4\nnums = [1, 1, 1, 1]',
        output: '10',
        explanation:
          'All size-2 subsets and all size-3 subsets are valid, giving 6 + 4 = 10.',
      },
    ],
    testCases: [
      { input: '3\n2 3 5', expectedOutput: '2', hidden: false },
      { input: '4\n1 1 1 1', expectedOutput: '10', hidden: false },
      { input: '0', expectedOutput: '0', hidden: true },
      { input: '1\n2', expectedOutput: '0', hidden: true },
      { input: '5\n2 2 2 2 2', expectedOutput: '0', hidden: true },
    ],
    starterCode: {
      python: `def count_prime_sum_prime_size_subsets(nums):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_prime_sum_prime_size_subsets(nums))`,
      java: `import java.util.*;

public class Solution {
    public static long countPrimeSumPrimeSizeSubsets(int[] nums) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(countPrimeSumPrimeSizeSubsets(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countPrimeSumPrimeSizeSubsets(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%lld\\n", countPrimeSumPrimeSizeSubsets(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countPrimeSumPrimeSizeSubsets(vector<int>& nums) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        cout << countPrimeSumPrimeSizeSubsets(nums) << "\\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-h2',
    title: 'Alternating Sum Subset Count',
    difficulty: 'Hard',
    description:
      'Given n integers and target t, count subsets whose alternating sum in original index order equals t. For chosen values [a, b, c, d], alternating sum is a - b + c - d.',
    constraints: [
      '0 <= n <= 20',
      '-20 <= nums[i] <= 20',
      '-200 <= t <= 200',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]\nt = 2',
        output: '2',
        explanation: 'The valid subsets are [2] and [1, 2, 3].',
      },
      {
        input: 'n = 3\nnums = [4, 1, 2]\nt = 3',
        output: '1',
        explanation: 'Only subset [4, 1] has alternating sum equal to 3.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3\n2', expectedOutput: '2', hidden: false },
      { input: '3\n4 1 2\n3', expectedOutput: '1', hidden: false },
      { input: '0\n0', expectedOutput: '1', hidden: true },
      { input: '3\n1 1 1\n1', expectedOutput: '4', hidden: true },
      {
        input: '20\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n0',
        expectedOutput: '1048576',
        hidden: true,
      },
    ],
    starterCode: {
      python: `def count_alternating_sum_subsets(nums, target):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(count_alternating_sum_subsets(nums, target))`,
      java: `import java.util.*;

public class Solution {
    public static long countAlternatingSumSubsets(int[] nums, int target) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            System.out.println(countAlternatingSumSubsets(nums, target));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countAlternatingSumSubsets(int* nums, int n, int target) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    printf("%lld\\n", countAlternatingSumSubsets(nums, n, target));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countAlternatingSumSubsets(vector<int>& nums, int target) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int target;
        cin >> target;
        cout << countAlternatingSumSubsets(nums, target) << "\\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-h3',
    title: 'XOR Equals Sum Subsets',
    difficulty: 'Hard',
    description:
      'Given n non-negative integers, count subsets where bitwise XOR of selected values equals arithmetic sum of selected values.',
    constraints: [
      '0 <= n <= 22',
      '0 <= nums[i] <= 10^6',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]',
        output: '5',
        explanation: 'The valid subsets are [], [1], [2], [3], and [1, 2].',
      },
      {
        input: 'n = 2\nnums = [0, 0]',
        output: '4',
        explanation: 'All subsets satisfy XOR = 0 and sum = 0.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '5', hidden: false },
      { input: '2\n0 0', expectedOutput: '4', hidden: false },
      { input: '0', expectedOutput: '1', hidden: true },
      { input: '3\n1 1 1', expectedOutput: '4', hidden: true },
      { input: '4\n8 4 2 1', expectedOutput: '16', hidden: true },
    ],
    starterCode: {
      python: `def count_xor_equals_sum_subsets(nums):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_xor_equals_sum_subsets(nums))`,
      java: `import java.util.*;

public class Solution {
    public static long countXorEqualsSumSubsets(int[] nums) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(countXorEqualsSumSubsets(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countXorEqualsSumSubsets(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%lld\\n", countXorEqualsSumSubsets(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countXorEqualsSumSubsets(vector<int>& nums) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        cout << countXorEqualsSumSubsets(nums) << "\\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-h4',
    title: 'One From Each Pair Target Printer',
    difficulty: 'Hard',
    description:
      'Given an even-length array, elements are grouped as adjacent pairs (0,1), (2,3), and so on. Print all subsets that pick exactly one element from each pair and have sum equal to target. Print in mask order, or None if no subset exists.',
    constraints: [
      '0 <= n <= 16',
      'n is even',
      '-50 <= nums[i] <= 50',
      '-500 <= target <= 500',
    ],
    examples: [
      {
        input: 'n = 4\nnums = [3, 5, 2, 4]\ntarget = 7',
        output: '[5, 2]\n[3, 4]',
        explanation:
          'Two valid subsets exist: choose (5,2) and choose (3,4). They appear in mask order.',
      },
      {
        input: 'n = 4\nnums = [1, 2, 3, 4]\ntarget = 20',
        output: 'None',
        explanation: 'No valid pair-choice subset reaches sum 20.',
      },
    ],
    testCases: [
      {
        input: '4\n3 5 2 4\n7',
        expectedOutput: '[5, 2]\n[3, 4]',
        hidden: false,
      },
      { input: '4\n1 2 3 4\n20', expectedOutput: 'None', hidden: false },
      { input: '0\n0', expectedOutput: '[]', hidden: true },
      {
        input: '6\n1 1 1 1 1 1\n3',
        expectedOutput: '[1, 1, 1]\n[1, 1, 1]\n[1, 1, 1]\n[1, 1, 1]\n[1, 1, 1]\n[1, 1, 1]\n[1, 1, 1]\n[1, 1, 1]',
        hidden: true,
      },
      { input: '2\n8 9\n8', expectedOutput: '[8]', hidden: true },
    ],
    starterCode: {
      python: `def print_one_from_each_pair_subsets(nums, target):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_one_from_each_pair_subsets(nums, target)`,
      java: `import java.util.*;

public class Solution {
    public static void printOneFromEachPairSubsets(int[] nums, int target) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int target = sc.nextInt();
            printOneFromEachPairSubsets(nums, target);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printOneFromEachPairSubsets(int* nums, int n, int target) {
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int target;
    if (scanf("%d", &target) != 1) return 0;
    printOneFromEachPairSubsets(nums, n, target);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printOneFromEachPairSubsets(vector<int>& nums, int target) {
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int target;
        cin >> target;
        printOneFromEachPairSubsets(nums, target);
    }

    return 0;
}`,
    },
  },
  {
    id: 'lps-ps-h5',
    title: 'Subset Complement Difference Count',
    difficulty: 'Hard',
    description:
      'Given n integers and value d, count subsets S such that sum(S) - sum(remaining elements) equals d.',
    constraints: [
      '0 <= n <= 22',
      '-50 <= nums[i] <= 50',
      '-2000 <= d <= 2000',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]\nd = 0',
        output: '2',
        explanation:
          'Subsets [1, 2] and [3] both give equal split, so difference is 0.',
      },
      {
        input: 'n = 4\nnums = [2, 2, 2, 2]\nd = 0',
        output: '6',
        explanation: 'Any subset of size 2 gives sum 4 against remaining sum 4.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3\n0', expectedOutput: '2', hidden: false },
      { input: '4\n2 2 2 2\n0', expectedOutput: '6', hidden: false },
      { input: '0\n0', expectedOutput: '1', hidden: true },
      { input: '3\n1 1 1\n1', expectedOutput: '3', hidden: true },
      { input: '5\n-3 -1 2 4 6\n2', expectedOutput: '3', hidden: true },
    ],
    starterCode: {
      python: `def count_difference_subsets(nums, diff):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    diff = data[1 + n]
    print(count_difference_subsets(nums, diff))`,
      java: `import java.util.*;

public class Solution {
    public static long countDifferenceSubsets(int[] nums, int diff) {
        return 0L;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int diff = sc.nextInt();
            System.out.println(countDifferenceSubsets(nums, diff));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countDifferenceSubsets(int* nums, int n, int diff) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int diff;
    if (scanf("%d", &diff) != 1) return 0;
    printf("%lld\\n", countDifferenceSubsets(nums, n, diff));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countDifferenceSubsets(vector<int>& nums, int diff) {
    return 0;
}

int main() {
    ios_base::sync_with_stdio(false);
    cin.tie(NULL);

    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) {
            cin >> nums[i];
        }
        int diff;
        cin >> diff;
        cout << countDifferenceSubsets(nums, diff) << "\\n";
    }

    return 0;
}`,
    },
  },
];
