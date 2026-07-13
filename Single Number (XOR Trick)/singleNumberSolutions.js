export const singleNumberSolutions = {
  'sn-e1': {
    python: `def single_number(nums):
    res = 0
    for x in nums:
        res ^= x
    return res

n = int(input())
nums = list(map(int, input().split()))
print(single_number(nums))`,
    java: `import java.util.*;

public class Solution {
    public static int singleNumber(int[] nums) {
        int res = 0;
        for (int x : nums) {
            res ^= x;
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(singleNumber(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int singleNumber(int* nums, int numsSize) {
    int res = 0;
    for (int i = 0; i < numsSize; i++) {
        res ^= nums[i];
    }
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", singleNumber(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int singleNumber(vector<int>& nums) {
    int res = 0;
    for (int x : nums) {
        res ^= x;
    }
    return res;
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
        cout << singleNumber(nums) << "\\n";
    }
    return 0;
}`,
  },
  'sn-e2': {
    python: `def missing_number(nums):
    n = len(nums)
    res = n
    for i, x in enumerate(nums):
        res ^= i ^ x
    return res

n = int(input())
nums = list(map(int, input().split()))
print(missing_number(nums))`,
    java: `import java.util.*;

public class Solution {
    public static int missingNumber(int[] nums) {
        int res = nums.length;
        for (int i = 0; i < nums.length; i++) {
            res ^= i ^ nums[i];
        }
        return res;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if (sc.hasNextInt()) {
            int n = sc.nextInt();
            int[] nums = new int[n];
            for (int i = 0; i < n; i++) {
                nums[i] = sc.nextInt();
            }
            System.out.println(missingNumber(nums));
        }
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>

int missingNumber(int* nums, int numsSize) {
    int res = numsSize;
    for (int i = 0; i < numsSize; i++) {
        res ^= i ^ nums[i];
    }
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (scanf("%d", &nums[i]) != 1) return 0;
    }
    printf("%d\\n", missingNumber(nums, n));
    free(nums);
    return 0;
}`,
    cpp: `#include <iostream>
#include <vector>

using namespace std;

int missingNumber(vector<int>& nums) {
    int res = nums.size();
    for (int i = 0; i < (int)nums.size(); i++) {
        res ^= i ^ nums[i];
    }
    return res;
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
        cout << missingNumber(nums) << "\\n";
    }
    return 0;
}`,
  },
  'sn-e3': {
    python: `def find_odd(nums):
    res = 0
    for x in nums:
        res ^= x
    return res

n = int(input())
nums = list(map(int, input().split()))
print(find_odd(nums))`,
    java: `import java.util.*;
public class Solution {
    public static int findOdd(int[] nums) {
        int res = 0;
        for (int x : nums) res ^= x;
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();
        System.out.println(findOdd(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int findOdd(int* nums, int n) {
    int res = 0;
    for(int i=0; i<n; i++) res ^= nums[i];
    return res;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    printf("%d\\n", findOdd(arr, n));
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int findOdd(vector<int>& nums) {
    int res = 0;
    for(int x : nums) res ^= x;
    return res;
}
int main() {
    int n; if(cin >> n) {
        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];
        cout << findOdd(nums) << "\\n";
    }
    return 0;
}`,
  },
  'sn-e4': {
    python: `def xor_all(nums):
    res = 0
    for x in nums:
        res ^= x
    return res

n = int(input())
nums = list(map(int, input().split()))
print(xor_all(nums))`,
    java: `import java.util.*;
public class Solution {
    public static int xorAll(int[] nums) {
        int res = 0;
        for(int x : nums) res ^= x;
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();
        System.out.println(xorAll(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int xorAll(int* nums, int n) {
    int res = 0;
    for(int i=0;i<n;i++) res ^= nums[i];
    return res;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    printf("%d\\n", xorAll(arr, n));
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int xorAll(vector<int>& nums) {
    int res = 0;
    for(int x : nums) res ^= x;
    return res;
}
int main() {
    int n; if(cin >> n) {
        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];
        cout << xorAll(nums) << "\\n";
    }
    return 0;
}`,
  },
  'sn-e5': {
    python: `def decode(encoded, first):
    res = [first]
    for x in encoded:
        res.append(res[-1] ^ x)
    return res

n = int(input())
encoded = list(map(int, input().split()))
first = int(input())
print(*(decode(encoded, first)))`,
    java: `import java.util.*;
public class Solution {
    public static int[] decode(int[] encoded, int first) {
        int[] res = new int[encoded.length + 1];
        res[0] = first;
        for(int i=0; i<encoded.length; i++) {
            res[i+1] = res[i] ^ encoded[i];
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] encoded = new int[n];
        for(int i=0;i<n;i++) encoded[i] = sc.nextInt();
        int first = sc.nextInt();
        int[] ans = decode(encoded, first);
        for(int i=0;i<ans.length;i++) {
            System.out.print(ans[i] + (i == ans.length - 1 ? "" : " "));
        }
        System.out.println();
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* decode(int* encoded, int encSize, int first, int* returnSize) {
    int* res = (int*)malloc((encSize + 1) * sizeof(int));
    res[0] = first;
    for(int i=0; i<encSize; i++) {
        res[i+1] = res[i] ^ encoded[i];
    }
    *returnSize = encSize + 1;
    return res;
}
int main() {
    int n; if (scanf("%d", &n) != 1) return 0;
    int* enc = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &enc[i]);
    int first; scanf("%d", &first);
    int retSz;
    int* ans = decode(enc, n, first, &retSz);
    for(int i=0;i<retSz;i++) printf("%d%c", ans[i], i==retSz-1 ? '\\n':' ');
    free(enc); free(ans); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
vector<int> decode(vector<int>& encoded, int first) {
    vector<int> res(encoded.size() + 1);
    res[0] = first;
    for(size_t i=0; i<encoded.size(); i++) {
        res[i+1] = res[i] ^ encoded[i];
    }
    return res;
}
int main() {
    int n; if(cin >> n) {
        vector<int> enc(n); for(int i=0;i<n;i++) cin >> enc[i];
        int first; cin >> first;
        vector<int> ans = decode(enc, first);
        for(int i=0;i<ans.size();i++) cout << ans[i] << (i==ans.size()-1 ? "":" ");
        cout << "\\n";
    }
    return 0;
}`,
  },
  'sn-m1': {
    python: `def single_number_ii(nums):
    ones, twos = 0, 0
    for x in nums:
        ones = (ones ^ x) & ~twos
        twos = (twos ^ x) & ~ones
    return ones

n = int(input())
nums = list(map(int, input().split()))
print(single_number_ii(nums))`,
    java: `import java.util.*;
public class Solution {
    public static int singleNumberII(int[] nums) {
        int ones = 0, twos = 0;
        for (int x : nums) {
            ones = (ones ^ x) & ~twos;
            twos = (twos ^ x) & ~ones;
        }
        return ones;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();
        System.out.println(singleNumberII(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int singleNumberII(int* nums, int n) {
    int ones = 0, twos = 0;
    for(int i=0; i<n; i++) {
        ones = (ones ^ nums[i]) & ~twos;
        twos = (twos ^ nums[i]) & ~ones;
    }
    return ones;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    printf("%d\\n", singleNumberII(arr, n));
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int singleNumberII(vector<int>& nums) {
    int ones = 0, twos = 0;
    for(int x : nums) {
        ones = (ones ^ x) & ~twos;
        twos = (twos ^ x) & ~ones;
    }
    return ones;
}
int main() {
    int n; if(cin >> n) {
        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];
        cout << singleNumberII(nums) << "\\n";
    }
    return 0;
}`,
  },
  'sn-m2': {
    python: `def single_number_iii(nums):
    xy = 0
    for x in nums:
        xy ^= x
    diff = xy & -xy
    x, y = 0, 0
    for num in nums:
        if num & diff:
            x ^= num
        else:
            y ^= num
    return sorted([x, y])`,
    java: `import java.util.*;
public class Solution {
    public static int[] singleNumberIII(int[] nums) {
        int xy = 0;
        for (int num : nums) xy ^= num;
        int diff = xy & -xy;
        int x = 0, y = 0;
        for (int num : nums) {
            if ((num & diff) != 0) x ^= num;
            else y ^= num;
        }
        int[] res = new int[]{x, y};
        Arrays.sort(res);
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();
        int[] ans = singleNumberIII(nums);
        System.out.println(ans[0] + " " + ans[1]);
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int compare(const void* a, const void* b) {
    long long diff = *(int*)a - *(int*)b;
    return (diff > 0) - (diff < 0);
}
int* singleNumberIII(int* nums, int n, int* returnSize) {
    int xy = 0;
    for (int i = 0; i < n; i++) xy ^= nums[i];
    long long diff = xy & (-(long long)xy);
    int x = 0, y = 0;
    for (int i = 0; i < n; i++) {
        if (nums[i] & diff) x ^= nums[i];
        else y ^= nums[i];
    }
    int* res = (int*)malloc(2 * sizeof(int));
    res[0] = x; res[1] = y;
    qsort(res, 2, sizeof(int), compare);
    *returnSize = 2;
    return res;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    int retSz;
    int* ans = singleNumberIII(arr, n, &retSz);
    printf("%d %d\\n", ans[0], ans[1]);
    free(arr); free(ans); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
vector<int> singleNumberIII(vector<int>& nums) {
    int xy = 0;
    for (int num : nums) xy ^= num;
    long long diff = xy & (-(long long)xy);
    int x = 0, y = 0;
    for (int num : nums) {
        if (num & diff) x ^= num;
        else y ^= num;
    }
    vector<int> res = {x, y};
    sort(res.begin(), res.end());
    return res;
}
int main() {
    int n; if(cin >> n) {
        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];
        vector<int> ans = singleNumberIII(nums);
        cout << ans[0] << " " << ans[1] << "\\n";
    }
    return 0;
}`,
  },
  'sn-m3': {
    python: `def xor_queries(arr, queries):
    pref = [0] * (len(arr) + 1)
    for i in range(len(arr)):
        pref[i+1] = pref[i] ^ arr[i]
    res = []
    for l, r in queries:
        res.append(pref[r+1] ^ pref[l])
    return res

n = int(input())
arr = list(map(int, input().split()))
q = int(input())
queries = []
for _ in range(q):
    queries.append(list(map(int, input().split())))
print(*(xor_queries(arr, queries)))`,
    java: `import java.util.*;
public class Solution {
    public static int[] xorQueries(int[] arr, int[][] queries) {
        int[] pref = new int[arr.length + 1];
        for (int i = 0; i < arr.length; i++) pref[i+1] = pref[i] ^ arr[i];
        int[] res = new int[queries.length];
        for (int i = 0; i < queries.length; i++) {
            res[i] = pref[queries[i][1] + 1] ^ pref[queries[i][0]];
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++) arr[i] = sc.nextInt();
        int q = sc.nextInt();
        int[][] queries = new int[q][2];
        for(int i=0;i<q;i++) { queries[i][0] = sc.nextInt(); queries[i][1] = sc.nextInt(); }
        int[] ans = xorQueries(arr, queries);
        for(int i=0;i<q;i++) System.out.print(ans[i] + (i==q-1 ? "":" "));
        System.out.println();
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int* xorQueries(int* arr, int arrSize, int** queries, int queriesSize, int* returnSize) {
    int* pref = (int*)malloc((arrSize + 1) * sizeof(int));
    pref[0] = 0;
    for(int i=0; i<arrSize; i++) pref[i+1] = pref[i] ^ arr[i];
    int* res = (int*)malloc(queriesSize * sizeof(int));
    for(int i=0; i<queriesSize; i++) {
        res[i] = pref[queries[i][1] + 1] ^ pref[queries[i][0]];
    }
    *returnSize = queriesSize;
    free(pref);
    return res;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    int q; scanf("%d", &q);
    int** queries = (int**)malloc(q*sizeof(int*));
    for(int i=0;i<q;i++) {
        queries[i] = (int*)malloc(2*sizeof(int));
        scanf("%d %d", &queries[i][0], &queries[i][1]);
    }
    int retSz;
    int* ans = xorQueries(arr, n, queries, q, &retSz);
    for(int i=0;i<retSz;i++) printf("%d%c", ans[i], i==retSz-1 ? '\\n':' ');
    free(arr);
    for(int i=0;i<q;i++) free(queries[i]);
    free(queries); free(ans); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
vector<int> xorQueries(vector<int>& arr, vector<vector<int>>& queries) {
    vector<int> pref(arr.size() + 1, 0);
    for(size_t i=0; i<arr.size(); i++) pref[i+1] = pref[i] ^ arr[i];
    vector<int> res(queries.size());
    for(size_t i=0; i<queries.size(); i++) {
        res[i] = pref[queries[i][1] + 1] ^ pref[queries[i][0]];
    }
    return res;
}
int main() {
    int n; if(cin >> n) {
        vector<int> arr(n); for(int i=0;i<n;i++) cin >> arr[i];
        int q; cin >> q;
        vector<vector<int>> queries(q, vector<int>(2));
        for(int i=0;i<q;i++) cin >> queries[i][0] >> queries[i][1];
        vector<int> ans = xorQueries(arr, queries);
        for(int i=0;i<ans.size();i++) cout << ans[i] << (i==ans.size()-1 ? "":" ");
        cout << "\\n";
    }
    return 0;
}`,
  },
  'sn-m4': {
    python: `def find_dup_missing(nums):
    n = len(nums)
    xor_sum = 0
    for i in range(1, n + 1):
        xor_sum ^= i ^ nums[i-1]
    diff = xor_sum & -xor_sum
    x, y = 0, 0
    for num in nums:
        if num & diff: x ^= num
        else: y ^= num
    for i in range(1, n + 1):
        if i & diff: x ^= i
        else: y ^= i
    for num in nums:
        if num == x: return [x, y]
    return [y, x]`,
    java: `import java.util.*;
public class Solution {
    public static int[] findDupMissing(int[] nums) {
        int n = nums.length;
        int xor = 0;
        for (int i = 1; i <= n; i++) xor ^= i ^ nums[i-1];
        int diff = xor & -xor;
        int x = 0, y = 0;
        for (int num : nums) {
            if ((num & diff) != 0) x ^= num;
            else y ^= num;
        }
        for (int i = 1; i <= n; i++) {
            if ((i & diff) != 0) x ^= i;
            else y ^= i;
        }
        boolean xIsDup = false;
        for (int num : nums) {
            if (num == x) { xIsDup = true; break; }
        }
        if (xIsDup) return new int[]{x, y};
        return new int[]{y, x};
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();
        int[] ans = findDupMissing(nums);
        System.out.println(ans[0] + " " + ans[1]);
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
int* findDupMissing(int* nums, int n, int* returnSize) {
    int xorVal = 0;
    for (int i = 1; i <= n; i++) xorVal ^= i ^ nums[i-1];
    int diff = xorVal & -xorVal;
    int x = 0, y = 0;
    for (int i = 0; i < n; i++) {
        if (nums[i] & diff) x ^= nums[i];
        else y ^= nums[i];
    }
    for (int i = 1; i <= n; i++) {
        if (i & diff) x ^= i;
        else y ^= i;
    }
    bool xIsDup = false;
    for (int i = 0; i < n; i++) {
        if (nums[i] == x) { xIsDup = true; break; }
    }
    int* res = (int*)malloc(2 * sizeof(int));
    if (xIsDup) { res[0] = x; res[1] = y; }
    else { res[0] = y; res[1] = x; }
    *returnSize = 2;
    return res;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    int retSz;
    int* ans = findDupMissing(arr, n, &retSz);
    printf("%d %d\\n", ans[0], ans[1]);
    free(arr); free(ans); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
vector<int> findDupMissing(vector<int>& nums) {
    int n = nums.size();
    int xorVal = 0;
    for (int i = 1; i <= n; i++) xorVal ^= i ^ nums[i-1];
    int diff = xorVal & -xorVal;
    int x = 0, y = 0;
    for (int num : nums) {
        if (num & diff) x ^= num;
        else y ^= num;
    }
    for (int i = 1; i <= n; i++) {
        if (i & diff) x ^= i;
        else y ^= i;
    }
    bool xIsDup = false;
    for (int num : nums) {
        if (num == x) { xIsDup = true; break; }
    }
    if (xIsDup) return {x, y};
    return {y, x};
}
int main() {
    int n; if(cin >> n) {
        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];
        vector<int> ans = findDupMissing(nums);
        cout << ans[0] << " " << ans[1] << "\\n";
    }
    return 0;
}`,
  },
  'sn-m5': {
    python: `def min_flips(a, b, c):
    flips = 0
    for i in range(32):
        bit_a = (a >> i) & 1
        bit_b = (b >> i) & 1
        bit_c = (c >> i) & 1
        if bit_c == 1:
            if bit_a == 0 and bit_b == 0: flips += 1
        else:
            flips += bit_a + bit_b
    return flips

a, b, c = map(int, input().split())
print(min_flips(a, b, c))`,
    java: `import java.util.*;
public class Solution {
    public static int minFlips(int a, int b, int c) {
        int flips = 0;
        for (int i = 0; i < 31; i++) {
            int bit_a = (a >> i) & 1;
            int bit_b = (b >> i) & 1;
            int bit_c = (c >> i) & 1;
            if (bit_c == 1) {
                if (bit_a == 0 && bit_b == 0) flips += 1;
            } else {
                flips += bit_a + bit_b;
            }
        }
        return flips;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();
        System.out.println(minFlips(a, b, c));
    }
}`,
    c: `#include <stdio.h>
int minFlips(int a, int b, int c) {
    int flips = 0;
    for (int i = 0; i < 31; i++) {
        int bit_a = (a >> i) & 1;
        int bit_b = (b >> i) & 1;
        int bit_c = (c >> i) & 1;
        if (bit_c == 1) {
            if (bit_a == 0 && bit_b == 0) flips += 1;
        } else {
            flips += bit_a + bit_b;
        }
    }
    return flips;
}
int main() {
    int a, b, c;
    if(scanf("%d %d %d", &a, &b, &c) == 3) {
        printf("%d\\n", minFlips(a, b, c));
    }
    return 0;
}`,
    cpp: `#include <iostream>
using namespace std;
int minFlips(int a, int b, int c) {
    int flips = 0;
    for (int i = 0; i < 31; i++) {
        int bit_a = (a >> i) & 1;
        int bit_b = (b >> i) & 1;
        int bit_c = (c >> i) & 1;
        if (bit_c == 1) {
            if (bit_a == 0 && bit_b == 0) flips += 1;
        } else {
            flips += bit_a + bit_b;
        }
    }
    return flips;
}
int main() {
    int a, b, c;
    if(cin >> a >> b >> c) {
        cout << minFlips(a, b, c) << "\\n";
    }
    return 0;
}`,
  },
  'sn-h1': {
    python: `def find_max_xor(nums):
    max_xor = 0
    mask = 0
    for i in range(30, -1, -1):
        mask |= (1 << i)
        prefixes = {num & mask for num in nums}
        tmp = max_xor | (1 << i)
        for p in prefixes:
            if (tmp ^ p) in prefixes:
                max_xor = tmp
                break
    return max_xor

n = int(input())
nums = list(map(int, input().split()))
print(find_max_xor(nums))`,
    java: `import java.util.*;
public class Solution {
    public static int findMaxXOR(int[] nums) {
        int max_xor = 0, mask = 0;
        for (int i = 30; i >= 0; i--) {
            mask |= (1 << i);
            Set<Integer> prefixes = new HashSet<>();
            for (int num : nums) prefixes.add(num & mask);
            int tmp = max_xor | (1 << i);
            for (int p : prefixes) {
                if (prefixes.contains(tmp ^ p)) {
                    max_xor = tmp;
                    break;
                }
            }
        }
        return max_xor;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();
        System.out.println(findMaxXOR(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
typedef struct TrieNode {
    struct TrieNode* children[2];
} TrieNode;
TrieNode* createNode() {
    TrieNode* n = (TrieNode*)malloc(sizeof(TrieNode));
    n->children[0] = n->children[1] = NULL;
    return n;
}
void insert(TrieNode* root, int num) {
    TrieNode* curr = root;
    for (int i = 30; i >= 0; i--) {
        int bit = (num >> i) & 1;
        if (!curr->children[bit]) curr->children[bit] = createNode();
        curr = curr->children[bit];
    }
}
int getMaxXOR(TrieNode* root, int num) {
    TrieNode* curr = root;
    int val = 0;
    for (int i = 30; i >= 0; i--) {
        int bit = (num >> i) & 1;
        if (curr->children[1 - bit]) {
            val |= (1 << i);
            curr = curr->children[1 - bit];
        } else {
            curr = curr->children[bit];
        }
    }
    return val;
}
void freeTrie(TrieNode* root) {
    if (!root) return;
    freeTrie(root->children[0]);
    freeTrie(root->children[1]);
    free(root);
}
int findMaxXOR(int* nums, int n) {
    TrieNode* root = createNode();
    for (int i = 0; i < n; i++) insert(root, nums[i]);
    int max_xor = 0;
    for (int i = 0; i < n; i++) {
        int val = getMaxXOR(root, nums[i]);
        if (val > max_xor) max_xor = val;
    }
    freeTrie(root);
    return max_xor;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    printf("%d\\n", findMaxXOR(arr, n));
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;
int findMaxXOR(vector<int>& nums) {
    int max_xor = 0, mask = 0;
    for (int i = 30; i >= 0; i--) {
        mask |= (1 << i);
        unordered_set<int> prefixes;
        for (int num : nums) prefixes.insert(num & mask);
        int tmp = max_xor | (1 << i);
        for (int p : prefixes) {
            if (prefixes.count(tmp ^ p)) {
                max_xor = tmp;
                break;
            }
        }
    }
    return max_xor;
}
int main() {
    int n; if(cin >> n) {
        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];
        cout << findMaxXOR(nums) << "\\n";
    }
    return 0;
}`,
  },
  'sn-h2': {
    python: `def max_xor_subarray(nums):
    class TrieNode:
        def __init__(self):
            self.children = [None, None]
    root = TrieNode()
    def insert(val):
        curr = root
        for i in range(30, -1, -1):
            bit = (val >> i) & 1
            if not curr.children[bit]:
                curr.children[bit] = TrieNode()
            curr = curr.children[bit]
    def query(val):
        curr = root
        res = 0
        for i in range(30, -1, -1):
            bit = (val >> i) & 1
            if curr.children[1 - bit]:
                res |= (1 << i)
                curr = curr.children[1 - bit]
            elif curr.children[bit]:
                curr = curr.children[bit]
            else:
                break
        return res
    insert(0)
    max_val = 0
    curr_xor = 0
    for x in nums:
        curr_xor ^= x
        insert(curr_xor)
        max_val = max(max_val, query(curr_xor))
    return max_val

n = int(input())
nums = list(map(int, input().split()))
print(max_xor_subarray(nums))`,
    java: `import java.util.*;
public class Solution {
    static class TrieNode {
        TrieNode[] children = new TrieNode[2];
    }
    private static void insert(TrieNode root, int val) {
        TrieNode curr = root;
        for (int i = 30; i >= 0; i--) {
            int bit = (val >> i) & 1;
            if (curr.children[bit] == null) curr.children[bit] = new TrieNode();
            curr = curr.children[bit];
        }
    }
    private static int query(TrieNode root, int val) {
        TrieNode curr = root;
        int res = 0;
        for (int i = 30; i >= 0; i--) {
            int bit = (val >> i) & 1;
            if (curr.children[1 - bit] != null) {
                res |= (1 << i);
                curr = curr.children[1 - bit];
            } else if (curr.children[bit] != null) {
                curr = curr.children[bit];
            } else {
                break;
            }
        }
        return res;
    }
    public static int maxXORSubarray(int[] nums) {
        TrieNode root = new TrieNode();
        insert(root, 0);
        int maxVal = 0, currXor = 0;
        for (int x : nums) {
            currXor ^= x;
            insert(root, currXor);
            maxVal = Math.max(maxVal, query(root, currXor));
        }
        return maxVal;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();
        System.out.println(maxXORSubarray(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#define MAX(a,b) ((a)>(b)?(a):(b))
typedef struct TrieNode {
    struct TrieNode* children[2];
} TrieNode;
TrieNode* createNode() {
    TrieNode* n = (TrieNode*)malloc(sizeof(TrieNode));
    n->children[0] = n->children[1] = NULL;
    return n;
}
void insert(TrieNode* root, int val) {
    TrieNode* curr = root;
    for (int i = 30; i >= 0; i--) {
        int bit = (val >> i) & 1;
        if (!curr->children[bit]) curr->children[bit] = createNode();
        curr = curr->children[bit];
    }
}
int query(TrieNode* root, int val) {
    TrieNode* curr = root;
    int res = 0;
    for (int i = 30; i >= 0; i--) {
        int bit = (val >> i) & 1;
        if (curr->children[1 - bit]) {
            res |= (1 << i);
            curr = curr->children[1 - bit];
        } else {
            curr = curr->children[bit];
        }
    }
    return res;
}
void freeTrie(TrieNode* root) {
    if(!root) return;
    freeTrie(root->children[0]);
    freeTrie(root->children[1]);
    free(root);
}
int maxXORSubarray(int* nums, int n) {
    TrieNode* root = createNode();
    insert(root, 0);
    int maxVal = 0, currXor = 0;
    for (int i = 0; i < n; i++) {
        currXor ^= nums[i];
        insert(root, currXor);
        maxVal = MAX(maxVal, query(root, currXor));
    }
    freeTrie(root);
    return maxVal;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    printf("%d\\n", maxXORSubarray(arr, n));
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
struct TrieNode {
    TrieNode* children[2] = {nullptr, nullptr};
};
void insert(TrieNode* root, int val) {
    TrieNode* curr = root;
    for (int i = 30; i >= 0; i--) {
        int bit = (val >> i) & 1;
        if (!curr->children[bit]) curr->children[bit] = new TrieNode();
        curr = curr->children[bit];
    }
}
int query(TrieNode* root, int val) {
    TrieNode* curr = root;
    int res = 0;
    for (int i = 30; i >= 0; i--) {
        int bit = (val >> i) & 1;
        if (curr->children[1 - bit]) {
            res |= (1 << i);
            curr = curr->children[1 - bit];
        } else {
            curr = curr->children[bit];
        }
    }
    return res;
}
void freeTrie(TrieNode* root) {
    if(!root) return;
    freeTrie(root->children[0]);
    freeTrie(root->children[1]);
    delete root;
}
int maxXORSubarray(vector<int>& nums) {
    TrieNode* root = new TrieNode();
    insert(root, 0);
    int maxVal = 0, currXor = 0;
    for (int x : nums) {
        currXor ^= x;
        insert(root, currXor);
        maxVal = max(maxVal, query(root, currXor));
    }
    freeTrie(root);
    return maxVal;
}
int main() {
    int n; if(cin >> n) {
        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];
        cout << maxXORSubarray(nums) << "\\n";
    }
    return 0;
}`,
  },
  'sn-h3': {
    python: `def min_xor_sum(nums1, nums2):
    n = len(nums1)
    dp = [float('inf')] * (1 << n)
    dp[0] = 0
    for mask in range(1 << n):
        i = bin(mask).count('1')
        if i >= n: continue
        for j in range(n):
            if not (mask & (1 << j)):
                next_mask = mask | (1 << j)
                dp[next_mask] = min(dp[next_mask], dp[mask] + (nums1[i] ^ nums2[j]))
    return dp[(1 << n) - 1]`,
    java: `import java.util.*;
public class Solution {
    public static int minXorSum(int[] nums1, int[] nums2) {
        int n = nums1.length;
        int[] dp = new int[1 << n];
        Arrays.fill(dp, Integer.MAX_VALUE / 2);
        dp[0] = 0;
        for (int mask = 0; mask < (1 << n); mask++) {
            int i = Integer.bitCount(mask);
            if (i >= n) continue;
            for (int j = 0; j < n; j++) {
                if ((mask & (1 << j)) == 0) {
                    int next = mask | (1 << j);
                    dp[next] = Math.min(dp[next], dp[mask] + (nums1[i] ^ nums2[j]));
                }
            }
        }
        return dp[(1 << n) - 1];
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums1 = new int[n];
        for(int i=0;i<n;i++) nums1[i] = sc.nextInt();
        int[] nums2 = new int[n];
        for(int i=0;i<n;i++) nums2[i] = sc.nextInt();
        System.out.println(minXorSum(nums1, nums2));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
#define MIN(a,b) ((a)<(b)?(a):(b))
int minXorSum(int* nums1, int* nums2, int n) {
    int numStates = 1 << n;
    int* dp = (int*)malloc(numStates * sizeof(int));
    for (int i = 0; i < numStates; i++) dp[i] = 1000000000;
    dp[0] = 0;
    for (int mask = 0; mask < numStates; mask++) {
        int i = 0;
        for (int temp = mask; temp; temp >>= 1) i += (temp & 1);
        if (i >= n) continue;
        for (int j = 0; j < n; j++) {
            if (!(mask & (1 << j))) {
                int next = mask | (1 << j);
                dp[next] = MIN(dp[next], dp[mask] + (nums1[i] ^ nums2[j]));
            }
        }
    }
    int result = dp[numStates - 1];
    free(dp);
    return result;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* n1 = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &n1[i]);
    int* n2 = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &n2[i]);
    printf("%d\\n", minXorSum(n1, n2, n));
    free(n1); free(n2); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
int minXorSum(vector<int>& nums1, vector<int>& nums2) {
    int n = nums1.size();
    vector<int> dp(1 << n, 1e9);
    dp[0] = 0;
    for (int mask = 0; mask < (1 << n); mask++) {
        int i = 0;
        for (int temp = mask; temp; temp >>= 1) i += (temp & 1);
        if (i >= n) continue;
        for (int j = 0; j < n; j++) {
            if (!(mask & (1 << j))) {
                int next = mask | (1 << j);
                dp[next] = min(dp[next], dp[mask] + (nums1[i] ^ nums2[j]));
            }
        }
    }
    return dp[(1 << n) - 1];
}
int main() {
    int n; if(cin >> n) {
        vector<int> nums1(n); for(int i=0;i<n;i++) cin >> nums1[i];
        vector<int> nums2(n); for(int i=0;i<n;i++) cin >> nums2[i];
        cout << minXorSum(nums1, nums2) << "\\n";
    }
    return 0;
}`,
  },
  'sn-h4': {
    python: `def xor_sum_pairs(a, b):
    ans = 0
    n, m = len(a), len(b)
    # (A[i] ^ B[j]) sum under XOR operation
    # Notice: (A[i] ^ B[j]) XORed over all i,j
    # = (A[1]^B[1]) ^ (A[1]^B[2]) ... 
    # A[i] is XORed m times, B[j] is XORed n times.
    # So if m is odd, A[i] survives. If n is odd, B[j] survives.
    # XOR sum = (A[1]^A[2]... if m is odd) ^ (B[1]^B[2]... if n is odd)
    xor_a = 0
    for x in a: xor_a ^= x
    xor_b = 0
    for y in b: xor_b ^= y
    ans = 0
    if m % 2 != 0: ans ^= xor_a
    if n % 2 != 0: ans ^= xor_b
    return ans

n = int(input())
a = list(map(int, input().split()))
m = int(input())
b = list(map(int, input().split()))
print(xor_sum_pairs(a, b))`,
    java: `import java.util.*;
public class Solution {
    public static int xorSumPairs(int[] A, int[] B) {
        int xorA = 0; for(int x : A) xorA ^= x;
        int xorB = 0; for(int y : B) xorB ^= y;
        int ans = 0;
        if (B.length % 2 != 0) ans ^= xorA;
        if (A.length % 2 != 0) ans ^= xorB;
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] A = new int[n];
        for(int i=0;i<n;i++) A[i] = sc.nextInt();
        int m = sc.nextInt();
        int[] B = new int[m];
        for(int i=0;i<m;i++) B[i] = sc.nextInt();
        System.out.println(xorSumPairs(A, B));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int xorSumPairs(int* A, int n, int* B, int m) {
    int xorA = 0; for(int i=0; i<n; i++) xorA ^= A[i];
    int xorB = 0; for(int i=0; i<m; i++) xorB ^= B[i];
    int ans = 0;
    if (m % 2 != 0) ans ^= xorA;
    if (n % 2 != 0) ans ^= xorB;
    return ans;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* A = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &A[i]);
    int m; if(scanf("%d", &m) != 1) return 0;
    int* B = (int*)malloc(m*sizeof(int));
    for(int i=0;i<m;i++) scanf("%d", &B[i]);
    printf("%d\\n", xorSumPairs(A, n, B, m));
    free(A); free(B); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int xorSumPairs(vector<int>& A, vector<int>& B) {
    int xorA = 0; for(int x : A) xorA ^= x;
    int xorB = 0; for(int y : B) xorB ^= y;
    int ans = 0;
    if (B.size() % 2 != 0) ans ^= xorA;
    if (A.size() % 2 != 0) ans ^= xorB;
    return ans;
}
int main() {
    int n; if(cin >> n) {
        vector<int> A(n); for(int i=0;i<n;i++) cin >> A[i];
        int m; cin >> m;
        vector<int> B(m); for(int i=0;i<m;i++) cin >> B[i];
        cout << xorSumPairs(A, B) << "\\n";
    }
    return 0;
}`,
  },
  'sn-h5': {
    python: `def count_triplets(nums):
    n = len(nums)
    count = [0] * 65536
    for i in range(n):
        for j in range(n):
            count[nums[i] ^ nums[j]] += 1
    ans = 0
    for x in nums:
        ans += count[x]
    return ans

n = int(input())
nums = list(map(int, input().split()))
print(count_triplets(nums))`,
    java: `import java.util.*;
public class Solution {
    public static int countTriplets(int[] nums) {
        int[] count = new int[65536];
        int n = nums.length;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                count[nums[i] ^ nums[j]]++;
            }
        }
        int ans = 0;
        for (int x : nums) {
            ans += count[x];
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0;i<n;i++) nums[i] = sc.nextInt();
        System.out.println(countTriplets(nums));
    }
}`,
    c: `#include <stdio.h>
#include <stdlib.h>
int countTriplets(int* nums, int n) {
    int* count = (int*)calloc(65536, sizeof(int));
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            count[nums[i] ^ nums[j]]++;
        }
    }
    int ans = 0;
    for (int i = 0; i < n; i++) {
        ans += count[nums[i]];
    }
    free(count);
    return ans;
}
int main() {
    int n; if(scanf("%d", &n) != 1) return 0;
    int* arr = (int*)malloc(n*sizeof(int));
    for(int i=0;i<n;i++) scanf("%d", &arr[i]);
    printf("%d\\n", countTriplets(arr, n));
    free(arr); return 0;
}`,
    cpp: `#include <iostream>
#include <vector>
using namespace std;
int countTriplets(vector<int>& nums) {
    vector<int> count(65536, 0);
    int n = nums.size();
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            count[nums[i] ^ nums[j]]++;
        }
    }
    int ans = 0;
    for (int x : nums) {
        ans += count[x];
    }
    return ans;
}
int main() {
    int n; if(cin >> n) {
        vector<int> nums(n); for(int i=0;i<n;i++) cin >> nums[i];
        cout << countTriplets(nums) << "\\n";
    }
    return 0;
}`,
  },
};
