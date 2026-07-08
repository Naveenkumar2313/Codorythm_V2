export const subarraySumSolutions = {
  'sak-e1': {
    python: `def subarray_sum(nums, k):
    prefix_sum = 0
    count = 0
    prefix_count = {0: 1}
    for num in nums:
        prefix_sum += num
        if prefix_sum - k in prefix_count:
            count += prefix_count[prefix_sum - k]
        prefix_count[prefix_sum] = prefix_count.get(prefix_sum, 0) + 1
    return count
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(subarray_sum(nums, k))
`,
    java: `import java.util.*;
public class Main {
    public static int subarraySum(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int prefixSum = 0;
        int count = 0;
        for (int num : nums) {
            prefixSum += num;
            if (map.containsKey(prefixSum - k)) {
                count += map.get(prefixSum - k);
            }
            map.put(prefixSum, map.getOrDefault(prefixSum, 0) + 1);
        }
        return count;
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
            System.out.println(subarraySum(nums, k));
        }
        sc.close();
    }
  }
`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;
#define SIZE 40009
Node* table[SIZE];
int hash(int key) {
    if (key < 0) key = -key;
    return key % SIZE;
}
int get(int key) {
    int index = hash(key);
    Node* curr = table[index];
    while (curr != NULL) {
        if (curr->key == key)
            return curr->value;
        curr = curr->next;
    }
    return 0;
}
void put(int key) {
    int index = hash(key);
    Node* curr = table[index];
    while (curr != NULL) {
        if (curr->key == key) {
            curr->value++;
            return;
        }
        curr = curr->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->value = 1;
    node->next = table[index];
    table[index] = node;
}
int subarraySum(int* nums, int numsSize, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i] = NULL;
    put(0);
    int prefixSum = 0;
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        prefixSum += nums[i];
        count += get(prefixSum - k);
        put(prefixSum);
    }
    return count;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\\n", subarraySum(nums, n, k));
    free(nums);
    return 0;
}`,

    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
int subarraySum(vector<int>& nums, int k) {
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;
    int prefixSum = 0;
    int count = 0;
    for (int num : nums) {
        prefixSum += num;
        if (prefixCount.find(prefixSum - k) != prefixCount.end()) {
            count += prefixCount[prefixSum - k];
        }
        prefixCount[prefixSum]++;
    }
    return count;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int k;
        cin >> k;
        cout << subarraySum(nums, k) << "\\n";
    }
    return 0;
}`
  },  'sak-e2': {
    python: `def zero_sum_subarrays(nums):
    prefix_sum = 0
    count = 0
    prefix_count = {0: 1}
    for num in nums:
        prefix_sum += num
        if prefix_sum in prefix_count:
            count += prefix_count[prefix_sum]
        prefix_count[prefix_sum] = prefix_count.get(prefix_sum, 0) + 1
    return count
n = int(input())
nums = list(map(int, input().split()))
print(zero_sum_subarrays(nums))
`,
    java: `import java.util.*;
public class Main {
    public static int zeroSumSubarrays(int[] nums) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int prefixSum = 0;
        int count = 0;
        for (int num : nums) {
            prefixSum += num;
            if (map.containsKey(prefixSum)) {
                count += map.get(prefixSum);
            }
            map.put(prefixSum, map.getOrDefault(prefixSum, 0) + 1);
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(zeroSumSubarrays(nums));
        }
        sc.close();
    }
  }      
`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;
#define SIZE 40009
Node* table[SIZE];
int hash(int key) {
    if (key < 0) key = -key;
    return key % SIZE;
}
int get(int key) {
    int index = hash(key);
    Node* curr = table[index];
    while (curr != NULL) {
        if (curr->key == key)
            return curr->value;
        curr = curr->next;
    }
    return 0;
}
void put(int key) {
    int index = hash(key);
    Node* curr = table[index];
    while (curr != NULL) {
        if (curr->key == key) {
            curr->value++;
            return;
        }
        curr = curr->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->value = 1;
    node->next = table[index];
    table[index] = node;
}
int zeroSumSubarrays(int* nums, int numsSize) {
    for (int i = 0; i < SIZE; i++)
        table[i] = NULL;
    put(0);
    int prefixSum = 0;
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        prefixSum += nums[i];
        count += get(prefixSum);
        put(prefixSum);
    }
    return count;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    printf("%d\\n", zeroSumSubarrays(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
int zeroSumSubarrays(vector<int>& nums) {
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;
    int prefixSum = 0;
    int count = 0;
    for (int num : nums) {
        prefixSum += num;
        if (prefixCount.find(prefixSum) != prefixCount.end()) {
            count += prefixCount[prefixSum];
        }
        prefixCount[prefixSum]++;
    }
    return count;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        cout << zeroSumSubarrays(nums) << "\\n";
    }
    return 0;
}`
  },  'sak-e3': {
    python: `def count_equal_k(nums, k):
    count = 0
    for num in nums:
        if num == k:
            count += 1
    return count
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(count_equal_k(nums, k))
`,
    java: `import java.util.*;
public class Main {
    public static int countEqualK(int[] nums, int k) {
        int count = 0;
        for (int num : nums) {
            if (num == k) {
                count++;
            }
        }
        return count;
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
            System.out.println(countEqualK(nums, k));
        }
        sc.close();
    }
  }


`,
    c: `#include <stdio.h>
#include <stdlib.h>
int countEqualK(int* nums, int numsSize, int k) {
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] == k) {
            count++;
        }
    }
    return count;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\\n", countEqualK(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int countEqualK(vector<int>& nums, int k) {
    int count = 0;
    for (int num : nums) {
        if (num == k) {
            count++;
        }
    }
    return count;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int k;
        cin >> k;
        cout << countEqualK(nums, k) << "\\n";
    }
    return 0;
}`
  },  'sak-e4': {
    python: `def longest_subarray(nums, k):
    prefix = 0
    first = {}
    ans = 0

    for i in range(len(nums)):
        prefix += nums[i]

        if prefix == k:
            ans = i + 1

        if prefix - k in first:
            ans = max(ans, i - first[prefix - k])

        if prefix not in first:
            first[prefix] = i

    return ans

n = int(input())
nums = list(map(int, input().split()))
k = int(input())

print(longest_subarray(nums, k))
`,
    java: `import java.util.*;

public class Main {

    public static int longestSubarray(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int prefixSum = 0;
        int maxLength = 0;

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];

            if (prefixSum == k)
                maxLength = i + 1;

            if (map.containsKey(prefixSum - k))
                maxLength = Math.max(maxLength, i - map.get(prefixSum - k));

            map.putIfAbsent(prefixSum, i);
        }

        return maxLength;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];

            for (int i = 0; i < n; i++)
                nums[i] = sc.nextInt();

            int k = sc.nextInt();

            System.out.println(longestSubarray(nums, k));
        }

        sc.close();
    }
}
`,
    c: `#include <stdio.h>
#include <stdlib.h>

#define SIZE 40009

typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;

Node* table[SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % SIZE;
}

Node* find(int key) {
    int idx = hash(key);
    Node* curr = table[idx];

    while (curr != NULL) {
        if (curr->key == key)
            return curr;
        curr = curr->next;
    }

    return NULL;
}

void putIfAbsent(int key, int value) {
    if (find(key) != NULL)
        return;

    int idx = hash(key);

    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->value = value;
    node->next = table[idx];
    table[idx] = node;
}

int longestSubarray(int* nums, int numsSize, int k) {

    for (int i = 0; i < SIZE; i++)
        table[i] = NULL;

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < numsSize; i++) {

        prefixSum += nums[i];

        if (prefixSum == k)
            maxLength = i + 1;

        Node* node = find(prefixSum - k);

        if (node != NULL) {
            if (i - node->value > maxLength)
                maxLength = i - node->value;
        }

        putIfAbsent(prefixSum, i);
    }

    return maxLength;
}

int main() {

    int n;

    if (scanf("%d", &n) != 1)
        return 0;

    int* nums = (int*)malloc(n * sizeof(int));

    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);

    int k;
    scanf("%d", &k);

    printf("%d\n", longestSubarray(nums, n, k));

    free(nums);

    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int longestSubarray(vector<int>& nums, int k) {

    unordered_map<int, int> firstOccurrence;

    int prefixSum = 0;
    int maxLength = 0;

    for (int i = 0; i < nums.size(); i++) {

        prefixSum += nums[i];

        if (prefixSum == k)
            maxLength = i + 1;

        if (firstOccurrence.count(prefixSum - k))
            maxLength = max(maxLength, i - firstOccurrence[prefixSum - k]);

        if (!firstOccurrence.count(prefixSum))
            firstOccurrence[prefixSum] = i;
    }

    return maxLength;
}

int main() {

    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n;

    if (cin >> n) {

        vector<int> nums(n);

        for (int i = 0; i < n; i++)
            cin >> nums[i];

        int k;
        cin >> k;

        cout << longestSubarray(nums, k) << "\n";
    }

    return 0;
}`
  },  'sak-e5': {
    python: `def subarrays_div_by_k(nums, k):
    prefix = 0
    count = 0
    remainder_count = {0: 1}
    for num in nums:
        prefix = (prefix + num) % k
        count += remainder_count.get(prefix, 0)
        remainder_count[prefix] = remainder_count.get(prefix, 0) + 1
    return count

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(subarrays_div_by_k(nums, k))
`,
    java: `import java.util.*;

public class Main {
    public static int subarraysDivByK(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int prefix = 0;
        int count = 0;
        for (int num : nums) {
            prefix = ((prefix + num) % k + k) % k;
            count += map.getOrDefault(prefix, 0);
            map.put(prefix, map.getOrDefault(prefix, 0) + 1);
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++)
                nums[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(subarraysDivByK(nums, k));
        }
        sc.close();
    }
}
`,
    c: `#include <stdio.h>
#include <stdlib.h>

#define SIZE 40009

typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;

Node* table[SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % SIZE;
}

int get(int key) {
    int idx = hash(key);
    Node* curr = table[idx];
    while (curr != NULL) {
        if (curr->key == key)
            return curr->value;
        curr = curr->next;
    }
    return 0;
}

void put(int key) {
    int idx = hash(key);
    Node* curr = table[idx];
    while (curr != NULL) {
        if (curr->key == key) {
            curr->value++;
            return;
        }
        curr = curr->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->value = 1;
    node->next = table[idx];
    table[idx] = node;
}

int subarraysDivByK(int* nums, int numsSize, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i] = NULL;
    put(0);
    int prefix = 0;
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        prefix = ((prefix + nums[i]) % k + k) % k;
        count += get(prefix);
        put(prefix);
    }
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", subarraysDivByK(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int subarraysDivByK(vector<int>& nums, int k) {
    unordered_map<int, int> remainderCount;
    remainderCount[0] = 1;
    int prefix = 0;
    int count = 0;
    for (int num : nums) {
        prefix = ((prefix + num) % k + k) % k;
        count += remainderCount[prefix];
        remainderCount[prefix]++;
    }
    return count;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int k;
        cin >> k;
        cout << subarraysDivByK(nums, k) << "\n";
    }
    return 0;
}`
  },   'sak-m1': {
    python: `def binary_subarrays_with_sum(nums, goal):
    prefix_sum = 0
    count = 0
    prefix_count = {0: 1}
    for num in nums:
        prefix_sum += num
        if prefix_sum - goal in prefix_count:
            count += prefix_count[prefix_sum - goal]
        prefix_count[prefix_sum] = prefix_count.get(prefix_sum, 0) + 1
    return count
n = int(input())
nums = list(map(int, input().split()))
goal = int(input())
print(binary_subarrays_with_sum(nums, goal))
`,
    java: `import java.util.*;
public class Main {
    public static int binarySubarraysWithSum(int[] nums, int goal) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int prefixSum = 0;
        int count = 0;
        for (int num : nums) {
            prefixSum += num;
            if (map.containsKey(prefixSum - goal)) {
                count += map.get(prefixSum - goal);
            }
            map.put(prefixSum, map.getOrDefault(prefixSum, 0) + 1);
        }
        return count;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            int goal = sc.nextInt();
            System.out.println(binarySubarraysWithSum(nums, goal));
        }
        sc.close();
    }
  }
`,
    c: `#include <stdio.h>
#include <stdlib.h>
typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;
#define SIZE 40009
Node* table[SIZE];
int hash(int key) {
    if (key < 0) key = -key;
    return key % SIZE;
}
int get(int key) {
    int index = hash(key);
    Node* curr = table[index];
    while (curr != NULL) {
        if (curr->key == key)
            return curr->value;
        curr = curr->next;
    }
    return 0;
}
void put(int key) {
    int index = hash(key);
    Node* curr = table[index];
    while (curr != NULL) {
        if (curr->key == key) {
            curr->value++;
            return;
        }
        curr = curr->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->value = 1;
    node->next = table[index];
    table[index] = node;
}
int binarySubarraysWithSum(int* nums, int numsSize, int goal) {
    for (int i = 0; i < SIZE; i++)
        table[i] = NULL;
    put(0);
    int prefixSum = 0;
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        prefixSum += nums[i];
        count += get(prefixSum - goal);
        put(prefixSum);
    }
    return count;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int goal;
    scanf("%d", &goal);
    printf("%d\\n", binarySubarraysWithSum(nums, n, goal));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
int binarySubarraysWithSum(vector<int>& nums, int goal) {
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;
    int prefixSum = 0;
    int count = 0;
    for (int num : nums) {
        prefixSum += num;
        if (prefixCount.find(prefixSum - goal) != prefixCount.end()) {
            count += prefixCount[prefixSum - goal];
        }
        prefixCount[prefixSum]++;
    }
    return count;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int goal;
        cin >> goal;
        cout << binarySubarraysWithSum(nums, goal) << "\\n";
    }
    return 0;
}`
  },  'sak-m2': {
    python: `def max_subarray_len(nums, k):
    prefix_sum = 0
    max_length = 0
    first_occurrence = {}
    for i in range(len(nums)):
        prefix_sum += nums[i]
        if prefix_sum == k:
            max_length = i + 1
        if prefix_sum - k in first_occurrence:
            max_length = max(max_length, i - first_occurrence[prefix_sum - k])
        if prefix_sum not in first_occurrence:
            first_occurrence[prefix_sum] = i
    return max_length

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(max_subarray_len(nums, k))
`,
    java: `import java.util.*;

public class Main {
    public static int maxSubarrayLen(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        int prefixSum = 0;
        int maxLength = 0;
        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];
            if (prefixSum == k)
                maxLength = i + 1;
            if (map.containsKey(prefixSum - k))
                maxLength = Math.max(maxLength, i - map.get(prefixSum - k));
            map.putIfAbsent(prefixSum, i);
        }
        return maxLength;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++)
                nums[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(maxSubarrayLen(nums, k));
        }
        sc.close();
    }
}
`,
    c: `#include <stdio.h>
#include <stdlib.h>

#define SIZE 40009

typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;

Node* table[SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % SIZE;
}

Node* find(int key) {
    int idx = hash(key);
    Node* curr = table[idx];
    while (curr != NULL) {
        if (curr->key == key)
            return curr;
        curr = curr->next;
    }
    return NULL;
}

void putIfAbsent(int key, int value) {
    if (find(key) != NULL)
        return;
    int idx = hash(key);
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->value = value;
    node->next = table[idx];
    table[idx] = node;
}

int maxSubarrayLen(int* nums, int numsSize, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i] = NULL;
    int prefixSum = 0;
    int maxLength = 0;
    for (int i = 0; i < numsSize; i++) {
        prefixSum += nums[i];
        if (prefixSum == k)
            maxLength = i + 1;
        Node* node = find(prefixSum - k);
        if (node != NULL && i - node->value > maxLength)
            maxLength = i - node->value;
        putIfAbsent(prefixSum, i);
    }
    return maxLength;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", maxSubarrayLen(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int maxSubarrayLen(vector<int>& nums, int k) {
    unordered_map<int, int> firstOccurrence;
    int prefixSum = 0;
    int maxLength = 0;
    for (int i = 0; i < nums.size(); i++) {
        prefixSum += nums[i];
        if (prefixSum == k)
            maxLength = i + 1;
        if (firstOccurrence.count(prefixSum - k))
            maxLength = max(maxLength, i - firstOccurrence[prefixSum - k]);
        if (!firstOccurrence.count(prefixSum))
            firstOccurrence[prefixSum] = i;
    }
    return maxLength;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int k;
        cin >> k;
        cout << maxSubarrayLen(nums, k) << "\n";
    }
    return 0;
}`
  },  'sak-m3': {
    python: `def number_of_subarrays(nums, k):
    prefix_odd = 0
    count = 0
    prefix_count = {0: 1}
    for num in nums:
        if num % 2 != 0:
            prefix_odd += 1
        count += prefix_count.get(prefix_odd - k, 0)
        prefix_count[prefix_odd] = prefix_count.get(prefix_odd, 0) + 1
    return count

n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(number_of_subarrays(nums, k))
`,
    java: `import java.util.*;

public class Main {
    public static int numberOfSubarrays(int[] nums, int k) {
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, 1);
        int prefixOdd = 0;
        int count = 0;
        for (int num : nums) {
            if (num % 2 != 0)
                prefixOdd++;
            count += map.getOrDefault(prefixOdd - k, 0);
            map.put(prefixOdd, map.getOrDefault(prefixOdd, 0) + 1);
        }
        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++)
                nums[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(numberOfSubarrays(nums, k));
        }
        sc.close();
    }
}
`,
    c: `#include <stdio.h>
#include <stdlib.h>

#define SIZE 40009

typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;

Node* table[SIZE];

int hash(int key) {
    if (key < 0)
        key = -key;
    return key % SIZE;
}

int get(int key) {
    int idx = hash(key);
    Node* curr = table[idx];
    while (curr != NULL) {
        if (curr->key == key)
            return curr->value;
        curr = curr->next;
    }
    return 0;
}

void put(int key) {
    int idx = hash(key);
    Node* curr = table[idx];
    while (curr != NULL) {
        if (curr->key == key) {
            curr->value++;
            return;
        }
        curr = curr->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->value = 1;
    node->next = table[idx];
    table[idx] = node;
}

int numberOfSubarrays(int* nums, int numsSize, int k) {
    for (int i = 0; i < SIZE; i++)
        table[i] = NULL;
    put(0);
    int prefixOdd = 0;
    int count = 0;
    for (int i = 0; i < numsSize; i++) {
        if (nums[i] % 2 != 0)
            prefixOdd++;
        count += get(prefixOdd - k);
        put(prefixOdd);
    }
    return count;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\n", numberOfSubarrays(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>

using namespace std;

int numberOfSubarrays(vector<int>& nums, int k) {
    unordered_map<int, int> prefixCount;
    prefixCount[0] = 1;
    int prefixOdd = 0;
    int count = 0;
    for (int num : nums) {
        if (num % 2 != 0)
            prefixOdd++;
        count += prefixCount[prefixOdd - k];
        prefixCount[prefixOdd]++;
    }
    return count;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int k;
        cin >> k;
        cout << numberOfSubarrays(nums, k) << "\n";
    }
    return 0;
}`
  },  'sak-m4': {
    python: `def min_subarray_len(target, nums):
    left = 0
    current_sum = 0
    min_length = float('inf')
    for right in range(len(nums)):
        current_sum += nums[right]
        while current_sum >= target:
            min_length = min(min_length, right - left + 1)
            current_sum -= nums[left]
            left += 1
    return 0 if min_length == float('inf') else min_length
n = int(input())
nums = list(map(int, input().split()))
target = int(input())
print(min_subarray_len(target, nums))
`,
    java: `import java.util.*;
public class Main {
    public static int minSubarrayLen(int target, int[] nums) {
        int left = 0;
        int currentSum = 0;
        int minLength = Integer.MAX_VALUE;
        for (int right = 0; right < nums.length; right++) {
            currentSum += nums[right];
            while (currentSum >= target) {
                minLength = Math.min(minLength, right - left + 1);
                currentSum -= nums[left];
                left++;
            }
        }
        return minLength == Integer.MAX_VALUE ? 0 : minLength;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++)
                nums[i] = sc.nextInt();
            int target = sc.nextInt();
            System.out.println(minSubarrayLen(target, nums));
        }
        sc.close();
    }
  }
`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>
int minSubarrayLen(int target, int* nums, int numsSize) {
    int left = 0;
    int currentSum = 0;
    int minLength = INT_MAX;
    for (int right = 0; right < numsSize; right++) {
        currentSum += nums[right];
        while (currentSum >= target) {
            if (right - left + 1 < minLength)
                minLength = right - left + 1;
            currentSum -= nums[left];
            left++;
        }
    }
    return (minLength == INT_MAX) ? 0 : minLength;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int target;
    scanf("%d", &target);
    printf("%d\\n", minSubarrayLen(target, nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <climits>
using namespace std;
int minSubarrayLen(int target, vector<int>& nums) {
    int left = 0;
    int currentSum = 0;
    int minLength = INT_MAX;
    for (int right = 0; right < nums.size(); right++) {
        currentSum += nums[right];
        while (currentSum >= target) {
            minLength = min(minLength, right - left + 1);
            currentSum -= nums[left];
            left++;
        }
    }
    return (minLength == INT_MAX) ? 0 : minLength;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int target;
        cin >> target;
        cout << minSubarrayLen(target, nums) << "\\n";
    }
    return 0;
}`
  },  'sak-m5': {
    python: `def min_subarray(nums, p):
    total = sum(nums)
    remainder = total % p
    if remainder == 0:
        return 0
    prefix = 0
    answer = len(nums)
    prefix_map = {0: -1}
    for i in range(len(nums)):
        prefix = (prefix + nums[i]) % p
        target = (prefix - remainder + p) % p
        if target in prefix_map:
            answer = min(answer, i - prefix_map[target])
        prefix_map[prefix] = i
    return -1 if answer == len(nums) else answer
n = int(input())
nums = list(map(int, input().split()))
p = int(input())
print(min_subarray(nums, p))
`,
    java: `import java.util.*;
public class Main {
    public static int minSubarray(int[] nums, int p) {
        long total = 0;
        for (int num : nums)
            total += num;
        int remainder = (int)(total % p);
        if (remainder == 0)
            return 0;
        HashMap<Integer, Integer> map = new HashMap<>();
        map.put(0, -1);
        int prefix = 0;
        int answer = nums.length;
        for (int i = 0; i < nums.length; i++) {
            prefix = (prefix + nums[i]) % p;
            int target = (prefix - remainder + p) % p;
            if (map.containsKey(target))
                answer = Math.min(answer, i - map.get(target));
            map.put(prefix, i);
        }
        return answer == nums.length ? -1 : answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++)
                nums[i] = sc.nextInt();
            int p = sc.nextInt();
            System.out.println(minSubarray(nums, p));
        }
        sc.close();
    }
  }
`,
    c: `#include <stdio.h>
#include <stdlib.h>
#define SIZE 40009
typedef struct Node {
    int key;
    int value;
    struct Node* next;
} Node;
Node* table[SIZE];
int hash(int key) {
    if (key < 0) key = -key;
    return key % SIZE;
}
Node* find(int key) {
    int index = hash(key);
    Node* curr = table[index];
    while (curr != NULL) {
        if (curr->key == key)
            return curr;
        curr = curr->next;
    }
    return NULL;
}
void put(int key, int value) {
    int index = hash(key);
    Node* curr = table[index];
    while (curr != NULL) {
        if (curr->key == key) {
            curr->value = value;
            return;
        }
        curr = curr->next;
    }
    Node* node = (Node*)malloc(sizeof(Node));
    node->key = key;
    node->value = value;
    node->next = table[index];
    table[index] = node;
}
int minSubarray(int* nums, int numsSize, int p) {
    long long total = 0;
    for (int i = 0; i < numsSize; i++)
        total += nums[i];
    int remainder = total % p;
    if (remainder == 0)
        return 0;
    for (int i = 0; i < SIZE; i++)
        table[i] = NULL;
    put(0, -1);
    int prefix = 0;
    int answer = numsSize;
    for (int i = 0; i < numsSize; i++) {
        prefix = (prefix + nums[i]) % p;
        int target = (prefix - remainder + p) % p;
        Node* node = find(target);
        if (node != NULL && i - node->value < answer)
            answer = i - node->value;
        put(prefix, i);
    }
    return answer == numsSize ? -1 : answer;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int p;
    scanf("%d", &p);
    printf("%d\n", minSubarray(nums, n, p));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;
int minSubarray(vector<int>& nums, int p) {
    long long total = 0;
    for (int num : nums)
        total += num;
    int remainder = total % p;
    if (remainder == 0)
        return 0;
    unordered_map<int, int> prefixMap;
    prefixMap[0] = -1;
    int prefix = 0;
    int answer = nums.size();
    for (int i = 0; i < nums.size(); i++) {
        prefix = (prefix + nums[i]) % p;
        int target = (prefix - remainder + p) % p;
        if (prefixMap.count(target))
            answer = min(answer, i - prefixMap[target]);
        prefixMap[prefix] = i;
    }
    return answer == nums.size() ? -1 : answer;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int p;
        cin >> p;
        cout << minSubarray(nums, p) << "\\n";
    }
    return 0;
}`
  },
  'sak-h1': {
    python: `def merge_sort(sums, lower, upper):
    if len(sums) <= 1:
        return 0, sums
    mid = len(sums) // 2
    count_left, left = merge_sort(sums[:mid], lower, upper)
    count_right, right = merge_sort(sums[mid:], lower, upper)
    count = count_left + count_right
    j = k = 0
    for left_sum in left:
        while k < len(right) and right[k] - left_sum < lower:
            k += 1
        while j < len(right) and right[j] - left_sum <= upper:
            j += 1
        count += j - k
    merged = []
    i = l = 0
    while i < len(left) and l < len(right):
        if left[i] <= right[l]:
            merged.append(left[i])
            i += 1
        else:
            merged.append(right[l])
            l += 1
    merged.extend(left[i:])
    merged.extend(right[l:])
    return count, merged
def count_range_sum(nums, lower, upper):
    prefix = [0]
    for num in nums:
        prefix.append(prefix[-1] + num)
    count, _ = merge_sort(prefix, lower, upper)
    return count
n = int(input())
nums = list(map(int, input().split()))
lower, upper = map(int, input().split())
print(count_range_sum(nums, lower, upper))
`,
    java: `import java.util.*;
public class Main {
    private static long mergeSort(long[] prefix, int left, int right, int lower, int upper) {
        if (right - left <= 1)
            return 0;
        int mid = (left + right) / 2;
        long count = mergeSort(prefix, left, mid, lower, upper)
                   + mergeSort(prefix, mid, right, lower, upper);
        int j = mid;
        int k = mid;
        int t = mid;
        long[] cache = new long[right - left];
        int r = 0;
        for (int i = left, c = 0; i < mid; i++, c++) {
            while (k < right && prefix[k] - prefix[i] < lower)
                k++;
            while (j < right && prefix[j] - prefix[i] <= upper)
                j++;
            while (t < right && prefix[t] < prefix[i])
                cache[r++] = prefix[t++];
            cache[r++] = prefix[i];
            count += j - k;
        }
        while (t < right)
            cache[r++] = prefix[t++];
        System.arraycopy(cache, 0, prefix, left, r);
        return count;
    }
    public static int countRangeSum(int[] nums, int lower, int upper) {
        long[] prefix = new long[nums.length + 1];
        for (int i = 0; i < nums.length; i++)
            prefix[i + 1] = prefix[i] + nums[i];
        return (int)mergeSort(prefix, 0, prefix.length, lower, upper);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++)
                nums[i] = sc.nextInt();
            int lower = sc.nextInt();
            int upper = sc.nextInt();
            System.out.println(countRangeSum(nums, lower, upper));
        }
        sc.close();
    }
  }
`,
    c: `#include <stdio.h>
#include <stdlib.h>
long long merge(long long* sums, long long* temp, int left, int mid, int right, int lower, int upper) {
    int j = mid;
    int k = mid;
    int t = mid;
    int r = left;
    long long count = 0;
    for (int i = left; i < mid; i++) {
        while (k < right && sums[k] - sums[i] < lower)
            k++;
        while (j < right && sums[j] - sums[i] <= upper)
            j++;
        while (t < right && sums[t] < sums[i])
            temp[r++] = sums[t++];
        temp[r++] = sums[i];
        count += (j - k);
    }
    while (t < right)
        temp[r++] = sums[t++];
    for (int i = left; i < r; i++)
        sums[i] = temp[i];
    return count;
}
long long mergeSort(long long* sums, long long* temp, int left, int right, int lower, int upper) {
    if (right - left <= 1)
        return 0;
    int mid = (left + right) / 2;
    long long count = 0;
    count += mergeSort(sums, temp, left, mid, lower, upper);
    count += mergeSort(sums, temp, mid, right, lower, upper);
    count += merge(sums, temp, left, mid, right, lower, upper);
    return count;
}
int countRangeSum(int* nums, int numsSize, int lower, int upper) {
    long long* prefix = (long long*)malloc(sizeof(long long) * (numsSize + 1));
    long long* temp = (long long*)malloc(sizeof(long long) * (numsSize + 1));
    prefix[0] = 0;
    for (int i = 0; i < numsSize; i++)
        prefix[i + 1] = prefix[i] + nums[i];
    long long ans = mergeSort(prefix, temp, 0, numsSize + 1, lower, upper);
    free(prefix);
    free(temp);
    return (int)ans;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int lower, upper;
    scanf("%d %d", &lower, &upper);
    printf("%d\\n", countRangeSum(nums, n, lower, upper));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
class Solution {
public:
    long long merge(vector<long long>& sums, vector<long long>& temp,
                    int left, int mid, int right, int lower, int upper) {
        int j = mid;
        int k = mid;
        int t = mid;
        int r = left;
        long long count = 0;
        for (int i = left; i < mid; i++) {
            while (k < right && sums[k] - sums[i] < lower)
                k++;
            while (j < right && sums[j] - sums[i] <= upper)
                j++;
            while (t < right && sums[t] < sums[i])
                temp[r++] = sums[t++];
            temp[r++] = sums[i];
            count += j - k;
        }
        while (t < right)
            temp[r++] = sums[t++];
        for (int i = left; i < r; i++)
            sums[i] = temp[i];
        return count;
    }
    long long mergeSort(vector<long long>& sums, vector<long long>& temp,
                        int left, int right, int lower, int upper) {
        if (right - left <= 1)
            return 0;
        int mid = (left + right) / 2;
        long long count = 0;
        count += mergeSort(sums, temp, left, mid, lower, upper);
        count += mergeSort(sums, temp, mid, right, lower, upper);
        count += merge(sums, temp, left, mid, right, lower, upper);
        return count;
    }
    int countRangeSum(vector<int>& nums, int lower, int upper) {
        vector<long long> prefix(nums.size() + 1, 0);
        for (int i = 0; i < nums.size(); i++)
            prefix[i + 1] = prefix[i] + nums[i];
        vector<long long> temp(prefix.size());
        return (int)mergeSort(prefix, temp, 0, prefix.size(), lower, upper);
    }
};
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int lower, upper;
        cin >> lower >> upper;
        Solution obj;
        cout << obj.countRangeSum(nums, lower, upper) << "\\n";
    }
    return 0;
}`
  },  'sak-h2': {
    python: `from collections import deque
def shortest_subarray(nums, k):
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] + nums[i]
    dq = deque()
    answer = n + 1
    for i in range(n + 1):
        while dq and prefix[i] - prefix[dq[0]] >= k:
            answer = min(answer, i - dq.popleft())
        while dq and prefix[i] <= prefix[dq[-1]]:
            dq.pop()
        dq.append(i)
    return -1 if answer == n + 1 else answer
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(shortest_subarray(nums, k))
`,
    java: `import java.util.*;
public class Main {
    public static int shortestSubarray(int[] nums, int k) {
        int n = nums.length;
        long[] prefix = new long[n + 1];
        for (int i = 0; i < n; i++)
            prefix[i + 1] = prefix[i] + nums[i];
        Deque<Integer> deque = new ArrayDeque<>();
        int answer = n + 1;
        for (int i = 0; i <= n; i++) {
            while (!deque.isEmpty() &&
                    prefix[i] - prefix[deque.peekFirst()] >= k) {
                answer = Math.min(answer,
                        i - deque.pollFirst());
            }
            while (!deque.isEmpty() &&
                    prefix[i] <= prefix[deque.peekLast()]) {
                deque.pollLast();
            }
            deque.offerLast(i);
        }
        return answer == n + 1 ? -1 : answer;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++)
                nums[i] = sc.nextInt();
            int k = sc.nextInt();
            System.out.println(shortestSubarray(nums, k));
        }
        sc.close();
    }
  }
`,
    c: `#include <stdio.h>
#include <stdlib.h>
int shortestSubarray(int* nums, int numsSize, int k) {
    long long* prefix = (long long*)malloc(sizeof(long long) * (numsSize + 1));
    prefix[0] = 0;
    for (int i = 0; i < numsSize; i++)
        prefix[i + 1] = prefix[i] + nums[i];
    int* deque = (int*)malloc(sizeof(int) * (numsSize + 1));
    int front = 0;
    int back = 0;
    int answer = numsSize + 1;
    for (int i = 0; i <= numsSize; i++) {
        while (front < back &&
               prefix[i] - prefix[deque[front]] >= k) {
            if (i - deque[front] < answer)
                answer = i - deque[front];
            front++;
        }
        while (front < back &&
               prefix[i] <= prefix[deque[back - 1]]) {
            back--;
        }
        deque[back++] = i;
    }
    free(prefix);
    free(deque);
    return answer == numsSize + 1 ? -1 : answer;
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    printf("%d\\n", shortestSubarray(nums, n, k));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <deque>
using namespace std;
int shortestSubarray(vector<int>& nums, int k) {
    int n = nums.size();
    vector<long long> prefix(n + 1, 0);
    for (int i = 0; i < n; i++)
        prefix[i + 1] = prefix[i] + nums[i];
    deque<int> dq;
    int answer = n + 1;
    for (int i = 0; i <= n; i++) {
        while (!dq.empty() &&
               prefix[i] - prefix[dq.front()] >= k) {
            answer = min(answer, i - dq.front());
            dq.pop_front();
        }
        while (!dq.empty() &&
               prefix[i] <= prefix[dq.back()]) {
            dq.pop_back();
        }
        dq.push_back(i);
    }
    return answer == n + 1 ? -1 : answer;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int k;
        cin >> k;
        cout << shortestSubarray(nums, k) << "\\n";
    }
    return 0;
}`
  },  'sak-h3': {
    python: `def max_sum_three_subarrays(nums, k):
    n = len(nums)
    prefix = [0] * (n + 1)
    for i in range(n):
        prefix[i + 1] = prefix[i] + nums[i]
    window = [0] * (n - k + 1)
    for i in range(len(window)):
        window[i] = prefix[i + k] - prefix[i]
    left = [0] * len(window)
    best = 0
    for i in range(len(window)):
        if window[i] > window[best]:
            best = i
        left[i] = best
    right = [0] * len(window)
    best = len(window) - 1
    for i in range(len(window) - 1, -1, -1):
        if window[i] >= window[best]:
            best = i
        right[i] = best
    answer = [-1, -1, -1]
    max_sum = -1
    for mid in range(k, len(window) - k):
        l = left[mid - k]
        r = right[mid + k]
        total = window[l] + window[mid] + window[r]
        if total > max_sum:
            max_sum = total
            answer = [l, mid, r]
    return answer
n = int(input())
nums = list(map(int, input().split()))
k = int(input())
print(*max_sum_three_subarrays(nums, k))
`,
    java: `import java.util.*;
public class Main {
    public static int[] maxSumOfThreeSubarrays(int[] nums, int k) {
        int n = nums.length;
        int[] prefix = new int[n + 1];
        for (int i = 0; i < n; i++)
            prefix[i + 1] = prefix[i] + nums[i];
        int[] window = new int[n - k + 1];
        for (int i = 0; i < window.length; i++)
            window[i] = prefix[i + k] - prefix[i];
        int[] left = new int[window.length];
        int best = 0;
        for (int i = 0; i < window.length; i++) {
            if (window[i] > window[best])
                best = i;
            left[i] = best;
        }
        int[] right = new int[window.length];
        best = window.length - 1;
        for (int i = window.length - 1; i >= 0; i--) {
            if (window[i] >= window[best])
                best = i;
            right[i] = best;
        }
        int[] ans = new int[3];
        int maxSum = -1;
        for (int mid = k; mid < window.length - k; mid++) {
            int l = left[mid - k];
            int r = right[mid + k];
            int total = window[l] + window[mid] + window[r];
            if (total > maxSum) {
                maxSum = total;
                ans[0] = l;
                ans[1] = mid;
                ans[2] = r;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++)
                nums[i] = sc.nextInt();
            int k = sc.nextInt();
            int[] ans = maxSumOfThreeSubarrays(nums, k);
            System.out.println(ans[0] + " " + ans[1] + " " + ans[2]);
        }
        sc.close();
    }
  }
`,
    c: `#include <stdio.h>
#include <stdlib.h>
void maxSumOfThreeSubarrays(int* nums, int numsSize, int k, int* ans) {
    int* prefix = (int*)calloc(numsSize + 1, sizeof(int));
    for (int i = 0; i < numsSize; i++)
        prefix[i + 1] = prefix[i] + nums[i];
    int size = numsSize - k + 1;
    int* window = (int*)malloc(sizeof(int) * size);
    for (int i = 0; i < size; i++)
        window[i] = prefix[i + k] - prefix[i];
    int* left = (int*)malloc(sizeof(int) * size);
    int* right = (int*)malloc(sizeof(int) * size);
    int best = 0;
    for (int i = 0; i < size; i++) {
        if (window[i] > window[best])
            best = i;
        left[i] = best;
    }
    best = size - 1;
    for (int i = size - 1; i >= 0; i--) {
        if (window[i] >= window[best])
            best = i;
        right[i] = best;
    }
    int maxSum = -1;
    for (int mid = k; mid < size - k; mid++) {
        int l = left[mid - k];
        int r = right[mid + k];
        int total = window[l] + window[mid] + window[r];
        if (total > maxSum) {
            maxSum = total;
            ans[0] = l;
            ans[1] = mid;
            ans[2] = r;
        }
    }
    free(prefix);
    free(window);
    free(left);
    free(right);
}
int main() {
    int n;
    if (scanf("%d", &n) != 1)
        return 0;
    int* nums = (int*)malloc(sizeof(int) * n);
    for (int i = 0; i < n; i++)
        scanf("%d", &nums[i]);
    int k;
    scanf("%d", &k);
    int ans[3];
    maxSumOfThreeSubarrays(nums, n, k, ans);
    printf("%d %d %d\\n", ans[0], ans[1], ans[2]);
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
vector<int> maxSumOfThreeSubarrays(vector<int>& nums, int k) {
    int n = nums.size();
    vector<int> prefix(n + 1, 0);
    for (int i = 0; i < n; i++)
        prefix[i + 1] = prefix[i] + nums[i];
    vector<int> window(n - k + 1);
    for (int i = 0; i < window.size(); i++)
        window[i] = prefix[i + k] - prefix[i];
    vector<int> left(window.size()), right(window.size());
    int best = 0;
    for (int i = 0; i < window.size(); i++) {
        if (window[i] > window[best])
            best = i;
        left[i] = best;
    }
    best = window.size() - 1;
    for (int i = window.size() - 1; i >= 0; i--) {
        if (window[i] >= window[best])
            best = i;
        right[i] = best;
    }
    vector<int> ans(3);
    int maxSum = -1;
    for (int mid = k; mid < window.size() - k; mid++) {
        int l = left[mid - k];
        int r = right[mid + k];
        int total = window[l] + window[mid] + window[r];
        if (total > maxSum) {
            maxSum = total;
            ans = {l, mid, r};
        }
    }
    return ans;
}
int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);
    int n;
    if (cin >> n) {
        vector<int> nums(n);
        for (int i = 0; i < n; i++)
            cin >> nums[i];
        int k;
        cin >> k;
        vector<int> ans = maxSumOfThreeSubarrays(nums, k);
        cout << ans[0] << " " << ans[1] << " " << ans[2] << "\\n";
    }
    return 0;
}`
  }
};
