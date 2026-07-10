export const kmpPatternMatchingSolutions = {
  'kmp-ps-e1': {
    python: `import sys

def count_target_sum_subsets(nums, target):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        current = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
        if current == target:
            total += 1
    return total

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(count_target_sum_subsets(nums, target))`,
    java: `import java.util.*;

public class Solution {
    public static long countTargetSumSubsets(int[] nums, int target) {
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int current = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                }
            }
            if (current == target) {
                total++;
            }
        }
        return total;
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
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (current == target) {
            total++;
        }
    }
    return total;
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
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (current == target) {
            total++;
        }
    }
    return total;
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
  'kmp-ps-e2': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_first_divisible_subset(nums, k):
    subset_total = 1 << len(nums)
    for mask in range(1, subset_total):
        current = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
        if current % k == 0:
            print(subset_to_string(nums, mask))
            return
    print("None")

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    k = data[1 + n]
    print_first_divisible_subset(nums, k)`,
    java: `import java.util.*;

public class Solution {
    private static String subsetToString(int[] nums, int mask) {
        StringBuilder builder = new StringBuilder();
        builder.append("[");
        boolean first = true;
        for (int index = 0; index < nums.length; index++) {
            if ((mask & (1 << index)) != 0) {
                if (!first) {
                    builder.append(", ");
                }
                builder.append(nums[index]);
                first = false;
            }
        }
        builder.append("]");
        return builder.toString();
    }

    public static void printFirstDivisibleSubset(int[] nums, int k) {
        int subsetTotal = 1 << nums.length;
        for (int mask = 1; mask < subsetTotal; mask++) {
            int current = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                }
            }
            if (current % k == 0) {
                System.out.println(subsetToString(nums, mask));
                return;
            }
        }
        System.out.println("None");
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

void printSubset(int* nums, int n, int mask) {
    printf("[");
    int first = 1;
    for (int index = 0; index < n; index++) {
        if (mask & (1 << index)) {
            if (!first) {
                printf(", ");
            }
            printf("%d", nums[index]);
            first = 0;
        }
    }
    printf("]\\n");
}

void printFirstDivisibleSubset(int* nums, int n, int k) {
    int subsetTotal = 1 << n;
    for (int mask = 1; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (current % k == 0) {
            printSubset(nums, n, mask);
            return;
        }
    }
    printf("None\\n");
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

string subsetToString(const vector<int>& nums, int mask) {
    string result = "[";
    bool first = true;
    for (int index = 0; index < (int)nums.size(); index++) {
        if (mask & (1 << index)) {
            if (!first) {
                result += ", ";
            }
            result += to_string(nums[index]);
            first = false;
        }
    }
    result += "]";
    return result;
}

void printFirstDivisibleSubset(vector<int>& nums, int k) {
    int subsetTotal = 1 << nums.size();
    for (int mask = 1; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (current % k == 0) {
            cout << subsetToString(nums, mask) << "\\n";
            return;
        }
    }
    cout << "None\\n";
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
  'kmp-ps-e3': {
    python: `import sys

def count_even_size_odd_sum_subsets(nums):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        current_sum = 0
        size = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current_sum += value
                size += 1
        if size % 2 == 0 and current_sum % 2 != 0:
            total += 1
    return total

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_even_size_odd_sum_subsets(nums))`,
    java: `import java.util.*;

public class Solution {
    public static long countEvenSizeOddSumSubsets(int[] nums) {
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int currentSum = 0;
            int size = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    currentSum += nums[index];
                    size++;
                }
            }
            if (size % 2 == 0 && currentSum % 2 != 0) {
                total++;
            }
        }
        return total;
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
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int currentSum = 0;
        int size = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                currentSum += nums[index];
                size++;
            }
        }
        if (size % 2 == 0 && currentSum % 2 != 0) {
            total++;
        }
    }
    return total;
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
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int currentSum = 0;
        int size = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                currentSum += nums[index];
                size++;
            }
        }
        if (size % 2 == 0 && currentSum % 2 != 0) {
            total++;
        }
    }
    return total;
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
  'kmp-ps-e4': {
    python: `import sys

def max_subset_xor(nums):
    best = 0
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        current = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current ^= value
        if current > best:
            best = current
    return best

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(max_subset_xor(nums))`,
    java: `import java.util.*;

public class Solution {
    public static int maxSubsetXor(int[] nums) {
        int best = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int current = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current ^= nums[index];
                }
            }
            if (current > best) {
                best = current;
            }
        }
        return best;
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
    int best = 0;
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current ^= nums[index];
            }
        }
        if (current > best) {
            best = current;
        }
    }
    return best;
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
    int best = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current ^= nums[index];
            }
        }
        if (current > best) {
            best = current;
        }
    }
    return best;
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
  'kmp-ps-e5': {
    python: `import sys

def count_size_sum_subsets(nums, k, target):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        current = 0
        size = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
                size += 1
        if size == k and current == target:
            total += 1
    return total

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
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int current = 0;
            int size = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                    size++;
                }
            }
            if (size == k && current == target) {
                total++;
            }
        }
        return total;
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
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        int size = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
                size++;
            }
        }
        if (size == k && current == target) {
            total++;
        }
    }
    return total;
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
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        int size = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
                size++;
            }
        }
        if (size == k && current == target) {
            total++;
        }
    }
    return total;
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
  'kmp-ps-m1': {
    python: `import sys

def min_subset_sum_distance(nums, target):
    best = abs(target)
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        current = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
        distance = abs(current - target)
        if distance < best:
            best = distance
    return best

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(min_subset_sum_distance(nums, target))`,
    java: `import java.util.*;

public class Solution {
    public static int minSubsetSumDistance(int[] nums, int target) {
        int best = Math.abs(target);
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int current = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                }
            }
            int distance = Math.abs(current - target);
            if (distance < best) {
                best = distance;
            }
        }
        return best;
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

int absoluteValue(int x) {
    return x < 0 ? -x : x;
}

int minSubsetSumDistance(int* nums, int n, int target) {
    int best = absoluteValue(target);
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        int distance = absoluteValue(current - target);
        if (distance < best) {
            best = distance;
        }
    }
    return best;
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
#include <cstdlib>

using namespace std;

int minSubsetSumDistance(vector<int>& nums, int target) {
    int best = abs(target);
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        int distance = abs(current - target);
        if (distance < best) {
            best = distance;
        }
    }
    return best;
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
  'kmp-ps-m2': {
    python: `import sys

def count_small_range_subsets(nums, limit):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(1, subset_total):
        minimum = None
        maximum = None
        for index, value in enumerate(nums):
            if mask & (1 << index):
                if minimum is None or value < minimum:
                    minimum = value
                if maximum is None or value > maximum:
                    maximum = value
        if maximum - minimum <= limit:
            total += 1
    return total

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    limit = data[1 + n]
    print(count_small_range_subsets(nums, limit))`,
    java: `import java.util.*;

public class Solution {
    public static long countSmallRangeSubsets(int[] nums, int limit) {
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 1; mask < subsetTotal; mask++) {
            int minimum = Integer.MAX_VALUE;
            int maximum = Integer.MIN_VALUE;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    minimum = Math.min(minimum, nums[index]);
                    maximum = Math.max(maximum, nums[index]);
                }
            }
            if (maximum - minimum <= limit) {
                total++;
            }
        }
        return total;
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
#include <limits.h>

long long countSmallRangeSubsets(int* nums, int n, int limit) {
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 1; mask < subsetTotal; mask++) {
        int minimum = INT_MAX;
        int maximum = INT_MIN;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                if (nums[index] < minimum) minimum = nums[index];
                if (nums[index] > maximum) maximum = nums[index];
            }
        }
        if (maximum - minimum <= limit) {
            total++;
        }
    }
    return total;
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
#include <climits>

using namespace std;

long long countSmallRangeSubsets(vector<int>& nums, int limit) {
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 1; mask < subsetTotal; mask++) {
        int minimum = INT_MAX;
        int maximum = INT_MIN;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                minimum = min(minimum, nums[index]);
                maximum = max(maximum, nums[index]);
            }
        }
        if (maximum - minimum <= limit) {
            total++;
        }
    }
    return total;
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
  'kmp-ps-m3': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_best_subset_under_limit(nums, limit):
    best_mask = -1
    best_sum = 0
    best_size = 0
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        current = 0
        size = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
                size += 1
        if current <= limit:
            if (
                best_mask == -1
                or current > best_sum
                or (current == best_sum and size < best_size)
                or (current == best_sum and size == best_size and mask < best_mask)
            ):
                best_mask = mask
                best_sum = current
                best_size = size
    if best_mask == -1:
        print("None")
    else:
        print(subset_to_string(nums, best_mask))

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    limit = data[1 + n]
    print_best_subset_under_limit(nums, limit)`,
    java: `import java.util.*;

public class Solution {
    private static String subsetToString(int[] nums, int mask) {
        StringBuilder builder = new StringBuilder();
        builder.append("[");
        boolean first = true;
        for (int index = 0; index < nums.length; index++) {
            if ((mask & (1 << index)) != 0) {
                if (!first) {
                    builder.append(", ");
                }
                builder.append(nums[index]);
                first = false;
            }
        }
        builder.append("]");
        return builder.toString();
    }

    public static void printBestSubsetUnderLimit(int[] nums, int limit) {
        int bestMask = -1;
        int bestSum = 0;
        int bestSize = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int current = 0;
            int size = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                    size++;
                }
            }
            if (current <= limit) {
                if (bestMask == -1 || current > bestSum || (current == bestSum && size < bestSize) || (current == bestSum && size == bestSize && mask < bestMask)) {
                    bestMask = mask;
                    bestSum = current;
                    bestSize = size;
                }
            }
        }
        if (bestMask == -1) {
            System.out.println("None");
        } else {
            System.out.println(subsetToString(nums, bestMask));
        }
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

void printSubset(int* nums, int n, int mask) {
    printf("[");
    int first = 1;
    for (int index = 0; index < n; index++) {
        if (mask & (1 << index)) {
            if (!first) {
                printf(", ");
            }
            printf("%d", nums[index]);
            first = 0;
        }
    }
    printf("]\\n");
}

void printBestSubsetUnderLimit(int* nums, int n, int limit) {
    int bestMask = -1;
    int bestSum = 0;
    int bestSize = 0;
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        int size = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
                size++;
            }
        }
        if (current <= limit) {
            if (bestMask == -1 || current > bestSum || (current == bestSum && size < bestSize) || (current == bestSum && size == bestSize && mask < bestMask)) {
                bestMask = mask;
                bestSum = current;
                bestSize = size;
            }
        }
    }
    if (bestMask == -1) {
        printf("None\\n");
    } else {
        printSubset(nums, n, bestMask);
    }
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

string subsetToString(const vector<int>& nums, int mask) {
    string result = "[";
    bool first = true;
    for (int index = 0; index < (int)nums.size(); index++) {
        if (mask & (1 << index)) {
            if (!first) {
                result += ", ";
            }
            result += to_string(nums[index]);
            first = false;
        }
    }
    result += "]";
    return result;
}

void printBestSubsetUnderLimit(vector<int>& nums, int limit) {
    int bestMask = -1;
    int bestSum = 0;
    int bestSize = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        int size = __builtin_popcount((unsigned int)mask);
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (current <= limit) {
            if (bestMask == -1 || current > bestSum || (current == bestSum && size < bestSize) || (current == bestSum && size == bestSize && mask < bestMask)) {
                bestMask = mask;
                bestSum = current;
                bestSize = size;
            }
        }
    }
    if (bestMask == -1) {
        cout << "None\\n";
    } else {
        cout << subsetToString(nums, bestMask) << "\\n";
    }
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
  'kmp-ps-m4': {
    python: `import sys

def count_integral_average_subsets(nums):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(1, subset_total):
        current = 0
        size = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
                size += 1
        if current % size == 0:
            total += 1
    return total

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_integral_average_subsets(nums))`,
    java: `import java.util.*;

public class Solution {
    public static long countIntegralAverageSubsets(int[] nums) {
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 1; mask < subsetTotal; mask++) {
            int current = 0;
            int size = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                    size++;
                }
            }
            if (current % size == 0) {
                total++;
            }
        }
        return total;
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
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 1; mask < subsetTotal; mask++) {
        int current = 0;
        int size = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
                size++;
            }
        }
        if (current % size == 0) {
            total++;
        }
    }
    return total;
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
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 1; mask < subsetTotal; mask++) {
        int current = 0;
        int size = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
                size++;
            }
        }
        if (current % size == 0) {
            total++;
        }
    }
    return total;
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
  'kmp-ps-m5': {
    python: `import sys

def count_product_mod_subsets(nums, mod, target):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(1, subset_total):
        current = 1 % mod
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current = (current * (value % mod)) % mod
        if current == target:
            total += 1
    return total

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
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 1; mask < subsetTotal; mask++) {
            long current = 1 % mod;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current = (current * (nums[index] % mod)) % mod;
                }
            }
            if ((int)current == target) {
                total++;
            }
        }
        return total;
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
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 1; mask < subsetTotal; mask++) {
        long long current = 1 % mod;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current = (current * (nums[index] % mod)) % mod;
            }
        }
        if ((int)current == target) {
            total++;
        }
    }
    return total;
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
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 1; mask < subsetTotal; mask++) {
        long long current = 1 % mod;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current = (current * (nums[index] % mod)) % mod;
            }
        }
        if ((int)current == target) {
            total++;
        }
    }
    return total;
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
  'kmp-ps-h1': {
    python: `import sys

def is_prime(value):
    if value < 2:
        return False
    divisor = 2
    while divisor * divisor <= value:
        if value % divisor == 0:
            return False
        divisor += 1
    return True

def count_prime_sum_prime_size_subsets(nums):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(1, subset_total):
        current_sum = 0
        size = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current_sum += value
                size += 1
        if is_prime(size) and is_prime(current_sum):
            total += 1
    return total

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_prime_sum_prime_size_subsets(nums))`,
    java: `import java.util.*;

public class Solution {
    private static boolean isPrime(int value) {
        if (value < 2) {
            return false;
        }
        for (int divisor = 2; divisor * divisor <= value; divisor++) {
            if (value % divisor == 0) {
                return false;
            }
        }
        return true;
    }

    public static long countPrimeSumPrimeSizeSubsets(int[] nums) {
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 1; mask < subsetTotal; mask++) {
            int currentSum = 0;
            int size = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    currentSum += nums[index];
                    size++;
                }
            }
            if (isPrime(size) && isPrime(currentSum)) {
                total++;
            }
        }
        return total;
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
#include <stdbool.h>

bool isPrime(int value) {
    if (value < 2) {
        return false;
    }
    for (int divisor = 2; divisor * divisor <= value; divisor++) {
        if (value % divisor == 0) {
            return false;
        }
    }
    return true;
}

long long countPrimeSumPrimeSizeSubsets(int* nums, int n) {
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 1; mask < subsetTotal; mask++) {
        int currentSum = 0;
        int size = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                currentSum += nums[index];
                size++;
            }
        }
        if (isPrime(size) && isPrime(currentSum)) {
            total++;
        }
    }
    return total;
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

bool isPrime(int value) {
    if (value < 2) {
        return false;
    }
    for (int divisor = 2; divisor * divisor <= value; divisor++) {
        if (value % divisor == 0) {
            return false;
        }
    }
    return true;
}

long long countPrimeSumPrimeSizeSubsets(vector<int>& nums) {
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 1; mask < subsetTotal; mask++) {
        int currentSum = 0;
        int size = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                currentSum += nums[index];
                size++;
            }
        }
        if (isPrime(size) && isPrime(currentSum)) {
            total++;
        }
    }
    return total;
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
  'kmp-ps-h2': {
    python: `import sys

def count_alternating_sum_subsets(nums, target):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        current = 0
        sign = 1
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += sign * value
                sign *= -1
        if current == target:
            total += 1
    return total

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print(count_alternating_sum_subsets(nums, target))`,
    java: `import java.util.*;

public class Solution {
    public static long countAlternatingSumSubsets(int[] nums, int target) {
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int current = 0;
            int sign = 1;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += sign * nums[index];
                    sign = -sign;
                }
            }
            if (current == target) {
                total++;
            }
        }
        return total;
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
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        int sign = 1;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += sign * nums[index];
                sign = -sign;
            }
        }
        if (current == target) {
            total++;
        }
    }
    return total;
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
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        int sign = 1;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += sign * nums[index];
                sign = -sign;
            }
        }
        if (current == target) {
            total++;
        }
    }
    return total;
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
  'kmp-ps-h3': {
    python: `import sys

def count_xor_equals_sum_subsets(nums):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        current_sum = 0
        current_xor = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current_sum += value
                current_xor ^= value
        if current_sum == current_xor:
            total += 1
    return total

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_xor_equals_sum_subsets(nums))`,
    java: `import java.util.*;

public class Solution {
    public static long countXorEqualsSumSubsets(int[] nums) {
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int currentSum = 0;
            int currentXor = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    currentSum += nums[index];
                    currentXor ^= nums[index];
                }
            }
            if (currentSum == currentXor) {
                total++;
            }
        }
        return total;
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
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int currentSum = 0;
        int currentXor = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                currentSum += nums[index];
                currentXor ^= nums[index];
            }
        }
        if (currentSum == currentXor) {
            total++;
        }
    }
    return total;
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
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int currentSum = 0;
        int currentXor = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                currentSum += nums[index];
                currentXor ^= nums[index];
            }
        }
        if (currentSum == currentXor) {
            total++;
        }
    }
    return total;
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
  'kmp-ps-h4': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_one_from_each_pair_subsets(nums, target):
    n = len(nums)
    subset_total = 1 << n
    lines = []
    for mask in range(subset_total):
        valid = True
        current = 0
        for pair_start in range(0, n, 2):
            first = (mask >> pair_start) & 1
            second = (mask >> (pair_start + 1)) & 1
            if first + second != 1:
                valid = False
                break
            if first == 1:
                current += nums[pair_start]
            else:
                current += nums[pair_start + 1]
        if valid and current == target:
            lines.append(subset_to_string(nums, mask))
    if lines:
        sys.stdout.write("\\n".join(lines))
    else:
        sys.stdout.write("None")

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_one_from_each_pair_subsets(nums, target)`,
    java: `import java.util.*;

public class Solution {
    private static String subsetToString(int[] nums, int mask) {
        StringBuilder builder = new StringBuilder();
        builder.append("[");
        boolean first = true;
        for (int index = 0; index < nums.length; index++) {
            if ((mask & (1 << index)) != 0) {
                if (!first) {
                    builder.append(", ");
                }
                builder.append(nums[index]);
                first = false;
            }
        }
        builder.append("]");
        return builder.toString();
    }

    public static void printOneFromEachPairSubsets(int[] nums, int target) {
        int n = nums.length;
        int subsetTotal = 1 << n;
        List<String> lines = new ArrayList<>();
        for (int mask = 0; mask < subsetTotal; mask++) {
            boolean valid = true;
            int current = 0;
            for (int pairStart = 0; pairStart < n; pairStart += 2) {
                int first = (mask >> pairStart) & 1;
                int second = (mask >> (pairStart + 1)) & 1;
                if (first + second != 1) {
                    valid = false;
                    break;
                }
                if (first == 1) {
                    current += nums[pairStart];
                } else {
                    current += nums[pairStart + 1];
                }
            }
            if (valid && current == target) {
                lines.add(subsetToString(nums, mask));
            }
        }
        if (lines.isEmpty()) {
            System.out.println("None");
        } else {
            for (String line : lines) {
                System.out.println(line);
            }
        }
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
#include <stdbool.h>

void printSubset(int* nums, int n, int mask) {
    printf("[");
    int first = 1;
    for (int index = 0; index < n; index++) {
        if (mask & (1 << index)) {
            if (!first) {
                printf(", ");
            }
            printf("%d", nums[index]);
            first = 0;
        }
    }
    printf("]\\n");
}

void printOneFromEachPairSubsets(int* nums, int n, int target) {
    int subsetTotal = 1 << n;
    int found = 0;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int valid = 1;
        int current = 0;
        for (int pairStart = 0; pairStart < n; pairStart += 2) {
            int first = (mask >> pairStart) & 1;
            int second = (mask >> (pairStart + 1)) & 1;
            if (first + second != 1) {
                valid = 0;
                break;
            }
            if (first == 1) {
                current += nums[pairStart];
            } else {
                current += nums[pairStart + 1];
            }
        }
        if (valid && current == target) {
            printSubset(nums, n, mask);
            found = 1;
        }
    }
    if (!found) {
        printf("None\\n");
    }
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

string subsetToString(const vector<int>& nums, int mask) {
    string result = "[";
    bool first = true;
    for (int index = 0; index < (int)nums.size(); index++) {
        if (mask & (1 << index)) {
            if (!first) {
                result += ", ";
            }
            result += to_string(nums[index]);
            first = false;
        }
    }
    result += "]";
    return result;
}

void printOneFromEachPairSubsets(vector<int>& nums, int target) {
    int n = nums.size();
    int subsetTotal = 1 << n;
    bool found = false;
    for (int mask = 0; mask < subsetTotal; mask++) {
        bool valid = true;
        int current = 0;
        for (int pairStart = 0; pairStart < n; pairStart += 2) {
            int first = (mask >> pairStart) & 1;
            int second = (mask >> (pairStart + 1)) & 1;
            if (first + second != 1) {
                valid = false;
                break;
            }
            if (first == 1) {
                current += nums[pairStart];
            } else {
                current += nums[pairStart + 1];
            }
        }
        if (valid && current == target) {
            cout << subsetToString(nums, mask) << "\\n";
            found = true;
        }
    }
    if (!found) {
        cout << "None\\n";
    }
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
  'kmp-ps-h5': {
    python: `import sys

def count_difference_subsets(nums, diff):
    total_sum = sum(nums)
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        subset_sum = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                subset_sum += value
        if subset_sum - (total_sum - subset_sum) == diff:
            total += 1
    return total

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    diff = data[1 + n]
    print(count_difference_subsets(nums, diff))`,
    java: `import java.util.*;

public class Solution {
    public static long countDifferenceSubsets(int[] nums, int diff) {
        int totalSum = 0;
        for (int value : nums) {
            totalSum += value;
        }
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int subsetSum = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    subsetSum += nums[index];
                }
            }
            if (subsetSum - (totalSum - subsetSum) == diff) {
                total++;
            }
        }
        return total;
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
    int totalSum = 0;
    for (int i = 0; i < n; i++) {
        totalSum += nums[i];
    }
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int subsetSum = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                subsetSum += nums[index];
            }
        }
        if (subsetSum - (totalSum - subsetSum) == diff) {
            total++;
        }
    }
    return total;
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
    int totalSum = 0;
    for (int value : nums) {
        totalSum += value;
    }
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int subsetSum = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                subsetSum += nums[index];
            }
        }
        if (subsetSum - (totalSum - subsetSum) == diff) {
            total++;
        }
    }
    return total;
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
};

export default kmpPatternMatchingSolutions;
