export const mergeSortProblems = [
  // --- EASY ---
  {
    id: 'ms-e1', title: 'Basic Merge Sort', difficulty: 'Easy',
    description: 'Implement the standard Merge Sort algorithm to sort an array of integers in ascending order.',
    constraints: ['1 <= arr.length <= 10^5', '-10^5 <= arr[i] <= 10^5'],
    examples: [
      { input: 'arr = [5, 2, 9, 1, 5, 6]', output: '[1, 2, 5, 5, 6, 9]', explanation: 'Array sorted in ascending order using Merge Sort.' }
    ],
    testCases: [
      { input: '6\n5 2 9 1 5 6', expectedOutput: '1 2 5 5 6 9', hidden: false },
      { input: '4\n10 -1 0 8', expectedOutput: '-1 0 8 10', hidden: false }
    ],
    starterCode: {
      python: `def merge_sort(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*merge_sort(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] mergeSort(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = mergeSort(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void mergeSort(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    mergeSort(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void mergeSort(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        mergeSort(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-e2', title: 'Merge Two Sorted Arrays', difficulty: 'Easy',
    description: 'Given two sorted integer arrays `arr1` and `arr2`, merge them into a single, sorted array. This is the core subroutine of the Merge Sort algorithm.',
    constraints: ['0 <= arr1.length, arr2.length <= 10^5', '1 <= arr1.length + arr2.length <= 2 * 10^5', '-10^9 <= arr1[i], arr2[i] <= 10^9'],
    examples: [
      { input: 'arr1 = [1, 3, 5], arr2 = [2, 4, 6]', output: '[1, 2, 3, 4, 5, 6]', explanation: 'Elements merged in sorted order.' }
    ],
    testCases: [
      { input: '3\n1 3 5\n3\n2 4 6', expectedOutput: '1 2 3 4 5 6', hidden: false },
      { input: '2\n1 2\n0\n', expectedOutput: '1 2', hidden: false }
    ],
    starterCode: {
      python: `def merge_arrays(arr1, arr2):
    pass

n = int(input())
arr1 = list(map(int, input().split())) if n > 0 else []
m = int(input())
arr2 = list(map(int, input().split())) if m > 0 else []
print(*merge_arrays(arr1, arr2))`,
      java: `import java.util.*;

public class Solution {
    public static int[] mergeArrays(int[] arr1, int[] arr2) {
        return new int[0];
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
            int[] res = mergeArrays(arr1, arr2);
            for (int i = 0; i < res.length; i++) System.out.print(res[i] + (i == res.length - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* mergeArrays(int* arr1, int n, int* arr2, int m, int* returnSize) {
    *returnSize = n + m;
    return NULL;
}

int main() {
    int n, m, retSize;
    if (scanf("%d", &n) != 1) return 0;
    int* arr1 = n > 0 ? (int*)malloc(n * sizeof(int)) : NULL;
    for (int i = 0; i < n; i++) scanf("%d", &arr1[i]);
    scanf("%d", &m);
    int* arr2 = m > 0 ? (int*)malloc(m * sizeof(int)) : NULL;
    for (int i = 0; i < m; i++) scanf("%d", &arr2[i]);
    int* res = mergeArrays(arr1, n, arr2, m, &retSize);
    for (int i = 0; i < retSize; i++) printf("%d%s", res[i], (i == retSize - 1 ? "" : " "));
    printf("\\n");
    if (arr1) free(arr1); if (arr2) free(arr2); free(res);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeArrays(vector<int>& arr1, vector<int>& arr2) {
    return {};
}

int main() {
    int n, m;
    if (cin >> n) {
        vector<int> arr1(n);
        for (int i = 0; i < n; i++) cin >> arr1[i];
        cin >> m;
        vector<int> arr2(m);
        for (int i = 0; i < m; i++) cin >> arr2[i];
        vector<int> res = mergeArrays(arr1, arr2);
        for (int i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-e3', title: 'Merge Two Sorted Linked Lists', difficulty: 'Easy',
    description: 'Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.',
    constraints: ['The number of nodes in both lists is in the range [0, 50].', '-100 <= Node.val <= 100', 'Both lists are sorted in non-decreasing order.'],
    examples: [
      { input: 'list1 = [1,2,4], list2 = [1,3,4]', output: '[1, 1, 2, 3, 4, 4]', explanation: 'Merged in non-decreasing order.' }
    ],
    testCases: [
      { input: '3\n1 2 4\n3\n1 3 4', expectedOutput: '1 1 2 3 4 4', hidden: false },
      { input: '0\n\n1\n0', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_two_lists(list1, list2):
    pass

n = int(input())
l1_arr = list(map(int, input().split())) if n > 0 else []
m = int(input())
l2_arr = list(map(int, input().split())) if m > 0 else []

def build(arr):
    if not arr: return None
    head = ListNode(arr[0])
    curr = head
    for val in arr[1:]:
        curr.next = ListNode(val)
        curr = curr.next
    return head

merged = merge_two_lists(build(l1_arr), build(l2_arr))
res = []
while merged:
    res.append(merged.val)
    merged = merged.next
print(*res)`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode mergeTwoLists(ListNode list1, ListNode list2) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            ListNode l1 = null, curr1 = null;
            if (n > 0) { l1 = new ListNode(sc.nextInt()); curr1 = l1; }
            for (int i = 1; i < n; i++) { curr1.next = new ListNode(sc.nextInt()); curr1 = curr1.next; }
            
            int m = sc.nextInt();
            ListNode l2 = null, curr2 = null;
            if (m > 0) { l2 = new ListNode(sc.nextInt()); curr2 = l2; }
            for (int i = 1; i < m; i++) { curr2.next = new ListNode(sc.nextInt()); curr2 = curr2.next; }
            
            ListNode merged = mergeTwoLists(l1, l2);
            while (merged != null) {
                System.out.print(merged.val + (merged.next == null ? "" : " "));
                merged = merged.next;
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

struct ListNode* mergeTwoLists(struct ListNode* list1, struct ListNode* list2) {
    return NULL;
}

int main() {
    int n, m;
    if (scanf("%d", &n) != 1) return 0;
    struct ListNode *l1 = NULL, *curr1 = NULL;
    if (n > 0) {
        l1 = malloc(sizeof(struct ListNode));
        scanf("%d", &l1->val); l1->next = NULL; curr1 = l1;
        for (int i = 1; i < n; i++) {
            curr1->next = malloc(sizeof(struct ListNode));
            curr1 = curr1->next; scanf("%d", &curr1->val); curr1->next = NULL;
        }
    }
    scanf("%d", &m);
    struct ListNode *l2 = NULL, *curr2 = NULL;
    if (m > 0) {
        l2 = malloc(sizeof(struct ListNode));
        scanf("%d", &l2->val); l2->next = NULL; curr2 = l2;
        for (int i = 1; i < m; i++) {
            curr2->next = malloc(sizeof(struct ListNode));
            curr2 = curr2->next; scanf("%d", &curr2->val); curr2->next = NULL;
        }
    }
    struct ListNode* merged = mergeTwoLists(l1, l2);
    while (merged != NULL) {
        printf("%d%s", merged->val, merged->next ? " " : "");
        merged = merged->next;
    }
    printf("\\n");
    return 0;
}`,
      cpp: `#include <iostream>
using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    return NULL;
}

int main() {
    int n, m;
    if (cin >> n) {
        ListNode *l1 = NULL, *curr1 = NULL;
        if (n > 0) {
            int val; cin >> val; l1 = new ListNode(val); curr1 = l1;
            for (int i = 1; i < n; i++) { cin >> val; curr1->next = new ListNode(val); curr1 = curr1->next; }
        }
        cin >> m;
        ListNode *l2 = NULL, *curr2 = NULL;
        if (m > 0) {
            int val; cin >> val; l2 = new ListNode(val); curr2 = l2;
            for (int i = 1; i < m; i++) { cin >> val; curr2->next = new ListNode(val); curr2 = curr2->next; }
        }
        ListNode* merged = mergeTwoLists(l1, l2);
        while (merged != NULL) {
            cout << merged->val << (merged->next ? " " : "");
            merged = merged->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-e4', title: 'Sort Array in Descending Order', difficulty: 'Easy',
    description: 'Implement a modified Merge Sort to sort an integer array in strictly descending order.',
    constraints: ['1 <= arr.length <= 10^5', '-10^5 <= arr[i] <= 10^5'],
    examples: [
      { input: 'arr = [5, 2, 9, 1, 5, 6]', output: '[9, 6, 5, 5, 2, 1]', explanation: 'Sorted descending.' }
    ],
    testCases: [
      { input: '6\n5 2 9 1 5 6', expectedOutput: '9 6 5 5 2 1', hidden: false },
      { input: '4\n1 2 3 4', expectedOutput: '4 3 2 1', hidden: false }
    ],
    starterCode: {
      python: `def merge_sort_desc(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*merge_sort_desc(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] mergeSortDesc(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = mergeSortDesc(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void mergeSortDesc(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    mergeSortDesc(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void mergeSortDesc(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        mergeSortDesc(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-e5', title: 'Sort a String', difficulty: 'Easy',
    description: 'Given a string `s`, use the Merge Sort algorithm to sort the characters in the string in alphabetical (lexicographical) order.',
    constraints: ['1 <= s.length <= 10^5', 's consists of lowercase English letters.'],
    examples: [
      { input: 's = "edcba"', output: '"abcde"', explanation: 'Characters sorted alphabetically.' }
    ],
    testCases: [
      { input: 'edcba', expectedOutput: 'abcde', hidden: false },
      { input: 'mergesort', expectedOutput: 'eegmorrst', hidden: false }
    ],
    starterCode: {
      python: `def sort_string(s):
    pass

s = input().strip()
print(sort_string(s))`,
      java: `import java.util.*;

public class Solution {
    public static String sortString(String s) {
        return "";
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNext()) {
            String s = sc.next();
            System.out.println(sortString(s));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* sortString(char* s) {
    return s;
}

int main() {
    char s[100005];
    if (scanf("%s", s) == 1) {
        printf("%s\\n", sortString(s));
    }
    return 0;
}`,
      cpp: `#include <iostream>
#include <string>
using namespace std;

string sortString(string s) {
    return "";
}

int main() {
    string s;
    if (cin >> s) {
        cout << sortString(s) << "\\n";
    }
    return 0;
}`
    }
  },

  // --- MEDIUM ---
  {
    id: 'ms-m1', title: 'Count Inversions', difficulty: 'Medium',
    description: 'Given an array of integers. Find the Inversion Count in the array. Two elements `arr[i]` and `arr[j]` form an inversion if `arr[i] > arr[j]` and `i < j`. Solve this efficiently using a modified Merge Sort.',
    constraints: ['1 <= arr.length <= 10^5', '1 <= arr[i] <= 10^9'],
    examples: [
      { input: 'arr = [2, 4, 1, 3, 5]', output: '3', explanation: 'The inversions are (2,1), (4,1), and (4,3).' }
    ],
    testCases: [
      { input: '5\n2 4 1 3 5', expectedOutput: '3', hidden: false },
      { input: '4\n8 4 2 1', expectedOutput: '6', hidden: false }
    ],
    starterCode: {
      python: `def count_inversions(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(count_inversions(arr))`,
      java: `import java.util.*;

public class Solution {
    public static long countInversions(int[] arr) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            System.out.println(countInversions(arr));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

long long countInversions(int* arr, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    printf("%lld\\n", countInversions(arr, n));
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

long long countInversions(vector<int>& arr) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        cout << countInversions(arr) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-m2', title: 'Merge Sort on Singly Linked List (Top-Down)', difficulty: 'Medium',
    description: 'Given the `head` of a linked list, return the list after sorting it in ascending order using Top-Down Merge Sort. This approach uses O(N log N) time and O(log N) auxiliary space (recursion stack).',
    constraints: ['The number of nodes in the list is in the range [0, 5 * 10^4].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [4, 2, 1, 3]', output: '[1, 2, 3, 4]', explanation: 'List is sorted.' }
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
if n > 0:
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
    print(*res)
else:
    print()`,
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
            if (n == 0) { System.out.println(); return; }
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
    if (n == 0) { printf("\\n"); return 0; }
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
        if (n == 0) { cout << "\\n"; return 0; }
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
    id: 'ms-m3', title: 'Merge K Sorted Arrays', difficulty: 'Medium',
    description: 'Given `K` sorted integer arrays, merge them into a single sorted array. Expected time complexity is O(N log K), where N is the total number of elements. (You can use a divide and conquer approach identical to Merge Sort, or a min-heap).',
    constraints: ['1 <= K <= 100', '1 <= length of each array <= 500', '-10^4 <= element <= 10^4'],
    examples: [
      { input: 'K = 3, arrays = [[1, 3], [2, 4, 6], [0, 9]]', output: '[0, 1, 2, 3, 4, 6, 9]', explanation: 'All arrays merged together.' }
    ],
    testCases: [
      { input: '3\n2 1 3\n3 2 4 6\n2 0 9', expectedOutput: '0 1 2 3 4 6 9', hidden: false },
      { input: '2\n3 1 2 3\n3 4 5 6', expectedOutput: '1 2 3 4 5 6', hidden: false }
    ],
    starterCode: {
      python: `def merge_k_arrays(arrays):
    pass

k = int(input())
arrays = []
for _ in range(k):
    line = list(map(int, input().split()))
    arrays.append(line[1:]) # First element is length
print(*merge_k_arrays(arrays))`,
      java: `import java.util.*;

public class Solution {
    public static int[] mergeKArrays(int[][] arrays) {
        return new int[0];
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int k = sc.nextInt();
            int[][] arrays = new int[k][];
            for (int i = 0; i < k; i++) {
                int len = sc.nextInt();
                arrays[i] = new int[len];
                for (int j = 0; j < len; j++) arrays[i][j] = sc.nextInt();
            }
            int[] res = mergeKArrays(arrays);
            for (int i = 0; i < res.length; i++) System.out.print(res[i] + (i == res.length - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* mergeKArrays(int** arrays, int* sizes, int k, int* returnSize) {
    *returnSize = 0;
    return NULL;
}

int main() {
    int k, retSize;
    if (scanf("%d", &k) != 1) return 0;
    int** arrays = (int**)malloc(k * sizeof(int*));
    int* sizes = (int*)malloc(k * sizeof(int));
    for (int i = 0; i < k; i++) {
        scanf("%d", &sizes[i]);
        arrays[i] = (int*)malloc(sizes[i] * sizeof(int));
        for (int j = 0; j < sizes[i]; j++) scanf("%d", &arrays[i][j]);
    }
    int* res = mergeKArrays(arrays, sizes, k, &retSize);
    for (int i = 0; i < retSize; i++) printf("%d%s", res[i], (i == retSize - 1 ? "" : " "));
    printf("\\n");
    for (int i = 0; i < k; i++) free(arrays[i]);
    free(arrays); free(sizes); free(res);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> mergeKArrays(vector<vector<int>>& arrays) {
    return {};
}

int main() {
    int k;
    if (cin >> k) {
        vector<vector<int>> arrays(k);
        for (int i = 0; i < k; i++) {
            int len; cin >> len;
            arrays[i].resize(len);
            for (int j = 0; j < len; j++) cin >> arrays[i][j];
        }
        vector<int> res = mergeKArrays(arrays);
        for (int i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-m4', title: 'Sort Linked List (Bottom-Up)', difficulty: 'Medium',
    description: 'Given the `head` of a linked list, return the list after sorting it in ascending order using Bottom-Up Merge Sort. This approach should achieve O(N log N) time and O(1) auxiliary space (no recursion stack).',
    constraints: ['The number of nodes in the list is in the range [0, 5 * 10^4].', '-10^5 <= Node.val <= 10^5'],
    examples: [
      { input: 'head = [4, 2, 1, 3]', output: '[1, 2, 3, 4]', explanation: 'List is sorted iteratively with O(1) space.' }
    ],
    testCases: [
      { input: '4\n4 2 1 3', expectedOutput: '1 2 3 4', hidden: false },
      { input: '6\n10 9 8 7 6 5', expectedOutput: '5 6 7 8 9 10', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def sort_list_bottom_up(head):
    pass

n = int(input())
if n > 0:
    arr = list(map(int, input().split()))
    head = ListNode(arr[0])
    curr = head
    for val in arr[1:]:
        curr.next = ListNode(val)
        curr = curr.next
    sorted_head = sort_list_bottom_up(head)
    res = []
    while sorted_head:
        res.append(sorted_head.val)
        sorted_head = sorted_head.next
    print(*res)
else:
    print()`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode sortListBottomUp(ListNode head) {
        return head;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            if (n == 0) { System.out.println(); return; }
            ListNode head = new ListNode(sc.nextInt());
            ListNode curr = head;
            for (int i = 1; i < n; i++) {
                curr.next = new ListNode(sc.nextInt());
                curr = curr.next;
            }
            ListNode sorted = sortListBottomUp(head);
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

struct ListNode* sortListBottomUp(struct ListNode* head) {
    return head;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    if (n == 0) { printf("\\n"); return 0; }
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
    struct ListNode* sorted = sortListBottomUp(head);
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

ListNode* sortListBottomUp(ListNode* head) {
    return head;
}

int main() {
    int n;
    if (cin >> n) {
        if (n == 0) { cout << "\\n"; return 0; }
        int val; cin >> val;
        ListNode* head = new ListNode(val);
        ListNode* curr = head;
        for (int i = 1; i < n; i++) {
            cin >> val;
            curr->next = new ListNode(val);
            curr = curr->next;
        }
        ListNode* sorted = sortListBottomUp(head);
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
    id: 'ms-m5', title: 'Intersection of Two Sorted Arrays', difficulty: 'Medium',
    description: 'Given two sorted integer arrays, find their intersection (elements present in both arrays). The intersection should be a sorted array of unique elements. Implement this using the merge step logic.',
    constraints: ['1 <= arr1.length, arr2.length <= 10^5', '0 <= arr1[i], arr2[i] <= 10^9'],
    examples: [
      { input: 'arr1 = [1, 2, 2, 2, 5], arr2 = [2, 2, 4, 5, 6]', output: '[2, 5]', explanation: 'Only unique intersecting elements are included.' }
    ],
    testCases: [
      { input: '5\n1 2 2 2 5\n5\n2 2 4 5 6', expectedOutput: '2 5', hidden: false },
      { input: '4\n1 2 3 4\n3\n5 6 7', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `def intersection(arr1, arr2):
    pass

n = int(input())
arr1 = list(map(int, input().split())) if n > 0 else []
m = int(input())
arr2 = list(map(int, input().split())) if m > 0 else []
print(*intersection(arr1, arr2))`,
      java: `import java.util.*;

public class Solution {
    public static int[] intersection(int[] arr1, int[] arr2) {
        return new int[0];
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
            int[] res = intersection(arr1, arr2);
            for (int i = 0; i < res.length; i++) System.out.print(res[i] + (i == res.length - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* intersection(int* arr1, int n, int* arr2, int m, int* returnSize) {
    *returnSize = 0;
    return NULL;
}

int main() {
    int n, m, retSize;
    if (scanf("%d", &n) != 1) return 0;
    int* arr1 = n > 0 ? (int*)malloc(n * sizeof(int)) : NULL;
    for (int i = 0; i < n; i++) scanf("%d", &arr1[i]);
    scanf("%d", &m);
    int* arr2 = m > 0 ? (int*)malloc(m * sizeof(int)) : NULL;
    for (int i = 0; i < m; i++) scanf("%d", &arr2[i]);
    int* res = intersection(arr1, n, arr2, m, &retSize);
    for (int i = 0; i < retSize; i++) printf("%d%s", res[i], (i == retSize - 1 ? "" : " "));
    printf("\\n");
    if (arr1) free(arr1); if (arr2) free(arr2); if (res) free(res);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> intersection(vector<int>& arr1, vector<int>& arr2) {
    return {};
}

int main() {
    int n, m;
    if (cin >> n) {
        vector<int> arr1(n);
        for (int i = 0; i < n; i++) cin >> arr1[i];
        cin >> m;
        vector<int> arr2(m);
        for (int i = 0; i < m; i++) cin >> arr2[i];
        vector<int> res = intersection(arr1, arr2);
        for (int i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },

  // --- HARD ---
  {
    id: 'ms-h1', title: 'Count of Smaller Numbers After Self', difficulty: 'Hard',
    description: 'Given an integer array `nums`, return an integer array `counts` where `counts[i]` is the number of smaller elements to the right of `nums[i]`. Solve this efficiently using Merge Sort to achieve O(N log N) time.',
    constraints: ['1 <= nums.length <= 10^5', '-10^4 <= nums[i] <= 10^4'],
    examples: [
      { input: 'nums = [5,2,6,1]', output: '[2,1,1,0]', explanation: 'To the right of 5, there are 2 smaller elements (2 and 1). To the right of 2, there is 1 smaller element (1). To the right of 6, there is 1 smaller element (1). To the right of 1, there is 0.' }
    ],
    testCases: [
      { input: '4\n5 2 6 1', expectedOutput: '2 1 1 0', hidden: false },
      { input: '1\n-1', expectedOutput: '0', hidden: false }
    ],
    starterCode: {
      python: `def count_smaller(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(*count_smaller(nums))`,
      java: `import java.util.*;

public class Solution {
    public static List<Integer> countSmaller(int[] nums) {
        return new ArrayList<>();
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            List<Integer> res = countSmaller(nums);
            for (int i = 0; i < res.size(); i++) System.out.print(res.get(i) + (i == res.size() - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int* countSmaller(int* nums, int n, int* returnSize) {
    *returnSize = n;
    return NULL;
}

int main() {
    int n, retSize;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int* res = countSmaller(nums, n, &retSize);
    for (int i = 0; i < retSize; i++) printf("%d%s", res[i], (i == retSize - 1 ? "" : " "));
    printf("\\n");
    free(nums); free(res);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

vector<int> countSmaller(vector<int>& nums) {
    return {};
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        vector<int> res = countSmaller(nums);
        for (int i = 0; i < res.size(); i++) cout << res[i] << (i == res.size() - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-h2', title: 'Reverse Pairs', difficulty: 'Hard',
    description: 'Given an integer array `nums`, return the number of reverse pairs in the array. A reverse pair is a pair `(i, j)` where: `0 <= i < j < nums.length` and `nums[i] > 2 * nums[j]`. Solve this efficiently using Merge Sort to achieve O(N log N) time.',
    constraints: ['1 <= nums.length <= 5 * 10^4', '-2^31 <= nums[i] <= 2^31 - 1'],
    examples: [
      { input: 'nums = [1,3,2,3,1]', output: '2', explanation: 'The reverse pairs are (1, 4) where 3 > 2*1 and (3, 4) where 3 > 2*1.' }
    ],
    testCases: [
      { input: '5\n1 3 2 3 1', expectedOutput: '2', hidden: false },
      { input: '5\n2 4 3 5 1', expectedOutput: '3', hidden: false }
    ],
    starterCode: {
      python: `def reverse_pairs(nums):
    pass

n = int(input())
nums = list(map(int, input().split()))
print(reverse_pairs(nums))`,
      java: `import java.util.*;

public class Solution {
    public static int reversePairs(int[] nums) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            System.out.println(reversePairs(nums));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int reversePairs(int* nums, int n) {
    return 0;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", reversePairs(nums, n));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int reversePairs(vector<int>& nums) {
    return 0;
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cout << reversePairs(nums) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-h3', title: 'Count of Range Sum', difficulty: 'Hard',
    description: 'Given an integer array `nums` and two integers `lower` and `upper`, return the number of range sums that lie in `[lower, upper]` inclusive. A range sum `S(i, j)` is the sum of elements from `nums[i]` to `nums[j]`. Hint: Use a prefix sum array and apply Merge Sort to count valid ranges.',
    constraints: ['1 <= nums.length <= 10^5', '-2^31 <= nums[i] <= 2^31 - 1', '-10^5 <= lower <= upper <= 10^5'],
    examples: [
      { input: 'nums = [-2,5,-1], lower = -2, upper = 2', output: '3', explanation: 'The three ranges are: [0,0] (-2), [2,2] (-1), and [0,2] (2).' }
    ],
    testCases: [
      { input: '3\n-2 5 -1\n-2 2', expectedOutput: '3', hidden: false },
      { input: '1\n0\n0 0', expectedOutput: '1', hidden: false }
    ],
    starterCode: {
      python: `def count_range_sum(nums, lower, upper):
    pass

n = int(input())
nums = list(map(int, input().split()))
lower, upper = map(int, input().split())
print(count_range_sum(nums, lower, upper))`,
      java: `import java.util.*;

public class Solution {
    public static int countRangeSum(int[] nums, int lower, int upper) {
        return 0;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) nums[i] = sc.nextInt();
            int lower = sc.nextInt();
            int upper = sc.nextInt();
            System.out.println(countRangeSum(nums, lower, upper));
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

int countRangeSum(int* nums, int n, int lower, int upper) {
    return 0;
}

int main() {
    int n, lower, upper;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    scanf("%d %d", &lower, &upper);
    printf("%d\\n", countRangeSum(nums, n, lower, upper));
    free(nums);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

int countRangeSum(vector<int>& nums, int lower, int upper) {
    return 0;
}

int main() {
    int n, lower, upper;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++) cin >> nums[i];
        cin >> lower >> upper;
        cout << countRangeSum(nums, lower, upper) << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-h4', title: 'Merge K Sorted Linked Lists', difficulty: 'Hard',
    description: 'You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order. Merge all the linked-lists into one sorted linked-list and return it. Expected time complexity is O(N log K) using a Divide and Conquer / Merge approach.',
    constraints: ['k == lists.length', '0 <= k <= 10^4', '0 <= lists[i].length <= 500', '-10^4 <= lists[i][j] <= 10^4', 'Sum of all lengths <= 10^4'],
    examples: [
      { input: 'lists = [[1,4,5],[1,3,4],[2,6]]', output: '[1,1,2,3,4,4,5,6]', explanation: 'All lists merged together.' }
    ],
    testCases: [
      { input: '3\n3 1 4 5\n3 1 3 4\n2 2 6', expectedOutput: '1 1 2 3 4 4 5 6', hidden: false },
      { input: '1\n0', expectedOutput: '', hidden: false }
    ],
    starterCode: {
      python: `class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def merge_k_lists(lists):
    pass

k = int(input())
lists = []
for _ in range(k):
    arr = list(map(int, input().split()))
    if arr[0] > 0:
        head = ListNode(arr[1])
        curr = head
        for val in arr[2:]:
            curr.next = ListNode(val)
            curr = curr.next
        lists.append(head)
    else:
        lists.append(None)

merged = merge_k_lists(lists)
res = []
while merged:
    res.append(merged.val)
    merged = merged.next
print(*res)`,
      java: `import java.util.*;

class ListNode {
    int val;
    ListNode next;
    ListNode(int val) { this.val = val; }
}

public class Solution {
    public static ListNode mergeKLists(ListNode[] lists) {
        return null;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int k = sc.nextInt();
            ListNode[] lists = new ListNode[k];
            for (int i = 0; i < k; i++) {
                int len = sc.nextInt();
                if (len > 0) {
                    lists[i] = new ListNode(sc.nextInt());
                    ListNode curr = lists[i];
                    for (int j = 1; j < len; j++) {
                        curr.next = new ListNode(sc.nextInt());
                        curr = curr.next;
                    }
                }
            }
            ListNode merged = mergeKLists(lists);
            while (merged != null) {
                System.out.print(merged.val + (merged.next == null ? "" : " "));
                merged = merged.next;
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

struct ListNode* mergeKLists(struct ListNode** lists, int k) {
    return NULL;
}

int main() {
    int k;
    if (scanf("%d", &k) != 1) return 0;
    struct ListNode** lists = malloc(k * sizeof(struct ListNode*));
    for (int i = 0; i < k; i++) {
        int len; scanf("%d", &len);
        if (len > 0) {
            lists[i] = malloc(sizeof(struct ListNode));
            scanf("%d", &lists[i]->val); lists[i]->next = NULL;
            struct ListNode* curr = lists[i];
            for (int j = 1; j < len; j++) {
                curr->next = malloc(sizeof(struct ListNode));
                curr = curr->next; scanf("%d", &curr->val); curr->next = NULL;
            }
        } else lists[i] = NULL;
    }
    struct ListNode* merged = mergeKLists(lists, k);
    while (merged != NULL) {
        printf("%d%s", merged->val, merged->next ? " " : "");
        merged = merged->next;
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

ListNode* mergeKLists(vector<ListNode*>& lists) {
    return NULL;
}

int main() {
    int k;
    if (cin >> k) {
        vector<ListNode*> lists(k, NULL);
        for (int i = 0; i < k; i++) {
            int len; cin >> len;
            if (len > 0) {
                int val; cin >> val;
                lists[i] = new ListNode(val);
                ListNode* curr = lists[i];
                for (int j = 1; j < len; j++) {
                    cin >> val;
                    curr->next = new ListNode(val);
                    curr = curr->next;
                }
            }
        }
        ListNode* merged = mergeKLists(lists);
        while (merged != NULL) {
            cout << merged->val << (merged->next ? " " : "");
            merged = merged->next;
        }
        cout << "\\n";
    }
    return 0;
}`
    }
  },
  {
    id: 'ms-h5', title: 'In-Place Merge Sort', difficulty: 'Hard',
    description: 'Implement Merge Sort with O(1) auxiliary space complexity. Standard Merge Sort takes O(N) space to merge. You can use gap method (Shell sort inspired merge) or block swap to achieve O(1) space merging.',
    constraints: ['1 <= arr.length <= 10^4', '-10^5 <= arr[i] <= 10^5'],
    examples: [
      { input: 'arr = [12, 11, 13, 5, 6, 7]', output: '[5, 6, 7, 11, 12, 13]', explanation: 'Sorted in-place.' }
    ],
    testCases: [
      { input: '6\n12 11 13 5 6 7', expectedOutput: '5 6 7 11 12 13', hidden: false },
      { input: '5\n10 9 8 7 6', expectedOutput: '6 7 8 9 10', hidden: false }
    ],
    starterCode: {
      python: `def in_place_merge_sort(arr):
    pass

n = int(input())
arr = list(map(int, input().split()))
print(*in_place_merge_sort(arr))`,
      java: `import java.util.*;

public class Solution {
    public static int[] inPlaceMergeSort(int[] arr) {
        return arr;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] arr = new int[n];
            for (int i = 0; i < n; i++) arr[i] = sc.nextInt();
            int[] res = inPlaceMergeSort(arr);
            for (int i = 0; i < n; i++) System.out.print(res[i] + (i == n - 1 ? "" : " "));
            System.out.println();
        }
    }
}`,
      c: `#include <stdio.h>
#include <stdlib.h>

void inPlaceMergeSort(int* arr, int n) {
    
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &arr[i]);
    inPlaceMergeSort(arr, n);
    for (int i = 0; i < n; i++) printf("%d%s", arr[i], (i == n - 1 ? "" : " "));
    printf("\\n");
    free(arr);
    return 0;
}`,
      cpp: `#include <iostream>
#include <vector>
using namespace std;

void inPlaceMergeSort(vector<int>& arr) {
    
}

int main() {
    int n;
    if (cin >> n) {
        vector<int> arr(n);
        for (int i = 0; i < n; i++) cin >> arr[i];
        inPlaceMergeSort(arr);
        for (int i = 0; i < n; i++) cout << arr[i] << (i == n - 1 ? "" : " ");
        cout << "\\n";
    }
    return 0;
}`
    }
  }
];