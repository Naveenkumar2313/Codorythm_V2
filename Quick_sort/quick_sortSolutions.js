export const quickSortSolutions = [
  // --- EASY SOLUTIONS ---
  {
    id: 'qs-e1',
    solutions: {
      python: `def quick_sort(arr):
    def sort(low, high):
        if low < high:
            pi = partition(low, high)
            sort(low, pi - 1)
            sort(pi + 1, high)
    def partition(low, high):
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            if arr[j] <= pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i + 1], arr[high] = arr[high], arr[i + 1]
        return i + 1
    sort(0, len(arr) - 1)
    return arr`,
      java: `    static void sort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }
    static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            }
        }
        int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
        return i + 1;
    }
    public static int[] quickSort(int[] arr) {
        sort(arr, 0, arr.length - 1);
        return arr;
    }`,
      c: `int partition_qs(int* arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    int temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
    return i + 1;
}
void sort_qs(int* arr, int low, int high) {
    if (low < high) {
        int pi = partition_qs(arr, low, high);
        sort_qs(arr, low, pi - 1);
        sort_qs(arr, pi + 1, high);
    }
}
void quickSort(int* arr, int n) {
    sort_qs(arr, 0, n - 1);
}`,
      cpp: `int partition_qs(vector<int>& arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr[high]);
    return i + 1;
}
void sort_qs(vector<int>& arr, int low, int high) {
    if (low < high) {
        int pi = partition_qs(arr, low, high);
        sort_qs(arr, low, pi - 1);
        sort_qs(arr, pi + 1, high);
    }
}
void quickSort(vector<int>& arr) {
    sort_qs(arr, 0, arr.size() - 1);
}`
    }
  },
  {
    id: 'qs-e2',
    solutions: {
      python: `def partition_array(arr, x):
    idx = arr.index(x)
    arr[idx], arr[-1] = arr[-1], arr[idx]
    i = -1
    for j in range(len(arr) - 1):
        if arr[j] < x:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    arr[i + 1], arr[-1] = arr[-1], arr[i + 1]
    return arr`,
      java: `    public static int[] partitionArray(int[] arr, int x) {
        int idx = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == x) { idx = i; break; }
        }
        int temp = arr[idx]; arr[idx] = arr[arr.length - 1]; arr[arr.length - 1] = temp;
        int i = -1;
        for (int j = 0; j < arr.length - 1; j++) {
            if (arr[j] < x) {
                i++;
                temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            }
        }
        temp = arr[i + 1]; arr[i + 1] = arr[arr.length - 1]; arr[arr.length - 1] = temp;
        return arr;
    }`,
      c: `void partitionArray(int* arr, int n, int x) {
    int idx = -1;
    for (int i = 0; i < n; i++) {
        if (arr[i] == x) { idx = i; break; }
    }
    int temp = arr[idx]; arr[idx] = arr[n - 1]; arr[n - 1] = temp;
    int i = -1;
    for (int j = 0; j < n - 1; j++) {
        if (arr[j] < x) {
            i++;
            temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
        }
    }
    temp = arr[i + 1]; arr[i + 1] = arr[n - 1]; arr[n - 1] = temp;
}`,
      cpp: `void partitionArray(vector<int>& arr, int x) {
    int idx = -1;
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == x) { idx = i; break; }
    }
    swap(arr[idx], arr.back());
    int i = -1;
    for (int j = 0; j < arr.size() - 1; j++) {
        if (arr[j] < x) {
            i++;
            swap(arr[i], arr[j]);
        }
    }
    swap(arr[i + 1], arr.back());
}`
    }
  },
  {
    id: 'qs-e3',
    solutions: {
      python: `def sort_array_by_parity(arr):
    i = 0
    for j in range(len(arr)):
        if arr[j] % 2 == 0:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    return arr`,
      java: `    public static int[] sortArrayByParity(int[] arr) {
        int i = 0;
        for (int j = 0; j < arr.length; j++) {
            if (arr[j] % 2 == 0) {
                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                i++;
            }
        }
        return arr;
    }`,
      c: `void sortArrayByParity(int* arr, int n) {
    int i = 0;
    for (int j = 0; j < n; j++) {
        if (arr[j] % 2 == 0) {
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            i++;
        }
    }
}`,
      cpp: `void sortArrayByParity(vector<int>& arr) {
    int i = 0;
    for (int j = 0; j < arr.size(); j++) {
        if (arr[j] % 2 == 0) {
            swap(arr[i], arr[j]);
            i++;
        }
    }
}`
    }
  },
  {
    id: 'qs-e4',
    solutions: {
      python: `def move_zeroes(arr):
    i = 0
    for j in range(len(arr)):
        if arr[j] != 0:
            arr[i], arr[j] = arr[j], arr[i]
            i += 1
    return arr`,
      java: `    public static int[] moveZeroes(int[] arr) {
        int i = 0;
        for (int j = 0; j < arr.length; j++) {
            if (arr[j] != 0) {
                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                i++;
            }
        }
        return arr;
    }`,
      c: `void moveZeroes(int* arr, int n) {
    int i = 0;
    for (int j = 0; j < n; j++) {
        if (arr[j] != 0) {
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            i++;
        }
    }
}`,
      cpp: `void moveZeroes(vector<int>& arr) {
    int i = 0;
    for (int j = 0; j < arr.size(); j++) {
        if (arr[j] != 0) {
            swap(arr[i], arr[j]);
            i++;
        }
    }
}`
    }
  },
  {
    id: 'qs-e5',
    solutions: {
      python: `def kth_smallest(arr, k):
    def quick_select(low, high, k):
        pivot = arr[high]
        i = low
        for j in range(low, high):
            if arr[j] <= pivot:
                arr[i], arr[j] = arr[j], arr[i]
                i += 1
        arr[i], arr[high] = arr[high], arr[i]
        if i == k - 1: return arr[i]
        elif i > k - 1: return quick_select(low, i - 1, k)
        else: return quick_select(i + 1, high, k)
    return quick_select(0, len(arr) - 1, k)`,
      java: `    static int quickSelect(int[] arr, int low, int high, int k) {
        int pivot = arr[high];
        int i = low;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                i++;
            }
        }
        int temp = arr[i]; arr[i] = arr[high]; arr[high] = temp;
        if (i == k - 1) return arr[i];
        else if (i > k - 1) return quickSelect(arr, low, i - 1, k);
        else return quickSelect(arr, i + 1, high, k);
    }
    public static int kthSmallest(int[] arr, int k) {
        return quickSelect(arr, 0, arr.length - 1, k);
    }`,
      c: `int quickSelect(int* arr, int low, int high, int k) {
    int pivot = arr[high];
    int i = low;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            i++;
        }
    }
    int temp = arr[i]; arr[i] = arr[high]; arr[high] = temp;
    if (i == k - 1) return arr[i];
    else if (i > k - 1) return quickSelect(arr, low, i - 1, k);
    else return quickSelect(arr, i + 1, high, k);
}
int kthSmallest(int* arr, int n, int k) {
    return quickSelect(arr, 0, n - 1, k);
}`,
      cpp: `int quickSelect(vector<int>& arr, int low, int high, int k) {
    int pivot = arr[high];
    int i = low;
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            swap(arr[i], arr[j]);
            i++;
        }
    }
    swap(arr[i], arr[high]);
    if (i == k - 1) return arr[i];
    else if (i > k - 1) return quickSelect(arr, low, i - 1, k);
    else return quickSelect(arr, i + 1, high, k);
}
int kthSmallest(vector<int>& arr, int k) {
    return quickSelect(arr, 0, arr.size() - 1, k);
}`
    }
  },

  // --- MEDIUM SOLUTIONS ---
  {
    id: 'qs-m1',
    solutions: {
      python: `import random
def randomized_quick_sort(arr):
    def sort(low, high):
        if low < high:
            r = random.randint(low, high)
            arr[r], arr[high] = arr[high], arr[r]
            pivot = arr[high]
            i = low - 1
            for j in range(low, high):
                if arr[j] <= pivot:
                    i += 1
                    arr[i], arr[j] = arr[j], arr[i]
            arr[i + 1], arr[high] = arr[high], arr[i + 1]
            pi = i + 1
            sort(low, pi - 1)
            sort(pi + 1, high)
    sort(0, len(arr) - 1)
    return arr`,
      java: `    static void sort(int[] arr, int low, int high, Random rand) {
        if (low < high) {
            int r = low + rand.nextInt(high - low + 1);
            int temp = arr[r]; arr[r] = arr[high]; arr[high] = temp;
            int pivot = arr[high];
            int i = low - 1;
            for (int j = low; j < high; j++) {
                if (arr[j] <= pivot) {
                    i++;
                    temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                }
            }
            temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
            int pi = i + 1;
            sort(arr, low, pi - 1, rand);
            sort(arr, pi + 1, high, rand);
        }
    }
    public static int[] randomizedQuickSort(int[] arr) {
        sort(arr, 0, arr.length - 1, new Random());
        return arr;
    }`,
      c: `void sort_rqs(int* arr, int low, int high) {
    if (low < high) {
        int r = low + rand() % (high - low + 1);
        int temp = arr[r]; arr[r] = arr[high]; arr[high] = temp;
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            }
        }
        temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
        int pi = i + 1;
        sort_rqs(arr, low, pi - 1);
        sort_rqs(arr, pi + 1, high);
    }
}
void randomizedQuickSort(int* arr, int n) {
    sort_rqs(arr, 0, n - 1);
}`,
      cpp: `void sort_rqs(vector<int>& arr, int low, int high) {
    if (low < high) {
        int r = low + rand() % (high - low + 1);
        swap(arr[r], arr[high]);
        int pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                swap(arr[i], arr[j]);
            }
        }
        swap(arr[i + 1], arr[high]);
        int pi = i + 1;
        sort_rqs(arr, low, pi - 1);
        sort_rqs(arr, pi + 1, high);
    }
}
void randomizedQuickSort(vector<int>& arr) {
    srand(time(0));
    sort_rqs(arr, 0, arr.size() - 1);
}`
    }
  },
  {
    id: 'qs-m2',
    solutions: {
      python: `def sort_colors(nums):
    low, mid, high = 0, 0, len(nums) - 1
    while mid <= high:
        if nums[mid] == 0:
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        elif nums[mid] == 1:
            mid += 1
        else:
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
    return nums`,
      java: `    public static int[] sortColors(int[] nums) {
        int low = 0, mid = 0, high = nums.length - 1;
        while (mid <= high) {
            if (nums[mid] == 0) {
                int temp = nums[low]; nums[low] = nums[mid]; nums[mid] = temp;
                low++; mid++;
            } else if (nums[mid] == 1) {
                mid++;
            } else {
                int temp = nums[mid]; nums[mid] = nums[high]; nums[high] = temp;
                high--;
            }
        }
        return nums;
    }`,
      c: `void sortColors(int* nums, int n) {
    int low = 0, mid = 0, high = n - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            int temp = nums[low]; nums[low] = nums[mid]; nums[mid] = temp;
            low++; mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            int temp = nums[mid]; nums[mid] = nums[high]; nums[high] = temp;
            high--;
        }
    }
}`,
      cpp: `void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;
    while (mid <= high) {
        if (nums[mid] == 0) {
            swap(nums[low], nums[mid]);
            low++; mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            swap(nums[mid], nums[high]);
            high--;
        }
    }
}`
    }
  },
  {
    id: 'qs-m3',
    solutions: {
      python: `from collections import Counter
def top_k_frequent(nums, k):
    count = Counter(nums)
    unique = list(count.keys())
    def partition(left, right, pivot_index):
        pivot_freq = count[unique[pivot_index]]
        unique[pivot_index], unique[right] = unique[right], unique[pivot_index]
        store_index = left
        for i in range(left, right):
            if count[unique[i]] < pivot_freq:
                unique[store_index], unique[i] = unique[i], unique[store_index]
                store_index += 1
        unique[right], unique[store_index] = unique[store_index], unique[right]
        return store_index
    def quickselect(left, right, k_smallest):
        if left == right: return
        import random
        pivot_index = random.randint(left, right)
        pivot_index = partition(left, right, pivot_index)
        if k_smallest == pivot_index: return
        elif k_smallest < pivot_index: quickselect(left, pivot_index - 1, k_smallest)
        else: quickselect(pivot_index + 1, right, k_smallest)
    quickselect(0, len(unique) - 1, len(unique) - k)
    return unique[len(unique)-k:]`,
      java: `    static int partition(int[] unique, Map<Integer, Integer> map, int left, int right, int pivotIndex) {
        int pivotFreq = map.get(unique[pivotIndex]);
        int temp = unique[pivotIndex]; unique[pivotIndex] = unique[right]; unique[right] = temp;
        int storeIndex = left;
        for (int i = left; i < right; i++) {
            if (map.get(unique[i]) < pivotFreq) {
                temp = unique[storeIndex]; unique[storeIndex] = unique[i]; unique[i] = temp;
                storeIndex++;
            }
        }
        temp = unique[right]; unique[right] = unique[storeIndex]; unique[storeIndex] = temp;
        return storeIndex;
    }
    static void quickSelect(int[] unique, Map<Integer, Integer> map, int left, int right, int kSmallest, Random rand) {
        if (left >= right) return;
        int pivotIndex = left + rand.nextInt(right - left + 1);
        pivotIndex = partition(unique, map, left, right, pivotIndex);
        if (kSmallest == pivotIndex) return;
        else if (kSmallest < pivotIndex) quickSelect(unique, map, left, pivotIndex - 1, kSmallest, rand);
        else quickSelect(unique, map, pivotIndex + 1, right, kSmallest, rand);
    }
    public static int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int n : nums) map.put(n, map.getOrDefault(n, 0) + 1);
        int[] unique = new int[map.size()];
        int idx = 0; for (int num : map.keySet()) unique[idx++] = num;
        quickSelect(unique, map, 0, unique.length - 1, unique.length - k, new Random());
        return Arrays.copyOfRange(unique, unique.length - k, unique.length);
    }`,
      c: `// Standard C hashing is tedious, using an array of pairs.
typedef struct { int val, freq; } Pair;
int partition_tkf(Pair* arr, int left, int right) {
    int pivotFreq = arr[right].freq;
    int i = left;
    for (int j = left; j < right; j++) {
        if (arr[j].freq < pivotFreq) {
            Pair temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            i++;
        }
    }
    Pair temp = arr[i]; arr[i] = arr[right]; arr[right] = temp;
    return i;
}
void quickSelect_tkf(Pair* arr, int left, int right, int kSmallest) {
    if (left >= right) return;
    int pivotIndex = partition_tkf(arr, left, right);
    if (kSmallest == pivotIndex) return;
    else if (kSmallest < pivotIndex) quickSelect_tkf(arr, left, pivotIndex - 1, kSmallest);
    else quickSelect_tkf(arr, pivotIndex + 1, right, kSmallest);
}
int* topKFrequent(int* nums, int n, int k, int* returnSize) {
    // Sort array to count frequencies
    qsort(nums, n, sizeof(int), cmpFunc); // cmpFunc from starterCode
    Pair pairs[10005]; int unique = 0;
    pairs[unique].val = nums[0]; pairs[unique].freq = 1;
    for (int i = 1; i < n; i++) {
        if (nums[i] == nums[i-1]) pairs[unique].freq++;
        else { unique++; pairs[unique].val = nums[i]; pairs[unique].freq = 1; }
    }
    unique++;
    quickSelect_tkf(pairs, 0, unique - 1, unique - k);
    int* res = (int*)malloc(k * sizeof(int));
    for (int i = 0; i < k; i++) res[i] = pairs[unique - k + i].val;
    *returnSize = k;
    return res;
}`,
      cpp: `int partition_tkf(vector<pair<int,int>>& arr, int left, int right) {
    int pivotFreq = arr[right].second;
    int i = left;
    for (int j = left; j < right; j++) {
        if (arr[j].second < pivotFreq) {
            swap(arr[i], arr[j]);
            i++;
        }
    }
    swap(arr[i], arr[right]);
    return i;
}
void quickSelect_tkf(vector<pair<int,int>>& arr, int left, int right, int kSmallest) {
    if (left >= right) return;
    int pivotIndex = partition_tkf(arr, left, right);
    if (kSmallest == pivotIndex) return;
    else if (kSmallest < pivotIndex) quickSelect_tkf(arr, left, pivotIndex - 1, kSmallest);
    else quickSelect_tkf(arr, pivotIndex + 1, right, kSmallest);
}
vector<int> topKFrequent(vector<int>& nums, int k) {
    unordered_map<int, int> count;
    for (int n : nums) count[n]++;
    vector<pair<int,int>> unique;
    for (auto p : count) unique.push_back(p);
    quickSelect_tkf(unique, 0, unique.size() - 1, unique.size() - k);
    vector<int> res;
    for (int i = unique.size() - k; i < unique.size(); i++) res.push_back(unique[i].first);
    return res;
}`
    }
  },
  {
    id: 'qs-m4',
    solutions: {
      python: `def k_closest(points, k):
    def dist(p): return p[0]**2 + p[1]**2
    def partition(l, r):
        pivot = dist(points[r])
        i = l
        for j in range(l, r):
            if dist(points[j]) <= pivot:
                points[i], points[j] = points[j], points[i]
                i += 1
        points[i], points[r] = points[r], points[i]
        return i
    def quick_select(l, r, K):
        if l >= r: return
        pi = partition(l, r)
        if pi == K: return
        elif pi < K: quick_select(pi + 1, r, K)
        else: quick_select(l, pi - 1, K)
    quick_select(0, len(points) - 1, k)
    return points[:k]`,
      java: `    static int dist(int[] p) { return p[0]*p[0] + p[1]*p[1]; }
    static int partition(int[][] points, int l, int r) {
        int pivot = dist(points[r]);
        int i = l;
        for (int j = l; j < r; j++) {
            if (dist(points[j]) <= pivot) {
                int[] temp = points[i]; points[i] = points[j]; points[j] = temp;
                i++;
            }
        }
        int[] temp = points[i]; points[i] = points[r]; points[r] = temp;
        return i;
    }
    static void quickSelect(int[][] points, int l, int r, int k) {
        if (l >= r) return;
        int pi = partition(points, l, r);
        if (pi == k) return;
        else if (pi < k) quickSelect(points, pi + 1, r, k);
        else quickSelect(points, l, pi - 1, k);
    }
    public static int[][] kClosest(int[][] points, int k) {
        quickSelect(points, 0, points.length - 1, k);
        return Arrays.copyOfRange(points, 0, k);
    }`,
      c: `int dist(int* p) { return p[0]*p[0] + p[1]*p[1]; }
int partition_kc(int** points, int l, int r) {
    int pivot = dist(points[r]);
    int i = l;
    for (int j = l; j < r; j++) {
        if (dist(points[j]) <= pivot) {
            int* temp = points[i]; points[i] = points[j]; points[j] = temp;
            i++;
        }
    }
    int* temp = points[i]; points[i] = points[r]; points[r] = temp;
    return i;
}
void quickSelect_kc(int** points, int l, int r, int k) {
    if (l >= r) return;
    int pi = partition_kc(points, l, r);
    if (pi == k) return;
    else if (pi < k) quickSelect_kc(points, pi + 1, r, k);
    else quickSelect_kc(points, l, pi - 1, k);
}
int** kClosest(int** points, int n, int k, int* returnSize) {
    quickSelect_kc(points, 0, n - 1, k);
    *returnSize = k;
    int** res = (int**)malloc(k * sizeof(int*));
    for (int i = 0; i < k; i++) {
        res[i] = (int*)malloc(2 * sizeof(int));
        res[i][0] = points[i][0]; res[i][1] = points[i][1];
    }
    return res;
}`,
      cpp: `int dist(const vector<int>& p) { return p[0]*p[0] + p[1]*p[1]; }
int partition_kc(vector<vector<int>>& points, int l, int r) {
    int pivot = dist(points[r]);
    int i = l;
    for (int j = l; j < r; j++) {
        if (dist(points[j]) <= pivot) {
            swap(points[i], points[j]);
            i++;
        }
    }
    swap(points[i], points[r]);
    return i;
}
void quickSelect_kc(vector<vector<int>>& points, int l, int r, int k) {
    if (l >= r) return;
    int pi = partition_kc(points, l, r);
    if (pi == k) return;
    else if (pi < k) quickSelect_kc(points, pi + 1, r, k);
    else quickSelect_kc(points, l, pi - 1, k);
}
vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
    quickSelect_kc(points, 0, points.size() - 1, k);
    return vector<vector<int>>(points.begin(), points.begin() + k);
}`
    }
  },
  {
    id: 'qs-m5',
    solutions: {
      python: `from functools import cmp_to_key
def largest_number(nums):
    def cmp(a, b):
        if a + b > b + a: return -1
        elif a + b < b + a: return 1
        return 0
    def quick_sort(arr, low, high):
        if low < high:
            pivot = arr[high]
            i = low - 1
            for j in range(low, high):
                if cmp(arr[j], pivot) < 0:
                    i += 1
                    arr[i], arr[j] = arr[j], arr[i]
            arr[i + 1], arr[high] = arr[high], arr[i + 1]
            pi = i + 1
            quick_sort(arr, low, pi - 1)
            quick_sort(arr, pi + 1, high)
    strs = list(map(str, nums))
    quick_sort(strs, 0, len(strs) - 1)
    res = "".join(strs)
    return "0" if res[0] == "0" else res`,
      java: `    static int cmp(String a, String b) {
        return (b + a).compareTo(a + b);
    }
    static void quickSort(String[] arr, int low, int high) {
        if (low < high) {
            String pivot = arr[high];
            int i = low - 1;
            for (int j = low; j < high; j++) {
                if (cmp(arr[j], pivot) < 0) {
                    i++;
                    String temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                }
            }
            String temp = arr[i + 1]; arr[i + 1] = arr[high]; arr[high] = temp;
            int pi = i + 1;
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }
    public static String largestNumber(int[] nums) {
        String[] strs = new String[nums.length];
        for (int i = 0; i < nums.length; i++) strs[i] = String.valueOf(nums[i]);
        quickSort(strs, 0, strs.length - 1);
        if (strs[0].equals("0")) return "0";
        StringBuilder sb = new StringBuilder();
        for (String s : strs) sb.append(s);
        return sb.toString();
    }`,
      c: `int cmp_ln(const void* a, const void* b) {
    char* sa = *(char**)a;
    char* sb = *(char**)b;
    char ba[25], ab[25];
    sprintf(ab, "%s%s", sa, sb);
    sprintf(ba, "%s%s", sb, sa);
    return strcmp(ba, ab);
}
char* largestNumber(int* nums, int n) {
    char** strs = (char**)malloc(n * sizeof(char*));
    for (int i = 0; i < n; i++) {
        strs[i] = (char*)malloc(12 * sizeof(char));
        sprintf(strs[i], "%d", nums[i]);
    }
    qsort(strs, n, sizeof(char*), cmp_ln); // using standard quick sort here
    if (strs[0][0] == '0') {
        char* res = (char*)malloc(2 * sizeof(char));
        strcpy(res, "0");
        return res;
    }
    int len = 0;
    for (int i = 0; i < n; i++) len += strlen(strs[i]);
    char* res = (char*)malloc((len + 1) * sizeof(char));
    res[0] = '\\0';
    for (int i = 0; i < n; i++) {
        strcat(res, strs[i]);
        free(strs[i]);
    }
    free(strs);
    return res;
}`,
      cpp: `int cmp_ln(const string& a, const string& b) {
    return a + b > b + a;
}
void quick_sort_ln(vector<string>& arr, int low, int high) {
    if (low < high) {
        string pivot = arr[high];
        int i = low - 1;
        for (int j = low; j < high; j++) {
            if (cmp_ln(arr[j], pivot)) {
                i++;
                swap(arr[i], arr[j]);
            }
        }
        swap(arr[i + 1], arr[high]);
        int pi = i + 1;
        quick_sort_ln(arr, low, pi - 1);
        quick_sort_ln(arr, pi + 1, high);
    }
}
string largestNumber(vector<int>& nums) {
    vector<string> strs;
    for (int n : nums) strs.push_back(to_string(n));
    quick_sort_ln(strs, 0, strs.size() - 1);
    if (strs[0] == "0") return "0";
    string res = "";
    for (string& s : strs) res += s;
    return res;
}`
    }
  },

  // --- HARD SOLUTIONS ---
  {
    id: 'qs-h1',
    solutions: {
      python: `def sort_list(head):
    def get_tail(node):
        while node and node.next: node = node.next
        return node
    def partition(start, end):
        if start == end or not start or not end: return start, end
        pivot_prev = start
        curr = start
        pivot = end.val
        tail = pivot_prev
        while curr != end:
            if curr.val < pivot:
                pivot_prev = curr
                temp = curr.val
                curr.val = tail.val
                tail.val = temp
                tail = tail.next
            curr = curr.next
        temp = tail.val
        tail.val = pivot
        end.val = temp
        return pivot_prev, tail
    def quick_sort(start, end):
        if not start or start == end or start == end.next: return
        pivot_prev, pivot_node = partition(start, end)
        if start != pivot_node:
            temp = start
            while temp.next != pivot_node: temp = temp.next
            quick_sort(start, temp)
        if pivot_node and pivot_node.next:
            quick_sort(pivot_node.next, end)
    tail = get_tail(head)
    quick_sort(head, tail)
    return head`,
      java: `    static ListNode getTail(ListNode node) {
        while (node != null && node.next != null) node = node.next;
        return node;
    }
    static ListNode[] partition(ListNode start, ListNode end) {
        ListNode pivotPrev = start, curr = start, tail = start;
        int pivot = end.val;
        while (curr != end) {
            if (curr.val < pivot) {
                pivotPrev = curr;
                int temp = curr.val; curr.val = tail.val; tail.val = temp;
                tail = tail.next;
            }
            curr = curr.next;
        }
        int temp = tail.val; tail.val = pivot; end.val = temp;
        return new ListNode[]{pivotPrev, tail};
    }
    static void quickSortList(ListNode start, ListNode end) {
        if (start == null || start == end || start == end.next) return;
        ListNode[] p = partition(start, end);
        ListNode pivotPrev = p[0], pivotNode = p[1];
        if (start != pivotNode) {
            ListNode temp = start;
            while (temp.next != pivotNode) temp = temp.next;
            quickSortList(start, temp);
        }
        if (pivotNode != null && pivotNode.next != null)
            quickSortList(pivotNode.next, end);
    }
    public static ListNode sortList(ListNode head) {
        quickSortList(head, getTail(head));
        return head;
    }`,
      c: `struct ListNode* getTail(struct ListNode* node) {
    while (node != NULL && node->next != NULL) node = node->next;
    return node;
}
struct ListNode** partition_sl(struct ListNode* start, struct ListNode* end) {
    struct ListNode** res = malloc(2 * sizeof(struct ListNode*));
    struct ListNode *pivotPrev = start, *curr = start, *tail = start;
    int pivot = end->val;
    while (curr != end) {
        if (curr->val < pivot) {
            pivotPrev = curr;
            int temp = curr->val; curr->val = tail->val; tail->val = temp;
            tail = tail->next;
        }
        curr = curr->next;
    }
    int temp = tail->val; tail->val = pivot; end->val = temp;
    res[0] = pivotPrev; res[1] = tail;
    return res;
}
void quickSortList(struct ListNode* start, struct ListNode* end) {
    if (start == NULL || start == end || start == end->next) return;
    struct ListNode** p = partition_sl(start, end);
    struct ListNode *pivotPrev = p[0], *pivotNode = p[1];
    if (start != pivotNode) {
        struct ListNode* temp = start;
        while (temp->next != pivotNode) temp = temp->next;
        quickSortList(start, temp);
    }
    if (pivotNode != NULL && pivotNode->next != NULL)
        quickSortList(pivotNode->next, end);
    free(p);
}
struct ListNode* sortList(struct ListNode* head) {
    quickSortList(head, getTail(head));
    return head;
}`,
      cpp: `ListNode* getTail(ListNode* node) {
    while (node != NULL && node->next != NULL) node = node->next;
    return node;
}
pair<ListNode*, ListNode*> partition_sl(ListNode* start, ListNode* end) {
    ListNode *pivotPrev = start, *curr = start, *tail = start;
    int pivot = end->val;
    while (curr != end) {
        if (curr->val < pivot) {
            pivotPrev = curr;
            swap(curr->val, tail->val);
            tail = tail->next;
        }
        curr = curr->next;
    }
    swap(tail->val, end->val);
    return {pivotPrev, tail};
}
void quickSortList(ListNode* start, ListNode* end) {
    if (start == NULL || start == end || start == end->next) return;
    auto p = partition_sl(start, end);
    ListNode *pivotPrev = p.first, *pivotNode = p.second;
    if (start != pivotNode) {
        ListNode* temp = start;
        while (temp->next != pivotNode) temp = temp->next;
        quickSortList(start, temp);
    }
    if (pivotNode != NULL && pivotNode->next != NULL)
        quickSortList(pivotNode->next, end);
}
ListNode* sortList(ListNode* head) {
    quickSortList(head, getTail(head));
    return head;
}`
    }
  },
  {
    id: 'qs-h2',
    solutions: {
      python: `def find_median(arr):
    def quick_select(l, r, k):
        pivot = arr[r]
        i = l
        for j in range(l, r):
            if arr[j] <= pivot:
                arr[i], arr[j] = arr[j], arr[i]
                i += 1
        arr[i], arr[r] = arr[r], arr[i]
        if i == k: return arr[i]
        elif i < k: return quick_select(i + 1, r, k)
        else: return quick_select(l, i - 1, k)
    n = len(arr)
    if n % 2 == 1:
        return float(quick_select(0, n - 1, n // 2))
    else:
        # Since quick_select partitions, elements left of n//2 are <= arr[n//2]
        right = quick_select(0, n - 1, n // 2)
        left = max(arr[:n//2])
        return (left + right) / 2.0`,
      java: `    static int quickSelect(int[] arr, int l, int r, int k) {
        int pivot = arr[r], i = l;
        for (int j = l; j < r; j++) {
            if (arr[j] <= pivot) {
                int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                i++;
            }
        }
        int temp = arr[i]; arr[i] = arr[r]; arr[r] = temp;
        if (i == k) return arr[i];
        else if (i < k) return quickSelect(arr, i + 1, r, k);
        else return quickSelect(arr, l, i - 1, k);
    }
    public static double findMedian(int[] arr) {
        int n = arr.length;
        if (n % 2 == 1) return (double)quickSelect(arr, 0, n - 1, n / 2);
        int right = quickSelect(arr, 0, n - 1, n / 2);
        int left = arr[0];
        for (int i = 1; i < n / 2; i++) if (arr[i] > left) left = arr[i];
        return (left + right) / 2.0;
    }`,
      c: `int quickSelect_m(int* arr, int l, int r, int k) {
    int pivot = arr[r], i = l;
    for (int j = l; j < r; j++) {
        if (arr[j] <= pivot) {
            int temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            i++;
        }
    }
    int temp = arr[i]; arr[i] = arr[r]; arr[r] = temp;
    if (i == k) return arr[i];
    else if (i < k) return quickSelect_m(arr, i + 1, r, k);
    else return quickSelect_m(arr, l, i - 1, k);
}
double findMedian(int* arr, int n) {
    if (n % 2 == 1) return (double)quickSelect_m(arr, 0, n - 1, n / 2);
    int right = quickSelect_m(arr, 0, n - 1, n / 2);
    int left = arr[0];
    for (int i = 1; i < n / 2; i++) if (arr[i] > left) left = arr[i];
    return (left + right) / 2.0;
}`,
      cpp: `int quickSelect_m(vector<int>& arr, int l, int r, int k) {
    int pivot = arr[r], i = l;
    for (int j = l; j < r; j++) {
        if (arr[j] <= pivot) {
            swap(arr[i], arr[j]);
            i++;
        }
    }
    swap(arr[i], arr[r]);
    if (i == k) return arr[i];
    else if (i < k) return quickSelect_m(arr, i + 1, r, k);
    else return quickSelect_m(arr, l, i - 1, k);
}
double findMedian(vector<int>& arr) {
    int n = arr.size();
    if (n % 2 == 1) return (double)quickSelect_m(arr, 0, n - 1, n / 2);
    int right = quickSelect_m(arr, 0, n - 1, n / 2);
    int left = arr[0];
    for (int i = 1; i < n / 2; i++) if (arr[i] > left) left = arr[i];
    return (left + right) / 2.0;
}`
    }
  },
  {
    id: 'qs-h3',
    solutions: {
      python: `def match_nuts_and_bolts(nuts, bolts):
    def partition(arr, low, high, pivot):
        i = low
        for j in range(low, high):
            if arr[j] < pivot:
                arr[i], arr[j] = arr[j], arr[i]
                i += 1
            elif arr[j] == pivot:
                arr[j], arr[high] = arr[high], arr[j]
                j -= 1
        arr[i], arr[high] = arr[high], arr[i]
        return i
    def match(nuts, bolts, low, high):
        if low < high:
            pivot = partition(nuts, low, high, bolts[high])
            partition(bolts, low, high, nuts[pivot])
            match(nuts, bolts, low, pivot - 1)
            match(nuts, bolts, pivot + 1, high)
    match(nuts, bolts, 0, len(nuts) - 1)`,
      java: `    static int partition(char[] arr, int low, int high, char pivot) {
        int i = low;
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                char temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
                i++;
            } else if (arr[j] == pivot) {
                char temp = arr[j]; arr[j] = arr[high]; arr[high] = temp;
                j--;
            }
        }
        char temp = arr[i]; arr[i] = arr[high]; arr[high] = temp;
        return i;
    }
    static void match(char[] nuts, char[] bolts, int low, int high) {
        if (low < high) {
            int pivot = partition(nuts, low, high, bolts[high]);
            partition(bolts, low, high, nuts[pivot]);
            match(nuts, bolts, low, pivot - 1);
            match(nuts, bolts, pivot + 1, high);
        }
    }
    public static void matchNutsAndBolts(char[] nuts, char[] bolts) {
        match(nuts, bolts, 0, nuts.length - 1);
    }`,
      c: `int partition_nb(char* arr, int low, int high, char pivot) {
    int i = low;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            char temp = arr[i]; arr[i] = arr[j]; arr[j] = temp;
            i++;
        } else if (arr[j] == pivot) {
            char temp = arr[j]; arr[j] = arr[high]; arr[high] = temp;
            j--;
        }
    }
    char temp = arr[i]; arr[i] = arr[high]; arr[high] = temp;
    return i;
}
void match_nb(char* nuts, char* bolts, int low, int high) {
    if (low < high) {
        int pivot = partition_nb(nuts, low, high, bolts[high]);
        partition_nb(bolts, low, high, nuts[pivot]);
        match_nb(nuts, bolts, low, pivot - 1);
        match_nb(nuts, bolts, pivot + 1, high);
    }
}
void matchNutsAndBolts(char* nuts, char* bolts, int n) {
    match_nb(nuts, bolts, 0, n - 1);
}`,
      cpp: `int partition_nb(vector<char>& arr, int low, int high, char pivot) {
    int i = low;
    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            swap(arr[i], arr[j]);
            i++;
        } else if (arr[j] == pivot) {
            swap(arr[j], arr[high]);
            j--;
        }
    }
    swap(arr[i], arr[high]);
    return i;
}
void match_nb(vector<char>& nuts, vector<char>& bolts, int low, int high) {
    if (low < high) {
        int pivot = partition_nb(nuts, low, high, bolts[high]);
        partition_nb(bolts, low, high, nuts[pivot]);
        match_nb(nuts, bolts, low, pivot - 1);
        match_nb(nuts, bolts, pivot + 1, high);
    }
}
void matchNutsAndBolts(vector<char>& nuts, vector<char>& bolts) {
    match_nb(nuts, bolts, 0, nuts.size() - 1);
}`
    }
  },
  {
    id: 'qs-h4',
    solutions: {
      python: `def quick_sort_3way(arr):
    def sort(l, r):
        if l >= r: return
        lt, i, gt = l, l + 1, r
        pivot = arr[l]
        while i <= gt:
            if arr[i] < pivot:
                arr[lt], arr[i] = arr[i], arr[lt]
                lt += 1
                i += 1
            elif arr[i] > pivot:
                arr[i], arr[gt] = arr[gt], arr[i]
                gt -= 1
            else:
                i += 1
        sort(l, lt - 1)
        sort(gt + 1, r)
    sort(0, len(arr) - 1)
    return arr`,
      java: `    static void sort(int[] arr, int l, int r) {
        if (l >= r) return;
        int lt = l, i = l + 1, gt = r;
        int pivot = arr[l];
        while (i <= gt) {
            if (arr[i] < pivot) {
                int temp = arr[lt]; arr[lt] = arr[i]; arr[i] = temp;
                lt++; i++;
            } else if (arr[i] > pivot) {
                int temp = arr[i]; arr[i] = arr[gt]; arr[gt] = temp;
                gt--;
            } else i++;
        }
        sort(arr, l, lt - 1);
        sort(arr, gt + 1, r);
    }
    public static int[] quickSort3Way(int[] arr) {
        sort(arr, 0, arr.length - 1);
        return arr;
    }`,
      c: `void sort_3way(int* arr, int l, int r) {
    if (l >= r) return;
    int lt = l, i = l + 1, gt = r;
    int pivot = arr[l];
    while (i <= gt) {
        if (arr[i] < pivot) {
            int temp = arr[lt]; arr[lt] = arr[i]; arr[i] = temp;
            lt++; i++;
        } else if (arr[i] > pivot) {
            int temp = arr[i]; arr[i] = arr[gt]; arr[gt] = temp;
            gt--;
        } else i++;
    }
    sort_3way(arr, l, lt - 1);
    sort_3way(arr, gt + 1, r);
}
void quickSort3Way(int* arr, int n) {
    sort_3way(arr, 0, n - 1);
}`,
      cpp: `void sort_3way(vector<int>& arr, int l, int r) {
    if (l >= r) return;
    int lt = l, i = l + 1, gt = r;
    int pivot = arr[l];
    while (i <= gt) {
        if (arr[i] < pivot) {
            swap(arr[lt], arr[i]);
            lt++; i++;
        } else if (arr[i] > pivot) {
            swap(arr[i], arr[gt]);
            gt--;
        } else i++;
    }
    sort_3way(arr, l, lt - 1);
    sort_3way(arr, gt + 1, r);
}
void quickSort3Way(vector<int>& arr) {
    sort_3way(arr, 0, arr.size() - 1);
}`
    }
  },
  {
    id: 'qs-h5',
    solutions: {
      python: `def wiggle_sort(nums):
    def quick_select(l, r, k):
        pivot = nums[r]
        i = l
        for j in range(l, r):
            if nums[j] <= pivot:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1
        nums[i], nums[r] = nums[r], nums[i]
        if i == k: return nums[i]
        elif i < k: return quick_select(i + 1, r, k)
        else: return quick_select(l, i - 1, k)
    n = len(nums)
    mid = quick_select(0, n - 1, n // 2)
    def v(i): return (1 + 2 * i) % (n | 1)
    i, j, k = 0, 0, n - 1
    while j <= k:
        if nums[v(j)] > mid:
            nums[v(i)], nums[v(j)] = nums[v(j)], nums[v(i)]
            i += 1; j += 1
        elif nums[v(j)] < mid:
            nums[v(j)], nums[v(k)] = nums[v(k)], nums[v(j)]
            k -= 1
        else: j += 1
    return nums`,
      java: `    static int quickSelect(int[] nums, int l, int r, int k) {
        int pivot = nums[r], i = l;
        for (int j = l; j < r; j++) {
            if (nums[j] <= pivot) {
                int temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
                i++;
            }
        }
        int temp = nums[i]; nums[i] = nums[r]; nums[r] = temp;
        if (i == k) return nums[i];
        else if (i < k) return quickSelect(nums, i + 1, r, k);
        else return quickSelect(nums, l, i - 1, k);
    }
    static int v(int i, int n) { return (1 + 2 * i) % (n | 1); }
    public static int[] wiggleSort(int[] nums) {
        int n = nums.length;
        int mid = quickSelect(nums, 0, n - 1, n / 2);
        int i = 0, j = 0, k = n - 1;
        while (j <= k) {
            if (nums[v(j, n)] > mid) {
                int temp = nums[v(i, n)]; nums[v(i, n)] = nums[v(j, n)]; nums[v(j, n)] = temp;
                i++; j++;
            } else if (nums[v(j, n)] < mid) {
                int temp = nums[v(j, n)]; nums[v(j, n)] = nums[v(k, n)]; nums[v(k, n)] = temp;
                k--;
            } else j++;
        }
        return nums;
    }`,
      c: `int quickSelect_ws(int* nums, int l, int r, int k) {
    int pivot = nums[r], i = l;
    for (int j = l; j < r; j++) {
        if (nums[j] <= pivot) {
            int temp = nums[i]; nums[i] = nums[j]; nums[j] = temp;
            i++;
        }
    }
    int temp = nums[i]; nums[i] = nums[r]; nums[r] = temp;
    if (i == k) return nums[i];
    else if (i < k) return quickSelect_ws(nums, i + 1, r, k);
    else return quickSelect_ws(nums, l, i - 1, k);
}
int v(int i, int n) { return (1 + 2 * i) % (n | 1); }
void wiggleSort(int* nums, int n) {
    int mid = quickSelect_ws(nums, 0, n - 1, n / 2);
    int i = 0, j = 0, k = n - 1;
    while (j <= k) {
        if (nums[v(j, n)] > mid) {
            int temp = nums[v(i, n)]; nums[v(i, n)] = nums[v(j, n)]; nums[v(j, n)] = temp;
            i++; j++;
        } else if (nums[v(j, n)] < mid) {
            int temp = nums[v(j, n)]; nums[v(j, n)] = nums[v(k, n)]; nums[v(k, n)] = temp;
            k--;
        } else j++;
    }
}`,
      cpp: `int quickSelect_ws(vector<int>& nums, int l, int r, int k) {
    int pivot = nums[r], i = l;
    for (int j = l; j < r; j++) {
        if (nums[j] <= pivot) {
            swap(nums[i], nums[j]);
            i++;
        }
    }
    swap(nums[i], nums[r]);
    if (i == k) return nums[i];
    else if (i < k) return quickSelect_ws(nums, i + 1, r, k);
    else return quickSelect_ws(nums, l, i - 1, k);
}
int v(int i, int n) { return (1 + 2 * i) % (n | 1); }
void wiggleSort(vector<int>& nums) {
    int n = nums.size();
    int mid = quickSelect_ws(nums, 0, n - 1, n / 2);
    int i = 0, j = 0, k = n - 1;
    while (j <= k) {
        if (nums[v(j, n)] > mid) {
            swap(nums[v(i, n)], nums[v(j, n)]);
            i++; j++;
        } else if (nums[v(j, n)] < mid) {
            swap(nums[v(j, n)], nums[v(k, n)]);
            k--;
        } else j++;
    }
}`
    }
  }
];