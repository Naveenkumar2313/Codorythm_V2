export const radixSortProblems = [
  // --- EASY ---
  {
    id: 'rs-e1', title: 'Basic Radix Sort (Positive Integers)', difficulty: 'Easy',
    description: 'Given an array of non-negative integers, sort the array in ascending order using the Radix Sort algorithm. Do not use built-in sorting functions.',
    constraints: ['1 <= arr.length <= 10^4', '0 <= arr[i] <= 10^5'],
    examples: [
      { input: 'arr = [170, 45, 75, 90, 802, 24, 2, 66]', output: '[2, 24, 45, 66, 75, 90, 170, 802]', explanation: 'Numbers are sorted in ascending order.' }
    ],
    testCases: [
      { input: '8\n170 45 75 90 802 24 2 66', expectedOutput: '2 24 45 66 75 90 170 802', hidden: false },
      { input: '5\n10 100 1 1000 0', expectedOutput: '0 1 10 100 1000', hidden: false }
    ],
    starterCode: {
      python: `def radix_sort(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*radix_sort(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] radixSort(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = radixSort(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void radixSort(int* arr, int n) {
    // Modify array in-place
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    radixSort(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void radixSort(vector<int>& arr) {
    // Modify array in-place
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        radixSort(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-e2', title: 'Sort by Number of Digits', difficulty: 'Easy',
    description: 'Given an array of non-negative integers, sort the array strictly by the number of digits each integer has. If two numbers have the same number of digits, their relative order from the original array must be preserved (stable sort).',
    constraints: ['1 <= arr.length <= 10^4', '0 <= arr[i] <= 10^9'],
    examples: [
      { input: 'arr = [12, 10, 1024, 8, 7]', output: '[8, 7, 12, 10, 1024]', explanation: '8 and 7 have 1 digit, 12 and 10 have 2 digits, 1024 has 4 digits. Relative order is preserved.' }
    ],
    testCases: [
      { input: '5\n12 10 1024 8 7', expectedOutput: '8 7 12 10 1024', hidden: false },
      { input: '4\n0 100 10 1', expectedOutput: '0 1 10 100', hidden: false }
    ],
    starterCode: {
      python: `def sort_by_digits(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*sort_by_digits(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] sortByDigits(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = sortByDigits(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void sortByDigits(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    sortByDigits(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sortByDigits(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        sortByDigits(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-e3', title: 'Sort Binary Strings of Same Length', difficulty: 'Easy',
    description: 'Given an array of binary strings (only containing `0` and `1`), all of the exact same length `L`, sort them in lexicographically ascending order using Radix Sort. (Process from right to left).',
    constraints: ['1 <= arr.length <= 10^3', '1 <= L <= 16'],
    examples: [
      { input: 'arr = ["110", "011", "001", "100"]', output: '["001", "011", "100", "110"]', explanation: 'Sorted numerically/lexicographically.' }
    ],
    testCases: [
      { input: '4\n110 011 001 100', expectedOutput: '001 011 100 110', hidden: false },
      { input: '3\n11 10 01', expectedOutput: '01 10 11', hidden: false }
    ],
    starterCode: {
      python: `def sort_binary_strings(arr):
    pass

n = int(input())
arr = input().split()
print(*(sort_binary_strings(arr)))`,
      java: `import java.util.*;

public class Solution {
    public static String[] sortBinaryStrings(String[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[] arr = new String[n];
            for (int i = 0; i < n; i++) arr[i] = sc.next();
            String[] res = sortBinaryStrings(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void sortBinaryStrings(char** arr, int n, int L) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char** arr = (char**)malloc(n * sizeof(char*));
    int L = 0;
    for (int i = 0; i < n; i++) {
        arr[i] = (char*)malloc(20 * sizeof(char));
        scanf("%s", arr[i]);
        if (i == 0) L = strlen(arr[i]);
    }
    sortBinaryStrings(arr, n, L);
    for (int i = 0; i < n; i++) printf("%s%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    for (int i = 0; i < n; i++) free(arr[i]);
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void sortBinaryStrings(vector<string>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<string> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        sortBinaryStrings(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-e4', title: 'Find Maximum Number via LSD Check', difficulty: 'Easy',
    description: 'Given an array of positive integers, simulate the first pass of LSD Radix Sort (sorting by the 1s digit). After sorting by the 1s digit (stable sort), return the array.',
    constraints: ['1 <= arr.length <= 10^3', '1 <= arr[i] <= 10^6'],
    examples: [
      { input: 'arr = [132, 45, 12, 8, 55]', output: '[132, 12, 45, 55, 8]', explanation: 'Sorted by last digit: 2, 2, 5, 5, 8. Stable sort preserves relative order.' }
    ],
    testCases: [
      { input: '5\n132 45 12 8 55', expectedOutput: '132 12 45 55 8', hidden: false },
      { input: '4\n10 11 20 21', expectedOutput: '10 20 11 21', hidden: false }
    ],
    starterCode: {
      python: `def sort_by_first_digit(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*sort_by_first_digit(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] sortByFirstDigit(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = sortByFirstDigit(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void sortByFirstDigit(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    sortByFirstDigit(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sortByFirstDigit(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        sortByFirstDigit(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-e5', title: 'Sort Strings of Same Length (Lowercase)', difficulty: 'Easy',
    description: 'Given an array of strings consisting of lowercase English letters, all of the exact same length, sort them lexicographically using Radix Sort.',
    constraints: ['1 <= arr.length <= 10^3', '1 <= string length <= 20'],
    examples: [
      { input: 'arr = ["cat", "bat", "rat", "dog"]', output: '["bat", "cat", "dog", "rat"]', explanation: 'Standard lexicographical sort.' }
    ],
    testCases: [
      { input: '4\ncat bat rat dog', expectedOutput: 'bat cat dog rat', hidden: false },
      { input: '3\naaa aba aab', expectedOutput: 'aaa aab aba', hidden: false }
    ],
    starterCode: {
      python: `def radix_sort_strings(arr):
    pass

n = int(input())
arr = input().split()
print(*(radix_sort_strings(arr)))`,
      java: `import java.util.*;

public class Solution {
    public static String[] radixSortStrings(String[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[] arr = new String[n];
            for (int i = 0; i < n; i++) arr[i] = sc.next();
            String[] res = radixSortStrings(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void radixSortStrings(char** arr, int n, int L) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char** arr = (char**)malloc(n * sizeof(char*));
    int L = 0;
    for (int i = 0; i < n; i++) {
        arr[i] = (char*)malloc(25 * sizeof(char));
        scanf("%s", arr[i]);
        if (i == 0) L = strlen(arr[i]);
    }
    radixSortStrings(arr, n, L);
    for (int i = 0; i < n; i++) printf("%s%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    for (int i = 0; i < n; i++) free(arr[i]);
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void radixSortStrings(vector<string>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<string> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        radixSortStrings(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },

  // --- MEDIUM ---
  {
    id: 'rs-m1', title: 'Radix Sort (Positive and Negative Integers)', difficulty: 'Medium',
    description: 'Implement Radix Sort to handle an array containing both positive and negative integers. Do not use built-in sort.',
    constraints: ['1 <= arr.length <= 10^4', '-10^5 <= arr[i] <= 10^5'],
    examples: [
      { input: 'arr = [170, -45, 75, -90, -802, 24]', output: '[-802, -90, -45, 24, 75, 170]', explanation: 'Negative numbers are handled correctly.' }
    ],
    testCases: [
      { input: '6\n170 -45 75 -90 -802 24', expectedOutput: '-802 -90 -45 24 75 170', hidden: false },
      { input: '4\n0 -1 -2 3', expectedOutput: '-2 -1 0 3', hidden: false }
    ],
    starterCode: {
      python: `def radix_sort_all(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*radix_sort_all(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] radixSortAll(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = radixSortAll(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void radixSortAll(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    radixSortAll(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void radixSortAll(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        radixSortAll(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-m2', title: 'Maximum Gap', difficulty: 'Medium',
    description: 'Given an integer array `nums`, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return `0`. You must write an algorithm that runs in linear time and uses linear extra space (e.g., using Radix Sort).',
    constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i] <= 10^9'],
    examples: [
      { input: 'nums = [3,6,9,1]', output: '3', explanation: 'Sorted form is [1,3,6,9], max diff is 3.' }
    ],
    testCases: [
      { input: '4\n3 6 9 1', expectedOutput: '3', hidden: false },
      { input: '2\n10 10', expectedOutput: '0', hidden: false },
      { input: '1\n5', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `def maximum_gap(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(maximum_gap(nums))`,
      java: `import java.util.*;

public class Solution {
    public static int maximumGap(int[] nums) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(maximumGap(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int maximumGap(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", maximumGap(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int maximumGap(vector<int>& nums) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << maximumGap(nums) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-m3', title: 'Sort Strings of Variable Lengths', difficulty: 'Medium',
    description: 'Given an array of strings (lowercase English letters) of varying lengths, sort them lexicographically using Radix Sort (typically MSD or padded LSD).',
    constraints: ['1 <= arr.length <= 10^4', '1 <= string length <= 50'],
    examples: [
      { input: 'arr = ["apple", "app", "banana", "bat"]', output: '["app", "apple", "banana", "bat"]', explanation: 'Lexicographical order.' }
    ],
    testCases: [
      { input: '4\napple app banana bat', expectedOutput: 'app apple banana bat', hidden: false },
      { input: '3\nc ba a', expectedOutput: 'a ba c', hidden: false }
    ],
    starterCode: {
      python: `def radix_sort_var_strings(arr):
    pass

n = int(input())
arr = input().split()
print(*(radix_sort_var_strings(arr)))`,
      java: `import java.util.*;

public class Solution {
    public static String[] radixSortVarStrings(String[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[] arr = new String[n];
            for (int i = 0; i < n; i++) arr[i] = sc.next();
            String[] res = radixSortVarStrings(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void radixSortVarStrings(char** arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char** arr = (char**)malloc(n * sizeof(char*));
    for (int i = 0; i < n; i++) {
        arr[i] = (char*)malloc(55 * sizeof(char));
        scanf("%s", arr[i]);
    }
    radixSortVarStrings(arr, n);
    for (int i = 0; i < n; i++) printf("%s%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    for (int i = 0; i < n; i++) free(arr[i]);
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void radixSortVarStrings(vector<string>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<string> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        radixSortVarStrings(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-m4', title: 'Sort Array of Dates', difficulty: 'Medium',
    description: 'Given an array of integer dates in the format YYYYMMDD, sort them sequentially using Radix Sort. Perform 3 passes: first by DD, then MM, then YYYY.',
    constraints: ['1 <= arr.length <= 10^4', 'Valid dates between 10000101 and 99991231'],
    examples: [
      { input: 'arr = [20231201, 19990515, 20231201, 20240101]', output: '[19990515, 20231201, 20231201, 20240101]', explanation: 'Sorted chronologically.' }
    ],
    testCases: [
      { input: '4\n20231201 19990515 20231201 20240101', expectedOutput: '19990515 20231201 20231201 20240101', hidden: false },
      { input: '3\n20000102 20000101 19991231', expectedOutput: '19991231 20000101 20000102', hidden: false }
    ],
    starterCode: {
      python: `def sort_dates(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*sort_dates(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] sortDates(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = sortDates(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void sortDates(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    sortDates(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sortDates(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        sortDates(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-m5', title: 'Sort Array by K-th Least Significant Digit', difficulty: 'Medium',
    description: 'Given an array of positive integers and an integer K, sort the array stably based ONLY on the K-th digit from the right (1-indexed). If a number has fewer than K digits, treat the K-th digit as 0.',
    constraints: ['1 <= arr.length <= 10^4', '0 <= arr[i] <= 10^9', '1 <= K <= 10'],
    examples: [
      { input: 'arr = [102, 34, 5, 912], K = 2', output: '[102, 5, 912, 34]', explanation: '2nd digits: 102->0, 34->3, 5->0, 912->1. Stable sort by 0, 0, 1, 3 gives 102, 5, 912, 34.' }
    ],
    testCases: [
      { input: '4\n102 34 5 912\n2', expectedOutput: '102 5 912 34', hidden: false },
      { input: '3\n100 200 150\n3', expectedOutput: '100 150 200', hidden: false }
    ],
    starterCode: {
      python: `def sort_by_kth_digit(arr, k):
    pass

n = int(input())
arr = list(map(int, input().split()))
k = int(input())
print(*sort_by_kth_digit(arr, k))`,
      java: `import java.util.*;

public class Solution {
    public static int[] sortByKthDigit(int[] arr, int k) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int k = sc.nextInt();
            int[] res = sortByKthDigit(arr, k);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void sortByKthDigit(int* arr, int n, int k) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    int k; scanf("%d", &k);
    sortByKthDigit(arr, n, k);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sortByKthDigit(vector<int>& arr, int k) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        int k; cin >> k;
        sortByKthDigit(arr, k);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },

  // --- HARD ---
  {
    id: 'rs-h1', title: 'Sort Large Numbers (Strings)', difficulty: 'Hard',
    description: 'Given an array of very large positive integers represented as strings, sort them in ascending order using Radix Sort logic. (Numbers can have up to 100 digits).',
    constraints: ['1 <= arr.length <= 10^3', '1 <= string length <= 100'],
    examples: [
      { input: 'arr = ["314159265358979323846", "271828182845904523536", "1"]', output: '["1", "271828182845904523536", "314159265358979323846"]', explanation: 'Sorted numerically.' }
    ],
    testCases: [
      { input: '3\n314159265358979323846 271828182845904523536 1', expectedOutput: '1 271828182845904523536 314159265358979323846', hidden: false },
      { input: '2\n1000 999', expectedOutput: '999 1000', hidden: false }
    ],
    starterCode: {
      python: `def sort_large_numbers(arr):
    pass

n = int(input())
arr = input().split()
print(*(sort_large_numbers(arr)))`,
      java: `import java.util.*;

public class Solution {
    public static String[] sortLargeNumbers(String[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[] arr = new String[n];
            for (int i = 0; i < n; i++) arr[i] = sc.next();
            String[] res = sortLargeNumbers(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void sortLargeNumbers(char** arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char** arr = (char**)malloc(n * sizeof(char*));
    for (int i = 0; i < n; i++) {
        arr[i] = (char*)malloc(105 * sizeof(char));
        scanf("%s", arr[i]);
    }
    sortLargeNumbers(arr, n);
    for (int i = 0; i < n; i++) printf("%s%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    for (int i = 0; i < n; i++) free(arr[i]);
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void sortLargeNumbers(vector<string>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<string> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        sortLargeNumbers(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-h2', title: 'Sort IPv4 Addresses', difficulty: 'Hard',
    description: 'Given an array of IPv4 addresses as strings, sort them logically. Apply Radix Sort with 4 passes (one for each octet from right to left).',
    constraints: ['1 <= arr.length <= 10^3', 'Valid IPv4 addresses format A.B.C.D'],
    examples: [
      { input: 'arr = ["192.168.1.1", "10.0.0.1", "172.16.254.1"]', output: '["10.0.0.1", "172.16.254.1", "192.168.1.1"]', explanation: 'Sorted by octets A, then B, C, D.' }
    ],
    testCases: [
      { input: '3\n192.168.1.1 10.0.0.1 172.16.254.1', expectedOutput: '10.0.0.1 172.16.254.1 192.168.1.1', hidden: false },
      { input: '2\n1.1.1.2 1.1.1.1', expectedOutput: '1.1.1.1 1.1.1.2', hidden: false }
    ],
    starterCode: {
      python: `def sort_ipv4(arr):
    pass

n = int(input())
arr = input().split()
print(*(sort_ipv4(arr)))`,
      java: `import java.util.*;

public class Solution {
    public static String[] sortIPv4(String[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[] arr = new String[n];
            for (int i = 0; i < n; i++) arr[i] = sc.next();
            String[] res = sortIPv4(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void sortIPv4(char** arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char** arr = (char**)malloc(n * sizeof(char*));
    for (int i = 0; i < n; i++) {
        arr[i] = (char*)malloc(20 * sizeof(char));
        scanf("%s", arr[i]);
    }
    sortIPv4(arr, n);
    for (int i = 0; i < n; i++) printf("%s%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    for (int i = 0; i < n; i++) free(arr[i]);
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void sortIPv4(vector<string>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<string> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        sortIPv4(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-h3', title: 'Sort Points (x, y)', difficulty: 'Hard',
    description: 'Given an array of 2D coordinates `[x, y]` (non-negative integers), sort them first by `x` and then by `y` (both ascending). Implement this strictly using a 2-pass Radix Sort (first pass sorts by `y`, second pass sorts by `x`).',
    constraints: ['1 <= arr.length <= 10^4', '0 <= x, y <= 10^6'],
    examples: [
      { input: 'arr = [[1, 5], [1, 2], [2, 1], [0, 9]]', output: '[[0, 9], [1, 2], [1, 5], [2, 1]]', explanation: 'Sorted by x, then y.' }
    ],
    testCases: [
      { input: '4\n1 5\n1 2\n2 1\n0 9', expectedOutput: '0 9 1 2 1 5 2 1', hidden: false },
      { input: '3\n2 2\n2 1\n1 2', expectedOutput: '1 2 2 1 2 2', hidden: false }
    ],
    starterCode: {
      python: `def sort_points(arr):
    pass

n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]
res = sort_points(arr)
for p in res: print(p[0], p[1], end=" ")
print()`,
      java: `import java.util.*;

public class Solution {
    public static int[][] sortPoints(int[][] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[][] arr = new int[n][2];
            for (int i = 0; i < n; i++) {
                arr[i][0] = sc.nextInt();
                arr[i][1] = sc.nextInt();
            }
            int[][] res = sortPoints(arr);
            for (int i = 0; i < n; i++) {
                System.out.print(res[i][0] + " " + res[i][1] + (i == n - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void sortPoints(int** arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** arr = (int**)malloc(n * sizeof(int*));
    for (int i = 0; i < n; i++) {
        arr[i] = (int*)malloc(2 * sizeof(int));
        scanf("%d %d", &arr[i][0], &arr[i][1]);
    }
    sortPoints(arr, n);
    for (int i = 0; i < n; i++) printf("%d %d%s", arr[i][0], arr[i][1], (i == n - 1 ? "" : " "));
    printf("\\n");
    for (int i = 0; i < n; i++) free(arr[i]);
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void sortPoints(vector<vector<int>>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<vector<int>> arr(n, vector<int>(2));
        for (int i = 0; i < n; i++) cin >> arr[i][0] >> arr[i][1];
        sortPoints(arr);
        for (int i = 0; i < n; i++) cout << arr[i][0] << " " << arr[i][1] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-h4', title: 'Radix Sort Decimal Strings', difficulty: 'Hard',
    description: 'Given an array of strings representing positive decimal numbers (e.g., "3.14", "2.7", "10.01"), sort them numerically using a Radix Sort variant. Remember to align the decimal points conceptually.',
    constraints: ['1 <= arr.length <= 10^3', 'Max digits before and after decimal is 5.'],
    examples: [
      { input: 'arr = ["3.14", "2.7", "10.01", "3.141"]', output: '["2.7", "3.14", "3.141", "10.01"]', explanation: 'Sorted numerically.' }
    ],
    testCases: [
      { input: '4\n3.14 2.7 10.01 3.141', expectedOutput: '2.7 3.14 3.141 10.01', hidden: false },
      { input: '2\n0.5 0.25', expectedOutput: '0.25 0.5', hidden: false }
    ],
    starterCode: {
      python: `def sort_decimals(arr):
    pass

n = int(input())
arr = input().split()
print(*(sort_decimals(arr)))`,
      java: `import java.util.*;

public class Solution {
    public static String[] sortDecimals(String[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            String[] arr = new String[n];
            for (int i = 0; i < n; i++) arr[i] = sc.next();
            String[] res = sortDecimals(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void sortDecimals(char** arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    char** arr = (char**)malloc(n * sizeof(char*));
    for (int i = 0; i < n; i++) {
        arr[i] = (char*)malloc(20 * sizeof(char));
        scanf("%s", arr[i]);
    }
    sortDecimals(arr, n);
    for (int i = 0; i < n; i++) printf("%s%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    for (int i = 0; i < n; i++) free(arr[i]);
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <string>
using namespace std;

void sortDecimals(vector<string>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<string> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        sortDecimals(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'rs-h5', title: 'Radix Sort with Base 256 (Bitwise)', difficulty: 'Hard',
    description: 'Implement Radix Sort for a massive array of 32-bit unsigned integers using Base 256. This means 4 passes (sorting by 1 byte at a time) using bitwise operations (`>>` and `&`). This is highly optimized.',
    constraints: ['1 <= arr.length <= 10^5', '0 <= arr[i] <= 4*10^9'],
    examples: [
      { input: 'arr = [1000000, 5, 256, 1024, 0]', output: '[0, 5, 256, 1024, 1000000]', explanation: 'Standard sort, optimized via base 256.' }
    ],
    testCases: [
      { input: '5\n1000000 5 256 1024 0', expectedOutput: '0 5 256 1024 1000000', hidden: false },
      { input: '3\n4000000000 1 2000000000', expectedOutput: '1 2000000000 4000000000', hidden: false }
    ],
    starterCode: {
      python: `def radix_sort_base_256(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*radix_sort_base_256(arr))`,
      java: `import java.util.*;

public class Solution {
    public static long[] radixSortBase256(long[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            long[] arr = new long[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextLong();
            long[] res = radixSortBase256(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void radixSortBase256(unsigned int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    unsigned int* arr = (unsigned int*)malloc(n * sizeof(unsigned int));
    for (int i = 0; i < n; i++) scanf("%u", &arr[i]);
    radixSortBase256(arr, n);
    for (int i = 0; i < n; i++) printf("%u%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void radixSortBase256(vector<unsigned int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<unsigned int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        radixSortBase256(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  }
];