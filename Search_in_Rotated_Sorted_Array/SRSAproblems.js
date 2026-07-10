export const SRSAproblems = [
  // EASY
  {
    id: 'srsa-e1',
    title: 'Search in Rotated Sorted Array',
    difficulty: 'Easy',

    description: 'Given a rotated sorted array nums of distinct integers and an integer target, return the index of target if it is present in nums, otherwise return -1. The array was originally sorted in ascending order and then rotated at some pivot.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values of nums are distinct',
      'nums is a rotated sorted array',
      '-10^4 <= target <= 10^4'
    ],

    examples: [
      {
        input: 'nums = [4, 5, 6, 7, 0, 1, 2]\ntarget = 0',
        output: '4',
        explanation: '0 is present at index 4 in the rotated array.'
      },
      {
        input: 'nums = [4, 5, 6, 7, 0, 1, 2]\ntarget = 3',
        output: '-1',
        explanation: '3 is not present in the array.'
      }
    ],

    testCases: [
      { input: '7\n4 5 6 7 0 1 2\n0', expectedOutput: '4', hidden: false },
      { input: '7\n4 5 6 7 0 1 2\n3', expectedOutput: '-1', hidden: false },
      { input: '1\n1\n0', expectedOutput: '-1', hidden: true },
      { input: '1\n1\n1', expectedOutput: '0', hidden: true },
      { input: '5\n2 3 4 5 1\n4', expectedOutput: '2', hidden: true }
    ],

    starterCode: {
      python: `def search_rotated(nums, target):
    return -1

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(search_rotated(nums, target))`,

      java: `import java.util.*;

public class Solution {
    public static int searchRotated(int[] nums, int target) {
        return -1;
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
            System.out.println(searchRotated(nums, target));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int searchRotated(int* nums, int n, int target) {
    return -1;
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
    printf("%d\\n", searchRotated(nums, n, target));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int searchRotated(vector<int>& nums, int target) {
    return -1;
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
        cout << searchRotated(nums, target) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-e2',
    title: 'Find Minimum in Rotated Sorted Array',
    difficulty: 'Easy',

    description: 'Given a rotated sorted array nums of distinct integers, return the minimum element of this array. The array was originally sorted in ascending order and then rotated at some unknown pivot.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-5000 <= nums[i] <= 5000',
      'All values of nums are distinct',
      'nums is a rotated sorted array'
    ],

    examples: [
      {
        input: 'nums = [3, 4, 5, 1, 2]',
        output: '1',
        explanation: 'The original sorted array was [1, 2, 3, 4, 5] and it was rotated 3 times.'
      },
      {
        input: 'nums = [4, 5, 6, 7, 0, 1, 2]',
        output: '0',
        explanation: 'The minimum element after rotation is 0.'
      }
    ],

    testCases: [
      { input: '5\n3 4 5 1 2', expectedOutput: '1', hidden: false },
      { input: '7\n4 5 6 7 0 1 2', expectedOutput: '0', hidden: false },
      { input: '1\n5', expectedOutput: '5', hidden: true },
      { input: '2\n2 1', expectedOutput: '1', hidden: true },
      { input: '3\n1 2 3', expectedOutput: '1', hidden: true }
    ],

    starterCode: {
      python: `def find_min(nums):
    return 0

n = int(input())
nums = list(map(int, input().split()))
print(find_min(nums))`,

      java: `import java.util.*;

public class Solution {
    public static int findMin(int[] nums) {
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
            System.out.println(findMin(nums));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int findMin(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", findMin(nums, n));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int findMin(vector<int>& nums) {
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
        cout << findMin(nums) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-e3',
    title: 'Check Target in Rotated Array',
    difficulty: 'Easy',

    description: 'Given a rotated sorted array nums of distinct integers and an integer target, return true if the target exists in the array, otherwise return false.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values of nums are distinct',
      'nums is a rotated sorted array',
      '-10^4 <= target <= 10^4'
    ],

    examples: [
      {
        input: 'nums = [4, 5, 6, 7, 0, 1, 2]\ntarget = 0',
        output: 'true',
        explanation: '0 is present in the array.'
      },
      {
        input: 'nums = [4, 5, 6, 7, 0, 1, 2]\ntarget = 3',
        output: 'false',
        explanation: '3 is not present in the array.'
      }
    ],

    testCases: [
      { input: '7\n4 5 6 7 0 1 2\n0', expectedOutput: 'true', hidden: false },
      { input: '7\n4 5 6 7 0 1 2\n3', expectedOutput: 'false', hidden: false },
      { input: '3\n1 2 3\n2', expectedOutput: 'true', hidden: true },
      { input: '2\n3 1\n2', expectedOutput: 'false', hidden: true },
      { input: '1\n7\n7', expectedOutput: 'true', hidden: true }
    ],

    starterCode: {
      python: `def target_exists(nums, target):
    return False

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(str(target_exists(nums, target)).lower())`,

      java: `import java.util.*;

public class Solution {
    public static boolean targetExists(int[] nums, int target) {
        return false;
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
            System.out.println(targetExists(nums, target) ? "true" : "false");
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool targetExists(int* nums, int n, int target) {
    return false;
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
    printf("%s\\n", targetExists(nums, n, target) ? "true" : "false");
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

bool targetExists(vector<int>& nums, int target) {
    return false;
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
        cout << (targetExists(nums, target) ? "true" : "false") << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-e4',
    title: 'Search in Single Element Rotated Array',
    difficulty: 'Easy',

    description: 'Given a rotated sorted array nums containing exactly one element and an integer target, return the index of target if it matches the only element, otherwise return -1.',

    constraints: [
      'nums.length == 1',
      '-10^4 <= nums[i] <= 10^4',
      '-10^4 <= target <= 10^4'
    ],

    examples: [
      {
        input: 'nums = [5]\ntarget = 5',
        output: '0',
        explanation: 'The only element matches the target at index 0.'
      },
      {
        input: 'nums = [5]\ntarget = 3',
        output: '-1',
        explanation: 'The target does not match the single element.'
      }
    ],

    testCases: [
      { input: '1\n5\n5', expectedOutput: '0', hidden: false },
      { input: '1\n5\n3', expectedOutput: '-1', hidden: false },
      { input: '1\n-2\n-2', expectedOutput: '0', hidden: true },
      { input: '1\n0\n1', expectedOutput: '-1', hidden: true },
      { input: '1\n10000\n10000', expectedOutput: '0', hidden: true }
    ],

    starterCode: {
      python: `def search_single(nums, target):
    return -1

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(search_single(nums, target))`,

      java: `import java.util.*;

public class Solution {
    public static int searchSingle(int[] nums, int target) {
        return -1;
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
            System.out.println(searchSingle(nums, target));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int searchSingle(int* nums, int n, int target) {
    return -1;
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
    printf("%d\\n", searchSingle(nums, n, target));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int searchSingle(vector<int>& nums, int target) {
    return -1;
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
        cout << searchSingle(nums, target) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-e5',
    title: 'Search in Unrotated Sorted Array',
    difficulty: 'Easy',

    description: 'Given a sorted array nums that has not been rotated and an integer target, return the index of target if it is present, otherwise return -1. Use the rotated array search approach, which still works when no rotation has occurred.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values of nums are distinct',
      'nums is sorted in ascending order',
      '-10^4 <= target <= 10^4'
    ],

    examples: [
      {
        input: 'nums = [1, 2, 3, 4, 5]\ntarget = 3',
        output: '2',
        explanation: '3 is located at index 2 in the sorted array.'
      },
      {
        input: 'nums = [1, 2, 3, 4, 5]\ntarget = 6',
        output: '-1',
        explanation: '6 is not present in the array.'
      }
    ],

    testCases: [
      { input: '5\n1 2 3 4 5\n3', expectedOutput: '2', hidden: false },
      { input: '5\n1 2 3 4 5\n6', expectedOutput: '-1', hidden: false },
      { input: '4\n-5 -3 0 2\n-3', expectedOutput: '1', hidden: true },
      { input: '3\n10 20 30\n10', expectedOutput: '0', hidden: true },
      { input: '2\n1 2\n2', expectedOutput: '1', hidden: true }
    ],

    starterCode: {
      python: `def search_sorted(nums, target):
    return -1

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(search_sorted(nums, target))`,

      java: `import java.util.*;

public class Solution {
    public static int searchSorted(int[] nums, int target) {
        return -1;
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
            System.out.println(searchSorted(nums, target));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int searchSorted(int* nums, int n, int target) {
    return -1;
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
    printf("%d\\n", searchSorted(nums, n, target));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int searchSorted(vector<int>& nums, int target) {
    return -1;
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
        cout << searchSorted(nums, target) << "\\n";
    }

    return 0;
}`
    }
  },

  // MEDIUM
  {
    id: 'srsa-m1',
    title: 'Search in Rotated Sorted Array II',
    difficulty: 'Medium',

    description: 'Given a rotated sorted array nums that may contain duplicates and an integer target, return true if target is in nums, otherwise return false.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'nums is a rotated sorted array',
      '-10^4 <= target <= 10^4'
    ],

    examples: [
      {
        input: 'nums = [2, 5, 6, 0, 0, 1, 2]\ntarget = 0',
        output: 'true',
        explanation: '0 is present in the array.'
      },
      {
        input: 'nums = [2, 5, 6, 0, 0, 1, 2]\ntarget = 3',
        output: 'false',
        explanation: '3 is not present in the array.'
      }
    ],

    testCases: [
      { input: '7\n2 5 6 0 0 1 2\n0', expectedOutput: 'true', hidden: false },
      { input: '7\n2 5 6 0 0 1 2\n3', expectedOutput: 'false', hidden: false },
      { input: '3\n1 1 1\n1', expectedOutput: 'true', hidden: true },
      { input: '3\n1 1 1\n2', expectedOutput: 'false', hidden: true },
      { input: '6\n3 3 3 3 3 3\n3', expectedOutput: 'true', hidden: true }
    ],

    starterCode: {
      python: `def search_with_duplicates(nums, target):
    return False

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(str(search_with_duplicates(nums, target)).lower())`,

      java: `import java.util.*;

public class Solution {
    public static boolean searchWithDuplicates(int[] nums, int target) {
        return false;
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
            System.out.println(searchWithDuplicates(nums, target) ? "true" : "false");
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool searchWithDuplicates(int* nums, int n, int target) {
    return false;
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
    printf("%s\\n", searchWithDuplicates(nums, n, target) ? "true" : "false");
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

bool searchWithDuplicates(vector<int>& nums, int target) {
    return false;
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
        cout << (searchWithDuplicates(nums, target) ? "true" : "false") << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-m2',
    title: 'Find Minimum with Duplicates',
    difficulty: 'Medium',

    description: 'Given a rotated sorted array nums that may contain duplicate values, return the minimum element. If multiple minimums exist due to duplicates, return the smallest value.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-5000 <= nums[i] <= 5000',
      'nums is a rotated sorted array'
    ],

    examples: [
      {
        input: 'nums = [3, 3, 1, 3]',
        output: '1',
        explanation: 'The minimum element in the rotated array is 1.'
      },
      {
        input: 'nums = [2, 2, 2, 0, 1]',
        output: '0',
        explanation: 'The minimum element is 0.'
      }
    ],

    testCases: [
      { input: '4\n3 3 1 3', expectedOutput: '1', hidden: false },
      { input: '5\n2 2 2 0 1', expectedOutput: '0', hidden: false },
      { input: '3\n1 1 1', expectedOutput: '1', hidden: true },
      { input: '4\n2 2 2 2', expectedOutput: '2', hidden: true },
      { input: '6\n4 4 5 6 4 4', expectedOutput: '4', hidden: true }
    ],

    starterCode: {
      python: `def find_min_with_duplicates(nums):
    return 0

n = int(input())
nums = list(map(int, input().split()))
print(find_min_with_duplicates(nums))`,

      java: `import java.util.*;

public class Solution {
    public static int findMinWithDuplicates(int[] nums) {
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
            System.out.println(findMinWithDuplicates(nums));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int findMinWithDuplicates(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", findMinWithDuplicates(nums, n));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int findMinWithDuplicates(vector<int>& nums) {
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
        cout << findMinWithDuplicates(nums) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-m3',
    title: 'Count Rotations in Sorted Array',
    difficulty: 'Medium',

    description: 'Given a rotated sorted array nums of distinct integers with no duplicates, return the number of times the array has been rotated clockwise. This is equivalent to the index of the minimum element.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values of nums are distinct',
      'nums is a rotated sorted array'
    ],

    examples: [
      {
        input: 'nums = [3, 4, 5, 1, 2]',
        output: '3',
        explanation: 'The array was rotated 3 times. The minimum element 1 is at index 3.'
      },
      {
        input: 'nums = [1, 2, 3, 4, 5]',
        output: '0',
        explanation: 'The array is not rotated.'
      }
    ],

    testCases: [
      { input: '5\n3 4 5 1 2', expectedOutput: '3', hidden: false },
      { input: '5\n1 2 3 4 5', expectedOutput: '0', hidden: false },
      { input: '7\n4 5 6 7 0 1 2', expectedOutput: '4', hidden: true },
      { input: '2\n2 1', expectedOutput: '1', hidden: true },
      { input: '1\n10', expectedOutput: '0', hidden: true }
    ],

    starterCode: {
      python: `def count_rotations(nums):
    return 0

n = int(input())
nums = list(map(int, input().split()))
print(count_rotations(nums))`,

      java: `import java.util.*;

public class Solution {
    public static int countRotations(int[] nums) {
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
            System.out.println(countRotations(nums));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int countRotations(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", countRotations(nums, n));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int countRotations(vector<int>& nums) {
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
        cout << countRotations(nums) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-m4',
    title: 'Find Peak Before Rotation',
    difficulty: 'Medium',

    description: 'Given a rotated sorted array nums of distinct integers, return the maximum element, which is the peak value located just before the rotation point.',

    constraints: [
      '2 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values of nums are distinct',
      'nums is a rotated sorted array'
    ],

    examples: [
      {
        input: 'nums = [3, 4, 5, 1, 2]',
        output: '5',
        explanation: 'The maximum element before rotation is 5.'
      },
      {
        input: 'nums = [4, 5, 6, 7, 0, 1, 2]',
        output: '7',
        explanation: 'The peak value before the rotation point is 7.'
      }
    ],

    testCases: [
      { input: '5\n3 4 5 1 2', expectedOutput: '5', hidden: false },
      { input: '7\n4 5 6 7 0 1 2', expectedOutput: '7', hidden: false },
      { input: '2\n2 1', expectedOutput: '2', hidden: true },
      { input: '4\n8 9 10 5', expectedOutput: '10', hidden: true },
      { input: '3\n1 2 3', expectedOutput: '3', hidden: true }
    ],

    starterCode: {
      python: `def find_peak(nums):
    return 0

n = int(input())
nums = list(map(int, input().split()))
print(find_peak(nums))`,

      java: `import java.util.*;

public class Solution {
    public static int findPeak(int[] nums) {
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
            System.out.println(findPeak(nums));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int findPeak(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", findPeak(nums, n));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int findPeak(vector<int>& nums) {
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
        cout << findPeak(nums) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-m5',
    title: 'Find Minimum Index in Rotated Array',
    difficulty: 'Medium',

    description: 'Given a rotated sorted array nums of distinct integers, return the index of the minimum element. If the array is not rotated, return 0.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values of nums are distinct',
      'nums is a rotated sorted array'
    ],

    examples: [
      {
        input: 'nums = [3, 4, 5, 1, 2]',
        output: '3',
        explanation: 'The minimum element 1 is at index 3.'
      },
      {
        input: 'nums = [1, 2, 3, 4, 5]',
        output: '0',
        explanation: 'The array is already sorted, so the minimum is at index 0.'
      }
    ],

    testCases: [
      { input: '5\n3 4 5 1 2', expectedOutput: '3', hidden: false },
      { input: '5\n1 2 3 4 5', expectedOutput: '0', hidden: false },
      { input: '7\n4 5 6 7 0 1 2', expectedOutput: '4', hidden: true },
      { input: '2\n2 1', expectedOutput: '1', hidden: true },
      { input: '1\n9', expectedOutput: '0', hidden: true }
    ],

    starterCode: {
      python: `def find_min_index(nums):
    return 0

n = int(input())
nums = list(map(int, input().split()))
print(find_min_index(nums))`,

      java: `import java.util.*;

public class Solution {
    public static int findMinIndex(int[] nums) {
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
            System.out.println(findMinIndex(nums));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int findMinIndex(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", findMinIndex(nums, n));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int findMinIndex(vector<int>& nums) {
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
        cout << findMinIndex(nums) << "\\n";
    }

    return 0;
}`
    }
  },

  // HARD
  {
    id: 'srsa-h1',
    title: 'Search Index with Duplicates',
    difficulty: 'Hard',

    description: 'Given a rotated sorted array nums that may contain duplicates and an integer target, return the index of target if it is in nums. If the target appears multiple times, return any valid index. If the target is not found, return -1.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'nums is a rotated sorted array',
      '-10^4 <= target <= 10^4'
    ],

    examples: [
      {
        input: 'nums = [2, 5, 6, 0, 0, 1, 2]\ntarget = 0',
        output: '3',
        explanation: '0 is present at index 3 or 4. Either index is acceptable.'
      },
      {
        input: 'nums = [2, 5, 6, 0, 0, 1, 2]\ntarget = 3',
        output: '-1',
        explanation: '3 is not present in the array.'
      }
    ],

    testCases: [
      { input: '7\n2 5 6 0 0 1 2\n0', expectedOutput: '3', hidden: false },
      { input: '7\n2 5 6 0 0 1 2\n3', expectedOutput: '-1', hidden: false },
      { input: '3\n1 1 1\n1', expectedOutput: '0', hidden: true },
      { input: '5\n1 3 1 1 1\n3', expectedOutput: '1', hidden: true },
      { input: '4\n2 2 2 2\n2', expectedOutput: '0', hidden: true }
    ],

    starterCode: {
      python: `def search_index_duplicates(nums, target):
    return -1

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(search_index_duplicates(nums, target))`,

      java: `import java.util.*;

public class Solution {
    public static int searchIndexDuplicates(int[] nums, int target) {
        return -1;
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
            System.out.println(searchIndexDuplicates(nums, target));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int searchIndexDuplicates(int* nums, int n, int target) {
    return -1;
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
    printf("%d\\n", searchIndexDuplicates(nums, n, target));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int searchIndexDuplicates(vector<int>& nums, int target) {
    return -1;
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
        cout << searchIndexDuplicates(nums, target) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-h2',
    title: 'Count Elements Less Than Target',
    difficulty: 'Hard',

    description: 'Given a rotated sorted array nums of distinct integers and an integer target, return the count of elements in nums that are strictly less than target.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values of nums are distinct',
      'nums is a rotated sorted array',
      '-10^4 <= target <= 10^4'
    ],

    examples: [
      {
        input: 'nums = [4, 5, 6, 7, 0, 1, 2]\ntarget = 5',
        output: '4',
        explanation: 'Elements less than 5 are 4, 0, 1, and 2.'
      },
      {
        input: 'nums = [3, 4, 5, 1, 2]\ntarget = 1',
        output: '0',
        explanation: 'No element is strictly less than 1.'
      }
    ],

    testCases: [
      { input: '7\n4 5 6 7 0 1 2\n5', expectedOutput: '4', hidden: false },
      { input: '5\n3 4 5 1 2\n1', expectedOutput: '0', hidden: false },
      { input: '5\n1 2 3 4 5\n6', expectedOutput: '5', hidden: true },
      { input: '4\n2 3 4 1\n3', expectedOutput: '2', hidden: true },
      { input: '3\n10 20 30\n15', expectedOutput: '1', hidden: true }
    ],

    starterCode: {
      python: `def count_less_than(nums, target):
    return 0

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(count_less_than(nums, target))`,

      java: `import java.util.*;

public class Solution {
    public static int countLessThan(int[] nums, int target) {
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
            System.out.println(countLessThan(nums, target));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int countLessThan(int* nums, int n, int target) {
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
    printf("%d\\n", countLessThan(nums, n, target));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int countLessThan(vector<int>& nums, int target) {
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
        cout << countLessThan(nums, target) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-h3',
    title: 'Find Minimum Index with Duplicates',
    difficulty: 'Hard',

    description: 'Given a rotated sorted array nums that may contain duplicates, return the index of the minimum element. If multiple minimum values exist, return the smallest index among them.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-5000 <= nums[i] <= 5000',
      'nums is a rotated sorted array'
    ],

    examples: [
      {
        input: 'nums = [3, 3, 1, 3]',
        output: '2',
        explanation: 'The minimum value 1 is at index 2.'
      },
      {
        input: 'nums = [2, 2, 2, 0, 1]',
        output: '3',
        explanation: 'The minimum value 0 is at index 3.'
      }
    ],

    testCases: [
      { input: '4\n3 3 1 3', expectedOutput: '2', hidden: false },
      { input: '5\n2 2 2 0 1', expectedOutput: '3', hidden: false },
      { input: '3\n1 1 1', expectedOutput: '0', hidden: true },
      { input: '4\n2 2 2 2', expectedOutput: '0', hidden: true },
      { input: '6\n4 4 5 6 4 4', expectedOutput: '0', hidden: true }
    ],

    starterCode: {
      python: `def find_min_index_duplicates(nums):
    return 0

n = int(input())
nums = list(map(int, input().split()))
print(find_min_index_duplicates(nums))`,

      java: `import java.util.*;

public class Solution {
    public static int findMinIndexDuplicates(int[] nums) {
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
            System.out.println(findMinIndexDuplicates(nums));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int findMinIndexDuplicates(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", findMinIndexDuplicates(nums, n));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int findMinIndexDuplicates(vector<int>& nums) {
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
        cout << findMinIndexDuplicates(nums) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-h4',
    title: 'Search in Rotated Array with Negatives',
    difficulty: 'Hard',

    description: 'Given a rotated sorted array nums of distinct integers that may contain negative values and an integer target, return the index of target if it is present, otherwise return -1.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'All values of nums are distinct',
      'nums is a rotated sorted array',
      '-10^4 <= target <= 10^4'
    ],

    examples: [
      {
        input: 'nums = [-3, -2, -1, 0, 1, 2]\ntarget = -2',
        output: '1',
        explanation: '-2 is present at index 1.'
      },
      {
        input: 'nums = [2, 3, 4, -4, -3, -2, -1]\ntarget = -3',
        output: '4',
        explanation: '-3 is present at index 4 in the rotated array.'
      }
    ],

    testCases: [
      { input: '6\n-3 -2 -1 0 1 2\n-2', expectedOutput: '1', hidden: false },
      { input: '7\n2 3 4 -4 -3 -2 -1\n-3', expectedOutput: '4', hidden: false },
      { input: '5\n-10 -5 0 5 10\n0', expectedOutput: '2', hidden: true },
      { input: '4\n-2 -1 3 4\n5', expectedOutput: '-1', hidden: true },
      { input: '3\n-1 0 1\n1', expectedOutput: '2', hidden: true }
    ],

    starterCode: {
      python: `def search_with_negatives(nums, target):
    return -1

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(search_with_negatives(nums, target))`,

      java: `import java.util.*;

public class Solution {
    public static int searchWithNegatives(int[] nums, int target) {
        return -1;
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
            System.out.println(searchWithNegatives(nums, target));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int searchWithNegatives(int* nums, int n, int target) {
    return -1;
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
    printf("%d\\n", searchWithNegatives(nums, n, target));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int searchWithNegatives(vector<int>& nums, int target) {
    return -1;
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
        cout << searchWithNegatives(nums, target) << "\\n";
    }

    return 0;
}`
    }
  },
  {
    id: 'srsa-h5',
    title: 'Find First Occurrence in Rotated Array',
    difficulty: 'Hard',

    description: 'Given a rotated sorted array nums that may contain duplicates and an integer target, return the index of the first occurrence of target. If target is not present, return -1.',

    constraints: [
      '1 <= nums.length <= 5000',
      '-10^4 <= nums[i] <= 10^4',
      'nums is a rotated sorted array',
      '-10^4 <= target <= 10^4'
    ],

    examples: [
      {
        input: 'nums = [2, 5, 6, 0, 0, 1, 2]\ntarget = 0',
        output: '3',
        explanation: 'The first occurrence of 0 is at index 3.'
      },
      {
        input: 'nums = [1, 1, 1, 1, 1]\ntarget = 1',
        output: '0',
        explanation: 'All elements are 1, so the first occurrence is at index 0.'
      }
    ],

    testCases: [
      { input: '7\n2 5 6 0 0 1 2\n0', expectedOutput: '3', hidden: false },
      { input: '5\n1 1 1 1 1\n1', expectedOutput: '0', hidden: false },
      { input: '6\n3 3 3 3 3 3\n3', expectedOutput: '0', hidden: true },
      { input: '4\n2 2 2 2\n2', expectedOutput: '0', hidden: true },
      { input: '5\n1 3 1 1 1\n2', expectedOutput: '-1', hidden: true }
    ],

    starterCode: {
      python: `def find_first_occurrence(nums, target):
    return -1

n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(find_first_occurrence(nums, target))`,

      java: `import java.util.*;

public class Solution {
    public static int findFirstOccurrence(int[] nums, int target) {
        return -1;
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
            System.out.println(findFirstOccurrence(nums, target));
        }
    }
}`,

      c: `#include <stdio.h>
#include <stdlib.h>

int findFirstOccurrence(int* nums, int n, int target) {
    return -1;
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
    printf("%d\\n", findFirstOccurrence(nums, n, target));
    free(nums);
    return 0;
}`,

      cpp: `#include <iostream>
#include <vector>

using namespace std;

int findFirstOccurrence(vector<int>& nums, int target) {
    return -1;
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
        cout << findFirstOccurrence(nums, target) << "\\n";
    }

    return 0;
}`
    }
  }
];
