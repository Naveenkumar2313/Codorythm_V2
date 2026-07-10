export const countingSortSolutions = [
  // --- EASY SOLUTIONS ---
  {
    id: 'cs-e1',
    solutions: {
      python: `def counting_sort(nums):
    if not nums: return []
    max_val = max(nums)
    count = [0] * (max_val + 1)
    for num in nums: count[num] += 1
    idx = 0
    for i in range(max_val + 1):
        while count[i] > 0:
            nums[idx] = i
            count[i] -= 1
            idx += 1
    return nums`,
      java: `    public static int[] countingSort(int[] nums) {
        if (nums.length == 0) return nums;
        int maxVal = nums[0];
        for (int x : nums) if (x > maxVal) maxVal = x;
        int[] count = new int[maxVal + 1];
        for (int x : nums) count[x]++;
        int idx = 0;
        for (int i = 0; i <= maxVal; i++) {
            while (count[i]-- > 0) nums[idx++] = i;
        }
        return nums;
    }`,
      c: `void countingSort(int* nums, int n) {
    if (n == 0) return;
    int maxVal = nums[0];
    for (int i = 1; i < n; i++) if (nums[i] > maxVal) maxVal = nums[i];
    int* count = (int*)calloc(maxVal + 1, sizeof(int));
    for (int i = 0; i < n; i++) count[nums[i]]++;
    int idx = 0;
    for (int i = 0; i <= maxVal; i++) {
        while (count[i]-- > 0) nums[idx++] = i;
    }
    free(count);
}`,
      cpp: `void countingSort(vector<int>& nums) {
    if (nums.empty()) return;
    int maxVal = nums[0];
    for (int x : nums) if (x > maxVal) maxVal = x;
    vector<int> count(maxVal + 1, 0);
    for (int x : nums) count[x]++;
    int idx = 0;
    for (int i = 0; i <= maxVal; i++) {
        while (count[i]--) nums[idx++] = i;
    }
}`
    }
  },
  {
    id: 'cs-e2',
    solutions: {
      python: `def is_anagram(s, t):
    if len(s) != len(t): return False
    count = [0] * 26
    for c in s: count[ord(c) - ord('a')] += 1
    for c in t: count[ord(c) - ord('a')] -= 1
    return all(x == 0 for x in count)`,
      java: `    public static boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) count[s.charAt(i) - 'a']++;
        for (int i = 0; i < t.length(); i++) count[t.charAt(i) - 'a']--;
        for (int x : count) if (x != 0) return false;
        return true;
    }`,
      c: `bool isAnagram(char* s, char* t) {
    int lenS = strlen(s), lenT = strlen(t);
    if (lenS != lenT) return false;
    int count[26] = {0};
    for (int i = 0; i < lenS; i++) count[s[i] - 'a']++;
    for (int i = 0; i < lenT; i++) count[t[i] - 'a']--;
    for (int i = 0; i < 26; i++) if (count[i] != 0) return false;
    return true;
}`,
      cpp: `bool isAnagram(string s, string t) {
    if (s.length() != t.length()) return false;
    vector<int> count(26, 0);
    for (char c : s) count[c - 'a']++;
    for (char c : t) count[c - 'a']--;
    for (int x : count) if (x != 0) return false;
    return true;
}`
    }
  },
  {
    id: 'cs-e3',
    solutions: {
      python: `def first_unique_char(s):
    count = [0] * 26
    for c in s: count[ord(c) - ord('a')] += 1
    for i, c in enumerate(s):
        if count[ord(c) - ord('a')] == 1:
            return i
    return -1`,
      java: `    public static int firstUniqueChar(String s) {
        int[] count = new int[26];
        for (int i = 0; i < s.length(); i++) count[s.charAt(i) - 'a']++;
        for (int i = 0; i < s.length(); i++) {
            if (count[s.charAt(i) - 'a'] == 1) return i;
        }
        return -1;
    }`,
      c: `int firstUniqueChar(char* s) {
    int count[26] = {0};
    int len = strlen(s);
    for (int i = 0; i < len; i++) count[s[i] - 'a']++;
    for (int i = 0; i < len; i++) {
        if (count[s[i] - 'a'] == 1) return i;
    }
    return -1;
}`,
      cpp: `int firstUniqueChar(string s) {
    vector<int> count(26, 0);
    for (char c : s) count[c - 'a']++;
    for (int i = 0; i < s.length(); i++) {
        if (count[s[i] - 'a'] == 1) return i;
    }
    return -1;
}`
    }
  },
  {
    id: 'cs-e4',
    solutions: {
      python: `def sort_colors(nums):
    count = [0] * 3
    for c in nums: count[c] += 1
    idx = 0
    for i in range(3):
        while count[i] > 0:
            nums[idx] = i
            count[i] -= 1
            idx += 1`,
      java: `    public static void sortColors(int[] nums) {
        int[] count = new int[3];
        for (int c : nums) count[c]++;
        int idx = 0;
        for (int i = 0; i < 3; i++) {
            while (count[i]-- > 0) nums[idx++] = i;
        }
    }`,
      c: `void sortColors(int* nums, int n) {
    int count[3] = {0};
    for (int i = 0; i < n; i++) count[nums[i]]++;
    int idx = 0;
    for (int i = 0; i < 3; i++) {
        while (count[i]-- > 0) nums[idx++] = i;
    }
}`,
      cpp: `void sortColors(vector<int>& nums) {
    vector<int> count(3, 0);
    for (int c : nums) count[c]++;
    int idx = 0;
    for (int i = 0; i < 3; i++) {
        while (count[i]--) nums[idx++] = i;
    }
}`
    }
  },
  {
    id: 'cs-e5',
    solutions: {
      python: `def relative_sort_array(arr1, arr2):
    count = [0] * 1005
    for x in arr1: count[x] += 1
    idx = 0
    for x in arr2:
        while count[x] > 0:
            arr1[idx] = x
            count[x] -= 1
            idx += 1
    for i in range(1005):
        while count[i] > 0:
            arr1[idx] = i
            count[i] -= 1
            idx += 1
    return arr1`,
      java: `    public static int[] relativeSortArray(int[] arr1, int[] arr2) {
        int[] count = new int[1005];
        for (int x : arr1) count[x]++;
        int idx = 0;
        for (int x : arr2) {
            while (count[x]-- > 0) arr1[idx++] = x;
        }
        for (int i = 0; i <= 1000; i++) {
            while (count[i]-- > 0) arr1[idx++] = i;
        }
        return arr1;
    }`,
      c: `void relativeSortArray(int* arr1, int n, int* arr2, int m) {
    int count[1005] = {0};
    for(int i = 0; i < n; i++) count[arr1[i]]++;
    int idx = 0;
    for(int i = 0; i < m; i++) {
        while(count[arr2[i]]-- > 0) arr1[idx++] = arr2[i];
    }
    for(int i = 0; i <= 1000; i++) {
        while(count[i]-- > 0) arr1[idx++] = i;
    }
}`,
      cpp: `void relativeSortArray(vector<int>& arr1, vector<int>& arr2) {
    vector<int> count(1005, 0);
    for(int x : arr1) count[x]++;
    int idx = 0;
    for(int x : arr2) {
        while(count[x]--) arr1[idx++] = x;
    }
    for(int i = 0; i <= 1000; i++) {
        while(count[i] > 0) { arr1[idx++] = i; count[i]--; }
    }
}`
    }
  },

  // --- MEDIUM SOLUTIONS ---
  {
    id: 'cs-m1',
    solutions: {
      python: `def top_k_frequent(nums, k):
    import collections
    freq = collections.Counter(nums)
    res = sorted(freq.keys(), key=lambda x: (-freq[x], x))
    return sorted(res[:k])`,
      java: `    public static int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int x : nums) freq.put(x, freq.getOrDefault(x, 0) + 1);
        List<int[]> list = new ArrayList<>();
        for (var e : freq.entrySet()) list.add(new int[]{e.getKey(), e.getValue()});
        list.sort((a, b) -> a[1] != b[1] ? b[1] - a[1] : a[0] - b[0]);
        int[] res = new int[k];
        for (int i = 0; i < k; i++) res[i] = list.get(i)[0];
        Arrays.sort(res);
        return res;
    }`,
      c: `typedef struct { int val, count; } Pair;
int cmpAsc(const void* a, const void* b) { return *(int*)a - *(int*)b; }
int cmpPair(const void* a, const void* b) {
    Pair* p1 = (Pair*)a; Pair* p2 = (Pair*)b;
    if (p1->count != p2->count) return p2->count - p1->count;
    return p1->val - p2->val;
}
void topKFrequent(int* nums, int n, int k, int* out) {
    qsort(nums, n, sizeof(int), cmpAsc);
    Pair* p = (Pair*)malloc(n * sizeof(Pair));
    int pSize = 0;
    for(int i = 0; i < n; i++) {
        if(i == 0 || nums[i] != nums[i-1]) { p[pSize].val = nums[i]; p[pSize].count = 1; pSize++; }
        else p[pSize-1].count++;
    }
    qsort(p, pSize, sizeof(Pair), cmpPair);
    for(int i = 0; i < k; i++) out[i] = p[i].val;
    qsort(out, k, sizeof(int), cmpAsc);
    free(p);
}`,
      cpp: `vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> freq;
    for (int x : nums) freq[x]++;
    vector<pair<int, int>> vec;
    for (auto& p : freq) vec.push_back(p);
    sort(vec.begin(), vec.end(), [](auto& a, auto& b) {
        return a.second != b.second ? a.second > b.second : a.first < b.first;
    });
    vector<int> res(k);
    for (int i = 0; i < k; i++) res[i] = vec[i].first;
    sort(res.begin(), res.end());
    return res;
}`
    }
  },
  {
    id: 'cs-m2',
    solutions: {
      python: `def frequency_sort(s):
    import collections
    freq = collections.Counter(s)
    chars = sorted(freq.keys(), key=lambda x: (-freq[x], x))
    return "".join(c * freq[c] for c in chars)`,
      java: `    public static String frequencySort(String s) {
        int[] count = new int[256];
        for (char c : s.toCharArray()) count[c]++;
        List<int[]> list = new ArrayList<>();
        for (int i = 0; i < 256; i++) {
            if (count[i] > 0) list.add(new int[]{count[i], i});
        }
        list.sort((a, b) -> a[0] != b[0] ? b[0] - a[0] : a[1] - b[1]);
        StringBuilder sb = new StringBuilder();
        for (int[] p : list) {
            for (int i = 0; i < p[0]; i++) sb.append((char)p[1]);
        }
        return sb.toString();
    }`,
      c: `typedef struct { int count, char_val; } Freq;
int cmpFreq(const void* a, const void* b) {
    Freq* f1 = (Freq*)a; Freq* f2 = (Freq*)b;
    if (f1->count != f2->count) return f2->count - f1->count;
    return f1->char_val - f2->char_val;
}
void frequencySort(char* s, char* out) {
    int count[256] = {0};
    int len = strlen(s);
    for(int i = 0; i < len; i++) count[s[i]]++;
    Freq arr[256];
    int size = 0;
    for(int i = 0; i < 256; i++) {
        if(count[i] > 0) { arr[size].count = count[i]; arr[size].char_val = i; size++; }
    }
    qsort(arr, size, sizeof(Freq), cmpFreq);
    int idx = 0;
    for(int i = 0; i < size; i++) {
        for(int j = 0; j < arr[i].count; j++) out[idx++] = arr[i].char_val;
    }
    out[idx] = '\\0';
}`,
      cpp: `string frequencySort(string s) {
    vector<int> count(256, 0);
    for (char c : s) count[c]++;
    vector<pair<int, char>> vec;
    for (int i = 0; i < 256; i++) {
        if (count[i] > 0) vec.push_back({count[i], (char)i});
    }
    sort(vec.begin(), vec.end(), [](auto& a, auto& b) {
        return a.first != b.first ? a.first > b.first : a.second < b.second;
    });
    string res = "";
    for (auto& p : vec) res += string(p.first, p.second);
    return res;
}`
    }
  },
  {
    id: 'cs-m3',
    solutions: {
      python: `def h_index(citations):
    n = len(citations)
    count = [0] * (n + 1)
    for c in citations:
        if c >= n: count[n] += 1
        else: count[c] += 1
    total = 0
    for i in range(n, -1, -1):
        total += count[i]
        if total >= i: return i
    return 0`,
      java: `    public static int hIndex(int[] citations) {
        int n = citations.length;
        int[] count = new int[n + 1];
        for (int c : citations) {
            if (c >= n) count[n]++;
            else count[c]++;
        }
        int total = 0;
        for (int i = n; i >= 0; i--) {
            total += count[i];
            if (total >= i) return i;
        }
        return 0;
    }`,
      c: `int hIndex(int* citations, int n) {
    int* count = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i < n; i++) {
        if (citations[i] >= n) count[n]++;
        else count[citations[i]]++;
    }
    int total = 0;
    for (int i = n; i >= 0; i--) {
        total += count[i];
        if (total >= i) { free(count); return i; }
    }
    free(count);
    return 0;
}`,
      cpp: `int hIndex(vector<int>& citations) {
    int n = citations.size();
    vector<int> count(n + 1, 0);
    for (int c : citations) {
        if (c >= n) count[n]++;
        else count[c]++;
    }
    int total = 0;
    for (int i = n; i >= 0; i--) {
        total += count[i];
        if (total >= i) return i;
    }
    return 0;
}`
    }
  },
  {
    id: 'cs-m4',
    solutions: {
      python: `def custom_sort_string(order, s):
    import collections
    count = collections.Counter(s)
    res = []
    for c in order:
        res.append(c * count[c])
        count[c] = 0
    for i in range(26):
        c = chr(i + ord('a'))
        if count[c] > 0:
            res.append(c * count[c])
    return "".join(res)`,
      java: `    public static String customSortString(String order, String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'a']++;
        StringBuilder sb = new StringBuilder();
        for (char c : order.toCharArray()) {
            while (count[c - 'a']-- > 0) sb.append(c);
        }
        for (int i = 0; i < 26; i++) {
            while (count[i]-- > 0) sb.append((char)(i + 'a'));
        }
        return sb.toString();
    }`,
      c: `void customSortString(char* order, char* s, char* out) {
    int count[26] = {0};
    int sLen = strlen(s), oLen = strlen(order);
    for (int i = 0; i < sLen; i++) count[s[i] - 'a']++;
    int idx = 0;
    for (int i = 0; i < oLen; i++) {
        char c = order[i];
        while (count[c - 'a']-- > 0) out[idx++] = c;
    }
    for (int i = 0; i < 26; i++) {
        while (count[i]-- > 0) out[idx++] = i + 'a';
    }
    out[idx] = '\\0';
}`,
      cpp: `string customSortString(string order, string s) {
    vector<int> count(26, 0);
    for (char c : s) count[c - 'a']++;
    string res = "";
    for (char c : order) {
        while (count[c - 'a']--) res += c;
    }
    for (int i = 0; i < 26; i++) {
        while (count[i]-- > 0) res += (i + 'a');
    }
    return res;
}`
    }
  },
  {
    id: 'cs-m5',
    solutions: {
      python: `def min_deletions(s):
    import collections
    count = collections.Counter(s)
    freqs = sorted(count.values(), reverse=True)
    deletions = 0
    max_allowed = freqs[0]
    for f in freqs:
        if f > max_allowed:
            deletions += f - max_allowed
            f = max_allowed
        max_allowed = max(0, f - 1)
    return deletions`,
      java: `    public static int minDeletions(String s) {
        int[] count = new int[26];
        for (char c : s.toCharArray()) count[c - 'a']++;
        Arrays.sort(count);
        int deletions = 0;
        int maxAllowed = count[25];
        for (int i = 25; i >= 0 && count[i] > 0; i--) {
            if (count[i] > maxAllowed) {
                deletions += count[i] - maxAllowed;
                count[i] = maxAllowed;
            }
            maxAllowed = Math.max(0, count[i] - 1);
        }
        return deletions;
    }`,
      c: `int cmpDesc(const void* a, const void* b) { return *(int*)b - *(int*)a; }
int minDeletions(char* s) {
    int count[26] = {0};
    int len = strlen(s);
    for(int i = 0; i < len; i++) count[s[i] - 'a']++;
    qsort(count, 26, sizeof(int), cmpDesc);
    int deletions = 0;
    int maxAllowed = count[0];
    for (int i = 0; i < 26 && count[i] > 0; i++) {
        if (count[i] > maxAllowed) {
            deletions += count[i] - maxAllowed;
            count[i] = maxAllowed;
        }
        maxAllowed = count[i] - 1 > 0 ? count[i] - 1 : 0;
    }
    return deletions;
}`,
      cpp: `int minDeletions(string s) {
    vector<int> count(26, 0);
    for (char c : s) count[c - 'a']++;
    sort(count.begin(), count.end(), greater<int>());
    int deletions = 0;
    int maxAllowed = count[0];
    for (int i = 0; i < 26 && count[i] > 0; i++) {
        if (count[i] > maxAllowed) {
            deletions += count[i] - maxAllowed;
            count[i] = maxAllowed;
        }
        maxAllowed = max(0, count[i] - 1);
    }
    return deletions;
}`
    }
  },

  // --- HARD SOLUTIONS ---
  {
    id: 'cs-h1',
    solutions: {
      python: `def maximum_gap(nums):
    if len(nums) < 2: return 0
    min_v, max_v = min(nums), max(nums)
    if min_v == max_v: return 0
    n = len(nums)
    b_size = max(1, (max_v - min_v) // (n - 1))
    b_count = (max_v - min_v) // b_size + 1
    buckets_min = [float('inf')] * b_count
    buckets_max = [-1] * b_count
    for x in nums:
        idx = (x - min_v) // b_size
        buckets_min[idx] = min(buckets_min[idx], x)
        buckets_max[idx] = max(buckets_max[idx], x)
    max_gap = 0
    prev = buckets_max[0]
    for i in range(1, b_count):
        if buckets_min[i] == float('inf'): continue
        max_gap = max(max_gap, buckets_min[i] - prev)
        prev = buckets_max[i]
    return max_gap`,
      java: `    public static int maximumGap(int[] nums) {
        if (nums.length < 2) return 0;
        int min = nums[0], max = nums[0], n = nums.length;
        for (int x : nums) { min = Math.min(min, x); max = Math.max(max, x); }
        if (min == max) return 0;
        int bSize = Math.max(1, (max - min) / (n - 1));
        int bCount = (max - min) / bSize + 1;
        int[] bMin = new int[bCount];
        int[] bMax = new int[bCount];
        Arrays.fill(bMin, Integer.MAX_VALUE);
        Arrays.fill(bMax, -1);
        for (int x : nums) {
            int idx = (x - min) / bSize;
            bMin[idx] = Math.min(bMin[idx], x);
            bMax[idx] = Math.max(bMax[idx], x);
        }
        int maxGap = 0, prev = bMax[0];
        for (int i = 1; i < bCount; i++) {
            if (bMin[i] == Integer.MAX_VALUE) continue;
            maxGap = Math.max(maxGap, bMin[i] - prev);
            prev = bMax[i];
        }
        return maxGap;
    }`,
      c: `int maximumGap(int* nums, int n) {
    if (n < 2) return 0;
    int min = nums[0], max = nums[0];
    for(int i=1; i<n; i++) { if(nums[i]<min) min=nums[i]; if(nums[i]>max) max=nums[i]; }
    if (max == min) return 0;
    int bucketSize = (max - min) / (n - 1);
    if (bucketSize == 0) bucketSize = 1;
    int bucketCount = (max - min) / bucketSize + 1;
    int* bucketMin = (int*)malloc(bucketCount * sizeof(int));
    int* bucketMax = (int*)malloc(bucketCount * sizeof(int));
    for(int i=0; i<bucketCount; i++) { bucketMin[i] = 2e9; bucketMax[i] = -1; }
    for(int i=0; i<n; i++) {
        int idx = (nums[i] - min) / bucketSize;
        if(nums[i] < bucketMin[idx]) bucketMin[idx] = nums[i];
        if(nums[i] > bucketMax[idx]) bucketMax[idx] = nums[i];
    }
    int maxGap = 0, prev = bucketMax[0];
    for(int i=1; i<bucketCount; i++) {
        if (bucketMin[i] == 2e9) continue;
        if (bucketMin[i] - prev > maxGap) maxGap = bucketMin[i] - prev;
        prev = bucketMax[i];
    }
    free(bucketMin); free(bucketMax);
    return maxGap;
}`,
      cpp: `int maximumGap(vector<int>& nums) {
    if (nums.size() < 2) return 0;
    int min_v = nums[0], max_v = nums[0], n = nums.size();
    for (int x : nums) { min_v = min(min_v, x); max_v = max(max_v, x); }
    if (min_v == max_v) return 0;
    int bSize = max(1, (max_v - min_v) / (n - 1));
    int bCount = (max_v - min_v) / bSize + 1;
    vector<int> bMin(bCount, 2e9), bMax(bCount, -1);
    for (int x : nums) {
        int idx = (x - min_v) / bSize;
        bMin[idx] = min(bMin[idx], x);
        bMax[idx] = max(bMax[idx], x);
    }
    int maxGap = 0, prev = bMax[0];
    for (int i = 1; i < bCount; i++) {
        if (bMin[i] == 2e9) continue;
        maxGap = max(maxGap, bMin[i] - prev);
        prev = bMax[i];
    }
    return maxGap;
}`
    }
  },
  {
    id: 'cs-h2',
    solutions: {
      python: `def contains_nearby_almost_duplicate(nums, indexDiff, valueDiff):
    if valueDiff < 0: return False
    buckets = {}
    w = valueDiff + 1
    for i, num in enumerate(nums):
        bucket = num // w
        if bucket in buckets: return True
        if bucket - 1 in buckets and abs(num - buckets[bucket - 1]) < w: return True
        if bucket + 1 in buckets and abs(num - buckets[bucket + 1]) < w: return True
        buckets[bucket] = num
        if i >= indexDiff: del buckets[nums[i - indexDiff] // w]
    return False`,
      java: `    public static boolean containsNearbyAlmostDuplicate(int[] nums, int indexDiff, int valueDiff) {
        TreeSet<Long> set = new TreeSet<>();
        for (int i = 0; i < nums.length; i++) {
            if (i > indexDiff) set.remove((long)nums[i - indexDiff - 1]);
            Long pos = set.ceiling((long)nums[i] - valueDiff);
            if (pos != null && pos - nums[i] <= valueDiff) return true;
            set.add((long)nums[i]);
        }
        return false;
    }`,
      c: `bool containsNearbyAlmostDuplicate(int* nums, int n, int indexDiff, int valueDiff) {
    if (valueDiff < 0) return false;
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j <= i + indexDiff && j < n; j++) {
            long long diff = (long long)nums[i] - nums[j];
            if (diff < 0) diff = -diff;
            if (diff <= valueDiff) return true;
        }
    }
    return false;
}`,
      cpp: `bool containsNearbyAlmostDuplicate(vector<int>& nums, int indexDiff, int valueDiff) {
    set<long long> s;
    for (int i = 0; i < nums.size(); ++i) {
        if (i > indexDiff) s.erase(nums[i - indexDiff - 1]);
        auto pos = s.lower_bound((long long)nums[i] - valueDiff);
        if (pos != s.end() && *pos - nums[i] <= valueDiff) return true;
        s.insert(nums[i]);
    }
    return false;
}`
    }
  },
  {
    id: 'cs-h3',
    solutions: {
      python: `def min_window(s, t):
    import collections
    if len(s) < len(t): return ""
    count_t = collections.Counter(t)
    required = len(count_t)
    window = collections.defaultdict(int)
    formed = 0
    left = min_left = 0
    min_len = float('inf')
    for right, char in enumerate(s):
        window[char] += 1
        if char in count_t and window[char] == count_t[char]:
            formed += 1
        while left <= right and formed == required:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                min_left = left
            l_char = s[left]
            window[l_char] -= 1
            if l_char in count_t and window[l_char] < count_t[l_char]:
                formed -= 1
            left += 1
    return "" if min_len == float('inf') else s[min_left:min_left + min_len]`,
      java: `    public static String minWindow(String s, String t) {
        if (s.length() < t.length()) return "";
        int[] countT = new int[256];
        int[] window = new int[256];
        for (char c : t.toCharArray()) countT[c]++;
        int required = 0, formed = 0;
        for (int i = 0; i < 256; i++) if (countT[i] > 0) required++;
        int left = 0, minLen = Integer.MAX_VALUE, minLeft = 0;
        for (int right = 0; right < s.length(); right++) {
            char c = s.charAt(right);
            window[c]++;
            if (countT[c] > 0 && window[c] == countT[c]) formed++;
            while (left <= right && formed == required) {
                if (right - left + 1 < minLen) {
                    minLen = right - left + 1;
                    minLeft = left;
                }
                char l = s.charAt(left);
                window[l]--;
                if (countT[l] > 0 && window[l] < countT[l]) formed--;
                left++;
            }
        }
        return minLen == Integer.MAX_VALUE ? "" : s.substring(minLeft, minLeft + minLen);
    }`,
      c: `void minWindow(char* s, char* t, char* out) {
    int lenS = strlen(s), lenT = strlen(t);
    if(lenS < lenT) { out[0] = '\\0'; return; }
    int countT[256] = {0}, window[256] = {0};
    for(int i = 0; i < lenT; i++) countT[t[i]]++;
    int required = 0, formed = 0;
    for(int i = 0; i < 256; i++) if(countT[i] > 0) required++;
    int left = 0, minLen = 1e9, minLeft = 0;
    for(int right = 0; right < lenS; right++) {
        char c = s[right];
        window[c]++;
        if(countT[c] > 0 && window[c] == countT[c]) formed++;
        while(left <= right && formed == required) {
            if(right - left + 1 < minLen) { minLen = right - left + 1; minLeft = left; }
            char l = s[left];
            window[l]--;
            if(countT[l] > 0 && window[l] < countT[l]) formed--;
            left++;
        }
    }
    if (minLen == 1e9) { out[0] = '\\0'; }
    else { strncpy(out, s + minLeft, minLen); out[minLen] = '\\0'; }
}`,
      cpp: `string minWindow(string s, string t) {
    if(s.length() < t.length()) return "";
    int countT[256] = {0}, window[256] = {0};
    for(char c : t) countT[c]++;
    int required = 0, formed = 0;
    for(int i = 0; i < 256; i++) if(countT[i] > 0) required++;
    int left = 0, minLen = 1e9, minLeft = 0;
    for(int right = 0; right < s.length(); right++) {
        char c = s[right];
        window[c]++;
        if(countT[c] > 0 && window[c] == countT[c]) formed++;
        while(left <= right && formed == required) {
            if(right - left + 1 < minLen) { minLen = right - left + 1; minLeft = left; }
            char l = s[left];
            window[l]--;
            if(countT[l] > 0 && window[l] < countT[l]) formed--;
            left++;
        }
    }
    return minLen == 1e9 ? "" : s.substr(minLeft, minLen);
}`
    }
  },
  {
    id: 'cs-h4',
    solutions: {
      python: `def subarrays_with_k_distinct(nums, k):
    import collections
    def at_most_k(max_k):
        count = collections.defaultdict(int)
        res = left = distinct = 0
        for right, num in enumerate(nums):
            if count[num] == 0: distinct += 1
            count[num] += 1
            while distinct > max_k:
                count[nums[left]] -= 1
                if count[nums[left]] == 0: distinct -= 1
                left += 1
            res += right - left + 1
        return res
    return at_most_k(k) - at_most_k(k - 1)`,
      java: `    public static int atMostK(int[] nums, int k) {
        int[] count = new int[20005];
        int res = 0, left = 0, distinct = 0;
        for (int right = 0; right < nums.length; right++) {
            if (count[nums[right]] == 0) distinct++;
            count[nums[right]]++;
            while (distinct > k) {
                count[nums[left]]--;
                if (count[nums[left]] == 0) distinct--;
                left++;
            }
            res += right - left + 1;
        }
        return res;
    }
    public static int subarraysWithKDistinct(int[] nums, int k) {
        return atMostK(nums, k) - atMostK(nums, k - 1);
    }`,
      c: `int atMostK(int* nums, int n, int k) {
    int count[20005] = {0};
    int res = 0, left = 0, distinct = 0;
    for (int right = 0; right < n; right++) {
        if (count[nums[right]] == 0) distinct++;
        count[nums[right]]++;
        while (distinct > k) {
            count[nums[left]]--;
            if (count[nums[left]] == 0) distinct--;
            left++;
        }
        res += right - left + 1;
    }
    return res;
}
int subarraysWithKDistinct(int* nums, int n, int k) {
    return atMostK(nums, n, k) - atMostK(nums, n, k - 1);
}`,
      cpp: `int atMostK(vector<int>& nums, int k) {
    vector<int> count(20005, 0);
    int res = 0, left = 0, distinct = 0;
    for (int right = 0; right < nums.size(); right++) {
        if (count[nums[right]] == 0) distinct++;
        count[nums[right]]++;
        while (distinct > k) {
            count[nums[left]]--;
            if (count[nums[left]] == 0) distinct--;
            left++;
        }
        res += right - left + 1;
    }
    return res;
}
int subarraysWithKDistinct(vector<int>& nums, int k) {
    return atMostK(nums, k) - atMostK(nums, k - 1);
}`
    }
  },
  {
    id: 'cs-h5',
    solutions: {
      python: `def length_of_longest_substring_k_distinct(s, k):
    if k == 0: return 0
    import collections
    count = collections.defaultdict(int)
    max_len = left = distinct = 0
    for right, char in enumerate(s):
        if count[char] == 0: distinct += 1
        count[char] += 1
        while distinct > k:
            l_char = s[left]
            count[l_char] -= 1
            if count[l_char] == 0: distinct -= 1
            left += 1
        max_len = max(max_len, right - left + 1)
    return max_len`,
      java: `    public static int lengthOfLongestSubstringKDistinct(String s, int k) {
        if (k == 0) return 0;
        int[] count = new int[256];
        int maxLen = 0, left = 0, distinct = 0;
        for (int right = 0; right < s.length(); right++) {
            if (count[s.charAt(right)] == 0) distinct++;
            count[s.charAt(right)]++;
            while (distinct > k) {
                count[s.charAt(left)]--;
                if (count[s.charAt(left)] == 0) distinct--;
                left++;
            }
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }`,
      c: `int lengthOfLongestSubstringKDistinct(char* s, int k) {
    if (k == 0) return 0;
    int count[256] = {0}, maxLen = 0, left = 0, distinct = 0;
    int len = strlen(s);
    for (int right = 0; right < len; right++) {
        if (count[s[right]] == 0) distinct++;
        count[s[right]]++;
        while (distinct > k) {
            count[s[left]]--;
            if (count[s[left]] == 0) distinct--;
            left++;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}`,
      cpp: `int lengthOfLongestSubstringKDistinct(string s, int k) {
    if (k == 0) return 0;
    vector<int> count(256, 0);
    int maxLen = 0, left = 0, distinct = 0;
    for (int right = 0; right < s.length(); right++) {
        if (count[s[right]] == 0) distinct++;
        count[s[right]]++;
        while (distinct > k) {
            count[s[left]]--;
            if (count[s[left]] == 0) distinct--;
            left++;
        }
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}`
    }
  }
];