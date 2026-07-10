export const radixSortSolutions = [
  // --- EASY SOLUTIONS ---
  {
    id: 'rs-e1',
    solutions: {
      python: `def radix_sort(arr):
    if not arr: return arr
    max_val = max(arr)
    place = 1
    while max_val // place > 0:
        counts = [0] * 10
        output = [0] * len(arr)
        for num in arr:
            counts[(num // place) % 10] += 1
        for i in range(1, 10):
            counts[i] += counts[i - 1]
        for i in range(len(arr) - 1, -1, -1):
            digit = (arr[i] // place) % 10
            output[counts[digit] - 1] = arr[i]
            counts[digit] -= 1
        for i in range(len(arr)):
            arr[i] = output[i]
        place *= 10
    return arr`,
      java: `    public static int[] radixSort(int[] arr) {
        if (arr.length == 0) return arr;
        int max = arr[0];
        for (int num : arr) if (num > max) max = num;
        for (long place = 1; max / place > 0; place *= 10) {
            int[] output = new int[arr.length];
            int[] count = new int[10];
            for (int num : arr) count[(int)((num / place) % 10)]++;
            for (int i = 1; i < 10; i++) count[i] += count[i - 1];
            for (int i = arr.length - 1; i >= 0; i--) {
                int digit = (int)((arr[i] / place) % 10);
                output[count[digit] - 1] = arr[i];
                count[digit]--;
            }
            System.arraycopy(output, 0, arr, 0, arr.length);
        }
        return arr;
    }`,
      c: `void radixSort(int* arr, int n) {
    if (n == 0) return;
    int max = arr[0];
    for (int i = 1; i < n; i++) if (arr[i] > max) max = arr[i];
    int* output = (int*)malloc(n * sizeof(int));
    for (long long place = 1; max / place > 0; place *= 10) {
        int count[10] = {0};
        for (int i = 0; i < n; i++) count[(arr[i] / place) % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = n - 1; i >= 0; i--) {
            int digit = (arr[i] / place) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        for (int i = 0; i < n; i++) arr[i] = output[i];
    }
    free(output);
}`,
      cpp: `void radixSort(vector<int>& arr) {
    if (arr.empty()) return;
    int max_val = arr[0];
    for (int num : arr) if (num > max_val) max_val = num;
    vector<int> output(arr.size());
    for (long long place = 1; max_val / place > 0; place *= 10) {
        vector<int> count(10, 0);
        for (int num : arr) count[(num / place) % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = arr.size() - 1; i >= 0; i--) {
            int digit = (arr[i] / place) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        arr = output;
    }
}`
    }
  },
  {
    id: 'rs-e2',
    solutions: {
      python: `def sort_by_digits(arr):
    def count_digits(num):
        if num == 0: return 1
        res = 0
        while num > 0:
            res += 1
            num //= 10
        return res
    max_len = 0
    for num in arr:
        max_len = max(max_len, count_digits(num))
    buckets = [[] for _ in range(max_len + 1)]
    for num in arr:
        buckets[count_digits(num)].append(num)
    res = []
    for bucket in buckets:
        res.extend(bucket)
    return res`,
      java: `    static int countDigits(int num) {
        if (num == 0) return 1;
        int res = 0;
        while (num > 0) { res++; num /= 10; }
        return res;
    }
    public static int[] sortByDigits(int[] arr) {
        int maxLen = 0;
        for (int num : arr) maxLen = Math.max(maxLen, countDigits(num));
        List<Integer>[] buckets = new ArrayList[maxLen + 1];
        for (int i = 0; i <= maxLen; i++) buckets[i] = new ArrayList<>();
        for (int num : arr) buckets[countDigits(num)].add(num);
        int idx = 0;
        for (int i = 0; i <= maxLen; i++) {
            for (int num : buckets[i]) arr[idx++] = num;
        }
        return arr;
    }`,
      c: `int countDigits(int num) {
    if (num == 0) return 1;
    int res = 0;
    while (num > 0) { res++; num /= 10; }
    return res;
}
void sortByDigits(int* arr, int n) {
    int maxLen = 0;
    for (int i = 0; i < n; i++) {
        int l = countDigits(arr[i]);
        if (l > maxLen) maxLen = l;
    }
    int count[12] = {0};
    for (int i = 0; i < n; i++) count[countDigits(arr[i])]++;
    for (int i = 1; i <= maxLen; i++) count[i] += count[i - 1];
    int* output = (int*)malloc(n * sizeof(int));
    for (int i = n - 1; i >= 0; i--) {
        int len = countDigits(arr[i]);
        output[count[len] - 1] = arr[i];
        count[len]--;
    }
    for (int i = 0; i < n; i++) arr[i] = output[i];
    free(output);
}`,
      cpp: `int countDigits(int num) {
    if (num == 0) return 1;
    int res = 0;
    while (num > 0) { res++; num /= 10; }
    return res;
}
void sortByDigits(vector<int>& arr) {
    int maxLen = 0;
    for (int num : arr) maxLen = max(maxLen, countDigits(num));
    vector<vector<int>> buckets(maxLen + 1);
    for (int num : arr) buckets[countDigits(num)].push_back(num);
    int idx = 0;
    for (int i = 0; i <= maxLen; i++) {
        for (int num : buckets[i]) arr[idx++] = num;
    }
}`
    }
  },
  {
    id: 'rs-e3',
    solutions: {
      python: `def sort_binary_strings(arr):
    if not arr: return arr
    L = len(arr[0])
    for i in range(L - 1, -1, -1):
        zeros = []
        ones = []
        for s in arr:
            if s[i] == '0': zeros.append(s)
            else: ones.append(s)
        arr = zeros + ones
    return arr`,
      java: `    public static String[] sortBinaryStrings(String[] arr) {
        if (arr.length == 0) return arr;
        int L = arr[0].length();
        for (int i = L - 1; i >= 0; i--) {
            List<String> zeros = new ArrayList<>();
            List<String> ones = new ArrayList<>();
            for (String s : arr) {
                if (s.charAt(i) == '0') zeros.add(s);
                else ones.add(s);
            }
            int idx = 0;
            for (String s : zeros) arr[idx++] = s;
            for (String s : ones) arr[idx++] = s;
        }
        return arr;
    }`,
      c: `void sortBinaryStrings(char** arr, int n, int L) {
    char** temp = (char**)malloc(n * sizeof(char*));
    for (int i = L - 1; i >= 0; i--) {
        int count[2] = {0};
        for (int j = 0; j < n; j++) count[arr[j][i] - '0']++;
        count[1] += count[0];
        for (int j = n - 1; j >= 0; j--) {
            int bit = arr[j][i] - '0';
            temp[count[bit] - 1] = arr[j];
            count[bit]--;
        }
        for (int j = 0; j < n; j++) arr[j] = temp[j];
    }
    free(temp);
}`,
      cpp: `void sortBinaryStrings(vector<string>& arr) {
    if (arr.empty()) return;
    int L = arr[0].size();
    vector<string> temp(arr.size());
    for (int i = L - 1; i >= 0; i--) {
        int count[2] = {0};
        for (string& s : arr) count[s[i] - '0']++;
        count[1] += count[0];
        for (int j = arr.size() - 1; j >= 0; j--) {
            int bit = arr[j][i] - '0';
            temp[count[bit] - 1] = arr[j];
            count[bit]--;
        }
        arr = temp;
    }
}`
    }
  },
  {
    id: 'rs-e4',
    solutions: {
      python: `def sort_by_first_digit(arr):
    counts = [0] * 10
    output = [0] * len(arr)
    for num in arr:
        counts[num % 10] += 1
    for i in range(1, 10):
        counts[i] += counts[i - 1]
    for i in range(len(arr) - 1, -1, -1):
        digit = arr[i] % 10
        output[counts[digit] - 1] = arr[i]
        counts[digit] -= 1
    return output`,
      java: `    public static int[] sortByFirstDigit(int[] arr) {
        int[] output = new int[arr.length];
        int[] count = new int[10];
        for (int num : arr) count[num % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = arr.length - 1; i >= 0; i--) {
            int digit = arr[i] % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        System.arraycopy(output, 0, arr, 0, arr.length);
        return arr;
    }`,
      c: `void sortByFirstDigit(int* arr, int n) {
    int count[10] = {0};
    int* output = (int*)malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) count[arr[i] % 10]++;
    for (int i = 1; i < 10; i++) count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; i--) {
        int digit = arr[i] % 1
                output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    for (int i = 0; i < n; i++) arr[i] = output[i];
    free(output);
}`,
      cpp: `void sortByFirstDigit(vector<int>& arr) {
    vector<int> count(10, 0);
    vector<int> output(arr.size());
    for (int num : arr) count[num % 10]++;
    for (int i = 1; i < 10; i++) count[i] += count[i - 1];
    for (int i = arr.size() - 1; i >= 0; i--) {
        int digit = arr[i] % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    arr = output;
}`
    }
  },
  {
    id: 'rs-e5',
    solutions: {
      python: `def radix_sort_strings(arr):
    if not arr: return arr
    L = len(arr[0])
    for i in range(L - 1, -1, -1):
        buckets = [[] for _ in range(26)]
        for s in arr:
            buckets[ord(s[i]) - ord('a')].append(s)
        arr = [s for bucket in buckets for s in bucket]
    return arr`,
      java: `    public static String[] radixSortStrings(String[] arr) {
        if (arr.length == 0) return arr;
        int L = arr[0].length();
        for (int i = L - 1; i >= 0; i--) {
            int[] count = new int[26];
            String[] output = new String[arr.length];
            for (String s : arr) count[s.charAt(i) - 'a']++;
            for (int j = 1; j < 26; j++) count[j] += count[j - 1];
            for (int j = arr.length - 1; j >= 0; j--) {
                int charIdx = arr[j].charAt(i) - 'a';
                output[count[charIdx] - 1] = arr[j];
                count[charIdx]--;
            }
            System.arraycopy(output, 0, arr, 0, arr.length);
        }
        return arr;
    }`,
      c: `void radixSortStrings(char** arr, int n, int L) {
    char** temp = (char**)malloc(n * sizeof(char*));
    for (int i = L - 1; i >= 0; i--) {
        int count[26] = {0};
        for (int j = 0; j < n; j++) count[arr[j][i] - 'a']++;
        for (int j = 1; j < 26; j++) count[j] += count[j - 1];
        for (int j = n - 1; j >= 0; j--) {
            int charIdx = arr[j][i] - 'a';
            temp[count[charIdx] - 1] = arr[j];
            count[charIdx]--;
        }
        for (int j = 0; j < n; j++) arr[j] = temp[j];
    }
    free(temp);
}`,
      cpp: `void radixSortStrings(vector<string>& arr) {
    if (arr.empty()) return;
    int L = arr[0].size();
    vector<string> temp(arr.size());
    for (int i = L - 1; i >= 0; i--) {
        int count[26] = {0};
        for (string& s : arr) count[s[i] - 'a']++;
        for (int j = 1; j < 26; j++) count[j] += count[j - 1];
        for (int j = arr.size() - 1; j >= 0; j--) {
            int charIdx = arr[j][i] - 'a';
            temp[count[charIdx] - 1] = arr[j];
            count[charIdx]--;
        }
        arr = temp;
    }
}`
    }
  },

  // --- MEDIUM SOLUTIONS ---
  {
    id: 'rs-m1',
    solutions: {
      python: `def radix_sort_all(arr):
    pos = [x for x in arr if x >= 0]
    neg = [-x for x in arr if x < 0]
    def sort_pos(nums):
        if not nums: return nums
        max_val = max(nums)
        place = 1
        while max_val // place > 0:
            counts = [0] * 10
            output = [0] * len(nums)
            for num in nums: counts[(num // place) % 10] += 1
            for i in range(1, 10): counts[i] += counts[i - 1]
            for i in range(len(nums) - 1, -1, -1):
                digit = (nums[i] // place) % 10
                output[counts[digit] - 1] = nums[i]
                counts[digit] -= 1
            nums = output
            place *= 10
        return nums
    pos = sort_pos(pos)
    neg = sort_pos(neg)
    return [-x for x in reversed(neg)] + pos`,
      java: `    static void sortPos(int[] arr, int start, int end) {
        if (start >= end) return;
        int max = arr[start];
        for (int i = start + 1; i < end; i++) if (arr[i] > max) max = arr[i];
        int[] output = new int[end - start];
        for (long place = 1; max / place > 0; place *= 10) {
            int[] count = new int[10];
            for (int i = start; i < end; i++) count[(int)((arr[i] / place) % 10)]++;
            for (int i = 1; i < 10; i++) count[i] += count[i - 1];
            for (int i = end - 1; i >= start; i--) {
                int digit = (int)((arr[i] / place) % 10);
                output[count[digit] - 1] = arr[i];
                count[digit]--;
            }
            System.arraycopy(output, 0, arr, start, output.length);
        }
    }
    public static int[] radixSortAll(int[] arr) {
        int posCount = 0;
        for (int x : arr) if (x >= 0) posCount++;
        int[] pos = new int[posCount];
        int[] neg = new int[arr.length - posCount];
        int p = 0, n = 0;
        for (int x : arr) {
            if (x >= 0) pos[p++] = x;
            else neg[n++] = -x;
        }
        sortPos(pos, 0, pos.length);
        sortPos(neg, 0, neg.length);
        int idx = 0;
        for (int i = neg.length - 1; i >= 0; i--) arr[idx++] = -neg[i];
        for (int i = 0; i < pos.length; i++) arr[idx++] = pos[i];
        return arr;
    }`,
      c: `void sortPos(int* arr, int n) {
    if (n <= 0) return;
    int max = arr[0];
    for (int i = 1; i < n; i++) if (arr[i] > max) max = arr[i];
    int* output = (int*)malloc(n * sizeof(int));
    for (long long place = 1; max / place > 0; place *= 10) {
        int count[10] = {0};
        for (int i = 0; i < n; i++) count[(arr[i] / place) % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = n - 1; i >= 0; i--) {
            int digit = (arr[i] / place) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        for (int i = 0; i < n; i++) arr[i] = output[i];
    }
    free(output);
}
void radixSortAll(int* arr, int n) {
    int posCount = 0;
    for (int i = 0; i < n; i++) if (arr[i] >= 0) posCount++;
    int* pos = (int*)malloc(posCount * sizeof(int));
    int* neg = (int*)malloc((n - posCount) * sizeof(int));
    int p = 0, ng = 0;
    for (int i = 0; i < n; i++) {
        if (arr[i] >= 0) pos[p++] = arr[i];
        else neg[ng++] = -arr[i];
    }
    sortPos(pos, posCount);
    sortPos(neg, n - posCount);
    int idx = 0;
    for (int i = ng - 1; i >= 0; i--) arr[idx++] = -neg[i];
    for (int i = 0; i < posCount; i++) arr[idx++] = pos[i];
    free(pos); free(neg);
}`,
      cpp: `void sortPos(vector<int>& arr) {
    if (arr.empty()) return;
    int max_val = arr[0];
    for (int num : arr) if (num > max_val) max_val = num;
    vector<int> output(arr.size());
    for (long long place = 1; max_val / place > 0; place *= 10) {
        vector<int> count(10, 0);
        for (int num : arr) count[(num / place) % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = arr.size() - 1; i >= 0; i--) {
            int digit = (arr[i] / place) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        arr = output;
    }
}
void radixSortAll(vector<int>& arr) {
    vector<int> pos, neg;
    for (int x : arr) {
        if (x >= 0) pos.push_back(x);
        else neg.push_back(-x);
    }
    sortPos(pos);
    sortPos(neg);
    int idx = 0;
    for (int i = neg.size() - 1; i >= 0; i--) arr[idx++] = -neg[i];
    for (int i = 0; i < pos.size(); i++) arr[idx++] = pos[i];
}`
    }
  },
  {
    id: 'rs-m2',
    solutions: {
      python: `def maximum_gap(nums):
    if len(nums) < 2: return 0
    max_val = max(nums)
    place = 1
    while max_val // place > 0:
        counts = [0] * 10
        output = [0] * len(nums)
        for num in nums: counts[(num // place) % 10] += 1
        for i in range(1, 10): counts[i] += counts[i - 1]
        for i in range(len(nums) - 1, -1, -1):
            digit = (nums[i] // place) % 10
            output[counts[digit] - 1] = nums[i]
            counts[digit] -= 1
        nums = output
        place *= 10
    max_gap = 0
    for i in range(1, len(nums)):
        max_gap = max(max_gap, nums[i] - nums[i - 1])
    return max_gap`,
      java: `    public static int maximumGap(int[] nums) {
        if (nums.length < 2) return 0;
        int max = nums[0];
        for (int num : nums) if (num > max) max = num;
        for (long place = 1; max / place > 0; place *= 10) {
            int[] output = new int[nums.length];
            int[] count = new int[10];
            for (int num : nums) count[(int)((num / place) % 10)]++;
            for (int i = 1; i < 10; i++) count[i] += count[i - 1];
            for (int i = nums.length - 1; i >= 0; i--) {
                int digit = (int)((nums[i] / place) % 10);
                output[count[digit] - 1] = nums[i];
                count[digit]--;
            }
            System.arraycopy(output, 0, nums, 0, nums.length);
        }
        int maxGap = 0;
        for (int i = 1; i < nums.length; i++) {
            maxGap = Math.max(maxGap, nums[i] - nums[i - 1]);
        }
        return maxGap;
    }`,
      c: `int maximumGap(int* nums, int n) {
    if (n < 2) return 0;
    int max = nums[0];
    for (int i = 1; i < n; i++) if (nums[i] > max) max = nums[i];
    int* output = (int*)malloc(n * sizeof(int));
    for (long long place = 1; max / place > 0; place *= 10) {
        int count[10] = {0};
        for (int i = 0; i < n; i++) count[(nums[i] / place) % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = n - 1; i >= 0; i--) {
            int digit = (nums[i] / place) % 10;
            output[count[digit] - 1] = nums[i];
            count[digit]--;
        }
        for (int i = 0; i < n; i++) nums[i] = output[i];
    }
    free(output);
    int maxGap = 0;
    for (int i = 1; i < n; i++) {
        if (nums[i] - nums[i - 1] > maxGap) {
            maxGap = nums[i] - nums[i - 1];
        }
    }
    return maxGap;
}`,
      cpp: `int maximumGap(vector<int>& nums) {
    if (nums.size() < 2) return 0;
    int max_val = nums[0];
    for (int num : nums) if (num > max_val) max_val = num;
    vector<int> output(nums.size());
    for (long long place = 1; max_val / place > 0; place *= 10) {
        vector<int> count(10, 0);
        for (int num : nums) count[(num / place) % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = nums.size() - 1; i >= 0; i--) {
            int digit = (nums[i] / place) % 10;
            output[count[digit] - 1] = nums[i];
            count[digit]--;
        }
        nums = output;
    }
    int maxGap = 0;
    for (int i = 1; i < nums.size(); i++) {
        maxGap = max(maxGap, nums[i] - nums[i - 1]);
    }
    return maxGap;
}`
    }
  },
  {
    id: 'rs-m3',
    solutions: {
      python: `def radix_sort_var_strings(arr):
    if not arr: return arr
    max_len = max(len(s) for s in arr)
    for i in range(max_len - 1, -1, -1):
        buckets = [[] for _ in range(27)]
        for s in arr:
            if i >= len(s):
                buckets[0].append(s)
            else:
                buckets[ord(s[i]) - ord('a') + 1].append(s)
        arr = [s for bucket in buckets for s in bucket]
    return arr`,
      java: `    public static String[] radixSortVarStrings(String[] arr) {
        if (arr.length == 0) return arr;
        int maxLen = 0;
        for (String s : arr) maxLen = Math.max(maxLen, s.length());
        for (int i = maxLen - 1; i >= 0; i--) {
            int[] count = new int[27];
            String[] output = new String[arr.length];
            for (String s : arr) {
                int charIdx = i >= s.length() ? 0 : s.charAt(i) - 'a' + 1;
                count[charIdx]++;
            }
            for (int j = 1; j < 27; j++) count[j] += count[j - 1];
            for (int j = arr.length - 1; j >= 0; j--) {
                int charIdx = i >= arr[j].length() ? 0 : arr[j].charAt(i) - 'a' + 1;
                output[count[charIdx] - 1] = arr[j];
                count[charIdx]--;
            }
            System.arraycopy(output, 0, arr, 0, arr.length);
        }
        return arr;
    }`,
      c: `void radixSortVarStrings(char** arr, int n) {
    if (n == 0) return;
    int maxLen = 0;
    for (int i = 0; i < n; i++) {
        int l = strlen(arr[i]);
        if (l > maxLen) maxLen = l;
    }
    char** temp = (char**)malloc(n * sizeof(char*));
    for (int i = maxLen - 1; i >= 0; i--) {
        int count[27] = {0};
        for (int j = 0; j < n; j++) {
            int len = strlen(arr[j]);
            int charIdx = i >= len ? 0 : arr[j][i] - 'a' + 1;
            count[charIdx]++;
        }
        for (int j = 1; j < 27; j++) count[j] += count[j - 1];
        for (int j = n - 1; j >= 0; j--) {
            int len = strlen(arr[j]);
            int charIdx = i >= len ? 0 : arr[j][i] - 'a' + 1;
            temp[count[charIdx] - 1] = arr[j];
            count[charIdx]--;
        }
        for (int j = 0; j < n; j++) arr[j] = temp[j];
    }
    free(temp);
}`,
      cpp: `void radixSortVarStrings(vector<string>& arr) {
    if (arr.empty()) return;
    int maxLen = 0;
    for (const string& s : arr) maxLen = max(maxLen, (int)s.size());
    vector<string> temp(arr.size());
    for (int i = maxLen - 1; i >= 0; i--) {
        int count[27] = {0};
        for (const string& s : arr) {
            int charIdx = i >= s.size() ? 0 : s[i] - 'a' + 1;
            count[charIdx]++;
        }
        for (int j = 1; j < 27; j++) count[j] += count[j - 1];
        for (int j = arr.size() - 1; j >= 0; j--) {
            int charIdx = i >= arr[j].size() ? 0 : arr[j][i] - 'a' + 1;
            temp[count[charIdx] - 1] = arr[j];
            count[charIdx]--;
        }
        arr = temp;
    }
}`
    }
  },
  {
    id: 'rs-m4',
    solutions: {
      python: `def sort_dates(arr):
    def counting_sort(arr, div, mod):
        counts = [0] * mod
        output = [0] * len(arr)
        for num in arr:
            counts[(num // div) % mod] += 1
        for i in range(1, mod):
            counts[i] += counts[i - 1]
        for i in range(len(arr) - 1, -1, -1):
            digit = (arr[i] // div) % mod
            output[counts[digit] - 1] = arr[i]
            counts[digit] -= 1
        for i in range(len(arr)):
            arr[i] = output[i]
    counting_sort(arr, 1, 100)       # Sort by DD
    counting_sort(arr, 100, 100)     # Sort by MM
    counting_sort(arr, 10000, 10000) # Sort by YYYY
    return arr`,
      java: `    static void countingSort(int[] arr, int div, int mod) {
        int[] output = new int[arr.length];
        int[] count = new int[mod];
        for (int num : arr) count[(num / div) % mod]++;
        for (int i = 1; i < mod; i++) count[i] += count[i - 1];
        for (int i = arr.length - 1; i >= 0; i--) {
            int digit = (arr[i] / div) % mod;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        System.arraycopy(output, 0, arr, 0, arr.length);
    }
    public static int[] sortDates(int[] arr) {
        countingSort(arr, 1, 100);
        countingSort(arr, 100, 100);
        countingSort(arr, 10000, 10000);
        return arr;
    }`,
      c: `void countingSort(int* arr, int n, int div, int mod) {
    int* output = (int*)malloc(n * sizeof(int));
    int* count = (int*)calloc(mod, sizeof(int));
    for (int i = 0; i < n; i++) count[(arr[i] / div) % mod]++;
    for (int i = 1; i < mod; i++) count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; i--) {
        int digit = (arr[i] / div) % mod;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    for (int i = 0; i < n; i++) arr[i] = output[i];
    free(output); free(count);
}
void sortDates(int* arr, int n) {
    countingSort(arr, n, 1, 100);
    countingSort(arr, n, 100, 100);
    countingSort(arr, n, 10000, 10000);
}`,
      cpp: `void countingSort(vector<int>& arr, int div, int mod) {
    vector<int> output(arr.size());
    vector<int> count(mod, 0);
    for (int num : arr) count[(num / div) % mod]++;
    for (int i = 1; i < mod; i++) count[i] += count[i - 1];
    for (int i = arr.size() - 1; i >= 0; i--) {
        int digit = (arr[i] / div) % mod;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    arr = output;
}
void sortDates(vector<int>& arr) {
    countingSort(arr, 1, 100);
    countingSort(arr, 100, 100);
    countingSort(arr, 10000, 10000);
}`
    }
  },
  {
    id: 'rs-m5',
    solutions: {
      python: `def sort_by_kth_digit(arr, k):
    place = 10 ** (k - 1)
    counts = [0] * 10
    output = [0] * len(arr)
    for num in arr:
        counts[(num // place) % 10] += 1
    for i in range(1, 10):
        counts[i] += counts[i - 1]
    for i in range(len(arr) - 1, -1, -1):
        digit = (arr[i] // place) % 10
        output[counts[digit] - 1] = arr[i]
        counts[digit] -= 1
    return output`,
      java: `    public static int[] sortByKthDigit(int[] arr, int k) {
        long place = (long)Math.pow(10, k - 1);
        int[] output = new int[arr.length];
        int[] count = new int[10];
        for (int num : arr) count[(int)((num / place) % 10)]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = arr.length - 1; i >= 0; i--) {
            int digit = (int)((arr[i] / place) % 10);
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        System.arraycopy(output, 0, arr, 0, arr.length);
        return arr;
    }`,
      c: `void sortByKthDigit(int* arr, int n, int k) {
    long long place = 1;
    for (int i = 1; i < k; i++) place *= 10;
    int* output = (int*)malloc(n * sizeof(int));
    int count[10] = {0};
    for (int i = 0; i < n; i++) count[(arr[i] / place) % 10]++;
    for (int i = 1; i < 10; i++) count[i] += count[i - 1];
    for (int i = n - 1; i >= 0; i--) {
        int digit = (arr[i] / place) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    for (int i = 0; i < n; i++) arr[i] = output[i];
    free(output);
}`,
      cpp: `void sortByKthDigit(vector<int>& arr, int k) {
    long long place = 1;
    for (int i = 1; i < k; i++) place *= 10;
    vector<int> output(arr.size());
    vector<int> count(10, 0);
    for (int num : arr) count[(num / place) % 10]++;
    for (int i = 1; i < 10; i++) count[i] += count[i - 1];
    for (int i = arr.size() - 1; i >= 0; i--) {
        int digit = (arr[i] / place) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }
    arr = output;
}`
    }
  },

  // --- HARD SOLUTIONS ---
  {
    id: 'rs-h1',
    solutions: {
      python: `def sort_large_numbers(arr):
    if not arr: return arr
    max_len = max(len(s) for s in arr)
    arr = [s.zfill(max_len) for s in arr]
    for i in range(max_len - 1, -1, -1):
        buckets = [[] for _ in range(10)]
        for s in arr:
            buckets[int(s[i])].append(s)
        arr = [s for bucket in buckets for s in bucket]
    return [s.lstrip('0') or '0' for s in arr]`,
      java: `    public static String[] sortLargeNumbers(String[] arr) {
        if (arr.length == 0) return arr;
        int maxLen = 0;
        for (String s : arr) maxLen = Math.max(maxLen, s.length());
        for (int j = 0; j < arr.length; j++) {
            StringBuilder sb = new StringBuilder();
            while (sb.length() + arr[j].length() < maxLen) sb.append('0');
            sb.append(arr[j]);
            arr[j] = sb.toString();
        }
        for (int i = maxLen - 1; i >= 0; i--) {
            int[] count = new int[10];
            String[] output = new String[arr.length];
            for (String s : arr) count[s.charAt(i) - '0']++;
            for (int j = 1; j < 10; j++) count[j] += count[j - 1];
            for (int j = arr.length - 1; j >= 0; j--) {
                int digit = arr[j].charAt(i) - '0';
                output[count[digit] - 1] = arr[j];
                count[digit]--;
            }
            System.arraycopy(output, 0, arr, 0, arr.length);
        }
        for (int j = 0; j < arr.length; j++) {
            int k = 0;
            while (k < arr[j].length() - 1 && arr[j].charAt(k) == '0') k++;
            arr[j] = arr[j].substring(k);
        }
        return arr;
    }`,
      c: `void sortLargeNumbers(char** arr, int n) {
    if (n == 0) return;
    int maxLen = 0;
    for (int i = 0; i < n; i++) {
        int l = strlen(arr[i]);
        if (l > maxLen) maxLen = l;
    }
    char** padded = (char**)malloc(n * sizeof(char*));
    for (int i = 0; i < n; i++) {
        padded[i] = (char*)malloc((maxLen + 1) * sizeof(char));
        int l = strlen(arr[i]);
        int zeros = maxLen - l;
        for (int j = 0; j < zeros; j++) padded[i][j] = '0';
        strcpy(padded[i] + zeros, arr[i]);
    }
    char** temp = (char**)malloc(n * sizeof(char*));
    for (int i = maxLen - 1; i >= 0; i--) {
        int count[10] = {0};
        for (int j = 0; j < n; j++) count[padded[j][i] - '0']++;
        for (int j = 1; j < 10; j++) count[j] += count[j - 1];
        for (int j = n - 1; j >= 0; j--) {
            int digit = padded[j][i] - '0';
            temp[count[digit] - 1] = padded[j];
            count[digit]--;
        }
        for (int j = 0; j < n; j++) padded[j] = temp[j];
    }
    for (int i = 0; i < n; i++) {
        int k = 0;
        while (k < maxLen - 1 && padded[i][k] == '0') k++;
        strcpy(arr[i], padded[i] + k);
        free(padded[i]);
    }
    free(padded); free(temp);
}`,
      cpp: `void sortLargeNumbers(vector<string>& arr) {
    if (arr.empty()) return;
    int maxLen = 0;
    for (const string& s : arr) maxLen = max(maxLen, (int)s.size());
    for (string& s : arr) {
        if (s.size() < maxLen) s = string(maxLen - s.size(), '0') + s;
    }
    vector<string> temp(arr.size());
    for (int i = maxLen - 1; i >= 0; i--) {
        int count[10] = {0};
        for (const string& s : arr) count[s[i] - '0']++;
        for (int j = 1; j < 10; j++) count[j] += count[j - 1];
        for (int j = arr.size() - 1; j >= 0; j--) {
            int digit = arr[j][i] - '0';
            temp[count[digit] - 1] = arr[j];
            count[digit]--;
        }
        arr = temp;
    }
    for (string& s : arr) {
        int k = 0;
        while (k < s.size() - 1 && s[k] == '0') k++;
        s = s.substr(k);
    }
}`
    }
  },
  {
    id: 'rs-h2',
    solutions: {
      python: `def sort_ipv4(arr):
    parsed = []
    for ip in arr:
        parts = list(map(int, ip.split('.')))
        parsed.append((parts, ip))
    for i in range(3, -1, -1):
        buckets = [[] for _ in range(256)]
        for parts, ip in parsed:
            buckets[parts[i]].append((parts, ip))
        parsed = [item for bucket in buckets for item in bucket]
    return [ip for parts, ip in parsed]`,
      java: `    static class IP {
        int[] parts;
        String ip;
        IP(int[] parts, String ip) { this.parts = parts; this.ip = ip; }
    }
    public static String[] sortIPv4(String[] arr) {
        IP[] parsed = new IP[arr.length];
        for (int i = 0; i < arr.length; i++) {
            String[] p = arr[i].split("\\\\.");
            int[] parts = new int[4];
            for (int j = 0; j < 4; j++) parts[j] = Integer.parseInt(p[j]);
            parsed[i] = new IP(parts, arr[i]);
        }
        for (int i = 3; i >= 0; i--) {
            int[] count = new int[256];
            IP[] output = new IP[arr.length];
            for (IP p : parsed) count[p.parts[i]]++;
            for (int j = 1; j < 256; j++) count[j] += count[j - 1];
            for (int j = arr.length - 1; j >= 0; j--) {
                int part = parsed[j].parts[i];
                output[count[part] - 1] = parsed[j];
                count[part]--;
            }
            parsed = output;
        }
        for (int i = 0; i < arr.length; i++) arr[i] = parsed[i].ip;
        return arr;
    }`,
      c: `typedef struct { int parts[4]; char ip[20]; } IPv4;
void sortIPv4(char** arr, int n) {
    IPv4* parsed = (IPv4*)malloc(n * sizeof(IPv4));
    for (int i = 0; i < n; i++) {
        strcpy(parsed[i].ip, arr[i]);
        sscanf(arr[i], "%d.%d.%d.%d", &parsed[i].parts[0], &parsed[i].parts[1], &parsed[i].parts[2], &parsed[i].parts[3]);
    }
    IPv4* temp = (IPv4*)malloc(n * sizeof(IPv4));
    for (int i = 3; i >= 0; i--) {
        int count[256] = {0};
        for (int j = 0; j < n; j++) count[parsed[j].parts[i]]++;
        for (int j = 1; j < 256; j++) count[j] += count[j - 1];
        for (int j = n - 1; j >= 0; j--) {
            int part = parsed[j].parts[i];
            temp[count[part] - 1] = parsed[j];
            count[part]--;
        }
        for (int j = 0; j < n; j++) parsed[j] = temp[j];
    }
    for (int i = 0; i < n; i++) strcpy(arr[i], parsed[i].ip);
    free(parsed); free(temp);
}`,
      cpp: `struct IPv4 { vector<int> parts; string ip; };
void sortIPv4(vector<string>& arr) {
    vector<IPv4> parsed(arr.size());
    for (int i = 0; i < arr.size(); i++) {
        parsed[i].ip = arr[i];
        int val = 0;
        for (char c : arr[i]) {
            if (c == '.') { parsed[i].parts.push_back(val); val = 0; }
            else val = val * 10 + (c - '0');
        }
        parsed[i].parts.push_back(val);
    }
    vector<IPv4> temp(arr.size());
    for (int i = 3; i >= 0; i--) {
        int count[256] = {0};
        for (const auto& p : parsed) count[p.parts[i]]++;
        for (int j = 1; j < 256; j++) count[j] += count[j - 1];
        for (int j = arr.size() - 1; j >= 0; j--) {
            int part = parsed[j].parts[i];
            temp[count[part] - 1] = parsed[j];
            count[part]--;
        }
        parsed = temp;
    }
    for (int i = 0; i < arr.size(); i++) arr[i] = parsed[i].ip;
}`
    }
  },
  {
    id: 'rs-h3',
    solutions: {
      python: `def sort_points(arr):
    def radix_pass(idx):
        max_val = max(p[idx] for p in arr)
        place = 1
        nonlocal arr
        while max_val // place > 0:
            counts = [0] * 10
            output = [None] * len(arr)
            for p in arr: counts[(p[idx] // place) % 10] += 1
            for i in range(1, 10): counts[i] += counts[i - 1]
            for i in range(len(arr) - 1, -1, -1):
                digit = (arr[i][idx] // place) % 10
                output[counts[digit] - 1] = arr[i]
                counts[digit] -= 1
            arr = output
            place *= 10
    radix_pass(1) # Sort by y
    radix_pass(0) # Sort by x
    return arr`,
      java: `    static void radixPass(int[][] arr, int idx) {
        int max = arr[0][idx];
        for (int[] p : arr) if (p[idx] > max) max = p[idx];
        for (long place = 1; max / place > 0; place *= 10) {
            int[][] output = new int[arr.length][2];
            int[] count = new int[10];
            for (int[] p : arr) count[(int)((p[idx] / place) % 10)]++;
            for (int i = 1; i < 10; i++) count[i] += count[i - 1];
            for (int i = arr.length - 1; i >= 0; i--) {
                int digit = (int)((arr[i][idx] / place) % 10);
                output[count[digit] - 1] = arr[i];
                count[digit]--;
            }
            System.arraycopy(output, 0, arr, 0, arr.length);
        }
    }
    public static int[][] sortPoints(int[][] arr) {
        if (arr.length == 0) return arr;
        radixPass(arr, 1);
        radixPass(arr, 0);
        return arr;
    }`,
      c: `void radixPass(int** arr, int n, int idx) {
    int max = arr[0][idx];
    for (int i = 1; i < n; i++) if (arr[i][idx] > max) max = arr[i][idx];
    int** output = (int**)malloc(n * sizeof(int*));
    for (long long place = 1; max / place > 0; place *= 10) {
        int count[10] = {0};
        for (int i = 0; i < n; i++) count[(arr[i][idx] / place) % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = n - 1; i >= 0; i--) {
            int digit = (arr[i][idx] / place) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        for (int i = 0; i < n; i++) arr[i] = output[i];
    }
    free(output);
}
void sortPoints(int** arr, int n) {
    if (n == 0) return;
    radixPass(arr, n, 1);
    radixPass(arr, n, 0);
}`,
      cpp: `void radixPass(vector<vector<int>>& arr, int idx) {
    int max_val = arr[0][idx];
    for (const auto& p : arr) if (p[idx] > max_val) max_val = p[idx];
    vector<vector<int>> output(arr.size());
    for (long long place = 1; max_val / place > 0; place *= 10) {
        vector<int> count(10, 0);
        for (const auto& p : arr) count[(p[idx] / place) % 10]++;
        for (int i = 1; i < 10; i++) count[i] += count[i - 1];
        for (int i = arr.size() - 1; i >= 0; i--) {
            int digit = (arr[i][idx] / place) % 10;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        arr = output;
    }
}
void sortPoints(vector<vector<int>>& arr) {
    if (arr.empty()) return;
    radixPass(arr, 1);
    radixPass(arr, 0);
}`
    }
  },
  {
    id: 'rs-h4',
    solutions: {
      python: `def sort_decimals(arr):
    parsed = []
    for s in arr:
        parts = s.split('.')
        whole = parts[0]
        frac = parts[1] if len(parts) > 1 else ''
        parsed.append((whole, frac, s))
    max_whole = max(len(p[0]) for p in parsed)
    max_frac = max(len(p[1]) for p in parsed)
    aligned = []
    for whole, frac, s in parsed:
        w = whole.zfill(max_whole)
        f = frac.ljust(max_frac, '0')
        aligned.append((w + f, s))
    L = max_whole + max_frac
    for i in range(L - 1, -1, -1):
        buckets = [[] for _ in range(10)]
        for string_repr, original in aligned:
            buckets[int(string_repr[i])].append((string_repr, original))
        aligned = [item for bucket in buckets for item in bucket]
    return [original for string_repr, original in aligned]`,
      java: `    static class Dec {
        String aligned;
        String original;
        Dec(String a, String o) { aligned = a; original = o; }
    }
    public static String[] sortDecimals(String[] arr) {
        if (arr.length == 0) return arr;
        int maxW = 0, maxF = 0;
        String[] w = new String[arr.length];
        String[] f = new String[arr.length];
        for (int i = 0; i < arr.length; i++) {
            int dot = arr[i].indexOf('.');
            w[i] = dot == -1 ? arr[i] : arr[i].substring(0, dot);
            f[i] = dot == -1 ? "" : arr[i].substring(dot + 1);
            maxW = Math.max(maxW, w[i].length());
            maxF = Math.max(maxF, f[i].length());
        }
        Dec[] decs = new Dec[arr.length];
        for (int i = 0; i < arr.length; i++) {
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < maxW - w[i].length(); j++) sb.append('0');
            sb.append(w[i]).append(f[i]);
            for (int j = 0; j < maxF - f[i].length(); j++) sb.append('0');
            decs[i] = new Dec(sb.toString(), arr[i]);
        }
        int L = maxW + maxF;
        for (int i = L - 1; i >= 0; i--) {
            int[] count = new int[10];
            Dec[] output = new Dec[arr.length];
            for (Dec d : decs) count[d.aligned.charAt(i) - '0']++;
            for (int j = 1; j < 10; j++) count[j] += count[j - 1];
            for (int j = arr.length - 1; j >= 0; j--) {
                int digit = decs[j].aligned.charAt(i) - '0';
                output[count[digit] - 1] = decs[j];
                count[digit]--;
            }
            decs = output;
        }
        for (int i = 0; i < arr.length; i++) arr[i] = decs[i].original;
        return arr;
    }`,
      c: `typedef struct { char aligned[20]; char original[20]; } Dec;
void sortDecimals(char** arr, int n) {
    if (n == 0) return;
    int maxW = 0, maxF = 0;
    Dec* decs = (Dec*)malloc(n * sizeof(Dec));
    for (int i = 0; i < n; i++) {
        strcpy(decs[i].original, arr[i]);
        char* dot = strchr(arr[i], '.');
        int wl = dot ? dot - arr[i] : strlen(arr[i]);
        int fl = dot ? strlen(dot + 1) : 0;
        if (wl > maxW) maxW = wl;
        if (fl > maxF) maxF = fl;
    }
    for (int i = 0; i < n; i++) {
        char* dot = strchr(arr[i], '.');
        int wl = dot ? dot - arr[i] : strlen(arr[i]);
        int fl = dot ? strlen(dot + 1) : 0;
        int idx = 0;
        for (int j = 0; j < maxW - wl; j++) decs[i].aligned[idx++] = '0';
        for (int j = 0; j < wl; j++) decs[i].aligned[idx++] = arr[i][j];
        if (dot) for (int j = 0; j < fl; j++) decs[i].aligned[idx++] = dot[1 + j];
        for (int j = 0; j < maxF - fl; j++) decs[i].aligned[idx++] = '0';
        decs[i].aligned[idx] = '\\0';
    }
    int L = maxW + maxF;
    Dec* temp = (Dec*)malloc(n * sizeof(Dec));
    for (int i = L - 1; i >= 0; i--) {
        int count[10] = {0};
        for (int j = 0; j < n; j++) count[decs[j].aligned[i] - '0']++;
        for (int j = 1; j < 10; j++) count[j] += count[j - 1];
        for (int j = n - 1; j >= 0; j--) {
            int digit = decs[j].aligned[i] - '0';
            temp[count[digit] - 1] = decs[j];
            count[digit]--;
        }
        for (int j = 0; j < n; j++) decs[j] = temp[j];
    }
    for (int i = 0; i < n; i++) strcpy(arr[i], decs[i].original);
    free(decs); free(temp);
}`,
      cpp: `struct Dec { string aligned, original; };
void sortDecimals(vector<string>& arr) {
    if (arr.empty()) return;
    int maxW = 0, maxF = 0;
    vector<Dec> decs(arr.size());
    for (int i = 0; i < arr.size(); i++) {
        decs[i].original = arr[i];
        size_t dot = arr[i].find('.');
        int wl = dot == string::npos ? arr[i].size() : dot;
        int fl = dot == string::npos ? 0 : arr[i].size() - dot - 1;
        maxW = max(maxW, wl);
        maxF = max(maxF, fl);
    }
    for (int i = 0; i < arr.size(); i++) {
        size_t dot = arr[i].find('.');
        string w = dot == string::npos ? arr[i] : arr[i].substr(0, dot);
        string f = dot == string::npos ? "" : arr[i].substr(dot + 1);
        decs[i].aligned = string(maxW - w.size(), '0') + w + f + string(maxF - f.size(), '0');
    }
    int L = maxW + maxF;
    vector<Dec> temp(arr.size());
    for (int i = L - 1; i >= 0; i--) {
        int count[10] = {0};
        for (const auto& d : decs) count[d.aligned[i] - '0']++;
        for (int j = 1; j < 10; j++) count[j] += count[j - 1];
        for (int j = arr.size() - 1; j >= 0; j--) {
            int digit = decs[j].aligned[i] - '0';
            temp[count[digit] - 1] = decs[j];
            count[digit]--;
        }
        decs = temp;
    }
    for (int i = 0; i < arr.size(); i++) arr[i] = decs[i].original;
}`
    }
  },
  {
    id: 'rs-h5',
    solutions: {
      python: `def radix_sort_base_256(arr):
    output = [0] * len(arr)
    for shift in (0, 8, 16, 24):
        count = [0] * 256
        for num in arr:
            count[(num >> shift) & 0xFF] += 1
        for i in range(1, 256):
            count[i] += count[i - 1]
        for i in range(len(arr) - 1, -1, -1):
            digit = (arr[i] >> shift) & 0xFF
            output[count[digit] - 1] = arr[i]
            count[digit] -= 1
        arr = output[:]
    return arr`,
      java: `    public static long[] radixSortBase256(long[] arr) {
        long[] output = new long[arr.length];
        for (int shift = 0; shift <= 24; shift += 8) {
            int[] count = new int[256];
            for (long num : arr) count[(int)((num >> shift) & 0xFF)]++;
            for (int i = 1; i < 256; i++) count[i] += count[i - 1];
            for (int i = arr.length - 1; i >= 0; i--) {
                int digit = (int)((arr[i] >> shift) & 0xFF);
                output[count[digit] - 1] = arr[i];
                count[digit]--;
            }
            System.arraycopy(output, 0, arr, 0, arr.length);
        }
        return arr;
    }`,
      c: `void radixSortBase256(unsigned int* arr, int n) {
    unsigned int* output = (unsigned int*)malloc(n * sizeof(unsigned int));
    for (int shift = 0; shift <= 24; shift += 8) {
        int count[256] = {0};
        for (int i = 0; i < n; i++) count[(arr[i] >> shift) & 0xFF]++;
        for (int i = 1; i < 256; i++) count[i] += count[i - 1];
        for (int i = n - 1; i >= 0; i--) {
            int digit = (arr[i] >> shift) & 0xFF;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        for (int i = 0; i < n; i++) arr[i] = output[i];
    }
    free(output);
}`,
      cpp: `void radixSortBase256(vector<unsigned int>& arr) {
    vector<unsigned int> output(arr.size());
    for (int shift = 0; shift <= 24; shift += 8) {
        vector<int> count(256, 0);
        for (unsigned int num : arr) count[(num >> shift) & 0xFF]++;
        for (int i = 1; i < 256; i++) count[i] += count[i - 1];
        for (int i = arr.size() - 1; i >= 0; i--) {
            int digit = (arr[i] >> shift) & 0xFF;
            output[count[digit] - 1] = arr[i];
            count[digit]--;
        }
        arr = output;
    }
}`
    }
  }
];