export const powerSetProblems = [
  // EASY
  {
    id: 'psg-e1',
    title: 'Reveal Every Bundle',
    difficulty: 'Easy',
    description:
      'Given n integers, print every subset in mask order from 0 to 2^n - 1. Print one subset per line using bracket format and include the empty subset.',
    constraints: ['0 <= n <= 8', '-20 <= nums[i] <= 20'],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]',
        output: '[]\n[1]\n[2]\n[1, 2]\n[3]\n[1, 3]\n[2, 3]\n[1, 2, 3]',
        explanation:
          'The masks from 000 to 111 generate all eight subsets in order.',
      },
      {
        input: 'n = 2\nnums = [4, 5]',
        output: '[]\n[4]\n[5]\n[4, 5]',
        explanation:
          'The four masks 00, 01, 10, and 11 generate the complete power set.',
      },
    ],
    testCases: [
      {
        input: '3\n1 2 3',
        expectedOutput: '[]\n[1]\n[2]\n[1, 2]\n[3]\n[1, 3]\n[2, 3]\n[1, 2, 3]',
        hidden: false,
      },
      {
        input: '2\n4 5',
        expectedOutput: '[]\n[4]\n[5]\n[4, 5]',
        hidden: false,
      },
      { input: '0', expectedOutput: '[]', hidden: true },
      { input: '1\n7', expectedOutput: '[]\n[7]', hidden: true },
      { input: '2\n1 1', expectedOutput: '[]\n[1]\n[1]\n[1, 1]', hidden: true },
    ],
    starterCode: {
      python: `def list_all_subsets(nums):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    list_all_subsets(nums)`,
      java: `import java.util.*;

public class Solution {
    public static void listAllSubsets(int[] nums) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            listAllSubsets(nums);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void listAllSubsets(int* nums, int n) {
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    listAllSubsets(nums, n);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void listAllSubsets(vector<int>& nums) {
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
        listAllSubsets(nums);
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-e2',
    title: 'Count Exact Budget Bundles',
    difficulty: 'Easy',
    description:
      'Given n integers and a target sum, count how many subsets sum exactly to the target.',
    constraints: [
      '0 <= n <= 20',
      '-30 <= nums[i] <= 30',
      '-200 <= target <= 200',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]\ntarget = 3',
        output: '2',
        explanation: 'The subsets [1, 2] and [3] both have sum 3.',
      },
      {
        input: 'n = 3\nnums = [2, 2, 2]\ntarget = 4',
        output: '3',
        explanation:
          'Any choice of two positions gives sum 4, so there are three valid subsets.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3\n3', expectedOutput: '2', hidden: false },
      { input: '3\n2 2 2\n4', expectedOutput: '3', hidden: false },
      { input: '0\n0', expectedOutput: '1', hidden: true },
      { input: '3\n1 1 1\n2', expectedOutput: '3', hidden: true },
      {
        input: '20\n1 3 5 7 9 11 13 15 17 19 2 4 6 8 10 12 14 16 18 20\n1000',
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
    printf("%lld\n", countTargetSumSubsets(nums, n, target));
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
        cout << countTargetSumSubsets(nums, target) << "\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-e3',
    title: 'First Exact Budget Bundle',
    difficulty: 'Easy',
    description:
      'Given n integers and a target sum, print the first non-empty subset in mask order whose sum equals the target. Print None if no such subset exists.',
    constraints: [
      '0 <= n <= 20',
      '-30 <= nums[i] <= 30',
      '-200 <= target <= 200',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]\ntarget = 3',
        output: '[1, 2]',
        explanation:
          'Mask 011 appears before mask 100, so [1, 2] is the first matching non-empty subset.',
      },
      {
        input: 'n = 2\nnums = [4, 5]\ntarget = 3',
        output: 'None',
        explanation: 'No non-empty subset adds up to 3.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3\n3', expectedOutput: '[1, 2]', hidden: false },
      { input: '2\n4 5\n3', expectedOutput: 'None', hidden: false },
      { input: '0\n0', expectedOutput: 'None', hidden: true },
      { input: '3\n1 1 1\n2', expectedOutput: '[1, 1]', hidden: true },
      { input: '4\n2 -1 1 2\n1', expectedOutput: '[2, -1]', hidden: true },
    ],
    starterCode: {
      python: `def print_first_target_subset(nums, target):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_first_target_subset(nums, target)`,
      java: `import java.util.*;

public class Solution {
    public static void printFirstTargetSubset(int[] nums, int target) {
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
            printFirstTargetSubset(nums, target);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printFirstTargetSubset(int* nums, int n, int target) {
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
    printFirstTargetSubset(nums, n, target);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printFirstTargetSubset(vector<int>& nums, int target) {
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
        printFirstTargetSubset(nums, target);
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-e4',
    title: 'Count Prime Cost Bundles',
    difficulty: 'Easy',
    description:
      'Given n integers, count how many subsets have a prime sum. A sum is prime only when it is greater than 1 and has no divisors other than 1 and itself.',
    constraints: ['0 <= n <= 20', '-30 <= nums[i] <= 30'],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 4]',
        output: '4',
        explanation: 'The prime sums are 2, 3, 5, and 7.',
      },
      {
        input: 'n = 2\nnums = [5, 5]',
        output: '2',
        explanation: 'The two single-element subsets both have prime sum 5.',
      },
    ],
    testCases: [
      { input: '3\n1 2 4', expectedOutput: '4', hidden: false },
      { input: '2\n5 5', expectedOutput: '2', hidden: false },
      { input: '0', expectedOutput: '0', hidden: true },
      { input: '3\n2 2 2', expectedOutput: '3', hidden: true },
      {
        input: '20\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
        expectedOutput: '0',
        hidden: true,
      },
    ],
    starterCode: {
      python: `def count_prime_sum_subsets(nums):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_prime_sum_subsets(nums))`,
      java: `import java.util.*;

public class Solution {
    public static long countPrimeSumSubsets(int[] nums) {
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
            System.out.println(countPrimeSumSubsets(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

long long countPrimeSumSubsets(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%lld\n", countPrimeSumSubsets(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countPrimeSumSubsets(vector<int>& nums) {
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
        cout << countPrimeSumSubsets(nums) << "\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-e5',
    title: 'Show Fixed-Size Bundles',
    difficulty: 'Easy',
    description:
      'Given n integers and an integer k, print every subset that contains exactly k elements. Print one subset per line in mask order, or None if no subset matches.',
    constraints: ['0 <= n <= 10', '-20 <= nums[i] <= 20', '0 <= k <= n'],
    examples: [
      {
        input: 'n = 4\nnums = [1, 2, 3, 4]\nk = 2',
        output: '[1, 2]\n[1, 3]\n[2, 3]\n[1, 4]\n[2, 4]\n[3, 4]',
        explanation:
          'These are the six subsets with exactly two elements, listed by increasing mask value.',
      },
      {
        input: 'n = 3\nnums = [7, 8, 9]\nk = 1',
        output: '[7]\n[8]\n[9]',
        explanation: 'Each single-element subset is valid.',
      },
    ],
    testCases: [
      {
        input: '4\n1 2 3 4\n2',
        expectedOutput: '[1, 2]\n[1, 3]\n[2, 3]\n[1, 4]\n[2, 4]\n[3, 4]',
        hidden: false,
      },
      { input: '3\n7 8 9\n1', expectedOutput: '[7]\n[8]\n[9]', hidden: false },
      { input: '0\n0', expectedOutput: '[]', hidden: true },
      { input: '2\n1 1\n1', expectedOutput: '[1]\n[1]', hidden: true },
      { input: '3\n1 2 3\n4', expectedOutput: 'None', hidden: true },
    ],
    starterCode: {
      python: `def print_k_element_subsets(nums, k):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    k = data[1 + n]
    print_k_element_subsets(nums, k)`,
      java: `import java.util.*;

public class Solution {
    public static void printKElementSubsets(int[] nums, int k) {
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
            printKElementSubsets(nums, k);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printKElementSubsets(int* nums, int n, int k) {
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
    printKElementSubsets(nums, n, k);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printKElementSubsets(vector<int>& nums, int k) {
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
        printKElementSubsets(nums, k);
    }

    return 0;
}`,
    },
  },
  // MEDIUM
  {
    id: 'psg-m1',
    title: 'Show Modulo-Ready Bundles',
    difficulty: 'Medium',
    description:
      'Given n integers, a modulus, and a remainder, print every subset whose sum leaves that remainder when divided by the modulus.',
    constraints: [
      '0 <= n <= 10',
      '-20 <= nums[i] <= 20',
      '1 <= mod_value <= 20',
      '0 <= remainder < mod_value',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]\nmod_value = 3\nremainder = 0',
        output: '[]\n[1, 2]\n[3]\n[1, 2, 3]',
        explanation:
          'These are exactly the subsets whose sums are multiples of 3.',
      },
      {
        input: 'n = 2\nnums = [2, 5]\nmod_value = 4\nremainder = 1',
        output: '[5]',
        explanation:
          'Only the subset [5] has sum 5, which leaves remainder 1 modulo 4.',
      },
    ],
    testCases: [
      {
        input: '3\n1 2 3\n3\n0',
        expectedOutput: '[]\n[1, 2]\n[3]\n[1, 2, 3]',
        hidden: false,
      },
      { input: '2\n2 5\n4\n1', expectedOutput: '[5]', hidden: false },
      { input: '0\n5\n0', expectedOutput: '[]', hidden: true },
      {
        input: '3\n1 1 1\n2\n1',
        expectedOutput: '[1]\n[1]\n[1]\n[1, 1, 1]',
        hidden: true,
      },
      { input: '3\n2 3 5\n20\n30', expectedOutput: 'None', hidden: true },
    ],
    starterCode: {
      python: `def print_modulo_subsets(nums, mod_value, remainder):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    mod_value = data[1 + n]
    remainder = data[2 + n]
    print_modulo_subsets(nums, mod_value, remainder)`,
      java: `import java.util.*;

public class Solution {
    public static void printModuloSubsets(int[] nums, int modValue, int remainder) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int modValue = sc.nextInt();
            int remainder = sc.nextInt();
            printModuloSubsets(nums, modValue, remainder);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printModuloSubsets(int* nums, int n, int modValue, int remainder) {
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int modValue;
    int remainder;
    if (scanf("%d", &modValue) != 1) return 0;
    if (scanf("%d", &remainder) != 1) return 0;
    printModuloSubsets(nums, n, modValue, remainder);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printModuloSubsets(vector<int>& nums, int modValue, int remainder) {
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
        int modValue;
        int remainder;
        cin >> modValue >> remainder;
        printModuloSubsets(nums, modValue, remainder);
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-m2',
    title: 'Show XOR Match Bundles',
    difficulty: 'Medium',
    description:
      'Given n integers and a target value, print every subset whose bitwise XOR equals the target.',
    constraints: [
      '0 <= n <= 12',
      '-30 <= nums[i] <= 30',
      '-30 <= target <= 30',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [2, 3, 1]\ntarget = 0',
        output: '[]\n[2, 3, 1]',
        explanation:
          'The empty subset has XOR 0, and the full subset also has XOR 0.',
      },
      {
        input: 'n = 3\nnums = [5, 6, 3]\ntarget = 6',
        output: '[6]\n[5, 3]',
        explanation: 'The subset [6] matches directly, and 5 xor 3 is also 6.',
      },
    ],
    testCases: [
      { input: '3\n2 3 1\n0', expectedOutput: '[]\n[2, 3, 1]', hidden: false },
      { input: '3\n5 6 3\n6', expectedOutput: '[6]\n[5, 3]', hidden: false },
      { input: '0\n0', expectedOutput: '[]', hidden: true },
      { input: '2\n1 1\n0', expectedOutput: '[]\n[1, 1]', hidden: true },
      {
        input: '3\n4 4 4\n4',
        expectedOutput: '[4]\n[4]\n[4]\n[4, 4, 4]',
        hidden: true,
      },
    ],
    starterCode: {
      python: `def print_xor_target_subsets(nums, target):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_xor_target_subsets(nums, target)`,
      java: `import java.util.*;

public class Solution {
    public static void printXorTargetSubsets(int[] nums, int target) {
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
            printXorTargetSubsets(nums, target);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printXorTargetSubsets(int* nums, int n, int target) {
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
    printXorTargetSubsets(nums, n, target);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printXorTargetSubsets(vector<int>& nums, int target) {
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
        printXorTargetSubsets(nums, target);
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-m3',
    title: 'Show Range-Friendly Bundles',
    difficulty: 'Medium',
    description:
      'Given n integers and two bounds low and high, print every subset whose sum lies between low and high, inclusive.',
    constraints: [
      '0 <= n <= 12',
      '-20 <= nums[i] <= 20',
      '-100 <= low <= high <= 100',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]\nlow = 3\nhigh = 4',
        output: '[1, 2]\n[3]\n[1, 3]',
        explanation:
          'These subsets have sums 3, 3, and 4, all inside the given range.',
      },
      {
        input: 'n = 2\nnums = [4, 5]\nlow = 10\nhigh = 12',
        output: 'None',
        explanation: 'No subset sum falls inside the interval [10, 12].',
      },
    ],
    testCases: [
      {
        input: '3\n1 2 3\n3\n4',
        expectedOutput: '[1, 2]\n[3]\n[1, 3]',
        hidden: false,
      },
      { input: '2\n4 5\n10\n12', expectedOutput: 'None', hidden: false },
      { input: '0\n0\n0', expectedOutput: '[]', hidden: true },
      {
        input: '3\n1 1 1\n2\n2',
        expectedOutput: '[1, 1]\n[1, 1]\n[1, 1]',
        hidden: true,
      },
      { input: '3\n2 3 5\n20\n30', expectedOutput: 'None', hidden: true },
    ],
    starterCode: {
      python: `def print_bounded_sum_subsets(nums, low, high):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    low = data[1 + n]
    high = data[2 + n]
    print_bounded_sum_subsets(nums, low, high)`,
      java: `import java.util.*;

public class Solution {
    public static void printBoundedSumSubsets(int[] nums, int low, int high) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int low = sc.nextInt();
            int high = sc.nextInt();
            printBoundedSumSubsets(nums, low, high);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printBoundedSumSubsets(int* nums, int n, int low, int high) {
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    int low;
    int high;
    if (scanf("%d", &low) != 1) return 0;
    if (scanf("%d", &high) != 1) return 0;
    printBoundedSumSubsets(nums, n, low, high);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printBoundedSumSubsets(vector<int>& nums, int low, int high) {
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
        int low;
        int high;
        cin >> low >> high;
        printBoundedSumSubsets(nums, low, high);
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-m4',
    title: 'Choose Best Bundle Under Limit',
    difficulty: 'Medium',
    description:
      'Given n integers and a limit, print the subset with the largest sum that does not exceed the limit. Break ties by smaller subset size, then by earlier mask order. Print None if no subset fits.',
    constraints: [
      '0 <= n <= 20',
      '-50 <= nums[i] <= 50',
      '-200 <= limit <= 200',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [3, 5, 6]\nlimit = 8',
        output: '[3, 5]',
        explanation:
          'The subset [3, 5] has the largest possible sum, which is exactly 8.',
      },
      {
        input: 'n = 3\nnums = [2, 4, 6]\nlimit = -1',
        output: 'None',
        explanation: 'No subset sum is less than or equal to -1.',
      },
    ],
    testCases: [
      { input: '3\n3 5 6\n8', expectedOutput: '[3, 5]', hidden: false },
      { input: '3\n2 4 6\n-1', expectedOutput: 'None', hidden: false },
      { input: '0\n0', expectedOutput: '[]', hidden: true },
      { input: '3\n1 1 1\n1', expectedOutput: '[1]', hidden: true },
      {
        input: '20\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20\n-1',
        expectedOutput: 'None',
        hidden: true,
      },
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
    id: 'psg-m5',
    title: 'Count Averaged Bundles',
    difficulty: 'Medium',
    description:
      'Given n integers, count the non-empty subsets whose average is an integer.',
    constraints: ['1 <= n <= 15', '-20 <= nums[i] <= 20'],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]',
        output: '5',
        explanation:
          'The valid non-empty subsets are [1], [2], [3], [1, 3], and [1, 2, 3].',
      },
      {
        input: 'n = 2\nnums = [2, 4]',
        output: '3',
        explanation: 'The valid non-empty subsets are [2], [4], and [2, 4].',
      },
    ],
    testCases: [
      { input: '3\n1 2 3', expectedOutput: '5', hidden: false },
      { input: '2\n2 4', expectedOutput: '3', hidden: false },
      { input: '3\n1 1 1', expectedOutput: '7', hidden: true },
      { input: '5\n0 0 0 0 0', expectedOutput: '31', hidden: true },
      {
        input: '15\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0',
        expectedOutput: '32767',
        hidden: true,
      },
    ],
    starterCode: {
      python: `def count_average_integral_subsets(nums):
    return 0

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_average_integral_subsets(nums))`,
      java: `import java.util.*;

public class Solution {
    public static long countAverageIntegralSubsets(int[] nums) {
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
            System.out.println(countAverageIntegralSubsets(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countAverageIntegralSubsets(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%lld\n", countAverageIntegralSubsets(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

long long countAverageIntegralSubsets(vector<int>& nums) {
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
        cout << countAverageIntegralSubsets(nums) << "\n";
    }

    return 0;
}`,
    },
  },
  // HARD
  {
    id: 'psg-h1',
    title: 'Prime Sum Prime Size Bundles',
    difficulty: 'Hard',
    description:
      'Given n integers, print every subset whose sum is prime and whose size is also prime.',
    constraints: ['0 <= n <= 12', '-20 <= nums[i] <= 20'],
    examples: [
      {
        input: 'n = 4\nnums = [1, 2, 3, 4]',
        output: '[1, 2]\n[2, 3]\n[1, 4]\n[1, 2, 4]\n[3, 4]',
        explanation:
          'Each listed subset has a prime sum and a prime-sized selection.',
      },
      {
        input: 'n = 3\nnums = [2, 3, 5]',
        output: '[2, 3]\n[2, 5]',
        explanation:
          'The two-element subsets [2, 3] and [2, 5] both satisfy the rule.',
      },
    ],
    testCases: [
      {
        input: '4\n1 2 3 4',
        expectedOutput: '[1, 2]\n[2, 3]\n[1, 4]\n[1, 2, 4]\n[3, 4]',
        hidden: false,
      },
      { input: '3\n2 3 5', expectedOutput: '[2, 3]\n[2, 5]', hidden: false },
      { input: '0', expectedOutput: 'None', hidden: true },
      { input: '3\n2 2 2', expectedOutput: 'None', hidden: true },
      {
        input: '12\n0 0 0 0 0 0 0 0 0 0 0 0',
        expectedOutput: 'None',
        hidden: true,
      },
    ],
    starterCode: {
      python: `def print_prime_sum_prime_size_subsets(nums):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print_prime_sum_prime_size_subsets(nums)`,
      java: `import java.util.*;

public class Solution {
    public static void printPrimeSumPrimeSizeSubsets(int[] nums) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            printPrimeSumPrimeSizeSubsets(nums);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printPrimeSumPrimeSizeSubsets(int* nums, int n) {
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printPrimeSumPrimeSizeSubsets(nums, n);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printPrimeSumPrimeSizeSubsets(vector<int>& nums) {
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
        printPrimeSumPrimeSizeSubsets(nums);
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-h2',
    title: 'Count Alternating Sum Bundles',
    difficulty: 'Hard',
    description:
      'Given n integers and a target, count the subsets whose alternating sum in original order equals the target. For a chosen subset [a, b, c, d], the alternating sum is a - b + c - d.',
    constraints: [
      '0 <= n <= 20',
      '-20 <= nums[i] <= 20',
      '-200 <= target <= 200',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]\ntarget = 2',
        output: '2',
        explanation:
          'The subsets [2] and [1, 2, 3] both have alternating sum 2.',
      },
      {
        input: 'n = 3\nnums = [4, 1, 2]\ntarget = 3',
        output: '1',
        explanation: 'Only the subset [4, 1] has alternating sum 3.',
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
    printf("%lld\n", countAlternatingSumSubsets(nums, n, target));
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
        cout << countAlternatingSumSubsets(nums, target) << "\n";
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-h3',
    title: 'Show Sum And XOR Match Bundles',
    difficulty: 'Hard',
    description:
      'Given n integers and a target, print every subset whose sum and bitwise XOR both equal the target.',
    constraints: [
      '0 <= n <= 12',
      '-20 <= nums[i] <= 20',
      '-40 <= target <= 40',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 2, 3]\ntarget = 3',
        output: '[1, 2]\n[3]',
        explanation: 'Both [1, 2] and [3] have sum 3 and XOR 3.',
      },
      {
        input: 'n = 3\nnums = [1, 1, 2]\ntarget = 2',
        output: '[2]',
        explanation:
          'Only the single-element subset [2] satisfies both conditions.',
      },
    ],
    testCases: [
      { input: '3\n1 2 3\n3', expectedOutput: '[1, 2]\n[3]', hidden: false },
      { input: '3\n1 1 2\n2', expectedOutput: '[2]', hidden: false },
      { input: '0\n0', expectedOutput: '[]', hidden: true },
      {
        input: '3\n0 0 0\n0',
        expectedOutput: '[]\n[0]\n[0]\n[0]\n[0, 0]\n[0, 0]\n[0, 0]\n[0, 0, 0]',
        hidden: true,
      },
      { input: '3\n4 5 6\n7', expectedOutput: 'None', hidden: true },
    ],
    starterCode: {
      python: `def print_sum_and_xor_subsets(nums, target):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_sum_and_xor_subsets(nums, target)`,
      java: `import java.util.*;

public class Solution {
    public static void printSumAndXorSubsets(int[] nums, int target) {
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
            printSumAndXorSubsets(nums, target);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printSumAndXorSubsets(int* nums, int n, int target) {
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
    printSumAndXorSubsets(nums, n, target);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printSumAndXorSubsets(vector<int>& nums, int target) {
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
        printSumAndXorSubsets(nums, target);
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-h4',
    title: 'Choose Closest Bundle',
    difficulty: 'Hard',
    description:
      'Given n integers and a target, print the subset whose sum is closest to the target. Break ties by smaller subset size, then earlier mask order.',
    constraints: [
      '0 <= n <= 20',
      '-50 <= nums[i] <= 50',
      '-200 <= target <= 200',
    ],
    examples: [
      {
        input: 'n = 3\nnums = [1, 4, 6]\ntarget = 7',
        output: '[1, 6]',
        explanation:
          'The subset [1, 6] hits the target exactly, so it is the closest possible answer.',
      },
      {
        input: 'n = 2\nnums = [2, 5]\ntarget = 4',
        output: '[5]',
        explanation:
          'The subset [5] has sum 5, which is only 1 away from the target.',
      },
    ],
    testCases: [
      { input: '3\n1 4 6\n7', expectedOutput: '[1, 6]', hidden: false },
      { input: '2\n2 5\n4', expectedOutput: '[5]', hidden: false },
      { input: '0\n0', expectedOutput: '[]', hidden: true },
      { input: '3\n1 1 1\n2', expectedOutput: '[1, 1]', hidden: true },
      {
        input: '20\n0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\n1',
        expectedOutput: '[]',
        hidden: true,
      },
    ],
    starterCode: {
      python: `def print_closest_sum_subset(nums, target):
    pass

import sys
data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_closest_sum_subset(nums, target)`,
      java: `import java.util.*;

public class Solution {
    public static void printClosestSumSubset(int[] nums, int target) {
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
            printClosestSumSubset(nums, target);
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void printClosestSumSubset(int* nums, int n, int target) {
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
    printClosestSumSubset(nums, n, target);
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void printClosestSumSubset(vector<int>& nums, int target) {
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
        printClosestSumSubset(nums, target);
    }

    return 0;
}`,
    },
  },
  {
    id: 'psg-h5',
    title: 'Show One-From-Each-Pair Bundles',
    difficulty: 'Hard',
    description:
      'Given an even-length array and a target, treat each consecutive pair as a bundle. Print every subset that picks exactly one item from every pair and whose sum equals the target.',
    constraints: [
      '0 <= n <= 16',
      'n is even',
      '-20 <= nums[i] <= 20',
      '-200 <= target <= 200',
    ],
    examples: [
      {
        input: 'n = 4\nnums = [1, 2, 3, 4]\ntarget = 5',
        output: '[2, 3]\n[1, 4]',
        explanation:
          'The valid choices are one number from each pair, and the matching subsets are listed in mask order.',
      },
      {
        input: 'n = 2\nnums = [5, 6]\ntarget = 6',
        output: '[6]',
        explanation:
          'Only the second item from the only pair produces the target sum.',
      },
    ],
    testCases: [
      {
        input: '4\n1 2 3 4\n5',
        expectedOutput: '[2, 3]\n[1, 4]',
        hidden: false,
      },
      { input: '2\n5 6\n6', expectedOutput: '[6]', hidden: false },
      { input: '0\n0', expectedOutput: '[]', hidden: true },
      {
        input: '4\n1 1 1 1\n2',
        expectedOutput: '[1, 1]\n[1, 1]\n[1, 1]\n[1, 1]',
        hidden: true,
      },
      {
        input: '16\n1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1\n100',
        expectedOutput: 'None',
        hidden: true,
      },
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
];
