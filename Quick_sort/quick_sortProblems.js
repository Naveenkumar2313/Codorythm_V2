export const quickSortProblems = [
  // --- EASY ---
  {
    id: 'qs-e1', title: 'Basic Quick Sort', difficulty: 'Easy',
    description: 'Implement the standard Quick Sort algorithm to sort an array of integers in ascending order. You must do this in-place.',
    constraints: ['1 <= arr.length <= 10^4', '-10^5 <= arr[i] <= 10^5'],
    examples: [
      { input: 'arr = [5, 2, 9, 1, 5, 6]', output: '[1, 2, 5, 5, 6, 9]', explanation: 'Array sorted in ascending order.' }
    ],
    testCases: [
      { input: '6\n5 2 9 1 5 6', expectedOutput: '1 2 5 5 6 9', hidden: false },
      { input: '4\n10 -1 0 8', expectedOutput: '-1 0 8 10', hidden: false }
    ],
    starterCode: {
      python: `def quick_sort(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*quick_sort(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] quickSort(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = quickSort(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void quickSort(int* arr, int n) {
    // Sort in-place
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    quickSort(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void quickSort(vector<int>& arr) {
    // Sort in-place
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        quickSort(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-e2', title: 'Partition Array Around Pivot', difficulty: 'Easy',
    description: 'Given an array and a pivot element `x` (which is guaranteed to exist in the array), partition the array such that all elements less than `x` come before it, and all elements greater than or equal to `x` come after it. Return the partitioned array.',
    constraints: ['1 <= arr.length <= 10^4', '-10^4 <= arr[i], x <= 10^4'],
    examples: [
      { input: 'arr = [9, 12, 5, 10, 14, 3, 10], x = 10', output: '[9, 5, 3, 10, 12, 14, 10]', explanation: 'Elements < 10 are on the left, >= 10 are on the right. (Note: multiple valid answers exist, use standard Lomuto or Hoare partition maintaining relative order of left/right if possible, or just standard partition).' }
    ],
    testCases: [
      { input: '7\n9 12 5 10 14 3 10\n10', expectedOutput: '9 5 3 10 14 12 10', hidden: false },
      { input: '4\n4 3 2 1\n2', expectedOutput: '1 2 3 4', hidden: false }
    ],
    starterCode: {
      python: `def partition_array(arr, x):
    pass

n = int(input())
arr = list(map(int, input().split()))
x = int(input())
print(*partition_array(arr, x))`,
      java: `import java.util.*;

public class Solution {
    public static int[] partitionArray(int[] arr, int x) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int x = sc.nextInt();
            int[] res = partitionArray(arr, x);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void partitionArray(int* arr, int n, int x) {
    
}

int main() {
    int n, x;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    scanf("%d", &x);
    partitionArray(arr, n, x);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void partitionArray(vector<int>& arr, int x) {
    
}

int main() {
    int n, x;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        cin >> x;
        partitionArray(arr, x);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-e3', title: 'Sort Array By Parity', difficulty: 'Easy',
    description: 'Given an integer array `arr`, move all the even integers at the beginning of the array followed by all the odd integers. Do this in-place using a partition-like approach.',
    constraints: ['1 <= arr.length <= 5000', '0 <= arr[i] <= 5000'],
    examples: [
      { input: 'arr = [3, 1, 2, 4]', output: '[2, 4, 3, 1]', explanation: 'The outputs [4, 2, 3, 1], [2, 4, 1, 3], and [4, 2, 1, 3] would also be accepted. Provide any valid in-place partition.' }
    ],
    testCases: [
      { input: '4\n3 1 2 4', expectedOutput: '4 2 1 3', hidden: false },
      { input: '1\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `def sort_array_by_parity(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*sort_array_by_parity(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] sortArrayByParity(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = sortArrayByParity(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void sortArrayByParity(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    sortArrayByParity(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sortArrayByParity(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        sortArrayByParity(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-e4', title: 'Move Zeroes to End', difficulty: 'Easy',
    description: 'Given an integer array `arr`, move all `0`s to the end of it while maintaining the relative order of the non-zero elements. You must do this in-place using a partition-based logic (similar to Lomuto partition).',
    constraints: ['1 <= arr.length <= 10^4', '-2^31 <= arr[i] <= 2^31 - 1'],
    examples: [
      { input: 'arr = [0, 1, 0, 3, 12]', output: '[1, 3, 12, 0, 0]', explanation: 'All 0s moved to the end, order of 1, 3, 12 preserved.' }
    ],
    testCases: [
      { input: '5\n0 1 0 3 12', expectedOutput: '1 3 12 0 0', hidden: false },
      { input: '1\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `def move_zeroes(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*move_zeroes(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] moveZeroes(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = moveZeroes(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void moveZeroes(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    moveZeroes(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void moveZeroes(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        moveZeroes(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-e5', title: 'Kth Smallest Element (Basic Quick Select)', difficulty: 'Easy',
    description: 'Find the K-th smallest element in an unsorted array. Implement this using the Quick Select algorithm (Hoare or Lomuto partition). Expected average time complexity is O(N).',
    constraints: ['1 <= k <= arr.length <= 10^4', '-10^4 <= arr[i] <= 10^4'],
    examples: [
      { input: 'arr = [3, 2, 1, 5, 6, 4], k = 2', output: '2', explanation: 'Sorted array is [1, 2, 3, 4, 5, 6]. 2nd smallest is 2.' }
    ],
    testCases: [
      { input: '6\n3 2 1 5 6 4\n2', expectedOutput: '2', hidden: false },
      { input: '9\n3 2 3 1 2 4 5 5 6\n4', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: `def kth_smallest(arr, k):
    pass

n = int(input())
arr = list(map(int, input().split()))
k = int(input())
print(kth_smallest(arr, k))`,
      java: `import java.util.*;

public class Solution {
    public static int kthSmallest(int[] arr, int k) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(kthSmallest(arr, k));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int kthSmallest(int* arr, int n, int k) {
    return 0;
}

int main() {
    int n, k;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    scanf("%d", &k);
    printf("%d\\n", kthSmallest(arr, n, k));
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int kthSmallest(vector<int>& arr, int k) {
    return 0;
}

int main() {
    int n, k;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        cin >> k;
        cout << kthSmallest(arr, k) << "\\n";
    }
    return 0;
}`
    }
  },

  // --- MEDIUM ---
  {
    id: 'qs-m1', title: 'Quick Sort with Random Pivot', difficulty: 'Medium',
    description: 'Implement Quick Sort using a Randomized Pivot to avoid O(N^2) worst-case time complexity on sorted arrays. Sort in ascending order in-place.',
    constraints: ['1 <= arr.length <= 10^5', '-10^6 <= arr[i] <= 10^6'],
    examples: [
      { input: 'arr = [1, 2, 3, 4, 5]', output: '[1, 2, 3, 4, 5]', explanation: 'A standard quick sort would hit worst case O(N^2) here, randomized avoids it.' }
    ],
    testCases: [
      { input: '5\n1 2 3 4 5', expectedOutput: '1 2 3 4 5', hidden: false },
      { input: '6\n10 -2 0 5 3 3', expectedOutput: '-2 0 3 3 5 10', hidden: false }
    ],
    starterCode: {
      python: `def randomized_quick_sort(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*randomized_quick_sort(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] randomizedQuickSort(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = randomizedQuickSort(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void randomizedQuickSort(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    randomizedQuickSort(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void randomizedQuickSort(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        randomizedQuickSort(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-m2', title: 'Sort Colors (Dutch National Flag)', difficulty: 'Medium',
    description: 'Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively. You must solve this using a one-pass algorithm (3-way partitioning).',
    constraints: ['n == nums.length', '1 <= n <= 300', 'nums[i] is either 0, 1, or 2.'],
    examples: [
      { input: 'nums = [2, 0, 2, 1, 1, 0]', output: '[0, 0, 1, 1, 2, 2]', explanation: 'Sorted colors.' }
    ],
    testCases: [
      { input: '6\n2 0 2 1 1 0', expectedOutput: '0 0 1 1 2 2', hidden: false },
      { input: '3\n2 0 1', expectedOutput: '0 1 2', hidden: false }
    ],
    starterCode: {
      python: `def sort_colors(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(*sort_colors(nums))`,
      java: `import java.util.*;

public class Solution {
    public static int[] sortColors(int[] nums) {
        return nums;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int[] res = sortColors(nums);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void sortColors(int* nums, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    sortColors(nums, n);
    for (int i = 0; i < n; i++) printf("%d%s", nums[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sortColors(vector<int>& nums) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        sortColors(nums);
        for (int i = 0; i < n; i++) cout << nums[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-m3', title: 'Top K Frequent Elements', difficulty: 'Medium',
    description: 'Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order. Solve it using Quick Select on the unique elements based on their frequencies to achieve O(N) average time complexity.',
    constraints: ['1 <= nums.length <= 10^5', 'k is in the range [1, the number of unique elements in the array].'],
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '[1, 2]', explanation: '1 and 2 are the most frequent.' }
    ],
    testCases: [
      { input: '6\n1 1 1 2 2 3\n2', expectedOutput: '1 2', hidden: false },
      { input: '1\n1\n1', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `def top_k_frequent(nums, k):
    pass

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
res = top_k_frequent(nums, k)
res.sort()
print(*res)`,
      java: `import java.util.*;

public class Solution {
    public static int[] topKFrequent(int[] nums, int k) {
        return new int[0];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int k = sc.nextInt();
            int[] res = topKFrequent(nums, k);
            Arrays.sort(res);
            for (int i = 0; i < res.length; i++) System.out.print(res[i] + (i == res.length - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int cmpFunc(const void* a, const void* b) { return *(int*)a - *(int*)b; }

int* topKFrequent(int* nums, int n, int k, int* returnSize) {
    *returnSize = k;
    return NULL;
}

int main() {
    int n, k, retSize;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    scanf("%d", &k);
    int* res = topKFrequent(nums, n, k, &retSize);
    qsort(res, retSize, sizeof(int), cmpFunc);
    for (int i = 0; i < retSize; i++) printf("%d%s", res[i], (i == retSize - 1 ? "" : " "));
    printf("\\n");
    free(nums); free(res);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> topKFrequent(vector<int>& nums, int k) {
    return {};
}

int main() {
    int n, k;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cin >> k;
        vector<int> res = topKFrequent(nums, k);
        sort(res.begin(), res.end());
        for (int i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-m4', title: 'K Closest Points to Origin', difficulty: 'Medium',
    description: 'Given an array of `points` where `points[i] = [xi, yi]` represents a point on the X-Y plane and an integer `k`, return the `k` closest points to the origin `(0, 0)`. Use Quick Select to find the K closest points in O(N) average time.',
    constraints: ['1 <= k <= points.length <= 10^4', '-10^4 <= xi, yi <= 10^4'],
    examples: [
      { input: 'points = [[1,3],[-2,2]], k = 1', output: '[[-2,2]]', explanation: 'Distance to [1,3] is sqrt(10), to [-2,2] is sqrt(8). [-2,2] is closer.' }
    ],
    testCases: [
      { input: '2\n1 3\n-2 2\n1', expectedOutput: '-2 2', hidden: false },
      { input: '3\n3 3\n5 -1\n-2 4\n2', expectedOutput: '-2 4 3 3', hidden: false }
    ],
    starterCode: {
      python: `def k_closest(points, k):
    pass

n = int(input())
points = [list(map(int, input().split())) for _ in range(n)]
k = int(input())
res = k_closest(points, k)
res.sort() # for deterministic output
for p in res:
    print(p[0], p[1], end=" ")
print()`,
      java: `import java.util.*;

public class Solution {
    public static int[][] kClosest(int[][] points, int k) {
        return new int[0][0];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] points = new int[n][2];
            for (int i = 0; i < n; i++) {
                points[i][0] = sc.nextInt();
                points[i][1] = sc.nextInt();
            }
            int k = sc.nextInt();
            int[][] res = kClosest(points, k);
            Arrays.sort(res, (a, b) -> a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);
            for (int i = 0; i < res.length; i++) {
                System.out.print(res[i][0] + " " + res[i][1] + (i == res.length - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int cmpFunc(const void* a, const void* b) {
    int* pa = *(int**)a;
    int* pb = *(int**)b;
    if (pa[0] != pb[0]) return pa[0] - pb[0];
    return pa[1] - pb[1];
}

int** kClosest(int** points, int n, int k, int* returnSize) {
    *returnSize = k;
    return NULL;
}

int main() {
    int n, k, retSize;
    if (scanf("%d", &n) != 1) return 0;
    int** points = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        points[i] = (int*)malloc(2 * sizeof(int));
        scanf("%d %d", &points[i][0], &points[i][1]);
    }
    scanf("%d", &k);
    int** res = kClosest(points, n, k, &retSize);
    qsort(res, retSize, sizeof(int*), cmpFunc);
    for (int i = 0; i < retSize; i++) {
        printf("%d %d%s", res[i][0], res[i][1], (i == retSize - 1 ? "" : " "));
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    return {};
}

int main() {
    int n, k;
    if (cin >> n) {
        vector<vector<int>> points(n, vector<int>(2));
        for (int i = 0; i < n; i++) cin >> points[i][0] >> points[i][1];
        cin >> k;
        vector<vector<int>> res = kClosest(points, k);
        sort(res.begin(), res.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[0] != b[0] ? a[0] < b[0] : a[1] < b[1];
        });
        for (int i = 0; i < res.size(); i++) {
            cout << res[i][0] << " " << res[i][1] << (i == res.size() - 1 ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-m5', title: 'Largest Number', difficulty: 'Medium',
    description: 'Given a list of non-negative integers `nums`, arrange them such that they form the largest number and return it as a string. Solve this by implementing a Quick Sort using a custom comparator (i.e. compare `a+b` vs `b+a`).',
    constraints: ['1 <= nums.length <= 100', '0 <= nums[i] <= 10^9'],
    examples: [
      { input: 'nums = [3,30,34,5,9]', output: '"9534330"', explanation: 'Concatenating them gives the largest number.' }
    ],
    testCases: [
      { input: '5\n3 30 34 5 9', expectedOutput: '9534330', hidden: false },
      { input: '2\n10 2', expectedOutput: '210', hidden: false }
    ],
    starterCode: {
      python: `def largest_number(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(largest_number(nums))`,
      java: `import java.util.*;

public class Solution {
    public static String largestNumber(int[] nums) {
        return "";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(largestNumber(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* largestNumber(int* nums, int n) {
    return NULL;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    char* res = largestNumber(nums, n);
    printf("%s\\n", res);
    free(nums); free(res);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

string largestNumber(vector<int>& nums) {
    return "";
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << largestNumber(nums) << "\\n";
    }
    return 0;
}`
    }
  },

  // --- HARD ---
  {
    id: 'qs-h1', title: 'Quick Sort on Singly Linked List', difficulty: 'Hard',
    description: 'Implement Quick Sort to sort a singly linked list in ascending order. You should modify the `next` pointers rather than swapping values. Given the list as an array, return the sorted list as an array.',
    constraints: ['1 <= list.length <= 10^4', '-10^5 <= node.val <= 10^5'],
    examples: [
      { input: 'head = [4, 2, 1, 3]', output: '[1, 2, 3, 4]', explanation: 'Linked list sorted.' }
    ],
    testCases: [
      { input: '4\n4 2 1 3', expectedOutput: '1 2 3 4', hidden: false },
      { input: '5\n-1 5 3 4 0', expectedOutput: '-1 0 3 4 5', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def sort_list(head):
    pass

n = int(input())
arr = list(map(int, input().split()))
head = ListNode(arr[0])
curr = head
for val in arr[1:]:
    curr.next = ListNode(val)
    curr = curr.next

sorted_head = sort_list(head)
res = []
while sorted_head:
    res.append(sorted_head.val)
    sorted_head = sorted_head.next
print(*res)`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode sortList(ListNode head) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode head = new ListNode(sc.nextInt());
            ListNode curr = head;
            for (int i = 1; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            ListNode sorted = sortList(head);
            while (sorted != null) {
                System.out.print(sorted.val + (sorted.next == null ? "" : " "));
                sorted = sorted.next;
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

struct ListNode {
    int val;
    struct ListNode *next;
};

struct ListNode* sortList(struct ListNode* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode* head = malloc(sizeof(struct ListNode));
    scanf("%d", &head->val);
    head->next = NULL;
    struct ListNode* curr = head;
    for (int i = 1; i < n; i++) {
        curr->next = malloc(sizeof(struct ListNode));
        curr = curr->next;
        scanf("%d", &curr->val);
        curr->next = NULL;
    }
    struct ListNode* sorted = sortList(head);
    while (sorted != NULL) {
        printf("%d%s", sorted->val, sorted->next ? " " : "");
        sorted = sorted->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* sortList(ListNode* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        int val; cin >> val;
        ListNode* head = new ListNode(val);
        ListNode* curr = head;
        for (int i = 1; i < n; i++) {
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        ListNode* sorted = sortList(head);
        while (sorted != NULL) {
            cout << sorted->val << (sorted->next ? " " : "");
            sorted = sorted->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-h2', title: 'Median of Unsorted Array', difficulty: 'Hard',
    description: 'Find the median of an unsorted array of integers. For an even length array, return the average of the two middle elements. Use Quick Select to achieve O(N) average time complexity.',
    constraints: ['1 <= arr.length <= 10^5', '-10^6 <= arr[i] <= 10^6'],
    examples: [
      { input: 'arr = [3, 1, 2, 4]', output: '2.5', explanation: 'Sorted is 1,2,3,4. Median is (2+3)/2 = 2.5' }
    ],
    testCases: [
      { input: '4\n3 1 2 4', expectedOutput: '2.5', hidden: false },
      { input: '5\n7 2 5 1 9', expectedOutput: '5.0', hidden: false }
    ],
    starterCode: {
      python: `def find_median(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(f"{find_median(arr):.1f}")`,
      java: `import java.util.*;

public class Solution {
    public static double findMedian(int[] arr) {
        return 0.0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            System.out.printf("%.1f\\n", findMedian(arr));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

double findMedian(int* arr, int n) {
    return 0.0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("%.1f\\n", findMedian(arr, n));
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <iomanip>
using namespace std;

double findMedian(vector<int>& arr) {
    return 0.0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        cout << fixed << setprecision(1) << findMedian(arr) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-h3', title: 'Nuts and Bolts Problem', difficulty: 'Hard',
    description: 'Given a set of `n` nuts of different sizes and `n` bolts of different sizes. There is a one-to-one mapping between nuts and bolts. Sort the nuts and bolts arrays to match them. You must do this by modifying Quick Sort (choose a nut as pivot to partition bolts, then the matching bolt to partition nuts). Characters represent sizes.',
    constraints: ['1 <= n <= 9', 'Nuts and bolts are distinct ASCII characters.'],
    examples: [
      { input: 'nuts = ["@","#","$","%"], bolts = ["$","%","#","@"]', output: '["#","$","%","@"]\n["#","$","%","@"]', explanation: 'Both arrays sorted to match.' }
    ],
    testCases: [
      { input: '4\n@ # $ %\n$ % # @', expectedOutput: '# $ % @\n# $ % @', hidden: false },
      { input: '5\n^ & * ( )\n) ( * & ^', expectedOutput: '& ( ) * ^\n& ( ) * ^', hidden: false }
    ],
    starterCode: {
      python: `def match_nuts_and_bolts(nuts, bolts):
    pass

n = int(input())
nuts = input().split()
bolts = input().split()
match_nuts_and_bolts(nuts, bolts)
print(*nuts)
print(*bolts)`,
      java: `import java.util.*;

public class Solution {
    public static void matchNutsAndBolts(char[] nuts, char[] bolts) {
        
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            char[] nuts = new char[n];
            char[] bolts = new char[n];
            for (int i = 0; i < n; i++) nuts[i] = sc.next().charAt(0);
            for (int i = 0; i < n; i++) bolts[i] = sc.next().charAt(0);
            matchNutsAndBolts(nuts, bolts);
            for (int i = 0; i < n; i++) System.out.print(nuts[i] + (i == n - 1 ? "" : " "));
            System.out.println();
            for (int i = 0; i < n; i++) System.out.print(bolts[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void matchNutsAndBolts(char* nuts, char* bolts, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char* nuts = (char*)malloc(n * sizeof(char));
    char* bolts = (char*)malloc(n * sizeof(char));
    for (int i = 0; i < n; i++) scanf(" %c", &nuts[i]);
    for (int i = 0; i < n; i++) scanf(" %c", &bolts[i]);
    matchNutsAndBolts(nuts, bolts, n);
    for (int i = 0; i < n; i++) printf("%c%s", nuts[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    for (int i = 0; i < n; i++) printf("%c%s", bolts[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(nuts); free(bolts);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void matchNutsAndBolts(vector<char>& nuts, vector<char>& bolts) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<char> nuts(n), bolts(n);
        for (int i = 0; i < n; i++) cin >> nuts[i];
        for (int i = 0; i < n; i++) cin >> bolts[i];
        matchNutsAndBolts(nuts, bolts);
        for (int i = 0; i < n; i++) cout << nuts[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
        for (int i = 0; i < n; i++) cout << bolts[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-h4', title: 'Quick Sort with Duplicate Keys (3-way)', difficulty: 'Hard',
    description: 'Implement Quick Sort using 3-way partitioning (Dutch National Flag approach) to efficiently sort an array with many duplicate keys. This avoids O(N^2) worst case on arrays with few unique values.',
    constraints: ['1 <= arr.length <= 10^5', 'arr[i] can have many duplicates'],
    examples: [
      { input: 'arr = [4, 9, 4, 4, 1, 9, 4, 4, 9, 4, 4, 1, 4]', output: '[1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 9, 9, 9]', explanation: 'Efficiently sorted with 3-way partitioning.' }
    ],
    testCases: [
      { input: '13\n4 9 4 4 1 9 4 4 9 4 4 1 4', expectedOutput: '1 1 4 4 4 4 4 4 4 4 9 9 9', hidden: false },
      { input: '6\n2 2 2 2 2 2', expectedOutput: '2 2 2 2 2 2', hidden: false }
    ],
    starterCode: {
      python: `def quick_sort_3way(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*quick_sort_3way(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] quickSort3Way(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = quickSort3Way(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void quickSort3Way(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    quickSort3Way(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void quickSort3Way(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        quickSort3Way(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'qs-h5', title: 'Wiggle Sort II', difficulty: 'Hard',
    description: 'Given an integer array `nums`, reorder it such that `nums[0] < nums[1] > nums[2] < nums[3]...`. You must achieve O(N) average time complexity using Quick Select to find the median, and O(1) in-place auxiliary space using 3-way partitioning with virtual indexing.',
    constraints: ['1 <= nums.length <= 5000', '0 <= nums[i] <= 5000'],
    examples: [
      { input: 'nums = [1,5,1,1,6,4]', output: '[1,6,1,5,1,4]', explanation: 'One valid wiggle sort.' }
    ],
    testCases: [
      { input: '6\n1 5 1 1 6 4', expectedOutput: '1 6 1 5 1 4', hidden: false },
      { input: '7\n1 3 2 2 3 1 1', expectedOutput: '1 3 1 3 1 2 2', hidden: false }
    ],
    starterCode: {
      python: `def wiggle_sort(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(*wiggle_sort(nums))`,
      java: `import java.util.*;

public class Solution {
    public static int[] wiggleSort(int[] nums) {
        return nums;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int[] res = wiggleSort(nums);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void wiggleSort(int* nums, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    wiggleSort(nums, n);
    for (int i = 0; i < n; i++) printf("%d%s", nums[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void wiggleSort(vector<int>& nums) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        wiggleSort(nums);
        for (int i = 0; i < n; i++) cout << nums[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  }
];