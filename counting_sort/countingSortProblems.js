export const countingSortProblems = [
  // --- EASY ---
  {
    id: 'cs-e1', title: 'Classic Counting Sort', difficulty: 'Easy',
    description: 'Given an array `nums` of non-negative integers, sort the array in ascending order using the counting sort algorithm.',
    constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i] <= 10^5'],
    examples: [
      { input: 'nums = [5, 2, 3, 1]', output: '1 2 3 5', explanation: 'Array sorted using frequencies.' }
    ],
    testCases: [
      { input: '4\n5 2 3 1', expectedOutput: '1 2 3 5', hidden: false },
      { input: '5\n0 0 1 1 0', expectedOutput: '0 0 0 1 1', hidden: false }
    ],
    starterCode: {
      python: `def counting_sort(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(*(counting_sort(nums)))`,
      java: `import java.util.*;

public class Solution {
    public static int[] countingSort(int[] nums) {
        return nums;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            nums = countingSort(nums);
            for (int i = 0; i < n; i++) {
                System.out.print(nums[i] + (i == n - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void countingSort(int* nums, int n) {
    // Modify array in place
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    countingSort(nums, n);
    for (int i = 0; i < n; i++) {
        printf("%d%s", nums[i], (i == n - 1) ? "" : " ");
    }
    printf("\\n");
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

void countingSort(vector<int>& nums) {
    // Modify array in place
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        countingSort(nums);
        for (int i = 0; i < n; i++) {
            cout << nums[i] << (i == n - 1 ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-e2', title: 'Valid Anagram', difficulty: 'Easy',
    description: 'Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise. Use a frequency array for optimal $O(N)$ time and $O(1)$ space performance.',
    constraints: ['1 <= s.length, t.length <= 5 * 10^4', 's and t consist of lowercase English letters.'],
    examples: [
      { input: 's = "anagram", t = "nagaram"', output: 'true', explanation: 'Both contain the exact same frequency of characters.' },
      { input: 's = "rat", t = "car"', output: 'false', explanation: 'Different frequencies of characters.' }
    ],
    testCases: [
      { input: 'anagram\nnagaram', expectedOutput: 'true', hidden: false },
      { input: 'rat\ncar', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def is_anagram(s, t):
    pass

s = input().strip()
t = input().strip()
print(str(is_anagram(s, t)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean isAnagram(String s, String t) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s = sc.next();
            String t = sc.next();
            System.out.println(isAnagram(s, t));
        }
    }
}`,
      c: `#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isAnagram(char* s, char* t) {
    return false;
}

int main() {
    char s[50005], t[50005];
    if (scanf("%s %s", s, t) == 2) {
        printf("%s\\n", isAnagram(s, t) ? "true" : "false");
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>

using namespace std;

bool isAnagram(string s, string t) {
    return false;
}

int main() {
    string s, t;
    if (cin >> s >> t) {
        cout << (isAnagram(s, t) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-e3', title: 'First Unique Character in a String', difficulty: 'Easy',
    description: 'Given a string `s`, find the first non-repeating character in it and return its index. If it does not exist, return `-1`. Utilize a frequency counting array to track occurrences.',
    constraints: ['1 <= s.length <= 10^5', 's consists of only lowercase English letters.'],
    examples: [
      { input: 's = "leetcode"', output: '0', explanation: 'Character "l" only appears once and is first.' },
      { input: 's = "loveleetcode"', output: '2', explanation: 'Character "v" only appears once and is first.' }
    ],
    testCases: [
      { input: 'leetcode', expectedOutput: '0', hidden: false },
      { input: 'loveleetcode', expectedOutput: '2', hidden: false },
      { input: 'aabb', expectedOutput: '-1', hidden: false }
    ],
    starterCode: {
      python: `def first_unique_char(s):
    pass

s = input().strip()
print(first_unique_char(s))`,
      java: `import java.util.*;

public class Solution {
    public static int firstUniqueChar(String s) {
        return -1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s = sc.next();
            System.out.println(firstUniqueChar(s));
        }
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int firstUniqueChar(char* s) {
    return -1;
}

int main() {
    char s[100005];
    if (scanf("%s", s) == 1) {
        printf("%d\\n", firstUniqueChar(s));
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>

using namespace std;

int firstUniqueChar(string s) {
    return -1;
}

int main() {
    string s;
    if (cin >> s) {
        cout << firstUniqueChar(s) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-e4', title: 'Sort Colors', difficulty: 'Easy',
    description: 'Given an array `nums` with `n` objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue. We will use the integers `0`, `1`, and `2` to represent the color red, white, and blue, respectively. Utilize a counting sort logic.',
    constraints: ['1 <= n <= 300', 'nums[i] is either 0, 1, or 2.'],
    examples: [
      { input: 'nums = [2,0,2,1,1,0]', output: '0 0 1 1 2 2', explanation: 'Values are sorted.' }
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
sort_colors(nums)
print(*(nums))`,
      java: `import java.util.*;

public class Solution {
    public static void sortColors(int[] nums) {
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            sortColors(nums);
            for (int i = 0; i < n; i++) {
                System.out.print(nums[i] + (i == n - 1 ? "" : " "));
            }
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
    for (int i = 0; i < n; i++) {
        printf("%d%s", nums[i], (i == n - 1) ? "" : " ");
    }
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
        for (int i = 0; i < n; i++) {
            cout << nums[i] << (i == n - 1 ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-e5', title: 'Relative Sort Array', difficulty: 'Easy',
    description: 'Given two arrays `arr1` and `arr2`, the elements of `arr2` are distinct, and all elements in `arr2` are also in `arr1`. Sort the elements of `arr1` such that the relative ordering of items in `arr1` are the same as in `arr2`. Elements that do not appear in `arr2` should be placed at the end of `arr1` in ascending order.',
    constraints: ['1 <= arr1.length, arr2.length <= 1000', '0 <= arr1[i], arr2[i] <= 1000', 'All the elements of arr2 are distinct.'],
    examples: [
      { input: 'arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]', output: '2 2 2 1 4 3 3 9 6 7 19', explanation: 'Elements not in arr2 are [7, 19], placed at the end sorted.' }
    ],
    testCases: [
      { input: '11\n2 3 1 3 2 4 6 7 9 2 19\n6\n2 1 4 3 9 6', expectedOutput: '2 2 2 1 4 3 3 9 6 7 19', hidden: false },
      { input: '5\n28 6 22 8 44\n3\n22 28 8', expectedOutput: '22 28 8 6 44', hidden: false }
    ],
    starterCode: {
      python: `def relative_sort_array(arr1, arr2):
    pass

n = int(input())
arr1 = list(map(int, input().split()))
m = int(input())
arr2 = list(map(int, input().split()))
print(*(relative_sort_array(arr1, arr2)))`,
      java: `import java.util.*;

public class Solution {
    public static int[] relativeSortArray(int[] arr1, int[] arr2) {
        return arr1;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr1 = new int[n];
            for (int i = 0; i < n; i++) arr1[i] = sc.nextInt();
            int m = sc.nextInt();
            int[] arr2 = new int[m];
            for (int i = 0; i < m; i++) arr2[i] = sc.nextInt();
            arr1 = relativeSortArray(arr1, arr2);
            for (int i = 0; i < n; i++) {
                System.out.print(arr1[i] + (i == n - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void relativeSortArray(int* arr1, int n, int* arr2, int m) {
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    int* arr1 = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr1[i]);
    if (scanf("%d", &m) != 1) return 0;
    int* arr2 = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) scanf("%d", &arr2[i]);
    relativeSortArray(arr1, n, arr2, m);
    for (int i = 0; i < n; i++) {
        printf("%d%s", arr1[i], (i == n - 1) ? "" : " ");
    }
    printf("\\n");
    free(arr1); free(arr2);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

void relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
}

int main() {
    int n, m;
    if (cin >> n) {
        vector<int> arr1(n);
        for (int i = 0; i < n; i++) cin >> arr1[i];
        cin >> m;
        vector<int> arr2(m);
        for (int i = 0; i < m; i++) cin >> arr2[i];
        relativeSortArray(arr1, arr2);
        for (int i = 0; i < n; i++) {
            cout << arr1[i] << (i == n - 1 ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },

  // --- MEDIUM ---
  {
    id: 'cs-m1', title: 'Top K Frequent Elements', difficulty: 'Medium',
    description: 'Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. The output must be sorted in ascending order for standardization.',
    constraints: ['1 <= nums.length <= 10^5', '1 <= k <= number of unique elements', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [1,1,1,2,2,3], k = 2', output: '1 2', explanation: '1 has frequency 3, 2 has frequency 2.' },
      { input: 'nums = [1], k = 1', output: '1', explanation: 'Only 1 element.' }
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
print(*(top_k_frequent(nums, k)))`,
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
            for (int i = 0; i < res.length; i++) {
                System.out.print(res[i] + (i == res.length - 1 ? "" : " "));
            }
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void topKFrequent(int* nums, int n, int k, int* out) {
}

int main() {
    int n, k;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    if (scanf("%d", &k) != 1) return 0;
    int* out = (int*)malloc(k * sizeof(int));
    topKFrequent(nums, n, k, out);
    for (int i = 0; i < k; i++) {
        printf("%d%s", out[i], (i == k - 1) ? "" : " ");
    }
    printf("\\n");
    free(nums); free(out);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
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
        for (int i = 0; i < res.size(); i++) {
            cout << res[i] << (i == res.size() - 1 ? "" : " ");
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-m2', title: 'Sort Characters By Frequency', difficulty: 'Medium',
    description: 'Given a string `s`, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string. If multiple characters have the same frequency, sort them in ascending alphabetical order.',
    constraints: ['1 <= s.length <= 5 * 10^5', 's consists of uppercase and lowercase English letters and digits.'],
    examples: [
      { input: 's = "tree"', output: 'eetr', explanation: "'e' appears twice while 't' and 'r' appear once. 'r' < 't' so it comes first." },
      { input: 's = "cccaaa"', output: 'aaaccc', explanation: "'a' and 'c' both appear three times. 'a' < 'c'." }
    ],
    testCases: [
      { input: 'tree', expectedOutput: 'eetr', hidden: false },
      { input: 'cccaaa', expectedOutput: 'aaaccc', hidden: false }
    ],
    starterCode: {
      python: `def frequency_sort(s):
    pass

s = input().strip()
print(frequency_sort(s))`,
      java: `import java.util.*;

public class Solution {
    public static String frequencySort(String s) {
        return "";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s = sc.next();
            System.out.println(frequencySort(s));
        }
    }
}`,
      c: `#include <stdio.h>
#include <string.h>
#include <stdlib.h>

void frequencySort(char* s, char* out) {
}

int main() {
    char s[500005];
    if (scanf("%s", s) == 1) {
        char out[500005];
        frequencySort(s, out);
        printf("%s\\n", out);
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

string frequencySort(string s) {
    return "";
}

int main() {
    string s;
    if (cin >> s) {
        cout << frequencySort(s) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-m3', title: 'H-Index', difficulty: 'Medium',
    description: 'Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their ith paper, return the researcher\'s h-index. A scientist has an index `h` if `h` of their papers have at least `h` citations each, and the other papers have no more than `h` citations. An optimal $O(N)$ approach uses counting sort arrays.',
    constraints: ['1 <= citations.length <= 5000', '0 <= citations[i] <= 1000'],
    examples: [
      { input: 'citations = [3,0,6,1,5]', output: '3', explanation: 'They have 3 papers with at least 3 citations each.' }
    ],
    testCases: [
      { input: '5\n3 0 6 1 5', expectedOutput: '3', hidden: false },
      { input: '3\n1 3 1', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `def h_index(citations):
    pass

n = int(input())
citations = list(map(int, input().split()))
print(h_index(citations))`,
      java: `import java.util.*;

public class Solution {
    public static int hIndex(int[] citations) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] citations = new int[n];
            for (int i = 0; i < n; i++) citations[i] = sc.nextInt();
            System.out.println(hIndex(citations));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int hIndex(int* citations, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* citations = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &citations[i]);
    printf("%d\\n", hIndex(citations, n));
    free(citations);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int hIndex(vector<int>& citations) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> citations(n);
        for (int i = 0; i < n; i++) cin >> citations[i];
        cout << hIndex(citations) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-m4', title: 'Custom Sort String', difficulty: 'Medium',
    description: 'You are given two strings `order` and `s`. All the characters of `order` are unique and were sorted in some custom order previously. Permute the characters of `s` so that they match the order that `order` was sorted. More specifically, if a character x occurs before a character y in `order`, then x should occur before y in the permuted string. Return any permutation of `s` that satisfies this property (we enforce exact deterministic output by placing missing characters at the end, in their original order, or ascending alphabetical. Here we place them ascending alphabetical).',
    constraints: ['1 <= order.length <= 26', '1 <= s.length <= 200', 'order and s consist of lowercase English letters.'],
    examples: [
      { input: 'order = "cba", s = "abcd"', output: 'cbad', explanation: 'c, b, a appear in order, d is appended at the end.' }
    ],
    testCases: [
      { input: 'cba\nabcd', expectedOutput: 'cbad', hidden: false },
      { input: 'bcafg\nabcd', expectedOutput: 'bcad', hidden: false }
    ],
    starterCode: {
      python: `def custom_sort_string(order, s):
    pass

order = input().strip()
s = input().strip()
print(custom_sort_string(order, s))`,
      java: `import java.util.*;

public class Solution {
    public static String customSortString(String order, String s) {
        return "";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String order = sc.next();
            String s = sc.next();
            System.out.println(customSortString(order, s));
        }
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

void customSortString(char* order, char* s, char* out) {
}

int main() {
    char order[30], s[205], out[205];
    if (scanf("%s %s", order, s) == 2) {
        customSortString(order, s, out);
        printf("%s\\n", out);
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
#include <vector>

using namespace std;

string customSortString(string order, string s) {
    return "";
}

int main() {
    string order, s;
    if (cin >> order >> s) {
        cout << customSortString(order, s) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-m5', title: 'Minimum Deletions to Make Character Frequencies Unique', difficulty: 'Medium',
    description: 'A string `s` is called good if there are no two different characters in `s` that have the same frequency. Given a string `s`, return the minimum number of characters you need to delete to make `s` good. Uses frequency maps and counting.',
    constraints: ['1 <= s.length <= 10^5', 's contains only lowercase English letters.'],
    examples: [
      { input: 's = "aab"', output: '0', explanation: 's is already good.' },
      { input: 's = "aaabbbcc"', output: '2', explanation: 'Delete two bs or one b and one c.' }
    ],
    testCases: [
      { input: 'aab', expectedOutput: '0', hidden: false },
      { input: 'aaabbbcc', expectedOutput: '2', hidden: false },
      { input: 'ceabaacb', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: `def min_deletions(s):
    pass

s = input().strip()
print(min_deletions(s))`,
      java: `import java.util.*;

public class Solution {
    public static int minDeletions(String s) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s = sc.next();
            System.out.println(minDeletions(s));
        }
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int minDeletions(char* s) {
    return 0;
}

int main() {
    char s[100005];
    if (scanf("%s", s) == 1) {
        printf("%d\\n", minDeletions(s));
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>

using namespace std;

int minDeletions(string s) {
    return 0;
}

int main() {
    string s;
    if (cin >> s) {
        cout << minDeletions(s) << "\\n";
    }
    return 0;
}`
    }
  },

  // --- HARD ---
  {
    id: 'cs-h1', title: 'Maximum Gap', difficulty: 'Hard',
    description: 'Given an integer array `nums`, return the maximum difference between two successive elements in its sorted form. If the array contains less than two elements, return 0. You must write an algorithm that runs in linear time and uses linear extra space (i.e., Bucket Sort/Pigeonhole Principle).',
    constraints: ['1 <= nums.length <= 10^5', '0 <= nums[i] <= 10^9'],
    examples: [
      { input: 'nums = [3,6,9,1]', output: '3', explanation: 'Sorted form is [1,3,6,9], max diff is between 3 and 6, or 6 and 9.' }
    ],
    testCases: [
      { input: '4\n3 6 9 1', expectedOutput: '3', hidden: false },
      { input: '1\n10', expectedOutput: '0', hidden: false }
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
    id: 'cs-h2', title: 'Contains Duplicate III', difficulty: 'Hard',
    description: 'You are given an integer array `nums` and two integers `indexDiff` and `valueDiff`. Find whether there exists two distinct indices `i` and `j` in the array such that `abs(i - j) <= indexDiff` and `abs(nums[i] - nums[j]) <= valueDiff`. Using a dynamic bucket sort approach gives optimal linear-time performance.',
    constraints: ['2 <= nums.length <= 10^5', '-10^9 <= nums[i] <= 10^9', '1 <= indexDiff <= nums.length', '0 <= valueDiff <= 10^9'],
    examples: [
      { input: 'nums = [1,2,3,1], indexDiff = 3, valueDiff = 0', output: 'true', explanation: 'nums[0] and nums[3] are equal.' }
    ],
    testCases: [
      { input: '4\n1 2 3 1\n3\n0', expectedOutput: 'true', hidden: false },
      { input: '6\n1 5 9 1 5 9\n2\n3', expectedOutput: 'false', hidden: false }
    ],
    starterCode: {
      python: `def contains_nearby_almost_duplicate(nums, indexDiff, valueDiff):
    pass

n = int(input())
nums = list(map(int, input().split()))
indexDiff = int(input())
valueDiff = int(input())
print(str(contains_nearby_almost_duplicate(nums, indexDiff, valueDiff)).lower())`,
      java: `import java.util.*;

public class Solution {
    public static boolean containsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {
        return false;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int indexDiff = sc.nextInt();
            int valueDiff = sc.nextInt();
            System.out.println(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool containsNearbyAlmostDuplicate(int* nums, int n, int indexDiff, int valueDiff) {
    return false;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int indexDiff, valueDiff;
    if (scanf("%d %d", &indexDiff, &valueDiff) != 2) return 0;
    printf("%s\\n", containsNearbyAlmostDuplicate(nums, n, indexDiff, valueDiff) ? "true" : "false");
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
#include <set>

using namespace std;

bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {
    return false;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int indexDiff, valueDiff;
        cin >> indexDiff >> valueDiff;
        cout << (containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff) ? "true" : "false") << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-h3', title: 'Minimum Window Substring', difficulty: 'Hard',
    description: 'Given two strings `s` and `t`, return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. If there is no such substring, return the empty string "". Heavy reliance on dual frequency count arrays.',
    constraints: ['1 <= s.length, t.length <= 10^5', 's and t consist of uppercase and lowercase English letters.'],
    examples: [
      { input: 's = "ADOBECODEBANC", t = "ABC"', output: 'BANC', explanation: 'The minimum window substring "BANC" includes A, B, and C.' }
    ],
    testCases: [
      { input: 'ADOBECODEBANC\nABC', expectedOutput: 'BANC', hidden: false },
      { input: 'a\na', expectedOutput: 'a', hidden: false },
      { input: 'a\naa', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `def min_window(s, t):
    pass

s = input().strip()
t = input().strip()
print(min_window(s, t))`,
      java: `import java.util.*;

public class Solution {
    public static String minWindow(String s, String t) {
        return "";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s = sc.next();
            String t = sc.next();
            System.out.println(minWindow(s, t));
        }
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

void minWindow(char* s, char* t, char* out) {
    out[0] = '\\0';
}

int main() {
    char s[100005], t[100005], out[100005];
    if (scanf("%s %s", s, t) == 2) {
        minWindow(s, t, out);
        printf("%s\\n", out);
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>

using namespace std;

string minWindow(string s, string t) {
    return "";
}

int main() {
    string s, t;
    if (cin >> s >> t) {
        cout << minWindow(s, t) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-h4', title: 'Subarrays with K Different Integers', difficulty: 'Hard',
    description: 'Given an integer array `nums` and an integer `k`, return the number of good subarrays of `nums`. A good array is an array where the number of different integers in that array is exactly `k`. We use frequency arrays across sliding windows to solve this.',
    constraints: ['1 <= nums.length <= 2 * 10^4', '1 <= nums[i], k <= nums.length'],
    examples: [
      { input: 'nums = [1,2,1,2,3], k = 2', output: '7', explanation: 'Good subarrays: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2].' }
    ],
    testCases: [
      { input: '5\n1 2 1 2 3\n2', expectedOutput: '7', hidden: false },
      { input: '5\n1 2 1 3 4\n3', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: `def subarrays_with_k_distinct(nums, k):
    pass

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(subarrays_with_k_distinct(nums, k))`,
      java: `import java.util.*;

public class Solution {
    public static int subarraysWithKDistinct(int[] nums, int k) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(subarraysWithKDistinct(nums, k));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int subarraysWithKDistinct(int* nums, int n, int k) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int k;
    if (scanf("%d", &k) != 1) return 0;
    printf("%d\\n", subarraysWithKDistinct(nums, n, k));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>

using namespace std;

int subarraysWithKDistinct(vector<int>& nums, int k) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        int k;
        cin >> k;
        cout << subarraysWithKDistinct(nums, k) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-h5', title: 'Longest Substring with At Most K Distinct Characters', difficulty: 'Hard',
    description: 'Given a string `s` and an integer `k`, return the length of the longest substring of `s` that contains at most `k` distinct characters. Strongly leverages character frequency count array.',
    constraints: ['1 <= s.length <= 5 * 10^4', '0 <= k <= 50'],
    examples: [
      { input: 's = "eceba", k = 2', output: '3', explanation: 'The substring is "ece" with length 3.' }
    ],
    testCases: [
      { input: 'eceba\n2', expectedOutput: '3', hidden: false },
      { input: 'aa\n1', expectedOutput: '2', hidden: false }
    ],
    starterCode: {
      python: `def length_of_longest_substring_k_distinct(s, k):
    pass

s = input().strip()
k = int(input())
print(length_of_longest_substring_k_distinct(s, k))`,
      java: `import java.util.*;

public class Solution {
    public static int lengthOfLongestSubstringKDistinct(String s, int k) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s = sc.next();
            int k = sc.nextInt();
            System.out.println(lengthOfLongestSubstringKDistinct(s, k));
        }
    }
}`,
      c: `#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstringKDistinct(char* s, int k) {
    return 0;
}

int main() {
    char s[50005];
    int k;
    if (scanf("%s %d", s, &k) == 2) {
        printf("%d\\n", lengthOfLongestSubstringKDistinct(s, k));
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>

using namespace std;

int lengthOfLongestSubstringKDistinct(string s, int k) {
    return 0;
}

int main() {
    string s;
    int k;
    if (cin >> s >> k) {
        cout << lengthOfLongestSubstringKDistinct(s, k) << "\\n";
    }
    return 0;
}`
    }
  }
];