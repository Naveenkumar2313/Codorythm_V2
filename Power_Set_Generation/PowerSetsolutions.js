export const powerSetSolutions = {
  'psg-e1': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def list_all_subsets(nums):
    total = 1 << len(nums)
    lines = []
    for mask in range(total):
        lines.append(subset_to_string(nums, mask))
    sys.stdout.write("\n".join(lines))

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    list_all_subsets(nums)`,
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

    public static void listAllSubsets(int[] nums) {
        int total = 1 << nums.length;
        for (int mask = 0; mask < total; mask++) {
            System.out.println(subsetToString(nums, mask));
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
            listAllSubsets(nums);
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
    printf("]\n");
}

void listAllSubsets(int* nums, int n) {
    int total = 1 << n;
    for (int mask = 0; mask < total; mask++) {
        printSubset(nums, n, mask);
    }
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
    cpp: `#include <bits/stdc++.h>
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

void listAllSubsets(vector<int>& nums) {
    int total = 1 << nums.size();
    for (int mask = 0; mask < total; mask++) {
        cout << subsetToString(nums, mask) << "\n";
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
        listAllSubsets(nums);
    }

    return 0;
}`,
  },
  'psg-e2': {
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
    printf("%lld\n", countTargetSumSubsets(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <bits/stdc++.h>
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
        cout << countTargetSumSubsets(nums, target) << "\n";
    }

    return 0;
}`,
  },
  'psg-e3': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_first_target_subset(nums, target):
    total = 1 << len(nums)
    for mask in range(1, total):
        current = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
        if current == target:
            print(subset_to_string(nums, mask))
            return
    print("None")

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_first_target_subset(nums, target)`,
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

    public static void printFirstTargetSubset(int[] nums, int target) {
        int total = 1 << nums.length;
        for (int mask = 1; mask < total; mask++) {
            int current = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                }
            }
            if (current == target) {
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
            int target = sc.nextInt();
            printFirstTargetSubset(nums, target);
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
    printf("]");
}

void printFirstTargetSubset(int* nums, int n, int target) {
    int total = 1 << n;
    for (int mask = 1; mask < total; mask++) {
        int current = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (current == target) {
            printSubset(nums, n, mask);
            printf("\n");
            return;
        }
    }
    printf("None\n");
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
    cpp: `#include <bits/stdc++.h>
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

void printFirstTargetSubset(vector<int>& nums, int target) {
    int total = 1 << nums.size();
    for (int mask = 1; mask < total; mask++) {
        int current = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (current == target) {
            cout << subsetToString(nums, mask) << "\n";
            return;
        }
    }
    cout << "None\n";
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
  'psg-e4': {
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

def count_prime_sum_subsets(nums):
    total = 0
    subset_total = 1 << len(nums)
    for mask in range(subset_total):
        current = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
        if is_prime(current):
            total += 1
    return total

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print(count_prime_sum_subsets(nums))`,
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

    public static long countPrimeSumSubsets(int[] nums) {
        long total = 0;
        int subsetTotal = 1 << nums.length;
        for (int mask = 0; mask < subsetTotal; mask++) {
            int current = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                }
            }
            if (isPrime(current)) {
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
            System.out.println(countPrimeSumSubsets(nums));
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

long long countPrimeSumSubsets(int* nums, int n) {
    long long total = 0;
    int subsetTotal = 1 << n;
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (isPrime(current)) {
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
    printf("%lld\n", countPrimeSumSubsets(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <bits/stdc++.h>
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

long long countPrimeSumSubsets(vector<int>& nums) {
    long long total = 0;
    int subsetTotal = 1 << nums.size();
    for (int mask = 0; mask < subsetTotal; mask++) {
        int current = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (isPrime(current)) {
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
        cout << countPrimeSumSubsets(nums) << "\n";
    }

    return 0;
}`,
  },
  'psg-e5': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_k_element_subsets(nums, k):
    total = 1 << len(nums)
    found = False
    for mask in range(total):
        size = 0
        for index in range(len(nums)):
            if mask & (1 << index):
                size += 1
        if size == k:
            print(subset_to_string(nums, mask))
            found = True
    if not found:
        print("None")

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    k = data[1 + n]
    print_k_element_subsets(nums, k)`,
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

    public static void printKElementSubsets(int[] nums, int k) {
        int total = 1 << nums.length;
        boolean found = false;
        for (int mask = 0; mask < total; mask++) {
            int size = Integer.bitCount(mask);
            if (size == k) {
                System.out.println(subsetToString(nums, mask));
                found = true;
            }
        }
        if (!found) {
            System.out.println("None");
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
            int k = sc.nextInt();
            printKElementSubsets(nums, k);
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
    printf("]");
}

void printKElementSubsets(int* nums, int n, int k) {
    int total = 1 << n;
    int found = 0;
    for (int mask = 0; mask < total; mask++) {
        int size = __builtin_popcount((unsigned int)mask);
        if (size == k) {
            printSubset(nums, n, mask);
            printf("\n");
            found = 1;
        }
    }
    if (!found) {
        printf("None\n");
    }
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
    cpp: `#include <bits/stdc++.h>
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

void printKElementSubsets(vector<int>& nums, int k) {
    int total = 1 << nums.size();
    bool found = false;
    for (int mask = 0; mask < total; mask++) {
        if (__builtin_popcount((unsigned int)mask) == k) {
            cout << subsetToString(nums, mask) << "\n";
            found = true;
        }
    }
    if (!found) {
        cout << "None\n";
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
        int k;
        cin >> k;
        printKElementSubsets(nums, k);
    }

    return 0;
}`,
  },
  'psg-m1': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_modulo_subsets(nums, mod_value, remainder):
    normalized = remainder % mod_value
    total = 1 << len(nums)
    found = False
    for mask in range(total):
        current = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
        if current % mod_value == normalized:
            print(subset_to_string(nums, mask))
            found = True
    if not found:
        print("None")

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    mod_value = data[1 + n]
    remainder = data[2 + n]
    print_modulo_subsets(nums, mod_value, remainder)`,
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

    public static void printModuloSubsets(int[] nums, int modValue, int remainder) {
        int normalized = ((remainder % modValue) + modValue) % modValue;
        int total = 1 << nums.length;
        boolean found = false;
        for (int mask = 0; mask < total; mask++) {
            int current = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                }
            }
            if (((current % modValue) + modValue) % modValue == normalized) {
                System.out.println(subsetToString(nums, mask));
                found = true;
            }
        }
        if (!found) {
            System.out.println("None");
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
            int modValue = sc.nextInt();
            int remainder = sc.nextInt();
            printModuloSubsets(nums, modValue, remainder);
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
    printf("]");
}

void printModuloSubsets(int* nums, int n, int modValue, int remainder) {
    int normalized = ((remainder % modValue) + modValue) % modValue;
    int total = 1 << n;
    int found = 0;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (((current % modValue) + modValue) % modValue == normalized) {
            printSubset(nums, n, mask);
            printf("\n");
            found = 1;
        }
    }
    if (!found) {
        printf("None\n");
    }
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
    cpp: `#include <bits/stdc++.h>
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

void printModuloSubsets(vector<int>& nums, int modValue, int remainder) {
    int normalized = ((remainder % modValue) + modValue) % modValue;
    int total = 1 << nums.size();
    bool found = false;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (((current % modValue) + modValue) % modValue == normalized) {
            cout << subsetToString(nums, mask) << "\n";
            found = true;
        }
    }
    if (!found) {
        cout << "None\n";
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
        int modValue;
        int remainder;
        cin >> modValue >> remainder;
        printModuloSubsets(nums, modValue, remainder);
    }

    return 0;
}`,
  },
  'psg-m2': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_xor_target_subsets(nums, target):
    total = 1 << len(nums)
    found = False
    for mask in range(total):
        current = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current ^= value
        if current == target:
            print(subset_to_string(nums, mask))
            found = True
    if not found:
        print("None")

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_xor_target_subsets(nums, target)`,
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

    public static void printXorTargetSubsets(int[] nums, int target) {
        int total = 1 << nums.length;
        boolean found = false;
        for (int mask = 0; mask < total; mask++) {
            int current = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current ^= nums[index];
                }
            }
            if (current == target) {
                System.out.println(subsetToString(nums, mask));
                found = true;
            }
        }
        if (!found) {
            System.out.println("None");
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
            printXorTargetSubsets(nums, target);
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
    printf("]");
}

void printXorTargetSubsets(int* nums, int n, int target) {
    int total = 1 << n;
    int found = 0;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current ^= nums[index];
            }
        }
        if (current == target) {
            printSubset(nums, n, mask);
            printf("\n");
            found = 1;
        }
    }
    if (!found) {
        printf("None\n");
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
    printXorTargetSubsets(nums, n, target);
    free(nums);
    return 0;
}`,
    cpp: `#include <bits/stdc++.h>
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

void printXorTargetSubsets(vector<int>& nums, int target) {
    int total = 1 << nums.size();
    bool found = false;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current ^= nums[index];
            }
        }
        if (current == target) {
            cout << subsetToString(nums, mask) << "\n";
            found = true;
        }
    }
    if (!found) {
        cout << "None\n";
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
        printXorTargetSubsets(nums, target);
    }

    return 0;
}`,
  },
  'psg-m3': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_bounded_sum_subsets(nums, low, high):
    total = 1 << len(nums)
    found = False
    for mask in range(total):
        current = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
        if low <= current <= high:
            print(subset_to_string(nums, mask))
            found = True
    if not found:
        print("None")

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    low = data[1 + n]
    high = data[2 + n]
    print_bounded_sum_subsets(nums, low, high)`,
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

    public static void printBoundedSumSubsets(int[] nums, int low, int high) {
        int total = 1 << nums.length;
        boolean found = false;
        for (int mask = 0; mask < total; mask++) {
            int current = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                }
            }
            if (low <= current && current <= high) {
                System.out.println(subsetToString(nums, mask));
                found = true;
            }
        }
        if (!found) {
            System.out.println("None");
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
            int low = sc.nextInt();
            int high = sc.nextInt();
            printBoundedSumSubsets(nums, low, high);
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
    printf("]");
}

void printBoundedSumSubsets(int* nums, int n, int low, int high) {
    int total = 1 << n;
    int found = 0;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (low <= current && current <= high) {
            printSubset(nums, n, mask);
            printf("\n");
            found = 1;
        }
    }
    if (!found) {
        printf("None\n");
    }
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
    cpp: `#include <bits/stdc++.h>
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

void printBoundedSumSubsets(vector<int>& nums, int low, int high) {
    int total = 1 << nums.size();
    bool found = false;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (low <= current && current <= high) {
            cout << subsetToString(nums, mask) << "\n";
            found = true;
        }
    }
    if (!found) {
        cout << "None\n";
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
        int low;
        int high;
        cin >> low >> high;
        printBoundedSumSubsets(nums, low, high);
    }

    return 0;
}`,
  },
  'psg-m4': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_best_subset_under_limit(nums, limit):
    total = 1 << len(nums)
    best_mask = -1
    best_sum = None
    best_size = None
    for mask in range(total):
        current = 0
        size = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
                size += 1
        if current <= limit:
            if best_mask == -1 or current > best_sum or (current == best_sum and size < best_size) or (current == best_sum and size == best_size and mask < best_mask):
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
        int total = 1 << nums.length;
        int bestMask = -1;
        int bestSum = 0;
        int bestSize = 0;
        for (int mask = 0; mask < total; mask++) {
            int current = 0;
            int size = Integer.bitCount(mask);
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
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
    printf("]");
}

void printBestSubsetUnderLimit(int* nums, int n, int limit) {
    int total = 1 << n;
    int bestMask = -1;
    int bestSum = 0;
    int bestSize = 0;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        int size = __builtin_popcount((unsigned int)mask);
        for (int index = 0; index < n; index++) {
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
        printf("None\n");
    } else {
        printSubset(nums, n, bestMask);
        printf("\n");
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
    cpp: `#include <bits/stdc++.h>
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
    int total = 1 << nums.size();
    int bestMask = -1;
    int bestSum = 0;
    int bestSize = 0;
    for (int mask = 0; mask < total; mask++) {
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
        cout << "None\n";
    } else {
        cout << subsetToString(nums, bestMask) << "\n";
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
  'psg-m5': {
    python: `import sys

def count_average_integral_subsets(nums):
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
    print(count_average_integral_subsets(nums))`,
    java: `import java.util.*;

public class Solution {
    public static long countAverageIntegralSubsets(int[] nums) {
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
            System.out.println(countAverageIntegralSubsets(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

long long countAverageIntegralSubsets(int* nums, int n) {
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
    printf("%lld\n", countAverageIntegralSubsets(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <bits/stdc++.h>
using namespace std;

long long countAverageIntegralSubsets(vector<int>& nums) {
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
        cout << countAverageIntegralSubsets(nums) << "\n";
    }

    return 0;
}`,
  },
  'psg-h1': {
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

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_prime_sum_prime_size_subsets(nums):
    total = 1 << len(nums)
    found = False
    for mask in range(total):
        current = 0
        size = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
                size += 1
        if is_prime(current) and is_prime(size):
            print(subset_to_string(nums, mask))
            found = True
    if not found:
        print("None")

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    print_prime_sum_prime_size_subsets(nums)`,
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

    public static void printPrimeSumPrimeSizeSubsets(int[] nums) {
        int total = 1 << nums.length;
        boolean found = false;
        for (int mask = 0; mask < total; mask++) {
            int current = 0;
            int size = Integer.bitCount(mask);
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                }
            }
            if (isPrime(current) && isPrime(size)) {
                System.out.println(subsetToString(nums, mask));
                found = true;
            }
        }
        if (!found) {
            System.out.println("None");
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
            printPrimeSumPrimeSizeSubsets(nums);
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
    printf("]");
}

void printPrimeSumPrimeSizeSubsets(int* nums, int n) {
    int total = 1 << n;
    int found = 0;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        int size = __builtin_popcount((unsigned int)mask);
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (isPrime(current) && isPrime(size)) {
            printSubset(nums, n, mask);
            printf("\n");
            found = 1;
        }
    }
    if (!found) {
        printf("None\n");
    }
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
    cpp: `#include <bits/stdc++.h>
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

void printPrimeSumPrimeSizeSubsets(vector<int>& nums) {
    int total = 1 << nums.size();
    bool found = false;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        int size = __builtin_popcount((unsigned int)mask);
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        if (isPrime(current) && isPrime(size)) {
            cout << subsetToString(nums, mask) << "\n";
            found = true;
        }
    }
    if (!found) {
        cout << "None\n";
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
        printPrimeSumPrimeSizeSubsets(nums);
    }

    return 0;
}`,
  },
  'psg-h2': {
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
                    sign *= -1;
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
                sign *= -1;
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
    printf("%lld\n", countAlternatingSumSubsets(nums, n, target));
    free(nums);
    return 0;
}`,
    cpp: `#include <bits/stdc++.h>
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
                sign *= -1;
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
        cout << countAlternatingSumSubsets(nums, target) << "\n";
    }

    return 0;
}`,
  },
  'psg-h3': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_sum_and_xor_subsets(nums, target):
    total = 1 << len(nums)
    found = False
    for mask in range(total):
        current_sum = 0
        current_xor = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current_sum += value
                current_xor ^= value
        if current_sum == target and current_xor == target:
            print(subset_to_string(nums, mask))
            found = True
    if not found:
        print("None")

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_sum_and_xor_subsets(nums, target)`,
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

    public static void printSumAndXorSubsets(int[] nums, int target) {
        int total = 1 << nums.length;
        boolean found = false;
        for (int mask = 0; mask < total; mask++) {
            int currentSum = 0;
            int currentXor = 0;
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    currentSum += nums[index];
                    currentXor ^= nums[index];
                }
            }
            if (currentSum == target && currentXor == target) {
                System.out.println(subsetToString(nums, mask));
                found = true;
            }
        }
        if (!found) {
            System.out.println("None");
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
            printSumAndXorSubsets(nums, target);
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
    printf("]");
}

void printSumAndXorSubsets(int* nums, int n, int target) {
    int total = 1 << n;
    int found = 0;
    for (int mask = 0; mask < total; mask++) {
        int currentSum = 0;
        int currentXor = 0;
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                currentSum += nums[index];
                currentXor ^= nums[index];
            }
        }
        if (currentSum == target && currentXor == target) {
            printSubset(nums, n, mask);
            printf("\n");
            found = 1;
        }
    }
    if (!found) {
        printf("None\n");
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
    printSumAndXorSubsets(nums, n, target);
    free(nums);
    return 0;
}`,
    cpp: `#include <bits/stdc++.h>
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

void printSumAndXorSubsets(vector<int>& nums, int target) {
    int total = 1 << nums.size();
    bool found = false;
    for (int mask = 0; mask < total; mask++) {
        int currentSum = 0;
        int currentXor = 0;
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                currentSum += nums[index];
                currentXor ^= nums[index];
            }
        }
        if (currentSum == target && currentXor == target) {
            cout << subsetToString(nums, mask) << "\n";
            found = true;
        }
    }
    if (!found) {
        cout << "None\n";
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
        printSumAndXorSubsets(nums, target);
    }

    return 0;
}`,
  },
  'psg-h4': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_closest_sum_subset(nums, target):
    total = 1 << len(nums)
    best_mask = 0
    best_diff = None
    best_size = None
    best_sum = None
    for mask in range(total):
        current = 0
        size = 0
        for index, value in enumerate(nums):
            if mask & (1 << index):
                current += value
                size += 1
        current_diff = abs(current - target)
        if best_diff is None or current_diff < best_diff or (current_diff == best_diff and size < best_size) or (current_diff == best_diff and size == best_size and mask < best_mask):
            best_mask = mask
            best_diff = current_diff
            best_size = size
            best_sum = current
    print(subset_to_string(nums, best_mask))

data = list(map(int, sys.stdin.read().split()))
if data:
    n = data[0]
    nums = data[1:1 + n]
    target = data[1 + n]
    print_closest_sum_subset(nums, target)`,
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

    public static void printClosestSumSubset(int[] nums, int target) {
        int total = 1 << nums.length;
        int bestMask = 0;
        int bestDiff = Integer.MAX_VALUE;
        int bestSize = Integer.MAX_VALUE;
        for (int mask = 0; mask < total; mask++) {
            int current = 0;
            int size = Integer.bitCount(mask);
            for (int index = 0; index < nums.length; index++) {
                if ((mask & (1 << index)) != 0) {
                    current += nums[index];
                }
            }
            int currentDiff = Math.abs(current - target);
            if (currentDiff < bestDiff || (currentDiff == bestDiff && size < bestSize) || (currentDiff == bestDiff && size == bestSize && mask < bestMask)) {
                bestMask = mask;
                bestDiff = currentDiff;
                bestSize = size;
            }
        }
        System.out.println(subsetToString(nums, bestMask));
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
#include <limits.h>

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
    printf("]");
}

void printClosestSumSubset(int* nums, int n, int target) {
    int total = 1 << n;
    int bestMask = 0;
    int bestDiff = INT_MAX;
    int bestSize = INT_MAX;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        int size = __builtin_popcount((unsigned int)mask);
        for (int index = 0; index < n; index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        int currentDiff = current - target;
        if (currentDiff < 0) {
            currentDiff = -currentDiff;
        }
        if (currentDiff < bestDiff || (currentDiff == bestDiff && size < bestSize) || (currentDiff == bestDiff && size == bestSize && mask < bestMask)) {
            bestMask = mask;
            bestDiff = currentDiff;
            bestSize = size;
        }
    }
    printSubset(nums, n, bestMask);
    printf("\n");
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
    cpp: `#include <bits/stdc++.h>
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

void printClosestSumSubset(vector<int>& nums, int target) {
    int total = 1 << nums.size();
    int bestMask = 0;
    int bestDiff = INT_MAX;
    int bestSize = INT_MAX;
    for (int mask = 0; mask < total; mask++) {
        int current = 0;
        int size = __builtin_popcount((unsigned int)mask);
        for (int index = 0; index < (int)nums.size(); index++) {
            if (mask & (1 << index)) {
                current += nums[index];
            }
        }
        int currentDiff = abs(current - target);
        if (currentDiff < bestDiff || (currentDiff == bestDiff && size < bestSize) || (currentDiff == bestDiff && size == bestSize && mask < bestMask)) {
            bestMask = mask;
            bestDiff = currentDiff;
            bestSize = size;
        }
    }
    cout << subsetToString(nums, bestMask) << "\n";
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
  'psg-h5': {
    python: `import sys

def subset_to_string(nums, mask):
    subset = []
    for index, value in enumerate(nums):
        if mask & (1 << index):
            subset.append(str(value))
    return "[" + ", ".join(subset) + "]"

def print_one_from_each_pair_subsets(nums, target):
    total = 1 << len(nums)
    found = False
    for mask in range(total):
        valid = True
        current = 0
        for pair_start in range(0, len(nums), 2):
            first = (mask >> pair_start) & 1
            second = (mask >> (pair_start + 1)) & 1
            if first + second != 1:
                valid = False
                break
            if first:
                current += nums[pair_start]
            else:
                current += nums[pair_start + 1]
        if valid and current == target:
            print(subset_to_string(nums, mask))
            found = True
    if not found:
        print("None")

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
        int total = 1 << nums.length;
        boolean found = false;
        for (int mask = 0; mask < total; mask++) {
            boolean valid = true;
            int current = 0;
            for (int pairStart = 0; pairStart < nums.length; pairStart += 2) {
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
                System.out.println(subsetToString(nums, mask));
                found = true;
            }
        }
        if (!found) {
            System.out.println("None");
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
    printf("]");
}

void printOneFromEachPairSubsets(int* nums, int n, int target) {
    int total = 1 << n;
    int found = 0;
    for (int mask = 0; mask < total; mask++) {
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
            printf("\n");
            found = 1;
        }
    }
    if (!found) {
        printf("None\n");
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
    cpp: `#include <bits/stdc++.h>
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
    int total = 1 << nums.size();
    bool found = false;
    for (int mask = 0; mask < total; mask++) {
        bool valid = true;
        int current = 0;
        for (int pairStart = 0; pairStart < (int)nums.size(); pairStart += 2) {
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
            cout << subsetToString(nums, mask) << "\n";
            found = true;
        }
    }
    if (!found) {
        cout << "None\n";
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
};

export default powerSetSolutions;
