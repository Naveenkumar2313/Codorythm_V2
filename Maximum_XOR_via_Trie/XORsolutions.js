const solutions = [
    {
        id: "max-xor-trie-e1",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_xor(nums):
    if not nums: return 0
    trie = Trie()
    trie.insert(nums[0])
    ans = 0
    for x in nums[1:]:
        ans = max(ans, trie.query(x))
        trie.insert(x)
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if data: print(maximum_xor(data[1:]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    public static int maximumXor(int[] nums) {
        if(nums.length == 0) return 0;
        Trie trie = new Trie();
        trie.insert(nums[0]);
        int ans = 0;
        for(int i=1; i<nums.length; i++) {
            ans = Math.max(ans, trie.query(nums[i]));
            trie.insert(nums[i]);
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(maximumXor(nums));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

int maximumXor(int* nums, int n) {
    if (n == 0) return 0;
    Trie* root = newTrie();
    insert(root, nums[0]);
    int ans = 0;
    for (int i = 1; i < n; i++) {
        int q = query(root, nums[i]);
        if (q > ans) ans = q;
        insert(root, nums[i]);
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", maximumXor(nums, n));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

int maximumXor(vector<int>& nums) {
    if (nums.empty()) return 0;
    Trie trie;
    trie.insert(nums[0]);
    int ans = 0;
    for (size_t i = 1; i < nums.size(); i++) {
        ans = max(ans, trie.query(nums[i]));
        trie.insert(nums[i]);
    }
    return ans;
}

int main() {
    int n;
    if (!(cin >> n)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << maximumXor(nums) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-e2",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_xor_with_target(nums, target):
    trie = Trie()
    for x in nums: trie.insert(x)
    return trie.query(target)

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if len(data) >= 2:
        print(maximum_xor_with_target(data[2:], data[1]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    public static int maximumXorWithTarget(int[] nums, int target) {
        Trie trie = new Trie();
        for(int x : nums) trie.insert(x);
        return trie.query(target);
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int target = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(maximumXorWithTarget(nums, target));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

int maximumXorWithTarget(int* nums, int n, int target) {
    Trie* root = newTrie();
    for (int i = 0; i < n; i++) insert(root, nums[i]);
    return query(root, target);
}

int main() {
    int n, target;
    if (scanf("%d %d", &n, &target) != 2) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", maximumXorWithTarget(nums, n, target));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

int maximumXorWithTarget(vector<int>& nums, int target) {
    Trie trie;
    for (int x : nums) trie.insert(x);
    return trie.query(target);
}

int main() {
    int n, target;
    if (!(cin >> n >> target)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << maximumXorWithTarget(nums, target) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-e3",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_xor_between_arrays(nums1, nums2):
    trie = Trie()
    for x in nums1: trie.insert(x)
    ans = 0
    for x in nums2: ans = max(ans, trie.query(x))
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if len(data) >= 2:
        n, m = data[0], data[1]
        print(maximum_xor_between_arrays(data[2:2+n], data[2+n:2+n+m]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    public static int maximumXorBetweenArrays(int[] nums1, int[] nums2) {
        Trie trie = new Trie();
        for(int x : nums1) trie.insert(x);
        int ans = 0;
        for(int x : nums2) ans = Math.max(ans, trie.query(x));
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] nums1 = new int[n];
        for(int i=0; i<n; i++) nums1[i] = sc.nextInt();
        int[] nums2 = new int[m];
        for(int i=0; i<m; i++) nums2[i] = sc.nextInt();
        System.out.println(maximumXorBetweenArrays(nums1, nums2));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

int maximumXorBetweenArrays(int* nums1, int n1, int* nums2, int n2) {
    Trie* root = newTrie();
    for (int i = 0; i < n1; i++) insert(root, nums1[i]);
    int ans = 0;
    for (int i = 0; i < n2; i++) {
        int q = query(root, nums2[i]);
        if (q > ans) ans = q;
    }
    return ans;
}

int main() {
    int n, m;
    if (scanf("%d %d", &n, &m) != 2) return 0;
    int* nums1 = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums1[i]);
    int* nums2 = (int*)malloc(m * sizeof(int));
    for (int i = 0; i < m; i++) scanf("%d", &nums2[i]);
    printf("%d\\n", maximumXorBetweenArrays(nums1, n, nums2, m));
    free(nums1); free(nums2);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

int maximumXorBetweenArrays(vector<int>& nums1, vector<int>& nums2) {
    Trie trie;
    for (int x : nums1) trie.insert(x);
    int ans = 0;
    for (int x : nums2) ans = max(ans, trie.query(x));
    return ans;
}

int main() {
    int n, m;
    if (!(cin >> n >> m)) return 0;
    vector<int> nums1(n), nums2(m);
    for (int i = 0; i < n; i++) cin >> nums1[i];
    for (int i = 0; i < m; i++) cin >> nums2[i];
    cout << maximumXorBetweenArrays(nums1, nums2) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-e4",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_xor_even_numbers(nums):
    evens = [x for x in nums if x % 2 == 0]
    if len(evens) < 2: return 0
    trie = Trie()
    trie.insert(evens[0])
    ans = 0
    for x in evens[1:]:
        ans = max(ans, trie.query(x))
        trie.insert(x)
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if data: print(maximum_xor_even_numbers(data[1:]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    public static int maximumXorEvenNumbers(int[] nums) {
        List<Integer> evens = new ArrayList<>();
        for(int x : nums) if(x % 2 == 0) evens.add(x);
        if(evens.size() < 2) return 0;
        Trie trie = new Trie();
        trie.insert(evens.get(0));
        int ans = 0;
        for(int i=1; i<evens.size(); i++) {
            ans = Math.max(ans, trie.query(evens.get(i)));
            trie.insert(evens.get(i));
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(maximumXorEvenNumbers(nums));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

int maximumXorEvenNumbers(int* nums, int n) {
    int* evens = (int*)malloc(n * sizeof(int));
    int sz = 0;
    for(int i=0; i<n; i++) if(nums[i] % 2 == 0) evens[sz++] = nums[i];
    if(sz < 2) { free(evens); return 0; }
    Trie* root = newTrie();
    insert(root, evens[0]);
    int ans = 0;
    for (int i = 1; i < sz; i++) {
        int q = query(root, evens[i]);
        if (q > ans) ans = q;
        insert(root, evens[i]);
    }
    free(evens);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", maximumXorEvenNumbers(nums, n));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

int maximumXorEvenNumbers(vector<int>& nums) {
    vector<int> evens;
    for(int x : nums) if(x % 2 == 0) evens.push_back(x);
    if (evens.size() < 2) return 0;
    Trie trie;
    trie.insert(evens[0]);
    int ans = 0;
    for (size_t i = 1; i < evens.size(); i++) {
        ans = max(ans, trie.query(evens[i]));
        trie.insert(evens[i]);
    }
    return ans;
}

int main() {
    int n;
    if (!(cin >> n)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << maximumXorEvenNumbers(nums) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-e5",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_xor_opposite_parity(nums):
    evens = [x for x in nums if x % 2 == 0]
    odds = [x for x in nums if x % 2 != 0]
    if not evens or not odds: return 0
    trie = Trie()
    for x in evens: trie.insert(x)
    ans = 0
    for x in odds: ans = max(ans, trie.query(x))
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if data: print(maximum_xor_opposite_parity(data[1:]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    public static int maximumXorOppositeParity(int[] nums) {
        List<Integer> evens = new ArrayList<>();
        List<Integer> odds = new ArrayList<>();
        for(int x : nums) {
            if(x % 2 == 0) evens.add(x);
            else odds.add(x);
        }
        if(evens.isEmpty() || odds.isEmpty()) return 0;
        Trie trie = new Trie();
        for(int x : evens) trie.insert(x);
        int ans = 0;
        for(int x : odds) ans = Math.max(ans, trie.query(x));
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(maximumXorOppositeParity(nums));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

int maximumXorOppositeParity(int* nums, int n) {
    int* evens = (int*)malloc(n * sizeof(int));
    int* odds = (int*)malloc(n * sizeof(int));
    int e = 0, o = 0;
    for(int i=0; i<n; i++) {
        if(nums[i] % 2 == 0) evens[e++] = nums[i];
        else odds[o++] = nums[i];
    }
    if(e == 0 || o == 0) { free(evens); free(odds); return 0; }
    Trie* root = newTrie();
    for(int i=0; i<e; i++) insert(root, evens[i]);
    int ans = 0;
    for (int i = 0; i < o; i++) {
        int q = query(root, odds[i]);
        if (q > ans) ans = q;
    }
    free(evens); free(odds);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", maximumXorOppositeParity(nums, n));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

int maximumXorOppositeParity(vector<int>& nums) {
    vector<int> evens, odds;
    for(int x : nums) {
        if(x % 2 == 0) evens.push_back(x);
        else odds.push_back(x);
    }
    if (evens.empty() || odds.empty()) return 0;
    Trie trie;
    for(int x : evens) trie.insert(x);
    int ans = 0;
    for (int x : odds) ans = max(ans, trie.query(x));
    return ans;
}

int main() {
    int n;
    if (!(cin >> n)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << maximumXorOppositeParity(nums) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-m1",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_xor_subarray(nums):
    trie = Trie()
    trie.insert(0)
    ans, pre = 0, 0
    for x in nums:
        pre ^= x
        ans = max(ans, trie.query(pre))
        trie.insert(pre)
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if data: print(maximum_xor_subarray(data[1:]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    public static int maximumXorSubarray(int[] nums) {
        Trie trie = new Trie();
        trie.insert(0);
        int ans = 0, pre = 0;
        for(int x : nums) {
            pre ^= x;
            ans = Math.max(ans, trie.query(pre));
            trie.insert(pre);
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(maximumXorSubarray(nums));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

int maximumXorSubarray(int* nums, int n) {
    Trie* root = newTrie();
    insert(root, 0);
    int ans = 0, pre = 0;
    for (int i = 0; i < n; i++) {
        pre ^= nums[i];
        int q = query(root, pre);
        if (q > ans) ans = q;
        insert(root, pre);
    }
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", maximumXorSubarray(nums, n));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

int maximumXorSubarray(vector<int>& nums) {
    Trie trie;
    trie.insert(0);
    int ans = 0, pre = 0;
    for(int x : nums) {
        pre ^= x;
        ans = max(ans, trie.query(pre));
        trie.insert(pre);
    }
    return ans;
}

int main() {
    int n;
    if (!(cin >> n)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << maximumXorSubarray(nums) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-m2",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b]: cur = cur.c[b]
            elif cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            else: return float('inf')
        return ans

def minimum_xor_pair(nums):
    if not nums: return 0
    trie = Trie()
    trie.insert(nums[0])
    ans = float('inf')
    for x in nums[1:]:
        ans = min(ans, trie.query(x))
        trie.insert(x)
    return ans if ans != float('inf') else 0

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if data: print(minimum_xor_pair(data[1:]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else return Integer.MAX_VALUE;
            }
            return ans;
        }
    }
    public static int minimumXorPair(int[] nums) {
        if(nums.length == 0) return 0;
        Trie trie = new Trie();
        trie.insert(nums[0]);
        int ans = Integer.MAX_VALUE;
        for(int i=1; i<nums.length; i++) {
            ans = Math.min(ans, trie.query(nums[i]));
            trie.insert(nums[i]);
        }
        return ans == Integer.MAX_VALUE ? 0 : ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(minimumXorPair(nums));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b]) {
            cur = cur->c[b];
        } else if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else return 2147483647;
    }
    return ans;
}

int minimumXorPair(int* nums, int n) {
    if (n == 0) return 0;
    Trie* root = newTrie();
    insert(root, nums[0]);
    int ans = 2147483647;
    for (int i = 1; i < n; i++) {
        int q = query(root, nums[i]);
        if (q < ans) ans = q;
        insert(root, nums[i]);
    }
    return ans == 2147483647 ? 0 : ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", minimumXorPair(nums, n));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b]) cur = cur->c[b];
            else if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else return 2147483647;
        }
        return ans;
    }
};

int minimumXorPair(vector<int>& nums) {
    if (nums.empty()) return 0;
    Trie trie;
    trie.insert(nums[0]);
    int ans = 2147483647;
    for (size_t i = 1; i < nums.size(); i++) {
        ans = min(ans, trie.query(nums[i]));
        trie.insert(nums[i]);
    }
    return ans == 2147483647 ? 0 : ans;
}

int main() {
    int n;
    if (!(cin >> n)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << minimumXorPair(nums) << "\\n";
    return 0;
}`
        }
    }
,
    {
        id: "max-xor-trie-m3",
        solution: {
            python: `import sys

class Trie:
    def __init__(self):
        self.c = [None, None]
        self.cnt = 0
    def insert(self, n):
        cur = self
        cur.cnt += 1
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
            cur.cnt += 1
    def query(self, n, k):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            if not cur: break
            b = (n >> i) & 1
            kb = (k >> i) & 1
            if kb:
                if cur.c[b]: ans += cur.c[b].cnt
                cur = cur.c[b ^ 1]
            else:
                cur = cur.c[b]
        return ans

def count_pairs_less_than_k(nums, k):
    trie = Trie()
    ans = 0
    for x in nums:
        ans += trie.query(x, k)
        trie.insert(x)
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if len(data) >= 2:
        print(count_pairs_less_than_k(data[2:], data[1]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        int cnt = 0;
        void insert(int n) {
            Trie cur = this;
            cur.cnt++;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
                cur.cnt++;
            }
        }
        int query(int n, int k) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                if(cur == null) break;
                int b = (n>>i)&1, kb = (k>>i)&1;
                if(kb == 1) {
                    if(cur.c[b] != null) ans += cur.c[b].cnt;
                    cur = cur.c[b^1];
                } else {
                    cur = cur.c[b];
                }
            }
            return ans;
        }
    }
    public static long countPairsLessThanK(int[] nums, int k) {
        Trie trie = new Trie();
        long ans = 0;
        for(int x : nums) {
            ans += trie.query(x, k);
            trie.insert(x);
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(countPairsLessThanK(nums, k));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
    int cnt;
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    node->cnt = 0;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    cur->cnt++;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
        cur->cnt++;
    }
}

long long query(Trie* root, int n, int k) {
    Trie* cur = root;
    long long ans = 0;
    for (int i = 30; i >= 0; i--) {
        if (!cur) break;
        int b = (n >> i) & 1, kb = (k >> i) & 1;
        if (kb) {
            if (cur->c[b]) ans += cur->c[b]->cnt;
            cur = cur->c[b ^ 1];
        } else {
            cur = cur->c[b];
        }
    }
    return ans;
}

long long countPairsLessThanK(int* nums, int n, int k) {
    Trie* root = newTrie();
    long long ans = 0;
    for (int i = 0; i < n; i++) {
        ans += query(root, nums[i], k);
        insert(root, nums[i]);
    }
    return ans;
}

int main() {
    int n, k;
    if (scanf("%d %d", &n, &k) != 2) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%lld\\n", countPairsLessThanK(nums, n, k));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    int cnt = 0;
    void insert(int n) {
        Trie* cur = this;
        cur->cnt++;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
            cur->cnt++;
        }
    }
    long long query(int n, int k) {
        Trie* cur = this;
        long long ans = 0;
        for (int i = 30; i >= 0; i--) {
            if (!cur) break;
            int b = (n >> i) & 1, kb = (k >> i) & 1;
            if (kb) {
                if (cur->c[b]) ans += cur->c[b]->cnt;
                cur = cur->c[b ^ 1];
            } else {
                cur = cur->c[b];
            }
        }
        return ans;
    }
};

long long countPairsLessThanK(vector<int>& nums, int k) {
    Trie trie;
    long long ans = 0;
    for (int x : nums) {
        ans += trie.query(x, k);
        trie.insert(x);
    }
    return ans;
}

int main() {
    int n, k;
    if (!(cin >> n >> k)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << countPairsLessThanK(nums, k) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-m4",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_xor_index_difference(nums, k):
    if len(nums) <= k: return 0
    trie = Trie()
    ans = 0
    for i in range(k, len(nums)):
        trie.insert(nums[i - k])
        ans = max(ans, trie.query(nums[i]))
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if len(data) >= 2:
        print(maximum_xor_index_difference(data[2:], data[1]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    public static int maximumXorIndexDifference(int[] nums, int k) {
        if(nums.length <= k) return 0;
        Trie trie = new Trie();
        int ans = 0;
        for(int i=k; i<nums.length; i++) {
            trie.insert(nums[i-k]);
            ans = Math.max(ans, trie.query(nums[i]));
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(maximumXorIndexDifference(nums, k));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

int maximumXorIndexDifference(int* nums, int n, int k) {
    if (n <= k) return 0;
    Trie* root = newTrie();
    int ans = 0;
    for (int i = k; i < n; i++) {
        insert(root, nums[i - k]);
        int q = query(root, nums[i]);
        if (q > ans) ans = q;
    }
    return ans;
}

int main() {
    int n, k;
    if (scanf("%d %d", &n, &k) != 2) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", maximumXorIndexDifference(nums, n, k));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

int maximumXorIndexDifference(vector<int>& nums, int k) {
    if (nums.size() <= k) return 0;
    Trie trie;
    int ans = 0;
    for (size_t i = k; i < nums.size(); i++) {
        trie.insert(nums[i - k]);
        ans = max(ans, trie.query(nums[i]));
    }
    return ans;
}

int main() {
    int n, k;
    if (!(cin >> n >> k)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << maximumXorIndexDifference(nums, k) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-m5",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_xor_matrix(matrix, r, c):
    trie = Trie()
    ans = 0
    empty = True
    for row in matrix:
        for x in row:
            if not empty: ans = max(ans, trie.query(x))
            trie.insert(x)
            empty = False
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if not data: return
    r, c = data[0], data[1]
    matrix = []
    idx = 2
    for i in range(r):
        matrix.append(data[idx:idx+c])
        idx += c
    print(maximum_xor_matrix(matrix, r, c))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    public static int maximumXorMatrix(int[][] matrix, int r, int c) {
        Trie trie = new Trie();
        int ans = 0;
        boolean empty = true;
        for(int i=0; i<r; i++) {
            for(int j=0; j<c; j++) {
                if(!empty) ans = Math.max(ans, trie.query(matrix[i][j]));
                trie.insert(matrix[i][j]);
                empty = false;
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int r = sc.nextInt();
        int c = sc.nextInt();
        int[][] matrix = new int[r][c];
        for(int i=0; i<r; i++) {
            for(int j=0; j<c; j++) matrix[i][j] = sc.nextInt();
        }
        System.out.println(maximumXorMatrix(matrix, r, c));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

int maximumXorMatrix(int** matrix, int r, int c) {
    Trie* root = newTrie();
    int ans = 0;
    bool empty = true;
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            if (!empty) {
                int q = query(root, matrix[i][j]);
                if (q > ans) ans = q;
            }
            insert(root, matrix[i][j]);
            empty = false;
        }
    }
    return ans;
}

int main() {
    int r, c;
    if (scanf("%d %d", &r, &c) != 2) return 0;
    int** matrix = (int**)malloc(r * sizeof(int*));
    for (int i = 0; i < r; i++) {
        matrix[i] = (int*)malloc(c * sizeof(int));
        for (int j = 0; j < c; j++) scanf("%d", &matrix[i][j]);
    }
    printf("%d\\n", maximumXorMatrix(matrix, r, c));
    for (int i = 0; i < r; i++) free(matrix[i]);
    free(matrix);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

int maximumXorMatrix(vector<vector<int>>& matrix) {
    Trie trie;
    int ans = 0;
    bool empty = true;
    for (auto& row : matrix) {
        for (int x : row) {
            if (!empty) ans = max(ans, trie.query(x));
            trie.insert(x);
            empty = false;
        }
    }
    return ans;
}

int main() {
    int r, c;
    if (!(cin >> r >> c)) return 0;
    vector<vector<int>> matrix(r, vector<int>(c));
    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) cin >> matrix[i][j];
    }
    cout << maximumXorMatrix(matrix) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-h1",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return -1
        return ans

def maximum_xor_queries(nums, queries):
    nums.sort()
    q = sorted([(m, x, i) for i, (x, m) in enumerate(queries)])
    ans = [-1] * len(queries)
    trie = Trie()
    j = 0
    for m, x, i in q:
        while j < len(nums) and nums[j] <= m:
            trie.insert(nums[j])
            j += 1
        if j > 0: ans[i] = trie.query(x)
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if not data: return
    n, q = data[0], data[1]
    nums = data[2:2+n]
    queries = []
    idx = 2 + n
    for i in range(q):
        queries.append([data[idx], data[idx+1]])
        idx += 2
    ans = maximum_xor_queries(nums, queries)
    print(" ".join(map(str, ans)))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return -1;
            }
            return ans;
        }
    }
    public static int[] maximumXorQueries(int[] nums, int[][] queries) {
        Arrays.sort(nums);
        int q = queries.length;
        int[][] qs = new int[q][3];
        for(int i=0; i<q; i++) {
            qs[i][0] = queries[i][1]; // m
            qs[i][1] = queries[i][0]; // x
            qs[i][2] = i;
        }
        Arrays.sort(qs, Comparator.comparingInt(a -> a[0]));
        int[] ans = new int[q];
        Arrays.fill(ans, -1);
        Trie trie = new Trie();
        int j = 0;
        for(int i=0; i<q; i++) {
            while(j < nums.length && nums[j] <= qs[i][0]) {
                trie.insert(nums[j++]);
            }
            if(j > 0) ans[qs[i][2]] = trie.query(qs[i][1]);
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int q = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        int[][] queries = new int[q][2];
        for(int i=0; i<q; i++) {
            queries[i][0] = sc.nextInt();
            queries[i][1] = sc.nextInt();
        }
        int[] ans = maximumXorQueries(nums, queries);
        for(int i=0; i<ans.length; i++) {
            System.out.print(ans[i] + (i==ans.length-1 ? "" : " "));
        }
        System.out.println();
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return -1;
    }
    return ans;
}

int cmpInt(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}
int cmpQuery(const void* a, const void* b) {
    return (((int**)a)[0][1] - ((int**)b)[0][1]);
}

int* maximumXorQueries(int* nums, int n, int** queries, int q) {
    qsort(nums, n, sizeof(int), cmpInt);
    int*** qs = (int***)malloc(q * sizeof(int**));
    for (int i = 0; i < q; i++) {
        qs[i] = (int**)malloc(2 * sizeof(int*));
        qs[i][0] = queries[i];
        int* idx = (int*)malloc(sizeof(int));
        *idx = i;
        qs[i][1] = idx;
    }
    qsort(qs, q, sizeof(int**), cmpQuery);
    int* ans = (int*)malloc(q * sizeof(int));
    for(int i=0; i<q; i++) ans[i] = -1;
    Trie* root = newTrie();
    int j = 0;
    for(int i=0; i<q; i++) {
        int m = qs[i][0][1];
        int x = qs[i][0][0];
        int idx = *(qs[i][1]);
        while(j < n && nums[j] <= m) {
            insert(root, nums[j++]);
        }
        if(j > 0) ans[idx] = query(root, x);
    }
    for(int i=0; i<q; i++) { free(qs[i][1]); free(qs[i]); }
    free(qs);
    return ans;
}

int main() {
    int n, q;
    if (scanf("%d %d", &n, &q) != 2) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    int** queries = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        scanf("%d %d", &queries[i][0], &queries[i][1]);
    }
    int* ans = maximumXorQueries(nums, n, queries, q);
    for (int i = 0; i < q; i++) {
        printf("%d%s", ans[i], i == q - 1 ? "" : " ");
    }
    printf("\\n");
    free(nums); free(ans);
    for (int i = 0; i < q; i++) free(queries[i]); free(queries);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return -1;
        }
        return ans;
    }
};

vector<int> maximumXorQueries(vector<int>& nums, vector<vector<int>>& queries) {
    sort(nums.begin(), nums.end());
    int q = queries.size();
    vector<vector<int>> qs(q);
    for(int i=0; i<q; i++) qs[i] = {queries[i][1], queries[i][0], i};
    sort(qs.begin(), qs.end());
    vector<int> ans(q, -1);
    Trie trie;
    int j = 0;
    for(int i=0; i<q; i++) {
        while(j < (int)nums.size() && nums[j] <= qs[i][0]) trie.insert(nums[j++]);
        if(j > 0) ans[qs[i][2]] = trie.query(qs[i][1]);
    }
    return ans;
}

int main() {
    int n, q;
    if (!(cin >> n >> q)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    vector<vector<int>> queries(q, vector<int>(2));
    for (int i = 0; i < q; i++) cin >> queries[i][0] >> queries[i][1];
    vector<int> ans = maximumXorQueries(nums, queries);
    for (size_t i = 0; i < ans.size(); i++) {
        cout << ans[i] << (i == ans.size() - 1 ? "" : " ");
    }
    cout << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-h2",
        solution: {
            python: `import sys
sys.setrecursionlimit(100000)

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_xor_tree_path(n, edges):
    from collections import defaultdict
    adj = defaultdict(list)
    for u, v, w in edges:
        adj[u].append((v, w))
        adj[v].append((u, w))
    pathXor = [0] * n
    def dfs(u, p, px):
        pathXor[u] = px
        for v, w in adj[u]:
            if v != p: dfs(v, u, px ^ w)
    dfs(0, -1, 0)
    trie = Trie()
    trie.insert(pathXor[0])
    ans = 0
    for x in pathXor[1:]:
        ans = max(ans, trie.query(x))
        trie.insert(x)
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if not data: return
    n = data[0]
    edges = []
    idx = 1
    for _ in range(n - 1):
        edges.append([data[idx], data[idx+1], data[idx+2]])
        idx += 3
    print(maximum_xor_tree_path(n, edges))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    static class Edge {
        int v, w;
        Edge(int v, int w) { this.v=v; this.w=w; }
    }
    public static int maximumXorTreePath(int n, int[][] edges) {
        List<List<Edge>> adj = new ArrayList<>();
        for(int i=0; i<n; i++) adj.add(new ArrayList<>());
        for(int[] e : edges) {
            adj.get(e[0]).add(new Edge(e[1], e[2]));
            adj.get(e[1]).add(new Edge(e[0], e[2]));
        }
        int[] pathXor = new int[n];
        boolean[] vis = new boolean[n];
        Queue<Integer> q = new LinkedList<>();
        q.add(0); vis[0] = true;
        while(!q.isEmpty()) {
            int u = q.poll();
            for(Edge e : adj.get(u)) {
                if(!vis[e.v]) {
                    vis[e.v] = true;
                    pathXor[e.v] = pathXor[u] ^ e.w;
                    q.add(e.v);
                }
            }
        }
        Trie trie = new Trie();
        trie.insert(pathXor[0]);
        int ans = 0;
        for(int i=1; i<n; i++) {
            ans = Math.max(ans, trie.query(pathXor[i]));
            trie.insert(pathXor[i]);
        }
        return ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int[][] edges = new int[n-1][3];
        for(int i=0; i<n-1; i++) {
            edges[i][0] = sc.nextInt();
            edges[i][1] = sc.nextInt();
            edges[i][2] = sc.nextInt();
        }
        System.out.println(maximumXorTreePath(n, edges));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

typedef struct Edge {
    int v, w;
    struct Edge* next;
} Edge;

void addEdge(Edge** adj, int u, int v, int w) {
    Edge* e = (Edge*)malloc(sizeof(Edge));
    e->v = v; e->w = w; e->next = adj[u];
    adj[u] = e;
}

int maximumXorTreePath(int n, int** edges, int edges_len) {
    Edge** adj = (Edge**)calloc(n, sizeof(Edge*));
    for (int i = 0; i < edges_len; i++) {
        addEdge(adj, edges[i][0], edges[i][1], edges[i][2]);
        addEdge(adj, edges[i][1], edges[i][0], edges[i][2]);
    }
    int* pathXor = (int*)calloc(n, sizeof(int));
    int* q = (int*)malloc(n * sizeof(int));
    int head = 0, tail = 0;
    int* vis = (int*)calloc(n, sizeof(int));
    q[tail++] = 0; vis[0] = 1;
    while(head < tail) {
        int u = q[head++];
        for(Edge* e = adj[u]; e; e = e->next) {
            if(!vis[e->v]) {
                vis[e->v] = 1;
                pathXor[e->v] = pathXor[u] ^ e->w;
                q[tail++] = e->v;
            }
        }
    }
    Trie* root = newTrie();
    insert(root, pathXor[0]);
    int ans = 0;
    for (int i = 1; i < n; i++) {
        int qval = query(root, pathXor[i]);
        if (qval > ans) ans = qval;
        insert(root, pathXor[i]);
    }
    free(q); free(vis); free(pathXor);
    for(int i=0; i<n; i++) {
        Edge* curr = adj[i];
        while(curr) { Edge* t = curr; curr = curr->next; free(t); }
    }
    free(adj);
    return ans;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int** edges = (int**)malloc((n - 1) * sizeof(int*));
    for (int i = 0; i < n - 1; i++) {
        edges[i] = (int*)malloc(3 * sizeof(int));
        scanf("%d %d %d", &edges[i][0], &edges[i][1], &edges[i][2]);
    }
    printf("%d\\n", maximumXorTreePath(n, edges, n - 1));
    for (int i = 0; i < n - 1; i++) free(edges[i]);
    free(edges);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
#include <queue>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

int maximumXorTreePath(int n, vector<vector<int>>& edges) {
    vector<vector<pair<int,int>>> adj(n);
    for(auto& e : edges) {
        adj[e[0]].push_back({e[1], e[2]});
        adj[e[1]].push_back({e[0], e[2]});
    }
    vector<int> pathXor(n, 0);
    vector<bool> vis(n, false);
    queue<int> q;
    q.push(0); vis[0] = true;
    while(!q.empty()) {
        int u = q.front(); q.pop();
        for(auto& edge : adj[u]) {
            int v = edge.first, w = edge.second;
            if(!vis[v]) {
                vis[v] = true;
                pathXor[v] = pathXor[u] ^ w;
                q.push(v);
            }
        }
    }
    Trie trie;
    trie.insert(pathXor[0]);
    int ans = 0;
    for (int i = 1; i < n; i++) {
        ans = max(ans, trie.query(pathXor[i]));
        trie.insert(pathXor[i]);
    }
    return ans;
}

int main() {
    int n;
    if (!(cin >> n)) return 0;
    vector<vector<int>> edges(n - 1, vector<int>(3));
    for (int i = 0; i < n - 1; i++) cin >> edges[i][0] >> edges[i][1] >> edges[i][2];
    cout << maximumXorTreePath(n, edges) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-h3",
        solution: {
            python: `import sys

class Trie:
    def __init__(self):
        self.c = [None, None]
        self.cnt = 0
    def insert(self, n):
        cur = self
        cur.cnt += 1
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
            cur.cnt += 1

def kth_maximum_xor_pair(nums, k):
    def countGreaterOrEqual(mid):
        trie = Trie()
        ans = 0
        for x in nums:
            cur = trie
            for i in range(30, -1, -1):
                if not cur: break
                b = (x >> i) & 1
                mb = (mid >> i) & 1
                if mb:
                    cur = cur.c[b ^ 1]
                else:
                    if cur.c[b ^ 1]: ans += cur.c[b ^ 1].cnt
                    cur = cur.c[b]
            if cur: ans += cur.cnt
            trie.insert(x)
        return ans
    low, high, ans = 0, 2147483647, 0
    while low <= high:
        mid = low + (high - low) // 2
        if countGreaterOrEqual(mid) >= k:
            ans = mid
            low = mid + 1
        else:
            high = mid - 1
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if not data: return
    print(kth_maximum_xor_pair(data[2:], data[1]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        int cnt = 0;
        void insert(int n) {
            Trie cur = this;
            cur.cnt++;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
                cur.cnt++;
            }
        }
    }
    public static int kthMaximumXorPair(int[] nums, int k) {
        long low = 0, high = 2147483647, ans = 0;
        while(low <= high) {
            long mid = low + (high - low) / 2;
            Trie trie = new Trie();
            long count = 0;
            for(int x : nums) {
                Trie cur = trie;
                for(int i=30; i>=0; i--) {
                    if(cur == null) break;
                    int b = (x>>i)&1, mb = (int)((mid>>i)&1);
                    if(mb == 1) {
                        cur = cur.c[b^1];
                    } else {
                        if(cur.c[b^1] != null) count += cur.c[b^1].cnt;
                        cur = cur.c[b];
                    }
                }
                if(cur != null) count += cur.cnt;
                trie.insert(x);
            }
            if(count >= k) {
                ans = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return (int)ans;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int k = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(kthMaximumXorPair(nums, k));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
    int cnt;
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    node->cnt = 0;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    cur->cnt++;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
        cur->cnt++;
    }
}

void freeTrie(Trie* root) {
    if (!root) return;
    freeTrie(root->c[0]);
    freeTrie(root->c[1]);
    free(root);
}

int kthMaximumXorPair(int* nums, int n, int k) {
    long long low = 0, high = 2147483647, ans = 0;
    while(low <= high) {
        long long mid = low + (high - low) / 2;
        Trie* root = newTrie();
        long long count = 0;
        for(int j=0; j<n; j++) {
            Trie* cur = root;
            for(int i=30; i>=0; i--) {
                if(!cur) break;
                int b = (nums[j]>>i)&1, mb = (mid>>i)&1;
                if(mb) {
                    cur = cur->c[b^1];
                } else {
                    if(cur->c[b^1]) count += cur->c[b^1]->cnt;
                    cur = cur->c[b];
                }
            }
            if(cur) count += cur->cnt;
            insert(root, nums[j]);
        }
        freeTrie(root);
        if(count >= k) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

int main() {
    int n, k;
    if (scanf("%d %d", &n, &k) != 2) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%d\\n", kthMaximumXorPair(nums, n, k));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    int cnt = 0;
    void insert(int n) {
        Trie* cur = this;
        cur->cnt++;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
            cur->cnt++;
        }
    }
    ~Trie() {
        if(c[0]) delete c[0];
        if(c[1]) delete c[1];
    }
};

int kthMaximumXorPair(vector<int>& nums, int k) {
    long long low = 0, high = 2147483647, ans = 0;
    while(low <= high) {
        long long mid = low + (high - low) / 2;
        Trie trie;
        long long count = 0;
        for(int x : nums) {
            Trie* cur = &trie;
            for(int i=30; i>=0; i--) {
                if(!cur) break;
                int b = (x>>i)&1, mb = (mid>>i)&1;
                if(mb) {
                    cur = cur->c[b^1];
                } else {
                    if(cur->c[b^1]) count += cur->c[b^1]->cnt;
                    cur = cur->c[b];
                }
            }
            if(cur) count += cur->cnt;
            trie.insert(x);
        }
        if(count >= k) {
            ans = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return ans;
}

int main() {
    int n, k;
    if (!(cin >> n >> k)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << kthMaximumXorPair(nums, k) << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-h4",
        solution: {
            python: `import sys

class Trie:
    def __init__(self):
        self.c = [None, None]
        self.cnt = 0
    def insert(self, n, v):
        cur = self
        cur.cnt += v
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
            cur.cnt += v
    def query(self, n):
        if self.cnt == 0: return -1
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1] and cur.c[b ^ 1].cnt > 0:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            else: cur = cur.c[b]
        return ans

def maximum_xor_dynamic(queries):
    trie = Trie()
    ans = []
    for t, x in queries:
        if t == 1: trie.insert(x, 1)
        elif t == 2: trie.insert(x, -1)
        else: ans.append(trie.query(x))
    return ans

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if not data: return
    q = data[0]
    queries = []
    idx = 1
    for _ in range(q):
        queries.append([data[idx], data[idx+1]])
        idx += 2
    ans = maximum_xor_dynamic(queries)
    print(" ".join(map(str, ans)))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        int cnt = 0;
        void insert(int n, int v) {
            Trie cur = this;
            cur.cnt += v;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
                cur.cnt += v;
            }
        }
        int query(int n) {
            if(this.cnt == 0) return -1;
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null && cur.c[b^1].cnt > 0) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else {
                    cur = cur.c[b];
                }
            }
            return ans;
        }
    }
    public static int[] maximumXorDynamic(int[][] queries) {
        Trie trie = new Trie();
        List<Integer> ans = new ArrayList<>();
        for(int[] q : queries) {
            if(q[0] == 1) trie.insert(q[1], 1);
            else if(q[0] == 2) trie.insert(q[1], -1);
            else ans.add(trie.query(q[1]));
        }
        int[] res = new int[ans.size()];
        for(int i=0; i<ans.size(); i++) res[i] = ans.get(i);
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int q = sc.nextInt();
        int[][] queries = new int[q][2];
        for(int i=0; i<q; i++) {
            queries[i][0] = sc.nextInt();
            queries[i][1] = sc.nextInt();
        }
        int[] ans = maximumXorDynamic(queries);
        for(int i=0; i<ans.length; i++) {
            System.out.print(ans[i] + (i==ans.length-1 ? "" : " "));
        }
        System.out.println();
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
    int cnt;
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    node->cnt = 0;
    return node;
}

void insert(Trie* root, int n, int v) {
    Trie* cur = root;
    cur->cnt += v;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
        cur->cnt += v;
    }
}

int query(Trie* root, int n) {
    if(root->cnt == 0) return -1;
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1] && cur->c[b ^ 1]->cnt > 0) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else {
            cur = cur->c[b];
        }
    }
    return ans;
}

int* maximumXorDynamic(int** queries, int q, int* ret_size) {
    Trie* root = newTrie();
    int* ans = (int*)malloc(q * sizeof(int));
    int sz = 0;
    for (int i = 0; i < q; i++) {
        if(queries[i][0] == 1) insert(root, queries[i][1], 1);
        else if(queries[i][0] == 2) insert(root, queries[i][1], -1);
        else ans[sz++] = query(root, queries[i][1]);
    }
    *ret_size = sz;
    return ans;
}

int main() {
    int q;
    if (scanf("%d", &q) != 1) return 0;
    int** queries = (int**)malloc(q * sizeof(int*));
    for (int i = 0; i < q; i++) {
        queries[i] = (int*)malloc(2 * sizeof(int));
        scanf("%d %d", &queries[i][0], &queries[i][1]);
    }
    int ret_size = 0;
    int* ans = maximumXorDynamic(queries, q, &ret_size);
    for (int i = 0; i < ret_size; i++) {
        printf("%d%s", ans[i], i == ret_size - 1 ? "" : " ");
    }
    printf("\\n");
    free(ans);
    for (int i = 0; i < q; i++) free(queries[i]); free(queries);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    int cnt = 0;
    void insert(int n, int v) {
        Trie* cur = this;
        cur->cnt += v;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
            cur->cnt += v;
        }
    }
    int query(int n) {
        if(cnt == 0) return -1;
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1] && cur->c[b ^ 1]->cnt > 0) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else {
                cur = cur->c[b];
            }
        }
        return ans;
    }
};

vector<int> maximumXorDynamic(vector<vector<int>>& queries) {
    Trie trie;
    vector<int> ans;
    for (auto& q : queries) {
        if(q[0] == 1) trie.insert(q[1], 1);
        else if(q[0] == 2) trie.insert(q[1], -1);
        else ans.push_back(trie.query(q[1]));
    }
    return ans;
}

int main() {
    int q;
    if (!(cin >> q)) return 0;
    vector<vector<int>> queries(q, vector<int>(2));
    for (int i = 0; i < q; i++) cin >> queries[i][0] >> queries[i][1];
    vector<int> ans = maximumXorDynamic(queries);
    for (size_t i = 0; i < ans.size(); i++) {
        cout << ans[i] << (i == ans.size() - 1 ? "" : " ");
    }
    cout << "\\n";
    return 0;
}`
        }
    },
    {
        id: "max-xor-trie-h5",
        solution: {
            python: `import sys

class Trie:
    def __init__(self): self.c = [None, None]
    def insert(self, n):
        cur = self
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if not cur.c[b]: cur.c[b] = Trie()
            cur = cur.c[b]
    def query(self, n):
        cur, ans = self, 0
        for i in range(30, -1, -1):
            b = (n >> i) & 1
            if cur.c[b ^ 1]:
                ans |= (1 << i)
                cur = cur.c[b ^ 1]
            elif cur.c[b]: cur = cur.c[b]
            else: return 0
        return ans

def maximum_sum_two_subarrays(nums):
    n = len(nums)
    leftMax = [0] * n
    trie = Trie()
    trie.insert(0)
    ans, pre = 0, 0
    for i in range(n):
        pre ^= nums[i]
        ans = max(ans, trie.query(pre))
        leftMax[i] = ans
        trie.insert(pre)
    rightMax = [0] * n
    trie2 = Trie()
    trie2.insert(0)
    ans, pre = 0, 0
    for i in range(n-1, -1, -1):
        pre ^= nums[i]
        ans = max(ans, trie2.query(pre))
        rightMax[i] = ans
        trie2.insert(pre)
    res = 0
    for i in range(n - 1):
        res = max(res, leftMax[i] + rightMax[i+1])
    return res

def solve():
    data = list(map(int, sys.stdin.read().split()))
    if data: print(maximum_sum_two_subarrays(data[1:]))

if __name__ == "__main__": solve()`,
            java: `import java.util.*;

public class Solution {
    static class Trie {
        Trie[] c = new Trie[2];
        void insert(int n) {
            Trie cur = this;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b]==null) cur.c[b] = new Trie();
                cur = cur.c[b];
            }
        }
        int query(int n) {
            Trie cur = this;
            int ans = 0;
            for(int i=30; i>=0; i--) {
                int b = (n>>i)&1;
                if(cur.c[b^1]!=null) {
                    ans |= (1<<i);
                    cur = cur.c[b^1];
                } else if(cur.c[b]!=null) {
                    cur = cur.c[b];
                } else return 0;
            }
            return ans;
        }
    }
    public static long maximumSumTwoSubarrays(int[] nums) {
        int n = nums.length;
        long[] leftMax = new long[n];
        Trie trie = new Trie();
        trie.insert(0);
        long ans = 0, pre = 0;
        for(int i=0; i<n; i++) {
            pre ^= nums[i];
            ans = Math.max(ans, trie.query((int)pre));
            leftMax[i] = ans;
            trie.insert((int)pre);
        }
        long[] rightMax = new long[n];
        Trie trie2 = new Trie();
        trie2.insert(0);
        ans = 0; pre = 0;
        for(int i=n-1; i>=0; i--) {
            pre ^= nums[i];
            ans = Math.max(ans, trie2.query((int)pre));
            rightMax[i] = ans;
            trie2.insert((int)pre);
        }
        long res = 0;
        for(int i=0; i<n-1; i++) {
            res = Math.max(res, leftMax[i] + rightMax[i+1]);
        }
        return res;
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        if(!sc.hasNextInt()) return;
        int n = sc.nextInt();
        int[] nums = new int[n];
        for(int i=0; i<n; i++) nums[i] = sc.nextInt();
        System.out.println(maximumSumTwoSubarrays(nums));
    }
}`,
            c: `#include <stdio.h>
#include <stdlib.h>

typedef struct Trie {
    struct Trie* c[2];
} Trie;

Trie* newTrie() {
    Trie* node = (Trie*)malloc(sizeof(Trie));
    node->c[0] = node->c[1] = NULL;
    return node;
}

void insert(Trie* root, int n) {
    Trie* cur = root;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (!cur->c[b]) cur->c[b] = newTrie();
        cur = cur->c[b];
    }
}

int query(Trie* root, int n) {
    Trie* cur = root;
    int ans = 0;
    for (int i = 30; i >= 0; i--) {
        int b = (n >> i) & 1;
        if (cur->c[b ^ 1]) {
            ans |= (1 << i);
            cur = cur->c[b ^ 1];
        } else if (cur->c[b]) {
            cur = cur->c[b];
        } else return 0;
    }
    return ans;
}

long long maximumSumTwoSubarrays(int* nums, int n) {
    long long* leftMax = (long long*)malloc(n * sizeof(long long));
    Trie* root1 = newTrie();
    insert(root1, 0);
    long long ans = 0; int pre = 0;
    for (int i = 0; i < n; i++) {
        pre ^= nums[i];
        int q = query(root1, pre);
        if (q > ans) ans = q;
        leftMax[i] = ans;
        insert(root1, pre);
    }
    long long* rightMax = (long long*)malloc(n * sizeof(long long));
    Trie* root2 = newTrie();
    insert(root2, 0);
    ans = 0; pre = 0;
    for (int i = n - 1; i >= 0; i--) {
        pre ^= nums[i];
        int q = query(root2, pre);
        if (q > ans) ans = q;
        rightMax[i] = ans;
        insert(root2, pre);
    }
    long long res = 0;
    for (int i = 0; i < n - 1; i++) {
        if(leftMax[i] + rightMax[i+1] > res) res = leftMax[i] + rightMax[i+1];
    }
    free(leftMax); free(rightMax);
    return res;
}

int main() {
    int n;
    if (scanf("%d", &n) != 1) return 0;
    int* nums = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) scanf("%d", &nums[i]);
    printf("%lld\\n", maximumSumTwoSubarrays(nums, n));
    free(nums);
    return 0;
}`,
            cpp: `#include <iostream>
#include <vector>
using namespace std;

struct Trie {
    Trie* c[2] = {nullptr, nullptr};
    void insert(int n) {
        Trie* cur = this;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (!cur->c[b]) cur->c[b] = new Trie();
            cur = cur->c[b];
        }
    }
    int query(int n) {
        Trie* cur = this;
        int ans = 0;
        for (int i = 30; i >= 0; i--) {
            int b = (n >> i) & 1;
            if (cur->c[b ^ 1]) {
                ans |= (1 << i);
                cur = cur->c[b ^ 1];
            } else if (cur->c[b]) cur = cur->c[b];
            else return 0;
        }
        return ans;
    }
};

long long maximumSumTwoSubarrays(vector<int>& nums) {
    int n = nums.size();
    vector<long long> leftMax(n);
    Trie trie;
    trie.insert(0);
    long long ans = 0; int pre = 0;
    for(int i=0; i<n; i++) {
        pre ^= nums[i];
        ans = max(ans, (long long)trie.query(pre));
        leftMax[i] = ans;
        trie.insert(pre);
    }
    vector<long long> rightMax(n);
    Trie trie2;
    trie2.insert(0);
    ans = 0; pre = 0;
    for(int i=n-1; i>=0; i--) {
        pre ^= nums[i];
        ans = max(ans, (long long)trie2.query(pre));
        rightMax[i] = ans;
        trie2.insert(pre);
    }
    long long res = 0;
    for(int i=0; i<n-1; i++) {
        res = max(res, leftMax[i] + rightMax[i+1]);
    }
    return res;
}

int main() {
    int n;
    if (!(cin >> n)) return 0;
    vector<int> nums(n);
    for (int i = 0; i < n; i++) cin >> nums[i];
    cout << maximumSumTwoSubarrays(nums) << "\\n";
    return 0;
}`
        }
    }
];
export default solutions;