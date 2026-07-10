export const activitySelectionSolutions = [
  // --- EASY SOLUTIONS ---
  {
    id: 'as-e1',
    solutions: {
      python: `def max_activities(start, end):
    n = len(start)
    if n == 0: return 0
    activities = sorted(zip(start, end), key=lambda x: x[1])
    count = 1
    last_end = activities[0][1]
    for i in range(1, n):
        if activities[i][0] >= last_end:
            count += 1
            last_end = activities[i][1]
    return count`,
      java: `    public static int maxActivities(int[] start, int[] end) {
        int n = start.length;
        if (n == 0) return 0;
        int[][] acts = new int[n][2];
        for (int i = 0; i < n; i++) { acts[i][0] = start[i]; acts[i][1] = end[i]; }
        Arrays.sort(acts, (a, b) -> Integer.compare(a[1], b[1]));
        int count = 1, lastEnd = acts[0][1];
        for (int i = 1; i < n; i++) {
            if (acts[i][0] >= lastEnd) {
                count++;
                lastEnd = acts[i][1];
            }
        }
        return count;
    }`,
      c: `int cmp(const void* a, const void* b) { return ((int*)a)[1] - ((int*)b)[1]; }
int maxActivities(int* start, int* end, int n) {
    if (n == 0) return 0;
    int** acts = (int**)malloc(n * sizeof(int*));
    for (int i=0; i<n; i++) {
        acts[i] = (int*)malloc(2 * sizeof(int));
        acts[i][0] = start[i]; acts[i][1] = end[i];
    }
    qsort(acts, n, sizeof(int*), cmp);
    int count = 1, lastEnd = acts[0][1];
    for (int i=1; i<n; i++) {
        if (acts[i][0] >= lastEnd) {
            count++;
            lastEnd = acts[i][1];
        }
    }
    for(int i=0; i<n; i++) free(acts[i]);
    free(acts);
    return count;
}`,
      cpp: `#include <algorithm>
int maxActivities(vector<int>& start, vector<int>& end) {
    int n = start.size();
    if (n == 0) return 0;
    vector<pair<int, int>> acts(n);
    for (int i=0; i<n; i++) acts[i] = {start[i], end[i]};
    sort(acts.begin(), acts.end(), [](auto& a, auto& b){ return a.second < b.second; });
    int count = 1, lastEnd = acts[0].second;
    for (int i=1; i<n; i++) {
        if (acts[i].first >= lastEnd) {
            count++;
            lastEnd = acts[i].second;
        }
    }
    return count;
}`
    }
  },
  {
    id: 'as-e2',
    solutions: {
      python: `def can_attend(start, end):
    intervals = sorted(zip(start, end), key=lambda x: x[0])
    for i in range(1, len(intervals)):
        if intervals[i][0] < intervals[i-1][1]:
            return False
    return True`,
      java: `    public static boolean canAttend(int[] start, int[] end) {
        int n = start.length;
        int[][] intervals = new int[n][2];
        for(int i = 0; i < n; i++) { intervals[i][0] = start[i]; intervals[i][1] = end[i]; }
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        for(int i = 1; i < n; i++) {
            if(intervals[i][0] < intervals[i-1][1]) return false;
        }
        return true;
    }`,
      c: `int cmp(const void* a, const void* b) { return ((int*)a)[0] - ((int*)b)[0]; }
bool canAttend(int* start, int* end, int n) {
    if (n <= 1) return true;
    int** intervals = (int**)malloc(n * sizeof(int*));
    for (int i=0; i<n; i++) {
        intervals[i] = (int*)malloc(2 * sizeof(int));
        intervals[i][0] = start[i]; intervals[i][1] = end[i];
    }
    qsort(intervals, n, sizeof(int*), cmp);
    bool ans = true;
    for(int i=1; i<n; i++) {
        if(intervals[i][0] < intervals[i-1][1]) { ans = false; break; }
    }
    for(int i=0; i<n; i++) free(intervals[i]);
    free(intervals);
    return ans;
}`,
      cpp: `#include <algorithm>
bool canAttend(vector<int>& start, vector<int>& end) {
    int n = start.size();
    vector<pair<int, int>> intervals(n);
    for(int i=0; i<n; i++) intervals[i] = {start[i], end[i]};
    sort(intervals.begin(), intervals.end());
    for(int i=1; i<n; i++) {
        if(intervals[i].first < intervals[i-1].second) return false;
    }
    return true;
}`
    }
  },
  {
    id: 'as-e3',
    solutions: {
      python: `def find_content_children(g, s):
    g.sort()
    s.sort()
    i, j, count = 0, 0, 0
    while i < len(g) and j < len(s):
        if s[j] >= g[i]:
            count += 1
            i += 1
        j += 1
    return count`,
      java: `    public static int findContentChildren(int[] g, int[] s) {
        Arrays.sort(g);
        Arrays.sort(s);
        int i = 0, j = 0, count = 0;
        while(i < g.length && j < s.length) {
            if(s[j] >= g[i]) { count++; i++; }
            j++;
        }
        return count;
    }`,
      c: `int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }
int findContentChildren(int* g, int gSize, int* s, int sSize) {
    qsort(g, gSize, sizeof(int), cmp);
    qsort(s, sSize, sizeof(int), cmp);
    int i = 0, j = 0, count = 0;
    while(i < gSize && j < sSize) {
        if(s[j] >= g[i]) { count++; i++; }
        j++;
    }
    return count;
}`,
      cpp: `#include <algorithm>
int findContentChildren(vector<int>& g, vector<int>& s) {
    sort(g.begin(), g.end());
    sort(s.begin(), s.end());
    int i = 0, j = 0, count = 0;
    while(i < g.size() && j < s.size()) {
        if(s[j] >= g[i]) { count++; i++; }
        j++;
    }
    return count;
}`
    }
  },
  {
    id: 'as-e4',
    solutions: {
      python: `def lemonade_change(bills):
    five = ten = 0
    for bill in bills:
        if bill == 5:
            five += 1
        elif bill == 10:
            if not five: return False
            five -= 1
            ten += 1
        else:
            if ten and five:
                ten -= 1
                five -= 1
            elif five >= 3:
                five -= 3
            else:
                return False
    return True`,
      java: `    public static boolean lemonadeChange(int[] bills) {
        int five = 0, ten = 0;
        for (int bill : bills) {
            if (bill == 5) five++;
            else if (bill == 10) {
                if (five == 0) return false;
                five--; ten++;
            } else {
                if (ten > 0 && five > 0) { ten--; five--; }
                else if (five >= 3) { five -= 3; }
                else return false;
            }
        }
        return true;
    }`,
      c: `bool lemonadeChange(int* bills, int n) {
    int five = 0, ten = 0;
    for(int i = 0; i < n; i++) {
        if (bills[i] == 5) five++;
        else if (bills[i] == 10) {
            if (five == 0) return false;
            five--; ten++;
        } else {
            if (ten > 0 && five > 0) { ten--; five--; }
            else if (five >= 3) { five -= 3; }
            else return false;
        }
    }
    return true;
}`,
      cpp: `bool lemonadeChange(vector<int>& bills) {
    int five = 0, ten = 0;
    for (int bill : bills) {
        if (bill == 5) five++;
        else if (bill == 10) {
            if (five == 0) return false;
            five--; ten++;
        } else {
            if (ten > 0 && five > 0) { ten--; five--; }
            else if (five >= 3) { five -= 3; }
            else return false;
        }
    }
    return true;
}`
    }
  },
  {
    id: 'as-e5',
    solutions: {
      python: `def max_units(boxCount, units, truckSize):
    boxes = sorted(zip(boxCount, units), key=lambda x: -x[1])
    ans = 0
    for count, unit in boxes:
        take = min(truckSize, count)
        ans += take * unit
        truckSize -= take
        if truckSize == 0: break
    return ans`,
      java: `    public static int maxUnits(int[] boxCount, int[] units, int truckSize) {
        int n = boxCount.length;
        int[][] boxes = new int[n][2];
        for(int i=0; i<n; i++) { boxes[i][0] = boxCount[i]; boxes[i][1] = units[i]; }
        Arrays.sort(boxes, (a, b) -> Integer.compare(b[1], a[1]));
        int ans = 0;
        for (int[] box : boxes) {
            int take = Math.min(truckSize, box[0]);
            ans += take * box[1];
            truckSize -= take;
            if (truckSize == 0) break;
        }
        return ans;
    }`,
      c: `int cmp(const void* a, const void* b) { return ((int*)b)[1] - ((int*)a)[1]; }
int maxUnits(int* boxCount, int* units, int n, int truckSize) {
    int** boxes = (int**)malloc(n * sizeof(int*));
    for(int i=0; i<n; i++) {
        boxes[i] = (int*)malloc(2 * sizeof(int));
        boxes[i][0] = boxCount[i]; boxes[i][1] = units[i];
    }
    qsort(boxes, n, sizeof(int*), cmp);
    int ans = 0;
    for (int i = 0; i < n; i++) {
        int take = truckSize < boxes[i][0] ? truckSize : boxes[i][0];
        ans += take * boxes[i][1];
        truckSize -= take;
        if(truckSize == 0) break;
    }
    for(int i=0; i<n; i++) free(boxes[i]);
    free(boxes);
    return ans;
}`,
      cpp: `#include <algorithm>
int maxUnits(vector<int>& boxCount, vector<int>& units, int truckSize) {
    vector<pair<int, int>> boxes(boxCount.size());
    for(int i=0; i<boxCount.size(); i++) boxes[i] = {boxCount[i], units[i]};
    sort(boxes.begin(), boxes.end(), [](auto& a, auto& b){ return a.second > b.second; });
    int ans = 0;
    for (auto& box : boxes) {
        int take = min(truckSize, box.first);
        ans += take * box.second;
        truckSize -= take;
        if (truckSize == 0) break;
    }
    return ans;
}`
    }
  },

  // --- MEDIUM SOLUTIONS ---
  {
    id: 'as-m1',
    solutions: {
      python: `def erase_overlap_intervals(start, end):
    n = len(start)
    if n == 0: return 0
    intervals = sorted(zip(start, end), key=lambda x: x[1])
    count = 1
    last_end = intervals[0][1]
    for i in range(1, n):
        if intervals[i][0] >= last_end:
            count += 1
            last_end = intervals[i][1]
    return n - count`,
      java: `    public static int eraseOverlapIntervals(int[] start, int[] end) {
        int n = start.length;
        if (n == 0) return 0;
        int[][] intervals = new int[n][2];
        for (int i = 0; i < n; i++) { intervals[i][0] = start[i]; intervals[i][1] = end[i]; }
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[1], b[1]));
        int count = 1, lastEnd = intervals[0][1];
        for (int i = 1; i < n; i++) {
            if (intervals[i][0] >= lastEnd) {
                count++;
                lastEnd = intervals[i][1];
            }
        }
        return n - count;
    }`,
      c: `int cmp(const void* a, const void* b) { return ((int*)a)[1] - ((int*)b)[1]; }
int eraseOverlapIntervals(int* start, int* end, int n) {
    if (n == 0) return 0;
    int** intervals = (int**)malloc(n * sizeof(int*));
    for (int i=0; i<n; i++) {
        intervals[i] = (int*)malloc(2 * sizeof(int));
        intervals[i][0] = start[i]; intervals[i][1] = end[i];
    }
    qsort(intervals, n, sizeof(int*), cmp);
    int count = 1, lastEnd = intervals[0][1];
    for (int i=1; i<n; i++) {
        if (intervals[i][0] >= lastEnd) {
            count++;
            lastEnd = intervals[i][1];
        }
    }
    for(int i=0; i<n; i++) free(intervals[i]);
    free(intervals);
    return n - count;
}`,
      cpp: `#include <algorithm>
int eraseOverlapIntervals(vector<int>& start, vector<int>& end) {
    int n = start.size();
    if (n == 0) return 0;
    vector<pair<int, int>> intervals(n);
    for (int i=0; i<n; i++) intervals[i] = {start[i], end[i]};
    sort(intervals.begin(), intervals.end(), [](auto& a, auto& b){ return a.second < b.second; });
    int count = 1, lastEnd = intervals[0].second;
    for (int i=1; i<n; i++) {
        if (intervals[i].first >= lastEnd) {
            count++;
            lastEnd = intervals[i].second;
        }
    }
    return n - count;
}`
    }
  },
  {
    id: 'as-m2',
    solutions: {
      python: `def find_min_arrows(start, end):
    n = len(start)
    if n == 0: return 0
    balloons = sorted(zip(start, end), key=lambda x: x[1])
    arrows = 1
    last_end = balloons[0][1]
    for i in range(1, n):
        if balloons[i][0] > last_end:
            arrows += 1
            last_end = balloons[i][1]
    return arrows`,
      java: `    public static int findMinArrows(int[] start, int[] end) {
        int n = start.length;
        if (n == 0) return 0;
        int[][] balloons = new int[n][2];
        for (int i = 0; i < n; i++) { balloons[i][0] = start[i]; balloons[i][1] = end[i]; }
        Arrays.sort(balloons, (a, b) -> Integer.compare(a[1], b[1]));
        int arrows = 1, lastEnd = balloons[0][1];
        for (int i = 1; i < n; i++) {
            if (balloons[i][0] > lastEnd) {
                arrows++;
                lastEnd = balloons[i][1];
            }
        }
        return arrows;
    }`,
      c: `int cmp(const void* a, const void* b) { return ((int*)a)[1] - ((int*)b)[1]; }
int findMinArrows(int* start, int* end, int n) {
    if (n == 0) return 0;
    int** balloons = (int**)malloc(n * sizeof(int*));
    for (int i=0; i<n; i++) {
        balloons[i] = (int*)malloc(2 * sizeof(int));
        balloons[i][0] = start[i]; balloons[i][1] = end[i];
    }
    qsort(balloons, n, sizeof(int*), cmp);
    int arrows = 1, lastEnd = balloons[0][1];
    for (int i=1; i<n; i++) {
        if (balloons[i][0] > lastEnd) {
            arrows++;
            lastEnd = balloons[i][1];
        }
    }
    for(int i=0; i<n; i++) free(balloons[i]);
    free(balloons);
    return arrows;
}`,
      cpp: `#include <algorithm>
int findMinArrows(vector<int>& start, vector<int>& end) {
    int n = start.size();
    if (n == 0) return 0;
    vector<pair<int, int>> balloons(n);
    for (int i=0; i<n; i++) balloons[i] = {start[i], end[i]};
    sort(balloons.begin(), balloons.end(), [](auto& a, auto& b){ return a.second < b.second; });
    int arrows = 1, lastEnd = balloons[0].second;
    for (int i=1; i<n; i++) {
        if (balloons[i].first > lastEnd) {
            arrows++;
            lastEnd = balloons[i].second;
        }
    }
    return arrows;
}`
    }
  },
  {
    id: 'as-m3',
    solutions: {
      python: `def find_platform(arr, dep):
    arr.sort()
    dep.sort()
    n = len(arr)
    plat_needed = 1
    max_plat = 1
    i = 1
    j = 0
    while i < n and j < n:
        if arr[i] <= dep[j]:
            plat_needed += 1
            i += 1
        else:
            plat_needed -= 1
            j += 1
        if plat_needed > max_plat:
            max_plat = plat_needed
    return max_plat`,
      java: `    public static int findPlatform(int[] arr, int[] dep) {
        Arrays.sort(arr);
        Arrays.sort(dep);
        int n = arr.length;
        int platNeeded = 1, maxPlat = 1;
        int i = 1, j = 0;
        while(i < n && j < n) {
            if(arr[i] <= dep[j]) {
                platNeeded++; i++;
            } else {
                platNeeded--; j++;
            }
            if(platNeeded > maxPlat) maxPlat = platNeeded;
        }
        return maxPlat;
    }`,
      c: `int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }
int findPlatform(int* arr, int* dep, int n) {
    qsort(arr, n, sizeof(int), cmp);
    qsort(dep, n, sizeof(int), cmp);
    int platNeeded = 1, maxPlat = 1;
    int i = 1, j = 0;
    while (i < n && j < n) {
        if (arr[i] <= dep[j]) { platNeeded++; i++; }
        else { platNeeded--; j++; }
        if (platNeeded > maxPlat) maxPlat = platNeeded;
    }
    return maxPlat;
}`,
      cpp: `#include <algorithm>
int findPlatform(vector<int>& arr, vector<int>& dep) {
    sort(arr.begin(), arr.end());
    sort(dep.begin(), dep.end());
    int platNeeded = 1, maxPlat = 1;
    int i = 1, j = 0, n = arr.size();
    while (i < n && j < n) {
        if (arr[i] <= dep[j]) { platNeeded++; i++; }
        else { platNeeded--; j++; }
        if (platNeeded > maxPlat) maxPlat = platNeeded;
    }
    return maxPlat;
}`
    }
  },
  {
    id: 'as-m4',
    solutions: {
      python: `def can_jump(nums):
    farthest = 0
    for i in range(len(nums)):
        if i > farthest:
            return False
        farthest = max(farthest, i + nums[i])
    return True`,
      java: `    public static boolean canJump(int[] nums) {
        int farthest = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > farthest) return false;
            farthest = Math.max(farthest, i + nums[i]);
        }
        return true;
    }`,
      c: `bool canJump(int* nums, int n) {
    int farthest = 0;
    for (int i = 0; i < n; i++) {
        if (i > farthest) return false;
        if (i + nums[i] > farthest) farthest = i + nums[i];
    }
    return true;
}`,
      cpp: `#include <algorithm>
bool canJump(vector<int>& nums) {
    int farthest = 0;
    for (int i = 0; i < nums.size(); i++) {
        if (i > farthest) return false;
        farthest = max(farthest, i + nums[i]);
    }
    return true;
}`
    }
  },
  {
    id: 'as-m5',
    solutions: {
      python: `def least_interval(tasks, k):
    counts = [0] * 26
    for t in tasks:
        counts[ord(t) - ord('A')] += 1
    counts.sort()
    max_val = counts[25] - 1
    idle_slots = max_val * k
    for i in range(24, -1, -1):
        idle_slots -= min(counts[i], max_val)
    return idle_slots + len(tasks) if idle_slots > 0 else len(tasks)`,
      java: `    public static int leastInterval(char[] tasks, int k) {
        int[] counts = new int[26];
        for (char t : tasks) counts[t - 'A']++;
        Arrays.sort(counts);
        int maxVal = counts[25] - 1;
        int idleSlots = maxVal * k;
        for (int i = 24; i >= 0 && counts[i] > 0; i--) {
            idleSlots -= Math.min(counts[i], maxVal);
        }
        return idleSlots > 0 ? idleSlots + tasks.length : tasks.length;
    }`,
      c: `int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }
int leastInterval(char* tasks, int n, int k) {
    int counts[26] = {0};
    for (int i = 0; i < n; i++) counts[tasks[i] - 'A']++;
    qsort(counts, 26, sizeof(int), cmp);
    int maxVal = counts[25] - 1;
    int idleSlots = maxVal * k;
    for (int i = 24; i >= 0 && counts[i] > 0; i--) {
        int min_val = counts[i] < maxVal ? counts[i] : maxVal;
        idleSlots -= min_val;
    }
    return idleSlots > 0 ? idleSlots + n : n;
}`,
      cpp: `#include <algorithm>
int leastInterval(vector<char>& tasks, int k) {
    vector<int> counts(26, 0);
    for (char t : tasks) counts[t - 'A']++;
    sort(counts.begin(), counts.end());
    int maxVal = counts[25] - 1;
    int idleSlots = maxVal * k;
    for (int i = 24; i >= 0 && counts[i] > 0; i--) {
        idleSlots -= min(counts[i], maxVal);
    }
    return idleSlots > 0 ? idleSlots + tasks.size() : tasks.size();
}`
    }
  },

  // --- HARD SOLUTIONS ---
  {
    id: 'as-h1',
    solutions: {
      python: `import heapq
def min_meeting_rooms(start, end):
    if not start: return 0
    intervals = sorted(zip(start, end))
    rooms = []
    heapq.heappush(rooms, intervals[0][1])
    for i in range(1, len(intervals)):
        if intervals[i][0] >= rooms[0]:
            heapq.heappop(rooms)
        heapq.heappush(rooms, intervals[i][1])
    return len(rooms)`,
      java: `    public static int minMeetingRooms(int[] start, int[] end) {
        if (start.length == 0) return 0;
        int n = start.length;
        int[][] intervals = new int[n][2];
        for (int i = 0; i < n; i++) { intervals[i][0] = start[i]; intervals[i][1] = end[i]; }
        Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
        PriorityQueue<Integer> allocator = new PriorityQueue<>(n);
        allocator.add(intervals[0][1]);
        for (int i = 1; i < n; i++) {
            if (intervals[i][0] >= allocator.peek()) {
                allocator.poll();
            }
            allocator.add(intervals[i][1]);
        }
        return allocator.size();
    }`,
      c: `int cmp(const void* a, const void* b) { return *(int*)a - *(int*)b; }
int minMeetingRooms(int* start, int* end, int n) {
    qsort(start, n, sizeof(int), cmp);
    qsort(end, n, sizeof(int), cmp);
    int s_ptr = 0, e_ptr = 0, rooms = 0;
    while(s_ptr < n) {
        if(start[s_ptr] >= end[e_ptr]) { rooms--; e_ptr++; }
        rooms++; s_ptr++;
    }
    return rooms;
}`,
      cpp: `#include <algorithm>
#include <queue>
int minMeetingRooms(vector<int>& start, vector<int>& end) {
    if (start.empty()) return 0;
    int n = start.size();
    vector<pair<int, int>> intervals(n);
    for (int i=0; i<n; i++) intervals[i] = {start[i], end[i]};
    sort(intervals.begin(), intervals.end());
    priority_queue<int, vector<int>, greater<int>> pq;
    pq.push(intervals[0].second);
    for (int i = 1; i < n; i++) {
        if (intervals[i].first >= pq.top()) {
            pq.pop();
        }
        pq.push(intervals[i].second);
    }
    return pq.size();
}`
    }
  },
  {
    id: 'as-h2',
    solutions: {
      python: `def min_taps(n, ranges):
    max_reach = [0] * (n + 1)
    for i in range(len(ranges)):
        left = max(0, i - ranges[i])
        right = min(n, i + ranges[i])
        max_reach[left] = max(max_reach[left], right)
    taps = curr_end = farthest = 0
    for i in range(n):
        farthest = max(farthest, max_reach[i])
        if i == curr_end:
            taps += 1
            curr_end = farthest
            if curr_end >= n: return taps
    return taps if curr_end >= n else -1`,
      java: `    public static int minTaps(int n, int[] ranges) {
        int[] maxReach = new int[n + 1];
        for (int i = 0; i <= n; i++) {
            int left = Math.max(0, i - ranges[i]);
            int right = Math.min(n, i + ranges[i]);
            maxReach[left] = Math.max(maxReach[left], right);
        }
        int taps = 0, currEnd = 0, farthest = 0;
        for (int i = 0; i < n; i++) {
            farthest = Math.max(farthest, maxReach[i]);
            if (i == currEnd) {
                taps++;
                currEnd = farthest;
                if (currEnd >= n) return taps;
            }
        }
        return currEnd >= n ? taps : -1;
    }`,
      c: `int minTaps(int n, int* ranges, int rangesSize) {
    int* maxReach = (int*)calloc(n + 1, sizeof(int));
    for (int i = 0; i <= n; i++) {
        int left = i - ranges[i] > 0 ? i - ranges[i] : 0;
        int right = i + ranges[i] < n ? i + ranges[i] : n;
        if (right > maxReach[left]) maxReach[left] = right;
    }
    int taps = 0, currEnd = 0, farthest = 0;
    for (int i = 0; i < n; i++) {
        if (maxReach[i] > farthest) farthest = maxReach[i];
        if (i == currEnd) {
            taps++;
            currEnd = farthest;
            if (currEnd >= n) { free(maxReach); return taps; }
        }
    }
    free(maxReach);
    return currEnd >= n ? taps : -1;
}`,
      cpp: `#include <algorithm>
int minTaps(int n, vector<int>& ranges) {
    vector<int> maxReach(n + 1, 0);
    for (int i = 0; i <= n; i++) {
        int left = max(0, i - ranges[i]);
        int right = min(n, i + ranges[i]);
        maxReach[left] = max(maxReach[left], right);
    }
    int taps = 0, currEnd = 0, farthest = 0;
    for (int i = 0; i < n; i++) {
        farthest = max(farthest, maxReach[i]);
        if (i == currEnd) {
            taps++;
            currEnd = farthest;
            if (currEnd >= n) return taps;
        }
    }
    return currEnd >= n ? taps : -1;
}`
    }
  },
  {
    id: 'as-h3',
    solutions: {
      python: `def video_stitching(start, end, time):
    n = len(start)
    max_reach = [0] * 101
    for i in range(n):
        if start[i] <= time:
            max_reach[start[i]] = max(max_reach[start[i]], end[i])
    taps = curr_end = farthest = 0
    for i in range(time):
        farthest = max(farthest, max_reach[i])
        if i == curr_end:
            if farthest <= i: return -1
            taps += 1
            curr_end = farthest
            if curr_end >= time: return taps
    return -1`,
      java: `    public static int videoStitching(int[] start, int[] end, int time) {
        int[] maxReach = new int[101];
        for (int i = 0; i < start.length; i++) {
            if (start[i] <= time) {
                maxReach[start[i]] = Math.max(maxReach[start[i]], end[i]);
            }
        }
        int taps = 0, currEnd = 0, farthest = 0;
        for (int i = 0; i < time; i++) {
            farthest = Math.max(farthest, maxReach[i]);
            if (i == currEnd) {
                if (farthest <= i) return -1;
                taps++;
                currEnd = farthest;
                if (currEnd >= time) return taps;
            }
        }
        return -1;
    }`,
      c: `int videoStitching(int* start, int* end, int n, int time) {
    int maxReach[101] = {0};
    for(int i = 0; i < n; i++) {
        if(start[i] <= time && end[i] > maxReach[start[i]]) {
            maxReach[start[i]] = end[i];
        }
    }
    int taps = 0, currEnd = 0, farthest = 0;
    for(int i = 0; i < time; i++) {
        if(maxReach[i] > farthest) farthest = maxReach[i];
        if(i == currEnd) {
            if(farthest <= i) return -1;
            taps++;
            currEnd = farthest;
            if(currEnd >= time) return taps;
        }
    }
    return -1;
}`,
      cpp: `#include <algorithm>
int videoStitching(vector<int>& start, vector<int>& end, int time) {
    vector<int> maxReach(101, 0);
    for(int i = 0; i < start.size(); i++) {
        if(start[i] <= time) maxReach[start[i]] = max(maxReach[start[i]], end[i]);
    }
    int taps = 0, currEnd = 0, farthest = 0;
    for(int i = 0; i < time; i++) {
        farthest = max(farthest, maxReach[i]);
        if(i == currEnd) {
            if(farthest <= i) return -1;
            taps++;
            currEnd = farthest;
            if(currEnd >= time) return taps;
        }
    }
    return -1;
}`
    }
  },
  {
    id: 'as-h4',
    solutions: {
      python: `def jump(nums):
    jumps = curr_end = farthest = 0
    for i in range(len(nums) - 1):
        farthest = max(farthest, i + nums[i])
        if i == curr_end:
            jumps += 1
            curr_end = farthest
    return jumps`,
      java: `    public static int jump(int[] nums) {
        int jumps = 0, currEnd = 0, farthest = 0;
        for (int i = 0; i < nums.length - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);
            if (i == currEnd) {
                jumps++;
                currEnd = farthest;
            }
        }
        return jumps;
    }`,
      c: `int jump(int* nums, int n) {
    int jumps = 0, currEnd = 0, farthest = 0;
    for (int i = 0; i < n - 1; i++) {
        if (i + nums[i] > farthest) farthest = i + nums[i];
        if (i == currEnd) {
            jumps++;
            currEnd = farthest;
        }
    }
    return jumps;
}`,
      cpp: `#include <algorithm>
int jump(vector<int>& nums) {
    int jumps = 0, currEnd = 0, farthest = 0;
    for (int i = 0; i < nums.size() - 1; i++) {
        farthest = max(farthest, i + nums[i]);
        if (i == currEnd) {
            jumps++;
            currEnd = farthest;
        }
    }
    return jumps;
}`
    }
  },
  {
    id: 'as-h5',
    solutions: {
      python: `import bisect
def job_scheduling(start, end, profit):
    jobs = sorted(zip(start, end, profit), key=lambda x: x[1])
    dp = [[0, 0]]
    for s, e, p in jobs:
        i = bisect.bisect_right(dp, [s + 1]) - 1
        if dp[i][1] + p > dp[-1][1]:
            dp.append([e, dp[i][1] + p])
    return dp[-1][1]`,
      java: `    public static int jobScheduling(int[] start, int[] end, int[] profit) {
        int n = start.length;
        int[][] jobs = new int[n][3];
        for(int i = 0; i < n; i++) { jobs[i] = new int[] {start[i], end[i], profit[i]}; }
        Arrays.sort(jobs, (a, b) -> Integer.compare(a[1], b[1]));
        TreeMap<Integer, Integer> dp = new TreeMap<>();
        dp.put(0, 0);
        for(int[] job : jobs) {
            int cur = dp.floorEntry(job[0]).getValue() + job[2];
            if(cur > dp.lastEntry().getValue()) {
                dp.put(job[1], cur);
            }
        }
        return dp.lastEntry().getValue();
    }`,
      c: `typedef struct { int s, e, p; } Job;
int cmp(const void* a, const void* b) { return ((Job*)a)->e - ((Job*)b)->e; }
int jobScheduling(int* start, int* end, int* profit, int n) {
    Job* jobs = (Job*)malloc(n * sizeof(Job));
    for(int i = 0; i < n; i++) { jobs[i].s = start[i]; jobs[i].e = end[i]; jobs[i].p = profit[i]; }
    qsort(jobs, n, sizeof(Job), cmp);
    int* dp = (int*)calloc(n, sizeof(int));
    dp[0] = jobs[0].p;
    for(int i = 1; i < n; i++) {
        int incl = jobs[i].p;
        int l = 0, r = i - 1, idx = -1;
        while(l <= r) {
            int m = l + (r - l) / 2;
            if(jobs[m].e <= jobs[i].s) { idx = m; l = m + 1; }
            else { r = m - 1; }
        }
        if(idx != -1) incl += dp[idx];
        dp[i] = incl > dp[i-1] ? incl : dp[i-1];
    }
    int res = dp[n-1];
    free(jobs); free(dp);
    return res;
}`,
      cpp: `#include <algorithm>
#include <map>
int jobScheduling(vector<int>& start, vector<int>& end, vector<int>& profit) {
    int n = start.size();
    vector<vector<int>> jobs(n);
    for (int i = 0; i < n; i++) { jobs[i] = {start[i], end[i], profit[i]}; }
    sort(jobs.begin(), jobs.end(), [](auto& a, auto& b){ return a[1] < b[1]; });
    map<int, int> dp;
    dp[0] = 0;
    for (auto& job : jobs) {
        int cur = prev(dp.upper_bound(job[0]))->second + job[2];
        if (cur > dp.rbegin()->second) {
            dp[job[1]] = cur;
        }
    }
    return dp.rbegin()->second;
}`
    }
  }
];